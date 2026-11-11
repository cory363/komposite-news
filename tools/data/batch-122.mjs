/*
Komposite News, batch 122: Wednesday 11 November 2026, round 41. One lead + 4 stories, each with its own research layer.
tools/data/lead.json pins the new lead (Nvidia's two-day fall); the round-40 Anthropic lead moves down the normal way.
Brave was unavailable, so leads came from WebSearch, SEC EDGAR, the SEC's own releases, company IR sites and the day's
reader-trend signal (research only, never cited). r41-claims.md checked before writing and before commit. The Nvidia story is
Komposite's alone this round. No fact in this batch rests on The New York Times; CNBC's reference to it was not used.

---------- 14:00Z MARKETS (LEAD, OUR RESEARCH): "Nvidia sheds $428bn as its rivals add $291bn" (priya-raghavan, house byline) ----------
SOURCES READ:
- Yahoo Finance historical prices, NVDA, AMD and AVGO, read 11 Nov 2026 (daily closes): NVDA 6 Nov $186.64, 9 Nov $178.67
  (vol 462,719,300), 10 Nov $168.89 (vol 426,599,700); 2-6 Nov volumes 119.3m, 91.9m, 149.0m, 306.1m, 180.2m. AMD 6 Nov $449.04,
  9 Nov $508.58, 10 Nov $515.21. AVGO 6 Nov $293.69, 9 Nov $319.48, 10 Nov $331.98 (AVGO re-checked with OHLC).
- SEC EDGAR XBRL, dei:EntityCommonStockSharesOutstanding (read): NVIDIA 24,100,000,000 at 21 Aug 2026 (10-Q filed 26 Aug; cover
  page read: "outstanding as of August 21, 2026, was 24.1 billion"); AMD 1,640,087,251 at 28 Oct 2026 (10-Q filed 4 Nov);
  Broadcom 4,773,629,865 at 28 Aug 2026 (10-Q filed 10 Sep).
- CNBC, April Roach, "Nvidia shares fall a second day...", 10 Nov 2026 04:14 EST, updated 17:08 EST (read): Monday "more than 4%";
  Tuesday -5.47%; briefly below $4tn intraday, closed above; Trump: FBI investigating, "I think that he'll be in good shape.";
  Rosen suit in federal court in San Jose; Dan Ives (Yorkville Ives & Co.) ~15% removal / 85% stays, review of 4-6 weeks will
  "create a clear overhang on the stock."; AMD +1.3% Tue after +13% Mon; Broadcom nearly +4% Tue after "just over 10%" Mon.
- Rosen Law Firm, PR Newswire, 10 Nov 2026 18:46 ET (read): class period "between October 9, 2025 and November 8, 2026, both dates
  inclusive"; lead-plaintiff motions "no later than January 8, 2027"; allegations incl. statements "materially false and/or
  misleading at all relevant times".
- Gizmodo, Tom McKay, 9 Nov 2026 22:30 ET (read): plaintiff Mark Kistenmacher, Rosen; N.D. Cal.; filed Monday; complaint cites
  statements by spokesman John Rizzo and Huang's May 2025 denial of chip diversion; at least four firms announced investigations
  (Schall; Levi & Korsinsky named); ~$193bn Monday loss.
- NVIDIA, "A Message to Our Company", 8 Nov 2026 (read): "I was unfaithful to my wife." "I have fallen short of that
  responsibility." "I support the investigation and will cooperate fully."
- NVIDIA board statement, 8 Nov 2026 (read): "a committee of independent directors", "assisted by outside independent counsel".
- NVIDIA, Q3 FY27 call notice (read for batch 120/121): Tuesday 17 Nov, 2 p.m. PT.
- House Foreign Affairs Committee release, 5 Nov 2026 (read for batch 120): reply by 11 Nov, closed briefing 18 Nov.
OUR ARITHMETIC: Mon 186.64-178.67 = $7.97 (-4.27%); Tue -$9.78 (-5.47%); two days -9.51%. x 24.1bn shares: Mon $192.1bn, Tue
  $235.7bn, total $427.8bn. Values: $4.498tn / $4.306tn / $4.070tn. $4tn threshold = $165.98 a share. AMD +13.26% / +1.30%,
  x 1.640bn = +$97.7bn / +$10.9bn = $108.5bn; AVGO +8.78% / +3.91%, x 4.774bn = +$123.1bn / +$59.7bn = $182.8bn. AMD+AVGO
  $291.3bn = 68.1% of Nvidia's $427.8bn. NVDA two-day average volume 444.7m vs 169.3m over 2-6 Nov (2.6x). Class period 9 Oct
  2025 (Thursday) to 8 Nov 2026 (Sunday) inclusive = 396 days. 9 Nov + 60 days = 8 Jan 2027 (Friday). 10 Nov to 17 Nov = 7.
  Monday: AMD+AVGO +$220.8bn vs NVDA -$192.1bn; Tuesday +$70.6bn vs -$235.7bn. PSLRA 90-day mean so far (178.67+168.89)/2 = $173.78.
HERO: Wikimedia Commons, "NVIDIA H100 (极客湾Geekerwan) 004.png", 极客湾Geekerwan, CC BY 3.0, 14 Jun 2023: four H100 PCIe cards on
  marble, channel logo top left. No people. Not used on any sister site (grep of ~/Sites); Nvidia HQ photo already used in batch 120.

---------- 13:40Z POLICY: "The SEC filed 348 cases, half in the last two months" (jonathan-bright, house byline) ----------
SOURCES READ:
- SEC press release 2026-113, "SEC Announces Enforcement Annual Results for Fiscal Year 2026", 10 Nov 2026 (read): 348 actions,
  "including 235 standalone actions and 113" others; $1.095bn ordered ($752m disgorgement and prejudgment interest, $343m
  penalties); ~$731m returned to more than 250,000 harmed investors; ~26,000 whistleblower tips; more than $158m to 65 individual
  whistleblowers, the most individuals since FY2023; 13 trading suspensions of Asia-based issuers; Western Asset $100m penalty;
  UBS Financial Services $20m; Enforcement Manual updated for the first time since 2017; quotes from Chairman Paul S. Atkins and
  Enforcement Director David Woodcock.
- SEC addendum PDF to release 2026-113 (12 pages, text extracted locally, read in full): Standalone 235, Follow-On APs 47,
  Delinquent Filings 66, Total 348; penalties $343m, disgorgement $752m, total $1,095m, certain offsets $235m, total less offsets
  $860m, distributions $731m; full case list by program area with filing dates.
- SEC press release 2026-34 (FY2025, 7 Apr 2026, read): 456 actions, 303 standalone, 69 follow-on; $17.9bn ordered ($10.8bn
  disgorgement+PJI, $7.2bn penalties); excluding deemed-satisfied amounts and Stanford judgments, $1.4bn + $1.3bn; ~$262m
  distributed; ~$60m to 48 whistleblowers; 53,753 tips, complaints and referrals.
- SEC press release 2024-186 (FY2024, 22 Nov 2024, read): 583 total, 431 standalone; $8.2bn ($6.1bn + $2.1bn); $345m distributed;
  $255m whistleblower awards.
- SEC press release 2023-234 (FY2023, 14 Nov 2023, read): 784 total, 501 standalone; $4.949bn ($3.369bn + $1.580bn); $930m
  distributed; nearly $600m awards; more than 18,000 whistleblower tips.
OUR COUNT (addendum case list, 348 rows, parsed by filing date and program heading): IA/IC 97; delinquent filings 66; securities
  offering 64; insider trading 39; broker-dealer 35; issuer reporting/audit 30; market manipulation 7; miscellaneous 7; public
  finance 3. Civil injunctive 163, standalone APs 138, follow-on APs 47. By month: Oct 5, Nov 15, Dec 19, Jan 24, Feb 17, Mar 15,
  Apr 27, May 15, Jun 18, Jul 16, Aug 77, Sep 100. Aug+Sep = 177 (50.9%). 27 Aug 2026: 39 rows, 38 of them under litigation
  release LR-26622. Delinquent filings in Aug-Sep: 60 of 66.
OUR ARITHMETIC: FY2026 vs FY2025 total -23.7%, standalone -22.4%; vs FY2023 -55.6% / -53.1%. Distributions +179% on FY2025;
  $731m / $860m = 85%. Western Asset $100m = 29% of $343m penalties. Release lag after 30 Sep year-end: 45 (FY23), 53 (FY24),
  189 (FY25), 41 (FY26) days. Tips: 26,000 vs 18,000 = +44% (both whistleblower tips; FY2025's 53,753 is a broader measure).
HERO: Wikimedia Commons, "U.S. Securities and Exchange Commission headquarters.JPG", AgnosticPreachersKid, CC BY-SA 3.0, 13 Oct 2009.
  Two tiny, unidentifiable figures at the doors. Not used on any sister site.

---------- 13:20Z BUSINESS: "SoftBank writes off $3.7bn of $9.5bn paid for power gear" (tom-kessler, house byline) ----------
SOURCES READ:
- SoftBank Group, "Accounting" investor presentation, Q2 FY2026 (investor-accounting_q2fy2026_01_en.pdf), 10 Nov 2026 (read in
  full via local text extraction): H1 net income attributable to owners of the parent ¥(768.0)bn vs ¥2,924.1bn; net sales
  ¥4,235.0bn vs ¥3,736.8bn; total gain on investments ¥1,725.8bn vs ¥3,926.7bn; SVF ¥705.6bn vs ¥3,415.5bn; finance cost
  ¥(790.7)bn; SBG interest expenses ¥(676.4)bn, ¥407.2bn increase; derivative loss on Intel prepaid forwards ¥(321.9)bn; Energy
  Global warrants to OpenAI ¥(203.8)bn; other loss ¥(663.8)bn incl. ¥(597.2)bn power-equipment loss; SB7 (Silver Bands 7 LLC)
  cumulative payments FY2025-Q2 FY2026 $9.5bn (¥1.5tn); $6.6bn allocated to PORTS-Pike and others; $2.9bn (¥457.0bn) loss on
  non-refundable advances; $0.9bn (¥140.2bn) contract modifications and settlements; "The loss of $3.7B is completely unrelated to
  PORTS-Pike"; rebate rights up to $2.1bn, "No asset recognized; purchase timing and amounts undetermined."; OpenAI cost $54.6bn
  at Sep, fair value $99.6bn, cumulative gains $45.0bn, no H1 gain as valuation unchanged from Mar 2026; third $10bn tranche Oct
  2026, cumulative $64.6bn, ~13% as of 1 Oct 2026; Intel gain ¥1,062.8bn; ByteDance ¥569.4bn.
- SoftBank Group, "Finance" presentation Q2 FY2026 (read): NAV ¥40.1tn (Mar), ¥72.3tn (Jun), ¥59.8tn/$380bn (Sep); LTV 17.0% /
  13.0% / 15.9%; net debt ¥8.2tn / ¥10.8tn / ¥11.3tn; cash position ¥5.0tn; LTV policy below 25%; $1 = ¥157.35.
- SoftBank Group, "Accounting" presentation Q1 FY2026 (read): Q1 net income attributable ¥347.3bn vs ¥421.8bn.
OUR ARITHMETIC: Q2-only net income = -768.0 - 347.3 = ¥(1,115.3)bn; Q2 FY2025 = 2,924.1 - 421.8 = ¥2,502.3bn. Swing H1
  ¥(3,692.1)bn as reported. $2.9bn / $9.5bn = 30.5%; $3.7bn / $9.5bn = 38.9%; $6.6bn / $9.5bn = 69.5%. ¥597.2bn / ¥768.0bn =
  77.8%. OpenAI fair value / cost = 1.82x. NAV Jun-Sep -¥12.5tn (-17.3%); Mar-Sep +¥19.7tn. Interest prior year ¥269.2bn, now 2.5x.
HERO: Wikimedia Commons, "Lagoon Creek Combustion Turbine Plant.jpg", Tennessee Valley Authority, public domain. No people. Not used
  on any sister site. Illustrative only: not a SoftBank site.

---------- 13:00Z STARTUPS: "Mercor doubles to $20bn, slower than last time" (grace-lindqvist, house byline) ----------
SOURCES READ:
- Mercor, Brendan Foody, "Organizing human intelligence for the entire economy" (mercor.com/blog/series-d), 10 Nov 2026 (read):
  $750m Series D, $20bn, employee tender; 13 investors named; "more than five million experts in our network"; 800+ US occupations;
  "We already spend 3x as much on inference as on employee salaries"; Deeptune acquisition; offices in New York and London.
- Mercor release, Business Wire via Yahoo Finance, San Francisco, 10 Nov 2026 08:15 EST (read): same terms and investors; founded
  2023; co-CEOs Foody and Adarsh Hiremath; quotes from Foody, Hiremath, and Jai Das (Sapphire Ventures); no revenue figures.
- TechCrunch, Ram Iyer, 27 Oct 2025 (read): $350m Series C at $10bn led by Felicis; Benchmark, General Catalyst, Robinhood Ventures;
  prior $100m Series B at $2bn led by Felicis (Feb 2025 per the linked URL); "on track to hit $500 million in ARR"; "pays more than
  $1.5 million per day to its contractors"; more than 30,000 experts earning over $85 an hour on average.
- Dealroom news item 171271, 10 Nov 2026 (read): "annualized gross revenue run rate reached $2 billion in June 2026", attributed to
  the company; 91% concentration figure attributed to an unnamed report; no lead investor named.
OUR ARITHMETIC: $2bn to $10bn = 5x in about eight months (Feb to 27 Oct 2025); $10bn to $20bn = 2x in 379 days (27 Oct 2025 to 10
  Nov 2026). Raise as share of valuation: 5.0% / 3.5% / 3.75%. Valuation over run rate: $10bn / $500m = 20x (Oct 2025 target);
  $20bn / $2bn = 10x (June 2026 figure). $1.5m x 365 = $547.5m a year. 27 Oct 2025 = Monday; 10 Nov 2026 = Tuesday.
HERO: Wikimedia Commons, "San Francisco Financial District at dusk (8542633876).jpg", Clay Gilliland, CC BY-SA 2.0, 8 Mar 2013. No
  people. Not used on any sister site.

---------- 12:40Z CRYPTO: "Crypto-trust options cleared a day before the deadline" (marcus-oyelaran, house byline) ----------
SOURCES READ:
- SEC Release No. 34-106863, File No. SR-ISE-2026-42, "Notice of Filing of Amendment No. 2 and Order Granting Accelerated
  Approval...", 10 Nov 2026, 27 pages (text extracted locally, read in full): filed 28 Jul 2026; published 13 Aug (Release 106067);
  "The Commission received no comments regarding the proposed rule change."; 21 Sep longer period, deadline 11 Nov (Release
  106448); Amendment No. 1 on 3 Nov; withdrawn 5 Nov and replaced by Amendment No. 2; eight listed revisions plus non-substantive
  changes; replaces "crypto asset" with "digital commodity" (Nasdaq Rule 5711(d)(iii)(D)); $700m 12-month average daily market
  value test retained for every holding; surveillance-sharing test with up to 15% of NAV exempt; derivatives counted at gross
  notional; companion Nasdaq order Release 105995 (27 Jul 2026); "Not every crypto asset qualifies as a digital commodity.";
  "raises no novel regulatory issues that have not previously been subject to comment"; comments on Amendment No. 2 due 21 days
  after Federal Register publication; signed by Sherry R. Haywood, Assistant Secretary, by delegated authority (Division of
  Trading and Markets).
- Federal Register, 24 Sep 2026, Release 34-106448 (read for our 24 Sep story).
- Genfinity, 10 Nov 2026 (read, used only as a pointer to the order PDF; none of its lists used).
OUR ARITHMETIC: 28 Jul to 10 Nov = 105 days; 13 Aug to 10 Nov = 89; 5 Nov to 10 Nov = 5; Nasdaq order (27 Jul) to ISE order = 106
  days; joint interpretation effective 23 Mar 2026 to 10 Nov = 232 days. Weekdays: 28 Jul Tue; 13 Aug Thu; 21 Sep Mon; 3 Nov Tue;
  5 Nov Thu; 10 Nov Tue; 11 Nov Wed.
HERO: Wikimedia Commons, "Wall Street Sign (5899884048).jpg", Alex Proimos, CC BY 2.0. No people. Not used on any sister site
  (Cranberry used a different Wall Street sign file, 50849584006).

UNIQUENESS: 6-gram overlap with top outlet sources reported in the commit message.
*/
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const MK = P("markets", "Markets", "markets", "Photograph via Wikimedia Commons");
const PO = P("policy", "Policy", "policy", "Photograph via Wikimedia Commons");
const BU = P("business", "Business", "business", "Photograph via Wikimedia Commons");
const ST = P("startups", "Startups", "startups", "Photograph via Wikimedia Commons");
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
const table = (heads, rows, note) => `<div class="datatable" style="overflow-x:auto;margin:18px 0;max-width:calc(100vw - 32px)"><table style="border-collapse:collapse;width:100%;font-size:15px"><caption style="caption-side:bottom;text-align:left;font-size:13px;color:#666;padding:6px 0 0">${note}</caption><thead><tr>${heads.map(h => `<th ${TH}>${h}</th>`).join("")}</tr></thead><tbody>`
  + rows.map(r => `<tr>${r.map(c => `<td ${TD}>${c}</td>`).join("")}</tr>`).join("")
  + `</tbody></table></div>`;

/* Sources: lead */
const YF_NVDA = "https://finance.yahoo.com/quote/NVDA/history/";
const YF_AMD = "https://finance.yahoo.com/quote/AMD/history/";
const YF_AVGO = "https://finance.yahoo.com/quote/AVGO/history/";
const NV_10Q = "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000075/nvda-20260726.htm";
const AMD_SO = "https://data.sec.gov/api/xbrl/companyconcept/CIK0000002488/dei/EntityCommonStockSharesOutstanding.json";
const AVGO_SO = "https://data.sec.gov/api/xbrl/companyconcept/CIK0001730168/dei/EntityCommonStockSharesOutstanding.json";
const CNBC_FALL = "https://www.cnbc.com/2026/11/10/nvidia-nvda-jensen-huang-affair-chinese-spy.html";
const ROSEN = "https://www.prnewswire.com/news-releases/nvda-investors-have-opportunity-to-lead-nvidia-corporation-securities-fraud-lawsuit-filed-by-the-rosen-law-firm-302935564.html";
const GIZ = "https://gizmodo.com/lawyers-are-flying-in-circles-above-nvidias-head-after-jensen-huangs-affair-with-alleged-spy-2000837488";
const NV_MEMO = "https://nvidianews.nvidia.com/news/a-message-to-our-company";
const NV_BOARD = "https://nvidianews.nvidia.com/news/statement-from-nvidia-board-of-directors";
const NV_CALL = "https://nvidianews.nvidia.com/news/nvidia-sets-conference-call-for-third-quarter-financial-results-6928873";
const HFAC = "https://foreignaffairs.house.gov/news/press-releases/chairmen-mast-moolenaar-and-crawford-request-jensen-huang-brief-congress-on-link-to-chinese-intelligence-asset";

/* Sources: SEC */
const SEC_26 = "https://www.sec.gov/newsroom/press-releases/2026-113-sec-announces-enforcement-annual-results-fiscal-year-2026";
const SEC_26_ADD = "https://www.sec.gov/files/2026-113-enforcement-annual-results-fiscal-year-2026.pdf";
const SEC_25 = "https://www.sec.gov/newsroom/press-releases/2026-34";
const SEC_24 = "https://www.sec.gov/newsroom/press-releases/2024-186";
const SEC_23 = "https://www.sec.gov/newsroom/press-releases/2023-234";

/* Sources: SoftBank */
const SBG_ACCT = "https://group.softbank/media/Project/sbg/sbg/pdf/ir/presentations/2026/investor-accounting_q2fy2026_01_en.pdf";
const SBG_FIN = "https://group.softbank/media/Project/sbg/sbg/pdf/ir/presentations/2026/investor-finance_q2fy2026_01_en.pdf";
const SBG_Q1 = "https://group.softbank/media/Project/sbg/sbg/pdf/ir/presentations/2026/investor-accounting_q1fy2026_01_en.pdf";

/* Sources: Mercor */
const MERCOR_BLOG = "https://www.mercor.com/blog/series-d/";
const MERCOR_PR = "https://finance.yahoo.com/technology/ai/articles/mercor-raises-750-million-series-131500640.html";
const TC_C = "https://techcrunch.com/2025/10/27/mercor-quintuples-valuation-to-10b-with-350m-series-c/";
const DEALROOM = "https://dealroom.co/news/171271-mercor-raises-750m-series-d-at-20b-valuation-to-push-into-enterprise-ai/";

/* Sources: ISE */
const ISE_ORDER = "https://www.sec.gov/files/rules/sro/ise/2026/34-106863.pdf";
const ISE_EXT = "https://www.federalregister.gov/documents/2026/09/24/2026-19514/self-regulatory-organizations-nasdaq-ise-llc-notice-of-designation-of-a-longer-period-for-commission";
const ISE_DOCKET = "https://www.sec.gov/rules-regulations/public-comments/sr-ise-2026-42";

/* ---------- Lead tables ---------- */
const VALUE_TABLE = table(
  ["Company", "Close, Fri 6 Nov", "Close, Mon 9 Nov", "Close, Tue 10 Nov", "Two-day change", "Market value change*"],
  [
    ["Nvidia", "$186.64", "$178.67 (-4.3%)", "$168.89 (-5.5%)", "-9.5%", "-$427.8bn"],
    ["Broadcom", "$293.69", "$319.48 (+8.8%)", "$331.98 (+3.9%)", "+13.0%", "+$182.8bn"],
    ["AMD", "$449.04", "$508.58 (+13.3%)", "$515.21 (+1.3%)", "+14.7%", "+$108.5bn"]
  ],
  "Komposite's compilation and arithmetic. Closing prices from Yahoo Finance's daily history. *Price change times the share count on each company's latest 10-Q cover, from SEC EDGAR: Nvidia 24.1bn (21 August 2026), Broadcom 4,773,629,865 (28 August), AMD 1,640,087,251 (28 October). Share counts move between filings, so the values are approximate."
);

const SUIT_TABLE = table(
  ["Item", "What the filings and notices say"],
  [
    ["Case", "Kistenmacher v. Nvidia, a proposed securities class action against Nvidia and Jensen Huang"],
    ["Court", "US District Court for the Northern District of California, San Jose"],
    ["Filed", "Monday 9 November 2026, by the Rosen Law Firm"],
    ["Class period", "9 October 2025 to 8 November 2026, both dates inclusive: 396 days by our count"],
    ["Core allegation", "Statements about Huang's relationship with Alice Huang and Nvidia's dealings with Megaspeed were \"materially false and/or misleading at all relevant times\""],
    ["Statements cited", "Remarks by Nvidia spokesman John Rizzo, and Huang's May 2025 denial that Nvidia chips were being diverted to China (as reported)"],
    ["Lead-plaintiff deadline", "8 January 2027, 60 days after the first notice"],
    ["Status", "No class certified. The allegations are unproven"]
  ],
  `Komposite's summary from ${L(ROSEN, "Rosen's notice of 10 November")}, ${L(GIZ, "Gizmodo")} and ${L(CNBC_FALL, "CNBC")}. Day count by Komposite. We have not read the complaint itself, which was not available to us on the public docket.`
);

/* ---------- SEC tables ---------- */
const SEC_YEARS = table(
  ["Fiscal year", "Total actions", "Standalone", "Money ordered", "Returned to investors", "Whistleblower awards", "Results published"],
  [
    [`${L(SEC_23, "2023")}`, "784", "501", "$4.949bn", "$930m", "nearly $600m", "14 Nov 2023 (45 days)"],
    [`${L(SEC_24, "2024")}`, "583", "431", "$8.2bn", "$345m", "$255m", "22 Nov 2024 (53 days)"],
    [`${L(SEC_25, "2025")}`, "456", "303", "$17.9bn ($2.7bn excluding Stanford and offsets)", "$262m", "~$60m", "7 Apr 2026 (189 days)"],
    [`${L(SEC_26, "2026")}`, "348", "235", "$1.095bn ($860m less offsets)", "$731m", "more than $158m", "10 Nov 2026 (41 days)"]
  ],
  "Komposite's compilation from the SEC's annual enforcement releases for each year, linked. The fiscal year ends on 30 September; days are counted by Komposite from that date to publication."
);

const SEC_AREAS = table(
  ["Program area", "Cases", "Of which filed in Aug or Sep"],
  [
    ["Investment advisers / investment companies", "97", "53"],
    ["Delinquent filings", "66", "60"],
    ["Securities offering", "64", "25"],
    ["Insider trading", "39", "15"],
    ["Broker-dealer", "35", "14"],
    ["Issuer reporting / audit and accounting", "30", "7"],
    ["Market manipulation", "7", "1"],
    ["Miscellaneous", "7", "2"],
    ["Public finance abuse", "3", "0"],
    ["Total", "348", "177"]
  ],
  `Komposite's count of the 348 rows in the ${L(SEC_26_ADD, "case list attached to release 2026-113")}, by the program heading and filing date the SEC gives for each.`
);

/* ---------- SoftBank tables ---------- */
const SBG_PL = table(
  ["¥bn", "H1 FY2025", "H1 FY2026", "Q2 FY2026 alone*"],
  [
    ["Net sales", "3,736.8", "4,235.0", "n/a"],
    ["Total gain on investments", "3,926.7", "1,725.8", "n/a"],
    ["of which SoftBank Vision Funds", "3,415.5", "705.6", "n/a"],
    ["Finance cost", "(340.0)", "(790.7)", "n/a"],
    ["Loss on US power-generation equipment", "none", "(597.2)", "n/a"],
    ["Net income attributable to owners", "2,924.1", "(768.0)", "(1,115.3)"]
  ],
  `Source: ${L(SBG_ACCT, "SoftBank Group's accounting presentation of 10 November 2026")}. H1 is April to September. *Komposite's subtraction of the ¥347.3bn first-quarter profit in ${L(SBG_Q1, "the first-quarter presentation")} from the half-year loss.`
);

const SBG_SB7 = table(
  ["Line", "Amount", "Share of the $9.5bn"],
  [
    ["Paid by SB7 for power-generation equipment, April 2025 to September 2026", "$9.5bn (¥1.5tn)", "100%"],
    ["Re-allocated to PORTS-Pike and other projects", "$6.6bn", "69.5%"],
    ["Loss on non-refundable advances for equipment dropped from the plan", "$2.9bn (¥457.0bn)", "30.5%"],
    ["Loss on contract modifications and settlements", "$0.9bn (¥140.2bn)", "n/a: cash mostly still to be paid"],
    ["Total loss booked", "$3.7bn (¥597.2bn)", "38.9%"],
    ["Rebate rights on future purchases (not booked as an asset)", "up to $2.1bn", "n/a"]
  ],
  "Source: SoftBank Group accounting presentation, page 8. Shares are Komposite's arithmetic. SB7 is Silver Bands 7 LLC, in which SoftBank Group and Vision Fund 2 have invested."
);

/* ---------- Mercor table ---------- */
const MERCOR_STEPS = table(
  ["Round", "Announced", "Raised", "Valuation", "Step-up", "Time since previous round", "Company figure at the time"],
  [
    ["Series B", "February 2025", "$100m", "$2bn", "n/a", "n/a", "n/a"],
    ["Series C", "Mon 27 Oct 2025", "$350m", "$10bn", "5x", "about 8 months", "\"on track\" for $500m ARR; $1.5m a day paid to contractors"],
    ["Series D", "Tue 10 Nov 2026", "$750m", "$20bn", "2x", "379 days", "$2bn gross run rate in June 2026, per Dealroom citing the company"]
  ],
  `Komposite's compilation from ${L(TC_C, "TechCrunch's report of the Series C")}, ${L(MERCOR_PR, "Mercor's 10 November release")} and ${L(DEALROOM, "Dealroom")}. Day count and multiples by Komposite.`
);

/* ---------- ISE tables ---------- */
const ISE_TIMELINE = table(
  ["Date", "Step", "Days from filing"],
  [
    ["Tue 28 Jul 2026", "Nasdaq ISE files SR-ISE-2026-42, a day after the SEC approves the companion Nasdaq listing rule (Release 105995)", "0"],
    ["Thu 13 Aug 2026", "Notice published in the Federal Register (Release 106067)", "16"],
    ["Mon 21 Sep 2026", `SEC takes a longer period and sets 11 November as its deadline (${L(ISE_EXT, "Release 106448")})`, "55"],
    ["Tue 3 Nov 2026", "ISE files Amendment No. 1, replacing the whole filing", "98"],
    ["Thu 5 Nov 2026", "ISE withdraws Amendment No. 1 and files Amendment No. 2", "100"],
    ["Tue 10 Nov 2026", `Approval on an accelerated basis (${L(ISE_ORDER, "Release 34-106863")})`, "105"],
    ["Wed 11 Nov 2026", "Deadline the SEC had set itself", "106"]
  ],
  "Komposite's timeline from the dates recited in Release 34-106863. Day counts by Komposite."
);

const ISE_RULES = table(
  ["Test", "Before", "After the 10 November order"],
  [
    ["What the trust may hold", "\"Crypto asset\": anything issued or transferred on a blockchain that relies on cryptographic protocols", "\"Digital commodity\", as defined in Nasdaq Rule 5711(d)(iii)(D): value from the operation of a functional crypto system and supply and demand, not from others' managerial efforts"],
    ["Liquidity", "Each holding's global supply averages at least $700m of daily market value over 12 months", "Unchanged, and applies to every holding, including any in the 15% buffer"],
    ["Surveillance", "Every holding must underlie a derivative traded on a market with a surveillance-sharing agreement", "At least 85% of net asset value must meet that test; up to 15% need not"],
    ["Derivatives held by the trust", "Not addressed", "Counted at gross notional value towards the 15% limit"]
  ],
  "Komposite's reading of Release 34-106863, Sections II and III. Quoted terms are the order's own."
);

export default [

/* ---------- 12:40Z CRYPTO ---------- */
CR({ slug: "crypto-trust-options-cleared-a-day-before-the-deadline", kick: "Market Structure",
  headline: "Crypto-trust options cleared a day before the deadline",
  dek: "The SEC on Tuesday approved Nasdaq ISE's rule for listing options on trusts that hold digital commodities, one day before its own 11 November deadline and five days after the exchange rewrote the filing. Nobody commented. Our timeline and reading of what changed.",
  metaDesc: "The SEC approved Nasdaq ISE options on digital-commodity trusts on 10 November 2026, 105 days after filing and a day before its deadline. What changed.",
  author: "marcus-oyelaran", date: "2026-11-11T12:40:00Z",
  capt: "A Wall Street sign in Lower Manhattan, in a file photograph.",
  tags: [
    { name: "Market Structure", slug: "market-structure" },
    { name: "Digital Assets", slug: "digital-assets" },
    { name: "Regulation", slug: "regulation" }
  ],
  related: [
    R("/blockchain/the-seventy-five-days-that-are-not-in-the-rule/", "Market Structure"),
    R("/crypto/not-a-security-since-march/", "Regulation"),
    R("/policy/one-commissioner-is-now-a-quorum/", "Regulation")
  ],
  body: [
    `The Securities and Exchange Commission had until Wednesday to decide what to do with Nasdaq ISE's proposal to list options on trusts that hold digital commodities. It acted on Tuesday. ${L(ISE_ORDER, "Release No. 34-106863")}, dated 10 November 2026, approves the rule change on an accelerated basis, 105 days after the exchange filed it on 28 July, by our count.`,
    `In practical terms, the order lets ISE list options on shares of commodity-based trusts that Nasdaq lists under its generic standards, provided each trust passes a liquidity test and a surveillance test, without a separate SEC filing for each new option. It does not approve options on any named product. "The Commission received no comments regarding the proposed rule change," the order records, the same finding as when we first followed the filing in September.`,
    `The order was not signed by the commissioners. It was issued "for the Commission, by the Division of Trading and Markets, pursuant to delegated authority", over the name of Sherry R. Haywood, assistant secretary. That is routine for exchange rule filings, and it matters more than usual at a commission that fell to two members in October, when it changed its rules so that <a href="/policy/one-commissioner-is-now-a-quorum/">one commissioner can be a quorum</a> in some matters.`,
    `<h2>How long did it take?</h2>`,
    `Fifteen weeks, most of it waiting. The filing sat for 98 days before the exchange amended it, then changed shape twice in a week. On 3 November ISE filed Amendment No. 1, replacing the whole proposal. Two days later it withdrew that and filed Amendment No. 2, which again replaced everything. The SEC approved the second version five days after that.`,
    ISE_TIMELINE,
    `The 11 November date was not fixed by statute. It was the end of the longer period the commission gave itself in September, when the 45-day clock would otherwise have expired on a Sunday. As we wrote then, <a href="/blockchain/the-seventy-five-days-that-are-not-in-the-rule/">the deadline belonged to this options filing</a>, not to any spot exchange-traded product. The commission could have approved, disapproved or opened proceedings. Opening proceedings would have extended the review, which the statute allows to run to 240 days from publication; it chose approval.`,
    `<h2>What did Amendment No. 2 change?</h2>`,
    `Mostly the paperwork around the rule rather than the rule. The order lists eight revisions plus non-substantive edits. ISE now promises to refile if Congress enacts a statutory definition of "digital commodity", says derivatives held by a trust count at gross notional value towards the 15 per cent limit, says it can obtain information from Nasdaq when investigating suspected manipulation, describes continued-listing requirements and surveillance procedures, and represents that it and the Options Price Reporting Authority have the systems capacity for the extra traffic. One revision corrects a grammatical error. The commission found that the amendment "raises no novel regulatory issues that have not previously been subject to comment".`,
    `The substance sits in three tests. The first is a change of vocabulary. ISE's rule used to allow options on trusts holding a "crypto asset", a definition written around the technology. The new rule uses "digital commodity", borrowed from Nasdaq's listing rule and informed by the joint SEC and CFTC interpretation that took effect on 23 March, which <a href="/crypto/not-a-security-since-march/">named bitcoin, ether and 16 other digital commodities</a>. "Not every crypto asset qualifies as a digital commodity," the exchange wrote.`,
    ISE_RULES,
    `The liquidity floor does not move. Each holding's total global supply must have averaged at least $700m of daily market value over the previous 12 months, and that includes the holdings in the 15 per cent buffer. What does move is surveillance. Today every holding must underlie a derivatives contract on a market with which ISE shares surveillance information, directly or through the Intermarket Surveillance Group. Under the new rule, only 85 per cent of a trust's net asset value has to meet that test. The exchange argued that manipulating up to 15 per cent of a trust's assets is unlikely to move its net asset value or the price of the options.`,
    `For issuers, the order closes a gap that opened in July. ISE already had a generic standard for options on crypto trusts, but it required every holding to pass the surveillance test. Nasdaq's listing rule for commodity-based trusts, with the 15 per cent buffer and the digital-commodity definition, was approved on 27 July. A trust that used the buffer could list on Nasdaq from then but could not meet ISE's options test. The matching options rule took another 106 days.`,
    `Why it matters: options are how many institutions hedge and how many retail investors lever a position, and the options standard now matches the listing standard, so a trust that qualifies to list on Nasdaq's generic terms can also qualify for options on ISE. The next concrete step is the comment period on Amendment No. 2, which runs for 21 days after the notice is published in the Federal Register, and the ${L(ISE_DOCKET, "docket for SR-ISE-2026-42")} is where any comments, and any petition for the full commission to review a staff decision, would appear.`
  ]
}),

/* ---------- 13:00Z STARTUPS ---------- */
ST({ slug: "mercor-doubles-to-20bn-slower-than-last-time", kick: "Venture",
  headline: "Mercor doubles to $20bn, slower than last time",
  dek: "Mercor, which pays experts to train and test AI models, raised $750m at a $20bn valuation on Tuesday, twice its price of October 2025. The last step was fivefold in about eight months. This one took 379 days, and the multiple of revenue has halved.",
  metaDesc: "Mercor raised $750m at a $20bn valuation on 10 November 2026, double its October 2025 price after 379 days. Our table of its rounds and multiples.",
  author: "grace-lindqvist", date: "2026-11-11T13:00:00Z",
  capt: "San Francisco's Financial District at dusk, seen from the bay, in a file photograph from 2013.",
  tags: [
    { name: "Startups", slug: "startups" },
    { name: "Venture Capital", slug: "venture-capital" },
    { name: "AI", slug: "ai" }
  ],
  related: [
    R("/startups/fifteen-times-run-rate-for-modal/", "Venture"),
    R("/ai/openai-takes-frontier-training-off-the-live-internet/", "AI Safety"),
    R("/markets/a-third-off-the-round-a-tenth-off-the-price/", "Private Markets")
  ],
  body: [
    `Mercor, a San Francisco company that recruits professionals from hundreds of occupations to train and grade AI models, has raised $750m in a Series D round at a $20bn valuation, ${L(MERCOR_PR, "it said on Tuesday 10 November")}. The round included a tender for employees' shares. No lead investor was named.`,
    `The valuation is double the $10bn Mercor was given in October 2025, when it raised $350m in a Series C led by Felicis, ${L(TC_C, "TechCrunch reported at the time")}. That round had itself been five times the $2bn price of a $100m Series B earlier that year. The new step is smaller and slower: 2x in 379 days, by our count, against 5x in about eight months.`,
    `Thirteen investors are named in ${L(MERCOR_BLOG, "the announcement by Brendan Foody")}, co-founder and co-chief executive: Benchmark, Felicis, Fundomo, funds managed by affiliates of Apollo, G Squared, General Catalyst, Glade Brook Capital, Nvidia, Salesforce, Sapphire Ventures, StepStone Group, XTX Ventures and Zoom. Three of them, Nvidia, Salesforce and Zoom, are also companies that build or sell AI products. The round was announced the same week Nvidia's own shares <a href="/markets/nvidia-sheds-428bn-as-its-rivals-add-291bn/">lost about $428bn of market value in two days</a>.`,
    MERCOR_STEPS,
    `The multiple has come down. In October 2025 the company had told investors it was on track for $500m of annual recurring revenue, TechCrunch reported, which made the $10bn price 20 times that figure, by our division. ${L(DEALROOM, "Dealroom reported")} on Tuesday that Mercor's annualised gross revenue run rate reached $2bn in June 2026, attributing the figure to the company. On that number the new price is 10 times run rate. Neither the release nor the blog post gives a revenue figure, so the comparison rests on figures Mercor has put out elsewhere, and the two are not measured the same way: one is a forecast of recurring revenue, the other a gross monthly rate annualised. For comparison, Modal's $15.75bn price last month was <a href="/startups/fifteen-times-run-rate-for-modal/">about 15 times its own run-rate figure</a>.`,
    `"Gross" is the word to watch. Mercor's business is paying people. In October 2025 it was paying more than $1.5m a day to its contractors, TechCrunch reported, to more than 30,000 experts earning over $85 an hour on average. At that rate, payouts come to about $548m a year, by our multiplication, slightly more than the $500m of recurring revenue it was aiming for at the time. The public numbers do not let us say how much of a gross run rate the company keeps after paying its experts, and the figures come from different points in the year.`,
    `The headcount figures have also changed meaning. The October 2025 figure was more than 30,000 experts doing paid work. The new announcement speaks of "more than five million experts in our network" across more than 800 US occupations. A network is people who have signed up, not people being paid in a given month, and the release does not say how many are active.`,
    `The money is meant to move Mercor beyond the frontier labs that are its core customers. The company plans to spend on evaluations, post-training infrastructure and research, and on environments in which AI agents learn professional workflows, helped by Deeptune, which it bought earlier this year. "Every company deploying AI needs to know whether it works, and the answer is different for each one," Adarsh Hiremath, the other co-founder and co-chief executive, said in the release. Foody's post adds a ratio of the company's own: "We already spend 3x as much on inference as on employee salaries."`,
    `Concentration is the risk investors are paying around. Dealroom cited an unnamed report that 91 per cent of Mercor's first-half 2026 gross revenue came from foundation-model companies. Komposite has not been able to check that figure. Those customers are spending heavily, but their own financing has tightened at the margin: OpenAI <a href="/markets/a-third-off-the-round-a-tenth-off-the-price/">cut the size and price of its latest round</a> last month, and labs have been changing how they train, as when OpenAI <a href="/ai/openai-takes-frontier-training-off-the-live-internet/">took frontier training off the live internet</a> in October.`,
    `Mercor has opened offices in New York and London alongside San Francisco, according to the post. It has not said whether it will report revenue on a net basis, or how many of its five million experts were paid in the latest quarter. Those are the two numbers that would let an outsider check the multiple.`
  ]
}),

/* ---------- 13:20Z BUSINESS ---------- */
BU({ slug: "softbank-writes-off-3-7bn-of-9-5bn-paid-for-power-gear", kick: "AI Infrastructure",
  headline: "SoftBank writes off $3.7bn of $9.5bn paid for power gear",
  dek: "SoftBank Group lost ¥768bn in the six months to September after booking ¥597.2bn against US power equipment it no longer plans to buy. Our reading of its accounting deck: 31 per cent of the prepayments are gone, and the second quarter alone lost ¥1.1tn.",
  metaDesc: "SoftBank Group lost ¥768bn in April-September 2026, including a $3.7bn loss on $9.5bn of US power-equipment prepayments, its 10 November deck shows.",
  author: "tom-kessler", date: "2026-11-11T13:20:00Z",
  capt: "Gas combustion turbines at the Tennessee Valley Authority's Lagoon Creek plant in Tennessee, in a file photograph.",
  tags: [
    { name: "Energy for Computing", slug: "energy-for-computing" },
    { name: "Data Centers", slug: "data-centers" },
    { name: "Capital Markets", slug: "capital-markets" }
  ],
  related: [
    R("/markets/a-third-off-the-round-a-tenth-off-the-price/", "Private Markets"),
    R("/ai/openai-seeks-thirty-billion-before-anthropic-lists/", "Private Markets"),
    R("/ai/anthropics-first-canadian-lease-is-for-95-megawatts/", "Data Centres")
  ],
  body: [
    `Page 8 of SoftBank Group's accounting presentation for the half year to 30 September carries a line that was not in its accounts a year ago: a ¥597.2bn ($3.7bn) loss on power-generation equipment for AI data centres in the US. A subsidiary called Silver Bands 7 had paid $9.5bn since April 2025 to reserve generating equipment ahead of expected shortages. SoftBank has now decided it does not need all of it.`,
    `SoftBank Group lost ¥768.0bn in the six months to 30 September 2026, against a profit of ¥2,924.1bn a year earlier, ${L(SBG_ACCT, "its presentation of Tuesday 10 November shows")}. The equipment loss accounts for 78 per cent of that, by our division, and it is a write-off of 31 per cent of the money SB7 had paid out.`,
    SBG_SB7,
    `The presentation splits the loss in two. $2.9bn is non-refundable advance payments for equipment that is no longer in the revised procurement plan. A further $0.9bn relates to modifying and settling contracts, and most of that cash has yet to be paid, from the third quarter onward. Of the $9.5bn, $6.6bn has been reassigned to equipment for PORTS-Pike, a power-generation project, and others. SoftBank goes out of its way to separate the two: "The loss of $3.7B is completely unrelated to PORTS-Pike." It also holds rights to rebates of up to $2.1bn on future purchases, on conditions, but has booked nothing for them: "No asset recognized; purchase timing and amounts undetermined."`,
    `<h2>Why do two loss figures circulate?</h2>`,
    `Because SoftBank reports half-years and some summaries report quarters. The ¥768.0bn is the April-to-September figure. SoftBank's ${L(SBG_Q1, "first-quarter presentation")} showed a profit of ¥347.3bn for April to June. Subtracting one from the other gives a loss of about ¥1,115bn, or ¥1.1tn, for July to September alone, by our arithmetic. The same subtraction gives a profit of ¥2,502bn for the second quarter of 2025, when SoftBank was booking large gains on OpenAI.`,
    SBG_PL,
    `This time there was no OpenAI gain. SoftBank carries its OpenAI holding at fair value, and the presentation says no gain or loss was recorded in the half because the valuation was unchanged from March. At 30 September the stake had cost $54.6bn and was carried at $99.6bn, a cumulative gain of $45.0bn, or 1.82 times cost. In October SoftBank paid the third $10bn tranche of its follow-on commitment, bringing its cumulative investment to $64.6bn for a stake of about 13 per cent. OpenAI's own fundraising has been <a href="/markets/a-third-off-the-round-a-tenth-off-the-price/">cut in size and price</a> since SoftBank's March mark was set, to a reported $1.25tn, from the $1.4tn or more <a href="/ai/openai-seeks-thirty-billion-before-anthropic-lists/">it was reported to be seeking in October</a>.`,
    `The gains that did arrive came from elsewhere. Intel, in which SoftBank bought $2bn of shares in August 2025, produced a ¥1,062.8bn valuation gain, partly offset by a ¥321.9bn derivative loss on prepaid forward contracts SoftBank had written against those shares. ByteDance added ¥569.4bn inside the Vision Funds. Warrants that Energy Global, a SoftBank group company, granted to OpenAI as incentives on data-centre leases cost ¥203.8bn as Energy Global's own value rose.`,
    `<h2>What is it costing to borrow?</h2>`,
    `More than twice as much as a year ago. Interest expense at the group's parent and financing companies was ¥676.4bn in the half, an increase of ¥407.2bn, which the presentation puts down to more borrowing and bonds and to writing off unamortised fees when bridge loans were repaid early. ${L(SBG_FIN, "The finance presentation")} shows net debt at the parent of ¥11.3tn at 30 September, up from ¥8.2tn in March, and a loan-to-value ratio of 15.9 per cent, against a policy ceiling of 25 per cent in normal times.`,
    `Net asset value, the figure SoftBank asks investors to judge it by, was ¥59.8tn ($380bn) at the end of September. That is ¥19.7tn more than in March, which is how some reports described it as a record, but ¥12.5tn, or 17 per cent, less than the ¥72.3tn of June. SoftBank attributes the fall since June mainly to a ¥9.8tn decline in the value of its holdings and ¥2.0tn of currency effects.`,
    `Why it matters: SoftBank is funding its AI build-out largely with debt, which rose ¥3.1tn at the parent in six months, and its accounts now show what happens when a pre-ordered power plan changes. Other developers have been locking up generating capacity the same way, from leases to equipment orders, as Anthropic did with <a href="/ai/anthropics-first-canadian-lease-is-for-95-megawatts/">its first Canadian lease</a>. SoftBank says the $0.9bn of settlement cash will go out from the third quarter, which ends on 31 December, and its third-quarter results will show how much of the $2.1bn of rebates, if any, it can use.`
  ]
}),

/* ---------- 13:40Z POLICY ---------- */
PO({ slug: "the-sec-filed-348-cases-half-in-the-last-two-months", kick: "Enforcement",
  headline: "The SEC filed 348 cases, half in the last two months",
  dek: "The SEC brought 348 enforcement actions in fiscal 2026, the fewest in at least four years, and obtained orders for $1.1bn. Our count of its case list finds 177 of them filed in August and September, 38 under a single litigation release.",
  metaDesc: "The SEC filed 348 enforcement actions in fiscal 2026 and won $1.095bn in orders; by our count 177 were filed in August and September 2026.",
  author: "jonathan-bright", date: "2026-11-11T13:40:00Z",
  capt: "The entrance of the Securities and Exchange Commission's headquarters at 100 F Street in Washington, in a file photograph from 2009.",
  tags: [
    { name: "Enforcement", slug: "enforcement" },
    { name: "Regulation", slug: "regulation" },
    { name: "Capital Markets", slug: "capital-markets" }
  ],
  related: [
    R("/policy/one-commissioner-is-now-a-quorum/", "Regulation"),
    R("/markets/the-sec-examiners-put-super-intelligence-on-the-2027-list/", "Regulation"),
    R("/crypto/not-a-security-since-march/", "Regulation")
  ],
  body: [
    `On 27 August 2026 the Securities and Exchange Commission filed 39 enforcement cases in a single day, more than in any whole month of its fiscal year until then. Thirty-eight of them share one litigation release number, LR-26622, and each counts as a separate action in the list of cases the SEC published on Tuesday. The SEC's release says that in November 2025 and August 2026 it charged 45 entities in three federal districts with filing false Forms ADV, the registration form for investment advisers; the 27 August batch appears to be the second wave.`,
    `The SEC filed 348 enforcement actions in the fiscal year to 30 September 2026, including 235 standalone cases, and obtained orders for $1.095bn in disgorgement, interest and penalties, ${L(SEC_26, "it said on Tuesday 10 November")}. By our count of the ${L(SEC_26_ADD, "case list in the addendum")}, 177 of the 348 actions, or 51 per cent, were filed in August and September.`,
    `The other 113 actions are 47 follow-on administrative proceedings, which bar or suspend people after a conviction or injunction elsewhere, and 66 cases against companies that are delinquent in their filings. The release itself compares little with earlier years. The SEC's own past releases make the comparison possible.`,
    `<h2>Four years of annual results</h2>`,
    SEC_YEARS,
    `Total actions are down 24 per cent on fiscal 2025 and 56 per cent on fiscal 2023, and standalone cases, which exclude follow-ons and delinquent filers, are down 22 per cent and 53 per cent. The money is harder to compare. Fiscal 2025's $17.9bn was dominated by judgments in the Robert Allen Stanford Ponzi litigation; excluding those and amounts deemed satisfied by other courts, the SEC put the year at $2.7bn. The comparable figure for 2026 is $860m after $235m of offsets, about 68 per cent lower, by our arithmetic.`,
    `Two measures went the other way. The SEC returned about $731m to more than 250,000 harmed investors, nearly three times fiscal 2025's $262m, and equal to 85 per cent of the year's net money ordered. It paid more than $158m to 65 individual whistleblowers, the largest number of individuals since fiscal 2023, and received about 26,000 whistleblower tips, against more than 18,000 in fiscal 2023, the last year for which the SEC published the same measure. The 53,753 figure it gave for fiscal 2025 counted tips, complaints and referrals together.`,
    `<h2>Where the cases were</h2>`,
    SEC_AREAS,
    `Investment advisers and funds were the largest category, at 97 cases, and the 38 cases under LR-26622 account for much of that. Sixty of the 66 delinquent-filing cases, which revoke or suspend the registration of companies that have stopped filing reports, were brought in the last two months. Excluding those two groups, the year's case flow is far more even: the other 79 August and September filings are spread across advisers, offerings, insider trading and broker-dealers.`,
    `A handful of settlements carry the penalty total. Western Asset Management Company paid a $100m civil penalty, 29 per cent of the year's $343m in penalties on its own, and UBS Financial Services paid $20m. Thirteen trading suspensions targeted suspected manipulation in Asia-based issuers. The division also rewrote its Enforcement Manual for the first time since 2017.`,
    `The leadership framed the lower count as a choice. "Enforcement actions and financial remedies are important measures of activity," said Paul S. Atkins, the SEC's chairman, adding that the program is measured by how well it advances the agency's mission. David Woodcock, director of the Division of Enforcement, said: "Our focus is on conducting rigorous investigations, pursuing consequential misconduct." Roughly two-thirds of standalone actions charged at least one individual, the release says.`,
    `The figures arrived quickly. The SEC published them 41 days after the year closed, against 189 days for fiscal 2025, whose results came out in April. The commission that will oversee fiscal 2027's cases was down to two members in October, when it <a href="/policy/one-commissioner-is-now-a-quorum/">amended its rules so one can be a quorum</a> when the others are disqualified. Its examiners have already set their own priorities for the year, <a href="/markets/the-sec-examiners-put-super-intelligence-on-the-2027-list/">naming registrants' use of super intelligence among them</a>. The first quarter of the new fiscal year ends on 31 December.`
  ]
}),

/* ---------- 14:00Z MARKETS (LEAD) ---------- */
MK({ slug: "nvidia-sheds-428bn-as-its-rivals-add-291bn", kick: "Semiconductors",
  headline: "Nvidia sheds $428bn as its rivals add $291bn",
  dek: "Nvidia's shares fell 9.5 per cent on Monday and Tuesday after Jensen Huang admitted an affair, erasing about $428bn of value by our arithmetic. AMD and Broadcom added $291bn. A shareholder suit now claims a 396-day class period.",
  metaDesc: "Nvidia lost about $428bn of market value on 9-10 November 2026 by our arithmetic as AMD and Broadcom gained $291bn. A class action followed.",
  author: "priya-raghavan", date: "2026-11-11T14:00:00Z",
  capt: "Four Nvidia H100 graphics cards lined up on a marble surface, in a file photograph from 2023.",
  tags: [
    { name: "Semiconductors", slug: "semiconductors" },
    { name: "Capital Markets", slug: "capital-markets" },
    { name: "AI Infrastructure", slug: "ai-infrastructure" }
  ],
  related: [
    R("/ai/nvidia-board-opens-inquiry-394-days-after-megaspeed/", "Semiconductors"),
    R("/policy/megaspeeds-paper-trail-from-commerce-to-the-prosecutors/", "Export Controls"),
    R("/markets/anthropics-price-range-values-it-at-up-to-1-4tn/", "Listings")
  ],
  body: [
    `Nvidia's shares closed at $168.89 on Tuesday 10 November, 9.5 per cent below the $186.64 close of Friday 6 November, after two days of selling that followed chief executive Jensen Huang's admission of an affair. On the 24.1 billion shares in its latest quarterly filing, that is about $428bn of market value lost since Friday, by our arithmetic.`,
    `The fall came in two steps. On Monday the stock lost $7.97, or 4.27 per cent, about $192bn of value. On Tuesday it lost a further 5.47 per cent, ${L(CNBC_FALL, "CNBC reported")}, or about $236bn, by our multiplication. Nvidia briefly traded below a $4tn valuation on Tuesday afternoon before closing above it. On our share count the line sits at about $166 a share; the close left the company worth about $4.07tn. Volume on the two days averaged 445m shares, 2.6 times the average of the five sessions before, according to ${L(YF_NVDA, "Yahoo Finance's daily history")}.`,
    `The selling was not spread across the chip sector. Over the same two days AMD rose 14.7 per cent and Broadcom 13.0 per cent, on closing prices from ${L(YF_AMD, "Yahoo")} ${L(YF_AVGO, "Finance")}. Applied to the share counts on their latest 10-Q covers, from ${L(AMD_SO, "SEC")} ${L(AVGO_SO, "EDGAR")}, those moves added about $108.5bn to AMD and $182.8bn to Broadcom: $291.3bn together, or 68 per cent of what Nvidia lost. CNBC put Broadcom's Monday gain at just over 10 per cent; on closing prices we make it 8.8 per cent. Share prices move for many reasons at once, and the arithmetic shows coincidence, not a transfer from one to the others.`,
    VALUE_TABLE,
    `The two days were not alike. On Monday, AMD and Broadcom together added about $221bn, more than the $192bn Nvidia lost, by our arithmetic. On Tuesday the pattern broke: Nvidia lost $236bn while the other two added about $71bn between them. Read that way, Monday looked like investors switching between chipmakers, and Tuesday like investors selling Nvidia.`,
    `The trigger was a weekend email. In ${L(NV_MEMO, "a message to staff posted on Sunday 8 November")}, Huang wrote: "I was unfaithful to my wife." He also wrote, "I have fallen short of that responsibility," and said he would "cooperate fully" with the board's investigation. CNBC has reported that the affair was with Alice Huang, an executive at Megaspeed, a Singapore-based Nvidia customer. On 5 November three House committee chairmen ${L(HFAC, "asked Huang to brief Congress")} on his link to what they called a Chinese intelligence asset. ${L(NV_BOARD, "The board's statement")} the same day said a committee of independent directors, "assisted by outside independent counsel", would run the inquiry, which <a href="/ai/nvidia-board-opens-inquiry-394-days-after-megaspeed/">we reported on Monday</a>.`,
    `<h2>What does the lawsuit claim?</h2>`,
    `That Nvidia and Huang misled investors about Huang's relationship with Alice Huang and about Nvidia's dealings with Megaspeed. The suit was filed on Monday in the federal court in San Jose by the Rosen Law Firm for a shareholder named Mark Kistenmacher, ${L(GIZ, "Gizmodo reported")}. ${L(ROSEN, "Rosen's notice")} says the defendants' statements were "materially false and/or misleading at all relevant times" and that investors were damaged when the true details entered the market. At least four other firms have announced investigations, according to Gizmodo.`,
    SUIT_TABLE,
    `The dates were chosen with care. The class period opens on Thursday 9 October 2025, the day before Singapore's police said publicly that they were investigating Megaspeed, the first entry in <a href="/policy/megaspeeds-paper-trail-from-commerce-to-the-prosecutors/">the paper trail we compiled on Tuesday</a>. It closes on Sunday 8 November 2026, the day of Huang's email, so Monday's fall is the price drop the complaint relies on: the $7.97 a share that Gizmodo and others valued at about $192bn to $193bn. The lead-plaintiff deadline of 8 January 2027 is 60 days after the first notice, the window the Private Securities Litigation Reform Act allows.`,
    `The law also caps what such a suit can recover. Under the Private Securities Litigation Reform Act, damages per share are limited to the difference between what an investor paid and the average closing price over the 90 days after the corrective information reached the market. That average does not exist yet. Over the first two days it is $173.78, by our arithmetic, and it will move with every close until early February. For any buyer in the class period, the cap will be set by how the stock trades through Nvidia's results and the board's review, not by Monday's fall alone.`,
    `A securities complaint is the start of a long process, and many are dismissed. The Rosen suit has to show not only that statements were false but that they were material and made with the required state of mind. Nvidia had not responded publicly to the suit in the reports we read.`,
    `<h2>What are the analysts and officials saying?</h2>`,
    `President Donald Trump said the FBI was looking into the matter and added, "I think that he'll be in good shape," CNBC reported. Dan Ives of Yorkville Ives & Co. put the chance of Huang being removed as chief executive at roughly 15 per cent, and said a board review he expects to take four to six weeks would "create a clear overhang on the stock".`,
    `There is a market reason the rotation went to AMD and Broadcom in particular: both sell the processors and custom accelerators that are the nearest substitutes for Nvidia's in AI data centres. There is also an awkward symmetry. Nvidia, AMD and Broadcom are all among the seven suppliers that have agreed to buy $26bn of stock in <a href="/markets/anthropics-price-range-values-it-at-up-to-1-4tn/">Anthropic's listing</a>, which is expected to price on 18 November.`,
    `Why it matters: the questions now facing Nvidia are about governance and export compliance rather than demand for its chips, and the market has priced them at roughly a tenth of the company in two sessions. Results can answer the demand question; they cannot answer the others, which sit with the board's committee, the FBI and Congress.`,
    `The calendar is short. The three House committee chairmen who wrote to Huang on 5 November ${L(HFAC, "asked for a reply by today")}, 11 November, and a closed briefing on 18 November. Nvidia reports its third-quarter results on Tuesday 17 November, ${L(NV_CALL, "with a call at 2 p.m. Pacific")}, seven days after Tuesday's close.`
  ]
}),

];
