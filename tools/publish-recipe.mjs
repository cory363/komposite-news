/**
 * The Recipes section uses its own template: no tags row, no related block,
 * no rail, and a "Recipe of the Day" title suffix. It is one page rather than
 * a series, so it is rendered here rather than generalised into the article
 * renderer.
 *
 * Headings use h2.rechead rather than the h3 the existing recipe used, because
 * .rechead is not bound to an element in the stylesheet and h1 -> h3 skips a
 * level.
 */
import fs from "node:fs";
import { furniture, SITE, esc, prettyDate, commonsUrl } from "./lib-template.mjs";

const a = {
  slug: "braise-that-behaves-like-a-roast",
  headline: "A Braise That Behaves Like a Roast",
  dek: "One cut, one pot, and an oven left alone for two hours. The work is twenty minutes at the start and ten at the end.",
  metaDesc: "Lamb shoulder braised low with garlic and white beans, so a cheap cut carves like a roast and the pot makes its own sauce while you ignore it.",
  date: "2026-08-14T09:00:00Z",
  meta: "2 hours 45 minutes · Serves 4 · Easy",
  photo: {
    file: "Lamb-stew.jpg", origW: 1100, origH: 790,
    alt: "A rich lamb stew with vegetables in a shallow bowl",
    credit: "FiveRings via Wikimedia Commons · CC BY 3.0",
  },
};

const OVERRIDE = JSON.parse(fs.readFileSync("tools/data/heroes.json", "utf8"))["recipes/" + a.slug];
const hero = OVERRIDE ? OVERRIDE.url : commonsUrl(a.photo.file, 1400);
const heroCard = commonsUrl(a.photo.file);
const url = `${SITE}/recipes/${a.slug}/`;
const title = `${esc(a.headline)} &mdash; Recipe of the Day`;
const imgW = OVERRIDE ? OVERRIDE.width : 1400;
const imgH = OVERRIDE ? OVERRIDE.height : Math.round(1400 * a.photo.origH / a.photo.origW);

const newsArticle = {
  "@context": "https://schema.org", "@type": "NewsArticle",
  headline: a.headline, description: a.metaDesc,
  datePublished: a.date, dateModified: a.date,
  image: { "@type": "ImageObject", url: hero, width: imgW, height: imgH },
  author: { "@type": "Person", name: "Marta Reyes", url: `${SITE}/authors/marta-reyes/` },
  publisher: { "@type": "NewsMediaOrganization", name: "Komposite News", url: SITE,
    logo: { "@type": "ImageObject", url: `${SITE}/assets/img/komposite-logo.png`, width: 1200, height: 1200 } },
  mainEntityOfPage: url, articleSection: "Recipes", keywords: "Recipes, Cooking, Craft",
};
const crumbs = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "Recipes", item: `${SITE}/recipes/` },
    { "@type": "ListItem", position: 3, name: a.headline, item: url },
  ],
};

const INGREDIENTS = [
  "1 bone-in lamb shoulder, about 4 lb, or 3 lb boneless",
  "Kosher salt and black pepper",
  "2 tbsp olive oil",
  "2 onions, halved and sliced thick",
  "1 head garlic, halved crosswise",
  "3 anchovy fillets (optional, and they do not taste of fish)",
  "1 tbsp tomato paste",
  "1 cup dry white wine",
  "2 cups chicken stock, or water and a bay leaf",
  "2 sprigs rosemary",
  "1 can white beans, drained",
  "Lemon, for finishing",
];

const STEPS = [
  "Heat the oven to 300&deg;F. Season the lamb hard on all sides, more salt than feels polite, and leave it on the counter while the oven comes up.",
  "Set a heavy pot over medium-high with the oil. Brown the lamb properly on every surface, eight to ten minutes a side, until it is the colour of a good crust rather than merely grey. This is the only part that needs your attention.",
  "Lift the lamb out. Drop the heat, add the onions and the garlic halves cut-side down, and cook until the onions slump and take colour, about ten minutes. Add the anchovies and tomato paste and stir for a minute until the paste darkens.",
  "Pour in the wine and scrape the bottom of the pot until nothing is stuck to it. Let it reduce by half, add the stock and rosemary, and return the lamb along with any juices.",
  "Cover and put it in the oven for two hours. Do not open it. At two hours, check that a fork turns easily in the meat; if it resists, give it another thirty minutes and check again.",
  "Lift the lamb onto a board. Skim the fat from the surface of the liquid, stir in the beans, and simmer the pot on the stove for ten minutes to thicken and warm them through.",
  "Pull the lamb into large pieces rather than shredding it, return them to the pot, and finish with a squeeze of lemon and more salt than you think. Serve from the pot.",
];

const { chrome, tail } = furniture();

const head = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" href="/assets/img/icon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><meta name="theme-color" content="#7E2231">
<title>${title}</title><meta name="description" content="${esc(a.metaDesc)}">
<link rel="canonical" href="${url}">
<meta property="og:site_name" content="Komposite News"><meta property="og:title" content="${title}"><meta property="og:description" content="${esc(a.metaDesc)}"><meta property="og:url" content="${url}"><meta property="og:type" content="article"><meta property="og:image" content="${esc(hero)}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${title}"><meta name="twitter:description" content="${esc(a.metaDesc)}"><meta name="twitter:image" content="${esc(hero)}">
<link rel="alternate" type="application/rss+xml" title="Komposite News" href="${SITE}/rss.xml">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Lora:ital,wght@0,400..700;1,400..700&family=Libre+Franklin:ital,wght@0,400..800;1,400..700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/style.css?v=86"><script type="application/ld+json">${JSON.stringify(newsArticle)}</script>
<script type="application/ld+json">${JSON.stringify(crumbs)}</script></head>`;

const main = `<main class="wrap artpage">
<div class="artmain">
<div class="kick">Recipe of the Day</div>
<h1 class="arthead">${esc(a.headline)}</h1>
<p class="deck artdeck">${esc(a.dek)}</p>
<div class="byrow"><div class="byline-l">By <a href="/authors/marta-reyes/">Marta Reyes</a>, Food Editor</div><div class="bydate">${a.meta}</div></div>
<span class="pwrap"><img class="illo photo arthero" src="${esc(hero)}" alt="${esc(OVERRIDE ? OVERRIDE.alt : a.photo.alt)}" loading="lazy" onerror="this.onerror=null;this.parentElement.style.display='none';"><span class="pcred">${OVERRIDE ? OVERRIDE.creditHtml : esc(a.photo.credit)}</span></span>
<div class="artbody">
<h2 class="rechead">Why we&rsquo;re making it</h2><p>Shoulder is the cut that rewards patience and punishes speed. Left alone at a low temperature it turns from something you could not carve into something that falls apart in the right way, and it does this without needing to be watched. Published ${prettyDate(a.date)}.</p>
<p>The beans are not a side dish. They go into the pot at the end and take on the fat and the wine, which is the whole reason to cook a shoulder in liquid rather than roast it dry.</p>
<h2 class="rechead">Ingredients</h2><ul class="reclist">${INGREDIENTS.map(i => `<li>${i}</li>`).join("")}</ul>
<h2 class="rechead">Method</h2><ol class="recsteps">${STEPS.map(s => `<li>${s}</li>`).join("")}</ol>
<h2 class="rechead">If you are getting ahead</h2><p>It is better on the second day and it reheats without complaint. Cool it in the pot, refrigerate it whole, and lift the set fat off the top before warming it through at a low heat. Add the beans then rather than the day before.</p>
</div></div>
${tail}`;

fs.mkdirSync(`recipes/${a.slug}`, { recursive: true });
fs.writeFileSync(`recipes/${a.slug}/index.html`, head + chrome + main);
console.log(`  wrote recipes/${a.slug}/index.html`);
export { a, heroCard };
