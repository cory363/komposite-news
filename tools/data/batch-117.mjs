/*
Komposite News, batch 117: Thursday 5 November 2026, round 38. One original-research lead + 2 stories. tools/data/lead.json
pins the new lead (the round-36 super PAC pin expires and moves down the normal way). Brave was unavailable, so leads came from
WebSearch, SEC EDGAR full-text search and the day's reader-trend signal; every figure was then taken from the primary sources
below. r38-claims.md checked before writing and before commit. Strictly non-partisan: no candidate or party is characterised;
results are AP's as published in NPR's results data, with the time checked; uncalled races are labelled uncalled.

---------- 15:00Z POLICY (LEAD, OUR RESEARCH): "Nineteen of twenty-two, mostly in safe seats" (jonathan-bright, house byline) ----------
OUR DATASET AND METHOD:
- FEC bulk file "independent_expenditure_2026.csv" (https://www.fec.gov/files/bulk-downloads/2026/independent_expenditure_2026.csv),
  downloaded 5 Nov 2026 09:16 ET; 51,038 rows; 24- and 48-hour reports of independent expenditures. Kept rows whose spender id is
  Think Big C00923417, American Mission C00916692, Jobs and Democracy PAC C00928374, Defending Our Values PAC C00928390 (Leading
  the Future C00916114 and Public First C00930503 report no IEs of their own): 479 rows. De-duplicated on (spender, transaction id),
  keeping the highest file number (replaces amended entries): 447 rows. Summed exp_amo by candidate, support/oppose and the
  filer's election code (P primary, G general, R runoff, S special, O other).
- Cross-check: FEC API /schedules/schedule_e/ with min_filing_date 2026-10-27 (DEMO_KEY, 5 Nov 09:17 ET): one report from Think
  Big filed 28 Oct (Morelle, already in the bulk file), none from the other three. Latest receipt date in the bulk file for these
  committees: 28 Oct.
- Results: NPR's 2026 results data (apps.npr.org/2026-election-results/data/senate.json and house.json), "Election results are
  tabulated by The Associated Press"; downloaded 5 Nov 09:19 ET. raceCallStatus "Called" with a winner flag = AP call. Per-race
  "updated" stamps 4 Nov 17:25Z to 5 Nov 14:16Z. Mississippi Senate and California 23 "Too Early to Call".
TOTALS (our arithmetic): all four committees $59,314,485. LTF network $34,869,219, of which G $6,796,106 (19.5%), P $24,737,185,
  O $1,394,933, S $690,820, R $1,250,174. PF network $24,445,267, of which G $1,114,468 (4.6%), P $21,060,551, R $2,233,902,
  O $36,346. G total $7,910,574 = 13.3% of $59.31m. Cross-check with periodic totals in batch 116: LTF network IEs $34.51m to
  14 Oct (ours $34.87m incl. 24-hour items); PF network $25.24m to 30 Sep (ours $24.45m: the 24/48-hour file omits smaller items).
NY-12 (Bores): Jobs and Democracy support, P, $13,167,133; Think Big oppose, P, $8,155,898; sum $21,323,031 = 35.9% of $59.31m.
  Primary 23 June: PoliticsNY (Adam Daly, 23 June 2026), unofficial NYC BOE, 94.21% reporting: Lasher 39.04%, Bores 35.01%.
GENERAL, LTF network (22 candidates; American Mission 17 Republicans $5,459,403; Think Big 5 Democrats $1,336,703):
  won 19 = $4,560,565 (67.1%); lost 1 (Graham, SC Senate, $1,600,562 = 23.6%); uncalled 2 (Hyde-Smith $494,528, Obernolte
  $140,448 = $634,976, 9.3%). Winners by >10 pts: 15 of 19. Races within 10 pts (Letlow 1.8, Yakym 5.1, Haridopolos 6.4, Lee 8.6,
  Graham -4.4, Hyde-Smith -0.1 uncalled, Obernolte +2.8 uncalled): 7 races, $3,336,154 = 49.1% of the general money; record 4-1-2.
  AP incumbency flags: 19 of the 22 are incumbents; the 3 non-incumbents (Letlow, Barr, Alme) all won.
GENERAL, PF network: Defending Our Values supported Cowan GA-11 $256,736 (won 55.4-44.6) and Mealer TX-09 $258,287 (lost to
  Gutierrez 57.6-42.4); Jobs and Democracy opposed Rep. Gabe Evans CO-08 $599,445 (Rutinel won 54.5-41.6). 2 of 3 outcomes
  matched the network's position.
OTHER SOURCES READ:
- FEC committee pages (fec.gov/data/committee/<id>/?cycle=2026) as read for batch 116 (3 Nov) and linked again.
- The Washington Sun (Samuel Larreal), "The AI Super PAC Fight That Might Shape the Midterms", 13 Jan 2026 (read; notus.org
  redirects there): Jesse Hunt, LTF spokesperson: "We plan to back leaders who will set aside politics to establish a clear,
  consistent national framework"; Brad Carson, founder of Public First and a former Democratic congressman: "We have $50 million
  and 85% of the public sentiment."
- PoliticsNY, 23 June 2026 (read): NY-12 result above.
- WebSearch, 5 Nov: no general-election results statement from either network found.
HERO: Wikimedia Commons, "Vote Here - Election Polling Place (50565230221).jpg", Tony Webster, CC BY 2.0, 3 Nov 2020, Woodbury
  City Hall, Minnesota: a "Vote Here" A-frame sign on grass, parked cars blurred behind. No people. Not used on any sister site.

---------- 14:40Z TECHNOLOGY: "Handsets down 26 per cent, cars up 89" (tom-kessler, house byline) ----------
SOURCES READ:
- Qualcomm, fiscal Q4 and FY26 results, Exhibit 99.1 to Form 8-K, SEC EDGAR, dateline "SAN DIEGO, November 4, 2026" (read twice):
  Q4 GAAP revenue $10,322m (Q4 FY25 $11,270m); non-GAAP $10,442m; GAAP net income $1,251m (-$3,117m); non-GAAP $2,332m ($3,257m);
  FY26 GAAP revenue $43,120m ($44,284m); GAAP net income $13,628m incl. $5.7bn tax benefit from valuation-allowance release;
  non-GAAP net income $11,311m ($13,298m). QCT streams Q4: handsets 5,137 (6,961, -26%), automotive 1,990 (1,053, +89%), IoT
  1,888 (1,807, +4%), QCT 9,015 (9,821); QTL 1,304 (1,409). FY: handsets 24,072 (27,793), automotive 6,004 (3,957), IoT 7,132
  (6,617). Q1 FY27 guidance revenue $10.4-11.2bn; QCT $9.0-9.6bn incl. Data Center; QTL $1.3-1.5bn; non-GAAP EPS $2.15-2.35.
  Headlines: renewed long-term QTL licence agreements with Apple, Huawei and Transsion; multi-generational product collaboration
  with Amazon for AI data centers (headline only, no detail). Amon: "Fiscal 2027 marks the start of our non-handset revenue
  inflection, including the ramp of our Data Center business."; "Non-handset revenues are projected to grow by more than 60%
  year-over-year"; "we are reiterating our fiscal 2027 Data Center revenue target of $5B." Input costs: "As previously disclosed,
  we are taking actions to reflect the higher input costs in our product pricing." Capital return FY26: buybacks $7,817m,
  dividends $3,854m, total $11,671m.
- Qualcomm Form 10-K for fiscal year ended 27 Sep 2026, filed 4 Nov 2026, SEC EDGAR (read in three parts): Apple and Samsung each
  10% or more of FY26 consolidated revenues; "we expect that Apple will primarily use its own internally developed modem
  products"; handsets fell on "lower chipset shipments to certain major OEMs", driven primarily by customers reducing inventory
  after memory supply constraints and price increases; automotive up on higher revenue per unit from favourable mix and $712m of
  higher shipments from new vehicle launches with the Snapdragon digital cockpit; Data Center moves into QCT from Q1 FY27; Dragonfly
  products.
OUR ARITHMETIC: handsets -1,824 (-26.2%); automotive +937 (+89.0%); IoT +4.5%; Q4 automotive+IoT 3,878 vs 2,860 (+35.6%); share
  of QCT 43.0% vs 29.1%. FY handset share of QCT streams 24,072/37,208 = 64.7% vs 27,793/38,367 = 72.4%. FY automotive+IoT 13,136
  vs 10,574 (+24.2%). Illustration (our assumption that "non-handset" means QCT automotive, IoT and data centre): 13,136 x 1.6 =
  21,018; less $5bn data centre target = 16,018, +21.9% for automotive+IoT. Q4 GAAP revenue -8.4%; non-GAAP net income -28.4%;
  FY capital return 11,671 / non-GAAP net income 11,311 = 103.2%. Q1 FY27 guidance midpoint $10.8bn.
HERO: Wikimedia Commons, "Qualcomm Headquarters La Jolla.jpg", Coolcaesar, CC BY-SA 4.0, 26 Dec 2015. No people. Not used on any
  sister site.

---------- 14:20Z CRYPTO: "Take out the token sale and Circle stood still" (marcus-oyelaran, house byline) ----------
SOURCES READ:
- Circle Internet Group, Q3 2026 results, Exhibit 99.1 to Form 8-K, SEC EDGAR, dateline "NEW YORK - November 4, 2026" (read
  twice): total revenue and reserve income $865m ($740m, +17%); reserve income $658m ($711m, -8%), "primarily from a 61 bps
  decline in the Reserve Return Rate"; Reserve Return Rate 3.5%; other revenue $207m ($29m, +627%) "from the ARC token presale
  ($182 million)"; distribution and transaction costs $409m ($447m); RLDC $453m ($292m, +55%); RLDC margin 52% (39%, +1,291 bps);
  net income from continuing operations $226m ($214m); adjusted EBITDA $317m ($171m, new definition); USDC in circulation $73.9bn
  at quarter end (0% change), average $73.3bn (+8%); onchain transaction volume $13.9tn (+49%); CPN annualised TPV $41.3bn;
  Tazapay acquisition agreed, closing expected 2027; Arc public mainnet 16 Sep 2026, 10bn ARC genesis mint; FY26 guidance
  unchanged: other revenue $310-330m incl. recognised ARC presale revenue, RLDC margin 41.7-43.7%, adjusted opex $570-585m.
  Jeremy Allaire, co-founder, CEO and chairman: "In Q3, we saw continued proof that institutions are building and expanding on
  USDC." The release does not say how the presale is recognised or whether any distribution cost applies to it.
- Cointelegraph (Helen Partz), 11 May 2026 (read): $222m ARC presale led by a16z Crypto; 740m tokens at $0.30; $3bn fully diluted;
  private placement exempt from registration; BlackRock, Apollo Funds, ARK Invest in the consortium.
OUR ARITHMETIC: RLDC margin 453/865 = 52.4%; 292/740 = 39.5%. Ex-presale (our assumption: no distribution cost on the presale):
  revenue 865-182 = 683; RLDC 453-182 = 271 (-7.2% vs 292); margin 271/683 = 39.7%. Other revenue ex-presale 207-182 = 25 vs 29.
  Presale recognised 182/222 = 82.0%; unrecognised $40m. Distribution and transaction costs -8.5%. 740m x $0.30 = $222m.
HERO: Wikimedia Commons, "Nealon pp101-102 (3301297098).jpg", Deseronto Archives, no known copyright restrictions (Flickr
  Commons): a handwritten 19th-century account book open on a wooden table. No people. Not used on any sister site.

UNIQUENESS: 6-gram overlap with top sources reported in the commit message.
*/
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const PO = P("policy", "Policy", "policy", "Photograph via Wikimedia Commons");
const TE = P("technology", "Technology", "technology", "Photograph via Wikimedia Commons");
const CR = P("crypto", "Crypto", "crypto", "Photograph via Wikimedia Commons");

const L = (href, text) => `<a href="${href}" rel="noopener">${text}</a>`;

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

/* Sources */
const FEC_BULK = "https://www.fec.gov/data/browse-data/?tab=bulk-data";
const FEC_TB = "https://www.fec.gov/data/committee/C00923417/?cycle=2026";
const FEC_AM = "https://www.fec.gov/data/committee/C00916692/?cycle=2026";
const FEC_JD = "https://www.fec.gov/data/committee/C00928374/?cycle=2026";
const FEC_DOV = "https://www.fec.gov/data/committee/C00928390/?cycle=2026";
const NPR_SEN = "https://apps.npr.org/2026-election-results/senate.html";
const NPR_HOU = "https://apps.npr.org/2026-election-results/house.html";
const WSUN = "https://washingtonsun.com/2026-election/ai-super-pacs-leading-the-future-public-first-alex-bores";
const PNY = "https://politicsny.com/2026/06/23/micah-lasher-wins-ny-12-democratic-primary-to-succeed-longtime-rep-jerry-nadler/";

const QCOM_PR = "https://www.sec.gov/Archives/edgar/data/804328/000080432826000127/qcom092726erex991.htm";
const QCOM_10K = "https://www.sec.gov/Archives/edgar/data/804328/000080432826000128/qcom-20260927.htm";

const CRCL_PR = "https://www.sec.gov/Archives/edgar/data/1876042/000187604226000309/finalq3epr-110326.htm";
const CT_ARC = "https://cointelegraph.com/news/circle-raise-222-million-arc-token-presale-3-billion";

/* ---------- Lead tables ---------- */
const SPLIT_TABLE = table(
  ["Network (spending committees)", "Independent expenditures reported", "Coded general election", "General as share"],
  [
    [`Leading the Future (${L(FEC_TB, "Think Big")}, ${L(FEC_AM, "American Mission")})`, "$34.87m", "$6.80m", "19.5%"],
    [`Public First (${L(FEC_JD, "Jobs and Democracy PAC")}, ${L(FEC_DOV, "Defending Our Values PAC")})`, "$24.45m", "$1.11m", "4.6%"],
    ["Both networks", "$59.31m", "$7.91m", "13.3%"],
    ["Of which: New York 12th district Democratic primary", "$21.32m", "", "35.9% of all spending"]
  ],
  "Komposite's analysis of the Federal Election Commission's bulk file of 24- and 48-hour independent-expenditure reports for the 2026 cycle, downloaded at 09:16 Eastern time on 5 November 2026, after replacing amended entries. Election codes are the filers' own. The rest of the money was coded primary, runoff, special or other. Leading the Future and Public First themselves report no independent expenditures; they pass money to the committees named."
);

const r = (cand, race, cmte, amt, res, share) => [cand, race, cmte, amt, res, share];
const LTF_TABLE = table(
  ["Candidate", "Race", "Committee", "Spent (support)", "AP result", "Vote share"],
  [
    r("Darline Graham (R)*", "South Carolina, Senate", "American Mission", "$1,600,562", "<strong>Lost</strong> to Annie Andrews (D)", "46.7% to 51.1%"),
    r("Julia Letlow (R)", "Louisiana, Senate", "American Mission", "$506,197", "Won", "50.9% to 49.1%"),
    r("Cindy Hyde-Smith (R)*", "Mississippi, Senate", "American Mission", "$494,528", "<strong>Not called</strong>", "48.9% to 49.0%"),
    r("Joseph Morelle (D)*", "New York 25th", "Think Big", "$351,248", "Won", "62.9% to 36.9%"),
    r("Emilia Sykes (D)*", "Ohio 13th", "Think Big", "$332,071", "Won", "60.0% to 38.4%"),
    r("Greg Stanton (D)*", "Arizona 4th", "Think Big", "$327,064", "Won", "62.3% to 35.4%"),
    r("Steven Horsford (D)*", "Nevada 4th", "Think Big", "$321,319", "Won", "60.2% to 38.0%"),
    r("John Joyce (R)*", "Pennsylvania 13th", "American Mission", "$240,452", "Won", "67.5% to 32.5%"),
    r("Mike Rounds (R)*", "South Dakota, Senate", "American Mission", "$229,747", "Won", "60.5% to 39.5%"),
    r("Bill Hagerty (R)*", "Tennessee, Senate", "American Mission", "$212,297", "Won", "55.1% to 42.9%"),
    r("Kurt Alme (R)", "Montana, Senate", "American Mission", "$210,467", "Won", "48.3% to 37.7%"),
    r("Shelley Moore Capito (R)*", "West Virginia, Senate", "American Mission", "$210,193", "Won", "58.3% to 37.9%"),
    r("Rich McCormick (R)*", "Georgia 7th", "American Mission", "$207,640", "Won", "56.2% to 43.8%"),
    r("Laurel Lee (R)*", "Florida 15th", "American Mission", "$207,329", "Won", "54.3% to 45.7%"),
    r("Andy Barr (R)", "Kentucky, Senate", "American Mission", "$207,034", "Won", "55.0% to 42.9%"),
    r("Brian Jack (R)*", "Georgia 3rd", "American Mission", "$203,509", "Won", "58.6% to 41.4%"),
    r("Nathaniel Moran (R)*", "Texas 1st", "American Mission", "$202,539", "Won", "69.0% to 31.0%"),
    r("Guy Reschenthaler (R)*", "Pennsylvania 14th", "American Mission", "$199,369", "Won", "57.6% to 42.4%"),
    r("Mike Haridopolos (R)*", "Florida 8th", "American Mission", "$194,627", "Won", "53.2% to 46.8%"),
    r("Rudy Yakym (R)*", "Indiana 2nd", "American Mission", "$192,463", "Won", "51.3% to 46.2%"),
    r("Jay Obernolte (R)*", "California 23rd", "American Mission", "$140,448", "<strong>Not called</strong>", "51.4% to 48.6%"),
    r("Ritchie Torres (D)*", "New York 15th", "Think Big", "$5,000", "Won", "76.8% to 10.6%"),
    ["<strong>Total, 22 races</strong>", "", "", "<strong>$6,796,106</strong>", "19 won, 1 lost, 2 not called", ""]
  ],
  "* Incumbent, as flagged in the AP data. Spending: Komposite's sums of general-election independent expenditures in the FEC's 24- and 48-hour reports, downloaded on 5 November 2026. Results: Associated Press calls and vote shares as published in NPR's results data, checked at 09:19 Eastern time on 5 November; the candidate's share is given first. Counts were still under way."
);

const PF_TABLE = table(
  ["Candidate", "Race", "Committee", "Spent", "AP result", "Vote share"],
  [
    ["John Cowan (R)", "Georgia 11th", "Defending Our Values PAC", "$256,736 to support", "Won", "55.4% to 44.6%"],
    ["Alex Mealer (R)", "Texas 9th", "Defending Our Values PAC", "$258,287 to support", "Lost to Leticia Gutierrez (D)", "42.4% to 57.6%"],
    ["Gabe Evans (R)*", "Colorado 8th", "Jobs and Democracy PAC", "$599,445 to oppose", "Lost to Manny Rutinel (D)", "41.6% to 54.5%"]
  ],
  "* Incumbent. Sources and method as in the table above."
);

export default [

/* ---------- 14:20Z CRYPTO ---------- */
CR({ slug: "circle-q3-take-out-the-token-sale-and-circle-stood-still", kick: "Stablecoins",
  headline: "Take out the token sale and Circle stood still",
  dek: "Circle's revenue less distribution costs rose 55 per cent in the third quarter to $453m, but $182m came from a one-off sale of its ARC network token. Without it, by our arithmetic, the measure fell 7 per cent and the margin barely moved.",
  metaDesc: "Circle's Q3 2026 revenue less distribution costs rose 55% to $453m, helped by a $182m ARC token presale. Without it, by our arithmetic, it fell 7%.",
  author: "marcus-oyelaran", date: "2026-11-05T14:20:00Z",
  capt: "Pages of a handwritten nineteenth-century account book, with columns of dated entries and ticks, open on a wooden table, in a file photograph.",
  tags: [
    { name: "Stablecoins", slug: "stablecoins" },
    { name: "Digital Assets", slug: "digital-assets" },
    { name: "Capital Markets", slug: "capital-markets" }
  ],
  related: [
    R("/crypto/circle-wants-forty-more-countries/", "Stablecoins"),
    R("/crypto/usdc-becomes-the-eus-first-significant-token/", "Stablecoins"),
    R("/fintech/canada-plans-for-five-stablecoin-issuers-and-no-yield/", "Regulation")
  ],
  body: [
    `Circle Internet Group, the USDC stablecoin issuer, said on Wednesday that third-quarter revenue less distribution costs rose 55 per cent to $453m, but $182m of its revenue came from ${L(CRCL_PR, "the presale of its ARC network token")}. Strip that sale out and, by Komposite's arithmetic, the measure fell 7 per cent.`,
    `A stablecoin is a crypto token meant to hold a fixed value, in USDC's case one dollar, backed by reserves that earn interest. Circle keeps that interest as reserve income and pays part of it to distribution partners. Revenue less distribution costs, which Circle abbreviates as RLDC, is what remains after those payments and other transaction costs, and the company reports it alongside its results. Total revenue and reserve income rose 17 per cent to $865m. Reserve income, the interest itself, fell 8 per cent to $658m, which Circle attributed mainly to a 61 basis point fall in the rate it earns on reserves, now 3.5 per cent. Other revenue rose 627 per cent to $207m, "from the ARC token presale ($182 million)", the release said.`,
    `The presale was announced in May. Circle sold 740m ARC tokens at $0.30 each, raising $222m in a private placement led by a16z Crypto, with BlackRock, Apollo Funds and ARK Invest in the consortium, ${L(CT_ARC, "Cointelegraph reported")} at the time. That valued the network's 10bn-token supply at $3bn. Arc, Circle's own blockchain for stablecoin payments, launched its public main network on 16 September, according to the results release. By our arithmetic, Circle has now recognised 82 per cent of the presale as revenue, leaving about $40m. The release does not say how the sale is accounted for or whether any distribution cost applies to it, so our adjusted figures assume none does.`,
    table(
      ["$m, third quarter", "2026 as reported", "2026 without ARC presale*", "2025"],
      [
        ["Reserve income", "658", "658", "711"],
        ["Other revenue", "207", "25", "29"],
        ["Total revenue and reserve income", "865", "683", "740"],
        ["Distribution and transaction costs", "409", "409", "447"],
        ["Revenue less distribution costs (RLDC)", "453", "271", "292"],
        ["RLDC margin", "52.4%", "39.7%", "39.5%"],
        ["USDC in circulation, quarter end", "$73.9bn", "$73.9bn", "about $73.9bn (no change)"]
      ],
      `Reported figures from ${L(CRCL_PR, "Circle's third-quarter results release")} of 4 November 2026. * Komposite's arithmetic: the $182m of presale revenue the company identified is removed from other revenue, total revenue and RLDC, on the assumption that no distribution cost applies to it. Margins are our calculation from the rounded figures; Circle reported 52 and 39 per cent.`
    ),
    `The underlying business grew more slowly than the headline. USDC in circulation was $73.9bn at the end of September, unchanged from a year earlier, while the average over the quarter was $73.3bn, up 8 per cent. Distribution and transaction costs fell 8.5 per cent to $409m, by our arithmetic. Net income from continuing operations rose 5 per cent to $226m, and adjusted EBITDA, on a new definition the company introduced, rose 85 per cent to $317m. The company's numbers are its own; adjusted EBITDA and RLDC are not measures defined by accounting standards.`,
    `Activity on the network grew faster than the money held on it. USDC on-chain transaction volume was $13.9tn in the quarter, up 49 per cent, and Circle's payments network, CPN, reached $41.3bn of annualised payment volume, the company said. It has agreed to buy Tazapay, a Singapore-based cross-border business payments platform, with completion expected in 2027 subject to regulatory approval. "In Q3, we saw continued proof that institutions are building and expanding on USDC," said Jeremy Allaire, Circle's co-founder, chief executive and chairman.`,
    `Circle left its full-year guidance unchanged: other revenue of $310m to $330m including recognised presale revenue, an RLDC margin of 41.7 to 43.7 per cent, and adjusted operating expenses of $570m to $585m. The margin guidance is lower than the third quarter's reported 52 per cent, which is consistent with the presale being a one-off lift rather than a new level. Circle did not say how much presale revenue remains to be recognised in the fourth quarter.`,
    `Why it matters: Circle's earnings move with two things it does not control, interest rates and the amount of USDC that customers choose to hold. With the reserve rate lower and circulation flat over a year, a one-off token sale did the work this quarter. The company is meanwhile pressing into new markets: Komposite reported last month that Circle <a href="/crypto/circle-wants-forty-more-countries/">wants to enter about 40 more countries</a>, and that USDC had become <a href="/crypto/usdc-becomes-the-eus-first-significant-token/">the EU's first significant token</a> under its crypto rules.`
  ]
}),

/* ---------- 14:40Z TECHNOLOGY ---------- */
TE({ slug: "qualcomm-handsets-down-26-per-cent-cars-up-89", kick: "Semiconductors",
  headline: "Handsets down 26 per cent, cars up 89",
  dek: "Qualcomm's handset chip revenue fell 26 per cent in its fiscal fourth quarter as phone makers cut inventory, while automotive revenue nearly doubled. The company reaffirmed a $5bn data-centre revenue target for fiscal 2027 and said Apple will mostly use its own modems.",
  metaDesc: "Qualcomm's handset revenue fell 26% to $5.1bn in its fiscal Q4 2026 while automotive rose 89% to $2.0bn. Our table shows how the mix shifted.",
  author: "tom-kessler", date: "2026-11-05T14:40:00Z",
  capt: "Qualcomm's headquarters building in the La Jolla area of San Diego, a white tower with blue glass bands behind eucalyptus trees, in a file photograph.",
  tags: [
    { name: "Semiconductors", slug: "semiconductors" },
    { name: "AI Infrastructure", slug: "ai-infrastructure" },
    { name: "Consumer Technology", slug: "consumer-technology" }
  ],
  related: [
    R("/technology/samsung-q3-record-profit-memory-boom/", "Semiconductors"),
    R("/markets/marvell-to-buy-lumentum-for-115bn-in-stock/", "Semiconductors"),
    R("/ai/googles-chips-go-to-work-in-oracles-cloud/", "AI Infrastructure")
  ],
  body: [
    `Qualcomm's revenue from smartphone chips fell 26 per cent to $5.14bn in its fiscal fourth quarter, while its automotive revenue rose 89 per cent to $1.99bn, ${L(QCOM_PR, "the company reported on Wednesday")}. Total revenue for the three months to 27 September fell 8.4 per cent to $10.32bn, by Komposite's arithmetic.`,
    `The San Diego chip designer reports two businesses: QCT, which sells chips, and QTL, which licenses its wireless patents. QCT revenue fell to $9.02bn from $9.82bn, and QTL to $1.30bn from $1.41bn. In its ${L(QCOM_10K, "annual report filed the same day")}, Qualcomm said handset revenue fell for the year mainly because of lower chipset shipments to certain major phone makers, which were reducing inventory after memory supply constraints and price rises. Automotive gained from higher revenue per unit as the product mix improved, and from $712m of extra shipments, mostly for new vehicles using its Snapdragon digital cockpit chips. Non-GAAP net income, which excludes items such as tax adjustments, fell 28.4 per cent to $2.33bn.`,
    table(
      ["QCT revenue, $m", "Q4 FY26", "Q4 FY25", "Change", "FY26", "FY25"],
      [
        ["Handsets", "5,137", "6,961", "&minus;26.2%", "24,072", "27,793"],
        ["Automotive", "1,990", "1,053", "+89.0%", "6,004", "3,957"],
        ["Internet of things", "1,888", "1,807", "+4.5%", "7,132", "6,617"],
        ["Automotive and IoT combined*", "3,878", "2,860", "+35.6%", "13,136", "10,574"],
        ["Handsets as share of QCT*", "57.0%", "70.9%", "", "64.7%", "72.4%"]
      ],
      `Reported figures from ${L(QCOM_PR, "Qualcomm's fourth-quarter results release")} of 4 November 2026. * Komposite's arithmetic. Fiscal 2026 ended on 27 September. Data-centre revenue is not reported separately; it moves into QCT from the first quarter of fiscal 2027.`
    ),
    `The company's guidance rests on the businesses that are not phones. "Fiscal 2027 marks the start of our non-handset revenue inflection, including the ramp of our Data Center business," said Cristiano Amon, Qualcomm's chief executive, adding that non-handset revenue was projected to grow by more than 60 per cent and that the company was "reiterating our fiscal 2027 Data Center revenue target of $5B." The release names a "multi-generational product collaboration with Amazon for AI data centers" but gives no terms. If "non-handset" means automotive, internet of things and data centre within QCT, which is our reading rather than the company's definition, growth of 60 per cent on fiscal 2026's $13.1bn would mean more than $21.0bn. Take out the $5bn data-centre target and automotive and IoT would need to grow by about 22 per cent, by our arithmetic.`,
    `The handset business has a known gap ahead. Apple and Samsung each accounted for 10 per cent or more of Qualcomm's revenue in fiscal 2026, the annual report says, and Qualcomm expects that Apple "will primarily use its own internally developed modem products" rather than Qualcomm's. The results release also lists renewed long-term patent licence agreements with Apple, Huawei and Transsion, without terms. Qualcomm said it is raising prices to reflect higher costs for wafers, packaging, memory and other inputs, with the full benefit expected in chip gross margins in the second half of fiscal 2027.`,
    `For the first quarter of fiscal 2027, Qualcomm forecast revenue of $10.4bn to $11.2bn, a midpoint of $10.8bn, with QCT at $9.0bn to $9.6bn including data centre, and non-GAAP earnings of $2.15 to $2.35 a share. For the full year it reported revenue of $43.12bn, down 2.6 per cent, and GAAP net income of $13.63bn, which includes a $5.7bn tax benefit from releasing a valuation allowance. It returned $11.67bn to shareholders through buybacks and dividends, 103 per cent of its non-GAAP net income, by our arithmetic.`,
    `Why it matters: Qualcomm is trying to replace phone revenue it expects to lose with revenue from cars and AI data centres, and this quarter showed both halves of that move at once. The memory squeeze it cites is the other side of the AI memory demand behind <a href="/technology/samsung-q3-record-profit-memory-boom/">Samsung's record quarter</a>, in which analysts estimated its own phone business lost money. The data-centre target puts Qualcomm in a crowded field of companies selling chips and networking for AI, alongside deals such as <a href="/markets/marvell-to-buy-lumentum-for-115bn-in-stock/">Marvell's agreement to buy Lumentum</a> this week.`
  ]
}),

/* ---------- 15:00Z POLICY (LEAD) ---------- */
PO({ slug: "ai-super-pac-candidates-won-19-of-22-general-election-races", kick: "Political Money",
  headline: "Nineteen of twenty-two, mostly in safe seats",
  dek: "Candidates backed by the Leading the Future super PACs won 19 of the 22 general-election races the network spent on, by our match of FEC filings to AP results. Fifteen won by more than ten points. Most of both AI networks' money went on primaries.",
  metaDesc: "By our count of FEC filings and AP results, Leading the Future's super PACs backed winners in 19 of 22 general-election races. Most went on primaries.",
  author: "jonathan-bright", date: "2026-11-05T15:00:00Z",
  capt: "A white \"Vote Here\" sign with an American flag outside a polling place in Woodbury, Minnesota, in a file photograph from the 2020 general election.",
  tags: [
    { name: "AI Governance", slug: "ai-governance" },
    { name: "Policy", slug: "policy" },
    { name: "Regulation", slug: "regulation" }
  ],
  related: [
    R("/policy/ai-super-pacs-enter-election-day-with-30-6m-against-1-8m/", "Political Money"),
    R("/ai/thirty-one-states-have-election-deepfake-laws-on-polling-day/", "Deepfakes"),
    R("/policy/eight-attorneys-general-one-chatbot/", "State Action")
  ],
  body: [
    `Candidates backed by the AI industry's largest super PAC network won 19 of the 22 general-election races it spent on, by Komposite's match of Federal Election Commission filings to Associated Press results. One lost and two were uncalled on Thursday morning. Fifteen of the 19 winners won by more than ten percentage points.`,
    `The network is built around Leading the Future, a super PAC funded by investors including the founders of Andreessen Horowitz and OpenAI's president, Greg Brockman, which passes its money to two affiliates, Think Big and American Mission. Its rival, the Public First network, whose nonprofit arm received $20m from Anthropic, spends through Jobs and Democracy PAC and Defending Our Values PAC. Both networks were set up to fight over how AI is regulated, as Komposite <a href="/policy/ai-super-pacs-enter-election-day-with-30-6m-against-1-8m/">reported on Election Day</a>. That story ended on a promise: once results were in, the filings would show what each side had spent per race. This is that count.`,
    `<h2>How did we count it?</h2>`,
    `We used the FEC's own data and the AP's results, and the inputs are public. On Thursday at 09:16 Eastern time we downloaded the ${L(FEC_BULK, "FEC's bulk file")} of 24- and 48-hour independent-expenditure reports for the 2026 cycle. An independent expenditure is spending, usually on advertising, mail or texts, that calls for a candidate's election or defeat without being coordinated with any campaign. We kept the 447 unique transactions reported by the four committees that do the networks' spending, replaced amended entries with the latest version, and added them up by candidate, by whether the money supported or opposed that candidate, and by the election each filer said it was for. We then matched each general-election candidate to the AP's calls and vote shares as published in NPR's ${L(NPR_SEN, "Senate")} and ${L(NPR_HOU, "House")} results data, which we checked at 09:19 Eastern time.`,
    `<h2>How much of the money went to the general election?</h2>`,
    `Less than a seventh of it. The four committees had reported $59.3m of independent expenditures when we checked, and $7.9m of that, 13.3 per cent, was marked for the general election. The rest went on primaries, runoffs and special elections. The timing shows the same pattern: the Leading the Future network's general-election items are dated from 28 May to 16 October, and the Public First network's from 20 to 23 October, so neither had reported any general-election spending dated in the final ten days before the vote. The Leading the Future network put 19.5 per cent of its money into the general; the Public First network put in 4.6 per cent. The single most expensive contest for both was a primary. In New York's 12th district, Jobs and Democracy PAC spent $13.2m supporting Alex Bores, a state assemblyman, and Think Big spent $8.2m opposing him. That one race took 35.9 per cent of everything the two networks reported. Bores finished second to Micah Lasher on 23 June, with 35.0 per cent of the vote to Lasher's 39.0 per cent on unofficial counts, ${L(PNY, "PoliticsNY reported")}.`,
    SPLIT_TABLE,
    `<h2>How did the Leading the Future candidates do?</h2>`,
    `Nineteen won, one lost and two were still being counted. The network supported 22 general-election candidates and opposed none: American Mission backed 17 Republicans with $5.46m and Think Big backed five Democrats with $1.34m. By our arithmetic, $4.56m, or 67.1 per cent of its general-election money, went to candidates who won, and $1.60m, 23.6 per cent, to the one who lost: Senator Darline Graham of South Carolina, the network's largest single general-election investment, who lost to Annie Andrews by 51.1 per cent to 46.7 per cent. In Mississippi, where the network spent $494,528 for Senator Cindy Hyde-Smith, the AP had not called the race; Scott Colom led her by 1,138 votes. California's 23rd district, where it spent $140,448 for Representative Jay Obernolte, was also uncalled, with Obernolte ahead. The three candidates who were not incumbents, Letlow, Andy Barr in Kentucky and Kurt Alme in Montana, all won Senate seats that their party already held.`,
    LTF_TABLE,
    `<h2>Were these competitive races?</h2>`,
    `Mostly not. Nineteen of the 22 candidates were incumbents, according to the AP's data, and 15 of the 19 winners won by more than ten points. Only seven of the 22 races were decided by fewer than ten points or remained uncalled: Louisiana's Senate race, which Julia Letlow won by 1.8 points; three House seats in Indiana and Florida that the backed Republicans held by between 5.1 and 8.6 points; and South Carolina, Mississippi and California's 23rd. Those seven took $3.34m, or 49.1 per cent of the network's general-election money, and so far show four wins, one loss and two uncalled. The other half went to the 15 candidates who won by more than ten points, in amounts of $199,000 to $351,000 each, plus $5,000 for one. A record built mostly on safe incumbents says little about whether the spending changed any result, and we do not claim that it did.`,
    `<h2>What did the Public First network do?</h2>`,
    `It spent in three general-election races, all involving Republicans, for $1.11m in total. Defending Our Values PAC supported John Cowan in Georgia's 11th district, who won, and Alex Mealer in Texas's 9th, who lost to Leticia Gutierrez. Jobs and Democracy PAC spent $599,445 opposing Representative Gabe Evans in Colorado's 8th district, who lost to Manny Rutinel. The outcome matched the network's position in two of the three races.`,
    PF_TABLE,
    `<h2>What does the count leave out?</h2>`,
    `Three things. First, the source is the 24- and 48-hour reports, which cover independent expenditures of $10,000 or more at any time and of $1,000 or more in the last 20 days before an election. Smaller earlier items appear only in periodic reports, which is why our total for the Public First network, $24.4m, is below the $25.2m its committees had reported through September. Second, no report from these committees filed after 28 October had appeared in the FEC's data when we checked, so any later spending is missing. Third, the results are unofficial counts, and the AP had not called every race. We did not assess each candidate's position on AI, and the networks' choice of candidates is their own.`,
    `What the networks say they want is on record. Leading the Future's spokesperson, Jesse Hunt, said in January that the group planned to "back leaders who will set aside politics to establish a clear, consistent national framework", ${L(WSUN, "The Washington Sun reported")}. Brad Carson, Public First's founder and a former Democratic congressman, told the paper: "We have $50 million and 85% of the public sentiment." We found no statement from either network on the general-election results by Thursday morning.`,
    `Why it matters: the two networks were the AI industry's most direct attempt to shape who writes its rules, and their own filings show where the effort went. Most of it was spent before the autumn, in primaries such as New York's 12th, rather than on the races decided on Tuesday. In the general election, the larger network mostly backed incumbents who were already favoured. How the new Congress handles AI, including whether federal rules should override state laws such as the <a href="/ai/thirty-one-states-have-election-deepfake-laws-on-polling-day/">31 state election deepfake laws</a> on the books this week, is the test both networks were funded for.`
  ]
}),

];
