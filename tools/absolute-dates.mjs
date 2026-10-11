/**
 * Replace baked relative times ("5 DAYS AGO", "6 hours ago") with the
 * story's own publication date.
 *
 * Several builders wrote a relative age into static HTML. It is true on the
 * day the page is built and wrong from the next morning: an August story on
 * an author page still read "6 HOURS AGO" in October. Only the homepage's
 * <time data-ago> elements are recomputed in the browser; everything else is
 * frozen, so it now carries a date that stays true.
 *
 * Touches only .ft, .tago and .abctime labels whose text is a relative age,
 * and dates each one from the datePublished of the story it sits beside.
 * Idempotent. The Divide pages are left to tools/build-divide.mjs.
 *
 * Usage: node tools/absolute-dates.mjs
 */
import fs from "node:fs";
import path from "node:path";

const SKIP = new Set([".git", "node_modules", "tools", "assets"]);
const OWNED = /^(divide|the-divide)$/;  /* top-level only: built by tools/build-divide.mjs */
function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (SKIP.has(e.name) || e.name.startsWith(".") || (d === "." && OWNED.test(e.name))) continue;
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p, out) : (e.name.endsWith(".html") && out.push(p));
  }
  return out;
}

const dateCache = new Map();
function published(href) {
  if (dateCache.has(href)) return dateCache.get(href);
  const f = path.join(".", href.replace(/^https?:\/\/[^/]+/, ""), "index.html");
  let d = null;
  try { d = (fs.readFileSync(f, "utf8").match(/"datePublished"\s*:\s*"([^"]+)"/) || [])[1] || null; } catch {}
  dateCache.set(href, d);
  return d;
}
const longDate = iso => new Date(iso).toLocaleDateString("en-US",
  { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

const REL = /(<(span|div) class="(?:ft|tago|abctime)">)\s*((?:JUST NOW|Just now)|\d+ (?:MINUTES?|HOURS?|DAYS?) AGO|\d+ (?:minutes?|hours?|days?) ago)\s*(<\/\2>)/g;
/* The story a label belongs to: the last headline link, or the feed-row link,
   before it. A .hsub link to a second story can sit between, so headline
   links win over plain ones. */
const LINK = /(?:<h[23][^>]*>\s*<a href="(\/[^"]+)"|class="fc">[^<]*<\/span><a href="(\/[^"]+)")/g;

let pages = 0, fixed = 0, unresolved = 0;
for (const f of walk(".")) {
  const h = fs.readFileSync(f, "utf8");
  let changed = false;
  const out = h.replace(REL, (m, open, _tag, rel, close, offset) => {
    const before = h.slice(Math.max(0, offset - 6000), offset);
    let href = null;
    for (const l of before.matchAll(LINK)) href = l[1] || l[2];
    const iso = href && published(href);
    if (!iso) { unresolved++; if (process.env.DEBUG) console.log("  unresolved:", f, rel, href); return m; }
    const txt = longDate(iso);
    changed = true; fixed++;
    return open + (rel === rel.toUpperCase() ? txt.toUpperCase() : txt) + (_tag === "div" ? " " : "") + close;
  });
  if (changed) { fs.writeFileSync(f, out); pages++; }
}
console.log(`  relative ages replaced: ${fixed} on ${pages} pages` + (unresolved ? `, ${unresolved} left (no story found)` : ""));
