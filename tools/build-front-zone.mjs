/**
 * Build the front zone in ABC News' shape.
 *
 * From their homepage: a lead unit that is a tinted panel beside a dominant
 * image, a four-across card grid beneath it, and a right rail carrying one
 * feature plus a Top Stories list. Kickers sit above headlines, every card
 * carries a relative time, and nothing carries a byline or a dek. Their front
 * page contains zero byline markup and almost no summary text; the dek
 * appears once, on the lead.
 *
 * The palette stays Komposite's. Only the structure is borrowed.
 */
import fs from "node:fs";
import path from "node:path";

const SKIP = new Set([".git", "node_modules", "tools", "assets"]);
function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p, out) : (e.name === "index.html" && out.push(p));
  }
  return out;
}
const esc = s => String(s).replace(/&(?!amp;|lt;|gt;|quot;|#)/g, "&amp;");

const arts = walk(".").filter(f => f.split("/").length === 3 && !/^(authors|tag)\//.test(f))
  .map(f => {
    const h = fs.readFileSync(f, "utf8");
    const img = h.match(/<figure class="arthero">[\s\S]*?<img[^>]*\ssrc="([^"]*)"[^>]*alt="([^"]*)"/);
    return {
      url: "/" + f.replace(/index\.html$/, ""), dir: f.split("/")[0],
      title: ((h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || "").replace(/<[^>]*>/g, ""),
      dek: ((h.match(/<p class="artdeck">([\s\S]*?)<\/p>/) || [])[1] || "").replace(/<[^>]*>/g, ""),
      kick: (h.match(/<span class="kick[^"]*">([^<]*)</) || [])[1] || "",
      date: (h.match(/"datePublished":"([^"]+)"/) || [])[1] || "",
      img: img ? img[1] : null, alt: img ? img[2] : "",
    };
  }).filter(a => a.title && a.date).sort((a, b) => b.date.localeCompare(a.date));

const now = Date.now();
const ago = iso => {
  const mins = Math.floor((now - new Date(iso).getTime()) / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins} minute${mins === 1 ? "" : "s"} ago`;
  const h = Math.floor(mins / 60);
  if (h < 24) return `${h} hour${h === 1 ? "" : "s"} ago`;
  const d = Math.floor(h / 24);
  if (d <= 6) return `${d} day${d === 1 ? "" : "s"} ago`;
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
};

const seen = new Set();
const take = (n, pred = () => true) => {
  const out = [];
  for (const a of arts) { if (out.length >= n) break; if (seen.has(a.url) || !pred(a)) continue; seen.add(a.url); out.push(a); }
  return out;
};
const photo = a => Boolean(a.img);
const opinion = a => a.dir === "divide" || /opinion/i.test(a.kick);

const lead = take(1, a => photo(a) && !opinion(a))[0];
/* CNN and ABC both hang two or three related angles under the lead. It is
   the device that makes a front read as a newsroom covering a story rather
   than a list of unrelated items. Prefer same-section follow-ons. */
const cluster = take(3, a => !opinion(a) && a.dir === lead.dir)
  .concat(take(3, a => !opinion(a))).slice(0, 3);
const grid = take(8, a => photo(a) && !opinion(a));
const feature = take(1, a => photo(a) && !opinion(a))[0];
const topStories = take(11, a => !opinion(a));   // 8 left the rail short against the grid

const card = a => `<article class="abccard"><a href="${a.url}"><img src="${esc(a.img)}" alt="${esc(a.alt)}" loading="lazy"></a>`
  + `<div class="abckick">${esc(a.kick)}</div>`
  + `<h3><a href="${a.url}">${esc(a.title)}</a></h3>`
  + `<span class="abctime">${ago(a.date)}</span></article>`;

const zone = `<main class="wrap abczone">
<div class="abcmain">
  <article class="abclead">
    <div class="abclead-panel">
      <div class="abckick">${esc(lead.kick)}</div>
      <h2><a href="${lead.url}">${esc(lead.title)}</a></h2>
      <p class="abcdek">${esc(lead.dek)}</p>
      ${cluster.length ? `<ul class="leadcluster">${cluster.map(c => `<li><a href="${c.url}">${esc(c.title)}</a></li>`).join("")}</ul>` : ""}
      <a class="readmore" href="${lead.url}">Read the full story &rsaquo;</a>
    </div>
    <a href="${lead.url}"><img src="${esc(lead.img)}" alt="${esc(lead.alt)}" loading="lazy"></a>
  </article>
  <div class="abcgrid">
${grid.map(card).join("\n")}
  </div>
</div>
<aside class="abcrail">
  <article class="abcfeature"><a href="${feature.url}"><img src="${esc(feature.img)}" alt="${esc(feature.alt)}" loading="lazy"></a>
    <div class="abckick">${esc(feature.kick)}</div>
    <h3><a href="${feature.url}">${esc(feature.title)}</a></h3>
    <span class="abctime">${ago(feature.date)}</span></article>
  <div class="abctop abctop-num"><div class="abctop-h">Top stories</div>
    <ol>${topStories.map(a => `<li><a href="${a.url}">${esc(a.title)}</a></li>`).join("")}</ol>
  </div>
</aside>
</main>`;

let h = fs.readFileSync("index.html", "utf8");
const startMarkers = ['<main class="wrap czone">', '<main class="wrap fblead">', '<main class="wrap abczone">'];
let start = -1;
for (const m of startMarkers) { const i = h.indexOf(m); if (i > -1) { start = i; break; } }
const end = h.indexOf('<section class="billboard">');
if (start < 0 || end < 0) { console.error("could not locate the front zone"); process.exit(1); }
h = h.slice(0, start) + zone + "\n" + h.slice(end);
fs.writeFileSync("index.html", h);
// Record what the zone consumed so the band below does not repeat it.
fs.writeFileSync("tools/data/front-used.json", JSON.stringify([...seen], null, 1));

console.log("ABC-shaped front zone built");
console.log("  lead:    " + lead.title);
console.log("  grid:    " + grid.length + " cards, each with kicker and relative time");
console.log("  feature: " + feature.title);
console.log("  top:     " + topStories.length + " headlines");
console.log("  distinct stories: " + seen.size);
