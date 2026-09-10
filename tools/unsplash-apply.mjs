/* Assign one distinct Unsplash photo per article and write it in.
   No photo is used twice — the whole point of the exercise — and each one is
   registered with Unsplash's download endpoint before it is applied, because
   applying a photo we failed to register would breach the API terms. */
import fs from "node:fs";

const KEY = fs.readFileSync(process.env.HOME + "/.config/komposite/unsplash.key", "utf8").trim();
const H = { Authorization: "Client-ID " + KEY };
const UTM = "utm_source=komposite_news&utm_medium=referral";
const BUDGET = Number(process.argv[2] || 30);

const pool = JSON.parse(fs.readFileSync("tools/data/unsplash-pool.json", "utf8"));
const arts = JSON.parse(fs.readFileSync("tools/data/front-articles.json", "utf8"));

/* Every image already on the site, so a new pick cannot collide with one. */
const taken = new Set(JSON.parse(fs.readFileSync("tools/data/used-images.json", "utf8")));
const claimed = new Set();

const esc = s => String(s).replace(/&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const cap = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : "";

/* Commons first — those are the weakest — then anything sharing a picture. */
const byId = {};
arts.forEach(a => a.id && (byId[a.id] = (byId[a.id] || 0) + 1));
const queue = arts
  .filter(a => a.img)
  .sort((a, b) => {
    const dup = (byId[b.id] > 1 ? 1 : 0) - (byId[a.id] > 1 ? 1 : 0);
    if (dup) return dup;
    return (a.src === "commons" ? 0 : 1) - (b.src === "commons" ? 0 : 1);
  });

let applied = 0, calls = 0, skipped = 0;
for (const a of queue) {
  if (calls >= BUDGET) break;
  const cands = pool[a.sec] || [];
  const pick = cands.find(p => !claimed.has(p.id) && !taken.has(p.id));
  if (!pick) { skipped++; continue; }

  // register the use before writing it in
  try { const r = await fetch(pick.dl, { headers: H }); calls++; if (!r.ok) throw new Error("dl " + r.status); }
  catch (e) { console.log("  download trigger failed, skipping: " + pick.id); continue; }
  claimed.add(pick.id);

  const file = a.url.replace(/^\//, "") + "index.html";
  if (!fs.existsSync(file)) continue;
  let h = fs.readFileSync(file, "utf8");
  const src = `${pick.url}&w=1400&q=80&fm=jpg&fit=crop`;
  const hh = Math.round(1400 * pick.h / pick.w);
  const alt = esc(cap(pick.alt) || a.title);
  const credit = `<a href="https://unsplash.com/@${pick.user}?${UTM}" rel="noopener">${esc(pick.name)}</a> via <a href="https://unsplash.com/?${UTM}" rel="noopener">Unsplash</a>`;

  h = h.replace(/(<img[^>]*class="[^"]*illo[^"]*"[^>]*\bsrc=")[^"]*(")/, (m, x, y) => x + esc(src) + y);
  h = h.replace(/(<img[^>]*class="[^"]*illo[^"]*"[^>]*\balt=")[^"]*(")/, (m, x, y) => x + alt + y);
  h = h.replace(/(<img[^>]*class="[^"]*illo[^"]*"[^>]*)\bwidth="\d+" height="\d+"/, (m, x) => `${x}width="1400" height="${hh}"`);
  h = h.replace(/("image"\s*:\s*\{[^}]*?"url"\s*:\s*")[^"]*(")/, (m, x, y) => x + esc(src) + y);
  h = h.replace(/("image"\s*:\s*\{[^}]*?"width"\s*:\s*)\d+/, (m, x) => x + 1400);
  h = h.replace(/("image"\s*:\s*\{[^}]*?"height"\s*:\s*)\d+/, (m, x) => x + hh);
  h = h.replace(/(<meta property="og:image" content=")[^"]*(")/, (m, x, y) => x + esc(src) + y);
  h = h.replace(/(<meta name="twitter:image" content=")[^"]*(")/, (m, x, y) => x + esc(src) + y);
  h = h.replace(/(<span class="pcred">)[\s\S]*?(<\/span>)/, (m, x, y) => x + credit + y);
  fs.writeFileSync(file, h);
  applied++;
  if (applied % 10 === 0) console.log(`  ${applied} applied…`);
  await new Promise(r => setTimeout(r, 130));
}
console.log(`\n  applied ${applied}  |  download triggers ${calls}  |  no candidate left ${skipped}`);
console.log(`  distinct photos used: ${claimed.size}`);
