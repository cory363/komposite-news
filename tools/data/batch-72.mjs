/** Batch 72 — Sunday 11 October 2026. Four pieces: the NFL's Supreme Court
 *  amicus brief in New Jersey v. Kalshi (lead, 12:00Z), New York's settlement
 *  with Alex Mashinsky (11:40Z), Arena's Series B and alignment index
 *  (11:20Z) and the KillSec ransomware takedown (11:00Z). A fifth draft, on
 *  the CFTC's 5 October advance notice on leveraged retail crypto trading,
 *  was dropped: Komposite already covered it on 6 October in "The offer of
 *  leverage is the switch" (crypto/the-offer-of-leverage-is-the-switch).
 *
 *  POLICY / NFL (lead). Fact-check 11 Oct: Supreme Court docket No. 26-299,
 *  Flaherty v. KalshiEX (read; last entry 9 Oct, no conference date); NFL
 *  amicus brief dated 8 Oct, read in full as extracted text. All quotes and
 *  figures checked against it: "not wagers that create risk primarily for
 *  gambling purposes", "squarely disagreed", "given the current landscape",
 *  2027 season, "laissez-faire", prohibited wagers, age 21, Caesars v Kalshi,
 *  543 CFTC employees (memorandum from the CFTC executive director to OMB),
 *  Nevada and Pennsylvania close to 400 each, $1.8bn of $3.3bn,
 *  "unscrupulous actors" / "trade on inside information", counsel (Ullyot,
 *  Paoletti; Barr, Reaves at Torridon Law). Sixth Circuit 25 Sep and Ninth
 *  Circuit 28 Aug from the brief's citations; Third Circuit 6 Apr from the
 *  docket. The Block (Jason Shubnell, 8 Oct 13:30 EDT): Kalshi's response,
 *  Wallach quotes on X (verbatim), MLB/NHL partnerships, "nearly $2 billion".
 *  The Block (Zack Abrams, 10 Oct 14:35 EDT) relaying the WSJ on Kalshi's
 *  inquiry into three press-secretary bets. Reason (Tosin Akintola, 8 Oct)
 *  on the NFL's DraftKings, FanDuel and Fanatics partnerships. Our
 *  arithmetic: 1.8/3.3 = 54.5%; 400 x 2 = about 800; $19 + $74 + $80 = $173.
 *  Hero: Patrick Konior (Unsplash RgYUCJBmtCA), 50-yard line on a turf field.
 *
 *  CRYPTO / MASHINSKY. Fact-check 11 Oct: NY AG press release (9 Oct) read;
 *  Stipulation and Consent Order, Index No. 450040/2023, NYSCEF Doc. 138,
 *  filed 8 Oct 2026, read in full (17 pp). Damages $25m deemed satisfied by
 *  $10m to DOJ (credit for payments after 20 May 2025); $10m judgment deemed
 *  satisfied by completing sentence unless reduced (2255, compassionate
 *  release, good-time/earned-time, First Step Act, BOP home confinement).
 *  Plea 2 Dec 2024 (allocution 3 Dec), sentence 8 May 2025, 144 months,
 *  forfeiture $48,393,446. The Block (Jason Shubnell, 9 Oct 10:16 EDT) for
 *  the FTC April settlement; CFTC release 9256-26 (18 Jun 2026) read. FTC:
 *  AG release says founders and executives "paid" $16.5m (draft said
 *  "ordered to pay"; corrected). Our arithmetic: $25m + $10m = $35m; 144/12
 *  = 12 years.
 *  Hero: Bradley Andrews (Unsplash P1y0raBKr_M), domed clock tower.
 *
 *  STARTUPS / ARENA. Fact-check 11 Oct: Arena Series B post (8 Oct, updated
 *  9 Oct) read; TechCrunch (Julie Bort, 8 Oct 11:19 PDT) read; Arena Series
 *  A post (6 Jan 2026) and "$100M in 8 months" post (29 Jun 2026, signed by
 *  Anastasios Angelopoulos, CEO and co-founder) read; arXiv 2504.20879 read.
 *  Bloomberg (8 Oct) not opened; only its headline-level claim is used.
 *  Cut: the GPT-6.1-Sol score of 87.9 (seen only in a search extract of an X
 *  post, not on Arena's pages); "Cohere Labs" attribution of The Leaderboard
 *  Illusion (not shown on arXiv), replaced by first author. 90,000 sessions
 *  and 27 models from the Series B page's summary of the index post.
 *  Our arithmetic: 3.1/1.7 = 1.82 (about 82%); $150m + $200m = $350m;
 *  $3.1bn/$100m = 31x; 82m - 62m = 20m votes.
 *  Hero: Arnold Francisca (Unsplash f77Bh3inUpE), laptop showing code.
 *
 *  CYBERSECURITY / KILLSEC. Fact-check 11 Oct: BleepingComputer (Lawrence
 *  Abrams, 1 Oct 10:25) read; The Record (James Reddick, 1 Oct) read;
 *  Europol release (title and summary only: three arrests, eight searches,
 *  four countries, ~1,000 attacks); Halcyon's KillSec profile read. The DOJ
 *  release on Eltibrizi (bot wall) and the Hamburg police release (HTTP 503)
 *  could not be opened, so those facts are attributed to The Record. Cut:
 *  Decrypt-only claim (byline "Decrypt Agent") that the other two arrestees
 *  are in their twenties, and "no newer development" line. Our arithmetic:
 *  500/1,000 = half; 70/1,000 = 7%.
 *  Hero: Taylor Vick (Unsplash aWslrFhs1w4), server room.
 *
 *  Weekdays: 30 Sep 2026 Wed, 1 Oct Thu, 5 Oct Mon, 8 Oct Thu, 9 Oct Fri,
 *  10 Oct Sat, 11 Oct Sun, 9 Nov Mon.
 */
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const PO = P("policy", "Policy", "policy", "Photograph via Unsplash"),
      CR = P("crypto", "Crypto", "crypto", "Photograph via Unsplash"),
      CY = P("cybersecurity", "Cybersecurity", "cybersecurity", "Photograph via Unsplash"),
      ST = P("startups", "Startups", "startups", "Photograph via Unsplash");

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

// Sources
const KBC = "https://www.bleepingcomputer.com/news/security/police-dismantle-killsec-ransomware-gang-allegedly-led-by-16-year-old/";
const KREC = "https://therecord.media/killsec-ransomware-raas-arrests-europe";
const KEUR = "https://www.europol.europa.eu/media-press/newsroom/news/teenager-suspected-of-leading-killsec-ransomware-group-law-enforcement-seizes-servers-and-leak-site";
const KHAL = "https://www.halcyon.ai/threat-group/killsec";

const ARB = "https://arena.ai/blog/series-b";
const ABBG = "https://www.bloomberg.com/news/articles/2026-10-08/ai-model-evaluator-arena-valued-at-over-3-billion-in-round";
const ATC = "https://techcrunch.com/2026/10/08/popular-ai-leaderboard-arena-nearly-doubles-valuation-to-3-1b-valuation-in-10-months/";
const AJUN = "https://arena.ai/blog/arena-100m-revenue";
const ASA = "https://arena.ai/blog/series-a";
const ALBI = "https://arxiv.org/abs/2504.20879";

const MPR = "https://ag.ny.gov/press-release/2026/attorney-general-james-bans-former-cryptocurrency-ceo-who-defrauded-investors";
const MSTIP = "https://ag.ny.gov/sites/default/files/settlements-agreements/new-york-v-alex-mashinsky-stipulation-2026.pdf";
const MBLK = "https://www.theblock.co/news/regulation/2026-10-09-ny-attorney-general-alex-mashinsky-celsius-35-million-ban-418154";
const MCFTC = "https://www.cftc.gov/PressRoom/PressReleases/9256-26";

const NBRIEF = "https://www.supremecourt.gov/DocketPDF/26/26-299/428826/20261008053543625_NFL%20Amicus%20Brief.pdf";
const NDOCK = "https://www.supremecourt.gov/docket/docketfiles/html/public/26-299.html";
const NBLK1 = "https://www.theblock.co/news/regulation/2026-10-08-nfl-amicus-brief-supreme-court-kalshi-new-jersey-prediction-markets-418064";
const NBLK2 = "https://www.theblock.co/news/regulation/2026-10-10-kalshi-is-investigating-bets-on-trumps-press-secretary-pick-placed-before-announcement-wsj-418222";
const NREA = "https://reason.com/2026/10/08/the-nfl-chooses-states-not-the-cftc-in-fight-over-prediction-market-regulation/";

export default [

/* ---------- 11:00Z CYBERSECURITY ---------- */
CY({ slug: "a-16-year-old-and-110-terabytes", kick: "Ransomware",
  headline: "A 16-year-old and 110 terabytes",
  dek: "Spanish police arrested a 16-year-old suspected of running the KillSec ransomware group as investigators took its leak site, five servers and at least 110TB of stolen data. Three suspects were arrested and a fourth, the alleged developer, has been identified.",
  metaDesc: "Spanish police arrested a 16-year-old suspected of running KillSec as an international operation seized the ransomware group's leak site, five servers and 110TB of data.",
  author: "sam-porter", date: "2026-10-11T11:00:00Z",
  capt: "Rows of server cabinets under overhead cable trays in a white-floored server room, in a file photograph.",
  tags: [
    { name: "Ransomware", slug: "ransomware" },
    { name: "Enforcement", slug: "enforcement" },
    { name: "Threat Intelligence", slug: "threat-intelligence" }
  ],
  related: [
    R("/cybersecurity/a-softbank-cloud-tells-customers-to-rebuild/", "Ransomware"),
    R("/cybersecurity/berlin-refuses-and-the-files-appear/", "Ransomware"),
    R("/cybersecurity/the-new-admin-is-called-support-fortinet/", "Cybersecurity")
  ],
  body: [
    `Spanish police have arrested a 16-year-old suspected of leading KillSec, a ransomware group, as part of an international operation that also took the group's leak site and servers, ${L(KREC, "The Record reported")} on Thursday 1 October. The action was carried out on Wednesday 30 September, ${L(KBC, "BleepingComputer reported")}, and the seized leak site now names Hamburg's State Criminal Police Office as the agency in control of it. Europol and Eurojust took part, alongside the security companies Bitdefender and Group-IB.`,
    `Europol said in ${L(KEUR, "its announcement")} that three suspects were arrested and eight searches carried out across four European countries, against a group linked to about 1,000 attacks worldwide. Quoting the release, BleepingComputer said: "Investigators identified a 16-year-old as the group's suspected main operator." It said the searches took place in Greece, Romania, Spain and the UK, and that at least 110 terabytes of stolen data were secured. Authorities in ten countries, including the US, Germany and the Netherlands, were involved, it reported.`,
    `The teenager was detained in Alicante and is a Romanian national, according to Reuters as cited by The Record. He has not been named. Hamburg police said investigators in several countries began looking at the group in early 2025 after a series of attacks, and have identified at least four suspected members, The Record reported. One, a suspected developer, turned 18 in August and was a minor when some of the alleged offences were committed, according to both outlets. BleepingComputer said the others are believed to include a negotiator and an affiliate.`,
    `The Record also reported that UK police arrested Fouad Eltibrizi, a Dutch national who allegedly uses the name "Archduke". He was indicted by a federal grand jury in the District of Puerto Rico on 16 September on a charge of "unauthorized computer access conspiracy", and is awaiting extradition to the US, The Record reported, citing the Justice Department. An indictment is an allegation. Neither report says whether his arrest is one of the three counted by Europol.`,
    `The seizures are the more concrete part of the operation. Investigators shut down five servers, including KillSec's main server, BleepingComputer reported. The dark-web leak site now carries a banner saying its domain, servers and data "have been taken into control by State Criminal Police Office of Hamburg" and international partners. Europol said KillSec received "substantial" ransom payments; neither outlet reports a figure for those payments or for any funds recovered. Investigators are examining seized devices and tracing alleged proceeds, including cryptocurrency.`,
    `The scale figures are provisional. Of the roughly 1,000 suspected attacks, around 500 are believed to have been successful, BleepingComputer reported, adding that the number could change; The Record put it as "at least half". At least 70 of the attacks are linked to German organisations, including 18 in Hamburg, which by our arithmetic is about 7 per cent of the total. KillSec has been active since about 2024, according to both outlets. It allegedly exploited software flaws and poorly secured edge devices before extorting victims through its leak site, BleepingComputer reported.`,
    `How much a single arrest dents the brand depends on how the business was built. The security company ${L(KHAL, "Halcyon says")} KillSec's ransomware-as-a-service offer ranked "among the most affordable", with a $250 entry fee, and that its Tor-accessible control panel provided statistics, chat and builder tools that lower technical barriers for less skilled attackers. That design puts a few people at the centre, among them the administrator and developer, while the attacks themselves were run by affiliates. Members also used artificial intelligence to help build the infrastructure and find victims, BleepingComputer reported; that finding is the authorities' and was not independently verified.`,
    `The reports leave several questions open: whether the teenager has been charged, whether affiliates have moved to other groups, and how much of the 110TB had already been published. For victims, the practical change is that the stolen data on the seized servers is now in police hands. Leak sites remain the pressure point in these cases, as Berlin found when Rhysida <a href="/cybersecurity/berlin-refuses-and-the-files-appear/">published files after the city refused to pay</a>, and as IDC Frontier's customers are learning after <a href="/cybersecurity/a-softbank-cloud-tells-customers-to-rebuild/">an attack on its cloud</a>, as we reported on Saturday.`
  ]
}),

/* ---------- 11:20Z STARTUPS ---------- */
ST({ slug: "arena-valued-at-3-1bn-wants-to-grade-ai-safety", kick: "Venture Funding",
  headline: "Arena, valued at $3.1bn, wants to grade AI safety",
  dek: "Arena, which runs a crowdsourced AI model leaderboard, raised $200m at a $3.1bn valuation on Thursday and previewed an alignment index for AI agents. It says annualised revenue exceeds $100m, and it sells evaluation services to model developers it also ranks.",
  metaDesc: "Arena, the operator of an AI model leaderboard, raised $200m at a $3.1bn valuation and previewed an index measuring how AI agents behave, the company said.",
  author: "grace-lindqvist", date: "2026-10-11T11:20:00Z",
  capt: "A laptop screen showing lines of code in a dark editor, in a file photograph.",
  tags: [
    { name: "Venture Capital", slug: "venture-capital" },
    { name: "Evaluation", slug: "evaluation" },
    { name: "AI Governance", slug: "ai-governance" }
  ],
  related: [
    R("/startups/eight-hundred-seventy-million-for-a-model-that-writes-nothing/", "Startups"),
    R("/ai/a-finra-for-the-frontier/", "AI Safety"),
    R("/policy/seventy-two-days-to-find-a-false-tip/", "AI Safety")
  ],
  body: [
    `Arena, the company behind the crowdsourced AI model leaderboard formerly known as LMArena, has raised $200m in a Series B round at a $3.1bn valuation and plans to rate models on safety as well as performance, ${L(ARB, "the company said")} on Thursday. ${L(ABBG, "Bloomberg reported")} the same day that the round values the business, which began as a University of California, Berkeley research project, at over $3bn. Arena's chief executive and co-founder is Anastasios Angelopoulos, ${L(AJUN, "according to the company")}.`,
    `According to Arena's announcement, the round was co-led by Lightspeed Venture Partners and Khosla Ventures, with participation from Salesforce Ventures, 01 Advisors, Dell Technologies Capital, Acrew Capital and Endeavor Catalyst. Existing investors named include a16z and Felicis. ${L(ATC, "TechCrunch's report")} lists the same lead investors but does not name Acrew. The announcement does not say whether $3.1bn is a pre-money or post-money figure; TechCrunch described the January valuation of $1.7bn as post-money.`,
    `Arena ${L(ASA, "announced a $150m Series A")} on 6 January, led by Felicis and UC Investments. By our arithmetic, $3.1bn against $1.7bn is a rise of about 82 per cent in nine months, and the two rounds together come to $350m. On revenue, Arena said it has "exceeded $100M in annualized revenue"; in June it said it had passed a $100m run-rate within eight months of launching its enterprise offering. TechCrunch reported that the figure was $30m at the time of the Series A. By our arithmetic the new valuation is about 31 times the $100m run-rate. The numbers are the company's own, and an annualised run-rate is not recognised revenue.`,
    `The business model sits behind the safety pitch. The platform is free for consumers, who enter prompts and vote on which model answers better, TechCrunch reported. Arena's commercial product, AI Evaluations, launched in September 2025 and gives model labs and enterprises analytics drawn from that community feedback, it said. Model developers are therefore customers of the paid service as well as the subjects of the public rankings. For its agent leaderboard, Arena says it uses a "causal inference methodology" that observes the full human-agent workflow.`,
    `The new Alignment Index is the safety product. Arena says it starts with three signals that can be checked against an agent's actual trace: Unauthorized Action, where a model acts beyond what the user asked; False Attribution, where it attributes to the user a statement, intention or fact contradicted by the user's own evidence; and Deceptive Completion, where it tells a user a task is complete when it is not. The company says the index compares 27 models across 90,000 real-world agent sessions. It calls the release a preview that "starts narrow", and says the signals are "inspired by the same definitions that labs like OpenAI and Anthropic have published in their system cards".`,
    `Arena framed the move as a gap in the market. "The world needs a neutral third party to measure how safe and aligned AI actually is once it's in the hands of real people," the company said in its announcement. OpenAI models hold the top places on the preliminary alignment leaderboard, TechCrunch reported, with Anthropic's Claude Opus 5.5 in sixth place and Claude Fable in ninth. Neither the announcement nor TechCrunch's report carries a comment from a named executive or investor. We have not independently reviewed Arena's methodology or scores.`,
    `Arena's own usage figures do not line up across its posts. The June announcement cited more than 82m votes and more than 700m conversations; the Series B post cites 62m votes and 350m sessions across the platform. By our subtraction, the vote count is 20m lower in the later post. The two posts may count different things, and the later one describes its votes as spanning text, vision, code, search, video and image, but neither explains the difference.`,
    `Arena's neutrality has been questioned before. A paper titled ${L(ALBI, "The Leaderboard Illusion")}, first posted in April 2025 by Shivalika Singh and colleagues, alleged that undisclosed private testing let a handful of providers test multiple model variants and withhold unwanted scores, and that proprietary models received a disproportionate share of the platform's data. The paper concerns the performance rankings, not the Alignment Index, and we did not review Arena's response to it.`,
    `The question the round raises is who gets paid to judge the models. Arena sells to developers whose models it also ranks, while its safety pitch rests on being a "neutral third party". Its answer is method: community voting, evidence taken from agent traces, and open data, with 375,000 data points released, it said. The index covers three behaviours for now. Who should grade frontier models is an open question elsewhere too: the largest labs are working on <a href="/ai/a-finra-for-the-frontier/">a safety standards body of their own</a>, and Komposite reported on Friday on <a href="/startups/eight-hundred-seventy-million-for-a-model-that-writes-nothing/">TypeSafe AI's $870m raise</a>.`
  ]
}),

/* ---------- 11:40Z CRYPTO ---------- */
CR({ slug: "mashinskys-35m-depends-on-two-conditions", kick: "Enforcement",
  headline: "Mashinsky's $35m depends on two conditions",
  dek: "New York's attorney general announced up to $35m from Celsius's former chief executive and a permanent industry ban. The consent order shows the money falls due only if he fails to pay $10m to federal prosecutors or his prison sentence is cut.",
  metaDesc: "New York's attorney general secured a permanent ban and up to $35m from ex-Celsius chief Alex Mashinsky, with both payments conditional under the consent order.",
  author: "marcus-oyelaran", date: "2026-10-11T11:40:00Z",
  capt: "A domed clock tower on a civic building under a grey sky, beside a Court St street sign, in a file photograph.",
  tags: [
    { name: "Enforcement", slug: "enforcement" },
    { name: "Fraud", slug: "fraud" },
    { name: "Digital Assets", slug: "digital-assets" }
  ],
  related: [
    R("/crypto/the-offer-of-leverage-is-the-switch/", "Regulation"),
    R("/crypto/doj-restrains-fifty-two-million-with-an-issuer/", "Enforcement"),
    R("/crypto/sixty-one-million-of-the-one-and-a-half-billion/", "Enforcement")
  ],
  body: [
    `New York Attorney General Letitia James on Friday announced a settlement with Alex Mashinsky, the founder and former chief executive of the crypto lender Celsius Network, that permanently bars him from the securities, commodities and cryptocurrency industries and carries monetary terms of up to $35m, ${L(MPR, "her office said in a press release")}. Mashinsky is serving a 12-year federal prison sentence for fraud. The state's civil case against him ran in parallel with the criminal one.`,
    `The terms are set out in a ${L(MSTIP, "stipulation and consent order")} dated and filed on Thursday 8 October in New York County Supreme Court (Index No. 450040/2023). The attorney general sued on 5 January 2023. In the stipulation Mashinsky admits violating the Martin Act and Executive Law section 63(12) through false and misleading statements to investors about Celsius's approval by regulators, and through misstatements and omissions about his own sales of the CEL token. The stipulation records that he pleaded guilty to the two criminal counts covering the same conduct.`,
    `The "up to $35m" has two parts, and each is conditional. Under the order, Mashinsky owes New York $25m in damages, but that is "deemed satisfied" if he pays $10m to the Department of Justice under the forfeiture order in his criminal case, with dollar-for-dollar credit for payments made to the DOJ after 20 May 2025. If he does not, the full $25m falls due to the state. A separate $10m monetary judgment is deemed satisfied once he completes his prison sentence. By our arithmetic, $25m plus $10m gives the $35m headline. By our reading, if he meets both conditions the state receives nothing under the order.`,
    `The sentence condition is wider than the press release suggests. The release says he must pay $10m if he does not serve his full sentence. The order says the judgment is satisfied by completing the sentence "unless" it is overturned or reduced by a court, including through his pending petition under 28 U.S.C. section 2255, or reduced by compassionate release, good-time or earned-time credits, First Step Act early release or Bureau of Prisons home confinement. Neither the order nor the release says how much of the $10m forfeiture payment Mashinsky has already made.`,
    `The ban is broad. Apart from his own personal purchases and sales, the order bars him from issuing, selling, promoting or advising on securities or commodities, "including cryptocurrency and digital assets". It also bars him from working in the industry as a broker, dealer, issuer, adviser, officer, director or consultant, from publishing or streaming trading advice, and from setting up or working for any entity that solicits investors. He must cooperate with the attorney general's office, and he may not publicly deny the order's findings, although he keeps the right to take legal positions in proceedings the office is not part of, including the section 2255 petition.`,
    `"I will not allow scammers to use cryptocurrencies to prey on unsuspecting New Yorkers," Attorney General James said in the release. The office says Mashinsky defrauded hundreds of thousands of investors, including more than 26,000 in New York. Those are the office's characterisations. The admissions in the stipulation are narrower, covering the regulatory-approval statements and the CEL sales. Neither the release nor ${L(MBLK, "The Block's report")} carries a statement from Mashinsky.`,
    `The criminal case sets the floor for the civil one. According to the stipulation, Mashinsky pleaded guilty in December 2024 to commodities fraud and to a scheme to manipulate the price of CEL, and on 8 May 2025 was sentenced to 144 months in prison, with criminal forfeiture of $48,393,446. The attorney general's office said that more than $3.4bn had been distributed to creditors in Celsius's bankruptcy as of August 2026, and that Celsius's founders and executives paid $16.5m to the Federal Trade Commission.`,
    `Other regulators have already acted. The Block reported that the FTC reached a settlement with Mashinsky in April that included a suspended $4.7bn judgment, a $10m payment, an 18-year reporting requirement and a bar on the crypto and financial services industries. On 18 June ${L(MCFTC, "the CFTC resolved its action against him")} with a consent order that permanently enjoins him from further violations of certain anti-fraud provisions and imposes permanent trading and registration bans. The New York order adds a state-level bar covering the securities and commodities industries.`,
    `The order also gives the state a way to enforce its terms. It says the facts alleged in the complaint are to be taken as true in any later proceeding by the attorney general, including a nondischargeability complaint in a bankruptcy case under section 523(a)(2)(A) of the Bankruptcy Code, and gives the order collateral estoppel effect for those purposes. The headline sum depends on the outcome of the federal case; the ban and the admissions do not. Federal rule-writing for retail crypto lending and leverage is at an earlier stage, as Komposite reported in <a href="/crypto/the-offer-of-leverage-is-the-switch/">its coverage of the CFTC's leverage notice</a>.`
  ]
}),

/* ---------- 12:00Z POLICY ---------- */
PO({ slug: "the-nfl-says-a-contract-on-a-game-is-a-bet", kick: "Prediction Markets",
  headline: "The NFL says a contract on a game is a bet",
  dek: "The league filed at the Supreme Court on Thursday, backing New Jersey's petition against Kalshi. It argues sports event contracts are not Dodd-Frank \"swaps\", so state gambling law can reach them. Kalshi's response is not due until 9 November.",
  metaDesc: "The NFL asked the Supreme Court on Thursday to hear New Jersey's case against Kalshi, arguing sports event contracts are not swaps under federal law.",
  author: "jonathan-bright", date: "2026-10-11T12:00:00Z",
  capt: "The painted 50-yard-line marker on the turf of an American football field, in a file photograph.",
  tags: [
    { name: "Regulation", slug: "regulation" },
    { name: "Market Structure", slug: "market-structure" },
    { name: "Trading", slug: "trading" }
  ],
  related: [
    R("/crypto/the-offer-of-leverage-is-the-switch/", "Regulation"),
    R("/crypto/prediction-markets-institutional-hedging/", "Prediction Markets"),
    R("/crypto/nine-of-ten-new-clearing-houses-never-lend/", "CFTC")
  ],
  body: [
    `The National Football League on Thursday asked the US Supreme Court to hear New Jersey's challenge to a ruling that placed Kalshi's sports contracts under exclusive federal oversight, arguing that such contracts are not "swaps" under the Dodd-Frank Act and can be regulated by the states, according to ${L(NBRIEF, "its amicus brief")} in Flaherty v. KalshiEX, LLC, No. 26-299. ${L(NBLK1, "The Block reported")} the filing the same day. The brief backs the petitioners at the certiorari stage, and the Court has not agreed to take the case.`,
    `The petition was filed on 2 September by Mary Jo Flaherty, interim director of the New Jersey Division of Gaming Enforcement, and Jennifer Davenport, ${L(NDOCK, "according to the Court's docket")}. It seeks review of a Third Circuit decision dated 6 April. The NFL's brief says that court held Kalshi's sports-related event contracts fall within the Commodity Futures Trading Commission's exclusive jurisdiction over swaps traded on a designated contract market, so that state laws are pre-empted. It says the Sixth Circuit, on 25 September, and the Ninth Circuit, on 28 August, "squarely disagreed".`,
    `The league's argument is textual. It says Dodd-Frank's definition of a swap reaches only instruments created and used for hedging pre-existing risk, "not wagers that create risk primarily for gambling purposes". It adds that a broad reading of the term raises Commerce Clause and major-questions problems. The brief's counsel include the NFL's Theodore Ullyot and Douglas Paoletti and, at Torridon Law, William P. Barr and Cody Reaves.`,
    `The league's position is more conditional than the headline version. The brief says that "given the current landscape", the NFL believes the Sixth and Ninth Circuits got it right. It also says that if the Court sided with the Third Circuit, the NFL could redouble its efforts to persuade the CFTC, the exchanges and Congress to adopt stronger integrity and consumer-protection measures before the 2027 season. Its stated objection is as much to the regulator's current approach as to its jurisdiction.`,
    `On that point the brief is pointed. It describes the approach of the CFTC and the exchanges as "laissez-faire". It says they have declined to adopt the league's list of prohibited wagers, and that state authorities generally set a minimum betting age of 21, so that in almost every state an 18-year-old could not bet on a game through Caesars Sportsbook but could through Kalshi. It also says the CFTC has 543 employees covering the whole country, citing an agency memorandum, against close to 400 each at the Nevada and Pennsylvania gaming regulators. By our arithmetic, those two states have roughly 800 between them.`,
    `The brief also puts a number on the market. It says that on the first Sunday of this season $1.8bn of $3.3bn in prediction-market trading volume related to the NFL, which is by our arithmetic about 55 per cent. The Block rounded the league's figure to "nearly $2 billion"; the brief itself says $1.8bn. The figures are the league's own and were not independently verified.`,
    `Kalshi rejected the league's position, according to The Block, saying it prioritises market integrity, that the CFTC already polices sports-related markets and that federal oversight is more consistent than a state-by-state approach. "It is extremely telling that the sports league which has most forcefully advocated for federal regulation is essentially saying 'this ain't it,'" the gaming attorney Daniel Wallach said on X, The Block reported, adding: "An important amicus brief that meaningfully increases the chances of a cert grant." The Block also noted that MLB and the NHL have agreements with prediction markets, which puts the NFL at odds with them.`,
    `${L(NREA, "Reason noted")} that the NFL has official partnerships with the sportsbooks DraftKings, FanDuel and Fanatics, and argued that this gives the league a financial interest in state control. The brief does not name those companies. Kalshi's response is due on 9 November, after an extension from 8 October that the Court granted on 22 September. The docket, whose latest entry is dated Friday, lists 11 amicus filings by our count, including from Ohio and other states, former CFTC chairman Gary Gensler, former senator Christopher Dodd, the American Gaming Association and 145 tribes and tribal organisations. It lists no conference date.`,
    `The question matters because it decides who supervises markets whose integrity is already being tested. The Wall Street Journal reported on Friday, ${L(NBLK2, "as The Block relayed on Saturday")}, that Kalshi was investigating three bets that correctly predicted the choice of Katie Zacharia as White House press secretary before it was announced. The bets totalled about $173 and stood to pay about $9,600, and a Kalshi spokesperson confirmed the inquiry to the Journal and declined to comment further. That case involves a political market rather than a sporting one. The NFL's brief argues that the present arrangement gives "unscrupulous actors" more room to "trade on inside information".`,
    `The CFTC is meanwhile writing its own rules for retail crypto trading, as Komposite reported in <a href="/crypto/the-offer-of-leverage-is-the-switch/">its coverage of the agency's 5 October notice</a>, and event-contract venues have been <a href="/crypto/prediction-markets-institutional-hedging/">pitching themselves to institutional hedgers</a>. Whether sports contracts belong in that federal system or in state gambling law is the question the Court is being asked to take up. Kalshi's response, due on 9 November, is the next scheduled filing.`
  ]
}),

];
