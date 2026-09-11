/* Wires the two editions together: a language tab in the nav on every English
   page, and hreflang pairs on the fifteen articles that exist in both. A page
   with no Spanish counterpart points at the Spanish front rather than a 404,
   and carries no hreflang, because claiming an alternate that does not exist
   is worse than claiming none. */
import fs from "node:fs";
import path from "node:path";
const ES = JSON.parse(fs.readFileSync("tools/data/es-articles.json", "utf8"));
const has = new Set(ES.map(a => a.slug));
const SECS = new Set(ES.map(a => a.slug.split("/")[0]));
const SKIP = new Set([".git", "node_modules", "tools", "assets", "es"]);
const walk = (d, o = []) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) {
  if (SKIP.has(e.name) || e.name.startsWith(".")) continue;
  const p = path.join(d, e.name);
  e.isDirectory() ? walk(p, o) : (/\.html$/.test(e.name) && o.push(p)); } return o; };

let tabs = 0, pairs = 0;
for (const p of walk(".")) {
  let h = fs.readFileSync(p, "utf8");
  const before = h;
  const slug = p.replace(/\/index\.html$/, "").replace(/\.html$/, "");
  const target = has.has(slug) ? `/es/${slug}/`
    : (p === "index.html" ? "/es/" : (SECS.has(slug) ? `/es/${slug}/` : "/es/"));

  if (!/knav-lang/.test(h) && /<div class="knav-utils">/.test(h)) {
    h = h.replace(/(<div class="knav-utils">)/,
      (m, o) => o + `\n    <a class="knav-lang" data-short="ES" href="${target}" hreflang="es">Español</a>`);
    tabs++;
  }
  /* Check for the <link>, not the tab — the tab I just inserted also carries
     hreflang="es" and was matching this test. */
  if (has.has(slug) && !/<link rel="alternate" hreflang="es"/.test(h)) {
    const en = `https://kompositenews.com/${slug}/`;
    const es = `https://kompositenews.com/es/${slug}/`;
    h = h.replace(/(<link rel="canonical"[^>]*>)/, (m, o) => o +
      `\n<link rel="alternate" hreflang="en" href="${en}">` +
      `\n<link rel="alternate" hreflang="es" href="${es}">` +
      `\n<link rel="alternate" hreflang="x-default" href="${en}">`);
    pairs++;
  }
  if (h !== before) fs.writeFileSync(p, h);
}
console.log(`  language tab added to ${tabs} English pages  |  hreflang pairs on ${pairs} articles`);
