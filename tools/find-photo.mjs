#!/usr/bin/env node
/**
 * Find a usable hero photograph on Wikimedia Commons.
 *
 * Every hero on this site is a Commons file served through Special:FilePath.
 * This keeps that pipeline: it searches Commons, filters to real photographs
 * that are large enough to crop to 800x450, and reports the licence and the
 * author so the credit line can be written from fact rather than guessed.
 *
 *   node tools/find-photo.mjs "search terms" [--limit 8]
 *
 * It prints candidates only. Choosing one is a human decision.
 */
const args = process.argv.slice(2);
const limit = (() => { const i = args.indexOf("--limit"); return i > -1 ? Number(args[i + 1]) : 8; })();
const terms = args.filter(a => !a.startsWith("--") && a !== String(limit)).join(" ");
if (!terms) { console.error('usage: node tools/find-photo.mjs "search terms"'); process.exit(1); }

const api = "https://commons.wikimedia.org/w/api.php?" + new URLSearchParams({
  action: "query", format: "json", generator: "search",
  gsrsearch: `filetype:bitmap ${terms}`, gsrnamespace: "6", gsrlimit: String(limit * 3),
  prop: "imageinfo", iiprop: "url|size|extmetadata", iiurlwidth: "800",
});

const res = await fetch(api, { headers: { "User-Agent": "KompositeNews/1.0 (editorial photo desk)" } });
if (!res.ok) { console.error("Commons API error", res.status); process.exit(1); }
const data = await res.json();
const pages = Object.values(data?.query?.pages || {});
if (!pages.length) { console.log("no results"); process.exit(0); }

const rows = [];
for (const p of pages) {
  const ii = p.imageinfo?.[0]; if (!ii) continue;
  const m = ii.extmetadata || {};
  const strip = s => String(s || "").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  const lic = strip(m.LicenseShortName?.value);
  const author = strip(m.Artist?.value);
  if (ii.width < 1000 || ii.height < 560) continue;         // must crop to 800x450
  if (/^\s*$/.test(lic)) continue;
  if (/fair use|non-free/i.test(lic)) continue;              // reusable licences only
  rows.push({ file: p.title.replace(/^File:/, ""), w: ii.width, h: ii.height, lic, author: author.slice(0, 60) });
}
rows.slice(0, limit).forEach((r, i) => {
  console.log(`${i + 1}. ${r.file}`);
  console.log(`   ${r.w}x${r.h}  |  ${r.lic}  |  ${r.author || "(no author listed)"}`);
});
if (!rows.length) console.log("no candidates passed the size/licence filter");
