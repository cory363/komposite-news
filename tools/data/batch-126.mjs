/*
Komposite News, batch 126: Tuesday 17 November 2026, round 45. One headline (lead) and four stories, all non-AI, each with its own
research layer. tools/data/lead.json pins the new lead (the Chase outage); the round-44 Entity List lead moves down the normal way.
Leads came from WebSearch, the Federal Register API, SEC EDGAR (data.sec.gov, plain client name, no email; www.sec.gov documents read
through WebFetch), Microsoft's own preliminary post-incident report and service-health text, FINRA, FRED, the FCC's own documents and
auction-data pages, and the day's reader-trend signal (research only, never cited). r45-claims.md checked before writing and before
commit. The Chase outage and Microsoft's post-incident report are Komposite's alone this round. No fact in this batch rests on The New
York Times.

---------- 14:20Z FINTECH (LEAD, OUR RESEARCH): "Chase blames a bug, and the outage rule counts bugs" (elena-vasquez, house byline) ----------
SOURCES READ:
- CNBC (Sara Salinas), "JPMorgan Chase says temporary software bug is affecting consumer banking", Mon 16 Nov 2026 4:41 PM EST, updated
  5:14 PM (read): bank statement "temporary issue related to a software bug in on-premise hardware systems"; customers could still access
  accounts and funds; spokesperson "no evidence it is cyber-related", "This is not a systemic issue", "working diligently to resolve this
  by the end of the day today"; users reported errors "as early as 11:30 a.m. ET"; U.S. Bank "not directly impacted".
- NBC News via NBC Miami (Rob Wile, Kyla Steinberg), 16 Nov 2026, updated 7:35 p.m. (read): around 4 p.m. Chase posted on X that it was
  working to resolve a temporary issue; around 6:30 p.m. a spokesperson said "Transactions are now posting normally."; Zelle: "Zelle is
  not down. Zelle is operating as it should."; PNC "not experiencing any direct impact"; Capital One "has not been impacted and continues
  to operate normally at this time"; Truist services "are operating normally"; Citibank declined to comment; Wells Fargo gave no statement.
- AP (Cathy Bussewitz, Ken Sweet) via OPB, 16 Nov 2026 9:10 p.m., updated 11:38 p.m. (read): spokesman: "not cyber-related"; Bank of
  America and Citigroup reported no issues; Early Warning Services said the Zelle network was fully operational; some customers saw a
  message that services were unavailable.
- Federal Register 2021-25510, 86 FR 66424, 23 Nov 2021, "Computer-Security Incident Notification Requirements for Banking Organizations
  and Their Bank Service Providers" (full text read via the FR API): effective 1 Apr 2022, compliance 1 May 2022; 12 CFR 53.2(b)(4)
  "Computer-security incident is an occurrence that results in actual harm to the confidentiality, integrity, or availability of an
  information system or the information that the system processes, stores, or transmits."; 53.2(b)(7) notification incident, prong (i)
  "Ability to carry out banking operations, activities, or processes, or deliver banking products and services to a material portion of
  its customer base, in the ordinary course of business"; 53.3 "as soon as possible and no later than 36 hours after the banking
  organization determines that a notification incident has occurred"; preamble: "Computer-security incidents can result from destructive
  malware or malicious software (cyberattacks), as well as non-malicious failure of hardware and software, personnel errors, and other
  causes."; n.32 "For clarity, the definition includes incidents from whatever cause."; examples incl. "Large-scale distributed denial
  of service attacks that disrupt customer account access for an extended period of time (e.g., more than 4 hours)" and "A failed system
  upgrade or change that results in widespread user outages for customers and banking organization employees"; "the agencies estimate
  that approximately 150 notification incidents occurred annually"; "No specific information is required in the notification other than
  that a notification incident has occurred."; notifications "would be subject to the agencies' confidentiality rules"; Board rule applies
  to bank holding companies among others; service providers notify banks after disruption "for four or more hours".
- JPMorgan Chase & Co. Form 10-Q for the quarter to 30 Sep 2026, filed 3 Nov 2026: income statement (R2, read): Technology,
  communications and equipment expense Q3 2026 $3,335m (Q3 2025 $2,839m), nine months $9,463m ($8,121m); total noninterest expense nine
  months $81,461m ($71,657m), Q3 $27,295m. SEC XBRL company facts (data.sec.gov, read): Deposits 30 Sep 2026 $2,780,793m; 31 Dec 2025
  $2,559,320m; us-gaap:CommunicationsAndInformationTechnology FY2025 $11,029m, FY2024 $9,831m.
- JPMorgan Chase & Co. Form 8-K filed 17 Nov 2026, Item 5.02 (read): Bregje de Best to succeed Jeremy Barnum as CFO "following its
  first-quarter 2027 financial reporting"; Barnum to become a Vice Chairman. No mention of Monday's outage.
OUR ARITHMETIC: 11:30 -> 16:00 = 4h30m; -> 16:41 = 5h11m; -> 18:30 = 7h00m. 36 h after 11:30 EST Mon 16 Nov = 23:30 EST Tue 17 Nov.
  Tech expense: 9,463 / 8,121 = +16.5%; 3,335 / 2,839 = +17.5%; 9,463 / 81,461 = 11.6% of noninterest expense. Deposits 2,780,793 /
  2,559,320 = +8.7% in nine months. 2021 rule effective 1 Apr 2022 -> 16 Nov 2026 = 1,690 days. Weekdays checked (16 Nov 2026 Monday).
HERO: Wikimedia Commons, "Chase Bank, Montrose Boulevard, Houston.jpg", WhisperToMe, CC0, 11 Sep 2022: a Chase branch at 4313 Montrose
  Boulevard, Houston, with an empty car park in front. No people. Not used on any sister site (grep of ~/Sites).

---------- 14:00Z TECHNOLOGY: "Microsoft traces its mail outage to a July fix" (tom-kessler, house byline) ----------
SOURCES READ:
- Microsoft, "Preliminary Post Incident Report for Microsoft 365", Report Date: November 15, 2026, incident EX1550543/MO1550821, 7 pages
  (copy published by 365Fanatic, read in full): start "Thursday, November 12, 2026, at 4:20 PM UTC", end "Friday, November 13, 2026, at
  4:10 PM UTC"; services impacted list (14 named); root cause "three main factors"; "a latent defect caused Windows servers to become
  overwhelmed and unresponsive under certain load conditions"; "lock contention inside an internal Windows process"; "neither the
  underlying defect nor the fix applies to broader Windows deployments"; "The initial change in behavior first started deployment in July
  of this year."; "For more than three months, the change was deployed worldwide without impact."; "The contention issue is worsened on
  machines with more cores and newer hardware; whereas our load testing tended to focus on weaker hardware with fewer cores."; Teams
  failover "Approximately fifteen hours before the outage"; "nearly 14% of server capacity for the networking gateway was out of service
  due to an unrelated issue from the previous day"; "This occurred during the peak window of traffic in the United States."; "In less than
  two hours, the previously unknown defect was encountered across our fleet"; "At its lowest, more than 80% of servers were
  unresponsive."; "the normal bulkheads between these different partitions did not stop the cascading failure"; "not all services, like
  Exchange Online, can fail out of this network gateway for scale reasons"; "our normal rollback, flighting, and feature flags were unable
  to quickly revert the change"; timeline 01:07, 16:03, 16:17, 16:20, 16:33, 18:27, 19:00, 19:20, 22:00, 23:55 (12 Nov); 00:30, 01:00,
  07:20, 11:00, 11:35, 14:17, 16:10 (13 Nov); 04:15 (14 Nov); repair items, comprehensive list "11/20/2026".
- University of Pennsylvania copy of Microsoft service-health records (downloaded 17 Nov 2026, parsed locally): EX1550543 Status
  "postIncidentReviewPublished"; Start Time field still Thu Nov 12 10:05:00 2026 UTC; End Fri Nov 13 16:10 UTC; 16 Nov 04:47:36 UTC
  "A post-incident report has been published."; final status of 14 Nov 04:15:46 UTC gives "Start time : Thursday, November 12, 2026, at
  4:20 PM UTC" and "Preliminary root cause" ("traffic shifts during standard network maintenance and upgrades exposed a latent bug").
- The Register (Richard Speed), 16 Nov 2026 11:15 UTC (read): final report due 20 November.
- Komposite's own round-43/44 records: first logged start 16:17:27 UTC; field later revised to 10:05 UTC.
OUR ARITHMETIC: 01:07 -> 16:20 = 15h13m. 16:20 -> 00:30 = 8h10m; -> 07:20 = 15h00m; -> 14:17 = 21h57m; -> 16:10 = 23h50m = 1,430 min.
  1 - 1,430/43,200 = 96.69% for a user out the whole period (still the 50% credit tier, below 99%). Start times: 10:05, 16:17:27, 16:20
  UTC; 10:05 vs 16:20 = 6h15m. July deployment to 12 Nov: 104 days (from 31 Jul) to 134 days (from 1 Jul). End 16:10 Fri -> PIR notice
  04:47 Mon = 2d12h37m. Five business days from Fri 13 Nov = Fri 20 Nov.
HERO: Wikimedia Commons, "Switch-and-nest.jpg", J.smith (English Wikipedia), CC BY-SA 2.5, 2007: a rack-mounted gigabit network switch
  in a tangle of blue and grey Cat5 cables. No people. Not used on any sister site.

---------- 13:40Z POLICY: "The SEC moves to retire 'compensation actually paid'" (jonathan-bright, house byline) ----------
SOURCES READ:
- SEC press release 2026-114, "SEC Proposes Executive and Director Compensation Disclosure Reforms", 13 Nov 2026 (read): Item 402 of
  Regulation S-K; last comprehensively reformed in 2006; comment period 60 days after Federal Register publication.
- SEC fact sheet, Release 33-11455 (5 pages, read in full): NEOs limited to PEO and PFO, "from typically five or more individuals to two
  officers in most circumstances"; three tables (Granted, Earned, Status of Equity Awards) replacing current tables "including the Summary
  Compensation Table"; perquisite threshold "from $10,000 to $150,000 for each NEO"; removes guidance examples "including security
  provided at an executive's personal residence or during personal travel"; CD&A three topics; PvP: replace CAP "with the total amount
  shown in the Earned Compensation Table", performance measures limited to cumulative TSR, "three years of pay-versus-performance
  disclosure rather than five years", PEO and PFO only; pay ratio: U.S. full-time employees only, median employee "from once every three
  years to once every five years"; eliminate disclosure on risk-related compensation policies and on equity grants close to MNPI.
- Chairman Paul S. Atkins, statement, 13 Nov 2026 (read): "the last time the Commission comprehensively reviewed Item 402 was twenty years
  ago with the 2006 amendments."; "the rule has become bloated—reaching nearly the end of the alphabet in its internal organizational
  system"; "today's amendments aim to reduce compliance burdens for companies while remaining faithful to the congressional mandate."
- SEC XBRL frames API (data.sec.gov), ecd:PeoTotalCompAmt and ecd:PeoActuallyPaidCompAmt, CY2025, downloaded 17 Nov 2026: 1,362 and
  1,371 data points; 1,346 companies with both and a positive summary-table total.
- Federal Register API, SEC documents published 12-17 Nov 2026 (checked 17 Nov): proposal not yet published.
OUR ARITHMETIC (frames CY2025, n = 1,346): median summary-table total $4,403,300 (4,403,299.5); median CAP $3,248,855; median absolute
  gap |CAP/SCT - 1| = 36.6%; CAP above SCT 627 (46.6%), below 613 (45.5%), equal 106 (7.9%); gap > 50%: 560 (41.6%); gap > 100%: 319
  (23.7%); within 10%: 322 (23.9%); negative CAP 114 (8.5%). Fiscal years ending: Dec 2025 1,071; others Jun 2025 to May 2026. Perk
  threshold 150,000 / 10,000 = 15x. 2006 -> 2026 = 20 years.
HERO: Wikimedia Commons, "Facade of the U.S. Securities and Exchange Commission headquarters, Washington, D.C.jpg", David (Flickr user
  dbking), CC BY 2.0, 4 Oct 2008: street lamps in front of the glass facade of the SEC's headquarters. No people. Not used on any sister
  site.

---------- 13:20Z MARKETS: "Margin debt slips 3.6 per cent from its June record" (priya-raghavan, house byline) ----------
SOURCES READ:
- FINRA, Margin Statistics (page and spreadsheet margin-statistics.xlsx, Last-Modified Fri 13 Nov 2026 20:59 GMT, downloaded 17 Nov,
  $ millions): Debit Balances in Customers' Securities Margin Accounts: Oct 2026 1,448,360; Sep 1,480,054; Aug 1,453,832; Jul 1,417,225;
  Jun 1,502,072 (series high); May 1,415,557; Oct 2025 1,183,654; Jun 2025 1,007,961. Free credit balances Oct 2026: cash accounts 210,290,
  margin accounts 212,890 (Oct 2025: 197,923 and 195,376). Earlier peaks: Mar 2000 299,933 (Mar 1999 166,? see yoy 80.5%), Jul 2007
  416,403, Apr 2011 360,883, Apr 2015 549,964, May 2018 668,940, Oct 2021 935,862; lows in following 12 months computed from the file.
- FRED, S&P 500 (SP500), daily (read): 30 Jun 2026 7,499.36; 30 Oct 2026 7,580.07; 16 Nov 2026 7,416.59.
OUR ARITHMETIC: Oct vs Sep -2.1%; Oct vs Jun -3.6%; Jul vs Jun -5.6%; Oct y/y +22.4%; Jun y/y +49.0%. Net debit (debit minus both free
  credit balances) Oct 2026 1,025,180 vs Oct 2025 790,355 = +29.7%. Peaks (local maximum within 18 months either side) and 12-month growth
  into each: Mar 2000 +80.5% (low within 12 months -41.7%, Mar 2001); Jul 2007 +62.6% (-20.2%, Apr 2008); Apr 2011 +22.1% (-17.3%, Sep
  2011); Apr 2015 +15.7% (-13.8%, Feb 2016); May 2018 +14.8% (-17.1%, Dec 2018); Oct 2021 +41.9% (-30.6%, Oct 2022); Jun 2026 +49.0%
  (so far -5.6%, Jul 2026). S&P 500 30 Jun -> 30 Oct +1.1%; 30 Oct -> 16 Nov -2.2%.
HERO: Wikimedia Commons, "New York Stock Exchange, Wall Street 1.jpg", Mike Peel, CC BY-SA 4.0, 7 Jul 2012: the columned facade of the
  New York Stock Exchange on Broad Street hung with a large US flag. No identifiable people. Not used on any sister site.

---------- 13:00Z TECHNOLOGY: "Sixty-eight days to finish the upper C-band auction" (tom-kessler, house byline) ----------
SOURCES READ:
- FCC Office of Economics and Analytics / Wireless Telecommunications Bureau, Public Notice DA 26-1219, Released November 13, 2026,
  "Auction of Flexible-Use Licenses in the Upper C-Band ... Bidding Scheduled to Begin April 27, 2027", AU Docket No. 26-191, 87 pages
  (read): 3,248 licences, 3.98-4.14 GHz, eight 20-megahertz blocks by PEA, 15-year terms; dates: tutorial by 11 Dec 2026; Form 175
  window 6 Jan 2027 12:00 ET to 20 Jan 2027 18:00 ET; upfront payments by 18 Mar 2027 18:00 ET; bidding tutorial by 5 Apr; mock auction
  21 Apr; bidding 27 Apr 2027; statute (Pub. L. 119-21 s. 40002(b)(2)) quoted: "complet[e] a system of competitive bidding not later than 2
  years after the date of enactment of this Act for not less than 100 megahertz in the band between 3.98 gigahertz and 4.2 gigahertz";
  minimum opening bids $0.03/$0.006/$0.003 per MHz-pop (PEAs 1-50 / 51-100 / rest), minimum $1,000 per block, same tiers as Auction 107
  (n.363); no aggregate reserve price; upfront payments about half the minimum opening bids; AT&T, T-Mobile and Verizon designated
  nationwide providers; n.60 declines later short-form deadline sought by CTIA, AT&T and T-Mobile ("as much time as possible between quiet
  periods", "just coming out of the quiet period for Auction 113"); declines to commit to rounds per day sought by CTIA and Verizon
  ("no fewer than four rounds per day").
- FCC Public Notice DA 26-769, Released July 24, 2026 (comment notice, read): comment 24 Aug, replies 8 Sep 2026.
- FCC Auction Public Reporting System, Auction 107 (read): clock phase 12/8/2020-1/15/2021, assignment phase 2/8/2021-2/17/2021, 57
  qualified bidders, 21 winners, 5,684 licences, gross proceeds $81,168,677,645. Auction 110 (read): clock 10/5/2021-11/16/2021,
  assignment 12/9/2021-1/4/2022, 23 winners, gross $22,513,601,811.
- Light Reading (Jeff Baumgartner), 13 Nov 2026 (read): upfront date corrected to 18 March; quotes FCC on "lit up for most Americans
  before the end of 2030".
OUR ARITHMETIC: 27 Apr -> 4 Jul 2027 = 68 days. Auction 107 first clock round to end of assignment phase: 8 Dec 2020 -> 17 Feb 2021 = 71
  days (clock 38 days). Auction 110: 5 Oct 2021 -> 4 Jan 2022 = 91 days (clock 42 days). 27 Apr + 71 = 7 Jul 2027; + 91 = 27 Jul; + 38 =
  4 Jun; + 42 = 8 Jun. 17 Nov 2026 -> 27 Apr 2027 = 161 days; -> 6 Jan = 50 days. 4 Jul 2027 is a Sunday. Auction 107 $81.17bn / 280 MHz.
HERO: Wikimedia Commons, "Sugar Scoop Antenna, OTC Satellite Earth Station Carnarvon, July 2020 03.jpg", Calistemon, CC BY-SA 4.0,
  10 Jul 2020: the horn-shaped sugar-scoop antenna at the former OTC satellite earth station, Carnarvon, Western Australia, with a dish
  behind. No identifiable people. Not used on any sister site.

UNIQUENESS: 6-gram overlap with top outlet sources reported in the commit message.
*/
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const FI = P("fintech", "Fintech", "fintech", "Photograph via Wikimedia Commons");
const TE = P("technology", "Technology", "technology", "Photograph via Wikimedia Commons");
const PO = P("policy", "Policy", "policy", "Photograph via Wikimedia Commons");
const MK = P("markets", "Markets", "markets", "Photograph via Wikimedia Commons");

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

/* Sources: lead (Chase) */
const CNBC_CHASE = "https://www.cnbc.com/2026/11/16/jpmorgan-chase-technical-issue.html";
const NBC_CHASE = "https://www.nbcmiami.com/news/national-international/chase-bank-of-america-wells-fargo-bank-outages-reported/3888781/";
const AP_CHASE = "https://www.opb.org/article/2026/11/16/a-technical-issue-at-jpmorgan-chase-triggers-online-banking-delays-across-major-us-banks/";
const FR_NOTIFY = "https://www.federalregister.gov/documents/2021/11/23/2021-25510/computer-security-incident-notification-requirements-for-banking-organizations-and-their-bank";
const JPM_10Q = "https://www.sec.gov/Archives/edgar/data/19617/000162828026069523/jpm-20260930.htm";
const JPM_R2 = "https://www.sec.gov/Archives/edgar/data/19617/000162828026069523/R2.htm";
const JPM_XBRL = "https://data.sec.gov/api/xbrl/companyfacts/CIK0000019617.json";
const JPM_8K = "https://www.sec.gov/Archives/edgar/data/19617/000001961726000407/jpm-20261117.htm";

/* Sources: Microsoft */
const MS_PIR = "https://www.365fanatic.com/wp-content/uploads/2026/11/postincidentreport.pdf";
const MS_FANATIC = "https://www.365fanatic.com/m365-outage-12-november-2026/";
const MS_HEALTH = "https://mailservices.isc.upenn.edu/computing/email/penno365/alerts/ms-incidents.html";
const REG_MS = "https://theregister.com/saas/2026/11/16/microsoft-blames-monster-email-outage-on-software-defect-introduced-in-july-fix/5310026";

/* Sources: SEC */
const SEC_PR = "https://www.sec.gov/newsroom/press-releases/2026-114-sec-proposes-executive-director-compensation-disclosure-reforms";
const SEC_FS = "https://www.sec.gov/files/33-11455-fact-sheet.pdf";
const SEC_PROP = "https://www.sec.gov/files/rules/proposed/2026/33-11455.pdf";
const SEC_ATKINS = "https://www.sec.gov/newsroom/speeches-statements/atkins-statement-proposing-release-executive-compensation-disclosure-reform-111326";
const FRAME_SCT = "https://data.sec.gov/api/xbrl/frames/ecd/PeoTotalCompAmt/USD/CY2025.json";
const FRAME_CAP = "https://data.sec.gov/api/xbrl/frames/ecd/PeoActuallyPaidCompAmt/USD/CY2025.json";

/* Sources: margin */
const FINRA_PAGE = "https://www.finra.org/finra-data/browse-catalog/margin-statistics";
const FINRA_XLSX = "https://www.finra.org/sites/default/files/2021-03/margin-statistics.xlsx";
const FRED_SP = "https://fred.stlouisfed.org/series/SP500";

/* Sources: C-band */
const FCC_PN = "https://docs.fcc.gov/public/attachments/DA-26-1219A1.pdf";
const FCC_COMMENT_PN = "https://docs.fcc.gov/public/attachments/DA-26-769A1.pdf";
const FCC_A107 = "https://auctiondata.fcc.gov/public/projects/auction107";
const FCC_A110 = "https://auctiondata.fcc.gov/public/projects/auction110";
const LR_CBAND = "https://www.lightreading.com/regulatory-politics/fcc-sets-key-dates-for-upper-c-band-auction";

/* ---------- Lead tables ---------- */
const CHASE_CLOCK = table(
  ["Time (EST)", "What happened", "Hours after first reports"],
  [
    ["11:30 Mon 16 Nov", `Earliest customer reports of errors, ${L(CNBC_CHASE, "according to CNBC")}`, "0"],
    ["About 16:00", `Chase posts on X that it is working to resolve a temporary issue, ${L(NBC_CHASE, "NBC News reported")}`, "4.5"],
    ["16:41", "CNBC publishes the bank's statement blaming a software bug in on-premise hardware", "5.2"],
    ["About 18:30", `A spokesperson says "Transactions are now posting normally"`, "7.0"],
    ["23:30 Tue 17 Nov", "Latest time the OCC could receive notice if Chase had judged at 11:30 on Monday that the outage was a notification incident", "36.0"]
  ],
  `Komposite's timeline from the reports linked in each row. The last row is our arithmetic, not a known filing: the rule's 36 hours run from the moment a bank determines that an incident qualifies, which may be later than the first customer report, and Chase has not said whether or when it made that determination.`
);

const JPM_TECH = table(
  ["JPMorgan Chase, $ millions", "Q3 2025", "Q3 2026", "Nine months 2025", "Nine months 2026", "Change, nine months"],
  [
    ["Technology, communications and equipment expense", "2,839", "3,335", "8,121", "9,463", "+16.5%"],
    ["Total noninterest expense", "24,281", "27,295", "71,657", "81,461", "+13.7%"],
    ["Technology as a share of noninterest expense", "11.7%", "12.2%", "11.3%", "11.6%", ""]
  ],
  `From the income statement in ${L(JPM_10Q, "JPMorgan Chase's 10-Q for the quarter to 30 September 2026")} (${L(JPM_R2, "XBRL rendering")}). Changes and shares are Komposite's arithmetic.`
);

const CHASE_RULE = table(
  ["What the 2021 rule looks at", "What the rule says", "What Chase has said in public"],
  [
    ["Cause", "Incidents count \"from whatever cause\", including non-malicious hardware and software failure", "A software bug in on-premise hardware; \"no evidence it is cyber-related\""],
    ["Effect on customers", "Material disruption to services for \"a material portion of its customer base\"", "Some transactions slower; customers kept access to accounts and funds; numbers affected not given"],
    ["Duration", "One example cites account access disrupted for \"more than 4 hours\"", "Reports ran from about 11:30 to about 18:30 EST"],
    ["Deadline", "No later than 36 hours after the bank determines the incident qualifies", "Not said whether or when it made that determination"],
    ["Public disclosure", "None required; notices fall under supervisory confidentiality rules", "Statements to the press and on X"]
  ],
  `Komposite's close reading of ${L(FR_NOTIFY, "the final rule, 86 FR 66424")}, set against the bank's statements as reported by CNBC, NBC News and the AP. The rule's examples are illustrative; each bank decides case by case.`
);

/* ---------- Microsoft table ---------- */
const MS_CLOCK = table(
  ["Time (UTC)", "What Microsoft's preliminary report says happened", "Hours after the 16:20 alert"],
  [
    ["01:07 Thu 12 Nov", "Automated failover moves Teams traffic onto the gateway servers shared with Exchange Online", "&minus;15.2"],
    ["16:03", "Anomaly monitor sees connectivity problems rising", "&minus;0.3"],
    ["16:20", "High-priority alert; incident EX1550543 posted", "0"],
    ["19:00", "All deployments and configuration changes paused", "2.7"],
    ["00:30 Fri 13 Nov", "Connection negotiation identified as the main cause of access failures", "8.2"],
    ["07:20", "Update reverting the defective change applied to part of the capacity", "15.0"],
    ["14:17", "Global webmail availability back to expected levels", "22.0"],
    ["16:10", "No active customer impact; extended monitoring begins", "23.8"]
  ],
  `Times from ${L(MS_PIR, "Microsoft's preliminary post-incident report")}, dated 15 November 2026; elapsed hours are Komposite's arithmetic.`
);

const MS_STARTS = table(
  ["Where the start time appears", "Start (UTC, Thu 12 Nov)", "Outage to 16:10 Fri", "Uptime for a user out throughout, 30-day month"],
  [
    ["Incident record as first logged (our 13 November reading)", "16:17", "23h53m", "96.68%"],
    ["Start Time field of the closed record, still shown on 17 November", "10:05", "30h05m", "95.82%"],
    ["Final status text and preliminary report", "16:20", "23h50m", "96.69%"]
  ],
  `Komposite's comparison of ${L(MS_HEALTH, "Microsoft's service-health record as copied by the University of Pennsylvania")} with the preliminary report. Uptime is our arithmetic on 43,200 minutes; all three fall in the same credit tier of Microsoft's service-level agreement (below 99 per cent, above 95).`
);

/* ---------- SEC table ---------- */
const PAY_GAP = table(
  ["How far 'actually paid' sat from the summary-table total, fiscal 2025", "Companies", "Share"],
  [
    ["Within 10 per cent either way", "322", "23.9%"],
    ["More than 50 per cent apart", "560", "41.6%"],
    ["More than 100 per cent apart", "319", "23.7%"],
    ["'Actually paid' was negative", "114", "8.5%"],
    ["'Actually paid' higher than the summary table", "627", "46.6%"],
    ["'Actually paid' lower", "613", "45.5%"],
    ["Identical", "106", "7.9%"]
  ],
  `Komposite's analysis of the chief executive figures that 1,346 companies tagged in their pay-versus-performance tables for fiscal years ending between June 2025 and May 2026, from the SEC's XBRL frames for ${L(FRAME_SCT, "summary-table total pay")} and ${L(FRAME_CAP, "compensation actually paid")}. Companies with more than one chief executive in the year, which tag each separately, are not in these frames. Medians: $4.40m reported, $3.25m actually paid. Some filers' tags contain obvious scale errors, which is why we use counts and medians rather than totals.`
);

const PAY_RULES = table(
  ["Item", "Today", "As proposed"],
  [
    ["Named executive officers", "Typically five or more", "Principal executive and principal financial officer"],
    ["Main pay tables", "Summary Compensation Table and others", "Granted, Earned and Status of Equity Awards tables"],
    ["Pay versus performance", "'Compensation actually paid', five years", "Earned Compensation Table total, three years, shareholder return only"],
    ["Perquisite threshold", "$10,000", "$150,000 per executive"],
    ["Pay ratio median employee", "All employees worldwide, refreshed every three years", "US full-time employees, every five years"]
  ],
  `Komposite's summary of ${L(SEC_FS, "the SEC's fact sheet")} for Release 33-11455.`
);

/* ---------- Margin table ---------- */
const MARGIN_PEAKS = table(
  ["Peak month", "Debit balances ($bn)", "Growth in the 12 months into the peak", "Lowest month in the next 12", "Fall to that low"],
  [
    ["March 2000", "299.9", "+80.5%", "March 2001", "&minus;41.7%"],
    ["July 2007", "416.4", "+62.6%", "April 2008", "&minus;20.2%"],
    ["April 2011", "360.9", "+22.1%", "September 2011", "&minus;17.3%"],
    ["April 2015", "550.0", "+15.7%", "February 2016", "&minus;13.8%"],
    ["May 2018", "668.9", "+14.8%", "December 2018", "&minus;17.1%"],
    ["October 2021", "935.9", "+41.9%", "October 2022", "&minus;30.6%"],
    ["June 2026", "1,502.1", "+49.0%", "July 2026 (so far)", "&minus;5.6%"]
  ],
  `Komposite's analysis of ${L(FINRA_XLSX, "FINRA's margin statistics")}, January 1997 to October 2026: debit balances in customers' securities margin accounts. A peak is the highest month within 18 months either side. Growth and falls are our arithmetic.`
);

const MARGIN_2026 = table(
  ["Month-end", "Debit balances ($bn)", "Change on the month"],
  [
    ["December 2025", "1,225.6", "+0.9%"], ["January 2026", "1,279.0", "+4.4%"], ["February", "1,253.2", "&minus;2.0%"],
    ["March", "1,220.9", "&minus;2.6%"], ["April", "1,304.3", "+6.8%"], ["May", "1,415.6", "+8.5%"], ["June", "1,502.1", "+6.1%"],
    ["July", "1,417.2", "&minus;5.6%"], ["August", "1,453.8", "+2.6%"], ["September", "1,480.1", "+1.8%"], ["October", "1,448.4", "&minus;2.1%"]
  ],
  `From ${L(FINRA_XLSX, "FINRA's margin statistics")}; monthly changes are Komposite's arithmetic. Debit balances rose 22.6 per cent between December 2025 and June 2026.`
);

/* ---------- C-band table ---------- */
const CBAND_CLOCK = table(
  ["Auction", "Bidding opened", "Assignment phase ended", "Days", "Same length from 27 April 2027 ends"],
  [
    [`${L(FCC_A107, "Auction 107")} (3.7-3.98 GHz)`, "8 Dec 2020", "17 Feb 2021", "71", "7 July 2027"],
    [`${L(FCC_A110, "Auction 110")} (3.45-3.55 GHz)`, "5 Oct 2021", "4 Jan 2022", "91", "27 July 2027"],
    ["Auction 107, clock phase only", "8 Dec 2020", "15 Jan 2021 (clock)", "38", "4 June 2027"],
    ["Auction 110, clock phase only", "5 Oct 2021", "16 Nov 2021 (clock)", "42", "8 June 2027"],
    ["Statutory deadline for Auction 115", "27 Apr 2027", "", "68", "4 July 2027"]
  ],
  `Komposite's arithmetic from phase dates in the FCC's Auction Public Reporting System and the schedule in ${L(FCC_PN, "Public Notice DA 26-1219")}. Days are counted from the first day of bidding to the last day of the assignment phase. Past auctions are a guide to pace, not a forecast.`
);

export default [

/* ---------- 13:00Z TECHNOLOGY ---------- */
TE({ slug: "sixty-eight-days-to-finish-the-upper-c-band-auction", kick: "Spectrum",
  headline: "Sixty-eight days to finish the upper C-band auction",
  dek: "The FCC has set bidding for 3,248 upper C-band licences to start on 27 April 2027. Congress wants the auction completed by 4 July. The last two mid-band auctions took 71 and 91 days from first bid to final assignment.",
  metaDesc: "FCC Auction 115 bidding starts 27 April 2027, 68 days before the statutory 4 July deadline; Auctions 107 and 110 took 71 and 91 days, by our count.",
  author: "tom-kessler", date: "2026-11-17T13:00:00Z",
  capt: "A horn-shaped sugar-scoop antenna, with a dish antenna behind it, at the former satellite earth station in Carnarvon, Western Australia, in a file photograph from 2020.",
  tags: [
    { name: "Infrastructure", slug: "infrastructure" },
    { name: "Regulation", slug: "regulation" },
    { name: "Networking", slug: "networking" }
  ],
  related: [
    R("/technology/eight-billion-for-14-mhz-and-the-carriers-sold-off/", "Spectrum"),
    R("/policy/fcc-leaves-the-transceiver-alone/", "Regulation"),
    R("/technology/musk-closes-a-loophole-kyiv-says-never-existed/", "Satellites")
  ],
  body: [
    `Bidding in the Federal Communications Commission's upper C-band auction opens on 27 April 2027, ${L(FCC_PN, "the FCC said on Friday")}, 68 days before the 4 July 2027 date by which Congress told it to finish.`,
    `The notice, DA 26-1219, sets the rules for Auction 115: 3,248 flexible-use licences covering 160 megahertz between 3.98 and 4.14 GHz, sold as eight 20-megahertz blocks in each partial economic area of the contiguous United States, with 15-year renewable terms. Applications open at noon Eastern time on 6 January and close at 18:00 on 20 January. Upfront payments are due by 18:00 on 18 March, a mock auction runs on 21 April and the first round follows six days later.`,
    `<h2>Where does the 4 July deadline come from?</h2>`,
    `From the budget law signed on 4 July 2025. The notice quotes Section 40002(b)(2) of Public Law 119-21, which directs the commission to "complet[e] a system of competitive bidding not later than 2 years after the date of enactment of this Act for not less than 100 megahertz in the band between 3.98 gigahertz and 4.2 gigahertz." Auction 115 offers 160 megahertz, more than the floor. The law does not define "complete" in the passage the notice quotes, and the notice does not say which stage of the auction the agency treats as completion. The deadline falls on a Sunday.`,
    `The FCC's own record suggests the date will be tight if the auction runs at the pace of its predecessors. Komposite took the phase dates of the two most recent mid-band clock auctions from the agency's public reporting system. ${L(FCC_A107, "Auction 107")}, the first C-band sale, began on 8 December 2020; its clock phase ended on 15 January 2021 and its assignment phase, in which winners bid for specific frequencies, ended on 17 February, 71 days after the first round. ${L(FCC_A110, "Auction 110")} took 91 days from first round to final assignment. The same spans counted from 27 April 2027 end on 7 July and 27 July.`,
    CBAND_CLOCK,
    `The clock phase alone would fit comfortably. Auction 107's took 38 days and Auction 110's 42, which from 27 April would end in early June. Auction 115 uses the same two-phase design, an ascending clock auction for generic blocks followed by an assignment phase, and the number of rounds a day is at the FCC's discretion. The notice declines a request from CTIA and Verizon to commit to "no fewer than four rounds per day", saying the agency will instead adjust the schedule, the activity requirement and the price increments "only as needed to bring the auction to a timely close".`,
    `<h2>Who asked for more time, and what did they get?</h2>`,
    `The carriers asked for a later start to the paperwork, not to the bidding. CTIA, the wireless trade group, AT&amp;T and T-Mobile wanted the short-form deadline pushed back to shorten the quiet period during which applicants may not discuss bids, CTIA arguing that the industry was "just coming out of the quiet period for Auction 113". The notice declines, saying the schedule weighs "the statutory deadline for completing a system of competitive bidding" among other things. It designates AT&amp;T, T-Mobile and Verizon as nationwide providers for the anti-collusion rule, as in past auctions.`,
    `The money rules follow Auction 107 closely. Minimum opening bids are $0.03 per megahertz-pop in the 50 largest markets, $0.006 in the next 50 and $0.003 elsewhere, with a floor of $1,000 a block, the same tiers the FCC used in 2020. Upfront payments are roughly half the opening bids. There is no aggregate reserve price. The notice repeats that minimum bids "are not meant to predict the value of the spectrum". For scale only, Auction 107 raised $81.17bn in gross proceeds for 280 megahertz, by the FCC's figures, or about $290m a megahertz by our division; on top of their bids, Auction 115 winners must pay their share of the costs of moving satellite services out of the band, incentive payments to satellite operators that clear on time, and rebates for retrofitting aircraft radio altimeters, the notice says.`,
    `The July ${L(FCC_COMMENT_PN, "comment notice")} had proposed most of what Friday's notice adopts; comments closed on 24 August and replies on 8 September. ${L(LR_CBAND, "Light Reading reported")} that the FCC expects the band to be "lit up for most Americans before the end of 2030". Komposite has covered the scramble for mid-band and low-band airwaves, including SpaceX's agreement to buy <a href="/technology/eight-billion-for-14-mhz-and-the-carriers-sold-off/">800 MHz licences from Grain Management</a> in October, and the FCC's <a href="/policy/fcc-leaves-the-transceiver-alone/">equipment authorisation rule</a> in September.`,
    `The next fixed date is the online application tutorial, due by 11 December, followed by the filing window 50 days from now. Whether the FCC can finish both phases in 68 days will be visible in the round schedule it publishes a week before bidding begins.`
  ]
}),

/* ---------- 13:20Z MARKETS ---------- */
MK({ slug: "margin-debt-slips-3-6-per-cent-from-its-june-record", kick: "Leverage",
  headline: "Margin debt slips 3.6 per cent from its June record",
  dek: "Investors owed their brokers $1.448tn at the end of October, FINRA figures show, down from $1.502tn in June. The run-up into June was the steepest before a peak since 2007, by our analysis of the series since 1997.",
  metaDesc: "FINRA data show margin debt of $1.448tn in October 2026, 3.6% below June's $1.502tn record; the 49% rise into June was the steepest since 2007, by our count.",
  author: "priya-raghavan", date: "2026-11-17T13:20:00Z",
  capt: "The columned facade of the New York Stock Exchange on Broad Street, Manhattan, hung with a large US flag, in a file photograph from 2012.",
  tags: [
    { name: "Capital Markets", slug: "capital-markets" },
    { name: "Trading", slug: "trading" },
    { name: "Risk", slug: "risk" }
  ],
  related: [
    R("/markets/the-basis-trade-meets-a-haircut/", "Leverage"),
    R("/markets/ten-stocks-are-now-forty-percent/", "Equities"),
    R("/crypto/ibit-shrank-by-46m-shares-as-bitcoin-fell-15-per-cent/", "Bitcoin")
  ],
  body: [
    `Investors owed their brokers $1.448tn in margin debt at the end of October 2026, 3.6 per cent less than the record $1.502tn of June, according to monthly figures that the Financial Industry Regulatory Authority posted on Friday.`,
    `The ${L(FINRA_PAGE, "FINRA statistics")} count debit balances in customers' securities margin accounts at member brokers, money borrowed against shares and other securities. October's figure was down 2.1 per cent from September's $1.480tn and still 22.4 per cent higher than a year earlier, by our arithmetic. Free credit balances, the cash customers keep at brokers, were $210.3bn in cash accounts and $212.9bn in margin accounts. Netting both off the debit balance leaves $1.025tn of borrowing, up 29.7 per cent on October 2025.`,
    `Most of the rise came in three months. Debit balances grew 6.8 per cent in April, 8.5 per cent in May and 6.1 per cent in June, adding $281.2bn between March's $1.221tn and the June record, by our arithmetic. Margin debt had first passed its previous high, October 2021's $935.9bn, in January 2025. Free credit balances have grown far more slowly: up 6.2 per cent on the year in cash accounts and 9.0 per cent in margin accounts.`,
    MARGIN_2026,
    `<h2>How unusual was the climb into June?</h2>`,
    `Steeper than before any peak in the series except those of 2000 and 2007. Komposite took ${L(FINRA_XLSX, "FINRA's spreadsheet")}, which runs monthly from January 1997, and marked each month that was the highest within 18 months on either side. There are seven. Margin debt rose 49.0 per cent in the 12 months to June 2026, from $1.008tn in June 2025. The rise into March 2000 was 80.5 per cent and into July 2007 62.6 per cent. The rise into October 2021, the last peak before this one, was 41.9 per cent.`,
    MARGIN_PEAKS,
    `After every earlier peak, debit balances fell at least 13.8 per cent within a year. After the 2000 and 2021 peaks they fell by more than 30 per cent. So far the drop from June has been smaller: the low was July's $1.417tn, 5.6 per cent below the record, and the figure climbed again in August and September before October's decline. Those six episodes are a small sample, and a peak can only be identified with hindsight; the table shows what followed, not what will follow.`,
    `Prices have not fallen much. The S&amp;P 500 closed at 7,499.36 on 30 June and 7,580.07 on 30 October, a rise of 1.1 per cent, ${L(FRED_SP, "according to FRED")}, while margin debt fell 3.6 per cent over the same months. The index then lost 2.2 per cent to 7,416.59 by Monday's close. FINRA's November figure, which will show whether borrowing kept falling as prices did, is not due until next month.`,
    `<h2>What the figures do not show</h2>`,
    `FINRA's series covers member broker-dealers only. It does not include loans that banks make against securities, leverage inside funds, or the borrowing embedded in options and leveraged exchange-traded products. Debit balances also tend to rise with prices, because higher collateral values let investors borrow more against the same holdings. A drop of 3.6 per cent from the top is modest next to the falls in the table.`,
    `Why it matters: margin loans are callable, and when prices fall, brokers can demand more collateral or sell positions, which can add to the decline. The rise into June was large by the standards of the past 30 years, and the unwinding has been slow. Komposite has reported on other pockets of leverage this year, including the <a href="/markets/the-basis-trade-meets-a-haircut/">hedge-fund basis trade in Treasuries</a>, and on bitcoin's November slide, during which <a href="/crypto/ibit-shrank-by-46m-shares-as-bitcoin-fell-15-per-cent/">the largest bitcoin fund shed 46m shares</a>.`
  ]
}),

/* ---------- 13:40Z POLICY ---------- */
PO({ slug: "the-sec-moves-to-retire-compensation-actually-paid", kick: "Disclosure",
  headline: "The SEC moves to retire 'compensation actually paid'",
  dek: "The SEC's proposed rewrite of executive-pay disclosure would drop a Dodd-Frank-era measure that, by our analysis of 1,346 companies' filings, sat a median 37 per cent away from the pay figure companies already report.",
  metaDesc: "The SEC would replace 'compensation actually paid'; across 1,346 firms it differed from reported CEO pay by a median 37% in fiscal 2025, our analysis finds.",
  author: "jonathan-bright", date: "2026-11-17T13:40:00Z",
  capt: "Street lamps in front of the glass facade of the Securities and Exchange Commission's headquarters in Washington, in a file photograph from 2008.",
  tags: [
    { name: "Regulation", slug: "regulation" },
    { name: "Capital Markets", slug: "capital-markets" },
    { name: "Transparency", slug: "transparency" }
  ],
  related: [
    R("/policy/the-sec-steps-out-of-the-proxy-ballot/", "Proxy Rules"),
    R("/policy/sec-proposes-to-rescind-the-pay-to-play-rule/", "Regulation"),
    R("/policy/the-sec-filed-348-cases-half-in-the-last-two-months/", "Enforcement")
  ],
  body: [
    `The Securities and Exchange Commission has proposed scrapping "compensation actually paid", a pay measure that differed from reported chief executive pay by a median 37 per cent across 1,346 companies last year, by our analysis.`,
    `The ${L(SEC_PR, "proposal")}, announced on Friday 13 November, would rewrite Item 402 of Regulation S-K, the rule that sets what goes in the pay section of proxy statements. The SEC said the rule was last comprehensively reformed in 2006. Chairman Paul Atkins said in ${L(SEC_ATKINS, "a statement")} that "the rule has become bloated—reaching nearly the end of the alphabet in its internal organizational system" and that the changes "aim to reduce compliance burdens for companies while remaining faithful to the congressional mandate". Comments are open for 60 days after the proposal appears in the Federal Register; it had not appeared there as of Tuesday, by our check.`,
    `<h2>What is "compensation actually paid"?</h2>`,
    `It is the pay-versus-performance figure the SEC created in 2022 to meet a Dodd-Frank Act requirement. It adjusts the summary-table total by replacing the grant-date value of equity awards with their fair value at year-end and changes in that value, so it moves with the share price and can turn negative. Under the proposal, ${L(SEC_FS, "the fact sheet says")}, the measure would be replaced "with the total amount shown in the Earned Compensation Table", performance disclosure would be limited to cumulative shareholder return, and three years would be shown instead of five.`,
    `Companies tag both numbers in their filings, so the gap can be measured. Komposite pulled the SEC's XBRL frames for the 2025 calendar-year period, matched each company's chief executive summary-table total with its compensation actually paid, and kept the 1,346 companies with both. The median company reported $4.40m in its summary table and $3.25m actually paid. Only about a quarter had the two within 10 per cent of each other. The 1,346 are the companies whose filings tag a single chief executive figure for the period, so the count covers most, not all, of the companies that file pay-versus-performance tables; 1,071 of them have fiscal years ending in December.`,
    PAY_GAP,
    `The spread cuts both ways. Almost as many companies showed more pay actually paid as showed less, and 114 reported a negative figure, which happens when the value of earlier awards falls by more than the year's pay. Two numbers that move this differently, printed side by side, are what the proposal would collapse into one. The proposed Earned Compensation Table would count stock as earned when it vests and options when they are exercised, a third approach.`,
    `<h2>What else would change?</h2>`,
    `The list of disclosed executives would shrink. Named executive officers would be limited to the principal executive and principal financial officer, which the fact sheet says would cut the number "from typically five or more individuals to two officers in most circumstances". The threshold for itemising perquisites would rise fifteen-fold, and the guidance would lose its examples, "including security provided at an executive's personal residence or during personal travel".`,
    PAY_RULES,
    `The narrative section would get shorter too. The Compensation Discussion and Analysis would have to cover three topics: the objectives of the pay programme in relation to strategy, the material elements of pay and how they are set, and, where applicable, whether the latest say-on-pay vote was considered. The current rule's list of 15 example topics would go. Tables of what executives would receive in hypothetical terminations or changes of control would be replaced by a qualitative description of the material terms, and director pay disclosure would become, in the fact sheet's words, "more principles-based".`,
    `The proposal would also drop disclosure of risk-related pay policies and of equity grants made close to the release of material non-public information, and would let companies using long-form registration statements give pay data up to 120 days after year-end. The SEC has published the full ${L(SEC_PROP, "proposing release")}.`,
    `The proposal is the latest of several this year that pare back disclosure rules. Komposite reported in September on the SEC's plans to <a href="/policy/the-sec-steps-out-of-the-proxy-ballot/">rescind the shareholder-proposal rule</a> and to <a href="/policy/sec-proposes-to-rescind-the-pay-to-play-rule/">scrap the pay-to-play rule for investment advisers</a>. The comment period, once the Federal Register prints the release, will run for 60 days from that date.`
  ]
}),

/* ---------- 14:00Z TECHNOLOGY ---------- */
TE({ slug: "microsoft-traces-its-mail-outage-to-a-july-fix", kick: "Outages",
  headline: "Microsoft traces its mail outage to a July fix",
  dek: "A Windows change Microsoft began deploying in July sat dormant for more than three months before taking down the gateway in front of Exchange Online, its preliminary report says. More than 80 per cent of the gateway's servers stopped responding.",
  metaDesc: "Microsoft's preliminary report blames a July Windows fix for the 12-13 Nov Exchange Online outage; over 80% of gateway servers stopped responding.",
  author: "tom-kessler", date: "2026-11-17T14:00:00Z",
  capt: "A rack-mounted network switch surrounded by a tangle of blue and grey network cables, in a file photograph from 2007.",
  tags: [
    { name: "Cloud", slug: "cloud" },
    { name: "Resilience", slug: "resilience" },
    { name: "Enterprise Software", slug: "enterprise-software" }
  ],
  related: [
    R("/technology/microsoft-moves-its-outage-start-six-hours-earlier/", "Outages"),
    R("/technology/microsofts-mail-outage-crosses-the-slas-99-per-cent-line/", "Outages"),
    R("/cybersecurity/a-softbank-cloud-tells-customers-to-rebuild/", "Cloud")
  ],
  body: [
    `A Windows fix that Microsoft began deploying in July caused the Exchange Online outage of 12 and 13 November, the company says in a preliminary post-incident report dated 15 November.`,
    `A surge of Teams traffic and a block of servers already out of service pushed the gateway in front of Exchange past breaking point, the report says. More than 80 per cent of the gateway's servers stopped responding at the worst point, and mail access was disrupted for most users for 23 hours and 50 minutes.`,
    `The seven-page report, ${L(MS_PIR, "a copy of which was published by the Microsoft 365 site 365Fanatic")}, describes "a latent defect" that made Windows servers "overwhelmed and unresponsive under certain load conditions" through "lock contention inside an internal Windows process". The fix was "prepared specifically for Microsoft 365 networking gateway servers", and Microsoft says "neither the underlying defect nor the fix applies to broader Windows deployments". The report gives the outage as 16:20 UTC on Thursday to 16:10 UTC on Friday, 23 hours and 50 minutes by our arithmetic.`,
    `<h2>Why did a July change fail in November?</h2>`,
    `Because the load changed. The report says the change "first started deployment in July of this year" and that "For more than three months, the change was deployed worldwide without impact", between 104 and 134 days by our count depending on the July start. Load testing missed it: "The contention issue is worsened on machines with more cores and newer hardware; whereas our load testing tended to focus on weaker hardware with fewer cores."`,
    `Two things then lined up. About 15 hours before the outage, at 01:07 UTC, Teams failed over from Microsoft's alternative gateway onto the "primary" one that also carries Exchange Online, which the report calls "part of normal operations". And "nearly 14% of server capacity for the networking gateway was out of service due to an unrelated issue from the previous day". The servers began failing "during the peak window of traffic in the United States". When failing servers handed their traffic to healthy ones, those failed too: "In less than two hours, the previously unknown defect was encountered across our fleet", and "At its lowest, more than 80% of servers were unresponsive."`,
    MS_CLOCK,
    `The gateway was built to contain this kind of failure, and that did not work either. Microsoft says the gateway is made of "thousands of 'capacity units'" grouped into regions, but "due to a separate issue, the normal bulkheads between these different partitions did not stop the cascading failure", which is how the fault spread worldwide. The timeline shows the first night's fixes failing: at 22:00 UTC on Thursday Microsoft's telemetry "confirmed that the actions we'd taken to restore service had not been effective", and at 23:55 it found that servers returned to service "initially remained healthy but then become unresponsive again upon receiving traffic". The report does not describe the separate issue that weakened the bulkheads.`,
    `Teams, OneDrive and SharePoint moved off the faulty gateway, which is why they recovered first, but "not all services, like Exchange Online, can fail out of this network gateway for scale reasons". Restarted servers were "immediately overwhelmed by waiting traffic", and because the defect was months old, "our normal rollback, flighting, and feature flags were unable to quickly revert the change". Engineers took eight hours and ten minutes from the first alert to identify connection negotiation as the problem, and 15 hours to begin applying an update that put the code back to its earlier state, by our arithmetic from the report's timeline.`,
    `<h2>Which start time is right?</h2>`,
    `The report says 16:20 UTC, but Microsoft's own incident record still disagrees. The closed record for EX1550543, ${L(MS_HEALTH, "as copied by the University of Pennsylvania")} on Tuesday, carries a Start Time field of 10:05 UTC, the time Komposite <a href="/technology/microsoft-moves-its-outage-start-six-hours-earlier/">reported on Saturday</a> as a six-hour revision. Its final status text and the report both say 16:20. The record's status changed to "postIncidentReviewPublished" with a note at 04:47 UTC on Monday that "A post-incident report has been published".`,
    MS_STARTS,
    `For customers' service credits the difference does not change the tier, by our arithmetic, though it changes the minutes counted, which Microsoft measures per user across a tenant. As we <a href="/technology/microsofts-mail-outage-crosses-the-slas-99-per-cent-line/">reported on Friday</a>, customers have to claim those credits from Microsoft; they are not paid automatically.`,
    `The report lists five repair items as completed, including guardrails "for traffic distribution to avoid cascading impact" and more monitoring, and says a "comprehensive list of repair items will be delivered as part of the final PIR" on 20 November, ${L(REG_MS, "the date The Register also gave")}. ${L(MS_FANATIC, "365Fanatic's summary")} says the report runs to seven pages. The final report is the next fixed date, five business days after Friday's end time.`
  ]
}),

/* ---------- 14:20Z FINTECH (LEAD) ---------- */
FI({ slug: "chase-blames-a-bug-and-the-outage-rule-counts-bugs", kick: "Banking",
  headline: "Chase blames a bug, and the outage rule counts bugs",
  dek: "JPMorgan Chase says Monday's disruption to consumer transactions came from a software bug in its own on-premise hardware, not a cyberattack. The 2021 federal rule on bank incident notices covers outages from any cause, and gives banks 36 hours.",
  metaDesc: "Chase blamed a bug in on-premise hardware for its 16 Nov outage; the 2021 bank notice rule covers incidents 'from whatever cause', with 36 hours to report.",
  author: "elena-vasquez", date: "2026-11-17T14:20:00Z",
  capt: "A Chase branch on Montrose Boulevard in Houston, Texas, with an empty car park in front, in a file photograph from 2022.",
  tags: [
    { name: "Banking", slug: "banking" },
    { name: "Resilience", slug: "resilience" },
    { name: "Regulation", slug: "regulation" },
    { name: "Payments", slug: "payments" }
  ],
  related: [
    R("/fintech/jpmorgans-deposit-token-now-on-the-main-chain/", "Banking"),
    R("/fintech/banking-software-modernization-wave/", "Banking Technology"),
    R("/technology/microsoft-moves-its-outage-start-six-hours-earlier/", "Outages")
  ],
  body: [
    `JPMorgan Chase blamed a software bug in its own on-premise hardware for Monday's disruption to consumer transactions, which customers first reported at about 11:30 EST and which the bank said had cleared by about 18:30 EST.`,
    `The largest US bank said in ${L(CNBC_CHASE, "a statement reported by CNBC")} that it had experienced a "temporary issue related to a software bug in on-premise hardware systems", that customers could still reach their accounts and funds, and that there was "no evidence it is cyber-related". "This is not a systemic issue," a spokesperson said. Transactions with other banks were delayed only where Chase was a party, the bank said. It has not said how many customers were affected or which system failed.`,
    `By about 18:30 a spokesperson told ${L(NBC_CHASE, "NBC News")}: "Transactions are now posting normally." Zelle, the payments network operated by Early Warning Services, said: "Zelle is not down. Zelle is operating as it should." U.S. Bank said it was "not directly impacted", PNC was "not experiencing any direct impact" and Capital One "has not been impacted", NBC reported. Bank of America and Citigroup reported no problems with their own services, ${L(AP_CHASE, "the Associated Press reported")}, and some Chase customers saw a message that services were unavailable.`,
    CHASE_CLOCK,
    `<h2>Does an outage that is not a cyberattack have to be reported?</h2>`,
    `It can be. The test in federal banking rules turns on the effect of an incident, not on whether anyone attacked the bank. The ${L(FR_NOTIFY, "computer-security incident notification rule")} adopted in November 2021 by the Office of the Comptroller of the Currency, the Federal Reserve and the Federal Deposit Insurance Corporation, in force since April 2022, defines a computer-security incident as "an occurrence that results in actual harm to the confidentiality, integrity, or availability of an information system". The agencies wrote that such incidents "can result from destructive malware or malicious software (cyberattacks), as well as non-malicious failure of hardware and software, personnel errors, and other causes". When two commenters asked them to exclude non-malicious causes, they declined: "For clarity, the definition includes incidents from whatever cause."`,
    `An incident becomes reportable, a "notification incident", when it has materially disrupted or degraded, or is reasonably likely to, a bank's ability "to deliver banking products and services to a material portion of its customer base, in the ordinary course of business", or a business line or operations whose failure would threaten financial stability. The agencies listed examples. Two sit close to Monday's facts: "A failed system upgrade or change that results in widespread user outages for customers and banking organization employees", and attacks that "disrupt customer account access for an extended period of time (e.g., more than 4 hours)". Whether Chase's bug met the materiality test is a judgment for the bank and its supervisors; Chase's own statement that customers kept access to their funds would weigh in that judgment.`,
    `The deadline is short. A bank "must notify" its primary federal regulator "as soon as possible and no later than 36 hours after the banking organization determines that a notification incident has occurred". For JPMorgan Chase Bank, N.A., a national bank, that regulator is the OCC; the Fed's version of the rule covers bank holding companies such as JPMorgan Chase &amp; Co. The notice can be an email or a phone call, and "No specific information is required in the notification other than that a notification incident has occurred." Notices are covered by the agencies' confidentiality rules, so if Chase filed one, the public is unlikely to see it.`,
    `Banks argued for longer when the rule was drafted. Several commenters asked for 72 hours, to match New York's financial regulator and the EU's data-protection law, and one asked for five business days for banks under $20bn in assets. The agencies kept 36: "The agencies continue to believe that 36 hours is the appropriate timeframe, given the simplicity of the notification requirement and the severity of incidents captured by the definition of 'notification incident.'" They added that the clock starts only once a bank has determined that an incident qualifies, which leaves the bank time to assess what happened.`,
    CHASE_RULE,
    `<h2>How big is the operation that slowed?</h2>`,
    `Very. JPMorgan Chase held $2.78tn of deposits at 30 September, ${L(JPM_XBRL, "according to its filings with the SEC")}, up 8.7 per cent in nine months by our arithmetic. Its spending on technology has grown faster than its other costs. In the first nine months of 2026 the bank's technology, communications and equipment expense was $9.46bn, up 16.5 per cent on a year earlier, while total noninterest expense rose 13.7 per cent.`,
    JPM_TECH,
    `The phrase "on-premise" places the fault in hardware the bank runs itself, rather than with a cloud provider or an outside processor. Chase has not elaborated. Its only Form 8-K on Tuesday, ${L(JPM_8K, "filed with the SEC")}, concerned the succession of its chief financial officer: Bregje de Best will succeed Jeremy Barnum after the bank reports first-quarter 2027 results, and Barnum will become a vice chairman. It does not mention Monday's outage.`,
    `<h2>Why it matters</h2>`,
    `The rule was written for exactly this kind of week. When it was adopted, the agencies estimated about 150 notification incidents a year across the banks they supervise, a figure based on supervisory data and suspicious-activity reports for 2019 and 2020. It also requires vendors that run services for banks to warn their bank customers when a disruption lasts four hours or more. Monday's outage came four days after <a href="/technology/microsoft-traces-its-mail-outage-to-a-july-fix/">a Microsoft gateway failure</a> that Microsoft also traced to a latent software defect, and three days after an air traffic control outage that grounded US flights for several hours, the AP noted.`,
    `Chase has said its systems are back to normal. What it has not said, how many customers were hit, whether fees or failed payments will be reversed, and whether it judged the outage reportable, is the next thing to watch. Komposite reported in October on <a href="/fintech/jpmorgans-deposit-token-now-on-the-main-chain/">JPMorgan's deposit token moving onto Ethereum</a>, part of the same bank's effort to run more of its payments on new rails.`
  ]
})

];
