/* Sources a hero for each new article and writes it into tools/data/heroes.json,
   which render-article.mjs reads in preference to the record's own photo. One
   query per story, because a beat query cannot tell a story about quartz from
   one about semiconductors generally. Photos already in use anywhere on the
   site are excluded, so nothing arrives as a duplicate. */
import fs from "node:fs";
import path from "node:path";
const KEY = fs.readFileSync(process.env.HOME + "/.config/komposite/unsplash.key", "utf8").trim();
const H = { Authorization: "Client-ID " + KEY };
const UTM = "utm_source=komposite_news&utm_medium=referral";
const esc = s => String(s).replace(/&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const cap = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : "";
const idOf = u => { const m = String(u).match(/photo-([A-Za-z0-9_-]{6,})/); return m ? m[1] : String(u).split("?")[0]; };

const SKIP = new Set([".git", "node_modules", "tools", "assets"]);
const walk = (d, o = []) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) {
  if (SKIP.has(e.name) || e.name.startsWith(".")) continue;
  const p = path.join(d, e.name);
  e.isDirectory() ? walk(p, o) : (e.name === "index.html" && o.push(p)); } return o; };
const inUse = new Set();
for (const p of walk(".")) {
  const h = fs.readFileSync(p, "utf8");
  const m = h.match(/<img[^>]*class="[^"]*illo[^"]*"[^>]*src="([^"]+)"/);
  if (m) inUse.add(idOf(m[1]));
}
const heroes = fs.existsSync("tools/data/heroes.json")
  ? JSON.parse(fs.readFileSync("tools/data/heroes.json", "utf8")) : {};
Object.values(heroes).forEach(v => v && v.id && inUse.add(idOf(v.url || "")));

const WORK = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const NO = /chart|graph|map\b|diagram|infographic|illustration|render|3d|logo/i;
let calls = 0, done = 0;
for (const w of WORK) {
  if (heroes[w.slug]) { console.log("  have " + w.slug); continue; }
  let pick = null;
  for (const q of w.q) {
    if (pick) break;
    const r = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(q)}&per_page=30&orientation=landscape&content_filter=high`, { headers: H });
    calls++;
    if (!r.ok) { console.log(`  ${w.slug}: HTTP ${r.status}`); continue; }
    const j = await r.json();
    pick = (j.results || []).find(p => p.width / p.height >= 1.3 && !inUse.has(p.id)
      && !NO.test((p.alt_description || "") + " " + (p.description || "")));
    await new Promise(x => setTimeout(x, 150));
  }
  if (!pick) { console.log("  no candidate: " + w.slug); continue; }
  try { const d = await fetch(pick.links.download_location, { headers: H }); calls++; if (!d.ok) throw 0; }
  catch { console.log("  trigger failed: " + w.slug); continue; }
  inUse.add(pick.id);
  heroes[w.slug] = {
    id: pick.id,
    url: `${pick.urls.raw}&w=1400&q=80&fm=jpg&fit=crop`,
    width: 1400, height: Math.round(1400 * pick.height / pick.width),
    alt: w.alt || esc(cap((pick.alt_description || pick.description || "").trim())),
    creditHtml: `<a href="https://unsplash.com/@${pick.user.username}?${UTM}" rel="noopener">${esc(pick.user.name)}</a> via <a href="https://unsplash.com/?${UTM}" rel="noopener">Unsplash</a>`,
    creditLine: "Photograph via Unsplash",
  };
  done++;
  console.log(`  ${w.slug.padEnd(56)} ${(pick.alt_description || "").slice(0, 40)}`);
}
fs.writeFileSync("tools/data/heroes.json", JSON.stringify(heroes, null, 1));
console.log(`\n  heroes sourced: ${done}  |  api calls: ${calls}`);
