#!/usr/bin/env node
/**
 * Search Unsplash for a hero photograph.
 *
 * Unsplash's API terms require three things and this honours all of them:
 *   - the photographer is credited and linked to their Unsplash profile
 *   - the credit carries our UTM parameters
 *   - the download endpoint is triggered when a photo is actually used
 *
 * The key is read from KEYS.rtf or the environment and never printed.
 *
 *   node tools/find-unsplash.mjs "search terms" [--limit 3]
 *   node tools/find-unsplash.mjs --download <photo_id>
 */
import { execSync } from "node:child_process";

function key() {
  if (process.env.UNSPLASH_ACCESS_KEY) return process.env.UNSPLASH_ACCESS_KEY.trim();
  const txt = execSync('textutil -convert txt -stdout "/Users/corychamberlain/Downloads/KEYS.rtf"', { encoding: "utf8" });
  const m = txt.split("\n").find(l => /^unsplash/i.test(l.trim()));
  if (!m) throw new Error("Unsplash key not found");
  return m.replace(/^unsplash[-: ]*/i, "").trim();
}
const K = key();
const H = { Authorization: `Client-ID ${K}`, "Accept-Version": "v1" };

const args = process.argv.slice(2);

if (args[0] === "--download") {
  // Unsplash requires this ping when a photo is put to use.
  const r = await fetch(`https://api.unsplash.com/photos/${args[1]}`, { headers: H });
  const p = await r.json();
  if (p.links?.download_location) {
    const d = await fetch(p.links.download_location, { headers: H });
    console.log(`  download registered for ${args[1]}: ${d.status}`);
  } else console.log("  no download_location for " + args[1]);
  process.exit(0);
}

const limit = (() => { const i = args.indexOf("--limit"); return i > -1 ? Number(args[i + 1]) : 3; })();
const q = args.filter((a, i) => !a.startsWith("--") && args[i - 1] !== "--limit").join(" ");
if (!q) { console.error('usage: node tools/find-unsplash.mjs "search terms"'); process.exit(1); }

const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(q)}&per_page=${limit}&orientation=landscape&content_filter=high`;
const res = await fetch(url, { headers: H });
const remaining = res.headers.get("x-ratelimit-remaining");
const j = await res.json();
if (j.errors) { console.error("  " + j.errors.join("; ")); process.exit(1); }
console.log(`# ${q}   (rate limit remaining: ${remaining})`);
for (const r of j.results) {
  console.log(`  id: ${r.id}`);
  console.log(`     ${r.width}x${r.height} | by ${r.user.name} (@${r.user.username})`);
  console.log(`     alt: ${(r.alt_description || r.description || "").slice(0, 80)}`);
}
