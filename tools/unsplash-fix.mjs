/* Re-image a worklist of articles from Unsplash.
   The earlier pass deduped against tools/data/used-images.json, which was
   written before the run and went stale during it, so the same photo landed
   on two articles in different sections. This reads what is actually on
   every page at start-up and treats that as the authority. */
import fs from "node:fs";
import path from "node:path";

const KEY = fs.readFileSync(process.env.HOME + "/.config/komposite/unsplash.key", "utf8").trim();
const H = { Authorization: "Client-ID " + KEY };
const UTM = "utm_source=komposite_news&utm_medium=referral";
const esc = s => String(s).replace(/&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const cap = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : "";
const idOf = u => { const m = String(u).match(/photo-([A-Za-z0-9_-]{6,})/) || String(u).match(/FilePath\/([^?"]+)/); return m ? decodeURIComponent(m[1]) : String(u).split("?")[0]; };

const SKIP = new Set([".git", "node_modules", "tools", "assets"]);
const walk = (d, o = []) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) {
  if (SKIP.has(e.name) || e.name.startsWith(".")) continue;
  const p = path.join(d, e.name); e.isDirectory() ? walk(p, o) : (e.name === "index.html" && o.push(p)); } return o; };

/* Live state, read now — not a file written earlier. */
const live = [];
for (const p of walk(".")) {
  const h = fs.readFileSync(p, "utf8");
  if (!/"@type":"NewsArticle"/.test(h)) continue;
  const m = h.match(/<img[^>]*class="[^"]*illo[^"]*"[^>]*src="([^"]+)"/);
  if (!m) continue;
  live.push({ file: p, slug: p.replace("/index.html", ""), sec: p.split("/")[0],
    id: idOf(m[1]), commons: !/images\.unsplash\.com/.test(m[1]) });
}
const inUse = new Set(live.map(r => r.id));
const count = {}; live.forEach(r => count[r.id] = (count[r.id] || 0) + 1);

/* Worklist: every duplicate after the first, then Commons in the named beats. */
const seenFirst = new Set();
const dupes = live.filter(r => { if (count[r.id] < 2) return false;
  if (!seenFirst.has(r.id)) { seenFirst.add(r.id); return false; } return true; });
const beats = (process.argv[2] || "").split(",").filter(Boolean);
const commons = live.filter(r => r.commons && beats.includes(r.sec));
const work = [...dupes, ...commons.filter(c => !dupes.includes(c))];

const QUERIES = {
  crypto:        ["bitcoin cryptocurrency abstract dark", "digital currency finance neon", "crypto trading screens dark"],
  business:      ["corporate boardroom meeting dark", "modern office tower dusk", "industrial factory automation"],
  markets:       ["stock market chart screen dark", "trading floor finance", "financial district night"],
  fintech:       ["contactless payment terminal", "mobile banking phone dark", "credit card macro dark"],
  cybersecurity: ["cyber security dark code", "network security server dark", "encryption padlock digital"],
  technology:    ["fiber optic cables glowing", "network infrastructure dark", "circuit board macro blue"],
  policy:        ["government building columns", "capitol dome architecture", "courtroom legislature interior"],
  culture:       ["cinema projector dark", "film set lighting", "theatre stage dramatic"],
  music:         ["concert crowd stage lights", "recording studio console", "vinyl record close up"],
  startups:      ["startup team whiteboard", "coworking office dusk", "founder laptop dark"],
  ai:            ["artificial intelligence abstract", "neural network visualisation", "silicon wafer macro"],
  blockchain:    ["blockchain network nodes", "distributed ledger abstract", "cryptography code dark"],
};

let calls = 0, applied = 0;
const budget = Number(process.argv[3] || 40);
const pools = {};
const needed = [...new Set(work.map(w => w.sec))];

for (const sec of needed) {
  if (calls >= budget) break;
  pools[sec] = [];
  for (const q of (QUERIES[sec] || QUERIES.business)) {
    if (calls >= budget) break;
    const r = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(q)}&per_page=30&orientation=landscape&content_filter=high`, { headers: H });
    calls++;
    if (!r.ok) continue;
    const j = await r.json();
    pools[sec].push(...(j.results || []).filter(p => p.width / p.height >= 1.2));
    await new Promise(x => setTimeout(x, 180));
  }
  console.log(`  pool ${sec.padEnd(14)} ${pools[sec].length}`);
}

for (const w of work) {
  if (calls >= budget) { console.log("  budget reached"); break; }
  const pool = pools[w.sec] || [];
  const pick = pool.find(p => !inUse.has(p.id));
  if (!pick) { console.log("  no candidate for " + w.slug); continue; }
  try { const r = await fetch(pick.links.download_location, { headers: H }); calls++; if (!r.ok) throw 0; }
  catch { console.log("  trigger failed " + w.slug); continue; }
  inUse.add(pick.id);
  let h = fs.readFileSync(w.file, "utf8");
  const src = `${pick.urls.raw}&w=1400&q=80&fm=jpg&fit=crop`;
  const hh = Math.round(1400 * pick.height / pick.width);
  const alt = esc(cap((pick.alt_description || pick.description || "").trim()));
  const credit = `<a href="https://unsplash.com/@${pick.user.username}?${UTM}" rel="noopener">${esc(pick.user.name)}</a> via <a href="https://unsplash.com/?${UTM}" rel="noopener">Unsplash</a>`;
  h = h.replace(/(<img[^>]*class="[^"]*illo[^"]*"[^>]*\bsrc=")[^"]*(")/, (m,x,y)=>x+esc(src)+y);
  if (alt) h = h.replace(/(<img[^>]*class="[^"]*illo[^"]*"[^>]*\balt=")[^"]*(")/, (m,x,y)=>x+alt+y);
  h = h.replace(/(<img[^>]*class="[^"]*illo[^"]*"[^>]*)\bwidth="\d+" height="\d+"/, (m,x)=>`${x}width="1400" height="${hh}"`);
  h = h.replace(/("image"\s*:\s*\{[^}]*?"url"\s*:\s*")[^"]*(")/, (m,x,y)=>x+esc(src)+y);
  h = h.replace(/("image"\s*:\s*\{[^}]*?"width"\s*:\s*)\d+/, (m,x)=>x+1400);
  h = h.replace(/("image"\s*:\s*\{[^}]*?"height"\s*:\s*)\d+/, (m,x)=>x+hh);
  h = h.replace(/(<meta property="og:image" content=")[^"]*(")/, (m,x,y)=>x+esc(src)+y);
  h = h.replace(/(<meta name="twitter:image" content=")[^"]*(")/, (m,x,y)=>x+esc(src)+y);
  h = h.replace(/(<span class="pcred">)[\s\S]*?(<\/span>)/, (m,x,y)=>x+credit+y);
  fs.writeFileSync(w.file, h); applied++;
  await new Promise(r => setTimeout(r, 110));
}
console.log(`\n  worklist ${work.length}  |  applied ${applied}  |  api calls ${calls}`);
