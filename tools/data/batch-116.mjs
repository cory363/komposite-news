/*
Komposite News, batch 116: Tuesday 3 November 2026 (US midterm Election Day), round 36. New lead + 1 story, both on the
midterms in Komposite's lane (AI and tech in the election). tools/data/lead.json pins the new lead (the round-35 Marvell pin
moves down the normal way). Brave was unavailable, so leads came from WebSearch and the day's reader-trend signal; every
figure was then taken from the primary sources below. No result, race call, turnout figure or control-of-Congress claim
appears: polls close tonight, and every sentence is written to stay true tonight and tomorrow. Non-partisan: no candidate is
characterised, and both AI-money networks are described from their own filings and statements. r36-claims.md checked before
writing and before commit.

---------- 14:20Z POLICY (LEAD): "$30.6m in reserve against $1.8m" (jonathan-bright, house byline) ----------
SOURCES READ:
- FEC API, committee totals, 2026 cycle, read 3 Nov 2026 (api.open.fec.gov /committee/<id>/totals/):
  Leading the Future C00916114 (NV, quarterly; last report PRE-GENERAL, coverage 15 Aug 2025 - 14 Oct 2026): receipts
  $75,981,640.00; contributions $75,100,000 (all itemised individual/persons); contributions to other federal committees
  $47,000,000; operating expenditures $1,657,821.13; other disbursements $3,500,000; disbursements $52,157,821.13; IEs $0;
  cash $23,823,818.87; treasurer Britney Gonzalez.
  Think Big C00923417 (NV, monthly; PRE-GENERAL to 14 Oct): receipts $25,026,160.95, of which $24,500,000 from other
  committees and $500,000 individual; IEs $18,456,980.90; disbursements $23,090,681.65; cash $1,935,479.30; treasurer Josh
  Vlasto.
  American Mission C00916692 (NV, monthly; PRE-GENERAL to 14 Oct): receipts $23,975,687.55, of which $22,500,000 from other
  committees and $250,000 individual; IEs $16,056,523.74; disbursements $19,141,415.39; cash $4,834,272.16.
  Public First C00930503 (DC, quarterly; OCTOBER QUARTERLY, 1 Jan - 30 Sep 2026): receipts $4,910,605.00; contributions to
  other federal committees $4,340,000; IEs $0; cash $478,561.93.
- FEC committee pages (fec.gov/data/committee/<id>/?cycle=2026), read 3 Nov 2026 (raw HTML):
  Jobs and Democracy PAC C00928374 (coverage 1 Jan - 30 Sep 2026): receipts $20,735,723.37; disbursements $20,065,333.68;
  IEs $17,875,336.49; cash $670,389.69. Defending Our Values PAC C00928390 (coverage 1 Jul 2025 - 30 Sep 2026): receipts
  $8,406,067.63; disbursements $7,773,196.83; IEs $7,365,832.10; cash $632,870.80. Public First: same figures as the API.
- Anthropic, "Anthropic is donating $20 million to Public First Action", 12 Feb 2026 (read): Public First Action is "a new
  bipartisan 501(c)(4)"; will "support public education about AI, promote safeguards, and ensure America leads the AI race";
  "will work with Republicans, Democrats, and Independents"; names no candidates.
- Bloomberg (Emily Birnbaum) via The Spokesman-Review, 12 Feb 2026 (read): Public First had not disclosed what it raised beyond
  Anthropic's $20m; ads backing Sen. Pete Ricketts run by Defending Our Values PAC, an affiliated super PAC; Leading the Future
  backed by Greg Brockman and Andreessen Horowitz, said it had $70m on hand.
- The Washington Sun (Samuel Larreal, Taylor Giorno), 30 Jan 2026 (read; notus.org URL redirects there): LTF said it raised
  $125m in H2 2025; FEC filing showed $50.3m raised; Brockman and his wife each gave $12.5m; Marc Andreessen and Ben Horowitz
  each gave $12.5m; other donors Joe Lonsdale, Ron Conway, Perplexity; $5m each to Think Big, American Mission and nonprofit
  Build American AI, which need not disclose donors; LTF had $39.3m cash at 31 Dec 2025.
- Campaign Legal Center, complaint to the FEC, 5 May 2026 (read the release page): respondents Think Big and American Mission;
  both "part of the 'Leading the Future' network"; alleges payments routed through LLCs evaded reporting; "neither LLC appears
  to be a bona fide commercial vendor operating at arm's length".
FACT-CHECK NOTES: Aggregator figures seen in search (FourWeekMBA, aiweekly, letsdatascience, explainx; "$78.5m" CNBC tally,
  Intercept "$7.4m / $34m") are NOT used; every committee figure comes from the FEC. A reported second $20m Anthropic payment
  rests on one aggregator's summary of the WSJ: not used. Party orientation of Think Big / American Mission seen only in
  secondary summaries: not stated. The FEC API DEMO_KEY hit its hourly limit after four committees; the other two were read on
  fec.gov's committee pages. The Public First group's pre-general reports were not shown by the FEC when checked; we say so.
  Disclosure note for the owner: Komposite's AI tooling and Anthropic (a donor named here) are related; flagged in report.
OUR ARITHMETIC: LTF -> Think Big + American Mission: 24.5 + 22.5 = $47.0m, = LTF's $47.0m to other committees; 47.0/75.98 =
  61.9%. LTF network IEs 18.457 + 16.057 = $34.51m; cash 23.824 + 1.935 + 4.834 = $30.59m. Public First network IEs 17.875 +
  7.366 = $25.24m; cash 0.479 + 0.670 + 0.633 = $1.78m. Cash ratio 30.59 / 1.78 = 17.2. LTF contributions 75.1 - 50.3 = $24.8m
  since 1 Jan 2026. Cutoffs differ (14 Oct vs 30 Sep) and are stated.
HERO: Wikimedia Commons, "2018-03-26 – United States Capitol East Front, viewed from the east – Washington, D.C., United
  States.jpg", Beethoven, CC BY-SA 4.0, 26 Mar 2018: the Capitol's East Front and dome, distant unidentifiable figures. Not used
  on any sister site (grep of ~/Sites).

---------- 14:00Z AI: "Thirty-one states, three courtrooms" (dana-whitfield, house byline) ----------
SOURCES READ:
- Public Citizen, "Tracker: State Legislation on Deepfakes in Elections", last updated 21 Oct 2026 (read): enacted entries for
  33 states (list in our table); Hawaii SB 2687 "Enacted July 2024 Struck down"; Massachusetts H 5100 / S 2856 Amendment 7
  "Enacted Nov 2024 (Sunset Feb 2025)"; Louisiana HB 459 enacted June 2026; California AB 502 enacted Sept 2026.
- Public Citizen release, "30 States Now Have Laws to Regulate Election Deepfakes", 13 May 2026 (read): Maryland the 30th
  state; Ilana Beller, democracy organizing manager: "the need for the remaining 20 states to enact protections has never been
  greater."
- The Volokh Conspiracy (Reason), 31 Jan 2026 (read): Babylon Bee v. Lopez (D. Haw.), Judge Shanlyn Park, order 30 Jan 2026;
  Act 191 covered "materially deceptive media", applied from the first working day of February in even years through the
  general election; disclaimer safe harbor; failed strict scrutiny; vague; "The First Amendment does not permit the State to
  sacrifice speech for efficiency."
- HLLI case page, Kohls v. Bonta (read): AB 2655 and AB 2839 signed 17 Sep 2024; preliminary injunction 2 Oct 2024; summary
  judgment for plaintiffs on AB 2839 on 29 Aug 2025, statute unconstitutional in its entirety; California had agreed not to
  enforce AB 2655; appeal to the Ninth Circuit 19 Sep 2025; briefs 12 Jan and 11 Mar 2026; no decision reported.
- The Volokh Conspiracy, 9 Feb 2026 (read): Kohls v. Ellison, Eighth Circuit (Colloton, Loken, Benton) affirmed denial of a
  preliminary injunction; Kohls lacked standing (labelled parodies are not deepfakes under the statute); Franson's 16-month
  delay; merits not decided; Minnesota law covers dissemination within a set period before an election, without consent, with
  intent to injure a candidate or influence an election; candidates who violate it forfeit nomination or office.
FACT-CHECK NOTES: Our count of 33 / 31 reconciles with Public Citizen's own "30th state" (Maryland, May) plus Louisiana (June).
  Hawaii appeal/settlement reports seen only on advocacy sites: not used. AB 2655's Section 230 point is from the appellees'
  brief as summarised by HLLI: described as the parties' argument only. We have not checked each law's effective date; we say so.
OUR ARITHMETIC: first enactments by year (our table) 5 + 16 + 7 + 5 = 33; minus Massachusetts (sunset) and Hawaii (struck)
  = 31; 50 - 31 = 19 states without one; Ninth Circuit appeal pending 410 days at 3 Nov 2026 (19 Sep 2025 to 3 Nov 2026).
HERO: Wikimedia Commons, "Television News Control Room.png", Asterzenback, CC0, 12 Sep 2019: an empty news control room with a
  monitor wall. No people in the room. Not used on any sister site (grep of ~/Sites).

UNIQUENESS: 6-gram overlap with top sources reported in the commit message.
*/
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const AI = P("ai", "AI", "ai", "Photograph via Wikimedia Commons");
const PO = P("policy", "Policy", "policy", "Photograph via Wikimedia Commons");

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

/* Sources */
const FEC_LTF = "https://www.fec.gov/data/committee/C00916114/?cycle=2026";
const FEC_TB = "https://www.fec.gov/data/committee/C00923417/?cycle=2026";
const FEC_AM = "https://www.fec.gov/data/committee/C00916692/?cycle=2026";
const FEC_PF = "https://www.fec.gov/data/committee/C00930503/?cycle=2026";
const FEC_JD = "https://www.fec.gov/data/committee/C00928374/?cycle=2026";
const FEC_DOV = "https://www.fec.gov/data/committee/C00928390/?cycle=2026";
const ANTH = "https://www.anthropic.com/news/donate-public-first-action";
const BBG = "https://www.spokesman.com/stories/2026/feb/12/anthropic-pledges-20-million-to-candidates-who-fav";
const WSUN = "https://washingtonsun.com/money/ai-super-pac-fundraising-midterms-democrats-republicans";
const CLC = "https://campaignlegal.org/document/ai-industry-funded-super-pacs-unlawfully-evaded-transparency-rules-clc-alleges";

const PCIT = "https://www.citizen.org/article/tracker-legislation-on-deepfakes-in-elections/";
const PCIT30 = "https://www.citizen.org/news/30-states-now-have-laws-to-regulate-election-deepfakes/";
const HAW = "https://reason.com/volokh/2026/01/31/hawaii-deceptive-election-related-deepfake-disclaimer-requirement-struck-down";
const BONTA = "https://hlli.org/kohls-v-bonta/";
const ELLISON = "https://reason.com/volokh/2026/02/09/no-preliminary-injunction-in-challenge-to-minnesota-election-deepfake-law-but-challenge-goes-on";

const PAC_TABLE = table(
  ["Committee", "Report used (period end)", "Receipts", "Independent expenditures", "Cash on hand"],
  [
    ["<strong>Leading the Future network</strong>", "", "", "", ""],
    [`${L(FEC_LTF, "Leading the Future")}`, "Pre-general (14 Oct)", "$75.98m", "$0 (passes money on)", "$23.82m"],
    [`${L(FEC_TB, "Think Big")}`, "Pre-general (14 Oct)", "$25.03m", "$18.46m", "$1.94m"],
    [`${L(FEC_AM, "American Mission")}`, "Pre-general (14 Oct)", "$23.98m", "$16.06m", "$4.83m"],
    ["Network total*", "", "", "$34.51m", "$30.59m"],
    ["<strong>Public First network</strong>", "", "", "", ""],
    [`${L(FEC_PF, "Public First")}`, "October quarterly (30 Sep)", "$4.91m", "$0 (passes money on)", "$0.48m"],
    [`${L(FEC_JD, "Jobs and Democracy PAC")}`, "Through 30 Sep", "$20.74m", "$17.88m", "$0.67m"],
    [`${L(FEC_DOV, "Defending Our Values PAC")}`, "Through 30 Sep", "$8.41m", "$7.37m", "$0.63m"],
    ["Network total*", "", "", "$25.24m", "$1.78m"]
  ],
  "* Komposite's arithmetic on Federal Election Commission data read on 3 November 2026. Receipts are not added up because money passed from one committee to another would be counted twice. The two networks' figures run to different dates, 14 October and 30 September, so the comparison is not like for like. Independent expenditures reported after those dates, including in 24-hour reports, are not included."
);

const LAW_TABLE = table(
  ["First law enacted", "States", "Count"],
  [
    ["2019 to 2023", "California, Texas (2019); Michigan, Minnesota, Washington (2023)", "5"],
    ["2024", "Alabama, Arizona, Colorado, Delaware, Florida, Hawaii, Idaho, Indiana, Massachusetts, Mississippi, New Hampshire, New Mexico, New York, Oregon, Utah, Wisconsin", "16"],
    ["2025", "Kentucky, Montana, Nevada, North Dakota, Pennsylvania, Rhode Island, South Dakota", "7"],
    ["2026", "Tennessee, Maine, Vermont, Maryland, Louisiana", "5"],
    ["Enacted at some point", "", "33"],
    ["Less: lapsed or struck down", "Massachusetts (sunset February 2025); Hawaii (struck down January 2026)", "&minus;2"],
    ["On the books on 3 November", "", "31"]
  ],
  "Komposite's count from Public Citizen's tracker of state election-deepfake legislation, last updated 21 October 2026, by the year each state's first listed law was enacted. It matches Public Citizen's own count of 30 states in May plus Louisiana in June. We have not checked each law's effective date, and some laws, such as California's AB 2839, survive on the books but have been blocked in court."
);

const COURT_TABLE = table(
  ["State and law", "Case", "What the court did", "Where it stands"],
  [
    ["Hawaii, Act 191 (SB 2687, 2024)", "Babylon Bee v. Lopez, US District Court for Hawaii", "Judge Shanlyn Park held on 30 January 2026 that the law fails strict scrutiny and is unconstitutionally vague, and rejected its disclaimer safe harbour", "Struck down"],
    ["California, AB 2839 (2024)", "Kohls v. Bonta, US District Court for the Eastern District of California", "Preliminary injunction on 2 October 2024; summary judgment for the challengers on 29 August 2025, finding the statute unconstitutional in its entirety", "Blocked; California's appeal to the Ninth Circuit pending since 19 September 2025"],
    ["California, AB 2655 (2024)", "Kohls v. Bonta", "Not ruled on: California had agreed not to enforce it", "Not enforced; part of the same appeal"],
    ["Minnesota, 2023 law as amended in 2024", "Kohls v. Ellison, Eighth Circuit", "On 9 February 2026 upheld the refusal of a preliminary injunction, on standing and delay, without deciding the constitutional question", "In force; the challenge continues in the district court"]
  ],
  "Compiled by Komposite from the Hawaii order as reported by The Volokh Conspiracy (31 January 2026), the Hamilton Lincoln Law Institute's case record for Kohls v. Bonta, and the Eighth Circuit opinion as reported by The Volokh Conspiracy (9 February 2026). These are the challenges we reviewed, not every case filed."
);

export default [

/* ---------- 14:00Z AI ---------- */
AI({ slug: "thirty-one-states-have-election-deepfake-laws-on-polling-day", kick: "Deepfakes",
  headline: "Thirty-one states, three courtrooms",
  dek: "Voters in 31 states cast ballots on Tuesday under a state law on AI deepfakes in election communications, by our count. Courts have struck down Hawaii's, blocked one of California's and left Minnesota's standing for now.",
  metaDesc: "By our count, 31 states have election deepfake laws on the books on 3 November 2026. Hawaii's was struck down; a California law is blocked on appeal.",
  author: "dana-whitfield", date: "2026-11-03T14:00:00Z",
  capt: "An empty television news control room with a wall of monitors and a production desk, in a file photograph.",
  tags: [
    { name: "AI Governance", slug: "ai-governance" },
    { name: "Regulation", slug: "regulation" },
    { name: "Fraud", slug: "fraud" }
  ],
  related: [
    R("/cybersecurity/deepfake-fraud-corporate-defenses/", "Deepfakes"),
    R("/policy/eight-attorneys-general-one-chatbot/", "State Action"),
    R("/policy/state-privacy-laws-national-floor/", "State Law")
  ],
  body: [
    `Thirty-one states have a law on the books regulating AI-generated deepfakes in election communications as voters cast ballots in the US midterm elections on Tuesday, by Komposite's count of ${L(PCIT, "Public Citizen's legislative tracker")}, last updated on 21 October. Thirty-three states have passed such a law at some point. Massachusetts let its law lapse in February 2025, and a federal judge struck down Hawaii's in January.`,
    `A deepfake, in these statutes, is audio, video or an image altered or generated with digital tools so that it shows a real person saying or doing something they did not. The laws differ in scope and penalty. Minnesota's makes it a crime to spread one within a set period before an election, without the depicted person's consent and with intent to injure a candidate or influence the result. Most of the laws are recent. By our count, only five states had one before 2024; sixteen added a law that year, seven in 2025 and five so far in 2026, the most recent Louisiana in June. When Maryland's law was signed in May, Public Citizen counted it as the 30th, and ${L(PCIT30, "said")} that "the need for the remaining 20 states to enact protections has never been greater". By our arithmetic, 19 states now have none.`,
    LAW_TABLE,
    `The laws have fared poorly when tested in court. Hawaii's Act 191 barred the reckless distribution of "materially deceptive media" that risked harming a candidate or changing how people voted, from the first working day of February in every even-numbered year through the general election. A disclaimer shown throughout a video or read at the start and end of audio was a safe harbour. On 30 January Judge Shanlyn Park of the US District Court for Hawaii held in a case brought by the satirical site the Babylon Bee that the law failed strict scrutiny and was unconstitutionally vague, ${L(HAW, "The Volokh Conspiracy reported")}. Counter-speech, voter education and existing defamation and election-fraud laws were less restrictive options, she wrote, adding: "The First Amendment does not permit the State to sacrifice speech for efficiency."`,
    `California's 2024 law fared no better. A federal judge granted a preliminary injunction against AB 2839 in October 2024, two weeks after it was signed, and on 29 August 2025 granted the challengers summary judgment, holding the statute unconstitutional in its entirety, according to ${L(BONTA, "the case record kept by the Hamilton Lincoln Law Institute")}, which represents one of the challengers. The court did not rule on a companion law, AB 2655, because California had agreed not to enforce it. The state appealed to the Ninth Circuit on 19 September 2025; the briefs were filed in January and March, and no decision has been reported. By our arithmetic, the appeal has been pending for 410 days.`,
    COURT_TABLE,
    `Minnesota's law is the exception so far. On 9 February the Eighth Circuit upheld a lower court's refusal to block it, ${L(ELLISON, "The Volokh Conspiracy reported")}. The court found that one challenger, whose videos were labelled as parody, lacked standing because labelled parodies are not deepfakes under the statute, and that the other had waited 16 months to sue. It expressly did not decide whether the law is constitutional, and the case continues. Its penalties include one aimed at candidates: one who breaks the law forfeits the nomination or office.`,
    `What this means for the technology industry is narrower than the headline count suggests. The laws we reviewed are aimed at whoever distributes a deepfake, not at the AI companies whose tools can produce one. The court record so far points in one direction: of the three states whose laws we found tested on the merits or close to it, two have lost, and the third has won only on procedure. A disclaimer, which many states treat as the safe option, did not save Hawaii's law or California's.`,
    `Why it matters: election deepfake rules are set state by state, so a clip that is lawful to share in one state can break the law in its neighbour. Deepfakes are already a fraud problem for companies, which have <a href="/cybersecurity/deepfake-fraud-corporate-defenses/">rebuilt payment verification</a> around cloned voices, and state officials have been willing to act on AI on their own, as when <a href="/policy/eight-attorneys-general-one-chatbot/">eight attorneys general sued OpenAI</a> last month over ChatGPT's safety. On the money behind the election, Komposite reports separately on <a href="/policy/ai-super-pacs-enter-election-day-with-30-6m-against-1-8m/">the two networks of AI-funded super PACs</a>.`
  ]
}),

/* ---------- 14:20Z POLICY (LEAD) ---------- */
PO({ slug: "ai-super-pacs-enter-election-day-with-30-6m-against-1-8m", kick: "Political Money",
  headline: "$30.6m in reserve against $1.8m",
  dek: "The AI industry's two super PAC networks had spent $34.5m and $25.2m on independent expenditures by their latest federal filings. The network funded by investors including Andreessen Horowitz's founders held $30.6m in cash; the Anthropic-backed one held $1.8m.",
  metaDesc: "FEC filings show the Leading the Future super PACs held $30.6m in cash on 14 October; the Public First group held $1.8m on 30 September.",
  author: "jonathan-bright", date: "2026-11-03T14:20:00Z",
  capt: "The East Front and dome of the United States Capitol in Washington under a clear sky, in a file photograph.",
  tags: [
    { name: "AI Governance", slug: "ai-governance" },
    { name: "Policy", slug: "policy" },
    { name: "Regulation", slug: "regulation" }
  ],
  related: [
    R("/policy/new-york-city-wants-a-validator-for-every-model/", "AI Policy"),
    R("/policy/eight-attorneys-general-one-chatbot/", "State Action"),
    R("/policy/sec-proposes-to-rescind-the-pay-to-play-rule/", "Political Money")
  ],
  body: [
    `The super PAC network funded by AI investors including Andreessen Horowitz's founders and OpenAI's president held $30.6m in cash in mid-October, while the Anthropic-backed network that opposes it held $1.8m at the end of September, by Komposite's arithmetic on Federal Election Commission filings. Voters cast ballots in the US midterm elections on Tuesday. Between them, the two networks had reported $59.8m of independent expenditures, the advertising and other spending a super PAC makes for or against candidates without coordinating with them.`,
    `The larger network is built around ${L(FEC_LTF, "Leading the Future")}, a super PAC registered in Nevada. Its pre-general report, which runs to 14 October, shows $76.0m of receipts, almost all of it $75.1m in contributions, and no independent expenditures of its own. Instead it passed $47.0m to two affiliated super PACs, ${L(FEC_TB, "Think Big")} and ${L(FEC_AM, "American Mission")}, which received $24.5m and $22.5m from other committees and spent $18.5m and $16.1m on independent expenditures. By our arithmetic, 61.9 per cent of what Leading the Future took in has gone to the two, and the three committees between them held $30.6m on 14 October, of which $23.8m sat with Leading the Future itself.`,
    PAC_TABLE,
    `The rival network is smaller in cash and less visible in its funding. ${L(ANTH, "Anthropic said in February")} that it was giving $20m to Public First Action, which it described as "a new bipartisan 501(c)(4)" that would "support public education about AI, promote safeguards, and ensure America leads the AI race". A 501(c)(4) is a nonprofit that may engage in some political activity and does not have to disclose its donors. Its affiliated super PACs do file with the FEC: ${L(FEC_PF, "Public First")}, which took in $4.9m in 2026 and passed $4.34m to other committees; ${L(FEC_JD, "Jobs and Democracy PAC")}, which reported $17.9m of independent expenditures through September; and ${L(FEC_DOV, "Defending Our Values PAC")}, with $7.4m. Defending Our Values would run ads supporting Senator Pete Ricketts of Nebraska, who is seeking re-election, ${L(BBG, "Bloomberg reported")} in February.`,
    `Who funds Leading the Future is a matter of record. Greg Brockman, OpenAI's president, and his wife each gave $12.5m in 2025, as did Marc Andreessen and Ben Horowitz, the co-founders of the venture firm Andreessen Horowitz, ${L(WSUN, "The Washington Sun reported")} from the committee's filings; the investor Joe Lonsdale, the investor Ron Conway and the AI search company Perplexity were also donors. The network said in January that it had raised $125m in the second half of 2025, while its super PAC's filing showed $50.3m. Its contributions have reached $75.1m since, so by our subtraction it has reported $24.8m of new contributions in 2026. Leading the Future also gave $5m to a nonprofit arm, Build American AI, which does not have to disclose its donors, the paper reported.`,
    `The Leading the Future group's spending is also the subject of a complaint. The Campaign Legal Center, a campaign-finance watchdog, told the FEC in May that Think Big and American Mission paid virtually all of their funds to newly formed companies, and that "neither LLC appears to be a bona fide commercial vendor operating at arm's length", ${L(CLC, "according to its complaint")}. Komposite found no public FEC ruling on the complaint.`,
    `The figures carry two caveats. First, the dates differ: the Leading the Future committees' pre-general reports run to 14 October, while the Public First committees' latest reports on the FEC's site run to 30 September. Second, super PACs report independent expenditures of $1,000 or more within 24 hours in the last 20 days before an election, so both networks have spent money since that is not in these totals. The cash figures are the best public measure of what each side had left for the final weeks, not of what it held on Tuesday.`,
    `What the networks want is on record too. Leading the Future's stated goal is a "national regulatory framework for AI", which The Washington Sun described as a way to block state enforcement. Anthropic listed opposing the pre-emption of state laws without stronger federal safeguards among the priorities of the group it funds, and said it would work with "Republicans, Democrats, and Independents". Public First Action had not disclosed what it raised beyond Anthropic's $20m, Bloomberg reported in February. The question of who writes AI rules has run through Komposite's coverage this autumn, from <a href="/policy/eight-attorneys-general-one-chatbot/">eight state attorneys general suing OpenAI</a> to the AI companies <a href="/policy/new-york-city-wants-a-validator-for-every-model/">testifying before New York's city council</a>.`,
    `Why it matters: both networks were set up to fight over how AI is regulated, and the disclosed money behind each comes largely from a handful of AI companies, investors and founders. The outcomes of the races they spent on are not yet known. When they are, the filings will show how much each side spent per race, and what it kept back. The rules each state already applies to AI in campaigns are set out in <a href="/ai/thirty-one-states-have-election-deepfake-laws-on-polling-day/">our count of election deepfake laws</a>.`
  ]
}),

];
