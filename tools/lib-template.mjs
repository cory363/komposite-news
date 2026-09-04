/**
 * Shared page furniture, lifted verbatim from the existing site.
 *
 * The chrome (header, nav, markets strip), the right-hand rail, the newsletter
 * band and the footer are identical across articles. Rather than retype them
 * and risk drift, this reads them out of a donor page at build time. If the
 * site chrome changes, regenerating picks the change up for free.
 */
import fs from "node:fs";

const DONOR = "ai/semiconductor-supply-data-center-demand/index.html";

export function furniture() {
  const h = fs.readFileSync(DONOR, "utf8");
  const bodyAt = h.indexOf("</head>") + "</head>".length;
  const mainAt = h.indexOf('<main class="wrap artgrid">');
  const railAt = h.indexOf('<aside class="artrail">');
  const mainEnd = h.indexOf("</main>");
  if (bodyAt < 0 || mainAt < 0 || railAt < 0) throw new Error("donor structure changed");
  return {
    chrome: h.slice(bodyAt, mainAt),          // <body><header>…</nav><div class="mstrip">…
    rail: h.slice(railAt, mainEnd),           // <aside class="artrail">…</aside>
    tail: h.slice(mainEnd),                   // </main><section class="nlband">…</html>
  };
}

export const SITE = "https://kompositenews.com";

export const esc = s => String(s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Dash used in titles across the site is an escaped em dash. */
export const TITLE_SEP = " &mdash; Komposite News";

export const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export function prettyDate(iso) {
  const d = new Date(iso);
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}

/** The site's read-time convention: words / 215, floor 2. */
export function readTime(words) { return Math.max(2, Math.round(words / 215)); }

export function commonsUrl(file, width = 800) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file.replace(/ /g, "_"))}?width=${width}`;
}
