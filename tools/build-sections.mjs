/**
 * Rebuild every homepage section block as one uniform four-across grid.
 *
 * The old blocks came in three shapes and two of them left large voids:
 * Culture and Music carried only a left rail, and the photo-lead sections ran
 * 800-900px tall against a five-item rail. A single grid cannot be taller
 * than its own content, which removes the problem rather than tuning it.
 */
import fs from "node:fs";
import path from "node:path";

const SECTIONS = [["ai","AI"],["blockchain","Blockchain"],["crypto","Crypto"],["business","Business"],
  ["technology","Technology"],["markets","Markets"],["fintech","Fintech"],["cybersecurity","Cybersecurity"],
  ["startups","Startups"],["policy","Policy"],["culture","Culture"],["music","Music"]];
const esc = s => String(s).replace(/&(?!amp;|lt;|gt;|quot;|#)/g, "&amp;");
const now = Date.now();
const ago = iso => {
  const m = Math.floor((now - new Date(iso).getTime()) / 60000);
  if (m < 60) return `${Math.max(m,1)} minute${m===1?"":"s"} ago`;
  const h = Math.floor(m / 60); if (h < 24) return `${h} hour${h===1?"":"s"} ago`;
  const d = Math.floor(h / 24); if (d <= 6) return `${d} day${d===1?"":"s"} ago`;
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
};

function articles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).filter(e => e.isDirectory())
    .map(e => path.join(dir, e.name, "index.html")).filter(f => fs.existsSync(f))
    .map(f => {
      const h = fs.readFileSync(f, "utf8");
      const img = h.match(/<figure class="arthero">[\s\S]*?<img[^>]*\ssrc="([^"]*)"[^>]*alt="([^"]*)"/);
      return { url: "/" + f.replace(/index\.html$/, ""),
        title: ((h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || "").replace(/<[^>]*>/g, ""),
        kick: (h.match(/<span class="kick[^"]*">([^<]*)</) || [])[1] || "",
        date: (h.match(/"datePublished":"([^"]+)"/) || [])[1] || "",
        img: img ? img[1] : null, alt: img ? img[2] : "" };
    }).filter(a => a.title && a.date && a.img).sort((a, b) => b.date.localeCompare(a.date));
}

const used = fs.existsSync("tools/data/front-used.json")
  ? new Set(JSON.parse(fs.readFileSync("tools/data/front-used.json", "utf8"))) : new Set();

let h = fs.readFileSync("index.html", "utf8");
let rebuilt = 0;
for (const [slug, label] of SECTIONS) {
  const bandStart = h.indexOf(`<div class="band"><span><a href="/${slug}/">`);
  if (bandStart < 0) { console.log("  --   " + label + " (no band)"); continue; }
  const bandEnd = h.indexOf("<div class=\"band\">", bandStart + 10);
  const stop = bandEnd > 0 ? bandEnd : h.indexOf('<section class="divpanel">', bandStart);
  if (stop < 0) { console.log("  --   " + label + " (no end marker)"); continue; }

  const picks = articles(slug).filter(a => !used.has(a.url)).slice(0, 4);
  if (picks.length < 4) picks.push(...articles(slug).filter(a => !picks.includes(a)).slice(0, 4 - picks.length));
  const block = `<section class="wrap secblock">
<div class="sechead-row"><h2><a href="/${slug}/">${esc(label)}</a></h2><a class="allof" href="/${slug}/">All ${esc(label)} coverage &rsaquo;</a></div>
<div class="secgrid">
${picks.map(a => `<article class="abccard"><a href="${a.url}"><img src="${esc(a.img)}" alt="${esc(a.alt)}" loading="lazy"></a><div class="abckick">${esc(a.kick)}</div><h3><a href="${a.url}">${esc(a.title)}</a></h3><span class="abctime">${ago(a.date)}</span></article>`).join("\n")}
</div></section>
`;
  h = h.slice(0, bandStart) + block + h.slice(stop);
  rebuilt++;
}
fs.writeFileSync("index.html", h);
console.log(`  sections rebuilt as uniform grids: ${rebuilt}`);
