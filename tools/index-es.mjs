/* The Spanish edition shipped with sitemap entries but no search entries, so
   nothing under /es/ could be found from the site's own search box. This adds
   them in the same shape the English wire writes, reading each page rather
   than a record, because the Spanish articles were built by the translation
   pass and have no batch file behind them. */
import fs from "node:fs";
import path from "node:path";

const walk = (d, o = []) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) {
  const p = path.join(d, e.name);
  e.isDirectory() ? walk(p, o) : (e.name === "index.html" && o.push(p)); } return o; };

const strip = s => String(s).replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&#39;/g, "'")
  .replace(/&quot;/g, '"').replace(/&mdash;/g, "—").replace(/\s+/g, " ").trim();

const p = "search-index.json";
const idx = JSON.parse(fs.readFileSync(p, "utf8"));
const arr = Array.isArray(idx) ? idx : idx.items;
const have = new Set(arr.map(e => e.u));

let added = 0;
for (const f of walk("es")) {
  const url = "/" + f.replace(/index\.html$/, "");
  if (have.has(url)) continue;
  const h = fs.readFileSync(f, "utf8");
  if (!/"@type":"NewsArticle"/.test(h)) continue;
  const g = re => { const m = h.match(re); return m ? m[1] : ""; };
  const body = (h.match(/<div class="artbody">([\s\S]*?)<\/div>/) || ["", ""])[1];
  arr.push({
    u: url,
    h: strip(g(/<h1[^>]*>([\s\S]*?)<\/h1>/)),
    d: strip(g(/<p class="artdeck">([\s\S]*?)<\/p>/)),
    c: strip(g(/"articleSection":"([^"]*)"/)),
    t: [...h.matchAll(/href="\/tag\/([a-z0-9-]+)\/"/g)].map(m => m[1]),
    au: strip(g(/"author":\{"@type":"Person","name":"([^"]*)"/)),
    p: g(/"datePublished":"([^"]*)"/),
    x: strip(body).slice(0, 600),
  });
  added++;
}
arr.sort((a, b) => String(b.p).localeCompare(String(a.p)));
fs.writeFileSync(p, JSON.stringify(idx));
console.log(`  Spanish articles added to the search index: ${added}  (index now ${arr.length})`);
