/* Source hero images from Unsplash.
   Two API rules are not optional and are both handled here: attribution to
   the photographer with the referral parameters, and a call to the photo's
   download_location when it is used. The demo tier allows 50 requests an
   hour and both searches and download triggers count, so the run budgets
   itself and stops rather than half-applying a photo it cannot register. */
import fs from "node:fs";

const KEY = fs.readFileSync(process.env.HOME + "/.config/komposite/unsplash.key", "utf8").trim();
const API = "https://api.unsplash.com";
const H = { Authorization: "Client-ID " + KEY };
const UTM = "utm_source=komposite_news&utm_medium=referral";
let used = 0;
const call = async (url) => { used++; const r = await fetch(url, { headers: H });
  if (!r.ok) throw new Error(url.slice(0, 60) + " -> " + r.status); return r.json(); };

/* One query per beat, 30 results each: 12 requests buys 360 candidates,
   which leaves the rest of the hour for download triggers. */
const QUERIES = {
  markets:       "stock exchange trading floor finance",
  crypto:        "bitcoin cryptocurrency finance abstract",
  blockchain:    "shipping port logistics containers",
  ai:            "data center server racks technology",
  technology:    "fiber optic network technology dark",
  fintech:       "payment terminal card banking",
  cybersecurity: "cyber security server network dark",
  business:      "corporate office building architecture",
  startups:      "startup office team working",
  policy:        "government building parliament architecture",
  culture:       "cinema film production lighting",
  music:         "concert stage music performance",
};

const pool = {};
for (const [sec, q] of Object.entries(QUERIES)) {
  const j = await call(`${API}/search/photos?query=${encodeURIComponent(q)}&per_page=30&orientation=landscape&content_filter=high`);
  pool[sec] = (j.results || []).map(p => ({
    id: p.id, w: p.width, h: p.height,
    url: p.urls.raw, dl: p.links.download_location,
    alt: (p.alt_description || p.description || "").trim(),
    name: p.user.name, user: p.user.username,
  })).filter(p => p.w / p.h >= 1.2);
  console.log(`  ${sec.padEnd(14)} ${pool[sec].length} candidates`);
  await new Promise(r => setTimeout(r, 220));
}
fs.writeFileSync("tools/data/unsplash-pool.json", JSON.stringify(pool, null, 1));
console.log(`\n  searches used: ${used}   candidates: ${Object.values(pool).reduce((s, v) => s + v.length, 0)}`);
