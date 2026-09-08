/* Build a visual candidate pool for one beat, download thumbnails and emit a
   contact sheet. Filenames alone are not enough to judge a photo — that is how
   a JWST mirror and a crucifix got picked last time. */
import fs from "node:fs";
const UA = "KompositeNews/1.0 (https://kompositenews.com; cory@acepr.us)";
const BAD = /(diagram|chart|graph|logo|icon|map\b|svg|plot|schema|infographic|coat.of.arms|seal|flag.of|poster|screenshot|drawing|painting|illustration|sketch|clipart|banner|emblem|barcode|qr.code|font|typeface|symbol|engraving|postcard|stereograph|lithograph|negative|woodcut|18\d\d|19[0-5]\d|LC-|Library.of.Congress|book|page.from|plaque|stamp|coin.of|portrait.of|militar|army|navy|air.force|soldier|marine.corps|usns|troops|airmen|museo|museum|historic|fortepan|vintage|antique|memorial|!!!)/i;
const shootKey = f => f.toLowerCase().replace(/\.[a-z]+$/, "")
  .replace(/[\s_-]*\(\d+\)$/, "").replace(/[\s_-]*\d{1,7}$/, "")
  .replace(/[^a-zÀ-￿]+/g, "").slice(0, 24);

const cats = process.argv[2].split(",");
const outDir = process.argv[3];
const used = new Set(JSON.parse(fs.readFileSync("tools/data/used-images.json", "utf8")).map(decodeURIComponent));
const shoots = new Set([...used].map(shootKey));
const out = [];
for (const cat of cats) {
  const j = await (await fetch("https://commons.wikimedia.org/w/api.php?origin=*&format=json&" +
    new URLSearchParams({ action: "query", generator: "categorymembers", gcmtitle: "Category:" + cat,
      gcmtype: "file", gcmlimit: "500", prop: "imageinfo", iiprop: "url|size|mime|extmetadata" }),
    { headers: { "User-Agent": UA } })).json();
  const list = Object.values(j?.query?.pages || {}).map(p => {
    const ii = p.imageinfo?.[0]; if (!ii) return null;
    const file = decodeURIComponent(((ii.url || "").split("/").pop() || "").split("?")[0]);
    const { width: w, height: h, mime } = ii;
    if (!w || !h || mime !== "image/jpeg") return null;
    const ar = w / h;
    if (w < 1500 || ar < 1.35 || ar > 2.1) return null;
    if (BAD.test(p.title) || BAD.test(file)) return null;
    return { file, w, h, cat, lic: (ii.extmetadata?.LicenseShortName?.value || "").replace(/<[^>]*>/g, ""),
      score: Math.min(w, 5000) / 1000 + (Math.abs(ar - 1.78) < .3 ? 2.5 : 0) };
  }).filter(Boolean).sort((a, b) => b.score - a.score);
  let n = 0;
  for (const c of list) {
    if (used.has(c.file) || shoots.has(shootKey(c.file))) continue;
    shoots.add(shootKey(c.file)); out.push(c); n++;
    if (n >= 6) break;                       // cap per category to force variety
  }
  await new Promise(r => setTimeout(r, 120));
}
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outDir + "/pool.json", JSON.stringify(out, null, 1));
console.log("  candidates: " + out.length + " across " + cats.length + " categories");
