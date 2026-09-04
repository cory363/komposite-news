/**
 * Backfill NewsArticle image + publisher logo, and og:image / twitter:image,
 * on articles that predate the current template.
 *
 * Image dimensions are looked up in bulk from the Commons API rather than
 * assumed, so the ImageObject states the size actually served at width=800
 * instead of repeating the 16:9 display box the CSS crops to.
 */
import fs from "node:fs";
import path from "node:path";
import { SITE } from "./lib-template.mjs";

const SKIP = new Set([".git", "node_modules", "tools", "assets"]);
function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p, out) : (e.name === "index.html" && out.push(p));
  }
  return out;
}
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const files = walk(".").filter(f => f.split("/").length === 3 && !/^(authors|tag)\//.test(f));
const targets = [];
for (const f of files) {
  const h = fs.readFileSync(f, "utf8");
  if (!h.includes('"@type":"NewsArticle"')) continue;
  if (/"image":/.test(h) && /"logo":/.test(h)) continue;          // already current
  const artStart = h.indexOf('<article class="art"');
  const artEnd = h.indexOf('<div class="artbody">');
  const region = artStart > -1 && artEnd > artStart ? h.slice(artStart, artEnd) : "";
  const src = (region.match(/<img\b[^>]*\ssrc="([^"]*)"/) || [])[1];
  targets.push({ f, src });
}
console.log(`articles needing backfill: ${targets.length} (${targets.filter(t => !t.src).length} with no hero image)`);

// Bulk dimension lookup for Commons files, 40 titles per request.
const commons = [...new Set(targets.filter(t => t.src?.includes("commons.wikimedia.org"))
  .map(t => decodeURIComponent(t.src.split("Special:FilePath/")[1].split("?")[0])))];
const dims = {};
for (let i = 0; i < commons.length; i += 40) {
  const batch = commons.slice(i, i + 40);
  const u = "https://commons.wikimedia.org/w/api.php?" + new URLSearchParams({
    action: "query", format: "json", prop: "imageinfo", iiprop: "size",
    titles: batch.map(t => "File:" + t).join("|"),
  });
  const r = await fetch(u, { headers: { "User-Agent": "KompositeNews/1.0 (editorial)" } });
  const j = await r.json();
  for (const p of Object.values(j?.query?.pages || {})) {
    const ii = p.imageinfo?.[0]; if (!ii) continue;
    dims[p.title.replace(/^File:/, "").replace(/ /g, "_")] = { w: ii.width, h: ii.height };
  }
}
console.log(`dimensions resolved for ${Object.keys(dims).length} / ${commons.length} Commons files`);

const LOGO = `{"@type":"ImageObject","url":"${SITE}/assets/img/komposite-logo.png","width":1200,"height":1200}`;
let done = 0, noImg = 0;
for (const { f, src } of targets) {
  let h = fs.readFileSync(f, "utf8");
  if (src) {
    const name = src.includes("Special:FilePath/")
      ? decodeURIComponent(src.split("Special:FilePath/")[1].split("?")[0]).replace(/ /g, "_") : null;
    const d = name && dims[name];
    const height = d ? Math.round(800 * d.h / d.w) : null;
    const img = `"image":{"@type":"ImageObject","url":"${src.replace(/&/g, "&amp;")}"${height ? `,"width":800,"height":${height}` : ""}},`;
    if (!/"image":/.test(h)) h = h.replace(/"dateModified":"([^"]+)",/, `"dateModified":"$1",${img}`);
    if (!/property="og:image"/.test(h))
      h = h.replace(/(<meta property="og:type" content="article">)/, `$1<meta property="og:image" content="${esc(src)}">`);
    if (!/name="twitter:image"/.test(h))
      h = h.replace(/(<meta name="twitter:card" content=")summary("[^>]*>)/, `$1summary_large_image$2`)
           .replace(/(<meta name="twitter:title"[^>]*>)/, `$1<meta name="twitter:image" content="${esc(src)}">`);
  } else noImg++;
  if (!/"logo":/.test(h))
    h = h.replace(/("publisher":\{"@type":"NewsMediaOrganization","name":"Komposite News","url":"[^"]*")\}/, `$1,"logo":${LOGO}}`);
  fs.writeFileSync(f, h); done++;
}
console.log(`backfilled ${done} articles (${noImg} had no hero image, so no ImageObject added)`);
