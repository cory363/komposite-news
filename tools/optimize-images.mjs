/**
 * Responsive images for every Unsplash photograph on the site.
 *
 * Every image was requested at w=1400 whatever it was drawn at, so a 76px
 * list thumbnail on a phone downloaded the same ~145KB file as the lead. The
 * homepage alone carried 86 of them. This adds a srcset of real widths and a
 * sizes hint measured from the rendered page (Chrome, 375px and 1280px), so
 * the browser picks the smallest file that is still sharp at its density.
 *
 * It also gives the one image that is the largest paint on a page — the
 * homepage lead, a section's lead — eager loading and high fetch priority.
 * The front-zone builder had regressed that to loading="lazy".
 *
 * Idempotent: existing srcset/sizes are recomputed, not duplicated.
 * Usage: node tools/optimize-images.mjs            (whole site)
 *        import { optimizeHtml } from "./optimize-images.mjs"
 */
import fs from "node:fs";
import path from "node:path";

const WIDTHS = [160, 320, 480, 640, 960, 1280, 1600];

/* Rendered widths by the wrapper an image sits in, keyed by class name.
   Phone widths are ~84% of the viewport; 92vw leaves headroom for 414px. */
const SIZES = {
  "llist-thumb": "104px", "topthumb": "104px", "recothumb": "104px", "wrow-thumb": "104px",
  "wfeat-side": "132px",
  "lhero-img": "(max-width: 700px) 92vw, 760px",
  "arthero": "(max-width: 700px) 92vw, 680px",
  "catlead": "(max-width: 700px) 92vw, 650px",
};
const DEFAULT_SIZES = "(max-width: 700px) 92vw, 540px";

const attr = (tag, name) => (tag.match(new RegExp(`\\s${name}="([^"]*)"`)) || [])[1];
const dropAttr = (tag, name) => tag.replace(new RegExp(`\\s${name}="[^"]*"`, "g"), "");

export function optimizeHtml(html, file = "") {
  const isEsFront = /^(\.\/)?es\/index\.html$/.test(file);
  /* Strip what a previous pass added first, so offsets and the class window
     below see the same page on every run. */
  html = html.replace(/<img\b[^>]*>/g, t => /images\.unsplash\.com/.test(t)
    ? t.replace(/\s(srcset|sizes|decoding)="[^"]*"/g, "") : t);
  /* One high-priority image per page: whichever lead comes first. */
  html = html.replace(/<img\b[^>]*>/g, t => t.replace(/\sfetchpriority="high"/, ""));
  let leadDone = false;
  return html.replace(/<img\b[^>]*>/g, (tag, offset) => {
    const src = attr(tag, "src") || "";
    if (!/^https:\/\/images\.unsplash\.com\//.test(src) || !/[?&](amp;)?w=\d+/.test(src)) return tag;

    /* Nearest classes first: the image's own wrapper, then its ancestors. */
    const before = html.slice(Math.max(0, offset - 1500), offset);
    const classes = [...before.matchAll(/class="([^"]+)"/g)].map(m => m[1].split(/\s+/)).reverse().slice(0, 6);
    let sizes = DEFAULT_SIZES, key = null;
    outer: for (const list of classes) for (const c of list) if (SIZES[c]) { sizes = SIZES[c]; key = c; break outer; }
    if (key === "lhero-img" && isEsFront) sizes = "(max-width: 700px) 92vw, 1180px";

    const srcset = WIDTHS.map(w => `${src.replace(/([?&](?:amp;)?)w=\d+/, `$1w=${w}`)} ${w}w`).join(", ");
    let out = dropAttr(dropAttr(dropAttr(tag, "srcset"), "sizes"), "decoding");
    out = out.replace(/\ssrc="[^"]*"/, m => `${m} srcset="${srcset}" sizes="${sizes}"`);

    /* The first lead image on the page is its largest paint. */
    if (!leadDone && ["lhero-img", "catlead", "arthero"].includes(key)) {
      leadDone = true;
      out = dropAttr(dropAttr(out, "loading"), "fetchpriority").replace(/<img\b/, '<img loading="eager" fetchpriority="high"');
    }
    return out.replace(/<img\b/, '<img decoding="async"');
  });
}

const SKIP = new Set([".git", "node_modules", "tools", "assets"]);
function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (SKIP.has(e.name) || e.name.startsWith(".")) continue;
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p, out) : (e.name.endsWith(".html") && out.push(p));
  }
  return out;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  let pages = 0, imgs = 0;
  for (const f of walk(".")) {
    const h = fs.readFileSync(f, "utf8");
    const o = optimizeHtml(h, f);
    if (o !== h) { fs.writeFileSync(f, o); pages++; imgs += (o.match(/srcset="https:\/\/images\.unsplash/g) || []).length; }
  }
  console.log(`  responsive images: ${imgs} images across ${pages} pages`);
}
