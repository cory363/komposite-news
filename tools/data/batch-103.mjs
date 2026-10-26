/*
Komposite News, batch 103: Monday 26 October 2026, round 24 (2 secondary stories; the round-23 lead stays pinned).
Fact-checked against primary documents. Written and checked under the 26 Oct SEO/trust rules: house bylines only,
labelled original analysis, 2+ internal and 2+ external links, metaDesc <= 155 characters.

---------- 19:00Z BUSINESS: "Microsoft offers buyouts to about 60,000 staff" (tom-kessler, house byline) ----------
SOURCES READ:
- Microsoft, Official Microsoft Blog, Amy Coleman (EVP and Chief People Officer), "Introducing a Voluntary Exit Offer",
  26 Oct 2026, downloaded and read in full. Every memo quote below is verbatim from it.
- TechCrunch, Aisha Malik, 26 Oct 2026, 8:58 AM PDT (updated 11:21 AM PT), downloaded and read.
- KIRO 7 News, Lexi Herda, 26 Oct 2026, 11:41 AM PDT, downloaded and read.
- SEC EDGAR, Microsoft Form 10-K for the year to 30 June 2026 (filed 29 Jul 2026), "Human capital resources" section.
- TechCrunch, Amanda Silberling, 23 Apr 2026, on the Voluntary Retirement Program (read).
- Business Insider (first report) and Bloomberg: could not be opened (blocked/paywalled); Bloomberg details are attributed
  "according to TechCrunch".
FACT-CHECK NOTES:
- "about 60,000": Microsoft confirmed the figure to TechCrunch; the memo itself gives no number. KIRO also says ~60,000.
- Memo: "Canada, India, the United Kingdom and the United States at level 70 and below"; TechCrunch and KIRO write "vice
  president level and below". Both reported; we do not translate the level.
- Bloomberg via TechCrunch: Xbox, Windows, Copilot, Finance participating; data centres, sales and marketing excluded.
  Terms "similar to Microsoft's standard severance" (TechCrunch). >30% of ~8,750 accepted the spring offer (TechCrunch,
  citing Bloomberg). April: ~8,750, ~7% of US staff, age + service >= 70 (TechCrunch April, citing CNBC and Bloomberg).
- 10-K: ~223,000 full-time at 30 June 2026; 121,000 US, 102,000 international; operations 89,000 (incl. datacenter
  operations), R&D 77,000, sales and marketing 43,000, G&A 14,000. Verbatim from the filing.
OUR ARITHMETIC: 60,000/223,000 = 26.9%. 223,000 - 43,000 = 180,000; 60,000/180,000 = 33.3%. 0.30 x 8,750 = 2,625
  ("more than 2,600"). 60,000/8,750 = 6.9. Shares in table: 121/223 = 54.3%, 102/223 = 45.7%, 89/223 = 39.9%,
  77/223 = 34.5%, 43/223 = 19.3%, 14/223 = 6.3%.
HERO: Unsplash CCfJmNn8tZU, Sartori Holdings LLC: a carpeted office corridor leading to glass doors under an exit sign.
  No people. Not used before on the site; not a near-duplicate of the site's empty open-plan office (pYlBAu3de0w).

---------- 19:20Z POLICY: "NBA signs CFTC pact and picks Kalshi and Polymarket" (jonathan-bright, house byline) ----------
SOURCES READ:
- CFTC press release 9314-26, 26 Oct 2026, downloaded; the MOU itself (cftc.gov/media/14791), five pages, read in full.
- NBA official release, 26 Oct 2026, 3:12 PM, downloaded and read in full.
- CFTC press releases 9199-26 (MLB, 19 Mar 2026) and 9235-26 (NHL, 21 May 2026), downloaded.
- CoinDesk, Jesse Hamilton, 26 Oct 2026, 11:59 a.m. EDT (read; used only for the NFL's position).
- Komposite, 11 Oct and 13 Oct 2026 (our own earlier reporting on the NFL amicus brief and the CFTC swap proposal).
FACT-CHECK NOTES:
- MOU text: "statement of intent"; "does not require either Party to create or maintain information or to provide or share
  information with the other Party"; sharing "at the sole discretion of each Party"; no "legally binding rights or
  obligations"; Board of Governors disclosure clause; points of contact Tyler Badgley (CFTC General Counsel) and Dan
  Spillane (NBA EVP and Assistant General Counsel, League Governance & Policy); 30 days' written notice to terminate.
  The published copy's execution line is blank ("executed this ___ day of ___, 2026").
- Selig and Kaufman-Ross quotes verbatim from the releases. Exchange terms (IP, marketing, Sportradar data), DraftKings
  expansion, "coming weeks": NBA release.
- Timeline days by our count: 19 Mar -> 21 May = 63; 21 May -> 26 Oct = 158. Both earlier dates were Thursdays.
- NFL: "laissez-faire" is from the NFL's amicus brief as quoted in our 11 Oct story; Kalshi's response due 9 Nov (docket,
  per that story). "rejected a similar arrangement" is CoinDesk's, attributed.
HERO: Unsplash 4t09k3tBZi8, Kellen Riggin: an empty outdoor basketball court and hoop at dusk, autumn leaves behind.
  No people, no logos. Not used before; the site has no basketball photo.

BACKUP r24-3 (OCC asks community banks to issue stablecoins): not used; both primary stories survived, and it sits close
to /policy/the-occ-finalises-its-stablecoin-rule-and-keeps-rewards-open/. Not repeats (repo grep: buyout/Voluntary Exit,
NBA/MOU). Bylines are labelled house bylines; none is the owner.
*/
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const BU = P("business", "Business", "business", "Photograph via Unsplash");
const PO = P("policy", "Policy", "policy", "Photograph via Unsplash");

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

const TH = 'style="text-align:left;border-bottom:2px solid #222;padding:6px 8px"';
const TD = 'style="text-align:left;border-bottom:1px solid #ddd;padding:6px 8px;vertical-align:top"';
const table = (heads, rows, note) => `<div class="datatable" style="overflow-x:auto;margin:18px 0;max-width:calc(100vw - 32px)"><table style="border-collapse:collapse;width:100%;font-size:15px"><thead><tr>${heads.map(h => `<th ${TH}>${h}</th>`).join("")}</tr></thead><tbody>`
  + rows.map(r => `<tr>${r.map(c => `<td ${TD}>${c}</td>`).join("")}</tr>`).join("")
  + `</tbody></table><div class="tablenote" style="font-size:13px;color:#666;margin:6px 0 0">${note}</div></div>`;

const MS_BLOG = "https://blogs.microsoft.com/blog/2026/10/26/introducing-a-voluntary-exit-offer/";
const MS_TC = "https://techcrunch.com/2026/10/26/microsoft-offers-buyouts-to-around-60000-employees-reports-say/";
const MS_KIRO = "https://www.kiro7.com/news/local/microsoft-offers-mass-buyouts-thousands-employees/K2A2ZZD4DJCHDCKRRAISG7VJCE/";
const MS_10K = "https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm";
const MS_TC_APR = "https://techcrunch.com/2026/04/23/microsoft-offers-buyout-for-up-to-7-of-u-s-employees/";
const NBA_CFTC = "https://www.cftc.gov/PressRoom/PressReleases/9314-26";
const NBA_MOU = "https://www.cftc.gov/media/14791/CFTC-NBA_MOU/download";
const NBA_REL = "https://www.nba.com/news/nba-establishes-integrity-framework-and-commercial-partnerships-for-prediction-markets";
const MLB_CFTC = "https://www.cftc.gov/PressRoom/PressReleases/9199-26";
const NHL_CFTC = "https://www.cftc.gov/PressRoom/PressReleases/9235-26";
const NBA_CD = "https://www.coindesk.com/policy/2026/10/26/nba-joins-pro-sports-leagues-on-cftc-prediction-markets-bandwagon-while-nfl-balks";

const MS_TABLE = table(["Microsoft full-time staff, 30 June 2026", "Employees", "Share of total"], [
  ["Total", "223,000", "100 per cent"],
  ["United States", "121,000", "54.3 per cent"],
  ["International", "102,000", "45.7 per cent"],
  ["Operations (incl. support, consulting, datacentre operations)", "89,000", "39.9 per cent"],
  ["Product research and development", "77,000", "34.5 per cent"],
  ["Sales and marketing", "43,000", "19.3 per cent"],
  ["General and administration", "14,000", "6.3 per cent"]
], `Source: ${L(MS_10K, "Microsoft Form 10-K for fiscal 2026")}. Headcounts are the company's; percentage shares are Komposite's arithmetic. The Voluntary Exit Offer covers about 60,000 of these employees, by Microsoft's count.`);

const MOU_TABLE = table(["League", "CFTC announcement", "Days since the previous MOU"], [
  ["Major League Baseball", `${L(MLB_CFTC, "Thursday 19 March 2026")} (release 9199-26)`, "None: first of its kind, the CFTC said"],
  ["National Hockey League", `${L(NHL_CFTC, "Thursday 21 May 2026")} (release 9235-26)`, "63"],
  ["National Basketball Association", `${L(NBA_CFTC, "Monday 26 October 2026")} (release 9314-26)`, "158"]
], "Sources: CFTC press releases and the NBA's announcement. Day counts are Komposite's.");

export default [

/* ---------- 19:00Z BUSINESS ---------- */
BU({ slug: "microsoft-offers-buyouts-to-about-60000-staff", kick: "Workforce",
  headline: "Microsoft offers buyouts to about 60,000 staff",
  dek: "Microsoft has opened a Voluntary Exit Offer to about 60,000 employees on participating teams in the US, Canada, Britain and India, the company confirmed on Monday. By our arithmetic that is about 27 per cent of its full-time workforce.",
  metaDesc: "Microsoft offered voluntary buyouts to about 60,000 employees on Monday, about 27 per cent of the 223,000 full-time staff it reported in June.",
  author: "tom-kessler", date: "2026-10-26T19:00:00Z",
  capt: "A carpeted office corridor leading to a pair of glass doors beneath an exit sign, in a file photograph.",
  tags: [
    { name: "Enterprise Software", slug: "enterprise-software" },
    { name: "Workforce", slug: "workforce" },
    { name: "Talent", slug: "talent" }
  ],
  related: [
    R("/markets/the-ai-payoff-stops-at-seven-companies/", "Markets"),
    R("/ai/thirty-dollars-and-then-the-meter/", "Pricing"),
    R("/cybersecurity/microsoft-says-agents-hit-2250-tenants-through-connectwise/", "Cybersecurity")
  ],
  body: [
    `Microsoft is offering voluntary buyouts to about 60,000 employees, roughly 27 per cent of its full-time workforce by our arithmetic, ${L(MS_TC, "the company confirmed to TechCrunch")} on Monday. The programme, called the Voluntary Exit Offer, was announced to staff by Amy Coleman, Microsoft's executive vice president and chief people officer, in ${L(MS_BLOG, "a memo the company published on its official blog")}. Eligible employees were told they would receive an email with the details of their offer within hours.`,
    `The memo sets out the scope but not the size. It says the offer is available to eligible employees "in participating teams in Canada, India, the United Kingdom and the United States at level 70 and below", and describes it as "a time-limited, voluntary program" offering "financial support and career planning resources". It adds: "Some organizations are providing the Voluntary Exit Offer, and some are not." Participation, it says, varies with each business's priorities, customer commitments and workforce needs. The memo gives no headcount, deadline or payment terms; the 60,000 figure comes from Microsoft's confirmation to reporters.`,
    `Ms Coleman wrote that the offer "gives eligible employees who may be considering a future outside the company a new choice to make that transition now with support", and that it "also gives participating organizations another way to adapt their workforce to changing needs". She tied it to a retirement offer made in the spring: "This builds on what we learned earlier this year through the Voluntary Retirement Program." And she was candid about its novelty: "The Voluntary Exit Offer is new for us. We'll learn from it."`,
    `Some details reported on Monday go beyond the memo. TechCrunch and ${L(MS_KIRO, "KIRO 7 in Seattle")} described eligibility as reaching the vice-president level and below; the memo itself says "level 70 and below", and Microsoft does not publish how its internal levels map to titles. Bloomberg reported, according to TechCrunch, that teams including Xbox, Windows, Copilot and Finance are taking part, and that some employees, including those in data centres and in sales and marketing, are excluded. TechCrunch said the terms would be similar to Microsoft's standard severance. Those details were not independently verified.`,
    `Microsoft's own filing gives the denominator. Its ${L(MS_10K, "annual report for the year to 30 June")} says it employed about 223,000 people full-time, split between functions as follows.`,
    MS_TABLE,
    `By our arithmetic, 60,000 is 26.9 per cent of that total. If sales and marketing staff are excluded, as Bloomberg reported, the remaining pool is 180,000, and the offer reaches one in three of them. The 10-K counts data-centre staff inside its 89,000 operations figure, so they cannot be removed from the calculation separately. The headcount is four months old, and an offer is not a departure; the memo gives no expected take-up.`,
    `The spring programme was much narrower. In April Microsoft offered voluntary retirement to about 8,750 US employees whose age and years of service added up to 70 or more, about 7 per cent of its US staff, ${L(MS_TC_APR, "TechCrunch reported at the time")}, citing CNBC and Bloomberg. More than 30 per cent of those eligible accepted, according to Bloomberg as relayed by TechCrunch, which by our arithmetic is more than 2,600 people. Monday's offer is open to about 6.9 times as many employees, across four countries rather than one.`,
    `Why it matters: a voluntary offer lets a company shrink teams without the disruption of compulsory layoffs, and Microsoft is making it at a time when investors are asking where the returns from AI spending show up. Komposite reported on Sunday that Apollo's chief economist found <a href="/markets/the-ai-payoff-stops-at-seven-companies/">the AI payoff concentrated in seven companies</a>, of which Microsoft is one. In September Komposite reported that Microsoft's new <a href="/ai/thirty-dollars-and-then-the-meter/">Copilot app splits its pricing between per-user licences and metered credits</a>. How many of the 60,000 take the offer will be the measure of whether it changes the workforce or only tests it.`
  ]
}),

/* ---------- 19:20Z POLICY ---------- */
PO({ slug: "nba-signs-cftc-pact-and-picks-kalshi-and-polymarket", kick: "Prediction Markets",
  headline: "NBA signs CFTC pact and picks Kalshi and Polymarket",
  dek: "The NBA on Monday became the third major US league to sign an information-sharing memorandum with the Commodity Futures Trading Commission, and named Kalshi and Polymarket its preferred prediction-market exchanges. The memorandum itself obliges neither side to share anything.",
  metaDesc: "The NBA signed an information-sharing MOU with the CFTC on Monday and named Kalshi and Polymarket its preferred prediction-market exchanges.",
  author: "jonathan-bright", date: "2026-10-26T19:20:00Z",
  capt: "An empty outdoor basketball court and hoop at dusk, with fallen leaves and trees behind, in a file photograph.",
  tags: [
    { name: "Regulation", slug: "regulation" },
    { name: "Market Structure", slug: "market-structure" },
    { name: "Trading", slug: "trading" }
  ],
  related: [
    R("/policy/the-nfl-says-a-contract-on-a-game-is-a-bet/", "Prediction Markets"),
    R("/policy/a-swap-on-the-exchange-a-bet-at-the-sportsbook/", "Prediction Markets"),
    R("/crypto/prediction-markets-institutional-hedging/", "Prediction Markets")
  ],
  body: [
    `The National Basketball Association signed an information-sharing memorandum of understanding with the Commodity Futures Trading Commission on Monday, ${L(NBA_CFTC, "the agency said")}, and ${L(NBA_REL, "named Kalshi and Polymarket")} as its "Preferred Prediction Market Exchanges". The memorandum covers the integrity of professional basketball and the event contracts tied to it. The NBA is the third major US league to sign such a memorandum with the CFTC, after Major League Baseball and the National Hockey League. Event contracts are exchange-traded contracts that pay out according to the outcome of a future event, such as a game.`,
    `${L(NBA_MOU, "The memorandum")} is short and expressly non-binding. It calls itself "a statement of intent" and says it "does not require either Party to create or maintain information or to provide or share information with the other Party"; all sharing is "at the sole discretion of each Party", and it creates no "legally binding rights or obligations". The NBA may pass information from the CFTC to its Board of Governors but not to teams unless the agency agrees, which both sides expect it would for an active integrity investigation. Each side names a point of contact: Tyler Badgley, the CFTC's general counsel, and Dan Spillane, an NBA executive vice president and assistant general counsel. Either party can end it on 30 days' written notice. The copy the CFTC published leaves the execution date blank.`,
    `"The NBA joins the MLB and NHL in taking a responsible step toward protecting sports integrity and market participants from abuses in prediction markets like insider trading and fraud," said Michael Selig, the CFTC's chairman. Scott Kaufman-Ross, the NBA's head of media distribution and partnerships, said: "As this category develops, we believe it is important to work constructively with regulators and operators to help ensure that appropriate safeguards are in place."`,
    `The enforceable commitments sit in the league's commercial contracts, not in the memorandum. According to the NBA, its agreements with Kalshi and Polymarket include limits on which markets may be listed, prohibitions on trading NBA event contracts by league and team personnel, and obligations to share information about investigations and suspicious trading. In return the two exchanges get rights to use NBA intellectual property, marketing and promotion across US media, and official league data from Sportradar to run and settle markets. The league has also extended its agreement with DraftKings to cover prediction markets and says it will add other betting partners "in the coming weeks". The financial terms were not disclosed.`,
    `That is the distinction our reading of the two documents draws: the CFTC memorandum is a channel the regulator and the league may use, while the integrity rules are private terms between the league and the venues it has chosen to license. The CFTC's three league memorandums so far have arrived months apart.`,
    MOU_TABLE,
    `Not every league has joined. The National Football League has rejected a similar arrangement and sided with states arguing that their gambling laws should govern sports contracts, ${L(NBA_CD, "CoinDesk reported")}. Komposite reported this month that <a href="/policy/the-nfl-says-a-contract-on-a-game-is-a-bet/">the NFL asked the Supreme Court to hear New Jersey's case against Kalshi</a>, describing the approach of the CFTC and the exchanges as "laissez-faire". Kalshi's response in that case is due on 9 November.`,
    `Why it matters: three federal appeals courts have split on whether sports event contracts fall under the CFTC or state gaming regulators, and the NBA has now paired a federal information channel with commercial deals with the exchanges that list its games. The CFTC has meanwhile <a href="/policy/a-swap-on-the-exchange-a-bet-at-the-sportsbook/">proposed defining sports and other event contracts as swaps</a>, which would put them more firmly inside its jurisdiction. A memorandum with no duty to share is a modest tool; the NBA's contracts with Kalshi and Polymarket are where its integrity terms will be tested.`
  ]
}),

];
