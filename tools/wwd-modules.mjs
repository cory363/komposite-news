/* WWD's picture grammar is horizontal: a small square thumbnail beside text,
   not a wide frame above it. Three modules built to that shape —
   the ticker, thumbnails in the Top stories rail, and the recommends band. */
import fs from "node:fs";
import path from "node:path";

const esc = s => String(s).replace(/&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const SECS = ["ai","blockchain","crypto","business","technology","markets","fintech","cybersecurity","startups","policy","culture","music"];
const sq = u => String(u).includes("images.unsplash.com")
  ? String(u).replace(/([?&])w=\d+/, "$1w=320") + "&h=320&fit=crop"
  : String(u).replace(/\?width=\d+/, "?width=320");

function articles(sec) {
  if (!fs.existsSync(sec)) return [];
  return fs.readdirSync(sec, { withFileTypes: true }).filter(e => e.isDirectory())
    .map(e => path.join(sec, e.name, "index.html")).filter(f => fs.existsSync(f))
    .map(f => {
      const h = fs.readFileSync(f, "utf8");
      const t = h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
      const d = h.match(/"datePublished":"([^"]+)"/);
      const im = h.match(/<figure class="arthero">[\s\S]*?<img[^>]*\ssrc="([^"]*)"[^>]*alt="([^"]*)"/);
      const k = h.match(/<(?:div|span) class="kick[^"]*">([\s\S]*?)<\/(?:div|span)>/);
      const sf = h.match(/<p class="[^"]*artdeck[^"]*"[^>]*>([\s\S]*?)<\/p>/);
      const au = h.match(/"author":\{[^}]*?"name":"([^"]+)"/);
      return { url: "/" + f.replace(/index\.html$/, ""), sec,
        title: t ? t[1].replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").trim() : "",
        kick: k ? k[1].replace(/<[^>]*>/g, "").trim() : sec,
        dek: sf ? sf[1].replace(/<[^>]*>/g, "").trim() : "",
        author: au ? au[1] : "", date: d ? d[1] : "",
        img: im ? im[1] : null, alt: im ? im[2] : "" };
    }).filter(a => a.title && a.date && a.img).sort((a, b) => b.date.localeCompare(a.date));
}

const all = SECS.flatMap(articles).sort((a, b) => b.date.localeCompare(a.date));
const imgId = u => { const m = String(u).match(/photo-([A-Za-z0-9_-]{6,})/) || String(u).match(/FilePath\/([^?"]+)/); return m ? decodeURIComponent(m[1]) : String(u); };

let h = fs.readFileSync("index.html", "utf8");
const used = new Set([...h.matchAll(/<img[^>]*\bsrc="([^"]+)"/g)].map(m => imgId(m[1])));
/* Dedupe on URL as well as image. The recommends band was repeating the four
   stories already sitting in the Top stories rail, because the rail is a text
   list and contributed no images to the used set. */
const onPage = new Set([...h.matchAll(/href="(\/[a-z0-9-]+\/[a-z0-9-]+\/)"/g)].map(m => m[1]));
const pick = (n, avoid) => {
  const out = [];
  for (const a of all) {
    if (avoid && (used.has(imgId(a.img)) || onPage.has(a.url))) continue;
    if (out.some(x => x.url === a.url)) continue;
    out.push(a); used.add(imgId(a.img)); onPage.add(a.url);
    if (out.length === n) break;
  }
  return out;
};

/* 1. Ticker: square thumb left, kicker / headline / two-line dek right. */
const tick = pick(6, false);
const ticker = `<div class="tickwrap"><div class="wrap tickrow">
${tick.map(a => `<a class="tickcard" href="${a.url}">
<span class="tickthumb"><img src="${esc(sq(a.img))}" alt="${esc(a.alt)}" loading="lazy"></span>
<span class="ticktx"><span class="tickkick">${esc(a.kick)}</span><span class="tickhead">${esc(a.title)}</span><span class="tickdek">${esc(a.dek.slice(0, 96))}</span></span></a>`).join("")}
</div></div>`;
h = h.replace(/<div class="trend">[\s\S]*?<\/div><\/div>/, ticker);

/* 2. Top stories: headline left, square thumb right, as WWD's Eye rail. */
h = h.replace(/<div class="abctop abctop-num">([\s\S]*?)<\/ol>\s*<\/div>/, (m, inner) => {
  const items = [...inner.matchAll(/<li><a href="([^"]+)">([\s\S]*?)<\/a><\/li>/g)];
  if (!items.length) return m;
  const rows = items.map(([, url, title]) => {
    const a = all.find(x => x.url === url);
    const thumb = a ? `<span class="topthumb"><img src="${esc(sq(a.img))}" alt="${esc(a.alt)}" loading="lazy"></span>` : "";
    return `<li><a href="${url}"><span class="toptx">${title}</span>${thumb}</a></li>`;
  }).join("");
  return `<div class="abctop abctop-num abctop-thumbs"><div class="abctop-h">Top stories</div><ol>${rows}</ol></div>`;
});

/* 3. Recommends: grey band, thumb left, kicker and headline right. */
if (!/recobar/.test(h)) {
  const recs = pick(4, true);
  if (recs.length === 4) {
    const band = `<section class="recobar"><div class="wrap recorow">
<h2 class="recoh">Komposite Recommends</h2>
<div class="recogrid">
${recs.map(a => `<a class="recocard" href="${a.url}">
<span class="recothumb"><img src="${esc(sq(a.img))}" alt="${esc(a.alt)}" loading="lazy"></span>
<span class="recotx"><span class="recokick">${esc(a.kick)}</span><span class="recohead">${esc(a.title)}</span></span></a>`).join("")}
</div></div></section>\n`;
    h = h.replace(/(<section class="wrap nlpromo">)/, band + "$1");
  }
}
fs.writeFileSync("index.html", h);
console.log(`  ticker cards: ${tick.length}   rail thumbs: ${/abctop-thumbs/.test(h) ? "yes" : "no"}   recommends: ${/recobar/.test(h) ? "yes" : "no"}`);
