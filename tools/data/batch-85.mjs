import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const AIC = P("ai", "AI", "ai", "Photograph via Wikimedia Commons");
const POC = P("policy", "Policy", "policy", "Photograph via Wikimedia Commons");
const CY = P("cybersecurity", "Cybersecurity", "cybersecurity", "Photograph via Unsplash");
const FT = P("fintech", "Fintech", "fintech", "Photograph via Unsplash");

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

/** Batch 85 — Friday 16 October 2026, round 13. One new main story and
 *  three others. Lead: China's draft export-catalogue additions (AI, 16:20Z,
 *  the newest, so the front-zone builder makes it the lead and the round-12
 *  Citizen Lab lead moves down). Others, newest first: eight state AG suits
 *  against OpenAI (Policy 16:10Z), Microsoft's October release (Cybersecurity
 *  16:00Z) and Mastercard/BVNK Global Money Platform (Fintech 15:50Z).
 *  Repeat check: repo grep for MOFCOM, Announcement No. 48, export catalogue,
 *  Brenna Bird, attorneys general + OpenAI, Patch Tuesday, 1,411/1,413,
 *  Global Money Platform: no earlier story on any of these events (BVNK
 *  appears once as a mint/redeem route; a September piece covers a 26-AG
 *  letter to Congress, not these suits).
 *
 *  AI / CHINA (lead). Checked 16 Oct against the raw Chinese text of
 *  MOFCOM-MOST Announcement No. 48 of 2026 (dated 16 Oct), the spokesperson
 *  Q&A, and ANNEX 1 itself (the .wps draft catalogue, downloaded from the
 *  notice page and converted to text). Confirmed in the notice: 40 items,
 *  23 AI / 5 biomedicine / 12 PV; comments 16 Oct-15 Nov; pre-export
 *  registration from the announcement date until the revised catalogue takes
 *  effect, including exports begun but not finished; the four registration
 *  situations; the registration fields; public-domain (open-source, papers)
 *  AI tech excluded. Q&A: 14 prohibited / 26 restricted; "not aimed at any
 *  specific country, region or entity" (paraphrased, translated); API,
 *  app/web, SaaS and lightweight on-device deployment not covered; overseas
 *  localised deployment covered, own overseas cloud may get automatic
 *  licensing; automatic licensing also for open-sourcing, own overseas
 *  compute centres, overseas tape-out, joint R&D and standards work, "即报即出".
 *  Annex 1 (266504X, restricted): model core tech (weights, key checkpoints,
 *  source code, architecture, training optimisation, inference acceleration)
 *  for models with ANY of: compute >= 10^26 FLOP, >= 2 trillion parameters
 *  (20,000亿), or "globally leading" capability = top 10 in public global
 *  rankings by mainstream evaluators/platforms at time of export. 266501J
 *  (prohibited): models trained on "core data" that provide services.
 *  266506X chip design: any of 14nm-or-below process, 2.5D/3D packaging,
 *  high-speed interconnect, compute-in-memory or brain-inspired
 *  architectures, among others; memory designs (3D NAND, DRAM 18nm or
 *  below). 266507X clusters: "large-scale intelligent computing cluster"
 *  defined as more than 10,000 AI accelerator cards. Prohibited 266402J:
 *  AI-driven malicious-code generation; restricted: AI-assisted
 *  vulnerability discovery with thresholds.
 *  CUT: Kimi K3 / Qwen3.8-Max (named only by TNW citing Bloomberg/AP; the
 *  draft names no models); the Substack newsletter as a source; "aimed at
 *  operators of more than 10,000 cards" (the annex uses 10,000 as the
 *  definition of a large cluster for cluster technologies); the AI-share
 *  arithmetic; the closing line calling the revision routine.
 *  Background: Implicator (21 Jul) relaying the FT and Reuters, read raw.
 *
 *  POLICY / STATE AGs v OPENAI. Primary documents read: Iowa AG release and
 *  PETITION (Iowa District Court for Polk County; prayer for relief: up to
 *  $40,000 per CFA violation, +$5,000 per violation against an older person,
 *  deletion of Iowans' data, reimbursement, disgorgement, injunction on
 *  further testing of advanced AI models until safeguards verified by
 *  third-party monitors); Idaho AG release and COMPLAINT (Fourth Judicial
 *  District, Ada County; $5,000 per violation; injunction on deploying or
 *  testing advanced models outside a secured, independently verified
 *  environment; disclosure of escape incidents); Arizona AG release
 *  (Maricopa County Superior Court; Consumer Fraud Act); Arkansas AG release
 *  (relief list incl. recursive self-improvement injunction; lists Utah
 *  among filers) and the filed complaint's clerk stamp (Faulkner County
 *  Circuit Court, 23CV-26-2984, 14 Oct 10:36); West Virginia AG release
 *  (McCuskey quote). KCTV5 (14 Oct) for Kansas relief. OpenAI statement
 *  (Pusateri) verbatim on KSFY/Dakota News Now and Al Jazeera. No Utah
 *  filing found (WebSearch); stated as Arkansas's claim only.
 *  CHANGED: courts named where confirmed; relief reconciled to documents
 *  (Al Jazeera's all-state "self-improving" bar is Arkansas's wording; Iowa
 *  and Idaho seek testing limits in other terms); Bird and McCuskey quotes
 *  checked in their releases; Griffin quote added from his release.
 *  CUT: "prepares for a public listing"; Tumbler Ridge detail; link to the
 *  researcher-dismissal story (not related).
 *
 *  CYBERSECURITY / OCTOBER RELEASE. Microsoft's Security Update Guide
 *  release note (MSRC API, read 16 Oct): "This release consists of the
 *  following 1453 Microsoft CVEs"; Windows 1,105, Office 164, SharePoint 37,
 *  SQL Server 22, Exchange 7, Dev tools 64, Azure 15; notable: 96951
 *  exploitation detected, 108398 publicly disclosed; one republished
 *  non-Microsoft CVE. Sep note: 999; Aug note: 457. CVRF 2026-Oct (document
 *  revised 16 Oct 07:00Z): Microsoft-CNA CVEs with first revision on 14, 15
 *  and 16 Oct, so the release has grown since Tuesday. 96951 CVSS 8.8,
 *  Important, credited to four reporters; 108398 CVSS 8.8, James Forshaw
 *  (Google Project Zero); 92707 CVSS 5.3 Moderate, publicly disclosed.
 *  BleepingComputer (raw): 1,411; counts only CVEs released on Patch
 *  Tuesday itself; excludes 348 earlier fixes; "record-breaking ... as
 *  Microsoft continues to use artificial intelligence platforms..." (its own
 *  explanation, attributed); 70 Critical; risk cohorts; end of updates.
 *  CrowdStrike (raw): 1,413, 75 Critical; type split; 972 Sep / 415 Aug
 *  (its own post titles); Preview Pane 23; 15 unauthenticated network RCE;
 *  six server-side cloud fixes, top CVSS 10.0.
 *  CHANGED: lead figure now Microsoft's own; 1,411 v 1,413 explained as
 *  different counting windows (BleepingComputer's stated method; CrowdStrike
 *  states none) against a Microsoft total that has grown since Tuesday;
 *  month comparisons now on Microsoft's notes, CrowdStrike's own figures
 *  attributed; AI explanation attributed to BleepingComputer; product counts
 *  from Microsoft not CrowdStrike's overlapping families.
 *
 *  FINTECH / MASTERCARD-BVNK. Release read raw on bvnk.com/press (Purchase,
 *  NY and London, 15 Oct); Mastercard investor page via fetch tool (403
 *  raw). Second source: PYMNTS (15 Oct 10:00Z, from the emailed release):
 *  launch, first major integration since the August acquisition, available
 *  through BVNK, March announcement, Harmse and Dhamodharan quotes verbatim.
 *  CHANGED: early integrators limited to the four names common to all
 *  versions (Nuvei, Marqeta, Ontop, Almond FinTech; the versions differ on
 *  Beem and Bolt Group); Fayer quoted verbatim.
 *  CUT: Corpay/Worldpay/Deel customer list (not in the release text read);
 *  $1.8bn deal value (not confirmed).
 */

const MOF = "https://www.mofcom.gov.cn/zwgk/zcfb/art/2026/art_0a31a3c9ac404f7a9b0e917ce3412997.html";
const QA = "https://www.mofcom.gov.cn/xwfb/xwfyrth/art/2026/art_d7661dbf62794345a221404f82a25959.html";
const IMPL = "https://www.implicator.ai/china-considers-adding-ai-model-weights-and-chip-designs-to-export-list/";
const TNW = "https://thenextweb.com/news/china-ai-export-controls-draft";

const IA = "https://www.iowaattorneygeneral.gov/newsroom/attorney-general-brenna-bird-announces-lawsuit-against-openai-for-deceiving-iowa-parents-and-iowans/";
const IAPET = "https://www.iowaattorneygeneral.gov/media/cms/261014_Petition_EC459B522F957.pdf";
const ID = "https://www.ag.idaho.gov/newsroom/ag-labrador-announces-lawsuit-against-openai-for-deceiving-idaho-parents-about-the-safety-of-chatgpt/";
const IDC = "https://www.ag.idaho.gov/content/uploads/2026/10/OpenAI-2026-10-14-Complaint.pdf";
const AZ = "https://www.azag.gov/press-release/attorney-general-mayes-announces-lawsuit-against-openai-deceiving-arizonans-about";
const AR = "https://arkansasag.gov/news-release/attorney-general-griffin-sues-openai-for-misleading-arkansans-over-safety-of-chatgpt/";
const WV = "https://ago.wv.gov/article/attorney-general-mccuskey-announces-lawsuit-against-openai-deceiving-west-virginians-about";
const KC = "https://www.kctv5.com/2026/10/14/kansas-ag-kris-kobach-announces-lawsuit-against-openai/";
const AJ = "https://www.aljazeera.com/news/2026/10/15/why-are-eight-us-states-suing-openai";
const WRAP = "https://www.thewrap.com/industry-news/tech/openai-sued-states-chatgpt-safety-concerns/";

const SUG = "https://msrc.microsoft.com/update-guide/releaseNote/2026-Oct";
const BC = "https://www.bleepingcomputer.com/news/microsoft/microsoft-october-2026-patch-tuesday-fixes-1-411-flaws-3-zero-days/";
const CS = "https://www.crowdstrike.com/en-us/blog/patch-tuesday-analysis-october-2026/";

const MA = "https://investor.mastercard.com/investor-news/investor-news-details/2026/Mastercard-and-BVNK-Launch-Global-Money-Platform-to-Power-a-Multi-Money-World/default.aspx";
const PYM = "https://www.pymnts.com/partnerships/2026/mastercard-and-bvnk-unite-fiat-and-stablecoins-in-global-money-platform/";

export default [

/* ---------- 15:50Z FINTECH ---------- */
FT({ slug: "one-api-for-fiat-and-stablecoins", kick: "Stablecoins",
  headline: "Mastercard's first BVNK product holds both kinds of money",
  dek: "Mastercard and BVNK have launched the Global Money Platform, a single integration for accounts that hold fiat currency and stablecoins side by side. It is the first major product since Mastercard completed its BVNK purchase in August.",
  metaDesc: "Mastercard and BVNK launched the Global Money Platform on Thursday, offering accounts that hold fiat and stablecoins through one API, available now through BVNK.",
  author: "elena-vasquez", date: "2026-10-16T15:50:00Z",
  capt: "A handheld card payment terminal with a receipt, in a file photograph.",
  tags: [
    { name: "Stablecoins", slug: "stablecoins" },
    { name: "Payments", slug: "payments" },
    { name: "Embedded Finance", slug: "embedded-finance" }
  ],
  related: [
    R("/crypto/ninety-one-per-cent-on-the-chain-stripe-built/", "Stablecoins"),
    R("/fintech/the-payments-layer-buys-its-plumbing/", "Payments"),
    R("/fintech/stablecoin-transfer-button-82-million-galaxy-devices/", "Stablecoins")
  ],
  body: [
    `Mastercard and BVNK on Thursday launched the Mastercard Global Money Platform, which they describe in ${L(MA, "a joint release")} as bringing together Mastercard's global payments capabilities and BVNK's stablecoin infrastructure through a single integration. The companies call it the first major integration of the two since Mastercard's acquisition of BVNK in August. The platform is available now through BVNK, according to the release, which ${L(PYM, "PYMNTS also reported")}. PYMNTS noted that Mastercard had announced the planned acquisition in March.`,
    `The central product is what the companies call a global money account: a multi-currency account in which fiat currencies and stablecoins sit side by side, with conversion between the two through a single API. Banks, fintechs and enterprises can embed these accounts in their own products under their own brands, along with real-time conversion, stablecoin-linked cards and local bank payouts, or use the platform for their own treasury, payments and settlement. The release mentions configurable rewards on accounts but gives no terms.`,
    `Payouts run through Mastercard Move, which the release says lets users spend stablecoin balances to make local-currency payments directly into a recipient's bank account. Mastercard says Move reaches more than 17 billion endpoints and that coverage is expected to expand to more than 40 currencies across more than 200 countries and territories in 2027. Stablecoin balances can also be spent across Mastercard's acceptance network, which the company puts at hundreds of millions of merchant locations, and card issuing is available in more than 130 countries.`,
    `Nuvei and Marqeta will be among the first to integrate the platform, the companies said, alongside others including Ontop and Almond FinTech. "Stablecoins are becoming an increasingly important part of that future, and our work with Mastercard and BVNK will help us bring these capabilities to more businesses," said Phil Fayer, Nuvei's chair and chief executive.`,
    `The executives describe the ambition in broad terms. "Global Money Platform will become the single infrastructure layer not just for stablecoins, but for every form of money," said Chris Harmse, BVNK's co-founder and chief business officer. Raj Dhamodharan, Mastercard's executive vice president for blockchain and digital assets, said: "We believe the future of commerce will be built on interoperability across multiple forms of money."`,
    `The release does not give pricing, transaction volumes or customer counts for the new platform. It describes the toolkit as modular, so customers can start with some capabilities and add others as they become available, and lists support for agentic commerce and for other regulated forms of money such as tokenised deposits as future plans rather than live features. The reach figures are the companies' own.`,
    `The launch treats stablecoins as another balance type behind an existing payments interface rather than as a separate rail. Komposite has reported that <a href="/crypto/ninety-one-per-cent-on-the-chain-stripe-built/">BVNK, now owned by Mastercard, is one of the routes</a> for minting and redeeming a dollar token one for one, and on how <a href="/fintech/the-payments-layer-buys-its-plumbing/">the payments layer is buying its plumbing</a>.`
  ]
}),

/* ---------- 16:00Z CYBERSECURITY ---------- */
CY({ slug: "fourteen-hundred-fixes-in-one-month", kick: "Patch Management",
  headline: "Microsoft counts 1,453 fixes for October",
  dek: "Microsoft's October security release covers 1,453 of its own CVEs, by the company's count, including one Windows flaw already exploited. Trackers counted 1,411 and 1,413 on Tuesday. The difference is mostly in what each one counts and when.",
  metaDesc: "Microsoft's October 2026 release covers 1,453 Microsoft CVEs by its own count, up from 999 in September, including an exploited Windows Shell bypass.",
  author: "sam-porter", date: "2026-10-16T16:00:00Z",
  capt: "A Windows Security notification on a laptop screen, in a file photograph.",
  tags: [
    { name: "Cybersecurity", slug: "cybersecurity" },
    { name: "Security Operations", slug: "security-operations" },
    { name: "Threat Intelligence", slug: "threat-intelligence" }
  ],
  related: [
    R("/cybersecurity/patched-by-wednesday-rebooting-by-friday/", "Vulnerabilities"),
    R("/cybersecurity/the-ninth-time-this-year/", "Vulnerabilities"),
    R("/cybersecurity/a-root-flaw-in-the-firewall-management-page/", "Vulnerabilities")
  ],
  body: [
    `Microsoft's October security release, published on Tuesday, covers 1,453 Microsoft CVEs, according to ${L(SUG, "the release note in the company's Security Update Guide")} as it stood on Friday. Windows accounts for 1,105 of them, Office for 164, developer tools for 64, SharePoint Server for 37, SQL Server for 22, Azure for 15 and Exchange Server for seven. One flaw is being exploited.`,
    `The counts published on Tuesday were lower, and they differ from each other. ${L(BC, "BleepingComputer")} counted 1,411, and ${L(CS, "CrowdStrike")} 1,413. BleepingComputer says it counts only vulnerabilities released on Patch Tuesday itself, and that its total excludes 348 flaws fixed earlier in the month in products including Azure services and Exchange Server. CrowdStrike's post does not set out its method, so the two-CVE gap between the trackers is not explained. Microsoft's figure covers the whole monthly release, and its machine-readable data for October, last revised on Friday, includes Microsoft CVEs first published on 14, 15 and 16 October, so the company's own total has grown since Tuesday.`,
    `On Microsoft's own release notes, the month is far larger than the two before it: the September note lists 999 Microsoft CVEs and the August note 457, so October is up about 45 per cent on September and about 3.2 times August, by our arithmetic. CrowdStrike's own counts, 972 for September and 415 for August, show a similar step. BleepingComputer called October "record-breaking" and wrote that this came "as Microsoft continues to use artificial intelligence platforms to find and remediate security vulnerabilities in its products." Microsoft's release note does not give a reason for the volume.`,
    `The exploited flaw is CVE-2026-96951, a Windows Shell security feature bypass that lets an attacker get around Mark of the Web, the label that flags files downloaded from the internet. Microsoft rates it Important with a CVSS score of 8.8 and lists "Exploitation Detected". BleepingComputer said no details had been shared on how attackers used it; Microsoft's entry, as read on Friday, credits four reporters, including two Fujitsu researchers and one listed as using Anthropic's Claude.`,
    `Two more were publicly disclosed before a fix. CVE-2026-108398 is a .NET Framework bypass of Windows Defender Application Control, rated Important at CVSS 8.8 and credited by Microsoft to James Forshaw of Google Project Zero. CVE-2026-92707 is a denial-of-service flaw in the MessagePack-CSharp library, rated Moderate at CVSS 5.3.`,
    `By type, both trackers counted 677 elevation-of-privilege flaws, 317 remote code execution flaws and 254 information-disclosure flaws. BleepingComputer counted 70 Critical flaws, 57 of them remote code execution; CrowdStrike counted 75. CrowdStrike highlighted 23 Office CVEs that it said can be triggered through the Preview Pane, without the user opening a file, and 15 unauthenticated network remote code execution flaws in components including DHCP Server, QUIC, the PostScript printer driver and PDF handling. It also listed six cloud-service issues, the highest rated CVSS 10.0, that Microsoft fixed on its side and that need no customer action.`,
    `Microsoft also grouped the month's flaws into 15 "risk cohorts", a new presentation explained in a Security Update Guide blog post dated 13 October. According to BleepingComputer, the largest cover Windows filesystems, storage and backup (136 flaws) and Office documents and mail clients (135); Microsoft calls the approach "still experimental" and says the groups do not by themselves show which flaws are most dangerous.`,
    `BleepingComputer also reported Microsoft's notice that this is the last update for Windows 11 version 24H2 Home and Pro and for Windows 10 Enterprise LTSB 2016. Komposite has followed a run of exploited edge-device flaws, including <a href="/cybersecurity/patched-by-wednesday-rebooting-by-friday/">Citrix's NetScaler fix</a> and <a href="/cybersecurity/the-ninth-time-this-year/">Cisco's ninth SD-WAN entry of the year</a> on the federal list of exploited flaws.`
  ]
}),

/* ---------- 16:10Z POLICY ---------- */
POC({ slug: "eight-attorneys-general-one-chatbot", kick: "AI Liability",
  headline: "Eight states, eight complaints, one chatbot",
  dek: "Attorneys general in eight US states have sued OpenAI in state courts, alleging ChatGPT harms young users and that the company misled the public about its safety. OpenAI points to its age-specific protections and parental controls. No court has ruled.",
  metaDesc: "Eight US state attorneys general sued OpenAI on Wednesday under state consumer-protection laws over ChatGPT's safety; OpenAI cites its protections for young users.",
  author: "jonathan-bright", date: "2026-10-16T16:10:00Z",
  capt: "The Polk County Courthouse in Des Moines. Iowa's suit was filed in the Iowa District Court for Polk County. File photograph.",
  tags: [
    { name: "AI Governance", slug: "ai-governance" },
    { name: "Enforcement", slug: "enforcement" },
    { name: "Regulation", slug: "regulation" }
  ],
  related: [
    R("/policy/ai-liability-courts-first-cases/", "AI Liability"),
    R("/ai/eighty-four-days-before-anyone-was-told/", "AI Governance"),
    R("/policy/seventy-two-days-to-find-a-false-tip/", "AI Safety")
  ],
  body: [
    `The attorneys general of eight US states sued OpenAI on Wednesday, each in its own case, alleging that ChatGPT harms children and other vulnerable users and that the company misled the public about its safety. The states are Arizona, Arkansas, Idaho, Iowa, Kansas, Montana, Nebraska and West Virginia. Iowa's attorney general, Brenna Bird, announced her suit at a press conference with her counterparts from Kansas, Nebraska and West Virginia, ${L(IA, "her office said")}. Arkansas's ${L(AR, "release")} also lists Utah among states that filed that day; Komposite found no Utah announcement.`,
    `The suits were filed in state courts. Iowa's ${L(IAPET, "petition")} is in the Iowa District Court for Polk County, Idaho's ${L(IDC, "complaint")} in the Fourth Judicial District Court in Ada County, and Arizona's in Maricopa County Superior Court, ${L(AZ, "according to its attorney general")}. The Arkansas complaint carries the stamp of the Faulkner County Circuit Court. Komposite has not confirmed the courts for the Kansas, Montana, Nebraska and West Virginia cases.`,
    `The core allegation is that OpenAI marketed ChatGPT as safe while designing it to be, in the words of the Iowa and West Virginia releases, "overly agreeable" and to "feign human compassion". The states say the chatbot has given dangerous medical advice and coached users towards self-harm or harming others. The legal basis is state consumer-protection law: Iowa's Consumer Fraud Act, the Idaho Consumer Protection Act, the Arizona Consumer Fraud Act and the Kansas Consumer Protection Act, among others. Arkansas adds claims under its children's and teens' online privacy law and common-law claims including negligence, strict liability and public nuisance. These are allegations, and no court has ruled on them.`,
    `"OpenAI is hurting kids and they are lying to Iowans," Bird said in her release. "OpenAI claims ChatGPT is safe while it's giving dangerous medical advice, encouraging people to hurt others, and coaching people to commit suicide—all while pretending to be their fake friend." West Virginia's JB McCuskey said in ${L(WV, "his release")}: "We must do all we can to protect kids." Arkansas's Tim Griffin said: "OpenAI assures us that ChatGPT is safe. The consequences of that assurance are lives lost and people harmed." Nebraska's Mike Hilgers said the suit "simply holds OpenAI to the same standards under Nebraska law as any other company", ${L(AJ, "Al Jazeera reported")}.`,
    `The remedies differ by state, which accounts for differences in how they were first reported. Iowa asks for civil penalties of up to $40,000 per violation, deletion of Iowans' data obtained before judgment, reimbursement and disgorgement, and an order barring further testing of advanced AI models until adequate safeguards are in place and verified by third-party monitors. Idaho asks for $5,000 per violation and an order barring OpenAI from deploying or testing advanced models outside a secured, independently verified environment, with disclosure to the state of any incident in which a model or agent escapes its controls. Arkansas seeks an injunction against further advanced AI testing and against creating models capable of recursive self-improvement until adequate safeguards exist, along with clear disclosures of ChatGPT's risks. Kansas is seeking civil penalties and injunctive relief, ${L(KC, "KCTV5 reported")}.`,
    `OpenAI responded through a spokesperson, Drew Pusateri. "We've built industry-leading age-specific protections into our product that many other AI products lack," he said, according to Al Jazeera and other outlets. "While no system can be perfect, we'll continue to work with experts to inform our work and build additional safeguards, such as the parental controls, break reminders and age-appropriate model protections that exist today. We're committed to working with states on advancing pragmatic AI policies that apply to the entire AI industry, not just one company."`,
    `The suits add to existing litigation. Al Jazeera said Florida filed the first state suit against OpenAI in June and that a parent filed a proposed class action in San Francisco federal court on Tuesday over minors' data. ${L(WRAP, "TheWrap")} reported that California's attorney general, Rob Bonta, said last month his office was looking closely at both OpenAI and Anthropic over safety concerns. Because each state sues under its own statute in its own court, a ruling in one case does not decide the others.`,
    `Idaho's request for disclosure of control failures resembles <a href="/policy/seventy-two-days-to-find-a-false-tip/">the White House's call for AI companies to notify and remedy incidents</a>, which followed Anthropic's disclosure of a false tip its agent sent to police. Komposite has also tracked how <a href="/policy/ai-liability-courts-first-cases/">questions of AI liability are moving into the courts</a>.`
  ]
}),

/* ---------- 16:20Z AI (LEAD) ---------- */
AIC({ slug: "china-registers-its-ai-exports", kick: "Export Controls",
  headline: "Forty technologies, one form, 30 days",
  dek: "China's commerce and science ministries have proposed adding 40 technologies, 23 of them in AI, to the country's export-control catalogue, and require exporters to register deals from Friday. The draft covers models trained with 10²⁶ or more operations or with two trillion or more parameters. Comments close on 15 November.",
  metaDesc: "China proposed adding 40 technologies, 23 in AI, to its export-control catalogue, with model thresholds of 10²⁶ FLOP or 2tn parameters and registration from Friday.",
  author: "dana-whitfield", date: "2026-10-16T16:20:00Z",
  capt: "The MOFCOM lettering on the Ministry of Commerce building, in a file photograph.",
  tags: [
    { name: "AI Governance", slug: "ai-governance" },
    { name: "Trade", slug: "trade" },
    { name: "Semiconductors", slug: "semiconductors" }
  ],
  related: [
    R("/ai/the-agent-maker-meta-had-to-give-back/", "AI"),
    R("/ai/the-guidance-that-assumes-china-buys-nothing/", "AI Chips"),
    R("/ai/the-export-control-that-is-not-in-the-licence/", "Export Controls")
  ],
  body: [
    `China's Ministry of Commerce and Ministry of Science and Technology on Friday proposed adding 40 technologies to the country's catalogue of technologies prohibited or restricted from export, 23 of them in artificial intelligence. In ${L(MOF, "Announcement No. 48 of 2026")}, the ministries also require exporters of the listed technologies to register before exporting, with effect from the date of the announcement. Public comments are open from 16 October to 15 November.`,
    `The 40 items comprise 23 in AI, covering large models, agents, computing clusters and information processing, five in biomedicine and 12 in photovoltaics, according to the announcement. ${L(QA, "A ministry spokesperson's question-and-answer")} says 14 of the 40 would be prohibited and 26 restricted, describes the revision as routine work under the foreign trade law, and says it is not aimed at any particular country, region or entity. The spokesperson said the AI controls are meant to prevent misuse and keep AI under human control.`,
    `The draft catalogue, published as an annex to the notice, sets out the model thresholds. The core technology of a large model, which it defines to include weights, key checkpoints, underlying source code and architecture, as well as training-optimisation and inference-acceleration techniques, would be restricted if the model meets any one of three tests: training compute of at least 10²⁶ floating-point operations, at least two trillion parameters, or "globally leading" capability. The annex defines the last as ranking in the global top 10 in public evaluations by mainstream assessment bodies or large platforms at the time of export. Models that provide services after training on what Chinese law classes as "important data" would also be restricted, and those trained on "core data" prohibited. The draft names no companies or models.`,
    `The annex goes beyond models. Restricted AI chip design know-how, including architectures, instruction sets, IP cores and software stacks, is defined by a list of features, any one of which qualifies, among them a 14-nanometre or finer manufacturing process, 2.5D or 3D advanced packaging and high-speed interconnects. Some 3D flash and DRAM memory designs are also listed. For computing clusters, interconnect, fault-tolerance and scheduling technologies are covered when used in a "large-scale intelligent computing cluster", which the annex defines as one with more than 10,000 AI accelerator cards. Agents are restricted above set performance levels, such as breaking an instruction into 20 or more sub-tasks, and prohibited for high-performance use in critical infrastructure, defence and core government systems. AI-driven generation of malicious code would be prohibited and AI-assisted vulnerability discovery restricted.`,
    `The registration rule is the part that applies now. Until the revised catalogue takes effect, exporters must register on the ministry's online platform before exporting a listed technology, including exports that have started but are not finished. Registration covers transferring ownership of a technology abroad, licensing it for use overseas, and a change of a domestic technology's owner or actual controller to a foreign entity. The form asks for the exporter and recipient, the destination, the technology and its intended use, and the expected export value. The spokesperson said exporters must judge for themselves whether a technology falls within scope.`,
    `The ministries drew the line around transfers of the technology, not use of the products. Technology already in the public domain through open-source release or academic publication is excluded, according to the announcement. The spokesperson said that offering a restricted model through an API, an app or website, software-as-a-service or a lightweight on-device deployment is not a technology export; deploying it locally overseas is, although a company running it on its own overseas cloud may qualify for automatic licensing. Automatic licensing would also apply to open-sourcing AI technology, Chinese companies' own overseas computing centres, chip tape-out abroad and joint research, which the ministry describes as close to "report and export immediately".`,
    `The proposal follows reporting earlier this year. ${L(IMPL, "Implicator, relaying the Financial Times")}, reported in July that the commerce ministry was consulting Alibaba, ByteDance and Zhipu on limits for model weights and chip designs; Reuters said at the time that it could not immediately verify the report. ${L(TNW, "The Next Web")}, citing Bloomberg, reported on Friday that some Chinese models already exceed the parameter threshold; Komposite has not confirmed which.`,
    `For now the change is procedural: a Chinese lab that licenses weights, or sells a chip design to a foreign customer, files first, and the consultation will decide what is prohibited outright and what needs a licence. Komposite has reported on <a href="/ai/the-agent-maker-meta-had-to-give-back/">the Manus deal that China made Meta unwind</a> and on <a href="/ai/the-guidance-that-assumes-china-buys-nothing/">Nvidia's guidance, which assumes no Data Center compute revenue from China</a>. The draft adds Beijing's own rules on what technology can leave China.`
  ]
}),

];
