/* Section pages still ran the original text-only feed: one photo on the whole
   page and a list of headlines stopping short of the right margin. This swaps
   that list for the same 4-across card grid the homepage uses. */
import fs from "node:fs";
import path from "node:path";

const aslug = n => n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const esc = s => String(s).replace(/&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const SECS = [["ai","AI"],["blockchain","Blockchain"],["crypto","Crypto"],["business","Business"],
  ["technology","Technology"],["markets","Markets"],["fintech","Fintech"],["cybersecurity","Cybersecurity"],
  ["startups","Startups"],["policy","Policy"],["culture","Culture"],["music","Music"]];
const imgId = u => { const m = String(u).match(/photo-([A-Za-z0-9_-]{6,})/) || String(u).match(/FilePath\/([^?"]+)/); return m ? decodeURIComponent(m[1]) : String(u).split("?")[0]; };

function ago(d) {
  const hrs = (Date.now() - new Date(d)) / 36e5;
  if (hrs < 1) return "Just now";
  if (hrs < 24) return Math.round(hrs) + " hours ago";
  const days = Math.round(hrs / 24);
  return days === 1 ? "1 day ago" : days < 8 ? days + " days ago"
    : new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function articles(sec) {
  return fs.readdirSync(sec, { withFileTypes: true }).filter(e => e.isDirectory())
    .map(e => path.join(sec, e.name, "index.html")).filter(f => fs.existsSync(f))
    .map(f => {
      const h = fs.readFileSync(f, "utf8");
      const t = h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
      const d = h.match(/"datePublished"\s*:\s*"([^"]+)"/);
      const im = h.match(/<figure class="arthero">[\s\S]*?<img[^>]*\ssrc="([^"]*)"[^>]*alt="([^"]*)"/);
      const k = h.match(/<(?:div|span) class="kick[^"]*">([\s\S]*?)<\/(?:div|span)>/);
      const au = h.match(/"author":\{[^}]*?"name":"([^"]+)"/);
      const dk = h.match(/<p class="[^"]*artdeck[^"]*"[^>]*>([\s\S]*?)<\/p>/);
      return { url: "/" + f.replace(/index\.html$/, ""),
        title: t ? t[1].replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").trim() : "",
        kick: k ? k[1].replace(/<[^>]*>/g, "").trim() : "",
        date: d ? d[1] : "", author: au ? au[1] : "", dek: dk ? dk[1].replace(/<[^>]*>/g, "").trim() : "", img: im ? im[1] : null, alt: im ? im[2] : "" };
    }).filter(a => a.title && a.date && a.img).sort((a, b) => b.date.localeCompare(a.date));
}

/* The feed contains nested <div>s, so walk depth rather than trusting the
   first closing tag. */
function blockEnd(h, start) {
  let i = h.indexOf(">", start) + 1, depth = 1;
  const re = /<\/?div\b[^>]*>/g; re.lastIndex = i;
  let m;
  while ((m = re.exec(h))) {
    depth += m[0][1] === "/" ? -1 : 1;
    if (depth === 0) return m.index + m[0].length;
  }
  return -1;
}

let done = 0;
for (const [slug, label] of SECS) {
  const page = slug + "/index.html";
  if (!fs.existsSync(page)) continue;
  let h = fs.readFileSync(page, "utf8");

  const marker = h.indexOf('<div class="feedlist">');
  const existing = h.indexOf('<div class="secpage-grid">');
  const start = marker >= 0 ? marker : existing;
  if (start < 0) { console.log("  --   " + label + " (no feed)"); continue; }
  const end = blockEnd(h, start);
  if (end < 0) { console.log("  --   " + label + " (unbalanced)"); continue; }

  // Anything already shown above the feed stays out of the grid.
  const above = h.slice(0, start);
  const shown = new Set([...above.matchAll(new RegExp(`href="(/${slug}/[^"]+)"`, "g"))].map(m => m[1]));
  const usedImg = new Set([...above.matchAll(/<img[^>]*\bsrc="([^"]+)"/g)].map(m => imgId(m[1])));

  const picks = [];
  for (const a of articles(slug)) {
    if (shown.has(a.url) || usedImg.has(imgId(a.img))) continue;
    usedImg.add(imgId(a.img)); picks.push(a);
    if (picks.length === 12) break;
  }
  if (!picks.length) { console.log("  --   " + label + " (nothing left)"); continue; }

  /* Section pages ran a four-across card grid while the front had moved to
     WWD's weighting, so the two read as different sites. Same structure here:
     two feature blocks with the picture in different places, then rows. */
  const by = a => a.author ? `<div class="cardby">By <a href="/authors/${aslug(a.author)}/">${esc(a.author)}</a></div>` : "";
  const fSide = a => `<article class="wfeat wfeat-side">
<a class="wfeat-img" href="${a.url}"><img src="${esc(a.img)}" alt="${esc(a.alt)}" loading="lazy"></a>
<div class="wfeat-tx"><div class="abckick">${esc(a.kick || label)}</div>
<h3><a href="${a.url}">${esc(a.title)}</a></h3>
${a.dek ? `<p class="wfeat-dek">${esc(a.dek)}</p>` : ""}
${by(a)}<span class="abctime">${ago(a.date)}</span></div></article>`;
  const fStack = a => `<article class="wfeat wfeat-stack">
<div class="wfeat-tx"><div class="abckick">${esc(a.kick || label)}</div>
<h3><a href="${a.url}">${esc(a.title)}</a></h3>
${a.dek ? `<p class="wfeat-dek">${esc(a.dek)}</p>` : ""}
${by(a)}</div>
<a class="wfeat-img" href="${a.url}"><img src="${esc(a.img)}" alt="${esc(a.alt)}" loading="lazy"></a>
<span class="abctime">${ago(a.date)}</span></article>`;
  const fRow = a => `<article class="wrow">
<a class="wrow-thumb" href="${a.url}"><img src="${esc(a.img)}" alt="${esc(a.alt)}" loading="lazy"></a>
<div class="wrow-tx"><div class="abckick">${esc(a.kick || label)}</div>
<h3><a href="${a.url}">${esc(a.title)}</a></h3>
${by(a)}<span class="abctime">${ago(a.date)}</span></div></article>`;

  const grid = `<div class="secpage-grid">${picks.length > 1 ? `<div class="wfeatrow">${fSide(picks[0])}${fStack(picks[1])}</div>` : ""}
<div class="wrowgrid">${picks.slice(2).map(fRow).join("")}</div></div>`;
  h = h.slice(0, start) + grid + h.slice(end);
  fs.writeFileSync(page, h);
  console.log(`  ok   ${label.padEnd(14)} ${picks.length} cards`);
  done++;
}
console.log("\n  section pages rebuilt: " + done);
