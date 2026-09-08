/**
 * Render Recipe of the Day pages.
 *
 * The Recipes section uses its own template: no tags row, no related block,
 * no rail, and a "Recipe of the Day" title suffix. Headings use h2.rechead
 * rather than h3, because .rechead is not bound to an element and h1 -> h3
 * would skip a level.
 */
import fs from "node:fs";
import { furniture, SITE, esc, prettyDate, commonsUrl } from "./lib-template.mjs";

const HEROES = JSON.parse(fs.readFileSync("tools/data/heroes.json", "utf8"));
const recipes = (await import("../tools/data/recipes.mjs".replace("../tools", process.cwd() + "/tools"))).default;
const ICONS = '<link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" href="/assets/img/icon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><meta name="theme-color" content="#7E2231">';

for (const a of recipes) {
  const o = HEROES["recipes/" + a.slug];
  const hero = o ? o.url : commonsUrl(a.photo.file, 1400);
  const imgW = o ? o.width : 1400;
  const imgH = o ? o.height : Math.round(1400 * a.photo.origH / a.photo.origW);
  const alt = o ? o.alt : a.photo.alt;
  const credit = o ? o.creditHtml : esc(a.photo.credit);
  const url = `${SITE}/recipes/${a.slug}/`;
  const title = `${esc(a.headline)} &mdash; Recipe of the Day`;

  const ld = {
    "@context": "https://schema.org", "@type": "NewsArticle",
    headline: a.headline, description: a.metaDesc,
    datePublished: a.date, dateModified: a.date,
    image: { "@type": "ImageObject", url: hero, width: imgW, height: imgH },
    author: { "@type": "Person", name: "Marta Reyes", url: `${SITE}/authors/marta-reyes/` },
    publisher: { "@type": "NewsMediaOrganization", name: "Komposite News", url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/assets/img/komposite-logo.png`, width: 1200, height: 1200 } },
    mainEntityOfPage: url, articleSection: "Recipes", keywords: "Recipes, Cooking, Craft",
  };
  const crumbs = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "Recipes", item: `${SITE}/recipes/` },
    { "@type": "ListItem", position: 3, name: a.headline, item: url }] };

  const head = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
${ICONS}
<title>${title}</title><meta name="description" content="${esc(a.metaDesc)}">
<link rel="canonical" href="${url}">
<meta property="og:site_name" content="Komposite News"><meta property="og:title" content="${title}"><meta property="og:description" content="${esc(a.metaDesc)}"><meta property="og:url" content="${url}"><meta property="og:type" content="article"><meta property="og:locale" content="en_US"><meta property="og:image" content="${esc(hero)}"><meta property="og:image:width" content="${imgW}"><meta property="og:image:height" content="${imgH}"><meta property="og:image:alt" content="${esc(alt)}"><meta property="article:published_time" content="${a.date}"><meta property="article:modified_time" content="${a.date}"><meta property="article:author" content="Marta Reyes"><meta property="article:section" content="Recipes">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${title}"><meta name="twitter:description" content="${esc(a.metaDesc)}"><meta name="twitter:image" content="${esc(hero)}">
<link rel="alternate" type="application/rss+xml" title="Komposite News" href="${SITE}/rss.xml">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=League+Gothic&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/style.css?v=41"><script type="application/ld+json">${JSON.stringify(ld)}</script>
<script type="application/ld+json">${JSON.stringify(crumbs)}</script></head>`;

  const { chrome, tail } = furniture();
  const main = `<main class="wrap artpage">
<div class="artmain">
<div class="kick">Recipe of the Day</div>
<h1 class="arthead">${esc(a.headline)}</h1>
<p class="deck artdeck">${esc(a.dek)}</p>
<div class="byrow"><div class="byline-l">By <a href="/authors/marta-reyes/">Marta Reyes</a>, Food Editor</div><div class="bydate">${a.meta}</div></div>
<span class="pwrap"><img class="illo photo arthero" src="${esc(hero)}" alt="${esc(alt)}" loading="lazy" onerror="this.onerror=null;this.parentElement.style.display='none';"><span class="pcred">${credit}</span></span>
<div class="artbody">
<h2 class="rechead">Why we&rsquo;re making it</h2>${a.intro.map(p => `<p>${p}</p>`).join("")}
<p class="dateline-note">Published ${prettyDate(a.date)}.</p>
<h2 class="rechead">Ingredients</h2><ul class="reclist">${a.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
<h2 class="rechead">Method</h2><ol class="recsteps">${a.steps.map(s => `<li>${s}</li>`).join("")}</ol>
<h2 class="rechead">If you are getting ahead</h2><p>${a.ahead}</p>
</div></div>
${tail}`;

  fs.mkdirSync(`recipes/${a.slug}`, { recursive: true });
  fs.writeFileSync(`recipes/${a.slug}/index.html`, head + chrome + main);
  console.log(`  wrote recipes/${a.slug}/index.html`);
}
