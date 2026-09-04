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
- `data/batch-*.mjs` — the article records themselves.

Usage:

    node tools/find-photo.mjs "search terms"
    node tools/publish.mjs tools/data/batch-1.mjs
    node tools/wire.mjs   tools/data/batch-1.mjs
