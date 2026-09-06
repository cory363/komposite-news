/**
 * Regenerate sitemap.xml, news-sitemap.xml and sitemap-index.xml.
 *
 * Every URL carries a lastmod. Articles use their publication date; standing
 * pages use the file's modification time. The news sitemap follows Google's
 * schema and holds only articles published in the last 48 hours, which is the
 * window Google News reads — a news sitemap listing everything is ignored.
 */
import fs from "node:fs";
import path from "node:path";
import { SITE } from "./lib-template.mjs";

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

const pages = walk(".").filter(f => !/^saved\//.test(f.replace(/^\.\//, ""))).map(f => {
  const h = fs.readFileSync(f, "utf8");
  const loc = SITE + "/" + f.replace(/^\.\//, "").replace(/index\.html$/, "");
  const pub = (h.match(/"datePublished":"([^"]+)"/) || [])[1];
  const isArticle = f.split("/").length === 3 && !/^(authors|tag)\//.test(f);
  return {
    loc, isArticle,
    lastmod: (pub || fs.statSync(f).mtime.toISOString()).slice(0, 10),
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
