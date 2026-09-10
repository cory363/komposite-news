/* The hero credit lives in two places: .pcred, overlaid on the photo, and
   .ccredit inside the figcaption. Only .pcred was ever rewritten when an image
   changed, so 44 Unsplash photos still carried "Komposite News illustration"
   and five named Wikimedia. CSS hides .ccredit behind .pcred, so none of it
   showed — but it is the text a crawler reads. Sync it from .pcred. */
import fs from "node:fs";
import path from "node:path";
const SKIP = new Set([".git", "node_modules", "tools", "assets"]);
const walk = (d, o = []) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) {
  if (SKIP.has(e.name) || e.name.startsWith(".")) continue;
  const p = path.join(d, e.name);
  e.isDirectory() ? walk(p, o) : (e.name === "index.html" && o.push(p)); } return o; };

let fixed = 0;
for (const p of walk(".")) {
  let h = fs.readFileSync(p, "utf8");
  if (!/"@type":"NewsArticle"/.test(h)) continue;
  const img = h.match(/<img[^>]*class="[^"]*illo[^"]*"[^>]*src="([^"]+)"/);
  if (!img) continue;
  /* Commons heroes carry the same mismatch, so sync every hero, not only the
     Unsplash ones — the source is whatever .pcred already says. */
  const pc = h.match(/<span class="pcred">([\s\S]*?)<\/span>/);
  if (!pc || !pc[1].replace(/<[^>]+>/g, "").trim()) continue;
  const credit = pc[1].replace(/\s*\n\s*/g, "").trim();
  const before = h;
  h = h.replace(/(<span class="ccredit">)[\s\S]*?(<\/span>)/, (m, a, b) => a + credit + b);
  if (h !== before) { fs.writeFileSync(p, h); fixed++; }
}
console.log("  visible-credit slots synced to the photographer: " + fixed);
