/* Footer rebuild.
   The old one sat on a warm brown ground against a pure-black masthead, set
   its wordmark in the serif the masthead no longer uses, repeated the whole
   section list twice (once as a nav strip, once as a thirteen-item column
   beside four-item columns), and closed with a legal row of orphaned
   separator dots. */
import fs from "node:fs";
import path from "node:path";

const COLS = [
  ["Sections", [["/ai/","AI"],["/markets/","Markets"],["/business/","Business"],
    ["/technology/","Technology"],["/fintech/","Fintech"],["/crypto/","Crypto"],
    ["/blockchain/","Blockchain"]]],
  ["More", [["/cybersecurity/","Cybersecurity"],["/startups/","Startups"],
    ["/policy/","Policy"],["/culture/","Culture"],["/music/","Music"],
    ["/the-divide/","The Divide"],["/opinion/","Opinion"]]],
  ["Newsroom", [["/authors/","Editorial leadership"],["/editorial-standards/","Editorial standards"],
    ["/corrections/","Corrections"],["/ai-policy/","AI policy"],["/tips/","News tips"]]],
  ["Company", [["/about/","About"],["/careers/","Careers"],["/advertise/","Advertise"],
    ["/licensing/","Licensing &amp; reprints"],["/contact/","Contact"]]],
];
const FOLLOW = [["https://www.linkedin.com/","LinkedIn"],["https://x.com/","X"],
  ["https://www.youtube.com/","YouTube"],["/rss.xml","RSS"]];
const LEGAL = [["/privacy/","Privacy"],["/terms/","Terms"],["/corrections/","Corrections"]];

const year = 2026;
const FOOTER = `<footer class="kfoot">
  <div class="wrap kfoot-top">
    <div class="kfoot-brand">
      <a class="kfoot-mark" href="/">Komposite News</a>
      <p class="kfoot-tag">Markets &middot; Technology &middot; Capital</p>
      <a class="kfoot-tip" href="/tips/">Got a tip?</a>
    </div>
    <div class="kfoot-cols">
${COLS.map(([h, items]) => `      <nav class="kfoot-col" aria-label="${h}"><h2>${h}</h2>${
  items.map(([u, l]) => `<a href="${u}">${l}</a>`).join("")}</nav>`).join("\n")}
      <nav class="kfoot-col" aria-label="Follow"><h2>Follow</h2>${
  FOLLOW.map(([u, l]) => `<a href="${u}"${u.startsWith("http") ? ' rel="noopener"' : ""}>${l}</a>`).join("")}</nav>
    </div>
  </div>
  <div class="kfoot-rule"><div class="wrap kfoot-legal">
    <span class="kfoot-copy">&copy; ${year} Komposite News. All rights reserved.</span>
    <nav class="kfoot-legal-nav">${LEGAL.map(([u, l]) => `<a href="${u}">${l}</a>`).join("")}</nav>
  </div></div>
</footer>`;

const SKIP = new Set([".git", "node_modules", "tools", "assets"]);
const walk = (d, out = []) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (SKIP.has(e.name) || e.name.startsWith(".")) continue;
    const p = path.join(d, e.name);
    /* 404.html is a page too; the old walker only took index.html and left
       it on the previous footer. */
    e.isDirectory() ? walk(p, out) : (/^(index|404)\.html$/.test(e.name) && out.push(p));
  }
  return out;
};

let n = 0;
for (const p of walk(".")) {
  let h = fs.readFileSync(p, "utf8");
  const before = h;
  h = h.replace(/<footer class="foot">[\s\S]*?<\/footer>\s*/g, "");
  h = h.replace(/<footer class="kfoot">[\s\S]*?<\/footer>\s*/g, "");   // idempotent
  if (!/<\/body>/.test(h)) continue;
  h = h.replace(/<\/body>/, FOOTER + "\n</body>");
  if (h !== before) { fs.writeFileSync(p, h); n++; }
}
console.log(`  footer rebuilt on ${n} pages`);
