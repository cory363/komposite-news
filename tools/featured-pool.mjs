/* Candidate pool drawn from Commons Featured pictures — the curated set, which
   is a different population from the category browse used earlier. Category
   members are whatever anyone uploaded; featured pictures were judged. */
import fs from "node:fs";
const UA = "KompositeNews/1.0 (https://kompositenews.com; cory@acepr.us)";
const BAD = /(diagram|chart|graph|logo|icon|map\b|svg|infographic|coat.of.arms|seal|flag.of|poster|screenshot|drawing|painting|illustration|sketch|engraving|lithograph|18\d\d|19\d\d|bird|insect|flower|butterfly|moth|beetle|fungus|mushroom|spider|fish|lizard|frog|plant|orchid|panorama.of.a.church|cathedral|monastery|mosque|temple)/i;
const shootKey = f => f.toLowerCase().replace(/\.[a-z]+$/, "").replace(/[\s_-]*\(\d+\)$/, "")
  .replace(/[\s_-]*\d{1,7}$/, "").replace(/[^a-z]+/g, "").slice(0, 22);

const QUERIES = process.argv[2].split("|");
const outDir = process.argv[3];
const used = new Set(JSON.parse(fs.readFileSync("tools/data/used-images.json", "utf8")).map(decodeURIComponent));
const shoots = new Set([...used].map(shootKey));
const out = [];

for (const q of QUERIES) {
  let j;
  try {
    j = await (await fetch("https://commons.wikimedia.org/w/api.php?origin=*&format=json&" +
      new URLSearchParams({ action: "query", generator: "search", gsrnamespace: "6", gsrlimit: "40",
        gsrsearch: `incategory:"Featured pictures on Wikimedia Commons" filetype:bitmap ${q}`,
        prop: "imageinfo", iiprop: "url|size|mime|extmetadata" }), { headers: { "User-Agent": UA } })).json();
  } catch { continue; }
  const cands = Object.values(j?.query?.pages || {}).map(p => {
    const ii = p.imageinfo?.[0]; if (!ii) return null;
    const file = decodeURIComponent(((ii.url || "").split("/").pop() || "").split("?")[0]);
    const { width: w, height: h, mime } = ii;
    if (!w || !h || mime !== "image/jpeg") return null;
    const ar = w / h;
    if (w < 1800 || ar < 1.4 || ar > 2.4) return null;
    if (BAD.test(p.title) || BAD.test(file)) return null;
    if (used.has(file) || shoots.has(shootKey(file))) return null;
    return { file, w, h, q, lic: (ii.extmetadata?.LicenseShortName?.value || "").replace(/<[^>]*>/g, ""),
      artist: (ii.extmetadata?.Artist?.value || "").replace(/<[^>]*>/g, "").trim().slice(0, 60) };
  }).filter(Boolean);
  let n = 0;
  for (const c of cands) {
    if (shoots.has(shootKey(c.file))) continue;
    shoots.add(shootKey(c.file)); out.push(c); n++;
    if (n >= 8) break;
  }
  console.log(`  ${String(n).padStart(2)}  ${q}`);
  await new Promise(r => setTimeout(r, 150));
}
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outDir + "/pool.json", JSON.stringify(out, null, 1));
console.log("  featured candidates: " + out.length);
