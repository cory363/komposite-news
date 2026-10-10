# tools

Local authoring tools. **None of these run at deploy time** — `netlify.toml`
sets an empty build command and publishes the repo root. They are run by hand,
they write files into the repo, and the committed result is what ships.

- `find-photo.mjs` — search Wikimedia Commons for a hero photograph, filtered to
  reusable licences and to files large enough to crop to 16:9. Prints candidates
  with licence and author so the credit line can be written from fact.
- `lib-template.mjs` — shared page furniture, read out of a donor page so the
  chrome cannot drift from the rest of the site.
- `render-article.mjs` — renders one article record to the site's HTML template.
- `publish.mjs` — writes rendered articles to disk.
- `wire.mjs` — inserts articles into every index surface: homepage, section
  index, /latest/, author page, tag pages, rss.xml, sitemap.xml and
  search-index.json. Idempotent and ordered oldest-first so the newest piece
  leads.
- `rebalance-related.mjs` — re-picks the cards in every existing MORE ON THIS STORY box (same card count) by tag/keyword relatedness so each article is linked from at least two others. Idempotent; run after `wire.mjs`, then `validate.mjs`.
- `suggest-links.mjs` — prints 2-4 contextual internal links (target URL + an anchor phrase that already appears in the text) and up to 3 older articles that could link back. `publish.mjs` runs it after writing each article; suggestions are printed only, nothing is inserted. Wrap the existing words in `<a href="/section/slug/">` in the batch file and re-publish. Usage: `node tools/suggest-links.mjs <section>/<slug>`.
- `data/batch-*.mjs` — the article records themselves.

- `optimize-images.mjs` — adds srcset/sizes to every Unsplash image and gives
  each page's lead image eager, high-priority loading. The page builders call
  it on write; run it on its own after any hand edit. `validate.mjs` fails on
  an image without a srcset.

Usage:

    node tools/find-photo.mjs "search terms"
    node tools/publish.mjs tools/data/batch-1.mjs
    node tools/wire.mjs   tools/data/batch-1.mjs
    node tools/optimize-images.mjs
    node tools/validate.mjs
