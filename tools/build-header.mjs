/* Masthead rebuild.
   The old header stacked four bands — a tip strip, a K-box edition module
   beside the name, the nav, then a second black Komposite subscribe bar — so
   the brand competed with three other things and lost. This makes the
   wordmark the event and puts everything else on one line under it. */
import fs from "node:fs";
import path from "node:path";

/* Exactly the ten the editor specified. Blockchain made eleven and pushed
   Culture and Opinion off the line. It is still reachable from its own
   section block, the sitemap and search. */
const NAV = [["/ai/","AI"],["/markets/","Markets"],["/business/","Business"],
  ["/technology/","Technology"],["/fintech/","Fintech"],["/crypto/","Crypto"],
  ["/cybersecurity/","Cybersecurity"],["/policy/","Policy"],
  ["/culture/","Culture"],["/opinion/","Opinion"]];

const HEADER = `<header class="kmast">
  <div class="wrap kmast-row">
    <a class="kmark" href="/" aria-label="Komposite News home">Komposite News</a>
    <div class="kmast-sub">Markets &middot; Technology &middot; Capital</div>
  </div>
</header>
<nav class="knav" aria-label="Sections"><div class="wrap knav-row">
  <div class="knav-links">${NAV.map(([h, l]) => `<a href="${h}">${l}</a>`).join("")}</div>
  <div class="knav-utils">
    <a class="knav-search" href="/search/">Search</a>
    <a class="knav-login" href="/subscribe/">Log in</a>
    <a class="knav-sub" href="/subscribe/">Subscribe</a>
  </div>
</div></nav>
<div class="kdateline"><div class="wrap kdate-row"><span id="udate">Thursday, September 10, 2026</span><span class="kdate-ed">Global Edition</span><a class="kdate-tip" href="/tips/">Got a tip?</a></div></div><script>(function(){var e=document.getElementById("udate");if(e)e.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric",timeZone:"America/New_York"});})();</script>
`;

const SKIP = new Set([".git", "node_modules", "tools", "assets"]);
const walk = (d, out = []) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (SKIP.has(e.name) || e.name.startsWith(".")) continue;
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p, out) : (e.name === "index.html" && out.push(p));
  }
  return out;
};

let n = 0;
for (const p of walk(".")) {
  let h = fs.readFileSync(p, "utf8");
  const before = h;

  /* Remove any header this tool wrote before, or a second one is appended on
     every run — the first rebuild left twenty-one nav items on the page. */
  h = h.replace(/<header class="kmast">[\s\S]*?<\/header>\s*/g, "");
  h = h.replace(/<nav class="knav"[\s\S]*?<\/nav>\s*/g, "");
  h = h.replace(/<div class="kdateline">[\s\S]*?<\/div><\/div>\s*/g, "");   // g: a non-global replace left the duplicate in place
  // everything from the old tip strip through the old promo strip goes
  h = h.replace(/<div class="netbar">[\s\S]*?<\/div><\/div>\s*/, "");
  h = h.replace(/<header class="dhead">[\s\S]*?<\/header>\s*/, "");
  h = h.replace(/<nav class="mainnav"[\s\S]*?<\/nav>\s*/, "");
  h = h.replace(/<div class="promostrip">[\s\S]*?<\/div><\/div>\s*/, "");
  // the old dateline row is folded into the new one
  h = h.replace(/<div class="utility">[\s\S]*?<\/div><\/div>\s*/, "");

  if (!/<body[^>]*>/.test(h)) continue;
  h = h.replace(/(<body[^>]*>)/, `$1\n${HEADER}`);
  if (h !== before) { fs.writeFileSync(p, h); n++; }
}
console.log(`  header rebuilt on ${n} pages`);
