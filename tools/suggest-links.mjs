/**
 * Suggest contextual internal links for one article. Prints only; it never
 * edits a file.
 *
 *   node tools/suggest-links.mjs <section>/<slug>     (or just <slug>)
 *
 * Output: 2-4 related articles the new piece could link OUT to, each with an
 * anchor phrase that already appears in a paragraph, plus up to 3 older
 * articles that could link BACK to it (phrase taken from their text). Add a
 * link by wrapping those existing words in <a href="/section/slug/">, in the
 * batch file, then re-run publish. Skips quotes, headings and existing links.
 */
import fs from "node:fs";
import path from "node:path";

const STOP = new Set("a an the of and or but to in on for with at by from as is are was were be been it its this that these those their his her they we our you not no has have had will would can could may might than then so if about into over after before up out new says said say per also more most one two".split(" "));
const SKIP = new Set([".git", "node_modules", "tools", "assets", "es", "authors", "tag"]);
const toks = s => (s.toLowerCase().match(/[a-z0-9][a-z0-9']+/g) || []).filter(w => !STOP.has(w) && w.length > 2);

function load() {
  const out = [];
  for (const sec of fs.readdirSync(".", { withFileTypes: true })) {
    if (!sec.isDirectory() || SKIP.has(sec.name)) continue;
    for (const d of fs.readdirSync(sec.name, { withFileTypes: true })) {
      const f = path.join(sec.name, d.name, "index.html");
      if (!d.isDirectory() || !fs.existsSync(f)) continue;
      const h = fs.readFileSync(f, "utf8");
      const i = h.indexOf('class="artbody"');
      if (i < 0 || /name="robots" content="[^"]*noindex/.test(h)) continue;
      const body = h.slice(i, h.indexOf("</div>", i));
      const title = ((h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || "").replace(/<[^>]*>/g, "");
      const paras = [...body.matchAll(/<p>([\s\S]*?)<\/p>/g)].map(m => m[1]);
      out.push({ url: `/${sec.name}/${d.name}/`, title, paras, text: paras.join(" ").replace(/<[^>]*>/g, " "),
        links: new Set([...body.matchAll(/href="(\/[^"#?]+\/)"/g)].map(m => m[1])) });
    }
  }
  return out;
}

const arts = load();
const df = new Map();
for (const a of arts) {
  const c = new Map(); for (const w of toks(a.title + " " + a.title + " " + a.title + " " + a.text)) c.set(w, (c.get(w) || 0) + 1);
  a.tf = c; for (const w of c.keys()) df.set(w, (df.get(w) || 0) + 1);
}
const idf = w => Math.log(arts.length / (1 + (df.get(w) || 0)));
for (const a of arts) {
  const v = new Map(); let n = 0;
  for (const [w, k] of a.tf) { const x = (1 + Math.log(k)) * idf(w); if (idf(w) > 0.5) { v.set(w, x); n += x * x; } }
  a.vec = v; a.norm = Math.sqrt(n) || 1;
}
const cos = (a, b) => { let s = 0; for (const [w, x] of a.vec) { const y = b.vec.get(w); if (y) s += x * y; } return s / (a.norm * b.norm); };

/* Best anchor: a 2-4 word run in src's plain paragraph text that also occurs in tgt's title or opening. */
function anchor(src, tgt) {
  const ref = (tgt.title + ". " + tgt.paras.slice(0, 2).join(" ").replace(/<[^>]*>/g, " ")).toLowerCase();
  let best = null;
  for (const p of src.paras) {
    if (/^\s*<(blockquote|h\d)/.test(p)) continue;
    const plain = p.replace(/<a\b[^>]*>[\s\S]*?<\/a>/g, m => " ".repeat(m.length)).replace(/<[^>]*>/g, m => " ".repeat(m.length));
    const ws = [...plain.matchAll(/[A-Za-z0-9][A-Za-z0-9'-]*/g)];
    for (let i = 0; i < ws.length; i++) for (let n = 2; n <= 4 && i + n <= ws.length; n++) {
      const s = ws[i].index, e = ws[i + n - 1].index + ws[i + n - 1][0].length, ph = plain.slice(s, e);
      if (/[.,;:!?“”"()—]/.test(ph)) continue;
      const lw = ph.toLowerCase().split(/\s+/);
      if (STOP.has(lw[0]) || STOP.has(lw.at(-1)) || !ref.includes(ph.toLowerCase())) continue;
      if (((plain.slice(0, s).match(/[“"]/g) || []).length - (plain.slice(0, s).match(/”/g) || []).length) % 2) continue;
      const sc = lw.reduce((t, w) => t + idf(w), 0);
      if (!best || sc > best.sc) best = { sc, ph };
    }
  }
  return best && best.sc > 5 ? best.ph : null;
}

export function suggest(key) {
  const me = arts.find(a => a.url === `/${key}/` || a.url.endsWith(`/${key}/`));
  if (!me) { console.log(`  suggest-links: ${key} not found`); return; }
  const ranked = arts.filter(a => a !== me).map(a => ({ a, s: cos(me, a) })).filter(x => x.s > 0.08).sort((x, y) => y.s - x.s);
  const out = [], back = [];
  for (const { a } of ranked.slice(0, 25)) {
    if (out.length < 4 && !me.links.has(a.url)) { const ph = anchor(me, a); if (ph) out.push(`    link OUT  "${ph}" -> ${a.url}`); }
    if (back.length < 3 && !a.links.has(me.url) && a.links.size < 6) { const ph = anchor(a, me); if (ph) back.push(`    link BACK from ${a.url}  "${ph}"`); }
  }
  console.log(`  link suggestions for ${me.url} (printed only, nothing edited):`);
  [...out, ...back].forEach(l => console.log(l));
  if (!out.length && !back.length) console.log("    none found with a natural anchor phrase");
}

if (process.argv[1] && process.argv[1].endsWith("suggest-links.mjs")) {
  if (!process.argv[2]) { console.error("usage: node tools/suggest-links.mjs <section>/<slug>"); process.exit(1); }
  suggest(process.argv[2].replace(/^\/|\/$/g, ""));
}
