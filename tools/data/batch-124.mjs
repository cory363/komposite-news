/*
Komposite News, batch 124: Friday 13 November 2026, round 43. One headline (lead), one second headline and two extras, each with its own
research layer. tools/data/lead.json pins the new lead (the Microsoft 365 / Exchange Online outage); the round-42 Huang lead moves down
the normal way. Leads came from WebSearch, SEC EDGAR, Microsoft's own service-health text, Singapore government releases and the day's
reader-trend signal (research only, never cited). r43-claims.md checked before writing and before commit. The Microsoft outage and the
Nvidia/Megaspeed follow-up are Komposite's alone this round. No fact in this batch rests on The New York Times; facts in CNBC's 13 Nov
piece that CNBC attributes to that paper (Megaspeed's chip purchases, its rank among Nvidia customers) are deliberately not used.

---------- 14:20Z TECHNOLOGY (LEAD, OUR RESEARCH): "Microsoft's mail outage crosses the SLA's 99 per cent line" (tom-kessler, house byline) ----------
SOURCES READ:
- Microsoft service-health records for EX1550543, MO1550821 and TM1550488, as extracted from the PennO365 admin console by the University
  of Pennsylvania ("refresh this data every 15 minutes"), extract generated Fri 13 Nov 2026 08:35:02 EST (downloaded, parsed locally):
  EX1550543 "Users may be unable to connect to their mailboxes in Exchange Online through multiple connection methods", start Thu 12 Nov
  16:17:27 UTC, status serviceDegradation, End Time "Not ended yet", Root Cause "N/A", last update 13:00:36 UTC, next by 14:00 UTC.
  Connection methods: Outlook on the web, MAPI, EAS, REST. 33 updates 16:20:07 UTC -> 13:00:36 UTC. Quotes used (verbatim):
  18:19 "elevated load across multiple regions"; 19:18 "a large number of servers being unexpectedly unavailable"; 19:43 "failing automated
  health checks"; 19:57 "While we haven't identified any recent changes that correlate with the start of impact"; 22:00 "our actions taken
  thus far have not provided the anticipated relief" and "a core process on the affected servers is becoming overwhelmed"; 01:06 "a process
  on the affected servers responsible for establishing secure connections becomes overwhelmed" and "we've begun reverting a recent network
  configuration change that correlates with the start of impact"; 02:54 "confirmed that change is not taking as expected"; 03:34 "there is
  no indication this is the result of malicious activity"; 04:59 "a surge in outbound call volume from our routing services to our backend
  servers"; 07:25 "upstream authentication/routing configuration component patch"; 09:55 "extending the email timeout window to 48 hours to
  help protect delayed messages"; 13:00 "broader improvements now observed in North America and sustained improvements across much of
  Europe", "we have no evidence of malicious activity associated with this incident", "a full Post-Incident Report with root cause and
  defense-in-depth actions after mitigation is complete". Promised next-update times vs actual: 01:00 -> 01:06; 09:00 -> 09:55; 10:00 ->
  11:01; all others met. MO1550821 "Users may be unable to connect to multiple Microsoft 365 services", start 18:26:10 UTC, 29 updates; list
  of services 5 at 18:27 (Exchange Online, Teams, SharePoint Online, Copilot, Defender XDR) -> 8 at 19:58 (+Planner, Purview, To Do) -> 11
  at 20:57 (+Defender for Office 365, Intune, Power BI) -> 13 at 22:03 (+M365 Apps Admin Center, Universal Print) -> 14 at 22:58 (+Windows
  365) -> 18 at 00:00 (+M365 Education, M365 admin center, M365 apps, Graph) -> 19 by 01:12 (+Fabric) -> 20 at 06:54 (+Power Apps); a
  separate Defender for Cloud Apps line appeared at 08:09 and was folded into the Defender for Office 365 entry at 09:03. Latest text:
  "Elements of those services that do not depend on interaction with Exchange Online remain functional."; Teams "Most of the core
  functionality including joining calls, meetings, group chats, and channel messages are not impacted." TM1550488 (Teams, Americas) 14:45-
  15:53 UTC, restored.
- Microsoft, Service Level Agreement for Microsoft Online Services, English, October 2026 (docx downloaded from the Microsoft Licensing
  page, text extracted and read): Exchange Online Downtime "Any period of time when users are unable to send or receive email with Outlook
  Web Access."; uptime in user-minutes; credits <99.9% 25%, <99% 50%, <95% 100%; Applicable Period = calendar month for e.g. M365 E3;
  non-Azure claims "by the end of the Applicable Period following the month in which the Incident occurred"; credits "your sole and
  exclusive remedy"; no compensation for "lost revenue, operational costs, or any indirect losses"; claim must include time and duration,
  number and location of affected users. OWA SLA excludes DoS attacks among other scenarios.
- Microsoft Learn, "Service health and continuity" (ms.date 21 Jul 2026, read): quarterly worldwide uptime 2026 Q1 99.526%, Q2 99.994%;
  2025 99.988/99.995/99.991/99.954; updates "on an hourly cadence or, if a different cadence is required, it will be stated"; preliminary
  PIR "within 48 hours of incident resolution, followed by a final PIR within five business days".
- Microsoft Learn, "Queued messages report in the new EAC in Exchange Online" (read): "Microsoft 365 continues to retry to delivery for 24
  hours. After 24 hours, the messages will expire and will be returned to the senders in non-delivery reports".
- SecurityWeek, "Microsoft 365 Outage Disrupts Outlook, Exchange Online and Teams", 12 Nov 3:55 p.m. ET, updated 13 Nov 6:45 a.m. ET (read):
  Patch Tuesday 10 Nov; Microsoft has not linked it to the outage; some Google Workspace users reported Outlook access problems.
- Office 365 for IT Pros (Tony Redmond), 22 Apr 2026 (read): Q1 2026 99.526% lowest since 2013, about 614 minutes. Used for context only.
OUR ARITHMETIC: 16:17:27 Thu -> 14:01:18 Fri (34th update; queues "significantly reduced and approaching normal levels") = 21h44m = 1,304 minutes; (43,200 - 1,304) / 43,200 = 96.98%. November = 30 x 1,440 = 43,200 user-minutes per user. Thresholds:
  0.1% = 43.2 min; 1% = 432 min (7h12m); 5% = 2,160 min (36h). (At 13:00 the figure was 1,243 min = 97.12%.) 36h after
  16:17 Thu = 04:17 Sat 14 Nov. 7h12m after 16:17 Thu = 23:29 Thu. Q1 2026: 90 days x 1,440 = 129,600 min x 0.474% = 614 min.
  24h -> 48h retry window: a message first queued at 16:17 Thu would expire at 16:17 Fri under 24h, 16:17 Sat under 48h (if the clock runs
  from first queuing; Microsoft does not say).
HERO: Wikimedia Commons, "Microsoft campus, ice and slush.jpg", Jeff Wilcox from Seattle, WA, USA (Flickr; description credits Erik
  Freund), CC BY 2.0, 2007: Building 42 on Microsoft's Redmond campus in snow. No identifiable people, no third-party logos or watermark.
  Not used on any sister site (grep of ~/Sites).

---------- 14:00Z POLICY (SECOND HEADLINE): "Singapore asked Washington about Megaspeed 493 days ago" (jonathan-bright, house byline) ----------
SOURCES READ:
- Ministry of Home Affairs, Singapore, "Singapore investigations into Alice Huang (Huang Le) and Megaspeed International Pte Ltd", 12 Nov
  2026 (read): SPF and Singapore Customs opened an independent probe in February 2025 into several companies and key officers, incl.
  Megaspeed, over suspected false declarations on server purchases; Minister said on 3 March 2025 "Singapore's investigations were not
  based on any request from any country or sovereign entity."; Huang (Hong Kong resident) investigated as then-CEO, Chairperson and key
  controller; "Huang was not based in Singapore, and was not investigated for espionage."; 24 June 2025 BIS voluntary Post-Shipment
  Verification at Megaspeed with Huang present; "The PSV check was the first time Singapore came to know about the US's interest in
  Megaspeed and Huang."; passport impounded under s112 CPC 2010 that day; servers exported through Singapore to Malaysia; "SPF could not
  rely solely on declarations made by the companies in Singapore."; Supermicro gave limited cooperation; raised with US 7 July 2025; repeated
  to DOJ and FBI since September 2025; "Singapore has to date received limited information or assistance in respect of the company.";
  February 2026 insufficient evidence; inaccurate information, stern warning, barred from re-entering; passport returned 26 Feb 2026, left
  that day; Megaspeed and six other individuals still under investigation, none in Singapore since February 2025; four individuals and
  four companies charged Feb 2025-Jul 2026, offences up to 20 years; Singapore "does not enforce" other countries' unilateral export
  controls but expects companies "to take into account such regulations, including export controls". No mention of Nvidia.
- Singapore Police Force, "Fifth individual and two additional companies charged in relation to the case", 13 Nov 2026 (read): Shi Bingzhe,
  director of Superphi Pte Ltd and COO of NJ Global Financial Pte Ltd; 41 charges (CDSA s54(3) r/w s80(1)(a)); Superphi 6; NJ Global 35;
  917 servers from Aperia International Pte Ltd across 41 transactions, May 2024-Feb 2025; Aperia International charged 6 July 2026 under
  s424B Penal Code; total now five individuals and six companies; penalties: individual up to 10 years and/or S$500,000 per charge;
  companies up to S$1m or twice the value of benefits.
- Singapore Police Force, "Four individuals face additional charges and four companies face charges", 1 July 2026 (read): 27 Feb 2025 Wei
  Zhaolun Alan, Woon Guo Jie Aaron, Li Ming charged; Lim Jenny charged 2 Apr 2026; Aperia International, A-Speed Infotech, Aperia Cloud
  Services (II) face eight fraud charges in total on 6 July 2026; Luxuriate Your Life two; "the first instance of corporate entities being
  prosecuted in relation to these investigations"; prohibition of disposal on a Good Class Bungalow valued at about S$55m and about S$1m in
  bank funds seized; servers from Dell, Super Micro Computer and Asus.
OUR ARITHMETIC: 24 Jun 2025 -> 7 Jul 2025 = 13 days; 7 Jul 2025 -> 12 Nov 2026 = 493; 24 Jun 2025 -> 26 Feb 2026 = 247 (passport held);
  26 Feb 2026 -> 12 Nov 2026 = 259; 27 Feb 2025 -> 13 Nov 2026 = 624; 6 Jul 2026 -> 13 Nov 2026 = 130. 13 Nov charges 41 + 6 + 35 = 82.
  917 / 41 = 22.4 servers per transaction. Weekdays checked.
HERO: Wikimedia Commons, "Police Cantonment Complex, Pinnacle @ Duxton and shophouses. Singapore.jpg", Teojincheng, CC0, 2023: the blue
  glass Police Cantonment Complex, the Pinnacle@Duxton towers and shophouses seen from Kampong Bahru Road. No identifiable people or
  logos. Not used on any sister site.

---------- 13:40Z MARKETS: "Cisco lifts its AI target by $1.5bn and gives up margin" (priya-raghavan, house byline) ----------
SOURCES READ:
- Cisco Q1 FY2027 results, 8-K exhibit 99.1, filed 12 Nov 2026 (read): quarter ended 24 Oct 2026; revenue $18,517m (+24%); product $14,667m
  (+32%); services $3,850m (+1%); Networking $11,132m (+43%); Security $2,120m (+7%); Collaboration $1,136m (+8%); Observability $279m
  (+2%); GAAP EPS $1.14; non-GAAP EPS $1.40 (+40%); non-GAAP gross margin total 65.6% (68.1%), product 63.7% (67.2%), services 72.9%
  (70.7%); RPO $46,169m (+8%); FY27 hyperscaler AI infrastructure revenue expectation raised to $9bn, "more than double" FY26; Q2 guide
  revenue $18.0-18.2bn, non-GAAP EPS $1.34-1.36, non-GAAP GM 65-66%; FY27 revenue $74.8-75.8bn, GAAP EPS $4.38-4.44, non-GAAP EPS
  $5.47-5.53; $3.7bn returned ($2.0bn buybacks, ~18m shares at $112.38; dividends $1.654bn at $0.42); Robbins: "In Q1, we delivered the
  strongest revenue and non-GAAP earnings per share growth rates for Cisco in over 15 years," and "We are in the very early stages of a
  multi-year networking supercycle,".
- Cisco Q4 FY2026 results, 8-K exhibit 99.1, filed 12 Aug 2026 (read): quarter ended 25 Jul 2026; revenue $17.3bn (+18%); product $13.5bn
  (+24%); Networking $9.8bn (+28%); non-GAAP GM 66.3% (68.4%), product 64.8% (67.5%); hyperscaler AI infrastructure orders $4bn in Q4,
  $9.3bn FY26; AI infrastructure revenue about $4bn FY26; FY27 AI expectation $7.5bn; Q1 guide revenue $18.0-18.2bn, non-GAAP EPS
  $1.32-1.34; FY27 guide revenue $72.2-73.4bn, GAAP EPS $4.00-4.06, non-GAAP EPS $5.05-5.11; RPO $46.7bn.
OUR ARITHMETIC: AI target 9.0 / 7.5 = +20% (+$1.5bn); 9.0 / FY27 revenue midpoint 75.3 = 12.0%. Revenue guide midpoint 72.8 -> 75.3 =
  +$2.5bn (+3.4%); non-GAAP EPS midpoint 5.08 -> 5.50 (+8.3%); GAAP EPS midpoint 4.03 -> 4.41 (+9.4%). Q1 revenue 18.517 vs top of guide
  18.2 = +$317m; non-GAAP EPS 1.40 vs 1.34 top = +6c. Networking 9.8 -> 11.132 = +13.6% sequential. Product non-GAAP GM -3.5 points x
  $14.667bn = ~$513m of gross profit at last year's margin. RPO 46.7 -> 46.169 = -$0.53bn sequential.
HERO: Wikimedia Commons, "Cisco San Jose Main Campus (3).jpg", Mike Linksvayer, CC0, 2008: an office building on Cisco's San Jose
  campus with a water tower behind trees. No people, no logos. Not used on any sister site.

---------- 13:20Z TECHNOLOGY: "China falls to a quarter of Applied Materials' sales" (tom-kessler, house byline) ----------
SOURCES READ:
- Applied Materials Q4 FY2026 results, 8-K exhibit 99.1, filed 12 Nov 2026 (read): quarter ended 25 Oct 2026; revenue $10,409m (+53%) vs
  $6,800m; FY $34,446m (+21%) vs $28,368m; GAAP GM 50.4%, non-GAAP 50.6%; GAAP EPS $3.40, non-GAAP $4.16; Semiconductor Systems $7,996m vs
  $4,879m; AGS $1,896m vs $1,506m; geography Q4 FY26 / Q4 FY25: China 2,642 (25%) / 1,964 (29%); Taiwan 2,916 (28%) / 1,834 (27%); Korea
  1,811 (17%) / 1,219 (18%); US 1,320 (13%) / 655 (10%); Japan 619 (6%) / 448 (6%); SE Asia 581 (6%) / 460 (7%); Europe 520 (5%) / 220
  (3%); FY China 9,330 (27%) vs 8,529 (30%); $253m BIS settlement in FY26; Q1 FY27 guide $11.1bn +/- $0.5bn, non-GAAP EPS $4.35 +/-
  $0.20; Q4 buybacks $2.0bn; Dickerson quotes "Applied Materials delivered record results in fiscal 2026" and "we are on track to grow our
  Semiconductor Systems business more than 40 percent in our calendar 2026".
- Applied Materials Q3 FY2026 results, 8-K exhibit 99.1, filed 13 Aug 2026 (read): quarter ended 26 Jul 2026; revenue $9,115m vs $7,302m;
  China 2,506 (28%) vs 2,548 (35%); Taiwan 2,025 (22%) vs 1,843 (25%); Korea 1,521 (17%) vs 1,160 (16%); US 1,367 (15%) vs 683 (9%); Q4
  guide $10.25bn +/- $0.5bn; nine-month results include the $253m BIS settlement.
OUR ARITHMETIC: H1 FY26 revenue 34,446 - 10,409 - 9,115 = 14,922; H1 China 9,330 - 2,642 - 2,506 = 4,182 = 28.0%. China Q4 +34.5% y/y
  while total +53%. US +101.5%; Europe +136%. Q4 vs guide midpoint +$159m. China Q4 share 29% -> 25% = -4 points; Q3 FY25 35% -> Q4 FY26
  25% = -10 points over five quarters.
HERO: Wikimedia Commons, "Diffracted Light Spectrum on Patterned Silicon Wafer.jpg", DrHughManning, CC BY-SA 4.0, 2018: a patterned 8-inch
  silicon wafer splitting light into colours. No people, no logos. Not used on any sister site.

UNIQUENESS: 6-gram overlap with top outlet sources reported in the commit message.
*/
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const MK = P("markets", "Markets", "markets", "Photograph via Wikimedia Commons");
const TE = P("technology", "Technology", "technology", "Photograph via Wikimedia Commons");
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
const MS_HEALTH = "https://mailservices.isc.upenn.edu/computing/email/penno365/alerts/ms-incidents.html";
const MS_STATUS = "https://status.cloud.microsoft/";
const MS_SLA_PAGE = "https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services";
const MS_SLA_DOC = "https://www.microsoft.com/licensing/docs/documents/download/OnlineSvcsConsolidatedSLA(WW)(English)(October_2026)(CR).docx";
const MS_CONTINUITY = "https://learn.microsoft.com/en-us/office365/servicedescriptions/office-365-platform-service-description/service-health-and-continuity";
const MS_QUEUE = "https://learn.microsoft.com/en-us/exchange/monitoring/mail-flow-reports/mfr-queued-messages-report";
const SECWEEK = "https://www.securityweek.com/microsoft-365-outage-disrupts-outlook-exchange-online-and-teams/";

/* Sources: Singapore */
const MHA = "https://www.mha.gov.sg/media-room/newsroom/singapore-investigations-into-alice-huang-huang-le-and-megaspeed-international-pte-ltd/";
const SPF_NOV = "https://www.police.gov.sg/Media-Hub/News/2026/11/20261113_fifth_individual_and_two_additional_companies_charged_in_relation_to_the_case";
const SPF_JUL = "https://www.police.gov.sg/media-hub/news/2026/07/20260701_four_individuals_face_additional_charges_and_four_companies_face_charges";

/* Sources: Cisco */
const CSCO_Q1 = "https://www.sec.gov/Archives/edgar/data/858877/000085887726000170/exhibit991pressrelease-q1f.htm";
const CSCO_Q4 = "https://www.sec.gov/Archives/edgar/data/858877/000085887726000106/exhibit991pressrelease-q4f.htm";

/* Sources: Applied Materials */
const AMAT_Q4 = "https://www.sec.gov/Archives/edgar/data/6951/000162828026073360/exhibit991q42026earningsre.htm";
const AMAT_Q3 = "https://www.sec.gov/Archives/edgar/data/6951/000162828026056699/exhibit991q32026earningsre.htm";

/* ---------- Lead tables ---------- */
const DIAG_TABLE = table(
  ["Time (GMT)", "What Microsoft's status update said"],
  [
    ["Thu 16:17", "Incident EX1550543 opens: users may be unable to reach Exchange Online mailboxes"],
    ["Thu 18:19", `The affected infrastructure is under "elevated load across multiple regions"`],
    ["Thu 19:18", `The load is not more traffic but "a large number of servers being unexpectedly unavailable"`],
    ["Thu 19:43", `Affected servers are "failing automated health checks", possibly after a recent change to a component`],
    ["Thu 19:57", `"While we haven't identified any recent changes that correlate with the start of impact", a health-check component is bypassed on some servers`],
    ["Thu 22:00", `Actions "have not provided the anticipated relief"; "a core process on the affected servers is becoming overwhelmed"`],
    ["Fri 01:06", `The process "responsible for establishing secure connections" is overwhelmed; Microsoft begins reverting "a recent network configuration change that correlates with the start of impact"`],
    ["Fri 02:54", `A change is "not taking as expected"`],
    ["Fri 03:34", `"There is no indication this is the result of malicious activity"`],
    ["Fri 04:59", `"A surge in outbound call volume from our routing services to our backend servers"`],
    ["Fri 07:25", `Server stability improves after an "upstream authentication/routing configuration component patch"`],
    ["Fri 09:55", `Email timeout window extended "to 48 hours to help protect delayed messages"`],
    ["Fri 14:01", `Email queues "significantly reduced and approaching normal levels"; still not mitigated`]
  ],
  `Komposite's selection from the 34 updates on incident EX1550543 between 16:20 GMT on 12 November and 14:01 GMT on 13 November, as recorded in ${L(MS_HEALTH, "Microsoft's service-health text mirrored by the University of Pennsylvania")}. Quotations are verbatim; GMT equals UTC in November.`
);

const SERVICES_TABLE = table(
  ["Update (GMT)", "Services listed", "Added in that update"],
  [
    ["Thu 18:27", "5", "Exchange Online, Teams, SharePoint Online, Copilot, Defender XDR"],
    ["Thu 19:58", "8", "Planner, Purview, To Do"],
    ["Thu 20:57", "11", "Defender for Office 365, Intune, Power BI"],
    ["Thu 22:03", "13", "Microsoft 365 Apps admin center, Universal Print"],
    ["Thu 22:58", "14", "Windows 365 (Cloud PCs using Customer Key)"],
    ["Fri 00:00", "18", "Microsoft 365 Education, Microsoft 365 admin center, Microsoft 365 apps, Graph"],
    ["Fri 01:12", "19", "Fabric"],
    ["Fri 06:54", "20", "Power Apps"]
  ],
  `Komposite's count of the services named in each update to incident MO1550821, from ${L(MS_HEALTH, "the same service-health record")}. A separate Defender for Cloud Apps line appeared at 08:09 GMT and was folded into the Defender for Office 365 entry an hour later.`
);

const SLA_TABLE = table(
  ["Monthly uptime for Exchange Online", "Service credit", "Full-outage minutes that reach it in November", "For a user out since 16:17 GMT Thursday, reached at"],
  [
    ["Below 99.9%", "25% of the month's Exchange Online fees", "43.2 (about 43 minutes)", "17:00 GMT Thursday"],
    ["Below 99%", "50%", "432 (7 hours 12 minutes)", "23:29 GMT Thursday"],
    ["Below 95%", "100%", "2,160 (36 hours)", "04:17 GMT Saturday, if still out"]
  ],
  `Credit tiers from ${L(MS_SLA_DOC, "Microsoft's Online Services SLA, October 2026 edition")}. Minutes and times are Komposite's arithmetic on a 30-day month of 43,200 minutes, for one user unable to send or receive mail in Outlook on the web for the whole period. Microsoft measures downtime in user-minutes across a tenant, so organisations where only some users were affected fall into lower tiers.`
);

/* ---------- Singapore tables ---------- */
const SG_TIMELINE = table(
  ["Date", "Event", "Days to 12 Nov 2026"],
  [
    ["Feb 2025", "Singapore Police Force and Singapore Customs open their own probe into several companies over suspected false declarations on server purchases, including Megaspeed", "about 650"],
    ["Thu 27 Feb 2025", "First three individuals charged with fraud by false representation", "623"],
    ["Tue 24 Jun 2025", "US Commerce Department check at Megaspeed with Alice Huang present; police interview her and impound her passport", "506"],
    ["Mon 7 Jul 2025", "Singapore raises Super Micro Computer's limited cooperation with US authorities", "493"],
    ["From Sep 2025", "Request repeated to the Justice Department and the FBI", "about 437"],
    ["Thu 26 Feb 2026", "Passport returned after 247 days; Huang leaves and is barred from re-entering", "259"],
    ["Jul 2026", "Four companies charged, the first corporate prosecutions; three Aperia Group companies appear in court on 6 July", "129 (from 6 Jul)"],
    ["Thu 12 Nov 2026", "Home Affairs ministry publishes its account", "0"],
    ["Fri 13 Nov 2026", "Fifth individual and two more companies charged", "-1"]
  ],
  `Komposite's timeline from ${L(MHA, "the Ministry of Home Affairs statement of 12 November")} and Singapore Police Force releases of ${L(SPF_JUL, "1 July")} and ${L(SPF_NOV, "13 November")}. Day counts are calendar days, by Komposite; where the source gives only a month, counts run from the first of the month and are approximate.`
);

const SG_CHARGES = table(
  ["Charged on 13 November", "Role", "Charges", "Maximum penalty per charge"],
  [
    ["Shi Bingzhe", "Director of Superphi, chief operating officer of NJ Global Financial", "41", "10 years' jail, a S$500,000 fine, or both"],
    ["Superphi Pte Ltd", "Bought servers from Aperia International", "6", "S$1m or twice the value of the benefits, whichever is higher"],
    ["NJ Global Financial Pte Ltd", "Bought servers from Aperia International", "35", "As above"],
    ["Total", "917 servers across 41 transactions, May 2024 to February 2025", "82", ""]
  ],
  `Source: ${L(SPF_NOV, "Singapore Police Force, 13 November 2026")}. The charges are under the Corruption, Drug Trafficking and Other Serious Crimes (Confiscation of Benefits) Act, for acquiring the benefits of another's criminal conduct. The total is Komposite's sum. These are charges, not findings.`
);

/* ---------- Cisco table ---------- */
const CSCO_TABLE = table(
  ["", "Said on 12 Aug 2026", "Said on 12 Nov 2026", "Change"],
  [
    ["FY2027 AI infrastructure revenue from hyperscalers", "$7.5bn", "$9.0bn", "+$1.5bn (+20%)"],
    ["FY2027 revenue", "$72.2bn to $73.4bn", "$74.8bn to $75.8bn", "+$2.5bn at the midpoint (+3.4%)"],
    ["FY2027 non-GAAP EPS", "$5.05 to $5.11", "$5.47 to $5.53", "+42c at the midpoint (+8.3%)"],
    ["FY2027 GAAP EPS", "$4.00 to $4.06", "$4.38 to $4.44", "+38c at the midpoint (+9.4%)"],
    ["Q1 revenue", "$18.0bn to $18.2bn guided", "$18.517bn reported", "$317m above the top of the range"],
    ["Q1 non-GAAP EPS", "$1.32 to $1.34 guided", "$1.40 reported", "6c above the top"]
  ],
  `Komposite's comparison of Cisco's ${L(CSCO_Q4, "fourth-quarter release of 12 August")} and ${L(CSCO_Q1, "first-quarter release of 12 November")}, both filed with the SEC. Changes are Komposite's arithmetic. Cisco's fiscal 2027 runs to late July 2027.`
);

const CSCO_MARGIN = table(
  ["Quarter", "Revenue", "Networking", "Non-GAAP gross margin", "Non-GAAP product gross margin"],
  [
    ["Q4 FY2025 (to Jul 2025)", "", "", "68.4%", "67.5%"],
    ["Q1 FY2026 (to Oct 2025)", "", "", "68.1%", "67.2%"],
    ["Q4 FY2026 (to Jul 2026)", "$17.3bn", "$9.8bn (+28%)", "66.3%", "64.8%"],
    ["Q1 FY2027 (to Oct 2026)", "$18.5bn", "$11.1bn (+43%)", "65.6%", "63.7%"],
    ["Q2 FY2027 guidance", "$18.0bn to $18.2bn", "", "65% to 66%", ""]
  ],
  `From the same two releases. Earlier-year quarters are the comparatives Cisco prints beside each quarter and are left blank where the release gives no figure. Growth rates are year on year, as Cisco reports them.`
);

/* ---------- Applied Materials table ---------- */
const AMAT_GEO = table(
  ["Quarter", "Revenue", "China", "China's share", "Taiwan", "Korea", "United States"],
  [
    ["Q3 FY2025 (to Jul 2025)", "$7,302m", "$2,548m", "35%", "25%", "16%", "9%"],
    ["Q4 FY2025 (to Oct 2025)", "$6,800m", "$1,964m", "29%", "27%", "18%", "10%"],
    ["H1 FY2026 (Nov 2025 to Apr 2026)", "$14,922m", "$4,182m", "28%", "", "", ""],
    ["Q3 FY2026 (to Jul 2026)", "$9,115m", "$2,506m", "28%", "22%", "17%", "15%"],
    ["Q4 FY2026 (to Oct 2026)", "$10,409m", "$2,642m", "25%", "28%", "17%", "13%"]
  ],
  `Komposite's compilation from Applied Materials' ${L(AMAT_Q3, "third-quarter")} and ${L(AMAT_Q4, "fourth-quarter")} results releases, filed with the SEC. Shares are as the company reports them. The first-half row is Komposite's subtraction of the third and fourth quarters from the full-year totals; the company does not publish it.`
);

export default [

/* ---------- 13:20Z TECHNOLOGY ---------- */
TE({ slug: "china-falls-to-a-quarter-of-applied-materials-sales", kick: "Semiconductors",
  headline: "China falls to a quarter of Applied Materials' sales",
  dek: "Applied Materials' revenue from China rose about 35 per cent in its fourth quarter, yet its share of sales fell to 25 per cent as US and Taiwanese customers bought faster. Our five-quarter table from its filings, and what it guides next.",
  metaDesc: "China was 25% of Applied Materials' Q4 FY2026 revenue of $10.4bn, down from 35% in Q3 FY2025, its SEC filings show. US sales doubled. Our table.",
  author: "tom-kessler", date: "2026-11-13T13:20:00Z",
  capt: "A patterned eight-inch silicon wafer splitting light into bands of colour, in a file photograph.",
  tags: [
    { name: "Semiconductors", slug: "semiconductors" },
    { name: "Trade", slug: "trade" },
    { name: "Manufacturing", slug: "manufacturing" }
  ],
  related: [
    R("/ai/the-guidance-that-assumes-china-buys-nothing/", "Export Controls"),
    R("/policy/export-controls-shift-to-enforcement/", "Export Controls"),
    R("/technology/china-clears-domestic-quartz-but-not-the-crucible/", "Supply Chain")
  ],
  body: [
    `Twenty-five cents of every dollar that Applied Materials took in during its fourth fiscal quarter came from China, ${L(AMAT_Q4, "its results release showed on Thursday 12 November")}. Five quarters earlier the figure was 35 cents. The chip-equipment maker sold more to Chinese customers than a year ago, not less; the rest of the world simply bought faster.`,
    `Applied Materials, the California maker of machines that deposit, etch and inspect the layers of a chip, reported revenue of $10.409bn for the quarter to 25 October 2026, up 53 per cent, with China contributing $2.642bn, or 25 per cent. A year earlier China was 29 per cent of sales, and in the July quarter of 2025 it was 35 per cent.`,
    `China's revenue rose 34.5 per cent from a year earlier, by our arithmetic, against 53 per cent for the company as a whole. Sales to the United States roughly doubled, from $655m to $1.32bn, and sales to Europe more than doubled from a small base, to $520m. Taiwan, home of the biggest contract chipmakers, overtook China as the largest region, at 28 per cent.`,
    AMAT_GEO,
    `<h2>Is the shift a quarter or a trend?</h2>`,
    `On the company's own figures it has run for five quarters. China's share fell from 35 per cent in the July quarter of 2025 to 29 per cent in October, held at about 28 per cent through the first three quarters of fiscal 2026, by our subtraction for the first half, and dropped again to 25 per cent. For the full year China was 27 per cent of the $34.446bn total, against 30 per cent in fiscal 2025.`,
    `The release does not explain the mix, and the company's numbers are its own. A regional split can swing with the timing of shipments to individual new plants. The fiscal 2026 accounts also include a $253m settlement with the Commerce Department's Bureau of Industry and Security over what the company describes as a previously disclosed export-controls compliance matter; ${L(AMAT_Q3, "the third-quarter release")} already counted it in the nine-month figures.`,
    `"Applied Materials delivered record results in fiscal 2026," Gary Dickerson, the chief executive, said. He added that the company was "on track to grow our Semiconductor Systems business more than 40 percent in our calendar 2026". That segment, which sells the equipment rather than servicing it, had revenue of $7.996bn in the quarter, against $4.879bn a year earlier. Applied Global Services, which maintains and upgrades installed machines, grew 26 per cent to $1.896bn. Adjusted earnings per share rose 92 per cent to $4.16.`,
    `Over the full year the ranking changed less than the quarter suggests. China was still the largest region in fiscal 2026, at $9.33bn, ahead of Taiwan at $8.818bn and Korea at $6.362bn. But China's sales grew 9.4 per cent over the year, by our arithmetic, against 28.6 per cent for Taiwan, 39.9 per cent for the United States and 63.3 per cent for Europe. Korea, home of the big memory makers, rose 48.6 per cent in the fourth quarter alone.`,
    `The quarter came in $159m above the midpoint of the $10.25bn the company guided to in August, by our arithmetic, and gross margin under US accounting rules rose 2.4 points to 50.4 per cent. Applied Materials bought back $2.0bn of its own shares in the quarter, which its finance chief described as the largest quarterly buyback in more than eight years.`,
    `For the quarter to January 2027 it guides revenue of $11.1bn, plus or minus $500m, and adjusted earnings of $4.35 a share, plus or minus 20 cents. It gives no regional guidance. Investors in chip stocks have been told before to assume less from China: Nvidia's own forecast in September <a href="/ai/the-guidance-that-assumes-china-buys-nothing/">assumed no data-centre compute revenue from the country at all</a>, and enforcement has become the main tool of US policy, as we reported when <a href="/policy/export-controls-shift-to-enforcement/">export controls shifted from rulemaking to settlements</a>. Cisco, which also reported on Thursday, raised its own targets for the AI build-out, which we cover in <a href="/markets/cisco-lifts-its-ai-target-by-1-5bn-and-gives-up-margin/">Cisco lifts its AI target by $1.5bn and gives up margin</a>.`,
    `The next regional breakdown is expected with the first-quarter results in February. A China share above 25 per cent would mean the October quarter was the low point; one below it would make five quarters of decline six.`
  ]
}),

/* ---------- 13:40Z MARKETS ---------- */
MK({ slug: "cisco-lifts-its-ai-target-by-1-5bn-and-gives-up-margin", kick: "Networking",
  headline: "Cisco lifts its AI target by $1.5bn and gives up margin",
  dek: "Cisco now expects $9bn of AI infrastructure revenue from the largest cloud companies in fiscal 2027, up from $7.5bn in August, and raised its full-year forecast. Its product gross margin fell 3.5 points. Our comparison of the two releases.",
  metaDesc: "Cisco raised its FY2027 hyperscaler AI revenue target to $9bn from $7.5bn on 12 November 2026; networking rose 43% as product margin fell 3.5 points.",
  author: "priya-raghavan", date: "2026-11-13T13:40:00Z",
  capt: "An office building on Cisco's main campus in San Jose, California, with a water tower beyond the trees, in a file photograph from 2008.",
  tags: [
    { name: "Networking", slug: "networking" },
    { name: "AI Infrastructure", slug: "ai-infrastructure" },
    { name: "Data Centers", slug: "data-centers" }
  ],
  related: [
    R("/markets/coreweaves-biggest-customer-is-30-per-cent-not-67/", "AI Infrastructure"),
    R("/technology/infineon-now-expects-close-to-4bn-from-ai-power-supplies/", "Semiconductors"),
    R("/technology/ipv6-and-the-machines/", "Networking")
  ],
  body: [
    `"We are in the very early stages of a multi-year networking supercycle," Chuck Robbins, Cisco's chief executive, said on Thursday 12 November, as ${L(CSCO_Q1, "the company reported first-quarter results")} and raised the number it now gives investors for the AI side of that cycle.`,
    `Cisco Systems expects $9bn of revenue in fiscal 2027 from AI infrastructure sold to hyperscalers, the largest cloud operators, up from the $7.5bn it forecast in August and, Cisco said, more than double its fiscal 2026 total. It also raised its full-year revenue forecast to $74.8bn to $75.8bn, from $72.2bn to $73.4bn.`,
    `By our arithmetic the new AI figure is 20 per cent above the old one and would be about 12 per cent of fiscal 2027 revenue at the midpoint of the new range. The total forecast rose by about $2.5bn, so the AI increase accounts for roughly three-fifths of the change. Cisco does not break out how much of the rest comes from AI-related demand outside the hyperscalers.`,
    `The new target can be set against an older number. In August Cisco said hyperscalers had placed $9.3bn of AI infrastructure orders with it in fiscal 2026, $4bn of them in the fourth quarter alone. The $9bn revenue figure for fiscal 2027 is therefore close to the value of last year's orders, by our comparison, which suggests the target mostly assumes that booked orders turn into shipped revenue. The November release gives no first-quarter orders figure, so it is not possible to tell from the filing whether that pace has continued.`,
    CSCO_TABLE,
    `The quarter itself, to 24 October, beat Cisco's own range. Revenue was $18.517bn, up 24 per cent and $317m above the top of its guidance, and adjusted earnings were $1.40 a share against a guided $1.32 to $1.34. Networking revenue, the hardware the AI build-out runs on, rose 43 per cent to $11.132bn and is now 60 per cent of the total. Security grew 7 per cent, collaboration 8 per cent and observability 2 per cent. Services, mainly support, grew 1 per cent. "In Q1, we delivered the strongest revenue and non-GAAP earnings per share growth rates for Cisco in over 15 years," Robbins said.`,
    `<h2>What did the growth cost?</h2>`,
    `Margin. Cisco's adjusted gross margin on products fell to 63.7 per cent from 67.2 per cent a year earlier, and the company-wide figure to 65.6 per cent from 68.1 per cent. On $14.667bn of product revenue, 3.5 points of margin is about $513m of gross profit that the quarter would have earned at last year's rate, by our multiplication. The release does not attribute the decline, and gross margin is affected by pricing, component costs and mix. Margin was also lower in the August quarter, as ${L(CSCO_Q4, "the fourth-quarter release")} showed.`,
    CSCO_MARGIN,
    `Cisco guides adjusted gross margin of 65 to 66 per cent for the January quarter, against 65.6 per cent just reported, and revenue of $18.0bn to $18.2bn, which would be below the quarter just ended. Mark Patterson, the finance chief, spoke of "enabling us to grow earnings much faster than revenue." The raised range for adjusted earnings, $5.47 to $5.53 a share, grew 8.3 per cent at the midpoint, more than twice the 3.4 per cent increase in the revenue range.`,
    `One figure moved the other way. Remaining performance obligations, contracted revenue not yet recognised, were $46.2bn at the end of October, up 8 per cent on a year earlier but about $0.5bn below the $46.7bn reported at the end of July. Cisco returned $3.7bn to shareholders in the quarter, including $2.0bn of buybacks at an average of $112.38 a share.`,
    `Other AI suppliers have reported similar trade-offs between growth and cost. CoreWeave's quarter showed <a href="/markets/coreweaves-biggest-customer-is-30-per-cent-not-67/">debt rising $11.8bn alongside revenue</a>, and Infineon this week <a href="/technology/infineon-now-expects-close-to-4bn-from-ai-power-supplies/">raised its AI power-supply target to close to €4bn</a>. Applied Materials, which also reported on Thursday, showed <a href="/technology/china-falls-to-a-quarter-of-applied-materials-sales/">China's share of its sales falling to a quarter</a>.`,
    `Cisco's next quarterly dividend, of 42 cents, is payable on 20 January 2027. Its second-quarter results, expected in February, will show whether margin holds inside the 65 to 66 per cent range.`
  ]
}),

/* ---------- 14:00Z POLICY (SECOND HEADLINE) ---------- */
PO({ slug: "singapore-asked-washington-about-megaspeed-493-days-ago", kick: "Export Controls",
  headline: "Singapore asked Washington about Megaspeed 493 days ago",
  dek: "Singapore's Home Affairs ministry says the US gave it little help in its inquiry into Megaspeed and the server maker Super Micro, and that Alice Huang was not investigated for espionage. A day later police charged a fifth person. Our timeline.",
  metaDesc: "Singapore said on 12 November 2026 it first sought US help on Megaspeed's server supplier on 7 July 2025, 493 days earlier, and received little. Our timeline.",
  author: "jonathan-bright", date: "2026-11-13T14:00:00Z",
  capt: "The blue glass Police Cantonment Complex, the Pinnacle@Duxton housing towers and a row of shophouses seen from Kampong Bahru Road in Singapore, in a file photograph from 2023.",
  tags: [
    { name: "Semiconductors", slug: "semiconductors" },
    { name: "Enforcement", slug: "enforcement" },
    { name: "Trade", slug: "trade" }
  ],
  related: [
    R("/ai/nvidia-board-opens-inquiry-394-days-after-megaspeed/", "Semiconductors"),
    R("/policy/megaspeeds-paper-trail-from-commerce-to-the-prosecutors/", "Export Controls"),
    R("/ai/the-fixer-pleads-the-co-founder-does-not/", "Export Controls")
  ],
  body: [
    `On Tuesday 24 June 2025, officials of the US Commerce Department's Bureau of Industry and Security carried out a check at Megaspeed International in Singapore, with Alice Huang present. According to ${L(MHA, "a statement from Singapore's Ministry of Home Affairs")} on Thursday 12 November 2026, that visit was the first time Singapore learned of American interest in the company.`,
    `Singapore says it asked the United States for help with its Megaspeed investigation on 7 July 2025 and has received "limited information or assistance" since. The ministry's 12 November 2026 statement, 493 days after that first request, also says Alice Huang, Megaspeed's former chief executive, "was not investigated for espionage".`,
    `The request concerned Super Micro Computer, the US server maker, which the ministry says gave Singapore's police only limited cooperation. Police and the Attorney-General's Chambers raised that with US authorities on 7 July 2025 and, from September 2025, repeatedly asked the Justice Department and the FBI. "Singapore has to date received limited information or assistance in respect of the company," the statement says. The account is Singapore's; the statement does not quote a US response.`,
    `<h2>Why did Singapore need American records?</h2>`,
    `Because the servers did not stay in Singapore. The ministry says the machines bought by the companies under investigation were exported through Singapore to Malaysia without entering the local market, and police needed to establish whether they were later moved elsewhere, contrary to what had been declared. "SPF could not rely solely on declarations made by the companies in Singapore," it says. The suspected offences are Singaporean ones, chiefly false declarations in server purchases, not breaches of US export rules.`,
    `On that point the statement is direct. Singapore "does not enforce" other countries' unilateral export controls, but expects companies operating there "to take into account such regulations, including export controls". It repeats the home affairs minister's position of 3 March 2025 that "Singapore's investigations were not based on any request from any country or sovereign entity."`,
    `<h2>What happened to Alice Huang?</h2>`,
    `Police interviewed her on the day of the US check and impounded her passport. She was investigated as Megaspeed's then chief executive, chair and a key controller, the ministry says, and was a Hong Kong resident. In February 2026 police and prosecutors concluded there was insufficient evidence that she had committed offences over the declarations, but found she had knowingly given investigators inaccurate information to play down her role. She was given a stern warning, her passport was returned on 26 February 2026, 247 days after it was taken, by our count, and she left Singapore that day, barred from returning.`,
    SG_TIMELINE,
    `The investigation into Megaspeed itself, and six other people, continues, the ministry says. None of the six has been in Singapore since February 2025. The ministry closes by saying Singapore will keep investigating on its own account, cooperate with foreign authorities where appropriate and "take firm enforcement action wherever the evidence warrants it". Megaspeed has not been charged with any offence. It has said that inspections by US and Malaysian authorities found no evidence of violations.`,
    `<h2>Who has been charged so far?</h2>`,
    `Five people and six companies in the wider server-purchase case, after ${L(SPF_NOV, "the police announced charges on Friday 13 November")} against Shi Bingzhe and two companies he ran, Superphi and NJ Global Financial. Police say the two companies acquired 917 servers from Aperia International across 41 transactions between May 2024 and February 2025, an average of about 22 servers a transaction by our division, with reasonable grounds to believe the servers were the proceeds of Aperia's alleged fraud by false representation.`,
    SG_CHARGES,
    `The case began with three individuals charged on 27 February 2025. ${L(SPF_JUL, "A police release on 1 July")} added further charges, the first prosecutions of companies, including Aperia International, and a prohibition of disposal on a house valued at about S$55m. It named the server suppliers whose machines were involved as Dell, Super Micro Computer and Asus. The individuals include Wei Zhaolun Alan, who faces a charge of converting about S$55m of property, representing about S$38m of alleged criminal benefits, to buy the house. Fraud by false representation carries up to 20 years in prison per charge in Singapore. The charges are allegations and have not been proved in court.`,
    `For Nvidia, whose Singapore customer is at the centre of the inquiry, the statement adds a government's version of events to a story told until now mostly through leaks. Komposite's earlier timeline found that <a href="/ai/nvidia-board-opens-inquiry-394-days-after-megaspeed/">Nvidia's board opened its inquiry 394 days after Megaspeed first surfaced</a>, and we traced <a href="/policy/megaspeeds-paper-trail-from-commerce-to-the-prosecutors/">the paper trail from Commerce to the prosecutors</a>. A contractor linked to Super Micro has separately <a href="/ai/the-fixer-pleads-the-co-founder-does-not/">pleaded guilty in a US diversion case</a>. Jensen Huang, who <a href="/ai/huang-resigns-from-nvidia-and-the-8-k-gives-no-reason/">resigned as Nvidia's chief executive this week</a>, had been asked by three House committee chairmen to a closed briefing on 18 November, the next date on the American side of the story.`
  ]
}),

/* ---------- 14:20Z TECHNOLOGY (LEAD) ---------- */
TE({ slug: "microsofts-mail-outage-crosses-the-slas-99-per-cent-line", kick: "Cloud",
  headline: "Microsoft's mail outage crosses the SLA's 99 per cent line",
  dek: "Exchange Online has been degraded since 16:17 GMT on Thursday, and Microsoft has posted 34 updates without naming a root cause. Our reading of its status record and its service-level agreement, and what the hours mean for customers' credits.",
  metaDesc: "Microsoft's Exchange Online outage passed 21 hours on 13 November 2026, far beyond the 7.2 hours that take a user below 99% uptime in its SLA. Our analysis.",
  author: "tom-kessler", date: "2026-11-13T14:20:00Z",
  capt: "Building 42 on Microsoft's campus in Redmond, Washington, after a snowfall, in a file photograph from 2007.",
  tags: [
    { name: "Cloud", slug: "cloud" },
    { name: "Resilience", slug: "resilience" },
    { name: "Enterprise Software", slug: "enterprise-software" }
  ],
  related: [
    R("/technology/the-tax-office-keeps-its-mail-at-home/", "Cloud"),
    R("/cybersecurity/fourteen-hundred-fixes-in-one-month/", "Cybersecurity"),
    R("/technology/cloud-repatriation-selective/", "Cloud")
  ],
  body: [
    `Microsoft has posted 34 updates on incident EX1550543 since it opened at 16:17 GMT on Thursday 12 November, according to ${L(MS_HEALTH, "the service-health record")} that the University of Pennsylvania copies from its Microsoft 365 administration console every 15 minutes. At the 14:01 GMT update on Friday the incident was still a "service degradation", its end time "Not ended yet" and its root cause "N/A".`,
    `The Microsoft 365 outage that began on Thursday 12 November 2026 has left users unable to reach Exchange Online mailboxes through Outlook on the web, Outlook desktop, mobile sync and programming interfaces for more than 21 hours. By Friday Microsoft listed 20 dependent services as affected, and said it had found no evidence of malicious activity.`,
    `Recovery is under way but not complete. At 13:00 GMT Microsoft reported "broader improvements now observed in North America and sustained improvements across much of Europe"; at 14:01 GMT it said email queues were "significantly reduced and approaching normal levels", while warning that some users may still see intermittent access problems or delayed mail. It said it would publish "a full Post-Incident Report with root cause and defense-in-depth actions after mitigation is complete". Microsoft has also been posting updates on ${L(MS_STATUS, "its public status page")} for customers without console access.`,
    `<h2>What has Microsoft said went wrong?</h2>`,
    `Several things, in sequence. Read in order, the updates move from a load problem to failing servers, then to a component handling health checks, then to an overwhelmed process that sets up secure connections, and finally to a patch for an authentication and routing component that began to stabilise servers on Friday morning.`,
    DIAG_TABLE,
    `Two updates sit uneasily together. At 19:57 GMT on Thursday Microsoft said: "While we haven't identified any recent changes that correlate with the start of impact". At 01:06 GMT on Friday it said it had "begun reverting a recent network configuration change that correlates with the start of impact". The second does not say whether that change caused the outage, and investigations of this kind often revise early findings. The post-incident report should settle it. Under ${L(MS_CONTINUITY, "Microsoft's own service description")}, a preliminary report is due within 48 hours of resolution and a final one within five business days.`,
    `The mail outage was Thursday's second Microsoft 365 incident. A separate one, TM1550488, disrupted Teams messaging for users routed through North and South America from 14:45 to 15:53 GMT, ending 24 minutes before the Exchange incident opened. Microsoft's preliminary root cause for that one was "Resource contention within the underlying service infrastructure", and it promised a preliminary report within two business days. The two records do not refer to each other.`,
    `<h2>Which services were hit?</h2>`,
    `Anything that depends on Exchange Online. A companion incident, MO1550821, opened at 18:26 GMT on Thursday naming five services. By our count of each update, the list grew to 20 by 06:54 GMT on Friday, taking in Copilot's access to mail and calendars, Intune device enrolment, Purview compliance tools, Universal Print and some Windows 365 cloud PCs. Microsoft says elements that do not interact with Exchange Online "remain functional", and that Teams calls, meetings, group chats and channel messages were largely unaffected.`,
    SERVICES_TABLE,
    `Microsoft released its monthly security updates on Tuesday 10 November. ${L(SECWEEK, "SecurityWeek noted")} that Microsoft had not linked an Outlook flaw fixed in that release to the outage. October's release, by Microsoft's own count, <a href="/cybersecurity/fourteen-hundred-fixes-in-one-month/">covered 1,453 vulnerabilities</a>.`,
    `<h2>What does the outage mean for service credits?</h2>`,
    `For a user who could not send or receive mail in Outlook on the web for the whole incident so far, uptime for November would already be about 97.0 per cent, by our arithmetic, which is inside the band where ${L(MS_SLA_PAGE, "Microsoft's service-level agreement")} pays a credit of half the month's Exchange Online fees. ${L(MS_SLA_DOC, "The October 2026 edition")} defines Exchange Online downtime as "Any period of time when users are unable to send or receive email with Outlook Web Access", measured in user-minutes across a calendar month.`,
    SLA_TABLE,
    `Three conditions narrow that. Downtime is averaged across every user in a tenant, so an organisation where only some mailboxes failed, or where service returned early, will sit higher. Credits are not automatic: a customer must file a claim with the time, duration, number and location of affected users, and for an incident in November the claim must arrive by the end of December. And credits are "your sole and exclusive remedy", applied only to the fees for the affected service; the agreement rules out compensation for "lost revenue, operational costs, or any indirect losses". If the incident runs past 04:17 GMT on Saturday 14 November, a user out for the whole period would cross the 95 per cent line that triggers a full refund of that month's fee.`,
    `<h2>Why does the 48-hour mail window matter?</h2>`,
    `It decides whether delayed mail is delivered or bounced. ${L(MS_QUEUE, "Microsoft's documentation")} says Exchange Online retries delivery for 24 hours, after which messages "will expire and will be returned to the senders in non-delivery reports". At 09:55 GMT on Friday Microsoft said it was "extending the email timeout window to 48 hours to help protect delayed messages". If the clock runs from when a message is first queued, which Microsoft has not specified, mail held since 16:17 GMT on Thursday would now bounce no earlier than Saturday afternoon rather than Friday afternoon.`,
    `The record also shows the pace of communication. Microsoft's service description promises updates "on an hourly cadence or, if a different cadence is required, it will be stated". Each update named the time of the next one, and by our comparison three of those promised times were missed by more than five minutes: by six minutes at 01:00 GMT, and by 55 and 61 minutes as Europe's working day began on Friday, when the next updates came at 09:55 and 11:01 GMT.`,
    `The outage lands in a year when Microsoft 365's availability has already dipped. Microsoft's published worldwide uptime for the first quarter of 2026 was 99.526 per cent, the lowest figure in its table, equal to about 614 minutes of a 90-day quarter by our arithmetic; the second quarter recovered to 99.994 per cent. Some public bodies were reconsidering their dependence before this week: the Dutch tax administration said in October that it would <a href="/technology/the-tax-office-keeps-its-mail-at-home/">keep its mail on its own servers</a> rather than move to Microsoft 365, part of a broader pattern we have described as <a href="/technology/cloud-repatriation-selective/">selective cloud repatriation</a>.`,
    `Microsoft's next scheduled update on the Exchange incident was due at 15:00 GMT on Friday. The fourth-quarter uptime figure, which will include this week, is the number customers will be able to set against the 99.9 per cent the agreement promises.`
  ]
}),

];
