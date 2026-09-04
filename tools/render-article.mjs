/**
 * Render one article page from a record, matching the existing template exactly.
 *
 * Heroes: tools/data/heroes.json overrides the record's photo when an entry
 * exists for that article. That is where the Unsplash images live, so switching
 * a hero never means editing prose. Records keep their original Commons photo
 * as the fallback.
 *
 * The <img> carries the 800x450 display box the CSS crops to
 * (aspect-ratio:16/9;object-fit:cover); the JSON-LD ImageObject carries the
 * dimensions actually served. Both are true statements about different things.
 */
import fs from "node:fs";
import { furniture, SITE, esc, TITLE_SEP, prettyDate, readTime, commonsUrl } from "./lib-template.mjs";

const HEROES = fs.existsSync("tools/data/heroes.json")
  ? JSON.parse(fs.readFileSync("tools/data/heroes.json", "utf8")) : {};

/** Related cards must show the headline the target page actually carries. */
function realHeadline(href, fallback) {
  const p = href.replace(/^\//, "").replace(/\/$/, "") + "/index.html";
  if (!fs.existsSync(p)) return fallback;
  const m = fs.readFileSync(p, "utf8").match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  return m ? m[1].replace(/&amp;/g, "&") : fallback;
}

const AUTHORS = {
  "jonathan-bright": "Jonathan Bright|Policy Editor",
  "priya-raghavan": "Priya Raghavan|Markets Reporter",
  "tom-kessler": "Tom Kessler|Enterprise Technology Reporter",
  "sam-porter": "Sam Porter|Cybersecurity Reporter",
  "grace-lindqvist": "Grace Lindqvist|Startups &amp; Venture Reporter",
  "marcus-oyelaran": "Marcus Oyelaran|Blockchain &amp; Digital Assets Editor",
  "elena-vasquez": "Elena Vasquez|Fintech Correspondent",
  "dana-whitfield": "Dana Whitfield|Senior AI Correspondent",
  "colin-abernathy": "Colin Abernathy|Culture Editor",
  "marta-reyes": "Marta Reyes|Recipes Editor",
};

export const heroKey = a => `${a.dir}/${a.slug}`;

/** Resolved hero: Unsplash override if present, otherwise the record's Commons file. */
export function hero(a) {
  const o = HEROES[heroKey(a)];
  if (o) return { url: o.url, width: o.width, height: o.height, alt: o.alt, creditHtml: o.creditHtml, creditLine: o.creditLine };
  return {
    url: commonsUrl(a.photo.file), width: 800,
    height: Math.round(800 * a.photo.origH / a.photo.origW),
    alt: a.photo.alt, creditHtml: esc(a.photo.credit),
    creditLine: a.photo.creditLine || "Photograph via Wikimedia Commons",
  };
}

export function articleUrl(a) { return `${SITE}/${a.dir}/${a.slug}/`; }
export function heroUrl(a) { return hero(a).url; }
export function wordCount(a) { return a.body.join(" ").replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length; }

export function render(a) {
  const { chrome, rail, tail } = furniture();
  const [name, role] = AUTHORS[a.author].split("|");
  const url = articleUrl(a);
  const h = hero(a);
  const title = esc(a.headline) + TITLE_SEP;

  const newsArticle = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: a.headline,
    description: a.metaDesc,
    datePublished: a.date,
    dateModified: a.date,
    image: { "@type": "ImageObject", url: h.url, width: h.width, height: h.height },
    author: { "@type": "Person", name: name.replace(/&amp;/g, "&"), url: `${SITE}/authors/${a.author}/` },
    publisher: {
      "@type": "NewsMediaOrganization", name: "Komposite News", url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/assets/img/komposite-logo.png`, width: 1200, height: 1200 },
    },
    mainEntityOfPage: url,
    articleSection: a.sectionLabel,
    keywords: a.tags.map(t => t.name).join(", "),
  };
  const crumbs = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: a.sectionLabel, item: `${SITE}/${a.sectionHref}/` },
      { "@type": "ListItem", position: 3, name: a.headline, item: url },
    ],
  };

  const head = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title><meta name="description" content="${esc(a.metaDesc)}">
<link rel="canonical" href="${url}">
<meta property="og:site_name" content="Komposite News"><meta property="og:title" content="${title}"><meta property="og:description" content="${esc(a.metaDesc)}"><meta property="og:url" content="${url}"><meta property="og:type" content="article"><meta property="og:image" content="${esc(h.url)}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${title}"><meta name="twitter:description" content="${esc(a.metaDesc)}"><meta name="twitter:image" content="${esc(h.url)}">
<link rel="alternate" type="application/rss+xml" title="Komposite News" href="${SITE}/rss.xml">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://use.typekit.net/rby3otj.css">
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/style.css?v=14"><script type="application/ld+json">${JSON.stringify(newsArticle)}</script>
<script type="application/ld+json">${JSON.stringify(crumbs)}</script></head>`;

  const mins = readTime(wordCount(a));
  const body = a.body.map(p => `<p>${p}</p>`).join("");
  const tags = a.tags.map(t => `<a href="/tag/${t.slug}/">${esc(t.name)}</a>`).join("");
  const rel = a.related.map(r =>
    `<article class="hl"><span class="kick">${esc(r.kick)}</span><h2><a href="${r.href}">${esc(realHeadline(r.href, r.title))}</a></h2><div class="tago">${esc(r.ago)}</div></article>`).join("");

  const main = `<main class="wrap artgrid"><article class="art">
<span class="kick">${esc(a.kick)}</span>
<h1>${esc(a.headline)}</h1><p class="artdeck">${esc(a.dek)}</p>
<div class="artby"><div><a href="/authors/${a.author}/" class="byname">${name}</a><span class="byrole"> &middot; ${role}</span></div>
<div class="bydate">${prettyDate(a.date)} &middot; ${mins} min read</div></div>
<figure class="arthero"><span class="pwrap"><img class="illo photo "  src="${esc(h.url)}" alt="${esc(h.alt)}" loading="lazy" width="800" height="450" onerror="this.onerror=null;this.parentElement.style.display='none';"><span class="pcred">${h.creditHtml}</span></span><figcaption>${esc(a.photo.capt)}<span class="ccredit">${esc(h.creditLine)}</span></figcaption></figure>
<div class="artbody">${body}</div>
<div class="tagsrow">${tags}</div>
<div class="band"><span>MORE ON THIS STORY</span></div>
<section class="relblock">${rel}</section>
</article>
${rail}${tail}`;

  return head + chrome + main;
}
