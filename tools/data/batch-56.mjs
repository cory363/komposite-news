/** Batch 56 — Saturday 3 October 2026. Three pieces: the SEC's crypto custody
 *  proposal as the lead, the first attacks on a Mythos-found flaw in Rejetto
 *  HFS, and arXiv's new two-a-month submission limit.
 *
 *  CRYPTO / CUSTODY (LEAD). SEC press release 2026-100 (1 October); the
 *  proposing release IA-7023 (Adviser and Regulated Fund Custody Rules; Crypto
 *  Custody Rules, 760 pages) read for section II.A.2 (qualified custodian
 *  determination, questions 35 to 45), section II.D.3 (PCAOB-registered
 *  accountant requirement) and section IV.B.3 to 4 (16,442 advisers, $177.0
 *  trillion RAUM; 136 advisers reporting 39 identified crypto custodians, 22
 *  reported by one adviser, one by 76 and one by 62; one regulated fund; the
 *  LLM review of 15,964 Part 2A brochures naming "Anthropic Sonnet 5", one
 *  false negative and 334 false positives on a second pass, false-positive rate
 *  below 3% after manual review, 1,498 advisers, "lower bound"). The fact
 *  sheet for the self-custody and state trust company conditions. Statements
 *  of 1 October by Chairman Atkins, Commissioner Peirce ("Roller Coaster
 *  Ride") and Commissioner Uyeda, and Atkins and Uyeda's statement on Peirce's
 *  departure, all read in full on sec.gov.
 *
 *  CYBERSECURITY / HFS. GitHub advisory GHSA-xxrm-3f86-v97j and VulnCheck's
 *  advisory for CVE-2026-61500 (HFS 3.0.0 to 3.2.0; CVSS 3.1 9.8, CVSS 4 9.3;
 *  CWE-338). HFS v3.2.1 release of 13 July 2026 and its credit line; v3.3.4 of
 *  30 September. Horizon3's "Tales from the Trenches: Anthropic's Mythos and
 *  Rejetto HFS" by Zach Hanley, 30 September, read in full. Garrity's LinkedIn
 *  post, his remarks, the 286-CVE tracker count, the video and "second
 *  exploited" from The Register, 3 October. CISA KEV catalogue 2026.10.02
 *  read: CVE-2014-6287 (added 25 March 2022) and CVE-2024-23692 (added 9 July
 *  2024) listed, CVE-2026-61500 not.
 *
 *  AI / ARXIV. arXiv blog "Fair Moderation, Equitable Access, and AI: arXiv's
 *  Updated Rate Limit Policy", 1 October, read in full. arXiv's monthly
 *  submissions series (arxiv.org/stats/get_monthly_submissions) read on
 *  3 October: August 2026 31,173; September 2026 40,363; September 2025
 *  26,646; the 9,190 rise is the largest in the series, the next being March
 *  2026's 5,755; January to September 2026 270,685 against 284,486 for all of
 *  2025. arXiv blog of 23 September for the $17.2 million in commitments.
 *
 *  Heroes: rc.xyz NFT gallery (hardware wallets), Erik Mclean and Wesley Tingey via Unsplash, in
 *  heroes.json. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const AI=P("ai","AI","ai"), CR=P("crypto","Crypto","crypto"), CY=P("cybersecurity","Cybersecurity","cybersecurity");

export default [

AI({ slug:"two-a-month-after-forty-thousand", kick:"AI Research",
  headline:"Two a month, after forty thousand in September",
  dek:"arXiv took in 40,363 submissions in September, a record, and almost 9,000 support tickets with them. From this month each submitter may send it two papers a month. Its own monthly figures show September's rise was the largest in the archive's history, by a wide margin.",
  metaDesc:"arXiv received a record 40,363 submissions in September 2026 and from 1 October limits each submitter to two submissions a month, citing thin, 'salami' and AI-written papers. September's jump of 9,190 was the largest in its records.",
  author:"dana-whitfield", date:"2026-10-03T15:00:00Z",
  capt:"Stacks of paper files in an office. arXiv's volunteer moderators check every submission before it is posted, and September brought them more than 40,000.",
  tags:[{name:"AI",slug:"ai"},{name:"Open Source",slug:"open-source"},{name:"Policy",slug:"policy"}],
  related:[
    {href:"/ai/a-hundred-notices-and-no-names/",kick:"AI Safety",title:"A hundred notices and no names",ago:"OCTOBER 2, 2026"},
    {href:"/cybersecurity/fixed-in-july-explained-on-wednesday-attacked-on-thursday/",kick:"Vulnerabilities",title:"Fixed in July, explained on Wednesday, attacked on Thursday",ago:"OCTOBER 3, 2026"},
    {href:"/ai/thirty-dollars-and-then-the-meter/",kick:"AI Economics",title:"Thirty dollars, and then the meter",ago:"SEPTEMBER 26, 2026"},
  ],
  body:[
    `Since Thursday, anyone who submits a paper to arXiv may submit two in a calendar month and have no more than three under consideration at once. The preprint server announced the limit the same day and called it a stopgap while it works out "what may be the new best practice for authors employing more and more advanced AI tools", and while it improves its moderation tools. The limit counts submissions, not published papers, so a rejected paper uses up one of the two. It applies across every subject category. It falls only on the person who presses submit, not on that person's co-authors, and a paper withdrawn before it is announced does not count.`,
    `arXiv's explanation is a set of numbers. In September 2016 it received 9,869 submissions. In September 2024 it received 20,569. This September it received 40,363, "which in turn generated almost 9,000 support tickets for arXiv staff and moderators". Submissions have doubled in two years, the archive says, and in its cs.AI category they have risen more than sixfold over the same period.`,
    `The archive's public monthly statistics show how sudden September was. August brought 31,173 submissions, so September added 9,190 in a single month, a rise of 29 per cent. This desk read the series back to its start in 1991: that is the largest month-on-month increase arXiv has recorded. The next largest was 5,755, in March of this year. September was also 51 per cent above September 2025. From January to September arXiv received 270,685 submissions, against 284,486 in the whole of 2025. The remaining gap, 13,801, is less than half of an ordinary month.`,
    `What the extra papers are made of is a judgement from arXiv's moderators, and its post sets it out. They are seeing "thin papers of narrow scope", "salami" papers in which one piece of work is cut into several submissions, and "a marked increase in dense, AI-written papers". arXiv's rules allow authors to use AI in support of their research, provided they disclose it and the work meets the archive's standards. Many of the submissions now arriving, the post says, do not. "AI tools are making it easy for authors to flood arXiv and other repositories with these low-value papers."`,
    `Every submission passes a volunteer moderator before it is posted, and that is the resource being rationed. Thomas Dietterich, an emeritus professor at Oregon State University who chairs arXiv's editorial advisory council, put the problem in terms of fairness: "a relatively small proportion of authors are submitting a large number of low-quality papers and consuming a disproportionate fraction of the moderators' time." He added that "this is unfair to authors who continue to submit quality papers — their papers can be delayed for days or weeks as a result."`,
    `Before the change, moderators held back submitters they judged to be well above a "practical limit" on how fast independent work could be produced. arXiv's post says that, with AI tools becoming more advanced and accessible, the limit is "now up for debate". A fixed number replaces the judgement. It is blunt by design: it measures how much a person submits because, at 40,000 papers a month, the archive cannot measure quality at the door. A research group with many members can still post plenty, since each submitter has an allowance. One prolific author with a capable model cannot.`,
    `The archive is facing this as it becomes an independent nonprofit. On 23 September it announced $17.2 million in commitments over three to five years from Simons Foundation International, XTX Markets and the Siegel Family Endowment. Part of that money is earmarked for technical work "related to the management of AI-generated content". arXiv says it will watch how the limit affects submission rates and moderation load, and change it as needed. The first full month under the rule is October. The archive publishes its count when the month ends.`,
  ] }),

CY({ slug:"fixed-in-july-explained-on-wednesday-attacked-on-thursday", kick:"Vulnerabilities",
  headline:"Fixed in July, explained on Wednesday, attacked on Thursday",
  dek:"A flaw that Anthropic's Mythos model found in an open-source file server was patched 80 days before anyone was seen exploiting it. The attacks began the day after the researchers who found it published how the model had worked the exploit out, step by step.",
  metaDesc:"CVE-2026-61500, a session-forgery flaw in Rejetto HFS found with Anthropic's Mythos and fixed on 13 July 2026, was exploited from 1 October, a day after Horizon3 published its write-up, VulnCheck says.",
  author:"sam-porter", date:"2026-10-03T15:10:00Z",
  capt:"A die tossed above an open hand. The HFS flaw came down to a random number generator that was not random enough: watch a dozen of its outputs and the rest can be worked out.",
  tags:[{name:"AI Security",slug:"ai-security"},{name:"Open Source",slug:"open-source"},{name:"Threat Intelligence",slug:"threat-intelligence"}],
  related:[
    {href:"/ai/a-hundred-notices-and-no-names/",kick:"AI Safety",title:"A hundred notices and no names",ago:"OCTOBER 2, 2026"},
    {href:"/cybersecurity/the-ninth-time-this-year/",kick:"Vulnerabilities",title:"The ninth time this year",ago:"OCTOBER 1, 2026"},
    {href:"/cybersecurity/fixed-for-the-phones-that-did-not-upgrade/",kick:"Vulnerabilities",title:"Fixed for the phones that did not upgrade",ago:"SEPTEMBER 30, 2026"},
  ],
  body:[
    `"We started detecting exploitation of CVE-2026-61500 in Rejetto HFS this evening," Patrick Garrity, a security researcher at VulnCheck, posted on LinkedIn on Thursday, according to The Register. "Our canaries detected an actor in China targeting real vulnerable hosts in the US." He told The Register that the first activity came from a single IP address in China and was aimed at servers in the US and Japan. On Friday his sensors logged four more attempts from two US addresses in the same subnet, which he said "appear to be coming from a proxy".`,
    `HFS, the HTTP File Server written by Rejetto, is an open-source program for sharing files over the web. The flaw is in its 3.x line, a rewrite in TypeScript. The public advisory says HFS 3.0.0 to 3.2.0 builds the key that signs its session cookies from Math.random(), a generator not designed for security, and then discloses other outputs of the same generator to unauthenticated clients during login. An attacker can collect a few of those, reconstruct the generator's state, recover the key and forge an administrator's cookie. The administrator can run code through a configuration feature, so the end result is remote code execution with no password. GitHub rates it 9.8 out of 10. The fix, version 3.2.1, came out on 13 July. Its release notes thank "Zach Hanley (@hacks_zach) of Horizon3.ai, in collaboration with Claude and Anthropic Research".`,
    `Eighty days passed before VulnCheck saw it exploited. The day before that, on Wednesday, Horizon3 published Hanley's account of how the bug was found. The company joined Project Glasswing, Anthropic's programme giving selected partners access to its Mythos model, in July. Its harness runs many agents in parallel, and the one looking for cryptographic weaknesses, driven by Mythos, connected three facts: the signing key is made from three Math.random() calls when the server starts; a login step puts a raw Math.random() value into a cookie the client can read; and the algorithm V8 uses for Math.random(), xorshift128+, can be run backwards. The write-up quotes the model's output, describes the proof of concept it wrote using Microsoft's Z3 solver, and lists the attack in seven steps, from checking that the admin account exists to sampling the leaking endpoint 12 times to running a command. The Register reports that Hanley also published a video of the exploit. The first attack VulnCheck saw came the next evening.`,
    `Horizon3's own reading is that this changes which bugs are worth attacking. Its researchers had spotted insecure uses of cryptography "many times before", Hanley writes, and dropped them for two reasons: a lack of mathematics and the time an exploit would take. "Mythos negates both of those reasons." The team could not recall "ever seeing an SMT solver being used to attack a cryptographic flaw like this in a real application". The write-up predicts that "the types of bug classes threat actors find viable to weaponize and exploit at scale will change."`,
    `The sequence suggests something narrower about this case. The attackers did not need Mythos. They needed the explanation. Once it was published, a flaw patched in July drew its first observed attack within about a day. Garrity's tracker, The Register says, counts 286 CVEs attributed to Mythos and Project Glasswing as of Friday. Until Thursday only one of them was known to have been exploited. This is the second.`,
    `HFS has been here before. CISA's Known Exploited Vulnerabilities catalogue already lists two HFS flaws: CVE-2014-6287, added in March 2022, and CVE-2024-23692, a template injection in the older Delphi version, added in July 2024. CVE-2026-61500 was not in the catalogue's release of 2 October, so US federal agencies have no deadline for it yet. VulnCheck has added it to its own exploited list.`,
    `Anyone running HFS 3.0.0 to 3.2.0 should move to 3.2.1 or later; the current release, 3.3.4, came out on Wednesday with further security fixes credited to a different researcher. Updating replaces the guessable key, but it does not undo what an intruder did with an administrator session before the update. A server that ran an affected version on the internet over the past few days should be checked for configuration changes it cannot account for.`,
  ] }),

CR({ slug:"the-adviser-holds-the-keys-when-no-one-else-will", kick:"Custody",
  headline:"The adviser holds the keys when no one else will",
  dek:"The SEC has proposed letting investment advisers hold their clients' crypto themselves, but only after deciding in writing, every quarter, that no qualified custodian will take it. Its staff found 136 advisers using specialist crypto custodians, and 1,498 that appear to advise on crypto. To find the second number, they had an AI model read 15,964 brochures.",
  metaDesc:"The SEC's 1 October 2026 crypto custody proposal (IA-7023) would let advisers self-custody crypto when no qualified custodian will hold it, reviewed quarterly, and admit state trust companies. Staff count 136 advisers using crypto custodians.",
  author:"marcus-oyelaran", date:"2026-10-03T15:20:00Z",
  capt:"Two hardware wallets, devices that store the private keys controlling crypto assets. An adviser holding clients' keys itself would need at least two people to approve every transaction under the SEC's proposal.",
  tags:[{name:"Custody",slug:"custody"},{name:"Asset Management",slug:"asset-management"},{name:"Regulation",slug:"regulation"}],
  related:[
    {href:"/crypto/sec-proposes-regulation-crypto-assets/",kick:"Regulation",title:"SEC proposes a $75m crypto exemption",ago:"SEPTEMBER 8, 2026"},
    {href:"/crypto/crypto-custody-price-war/",kick:"Institutional Crypto",title:"Custody, crypto's safest business, enters a price war",ago:"MAY 22, 2026"},
    {href:"/ai/sarbanes-oxley-without-the-filing/",kick:"AI Governance",title:"Sarbanes-Oxley without the filing",ago:"OCTOBER 1, 2026"},
  ],
  body:[
    `The Securities and Exchange Commission on Thursday proposed rules that would give registered investment advisers a lawful way to hold their clients' crypto assets themselves when no custodian will. The proposing release, numbered IA-7023, runs to 760 pages. It would also let advisers and funds use state-chartered trust companies as crypto custodians, and it rewrites a long list of older custody provisions. Comments are open for 60 days once it appears in the Federal Register. The chairman, Paul Atkins, said it gives advisers and funds "a compliant pathway where none existed before". Hester Peirce said she hoped it foreshadowed "a calm end to the regulatory roller coaster ride". Her departure from the commission was announced the same afternoon.`,
    `The problem it addresses is old. An adviser with custody of client funds or securities must keep them with a qualified custodian: a bank or savings association, a registered broker-dealer, a futures commission merchant or certain foreign financial institutions. For many crypto assets, the SEC's fact sheet says, such a custodian "may not be readily available", and the custodians that do serve the market have not been able to support every token. "With newly developed crypto assets, custodial capabilities may lag an asset's deployment by many months," Atkins said. The commission's 2023 attempt at the problem was withdrawn in June 2025. Commissioner Mark Uyeda described it on Thursday as having built a "no-win" scenario, telling advisers to use custodians that "for practical and accounting reasons, were largely unavailable or unwilling to serve in that capacity".`,
    `The new route has a gate. Before taking self-custody of any crypto asset, the adviser must determine in writing that it has "a reasonable basis, after due inquiry, for believing that no qualified custodian will maintain the crypto asset". The finding is made token by token; a blanket finding for all crypto is not allowed. It must be renewed at least every quarter. Cost is no excuse: "The cost of utilizing a custodian is not relevant," the release says. When a custodian does become available, the adviser must move the asset "as soon as reasonably practicable". No deadline is set. The release asks whether there should be one, such as the end of the following quarter.`,
    `Once through the gate, the adviser takes on a custodian's duties. It must document its expertise in safeguarding each asset and run systems that cover private key management, approval of every transaction by at least two people and a separate on-chain address for each client. It must review its cybersecurity controls each year and obtain an internal control report from an independent public accountant within six months, then annually. Clients get statements at least quarterly. Adviser and client must agree in writing to treat each asset as a "financial asset", which brings protections under state law. Where the client is a registered fund or business development company, the fund's board must review the adviser's custodian finding at the start and every quarter, and decide beforehand, and every year, that the asset would be held with reasonable care.`,
    `The release's own questions show where the argument will be. Question 36 asks whether the "reasonable basis" test "would enable advisers to avoid using a qualified custodian, even where qualified custodians are generally available". Question 38 asks the opposite: whether an adviser should be able to self-custody even when a custodian is available, if that custodian could not support the adviser's strategy, for example by limiting staking or trading. The commission then asks how such a finding could be made "in light of the adviser's conflict of interest in finding that its own custodial services are in the client's best interest." Uyeda said self-custody "creates an inherent conflict of interest". Peirce put the word in quotation marks. Because the arrangement is an adviser holding assets for clients, not investors holding their own, she said she would have preferred "shelf-custody".`,
    `The economic analysis puts numbers on who is affected. In December 2025, 16,442 advisers were registered with the SEC, with $177.0 trillion in regulatory assets under management. Staff found 136 of them reporting at least one custodian that appears to specialise in crypto, 39 such custodians in all. The market is concentrated: one custodian was named by 76 advisers and another by 62, while 22 of the 39 were named by a single adviser. Staff found one registered fund or business development company using such a custodian. The release says its list of specialist custodians is probably incomplete, and that for separately managed accounts advisers need only report a custodian holding at least 10 per cent of those assets, so the 136 is unlikely to capture every adviser holding crypto.`,
    `The second number came from a model. To estimate how many advisers give advice on crypto, staff converted the Form ADV Part 2A brochures of 15,964 advisers to text and asked a large language model, which the release names as "Anthropic Sonnet 5", to answer yes or no for each one, quoting its evidence. A second pass turned up one false negative and 334 false positives. A manual check of the remaining yes answers put the false-positive rate below 3 per cent. The result is 1,498 advisers that appear to give or plan to give crypto advice, which the release calls a likely lower bound. It also warns that the analysis is "stochastic in nature" and that a re-run could differ. The gap between 1,498 and 136 has more than one cause, the release notes: advising on an asset is not the same as holding it, and some holders use custodians that do not specialise in crypto.`,
    `Some of the plainer changes may last longest. The proposal would drop the 2009 requirement that accountants doing custody-rule work be registered with, and inspected by, the Public Company Accounting Oversight Board. The release notes that the board does not inspect those engagements anyway, and the accountant must still be independent. The crypto provisions reach only assets that are funds or securities, or for a registered fund a security or similar investment. The central test, though, is one the adviser applies to itself: no one will hold this, so we will. The SEC proposes to make that finding a required record, renewed every quarter: a document its examiners will be able to ask for.`,
  ] }),

];
