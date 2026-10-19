/* Visible breadcrumbs that match the BreadcrumbList JSON-LD, on every story
   page and every section front.

   Stories: Home > Section > Headline. The JSON-LD the article template already
   writes is the source of truth; the visible trail is rendered from it, so the
   two cannot disagree. Pages that shipped without structured data get a
   BreadcrumbList built from their own h1, canonical and section. (They are
   not given a NewsArticle here: that would make them articles to validate.mjs,
   which then requires search-index entries and the house image rules.)

   Spanish stories (/es/...) are lifted from the English page by build-es.mjs
   and kept the English trail (Home > Music > English headline, pointing at the
   English section). Their trail is rebuilt in Spanish: Inicio > Música >
   titular, pointing at /es/ and /es/<section>/.

   Section fronts: Home > Section, from the kn-section-ld block that
   add-section-schema.mjs writes. Spanish section fronts get their own
   CollectionPage + BreadcrumbList (id="kn-section-ld") here.

   Idempotent: the <nav class="breadcrumb"> is replaced, never duplicated, and
   no page ever carries more than one BreadcrumbList.

   The article template (render-article.mjs) calls breadcrumbNav() directly, and
   build-es.mjs / build-es-pages.mjs / build-interviews.mjs run applyBreadcrumbs()
   on the pages they write, so future pages are covered without a re-run.

   Usage: node tools/add-breadcrumbs.mjs */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SITE = "https://kompositenews.com";
const ES = JSON.parse(fs.readFileSync("tools/data/es-strings.json", "utf8")).sections;
const SECTIONS = ["ai", "blockchain", "business", "crypto", "culture", "cybersecurity", "fintech",
  "markets", "music", "opinion", "policy", "startups", "technology", "interviews", "latest", "the-divide"];
/* Story directory -> section front, where the two differ. */
const SEC_OF_DIR = { divide: "the-divide" };

const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const dec = s => String(s).replace(/&mdash;/g, "—").replace(/&ndash;/g, "–").replace(/&rsquo;/g, "’")
  .replace(/&lsquo;/g, "‘").replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”").replace(/&middot;/g, "·")
  .replace(/&nbsp;/g, " ").replace(/&quot;/g, '"').replace(/&#0?39;/g, "'").replace(/&#x27;/g, "'")
  .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
const text = s => dec(String(s).replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
const ldJson = o => JSON.stringify(o).replace(/</g, "\\u003c");
const meta = (h, re) => dec((h.match(re) || [])[1] || "");

const NAV_RE = /<nav aria-label="Breadcrumb" class="breadcrumb">[\s\S]*?<\/nav>\s*/g;
const LD_RE = /<script type="application\/ld\+json"([^>]*)>([\s\S]*?)<\/script>/g;

/** The visible trail. items: [{name, item}], last one is the current page. */
export function breadcrumbNav(items) {
  const li = items.map((it, i) => i === items.length - 1
    ? `<li><span aria-current="page">${esc(it.name)}</span></li>`
    : `<li><a href="${esc(String(it.item).replace(SITE, "") || "/")}">${esc(it.name)}</a></li>`).join("");
  return `<nav aria-label="Breadcrumb" class="breadcrumb"><ol>${li}</ol></nav>\n`;
}

/** Every BreadcrumbList on the page, wherever it sits (standalone or @graph). */
function findCrumbs(h) {
  for (const m of h.matchAll(LD_RE)) {
    let o; try { o = JSON.parse(m[2]); } catch { continue; }
    const objs = Array.isArray(o) ? o : o["@graph"] || [o];
    const b = objs.find(x => x && x["@type"] === "BreadcrumbList");
    if (b) return b.itemListElement.slice().sort((a, b) => a.position - b.position);
  }
  return null;
}

let secNames = null;
function sectionName(sec) {
  if (!secNames) {
    secNames = {};
    for (const s of SECTIONS) {
      const f = `${s}/index.html`;
      if (!fs.existsSync(f)) continue;
      const h = fs.readFileSync(f, "utf8");
      const c = findCrumbs(h);
      secNames[s] = c ? c[c.length - 1].name : text((h.match(/<h1 class="catname">([^<]*)/) || [])[1] || s);
    }
  }
  return secNames[sec];
}

const listItems = arr => arr.map((x, i) => ({ "@type": "ListItem", position: i + 1, name: x.name, item: x.item }));

function storyPage(h, rel) {
  const parts = rel.split("/");
  const isEs = parts[0] === "es";
  const dir = isEs ? parts[1] : parts[0];
  const canon = meta(h, /<link rel="canonical" href="([^"]*)"/) || `${SITE}/${rel.replace(/index\.html$/, "")}`;
  const headline = text((h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || "");

  let items = findCrumbs(h);
  if (isEs) {
    items = listItems([
      { name: "Inicio", item: `${SITE}/es/` },
      { name: ES[dir] || dir, item: `${SITE}/es/${dir}/` },
      { name: headline, item: canon }]);
  } else if (!items) {
    const sec = SEC_OF_DIR[dir] || dir;
    items = listItems([
      { name: "Home", item: SITE },
      { name: sectionName(sec) || meta(h, /<meta property="article:section" content="([^"]*)"/), item: `${SITE}/${sec}/` },
      { name: headline, item: canon }]);
  }
  /* Write the trail back as the page's single standalone BreadcrumbList. */
  const block = `<script type="application/ld+json">${ldJson({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: listItems(items) })}</script>`;
  let placed = false;
  h = h.replace(LD_RE, (m, attrs, body) => {
    let o; try { o = JSON.parse(body); } catch { return m; }
    if (o["@type"] !== "BreadcrumbList") return m;
    if (placed) return "";
    placed = true; return block;
  });
  if (!placed) h = h.replace("</head>", block + "\n</head>");

  h = h.replace(NAV_RE, "");
  return h.replace('<article class="art">', '<article class="art">\n' + breadcrumbNav(items).trimEnd());
}

function sectionPage(h, rel) {
  const parts = rel.split("/");
  const isEs = parts[0] === "es";
  if (isEs) {
    const sec = parts[1];
    const url = `${SITE}/es/${sec}/`;
    const title = meta(h, /<title>([^<]*)<\/title>/);
    const ld = { "@context": "https://schema.org", "@graph": [
      { "@type": "CollectionPage", "@id": url + "#page", url, name: title, inLanguage: "es",
        isPartOf: { "@type": "WebSite", name: "Komposite News", url: SITE },
        publisher: { "@type": "NewsMediaOrganization", name: "Komposite News", url: SITE } },
      { "@type": "BreadcrumbList", itemListElement: listItems([
        { name: "Inicio", item: `${SITE}/es/` }, { name: ES[sec] || sec, item: url }]) }] };
    const tag = `<script type="application/ld+json" id="kn-section-ld">${ldJson(ld)}</script>`;
    const re = /<script type="application\/ld\+json" id="kn-section-ld">[\s\S]*?<\/script>/;
    h = re.test(h) ? h.replace(re, tag) : h.replace("</head>", tag + "</head>");
  }
  const items = findCrumbs(h);
  if (!items) return h;
  h = h.replace(NAV_RE, "");
  return h.replace(/(<main id="main" class="wrap catpage">)\s*/, "$1\n" + breadcrumbNav(items));
}

/** Apply to one page's HTML. rel is its path from the repo root, e.g. "ai/x/index.html". */
export function applyBreadcrumbs(h, rel) {
  rel = rel.replace(/^\.\//, "");
  const depth = rel.split("/").length;
  const isEs = rel.startsWith("es/");
  if (/^(tag|authors)\//.test(rel)) return h;
  if (h.includes('<article class="art">') && depth === (isEs ? 4 : 3)) return storyPage(h, rel);
  const sec = rel.split("/")[isEs ? 1 : 0];
  if (depth === (isEs ? 3 : 2) && h.includes('<main id="main" class="wrap catpage">') &&
      (isEs ? sec in ES : SECTIONS.includes(sec))) return sectionPage(h, rel);
  return h;
}

/* CLI: every page in the repo. */
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const SKIP = new Set([".git", "node_modules", "tools", "assets"]);
  const walk = (d, out = []) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      if (SKIP.has(e.name)) continue;
      const p = path.join(d, e.name);
      e.isDirectory() ? walk(p, out) : (e.name === "index.html" && out.push(p));
    }
    return out;
  };
  let n = 0;
  for (const f of walk(".")) {
    const h = fs.readFileSync(f, "utf8");
    const out = applyBreadcrumbs(h, f);
    if (out !== h) { fs.writeFileSync(f, out); n++; }
  }
  console.log(`breadcrumbs: ${n} page(s) updated`);
}
