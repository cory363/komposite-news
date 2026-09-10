/* Card images are copies of an article's hero. When a hero is re-imaged, the
   cards keep the old photo until a builder regenerates them — and the front
   builders would also flatten hand-tuned markup, so this propagates the hero
   on its own. Cards come in five shapes (llist-thumb, lstack-img, inpix-c,
   lhero-img, and bare overlay anchors), so match each <img> to the nearest
   article link around it rather than to any one class. */
import fs from "node:fs";
import path from "node:path";
const DRY = process.argv.includes("--dry");
const SKIP = new Set([".git", "node_modules", "tools", "assets"]);
const walk = (d, o = []) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) {
  if (SKIP.has(e.name) || e.name.startsWith(".")) continue;
  const p = path.join(d, e.name);
  e.isDirectory() ? walk(p, o) : (/\.html$/.test(e.name) && o.push(p)); } return o; };
const idOf = u => { const m = String(u).match(/photo-([A-Za-z0-9_-]{6,})/) || String(u).match(/FilePath\/([^?"]+)/); return m ? decodeURIComponent(m[1]) : String(u).split("?")[0]; };

/* Heroes, from the article pages themselves. */
const hero = {};
for (const p of walk(".")) {
  if (!/\/index\.html$/.test(p)) continue;
  const h = fs.readFileSync(p, "utf8");
  if (!/"@type":"NewsArticle"/.test(h)) continue;
  const m = h.match(/<img[^>]*class="[^"]*illo[^"]*"[^>]*src="([^"]+)"[^>]*alt="([^"]*)"/);
  if (!m) continue;
  hero["/" + p.replace(/index\.html$/, "")] = { src: m[1], alt: m[2], id: idOf(m[1]) };
}

/* A thumbnail does not need a 1400px file. */
const sized = (src, cls) => {
  const w = /llist-thumb|recothumb|topthumb/.test(cls) ? 400 : /lstack|inpix/.test(cls) ? 800 : 1400;
  return src.replace(/([?&])w=\d+/, `$1w=${w}`).replace(/([?&])width=\d+/, `$1width=${w}`);
};

let changed = 0, files = 0, unmatched = 0;
for (const p of walk(".")) {
  let h = fs.readFileSync(p, "utf8");
  if (/"@type":"NewsArticle"/.test(h)) continue;      // article pages own their hero
  const links = [...h.matchAll(/href="(\/[a-z0-9-]+\/[a-z0-9-]+\/)"/g)].map(m => ({ i: m.index, href: m[1] }));
  if (!links.length) continue;
  let out = "", last = 0, n = 0;
  for (const m of h.matchAll(/<img[^>]*src="https:[^"]+"[^>]*>/g)) {
    const tag = m[0];
    if (!/(unsplash|wikimedia|wikipedia)/.test(tag)) continue;
    let best = null, bd = 1e9;
    for (const l of links) {
      const d = l.i < m.index ? m.index - l.i : (l.i - m.index) * 1.6;   // a link before its image is the usual shape
      if (d < bd && d < 900 && hero[l.href]) { bd = d; best = l.href; }
    }
    if (!best) { unmatched++; continue; }
    const want = hero[best];
    const cls = (h.slice(Math.max(0, m.index - 200), m.index).match(/class="([^"]*)"[^>]*>\s*$/) || ["", ""])[1];
    let t = tag.replace(/(\bsrc=")[^"]*(")/, (x, a, b) => a + sized(want.src, cls).replace(/&(?!amp;)/g, "&amp;") + b);
    if (want.alt) t = t.replace(/(\balt=")[^"]*(")/, (x, a, b) => a + want.alt + b);
    if (t === tag) continue;                 /* caption drift counts too, not just the photo */
    out += h.slice(last, m.index) + t; last = m.index + tag.length; n++;
  }
  if (n) { out += h.slice(last); if (!DRY) fs.writeFileSync(p, out); changed += n; files++;
    console.log("  " + String(n).padStart(3) + "  " + p); }
}
console.log(`\n  ${DRY ? "would update" : "updated"} ${changed} card images across ${files} files  |  unmatched images left alone: ${unmatched}`);
