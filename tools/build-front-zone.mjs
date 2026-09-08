/**
 * Build the CNN/ABC-style front zone and drop it in place of the old
 * fb-lead block.
 *
 * Shape is taken from the CNN capture: a left stack of image cards, a
 * dominant centre lead with a plain-text headline list beneath it, and a
 * labelled right rail. Underneath, a labelled strip of four compact cards.
 *
 * From ABC: no bylines and no deks on cards. Their homepage carries zero
 * byline markup and almost no summary text, and that density is the point.
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
      section: (h.match(/"articleSection":"([^"]*)"/) || [])[1] || "",
    };
  }).filter(a => a.title && a.date).sort((a, b) => b.date.localeCompare(a.date));

const seen = new Set();
const take = (n, pred = () => true) => {
  const out = [];
  for (const a of arts) { if (out.length >= n) break; if (seen.has(a.url) || !pred(a)) continue; seen.add(a.url); out.push(a); }
  return out;
};
const withPhoto = a => Boolean(a.img);
const isOpinion = a => a.dir === "divide" || /opinion/i.test(a.kick);

const lead = take(1, a => withPhoto(a) && !isOpinion(a))[0];
const leadList = take(4, a => !isOpinion(a));
const leftCards = take(3, a => withPhoto(a) && !isOpinion(a));
const rightA = take(1, a => withPhoto(a) && !isOpinion(a))[0];
const rightASub = take(1, a => !isOpinion(a))[0];
const rightB = take(1, a => withPhoto(a) && !isOpinion(a))[0];
const rightBSub = take(1, a => !isOpinion(a))[0];
const rightC = take(1, a => withPhoto(a) && !isOpinion(a))[0];
const rightCSub = take(1, a => !isOpinion(a))[0];
const strip = take(4, a => withPhoto(a) && !isOpinion(a));

const pic = a => `<img src="${esc(a.img)}" alt="${esc(a.alt)}" loading="lazy">`;
const card = (a, tag) => `<article class="czcard"><a href="${a.url}">${pic(a)}</a>`
  + (tag ? `<span class="cztag">${esc(tag)}</span>` : "")
  + `<h3><a href="${a.url}">${esc(a.title)}</a></h3></article>`;

const zone = `<main class="wrap czone">
<div class="cz-col">
${leftCards.map((a, i) => card(a, i === 1 ? a.kick : "")).join("\n")}
</div>
<div class="cz-col">
  <article class="czlead"><a href="${lead.url}">${pic(lead)}</a>
  <h2><a href="${lead.url}">${esc(lead.title)}</a></h2>
  <p class="czdek">${esc(lead.dek)}</p></article>
  <div class="czlist">${leadList.map(a => `<a href="${a.url}">${esc(a.title)}</a>`).join("")}</div>
</div>
<div class="cz-col">
  <div><div class="czlabel">${esc(rightA.section || rightA.kick)}</div>
  <article class="czcard"><a href="${rightA.url}">${pic(rightA)}</a>
  <h3><a href="${rightA.url}">${esc(rightA.title)}</a></h3>
  <p class="czsub"><a href="${rightASub.url}">${esc(rightASub.title)}</a></p></article></div>
  <div><div class="czlabel">${esc(rightB.section || rightB.kick)}</div>
  <article class="czcard"><a href="${rightB.url}">${pic(rightB)}</a>
  <h3><a href="${rightB.url}">${esc(rightB.title)}</a></h3>
  <p class="czsub"><a href="${rightBSub.url}">${esc(rightBSub.title)}</a></p></article></div>
  <div><div class="czlabel">${esc(rightC.section || rightC.kick)}</div>
  <article class="czcard"><a href="${rightC.url}">${pic(rightC)}</a>
  <h3><a href="${rightC.url}">${esc(rightC.title)}</a></h3>
  <p class="czsub"><a href="${rightCSub.url}">${esc(rightCSub.title)}</a></p></article></div>
</div>
</main>
<section class="wrap stripzone"><div class="czlabel">Latest across the desks</div>
<div class="stripgrid">
${strip.map(a => `<article class="stripcard"><a href="${a.url}">${pic(a)}</a><span class="cztag2">${esc(a.kick)}</span><h3><a href="${a.url}">${esc(a.title)}</a></h3></article>`).join("\n")}
</div></section>`;

let h = fs.readFileSync("index.html", "utf8");
const start = h.indexOf('<main class="wrap fblead">');
const endMarker = '<section class="billboard">';
const end = h.indexOf(endMarker);
if (start < 0 || end < 0 || end < start) { console.error("could not locate the old front zone"); process.exit(1); }
h = h.slice(0, start) + zone + "\n" + h.slice(end);
fs.writeFileSync("index.html", h);

console.log("front zone rebuilt");
console.log("  lead:   " + lead.title);
console.log("  left:   " + leftCards.map(a => a.title.slice(0, 28)).join(" / "));
console.log("  rails:  " + [rightA, rightB, rightC].map(a => a.title.slice(0, 28)).join(" / "));
console.log("  strip:  " + strip.map(a => a.title.slice(0, 22)).join(" / "));
console.log("  distinct stories in zone: " + seen.size);
