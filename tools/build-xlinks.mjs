/**
 * Build the editorial cross-link map.
 *
 * Three tests an anchor has to pass, because a link is only worth having if a
 * reader would click it:
 *
 *   1. The words already sit in the source sentence, so nothing is bolted on.
 *   2. The phrase appears in the TARGET's headline or standfirst, so it
 *      genuinely describes the piece being linked, not merely its first
 *      paragraph.
 *   3. The phrase is distinctive: it occurs in few articles across the site.
 *      This is what rejects "rather than" and "several years ago", which pass
 *      the first two tests and mean nothing.
 *
 * Targets with no inbound editorial link are served first.
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
const STOP = new Set(("a an the and or but of for to in on at by is are was were be been being it its this that these those with from as into over under new now not no more most much very can will would could should has have had do does did they them their there here who what when where why how you your we our us he she his her which roughly about spent several years year ago decades decade two three first second same other another rather than because while after before between across toward within without still yet also only just even each every own once talk talks talked designed around off out up down built build builds become becomes became make makes made take takes took put puts get gets got keep keeps kept turn turns turned look looks looked come comes came go goes went give gives gave say says said see sees saw know knows knew think thinks thought want wants wanted need needs needed justified moving moves moved run runs ran work works worked call calls called").split(" "));
const GENERIC = new Set(["supply chain", "data center", "market structure", "asset class", "balance sheets", "industrial policy", "the industry", "the market", "the company", "the business"]);

const files = walk(".").filter(f => f.split("/").length === 3 && !/^(authors|tag)\//.test(f));
const arts = files.map(f => {
  const h = fs.readFileSync(f, "utf8");
  const body = (h.match(/<div class="artbody">([\s\S]*?)<\/div>\s*<div class="tagsrow"/) || h.match(/<div class="artbody">([\s\S]*?)<\/div>/) || [])[1] || "";
  return {
    file: f, url: "/" + f.replace(/index\.html$/, ""), section: f.split("/")[0],
    headline: ((h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || "").replace(/<[^>]*>/g, ""),
    dek: ((h.match(/<p class="artdeck">([\s\S]*?)<\/p>/) || [])[1] || "").replace(/<[^>]*>/g, ""),
    tags: ((h.match(/"keywords":"([^"]*)"/) || [])[1] || "").split(",").map(s => s.trim().toLowerCase()).filter(Boolean),
    bodyHtml: body,
    bodyText: body.replace(/<aside[\s\S]*?<\/aside>/g, " ").replace(/<[^>]*>/g, " ").replace(/\s+/g, " "),
  };
});

/** Phrases drawn only from the target's headline and standfirst. */
function candidatePhrases(a) {
  const src = (a.headline + " . " + a.dek).replace(/[^A-Za-z0-9 .'-]/g, " ");
  const out = new Set();
  for (const clause of src.split(".")) {
    const w = clause.trim().split(/\s+/).filter(Boolean);
    for (let n = 4; n >= 2; n--)
      for (let i = 0; i + n <= w.length; i++) {
        const seq = w.slice(i, i + n).map(x => x.toLowerCase());
        if (STOP.has(seq[0]) || STOP.has(seq[seq.length - 1])) continue;
        const content = seq.filter(x => !STOP.has(x));
        if (content.length < 2) continue;              // needs two real words
        if (!content.some(x => x.length >= 6)) continue; // and one with substance
        const p = seq.join(" ");
        if (p.length < 12 || GENERIC.has(p)) continue;
        out.add(p);
      }
  }
  // Single-word fallback: a tag of the target is a legitimate anchor when it is
  // a substantial topical noun ("stablecoins", "interconnection", "tokenization").
  for (const t of a.tags) {
    const w = t.trim().toLowerCase();
    if (w.length >= 9 && !w.includes(" ") && !STOP.has(w)) out.add(w);
  }
  return [...out];
}

// Document frequency: how many articles contain this phrase at all.
const dfCache = new Map();
const lowerBodies = arts.map(a => a.bodyText.toLowerCase());
function df(p) {
  if (!dfCache.has(p)) dfCache.set(p, lowerBodies.filter(b => b.includes(p)).length);
  return dfCache.get(p);
}

const inbound = {}; arts.forEach(a => inbound[a.url] = 0);
for (const a of arts)
  for (const m of a.bodyHtml.matchAll(/href="(\/[^"#?]*)"/g))
    if (m[1] in inbound && m[1] !== a.url) inbound[m[1]]++;

const MAX_PER_ARTICLE = 4, MAX_INBOUND_PER_TARGET = 6, MAX_DF = 8;
const used = {}; arts.forEach(a => used[a.url] = 0);
const order = [...arts].sort((x, y) => inbound[x.url] - inbound[y.url]);
const map = {};

for (const src of arts) {
  const picks = [], taken = new Set();
  const lower = src.bodyText.toLowerCase();
  for (const tgt of order) {
    if (picks.length >= MAX_PER_ARTICLE) break;
    if (tgt.url === src.url || taken.has(tgt.url) || used[tgt.url] >= MAX_INBOUND_PER_TARGET) continue;
    const related = tgt.section === src.section || tgt.tags.some(t => src.tags.includes(t));
    const cands = candidatePhrases(tgt)
      .filter(p => lower.includes(p))
      .filter(p => df(p) <= (tgt.section === src.section ? 14 : MAX_DF))
      .sort((a, b) => b.length - a.length);
    // An unrelated section needs a genuinely rare phrase to justify the link.
    const phrase = cands.find(p => related || df(p) <= 3);
    if (!phrase) continue;
    if (picks.some(p => p.phrase.includes(phrase) || phrase.includes(p.phrase))) continue;
    picks.push({ phrase, href: tgt.url, df: df(phrase) });
    taken.add(tgt.url); used[tgt.url]++;
  }
  if (picks.length) map[src.url] = picks;
}

fs.writeFileSync("tools/data/xlinks.json", JSON.stringify(map, null, 1));
const total = Object.values(map).reduce((n, v) => n + v.length, 0);
const covered = new Set(Object.values(map).flat().map(p => p.href));
console.log(`sources with links:  ${Object.keys(map).length} / ${arts.length}`);
console.log(`editorial links:     ${total}`);
console.log(`targets covered:     ${covered.size}`);
console.log(`still no inbound editorial link: ${arts.filter(a => inbound[a.url] === 0 && !covered.has(a.url)).length}`);
