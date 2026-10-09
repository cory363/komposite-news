/* Section fronts (AI, Markets, ... Latest, Opinion, Interviews) carried no
   structured data at all, while every article has NewsArticle + BreadcrumbList.
   This adds a CollectionPage and a two-step BreadcrumbList to each section
   front's <head>, built from the page's own title, description and canonical.

   Idempotent: the block carries id="kn-section-ld" and is replaced, not
   duplicated, on a re-run. wire.mjs edits section pages in place and never
   rewrites the head, so the block survives daily publishing.

   Usage: node tools/add-section-schema.mjs */
import fs from "node:fs";

const SITE = "https://kompositenews.com";
const SECTIONS = ["ai", "blockchain", "business", "crypto", "culture", "cybersecurity", "fintech",
  "markets", "music", "opinion", "policy", "startups", "technology", "interviews", "latest", "the-divide"];

const dec = s => String(s).replace(/&mdash;/g, "\u2014").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'");

let n = 0;
for (const sec of SECTIONS) {
  const f = `${sec}/index.html`;
  if (!fs.existsSync(f)) continue;
  let h = fs.readFileSync(f, "utf8");
  const title = dec((h.match(/<title>([^<]*)<\/title>/) || [])[1] || "");
  const name = title.split(/\s+\u2014\s+/)[0].trim() || sec;
  const desc = dec((h.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "");
  const url = (h.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || `${SITE}/${sec}/`;
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", "@id": url + "#page", url, name: title, description: desc,
        isPartOf: { "@type": "WebSite", name: "Komposite News", url: SITE },
        publisher: { "@type": "NewsMediaOrganization", name: "Komposite News", url: SITE } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
        { "@type": "ListItem", position: 2, name, item: url }] }
    ]
  };
  const tag = `<script type="application/ld+json" id="kn-section-ld">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script>`;
  const re = /<script type="application\/ld\+json" id="kn-section-ld">[\s\S]*?<\/script>/;
  const out = re.test(h) ? h.replace(re, tag) : h.replace("</head>", tag + "</head>");
  if (out !== h) { fs.writeFileSync(f, out); n++; }
}
console.log(`section schema: ${n} page(s) updated`);
