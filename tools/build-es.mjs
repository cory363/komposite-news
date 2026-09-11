/* Builds the Spanish edition at /es/ from the English pages.
   The edition is deliberately partial: it lists only what exists in Spanish,
   so a reader never follows a Spanish headline into an English article. The
   navigation therefore carries the seven sections that have translated
   stories, not all thirteen. */
import fs from "node:fs";
import path from "node:path";

const S = JSON.parse(fs.readFileSync("tools/data/es-strings.json", "utf8"));
const ES = JSON.parse(fs.readFileSync("tools/data/es-articles.json", "utf8"));
const EN = JSON.parse(fs.readFileSync("tools/data/es-source.json", "utf8"));
const bySlug = Object.fromEntries(ES.map(a => [a.slug, a]));
const enBySlug = Object.fromEntries(EN.map(a => [a.slug, a]));
const SECS = [...new Set(ES.map(a => a.slug.split("/")[0]))];
const esc = s => String(s).replace(/&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const strip = s => String(s).replace(/<[^>]+>/g, "");

/* Spanish month names, and "2 min read". */
const esDate = d => d
  .replace(/([A-Z][a-z]+)\s+(\d+),\s+(\d{4})/, (m, mon, day, yr) => `${day} de ${S.months[mon] || mon} de ${yr}`)
  .replace(/(\d+)\s*min read/, "$1 min de lectura");

const navLinks = () => SECS.map(s => `<a href="/es/${s}/">${S.sections[s]}</a>`).join("\n");

/* The rail, rebuilt from the translated set so every headline in it resolves. */
const railFor = slug => {
  const others = ES.filter(a => a.slug !== slug);
  const feed = others.slice(0, 5).map(a =>
    `<div class="feedrow"><span class="fc">${esc(a.kicker)}</span>` +
    `<a href="/es/${a.slug}/">${esc(a.title)}</a></div>`).join("\n");
  const pop = others.slice(5, 10).map(a =>
    `<li><a href="/es/${a.slug}/">${esc(a.title)}</a></li>`).join("\n");
  return `<aside class="artrail">
<div class="morehead"><a href="/es/">${S.chrome["Latest"]}</a></div>
<div class="feedlist rail">
${feed}
</div>
<div class="morehead mh2">${S.chrome["Popular"]}</div>
<ol class="mostread mr-s">
${pop}
</ol>
</aside>`;
};

/* The language tab, in the nav utilities on both editions. */
export const langTab = (to, label) => `<a class="knav-lang" href="${to}">${label}</a>`;

/* "More on this story" pointed at English articles under Spanish kickers, and
   the tag row points at tag pages that exist only in English. Both are rebuilt
   or dropped so the edition stays self-consistent. */
const relFor = slug => {
  const sec = slug.split("/")[0];
  const pool = [...ES.filter(a => a.slug !== slug && a.slug.startsWith(sec + "/")),
                ...ES.filter(a => a.slug !== slug && !a.slug.startsWith(sec + "/"))];
  return `<section class="relblock">
` + pool.slice(0, 3).map(a =>
    `<article class="hl"><span class="kick">${esc(a.kicker)}</span>` +
    `<h2><a href="/es/${a.slug}/">${esc(a.title)}</a></h2></article>`).join("\n") + `
</section>`;
};

let built = 0;
for (const a of ES) {
  const en = enBySlug[a.slug];
  const src = fs.readFileSync(a.slug + "/index.html", "utf8");
  let h = src;
  const enUrl = `https://kompositenews.com/${a.slug}/`;
  const esUrl = `https://kompositenews.com/es/${a.slug}/`;

  /* Regions that are lists of English headlines get rebuilt, not translated. */
  h = h.replace(/<aside class="artrail">[\s\S]*?<\/aside>/, railFor(a.slug));
  h = h.replace(/<section class="relblock">[\s\S]*?<\/section>/, relFor(a.slug));
  h = h.replace(/<span class="lseclabel">More On This Story<\/span>/, '<span class="lseclabel">Más sobre este tema</span>');
  h = h.replace(/<div class="tagsrow">[\s\S]*?<\/div>\s*/, "");
  h = h.replace(/(<div class="knav-links">)[\s\S]*?(<\/div>)/, (m, o, c) => o + "\n" + navLinks() + "\n" + c);

  /* Article content. */
  const rep = (needle, val) => { if (needle && h.includes(needle)) h = h.split(needle).join(val); };
  rep(`<span class="kick">${en.kicker}</span>`, `<span class="kick">${esc(a.kicker)}</span>`);
  h = h.replace(/(<h1[^>]*>)[\s\S]*?(<\/h1>)/, (m, o, c) => o + esc(a.title) + c);
  h = h.replace(/(<p class="artdeck">)[\s\S]*?(<\/p>)/, (m, o, c) => o + esc(a.dek) + c);
  h = h.replace(/(<span class="byrole">)[\s\S]*?(<\/span>)/, (m, o, c) => o + " &middot; " + esc(a.role) + c);
  h = h.replace(/(<div class="bydate">)([^<]*)(<\/div>)/, (m, o, d, c) => o + esDate(d.replace(/&middot;/g, "·")).replace(/·/g, "&middot;") + c);
  h = h.replace(/(<figcaption>)([\s\S]*?)(<span class="ccredit">)/, (m, o, t, c) => o + esc(a.caption) + c);
  h = h.replace(/(<img[^>]*class="[^"]*illo[^"]*"[^>]*\balt=")[^"]*(")/, (m, o, c) => o + esc(a.alt) + c);
  en.paras.forEach((p, i) => { if (a.paras[i]) rep(`<p>${p}</p>`, `<p>${a.paras[i]}</p>`); });

  /* Head. */
  h = h.replace(/<html([^>]*)lang="en"/, '<html$1lang="es"');
  h = h.replace(/(<title>)[\s\S]*?(<\/title>)/, (m, o, c) => o + esc(a.title) + " &mdash; Komposite News" + c);
  const desc = esc(a.dek).slice(0, 160);
  h = h.replace(/(<meta name="description" content=")[^"]*(")/, (m, o, c) => o + desc + c);
  h = h.replace(/(<meta property="og:title" content=")[^"]*(")/, (m, o, c) => o + esc(a.title) + c);
  h = h.replace(/(<meta property="og:description" content=")[^"]*(")/, (m, o, c) => o + desc + c);
  h = h.replace(/(<meta name="twitter:title" content=")[^"]*(")/, (m, o, c) => o + esc(a.title) + c);
  h = h.replace(/(<meta name="twitter:description" content=")[^"]*(")/, (m, o, c) => o + desc + c);
  h = h.replace(/(<meta property="og:url" content=")[^"]*(")/, (m, o, c) => o + esUrl + c);
  h = h.replace(/(<link rel="canonical" href=")[^"]*(")/, (m, o, c) => o + esUrl + c);
  h = h.replace(/(<link rel="canonical"[^>]*>)/, (m, o) => o +
    `\n<link rel="alternate" hreflang="es" href="${esUrl}">` +
    `\n<link rel="alternate" hreflang="en" href="${enUrl}">` +
    `\n<link rel="alternate" hreflang="x-default" href="${enUrl}">`);
  h = h.replace(/"headline"\s*:\s*"[^"]*"/, `"headline":"${esc(a.title).replace(/"/g, "")}"`);
  h = h.replace(/"description"\s*:\s*"[^"]*"/, `"description":"${desc.replace(/"/g, "")}"`);
  h = h.replace(/("@type"\s*:\s*"NewsArticle")/, `$1,"inLanguage":"es"`);
  h = h.split(enUrl).join(esUrl);
  h = h.split(encodeURIComponent(enUrl)).join(encodeURIComponent(esUrl));
  h = h.split(encodeURIComponent(en.title)).join(encodeURIComponent(a.title));

  /* The clock renders in Spanish. */
  h = h.replace(/toLocaleDateString\("en-US"/, 'toLocaleDateString("es-ES"');

  /* Chrome. */
  for (const [k, v] of Object.entries(S.chrome)) h = h.split(`>${k}<`).join(`>${v}<`);
  h = h.split(">Got a tip? &rsaquo;<").join(">¿Tienes información? &rsaquo;<");
  h = h.replace(/(<a[^>]*class="kdate-tip"[^>]*>)[^<]*(<\/a>)/, (m, o, c) => o + "¿Tienes información?" + c);

  /* Links: to Spanish where Spanish exists, English otherwise. */
  h = h.replace(/href="\/([a-z0-9-]+)\/([a-z0-9-]+)\/"/g, (m, sec, sl) =>
    bySlug[`${sec}/${sl}`] ? `href="/es/${sec}/${sl}/"` : m);
  h = h.replace(/href="\/([a-z0-9-]+)\/"/g, (m, sec) =>
    SECS.includes(sec) ? `href="/es/${sec}/"` : m);

  /* The language tab. The English page this was copied from already carries
     its own "Español" tab, which would leave two on the Spanish page. */
  h = h.replace(/<a class="knav-lang"[^>]*>[^<]*<\/a>\s*/g, "");
  h = h.replace(/(<div class="knav-utils">)/, (m, o) => o + `\n    <a class="knav-lang" href="${"/" + a.slug + "/"}" hreflang="en">English</a>`);

  const dir = path.join("es", a.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), h);
  built++;
}
console.log(`  Spanish articles built: ${built}  across sections: ${SECS.join(", ")}`);
