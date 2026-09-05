/**
 * Rebuild the left rail of every homepage section block.
 *
 * Repairs the damage from the insertAfter offset bug (28 cards from other
 * sections accumulated in the AI rail) and enforces a uniform cap so no rail
 * runs deeper than its neighbours.
 *
 * Bylines are dropped from rail items. FT's homepage carries a byline on
 * opinion teasers only, name alone, never a job title, and never alongside a
 * timestamp; the lead story in each block keeps its byline.
 */
import fs from "node:fs";
import path from "node:path";

const CAP = 5;
const SECTIONS = ["ai","blockchain","crypto","business","technology","markets","fintech","cybersecurity","startups","policy","culture","music"];
const LABEL = { ai:"AI", blockchain:"Blockchain", crypto:"Crypto", business:"Business", technology:"Technology",
  markets:"Markets", fintech:"Fintech", cybersecurity:"Cybersecurity", startups:"Startups", policy:"Policy",
  culture:"Culture", music:"Music" };
const esc = s => String(s).replace(/&(?!amp;|lt;|gt;|quot;|#)/g, "&amp;");

function articlesIn(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).filter(e => e.isDirectory())
    .map(e => path.join(dir, e.name, "index.html")).filter(f => fs.existsSync(f))
    .map(f => {
      const h = fs.readFileSync(f, "utf8");
      return {
        url: "/" + f.replace(/index\.html$/, ""),
        title: ((h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || "").replace(/<[^>]*>/g, ""),
        kick: (h.match(/<span class="kick">([^<]*)</) || [])[1] || "",
        date: (h.match(/"datePublished":"([^"]+)"/) || [])[1] || "",
      };
    }).filter(a => a.title && a.date).sort((a, b) => b.date.localeCompare(a.date));
}

let h = fs.readFileSync("index.html", "utf8");
const report = [];

for (const sec of SECTIONS) {
  const band = `<div class="band"><span><a href="/${sec}/">`;
  const bi = h.indexOf(band);
  if (bi < 0) { report.push([sec, "no band", 0, 0]); continue; }
  const blockEnd = h.indexOf('<div class="band">', bi + 10);
  const seclStart = h.indexOf('<div class="secl">', bi);
  if (seclStart < 0 || (blockEnd > 0 && seclStart > blockEnd)) { report.push([sec, "no rail", 0, 0]); continue; }
  const allofAt = h.indexOf('<a class="allof"', seclStart);
  const before = (h.slice(seclStart, allofAt).match(/class="secitem"/g) || []).length;

  // Skip whatever the lead and right-hand card already show, so the rail does
  // not repeat a story that is visible two columns away.
  const block = h.slice(bi, blockEnd > 0 ? blockEnd : h.length);
  const shown = new Set([...block.matchAll(/href="(\/[a-z-]+\/[a-z0-9-]+\/)"/g)]
    .map(m => m[1]).filter(u => !u.startsWith(`/${sec}/`) === false));
  const featured = new Set([...block.matchAll(/class="(?:story secfeat|imgcard)"[\s\S]{0,400}?href="(\/[^"]+)"/g)].map(m => m[1]));

  const items = articlesIn(sec).filter(a => !featured.has(a.url)).slice(0, CAP);
  const markup = items.map(a =>
    `<div class="secitem"><span class="kick">${esc(a.kick)}</span><a class="secline" href="${a.url}">${esc(a.title)}</a></div>`).join("");

  h = h.slice(0, seclStart + '<div class="secl">'.length) + markup + h.slice(allofAt);
  report.push([sec, "rebuilt", before, items.length]);
}

fs.writeFileSync("index.html", h);
console.log("section".padEnd(15) + "status".padEnd(10) + "before".padStart(7) + "after".padStart(7));
report.forEach(([s, st, b, a]) => console.log(s.padEnd(15) + st.padEnd(10) + String(b).padStart(7) + String(a).padStart(7)));
