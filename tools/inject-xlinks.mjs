/**
 * Place editorial cross-links into article bodies.
 *
 * Operates on rendered HTML so it covers both generated and hand-authored
 * pages. Only text outside tags is touched, existing anchors are never nested,
 * and a link is skipped if the article already points at that target — so this
 * is safe to re-run after any republish.
 */
import fs from "node:fs";

const map = JSON.parse(fs.readFileSync("tools/data/xlinks.json", "utf8"));
const BODY_RE = /(<div class="artbody">)([\s\S]*?)(<\/div>\s*<div class="tagsrow")/;
const BODY_RE_ALT = /(<div class="artbody">)([\s\S]*?)(<\/div>)/;

/** Replace the first occurrence of `phrase` that sits in a text node. */
function linkFirst(html, phrase, href) {
  const parts = html.split(/(<[^>]*>)/);          // odd indexes are tags
  let depthA = 0;
  for (let i = 0; i < parts.length; i++) {
    const seg = parts[i];
    if (i % 2 === 1) {                             // a tag
      if (/^<a\b/i.test(seg)) depthA++;
      else if (/^<\/a>/i.test(seg)) depthA = Math.max(0, depthA - 1);
      continue;
    }
    if (depthA > 0) continue;                      // never nest anchors
    const rx = new RegExp(`\\b(${phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})\\b`, "i");
    const m = seg.match(rx);
    if (!m) continue;
    parts[i] = seg.replace(rx, `<a href="${href}">$1</a>`);
    return { html: parts.join(""), ok: true };
  }
  return { html, ok: false };
}

let files = 0, placed = 0, missed = [];
for (const [url, links] of Object.entries(map)) {
  const f = url.replace(/^\//, "") + "index.html";
  if (!fs.existsSync(f)) { missed.push(url + " (no file)"); continue; }
  let h = fs.readFileSync(f, "utf8");
  const re = BODY_RE.test(h) ? BODY_RE : BODY_RE_ALT;
  const m = h.match(re);
  if (!m) { missed.push(url + " (no artbody)"); continue; }
  let body = m[2];
  let changed = false;
  for (const { phrase, href } of links) {
    if (body.includes(`href="${href}"`)) continue;      // already linked there
    const r = linkFirst(body, phrase, href);
    if (r.ok) { body = r.html; placed++; changed = true; }
    else missed.push(`${url} :: "${phrase}"`);
  }
  if (changed) { fs.writeFileSync(f, h.replace(re, `$1${body}$3`)); files++; }
}
console.log(`files updated: ${files} | links placed: ${placed}`);
if (missed.length) { console.log(`not placed: ${missed.length}`); missed.slice(0, 6).forEach(x => console.log("   " + x)); }
