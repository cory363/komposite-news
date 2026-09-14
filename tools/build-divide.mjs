/* /the-divide/ was maintained by hand and had drifted badly: five edition
   blocks for three questions, two of them printed twice, and the newest
   edition missing entirely. This rebuilds the page from the columns on disk,
   pairing them by slug stem, and refreshes the homepage panel with the newest
   edition so the two can no longer disagree. */
import fs from "node:fs";

const esc = s => String(s).replace(/&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const strip = s => String(s).replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

/* The question is the edition's title and lives nowhere in the columns
   themselves, so it is stated here, keyed by the stem the pair shares. */
const QUESTIONS = {
  "divide-data-center-subsidies": "Should states keep subsidizing AI data centers?",
  "divide-wealth-tax":            "Should the U.S. tax billionaire wealth directly?",
  "divide-free-college":          "Should public college be tuition-free?",
  "divide-crypto-retirement":     "Should retirement plans be allowed to hold crypto?",
  "divide-return-to-office":      "Should companies require staff back in the office?",
  "divide-ticket-pricing":        "Should dynamic ticket pricing be capped?",
};

const ROLE = { "ruth-calloway": "Ruth Calloway", "grant-whitmore": "Grant Whitmore" };

const editions = new Map();
for (const d of fs.readdirSync("divide")) {
  const f = `divide/${d}/index.html`;
  if (!fs.existsSync(f)) continue;
  const h = fs.readFileSync(f, "utf8");
  const g = re => { const m = h.match(re); return m ? strip(m[1]) : ""; };
  const side = d.endsWith("-left") ? "left" : d.endsWith("-right") ? "right" : null;
  if (!side) { console.log("  skipped (no side): " + d); continue; }
  const stem = d.replace(/-(left|right)$/, "");
  const author = g(/<a href="\/authors\/([a-z-]+)\/" class="byname">/);
  const col = {
    url: `/divide/${d}/`,
    title: g(/<h1[^>]*>([\s\S]*?)<\/h1>/),
    dek: g(/<p class="artdeck">([\s\S]*?)<\/p>/),
    author, name: ROLE[author] || g(/class="byname">([^<]*)</),
    date: g(/"datePublished":"([^"]*)"/),
  };
  if (!editions.has(stem)) editions.set(stem, { stem });
  editions.get(stem)[side] = col;
}

const MON = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const longDate = d => { const x = new Date(d); return `${MON[x.getUTCMonth()]} ${x.getUTCDate()}, ${x.getUTCFullYear()}`; };

const list = [...editions.values()]
  .filter(e => e.left && e.right)
  .sort((a, b) => (b.left.date || "").localeCompare(a.left.date || ""));
const incomplete = [...editions.values()].filter(e => !e.left || !e.right);
incomplete.forEach(e => console.log("  INCOMPLETE edition (one side missing): " + e.stem));

/* The two surfaces are not identical and never were: the section page heads
   each column with an h2 and leaves the left chip unqualified, the dark
   homepage panel uses an h3 and a chip-l. Keep both as they were. */
const col = (c, side, { h = "h2", leftChip = "chip" } = {}) => `  <article class="divcol">
<span class="${side === "right" ? "chip chip-r" : leftChip}">From the ${side === "right" ? "Right" : "Left"}</span>
<${h}><a href="${c.url}">${esc(c.title)}</a></${h}>
<p class="deck">${esc(c.dek)}</p>
<div class="byrow">By <a href="/authors/${c.author}/">${esc(c.name)}</a>, <span>Contributing Columnist</span></div>
</article>`;
const PANEL = { h: "h3", leftChip: "chip chip-l" };

const block = e => `<div class="divedition">
<div class="divissue-h">${esc(QUESTIONS[e.stem] || "An open question")}<span class="dived-date">${longDate(e.left.date)}</span></div>
<div class="divgrid">
${col(e.left, "left")}
  <div class="divrule"><span>VS</span></div>
${col(e.right, "right")}
</div>
</div>`;

/* Section page: replace everything from the first edition to the end of main. */
{
  const p = "the-divide/index.html";
  let h = fs.readFileSync(p, "utf8");
  const start = h.indexOf('<div class="divedition">');
  const end = h.indexOf("</main>");
  h = h.slice(0, start) + list.map(block).join("\n") + "\n" + h.slice(end);
  fs.writeFileSync(p, h);
  console.log(`  /the-divide/ rebuilt: ${list.length} editions, ${list.length * 2} columns`);
}

/* Homepage panel: newest edition only. */
{
  const p = "index.html";
  let h = fs.readFileSync(p, "utf8");
  const start = h.indexOf('<section class="divpanel">');
  if (start < 0) { console.log("  no divpanel on the front, left alone"); }
  else {
    const end = h.indexOf("</section>", h.indexOf('<div class="divgrid', start)) + 10;
    const e = list[0];
    const panel = `<section class="divpanel">
<div class="wrap">
<div class="divpanel-label"><a href="/the-divide/"><span>The Divide</span></a></div>
<div class="divpanel-tag">One issue. Two arguments. You decide.</div>
<h2 class="divpanel-issue">${esc(QUESTIONS[e.stem] || "An open question")}</h2>
<div class="divgrid divgrid-dark">
${col(e.left, "left", PANEL)}
  <div class="divrule divrule-dark"><span>VS</span></div>
${col(e.right, "right", PANEL)}
</div>
<a class="divpanel-all" href="/the-divide/">All editions of The Divide &rsaquo;</a>
</div>
</section>`;
    h = h.slice(0, start) + panel + h.slice(end);
    fs.writeFileSync(p, h);
    console.log(`  homepage panel: ${QUESTIONS[e.stem]}`);
  }
}
