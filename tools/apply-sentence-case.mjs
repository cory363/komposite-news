/**
 * Convert article headlines to sentence case everywhere they appear.
 *
 * Rather than hunting selectors, this collects the canonical headline from
 * each article's h1, computes the sentence-case form, and replaces that exact
 * string across every HTML, XML and JSON file. Cards, rails, related blocks,
 * title tags, OG tags, JSON-LD, RSS and the search index all follow from one
 * map, and nothing that is not a headline is touched.
 *
 * Deks are left alone: they are prose and already sentence case.
 *
 *   node tools/apply-sentence-case.mjs --dry     preview
 *   node tools/apply-sentence-case.mjs           apply
 */
import fs from "node:fs";
import path from "node:path";
import { buildVocabulary, toSentenceCase, CURATED } from "./sentence-case.mjs";

const SKIP = new Set([".git", "node_modules", "tools", "assets"]);
function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p, out) : (/\.(html|xml|json)$/.test(e.name) && out.push(p));
  }
  return out;
}
const files = walk(".");
const htmls = files.filter(f => f.endsWith(".html"));
const vocab = buildVocabulary(htmls);

// Canonical headlines come from article h1s only.
const map = new Map();
for (const f of htmls) {
  if (f.split("/").length !== 3 || /^(authors|tag)\//.test(f.replace(/^\.\//, ""))) continue;
  const h = fs.readFileSync(f, "utf8");
  if (!h.includes('"@type":"NewsArticle"')) continue;
  const t = (h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1];
  if (!t || /</.test(t)) continue;
  const out = toSentenceCase(t, vocab);
  if (out !== t) map.set(t, out);
}
console.log(`headlines to convert: ${map.size} (vocabulary ${vocab.size} mined + ${CURATED.size} curated)`);

if (process.argv.includes("--dry")) {
  [...map].slice(0, 12).forEach(([a, b]) => console.log(`  ${a}\n  -> ${b}\n`));
  process.exit(0);
}

// Replace raw and HTML-escaped forms. Longest first so no headline that is a
// prefix of another is partially rewritten.
const esc = s => s.replace(/&/g, "&amp;");
const escJson = s => JSON.stringify(s).slice(1, -1);
const ordered = [...map].sort((a, b) => b[0].length - a[0].length);

let touched = 0, edits = 0;
for (const f of files) {
  let s = fs.readFileSync(f, "utf8");
  const before = s;
  for (const [a, b] of ordered) {
    for (const [from, to] of [[a, b], [esc(a), esc(b)], [escJson(a), escJson(b)]]) {
      if (from !== to && s.includes(from)) { s = s.split(from).join(to); edits++; }
    }
  }
  if (s !== before) { fs.writeFileSync(f, s); touched++; }
}
console.log(`files rewritten: ${touched} | replacements: ${edits}`);
