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
   Measured in Chrome at 390, 820, 1024, 1280 and 1440px (October 2026).
   Every wrapper that holds a photograph is listed: the lookup walks back
   through the preceding markup, so an unlisted wrapper used to inherit the
   class of whatever came before it - the rail's 341px opinion picture took
   the 104px of the Top Stories thumbnails above it and rendered blurred. */
const SIZES = {
  "llist-thumb": "104px", "topthumb": "104px", "recothumb": "104px", "wrow-thumb": "104px",
  "abcfeatrow-thumb": "104px",
  "railfeat-img": "(max-width: 700px) 92vw, (max-width: 900px) 46vw, 345px",
  "abcfeature": "(max-width: 700px) 92vw, (max-width: 900px) 46vw, 345px",
  "lbig": "(max-width: 900px) 96vw, 510px",
  "lstack-img": "(max-width: 700px) 120px, (max-width: 900px) 46vw, 380px",
  "wfeat-img": "(max-width: 700px) 92vw, (max-width: 900px) 46vw, 570px",
  "topcell": "(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 260px",
  "bbr": "(max-width: 900px) 96vw, 480px",
  "spotc": "(max-width: 700px) 92vw, 610px",
  "inpix-c": "(max-width: 700px) 92vw, (max-width: 900px) 31vw, 230px",
  "lhero-img": "(max-width: 900px) 96vw, 760px",
  "arthero": "(max-width: 1000px) 96vw, 700px",
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
    /* Nearest classes first: the image's own wrapper, then its ancestors. */
    const before = html.slice(Math.max(0, offset - 1500), offset);
    const classes = [...before.matchAll(/class="([^"]+)"/g)].map(m => m[1].split(/\s+/)).reverse().slice(0, 6);
    if (!/^https:\/\/images\.unsplash\.com\//.test(src) || !/[?&](amp;)?w=\d+/.test(src)) {
      /* A non-Unsplash lead (a Wikimedia Commons photograph) gets no srcset,
         but it is still the page's largest paint and must load first. */
      const isLead = classes.length && ["lhero-img", "catlead", "arthero"].includes(classes[0].find(c => SIZES[c]));
      if (!leadDone && /^https:\/\//.test(src) && isLead) {
        leadDone = true;
        return dropAttr(dropAttr(tag, "loading"), "fetchpriority").replace(/<img\b/, '<img loading="eager" fetchpriority="high"');
      }
      return tag;
    }
    let sizes = DEFAULT_SIZES, key = null;
    outer: for (const list of classes) for (const c of list) if (SIZES[c]) { sizes = SIZES[c]; key = c; break outer; }
    if (key === "lhero-img" && isEsFront) sizes = "(max-width: 900px) 96vw, 1180px";
    /* The Spanish front sets its stack cards three across at full size. */
    if (key === "lstack-img" && (/^(\.\/)?es\//.test(file) || classes.some(l => l.includes("lgrid-es")))) sizes = "(max-width: 560px) 92vw, (max-width: 900px) 46vw, 380px";

    /* A fixed h= (the front zone asks Unsplash for an exact crop) has to
       scale with w, or each width in the set is a different shape. */
    const w0 = +(src.match(/[?&](?:amp;)?w=(\d+)/) || [])[1];
    const h0 = +(src.match(/[?&](?:amp;)?h=(\d+)/) || [])[1];
    const at = w => {
      let u = src.replace(/([?&](?:amp;)?)w=\d+/, `$1w=${w}`);
      if (w0 && h0) u = u.replace(/([?&](?:amp;)?)h=\d+/, `$1h=${Math.round(h0 * w / w0)}`);
      return u;
    };
    const srcset = WIDTHS.map(w => `${at(w)} ${w}w`).join(", ");
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
