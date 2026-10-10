/**
 * Rebalance the "MORE ON THIS STORY" boxes so every English article is picked
 * by at least two other articles (default 2; pass a number to change it).
 *
 * The cards in each box were hand-listed in the batch records, so a few
 * well-known pieces collected most of the links and many articles got none.
 * This rewrites the cards inside each existing <section class="relblock">,
 * keeping the number of cards each box already has. Picks are chosen by
 * relatedness (shared tags, shared headline/standfirst words, same section),
 * with a penalty for targets that already have links, and a repair pass moves
 * links onto any article that is still short. Idempotent and deterministic.
 *
 * Links from very short pieces (under 200 words, which search engines and the
 * link audit treat as thin) are not counted toward the minimum: every article
 * is guaranteed MIN inbound links from full-length articles.
 *
 * Pages without a box are never given one. The /es/ edition is balanced as its own pool (Spanish boxes link only to Spanish pages, English to English). Run it after
 * publish/wire, then validate:
 *
 *     node tools/rebalance-related.mjs && node tools/validate.mjs
 */
import fs from "node:fs";
import path from "node:path";

const MIN = Number(process.argv[2] ?? 2);
const SKIP = new Set([".git", "node_modules", "tools", "assets", "tag", "authors"]);
function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p, out) : (e.name === "index.html" && out.push(p));
  }
  return out;
}
const dec = s => s.replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const STOP = new Set("a an and are as at be but by for from has have in is it its not of on or the that this to was were what when who why will with into than then their there they about after before over under more most one two her his him she he we you your our out up down new now can may could would says say said".split(" "));
const words = s => { const o = new Set(); for (const w of dec(s).toLowerCase().split(/[^a-z0-9]+/))
  if (w.length > 2 && !STOP.has(w)) o.add(w.replace(/(ing|ed|es|s)$/, "")); return o; };

const arts = [];
for (const f of walk(".")) {
  const h = fs.readFileSync(f, "utf8");
  if (!h.includes('class="artbody"')) continue;
  const href = "/" + path.dirname(f) + "/";
  const h1 = (h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1];
  if (!h1) continue;
  const dek = (h.match(/<p class="artdeck">([\s\S]*?)<\/p>/) || [])[1] || "";
  const kick = (h.match(/<article class="art">\s*<span class="kick[^"]*">([\s\S]*?)<\/span>/) || [])[1] || "";
  const date = (h.match(/<div class="bydate">([^<]+)/) || [])[1] || "";
  const tags = new Set([...(h.match(/<div class="tagsrow">([\s\S]*?)<\/div>/) || [, ""])[1].matchAll(/href="\/tag\/([^"]+)\//g)].map(m => m[1]));
  const body = (h.match(/<div class="artbody">([\s\S]*?)<\/div>/) || [, ""])[1];
  const long = body.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length >= 200;
  const box = h.match(/<section class="relblock">([\s\S]*?)<\/section>/);
  arts.push({ f, href, sec: href.split("/").filter(Boolean).slice(-2, -1)[0], h1: dec(h1), kick, ago: date.trim().toUpperCase(), tags,
              es: href.startsWith("/es/"), long, w: words(h1 + " " + dek), n: box ? [...box[1].matchAll(/<article class="hl">/g)].length : 0, html: h, box });
}
const n = arts.length;
// Reuse the kick/date line an article already carries in other boxes, so the
// card looks the same wherever it appears.
const seen = new Map();
for (const a of arts) if (a.box) for (const m of a.box[1].matchAll(/<span class="kick">([\s\S]*?)<\/span><h2><a href="([^"]+)">[\s\S]*?<div class="tago">([^<]*)<\/div>/g)) {
  const k = m[2] + "\u0000" + m[1] + "\u0000" + m[3];
  seen.set(m[2], (seen.get(m[2]) || new Map()).set(k, (seen.get(m[2])?.get(k) || 0) + 1));
}
const cardMeta = a => {
  const c = seen.get(a.href); if (!c) return [a.kick, a.ago];
  const best = [...c.entries()].sort((x, y) => y[1] - x[1] || x[0].localeCompare(y[0]))[0][0].split("\u0000");
  return [best[1], best[2]];
};
const df = new Map(), tdf = new Map();
for (const a of arts) { for (const w of a.w) df.set(w, (df.get(w) || 0) + 1); for (const t of a.tags) tdf.set(t, (tdf.get(t) || 0) + 1); }
const memo = new Map();
const sim = (i, j) => { const key = i * n + j; if (memo.has(key)) return memo.get(key);
  const x = arts[i], y = arts[j]; let s = x.sec === y.sec ? 4 : 0;
  for (const w of x.w) if (y.w.has(w)) s += Math.log(1 + n / df.get(w));
  for (const t of x.tags) if (y.tags.has(t)) s += 1.5 * Math.log(1 + n / tdf.get(t));
  memo.set(key, s); return s; };

const inb = new Array(n).fill(0), inbS = new Array(n).fill(0), picks = new Array(n).fill(null);
const order = arts.map((_, i) => i).sort((x, y) => Number(arts[y].long) - Number(arts[x].long) || x - y);
order.forEach(i => {
  const a = arts[i];
  if (!a.box) return;
  const cand = arts.map((_, j) => j).filter(j => j !== i && arts[j].es === a.es), pk = [];
  while (pk.length < a.n && cand.length) {
    let best = -1, bs = -Infinity;
    for (const c of cand) { const v = sim(i, c) - 1.5 * (inb[c] + inbS[c]); if (v > bs) { bs = v; best = c; } }
    pk.push(best); (a.long ? inb : inbS)[best]++; cand.splice(cand.indexOf(best), 1);
  }
  picks[i] = pk;
});
for (let guard = 0; guard < 50000; guard++) {
  let low = -1; for (let j = 0; j < n; j++) if (inb[j] < MIN && (low < 0 || inb[j] < inb[low])) low = j;
  if (low < 0) break;
  let move = null, ms = -Infinity;
  for (let i = 0; i < n; i++) {
    if (!picks[i] || !arts[i].long || arts[i].es !== arts[low].es || i === low || picks[i].includes(low)) continue;
    picks[i].forEach((old, k) => { if (inb[old] <= MIN) return;
      const v = sim(i, low) - sim(i, old) + 0.5 * (inb[old] - MIN); if (v > ms) { ms = v; move = [i, k]; } });
  }
  if (!move) { console.log(`cannot raise ${arts[low].href}`); break; }
  inb[picks[move[0]][move[1]]]--; picks[move[0]][move[1]] = low; inb[low]++;
}
let changed = 0;
arts.forEach((a, i) => {
  if (!picks[i]) return;
  const cards = picks[i].sort((x, y) => sim(i, y) - sim(i, x) || x - y).map(j => { const t = arts[j], [k, ago] = cardMeta(t);
    return `<article class="hl"><span class="kick">${k}</span><h2><a href="${t.href}">${esc(t.h1)}</a></h2><div class="tago">${ago}</div></article>`; }).join("");
  const out = a.html.replace(/<section class="relblock">[\s\S]*?<\/section>/, () => `<section class="relblock">${cards}</section>`);
  if (out !== a.html) { fs.writeFileSync(a.f, out); changed++; }
});
console.log(`rebalance-related: ${changed} boxes rewritten across ${n} articles; fewer than ${MIN} inbound: ${inb.filter(x => x < MIN).length}`);
