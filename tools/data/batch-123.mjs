/*
Komposite News, batch 123: Thursday 12 November 2026, round 42. One lead + 4 stories, each with its own research layer.
tools/data/lead.json pins the new lead (Jensen Huang's resignation); the round-41 Nvidia market-value lead moves down the normal way.
Brave was unavailable, so leads came from WebSearch, SEC EDGAR, company IR sites, regulators' releases and the day's reader-trend
signal (research only, never cited). r42-claims.md checked before writing and before commit. Nvidia is Komposite's alone this round.
No fact in this batch rests on The New York Times. The second-relationship report that circulated on 11 November originated there
and is deliberately not used.

---------- 14:40Z AI (LEAD, OUR RESEARCH): "Huang resigns from Nvidia, and the 8-K gives no reason" (dana-whitfield, house byline) ----------
SOURCES READ:
- NVIDIA Form 8-K, filed 12 Nov 2026 (accession 0001045810-26-000082, nvda-20261111.htm), Items 5.02 and 9.01 (read): on 11 Nov 2026
  the board "accepted the resignation of Jen-Hsun Huang" as President, CEO and director, effective immediately; Colette M. Kress, 59,
  EVP and CFO since 2013, appointed interim CEO "while the Board conducts a search for a new Chief Executive Officer", remains CFO;
  Harvey C. Jones, 73, director "since 1993", Managing Partner of Square Wave Ventures since 2004, appointed Chair on 11 Nov. No reason,
  no separation agreement, no equity treatment, no interim pay, no mention of the investigation.
- NVIDIA, "NVIDIA Announces CEO Transition", 12 Nov 2026 (read): resignation effective immediately; Kress interim CEO and CFO; search
  will consider internal and external candidates; Jones the board's "first-ever Chair", former CEO and executive chairman of Synopsys;
  Jones: "full confidence in Colette and the leadership team."; Kress: "Our focus remains on serving our customers, partners,
  developers and shareholders."; Q3 FY27 results Tue 17 Nov as scheduled, call 2 p.m. PT.
- NVIDIA DEF 14A, filed 12 May 2026 (read in parts via WebFetch): record date 27 April 2026, 24,220,525,225 shares outstanding;
  Huang 870,604,104 shares, 3.58%; footnote: 528,531,547 held by Jen-Hsun and Lori Huang as co-trustees; Huang 2012 Irrevocable Trust
  31,421,011; Huang Irrevocable Remainder Trust 109,040,602; TARG LLCs 73,265,334; Jen-Hsun & Lori Huang Foundation 58,683,830 (no
  pecuniary interest). Summary Compensation Table FY2026: salary $1,497,627; stock awards $24,800,511; non-equity incentive $6,000,000;
  all other $4,045,691 (incl. $3,975,533 security); total $36,343,830. FY2026 PSU grants 10 Mar 2025: 119,607 target SY PSUs and
  119,607 target MY PSUs. Kress FY2026 target pay $16,000,000. "What We Don't Do": no special change-in-control benefits for executive
  officers. Compensation Recovery Policy since 2009. (Outstanding-awards and termination tables were beyond what we could read; the
  story says so.)
- NVIDIA, "Statement From the Independent Members of the NVIDIA Board", 10 Nov 2026 (read): retained former acting US Attorney for SDNY
  Joon H. Kim and Wachtell, Lipton, Rosen & Katz; "thorough and independent".
- NVIDIA, "A Message to Our Company", 8 Nov 2026 (read for batch 122): "I was unfaithful to my wife."
- House Foreign Affairs Committee release, 5 Nov 2026 (re-read today): Mast, Moolenaar, Crawford; briefing 18 Nov 2026; accept or
  propose another date "by November 11, 2026".
- Yahoo Finance NVDA history (read 12 Nov): closes 6 Nov $186.64, 9 Nov $178.67, 10 Nov $168.89, 11 Nov $173.73 (+2.92%, vol
  313,417,400); pre-market 155.40 (-10.55%) at 9:01:59 a.m. EST.
- Yahoo Finance live blog, 11-12 Nov 2026 (read): WSJ reported the board was meeting Wednesday night; Oct 6 record close $239.24;
  expected to open below $4tn; Stifel's Ruben Roy: "what matters for the stock from here is less whether a change occurs than how it is
  executed."
OUR ARITHMETIC: 870,604,104 x $239.24 = $208.3bn; x $186.64 = $162.5bn; x $173.73 = $151.3bn; x $155.40 = $135.3bn. Decline from record
  close to pre-market = $73.0bn (-35.0%); one-day pre-market move = $16.0bn. Ex-foundation 811,920,274 shares. Footnote lines named
  sum to 800,942,324; balance 69,661,780 by subtraction. Market value x 24.1bn (10-Q cover): $173.73 -> $4.19tn; $155.40 -> $3.75tn;
  $239.24 -> $5.77tn. Security costs = 10.9% of FY2026 total pay. Day counts from Sun 8 Nov: Wed 11 Nov = 3; Thu 12 Nov = 4; Tue 17 Nov
  = 9; Wed 18 Nov = 10.
HERO: Wikimedia Commons, "Nvdia Endeavor Grand Opening entry lawn.jpg", Daniel Prostak (Crocodiletiger), CC BY-SA 4.0, 2017: grass
  berm and walkway at Nvidia's Endeavor building, Santa Clara. A few distant, unidentifiable visitors. No watermark or logo overlay.
  Not used on any sister site (grep of ~/Sites); the NVIDIA_Headquarters.jpg file was used in batch 120.

---------- 14:20Z MARKETS: "CoreWeave's biggest customer is 30 per cent, not 67" (priya-raghavan, house byline) ----------
SOURCES READ:
- CoreWeave 10-Q for Q3 2026, filed 12 Nov 2026 (crwv-20260930.htm, read in part): nine-month revenue $8,314m (2025: $3,559m); RPO
  $132.3bn, 36% over 24 months to 30 Sep 2028, 38% months 25-48, remainder months 49-86; customer concentration: A 24% (Q3 2026) /
  67% (Q3 2025) / 33% (9M 2026) / 70% (9M 2025); B 30% / under 10% / 26% / under 10%; receivables at 30 Sep 2026 A 18%, B 33%, C 12%,
  D 14%; at 31 Dec 2025 A 68%, D 11%; letters may refer to different customers in different periods. Debt carrying amounts: recourse
  $9,183m + $32,417m; non-recourse $1,389m + $3,884m.
- CoreWeave Q3 2026 results, 8-K exhibit 99.1, 10 Nov 2026 (read): revenue $3,661m vs $1,365m; operating income $207m; net loss $(709)m;
  adjusted EBITDA $2,256m; adjusted operating income $379m; interest expense net $846m vs $310m; capex $9,441m; backlog ~$132.5bn;
  cash $4,122m; FY2026 revenue guidance raised to $13.0-13.3bn; adj. op. income $1.275-1.375bn (+26% at midpoint vs prior); capex
  $37-39bn (low end up from $35bn); exit-2026 ARR $20-21bn; Q4 interest $1.05-1.15bn; active power >1.7GW (+>200MW), contracted >4.6GW
  (+>900MW); $4.2bn convertible notes, ATM up to 35m shares, $2.6bn DDTL 5.5; ~$9bn prepayments expected in next three months;
  customers named; Intrator quote "This was a breakout quarter for CoreWeave, with revenue increasing by more than $1 billion
  sequentially".
- CoreWeave Q2 2026 results, 8-K exhibit 99.1, 11 Aug 2026 (re-read): revenue $2,575m; operating loss $(49)m; net loss $(626)m; adj op
  income $128m; adj EBITDA $1,510m; interest $640m; capex $6,422m; backlog ~$104bn; active 1.5GW; contracted ~3.7GW; recourse $31,405m,
  non-recourse $3,663m; cash $5,524m.
- Yahoo Finance CRWV history (read 12 Nov): 10 Nov close $48.73; 11 Nov $60.77 (vol 161.6m); pre-market $52.26 (-14.01%) 9:11 a.m. EST.
OUR ARITHMETIC: A $ = 24% x 3,661 = ~$879m vs 67% x 1,365 = ~$915m. B = ~$1,098m. Q1 2026 = 8,314 - 2,575 - 3,661 = $2,078m. Q4 implied
  = 13,000-13,300 - 8,314 = $4,686-4,986m, +28% to +36% on Q3. Debt 35,068 -> 46,873 (+$11,805m). Backlog +$28.5bn. Interest/revenue
  24.9% -> 23.1%. Capex/revenue 2.6x. RPO slices: $47.6bn / $50.3bn / $34.4bn. CRWV +24.7% on 11 Nov; -14.0% pre-market 12 Nov.
HERO: Wikimedia Commons, "Cern datacenter.jpg", Hugovanmeijeren, CC BY-SA 3.0, 2010. Racks, no people. Illustrative: not a CoreWeave
  site. Not used on any sister site.

---------- 14:00Z TECHNOLOGY: "Infineon now expects close to €4bn from AI power supplies" (tom-kessler, house byline) ----------
SOURCES READ (all Infineon press releases, PDFs text-extracted locally and read):
- infpr202611-025e, Neubiberg, 10 Nov 2026: FY2026 revenue €16.353bn (+12%); Segment Result €3.223bn, 19.7%; Q4 €4.706bn, SR €1.119bn,
  23.8%; FY2027 outlook at EUR/USD 1.15: ~€20bn revenue (growth of more than 20%), data-centre power supplies "close to €4 billion",
  adjusted gross margin mid-to-high forties, SR margin mid twenties, investments €3.0-3.5bn, D&A ~€2.2bn, adjusted FCF ~€2.2bn, FCF
  ~€1.8bn; Q1 FY27 ~€4.6bn, ~23%; dividend proposal €0.38 (+€0.03); new segments ATV, ES, PS from 1 July 2026; PSS Q4 €1,796m (+25% q/q,
  +48% y/y), SR €554m, 30.8%; PSS FY26 €5,670m vs €4,291m, SR €1,374m vs €674m; group SR €3,223m vs €2,560m; Hanebeck quote.
- INFXX202602-042e, 4 Feb 2026: investments ~€2.7bn (previously €2.2bn); data-centre power revenue ~€2.5bn FY2027 after ~€1.5bn FY2026;
  PSS Q1 €1,171m, SR €204m, 17.4%.
- INFXX202605-082e, 6 May 2026: "notwithstanding a weaker currency", ~€1.5bn FY2026 and ~€2.5bn FY2027; PSS Q2 €1,260m, SR €257m, 20.4%.
- infpr202608-125e, 5 Aug 2026: PSS Q3 €1,442m, SR €359m, 24.9%; investments ~€2.7bn FY2026; capacity reservation agreements with AI
  customers covering "a cumulative revenue volume of a high single-digit billion euro amount" with certain prepayments.
OUR ARITHMETIC: €4bn / €2.5bn = +60%; €4bn / €20bn = 20%; €1.5bn / €16.353bn = 9.2%; PSS SR +€700m vs group +€663m; PSS share of
  group revenue 34.7% (5,670 / 16,353); PSS Q1-Q4 revenue +53% (1,171 -> 1,796); Feb 4 to Nov 10 = 279 days. FY27 growth to €20bn =
  +€3.65bn; data-centre +€2.5bn if FY26 landed at the €1.5bn guided (not disclosed) = about two-thirds.
HERO: Wikimedia Commons, "MOSFET transistors.jpg", Mister rf, CC BY-SA 4.0, 2021: power MOSFETs in various packages on white, including
  Infineon parts. No people. Not used on any sister site.

---------- 13:40Z FINTECH: "Forty-five days of silence, then a lawsuit over stock perps" (elena-vasquez, house byline) ----------
SOURCES READ:
- Cboe Global Markets letter to the CFTC on perpetual-style derivatives, 21 May 2025, signed Patrick Sexton, EVP, General Counsel
  (PDF text-extracted locally, read): "Ultimately, it is up to the exchange listing any perpetual derivatives product to determine
  whether a new contract is to be listed as a future or swap."; perpetual futures "on financial instruments, which could include
  equities, indexes and digital assets"; two-part definition; "long-term" at least over 5 years, typically 10 or more.
- CFTC Chairman Michael S. Selig statement, 3 Nov 2026 (read): Equity Perps "deemed approved by the Commission, pursuant to Commission
  Regulation 40.3" as security futures products under the CFMA 2000; tradable on DCMs notice-registered with the SEC; "The CFTC and SEC
  have turned the page on that era".
- Cleary Gottlieb, "Equity Perpetuals and KPI Contracts: Regulatory Approvals and Legal Challenge" (read): filed 18 Sep 2026; deemed
  approved 2 Nov; eligible to trade 3 Nov; Coinbase Derivatives, KalshiEX, Bitnomial Exchange, Nadex and ICE Futures U.S. filed with the
  SEC to register for security futures; Capital Markets Alliance Ass'n v. CFTC, S.D.N.Y. No. 1:26-cv-09608, complaint 3 Nov (Dkt. 1),
  TRO denied same day (Dkt. 11), order quoted: "is likely to succeed on the merits of its claim that the CFTC lacks statutory
  authority"; PI fully briefed 10 Nov.
- Finance Magnates, Damian Chmiel, 12 Nov 2026 (read): SEC brief filed Monday; SEC disputed portrayal "of a CFTC gone rogue, and an SEC
  gone missing"; did not say whether futures or swaps; Caproni: "seem to represent a major disruption to the equities market."; case
  moved to Judge Lorna Schofield; CFTC answer due 25 Nov; Coinbase Derivatives, Kalshi and Bitnomial applied for more than 100
  contracts; Kalshi about 50 US stocks and ETFs from 5 Nov; Cboe told the court about $375m 24-hour notional on day two; Ledger Insights
  reported SEC deadline 31 Dec (not confirmed by FM); members include Cboe and Citadel Securities.
- Ledger Insights, 9 Nov 2026 (read, partly paywalled): CFTC brief calls the alliance a "sham entity"; Healthy Markets Association
  also behind it; only identified officer Adam Ford; Cboe continuous futures up to ten years.
OUR ARITHMETIC: 18 Sep (Fri) + 45 days = 2 Nov (Mon). 3 Nov to 10 Nov = 7; to 25 Nov = 22; to 31 Dec = 58. 12 Nov to 31 Dec = 49.
HERO: Wikimedia Commons, "New York City (New York, USA), Wall Street -- 2012 -- 6614.jpg", Dietmar Rabich, CC BY-SA 4.0, 2012: the
  New York Stock Exchange facade with a large US flag. No identifiable people. Not used on any sister site.

---------- 13:20Z POLICY: "New York opens its register for frontier AI developers" (jonathan-bright, house byline) ----------
SOURCES READ:
- TechCrunch, Rebecca Bellan, 10 Nov 2026 12:52 PST (read): portal opened Tuesday; register by 1 Jan 2027; >$500m revenue; publish safety
  frameworks; report critical incidents within 72 hours; transparency reports; DIGIT; New York Center for AI Responsibility and Research
  at SUNY Binghamton launched Tuesday; fines up to $1m / $3m; spokesperson declined specifics on enforcement against non-registrants;
  Hochul: "Tech moguls tell us that their vision for AI is inevitable,".
- NY DFS release, 21 Sep 2026 (read): registration from November; DIGIT within DFS; disclosure statement at least every other year from
  1 Jan 2027; 72-hour reporting to DIGIT; quarterly catastrophic-risk assessments; assessments; Marc Gilman deputy director; Acting
  Superintendent Kaitlin Asrow: "DFS is proud to lead the implementation of the RAISE Act for New York."
- Davis Polk client update, 20 May 2026 (read): original act signed 19 Dec 2025; amended act signed 27 Mar 2026; 10^26 operations
  including fine-tuning; $500m revenue; 72 hours / 24 hours imminent risk; AG penalties $1m / $3m; DFS $1,000 a day for disclosure or
  fee non-compliance; no private right; effective 1 Jan 2027; disclosure statements renewed every two years and pro rata costs; DFS
  rulemaking; California TFAIA: same compute and revenue thresholds, 15 days, up to $1m per violation, whistleblower protections, no
  disclosure statements.
- Office of the Governor of California, 29 Sep 2025 (read): SB 53 signed; frameworks published; incident reporting to the Office of
  Emergency Services; whistleblower protections; civil penalty enforceable by the Attorney General; CalCompute.
OUR ARITHMETIC: 19 Dec 2025 -> 27 Mar 2026 = 98 days; 27 Mar -> 10 Nov = 228; 21 Sep -> 10 Nov = 50; 10 Nov -> 1 Jan 2027 = 52;
  19 Dec 2025 -> 1 Jan 2027 = 378. 72 hours vs 15 days = 5x faster. $3m second-violation cap = 3x California's $1m.
HERO: Wikimedia Commons, "New York State Capitol building, full.jpg", Shaunfrombrooklyn, CC BY-SA 4.0, 2017. Tiny distant figures only.
  Not used on any sister site (other sites' "State Capitol" photos are Alabama's and others).

UNIQUENESS: 6-gram overlap with top outlet sources reported in the commit message.
*/
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const AI = P("ai", "AI", "ai", "Photograph via Wikimedia Commons");
const MK = P("markets", "Markets", "markets", "Photograph via Wikimedia Commons");
const TE = P("technology", "Technology", "technology", "Photograph via Wikimedia Commons");
const FI = P("fintech", "Fintech", "fintech", "Photograph via Wikimedia Commons");
const PO = P("policy", "Policy", "policy", "Photograph via Wikimedia Commons");

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
const table = (heads, rows, note) => `<div class="datatable" style="overflow-x:auto;margin:18px 0;max-width:calc(100vw - 32px)"><table style="border-collapse:collapse;width:100%;font-size:15px"><caption style="caption-side:bottom;text-align:left;font-size:13px;color:#666;padding:6px 0 0">${note}</caption><thead><tr>${heads.map(h => `<th ${TH}>${h}</th>`).join("")}</tr></thead><tbody>`
  + rows.map(r => `<tr>${r.map(c => `<td ${TD}>${c}</td>`).join("")}</tr>`).join("")
  + `</tbody></table></div>`;

/* Sources: lead */
const NV_8K = "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000082/nvda-20261111.htm";
const NV_CEO = "https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition";
const NV_PROXY = "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000036/nvda-20260512.htm";
const NV_INDEP = "https://nvidianews.nvidia.com/news/statement-from-the-independent-members-of-the-nvidia-board";
const NV_MEMO = "https://nvidianews.nvidia.com/news/a-message-to-our-company";
const HFAC = "https://foreignaffairs.house.gov/news/press-releases/chairmen-mast-moolenaar-and-crawford-request-jensen-huang-brief-congress-on-link-to-chinese-intelligence-asset";
const YF_NVDA = "https://finance.yahoo.com/quote/NVDA/history/";
const YF_LIVE = "https://finance.yahoo.com/technology/live/nvidia-live-updates-stock-tanks-after-new-affair-allegations-board-reportedly-preparing-to-oust-jensen-huang-130056785.html";

/* Sources: CoreWeave */
const CW_10Q = "https://www.sec.gov/Archives/edgar/data/1769628/000176962826000465/crwv-20260930.htm";
const CW_Q3 = "https://www.sec.gov/Archives/edgar/data/1769628/000176962826000461/coreweave3q26earningspress.htm";
const CW_Q2 = "https://www.sec.gov/Archives/edgar/data/1769628/000176962826000362/coreweave2q26earningspress.htm";
const YF_CRWV = "https://finance.yahoo.com/quote/CRWV/history/";

/* Sources: Infineon */
const IFX_NOV = "https://www.infineon.com/press-release/2026/infpr202611-025";
const IFX_NOV_PDF = "https://www.infineon.com/row/public/documents/corporate/press/2026/infpr202611-025e.pdf";
const IFX_FEB = "https://www.infineon.com/press-release/2026/infxx202602-042";
const IFX_MAY = "https://www.infineon.com/press-release/2026/infxx202605-082";
const IFX_AUG = "https://www.infineon.com/row/public/documents/corporate/press/2026/infpr202608-125e.pdf";

/* Sources: perpetuals */
const CBOE_LTR = "https://cdn.cboe.com/resources/government_relations/Cboe-Response-to-CFTC-Request-for-Comment-on-the-Trading-and-Clearing-of-Perpetual-Style-Derivatives.pdf";
const CFTC_SELIG = "https://www.cftc.gov/PressRoom/SpeechesTestimony/seligstatement110326";
const CLEARY = "https://www.clearygottlieb.com/news-and-insights/publication-listing/equity-perpetuals-and-kpi-contracts-regulatory-approvals-and-legal-challenge";
const FM = "https://www.financemagnates.com/forex/regulation/sec-backs-cftc-in-court-fight-over-perpetual-futures-on-us-stocks/";
const LEDGER = "https://www.ledgerinsights.com/cftc-turns-cboes-own-words-against-it-in-stock-perpetuals-lawsuit/";

/* Sources: RAISE Act */
const TC_RAISE = "https://techcrunch.com/2026/11/10/openai-anthropic-face-new-oversight-as-new-yorks-ai-safety-law-takes-effect";
const DFS_SEP = "https://www.dfs.ny.gov/reports_and_publications/press_releases/pr20260921";
const DPW = "https://www.davispolk.com/insights/client-update/new-york-joins-california-regulating-development-frontier-ai-models";
const CA_SB53 = "https://www.gov.ca.gov/2025/09/29/governor-newsom-signs-sb-53-advancing-californias-world-leading-artificial-intelligence-industry/";

/* ---------- Lead tables ---------- */
const STAKE_TABLE = table(
  ["Price point", "Nvidia share price", "Value of Huang's 870.6m shares"],
  [
    ["Record close, Tue 6 Oct 2026", "$239.24", "$208.3bn"],
    ["Close, Fri 6 Nov, before his staff memo", "$186.64", "$162.5bn"],
    ["Close, Wed 11 Nov, the day the board acted", "$173.73", "$151.3bn"],
    ["Pre-market, Thu 12 Nov, 9:01 a.m. EST", "$155.40", "$135.3bn"]
  ],
  `Komposite's arithmetic: share prices from ${L(YF_NVDA, "Yahoo Finance's daily history")} and ${L(YF_LIVE, "its live coverage")}, multiplied by the 870,604,104 shares the ${L(NV_PROXY, "2026 proxy statement")} attributes to Huang at the 27 April record date. That total includes 58,683,830 shares held by the Huang family foundation, in which he and his wife say they have no pecuniary interest. Holdings may have changed since April.`
);

const HOLDERS_TABLE = table(
  ["Holder named in the proxy footnote", "Shares", "Share of Huang's total"],
  [
    ["Jen-Hsun and Lori Huang, as co-trustees", "528,531,547", "60.7%"],
    ["The Huang Irrevocable Remainder Trust", "109,040,602", "12.5%"],
    ["TARG LLCs (several)", "73,265,334", "8.4%"],
    ["Jen-Hsun & Lori Huang Foundation", "58,683,830", "6.7%"],
    ["The Huang 2012 Irrevocable Trust", "31,421,011", "3.6%"],
    ["Other holdings in the footnote (by our subtraction)", "69,661,780", "8.0%"],
    ["Total beneficially owned (3.58% of Nvidia)", "870,604,104", "100%"]
  ],
  `Source: the beneficial-ownership table and footnote in ${L(NV_PROXY, "Nvidia's 2026 proxy statement")}. The last-but-one row is the total less the lines listed above it; percentages are Komposite's.`
);

const DAYS_TABLE = table(
  ["Date", "Event", "Days after the memo"],
  [
    ["Thu 5 Nov", `Three House committee chairmen ask Huang to a closed briefing on 18 November and to reply ${L(HFAC, "by 11 November")}`, "-3"],
    ["Sun 8 Nov", `Huang tells staff "${L(NV_MEMO, "I was unfaithful to my wife")}"; the board says independent directors will investigate`, "0"],
    ["Mon 9 Nov", "First securities class action filed in San Jose; shares close down 4.3 per cent", "1"],
    ["Tue 10 Nov", `Independent directors ${L(NV_INDEP, "retain Joon H. Kim and Wachtell, Lipton, Rosen &amp; Katz")}; shares close down 5.5 per cent`, "2"],
    ["Wed 11 Nov", "Shares close up 2.9 per cent; the board accepts Huang's resignation and makes Harvey Jones chair", "3"],
    ["Thu 12 Nov", "8-K and press release published; shares indicated 10.6 per cent lower before the open", "4"],
    ["Tue 17 Nov", "Third-quarter results and call, unchanged", "9"],
    ["Wed 18 Nov", "Date the committees set for the closed briefing", "10"]
  ],
  "Komposite's timeline from Nvidia's releases and filings, the committees' release and Yahoo Finance prices. Day counts by Komposite."
);

/* ---------- CoreWeave table ---------- */
const CW_TABLE = table(
  ["$m unless stated", "Q2 2026", "Q3 2026", "Change"],
  [
    ["Revenue", "2,575", "3,661", "+42%"],
    ["Adjusted operating income", "128", "379", "+196%"],
    ["Net loss", "(626)", "(709)", "+13%"],
    ["Interest expense, net", "640", "846", "+32%"],
    ["Interest as a share of revenue", "24.9%", "23.1%", "-1.8 points"],
    ["Capital expenditure", "6,422", "9,441", "+47%"],
    ["Debt, recourse and non-recourse", "35,068", "46,873", "+11,805"],
    ["Cash and equivalents", "5,524", "4,122", "-1,402"],
    ["Revenue backlog", "~$104bn", "~$132.5bn", "+$28.5bn"],
    ["Active power", "1.5GW", "more than 1.7GW", "more than +200MW"],
    ["Contracted power", "~3.7GW", "more than 4.6GW", "more than +900MW"]
  ],
  `Komposite's compilation from CoreWeave's ${L(CW_Q2, "second-quarter")} and ${L(CW_Q3, "third-quarter")} results releases filed with the SEC. Debt is the sum of current and non-current carrying amounts; changes and ratios are Komposite's arithmetic.`
);

const CW_CUST = table(
  ["Customer (as labelled in the 10-Q)", "Q3 2025", "Q3 2026", "Nine months 2025", "Nine months 2026", "Receivables, 30 Sep 2026"],
  [
    ["Customer A", "67%", "24%", "70%", "33%", "18%"],
    ["Customer B", "under 10%", "30%", "under 10%", "26%", "33%"],
    ["Customer C", "under 10%", "under 10%", "under 10%", "under 10%", "12%"],
    ["Customer D", "under 10%", "under 10%", "under 10%", "under 10%", "14%"]
  ],
  `Source: ${L(CW_10Q, "CoreWeave's 10-Q for the third quarter")}, concentration note. CoreWeave does not name the customers and says a letter may refer to different customers in different periods.`
);

/* ---------- Infineon tables ---------- */
const IFX_TARGETS = table(
  ["Release", "Data-centre power supplies, FY2026", "Same, FY2027", "Other AI detail"],
  [
    [`${L(IFX_FEB, "Wed 4 Feb 2026")}`, "around €1.5bn", "around €2.5bn", "Investment plan raised to about €2.7bn, from €2.2bn"],
    [`${L(IFX_MAY, "Wed 6 May 2026")}`, "around €1.5bn", "around €2.5bn", "Targets held \"notwithstanding a weaker currency\""],
    [`${L(IFX_AUG, "Wed 5 Aug 2026")}`, "no new figure", "no new figure", "Capacity reservation agreements worth \"a high single-digit billion euro amount\", with prepayments"],
    [`${L(IFX_NOV, "Tue 10 Nov 2026")}`, "not disclosed", "close to €4bn", "FY2027 investments €3.0bn to €3.5bn"]
  ],
  "Komposite's compilation from Infineon's quarterly press releases. Infineon's fiscal year ends on 30 September. Euro figures as the company states them."
);

const IFX_PSS = table(
  ["Power & Sensor Systems, FY2026", "Revenue", "Segment result", "Margin"],
  [
    ["Q1 (Oct-Dec 2025)", "€1,171m", "€204m", "17.4%"],
    ["Q2 (Jan-Mar 2026)", "€1,260m", "€257m", "20.4%"],
    ["Q3 (Apr-Jun 2026)", "€1,442m", "€359m", "24.9%"],
    ["Q4 (Jul-Sep 2026)", "€1,796m", "€554m", "30.8%"],
    ["Full year (FY2025 in brackets)", "€5,670m (€4,291m)", "€1,374m (€674m)", "24.2% (15.7%)"]
  ],
  `Komposite's compilation from Infineon's four FY2026 results releases; the full-year line is from the ${L(IFX_NOV_PDF, "10 November release")}. Quarterly figures sum to the full year within rounding.`
);

/* ---------- Perpetuals table ---------- */
const PERP_TIMELINE = table(
  ["Date", "Step", "Days"],
  [
    ["Wed 21 May 2025", `Cboe tells the CFTC the listing exchange decides whether a perpetual is a future or a swap (${L(CBOE_LTR, "letter")})`, "n/a"],
    ["Fri 18 Sep 2026", "Exchanges file single-stock perpetual contracts with the CFTC", "0"],
    ["Mon 2 Nov 2026", "The CFTC's 45-day review lapses without objection; the contracts are deemed approved", "45"],
    ["Tue 3 Nov 2026", `${L(CFTC_SELIG, "Chairman Selig's statement")}; the Capital Markets Alliance sues in Manhattan; temporary restraining order refused the same day`, "46"],
    ["Thu 5 Nov 2026", "Kalshi starts trading contracts on about 50 US stocks and ETFs", "48"],
    ["Mon 9 Nov 2026", "The SEC files its brief", "52"],
    ["Tue 10 Nov 2026", "Briefing on the preliminary injunction closes", "53"],
    ["Wed 25 Nov 2026", "The CFTC's answer to the complaint is due", "68"],
    ["Thu 31 Dec 2026", "Reported deadline for the SEC to decide whether to overturn the exchanges' rules", "104"]
  ],
  `Komposite's timeline from the ${L(CLEARY, "Cleary Gottlieb summary of the docket")}, ${L(FM, "Finance Magnates")} and the CFTC and Cboe documents linked. The 31 December date was reported by Ledger Insights and has not been confirmed by the SEC. Day counts from the 18 September filing are Komposite's.`
);

/* ---------- RAISE tables ---------- */
const RAISE_TABLE = table(
  ["", "New York RAISE Act (as amended)", "California SB 53"],
  [
    ["Signed", "19 Dec 2025; amended version 27 Mar 2026", "29 Sep 2025"],
    ["Frontier model", "Trained with more than 10<sup>26</sup> operations, counting fine-tuning", "Same compute threshold"],
    ["Large developer", "More than $500m of revenue in the prior year", "Same revenue threshold"],
    ["Critical incident report", "72 hours; 24 hours if there is an imminent risk of death or serious injury", "15 days"],
    ["Who receives it", "DIGIT, a new office in the Department of Financial Services", "California's Office of Emergency Services"],
    ["Maximum penalty", "$1m for a first violation, $3m after that (Attorney General); $1,000 a day for disclosure or fee failures (DFS)", "Up to $1m a violation (Attorney General)"],
    ["Registration and fees", "Disclosure statement before operating, renewed every two years; share of the office's costs", "None"],
    ["Whistleblower protections", "Not included", "Included"],
    ["Rulemaking", "DFS may write rules after notice and comment", "Not comparable"]
  ],
  `Komposite's side-by-side from ${L(DPW, "Davis Polk's analysis of the amended act")}, ${L(DFS_SEP, "the Department of Financial Services")} and ${L(CA_SB53, "the California governor's office")}.`
);

const RAISE_DAYS = table(
  ["Date", "Step", "Days"],
  [
    ["Fri 19 Dec 2025", "Governor Hochul signs the RAISE Act, on condition that it is amended", "0"],
    ["Fri 27 Mar 2026", "Amended act signed", "98"],
    ["Mon 21 Sep 2026", "DFS names DIGIT to run it and says registration starts in November", "276"],
    ["Tue 10 Nov 2026", "Registration portal opens", "326"],
    ["Fri 1 Jan 2027", "Act takes effect; registration deadline", "378"]
  ],
  "Komposite's day count from the dates in the sources linked in this article."
);

export default [

/* ---------- 13:20Z POLICY ---------- */
PO({ slug: "new-york-opens-its-register-for-frontier-ai-developers", kick: "AI Safety",
  headline: "New York opens its register for frontier AI developers",
  dek: "Developers of the largest AI models have 52 days to register with New York before the RAISE Act takes effect on 1 January. Our side-by-side with California's law shows where New York is stricter: a 72-hour clock and a $3m penalty.",
  metaDesc: "New York opened RAISE Act registration for frontier AI developers on 10 November 2026; they must sign up by 1 January 2027. How it compares with California.",
  author: "jonathan-bright", date: "2026-11-12T13:20:00Z",
  capt: "The New York State Capitol in Albany, seen across East Capitol Park, in a file photograph from 2017.",
  tags: [
    { name: "AI Governance", slug: "ai-governance" },
    { name: "Regulation", slug: "regulation" },
    { name: "Policy", slug: "policy" }
  ],
  related: [
    R("/policy/new-york-city-wants-a-validator-for-every-model/", "AI Safety"),
    R("/ai/canberra-wants-a-regulator-after-openais-agent-got-into-medicare-data/", "AI Safety"),
    R("/ai/a-finra-for-the-frontier/", "AI Safety")
  ],
  body: [
    `New York opened a registration portal on Tuesday for the largest developers of frontier artificial-intelligence models, which must sign up by 1 January 2027, when the state's Responsible AI Safety and Education (RAISE) Act takes effect, ${L(TC_RAISE, "TechCrunch reported")}. OpenAI and Anthropic are among the companies expected to register.`,
    `The law applies to developers with more than $500m of annual revenue whose models were trained with more than 10<sup>26</sup> computing operations. From 1 January they must publish a safety framework, report a critical safety incident to the state within 72 hours, and pay fines of up to $1m for a first violation and $3m for later ones. Registration opened 52 days before the deadline, by our count.`,
    `The registrations go to the Office of Digital Innovation, Governance, Integrity and Trust, or DIGIT, a unit the state placed inside the Department of Financial Services, the regulator of New York's banks and insurers. ${L(DFS_SEP, "DFS said in September")} that registration would start in November and named Marc Gilman, DIGIT's first full-time hire, as deputy director for the act. "DFS is proud to lead the implementation of the RAISE Act for New York," Kaitlin Asrow, the acting superintendent, said then. On Tuesday the state also launched the New York Center for AI Responsibility and Research at SUNY Binghamton, which TechCrunch said will evaluate advanced systems and help DIGIT review the companies' frameworks.`,
    `<h2>Who has to register?</h2>`,
    `Companies with more than $500m of revenue in the previous calendar year that train or operate a frontier model. The threshold counts the compute used in original training plus later fine-tuning, according to ${L(DPW, "an analysis of the amended act by the law firm Davis Polk")}. A large developer files a disclosure statement with DFS before developing, deploying or operating such a model, renews it every two years and pays a share of the office's running costs. The revenue line is not close for the best-known labs. Anthropic's listing documents showed <a href="/markets/anthropic-files-with-16-3bn-of-revenue-and-an-80-7bn-loss/">first-half revenue of $16.3bn</a>.`,
    `A state spokesperson declined to say what the state would do to a covered company that did not register, according to TechCrunch. The act gives DFS its own penalty of $1,000 a day for failures to file disclosures or pay fees, separate from the Attorney General's power to seek the larger fines, and there is no private right of action.`,
    `<h2>How does it compare with California's law?</h2>`,
    `New York copied California's thresholds and went further on speed and penalties. California's Transparency in Frontier Artificial Intelligence Act, SB 53, signed by Governor Gavin Newsom in September 2025, uses the same compute and revenue tests. Its incident clock runs for 15 days. New York's runs for 72 hours, five times faster by our arithmetic, and 24 hours where there is an imminent risk of death or serious injury. New York's cap for a repeat violation is three times California's.`,
    RAISE_TABLE,
    `The comparison runs the other way on whistleblowers. ${L(CA_SB53, "California's law protects employees")} who disclose significant health and safety risks; New York's amended act does not, the Davis Polk analysis notes. California also has no registration step. Its law sends incident reports to the Office of Emergency Services and leaves enforcement to the Attorney General.`,
    `<h2>Why did it take a year?</h2>`,
    `Because the law was signed before it was finished. Governor Kathy Hochul signed the original bill on 19 December 2025 on condition that the legislature amend it, and signed the amended version 98 days later. The register opened 228 days after that.`,
    RAISE_DAYS,
    `Hochul has presented the act as a check on the industry rather than a brake on it. "Tech moguls tell us that their vision for AI is inevitable," she said at a press briefing on Tuesday, TechCrunch reported. The state has gone further than New York City, whose council in October heard a proposal for <a href="/policy/new-york-city-wants-a-validator-for-every-model/">a validator for every model</a>, and it already has an operating office, while Australia said this week only that it <a href="/ai/canberra-wants-a-regulator-after-openais-agent-got-into-medicare-data/">plans a frontier AI regulator</a>.`,
    `The next date is 1 January, when the act takes effect and the first disclosure statements are due. DFS can also write rules under the act, after notice and comment, which would fill in what the statute and the portal leave open.`
  ]
}),

/* ---------- 13:40Z FINTECH ---------- */
FI({ slug: "forty-five-days-of-silence-then-a-lawsuit-over-stock-perps", kick: "Derivatives",
  headline: "Forty-five days of silence, then a lawsuit over stock perps",
  dek: "The CFTC let perpetual futures on US stocks take effect by not objecting for 45 days. A group backed by Cboe and Citadel Securities sued the next day. Briefing closed on Tuesday. Our timeline, and what Cboe told the CFTC in 2025.",
  metaDesc: "Perpetual futures on US stocks took effect on 3 November 2026 after a 45-day CFTC review lapsed. A Cboe-backed group's suit was fully briefed on 10 November.",
  author: "elena-vasquez", date: "2026-11-12T13:40:00Z",
  capt: "The New York Stock Exchange on Wall Street, draped in a US flag, in a file photograph from 2012.",
  tags: [
    { name: "Market Structure", slug: "market-structure" },
    { name: "Regulation", slug: "regulation" },
    { name: "Trading", slug: "trading" }
  ],
  related: [
    R("/crypto/perpetual-futures-come-for-the-stocks/", "Derivatives"),
    R("/crypto/the-cftc-says-cme-cannot-have-it-both-ways/", "Derivatives"),
    R("/crypto/offshore-perps-an-onshore-operator/", "Derivatives")
  ],
  body: [
    `"Ultimately, it is up to the exchange listing any perpetual derivatives product to determine whether a new contract is to be listed as a future or swap." Cboe Global Markets wrote that sentence to the Commodity Futures Trading Commission in ${L(CBOE_LTR, "a letter of 21 May 2025")}. Eighteen months later Cboe is a member of the trade group suing the CFTC for letting exchanges do roughly that with perpetual futures on individual US stocks.`,
    `The Capital Markets Alliance Association, whose members include Cboe and Citadel Securities, asked a federal court in Manhattan on 3 November 2026 to set aside the CFTC's approval of the contracts, which took effect that day. Briefing on its request for a preliminary injunction closed on Tuesday 10 November. The Securities and Exchange Commission filed a brief on Monday that disputed the challengers' account of the dispute.`,
    `A perpetual future is a futures contract with no expiry, or a very distant one, kept close to the price of the underlying asset by periodic funding payments between the two sides. The products grew up on offshore crypto exchanges. Komposite reported in September that <a href="/crypto/perpetual-futures-come-for-the-stocks/">Kalshi, Coinbase and Bitnomial had filed</a> to offer them on single US stocks.`,
    `<h2>How did they get approved?</h2>`,
    `By lapse. The exchanges self-certified the contracts with the CFTC on 18 September, and when the agency's 45-day review ended on 2 November without objection they were deemed approved, according to ${L(CLEARY, "a summary by the law firm Cleary Gottlieb")}. The next day Chairman Michael Selig ${L(CFTC_SELIG, "said in a statement")} that the contracts were approved "pursuant to Commission Regulation 40.3" as security futures, the category Congress put under joint CFTC and SEC oversight in 2000. "The CFTC and SEC have turned the page on that era," he said, referring to an era of regulatory uncertainty.`,
    PERP_TIMELINE,
    `Five exchanges registered with the SEC so they could list security futures, by our count of the Cleary summary: Coinbase Derivatives, KalshiEX, Bitnomial Exchange, Nadex and ICE Futures U.S. Three of them, Coinbase Derivatives, Kalshi and Bitnomial, applied for more than 100 single-stock contracts between them, ${L(FM, "Finance Magnates reported")}. Kalshi started trading contracts on about 50 US stocks and exchange-traded funds on 5 November. Cboe told the court it counted about $375m of notional volume in 24 hours on the second day, according to the same report.`,
    `<h2>What is the case about?</h2>`,
    `Whether a contract with no delivery date can be a future at all. The alliance says the products are security-based swaps, which only the SEC can approve, because a security future requires delivery of a security at a future date. Judge Valerie Caproni, who heard the emergency application, found the alliance "is likely to succeed on the merits of its claim that the CFTC lacks statutory authority", in the words of her order as quoted by Cleary. She wrote that the CFTC's actions "seem to represent a major disruption to the equities market", Finance Magnates reported. She still refused the restraining order on 3 November, because the harm described was possible rather than likely. The case has since moved to Judge Lorna Schofield.`,
    `The CFTC's reply leans on Cboe's own record. Its brief calls the alliance a "sham entity" created for the case, ${L(LEDGER, "Ledger Insights reported")}, and points to Cboe's bitcoin and ether "continuous futures", which run for up to ten years with daily funding payments. The 2025 letter supports part of that argument. It defined a perpetual future as a contract that has no expiration date or a long one, at least five years and "typically understood to be 10 or more", with a mechanism that keeps its price converging on spot. It also said Cboe was writing about futures "on financial instruments, which could include equities, indexes and digital assets."`,
    `In fairness to Cboe, the letter answered a CFTC question about futures in general. It did not address the line between security futures and security-based swaps on which the alliance's case turns, and it predates the single-stock filings by more than a year. The alliance describes itself as a trade association of financial institutions, according to Cleary; the CFTC disputes that it is a genuine membership group.`,
    `The SEC's brief takes neither side on the central question. It disputed the alliance's portrayal "of a CFTC gone rogue, and an SEC gone missing", according to Finance Magnates, but did not say whether the contracts are futures or swaps, and noted that the exchanges' rules remain under its review. Ledger Insights has reported that the SEC has until 31 December to decide whether to overturn them. Komposite has not confirmed that date.`,
    `Why it matters: the same question is now in two courts. CME Group's challenge to the CFTC's approval of crypto perpetuals, in which the agency argued <a href="/crypto/the-cftc-says-cme-cannot-have-it-both-ways/">CME could not have it both ways</a>, raises a related question about what a perpetual contract is. The next fixed date in Manhattan is 25 November, when the CFTC's answer to the complaint is due, 22 days after the suit was filed. Judge Schofield has yet to set a date for argument on the injunction.`
  ]
}),

/* ---------- 14:00Z TECHNOLOGY ---------- */
TE({ slug: "infineon-now-expects-close-to-4bn-from-ai-power-supplies", kick: "Semiconductors",
  headline: "Infineon now expects close to €4bn from AI power supplies",
  dek: "Infineon told investors in February that power chips for AI data centres would bring in about €2.5bn in its 2027 fiscal year. On Tuesday it said close to €4bn. Our compilation of its targets, and of the segment that now earns most of its profit growth.",
  metaDesc: "Infineon raised its FY2027 target for AI data-centre power supplies to close to €4bn on 10 November 2026, from about €2.5bn in February. Our table.",
  author: "tom-kessler", date: "2026-11-12T14:00:00Z",
  capt: "Power MOSFET transistors in a range of packages laid out on a white surface, in a file photograph.",
  tags: [
    { name: "Semiconductors", slug: "semiconductors" },
    { name: "Data Centers", slug: "data-centers" },
    { name: "Energy for Computing", slug: "energy-for-computing" }
  ],
  related: [
    R("/business/softbank-writes-off-3-7bn-of-9-5bn-paid-for-power-gear/", "AI Infrastructure"),
    R("/technology/power-constraints-shape-computing/", "Energy"),
    R("/ai/semiconductor-supply-data-center-demand/", "Semiconductors")
  ],
  body: [
    `In February, Infineon Technologies said its chips for powering AI data centres would bring in about €2.5bn in the fiscal year to September 2027. In May it repeated the figure. On Tuesday 10 November the German company put it at close to €4bn, ${L(IFX_NOV, "in its results for the 2026 fiscal year")}.`,
    `Infineon, the Munich-area maker of power semiconductors, expects revenue of about €20bn in its 2027 fiscal year, up more than 20 per cent, with sales of power-supply chips for data centres rising to close to €4bn. That target is 60 per cent above the €2.5bn it gave in February, by our arithmetic, and would be about a fifth of group revenue.`,
    `These are chips that convert and regulate electricity for the servers that run AI models. Infineon reports them inside a segment it called Power &amp; Sensor Systems until a reorganisation on 1 July, after which it reports Automotive, Edge Systems and Power Systems. The segment that holds the data-centre business is where the year's profit growth came from.`,
    `<h2>How has the target moved?</h2>`,
    `Upward once, sharply, after nine months of standing still. The €1.5bn and €2.5bn figures first appeared in ${L(IFX_FEB, "the February release")}, when Infineon also raised its investment plan for the year to about €2.7bn, from €2.2bn, to build capacity for these products. In August it did not update the revenue figures but disclosed that several AI customers had signed or were negotiating multi-year capacity reservation agreements worth "a high single-digit billion euro amount", with some prepayments. The new target arrived 279 days after the first, by our count.`,
    IFX_TARGETS,
    `The November release does not say how much data-centre revenue Infineon actually booked in the year just ended, and it does not update the value of the capacity agreements. If the 2026 figure landed near the €1.5bn guided in May, the step to close to €4bn would supply about two-thirds of the roughly €3.65bn of extra group revenue Infineon is forecasting, by our arithmetic. That is an inference from the company's own targets, not a figure it has published.`,
    `<h2>Where did the profit come from?</h2>`,
    `Almost entirely from power and sensors. Group revenue rose 12 per cent to €16.353bn in the year and the segment result, Infineon's main profit measure, rose €663m to €3.223bn. Power &amp; Sensor Systems alone added €700m, to €1,374m, so the rest of the group earned slightly less than a year earlier, by our subtraction. The segment's margin rose in every quarter, from 17.4 per cent to 30.8 per cent.`,
    IFX_PSS,
    `The other segments were mixed. Automotive, still the largest by revenue at €7,672m, grew 4 per cent and its result rose 2 per cent. Green Industrial Power grew revenue 10 per cent but its result fell 9 per cent. Connected Secure Systems shrank on both counts.`,
    `"Infineon closed the fiscal year 2026 with another record quarter and enters the new fiscal year with continued strong momentum," Jochen Hanebeck, the chief executive, said. He listed data-centre power supplies first among the businesses expected to drive 2027, ahead of grid infrastructure, electric vehicles and software-defined vehicles.`,
    `The company plans to spend €3.0bn to €3.5bn in fiscal 2027, depending on demand, on its fourth manufacturing building in Dresden, silicon carbide capacity in Kulim, Malaysia, and the start of gallium nitride production on 300-millimetre wafers in Villach, Austria. The plan assumes a euro at $1.15. The power the chips manage is itself scarce: SoftBank this week <a href="/business/softbank-writes-off-3-7bn-of-9-5bn-paid-for-power-gear/">wrote off $3.7bn of prepayments for generating equipment</a>, and we have reported how <a href="/technology/power-constraints-shape-computing/">power availability has become the constraint</a> on building computing capacity.`,
    `The first test of the new target is the quarter to December, for which Infineon guides revenue of about €4.6bn and a segment margin of about 23 per cent, slightly below the fourth quarter's 23.8 per cent. It proposes a dividend of €0.38 a share, up €0.03, for approval at its annual meeting in February.`
  ]
}),

/* ---------- 14:20Z MARKETS ---------- */
MK({ slug: "coreweaves-biggest-customer-is-30-per-cent-not-67", kick: "AI Infrastructure",
  headline: "CoreWeave's biggest customer is 30 per cent, not 67",
  dek: "A year ago one customer paid for two-thirds of CoreWeave's revenue. Its third-quarter filing shows the largest now pays 30 per cent. Our cut of the 10-Q: concentration down, debt up $11.8bn in a quarter, and a backlog that runs to 2033.",
  metaDesc: "CoreWeave's largest customer was 30% of Q3 2026 revenue, against 67% for one customer a year earlier, its 10-Q shows. Revenue rose to $3.66bn.",
  author: "priya-raghavan", date: "2026-11-12T14:20:00Z",
  capt: "Rows of server racks with their rear panels exposed in a data centre at CERN near Geneva, in a file photograph from 2010.",
  tags: [
    { name: "AI Infrastructure", slug: "ai-infrastructure" },
    { name: "Data Centers", slug: "data-centers" },
    { name: "Capital Markets", slug: "capital-markets" }
  ],
  related: [
    R("/markets/the-bonds-say-fifteen-the-backlog-says-104bn/", "Credit"),
    R("/markets/a-microsoft-redesign-that-earns-iren-no-delay-credits/", "AI Infrastructure"),
    R("/markets/nvidia-sheds-428bn-as-its-rivals-add-291bn/", "Semiconductors")
  ],
  body: [
    `Customer A accounted for 67 per cent of CoreWeave's revenue in the third quarter of 2025. In the third quarter of 2026 it accounted for 24 per cent, and a second customer, Customer B, for 30 per cent, according to ${L(CW_10Q, "the quarterly report CoreWeave filed")} with the Securities and Exchange Commission on Thursday 12 November. The filing names neither.`,
    `CoreWeave, which rents out computing capacity for AI work, reported revenue of $3,661m for the three months to 30 September 2026, up from $1,365m a year earlier, ${L(CW_Q3, "in results published on Tuesday 10 November")}. It raised its 2026 revenue forecast to $13.0bn to $13.3bn and put its revenue backlog at about $132.5bn.`,
    `Lower concentration does not mean the first customer shrank. By our multiplication, 24 per cent of this quarter's revenue is about $879m, close to the roughly $915m that 67 per cent represented a year earlier. Customer B paid about $1.1bn. The filing warns that its letters may refer to different customers in different periods, so the comparison assumes Customer A is the same company in both. Most of the growth came from customers that were each below the 10 per cent reporting line a year ago.`,
    CW_CUST,
    `The release lists the names behind some of that growth without saying who is A or B. It reports expanded relationships with OpenAI, Jane Street, Cohere, Perplexity, Hippocratic AI and the Chan Zuckerberg Initiative, and new customers including Canva, Substack, Wayve and Serve Robotics. Receivables tell a similar story: at 30 September, Customer B accounted for 33 per cent of the money owed to CoreWeave and Customer A for 18 per cent, against 68 per cent for Customer A at the end of 2025.`,
    `<h2>What did the growth cost?</h2>`,
    `About $11.8bn of new debt in one quarter, by our addition of the balance-sheet lines. Revenue rose by $1,086m from the second quarter, which Michael Intrator, the chief executive, described as "a breakout quarter for CoreWeave, with revenue increasing by more than $1 billion sequentially". Capital expenditure rose to $9.4bn, 2.6 times revenue, and net interest expense to $846m. The net loss widened to $709m even as adjusted operating income tripled.`,
    CW_TABLE,
    `Interest took a slightly smaller share of revenue than in the second quarter, 23.1 per cent against 24.9 per cent. That may not last: CoreWeave guided fourth-quarter interest expense to $1.05bn to $1.15bn. Its forecast implies fourth-quarter revenue of $4.69bn to $4.99bn, by our subtraction of the $8,314m earned in the first nine months, which is 28 to 36 per cent more than in the third quarter. During the quarter it raised about $4.2bn of convertible notes, set up a programme to sell up to 35 million new shares on the market, and closed a $2.6bn delayed-draw loan. Intrator said he expects about $9bn of customer prepayments and deposits over the next three months.`,
    `<h2>How long is the backlog?</h2>`,
    `Long. The 10-Q puts remaining performance obligations at $132.3bn and says 36 per cent will be recognised in the 24 months to September 2028, 38 per cent in the two years after that, and the rest between months 49 and 86, which reaches into late 2033. By our multiplication, that is about $47.6bn in the first two years, roughly equal to the $46.9bn of debt on the balance sheet at 30 September. Backlog is revenue CoreWeave expects to earn as it delivers capacity, not cash in hand.`,
    `The market liked the quarter for a day. CoreWeave's shares rose 24.7 per cent on Wednesday to $60.77, ${L(YF_CRWV, "according to Yahoo Finance's daily prices")}, and were indicated 14 per cent lower before Thursday's open, the morning Nvidia announced <a href="/ai/huang-resigns-from-nvidia-and-the-8-k-gives-no-reason/">its chief executive's resignation</a>. In October, as Komposite reported, <a href="/markets/the-bonds-say-fifteen-the-backlog-says-104bn/">its bonds yielded close to 15 per cent</a> when the backlog was $104bn. Nvidia and its rivals had already moved sharply on Monday and Tuesday, when <a href="/markets/nvidia-sheds-428bn-as-its-rivals-add-291bn/">Nvidia shed about $428bn of value</a>.`,
    `Why it matters: concentration was the risk lenders priced most heavily into the specialist GPU landlords, and contracts with a few tenants can shift work and cost onto the supplier, as IREN's filing showed when <a href="/markets/a-microsoft-redesign-that-earns-iren-no-delay-credits/">a Microsoft redesign earned it no delay credits</a>. CoreWeave now has two customers each paying between a quarter and a third of its revenue rather than one paying two-thirds. The next numbers to watch are the fourth-quarter interest bill and whether the $9bn of prepayments arrives over the next three months, as Intrator expects.`
  ]
}),

/* ---------- 14:40Z AI (LEAD) ---------- */
AI({ slug: "huang-resigns-from-nvidia-and-the-8-k-gives-no-reason", kick: "Leadership",
  headline: "Huang resigns from Nvidia, and the 8-K gives no reason",
  dek: "Jensen Huang resigned as Nvidia's chief executive and a director on Wednesday, three days after telling staff he had been unfaithful to his wife. Colette Kress is interim chief executive. Our reading of the filing, and what his 870.6m shares are worth now.",
  metaDesc: "Jensen Huang resigned as Nvidia CEO on 11 November 2026; CFO Colette Kress is interim CEO. The 8-K gives no reason. His stake, valued by our arithmetic.",
  author: "dana-whitfield", date: "2026-11-12T14:40:00Z",
  capt: "The landscaped approach to Nvidia's Endeavor building at its headquarters in Santa Clara, California, in a file photograph from 2017.",
  tags: [
    { name: "Semiconductors", slug: "semiconductors" },
    { name: "Corporate Strategy", slug: "corporate-strategy" },
    { name: "Capital Markets", slug: "capital-markets" }
  ],
  related: [
    R("/markets/nvidia-sheds-428bn-as-its-rivals-add-291bn/", "Semiconductors"),
    R("/ai/nvidia-board-opens-inquiry-394-days-after-megaspeed/", "Semiconductors"),
    R("/policy/megaspeeds-paper-trail-from-commerce-to-the-prosecutors/", "Export Controls")
  ],
  body: [
    `Item 5.02 of ${L(NV_8K, "the 8-K that Nvidia filed on Thursday 12 November")} is four short paragraphs. It records that on Wednesday the board "accepted the resignation of Jen-Hsun Huang" as president, chief executive officer and director, effective immediately, and appointed Colette Kress, the chief financial officer, as interim chief executive. It does not say why he resigned.`,
    `Jensen Huang, Nvidia's founding chief executive and a director since 1993, resigned on Wednesday 11 November 2026, three days after telling employees he had been unfaithful to his wife. Kress, 59, will run the company while the board searches for a successor, and Harvey C. Jones, a director since 1993, becomes Nvidia's first chair.`,
    `${L(NV_CEO, "Nvidia's announcement")} adds little to the filing. The board will consider internal and external candidates, and Kress keeps the finance job in the meantime. Jones, 73, a former chief executive and executive chairman of the chip-design software company Synopsys, said the board has "full confidence in Colette and the leadership team." Kress said: "Our focus remains on serving our customers, partners, developers and shareholders." Third-quarter results will be published as scheduled on Tuesday 17 November, with a call at 2 p.m. Pacific time.`,
    `<h2>What does the filing leave out?</h2>`,
    `Most of what investors usually look for in a chief executive's departure. The 8-K does not describe a disagreement or deny one. It mentions no separation agreement or severance, says nothing about Huang's unvested share awards, and gives no figure for Kress's pay as interim chief executive. It does not refer to the inquiry that the independent directors ${L(NV_INDEP, "said on Tuesday")} they had hired Joon H. Kim, a former acting US Attorney for the Southern District of New York, and the law firm Wachtell, Lipton, Rosen &amp; Katz to conduct. Nor does the press release.`,
    `${L(NV_PROXY, "Nvidia's 2026 proxy statement")} gives some context for the gaps. Under its "What We Don't Do" heading, the company says it does not give executive officers special change-in-control benefits. Huang's pay for fiscal 2026 totalled $36.3m, of which $24.8m was in share awards: two grants of performance share units in March 2025, each with a target of 119,607 shares. Another $4.0m, or 10.9 per cent of the total by our division, was spent on his security. The parts of the proxy that set out what happens to unvested awards when an executive leaves were not available to us in full, and the 8-K does not say. A later filing may.`,
    `<h2>How much of Nvidia does Huang own?</h2>`,
    `About 3.58 per cent. The proxy attributes 870,604,104 shares to him at its 27 April record date, most of them through family trusts. At Wednesday's close of $173.73 they were worth $151.3bn, by our multiplication. At the price indicated before Thursday's open they were worth about $135.3bn, $73.0bn less than at Nvidia's record close on 6 October.`,
    STAKE_TABLE,
    HOLDERS_TABLE,
    `None of the documents published on Thursday says what Huang intends to do with the shares. The figures above are the proxy's count from April, and any shares sold or given away since then would reduce them.`,
    `<h2>How fast did it happen?</h2>`,
    `Four days from the memo to the filing. Huang told staff on Sunday 8 November that he had been unfaithful to his wife, and the board said that day that independent directors would investigate. Nvidia's shares lost 9.5 per cent over the next two trading days, as Komposite reported when <a href="/markets/nvidia-sheds-428bn-as-its-rivals-add-291bn/">the company shed about $428bn of value</a>. On Wednesday the Wall Street Journal reported that the board was meeting that night to decide his future, according to ${L(YF_LIVE, "Yahoo Finance's live coverage")}. The shares had closed 2.9 per cent higher.`,
    DAYS_TABLE,
    `Before the open on Thursday the shares were indicated at $155.40, 10.6 per cent below Wednesday's close, ${L(YF_NVDA, "according to Yahoo Finance")}. At that price Nvidia would be worth about $3.75tn on the 24.1bn shares on its last 10-Q cover, by our arithmetic, against about $5.77tn at the October record. "What matters for the stock from here is less whether a change occurs than how it is executed," Ruben Roy, an analyst at Stifel, said, according to Yahoo Finance.`,
    `Kress has been chief financial officer since 2013, and the proxy put her target pay for fiscal 2026 at $16.0m. She will present results on Tuesday as interim chief executive and finance chief at once. The board's choice of Jones, who has sat on it since 1993, as its first chair means the search for Huang's successor will be run by a board that, for the first time, has a chair.`,
    `Why it matters: Nvidia's next week was already crowded. Huang had until Wednesday to answer three House committee chairmen who ${L(HFAC, "asked him to a closed briefing")} on 18 November about his dealings with Alice Huang of Megaspeed, the subject of the <a href="/ai/nvidia-board-opens-inquiry-394-days-after-megaspeed/">board inquiry opened 394 days after Megaspeed first surfaced</a> and of <a href="/policy/megaspeeds-paper-trail-from-commerce-to-the-prosecutors/">a paper trail running from Commerce to the prosecutors</a>. Nvidia has not said whether he, or anyone else from the company, will attend. The results on 17 November will be the first under a chief executive other than its founder.`
  ]
}),

];
