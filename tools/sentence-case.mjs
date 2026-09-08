/**
 * Convert Title Case display text to sentence case.
 *
 * Proper nouns are not hand-listed. They are mined from the site's own body
 * prose: a word that appears capitalised in the middle of a sentence, in
 * running text, is a proper noun. That catches Rumours, Sticky Fingers,
 * Wall Street and Treasury without anyone maintaining a dictionary.
 *
 *   node tools/sentence-case.mjs --sample 10     preview before/after
 */
import fs from "node:fs";
import path from "node:path";

const SKIPDIR = new Set([".git", "node_modules", "tools", "assets"]);
function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (SKIPDIR.has(e.name)) continue;
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p, out) : (e.name === "index.html" && out.push(p));
  }
  return out;
}

/** Words seen capitalised mid-sentence in body copy. */
export function buildVocabulary(files) {
  const counts = {}, lowerSeen = {};
  for (const f of files) {
    const h = fs.readFileSync(f, "utf8");
    const body = (h.match(/<div class="artbody">([\s\S]*?)<\/div>\s*<div class="tagsrow"/) || h.match(/<div class="artbody">([\s\S]*?)<\/div>/) || [])[1];
    if (!body) continue;
    // Strip inline related asides: they contain Title Case headlines, which
    // would otherwise look like proper nouns appearing mid-sentence.
    const text = body.replace(/<aside[\s\S]*?<\/aside>/g, " ")
                     .replace(/<[^>]*>/g, " ").replace(/&[a-z]+;/g, " ");
    for (const sentence of text.split(/(?<=[.!?])\s+/)) {
      const words = sentence.trim().split(/\s+/);
      words.forEach((w, i) => {
        const bare = w.replace(/^[^A-Za-z]+|[^A-Za-z]+$/g, "");
        if (!bare) return;
        if (/^[A-Z][a-z]+$/.test(bare) && i > 0) counts[bare] = (counts[bare] || 0) + 1;
        if (/^[a-z]+$/.test(bare)) lowerSeen[bare] = (lowerSeen[bare] || 0) + 1;
      });
    }
  }
  // A real proper noun is rarely seen lower-cased elsewhere in the corpus.
  const vocab = new Set();
  for (const [w, n] of Object.entries(counts)) {
    const lc = (lowerSeen[w.toLowerCase()] || 0);
    // Needs repeated mid-sentence capitalisation and essentially no lower-case
    // use anywhere in the corpus. A single stray capital is not evidence.
    if (n >= 3 && lc === 0) vocab.add(w);
  }
  for (const w of CURATED) { /* curated names always protected */
  }
  return vocab;
}

const ALWAYS = new Set(["I"]);

/**
 * Names the corpus cannot infer on its own. Album and film titles in
 * particular appear only in the piece about them, so there is no repeated
 * mid-sentence evidence to mine.
 */
export const CURATED = new Set([
  "Sticky", "Fingers", "Rumours", "RYDE", "Vine", "Netflix", "Komposite",
  "Fleetwood", "Mac", "Rolling", "Stones", "Wall", "Street", "Treasury",
  "Washington", "Europe", "European", "Union", "Britain", "China", "Texas",
  "Colorado", "Connecticut", "Indiana", "Kentucky", "Rhode", "Island", "Utah",
  "Arkansas", "Oregon", "Nebraska", "York", "Federal", "Reserve", "Congress",
  "GENIUS", "Act", "Commons", "Wikimedia", "Unsplash",
  "Hollywood", "America", "American", "Americans", "Silicon", "Valley",
  "Japan", "Japanese", "India", "Indian", "Korea", "Korean", "Brazil",
  "Mexico", "Africa", "African", "Asia", "Asian", "Latin", "Broadway",
]);
/** Entities inside a headline broke the acronym test: R&amp;D reduced to
 *  "RampD", which is not all-caps, so R&D was lower-cased to r&D. */
const decodeEnt = w => String(w).replace(/&amp;/g, "&").replace(/&#39;|&rsquo;/g, "'");
const isAcronym = w => /^[A-Z0-9]{2,}$/.test(decodeEnt(w).replace(/[^A-Za-z0-9]/g, ""));
const hasInnerCap = w => /[a-z][A-Z]/.test(w);      // iPhone, FedNow, eBay

export function toSentenceCase(title, vocab) {
  const parts = title.split(/(\s+|—|–|:|’s\b)/);
  let firstDone = false;
  return parts.map(tok => {
    if (!/[A-Za-z]/.test(tok)) return tok;
    const bare = tok.replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9]+$/g, "");
    if (!bare) return tok;
    if (!firstDone) { firstDone = true; return tok; }              // keep first word
    if (isAcronym(bare) || hasInnerCap(bare) || ALWAYS.has(bare)) return tok;
    if (vocab.has(bare) || CURATED.has(bare)) return tok;           // proper noun
    if (bare.includes("-")) {                                        // Back-Office
      const fixed = bare.split("-").map((seg, i) => {
        if (!seg) return seg;
        if (isAcronym(seg) || vocab.has(seg) || CURATED.has(seg)) return seg;
        return seg[0].toLowerCase() + seg.slice(1);
      }).join("-");
      return tok.replace(bare, fixed);
    }
    if (/^[A-Z]/.test(bare)) return tok.replace(bare, bare[0].toLowerCase() + bare.slice(1));
    return tok;
  }).join("");
}

if (process.argv.includes("--sample")) {
  const files = walk(".");
  const vocab = buildVocabulary(files);
  console.log(`vocabulary mined from body prose: ${vocab.size} proper nouns`);
  console.log(`  e.g. ${[...vocab].slice(0, 18).join(", ")}\n`);
  const n = Number(process.argv[process.argv.indexOf("--sample") + 1]) || 10;
  const picked = [];
  for (const f of files) {
    if (/^(authors|tag)\//.test(f) || f.split("/").length !== 3) continue;
    const h = fs.readFileSync(f, "utf8");
    if (!h.includes('"@type":"NewsArticle"')) continue;
    const t = (h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1];
    if (!t || !/ /.test(t) || /</.test(t)) continue;
    const out = toSentenceCase(t, vocab);
    if (out !== t) picked.push([t, out]);
  }
  const step = Math.max(1, Math.floor(picked.length / n));
  picked.filter((_, i) => i % step === 0).slice(0, n).forEach(([a, b], i) => {
    console.log(`${String(i + 1).padStart(2)}. BEFORE  ${a}`);
    console.log(`    AFTER   ${b}\n`);
  });
  console.log(`headlines that would change: ${picked.length}`);
}
