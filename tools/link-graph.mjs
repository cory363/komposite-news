/**
 * Internal link graph: who links to whom, and what is orphaned.
 *
 * Counts links that sit inside article bodies separately from links that come
 * from template furniture (nav, rail, feeds, related blocks). A page reachable
 * only through furniture is technically crawlable and carries almost no
 * editorial signal, which is the distinction that matters for indexing.
 */
import fs from "node:fs";
import path from "node:path";

const SKIP = new Set([".git", "node_modules", "tools", "assets"]);
function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p, out) : (e.name === "index.html" && out.push(p));
  }
  return out;
}
const files = walk(".");
const urlOf = f => "/" + f.replace(/^\.\//, "").replace(/index\.html$/, "");
const isArticle = f => f.split("/").length === 3 && !/^(authors|tag)\//.test(f);

const articles = files.filter(isArticle).map(urlOf);
const bodyIn = {}, furnIn = {}, bodyOut = {};
articles.forEach(u => { bodyIn[u] = 0; furnIn[u] = 0; bodyOut[u] = 0; });

for (const f of files) {
  const h = fs.readFileSync(f, "utf8");
  const src = urlOf(f);
  const body = (h.match(/<div class="artbody">([\s\S]*?)<\/div>\s*<div class="tagsrow"/) || h.match(/<div class="artbody">([\s\S]*?)<\/div>/) || [])[1] || "";
  const bodyLinks = new Set([...body.matchAll(/href="(\/[^"#?]*)"/g)].map(m => m[1]));
  const allLinks = new Set([...h.matchAll(/href="(\/[^"#?]*)"/g)].map(m => m[1]));
  for (const l of bodyLinks) if (l in bodyIn && l !== src) { bodyIn[l]++; bodyOut[src] = (bodyOut[src] || 0) + 1; }
  for (const l of allLinks) if (l in furnIn && l !== src && !bodyLinks.has(l)) furnIn[l]++;
}

const noBody = articles.filter(u => bodyIn[u] === 0);
const noAny = articles.filter(u => bodyIn[u] === 0 && furnIn[u] === 0);
const noOut = articles.filter(u => bodyOut[u] === 0);

console.log("articles:", articles.length);
console.log("  with NO inbound link of any kind (true orphans):", noAny.length);
noAny.slice(0, 10).forEach(u => console.log("     " + u));
console.log("  with no inbound EDITORIAL (in-body) link:", noBody.length);
console.log("  with no outbound in-body internal link:", noOut.length);
const inbound = articles.map(u => furnIn[u] + bodyIn[u]);
console.log("  inbound links per article: min", Math.min(...inbound), "median",
  [...inbound].sort((a,b)=>a-b)[Math.floor(inbound.length/2)], "max", Math.max(...inbound));
