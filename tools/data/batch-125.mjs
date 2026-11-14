/*
Komposite News, batch 125: Saturday 14 November 2026, round 44. One headline (lead) and four stories, each with its own research layer.
tools/data/lead.json pins the new lead (the Entity List freeze); the round-43 Microsoft lead moves down the normal way. Leads came from
WebSearch, the Federal Register API, SEC EDGAR (data.sec.gov, plain client name, no email; www.sec.gov documents read through WebFetch),
Microsoft's own service-health text, Nvidia's and BlackRock's own pages, FRED and the day's reader-trend signal (research only, never
cited). r44-claims.md checked before writing and before commit. The Bessent/Commerce Megaspeed dispute, Lutnick and Nvidia export
controls, Nvidia and the Microsoft outage are Komposite's alone this round. No fact in this batch rests on The New York Times; facts
that Fortune attributes to that paper (Oracle/Tencent, Lutnick's comments on the deal) are deliberately not used.

---------- 14:20Z POLICY (LEAD, OUR RESEARCH): "The Entity List has not grown since October 2025" (jonathan-bright, house byline) ----------
SOURCES READ:
- Federal Register API (federalregister.gov/api/v1/documents.json), queried 14 Nov 2026: (a) all RULE documents from the Industry and
  Security Bureau matching "Entity List", 2018-01-01 to date, 164 results, titles, dates and abstracts read; (b) all BIS RULE documents
  since 2025-10-01, 17 results. Newest rule adding names: 2025-19508, "Additions to the Entity List", 9 Oct 2025 (Thursday), abstract
  "adding 29 entries (26 entities and 3 addresses) to the Entity List under the destinations of People's Republic of China (China) (19),
  Turkey (9), and the United Arab Emirates (UAE) (1)". 2025 addition rules: 16 Jan 2025-00480 (16 entities) and 2025-00704 (11 entities
  under 11 entries); 28 Mar 2025-05426 (70) and 2025-05427 (12); 16 Sep 2025-17893 (32: China 23, India 1, Iran 1, Singapore 1, Taiwan
  1, Turkey 3, UAE 2); 9 Oct 2025-19508 (26 entities, 29 entries). Since 9 Oct 2025: 16 further BIS rules (incl. one correction), none
  adds a name; two take names off: 2025-19858 (12 Nov 2025, removes one China entity and six aliases of another) and 2026-17230 / 2026-17231
  (24 Aug 2026, one Turkey entity removed; two addresses of Arrow Electronics (Hong Kong) removed).
- Federal Register 2026-22793, 91 FR 70789, "Extension of the Suspension of Expansion of End-User Controls for Affiliates of Certain
  Listed Entities", published Mon 9 Nov 2026 (full text read): "The suspension was set to end November 9, 2026. This final rule extends
  the suspension through January 10, 2027."; "BIS is extending the suspension until January 10, 2027."; Background says the IFR was
  published "On September 20, 2025" while the DATES paragraph says "on September 30, 2025"; signed Jeffrey I. Kessler, Under Secretary for
  Industry and Security; "[FR Doc. 2026-22793 Filed 11-5-26; 4:15 pm]". Gives no reason for the extension. Quotes ECRA authority for
  "establishing and maintaining a list of foreign persons and end uses that are determined to be a threat to the national security and
  foreign policy of the United States".
- Federal Register 2025-19846, 90 FR 50857, "One Year Suspension ...", 12 Nov 2025 (full text read): effective 10 Nov 2025 to 9 Nov 2026;
  Affiliates Rule: "any entity that is at least 50 percent owned directly or indirectly, individually or in the aggregate, by one or more
  entities on the Entity List ... is itself automatically subject to Entity List restrictions"; "During the first phase of this final
  rule, BIS will continue to evaluate U.S. national security and foreign policy interests related to these non-listed foreign affiliates
  of listed entities."; second phase "effective November 10, 2026 and extending indefinitely".
- Federal Register 2025-19001, IFR of 30 Sep 2025 (abstract read): 50 per cent rule, "designed to be consistent with longstanding
  Department of the Treasury practice".
- White House fact sheet, 1 Nov 2025 (read): "The United States will suspend for one year, starting on November 10, 2025, the
  implementation of the interim final rule titled 'Expansion of End-User Controls to Cover Affiliates of Certain Listed Entities'";
  China to suspend rare-earth controls "that it announced on October 9, 2025".
- CNBC, "CNBC Excerpts: U.S. Treasury Secretary Scott Bessent Speaks with CNBC's 'Squawk Box' Today", 13 Nov 2026 (unofficial transcript,
  read): "Treasury, War, USTR and State — they were in favor of putting Megaspeed on the entity list for months."; "But Commerce has the
  pin — Commerce BIS has the pin."; "And you will have to ask them about their internal process."; "I think there is a lot of leakage in
  the system and we are constantly working to close that down."; "they were selling to what were obviously pass-through shell companies";
  "I am frustrated when President Trump made it very clear that China should not receive any NVIDIA chips above H100s."
- Fortune (Sasha Rogelberg), 13 Nov 2026 2:42 p.m. ET (read): same remarks rendered "Commerce has the pen"; "We don't repeat conversations
  in the Situation Room."; Commerce and Nvidia did not respond to Fortune; Lutnick "agreed to testify" before the Senate Banking Committee
  on 10 Dec.
- TNW (Ana-Maria Stanciuc), 13 Nov 2026 4:35 p.m. GMT (read): Commerce spokesperson Kristen Eichamer told Axios the two secretaries had
  "no such conversation"; unnamed Commerce spokesperson to Semafor: "Treasury and Commerce have a great working relationship."; Nvidia
  banned sales and shipments to Megaspeed in June 2025, according to a spokesman quoted by the Wall Street Journal.
- SEC EDGAR full-text search (efts.sec.gov), "Megaspeed", filings 1 Jan 2024 to 14 Nov 2026: 0 hits.
OUR ARITHMETIC: addition rules by year (titles announcing additions to the Entity List, corrections excluded): 2018 8, 2019 7, 2020 8,
  2021 12, 2022 11, 2023 17, 2024 11, 2025 6, 2026 0. 2025 entities: Jan 16 + 11 = 27; Mar 70 + 12 = 82; Sep 32; Oct 26; after 20 Jan
  82 + 32 + 26 = 140. 9 Oct 2025 -> 14 Nov 2026 = 401 days; -> 5 Nov 2026 = 392. IFR in force 30 Sep -> 10 Nov 2025 = 41 days. Extension
  9 Nov 2026 -> 10 Jan 2027 = 62 days; 14 Nov -> 10 Jan = 57 days. 10 Jan 2027 is a Sunday. Weekdays checked.
HERO: Wikimedia Commons, "Port of Oakland Cranes (15389761152).jpg", Tony Webster, CC BY 2.0, 2014: container cranes at the Port of
  Oakland at night, a small boat moored below. No people, no company logos (only the port's own name on the crane). Not used on any
  sister site (grep of ~/Sites).

---------- 14:00Z TECHNOLOGY: "Microsoft moves its outage start six hours earlier" (tom-kessler, house byline) ----------
SOURCES READ:
- Microsoft service-health records for EX1550543 and MO1550821 as extracted from the PennO365 admin console by the University of
  Pennsylvania (downloaded 14 Nov 2026 22:35 UTC, parsed locally). EX1550543: Status serviceRestored; Start Time Thu Nov 12 10:05:00 2026
  UTC; End Time Fri Nov 13 16:10:00 2026 UTC; Last Updated Sat Nov 14 04:15:46 UTC; 41 updates (16:20:07 Thu -> 04:15:46 Sat). Quotes:
  17:57 Fri "We are deeply sorry for the disruption this incident has caused you and your business."; "This was a technical issue not
  related to cyber or AI / agents."; "The incident was introduced by an issue during an earlier network capacity upgrade that surfaced
  following a recent network change."; "Given the scale of demand, we restored services gradually, validating stability at each stage.
  While this took longer, it helped ensure a stable restoration."; 20:02 Fri "We do not have an ETA for full recovery yet. Service access
  can recover before mail flow fully normalizes."; 22:00 Fri "Due to the severity of impact this incident caused, we're monitoring for an
  extended period"; 04:15 Sat final status repeats the root-cause wording, "Preliminary root cause" field, "We'll provide a preliminary
  Post-Incident Report within two business days and a final Post-Incident Report within five business days." MO1550821: Start Time also
  revised to Thu 10:05 UTC (first logged 18:26 UTC), End 16:10 UTC Fri, 37 updates, final 04:17:52 UTC Sat, final list of services.
- Komposite's own round-43 record (batch-124 comment): at 14:01 UTC Fri, EX1550543 start 16:17:27 UTC, first update 16:20:07 UTC.
- Microsoft, Online Services SLA, October 2026 (read for round 43, re-used): Exchange Online Downtime "Any period of time when users are
  unable to send or receive email with Outlook Web Access."; credits <99.9% 25%, <99% 50%, <95% 100%; user-minutes; claims "by the end of
  the Applicable Period following the month in which the Incident occurred"; credits "your sole and exclusive remedy".
- Microsoft Learn, "Service health and continuity" (read for round 43): preliminary PIR "within 48 hours of incident resolution, followed by
  a final PIR within five business days".
OUR ARITHMETIC: 10:05 Thu -> 16:10 Fri = 30h05m = 1,805 min; (43,200 - 1,805) / 43,200 = 95.82%. On the old 16:17:27 start: 1,432.5 min
  = 96.68%. 100% tier needs 2,160 min: from 10:05 Thu that is 22:05 Fri. First update 16:20:07 = 375 min (6h15m) after 10:05; old start to
  new start 16:17 - 10:05 = 6h12m. End time 16:10 Fri -> final status 04:15:46 Sat = 12.1 h. Business days: Mon 16, Tue 17 (two), Fri 20
  (five). 48 h after 16:10 Fri = 16:10 Sun 15 Nov.
HERO: Wikimedia Commons, "20210925 Microsoft datacenter i Staffanstorp 60 (51515782920).jpg", Johan Wessman / News Oresund, CC BY 2.0,
  25 Sep 2021: fenced Microsoft data-centre site under construction at Staffanstorp, Sweden, road and give-way sign in front. No people,
  no logos. Not used on any sister site.

---------- 13:40Z AI: "The H200 licence rule, line by line" (dana-whitfield, house byline) ----------
SOURCES READ:
- Federal Register 2026-00789, 91 FR 1684, "Revision to License Review Policy for Advanced Computing Commodities", 15 Jan 2026, effective
  same day (full text read): presumption of denial -> case-by-case for China and Macau; "TPP less than 21,000" and "'total DRAM bandwidth'
  less than 6,500 GB/s", "such as the NVIDIA H200 or AMD MI325X"; certifications: units shipped in the US, sufficient US supply, no
  foundry-capacity diversion, "the aggregate shipments of the product to China and Macau will be no more than 50% of the total product
  shipped to customers for end use in the United States of that product", KYC "to screen and prevent unauthorized remote access", every
  shipment reviewed by "a qualified third-party testing lab" (lab headquartered in the US, testing in the US, sampling allowed); list of
  remote end users in Belarus, China, Cuba, Iran, Macau, North Korea, Russia, Venezuela; presumption of denial kept for entities
  headquartered in Macau or D:5 outside those places; "increase of 100 more license applications per year"; "significant" under EO 12866.
- Nvidia H200 product page (read): H200 SXM FP8 3,958 TFLOPS, FP16/BF16 1,979, "With sparsity", 141 GB, 4.8 TB/s, up to 700 W; H200 NVL
  FP8 3,341, 141 GB, 4.8 TB/s.
- Nvidia H100 product page (read): H100 SXM FP8 3,958 teraFLOPS (with sparsity), 80 GB, 3.35 TB/s; H100 NVL FP8 3,341, 94 GB, 3.9 TB/s.
- Nvidia HGX page (read): HGX B200, 8 Blackwell GPUs, FP8 72 PFLOPS, "Specification in Sparse. Dense is ½ sparse spec shown."; HBM
  bandwidth per GPU not listed.
- CNBC excerpts, 13 Nov 2026 (as above): "above H100s" quote.
- Komposite's earlier reporting (links): Nvidia guidance assumes no China data-centre compute revenue; H200 licences from February; H200
  programme shipments under 1 per cent of data-centre revenue.
OUR ARITHMETIC: TPP = dense TOPS x bit length (2 x MacTOPS x bit length under ECCN 3A090). H100/H200 SXM: 3,958 / 2 = 1,979 dense FP8 x
  8 = 15,832. NVL: 3,341 / 2 = 1,670.5 x 8 = 13,364. B200: 72 / 8 = 9 PF sparse, 4.5 PF dense = 4,500 TFLOPS x 8 = 36,000. Headroom:
  15,832 / 21,000 = 75.4%; 4,800 / 6,500 = 73.8%; 3,350 / 6,500 = 51.5%. H200 vs H100 SXM: memory 141 / 80 = +76%; bandwidth 4.8 /
  3.35 = +43%. 15 Jan -> 14 Nov 2026 = 303 days.
HERO: Wikimedia Commons, "2210-LS Application Board Probe Station by Micromanipulator.jpg", Rgarrigan, CC BY-SA 4.0, 2016: a probe
  station with a microscope over a test board on a white background. No people. Not used on any sister site.

---------- 13:20Z MARKETS: "Nvidia's first report without Huang has a $108bn bar" (priya-raghavan, house byline) ----------
SOURCES READ:
- Nvidia results releases, 8-K exhibit 99.1 (read): Q4 FY25 (26 Feb 2025) Q1 FY26 outlook "$43.0 billion, plus or minus 2%"; Q1 FY26 (28
  May 2025) revenue $44,062m, Q2 outlook $45.0bn (H20 limits, about $8.0bn reduction); Q2 FY26 (27 Aug 2025) $46,743m, Q3 outlook
  $54.0bn, "The company has not assumed any H20 shipments to China in the outlook."; Q3 FY26 (19 Nov 2025) $57.0bn, Q4 outlook $65.0bn;
  Q4 FY26 (25 Feb 2026) $68.1bn, Q1 FY27 outlook $78.0bn; Q1 FY27 (20 May 2026) $81.6bn, Q2 outlook $91.0bn; Q2 FY27 (26 Aug 2026) $96.2bn,
  Data Center $89.0bn, GAAP/non-GAAP GM 75.0%, Q3 outlook "Revenue is expected to be $108.0 billion, plus or minus 2%.", "NVIDIA is not
  assuming any Data Center compute revenue from China in its outlook.", GM 74.0% +/- 50bp, opex ~$9.2bn GAAP / $9.0bn non-GAAP.
- SEC XBRL company concept, NVDA us-gaap:Revenues (data.sec.gov, read): quarters $44,062m, $46,743m, $57,006m, $81,615m, $96,221m; FY26
  $215,938m (so Q4 FY26 = $68,127m by subtraction).
- Nvidia, "NVIDIA Sets Conference Call for Third-Quarter Financial Results" (search result text, Nvidia IR): Tue 17 Nov 2026, 2 p.m. PT,
  quarter ended 25 Oct 2026, results ~1:20 p.m. PT, written CFO commentary from Colette Kress, Q&A limited to financial analysts and
  institutional investors.
- Nvidia 8-K of 12 Nov 2026 and "NVIDIA Announces CEO Transition" (read for round 42): Kress interim CEO and remains CFO; Harvey Jones
  chair; results 17 Nov as scheduled.
- House Foreign Affairs Committee release of 5 Nov 2026 (read for round 41): briefing requested for 18 Nov.
- Fortune, 13 Nov 2026 (as above): Lutnick to testify before Senate Banking on 10 Dec.
OUR ARITHMETIC: beat vs midpoint: Q1 FY26 +$1.062bn (+2.47%); Q2 +$1.743bn (+3.87%); Q3 +$3.006bn (+5.57%); Q4 +$3.127bn (+4.81%); Q1
  FY27 +$3.615bn (+4.63%); Q2 FY27 +$5.221bn (+5.74%). Mean 4.52%. Above top of +/-2% range every quarter. Applied to $108bn: 2.47% ->
  $110.67bn; 4.52% -> $112.88bn; 5.74% -> $114.20bn. Range 105.84-110.16. Guided growth on prior actual: 43/39.331 +9.3%; 45/44.062 +2.1%;
  54/46.743 +15.5%; 65/57.006 +14.0%; 78/68.127 +14.5%; 91/81.615 +11.5%; 108/96.221 +12.2%. Actual q/q: +6.1, +22.0, +19.5, +19.8,
  +17.9%. Q4 FY25 = 130,497 - 26,044 - 30,040 - 35,082 = 39,331.
HERO: Wikimedia Commons, "2788-2888 San Tomas Expressway.jpg", Coolcaesar, CC BY-SA 4.0, 4 Sep 2022: main entrance to Nvidia's
  headquarters on San Tomas Expressway, Santa Clara, with the white lattice canopy over the Voyager building. No people. Not used on any
  sister site (Komposite used a different 2018 Coolcaesar photograph of the Endeavor building on 9 Nov).

---------- 13:00Z CRYPTO: "IBIT shrank by 46m shares as bitcoin fell 15 per cent" (marcus-oyelaran, house byline) ----------
SOURCES READ:
- FRED, Coinbase Bitcoin (CBBTCUSD), daily, downloaded 14 Nov 2026: 4 Nov 80,420.06; 12 Nov 70,822.24; 13 Nov 68,178.05; 18 Aug 2026
  64,625.40 (last close at or below 13 Nov); 2026 high 96,852.91 on 14 Jan; 2026 low 58,585.96 on 30 Jun; record 124,720.09 on 5 Oct
  2025; 31 Dec 2025 87,696.00; 30 Sep 2026 83,482.51.
- iShares Bitcoin Trust ETF 10-Q for the quarter to 30 Sep 2026, filed 6 Nov 2026 (read): 1,434,080,000 shares outstanding at 31 Oct
  2026; 801,033 bitcoin, fair value $67,044,294,946 at 30 Sep; NAV per share $47.38; 187,480,000 shares (4,687 baskets) created and
  68,760,000 (1,719 baskets) redeemed in the quarter; sponsor fee 0.25%.
- SEC XBRL company facts for the trust (data.sec.gov, read): shares 30 Jun 2026 1,296,040,000; 30 Sep 2026 1,414,760,000; cover counts
  31 Jul 2026 1,301,360,000 and 31 Oct 2026 1,434,080,000.
- iShares IBIT product page (read 14 Nov): Shares Outstanding 1,387,960,000 ("Shares outstanding reflect the positions as of the prior
  day"); Net Assets of Fund $54,133,940,679 as of 13 Nov 2026.
- Trust 8-K filed 13 Nov 2026 (read): Paul Lohrey appointed to the sponsor's board and audit committee; Peter Landini resigned; "Mr.
  Landini's decision to resign was not the result of any dispute or disagreement with the Sponsor or the Trust".
OUR ARITHMETIC: 1,434,080,000 - 1,387,960,000 = 46,120,000 (-3.2%). 801,033 / 1,414,760,000 = 0.000566197 bitcoin per share -> 26,113
  bitcoin; x $68,178.05 = $1.78bn. Holdings implied ~785,900 bitcoin. $54,133,940,679 / 1,387,960,000 = $39.00 a share. Sep 30 -> Oct 31
  +19,320,000 shares (~10,900 bitcoin). Price: -15.2% from 4 Nov; -29.6% from 14 Jan; -45.3% from record; +16.4% above 30 Jun low; -22.3%
  from 31 Dec 2025; -3.7% on 13 Nov. 18 Aug -> 13 Nov = 87 days.
HERO: Wikimedia Commons, "AustrianBitCoinMiningRig.jpg", Gastev (Mirko Tobias Schaefer), CC BY 2.0, 2012: a home-built bitcoin mining rig
  with graphics cards and cabling on a table in Austria. No people, no coin props. Not used on any sister site.

UNIQUENESS: 6-gram overlap with top outlet sources reported in the commit message.
*/
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const PO = P("policy", "Policy", "policy", "Photograph via Wikimedia Commons");
const TE = P("technology", "Technology", "technology", "Photograph via Wikimedia Commons");
const AI = P("ai", "AI", "ai", "Photograph via Wikimedia Commons");
const MK = P("markets", "Markets", "markets", "Photograph via Wikimedia Commons");
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
const FR_SEARCH = "https://www.federalregister.gov/documents/search?conditions%5Bagencies%5D%5B%5D=industry-and-security-bureau&conditions%5Btype%5D%5B%5D=RULE&conditions%5Bterm%5D=%22Entity+List%22";
const FR_OCT25 = "https://www.federalregister.gov/documents/2025/10/09/2025-19508/additions-to-the-entity-list";
const FR_SEP25 = "https://www.federalregister.gov/documents/2025/09/16/2025-17893/additions-and-revisions-to-the-entity-list";
const FR_IFR = "https://www.federalregister.gov/documents/2025/09/30/2025-19001/expansion-of-end-user-controls-to-cover-affiliates-of-certain-listed-entities";
const FR_STAY = "https://www.federalregister.gov/documents/2025/11/12/2025-19846/one-year-suspension-of-expansion-of-end-user-controls-for-affiliates-of-certain-listed-entities";
const FR_EXT = "https://www.federalregister.gov/documents/2026/11/09/2026-22793/extension-of-the-suspension-of-expansion-of-end-user-controls-for-affiliates-of-certain-listed";
const FR_REM25 = "https://www.federalregister.gov/documents/2025/11/12/2025-19858/revisions-to-the-entity-list";
const FR_REM26 = "https://www.federalregister.gov/documents/2026/08/24/2026-17230/removal-from-the-entity-list";
const WH_FACT = "https://www.whitehouse.gov/fact-sheets/2025/11/fact-sheet-president-donald-j-trump-strikes-deal-on-economic-and-trade-relations-with-china/";
const CNBC_BESSENT = "https://pressroom.versantmedia.com/cnbc/press-releases/cnbc-excerpts-us-treasury-secretary-scott-bessent-speaks-cnbcs-squawk-box-0";
const FORTUNE = "https://fortune.com/2026/11/13/scott-bessent-treasury-blacklist-megaspeed-howard-lutnick-nvidia-jensen-huang/";
const TNW = "https://thenextweb.com/news/bessent-lutnick-commerce-megaspeed-entity-list";
const EDGAR_FTS = "https://efts.sec.gov/LATEST/search-index?q=%22Megaspeed%22&dateRange=custom&startdt=2024-01-01&enddt=2026-11-14";

/* Sources: Microsoft */
const MS_HEALTH = "https://mailservices.isc.upenn.edu/computing/email/penno365/alerts/ms-incidents.html";
const MS_SLA_DOC = "https://www.microsoft.com/licensing/docs/documents/download/OnlineSvcsConsolidatedSLA(WW)(English)(October_2026)(CR).docx";
const MS_CONTINUITY = "https://learn.microsoft.com/en-us/office365/servicedescriptions/office-365-platform-service-description/service-health-and-continuity";

/* Sources: H200 rule */
const FR_H200 = "https://www.federalregister.gov/documents/2026/01/15/2026-00789/revision-to-license-review-policy-for-advanced-computing-commodities";
const NV_H200 = "https://www.nvidia.com/en-us/data-center/h200/";
const NV_H100 = "https://www.nvidia.com/en-us/data-center/h100/";
const NV_HGX = "https://www.nvidia.com/en-us/data-center/hgx/";

/* Sources: Nvidia preview */
const NV_Q2FY27 = "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000073/q2fy27pr.htm";
const NV_Q1FY27 = "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000051/q1fy27pr.htm";
const NV_Q4FY26 = "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000019/q4fy26pr.htm";
const NV_Q3FY26 = "https://www.sec.gov/Archives/edgar/data/1045810/000104581025000228/q3fy26pr.htm";
const NV_Q2FY26 = "https://www.sec.gov/Archives/edgar/data/1045810/000104581025000207/q2fy26pr.htm";
const NV_Q1FY26 = "https://www.sec.gov/Archives/edgar/data/1045810/000104581025000115/q1fy26pr.htm";
const NV_Q4FY25 = "https://www.sec.gov/Archives/edgar/data/1045810/000104581025000021/q4fy25pr.htm";
const NV_CALL = "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Sets-Conference-Call-for-Third-Quarter-Financial-Results/default.aspx";
const NV_CEO = "https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition";
const NV_XBRL = "https://data.sec.gov/api/xbrl/companyconcept/CIK0001045810/us-gaap/Revenues.json";
const HFAC = "https://foreignaffairs.house.gov/news/press-releases/chairmen-mast-moolenaar-and-crawford-request-jensen-huang-brief-congress-on-link-to-chinese-intelligence-asset";

/* Sources: bitcoin / IBIT */
const FRED_BTC = "https://fred.stlouisfed.org/series/CBBTCUSD";
const IBIT_10Q = "https://www.sec.gov/Archives/edgar/data/1980994/000143774926035539/ibit20260930_10q.htm";
const IBIT_PAGE = "https://www.ishares.com/us/products/333011/ishares-bitcoin-trust-etf";
const IBIT_8K = "https://www.sec.gov/Archives/edgar/data/1980994/000143774926036917/ibit20261112_8k.htm";
const IBIT_XBRL = "https://data.sec.gov/api/xbrl/companyfacts/CIK0001980994.json";

/* ---------- Lead tables ---------- */
const EL_YEARS = table(
  ["Year", "Federal Register rules adding names to the Entity List"],
  [
    ["2018", "8"], ["2019", "7"], ["2020", "8"], ["2021", "12"], ["2022", "11"],
    ["2023", "17"], ["2024", "11"], ["2025", "6 (the last on 9 October)"], ["2026, to 14 November", "0"]
  ],
  `Komposite's count of rules from the Bureau of Industry and Security whose titles announce additions to the Entity List, from ${L(FR_SEARCH, "the Federal Register's own search")} of rules published since 1 January 2018. Corrections are excluded. Some sanctions rules have added names under other titles in past years, so earlier totals may be understated; none has done so since October 2025, by our check of all 16 BIS rules published since.`
);

const EL_2025 = table(
  ["Published", "Rule", "Names added", "Where"],
  [
    ["16 Jan 2025", "2025-00480", "16 entities", "Before the change of administration"],
    ["16 Jan 2025", "2025-00704", "11 entities", "Before the change of administration"],
    ["28 Mar 2025", "2025-05426", "70 entities", "China and other destinations"],
    ["28 Mar 2025", "2025-05427", "12 entities", "China and other destinations"],
    ["16 Sep 2025", `${L(FR_SEP25, "2025-17893")}`, "32 entities", "China 23, Turkey 3, UAE 2, India, Iran, Singapore and Taiwan 1 each"],
    ["9 Oct 2025", `${L(FR_OCT25, "2025-19508")}`, "26 entities, 29 entries", "China 19, Turkey 9, UAE 1 (entries)"]
  ],
  `Komposite's compilation from the abstracts of each rule in the Federal Register. The four rules published after 20 January 2025 added 140 entities between them, by our addition.`
);

/* ---------- Microsoft table ---------- */
const MS_SLA = table(
  ["Basis", "Minutes out", "Uptime for that user in November", "Credit tier under the SLA"],
  [
    ["Start as first logged (16:17 GMT Thursday) to the final end time", "1,433", "96.68%", "Below 99%: 50% of the month's fee"],
    ["Start as now recorded (10:05 GMT Thursday) to the final end time", "1,805", "95.82%", "Below 99%: 50% of the month's fee"],
    ["Needed for the 100% tier (below 95%)", "2,160", "95.00%", "Would have required an outage until 22:05 GMT Friday"]
  ],
  `Komposite's arithmetic on a 30-day month of 43,200 minutes, for a single user unable to send or receive mail in Outlook on the web for the whole period, using the times in ${L(MS_HEALTH, "Microsoft's service-health record")} and the tiers in ${L(MS_SLA_DOC, "its Online Services SLA")}. Microsoft measures downtime in user-minutes across a tenant, so most organisations will land in lower tiers.`
);

/* ---------- H200 table ---------- */
const H200_TABLE = table(
  ["Chip", "Dense FP8 (teraFLOPS)", "TPP, our arithmetic", "Memory bandwidth (GB/s)", "Inside the January rule's limits?"],
  [
    ["H100 SXM", "1,979", "15,832", "3,350", "Yes"],
    ["H100 NVL", "1,670.5", "13,364", "3,900", "Yes"],
    ["H200 SXM", "1,979", "15,832", "4,800", "Yes"],
    ["H200 NVL", "1,670.5", "13,364", "4,800", "Yes"],
    ["B200 (per GPU in an HGX B200)", "4,500", "36,000", "Not listed", "No: TPP above 21,000"],
    ["Rule's ceiling", "", "Below 21,000", "Below 6,500", ""]
  ],
  `Komposite's arithmetic from Nvidia's published specifications for the ${L(NV_H100, "H100")}, ${L(NV_H200, "H200")} and ${L(NV_HGX, "HGX B200")}. Nvidia quotes FP8 performance with sparsity; dense figures are half. Total processing performance (TPP) is dense operations per second times bit length, the measure in Export Control Classification Number 3A090. Bandwidths converted at 1 TB/s = 1,000 GB/s. Our figures are not an official classification.`
);

/* ---------- Nvidia table ---------- */
const NV_TABLE = table(
  ["Quarter", "Nvidia's revenue forecast (midpoint)", "Reported revenue", "Beat by", "Beat, per cent"],
  [
    [`${L(NV_Q1FY26, "Q1 FY26 (to Apr 2025)")}`, "$43.0bn", "$44.062bn", "$1.062bn", "2.5"],
    [`${L(NV_Q2FY26, "Q2 FY26 (to Jul 2025)")}`, "$45.0bn", "$46.743bn", "$1.743bn", "3.9"],
    [`${L(NV_Q3FY26, "Q3 FY26 (to Oct 2025)")}`, "$54.0bn", "$57.006bn", "$3.006bn", "5.6"],
    [`${L(NV_Q4FY26, "Q4 FY26 (to Jan 2026)")}`, "$65.0bn", "$68.127bn", "$3.127bn", "4.8"],
    [`${L(NV_Q1FY27, "Q1 FY27 (to Apr 2026)")}`, "$78.0bn", "$81.615bn", "$3.615bn", "4.6"],
    [`${L(NV_Q2FY27, "Q2 FY27 (to Jul 2026)")}`, "$91.0bn", "$96.221bn", "$5.221bn", "5.7"],
    ["Q3 FY27 (to Oct 2026)", "$108.0bn", "Due 17 November", "", ""]
  ],
  `Forecasts from each previous quarter's results release (every one given as plus or minus 2 per cent), the first from ${L(NV_Q4FY25, "the release of February 2025")}. Reported revenue from ${L(NV_XBRL, "Nvidia's XBRL data at the SEC")}; the January 2026 quarter is the full-year figure less the first three quarters. Differences and percentages are Komposite's arithmetic.`
);

/* ---------- Bitcoin tables ---------- */
const BTC_PRICES = table(
  ["Date", "Coinbase bitcoin close", "Change to 13 Nov 2026"],
  [
    ["5 Oct 2025 (record)", "$124,720.09", "&minus;45.3%"],
    ["31 Dec 2025", "$87,696.00", "&minus;22.3%"],
    ["14 Jan 2026 (2026 high)", "$96,852.91", "&minus;29.6%"],
    ["30 Jun 2026 (2026 low)", "$58,585.96", "+16.4%"],
    ["30 Sep 2026", "$83,482.51", "&minus;18.3%"],
    ["4 Nov 2026", "$80,420.06", "&minus;15.2%"],
    ["13 Nov 2026", "$68,178.05", ""]
  ],
  `Daily closes from ${L(FRED_BTC, "the Coinbase bitcoin series published by the Federal Reserve Bank of St Louis (FRED)")}; changes are Komposite's arithmetic.`
);

const IBIT_TABLE = table(
  ["Date", "IBIT shares outstanding", "Change", "Source"],
  [
    ["30 Jun 2026", "1,296,040,000", "", "10-Q balance sheet"],
    ["30 Sep 2026", "1,414,760,000", "+118,720,000", `${L(IBIT_10Q, "10-Q")}`],
    ["31 Oct 2026", "1,434,080,000", "+19,320,000", "10-Q cover page"],
    ["12 Nov 2026", "1,387,960,000", "&minus;46,120,000", `${L(IBIT_PAGE, "iShares fund page")}, shown on 13 Nov as of the prior day`]
  ],
  `Komposite's compilation from the trust's filings and ${L(IBIT_XBRL, "its XBRL data at the SEC")}, and BlackRock's fund page. Changes are our subtraction.`
);

export default [

/* ---------- 13:00Z CRYPTO ---------- */
CR({ slug: "ibit-shrank-by-46m-shares-as-bitcoin-fell-15-per-cent", kick: "Bitcoin ETFs",
  headline: "IBIT shrank by 46m shares as bitcoin fell 15 per cent",
  dek: "BlackRock's bitcoin fund had 46.12m fewer shares on 12 November than at the end of October, about 26,100 bitcoin by our arithmetic. Bitcoin closed on Friday at its lowest since August. Our cut of the filings and the price series.",
  metaDesc: "IBIT's share count fell 46.12m, or 3.2%, between 31 October and 12 November 2026 as bitcoin dropped 15% to $68,178. Our arithmetic from filings.",
  author: "marcus-oyelaran", date: "2026-11-14T13:00:00Z",
  capt: "A home-built bitcoin mining rig of graphics cards, a motherboard and cabling on a table in Austria, in a file photograph from 2012.",
  tags: [
    { name: "Digital Assets", slug: "digital-assets" },
    { name: "Institutional Crypto", slug: "institutional-crypto" },
    { name: "Capital Markets", slug: "capital-markets" }
  ],
  related: [
    R("/crypto/crypto-trust-options-cleared-a-day-before-the-deadline/", "Market Structure"),
    R("/crypto/strategy-sells-common-stock-to-buy-back-its-preferred/", "Bitcoin Treasuries"),
    R("/crypto/the-etf-shelf-gets-crowded/", "ETFs")
  ],
  body: [
    `The iShares Bitcoin Trust, BlackRock's spot bitcoin fund, had 1,387.96m shares outstanding on Thursday 12 November, according to ${L(IBIT_PAGE, "the fund's own page")}. Its ${L(IBIT_10Q, "quarterly report")} gave 1,434.08m on 31 October. The difference is 46.12m shares, or 3.2 per cent, in net redemptions over less than two weeks.`,
    `Measured in the coin itself, that is about 26,100 bitcoin taken out of the trust in less than two weeks, by our arithmetic, worth roughly $1.78bn at Friday's price. Bitcoin closed at $68,178.05 on Coinbase on Friday 13 November, down 15.2 per cent from $80,420.06 on 4 November and the lowest close since 18 August, according to ${L(FRED_BTC, "the daily series published by the Federal Reserve Bank of St Louis")}.`,
    `Share counts are the cleanest way to see money leaving an exchange-traded fund, because they move only when authorised participants create or redeem shares in blocks, which the trust calls baskets. Price falls shrink a fund's assets without touching its share count. The trust's net assets were $54.13bn on 13 November, or about $39.00 a share, according to the fund page, against $47.38 a share at the end of September.`,
    IBIT_TABLE,
    `The conversion to bitcoin uses the trust's own holdings. At 30 September it held 801,033 bitcoin against 1,414.76m shares, which is 0.000566 bitcoin per share, by our division. Multiplying the November redemptions by that figure gives 26,113 bitcoin. The ratio drifts down slowly as the 0.25 per cent annual sponsor fee is paid in bitcoin, so the true number is fractionally lower, and on the same basis the trust now holds about 785,900. The figures cover this one fund only; other spot bitcoin funds report their own share counts on their own pages.`,
    `The redemptions reverse most of what the autumn brought in. In the quarter to September, the 10-Q shows, 187.48m shares were created in 4,687 baskets and 68.76m redeemed in 1,719, a net addition of 118.72m. October added another 19.32m. All of October's net creations and part of September's have now gone back out, by our subtraction.`,
    BTC_PRICES,
    `The fall also shows up in BlackRock's revenue from the fund. The trust pays its sponsor 0.25 per cent a year of net assets. At the $67.04bn fair value of its bitcoin on 30 September, which valued each coin at about $83,697 by our division, that fee ran at about $168m a year; on the $54.13bn of net assets reported for 13 November it runs at about $135m, by our arithmetic. About nine-tenths of the $33m drop comes from the lower price and the rest from the smaller share count, by our split.`,
    `The price series puts the fall in proportion. Friday's close was 45.3 per cent below the record of $124,720.09 set on 5 October 2025, and 29.6 per cent below this year's high of $96,852.91 on 14 January. It was still 16.4 per cent above the 2026 low of $58,585.96 on 30 June. The last time bitcoin closed at or below Friday's level was 18 August, 87 days earlier. Friday alone accounted for a 3.7 per cent drop, from $70,822.24 on Thursday.`,
    `The trust filed one other document this week. ${L(IBIT_8K, "A Form 8-K on Friday")} reported that Paul Lohrey, a former president and chief executive of the iShares trust sponsor, had joined the sponsor's board and audit committee, and that Peter Landini had resigned as a director. "Mr. Landini's decision to resign was not the result of any dispute or disagreement with the Sponsor or the Trust," the filing said. It contains no financial figures.`,
    `Why it matters: spot funds were sold as the channel through which ordinary brokerage money would reach bitcoin, and this one fund alone holds about 785,900 coins by our estimate. When its holders sell, authorised participants redeem shares and the trust gives up bitcoin, so flows out of the fund and the price can feed each other. The share count is published every business day, which makes it one of the few hard, regularly updated numbers in the bitcoin market. Options on crypto trusts, which the SEC cleared on 10 November, <a href="/crypto/crypto-trust-options-cleared-a-day-before-the-deadline/">add a hedging layer on top of these funds</a>, and listed bitcoin holders such as Strategy <a href="/crypto/strategy-sells-common-stock-to-buy-back-its-preferred/">have been selling stock to manage their own capital structures</a>.`,
    `The fund page will show the next count on Monday. The trust's next audited holdings figure comes with its annual report; last year's 10-K was filed on 27 February.`
  ]
}),

/* ---------- 13:20Z MARKETS ---------- */
MK({ slug: "nvidias-first-report-without-huang-has-a-108bn-bar", kick: "Earnings",
  headline: "Nvidia's first report without Huang has a $108bn bar",
  dek: "Nvidia reports on Tuesday against its own forecast of $108bn of revenue, the first results since Jensen Huang resigned. It has beaten the midpoint of its forecast by between 2.5 and 5.7 per cent for six quarters. Our table, and what the call cannot settle.",
  metaDesc: "Nvidia reports Q3 FY2027 on 17 November 2026 against a $108bn revenue forecast; it beat its midpoint by 2.5% to 5.7% in each of six quarters. Our table.",
  author: "priya-raghavan", date: "2026-11-14T13:20:00Z",
  capt: "The main entrance to Nvidia's headquarters on San Tomas Expressway in Santa Clara, California, under a white lattice canopy, in a file photograph from 2022.",
  tags: [
    { name: "Semiconductors", slug: "semiconductors" },
    { name: "Capital Markets", slug: "capital-markets" },
    { name: "AI Infrastructure", slug: "ai-infrastructure" }
  ],
  related: [
    R("/ai/huang-resigns-from-nvidia-and-the-8-k-gives-no-reason/", "Leadership"),
    R("/markets/nvidia-sheds-428bn-as-its-rivals-add-291bn/", "Semiconductors"),
    R("/ai/the-guidance-that-assumes-china-buys-nothing/", "Export Controls")
  ],
  body: [
    `Nvidia will report results for its third fiscal quarter on Tuesday 17 November against a revenue forecast of $108.0bn, plus or minus 2 per cent, ${L(NV_Q2FY27, "which it set in August")}. It is the first report since Jensen Huang resigned as chief executive on 11 November. If the company beats its own midpoint by the same margins as in the past six quarters, revenue would land between about $110.7bn and $114.2bn, by our arithmetic.`,
    `The timetable is unchanged. Nvidia ${L(NV_CALL, "said in its call notice")} that results would be published at about 1:20 p.m. Pacific time, with a call at 2 p.m. limited to questions from financial analysts and institutional investors, and that written commentary would come from Colette Kress, the chief financial officer. Kress is now also interim chief executive, under ${L(NV_CEO, "the transition the company announced on Thursday")}, so the commentary and the call will both be hers.`,
    NV_TABLE,
    `<h2>How large have the beats been?</h2>`,
    `Larger in dollars every quarter, and steady as a share. Measured against the midpoint of each forecast, Nvidia's beat rose from $1.06bn in the quarter to April 2025 to $5.22bn in the quarter to July 2026. As a percentage it ranged from 2.5 to 5.7, with a mean of 4.5, by our arithmetic. Revenue came in above the top of the plus-or-minus 2 per cent range in each of the six quarters, though only by $202m in the first of them. This quarter the range runs from $105.84bn to $110.16bn; a figure below the bottom would be the first miss of the range in the table.`,
    `The forecasts themselves have grown more cautious relative to the last reported quarter. The $108bn figure is 12.2 per cent above the $96.2bn reported for the July quarter. The four forecasts before it implied growth of 15.5, 14.0, 14.5 and 11.5 per cent on the prior quarter, while actual sequential growth over the same stretch ran at 22.0, 19.5, 19.8 and 17.9 per cent. The exception in the table is the quarter to July 2025, when the forecast implied 2.1 per cent growth because export limits on the H20 chip took out about $8bn of expected sales.`,
    `China is outside the number. The August release said: "NVIDIA is not assuming any Data Center compute revenue from China in its outlook." That has been the company's language since February, as Komposite reported when <a href="/ai/the-guidance-that-assumes-china-buys-nothing/">the guidance first assumed China would buy nothing</a>. Nvidia also guided gross margins of 74.0 per cent, plus or minus half a point, against 75.0 per cent in the July quarter, and operating expenses of about $9.2bn under US accounting rules.`,
    `<h2>What the release cannot settle</h2>`,
    `The results are the first formal occasion on which Nvidia's management can be asked about the events of the past fortnight, though the company decides which questions to take. ${L(NV_CEO, "Its 12 November release")} and the accompanying 8-K gave no reason for Huang's departure, as <a href="/ai/huang-resigns-from-nvidia-and-the-8-k-gives-no-reason/">Komposite reported on Thursday</a>. The board's independent inquiry into reports that Huang was targeted by a foreign intelligence effort has no published timetable. The share price has already absorbed a large part of the news: Nvidia lost $428bn of market value in two days earlier this month.`,
    `Washington adds its own calendar. Three House committee chairmen ${L(HFAC, "asked on 5 November")} for a closed briefing on 18 November, the day after the results; their letter was addressed to Huang, who no longer runs the company. Howard Lutnick, the commerce secretary, has agreed to testify before the Senate Banking Committee on 10 December, ${L(FORTUNE, "Fortune reported")}. On Friday the Treasury Secretary, Scott Bessent, said on CNBC that the question was whether Nvidia knew its clients, and that "anyone at the company there be held accountable" for chips that leaked to China, a theme we examine in <a href="/policy/the-entity-list-has-not-grown-since-october-2025/">our report on the Entity List</a>.`,
    `Why it matters: Nvidia's forecast is the closest thing the AI build-out has to a monthly order book, and the quarterly beat has been part of how investors price it. A first set of numbers under an interim chief executive who is also the finance chief tests whether that pattern holds through a governance crisis. Data-centre revenue was $89.0bn in the July quarter, 92.5 per cent of the total, by our division, so the beat or miss will be almost entirely a data-centre number.`,
    `The forecast for the quarter to January 2027, due on Tuesday afternoon, will be the first Nvidia has set without Huang. Analysts will compare it with the $108bn of this quarter, and with the 12 per cent sequential step the company has asked them to expect.`
  ]
}),

/* ---------- 13:40Z AI ---------- */
AI({ slug: "the-h200-licence-rule-line-by-line", kick: "Export Controls",
  headline: "The H200 licence rule, line by line",
  dek: "The Treasury Secretary said on Friday that China should get no Nvidia chips above the H100. The rule Commerce published in January sets its line by performance, and the H200 passes it with room to spare. Our reading of the rule and Nvidia's spec sheets.",
  metaDesc: "BIS's January 2026 rule lets H200 licences to China be reviewed case by case below 21,000 TPP and 6,500 GB/s. By our arithmetic the H200 is at 15,832.",
  author: "dana-whitfield", date: "2026-11-14T13:40:00Z",
  capt: "A probe station with a microscope above a test board, used to check the electrical behaviour of chips and circuit boards, in a file photograph from 2016.",
  tags: [
    { name: "Semiconductors", slug: "semiconductors" },
    { name: "Trade", slug: "trade" },
    { name: "Regulation", slug: "regulation" }
  ],
  related: [
    R("/ai/the-dependency-runs-the-other-way/", "Supply Chain"),
    R("/policy/export-controls-shift-to-enforcement/", "Export Controls"),
    R("/policy/megaspeeds-paper-trail-from-commerce-to-the-prosecutors/", "Export Controls")
  ],
  body: [
    `The US rule that allows Nvidia's H200 to be licensed for China, ${L(FR_H200, "published by the Commerce Department on 15 January 2026")}, does not name a ceiling by product. It sets two numbers: total processing performance below 21,000 and memory bandwidth below 6,500 gigabytes a second. By our arithmetic from Nvidia's own specifications, the H200 sits at 15,832 and 4,800, well inside both.`,
    `That detail matters after Friday. Scott Bessent, the Treasury Secretary, said on CNBC: "I am frustrated when President Trump made it very clear that China should not receive any NVIDIA chips above H100s," according to ${L(CNBC_BESSENT, "the network's transcript")}. On the measure the rule uses for computing power, the H200 is not above the H100. The two chips have the same processing figures. What the H200 adds is memory: 141 gigabytes against 80, and 4.8 terabytes a second of bandwidth against 3.35, according to Nvidia's product pages.`,
    `<h2>What does the rule actually change?</h2>`,
    `It moves licence applications for chips under the two thresholds from a presumption of denial to case-by-case review when the buyer is in China or Macau. The rule names "the NVIDIA H200 or AMD MI325X" as examples. It is a review standard, not a general licence: every export still needs a licence from the Bureau of Industry and Security, and the bureau and other reviewing agencies decide each one.`,
    `The conditions are specific. The exporter must certify how many units have shipped in the United States, that exports will not delay American orders or divert foundry capacity from chips for American customers, and that "the aggregate shipments of the product to China and Macau will be no more than 50% of the total product shipped to customers for end use in the United States of that product". The buyer must run know-your-customer checks "to screen and prevent unauthorized remote access". Every shipment must be reviewed before export by "a qualified third-party testing lab" headquartered in the United States, which may test a sample from each batch. The applicant must also list remote users in Belarus, China, Cuba, Iran, Macau, North Korea, Russia and Venezuela.`,
    `The relaxation is narrower than its headline. It covers exports from the United States to buyers located in China or Macau. Re-exports from third countries keep the presumption of denial, and so do exports to companies headquartered, or with a parent headquartered, in Macau or a country in the group the regulations call D:5, which includes China, when the buyer is located somewhere else, such as a subsidiary in South-East Asia. The bureau classed the rule as "significant" under the executive order on regulatory review, and published it without prior notice or comment, which the export-control statute allows.`,
    H200_TABLE,
    `<h2>How do the chips compare with the thresholds?</h2>`,
    `The H200 uses about three-quarters of each allowance. Its total processing performance is 75 per cent of the 21,000 ceiling and its bandwidth 74 per cent of 6,500, by our division. The H100, at 3,350 gigabytes a second, uses about half the bandwidth allowance. Nvidia's Blackwell B200 is excluded on processing alone: at 4.5 petaFLOPS of dense FP8 per chip, half the sparse figure Nvidia publishes for an eight-chip HGX board, its total processing performance is about 36,000.`,
    `Total processing performance is the export-control measure of raw arithmetic: operations per second multiplied by the bit length of each operation. Nvidia's headline FP8 numbers assume sparsity, a technique that skips zeros, and the company states that dense performance is half. On dense figures, the H100 and H200 in their SXM form both come to 1,979 teraFLOPS of FP8, which gives 15,832.`,
    `<h2>Who holds the pen on licences?</h2>`,
    `Commerce. The rule was issued by the Bureau of Industry and Security, and Bessent made the same point about <a href="/policy/the-entity-list-has-not-grown-since-october-2025/">the separate question of blacklisting</a> on Friday, saying that "Commerce BIS has the pin", as the CNBC transcript renders it. Commerce did not respond to Fortune's request for comment on his remarks. The rule itself expected modest use: the bureau estimated "100 more license applications per year" because "industry is more likely to submit licenses when there is a case-by-case review".`,
    `Use has been modest in Nvidia's accounts too. Its filing for the quarter to July recorded shipments under the H200 programme at less than 1 per cent of data-centre revenue, as Komposite reported in <a href="/ai/the-dependency-runs-the-other-way/">our reading of that 10-Q</a>, and Beijing has restricted purchases by Chinese buyers. Enforcement has meanwhile become Washington's main tool, as we noted when <a href="/policy/export-controls-shift-to-enforcement/">export controls shifted from rulemaking to settlements</a>.`,
    `The rule has been in force for 303 days, by our count. Nvidia reports quarterly results on Tuesday 17 November, the first chance to see whether H200 shipments to China have moved from the margin of its accounts.`
  ]
}),

/* ---------- 14:00Z TECHNOLOGY ---------- */
TE({ slug: "microsoft-moves-its-outage-start-six-hours-earlier", kick: "Cloud",
  headline: "Microsoft moves its outage start six hours earlier",
  dek: "Microsoft's closed record of the Exchange Online outage now runs from 10:05 GMT on Thursday to 16:10 GMT on Friday, 30 hours and 5 minutes. It blames a network capacity upgrade. Our arithmetic shows the SLA credit tier does not change.",
  metaDesc: "Microsoft's final record dates its 12-13 November 2026 Exchange Online outage from 10:05 to 16:10 GMT next day, 30h05m. Our SLA arithmetic.",
  author: "tom-kessler", date: "2026-11-14T14:00:00Z",
  capt: "The fenced site of a Microsoft data centre under construction at Staffanstorp in southern Sweden, with a give-way sign on the access road, in a file photograph from 2021.",
  tags: [
    { name: "Cloud", slug: "cloud" },
    { name: "Resilience", slug: "resilience" },
    { name: "Enterprise Software", slug: "enterprise-software" }
  ],
  related: [
    R("/technology/microsofts-mail-outage-crosses-the-slas-99-per-cent-line/", "Cloud"),
    R("/technology/the-tax-office-keeps-its-mail-at-home/", "Cloud"),
    R("/technology/cloud-repatriation-selective/", "Cloud")
  ],
  body: [
    `Microsoft's closed record of this week's Exchange Online outage puts its start at 10:05 GMT on Thursday 12 November, six hours and 12 minutes earlier than the time the incident carried while it was open, and its end at 16:10 GMT on Friday 13 November. On those times the outage lasted 30 hours and 5 minutes.`,
    `The revised times appear in ${L(MS_HEALTH, "Microsoft's service-health record")} for incident EX1550543, as copied from the University of Pennsylvania's Microsoft 365 console, which marked it restored in a final update at 04:15 GMT on Saturday. The companion incident covering other Microsoft 365 services, MO1550821, was given the same start and end. When Komposite read the record on Friday, EX1550543 began at 16:17 GMT and MO1550821 at 18:26 GMT. Microsoft has not said why it moved the start.`,
    `For the first time Microsoft also gave a cause. "The incident was introduced by an issue during an earlier network capacity upgrade that surfaced following a recent network change," it wrote, first at 17:57 GMT on Friday and again in the final status. "This was a technical issue not related to cyber or AI / agents." The same update apologised: "We are deeply sorry for the disruption this incident has caused you and your business."`,
    `<h2>The SLA arithmetic, redone</h2>`,
    `The earlier start does not change the credit tier for a user who was out from beginning to end. Under Microsoft's Online Services service-level agreement, Exchange Online downtime is "Any period of time when users are unable to send or receive email with Outlook Web Access", and credits step up at 99.9, 99 and 95 per cent monthly uptime. Thirty hours and 5 minutes is 1,805 minutes, which leaves 95.82 per cent of a 30-day November, by our arithmetic. That is below 99 per cent, worth a 50 per cent credit on the month's Exchange Online fee, but above the 95 per cent line that would have meant a full refund.`,
    MS_SLA,
    `On Friday we calculated that a user out since the old start would cross the 95 per cent line at 04:17 GMT on Saturday if the outage continued. It did not; on the closed record the full-refund threshold would have needed the outage to last until 22:05 GMT on Friday. Microsoft's agreement also says credits are "your sole and exclusive remedy", and customers must claim them by the end of the month after the incident, so by 31 December for most monthly subscriptions.`,
    `<h2>Restored on paper, monitored for 12 hours</h2>`,
    `The recorded end time came before the updates stopped saying recovery was incomplete. At 20:02 GMT on Friday, almost four hours after the 16:10 end time, Microsoft wrote: "We do not have an ETA for full recovery yet. Service access can recover before mail flow fully normalizes." At 22:00 GMT it said: "Due to the severity of impact this incident caused, we're monitoring for an extended period."  The final status came 12 hours after the recorded end. By our count, EX1550543 ran to 41 updates and MO1550821 to 37.`,
    `The final list of affected services is long. MO1550821's closing text names Exchange Online, the Microsoft 365 admin centre, Microsoft 365 apps, the Apps admin centre, Microsoft 365 Education, Copilot, Defender for Office 365, Defender XDR, Fabric, Graph, Intune, Planner and Power Apps among others, and repeats that "Elements of those services that do not depend on interaction with Exchange Online remained functional." For Copilot, Microsoft said users "may be unable to load Copilot Chat or receive responses", and that its experiences may be unable to reach work email, calendars and files, a reminder of how much of the company's AI product depends on the mailbox.`,
    `Read together, the explanations have moved since Thursday. The early updates spoke of servers failing health checks and an overwhelmed connection process; early on Friday Microsoft said it was reverting "a recent network configuration change"; the final status links a recent change to an earlier capacity upgrade. That sequence is consistent with an investigation narrowing, but the final status is still labelled a "Preliminary root cause".`,
    `<h2>When does the full report arrive?</h2>`,
    `Microsoft's final status promises "a preliminary Post-Incident Report within two business days and a final Post-Incident Report within five business days". Counting from Friday's end, that means Tuesday 17 November and Friday 20 November, by our calendar. ${L(MS_CONTINUITY, "Microsoft's published service description")} is stricter on the first of those: a preliminary report "within 48 hours of incident resolution", which would have been 16:10 GMT on Sunday.`,
    `The report will be read for two things this record cannot answer: why the start moved to 10:05, more than six hours before the first public update at 16:20 GMT, and which customers and regions were affected in those hours. Komposite's account of the outage while it was running, and of <a href="/technology/microsofts-mail-outage-crosses-the-slas-99-per-cent-line/">how the SLA tiers apply</a>, appeared on Friday. Organisations weighing how much mail to keep in a single provider's cloud have <a href="/technology/the-tax-office-keeps-its-mail-at-home/">made different choices</a>.`
  ]
}),

/* ---------- 14:20Z POLICY (LEAD) ---------- */
PO({ slug: "the-entity-list-has-not-grown-since-october-2025", kick: "Export Controls",
  headline: "The Entity List has not grown since October 2025",
  dek: "Commerce has not added a single name to its main export blacklist for 401 days, by our count of the Federal Register. The Treasury Secretary said on Friday that four agencies wanted Megaspeed listed for months. Our count, and the rule Commerce extended this week.",
  metaDesc: "BIS has added no one to the Entity List since 9 October 2025, 401 days, by our Federal Register count; Bessent said Commerce held up Megaspeed.",
  author: "jonathan-bright", date: "2026-11-14T14:20:00Z",
  capt: "Container cranes at the Port of Oakland, California, lit against an orange night sky, with a small boat moored below, in a file photograph from 2014.",
  tags: [
    { name: "Semiconductors", slug: "semiconductors" },
    { name: "Enforcement", slug: "enforcement" },
    { name: "Trade", slug: "trade" }
  ],
  related: [
    R("/policy/singapore-asked-washington-about-megaspeed-493-days-ago/", "Export Controls"),
    R("/policy/megaspeeds-paper-trail-from-commerce-to-the-prosecutors/", "Export Controls"),
    R("/ai/nvidia-board-opens-inquiry-394-days-after-megaspeed/", "Corporate Governance")
  ],
  body: [
    `The Commerce Department has not added a single company or person to the Entity List, Washington's main export blacklist, since 9 October 2025, by Komposite's count of rules in the Federal Register. That is 401 days. On Friday the Treasury Secretary, Scott Bessent, said four other departments had wanted one company, Megaspeed, on the list "for months".`,
    `"Treasury, War, USTR and State — they were in favor of putting Megaspeed on the entity list for months," Bessent said on CNBC's Squawk Box on Friday 13 November, according to ${L(CNBC_BESSENT, "the network's transcript")}. "But Commerce has the pin — Commerce BIS has the pin." The transcript's "pin" is the idiom ${L(FORTUNE, "Fortune")} and other outlets rendered as "pen": the Bureau of Industry and Security, part of Commerce, writes the list. "And you will have to ask them about their internal process," Bessent said.`,
    `Commerce has disputed a related account. Kristen Eichamer, a department spokeswoman, told Axios that Bessent and Howard Lutnick, the commerce secretary, had "no such conversation" about Megaspeed in the White House Situation Room, ${L(TNW, "TNW reported")}, and an unnamed spokesperson told Semafor that "Treasury and Commerce have a great working relationship." Asked about the meeting on Friday, Bessent said: "We don't repeat conversations in the Situation Room." Megaspeed, a Singapore-based cloud company, has said inspections found no evidence of violations, <a href="/ai/nvidia-board-opens-inquiry-394-days-after-megaspeed/">as Komposite has reported</a>, and Nvidia barred sales and shipments to it in June 2025, according to a spokesman quoted by The Wall Street Journal.`,
    `<h2>How long has the list been frozen?</h2>`,
    `About twice as long as any earlier gap since 2018. Komposite searched all rules from the Bureau of Industry and Security that mention the Entity List and counted those whose titles announce additions. In every year from 2018 to 2024 there were between seven and 17. In 2025 there were six, the last on Thursday 9 October 2025, ${L(FR_OCT25, "adding 29 entries")} covering 26 entities in China, Turkey and the United Arab Emirates. In 2026 there have been none. The longest previous gap between such rules in our count was 196 days, from October 2018 to May 2019.`,
    EL_YEARS,
    `We also read every rule the bureau has published since 9 October 2025: 16, including a correction. None adds a name. Two take names off. ${L(FR_REM25, "A rule of 12 November 2025")} removed one Chinese entity and six aliases of another, and ${L(FR_REM26, "a rule of 24 August 2026")} removed one entity in Turkey, with a companion rule removing two Hong Kong addresses. The freeze is not a matter of one company; by our count no name of any kind has gone on the list in 13 months.`,
    `The dates line up awkwardly with the Megaspeed file. The last additions were published the day before Singapore's police confirmed, on 10 October 2025, that they were investigating Megaspeed, and four days before Senator Tom Cotton's letter of 13 October 2025 asked Lutnick to investigate it, as Komposite has reported. Nothing in the Federal Register since then mentions the company.`,
    `The last full year of additions was not small. The four rules published after the change of administration in January 2025 added 140 entities. One of them, ${L(FR_SEP25, "the rule of 16 September 2025")}, included a single entity in Singapore among 32.`,
    EL_2025,
    `<h2>What does the trade truce have to do with it?</h2>`,
    `The pause began weeks before a deal with Beijing, and the deal froze a related rule. On 30 September 2025 the bureau published ${L(FR_IFR, "an interim rule")} under which any company at least 50 per cent owned by listed entities would automatically face the same restrictions, a standard it said was "designed to be consistent with longstanding Department of the Treasury practice". It was in force for 41 days. ${L(WH_FACT, "A White House fact sheet")} of 1 November 2025 said the United States would "suspend for one year, starting on November 10, 2025" that rule, as part of an agreement under which China would suspend rare-earth export controls "that it announced on October 9, 2025" &mdash; the same day as the last American additions.`,
    `${L(FR_STAY, "The suspension rule")} said that "BIS will continue to evaluate U.S. national security and foreign policy interests related to these non-listed foreign affiliates of listed entities" and scheduled the 50 per cent rule to return on 10 November 2026. It did not return. ${L(FR_EXT, "A final rule published on Monday 9 November")} extends the suspension "through January 10, 2027", 62 days, and gives no reason. Its footer shows it was filed with the Federal Register at 4:15 p.m. on Thursday 5 November. The rule also misdates its subject: its background says the affiliates rule was published "On September 20, 2025", while the dates paragraph of the same rule, and the Federal Register itself, say 30 September.`,
    `<h2>Why would a listing matter for Megaspeed?</h2>`,
    `A listing turns a company into a licence requirement. The Export Control Reform Act, cited in this week's rule, authorises Commerce to maintain "a list of foreign persons and end uses that are determined to be a threat to the national security and foreign policy of the United States" and to restrict exports to them. Without a listing, suppliers rely on their own checks. Singapore's police have charged five people and six companies in a parallel server case, and the island's interior ministry said Washington had given "limited" help on Megaspeed, as Komposite reported in <a href="/policy/singapore-asked-washington-about-megaspeed-493-days-ago/">our timeline of that inquiry</a>.`,
    `Megaspeed does not appear in American corporate disclosure at all. An ${L(EDGAR_FTS, "SEC full-text search")} for the name across filings since January 2024 returns no results, by our check on Saturday, so no US-listed company has named it as a customer, supplier or risk. Bessent's broader complaint on Friday was about that gap. "I think there is a lot of leakage in the system and we are constantly working to close that down," he said, adding that chips had gone to "what were obviously pass-through shell companies".`,
    `Why it matters: the Entity List is the export system's most direct tool, and for 13 months it has not been used to add anyone, while the more automatic 50 per cent rule has been suspended as a bargaining chip with Beijing. Agencies that favour listing are now saying so in public, and the agency that decides has not explained its process. Earlier reporting set out <a href="/policy/megaspeeds-paper-trail-from-commerce-to-the-prosecutors/">how Commerce's own Megaspeed inquiry was paused</a> at the Justice Department's request.`,
    `The next fixed dates are close. Nvidia reports results on Tuesday 17 November. Lutnick has agreed to testify before the Senate Banking Committee on 10 December, ${L(FORTUNE, "Fortune reported")}. The suspension of the 50 per cent rule runs out on Sunday 10 January 2027, 57 days from now, unless Commerce extends it again.`
  ]
})

];
