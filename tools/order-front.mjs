/* Page order. The section blocks were the thing being redesigned and they sat
   below 4,800px of ancillary bands, so from the top of the page nothing had
   changed. Leonard's front is section blocks starting under the nav; the
   billboard, gallery strips and panels are punctuation between them, not a
   wall in front of them. */
import fs from "node:fs";

/* Run this LAST. build-sections.mjs finds its blocks by anchor, and once this
   has moved them and interleaved bands between, three of those anchors no
   longer resolve and the builder silently drops those sections. */
let h = fs.readFileSync("index.html", "utf8");
const cut = (re) => { const m = h.match(re); if (!m) return null; h = h.replace(m[0], ""); return m[0]; };

const secs = [];
for (;;) {
  const m = h.match(/<section class="wrap secblock lsec[\s\S]*?<\/section>\s*/);
  if (!m) break;
  secs.push(m[0]); h = h.replace(m[0], "");
}
const billboard = cut(/<section class="billboard">[\s\S]*?<\/section>\s*/);
const moreBand  = cut(/<div class="band"><span>MORE NEWS<\/span><\/div>\s*<section class="wrap toprow">[\s\S]*?<\/section>\s*/);
const inpix     = cut(/<section class="wrap inpix">[\s\S]*?<\/section>\s*/);
const reco      = cut(/<section class="recobar">[\s\S]*?<\/section>\s*/);
const nl        = cut(/<section class="nlstrip">[\s\S]*?<\/section>\s*/);

if (!secs.length) { console.error("  no section blocks found"); process.exit(1); }

/* Sections lead, with a band every few to break the run. */
const order = [];
secs.forEach((s, i) => {
  order.push(s);
  if (i === 2 && billboard) order.push(billboard);
  if (i === 5 && moreBand) order.push(moreBand);
  if (i === 7 && reco) order.push(reco);
  if (i === 9 && inpix) order.push(inpix);
  if (i === 10 && nl) order.push(nl);
});
for (const leftover of [billboard, moreBand, reco, inpix, nl])
  if (leftover && !order.includes(leftover)) order.push(leftover);

const anchor = h.indexOf("</main>");
if (anchor < 0) { console.error("  no </main> anchor"); process.exit(1); }
const at = anchor + "</main>".length;
h = h.slice(0, at) + "\n" + order.join("\n") + h.slice(at);
fs.writeFileSync("index.html", h);
console.log(`  reordered: ${secs.length} section blocks now lead, with ${order.length - secs.length} bands interleaved`);
