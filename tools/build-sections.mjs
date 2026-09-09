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
const aslug = n => n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
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
        author: (h.match(/"author":\{[^}]*?"name":"([^"]+)"/) || [])[1] || "",
        dek: ((h.match(/<p class="[^"]*artdeck[^"]*"[^>]*>([\s\S]*?)<\/p>/) || [])[1] || "").replace(/<[^>]*>/g, "").trim(),
        img: img ? img[1] : null, alt: img ? img[2] : "" };
    }).filter(a => a.title && a.date && a.img).sort((a, b) => b.date.localeCompare(a.date));
}

const used = fs.existsSync("tools/data/front-used.json")
  ? new Set(JSON.parse(fs.readFileSync("tools/data/front-used.json", "utf8"))) : new Set();

let h = fs.readFileSync("index.html", "utf8");

/* De-duplicate by IMAGE, not just by URL. Two different stories carrying the
   same stock photo read as one story told twice, which is what the homepage
   was doing. Seed from the images the front zone already placed. */
const imgId = u => {
  const m = String(u).match(/photo-([A-Za-z0-9_-]{6,})/) || String(u).match(/FilePath\/([^?"]+)/);
  return m ? decodeURIComponent(m[1]) : String(u).split("?")[0];
};
const usedImgs = new Set();
{
  const cut = h.indexOf('<section class="wrap secblock">');
  const head = cut > 0 ? h.slice(0, cut) : h;
  for (const m of head.matchAll(/<img[^>]*\bsrc="([^"]+)"/g)) usedImgs.add(imgId(m[1]));
}
let rebuilt = 0;
for (const [slug, label] of SECTIONS) {
  /* First run consumed the old .band markers, so anchor on the .secblock this
     tool itself emits and make the rebuild idempotent. */
  /* The block markup changed shape, so the old anchor no longer exists in the
     page this tool wrote last time. Accept either. */
  const marker = [`<div class="lsechead"><span class="lseclabel"><a href="/${slug}/">`,
                  `<div class="sechead-row"><h2><a href="/${slug}/">`]
                 .map(m => ({ m, i: h.indexOf(m) })).filter(x => x.i >= 0)
                 .sort((a, b) => a.i - b.i)[0]?.m;
  if (!marker) { console.log("  --   " + label + " (no section block)"); continue; }
  const mi = h.indexOf(marker);
  if (mi < 0) { console.log("  --   " + label + " (no section block)"); continue; }
  // prefix match: the class now carries a shape suffix (secblock-lead etc.)
  const bandStart = h.lastIndexOf('<section class="wrap secblock', mi);
  const endTag = "</section>";
  const ei = h.indexOf(endTag, mi);
  if (bandStart < 0 || ei < 0) { console.log("  --   " + label + " (markers unbalanced)"); continue; }
  const stop = ei + endTag.length;

  const pool = articles(slug);
  const picks = pool.filter(a => !used.has(a.url) && !usedImgs.has(imgId(a.img))).slice(0, 9);
  if (picks.length < 9)                                  // relax URL rule before repeating a photo
    picks.push(...pool.filter(a => !picks.includes(a) && !usedImgs.has(imgId(a.img))).slice(0, 9 - picks.length));
  if (picks.length < 9)                                  // last resort: section is too thin
    picks.push(...pool.filter(a => !picks.includes(a)).slice(0, 9 - picks.length));
  picks.forEach(a => usedImgs.add(imgId(a.img)));
  /* Leonard runs each section as a three-column composition rather than a
     row of equal cards: one large frame with the headline laid over it, a
     stack of two beside it, and a thumbnail list closing with a MORE link.
     The composition mirrors on alternate sections so the page does not
     settle into a rhythm. */
  const by = a => a.author ? `<div class="cardby">By <a href="/authors/${aslug(a.author)}/">${esc(a.author)}</a></div>` : "";
  const meta = a => `<div class="lmeta"><span class="lkick">${esc(a.kick || label)}</span><span class="lsep">/</span><span class="lago">${ago(a.date)}</span></div>`;

  const overlay = a => `<article class="lbig">
<a href="${a.url}"><img src="${esc(a.img)}" alt="${esc(a.alt)}" loading="lazy">
<span class="lbig-tx">${meta(a)}<h3>${esc(a.title)}</h3>${a.dek ? `<p class="lbig-dek">${esc(a.dek)}</p>` : ""}</span></a></article>`;

  const stackCard = a => `<article class="lstack">
<a class="lstack-img" href="${a.url}"><img src="${esc(a.img)}" alt="${esc(a.alt)}" loading="lazy"></a>
${meta(a)}<h3><a href="${a.url}">${esc(a.title)}</a></h3></article>`;

  const listItem = a => `<article class="llist">
<a class="llist-thumb" href="${a.url}"><img src="${esc(a.img)}" alt="${esc(a.alt)}" loading="lazy"></a>
<div class="llist-tx">${meta(a)}<h3><a href="${a.url}">${esc(a.title)}</a></h3></div></article>`;

  const mirrored = rebuilt % 2 === 1;
  const big = picks[0], stack = picks.slice(1, 3), list = picks.slice(3, 9);
  const bigCol = `<div class="lcol-big">${overlay(big)}</div>`;
  const stackCol = `<div class="lcol-stack">${stack.map(stackCard).join("")}</div>`;
  const listCol = `<div class="lcol-list">${list.map(listItem).join("")}<a class="lmore" href="/${slug}/">More ${esc(label)} <span aria-hidden="true">&rarr;</span></a></div>`;

  const block = `<section class="wrap secblock lsec${mirrored ? " lsec-mirror" : ""}">
<div class="lsechead"><span class="lseclabel"><a href="/${slug}/">${esc(label)}</a></span></div>
<div class="lgrid">${mirrored ? stackCol + bigCol + listCol : bigCol + stackCol + listCol}</div>
</section>
`;
  h = h.slice(0, bandStart) + block + h.slice(stop);
  rebuilt++;
}
fs.writeFileSync("index.html", h);
console.log(`  sections rebuilt (rotating shapes): ${rebuilt}`);
