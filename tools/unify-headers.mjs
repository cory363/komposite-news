/* Every header on the page uses the same device: a white italic caps label in
   a skewed black tab, centred on a hairline. The older .band and .sechead-row
   markers predate it and were still scattered down the front. */
import fs from "node:fs";
import path from "node:path";

const SKIP = new Set([".git", "node_modules", "tools", "assets"]);
const walk = (d, out = []) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (SKIP.has(e.name) || e.name.startsWith(".")) continue;
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p, out) : (e.name === "index.html" && out.push(p));
  }
  return out;
};

const title = s => s.trim().replace(/\s+/g, " ").toLowerCase()
  .replace(/\b([a-z])/g, (m, c) => c.toUpperCase());

let ticker = 0, bands = 0, heads = 0, files = 0;
for (const p of walk(".")) {
  let h = fs.readFileSync(p, "utf8");
  const before = h;

  const t = h.replace(/<div class="tickwrap">[\s\S]*?<\/div><\/div>\s*/, "");
  if (t !== h) ticker++;
  h = t;

  h = h.replace(/<div class="band"><span>([\s\S]*?)<\/span><\/div>/g, (m, inner) => {
    bands++;
    const href = (inner.match(/href="([^"]+)"/) || [])[1];
    const text = title(inner.replace(/<[^>]+>/g, ""));
    return `<div class="lsechead"><span class="lseclabel">${href ? `<a href="${href}">${text}</a>` : text}</span></div>`;
  });

  h = h.replace(/<div class="sechead-row">([\s\S]*?)<\/div>/g, (m, inner) => {
    heads++;
    const h2 = inner.match(/<h2[^>]*>(?:<a href="([^"]+)">)?([^<]*)/);
    const more = inner.match(/<a class="allof" href="([^"]+)"[^>]*>([^<]*)/);
    const label = h2 ? (h2[1] ? `<a href="${h2[1]}">${h2[2]}</a>` : h2[2]) : "";
    const tail = more ? `<a class="lmore lmore-head" href="${more[1]}">${more[2]}</a>` : "";
    return `<div class="lsechead"><span class="lseclabel">${label}</span></div>${tail}`;
  });

  if (h !== before) { fs.writeFileSync(p, h); files++; }
}
console.log(`  files touched ${files} | ticker removed ${ticker} | band headers ${bands} | sechead rows ${heads}`);
