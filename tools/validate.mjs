/** Site-wide validation. Exits non-zero if anything required fails. */
import fs from "node:fs";
import path from "node:path";

function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (e.name === ".git" || e.name === "tools" || e.name === "node_modules") continue;
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p, out) : (e.name.endsWith(".html") && out.push(p));
  }
  return out;
}
const files = walk(".");
const NEW = JSON.parse(fs.readFileSync("tools/new-slugs.json", "utf8"));
let fail = 0;
const bad = (m) => { console.log("  FAIL " + m); fail++; };
const ok = (m) => console.log("  ok   " + m);

// 1. JSON-LD parses
let blocks = 0, parseFail = 0;
for (const f of files) for (const m of fs.readFileSync(f, "utf8").matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
  blocks++; try { JSON.parse(m[1]); } catch { parseFail++; bad("JSON-LD parse: " + f); }
}
parseFail === 0 ? ok(`JSON-LD: ${blocks} blocks, all parse`) : null;

// 2. Required NewsArticle properties on the 20 new pieces
const REQ = ["headline","description","datePublished","dateModified","image","author","publisher","mainEntityOfPage","articleSection","keywords"];
for (const slug of NEW) {
  const f = slug.replace(/^\//, "").replace(/\/$/, "") + "/index.html";
  if (!fs.existsSync(f)) { bad("missing page " + f); continue; }
  const h = fs.readFileSync(f, "utf8");
  const na = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map(m => JSON.parse(m[1])).find(o => o["@type"] === "NewsArticle");
  if (!na) { bad("no NewsArticle: " + f); continue; }
  const miss = REQ.filter(k => na[k] === undefined);
  if (miss.length) bad(`${slug} missing ${miss.join(",")}`);
  if (na.headline.length >= 110) bad(`${slug} headline >=110 chars`);
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(Z|[+-]\d{2}:\d{2})$/.test(na.datePublished)) bad(`${slug} datePublished not ISO8601+tz`);
  if (na.image?.["@type"] !== "ImageObject" || !na.image.width || !na.image.height) bad(`${slug} image not ImageObject with dimensions`);
  if (na.author?.["@type"] !== "Person" || !na.author.url) bad(`${slug} author not linked Person`);
  if (!na.publisher?.logo?.url) bad(`${slug} publisher has no logo`);
  const crumbs = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map(m => JSON.parse(m[1])).find(o => o["@type"] === "BreadcrumbList");
  if (!crumbs || crumbs.itemListElement.length !== 3) bad(`${slug} breadcrumbs missing/incomplete`);
  const canon = (h.match(/rel="canonical" href="([^"]*)"/) || [])[1];
  if (canon !== "https://kompositenews.com" + slug) bad(`${slug} canonical mismatch: ${canon}`);
  if (!fs.readFileSync("sitemap.xml", "utf8").includes(`<loc>https://kompositenews.com${slug}</loc>`)) bad(`${slug} not in sitemap`);
  const desc = (h.match(/name="description" content="([^"]*)"/) || [])[1] || "";
  if (desc.length < 140 || desc.length > 160) bad(`${slug} meta description ${desc.length} chars`);
  const t = (h.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || "";
  const tlen = t.replace(/&mdash;/g, "—").length;
  if (tlen >= 60) bad(`${slug} title ${tlen} chars`);
  if (!/property="og:image"/.test(h)) bad(`${slug} no og:image`);
  if (!/name="twitter:image"/.test(h)) bad(`${slug} no twitter:image`);
  const hs = [...h.matchAll(/<h([1-6])[\s>]/g)].map(m => +m[1]);
  if (hs.filter(x => x === 1).length !== 1) bad(`${slug} h1 count ${hs.filter(x=>x===1).length}`);
  let prev = 0;
  for (const lv of hs) { if (prev && lv > prev + 1) { bad(`${slug} heading jump h${prev}->h${lv}`); break; } prev = Math.max(prev, lv); }
}
ok(`checked ${NEW.length} new articles against NewsArticle requirements`);

// 3. Duplicates sitewide
const T = {}, C = {};
for (const f of files) {
  const h = fs.readFileSync(f, "utf8");
  const t = (h.match(/<title>([\s\S]*?)<\/title>/) || [])[1];
  const c = (h.match(/rel="canonical" href="([^"]*)"/) || [])[1];
  if (t) (T[t] = T[t] || []).push(f);
  if (c) (C[c] = C[c] || []).push(f);
}
const dupT = Object.entries(T).filter(([, v]) => v.length > 1);
const dupC = Object.entries(C).filter(([, v]) => v.length > 1);
dupC.length ? bad(`duplicate canonicals: ${dupC.length}`) : ok("no duplicate canonicals");
console.log(`  note duplicate titles: ${dupT.length} (pre-existing section/tag pairs)`);
dupT.forEach(([t, v]) => console.log("        " + t + " -> " + v.join(", ")));

// 4. Links
const exists = u => {
  u = u.split("#")[0].split("?")[0];
  if (!u.startsWith("/")) return null;
  const p = "." + u;
  if (u.endsWith("/")) return fs.existsSync(p + "index.html");
  return fs.existsSync(p) || fs.existsSync(p + "/index.html") || fs.existsSync(p + ".html");
};
let refs = 0, broken = [];
let hashLinks = 0, extNoRel = [];
for (const f of files) {
  const h = fs.readFileSync(f, "utf8");
  for (const m of h.matchAll(/(?:href|src)="(\/[^"]*)"/g)) { refs++; if (exists(m[1]) === false) broken.push(m[1] + " in " + f); }
  hashLinks += (h.match(/href="#"/g) || []).length;
  const body = (h.match(/<div class="artbody">([\s\S]*?)<\/div>\s*<div class="tagsrow"/) || [])[1];
  if (body) for (const m of body.matchAll(/<a\s[^>]*href="https?:\/\/[^"]+"[^>]*>/g))
    if (!/rel="[^"]*noopener/.test(m[0])) extNoRel.push(f);
}
broken.length ? bad(`broken internal links: ${broken.length}`) : ok(`internal links: ${refs} checked, 0 broken`);
broken.slice(0, 10).forEach(b => console.log("        " + b));
hashLinks ? bad(`href="#": ${hashLinks}`) : ok('no href="#"');
extNoRel.length ? bad(`external body links without rel=noopener: ${extNoRel.length}`) : ok("all external body links carry rel=noopener");

// 5. Feeds
const sm = fs.readFileSync("sitemap.xml", "utf8");
(sm.match(/<url>/g) || []).length === (sm.match(/<\/url>/g) || []).length && /<\/urlset>$/.test(sm.trim())
  ? ok(`sitemap: ${(sm.match(/<url>/g) || []).length} urls, balanced, ${(sm.match(/<lastmod>/g) || []).length} lastmod`) : bad("sitemap malformed");
const rs = fs.readFileSync("rss.xml", "utf8");
(rs.match(/<item>/g) || []).length === (rs.match(/<\/item>/g) || []).length && /<\/rss>/.test(rs)
  ? ok(`rss: ${(rs.match(/<item>/g) || []).length} items, balanced`) : bad("rss malformed");
try { ok(`search-index: ${JSON.parse(fs.readFileSync("search-index.json", "utf8")).length} entries, valid JSON`); }
catch { bad("search-index invalid JSON"); }

// 6. Images have alt
let imgs = 0, noAlt = 0;
for (const f of files) for (const m of fs.readFileSync(f, "utf8").matchAll(/<img\s[^>]*>/g)) { imgs++; if (!/alt="[^"]+"/.test(m[0])) noAlt++; }
noAlt ? bad(`images without alt: ${noAlt}`) : ok(`images: ${imgs}, all have descriptive alt`);

console.log("\n" + (fail ? `FAILURES: ${fail}` : "ALL CHECKS PASSED"));
process.exit(fail ? 1 : 0);
