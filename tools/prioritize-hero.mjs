/* Every image on the site carried loading="lazy", the hero included. The hero
   is the largest element above the fold — it *is* the LCP on an article page —
   and lazy-loading it tells the browser to defer the one paint the score is
   measured on. The hero now loads eagerly at high priority; everything below
   it stays lazy. The image CDN also went unannounced, so the connection was
   opened cold at the moment it was needed. */
import fs from "node:fs";
import path from "node:path";
const SKIP = new Set([".git", "node_modules", "tools", "assets"]);
const walk = (d, o = []) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) {
  if (SKIP.has(e.name) || e.name.startsWith(".")) continue;
  const p = path.join(d, e.name);
  e.isDirectory() ? walk(p, o) : (/\.html$/.test(e.name) && o.push(p)); } return o; };
const idOf = u => { const m = String(u).match(/photo-([A-Za-z0-9_-]{6,})/) || String(u).match(/FilePath\/([^?"]+)/); return m ? decodeURIComponent(m[1]) : String(u).split("?")[0]; };

/* Intrinsic sizes, so the hero also reserves its space instead of shifting. */
const dims = {};
for (const p of walk(".")) {
  if (!/\/index\.html$/.test(p)) continue;
  const h = fs.readFileSync(p, "utf8");
  if (!/"@type":"NewsArticle"/.test(h)) continue;
  const t = (h.match(/<img[^>]*class="[^"]*illo[^"]*"[^>]*>/) || [])[0];
  if (!t) continue;
  const w = (t.match(/width="(\d+)"/) || [])[1], hh = (t.match(/height="(\d+)"/) || [])[1];
  const src = (t.match(/src="([^"]+)"/) || [])[1];
  if (w && hh && src) dims[idOf(src)] = { w: +w, h: +hh };
}

const PRE = `<link rel="preconnect" href="https://images.unsplash.com" crossorigin>
<link rel="dns-prefetch" href="https://images.unsplash.com">
<link rel="preconnect" href="https://upload.wikimedia.org" crossorigin>`;

let hero = 0, sized = 0, pre = 0;
for (const p of walk(".")) {
  let h = fs.readFileSync(p, "utf8");
  const before = h;

  /* The hero is the .illo on an article page and the first remote image
     anywhere else — on the front that is the lead, on a section page its
     lead card. Only the first one is promoted; the rest stay lazy. */
  const isArticle = /"@type":"NewsArticle"/.test(h);
  const re = isArticle ? /<img[^>]*class="[^"]*illo[^"]*"[^>]*>/ : /<img[^>]*src="https:[^"]*"[^>]*>/;
  const m = h.match(re);
  if (m) {
    let t = m[0];
    const orig = t;
    t = t.replace(/\s*loading="lazy"/, "");
    if (!/loading=/.test(t)) t = t.replace(/<img/, `<img loading="eager"`);
    if (!/fetchpriority=/.test(t)) t = t.replace(/<img/, `<img fetchpriority="high"`);
    if (!/decoding=/.test(t)) t = t.replace(/<img/, `<img decoding="async"`);
    /* Only article heroes take width/height. Elsewhere the card and hero
       classes size images with CSS aspect-ratio and set no height, so the
       attribute wins as a presentational hint and stretches the image. */
    if (isArticle && !/width="\d+"/.test(t)) {
      const src = (t.match(/src="([^"]+)"/) || [])[1] || "";
      const d = dims[idOf(src)];
      const want = +(src.match(/[?&](?:w|width)=(\d+)/) || [])[1] || (d ? d.w : 0);
      if (d && want) { t = t.replace(/<img/, `<img width="${want}" height="${Math.round(want * d.h / d.w)}"`); sized++; }
    }
    if (t !== orig) { h = h.replace(orig, t); hero++; }
  }

  if (!/preconnect[^>]*images\.unsplash/.test(h)) {
    h = h.replace(/<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com">/, m2 => m2 + "\n" + PRE);
    if (h !== before) pre++;
  }
  if (h !== before) fs.writeFileSync(p, h);
}
console.log(`  heroes promoted to eager/high priority: ${hero}  |  given intrinsic dimensions: ${sized}  |  pages with CDN preconnect: ${pre}`);
