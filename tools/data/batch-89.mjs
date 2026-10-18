import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const AI = P("ai", "AI", "ai", "Photograph via Unsplash");
const CY = P("cybersecurity", "Cybersecurity", "cybersecurity", "Photograph via Unsplash");

const L = (href, text) => `<a href="${href}" rel="noopener">${text}</a>`;

/** Related card from an existing page: real headline and publication date. */
const MONTHS = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
const R = (href, kick) => {
  const f = href.replace(/^\//, "") + "index.html";
  const h = fs.readFileSync(f, "utf8");
  const title = h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1].replace(/&amp;/g, "&");
  const d = h.match(/datePublished":"(\d{4})-(\d\d)-(\d\d)/);
  return { href, kick, title, ago: `${MONTHS[+d[2] - 1]} ${+d[3]}, ${d[1]}` };
};

/** Batch 89 — Sunday 18 October 2026, round 15b. Two more stories after
 *  round 15 (batch 88). PLACEMENT: both are newer than the round-15 lead
 *  (CERT-In, 14:00Z), so they are listed first in tools/data/featured.json.
 *  The front-zone builder fills the rail's Features band before the lead,
 *  so the CERT-In piece stays the lead, Replit and BeyondTrust/Circle keep
 *  their cluster and grid slots, and the two new pieces take the Features
 *  band (Anthropic in the large first slot with its dek, Hacken second).
 *  Times are honest: both after the news broke and before publication.
 *  Repeat check: repo grep for "public benefit fund", Hacken, Liquid
 *  Network, Tectonic, Coldcard: nothing. Bitget appears once, in our
 *  28 Sep piece on its protection fund ($387.5m loss), now linked.
 *
 *  AI / ANTHROPIC FUND (22:30Z). Read in full: Anthropic, "Anthropic Public
 *  Benefit Fund", anthropic.com/news, 18 Oct (raw HTML). Every quote below is
 *  verbatim from it: "Subject to stockholder approval, 5% of Anthropic's
 *  shares will be committed today"; extra 2% "at the board's discretion for
 *  every 50% increase in the company's value above a set baseline";
 *  wholly-owned LLC, not a 501(c)(3); no lobbying or political giving "in the
 *  US or abroad"; "It is common practice for tech companies to offer
 *  escalating compensation awards to their executives. We are instead
 *  directing that equity to the public benefit."; co-founders "pledged to
 *  donate 80% of their equity holdings"; equity donation match, "Approximately
 *  half of our employees participate"; "roughly 20% of Anthropic shares will
 *  be dedicated to the public good"; $200 million on labour-market effects;
 *  "given the pace of AI progress, bolder approaches may be needed"; "In the
 *  coming months" for structure, governance, milestones and a public benefit
 *  report. The 20% total is Anthropic's own; it gives no breakdown, and the
 *  80% is of the co-founders' own holdings, not of the company (stated).
 *  Independent coverage read: Reuters (Abu Sultan, Anusha Shah, Bengaluru;
 *  via Yahoo Finance, 18 Oct 15:11 EDT): baseline "has yet to be disclosed";
 *  "one of the biggest IPOs in history as a public benefit corporation";
 *  roughly 20% "excluding any additional shares". TechCrunch (Anthony Ha, In
 *  Brief, 18 Oct 13:37 PDT): no outside comment; notes negative public
 *  sentiment towards AI. Bloomberg and CNBC also covered it (headlines seen,
 *  CNBC returned 403, Bloomberg not opened). No outside expert comment in any
 *  source read; none invented. No dollar value in any source; no valuation
 *  arithmetic attempted. Draft corrections: the "bolder approaches" quote was
 *  attributed to TechCrunch, now to Anthropic; the executive-awards line is now
 *  quoted, not paraphrased; speculative closing paragraphs on control and
 *  dilution cut; "strongest argument" editorialising cut.
 *  Hero: Unsplash fjj7lVpCxRE (Roman Synkevych), a green shoot in soil, no
 *  people, not used before on the site.
 *
 *  CYBERSECURITY / HACKEN Q3 (22:15Z). Hacken's report (hacken.io) returned
 *  HTTP 403 again on 18 Oct, so every figure is attributed to the outlets.
 *  CoinDesk (Olivier Acuna, ed. Sheldon Reback, 18 Oct 09:00 EDT), raw HTML
 *  read: report "released on Thursday"; $1.18bn, 107 incidents, 55% up on Q2;
 *  $906.8m from suppliers/dev tools, uninstalled public fixes or components
 *  outside the latest review; Bitget "at least $352 million" via a third-party
 *  security product; Ledger implant in "a device sold by CryptoBilis" (draft
 *  said devices: fixed), about $93m; Liquid $319m, Tectonic "at least $75
 *  million", Coldcard about $114m; 12 venues, >$700m at two on 3-of-4 keys or
 *  unidentified admin keys. Matiukhin (co-founder and board director) quotes
 *  verbatim. Cointelegraph (Zoltan Vardai, ed. Yohan Yun, 15 Oct, Thursday),
 *  raw HTML: Bitget $387m, Liquid $320m, Tectonic $120m, Coldcard firmware
 *  ~$115m; ~80% in four incidents; 98 under $10m; median $670,000; smart
 *  contracts $228m across 71; ~$387m returned or reversed (~33%); white hats
 *  $272m (~85%); Cronos validators rolled back 114 minutes, reversing about
 *  $111.2m of $120.4m; operators covered $410m incl. Bitget fund $387m;
 *  ~$384m (32%) neither. Our arithmetic: 906.8/1,180 = 76.8%; 1,180/1.55 =
 *  about $761m implied Q2; 387+320+120+115 = $942m = 79.8%; 387+410+384 =
 *  $1,181m. Hacken sells audits (stated). Headline changed from "Three-
 *  quarters of Q3 hack losses sat outside the audit" so the claim is Hacken's.
 *  Hero: Unsplash PxiAc1aElFQ (Filip Szalbot), a bunch of keys on a wooden
 *  table, no people, not used before on the site.
 */

const ANTH = "https://www.anthropic.com/news/public-benefit-fund";
const TC_AN = "https://techcrunch.com/2026/10/18/anthropic-says-its-committing-5-of-its-shares-to-a-public-benefit-fund/";
const RT_AN = "https://finance.yahoo.com/technology/ai/articles/anthropic-commit-5-stake-public-191115841.html";

const CD_HK = "https://www.coindesk.com/tech/2026/10/18/crypto-audits-give-investors-false-sense-of-security-as-q3-hacks-cost-usd1-18-billion-hacken-says";
const CT_HK = "https://cointelegraph.com/news/bitget-liquid-exploits-push-crypto-hacks-near-12b-q3";

export default [

/* ---------- 22:15Z CYBERSECURITY ---------- */
CY({ slug: "hacken-puts-most-q3-hack-losses-outside-the-audit", kick: "Crypto Security",
  headline: "Hacken puts most Q3 hack losses outside the audit",
  dek: "Security firm Hacken says crypto hacks cost $1.18bn across 107 incidents in the third quarter, up 55 per cent. It attributes about 77 per cent to suppliers, unapplied fixes and systems left out of security reviews. Two outlets differ on the biggest cases.",
  metaDesc: "Hacken's Q3 report puts crypto hack losses at $1.18bn across 107 incidents and blames about 77 per cent on suppliers, unapplied fixes and unreviewed systems.",
  author: "sam-porter", date: "2026-10-18T22:15:00Z",
  capt: "A bunch of keys on a ring, lying on a wooden table, in a file photograph.",
  tags: [
    { name: "Cybersecurity", slug: "cybersecurity" },
    { name: "DeFi", slug: "defi" },
    { name: "Software Supply Chain", slug: "software-supply-chain" }
  ],
  related: [
    R("/cybersecurity/a-wallet-that-passed-the-genuine-check/", "Hardware"),
    R("/crypto/the-cover-is-priced-in-bitcoin/", "Exchanges"),
    R("/cybersecurity/fourteen-hundred-fixes-in-one-month/", "Patching")
  ],
  body: [
    `Crypto hacks cost $1.18 billion across 107 incidents in the third quarter, 55 per cent more than in the second, according to a report the security firm Hacken released on Thursday, as summarised by ${L(CT_HK, "Cointelegraph")} that day and by ${L(CD_HK, "CoinDesk")} on Sunday. We could not read the report itself, which returned an error when we tried to open it, so the figures below are the two outlets' accounts of it.`,
    `Hacken said $906.8 million, about 77 per cent of the total by our arithmetic, came from compromised suppliers or developer tools, publicly available security fixes that had not been installed, or components left out of the most recent security review, CoinDesk reported. By our arithmetic, a 55 per cent rise implies second-quarter losses of about $761 million. Cointelegraph called the third quarter the most damaging since the first quarter of 2025, when the Bybit theft of $1.4 billion lifted the total to $1.6 billion.`,
    `The two outlets part on the largest cases. CoinDesk said the biggest incident was September's attack on Bitget, which lost "at least $352 million" after hackers exploited a flaw in a third-party security product to reach its withdrawal infrastructure. Cointelegraph put the Bitget loss at $387 million, the figure Komposite used in <a href="/crypto/the-cover-is-priced-in-bitcoin/">our report on Bitget's bitcoin-denominated protection fund</a>. CoinDesk gave Tectonic "at least $75 million"; Cointelegraph gave $120 million. On Liquid Network the two are close, at $319 million and $320 million.`,
    `Coldcard accounted for about $114 million in CoinDesk's account and about $115 million in Cointelegraph's, which tied it to a firmware vulnerability. CoinDesk also cited losses of about $93 million linked to the hardware implant Ledger said it found in a device sold by CryptoBilis, a Southeast Asian reseller. When Komposite covered <a href="/cybersecurity/a-wallet-that-passed-the-genuine-check/">that case</a>, loss figures were unverified, and the $93 million has not been independently confirmed. By our addition of Cointelegraph's four largest figures, they come to $942 million, about 80 per cent of the total, matching that outlet's own description.`,
    `Most incidents were small, Cointelegraph reported. Of the 107, 98 cost less than $10 million, and the median loss was $670,000. Smart contract flaws, the part of a system audits most often examine, were the most common vector by count, at $228 million across 71 incidents. The quarter's money sat in a handful of large breaches rather than in routine contract bugs.`,
    `Hacken's argument is about scope. "The problem is always scope," Andrii Matiukhin, co-founder and board director at Hacken, told CoinDesk. "It's expensive to have enormous scopes of all components that interact with funds or influence economics, and teams cut corners, auditing only critical parts of the service." He said customers who see an audit badge "assume the whole system is covered", and that "sometimes a critical vulnerability is classified as low by the team, and fix implementation is delayed or even declined".`,
    `Hacken also reviewed 12 derivatives exchanges and prediction markets, CoinDesk said, and found that more than $700 million in assets at two major venues depended on a four-key arrangement needing three signatures, or on administrative keys whose holders were not publicly identified. Matiukhin declined to name the venues. "We are not aware of a live bug in the systems of any reviewed venue," he said. That is a finding about key design and disclosure, not a report of a vulnerability.`,
    `Cointelegraph also gave Hacken's recovery figures. About $387 million, roughly a third, was returned or reversed, including $272 million handed back by self-described white hats after the Liquid Network exploit and about $111.2 million reversed when Cronos validators rolled back 114 minutes of blockchain history after the Tectonic incident. Operators covered a further $410 million from their own funds, $387 million of it from Bitget's user protection fund. About $384 million, or 32 per cent, was neither returned nor covered. The three parts sum to $1.181 billion, by our addition.`,
    `Hacken sells security audits, so its conclusion that audit badges give false comfort is also an argument for buying broader reviews, and the totals are the firm's own; other trackers count incidents differently. The operational point does not depend on the vendor: losses gathered around suppliers, signing keys and fixes not yet installed, the same patching gap Komposite described in <a href="/cybersecurity/fourteen-hundred-fixes-in-one-month/">our report on a month of 1,400 fixes</a>.`
  ]
}),

/* ---------- 22:30Z AI ---------- */
AI({ slug: "anthropic-sets-aside-five-per-cent-for-a-fund", kick: "Governance",
  headline: "Anthropic sets aside five per cent for a fund",
  dek: "Anthropic said on Sunday it will commit 5 per cent of its shares to a public benefit fund held in a wholly-owned LLC, subject to stockholder approval. It gave no dollar value, and said governance details will follow in the coming months.",
  metaDesc: "Anthropic said on Sunday it will commit 5 per cent of its shares to a public benefit fund, subject to stockholder approval, with governance details still to come.",
  author: "dana-whitfield", date: "2026-10-18T22:30:00Z",
  capt: "A green shoot growing out of dark soil, in a file photograph.",
  tags: [
    { name: "AI Governance", slug: "ai-governance" },
    { name: "Corporate Strategy", slug: "corporate-strategy" },
    { name: "Workforce", slug: "workforce" }
  ],
  related: [
    R("/ai/anthropic-invites-the-examiners-in/", "AI Safety"),
    R("/ai/the-ftc-asks-two-labs-for-their-incident-files/", "Regulation"),
    R("/ai/anthropics-first-canadian-lease-is-for-95-megawatts/", "Infrastructure")
  ],
  body: [
    `Anthropic said on Sunday that it is creating a public benefit fund and will commit 5 per cent of its shares to it. "Subject to stockholder approval, 5% of Anthropic's shares will be committed today," the company said in ${L(ANTH, "its announcement")}. ${L(RT_AN, "Reuters")} and ${L(TC_AN, "TechCrunch")} reported the plan the same day. Neither the company nor either outlet put a dollar value on the commitment.`,
    `The stake can grow. Anthropic said a further 2 per cent may be added "at the board's discretion for every 50% increase in the company's value above a set baseline". Reuters reported that the baseline "has yet to be disclosed". Without a valuation or a baseline, the size of the fund in money cannot be worked out from what has been published, and we have not tried.`,
    `Anthropic said the fund will be a wholly-owned LLC, "rather than a 501(c)(3) or other format", to allow it to move between different forms of giving. "None of the Anthropic equity held by the LLC will be used for lobbying or political giving, in the US or abroad," it said. The company offered examples rather than a programme: it "might explore large donations to traditional nonprofits or direct distributions to specific populations".`,
    `The company tied the structure to pay. "It is common practice for tech companies to offer escalating compensation awards to their executives. We are instead directing that equity to the public benefit," it said. It did not say how much equity that represents, whether any existing executive awards have changed, or how the fund's growth relates to executive pay at the company.`,
    `Anthropic also placed the fund alongside earlier pledges. It said its co-founders pledged at the company's founding to donate 80 per cent of their own equity holdings, and that about half of employees take part in an equity donation match in which Anthropic matches what staff pledge. "When combined with today's announcement, roughly 20% of Anthropic shares will be dedicated to the public good," the company said, plus any further percentage from valuation milestones. That total is Anthropic's own figure. It published no breakdown of how the 20 per cent is reached, and the number has not been independently verified.`,
    `The announcement pointed to work as one area the fund could address. Anthropic said AI "could also cause instability for many workers", that it has already committed $200 million to studying and addressing the issue, and that "given the pace of AI progress, bolder approaches may be needed". The fund is not limited to labour-market projects, on the company's account.`,
    `Much is unsettled. Anthropic said that "In the coming months" it will share more about the fund's structure and governance, including the valuation milestones, and that it will publish a public benefit report on its progress. None of the sources we read says who will decide which projects are financed, who will run the LLC or whether anyone outside the company will oversee it. TechCrunch reported no comment from outside experts, and we found none in the coverage we read.`,
    `The timing has context. Reuters noted that Anthropic is planning "one of the biggest IPOs in history as a public benefit corporation", a legal form that requires management to weigh certain wider interests alongside profit. TechCrunch linked the announcement to increasingly negative public sentiment towards the AI industry. The commitment depends on a stockholder vote, and no vote has been reported. Until it passes and the governance terms are published, the fund is a pledge rather than a transfer.`,
    `Komposite has reported on how the company handles outside scrutiny, including <a href="/ai/anthropic-invites-the-examiners-in/">Dario Amodei's plan for outside evaluators with employee-level access</a> and <a href="/ai/the-ftc-asks-two-labs-for-their-incident-files/">the FTC's demands to Anthropic and OpenAI for their incident files</a>, and will report the fund's governance terms when Anthropic publishes them.`
  ]
}),

];
