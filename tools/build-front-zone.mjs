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
import { optimizeHtml } from "./optimize-images.mjs";

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
/* 2, not 3: keeps the lead unit above a 1280x800 fold. Take only what is
   shown: take() marks stories as placed, so over-taking and slicing used to
   drop up to four of the newest pieces from the zone without showing them. */
/* Same-section follow-ons only while they are still news: a two-day-old
   crypto item under today's crypto lead read as the front page lagging. */
const fresh = a => new Date(lead.date) - new Date(a.date) < 24 * 3600e3;
const cluster = take(2, a => !opinion(a) && a.dir === lead.dir && fresh(a));
cluster.push(...take(2 - cluster.length, a => !opinion(a)));
const grid = take(11, a => photo(a) && !opinion(a));
const feature = take(1, a => photo(a) && !opinion(a))[0];
const topStories = take(5, a => !opinion(a));   // 11 made the hero zone 1,600px tall; 7 left the rail taller than the main column, which showed as white under the latest band
/* The Divide columns have their own panel further down the page; listing
   them in the opinion rail as well put the same argument on the front twice,
   which on a phone is two identical headlines a few screens apart. */
const railOpinion = take(2, a => !a.url.startsWith("/divide/") &&
  (opinion(a) || /opinion|analysis|column/i.test(a.kick)));

const byline = a => a.author ? `<div class="cardby">By <a href="/authors/${aslug(a.author)}/">${esc(a.author)}</a></div>` : "";

/* The block between the lead and the first section was still the WWD
   arrangement while everything below it had moved to Leonard's composition,
   so the two halves of the page did not agree. Same shapes as the section
   blocks now: a frame with the headline over it, a stack of two, a list. */
const lmeta = a => `<div class="lmeta"><span class="lkick">${esc(a.kick)}</span><span class="lsep">/</span><time class="lago" datetime="${a.date}" data-ago>${ago(a.date)}</time></div>`;

const lOverlay = a => `<article class="lbig">
<a href="${a.url}"><img src="${esc(a.img)}" alt="${esc(a.alt)}" loading="lazy">
<span class="lbig-tx">${lmeta(a)}<h3>${esc(a.title)}</h3>${a.dek ? `<p class="lbig-dek">${esc(a.dek)}</p>` : ""}</span></a></article>`;

const lStack = a => `<article class="lstack">
<a class="lstack-img" href="${a.url}"><img src="${esc(a.img)}" alt="${esc(a.alt)}" loading="lazy"></a>
${lmeta(a)}<h3><a href="${a.url}">${esc(a.title)}</a></h3></article>`;

const lList = a => `<article class="llist">
<a class="llist-thumb" href="${a.url}"><img src="${esc(a.img)}" alt="${esc(a.alt)}" loading="lazy"></a>
<div class="llist-tx">${lmeta(a)}<h3><a href="${a.url}">${esc(a.title)}</a></h3></div></article>`;

/* The front page had no h1 at all: every headline is an h2 or h3, which
   leaves screen readers and search engines without a page title. Hidden
   visually, since the masthead already says it. */
const zone = `<main id="main" class="wrap abczone">
<h1 class="visually-hidden">Komposite News: technology, AI, blockchain, markets and the business of what comes next</h1>
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
    <time class="abctime" datetime="${feature.date}" data-ago>${ago(feature.date)}</time></article>
  <div class="abctop abctop-num abctop-thumbs"><div class="abctop-h">Top stories</div>
    <ol>${topStories.map(a => `<li><a href="${a.url}"><span class="toptx">${esc(a.title)}</span>${a.img ? `<span class="topthumb"><img src="${esc(a.img)}" alt="${esc(a.alt || "")}" loading="lazy"></span>` : ""}</a></li>`).join("")}</ol>
  </div>
    ${railOpinion.length ? `<div class="railmod"><div class="railmod-h">Opinion &amp; analysis</div>
      ${railOpinion[0].img ? `<article class="railfeat"><a class="railfeat-img" href="${railOpinion[0].url}"><img src="${esc(railOpinion[0].img)}" alt="${esc(railOpinion[0].alt || "")}" loading="lazy"></a><h3><a href="${railOpinion[0].url}">${esc(railOpinion[0].title)}</a></h3>${railOpinion[0].author ? `<span class="railby">${esc(railOpinion[0].author)}</span>` : ""}</article>` : ""}
      <ul>${railOpinion.slice(railOpinion[0].img ? 1 : 0).map(a => `<li><a href="${a.url}">${esc(a.title)}</a>${a.author ? `<span class="railby">${esc(a.author)}</span>` : ""}</li>`).join("")}</ul>
      <a class="railmore" href="/opinion/">All opinion &rsaquo;</a></div>` : ""}
</aside>
<script>
/* "23 hours ago" is true when the page is built and false a day later, and
   the page is only rebuilt when something is published. Recompute every
   relative time from its datetime in the reader's browser. Same wording as
   the builders; untouched if scripts are off. */
(function(){function f(){var n=Date.now();[].forEach.call(document.querySelectorAll("time[data-ago]"),function(e){var t=Date.parse(e.getAttribute("datetime"));if(isNaN(t))return;var m=Math.max(1,Math.floor((n-t)/6e4)),s;
if(m<60)s=m+" minute"+(m===1?"":"s")+" ago";else{var h=Math.floor(m/60);if(h<24)s=h+" hour"+(h===1?"":"s")+" ago";else{var d=Math.floor(h/24);s=d<=6?d+" day"+(d===1?"":"s")+" ago":new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"});}}
e.textContent=s;});}if(document.readyState!=="loading")f();else document.addEventListener("DOMContentLoaded",f);})();
</script>
</main>`;

let h = fs.readFileSync("index.html", "utf8");
const startMarkers = ['<main id="main" class="wrap abczone">', '<main class="wrap czone">', '<main class="wrap fblead">', '<main id="main" class="wrap abczone">'];
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
fs.writeFileSync("index.html", optimizeHtml(h, "index.html"));
// Record what the zone consumed so the band below does not repeat it.
fs.writeFileSync("tools/data/front-used.json", JSON.stringify([...seen], null, 1));

console.log("ABC-shaped front zone built");
console.log("  lead:    " + lead.title);
console.log("  grid:    " + grid.length + " cards, each with kicker and relative time");
console.log("  feature: " + feature.title);
console.log("  top:     " + topStories.length + " headlines");
console.log("  distinct stories: " + seen.size);
