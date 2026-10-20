/**
 * Regenerate sitemap.xml, news-sitemap.xml and sitemap-index.xml.
 *
 * Every URL carries a lastmod. Articles use dateModified (else datePublished);
 * standing pages use their last git commit date. The news sitemap follows Google's
 * schema and holds only articles published in the last 48 hours, which is the
 * window Google News reads — a news sitemap listing everything is ignored.
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { SITE } from "./lib-template.mjs";

/* Standing pages (sections, about, authors) take the date of the last commit
   that touched them: file mtimes reset on every checkout and would stamp the
   whole site "today". An uncommitted page falls back to its mtime. */
const gitDate = new Map();
try {
  let cur = null;
  for (const line of execSync("git log --format=@%cs --name-only -- '*.html'", { encoding: "utf8", maxBuffer: 1 << 28 }).split("\n")) {
    if (line.startsWith("@")) cur = line.slice(1);
    else if (line && !gitDate.has(line)) gitDate.set(line, cur);
  }
} catch {}
const dirty = new Set();
try { for (const l of execSync("git status --porcelain", { encoding: "utf8" }).split("\n")) if (l) dirty.add(l.slice(3)); } catch {}
const standingDate = f => { const r = f.replace(/^\.\//, ""); return (!dirty.has(r) && gitDate.get(r)) || fs.statSync(f).mtime.toISOString(); };

const SKIP = new Set([".git", "node_modules", "tools"]);
function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p, out) : (e.name === "index.html" && out.push(p));
  }
  return out;
}
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

/* The tip confirmation page is noindex and reachable only after a POST,
   so it does not belong in the sitemap or the orphan audit. */
const pages = walk(".").filter(f => !/^(saved|tips\/thanks|subscribe\/thanks|contact\/thanks)\//.test(f.replace(/^\.\//, "")))
  /* Any page that declares itself noindex (e.g. ai/pipeline-test-article) stays out of the sitemap. */
  .filter(f => !/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(fs.readFileSync(f, "utf8"))).map(f => {
  const h = fs.readFileSync(f, "utf8");
  const loc = SITE + "/" + f.replace(/^\.\//, "").replace(/index\.html$/, "");
  const pub = (h.match(/"datePublished":"([^"]+)"/) || [])[1];
  /* lastmod is the last real change: dateModified when the article has one. */
  const mod = (h.match(/"dateModified":"([^"]+)"/) || [])[1];
  const isArticle = f.split("/").length === 3 && !/^(authors|tag)\//.test(f);
  return {
    loc, isArticle,
    lastmod: (mod || pub || standingDate(f)).slice(0, 10),
    pub,
    title: ((h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || "").replace(/<[^>]*>/g, ""),
    keywords: (h.match(/"keywords":"([^"]*)"/) || [])[1] || "",
  };
}).sort((a, b) => a.loc.localeCompare(b.loc));

fs.writeFileSync("sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
  pages.map(p => `<url><loc>${p.loc}</loc><lastmod>${p.lastmod}</lastmod></url>`).join("") +
  `</urlset>\n`);

// Google reads the last two days from a news sitemap.
const cutoff = Date.now() - 1000 * 60 * 60 * 48;
const recent = pages.filter(p => p.isArticle && p.pub && new Date(p.pub).getTime() >= cutoff)
                    .sort((a, b) => b.pub.localeCompare(a.pub));
fs.writeFileSync("news-sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">` +
  recent.map(p => `<url><loc>${p.loc}</loc><news:news><news:publication><news:name>Komposite News</news:name><news:language>en</news:language></news:publication><news:publication_date>${p.pub}</news:publication_date><news:title>${esc(p.title)}</news:title>${p.keywords ? `<news:keywords>${esc(p.keywords)}</news:keywords>` : ""}</news:news></url>`).join("") +
  `</urlset>\n`);

const now = new Date().toISOString();
fs.writeFileSync("sitemap-index.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
  `<sitemap><loc>${SITE}/sitemap.xml</loc><lastmod>${now}</lastmod></sitemap>` +
  `<sitemap><loc>${SITE}/news-sitemap.xml</loc><lastmod>${now}</lastmod></sitemap>` +
  `</sitemapindex>\n`);

console.log(`sitemap.xml:       ${pages.length} urls, all with lastmod`);
console.log(`news-sitemap.xml:  ${recent.length} articles from the last 48 hours`);
recent.slice(0, 5).forEach(p => console.log("   " + p.pub.slice(0, 16) + "  " + p.title.slice(0, 52)));
console.log(`sitemap-index.xml: 2 sitemaps`);
