/* Creates a topic page for a tag that articles already reference. Tag pages
   were built by hand, so a new tag on a new article produced a link to a page
   that did not exist. This clones the chrome of an existing topic page and
   fills it from whatever carries the tag. */
import fs from "node:fs";
import path from "node:path";
const esc = s => String(s).replace(/&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const SKIP = new Set([".git", "node_modules", "tools", "assets", "es"]);
const walk = (d, o = []) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) {
  if (SKIP.has(e.name) || e.name.startsWith(".")) continue;
  const p = path.join(d, e.name);
  e.isDirectory() ? walk(p, o) : (e.name === "index.html" && o.push(p)); } return o; };

const arts = [];
for (const p of walk(".")) {
  const h = fs.readFileSync(p, "utf8");
  if (!/"@type":"NewsArticle"/.test(h)) continue;
  arts.push({
    href: "/" + p.replace("/index.html", "") + "/",
    title: (h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || ["", ""])[1].replace(/<[^>]+>/g, "").trim(),
    kick: (h.match(/<span class="kick">([^<]*)<\/span>/) || ["", ""])[1].trim(),
    dek: (h.match(/<p class="artdeck">([\s\S]*?)<\/p>/) || ["", ""])[1].replace(/<[^>]+>/g, "").trim(),
    dt: (h.match(/"datePublished":"([^"]*)"/) || ["", ""])[1],
    tags: [...h.matchAll(/href="\/tag\/([a-z0-9-]+)\/"/g)].map(m => m[1]),
  });
}
const MON = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
const longDate = d => { const x = new Date(d); return `${MON[x.getUTCMonth()]} ${x.getUTCDate()}, ${x.getUTCFullYear()}`; };

const tplPath = "tag/stablecoins/index.html";
const tpl = fs.readFileSync(tplPath, "utf8");
const head = tpl.slice(0, tpl.indexOf("<main"));
const tail = tpl.slice(tpl.indexOf("</main>") + 7);

let made = 0;
for (const [slug, name] of JSON.parse(fs.readFileSync(process.argv[2], "utf8"))) {
  const items = arts.filter(a => a.tags.includes(slug)).sort((a, b) => b.dt.localeCompare(a.dt)).slice(0, 12);
  if (!items.length) { console.log("  no articles carry tag: " + slug); continue; }
  const url = `https://kompositenews.com/tag/${slug}/`;
  let h = head
    .replace(/(<title>)[\s\S]*?(<\/title>)/, (m, o, c) => o + esc(name) + " &mdash; Komposite News" + c)
    .replace(/(<meta name="description" content=")[^"]*(")/, (m, o, c) => o + `Coverage tagged ${esc(name)} on Komposite News.` + c)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, (m, o, c) => o + esc(name) + " &mdash; Komposite News" + c)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, (m, o, c) => o + `Coverage tagged ${esc(name)} on Komposite News.` + c)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, (m, o, c) => o + esc(name) + " &mdash; Komposite News" + c)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, (m, o, c) => o + `Coverage tagged ${esc(name)} on Komposite News.` + c)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, (m, o, c) => o + url + c)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, (m, o, c) => o + url + c);
  const list = items.map(a => `<article class="story">
<span class="kick">${esc(a.kick)}</span>
<h3><a href="${a.href}">${esc(a.title)}</a></h3>
<p class="deck">${esc(a.dek)}</p>
<div class="tago">${longDate(a.dt)} </div>
</article>`).join("\n");
  h += `<main class="wrap catpage">
<h1 class="catname">Topic<span class="catsub">${esc(name)}</span>
<button class="kn-follow" type="button" data-slug="tag/${slug}" data-name="Topic${esc(name)}" data-href="/tag/${slug}/">Follow</button>
</h1>
<div class="catfeat tagfeat">
${list}
</div>
</main>` + tail;
  fs.mkdirSync("tag/" + slug, { recursive: true });
  fs.writeFileSync(`tag/${slug}/index.html`, h);
  console.log(`  tag/${slug}/  ${items.length} articles`);
  made++;
}
console.log("  topic pages created: " + made);
