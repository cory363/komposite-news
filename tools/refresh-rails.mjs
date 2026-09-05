/**
 * Refresh the shared article rail: the "Latest" feed and "Popular" list that
 * sit on every article page.
 *
 * Both were captured once from a donor page and frozen, so 146 pages label a
 * twelve-day-old story "JUST NOW". This regenerates the Latest list from the
 * newest articles on disk, with relative times computed at build.
 */
import fs from "node:fs";
import path from "node:path";

const SKIP = new Set([".git", "node_modules", "tools", "assets"]);
function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p, out) : (e.name === "index.html" && out.push(p));
  }
  return out;
}
const esc = s => String(s).replace(/&(?!amp;|lt;|gt;|quot;|#)/g, "&amp;");

const arts = walk(".").filter(f => f.split("/").length === 3 && !/^(authors|tag)\//.test(f))
  .map(f => {
    const h = fs.readFileSync(f, "utf8");
    return {
      url: "/" + f.replace(/index\.html$/, ""),
      title: ((h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || "").replace(/<[^>]*>/g, ""),
      kick: (h.match(/<span class="kick">([^<]*)</) || [])[1] || "",
      date: (h.match(/"datePublished":"([^"]+)"/) || [])[1] || "",
    };
  }).filter(a => a.title && a.date).sort((a, b) => b.date.localeCompare(a.date));

const now = Date.now();
function ago(iso) {
  const mins = Math.floor((now - new Date(iso).getTime()) / 60000);
  if (mins < 60) return "JUST NOW";
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs} HOUR${hrs === 1 ? "" : "S"} AGO`;
  const days = Math.floor(hrs / 24);
  if (days <= 6) return `${days} DAY${days === 1 ? "" : "S"} AGO`;
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).toUpperCase();
}

const latest = arts.slice(0, 5);
const latestHtml = latest.map(a =>
  `<div class="feedrow"><span class="fc">${esc(a.kick)}</span><a href="${a.url}">${esc(a.title)}</a><span class="ft">${ago(a.date)}</span></div>`).join("");

let changed = 0;
for (const f of walk(".")) {
  let h = fs.readFileSync(f, "utf8");
  const i = h.indexOf('<div class="feedlist rail">');
  if (i < 0) continue;
  const open = i + '<div class="feedlist rail">'.length;
  const close = h.indexOf("</div>\n", open) >= 0 ? h.indexOf("</div>\n", open) : h.indexOf('<div class="partnerbox">', open);
  // The rail's rows end where the partner box begins.
  const end = h.indexOf('<div class="partnerbox">', open);
  if (end < 0) continue;
  const tail = h.lastIndexOf("</div>", end);
  const before = h.slice(open, tail);
  if (before === latestHtml) continue;
  h = h.slice(0, open) + latestHtml + h.slice(tail);
  fs.writeFileSync(f, h);
  changed++;
}
console.log("Latest rail refreshed on", changed, "pages");
console.log("now showing:");
latest.forEach(a => console.log(`   ${ago(a.date).padEnd(18)} [${a.kick}] ${a.title.slice(0, 54)}`));
