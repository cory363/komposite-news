/* The Interviews section, created empty on purpose. It is linked from the
   navigation, so it has to say plainly that there is nothing here yet rather
   than render an empty grid that looks broken. */
import fs from "node:fs";
const esc = s => String(s).replace(/&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const tpl = fs.readFileSync("culture/index.html", "utf8");
const head = tpl.slice(0, tpl.indexOf("<main"));
const tail = tpl.slice(tpl.indexOf("</main>") + 7);
const url = "https://kompositenews.com/interviews/";

let h = head
  .replace(/(<title>)[\s\S]*?(<\/title>)/, (m, o, c) => o + "Interviews &mdash; Komposite News" + c)
  .replace(/(<meta name="description" content=")[^"]*(")/, (m, o, c) => o +
    "Conversations with the people running markets, building companies and writing the rules. Launching soon on Komposite News." + c)
  .replace(/(<meta property="og:title" content=")[^"]*(")/, (m, o, c) => o + "Interviews &mdash; Komposite News" + c)
  .replace(/(<meta property="og:description" content=")[^"]*(")/, (m, o, c) => o +
    "Conversations with the people running markets, building companies and writing the rules. Launching soon." + c)
  .replace(/(<meta name="twitter:title" content=")[^"]*(")/, (m, o, c) => o + "Interviews &mdash; Komposite News" + c)
  .replace(/(<meta name="twitter:description" content=")[^"]*(")/, (m, o, c) => o +
    "Conversations with the people running markets, building companies and writing the rules. Launching soon." + c)
  .replace(/(<meta property="og:url" content=")[^"]*(")/, (m, o, c) => o + url + c)
  .replace(/(<link rel="canonical" href=")[^"]*(")/, (m, o, c) => o + url + c)
  /* A section page's schema describes a list of articles; there are none. */
  .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g, "");

h += `<main class="wrap catpage">
<h1 class="catname">Interviews</h1>
<div class="soonbox">
  <p class="soon-lede">Interviews is launching shortly.</p>
  <p class="soon-body">The section will carry long conversations with the people running these
  markets &mdash; operators, allocators, founders and the regulators writing the rules
  &mdash; reported and edited to the same standard as the rest of the newsroom.</p>
  <p class="soon-body">If you would like to be considered, or you want to put someone forward,
  <a href="/tips/">write to the newsroom</a>. To be told when the first one runs,
  <a href="/subscribe/">join the newsletter</a>.</p>
</div>
</main>` + tail;

fs.mkdirSync("interviews", { recursive: true });
fs.writeFileSync("interviews/index.html", h);
console.log("  interviews/index.html written (" + (h.length / 1024).toFixed(1) + " KB)");
