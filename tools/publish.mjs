/**
 * Render article records to disk. Writing the page is separate from wiring it
 * into the site's index surfaces, so a page can be regenerated without
 * touching the feeds.
 */
import fs from "node:fs";
import path from "node:path";
import { render } from "./render-article.mjs";

const batch = process.argv[2];
if (!batch) { console.error("usage: node tools/publish.mjs tools/data/batch-1.mjs"); process.exit(1); }
const articles = (await import(path.resolve(batch))).default;

for (const a of articles) {
  const dir = path.join(a.dir, a.slug);
  fs.mkdirSync(dir, { recursive: true });
  const html = render(a);
  fs.writeFileSync(path.join(dir, "index.html"), html);
  console.log(`  wrote ${dir}/index.html  (${(html.length / 1024).toFixed(1)} KB)`);
}
