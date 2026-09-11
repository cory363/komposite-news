/* The Spanish front and section pages. Chrome is lifted from a page the
   article builder already produced, so the header, footer and language tab
   stay identical across the edition and there is only one place they live. */
import fs from "node:fs";
import path from "node:path";
const S = JSON.parse(fs.readFileSync("tools/data/es-strings.json", "utf8"));
const ES = JSON.parse(fs.readFileSync("tools/data/es-articles.json", "utf8"));
const esc = s => String(s).replace(/&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const SECS = [...new Set(ES.map(a => a.slug.split("/")[0]))];

/* Each story's photograph and its credit come from the English article. */
const art = {};
for (const a of ES) {
  const h = fs.readFileSync(a.slug + "/index.html", "utf8");
  const img = h.match(/<img[^>]*class="[^"]*illo[^"]*"[^>]*src="([^"]+)"/);
  art[a.slug] = { src: img ? img[1] : "", sec: a.slug.split("/")[0] };
}

const tpl = fs.readFileSync("es/" + ES[0].slug + "/index.html", "utf8");
const head = tpl.slice(0, tpl.indexOf("<main"));
const tail = tpl.slice(tpl.indexOf('<footer class="kfoot"'));

const pageHead = (title, desc, url, enUrl) => head
  .replace(/(<title>)[\s\S]*?(<\/title>)/, (m, o, c) => o + esc(title) + c)
  .replace(/(<meta name="description" content=")[^"]*(")/, (m, o, c) => o + esc(desc) + c)
  .replace(/(<meta property="og:title" content=")[^"]*(")/, (m, o, c) => o + esc(title) + c)
  .replace(/(<meta property="og:description" content=")[^"]*(")/, (m, o, c) => o + esc(desc) + c)
  .replace(/(<meta name="twitter:title" content=")[^"]*(")/, (m, o, c) => o + esc(title) + c)
  .replace(/(<meta name="twitter:description" content=")[^"]*(")/, (m, o, c) => o + esc(desc) + c)
  .replace(/(<meta property="og:url" content=")[^"]*(")/, (m, o, c) => o + url + c)
  .replace(/(<link rel="canonical" href=")[^"]*(")/, (m, o, c) => o + url + c)
  .replace(/(<link rel="alternate" hreflang="es" href=")[^"]*(")/, (m, o, c) => o + url + c)
  .replace(/(<link rel="alternate" hreflang="en" href=")[^"]*(")/, (m, o, c) => o + enUrl + c)
  .replace(/(<link rel="alternate" hreflang="x-default" href=")[^"]*(")/, (m, o, c) => o + enUrl + c)
  .replace(/(<a class="knav-lang" href=")[^"]*(")/, (m, o, c) => o + enUrl.replace("https://kompositenews.com", "") + c)
  /* The article template carries NewsArticle and BreadcrumbList schema that
     does not describe a listing page. */
  .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g, "");

const card = a => `<article class="lstack">
<a class="lstack-img" href="/es/${a.slug}/"><img src="${art[a.slug].src}" alt="${esc(a.alt)}" loading="lazy"></a>
<div class="lmeta"><span class="lkick">${esc(a.kicker)}</span></div>
<h3><a href="/es/${a.slug}/">${esc(a.title)}</a></h3>
<p class="deck">${esc(a.dek)}</p>
</article>`;

const note = `<p class="es-note">${S.ui.partial} <a href="/">Ver la edición en inglés</a>.</p>`;
const tabs = `<div class="lsechead"><span class="lseclabel"><a href="/es/">${S.chrome["Latest"]}</a></span></div>`;

/* Front page. */
const lead = ES[0];
let front = pageHead("Komposite News en español", S.ui.partial,
  "https://kompositenews.com/es/", "https://kompositenews.com/");
front += `<main class="wrap">
${note}
<article class="lhero">
<div class="lhero-frame">
<a class="lhero-img" href="/es/${lead.slug}/"><img src="${art[lead.slug].src}" alt="${esc(lead.alt)}" decoding="async" fetchpriority="high"></a>
<div class="lhero-tx"><div class="abckick">${esc(lead.kicker)}</div>
<h2><a href="/es/${lead.slug}/">${esc(lead.title)}</a></h2>
<p class="lhero-dek">${esc(lead.dek)}</p></div>
</div>
</article>
${tabs}
<div class="lgrid-es">
${ES.slice(1).map(card).join("\n")}
</div>
</main>
`;
fs.writeFileSync("es/index.html", front + tail);

/* One page per section that actually has Spanish stories. */
let n = 0;
for (const sec of SECS) {
  const items = ES.filter(a => a.slug.startsWith(sec + "/"));
  const name = S.sections[sec];
  let p = pageHead(`${name} — Komposite News`,
    `Cobertura de ${name} en la edición en español de Komposite News.`,
    `https://kompositenews.com/es/${sec}/`, `https://kompositenews.com/${sec}/`);
  p += `<main class="wrap catpage">
<h1 class="catname">${esc(name)}</h1>
${note}
<div class="lgrid-es">
${items.map(card).join("\n")}
</div>
</main>
`;
  fs.mkdirSync("es/" + sec, { recursive: true });
  fs.writeFileSync(`es/${sec}/index.html`, p + tail);
  n++;
}
console.log(`  Spanish front page + ${n} section pages built`);
