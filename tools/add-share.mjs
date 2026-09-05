/**
 * Add a share row to article pages and enrich the social card metadata.
 *
 * Share targets are plain intent URLs, so nothing loads third-party script and
 * no reader is tracked by a network they did not visit. Copy-link is the one
 * control that needs JavaScript and degrades to nothing if it is unavailable.
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
const esc = s => String(s).replace(/&(?!amp;|lt;|gt;|quot;|#)/g, "&amp;").replace(/"/g, "&quot;");

export function shareRow(url, title) {
  const u = encodeURIComponent(url), t = encodeURIComponent(title);
  const a = (href, label) => `<a class="sharebtn" href="${href}" target="_blank" rel="noopener">${label}</a>`;
  return `<div class="sharerow" aria-label="Share this article"><span class="sharelabel">Share</span>`
    + a(`https://twitter.com/intent/tweet?url=${u}&amp;text=${t}`, "X")
    + a(`https://www.linkedin.com/sharing/share-offsite/?url=${u}`, "LinkedIn")
    + a(`https://bsky.app/intent/compose?text=${t}%20${u}`, "Bluesky")
    + a(`https://www.facebook.com/sharer/sharer.php?u=${u}`, "Facebook")
    + a(`mailto:?subject=${t}&amp;body=${u}`, "Email")
    + `<button class="sharebtn sharecopy" type="button" data-url="${esc(url)}">Copy link</button></div>`;
}

const COPY_JS = `<script id="share-js">document.addEventListener("click",function(e){
var b=e.target.closest(".sharecopy");if(!b)return;e.preventDefault();
var t=b.textContent;navigator.clipboard&&navigator.clipboard.writeText(b.dataset.url).then(function(){
b.textContent="Copied";b.classList.add("copied");setTimeout(function(){b.textContent=t;b.classList.remove("copied")},1600);});});</script>`;

if (process.argv[1] && process.argv[1].endsWith("add-share.mjs")) {
  let added = 0, enriched = 0;
  for (const f of walk(".")) {
    let h = fs.readFileSync(f, "utf8");
    if (!h.includes('"@type":"NewsArticle"')) continue;
    const url = (h.match(/rel="canonical" href="([^"]*)"/) || [])[1];
    const title = ((h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || "").replace(/<[^>]*>/g, "");
    if (!url || !title) continue;

    if (!h.includes('class="sharerow"')) {
      const anchor = h.indexOf('<figure class="arthero">');
      const at = anchor > -1 ? anchor : h.indexOf('<div class="artbody">');
      if (at > -1) { h = h.slice(0, at) + shareRow(url, title) + "\n" + h.slice(at); added++; }
    }
    // Richer card metadata: dimensions stop platforms guessing, and the
    // article: properties are what LinkedIn and Facebook read for attribution.
    const ld = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
      .map(m => { try { return JSON.parse(m[1]); } catch { return null; } })
      .find(o => o && o["@type"] === "NewsArticle");
    if (ld && !h.includes("og:image:width")) {
      const w = ld.image?.width, hh = ld.image?.height;
      let extra = `<meta property="og:locale" content="en_US">`;
      if (w && hh) extra += `<meta property="og:image:width" content="${w}"><meta property="og:image:height" content="${hh}">`;
      if (ld.image?.url) extra += `<meta property="og:image:alt" content="${esc((h.match(/class="illo photo[^"]*"[^>]*alt="([^"]*)"/) || [])[1] || title)}">`;
      if (ld.datePublished) extra += `<meta property="article:published_time" content="${ld.datePublished}"><meta property="article:modified_time" content="${ld.dateModified || ld.datePublished}">`;
      if (ld.author?.name) extra += `<meta property="article:author" content="${esc(ld.author.name)}">`;
      if (ld.articleSection) extra += `<meta property="article:section" content="${esc(ld.articleSection)}">`;
      h = h.replace('<meta property="og:type" content="article">', '<meta property="og:type" content="article">' + extra);
      enriched++;
    }
    if (!h.includes('id="share-js"')) h = h.replace("</body>", COPY_JS + "</body>");
    fs.writeFileSync(f, h);
  }
  console.log("  share rows added:      " + added);
  console.log("  cards enriched:        " + enriched);
}
