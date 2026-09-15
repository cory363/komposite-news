/* The masthead page was maintained by hand, so it drifted: Julio Rojas had a
   page but no card, and a Food Editor card had lost its name and its link
   entirely. This builds /authors/ from a roster, reading each person's name,
   role and bio off their own page so the page stays the one source of truth.
   A roster entry with no page yet gets one, cloned from an existing profile. */
import fs from "node:fs";

const esc = s => String(s).replace(/&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const strip = s => String(s).replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
const initials = n => n.split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();

/* Order inside a group is editorial, not alphabetical: desk editors first. */
const ROSTER = [
  ["Leadership", [
    { slug: "cory-chamberlain", name: "Cory Chamberlain", role: "Chief Editor",
      bio: "Cory Chamberlain is the chief editor of Komposite News. He comes to the newsroom from a media executive background and works as an author and journalist.",
      beats: "Editorial direction and standards" },
    /* Peer to the chief editor, not beneath one. Biography stays to a single
       factual sentence: nothing is asserted about a real person that they have
       not said themselves. */
    { slug: "noam-krasniansky", name: "Noam Krasniansky", role: "Chief Content Officer",
      bio: "Noam Krasniansky is chief content officer of Komposite News." },
  ]],
  ["Newsroom", [
    { slug: "jonathan-bright" }, { slug: "marcus-oyelaran" }, { slug: "colin-abernathy" },
    { slug: "dana-whitfield" }, { slug: "priya-raghavan" }, { slug: "tom-kessler" },
    { slug: "elena-vasquez" }, { slug: "sam-porter" }, { slug: "grace-lindqvist" },
  ]],
  ["Contributors", [
    { slug: "julio-rojas" }, { slug: "ruth-calloway" }, { slug: "grant-whitmore" },
  ]],
];

const DONOR = "authors/julio-rojas/index.html";

function ensurePage(p) {
  const file = `authors/${p.slug}/index.html`;
  if (fs.existsSync(file)) return;
  const d = fs.readFileSync(DONOR, "utf8");
  const url = `https://kompositenews.com/authors/${p.slug}/`;
  let h = d.slice(0, d.indexOf("<main"))
    .replace(/(<title>)[\s\S]*?(<\/title>)/, (m, o, c) => o + esc(p.name) + " &mdash; Komposite News" + c)
    .replace(/(<meta name="description" content=")[^"]*(")/, (m, o, c) => o + esc(p.bio) + c)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, (m, o, c) => o + esc(p.name) + " &mdash; Komposite News" + c)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, (m, o, c) => o + esc(p.bio) + c)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, (m, o, c) => o + esc(p.name) + " &mdash; Komposite News" + c)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, (m, o, c) => o + url + c)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, (m, o, c) => o + url + c)
    .replace(/\{"@context":"https:\/\/schema\.org","@type":"Person"[\s\S]*?\}<\/script>/,
      JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: p.name,
        jobTitle: p.role, worksFor: { "@type": "NewsMediaOrganization", name: "Komposite News" },
        url, description: p.bio }) + "</script>");
  /* No byline feed: an editor with no filed stories should not carry an empty
     "Latest by" rail pretending there is one. */
  const main = `<main class="wrap catpage">
<div class="auhead"><span class="avatar">${initials(p.name)}</span>
<div><h1 class="catname noborder">${esc(p.name)}</h1>
<div class="byrole aurole">${esc(p.role)}${p.beats ? " &middot; " + esc(p.beats) : ""} &middot; <a href="/contact/">Contact the newsroom</a></div></div></div>
<p class="aubio">${esc(p.bio)}</p>
<p class="aubio"><a href="/authors/">All authors and contributors</a> &middot; <a href="/editorial-standards/">Editorial standards</a></p>
</main>`;
  fs.mkdirSync(`authors/${p.slug}`, { recursive: true });
  fs.writeFileSync(file, h + main + d.slice(d.indexOf("</main>") + 7));
  console.log("  created authors/" + p.slug + "/");
}

function read(p) {
  const h = fs.readFileSync(`authors/${p.slug}/index.html`, "utf8");
  const g = re => { const m = h.match(re); return m ? strip(m[1]) : ""; };
  return {
    slug: p.slug,
    name: p.name || g(/<h1 class="catname[^"]*">([\s\S]*?)<\/h1>/),
    /* The role line is "Role &middot; Covers X, Y &middot; Contact...", and a
       role can itself contain &amp;, so cut at the first &middot;, not at &. */
    role: p.role || g(/<div class="byrole aurole">([\s\S]*?)(?:&middot;|\u00b7|<)/),
    bio:  p.bio  || g(/<p class="aubio">([\s\S]*?)<\/p>/),
    stories: (h.match(/class="feedrow"/g) || []).length,
  };
}

const card = a => `<div class="aucard"><span class="avatar av-s">${initials(a.name)}</span>`
  + `<h3><a href="/authors/${a.slug}/">${esc(a.name)}</a></h3>`
  + `<div class="byrole">${esc(a.role)}</div><p>${esc(a.bio)}</p></div>`;

let people = 0;
const groups = ROSTER.map(([label, list]) => {
  list.forEach(ensurePage);
  const rows = list.map(read);
  people += rows.length;
  /* The full-width row exists so one person does not sit in a two-up with a
     hole beside them. Two or more go back to the normal grid. */
  const lead = label === "Leadership" && rows.length === 1 ? " augrid-lead" : "";
  return `<div class="lsechead"><span class="lseclabel">${esc(label)}</span></div>\n`
    + `<div class="augrid${lead}">${rows.map(card).join("")}</div>`;
}).join("\n");

const page = "authors/index.html";
let h = fs.readFileSync(page, "utf8");
const main = `<main class="wrap catpage aumast">
<h1 class="catname">Authors &amp; contributors</h1>
<p class="aubio">Everyone who writes for Komposite News. Reporting is done from primary documents and named sources; where a fact originates with another outlet, that outlet is named and linked in the story.</p>
${groups}
</main>`;
h = h.slice(0, h.indexOf("<main")) + main + h.slice(h.indexOf("</main>") + 7);
h = h.replace(/(<title>)[\s\S]*?(<\/title>)/, "$1Authors &amp; contributors &mdash; Komposite News$2")
     .replace(/(<meta name="description" content=")[^"]*(")/, "$1The editors, reporters and contributors who write for Komposite News.$2");
fs.writeFileSync(page, h);
console.log(`  /authors/ rebuilt: ${people} people in ${ROSTER.length} groups`);
