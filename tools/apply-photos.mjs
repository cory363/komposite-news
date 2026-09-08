/* Apply only the replacements verified by eye on the contact sheet.
   Automated Commons selection ran about half wrong (a crucifix in snow on
   parametric insurance, a portrait on startup moats); an off-topic photo is
   worse for credibility than a repeated one, so unverified picks are skipped. */
import fs from "node:fs";

const GOOD = new Set([2,7,10,11,12,13,14,17,18,20,21,22,23,24,26,27,28,30,31,34,35,
                      38,45,47,49,51,55,56,61,62,63,65]);
const picks = Object.entries(JSON.parse(fs.readFileSync("tools/data/unique-photos.json", "utf8")));
const fp = f => "https://commons.wikimedia.org/wiki/Special:FilePath/" +
  encodeURIComponent(f.replace(/ /g, "_"));

let applied = 0, skipped = [];
const log = [];
for (let i = 0; i < picks.length; i++) {
  const [slug, p] = picks[i];
  if (!GOOD.has(i + 1)) { skipped.push(slug); continue; }
  const file = slug + "/index.html";
  if (!fs.existsSync(file)) { skipped.push(slug); continue; }
  let h = fs.readFileSync(file, "utf8");
  const before = h;
  const newSrc = fp(p.file) + "?width=1400";
  const credit = `Wikimedia Commons${p.lic ? " &middot; " + p.lic : ""}`;

  // hero <img> src + intrinsic size
  h = h.replace(/(<img[^>]*class="[^"]*illo[^"]*"[^>]*\bsrc=")[^"]*(")/,
    (m, a, b) => a + newSrc + b);
  const hh = Math.round(1400 * p.height / p.width);
  h = h.replace(/(<img[^>]*class="[^"]*illo[^"]*"[^>]*)\bwidth="\d+" height="\d+"/,
    (m, a) => `${a}width="1400" height="${hh}"`);
  // schema ImageObject
  h = h.replace(/("image"\s*:\s*\{[^}]*?"url"\s*:\s*")[^"]*(")/, (m, a, b) => a + newSrc + b);
  h = h.replace(/("image"\s*:\s*\{[^}]*?"width"\s*:\s*)\d+/, (m, a) => a + 1400);
  h = h.replace(/("image"\s*:\s*\{[^}]*?"height"\s*:\s*)\d+/, (m, a) => a + hh);
  // og/twitter image
  h = h.replace(/(<meta property="og:image" content=")[^"]*(")/, (m, a, b) => a + newSrc + b);
  h = h.replace(/(<meta name="twitter:image" content=")[^"]*(")/, (m, a, b) => a + newSrc + b);
  // credit line
  h = h.replace(/(<span class="pcred">)[\s\S]*?(<\/span>)/, (m, a, b) => a + credit + b);

  if (h !== before) { fs.writeFileSync(file, h); applied++; log.push([slug, p.file]); }
}
fs.writeFileSync("tools/data/photos-applied.json", JSON.stringify(log, null, 1));
console.log(`  applied: ${applied}`);
console.log(`  left on a shared photo (await a working Unsplash key): ${skipped.length}`);
