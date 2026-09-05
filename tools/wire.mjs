/**
 * Wire published articles into every index surface.
 *
 * Surfaces: homepage section block, section index (lead + feature grid + feed),
 * /latest/, the author page, each tag page, rss.xml, sitemap.xml and
 * search-index.json.
 *
 * Idempotent: an article already present on a surface is left alone, so this
 * can be re-run after a copy fix without duplicating rows.
 */
import fs from "node:fs";
import path from "node:path";
import { SITE, esc, prettyDate } from "./lib-template.mjs";
import { heroUrl, hero } from "./render-article.mjs";

const AUTHORS = {
  "jonathan-bright": ["Jonathan Bright", "Policy Editor"],
  "priya-raghavan": ["Priya Raghavan", "Markets Reporter"],
  "tom-kessler": ["Tom Kessler", "Enterprise Technology Reporter"],
  "sam-porter": ["Sam Porter", "Cybersecurity Reporter"],
  "grace-lindqvist": ["Grace Lindqvist", "Startups &amp; Venture Reporter"],
  "marcus-oyelaran": ["Marcus Oyelaran", "Blockchain &amp; Digital Assets Editor"],
  "elena-vasquez": ["Elena Vasquez", "Fintech Correspondent"],
  "dana-whitfield": ["Dana Whitfield", "Senior AI Correspondent"],
  "colin-abernathy": ["Colin Abernathy", "Culture Editor"],
  "marta-reyes": ["Marta Reyes", "Recipes Editor"],
};

const read = f => fs.readFileSync(f, "utf8");
const write = (f, s) => fs.writeFileSync(f, s);
const upper = iso => prettyDate(iso).toUpperCase();
const rel = a => `/${a.dir}/${a.slug}/`;

const feedrow = a =>
  `<div class="feedrow"><span class="fc">${esc(a.kick)}</span><a href="${rel(a)}">${esc(a.headline)}</a><span class="ft">${upper(a.date)}</span></div>`;

const secitem = a => {
  const [n, r] = AUTHORS[a.author];
  return `<div class="secitem"><span class="kick">${esc(a.kick)}</span><a class="secline" href="${rel(a)}">${esc(a.headline)}</a><div class="byrow">By <a href="/authors/${a.author}/">${n}</a>, <span>${r}</span></div></div>`;
};

const storyCard = a =>
  `<article class="story"><span class="kick">${esc(a.kick)}</span><h3><a href="${rel(a)}">${esc(a.headline)}</a></h3><p class="deck">${esc(a.dek)}</p><div class="tago">${upper(a.date)} </div></article>`;

const leadCard = a => {
  const [n] = AUTHORS[a.author];
  const h = hero(a);
  return `<article class="story"><span class="kick">${esc(a.kick)}</span><h2 class="secbig"><a href="${rel(a)}">${esc(a.headline)}</a></h2><p class="deck">${esc(a.dek)}</p><a href="${rel(a)}"><span class="pwrap"><img class="illo photo "  src="${esc(h.url)}" alt="${esc(h.alt)}" loading="lazy" width="800" height="450" onerror="this.onerror=null;this.parentElement.style.display='none';"><span class="pcred">${h.creditHtml}</span></span></a><div class="tago"><a href="/authors/${a.author}/">${n}</a> &middot; ${upper(a.date)}</div></article>`;
};

/** Demote an existing lead card to a feature card, dropping its hero and byline. */
function demote(lead) {
  const kick = (lead.match(/<span class="kick">([\s\S]*?)<\/span>/) || [])[1] || "";
  const href = (lead.match(/<h2 class="secbig"><a href="([^"]+)"/) || [])[1];
  const title = (lead.match(/<h2 class="secbig"><a href="[^"]+">([\s\S]*?)<\/a>/) || [])[1] || "";
  const deck = (lead.match(/<p class="deck">([\s\S]*?)<\/p>/) || [])[1] || "";
  const date = (lead.match(/<div class="tago">[\s\S]*?&middot;\s*([A-Z0-9,\s]+?)<\/div>/) || [])[1]
            || (lead.match(/<div class="tago">[\s\S]*?·\s*([A-Z0-9,\s]+?)<\/div>/) || [])[1] || "";
  if (!href) return null;
  return `<article class="story"><span class="kick">${kick}</span><h3><a href="${href}">${title}</a></h3><p class="deck">${deck}</p><div class="tago">${date.trim()} </div></article>`;
}

function insertAfter(html, marker, insertion) {
  const i = html.indexOf(marker);
  if (i < 0) return null;
  return html.slice(0, i + marker.length) + insertion + html.slice(i + marker.length);
}

export function wire(a, log = console.log) {
  const url = rel(a);
  const done = [];

  // 1. Homepage section block
  {
    const f = "index.html"; let h = read(f);
    const band = `<div class="band"><span><a href="/${a.sectionHref}/">`;
    const bi = h.indexOf(band);
    if (bi >= 0 && !h.slice(bi, bi + 4000).includes(`href="${url}"`)) {
      const secl = h.indexOf('<div class="secl">', bi);
      const out = insertAfter(h, h.slice(secl, secl + '<div class="secl">'.length), secitem(a));
      if (out) {
        // keep the block the same length by dropping its last secitem
        const start = out.indexOf('<div class="secl">', bi);
        const endBand = out.indexOf('<div class="band">', start);
        let block = out.slice(start, endBand > 0 ? endBand : undefined);
        const items = [...block.matchAll(/<div class="secitem">[\s\S]*?<\/div><\/div>/g)];
        let trimmed = block;
        if (items.length > 4) trimmed = block.replace(items[items.length - 1][0], "");
        h = out.slice(0, start) + trimmed + out.slice(start + block.length);
        write(f, h); done.push("homepage");
      }
    } else if (bi >= 0) done.push("homepage(already)");
  }

  // 2. Section index: lead, feature grid, feed
  {
    const f = `${a.sectionHref}/index.html`;
    if (fs.existsSync(f)) {
      let h = read(f);
      if (!h.includes(`href="${url}"`)) {
        const ls = h.indexOf('<div class="catlead">');
        const le = h.indexOf("</div>", h.indexOf("</article>", ls));
        const oldLead = h.slice(ls + '<div class="catlead">'.length, h.indexOf("</article>", ls) + "</article>".length);
        const demoted = demote(oldLead);
        h = h.slice(0, ls) + `<div class="catlead">` + leadCard(a) + h.slice(h.indexOf("</article>", ls) + "</article>".length);
        if (demoted) {
          h = insertAfter(h, '<div class="catfeat">', demoted) || h;
          const cf = h.indexOf('<div class="catfeat">');
          const cfEnd = h.indexOf("</div></div>", cf);
          let block = h.slice(cf, cfEnd);
          const cards = [...block.matchAll(/<article class="story">[\s\S]*?<\/article>/g)];
          if (cards.length > 4) {
            const trimmed = block.replace(cards[cards.length - 1][0], "");
            h = h.slice(0, cf) + trimmed + h.slice(cf + block.length);
          }
        }
        h = insertAfter(h, '<div class="feedlist">', feedrow(a)) || h;
        write(f, h); done.push("section");
      } else done.push("section(already)");
    }
  }

  // 3. /latest/
  for (const f of ["latest/index.html"]) {
    if (!fs.existsSync(f)) continue;
    let h = read(f);
    if (h.includes(`href="${url}"`)) { done.push("latest(already)"); continue; }
    const out = insertAfter(h, '<div class="feedlist">', feedrow(a));
    if (out) { write(f, out); done.push("latest"); }
  }

  // 4. Author page
  {
    const f = `authors/${a.author}/index.html`;
    if (fs.existsSync(f)) {
      let h = read(f);
      if (!h.includes(`href="${url}"`)) {
        const out = insertAfter(h, '<div class="feedlist">', feedrow(a));
        if (out) { write(f, out); done.push("author"); }
      } else done.push("author(already)");
    }
  }

  // 5. Tag pages
  for (const t of a.tags) {
    const f = `tag/${t.slug}/index.html`;
    if (!fs.existsSync(f)) { done.push(`tag:${t.slug}(MISSING)`); continue; }
    let h = read(f);
    if (h.includes(`href="${url}"`)) { done.push(`tag:${t.slug}(already)`); continue; }
    const out = insertAfter(h, '<div class="catfeat tagfeat">', storyCard(a))
             || insertAfter(h, '<div class="catfeat">', storyCard(a));
    if (out) { write(f, out); done.push(`tag:${t.slug}`); }
  }

  // 6. rss.xml
  {
    const f = "rss.xml"; let x = read(f);
    if (!x.includes(`${SITE}${url}`)) {
      const item = `<item><title>${esc(a.headline)}</title><link>${SITE}${url}</link><guid>${SITE}${url}</guid><pubDate>${new Date(a.date).toUTCString()}</pubDate><description>${esc(a.dek)}</description><category>${esc(a.sectionLabel)}</category></item>`;
      const i = x.indexOf("<item>");
      x = x.slice(0, i) + item + x.slice(i);
      write(f, x); done.push("rss");
    } else done.push("rss(already)");
  }

  // 7. sitemap.xml (with lastmod, per spec)
  {
    const f = "sitemap.xml"; let x = read(f);
    if (!x.includes(`${SITE}${url}`)) {
      const entry = `<url><loc>${SITE}${url}</loc><lastmod>${a.date.slice(0, 10)}</lastmod></url>`;
      x = x.replace("</urlset>", entry + "</urlset>");
      write(f, x); done.push("sitemap");
    } else done.push("sitemap(already)");
  }

  // 8. search-index.json
  {
    const f = "search-index.json";
    const arr = JSON.parse(read(f));
    if (!arr.some(e => e.u === url)) {
      const plain = a.body.join(" ");
      arr.unshift({
        u: url, h: a.headline, d: a.dek, c: a.sectionLabel,
        t: a.tags.map(t => t.name), au: AUTHORS[a.author][0].replace(/&amp;/g, "&"),
        p: a.date, x: plain.slice(0, 600),
      });
      write(f, JSON.stringify(arr));
      done.push("search-index");
    } else done.push("search-index(already)");
  }

  log(`  ${url}\n     ${done.join(", ")}`);
}

const batch = process.argv[2];
if (batch) {
  // Oldest first: each surface inserts at the top, so the newest piece ends up
  // leading the section and heading every feed.
  const articles = (await import(path.resolve(batch))).default
    .slice().sort((x, y) => x.date.localeCompare(y.date));
  for (const a of articles) wire(a);
}
