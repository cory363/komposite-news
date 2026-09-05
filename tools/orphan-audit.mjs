/**
 * Reachability audit: can a crawler starting at the homepage reach every
 * article within two clicks, and are there any broken internal links?
 *
 * Depth 1 = linked directly from the homepage.
 * Depth 2 = linked from any page that is itself linked from the homepage.
 */
import fs from "node:fs";
import path from "node:path";

const SKIP = new Set([".git", "node_modules", "tools", "assets"]);
function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p, out) : (e.name.endsWith(".html") && out.push(p));
  }
  return out;
}
const files = walk(".");
const urlOf = f => "/" + f.replace(/^\.\//, "").replace(/index\.html$/, "");
const pageAt = u => {
  const c = u.replace(/^\//, "");
  for (const cand of [c + "index.html", c, c + ".html"]) if (fs.existsSync(cand)) return cand;
  return null;
};
const linksFrom = f => [...new Set([...fs.readFileSync(f, "utf8").matchAll(/href="(\/[^"#?]*)"/g)].map(m => m[1]))];

// broken links + href="#"
let refs = 0, broken = [], hash = 0;
for (const f of files) {
  const h = fs.readFileSync(f, "utf8");
  hash += (h.match(/href="#"/g) || []).length;
  for (const m of h.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    refs++;
    const u = m[1].split("#")[0].split("?")[0];
    if (!u.startsWith("/")) continue;
    const p = "." + u;
    const okFile = u.endsWith("/") ? fs.existsSync(p + "index.html")
      : (fs.existsSync(p) || fs.existsSync(p + "/index.html") || fs.existsSync(p + ".html"));
    if (!okFile) broken.push(u + "  in " + f);
  }
}

// BFS from the homepage
const depth = new Map([["/", 0]]);
let frontier = ["/"];
for (let d = 1; d <= 2; d++) {
  const next = [];
  for (const u of frontier) {
    const f = pageAt(u); if (!f) continue;
    for (const l of linksFrom(f)) {
      if (depth.has(l)) continue;
      if (!pageAt(l)) continue;
      depth.set(l, d); next.push(l);
    }
  }
  frontier = next;
}

const articles = files.filter(f => f.split("/").length === 3 && !/^(authors|tag)\//.test(f)).map(urlOf);
const unreachable = articles.filter(u => !depth.has(u));
const deep = articles.filter(u => depth.get(u) > 2);

console.log("internal refs checked:      " + refs);
console.log("broken internal links:      " + broken.length);
broken.slice(0, 8).forEach(b => console.log("    " + b));
console.log('href="#":                   ' + hash);
console.log("articles total:             " + articles.length);
console.log("  reachable in 1 click:     " + articles.filter(u => depth.get(u) === 1).length);
console.log("  reachable in 2 clicks:    " + articles.filter(u => depth.get(u) === 2).length);
console.log("  NOT reachable in 2:       " + (unreachable.length + deep.length));
[...unreachable, ...deep].slice(0, 10).forEach(u => console.log("    " + u));
process.exit(broken.length || hash || unreachable.length || deep.length ? 1 : 0);
