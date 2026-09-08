/* Replace duplicated hero photos with unique, editorially apt photographs.
   Commons full-text search matched words rather than subjects (Liverpool
   fans on a startups story, a 1939 Packard on cybersecurity), so this
   pulls from curated Commons CATEGORIES instead, which are topical by
   construction. Unsplash is unavailable: the key 401s. */
import fs from "node:fs";

const UA = "KompositeNews/1.0 (https://kompositenews.com; cory@acepr.us)";
const api = async (p) => {
  const r = await fetch("https://commons.wikimedia.org/w/api.php?origin=*&format=json&" +
    new URLSearchParams(p), { headers: { "User-Agent": UA } });
  if (!r.ok) throw new Error("commons " + r.status);
  return r.json();
};

const BEATS = {
  markets:       ["Stock exchanges", "Trading rooms", "Bank buildings", "Financial districts", "Banks", "Offices"],
  crypto:        ["Bitcoin mining", "Data centers", "Electrical substations", "Wind turbines", "Solar panels", "Nuclear power plants", "Server rooms"],
  blockchain:    ["Container terminals", "Container cranes", "Cargo ships", "Ports", "Warehouses", "Shipping containers", "Logistics", "Distribution centers"],
  business:      ["Assembly lines", "Industrial robots", "Factories", "Machine tools", "Conference rooms", "Automated guided vehicles", "Warehouses"],
  ai:            ["Supercomputers", "Data centers", "Cleanrooms", "Research laboratories", "Robotics", "Server rooms"],
  startups:      ["Research laboratories", "Unmanned aerial vehicles", "Open plan offices", "Cleanrooms", "Solar panels", "Robotics"],
  fintech:       ["Payment terminals", "Credit cards", "Bank buildings", "Smart cards", "Banks", "Banknotes"],
  technology:    ["Optical fiber cables", "Telecommunications equipment", "Computer hardware", "Server rooms", "Cleanrooms"],
  cybersecurity: ["Control rooms", "Biometrics", "Surveillance", "Server rooms", "Smart cards"],
  policy:        ["Parliament buildings", "Government buildings", "Legislatures", "Courtrooms"],
};

/* Two files from the same photoshoot look identical on the page. Six
   "Wikimedia_Foundation_Servers-8055_NN" frames are six duplicates by
   another name, so collapse a filename to its shoot and allow one. */
const shootKey = f => f.toLowerCase().replace(/\.[a-z]+$/, "")
  .replace(/[\s_-]*\(\d+\)$/, "").replace(/[\s_-]*\d{1,6}$/, "")
  .replace(/[^a-z\u00c0-\uffff]+/g, "").slice(0, 26);

/* Reject anything that is not a modern editorial photograph. */
const BAD = /(diagram|chart|graph|logo|icon|map\b|svg|plot|schema|infographic|coat.of.arms|seal|flag.of|poster|screenshot|drawing|painting|illustration|sketch|clipart|banner|emblem|barcode|qr.code|font|typeface|symbol|engraving|postcard|stereograph|lithograph|negative|woodcut|18\d\d|19[0-4]\d|LC-|Library.of.Congress|book|page.from|plaque|stamp|coin.of|portrait.of|militar|army|navy|air.force|soldier|taliban|insurgen|marine.corps|usns|uss.|troops|airmen|deployed|brigade|regiment|infantry|museo|museum|historic|fortepan|vintage|antique|veteran|memorial|cemetery|church|cathedral|!!!|funny|joke)/i;

const cache = new Map();
async function members(cat) {
  if (cache.has(cat)) return cache.get(cat);
  const j = await api({ action: "query", generator: "categorymembers",
    gcmtitle: "Category:" + cat, gcmtype: "file", gcmlimit: "500",
    prop: "imageinfo", iiprop: "url|size|mime|extmetadata" });
  const list = Object.values(j?.query?.pages || {}).map(p => {
    const ii = p.imageinfo?.[0]; if (!ii) return null;
    /* ii.url arrives with a ?utm_source= query string appended; keeping it
       corrupted every filename, broke de-duplication against the in-use set,
       and made each download resolve to an HTML error page. */
    const file = decodeURIComponent(((ii.url || "").split("/").pop() || "").split("?")[0]);
    const { width: w, height: h, mime } = ii;
    if (!w || !h || mime !== "image/jpeg") return null;      // jpeg only: png is usually a chart or screenshot
    const ar = w / h;
    if (w < 1400 || ar < 1.3 || ar > 2.2) return null;
    if (BAD.test(p.title) || BAD.test(file)) return null;
    return { file, w, h, ar, cat,
      lic: (ii.extmetadata?.LicenseShortName?.value || "").replace(/<[^>]*>/g, ""),
      artist: (ii.extmetadata?.Artist?.value || "").replace(/<[^>]*>/g, "").trim().slice(0, 80),
      score: Math.min(w, 5000) / 1000 + (Math.abs(ar - 1.78) < .3 ? 2.5 : 0) };
  }).filter(Boolean).sort((a, b) => b.score - a.score);
  cache.set(cat, list);
  await new Promise(r => setTimeout(r, 100));
  return list;
}

const work = JSON.parse(fs.readFileSync("tools/data/dupe-worklist.json", "utf8"));
const used = new Set(JSON.parse(fs.readFileSync("tools/data/used-images.json", "utf8")).map(decodeURIComponent));
const shoots = new Set([...used].map(shootKey));
const out = {}; const turn = {}; let ok = 0; const fail = [];

for (const a of work) {
  const cats = BEATS[a.sec] || BEATS.business;
  const t = (turn[a.sec] = (turn[a.sec] || 0));
  let pick = null;
  for (let k = 0; k < cats.length && !pick; k++) {
    const list = await members(cats[(t + k) % cats.length]);
    pick = list.find(c => !used.has(c.file) && !shoots.has(shootKey(c.file))) || null;
  }
  turn[a.sec] = t + 1;
  if (!pick) { fail.push(a.slug); continue; }
  used.add(pick.file); shoots.add(shootKey(pick.file));
  out[a.slug] = { file: pick.file, width: pick.w, height: pick.h, lic: pick.lic, artist: pick.artist, cat: pick.cat };
  ok++;
  console.log(`  ${String(ok).padStart(2)}/${work.length}  ${a.sec.padEnd(13)} ${pick.cat.padEnd(24)} ${pick.file.slice(0, 40)}`);
}
fs.writeFileSync("tools/data/unique-photos.json", JSON.stringify(out, null, 1));
console.log(`\n  resolved: ${ok}   unresolved: ${fail.length}`);
if (fail.length) console.log("  unresolved: " + fail.join(", "));
