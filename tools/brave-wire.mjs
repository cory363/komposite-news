/* Story discovery over the Brave news API. This finds what is moving; it does
   not write anything. Reporting still comes from primary documents, and any
   fact that originates with another outlet gets named and linked. Rewriting
   someone else's copy is not an option — it is their work. */
import fs from "node:fs";
import { execFileSync } from "node:child_process";

const KEY = execFileSync("bash", ["-lc",
  "textutil -convert txt -stdout ~/Downloads/KEYS.rtf 2>/dev/null | grep -i '^Brave' | grep -oE '[A-Za-z0-9_-]{20,}' | head -1"],
  { encoding: "utf8" }).trim();
if (!KEY) { console.error("  no Brave key"); process.exit(1); }

const BEATS = {
  crypto:        "stablecoin OR bitcoin ETF OR crypto exchange regulation",
  blockchain:    "tokenization OR onchain settlement OR blockchain bank",
  ai:            "AI chips OR OpenAI OR Anthropic OR datacenter buildout",
  markets:       "Federal Reserve OR treasury yields OR market selloff",
  fintech:       "payments OR fintech acquisition OR bank technology",
  cybersecurity: "data breach OR ransomware OR cyberattack company",
  business:      "earnings OR merger OR antitrust lawsuit tech",
  technology:    "enterprise software OR cloud computing OR semiconductor supply",
  policy:        "SEC rule OR CFPB OR federal regulation technology",
  startups:      "venture capital funding round OR startup raises Series",
  culture:       "streaming film box office OR media company deal",
  music:         "music streaming OR record label OR touring business",
};
const seen = new Set();
const out = [];
for (const [beat, q] of Object.entries(BEATS)) {
  const url = "https://api.search.brave.com/res/v1/news/search?" + new URLSearchParams({
    q, count: "8", freshness: "pd", country: "us", search_lang: "en" });
  let j;
  try {
    const r = await fetch(url, { headers: { Accept: "application/json", "X-Subscription-Token": KEY } });
    if (!r.ok) { console.log(`  ${beat}: HTTP ${r.status}`); continue; }
    j = await r.json();
  } catch (e) { console.log(`  ${beat}: ${e.message}`); continue; }
  const rows = (j.results || []).map(x => ({
    beat, title: (x.title || "").trim(), url: x.url,
    source: x.meta_url?.hostname || x.source || "", age: x.age || "",
    desc: (x.description || "").replace(/<[^>]*>/g, "").trim().slice(0, 180),
  })).filter(x => x.title && !seen.has(x.title) && seen.add(x.title));
  out.push(...rows);
  console.log(`  ${beat.padEnd(14)} ${rows.length} stories`);
  await new Promise(r => setTimeout(r, 1100));      // free tier is rate limited
}
fs.writeFileSync("tools/data/wire.json", JSON.stringify(out, null, 1));
console.log("\n  total: " + out.length + " stories -> tools/data/wire.json");
