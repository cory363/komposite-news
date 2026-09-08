/* Five modules taken from abcnews.com's homepage. Deliberately NOT taken:
   the red LIVE badge, the video carousel with duration chips, and the
   "Live Updates" banner. We have no live desk and no video; faking either
   is the fastest way to lose a reader who knows the beat. */
import fs from "node:fs";
import path from "node:path";

const esc = s => String(s).replace(/&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const SECS = ["ai","blockchain","crypto","business","technology","markets","fintech","cybersecurity","startups","policy","culture","music"];
const imgId = u => { const m = String(u).match(/photo-([A-Za-z0-9_-]{6,})/) || String(u).match(/FilePath\/([^?"]+)/); return m ? decodeURIComponent(m[1]) : String(u).split("?")[0]; };

function articles(sec) {
  const dir = sec;
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).filter(e => e.isDirectory())
    .map(e => path.join(dir, e.name, "index.html")).filter(f => fs.existsSync(f))
    .map(f => {
      const h = fs.readFileSync(f, "utf8");
      const t = h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
      const d = h.match(/"datePublished"\s*:\s*"([^"]+)"/);
      const sf = h.match(/<p class="standfirst"[^>]*>([\s\S]*?)<\/p>/);
      const im = h.match(/<figure class="arthero">[\s\S]*?<img[^>]*\ssrc="([^"]*)"[^>]*alt="([^"]*)"/);
      const k = h.match(/<div class="kick[^"]*">([\s\S]*?)<\/div>/);
      return { url: "/" + f.replace(/index\.html$/, ""), sec,
        title: t ? t[1].replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").trim() : "",
        dek: sf ? sf[1].replace(/<[^>]*>/g, "").trim() : "",
        kick: k ? k[1].replace(/<[^>]*>/g, "").trim() : sec,
        date: d ? d[1] : "", img: im ? im[1] : null, alt: im ? im[2] : "" };
    }).filter(a => a.title && a.date && a.img).sort((a, b) => b.date.localeCompare(a.date));
}

let h = fs.readFileSync("index.html", "utf8");
const onPage = new Set([...h.matchAll(/<img[^>]*\bsrc="([^"]+)"/g)].map(m => imgId(m[1])));
const all = SECS.flatMap(articles);
const done = [];

/* 1. Numbered Top stories rail — now emitted by build-front-zone.mjs itself,
      because patching it here was undone every time the zone regenerated. */

/* 2. Dek under the lead headline: ABC's hero carries a descriptive line. */
if (!/abclead-dek/.test(h)) {
  const m = h.match(/<article class="abclead">[\s\S]*?<h2[^>]*>\s*<a href="([^"]+)"/);
  if (m) {
    const lead = all.find(a => a.url === m[1] || a.url === m[1].replace(/\/$/, "") + "/");
    if (lead?.dek) {
      const dek = `<p class="abclead-dek">${esc(lead.dek.slice(0, 190))}</p>`;
      h = h.replace(/(<article class="abclead">[\s\S]*?<h2[^>]*>[\s\S]*?<\/h2>)/, `$1\n        ${dek}`);
      done.push("lead standfirst (dek)");
    }
  }
}


/* 4. "In pictures": ABC's photo-gallery strip. Uses heroes not already on the
      page so the homepage stays free of repeated imagery. */
if (!/inpix/.test(h)) {
  const pool = all.filter(a => a.img && !onPage.has(imgId(a.img)));
  const seen = new Set(); const pix = [];
  for (const a of pool) { const id = imgId(a.img); if (seen.has(id)) continue; seen.add(id); pix.push(a); if (pix.length === 5) break; }
  if (pix.length === 5) {
    const cells = pix.map(a => `<a class="inpix-c" href="${a.url}"><img src="${esc(a.img)}" alt="${esc(a.alt)}" loading="lazy"><span class="inpix-t">${esc(a.title.length > 52 ? a.title.slice(0, 51).trim() + "…" : a.title)}</span></a>`).join("");
    const block = `<section class="wrap inpix"><div class="sechead-row"><h2>In pictures</h2><a class="allof" href="/latest/">All latest coverage &rsaquo;</a></div><div class="inpix-g">${cells}</div></section>\n`;
    h = h.replace(/(<section class="divpanel">)/, block + "$1");
    pix.forEach(a => onPage.add(imgId(a.img)));
    done.push("In pictures gallery strip");
  }
}

/* 5. Newsletter capture, styled as ABC's app-promo block rather than the
      footer form we had. */
if (!/nlpromo/.test(h)) {
  const block = `<section class="wrap nlpromo"><div class="nlpromo-l"><div class="nlpromo-k">The Komposite Briefing</div><h2>One email. The stories that moved the market.</h2><p>A short morning read on AI, digital assets and capital markets — written for people who have to act on it.</p></div><form class="nlpromo-f" action="/contact/" method="get"><label class="visually-hidden" for="nlp-email">Email address</label><input id="nlp-email" name="email" type="email" placeholder="you@company.com" required><button type="submit">Subscribe</button></form></section>\n`;
  h = h.replace(/(<section class="divpanel">)/, block + "$1");
  done.push("newsletter promo module");
}

fs.writeFileSync("index.html", h);
console.log("  added:\n" + (done.length ? done.map(d => "    - " + d).join("\n") : "    (nothing; all present)"));
