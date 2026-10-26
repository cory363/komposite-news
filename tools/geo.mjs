/**
 * GEO / AI-search pass. Idempotent; safe to run after any publish.
 *
 * Pages:
 *   - every NewsArticle/Article JSON-LD carries inLanguage (from <html lang>),
 *     isAccessibleForFree (the site has no paywall) and dateModified
 *     (falls back to datePublished when absent);
 *   - the homepage NewsMediaOrganization carries its logo and points to the
 *     editorial standards and corrections pages. No sameAs: the footer's
 *     social icons link to the platforms' home pages, not to Komposite
 *     profiles, so there is no real profile to cite;
 *   - author pages declare ProfilePage with the existing Person as mainEntity
 *     (nothing is added to the Person itself);
 *   - every <img> gets width/height (from the crop in its URL, else the
 *     dimensions the article schema records for the same photo) and lazy
 *     images get decoding="async".
 *
 * Files:
 *   - llms.txt (llmstxt.org format) and llms-full.txt (plain text of the key
 *     stories and standing pages), regenerated from the pages on disk.
 *
 * wire.mjs runs this after every batch. Usage: node tools/geo.mjs
 */
import fs from "node:fs";
import path from "node:path";

const SITE = "https://kompositenews.com";

/* Stories held back from every index surface by the owner; not edited here
   and never listed in llms.txt. */
const ORPHANS = new Set([
  "ai/ai-second-act-trust-pause", "ai/deepseek-12-billion-funding-round",
  "cybersecurity/denmark-cpr-data-breach", "fintech/stablecoin-trust-bank-charters",
  "markets/treasury-yields-multidecade-highs",
]);

/* Evergreen explainers and analysis that stay useful beyond the news cycle.
   Edit by hand; the newest stories are added automatically below them. */
const EVERGREEN = [
  "cybersecurity/sbom-what-buyers-do-with-it",
  "crypto/what-an-attestation-must-prove",
  "startups/what-a-seed-round-now-requires",
  "markets/volatility-market-structure-ai-trading",
  "cybersecurity/identity-machine-workloads",
  "ai/ai-coding-tools-enterprise-standards",
  "ai/synthetic-data-enterprise-training",
  "ai/ai-evaluation-becomes-budget-line",
  "technology/power-constraints-shape-computing",
  "business/shadow-ai-governance-problem",
  "fintech/instant-payments-b2b-standard",
  "crypto/stablecoin-reserve-transparency-standards",
  "policy/stablecoin-law-implementation-year",
  "cybersecurity/critical-infrastructure-reporting-rules",
  "blockchain/interoperability-standards-institutional-chains",
  "startups/secondaries-startup-liquidity",
];
const NEWEST = 8;

const SECTIONS = [
  ["ai", "AI", "artificial intelligence: models, labs, enterprise adoption and AI policy"],
  ["markets", "Markets", "capital markets, rates and market structure"],
  ["business", "Business", "companies, deals and corporate strategy"],
  ["technology", "Technology", "enterprise technology and infrastructure"],
  ["startups", "Startups", "venture funding and startup companies"],
  ["fintech", "Fintech", "payments, banking technology and financial infrastructure"],
  ["crypto", "Crypto", "digital assets, stablecoins and crypto markets"],
  ["blockchain", "Blockchain", "blockchain infrastructure reporting and analysis"],
  ["cybersecurity", "Cybersecurity", "breaches, threats and security practice"],
  ["policy", "Policy", "regulation, legislation and policy"],
  ["culture", "Culture", "culture and media"],
  ["music", "Music", "music coverage"],
  ["opinion", "Opinion", "labeled opinion and columns"],
  ["the-divide", "The Divide", "one major issue each edition, argued from the left and from the right"],
  ["latest", "Latest", "all reporting in chronological order"],
  ["authors", "Authors", "the newsroom and contributors"],
  ["es", "Español", "Spanish-language edition (selected coverage)"],
];

const STANDING = [
  ["about", "About", "what Komposite News covers and for whom"],
  ["editorial-standards", "Editorial Standards", "reporting, analysis, opinion and sourcing rules"],
  ["corrections", "Corrections", "corrections policy and log"],
  ["ai-policy", "AI Policy", "how AI is and is not used in the newsroom"],
  ["contact", "Contact", "reaching the newsroom"],
  ["tips", "Tips", "sending information to the desk"],
  ["licensing", "Licensing & Reprints", "republication terms"],
];

const SKIP = new Set([".git", "node_modules", "tools", "assets"]);
function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (SKIP.has(e.name) || e.name.startsWith(".")) continue;
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p, out) : (e.name.endsWith(".html") && out.push(p));
  }
  return out;
}
const rel = f => f.replace(/^\.\//, "");
const slugOf = f => rel(f).replace(/\/index\.html$/, "");
const LD = /(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/g;
const ser = o => JSON.stringify(o).replace(/<\//g, "<\\/");
const isArticleType = t => [].concat(t || []).some(x => /Article$/.test(x));
const attr = (tag, n) => (tag.match(new RegExp(`\\s${n}="([^"]*)"`)) || [])[1];
const imgKey = u => (u || "").replace(/&amp;/g, "&").split("?")[0].replace(/^https?:\/\/kompositenews\.com/, "");

/* Photo -> [width, height] as recorded by the article that leads with it. */
function dimsMap(files) {
  const m = new Map();
  for (const f of files) {
    const h = fs.readFileSync(f, "utf8");
    for (const [, , j] of h.matchAll(LD)) {
      let o; try { o = JSON.parse(j); } catch { continue; }
      for (const it of o["@graph"] || [o]) {
        const im = it.image;
        if (isArticleType(it["@type"]) && im?.url && im.width && im.height) m.set(imgKey(im.url), [im.width, im.height]);
      }
    }
    for (const [tag] of h.matchAll(/<img\b[^>]*>/g)) {
      const w = attr(tag, "width"), ht = attr(tag, "height"), s = attr(tag, "src");
      if (w && ht && s && !m.has(imgKey(s))) m.set(imgKey(s), [+w, +ht]);
    }
  }
  return m;
}

function imgDims(src, dims) {
  const s = src.replace(/&amp;/g, "&");
  const w = +(s.match(/[?&]w=(\d+)/) || [])[1], h = +(s.match(/[?&]h=(\d+)/) || [])[1];
  if (w && h) return [w, h];
  const known = dims.get(imgKey(src));
  if (known) return w ? [w, Math.round(w * known[1] / known[0])] : known;
  return null;
}

export function geoHtml(html, file, dims) {
  const r = rel(file);
  const lang = (html.match(/<html[^>]*\slang="([^"]+)"/) || [])[1] || "en";
  html = html.replace(LD, (all, o, j, c) => {
    let d; try { d = JSON.parse(j); } catch { return all; }
    let changed = false;
    for (const it of d["@graph"] || [d]) {
      if (isArticleType(it["@type"])) {
        if (!it.inLanguage) { it.inLanguage = lang; changed = true; }
        if (it.isAccessibleForFree === undefined) { it.isAccessibleForFree = true; changed = true; }
        if (!it.dateModified && it.datePublished) { it.dateModified = it.datePublished; changed = true; }
      }
      if (r === "index.html" && [].concat(it["@type"]).includes("NewsMediaOrganization")) {
        if (!it.logo) { it.logo = { "@type": "ImageObject", url: `${SITE}/assets/img/komposite-logo.png`, width: 1200, height: 1200 }; changed = true; }
        if (!it.publishingPrinciples) { it.publishingPrinciples = `${SITE}/editorial-standards/`; changed = true; }
        if (!it.correctionsPolicy) { it.correctionsPolicy = `${SITE}/corrections/`; changed = true; }
      }
    }
    if (/^authors\/[^/]+\/index\.html$/.test(r) && d["@type"] === "Person") {
      const { "@context": ctx, ...person } = d;
      d = { "@context": ctx, "@type": "ProfilePage", url: person.url, mainEntity: person };
      changed = true;
    }
    return changed ? o + ser(d) + c : all;
  });
  html = html.replace(/<img\b[^>]*>/g, tag => {
    let t = tag;
    if (!/\swidth="/.test(t) || !/\sheight="/.test(t)) {
      const wh = imgDims(attr(t, "src") || "", dims);
      if (wh) t = t.replace(/\s(width|height)="[^"]*"/g, "").replace(/<img\b/, `<img width="${wh[0]}" height="${wh[1]}"`);
    }
    if (/\sloading="lazy"/.test(t) && !/\sdecoding="/.test(t)) t = t.replace(/<img\b/, '<img decoding="async"');
    return t;
  });
  return html;
}

/* ---------- llms.txt / llms-full.txt ---------- */
const strip = s => String(s).replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<button[\s\S]*?<\/button>/g, "")
  .replace(/<\/(p|h[1-6]|li|tr)>/g, "\n").replace(/<br\s*\/?>/g, "\n").replace(/<[^>]*>/g, "")
  .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&mdash;/g, "—").replace(/&ndash;/g, "–")
  .replace(/&rsquo;|&#8217;/g, "’").replace(/&lsquo;/g, "‘").replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”")
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&hellip;/g, "…")
  .replace(/[ \t]+/g, " ").replace(/\n\s*\n+/g, "\n\n").trim();
const oneLine = s => strip(s).replace(/\s+/g, " ");

function article(slug) {
  const f = `${slug}/index.html`;
  if (!fs.existsSync(f)) return null;
  const h = fs.readFileSync(f, "utf8");
  if (/name="robots"[^>]*noindex/.test(h)) return null;
  let na = null;
  for (const [, , j] of h.matchAll(LD)) { try { const o = JSON.parse(j); if (isArticleType(o["@type"])) na = o; } catch {} }
  if (!na) return null;
  const desc = (h.match(/<meta name="description" content="([^"]*)"/) || [])[1] || na.description || "";
  /* The body runs from .artbody to the tag row (or the end of the article). */
  const body = (h.match(/<div class="artbody"[^>]*>([\s\S]*?)(?:<div class="tagsrow"|<\/article>)/) || [])[1] || "";
  return { slug, url: `${SITE}/${slug}/`, title: na.headline, desc: oneLine(desc), date: na.datePublished, mod: na.dateModified || na.datePublished, author: na.author?.name, section: na.articleSection, body };
}

export function buildLlms(files) {
  const articles = files.map(slugOf)
    .filter(s => s.split("/").length === 2 && !/^(es|tag|authors|divide)\//.test(s) && !ORPHANS.has(s))
    .map(article).filter(Boolean);
  const bySlug = new Map(articles.map(a => [a.slug, a]));
  const ever = EVERGREEN.map(s => bySlug.get(s)).filter(Boolean);
  const newest = articles.filter(a => !EVERGREEN.includes(a.slug))
    .sort((a, b) => b.date.localeCompare(a.date)).slice(0, NEWEST);
  const line = a => `- [${a.title}](${a.url}): ${a.desc}`;
  const exists = s => fs.existsSync(`${s}/index.html`);

  const txt = `# Komposite News

> Komposite News is an independent digital publication covering artificial intelligence, blockchain, digital assets, enterprise technology, cybersecurity, fintech and capital markets. It writes for executives, founders, investors, developers and policy professionals who need to understand how technology and finance are changing each other, and prioritizes reporting and analysis over hype.

- News stories, pieces labeled Analysis and pieces labeled Opinion are clearly distinguished.
- Information is attributed to sources wherever possible and claims are verified before publication; sponsored content is always labeled.
- Corrected articles carry a note describing what was wrong and when it was fixed.
- Komposite News uses AI tools to help research, draft and edit stories; every story is checked against its listed sources and approved by an editor before it goes live. Bylines name the desk or house byline responsible; they are not always individual reporters (see ${SITE}/editorial-standards/#how-we-use-ai).
- A selection of coverage is also published in Spanish under /es/.
- All articles are free to read. A plain-text copy of the key stories is at ${SITE}/llms-full.txt.

## Sections

${SECTIONS.filter(([s]) => exists(s)).map(([s, n, d]) => `- [${n}](${SITE}/${s}/): ${d}`).join("\n")}

## Key guides and analysis

${ever.map(line).join("\n")}

## Newest stories

${newest.map(line).join("\n")}

## About, standards and contact

${STANDING.filter(([s]) => exists(s)).map(([s, n, d]) => `- [${n}](${SITE}/${s}/): ${d}`).join("\n")}

## Feeds and sitemaps

- [RSS feed](${SITE}/rss.xml): latest stories
- [Sitemap index](${SITE}/sitemap-index.xml): links to the full sitemap and the news sitemap
- [Sitemap](${SITE}/sitemap.xml): every page and article
- [News sitemap](${SITE}/news-sitemap.xml): articles from the last 48 hours
`;
  fs.writeFileSync("llms.txt", txt);

  const standing = STANDING.filter(([s]) => exists(s) && s !== "contact" && s !== "tips").map(([s, n]) => {
    const h = fs.readFileSync(`${s}/index.html`, "utf8");
    const main = (h.match(/<main[^>]*>([\s\S]*?)<\/main>/) || [])[1] || "";
    return `# ${n}\n\nURL: ${SITE}/${s}/\n\n${strip(main.replace(/<nav class="breadcrumb"[\s\S]*?<\/nav>/, ""))}`;
  });
  const stories = [...ever, ...newest].map(a =>
    `# ${a.title}\n\nURL: ${a.url}\nSection: ${a.section}\nBy: ${a.author}\nPublished: ${a.date}\nUpdated: ${a.mod}\n\n${a.desc}\n\n${strip(a.body)}`);
  const full = `# Komposite News — full text of key pages\n\nGenerated from ${SITE}/llms.txt. Each entry gives the canonical URL to cite.\n\n---\n\n` +
    [...standing, ...stories].join("\n\n---\n\n") + "\n";
  fs.writeFileSync("llms-full.txt", full);
  return { ever: ever.length, newest: newest.length, fullBytes: Buffer.byteLength(full) };
}

export function runGeo() {
  const files = walk(".");
  const dims = dimsMap(files);
  let pages = 0;
  for (const f of files) {
    if (ORPHANS.has(slugOf(f))) continue;
    const h = fs.readFileSync(f, "utf8");
    const o = geoHtml(h, f, dims);
    if (o !== h) { fs.writeFileSync(f, o); pages++; }
  }
  const l = buildLlms(files);
  console.log(`  geo: ${pages} pages updated; llms.txt ${l.ever} key + ${l.newest} newest; llms-full.txt ${(l.fullBytes / 1024).toFixed(0)} KB`);
}

if (import.meta.url === `file://${process.argv[1]}`) runGeo();
