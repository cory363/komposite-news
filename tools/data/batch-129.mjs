/*
Komposite News, batch 129: round Nov 26 headline, published 26 Nov 2026 (publish.mjs, then wire.mjs).
---------- CYBERSECURITY (HEADLINE): "Every Item 1.05 Cybersecurity 8-K Filed in 2026: 18 Companies, Days From Discovery to Filing and the Amendments" ----------
METHOD (26 Nov 2026): EDGAR full-text search (efts.sec.gov, plain research-desk User-Agent, no email) for "Item 1.05", "Material
  Cybersecurity Incidents", "cybersecurity incident", "cyber incident", "cybersecurity attack", "ransomware", "threat actor",
  "unauthorized access" and "cybersecurity event" in forms 8-K and 8-K/A filed 1 Jan to 26 Nov 2026, keeping filings whose EDGAR item
  list includes 1.05. Every query returned the same set: 18 original 8-Ks from 17 companies (Park Dental twice) and 7 8-K/As (West 1,
  River Financial 4, Stryker 1, Wytec 1 for an August 2025 incident). Each company's data.sec.gov submissions file was checked for 8-K
  item lists and earlier 8.01/7.01 reports. Each primary 8-K was read through WebFetch (www.sec.gov blocks curl without an email UA).
  Same search for 2023, 2024 and 2025 gives the by-year table. No Item 1.05 filing after 13 Oct 2026 (re-checked 26 Nov, and again at release on 26 Nov evening ET).
SOURCES READ (26 Nov 2026): the 8-Ks and 8-K/As linked in the tables; Stryker 8-K 11 Mar (Item 8.01) and 8-K/A 9 Apr; Boston Scientific
  8-K 26 Aug (8.01), 8-K 8 Sep (1.05), Q2 and Q3 2026 earnings releases, 10-Q filed 2 Nov; Stryker Q1 2026 earnings release; Nutex 8-K
  24 Aug (8.01) and 10 Sep update (Ex 99.1); Quest Diagnostics 8-K 22 Oct (8.01); SEC final rule 33-11216 (26 Jul 2023, text parsed);
  Gerding statement 21 May 2024; Atkins statement on reforming Regulation S-K, 13 Jan 2026 (file CLL-15); SEC petition file 4-856;
  CTIA comment letter of 2 Oct 2026 in CLL-15 (PDF parsed).
OUR ARITHMETIC: calendar days from the detection date each filing gives to the Item 1.05 filing, 14 companies with a day given:
  UFPT 10, TRT 9, CCLD 11, SYK 29, BTM 16, WST 7, CBFV 6, TOI 2 (vendor notice), IRTC 7, EGHT 10, RVRF 6, NAVI 24, PARK 4, BSX 14.
  Median 9.5. Business days from stated materiality date to filing (10 companies): TRT 2, CCLD 3, BTM 2, WST 2, CBFV 2, IRTC 3,
  AHCO 4 (27 Jun was a Saturday), NAVI 3, AMGN 2, ASTH 1. Median 2. Boston Scientific Q3 net sales $5.138bn (+1.5%) vs Q2 $5.442bn
  (+7.5%), full-year guidance in July 5.5 to 6.5 per cent.
HERO: Unsplash WUJmdr8pNwk (photo-1768839720936-87ce3adf2d08), Sasun Bughdaryan: a combination lock on a computer keyboard. No people.
  Not used anywhere in ~/Sites (grep of both IDs, 26 Nov).
*/
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const CY = P("cybersecurity", "Cybersecurity", "cybersecurity", "Photograph via Unsplash");

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

/* Sources */
const E = (cik, acc, doc) => `https://www.sec.gov/Archives/edgar/data/${cik}/${acc}/${doc}`;
const UFPT = E(914156, "000162828026011152", "ufpt-20260219.htm");
const TRT = E(732026, "000143774926009193", "trt20260320_8k.htm");
const CCLD = E(1582982, "000149315226013239", "form8-k.htm");
const SYK8 = E(310764, "000119312526102460", "d76279d8k.htm");
const SYKA = E(310764, "000119312526149607", "d112875d8ka.htm");
const SYKQ1 = E(310764, "000031076426000025", "sykex991earningsq12026.htm");
const BTM = E(1901799, "000119312526147772", "btm-20260406.htm");
const WST = E(105770, "000010577026000068", "wst-20260507.htm");
const WSTA = E(105770, "000010577026000077", "wst-20260507.htm");
const CBFV = E(1605301, "000160530126000021", "cbfv-20260507.htm");
const TOI = E(1799191, "000107997326000721", "toi_8k.htm");
const IRTC = E(1388658, "000138865826000055", "irtc-20260610.htm");
const EGHT = E(1023731, "000102373126000084", "eght-20260617.htm");
const RVRF = E(1641601, "000119312526282946", "ck0001641601-20260619.htm");
const RVRFA = E(1641601, "000119312526325324", "ck0001641601-20260619.htm");
const AHCO = E(1725255, "000110465926080297", "ahco-20260627x8k.htm");
const NAVI = E(1593538, "000114036126027441", "ef20077249_8k.htm");
const AMGN = E(318154, "000031815426000119", "amgn-20260729.htm");
const NUTX8 = E(1479681, "000162828026058606", "nutx-20260824.htm");
const NUTX = E(1479681, "000162828026059602", "nutx-20260831.htm");
const NUTXU = E(1479681, "000162828026061432", "materiality_assessmentxupd.htm");
const PARK1 = E(2069604, "000110465926104300", "park-20260828x8k.htm");
const PARK2 = E(2069604, "000110465926115541", "park-20261007x8k.htm");
const BSX8 = E(885725, "000088572526000056", "bsx-20260826.htm");
const BSX = E(885725, "000088572526000059", "bsx-20260907.htm");
const BSXQ2 = E(885725, "000088572526000051", "q22026earningsrelease.htm");
const BSXQ3 = E(885725, "000088572526000066", "earningsrelease_live.htm");
const BSX10Q = E(885725, "000088572526000070", "bsx-20260930.htm");
const ASTH = E(1083446, "000110465926109813", "asth-20260922x8k.htm");
const QUEST = E(1022079, "000094787126000941", "ss6979200_8k.htm");
const RULE = "https://www.sec.gov/files/rules/final/2023/33-11216.pdf";
const GERDING = "https://www.sec.gov/newsroom/speeches-statements/gerding-cybersecurity-incidents-05212024";
const ATKINS = "https://www.sec.gov/newsroom/speeches-statements/atkins-statement-reforming-regulation-s-k-011326";
const PETITION = "https://www.sec.gov/comments/4-856/4-856.htm";
const CTIA = "https://www.sec.gov/comments/CLL-15/cll15-1082159-3759646.pdf";
const FTS = "https://efts.sec.gov/LATEST/search-index?q=%22Item%201.05%22&forms=8-K&dateRange=custom&startdt=2026-01-01&enddt=2026-11-26";

/* ---------- Tables ---------- */
const RECORD = table(
  ["Company", "What the filing describes", "Found", "Item 1.05 filed", "Days", "Other filings on the incident"],
  [
    [L(UFPT, "UFP Technologies"), "Unauthorised access hit billing and label systems, and some files were taken", "About 14 Feb", "24 Feb", "10", "None"],
    [L(TRT, "Trio-Tech International"), "Ransomware encrypted files at a Singapore subsidiary", "11 Mar", "20 Mar", "9", "None"],
    [L(CCLD, "CareCloud"), "An intruder reached one of six health-record environments for about eight hours", "16 Mar", "27 Mar", "11", "None"],
    [L(BTM, "Bitcoin Depot"), "Settlement-account credentials taken and about 50.9 bitcoin moved out", "23 Mar", "8 Apr", "16", "None"],
    [L(SYKA, "Stryker"), "Global disruption to its Microsoft environment", "11 Mar", "9 Apr, by 8-K/A", "29", `${L(SYK8, "Item 8.01 report")} on 11 Mar`],
    [L(WST, "West Pharmaceutical Services"), "Data taken and systems encrypted, operations disrupted worldwide", "4 May", "11 May", "7", `${L(WSTA, "8-K/A")} on 20 May`],
    [L(CBFV, "CB Financial Services"), "Customer data handled in an unauthorised AI application", "5 May", "11 May", "6", "None"],
    [L(TOI, "The Oncology Institute (now Starling Oncology)"), "A software vendor's breach reached company systems", "20 May (vendor's notice)", "22 May", "2", "Item 7.01 report on 6 Nov 2025"],
    [L(IRTC, "iRhythm"), "Data taken from third-party-hosted applications after social engineering, then a payment demand", "8 Jun", "15 Jun", "7", "None"],
    [L(EGHT, "8x8"), "An attacker used a Klue integration with its Salesforce system to take customer data", "13 Jun", "23 Jun", "10", "None"],
    [L(RVRF, "River Financial"), "Ransomware across part of its server environment", "19 Jun", "25 Jun", "6", "Four 8-K/As, 6 to 30 Jul"],
    [L(AHCO, "AdaptHealth"), "A contractor's session hijacked by social engineering, patient data taken", "Not given", "2 Jul", "", "None"],
    [L(NAVI, "Navient"), "Ransomware at an outside law firm holding borrower data", "8 Jun", "2 Jul", "24", "None"],
    [L(AMGN, "Amgen"), "Data, including patient health information, taken from third-party cloud environments", "July, no day given", "31 Jul", "", "None"],
    [L(NUTX, "Nutex Health"), "Data taken from its servers, and the attacker threatened to post it", "Not given", "31 Aug", "", `${L(NUTX8, "Item 8.01 report")} on 24 Aug, ${L(NUTXU, "update")} on 10 Sep`],
    [L(PARK1, "Park Dental Partners"), "Unauthorised access to its network, patient data acquired", "28 Aug", "1 Sep", "4", `${L(PARK2, "Second Item 1.05 report")} on 13 Oct`],
    [L(BSX, "Boston Scientific"), "A network outage disrupted manufacturing and order shipping", "25 Aug", "8 Sep", "14", `${L(BSX8, "Item 8.01 report")} on 26 Aug`],
    [L(ASTH, "Astrana Health"), "Callers spoofed the company's phone number to get into its systems", "Not given", "23 Sep", "", "None"]
  ],
  `Every 8-K and 8-K/A filed under Item 1.05 between 1 January and 26 November 2026, from ${L(FTS, "EDGAR full-text search")} and each company's EDGAR filing list. "Found" is the detection date the filing gives. "Days" is calendar days from that date to the Item 1.05 filing, Komposite's arithmetic, left blank where the filing gives no day. Wytec International also filed an 8-K/A in February for an August 2025 incident and is not counted.`
);

const CLOCK = table(
  ["Company", "Date it judged the incident material", "Item 1.05 filed", "Business days"],
  [
    [L(TRT, "Trio-Tech International"), "18 Mar, when the incident escalated", "20 Mar", "2"],
    [L(CCLD, "CareCloud"), "24 Mar", "27 Mar", "3"],
    [L(BTM, "Bitcoin Depot"), "6 Apr", "8 Apr", "2"],
    [L(WST, "West Pharmaceutical Services"), "7 May", "11 May", "2"],
    [L(CBFV, "CB Financial Services"), "7 May", "11 May", "2"],
    [L(IRTC, "iRhythm"), "10 Jun", "15 Jun", "3"],
    [L(AHCO, "AdaptHealth"), "27 Jun (a Saturday)", "2 Jul", "4"],
    [L(NAVI, "Navient"), "29 Jun", "2 Jul", "3"],
    [L(AMGN, "Amgen"), "29 Jul", "31 Jul", "2"],
    [L(ASTH, "Astrana Health"), "22 Sep", "23 Sep", "1"]
  ],
  `The ten 2026 filers that state the date they decided the incident was material. Business days exclude weekends and federal holidays, Komposite's count. ${L(RULE, "The SEC's rule")} allows four business days from that decision.`
);

const IMPACT = table(
  ["What the filing said about money", "Companies", "Count"],
  [
    ["Results were, or are likely to be, materially hit", `${L(SYKA, "Stryker")} (first quarter of 2026), ${L(BSX, "Boston Scientific")} (third quarter and full year)`, "2"],
    ["Not reasonably likely, or not expected, to have a material financial impact", `${L(UFPT, "UFP Technologies")}, ${L(CCLD, "CareCloud")}, ${L(BTM, "Bitcoin Depot")}, ${L(CBFV, "CB Financial Services")}, ${L(IRTC, "iRhythm")}, ${L(EGHT, "8x8")}, ${L(NAVI, "Navient")}, ${L(AMGN, "Amgen")}, ${L(ASTH, "Astrana Health")}`, "9"],
    ["Financial impact not yet determined when it filed", `${L(TRT, "Trio-Tech")}, ${L(WST, "West Pharmaceutical")}, ${L(TOI, "The Oncology Institute")}, ${L(RVRF, "River Financial")}, ${L(AHCO, "AdaptHealth")}, ${L(NUTX, "Nutex Health")}, ${L(PARK1, "Park Dental Partners")}`, "7"]
  ],
  `Komposite's reading of each company's first Item 1.05 filing (Stryker's 8-K/A). West Pharmaceutical's ${L(WSTA, "amendment")} later said the attack was not reasonably likely to materially affect its 2026 guidance.`
);

const YEARS = table(
  ["Year filed", "Original Item 1.05 8-Ks", "Companies", "Item 1.05 amendments (8-K/A)"],
  [
    ["2023 (from 18 December)", "2", "2", "1"],
    ["2024", "24", "24", "14"],
    ["2025", "15", "14", "4"],
    ["2026, to 26 November", "18", "17, plus Stryker by amendment", "7"]
  ],
  `Komposite's count from ${L(FTS, "EDGAR full-text search")} for "Item 1.05" and "Material Cybersecurity Incidents" in 8-K and 8-K/A filings, keeping those EDGAR tags with Item 1.05. Full-text search can miss a filing whose text is not indexed, so treat these as floors.`
);

export default [

/* ---------- CYBERSECURITY (HEADLINE) ---------- */
CY({ slug: "item-1-05-cybersecurity-8-k-filings-2026", kick: "Disclosure",
  headline: "Every Item 1.05 Cybersecurity 8-K Filed in 2026: 18 Companies, Days From Discovery to Filing and the Amendments",
  dek: "Eighteen listed companies have told the SEC this year that a cyber incident was material. Twelve are in health care, only two said their results took a material hit, and the median gap from detection to filing was nine and a half days.",
  metaDesc: "18 companies filed Item 1.05 cyber 8-Ks in 2026 to 26 Nov. Median 9.5 days from detection to filing, 12 in health care, only 2 reported a material hit to results.",
  author: "staff", date: "2026-11-26T22:00:00Z",
  capt: "A combination lock resting on a laptop keyboard, in a file photograph.",
  tags: [
    { name: "Cybersecurity", slug: "cybersecurity" },
    { name: "Regulation", slug: "regulation" },
    { name: "Ransomware", slug: "ransomware" }
  ],
  related: [
    R("/cybersecurity/quest-says-patient-records-were-reached-through-its-ordering-portal/", "Cybersecurity"),
    R("/fintech/chase-blames-a-bug-and-the-outage-rule-counts-bugs/", "Banking"),
    R("/cybersecurity/the-negotiator-is-charged-with-extortion/", "Ransomware")
  ],
  body: [
    `<strong>Eighteen companies that report to the SEC have filed an Item 1.05 cybersecurity 8-K in 2026, the SEC form for a cyber incident a company has judged material, and where a filing dates the discovery, the median gap from detecting the incident to filing was nine and a half days.</strong> Twelve of the 18 are in health care or medical devices. Only Stryker and Boston Scientific said the incident had hit, or was likely to hit, their financial results. Nine said it was not likely to have a material financial impact at all, and seven had not yet worked it out when they filed.`,
    `The count is Komposite's, built from ${L(FTS, "EDGAR full-text search")} and each company's own EDGAR filing list, with every filing read. No Item 1.05 report has been filed since Park Dental Partners updated its August incident on 13 October. Quest Diagnostics, which said on 22 October that an unauthorised party had reached patient records, used ${L(QUEST, "Item 8.01")} instead and has filed nothing further on it.`,
    `<h2>The 18 companies that reported a material cyber incident in 2026</h2>`,
    `${L(RULE, "The SEC rule adopted in July 2023")} requires a company to describe a material incident's nature, scope and timing, and its material or reasonably likely material impact. Most companies have had to comply since 18 December 2023, and smaller reporting companies since 15 June 2024. The record below lists the 2026 reports in the order they were filed.`,
    RECORD,
    `<h2>How long companies took from detection to an Item 1.05 filing</h2>`,
    `Fourteen filings give a detection date. Measured from that date, the fastest was The Oncology Institute, two days after a vendor's administrator told it the breach had reached its systems. The slowest were Stryker at 29 days and Navient at 24. Navient's delay has a plain explanation in its filing: the ransomware hit a law firm it uses, and Navient judged the matter material three weeks after it learned of it.`,
    `The deadline does not run from detection. The rule gives a company four business days from the date it decides an incident is material, and tells it to make that decision without unreasonable delay. Ten filings state that decision date, and all ten met the four-day clock, most with two days to spare.`,
    CLOCK,
    `Analysis: the rule's real pressure point is the materiality decision, which companies control and mostly do not date. Eight of the 18 filings give no date for it. Nothing in the rule makes them, so a reader cannot tell from those filings whether a decision came the day after detection or three weeks later.`,
    `<h2>Most filers said the incident would not hurt their finances</h2>`,
    `Half the 2026 filers called an incident material while saying it was not likely to have a material financial impact. That is not a contradiction under the rule. The SEC wrote in ${L(RULE, "its adopting release")} that companies should weigh qualitative factors, and named harm to reputation, customer relationships and the possibility of litigation or regulatory action. iRhythm said it judged its incident material in light of the volume of potentially affected data. Amgen gave the same reason, citing the volume of files taken from cloud environments run by third parties.`,
    IMPACT,
    `The two companies that did report a hit to results are the largest operational disruptions in the set. Stryker's ${L(SYKA, "amendment")} said the incident had a material impact on its operations and on its first-quarter results, but not on its full-year guidance. Its ${L(SYKQ1, "first-quarter release")} showed organic sales growth of 2.4 per cent, against full-year guidance of 8.0 to 9.5 per cent that it kept. Boston Scientific said in ${L(BSX, "its 8 September filing")} that it was unlikely to meet its guidance. Its ${L(BSXQ3, "third-quarter release")} reported net sales of $5.138bn, up 1.5 per cent, after ${L(BSXQ2, "growth of 7.5 per cent")} in the second quarter. Neither company has put a dollar figure on its incident, and Boston Scientific's ${L(BSX10Q, "10-Q filed on 2 November")} still lists the incident among its risks.`,
    `<h2>Four companies reported under another item first</h2>`,
    `In May 2024 the director of the SEC's Division of Corporation Finance, Erik Gerding, ${L(GERDING, "asked companies")} to use a different item, such as Item 8.01, for incidents that were immaterial or not yet assessed. If such an incident is later judged material, the statement says, an Item 1.05 report should follow within four business days of that decision.`,
    `Four of this year's filers followed that path. Stryker reported its incident under ${L(SYK8, "Item 8.01")} on the day it found it and moved it to Item 1.05 by amendment 29 days later. Boston Scientific's ${L(BSX8, "8.01 report")} came a day after detection and its Item 1.05 report 13 days after that. Nutex Health said in its ${L(NUTX8, "24 August 8.01 report")} that it did not believe the incident was likely to have a material impact. Seven days later it filed under Item 1.05, and that ${L(NUTX, "filing")} referred to litigation over the breach. The Oncology Institute first described its vendor's incident in an Item 7.01 report in November 2025, six months before its Item 1.05 filing.`,
    `<h2>Health care companies filed most of this year's reports</h2>`,
    `Twelve of the 18 are health care providers, medical device makers, drug makers or health software firms: UFP Technologies, CareCloud, Stryker, West Pharmaceutical, The Oncology Institute, iRhythm, AdaptHealth, Amgen, Nutex, Park Dental, Boston Scientific and Astrana. Four are in finance (two banks, the loan servicer Navient and the bitcoin ATM operator Bitcoin Depot) and two are technology companies. Komposite reported in October that ${L("/cybersecurity/quest-says-patient-records-were-reached-through-its-ordering-portal/", "Quest Diagnostics' patient records were reached through its ordering portal")}, the same pattern outside the Item 1.05 list.`,
    `The way in was often someone else's system. Six filings trace the incident to a vendor, contractor, law firm, integration or third-party cloud: The Oncology Institute, iRhythm, 8x8, AdaptHealth, Navient and Amgen. Three describe social engineering, including Astrana's account of callers who spoofed the company's main phone number. CB Financial Services stands apart. Its bank subsidiary found that non-public customer information, including Social Security numbers, had been handled in ${L(CBFV, "an unauthorised AI-based software application")}. No attacker is named, and the bank said there was no disruption to its operations.`,
    `<h2>Item 1.05 filings by year since the rule took effect</h2>`,
    `By our count, 2026 has already produced more original Item 1.05 reports than all of 2025, though from fewer companies than 2024. Analysis: the fall after 2024 matches the timing of the May 2024 staff statement, which discouraged using Item 1.05 for incidents not yet judged material.`,
    YEARS,
    `Amendments are rarer than the rule implies. Its Instruction 2 requires an amended 8-K once information that was missing at filing becomes known. Seven of this year's filers said some impact was not yet determined. Apart from Stryker, whose amendment was its first Item 1.05 report, only West Pharmaceutical and River Financial have filed Item 1.05 amendments so far, River four times in July. Its ${L(RVRFA, "last amendment")} still had not said whether the incident was material. Nutex and Park Dental updated through a press release and a second 8-K instead.`,
    `<h2>How to check a company's cyber filings on EDGAR</h2>`,
    `<div><ol style="margin:0 0 18px 20px;padding:0"><li>Open ${L("https://www.sec.gov/edgar/search/", "EDGAR full-text search")} and search the exact phrase "Item 1.05" with the form type set to 8-K, which also returns 8-K/A amendments.</li><li>Run the company name a second time with "cybersecurity incident" and no item filter, to catch Item 8.01 and 7.01 reports filed before or instead of an Item 1.05 report.</li><li>In each filing, note three dates: when the incident was found, when the company judged it material, and when it filed.</li><li>Check the company's filing list for 8-K/A amendments and for the next 10-Q, which may describe costs the 8-K left out.</li></ol></div>`,
    `<h2>Mistakes to avoid when reading Item 1.05 filings</h2>`,
    `The first is reading "material" as a statement about money. Most 2026 filers used the item while saying their finances were not likely to be materially affected. The second is measuring the deadline from the breach. It runs from the materiality decision, which many filings do not date. The third is treating the Item 1.05 list as the full record of serious incidents. Quest's patient-record breach and every 8.01-only disclosure sit outside it. Banks also answer to a separate regime: Komposite explained in November how ${L("/fintech/chase-blames-a-bug-and-the-outage-rule-counts-bugs/", "the bank incident notice rule")} gives a bank 36 hours to tell its regulator.`,
    `<h2>Whether the SEC will keep the rule</h2>`,
    `Item 1.05 is unchanged, but it is under review. A ${L(PETITION, "joint petition")} filed in 2025 asks the SEC to rescind it. In January the SEC chairman, Paul Atkins, ${L(ATKINS, "directed a review of Regulation S-K")}, aimed at dropping requirements that elicit immaterial information, and opened file CLL-15 for comment. In a ${L(CTIA, "2 October letter")} to that file, the wireless trade group CTIA asked the SEC to rescind the Item 1.05 requirement, arguing that its narrow delay allowance for national security does not fit the way the FBI coordinates incident responses. Komposite found no SEC proposal to change it. Until it does, the next test of the four-day clock is the next company to decide an incident is material, and Quest Diagnostics is the most recent large disclosure still filed under Item 8.01.`,
    `Checked 26 November 2026 against every Item 1.05 8-K and 8-K/A filed in 2026 and linked above, the Item 8.01 reports from Stryker, Boston Scientific, Nutex Health and Quest Diagnostics, the Stryker and Boston Scientific earnings releases, the SEC's adopting release, the May 2024 Corporation Finance statement, the January 2026 Regulation S-K statement, petition file 4-856 and the CTIA letter. Day counts, the impact grouping, the sector count and the yearly totals are Komposite's arithmetic.`,
    `AI at Komposite News. Komposite uses AI tools to summarise filings, regulatory notices and company statements, to draft articles and to translate some Spanish-language pages. From November 2026 onward, no article goes up until a human editor has approved it.`
  ]
})

];
