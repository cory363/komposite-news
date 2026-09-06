/**
 * Rebuild the top of the homepage: cover story, Popular list, cover-under
 * pair, opinion cards, The Big Read and Top Stories.
 *
 * wire.mjs only ever inserted into the section rails further down the page,
 * so this region never changed as articles were added. It also shipped a
 * duplicate: the same Divide column appeared twice in the opinion cards.
 * Everything here is now derived from the newest articles on disk, with a
 * seen-set so no story can appear twice above the fold.
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
    const by = h.match(/<a href="\/authors\/([a-z-]+)\/" class="byname">([^<]+)<\/a><span class="byrole">\s*&middot;\s*([^<]*)</);
    const img = h.match(/<figure class="arthero">[\s\S]*?<img[^>]*\ssrc="([^"]*)"[^>]*alt="([^"]*)"/);
    const cred = h.match(/<figure class="arthero">[\s\S]*?<span class="pcred">([\s\S]*?)<\/span>/);
    return {
      url: "/" + f.replace(/index\.html$/, ""), dir: f.split("/")[0],
      title: ((h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || "").replace(/<[^>]*>/g, ""),
      dek: ((h.match(/<p class="artdeck">([\s\S]*?)<\/p>/) || [])[1] || "").replace(/<[^>]*>/g, ""),
      kick: (h.match(/<span class="kick">([^<]*)</) || [])[1] || "",
      date: (h.match(/"datePublished":"([^"]+)"/) || [])[1] || "",
      author: by ? by[1] : null, name: by ? by[2] : null, role: by ? by[3].trim() : null,
      img: img ? img[1] : null, alt: img ? img[2] : "", cred: cred ? cred[1] : "",
    };
  }).filter(a => a.title && a.date).sort((a, b) => b.date.localeCompare(a.date));

const now = Date.now();
const ago = iso => {
  const mins = Math.floor((now - new Date(iso).getTime()) / 60000);
  if (mins < 60) return "JUST NOW";
  const hrs = Math.floor(mins / 60); if (hrs < 24) return `${hrs} HOUR${hrs === 1 ? "" : "S"} AGO`;
  const d = Math.floor(hrs / 24); if (d <= 6) return `${d} DAY${d === 1 ? "" : "S"} AGO`;
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).toUpperCase();
};

const seen = new Set();
const take = (n, pred = () => true) => {
  const out = [];
  for (const a of arts) { if (out.length >= n) break; if (seen.has(a.url) || !pred(a)) continue; seen.add(a.url); out.push(a); }
  return out;
};
const byline = a => a.author ? `<div class="byrow">By <a href="/authors/${a.author}/">${a.name}</a>, <span>${a.role}</span></div>` : "";
const pic = (a, cls) => a.img ? `<span class="pwrap"><img class="${cls}"  src="${esc(a.img)}" alt="${esc(a.alt)}" loading="lazy" width="800" height="450" onerror="this.onerror=null;this.parentElement.style.display='none';"><span class="pcred">${a.cred}</span></span>` : "";

const isOpinion = a => a.dir === "divide" || /opinion/i.test(a.kick) || /^opinion-/.test(a.url.split("/")[2] || "");
const cover = take(1, a => a.img && !isOpinion(a))[0];
const under = take(2, a => !isOpinion(a));
const opinions = take(3, isOpinion);
const bigread = take(1, a => a.img && !isOpinion(a))[0];
const tops = take(4, a => a.img && !isOpinion(a));
const subs = take(4, a => !isOpinion(a));
const popular = take(7, a => !isOpinion(a));

let h = fs.readFileSync("index.html", "utf8");
const sub = (re, val, label) => {
  if (!re.test(h)) { console.log("  MISS " + label); return; }
  h = h.replace(re, val); console.log("  ok   " + label);
};

sub(/(<ol class="poplist">)[\s\S]*?(<\/ol>)/,
  `$1${popular.map(a => `<li><a href="${a.url}">${esc(a.title)}</a></li>`).join("")}$2`, "Popular list");

sub(/(<div class="fb-center"><article class="cover">)[\s\S]*?(<\/article>)/,
  `$1\n    <a href="${cover.url}">${pic(cover, "illo coverimg photo ")}</a>\n    <div class="coverlab">Daily Cover Story</div>\n    <h1><a href="${cover.url}">${esc(cover.title)}</a></h1>\n    <p class="deck">${esc(cover.dek)}</p>\n    ${byline(cover)}$2`, "Cover story");

sub(/(<div class="coverunder">)[\s\S]*?(<\/div>\s*<\/div>\s*<div class="fb-right">)/,
  `$1${under.map(a => `<article class="story cu"><span class="kick">${esc(a.kick)}</span><h3><a href="${a.url}">${esc(a.title)}</a></h3>${byline(a)}</article>`).join("")}$2`, "Cover-under pair");

sub(/(<div class="fb-right">)[\s\S]*?(<\/div>\s*<\/main>)/,
  `$1${opinions.map(a => `<article class="imgcard"><a href="${a.url}"></a><span class="kick k-op">Opinion</span><h3><a href="${a.url}">${esc(a.title)}</a></h3></article>`).join("")}$2`, "Opinion cards (deduped)");

sub(/(<div class="bbl"><div class="bbkick">The Big Read<\/div>)[\s\S]*?(<\/div>\s*<div class="bbr">)[\s\S]*?(<\/div>\s*<\/div><\/section>)/,
  `$1<h2><a href="${bigread.url}">${esc(bigread.title)}</a></h2><a class="bbcta" href="${bigread.url}">Read the full story</a>$2<a href="${bigread.url}">${pic(bigread, "illo bbimg photo ")}</a>$3`, "The Big Read");

sub(/(<section class="wrap toprow">)[\s\S]*?(<\/section>)/,
  `$1${tops.map((a, i) => {
    const s = subs[i];
    return `<article class="topcell"><a href="${a.url}">${pic(a, "illo photo ")}</a>\n<span class="kick">${esc(a.kick)}</span><h3><a href="${a.url}">${esc(a.title)}</a></h3>\n${s ? `<div class="hsub"><a href="${s.url}">${esc(s.title)}</a></div>` : ""}<div class="tago">${ago(a.date)} </div></article>`;
  }).join("")}$2`, "Top Stories");

fs.writeFileSync("index.html", h);
console.log("\n  cover:    " + cover.title);
console.log("  big read: " + bigread.title);
console.log("  top:      " + tops.map(a => a.title.slice(0, 34)).join(" | "));
console.log("  distinct stories above the fold: " + seen.size);

// --- Trending bar -------------------------------------------------------
// Also frozen since the original bundle. Uses the newest stories not already
// carrying the page above the fold, so it adds rather than repeats.
{
  let f = fs.readFileSync("index.html", "utf8");
  const trend = arts.filter(a => !seen.has(a.url)).slice(0, 3);
  const rows = trend.map(a => `<a href="${a.url}">${esc(a.title)}</a>`).join('<span class="tdiv">·</span>');
  const re = /(<div class="wrap trow"><span class="tlabel">Trending<\/span>)[\s\S]*?(<\/div><\/div>)/;
  if (re.test(f)) {
    fs.writeFileSync("index.html", f.replace(re, `$1${rows}$2`));
    console.log("  ok   Trending bar -> " + trend.map(a => a.title.slice(0, 30)).join(" | "));
  } else console.log("  MISS Trending bar");
}
