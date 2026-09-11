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
const aslug = n => n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
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
      author: (h.match(/"author":\{[^}]*?"name":"([^"]+)"/) || [])[1] || "",
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
/* A precise clock time reads as a desk that is running, where a relative
   "3 hours ago" reads as a feed. Times are the article's own datePublished. */
const stamp = d => {
  const t = new Date(d);
  if (isNaN(t)) return "";
  return t.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    + " &middot; " + t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZone: "UTC" }) + " UTC";
};
const opinion = a => a.dir === "divide" || /opinion/i.test(a.kick);

const lead = take(1, a => photo(a) && !opinion(a))[0];
/* CNN and ABC both hang two or three related angles under the lead. It is
   the device that makes a front read as a newsroom covering a story rather
   than a list of unrelated items. Prefer same-section follow-ons. */
const cluster = take(3, a => !opinion(a) && a.dir === lead.dir)
  .concat(take(3, a => !opinion(a))).slice(0, 2);   // 2, not 3: keeps the lead unit above a 1280x800 fold
const grid = take(11, a => photo(a) && !opinion(a));
const feature = take(1, a => photo(a) && !opinion(a))[0];
const topStories = take(7, a => !opinion(a));   // 11 made the hero zone 1,600px tall and pushed the sections off screen
/* The Divide columns have their own panel further down the page; listing
   them in the opinion rail as well put the same argument on the front twice,
   which on a phone is two identical headlines a few screens apart. */
const railOpinion = take(3, a => !a.url.startsWith("/divide/") &&
  (opinion(a) || /opinion|analysis|column/i.test(a.kick)));

const byline = a => a.author ? `<div class="cardby">By <a href="/authors/${aslug(a.author)}/">${esc(a.author)}</a></div>` : "";

/* The block between the lead and the first section was still the WWD
   arrangement while everything below it had moved to Leonard's composition,
   so the two halves of the page did not agree. Same shapes as the section
   blocks now: a frame with the headline over it, a stack of two, a list. */
const lmeta = a => `<div class="lmeta"><span class="lkick">${esc(a.kick)}</span><span class="lsep">/</span><span class="lago">${ago(a.date)}</span></div>`;

const lOverlay = a => `<article class="lbig">
<a href="${a.url}"><img src="${esc(a.img)}" alt="${esc(a.alt)}" loading="lazy">
<span class="lbig-tx">${lmeta(a)}<h3>${esc(a.title)}</h3>${a.dek ? `<p class="lbig-dek">${esc(a.dek)}</p>` : ""}</span></a></article>`;

const lStack = a => `<article class="lstack">
<a class="lstack-img" href="${a.url}"><img src="${esc(a.img)}" alt="${esc(a.alt)}" loading="lazy"></a>
${lmeta(a)}<h3><a href="${a.url}">${esc(a.title)}</a></h3></article>`;

const lList = a => `<article class="llist">
<a class="llist-thumb" href="${a.url}"><img src="${esc(a.img)}" alt="${esc(a.alt)}" loading="lazy"></a>
<div class="llist-tx">${lmeta(a)}<h3><a href="${a.url}">${esc(a.title)}</a></h3></div></article>`;

const zone = `<main class="wrap abczone">
<div class="abcmain">
  <article class="lhero">
    <div class="lhero-frame">
    <a class="lhero-img" href="${lead.url}"><img src="${esc(lead.img)}" alt="${esc(lead.alt)}" loading="lazy"></a>
    <div class="lhero-tx">
      <div class="abckick">${esc(lead.kick)}</div>
      <h2><a href="${lead.url}">${esc(lead.title)}</a></h2>
      <p class="lhero-dek">${esc(lead.dek)}</p>
      <div class="leadmeta">${lead.author ? `<span class="leadby">By <a href="/authors/${aslug(lead.author)}/">${esc(lead.author)}</a></span>` : ""}<span class="leadstamp">${stamp(lead.date)}</span></div>
    </div>
    </div>
    ${cluster.length ? `<ul class="lhero-cluster">${cluster.map(c => `<li><a href="${c.url}">${esc(c.title)}</a></li>`).join("")}</ul>` : ""}
  </article>
  <div class="lsechead"><span class="lseclabel"><a href="/latest/">Latest</a></span></div>
  <div class="lgrid">
    <div class="lcol-big">${lOverlay(grid[0])}</div>
    <div class="lcol-stack">${grid.slice(1, 3).map(lStack).join("")}</div>
    <div class="lcol-list">${grid.slice(3, 8).map(lList).join("")}<a class="lmore" href="/latest/">More latest <span aria-hidden="true">&rarr;</span></a></div>
  </div>
</div>
<aside class="abcrail">
  <article class="abcfeature"><a href="${feature.url}"><img src="${esc(feature.img)}" alt="${esc(feature.alt)}" loading="lazy"></a>
    <div class="abckick">${esc(feature.kick)}</div>
    <h3><a href="${feature.url}">${esc(feature.title)}</a></h3>
    <span class="abctime">${ago(feature.date)}</span></article>
  <div class="abctop abctop-num abctop-thumbs"><div class="abctop-h">Top stories</div>
    <ol>${topStories.map(a => `<li><a href="${a.url}"><span class="toptx">${esc(a.title)}</span>${a.img ? `<span class="topthumb"><img src="${esc(a.img)}" alt="${esc(a.alt || "")}" loading="lazy"></span>` : ""}</a></li>`).join("")}</ol>
  </div>
    ${railOpinion.length ? `<div class="railmod"><div class="railmod-h">Opinion &amp; analysis</div>
      <ul>${railOpinion.map(a => `<li><a href="${a.url}">${esc(a.title)}</a>${a.author ? `<span class="railby">${esc(a.author)}</span>` : ""}</li>`).join("")}</ul>
      <a class="railmore" href="/opinion/">All opinion &rsaquo;</a></div>` : ""}
</aside>
</main>`;

let h = fs.readFileSync("index.html", "utf8");
const startMarkers = ['<main class="wrap czone">', '<main class="wrap fblead">', '<main class="wrap abczone">'];
let start = -1;
for (const m of startMarkers) { const i = h.indexOf(m); if (i > -1) { start = i; break; } }
/* The zone used to end at the billboard, which sat immediately below it. The
   billboard is now interleaved further down, three section blocks past the
   zone, so that boundary swallowed AI, Blockchain and Crypto on every
   rebuild. The zone ends where it ends: at its own </main>. */
const endTag = "</main>";
const endAt = h.indexOf(endTag, start);
const end = endAt < 0 ? -1 : endAt + endTag.length;
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
