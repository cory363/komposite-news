/* Re-source one beat at a time with queries that match the subject.
   Blockchain drew "shipping port logistics containers" and returned ten
   cargo photographs for a technology and finance beat; AI drew one server
   query and returned twelve near-identical racks. Several queries per beat,
   pooled, then ranked for the cinematic qualities — depth of tone, contrast,
   a cool cast — before anything is applied. */
import fs from "node:fs";
const KEY = fs.readFileSync(process.env.HOME + "/.config/komposite/unsplash.key", "utf8").trim();
const H = { Authorization: "Client-ID " + KEY };
let used = 0;

const SETS = {
  blockchain: [
    "abstract network connections dark blue technology",
    "digital data visualization dark screen",
    "cryptography code encryption dark",
  ],
  ai: [
    "artificial intelligence abstract light dark",
    "silicon chip macro circuit detail",
    "supercomputer data centre dramatic lighting",
  ],
};

const out = {};
for (const [sec, queries] of Object.entries(SETS)) {
  out[sec] = [];
  for (const q of queries) {
    const r = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(q)}&per_page=30&orientation=landscape&content_filter=high`, { headers: H });
    used++;
    if (!r.ok) { console.log(`  ${sec}: ${q} -> ${r.status}`); continue; }
    const j = await r.json();
    out[sec].push(...(j.results || []).map(p => ({
      id: p.id, w: p.width, h: p.height, url: p.urls.raw, thumb: p.urls.small,
      dl: p.links.download_location, q,
      alt: (p.alt_description || p.description || "").trim(),
      name: p.user.name, user: p.user.username })));
    await new Promise(x => setTimeout(x, 200));
  }
  const seen = new Set();
  out[sec] = out[sec].filter(p => p.w / p.h >= 1.2 && !seen.has(p.id) && seen.add(p.id));
  console.log(`  ${sec.padEnd(12)} ${out[sec].length} candidates from ${queries.length} queries`);
}
fs.writeFileSync("tools/data/unsplash-requery.json", JSON.stringify(out, null, 1));
console.log(`\n  api calls used: ${used}`);
