/**
 * Rebuild rss.xml from the published pages.
 *
 * The old feed carried 54 of the site's articles and no images. This reads
 * every article page on disk, so the feed cannot drift from what is published,
 * and follows the element set the FT feed uses: a media:thumbnail per item,
 * plus generator, lastBuildDate, an atom self link, copyright and a per-item
 * category. No ttl, by request.
 */
import fs from "node:fs";
import path from "node:path";
import { SITE, esc } from "./lib-template.mjs";

const SKIP = new Set(["assets", "tag", "authors", "latest", "search", "tools", ".git", "node_modules"]);
function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (d === "." && SKIP.has(e.name)) continue;
    if (e.name === ".git" || e.name === "node_modules") continue;
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p, out) : (e.name === "index.html" && out.push(p));
  }
  return out;
}

/** Six Divide pieces carry no articleSection, so the directory needs a label. */
const SECTION_LABEL = { divide: "The Divide", "the-divide": "The Divide", recipes: "Recipes", opinion: "Opinion" };

const grab = (h, re) => { const m = h.match(re); return m ? m[1] : null; };

const items = [];
for (const f of walk(".")) {
  const depth = f.split("/").length;           // section/slug/index.html
  if (depth !== 3) continue;                    // skip section indexes and root pages
  const h = fs.readFileSync(f, "utf8");
  const canonical = grab(h, /rel="canonical" href="([^"]*)"/);
  if (!canonical) continue;
  const ld = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map(m => { try { return JSON.parse(m[1]); } catch { return null; } })
    .find(o => o && o["@type"] === "NewsArticle");
  const title = grab(h, /<h1[^>]*>([\s\S]*?)<\/h1>/) || grab(h, /<title>([\s\S]*?)<\/title>/);
  const desc = grab(h, /name="description" content="([^"]*)"/) || "";
  const date = ld?.datePublished || grab(h, /"datePublished":"([^"]+)"/);
  if (!title || !date) continue;
  const section = ld?.articleSection
    || grab(h, /<li[^>]*>[\s\S]*?<\/li>/, ) // unused fallback
    || f.split("/")[0];
  // Fall back to the first image inside the article itself. Some older pages
  // carry a style attribute between class and src, so match the tag loosely.
  const artStart = h.indexOf('<article class="art"');
  const artEnd = h.indexOf('<div class="artbody">');
  const region = artStart > -1 && artEnd > artStart ? h.slice(artStart, artEnd) : "";
  const img = grab(h, /property="og:image" content="([^"]*)"/)
    || grab(region, /<img\b[^>]*\ssrc="([^"]*)"/);
    const dir = f.split("/")[0];
  items.push({ title, link: canonical, desc, date, section: ld?.articleSection || SECTION_LABEL[dir] || dir.charAt(0).toUpperCase() + dir.slice(1), img });
}

items.sort((a, b) => b.date.localeCompare(a.date));

const now = new Date().toUTCString();
const head = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/"><channel><title>Komposite News</title><link>${SITE}</link><description>Komposite News covers artificial intelligence, blockchain, digital assets, enterprise technology and capital markets for executives, investors and builders.</description><language>en-us</language><generator>Komposite News static publishing tools</generator><lastBuildDate>${now}</lastBuildDate><atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml"/><copyright>&#169; 2026 Komposite News. All rights reserved.</copyright>`;

const body = items.map(i => {
  const cat = i.section ? `<category>${esc(i.section)}</category>` : "";
  const thumb = i.img ? `<media:thumbnail url="${esc(i.img)}"/>` : "";
  return `<item><title>${esc(i.title)}</title><link>${i.link}</link><guid isPermaLink="true">${i.link}</guid><pubDate>${new Date(i.date).toUTCString()}</pubDate><description>${esc(i.desc)}</description>${cat}${thumb}</item>`;
}).join("");

fs.writeFileSync("rss.xml", head + body + "</channel></rss>\n");
console.log(`rss.xml rebuilt: ${items.length} items`);
console.log(`  with images:   ${items.filter(i => i.img).length}`);
console.log(`  with category: ${items.filter(i => i.section).length}`);
const noCat = items.filter(i => !i.section).map(i => i.link);
if (noCat.length) console.log("  missing category: " + noCat.slice(0, 5).join(", "));
