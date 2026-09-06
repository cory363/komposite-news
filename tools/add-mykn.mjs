/**
 * Wire myKomposite into the pages: a Save control on articles, a Follow
 * control on section and topic pages, and the /saved/ page that reads both
 * back out of the browser's own storage.
 */
import fs from "node:fs";
import path from "node:path";
import { prettyDate } from "./lib-template.mjs";

const SKIP = new Set([".git", "node_modules", "tools", "assets"]);
function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p, out) : (e.name === "index.html" && out.push(p));
  }
  return out;
}
const esc = s => String(s).replace(/&(?!amp;|lt;|gt;|quot;|#)/g, "&amp;").replace(/"/g, "&quot;");
const SCRIPT = '<script src="/assets/mykn.js?v=1" defer></script>';

let saves = 0, follows = 0, scripts = 0;
for (const f of walk(".")) {
  let h = fs.readFileSync(f, "utf8");
  const before = h;

  // Save control, dropped into the existing share row on article pages.
  if (h.includes('"@type":"NewsArticle"') && h.includes('class="sharerow"') && !h.includes("kn-save")) {
    // Take the canonical and strip the origin. The previous pattern was
    // greedy and captured only the final slash, so every Save stored "/".
    const canon = (h.match(/rel="canonical" href="([^"]*)"/) || [])[1] || "";
    const url = canon.replace(/^https?:\/\/[^/]+/, "") || "/" + f.replace(/^\.\//, "").replace(/index\.html$/, "");
    const headline = ((h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || "").replace(/<[^>]*>/g, "");
    const kick = (h.match(/<span class="kick">([^<]*)</) || [])[1] || "";
    const date = (h.match(/"datePublished":"([^"]+)"/) || [])[1] || "";
    const btn = `<button class="kn-save" type="button" data-url="${esc(url)}" data-headline="${esc(headline)}" data-kick="${esc(kick)}" data-date="${esc(date ? prettyDate(date).toUpperCase() : "")}">Save</button>`;
    h = h.replace('<button class="sharebtn sharecopy"', btn + '<button class="sharebtn sharecopy"');
    saves++;
  }

  // Follow control on section and topic fronts.
  const isSection = /^[a-z-]+\/index\.html$/.test(f.replace(/^\.\//, "")) && !/^(authors|tag|assets|search|latest)\//.test(f.replace(/^\.\//, ""));
  const isTag = /^tag\/[a-z0-9-]+\/index\.html$/.test(f.replace(/^\.\//, ""));
  if ((isSection || isTag) && !h.includes("kn-follow")) {
    const m = h.match(/<h1 class="catname[^"]*">([\s\S]*?)<\/h1>/);
    if (m) {
      const name = m[1].replace(/<[^>]*>/g, "").trim();
      const href = "/" + f.replace(/^\.\//, "").replace(/index\.html$/, "");
      const slug = href.replace(/^\/|\/$/g, "");
      const btn = `<button class="kn-follow" type="button" data-slug="${esc(slug)}" data-name="${esc(name)}" data-href="${esc(href)}">Follow</button>`;
      h = h.replace(m[0], m[0].replace("</h1>", "") + btn + "</h1>");
      follows++;
    }
  }

  if (h !== before && !h.includes("mykn.js")) { h = h.replace("</body>", SCRIPT + "</body>"); scripts++; }
  if (h !== before) fs.writeFileSync(f, h);
}
console.log(`  save controls:   ${saves}`);
console.log(`  follow controls: ${follows}`);
console.log(`  script tags:     ${scripts}`);
