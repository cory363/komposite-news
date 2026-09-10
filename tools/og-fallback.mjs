/* 148 pages carried Open Graph title, description and url but no image — the
   homepage among them. Shared to X, LinkedIn, Slack or iMessage they rendered
   as a bare text link. Article pages already ship their own photograph; every
   other page now falls back to a branded 1200x630 card built from the
   masthead, and twitter:card moves from "summary", which is a small square
   thumbnail, to the large-image layout the card is drawn for. */
import fs from "node:fs";
import path from "node:path";
const SKIP = new Set([".git", "node_modules", "tools", "assets"]);
const walk = (d, o = []) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) {
  if (SKIP.has(e.name) || e.name.startsWith(".")) continue;
  const p = path.join(d, e.name);
  e.isDirectory() ? walk(p, o) : (/\.html$/.test(e.name) && o.push(p)); } return o; };

const IMG = "https://kompositenews.com/assets/img/og-default.png";
const BLOCK = `<meta property="og:image" content="${IMG}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Komposite News">`;

let n = 0, tw = 0;
for (const p of walk(".")) {
  let h = fs.readFileSync(p, "utf8");
  if (/og:image/.test(h)) continue;
  const before = h;
  if (/<meta property="og:type"[^>]*>/.test(h))
    h = h.replace(/(<meta property="og:type"[^>]*>)/, (m, a) => a + "\n" + BLOCK);
  else if (/<meta property="og:url"[^>]*>/.test(h))
    h = h.replace(/(<meta property="og:url"[^>]*>)/, (m, a) => a + "\n" + BLOCK);
  else continue;

  if (/<meta name="twitter:card" content="summary">/.test(h)) {
    h = h.replace('<meta name="twitter:card" content="summary">',
      '<meta name="twitter:card" content="summary_large_image">'); tw++;
  } else if (!/twitter:card/.test(h)) {
    h = h.replace(BLOCK, BLOCK + '\n<meta name="twitter:card" content="summary_large_image">'); tw++;
  }
  if (!/twitter:image/.test(h))
    h = h.replace(BLOCK, BLOCK + `\n<meta name="twitter:image" content="${IMG}">`);

  if (h !== before) { fs.writeFileSync(p, h); n++; }
}
console.log(`  share card added to ${n} pages  |  twitter:card upgraded to large image on ${tw}`);
