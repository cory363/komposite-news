import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const FT = P("fintech", "Fintech", "fintech", "Photograph via Wikimedia Commons");
const CY = P("cybersecurity", "Cybersecurity", "cybersecurity", "Photograph via Unsplash");
const ST = P("startups", "Startups", "startups", "Photograph via Unsplash");

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

/** Batch 81 — Wednesday 14 October 2026, round 9. Three more stories, none
 *  a lead. Timed 12:25Z, 12:20Z and 12:15Z: older than all four batch-80
 *  stories (13:15Z lead, 13:00Z and 12:45Z cluster, 12:30Z big Latest card),
 *  so the front-zone builder leaves those slots as they are, and filed
 *  outside Markets so none of them is pulled into the lead's same-section
 *  cluster. Repeat check: repo grep for "Bank of America", FinCEN, Ivanti,
 *  Volexity, Modal, Bernhardsson: no earlier story on any of these events.
 *
 *  FINTECH / OCC-FINCEN-OFAC BANK OF AMERICA (12:25Z). Checked 14 Oct against
 *  the raw text of OCC NR 2026-89 (13 Oct): $750m CMP, "largest in OCC
 *  history", 12 CFR 21.21 and 21.11, December 2024 order, findings, Gould
 *  quotes verbatim (incl. "egregious and continued", which IS in the OCC
 *  release), FinCEN fine "credits the OCC's $750 million penalty", paid to
 *  the Treasury. FinCEN release (13 Oct, raw): $1.2bn, priority national
 *  security risks, admissions; it does NOT itself mention the credit (the
 *  draft said it did; now attributed to the OCC). Treasury release sb0657
 *  (raw): "more than $1.21 billion", "third-largest penalty in Treasury
 *  history", "over $5 billion" not TIMELY reported (draft said "failed to
 *  file"; corrected), over $1bn implicating priority risks, "effectively
 *  outsourced", "prioritized its revenues", lookback and independent
 *  reviews, Bessent quote verbatim. OFAC Enforcement Release (PDF text
 *  extracted): $11,662,930, 475 apparent violations, 18 Sep 2021-24 Apr
 *  2025, ~$14,834,082, programmes, non-egregious, largely not voluntarily
 *  self-disclosed, no reduction to the base penalty. Banking Dive (raw):
 *  spokesperson email quote verbatim, $1.2bn non-deductible charge and ~17
 *  cents a share per the spokesperson, no asset cap.
 *  CUT: Moynihan (earnings call) and Borthwick (media call) quotes; no
 *  transcript was available to confirm them. Section moved from 14:00Z.
 *  Hero: Charlotte skyline with Bank of America Corporate Center, Kiran891,
 *  CC BY-SA 4.0. Not used elsewhere (the site's only BofA image is the New
 *  York tower in a Manhattan skyline, a different file and building).
 *
 *  CYBERSECURITY / IVANTI CONNECT SECURE (12:20Z). Checked 14 Oct against
 *  Volexity's post (raw HTML, published 2026-10-13T15:32Z) and Ivanti's
 *  advisory (article 000109571, created 13 Oct 13:59, rendered headless):
 *  ONE CVE, CVE-2026-104935, CVSS 8.6, CWE-290, covering the auth bypass and
 *  the wu.cgi file-write/RCE stage (Volexity: "tracked under"); the third
 *  flaw (dsinvoked/DSCache privilege escalation) has no CVE and no fix yet,
 *  "in a future release in the coming weeks" (Volexity). Affected: 25.1.1.1
 *  and prior, 25.1.2.2 and prior, 22.8R2.4 and prior; resolved 25.1.1.2
 *  (released 5 Oct per Ivanti), 22.8R2.5 (released 12 Oct per Ivanti),
 *  25.1.3.0 and 25.1.3.1 (25.1.3.0, July, "do not contain this
 *  vulnerability"); 22.7R2.14 and prior not affected. CISA KEV 13 Oct (raw):
 *  two CVEs, this one and CVE-2026-96951 (Windows). Exploitation from 3 Oct,
 *  investigation from 5 Oct, 22.8R2.4 Build 19097 "fully patched" at the
 *  time, post-exploitation list, low-confidence criminal motive,
 *  medium-confidence LLM use, Integrity Checker quote: all Volexity, raw.
 *  CHANGED: the draft's "Ivanti patched the first two on Tuesday" (Ivanti
 *  dates the fixed builds 5 and 12 Oct and published the advisory on 13
 *  Oct); "fixed build numbers ... we did not review" replaced with the
 *  advisory's list; "coming weeks" was Volexity's, not Ivanti's; The
 *  Register dropped as a source (published 18:15Z, after this stamp; every
 *  fact it carried is now taken from Ivanti or Volexity directly). NetScaler
 *  link: "on Monday", not "last week". Time moved from 14:20Z.
 *  Hero: network switch and cable tester in a rack, Ildefonso Polo, Unsplash.
 *
 *  STARTUPS / MODAL SERIES D (12:15Z). Checked 14 Oct against Modal's post
 *  (raw HTML, by Erik Bernhardsson, 14 Oct): $750M Series D, $15.75B
 *  post-money, Accel led, Kleiner Perkins joined, "all of our existing
 *  investors participated, including" the six named; usage tripled, more
 *  than 15x year on year, $1B annualised run rate (quote verbatim);
 *  Sandboxes "$300M run rate product", "close to 3 billion", "scale to a
 *  million concurrent"; "capacity pool that now spans 20+ clouds";
 *  customers; Jev 1T tokens in three days; multi-node training "recently
 *  launched" (the draft said "plans to add"; corrected); RL and post-
 *  training products; 200+ staff. Bernhardsson's title: Modal's company page
 *  names him a founder; TechCrunch (28 Sep) calls him CEO and reported the
 *  round in talks, after a $355m round at $4.65bn. SiliconANGLE (raw):
 *  "more than triple", rented hardware from more than 20 cloud providers,
 *  1m containers "in a recent internal test", nearly a third of revenue.
 *  Every revenue, usage and customer figure attributed to Modal.
 *  Our arithmetic: 15.75 / 1 = 15.75x run rate; 300 / 1,000 = 30 per cent.
 *  Hero: Dell EMC servers in a rack, Marc PEZIN, Unsplash.
 */

const OCC = "https://occ.gov/news-issuances/news-releases/2026/nr-occ-2026-89.html";
const FINCEN = "https://www.fincen.gov/news/news-releases/fincen-assesses-12-billion-penalty-against-bank-america";
const TREASURY = "https://home.treasury.gov/news/press-releases/sb0657";
const OFAC = "https://ofac.treasury.gov/media/937231/download?inline";
const BDIVE = "https://www.bankingdive.com/news/bofa-fined-1-21-billion-over-aml-bsa-occ-treasury/832915/";

const VOLEXITY = "https://www.volexity.com/blog/2026/10/13/a-series-of-unauthenticated-events-chained-exploitation-of-ivanti-connect-secure-zero-days/";
const IVANTI = "https://hub.ivanti.com/s/article/Security-Advisory-Ivanti-Connect-Secure-CVE-2026-104935?language=en_US";
const CISA = "https://www.cisa.gov/news-events/alerts/2026/10/13/cisa-adds-two-known-exploited-vulnerabilities-catalog";

const MODAL = "https://modal.com/blog/1-billion-annualized-run-rate-series-d";
const SILICON = "https://siliconangle.com/2026/10/14/ai-cloud-startup-modal-raises-750m-at-15-75b-valuation/";
const TC = "https://techcrunch.com/?p=3170936";

export default [

/* ---------- 12:15Z STARTUPS ---------- */
ST({ slug: "fifteen-times-run-rate-for-modal", kick: "Venture",
  headline: "Fifteen times run rate, on Modal's own numbers",
  dek: "Modal said on Wednesday it raised a $750m Series D led by Accel at a $15.75bn post-money valuation, and that its annualised run rate has passed $1bn. The revenue and usage figures are the company's own.",
  metaDesc: "AI infrastructure company Modal said it raised a $750m Series D led by Accel at a $15.75bn valuation and says its annualised run rate has passed $1bn.",
  author: "grace-lindqvist", date: "2026-10-14T12:15:00Z",
  capt: "Servers in a rack, in a file photograph.",
  tags: [
    { name: "Startups", slug: "startups" },
    { name: "Venture Capital", slug: "venture-capital" },
    { name: "AI Infrastructure", slug: "ai-infrastructure" },
    { name: "Cloud", slug: "cloud" }
  ],
  related: [
    R("/startups/eight-hundred-seventy-million-for-a-model-that-writes-nothing/", "Venture"),
    R("/startups/the-money-moves-to-the-layer-that-retries/", "Venture"),
    R("/ai/nscales-backlog-has-two-names-on-it/", "AI Infrastructure")
  ],
  body: [
    `Modal, which sells cloud computing for AI workloads, said on Wednesday it has raised a $750m Series D at a $15.75bn post-money valuation, ${L(MODAL, "in a post by Erik Bernhardsson")}, its co-founder and chief executive. Accel led the round and Kleiner Perkins joined, the company said, and all of its existing investors took part, including Menlo Ventures, General Catalyst, Redpoint, Lux Capital, Amplify Partners and Bain Capital Ventures.`,
    `The growth figures come from Modal. "Since then, usage has tripled and we've grown more than 15x year-over-year. We recently crossed $1B in annualized run rate with no sign of slowing down," Bernhardsson wrote, referring to the company's Series C five months earlier. A run rate projects current revenue over a year; it is not revenue booked over twelve months, and Modal has not published margins or audited figures.`,
    `The round had been expected. ${L(TC, "TechCrunch reported")} on 28 September that Modal was in talks to raise $750m led by Accel at $15.75bn, after a $355m round at a $4.65bn valuation four months earlier. ${L(SILICON, "SiliconANGLE")} described the new valuation as more than triple the level after the May round. By our arithmetic, $15.75bn is 15.75 times the run rate Modal reports.`,
    `Modal points to one product as the engine. It says Sandboxes, isolated containers launched in 2023 that customers use to run AI agents, reinforcement-learning jobs and code that language models write, is now "a $300M run rate product just on its own", which would be 30 per cent of the total by our arithmetic. SiliconANGLE put it at nearly a third of revenue. Modal says close to 3bn sandboxes have been started and that they scale to a million running at once; SiliconANGLE reported that the million-container figure came from a recent internal test.`,
    `The company says it rebuilt most of the stack itself, including its own file system, container runtime, scheduler and networking, on a capacity pool that spans more than 20 clouds. SiliconANGLE reported that Modal rents the underlying hardware from those providers, and that workloads can keep running on the others if one cloud has problems. That model means Modal's margins depend partly on what it pays for GPU capacity, an inference from its structure rather than anything the company has disclosed.`,
    `Modal named its customers. It says DoorDash's AI platform team uses it, that Cognition, Ramp, Linear and Hebbia build agents on it, that Runway generates video on it, that Physical Intelligence, Generalist AI and 1X train robots and that Chai Discovery and Achira run drug discovery. It also says TypeSafe AI's Jev model served one trillion tokens on Modal in its first three days. These are the company's statements; the customers' own accounts were not part of the announcement.`,
    `On products, Modal says it recently launched multi-node training and is launching reinforcement-learning and post-training services, and that virtual machines are now generally available in Sandboxes. It has more than 200 staff across New York, San Francisco and Stockholm. SiliconANGLE reported that part of the money will go to product development; Modal did not give a breakdown.`,
    `The round adds to the capital going into the layer beneath the models. Komposite reported on Saturday on <a href="/startups/eight-hundred-seventy-million-for-a-model-that-writes-nothing/">TypeSafe AI's $870m raise</a>, and earlier on <a href="/ai/nscales-backlog-has-two-names-on-it/">another infrastructure provider's backlog</a> and on <a href="/startups/the-money-moves-to-the-layer-that-retries/">where infrastructure money is moving</a>. Whether a multiple of 15.75 times run rate holds will depend on figures Modal has not yet published, starting with what it keeps from each dollar of compute it sells.`
  ]
}),

/* ---------- 12:20Z CYBERSECURITY ---------- */
CY({ slug: "a-fully-patched-vpn-and-root-in-three-steps", kick: "Zero-Days",
  headline: "A fully patched VPN, and root in three steps",
  dek: "Volexity says an unknown actor chained three flaws in Ivanti Connect Secure from 3 October to run commands as root on an appliance that was fully patched at the time. Ivanti has fixed two of them under one CVE; the third is still open.",
  metaDesc: "Volexity says an attacker chained three Ivanti Connect Secure flaws for root access from 3 October; Ivanti fixed two under CVE-2026-104935, the third is unpatched.",
  author: "sam-porter", date: "2026-10-14T12:20:00Z",
  capt: "Network equipment in a server rack, in a file photograph.",
  tags: [
    { name: "Cybersecurity", slug: "cybersecurity" },
    { name: "Security Operations", slug: "security-operations" }
  ],
  related: [
    R("/cybersecurity/the-third-netscaler-patch-in-eleven-days/", "Cybersecurity"),
    R("/cybersecurity/the-breach-came-through-a-known-vpn-flaw/", "Cybersecurity"),
    R("/cybersecurity/a-softbank-cloud-tells-customers-to-rebuild/", "Cybersecurity")
  ],
  body: [
    `Security firm Volexity said on Tuesday that a previously unknown threat actor had chained three vulnerabilities in Ivanti Connect Secure VPN appliances to run code as root without logging in, ${L(VOLEXITY, "according to its published analysis")}. It tracks the actor as UTA0576. Volexity said exploitation began on 3 October and that it began investigating suspicious activity at a network-monitoring customer on 5 October. The compromised appliance ran version 22.8R2.4, Build 19097, which Volexity described as fully patched at the time.`,
    `Ivanti's ${L(IVANTI, "security advisory")}, published the same day, covers one high-severity vulnerability, CVE-2026-104935, an authentication bypass by spoofing rated 8.6 on the CVSS scale. "We are aware of exploitation in the wild affecting a limited number of customers at the time of disclosure," the company said. ${L(CISA, "CISA added the flaw")} to its Known Exploited Vulnerabilities catalogue on Tuesday, alongside a Windows command-injection bug, CVE-2026-96951.`,
    `The count differs because one identifier covers two flaws. Volexity describes three: an authentication bypass in a public login script, welcome.cgi, which routes requests to protected scripts named in a request header; a file-write bug in an upload handler, wu.cgi, which writes an uploaded file to disk before checking it and lets an attacker run it in that window; and a privilege escalation in a root-level broker service that trusts a shared configuration store. Volexity says Ivanti tracks the first two under CVE-2026-104935. The third has no CVE and no fix yet; Volexity says Ivanti is working on one for "a future release in the coming weeks".`,
    `Ivanti lists the affected builds as 25.1.1.1 and earlier, 25.1.2.2 and earlier, and 22.8R2.4 and earlier. The fixed builds are 25.1.1.2, which the advisory says was released on 5 October, and 22.8R2.5, released on 12 October; 25.1.3.0 and 25.1.3.1, which run on Ivanti's newer appliance platform, are listed as resolved, and versions 22.7R2.14 and earlier are not affected. Ivanti said it had found "a portion of this vulnerability" itself and fixed it in the July release, 25.1.3.0, and had been working to backport that fix to other supported versions "when exploitation occurred". Ten days passed between the first exploitation Volexity saw and the advisory, by our count.`,
    `Once on the appliance, Volexity said, the attacker extracted stored domain credentials, used the appliance's Active Directory service account to search for LAPS administrator passwords and BitLocker recovery keys, deployed custom Kerberos and LDAP tools, sprayed passwords against Active Directory accounts and tried to pull credentials from captured LDAP traffic. It deleted entries from Ivanti's debug log and the Linux audit log. Volexity found no first-stage malware or web shell: each command ran by exploiting the device again, with results returned in the HTTP response.`,
    `Volexity assessed with low confidence that the motive is criminal rather than espionage, based on the target, and with medium confidence that the actor used large language models to write exploits and run post-exploitation work. Because the intrusion was detected and disrupted, it said, the actor's ultimate objective could not be determined.`,
    `Detection is the harder problem. Ivanti's advisory says indicators are limited, points customers to Volexity's post and advises running its Integrity Checker Tool regularly. Volexity says the chain patches library code in memory only and restores the configuration it changes, so that tool "does not detect any modifications", and it warned that "The Ivanti Integrity Checker may not be able to identify device compromise." It recommends applying the patches, watching for high volumes of requests to welcome.cgi in which the URL and the X-DSCGI-PATH header do not match, checking the /tmp/ directory and doing network and memory forensics on suspect devices.`,
    `This is the third year in a row that attackers have exploited undisclosed flaws in Connect Secure, after January 2024 and January 2025, and edge devices keep producing them. Komposite reported on Monday on <a href="/cybersecurity/the-third-netscaler-patch-in-eleven-days/">a third NetScaler patch in eleven days</a>, and earlier on <a href="/cybersecurity/the-breach-came-through-a-known-vpn-flaw/">a breach that came through a known VPN flaw</a>. Volexity's account rests on one customer's appliance; Ivanti has not said how many customers were affected beyond "a limited number".`
  ]
}),

/* ---------- 12:25Z FINTECH ---------- */
FT({ slug: "the-record-penalty-comes-after-the-order", kick: "Enforcement",
  headline: "The record penalty comes after the order",
  dek: "The OCC fined Bank of America $750m on Tuesday, the largest penalty in its history, for an anti-money-laundering programme it said was still deficient almost two years after a December 2024 order. FinCEN's $1.2bn fine credits the OCC amount.",
  metaDesc: "The OCC fined Bank of America $750m for deficient BSA/AML controls, its largest penalty; FinCEN's $1.2bn fine credits it, and OFAC settled for $11.7m.",
  author: "elena-vasquez", date: "2026-10-14T12:25:00Z",
  capt: "Bank of America Corporate Center, centre, in Charlotte, North Carolina, in a file photograph.",
  tags: [
    { name: "Banking", slug: "banking" },
    { name: "Enforcement", slug: "enforcement" },
    { name: "Compliance", slug: "compliance" },
    { name: "Regulation", slug: "regulation" }
  ],
  related: [
    R("/fintech/the-sponsor-bank-takes-the-hit/", "Banking"),
    R("/fintech/the-charter-picks-the-arithmetic/", "Banking"),
    R("/business/thirteen-billion-dollars-inadequately-reported/", "Reporting")
  ],
  body: [
    `The Office of the Comptroller of the Currency on Tuesday imposed a $750m civil money penalty on Bank of America, N.A. for violations of the Bank Secrecy Act and its implementing rules, ${L(OCC, "according to the agency's release")}. "This amount is the largest in OCC history," the release says. The penalty will be paid to the US Treasury.`,
    `The OCC said the bank's anti-money-laundering programme was deficient and ineffective. Its transaction-monitoring system failed to properly monitor trillions of dollars in transactions, the agency said, which led the bank to file large numbers of late suspicious activity reports involving billions of dollars, many with indicia of money laundering. The OCC said the bank knew for years that it was failing to escalate potentially suspicious activity to investigators and did not correct it, that its BSA officer and staff lacked sufficient skills and expertise, and that its audit function missed long-standing problems that examiners later found.`,
    `The penalty follows an order that was meant to fix those problems. The bank has been under a December 2024 cease-and-desist order, and the OCC said that more than a year later it still was not escalating potentially suspicious activity and had not completed many of the significant steps required, and that a gap in monitoring let it process potential trade-based money-laundering transactions. "The bank's poor response to its BSA deficiencies is unacceptable," said Comptroller of the Currency Jonathan V. Gould. "The second largest bank's egregious and continued BSA violations warrant the OCC imposing its largest CMP ever assessed against a bank." Banks without an effective programme, he said, "can expect swift and significant action from the OCC."`,
    `The Financial Crimes Enforcement Network ${L(FINCEN, "assessed a separate $1.2bn penalty")} for the bank's failure to mitigate and report priority national-security risks, including Chinese money-laundering networks and illicit finance along the southwest border. Under its resolution with FinCEN, Bank of America admits that it wilfully violated the Bank Secrecy Act by failing to maintain a compliant programme, to conduct due diligence on correspondent accounts for foreign financial institutions and to file suspicious activity reports. The OCC says FinCEN's fine "credits the OCC's $750 million penalty". ${L(TREASURY, "The Treasury")} puts the total at more than $1.21bn and calls the FinCEN fine the third-largest penalty in its history.`,
    `The Treasury's release adds detail. It says the bank failed to report more than $5bn in suspicious transactions to FinCEN in time, more than $1bn of it tied to national-security and other priority risks, and that its reliance on law-enforcement inquiries and requests from other banks meant it "effectively outsourced to third parties a substantial portion of its proactive detection and reporting obligations". It says the bank "prioritized its revenues and minimized the impact on its required compliance resources". FinCEN's consent order requires a third-party lookback to find and report transactions that went undetected, and independent reviews of the bank's suspicious-activity monitoring, customer due diligence, correspondent-account checks and data governance. "Today's actions send a clear message that even the biggest financial institutions are not above the law," Treasury Secretary Scott Bessent said.`,
    `The Office of Foreign Assets Control settled separately. Bank of America agreed to pay $11,662,930 over 475 apparent violations of sanctions programmes on Russia, Belarus, Iran, Burma, Somalia, narcotics and global terrorism between September 2021 and April 2025, worth about $14.8m in total, ${L(OFAC, "OFAC's enforcement release says")}. They involved payments routed through blocked banks, poorly prioritised screening alerts, slow watchlist updates and two business accounts linked to blocked persons. OFAC found the violations non-egregious but largely not voluntarily disclosed, and gave no reduction to the base penalty.`,
    `The bank says it is fixing the problems. "Financial crime compliance is serious, and we are responsible for getting it right," a spokesperson ${L(BDIVE, "told Banking Dive")} by email, adding that its team is "far along with and committed to completing the work required to address the issues raised by our regulators". Banking Dive reported, citing the spokesperson, that third-quarter results include a non-tax-deductible charge of $1.2bn, roughly 17 cents a share, and that no asset cap was imposed.`,
    `The sums overlap. Because FinCEN's fine credits the OCC's, the bank is not paying $1.95bn; the FinCEN fine plus the OFAC settlement comes to about $1.21bn by our arithmetic, matching the Treasury's figure. What sets this case apart is the sequence. The 2024 order set the task, and the 2026 penalty is for not finishing it, which tells other banks under consent orders that the order itself is a deadline. Komposite has covered how <a href="/fintech/the-sponsor-bank-takes-the-hit/">sponsor banks absorb enforcement risk</a> and how <a href="/fintech/the-charter-picks-the-arithmetic/">a charter shapes the obligations</a> that come with it.`
  ]
}),

];
