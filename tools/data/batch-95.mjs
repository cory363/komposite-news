import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const BU = P("business", "Business", "business", "Photograph via Unsplash");
const PO = P("policy", "Policy", "policy", "Photograph via Unsplash");
const CY = P("cybersecurity", "Cybersecurity", "cybersecurity", "Photograph via Unsplash");
const BC = P("blockchain", "Blockchain", "blockchain", "Photograph via Unsplash");

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

/** Batch 95 — Wednesday 21 October 2026, round 18. Four stories: a new
 *  homepage LEAD (SpaceX/Tesla committees; tools/data/lead.json now pins it
 *  until 22 Oct 14:00Z) and three others. The round-17c OpenAI lead moves
 *  down through build-front-zone's normal ordering.
 *  Repeat check: grep of the repo for eMudhra, Alpenglow, "special
 *  committee", SpaceX and GENIUS; none of the four events covered before.
 *  Earlier SpaceX (8 Oct spectrum, 7 Oct $40bn financing) and GENIUS Act
 *  (Treasury 18 Aug, Fed 24 Sep, OCC proposal) stories are linked, not
 *  repeated.
 *
 *  ---- 15:50Z BUSINESS (LEAD): "Two special committees, one conflicted chief
 *  executive" (tom-kessler)
 *  PRIMARY READ: SpaceX Form 8-K, 20 Oct 2026 (Item 2.02), and Exhibit 99.1,
 *  "SpaceX Reports Third Quarter 2026 Results" (SEC accession
 *  0001628280-26-066482), read in full. Musk's Schedule 13G on SpaceX, filed
 *  13 Aug 2026 for 30 Jun 2026 (0001104659-26-095936). Tesla DEF 14A, filed
 *  19 Oct 2026 (0001104659-26-116700): Musk 699,580,882 shares, 19.8 per
 *  cent; annual meeting 3 Dec 2026; the xAI-to-SpaceX share conversion. Call
 *  quotes and guidance: Motley Fool transcript of the 20 Oct call (SpaceX's
 *  own transcript is promised on ir.spacex.com but was not posted when
 *  checked). Every quote below was matched against that transcript.
 *  Corrections to the draft: the "about 36 per cent outright" SpaceX stake
 *  (CoinDesk) could not be reproduced from the 13G and is cut; the 48.4 per
 *  cent figure is from the 13G itself, filed in August (not "June") and
 *  explained (it counts trust-held Class B, restricted Class B and 350m
 *  options); the CoinDesk bitcoin tally (bitcointreasuries.net, a single
 *  aggregator) is cut; CoinDesk's EPS and AI capex figures, cut in the
 *  draft as unverified, are confirmed by the release (diluted EPS $0.35;
 *  SI capex $16,444m) and used from the release; "at the request of
 *  shareholders" added from the transcript; Tesla's proxy, filed Monday,
 *  does not mention the committee (searched for "special committee": only
 *  the 2018 pay-award committee appears); the "carmaker" speculation line
 *  is cut. Arithmetic: 16,444/19,593 = 83.9 per cent; Q4 capex guidance
 *  35/19.593 = 1.79 and 40/19.593 = 2.04 times Q3; Q1 2027 revenue midpoint
 *  35/14.575 = 2.40 times Q3; 7,560/813 = 9.3.
 *  Hero: Unsplash Ptd-iTdrCJM (SpaceX, @spacex), Falcon Heavy demo launch,
 *  2018, no people visible. Not used before on Komposite; swapped from a
 *  Starbase aerial (Jay Wedgeworth) that Cranberry's round-18 lead also uses.
 *
 *  ---- 15:30Z POLICY: "The stablecoin rule that will not say what a reward
 *  is" (jonathan-bright)
 *  PRIMARY READ: OCC news release 2026-92 and Bulletin 2026-50 (21 Oct
 *  2026), and the final rule text (nr-occ-2026-92a.pdf, 721 pages), read
 *  for the yield sections (pp. 98-111). Verbatim checks: "as enacted" (p.
 *  98), "declines to presume that rewards programs that predated the GENIUS
 *  Act comply" (p. 104), elimination of the rebuttable presumption (§ 15.10
 *  (c)(4)), no definition of "interest" or "yield" (p. 108), transaction-
 *  based payments (p. 109), "solely" read "under its plain terms" (p. 111),
 *  white-label payments "more likely to be made on behalf of" an issuer (p.
 *  106). Gould and Bessent quotes from the release.
 *  Corrections to the draft: the rule-text quotes taken via CoinDesk and
 *  American Banker are now quoted from the rule itself; the "at least in
 *  part" paraphrase is replaced by the rule's own words; the $6.6tn deposit
 *  figure (banking groups via American Banker) is replaced by the rule's
 *  own summary of those comments ("trillions of dollars"); the waiver
 *  detail for pending applications was not in the documents read and is
 *  cut; "February proposal" -> published 2 March 2026 (91 FR 10202);
 *  Treasury (18 Aug) and Fed (24 Sep) proposal dates confirmed from our own
 *  earlier stories; Bessent's quote added from the release.
 *  Hero: Unsplash WyxqQpyFNk8 (Giorgio Trovato, @giorgiotrovato), US $100
 *  notes, cropped to landscape (no portrait in the crop). Not used before.
 *
 *  ---- 15:10Z CYBERSECURITY: "Eight certificate keys that were tiny numbers"
 *  (sam-porter)
 *  PRIMARY READ: Mozilla Security Blog, 20 Oct 2026 (updated 21 Oct); Mozilla
 *  Bugzilla bug 2083449, "eMudhra: Private key compromise of Intermediate
 *  Certificates", comments 0-21 (Dennis Jackson of Mozilla; eMudhra's
 *  Naveen and Kaushik; Sectigo's Martijn Katerbarg; the reporter); Scott
 *  Helme's post (20 Oct, updated 20:16 UTC); The Register (Simon Sharwood,
 *  20 Oct 23:57 UTC); CoinDesk (Omkar Godbole, 21 Oct 00:11 EDT).
 *  eMudhra attribution: its account is now quoted from its own comments on
 *  the public Mozilla bug (19-20 Oct), not via Helme. Corrections: Helme's
 *  post does not say Go, certifi or webpki-roots fixes were released (cut);
 *  Helme recovered all eight values himself (not "other researchers"); the
 *  ~30,000 certificates to migrate, the G3 root removal and the AI-agent
 *  test are from the bug. The Register's "not responded" line kept, dated.
 *  Hero: Unsplash pY_AZJfdbHQ (Matt Artz, @mattartz), a single key on a black
 *  background. Not used before; distinct from the padlock heroes on site.
 *
 *  ---- 14:50Z BLOCKCHAIN: "Solana takes its votes off the chain"
 *  (marcus-oyelaran)
 *  ACTIVATION CHECKED: The Block (Brian Danga, 21 Oct 10:24 EDT): Anza said
 *  Alpenglow reached mainnet-beta at slot 459,653,000 at about 14:00 UTC.
 *  Our own read of a public Solana RPC node (api.mainnet-beta.solana.com) at
 *  15:44 UTC: epoch 1064, slot 459,684,293; epoch start slot 459,648,000 had
 *  block time 13:36:05 UTC; 666 current and 11 delinquent vote accounts.
 *  Tense changed from "scheduled" to "went live". Galaxy (Manivannan,
 *  Bolognini, Campbell, 20 Oct) and CoinDesk (Malwa, Rodrigues, 21 Oct) read.
 *  Corrections: before-finality now given both ways (Anza 12.8s via The
 *  Block; CoinDesk about six seconds); Nordnes's second quote not found and
 *  cut; validator figures attributed (counts to Bitwise, concentration to
 *  Solana Compass, both via CoinDesk). Arithmetic: 0.8/2 = 0.4 (60 per cent
 *  lower at 200ms slots); 696-659 = 37; 459,653,000-459,648,000 = 5,000.
 *  Hero: Unsplash oZPwn40zCK4 (Kvistholt Photography, @freeche), rear of a
 *  server chassis with cables. Not used before.
 */

/* ---------------- LEAD ---------------- */
const SPCX_PR = "https://www.sec.gov/Archives/edgar/data/1181412/000162828026066482/spaceexplorationtechnologi.htm";
const SPCX_13G = "https://www.sec.gov/Archives/edgar/data/1181412/000110465926095936/";
const TSLA_PROXY = "https://www.sec.gov/Archives/edgar/data/1318605/000110465926116700/tm267596-1_def14a.htm";
const FOOL = "https://www.fool.com/earnings/call-transcripts/2026/10/20/spacex-spcx-q3-2026-earnings-call-transcript/";

const TH = 'style="text-align:left;border-bottom:2px solid #222;padding:6px 8px"';
const TD = 'style="text-align:left;border-bottom:1px solid #ddd;padding:6px 8px;vertical-align:top"';
const row = (a, b, c) => `<tr><td ${TD}>${a}</td><td ${TD}>${b}</td><td ${TD}>${c}</td></tr>`;
const SPCX_TABLE = `<div class="datatable" style="overflow-x:auto;margin:18px 0;max-width:calc(100vw - 32px)"><table style="border-collapse:collapse;width:100%;font-size:15px"><thead><tr><th ${TH}>SpaceX, quarter to 30 September</th><th ${TH}>2026</th><th ${TH}>2025</th></tr></thead><tbody>`
  + row("Total revenue", "$14,575m", "$5,576m")
  + row("Super Intelligence (AI) revenue", "$7,560m", "$813m")
  + row("Connectivity (Starlink) revenue", "$5,248m", "$3,097m")
  + row("Space revenue", "$1,767m", "$1,666m")
  + row("Net income (loss)", "$4,404m", "($1,054m)")
  + row("Capital expenditure", "$19,593m", "$6,880m")
  + `</tbody></table><p style="font-size:13px;color:#666;margin:6px 0 0">Source: SpaceX earnings release, Exhibit 99.1 to its Form 8-K of 20 October 2026. Unaudited; the company's own figures.</p></div>`;

/* ---------------- OCC ---------------- */
const OCC_NR = "https://www.occ.gov/news-issuances/news-releases/2026/nr-occ-2026-92.html";
const OCC_BUL = "https://www.occ.gov/news-issuances/bulletins/2026/bulletin-2026-50.html";
const OCC_RULE = "https://www.occ.gov/news-issuances/news-releases/2026/nr-occ-2026-92a.pdf";
const AB = "https://www.americanbanker.com/news/occ-leaves-room-for-stablecoin-yield-maneuvers-in-final-rule";
const CD_OCC = "https://www.coindesk.com/policy/2026/10/21/occ-s-final-rule-to-start-fresh-in-weighing-stablecoin-rewards-against-genius-act-ban";

/* ---------------- eMudhra ---------------- */
const MOZ = "https://blog.mozilla.org/security/2026/10/20/protecting-firefox-users-following-the-compromise-of-emudhra-intermediate-certificates/";
const BUG = "https://bugzilla.mozilla.org/show_bug.cgi?id=2083449";
const HELME = "https://scotthelme.co.uk/eight-bits-of-trust-emudhras-ca-keys-cracked-in-milliseconds/";
const REG = "https://www.theregister.com/security/2026/10/20/indian-certification-authority-emudhras-private-keys-compromised-one-of-them-was-the-number-4/5304312";
const CD_EM = "https://www.coindesk.com/tech/2026/10/21/a-company-that-vouches-for-websites-had-secret-keys-so-weak-that-8-of-them-were-cracked";

/* ---------------- Solana ---------------- */
const BLOCK = "https://www.theblock.co/news/ecosystems/2026-10-21-anzas-alpenglow-goes-live-on-solana-cutting-finality-to-150-milliseconds-421508";
const GALAXY = "https://www.galaxy.com/insights/perspectives/alpenglow-what-we-learned-running-solanas-biggest-consensus-change";
const CD_SOL = "https://www.coindesk.com/tech/2026/10/21/solana-s-alpenglow-its-biggest-network-overhaul-since-2020-goes-live-wednesday";

export default [

/* ---------- 14:50Z BLOCKCHAIN ---------- */
BC({ slug: "solana-takes-its-votes-off-the-chain", kick: "Consensus",
  headline: "Solana takes its votes off the chain",
  dek: "Solana's Alpenglow upgrade went live on Wednesday, Anza said, moving validator votes off the blockchain and targeting finality of about 150 milliseconds. Validators now pay a flat 0.8 SOL ticket each epoch instead of per-vote fees.",
  metaDesc: "Solana's Alpenglow consensus upgrade went live on 21 October, Anza said, replacing on-chain votes with aggregated certificates and targeting 150ms finality.",
  author: "marcus-oyelaran", date: "2026-10-21T14:50:00Z",
  capt: "The back of a server chassis with cooling fans and network cables, in a file photograph.",
  tags: [
    { name: "Blockchain Infrastructure", slug: "blockchain-infrastructure" },
    { name: "Digital Assets", slug: "digital-assets" },
    { name: "Settlement", slug: "settlement" }
  ],
  related: [
    R("/blockchain/validator-economics-institutional-staking/", "Staking"),
    R("/crypto/not-a-security-since-march/", "Regulation"),
    R("/crypto/ninety-one-per-cent-on-the-chain-stripe-built/", "Stablecoins")
  ],
  body: [
    `Solana's Alpenglow upgrade went live on Wednesday, moving validator votes off the blockchain and targeting transaction finality of about 150 milliseconds, according to Anza, the developer that built it. Anza said the new consensus protocol reached mainnet-beta at slot 459,653,000 at about 14:00 UTC, ${L(BLOCK, "The Block reported")}. Finality is the point after which a transaction cannot be reversed.`,
    `The switch came early in epoch 1064. By our reading of a public Solana node, that epoch began at slot 459,648,000 at 13:36 UTC, so the handover came 5,000 slots later. At 15:44 UTC the node listed 666 vote accounts as current and 11 as delinquent. Brennan Watt, Anza's chief executive, called it "the largest, most ambitious blockchain upgrade since 'The Merge'", Ethereum's 2022 switch to proof of stake, according to The Block.`,
    `The two accounts of the starting point differ. Anza put finality before the upgrade at 12.8 seconds, The Block reported, while ${L(CD_SOL, "CoinDesk")}, writing before the switch, said it took about six seconds and that the new target would be roughly 40 times faster. The 150 millisecond figure is Anza's target; The Block reported no measured figure after the switch.`,
    `The mechanism changes how agreement is recorded. Votes are now signed with BLS signatures, a scheme that lets many signatures be combined into one, and aggregated into compact certificates rather than written to the chain as ordinary transactions, ${L(GALAXY, "Galaxy said in a report")} on its experience running a validator on the test network. Proof of History, Solana's built-in clock, retires once the migration completes. Slashing for double voting is "well defined but deliberately not enabled in the first iteration", Galaxy wrote.`,
    `The fault model shifts as well. Galaxy said Alpenglow is built for "20 plus 20": up to 20 per cent of stake acting maliciously plus a further 20 per cent offline. The previous protocol, TowerBFT, tolerated up to 33 per cent malicious stake. Galaxy, one of the larger Solana validator operators, sells staking services, and its account is its own.`,
    `Costs for validators change too. Galaxy estimated that voting cost about 1 SOL a day at 400 millisecond slots and about 2 SOL a day at the current 200 milliseconds; Alpenglow replaces that with a flat validator admission ticket of 0.8 SOL per epoch, which runs about a day. By our arithmetic that is 60 per cent less than 2 SOL a day, the saving CoinDesk also gave. A vote account that cannot cover the ticket at an epoch boundary "is excluded from consensus for that entire epoch", Galaxy said.`,
    `The test network was uneven. It launched in early May with around 50 independent operators and grew to roughly 100, Galaxy said, and was restarted from a fresh genesis block six times. Galaxy describes a migration that failed network-wide and a rollback, though its text is not consistent on the order of events. Validators were asked to run the Agave client for the switch; Firedancer's 26.10 release supports Alpenglow, and the Frankendancer hybrid will not be supported now that it is active.`,
    `The validator base has thinned. CoinDesk, citing Bitwise's staking report, said active validators fell to 659 at the end of September from 696 three months earlier, about 30 per cent fewer than a year before; by our subtraction that is 37 fewer in a quarter. Citing Solana Compass data, it said 69 per cent of SOL's supply was staked, that the smallest group of validators controlling more than a third of stake fell to 18 from 20 over the past year, and that the top ten's share rose to 24.5 per cent from 22.2 per cent.`,
    `Robin Nordnes, chief executive and founder of Raiku, which builds trading infrastructure on Solana, told CoinDesk: "Most of what got counted before was validators voting, and that's off-chain now." His point is that vote transactions, which made up most of Solana's counted activity, no longer appear on chain, so activity figures from before and after the switch are not like for like.`,
    `Why it matters: a flat, lower cost of taking part should help smaller operators, but the concentration figures show where the network starts from, and the first epochs will show how many vote accounts clear the new ticket. Komposite has looked at the economics of running validators in <a href="/blockchain/validator-economics-institutional-staking/">institutional staking</a>, and at how regulators now classify the assets on top, in <a href="/crypto/not-a-security-since-march/">the SEC's March interpretation</a>.`
  ]
}),

/* ---------- 15:10Z CYBERSECURITY ---------- */
CY({ slug: "eight-certificate-authority-keys-were-tiny-numbers", kick: "Web Security",
  headline: "Eight certificate keys that were tiny numbers",
  dek: "Eight eMudhra intermediate certificates had private keys below 256, recoverable almost instantly. Browsers have blocked them and Mozilla is pulling the root, but software that does not check revocation can still be fooled by forgeries.",
  metaDesc: "Mozilla blocked eight eMudhra intermediate certificates whose private keys were integers below 256; eMudhra blames a flawed key-ceremony script.",
  author: "sam-porter", date: "2026-10-21T15:10:00Z",
  capt: "A single metal key on a black background, in a file photograph.",
  tags: [
    { name: "Cybersecurity", slug: "cybersecurity" },
    { name: "Digital Identity", slug: "digital-identity" },
    { name: "Software Supply Chain", slug: "software-supply-chain" }
  ],
  related: [
    R("/cybersecurity/the-support-tool-that-held-the-keys/", "Cybersecurity"),
    R("/cybersecurity/fourteen-hundred-fixes-in-one-month/", "Patching"),
    R("/technology/enterprise-browsers-quiet-standard/", "Browsers")
  ],
  body: [
    `Eight intermediate certificates issued by eMudhra, an Indian certificate authority, had private keys so small that anyone could recover them, letting an attacker issue trusted HTTPS certificates for any website, ${L(MOZ, "Mozilla said")} on Tuesday. A certificate authority vouches for websites' identities; its private key is what makes that vouching unforgeable.`,
    `The keys were integers below 256. "The private keys are effectively all-zeroes apart from the last byte," Dennis Jackson of Mozilla wrote on ${L(BUG, "Mozilla's public bug tracker")}; a P-384 key should be a random number of up to 384 bits. He added that local AI agents he tested "were able to recover the private key on their first attempt with a simplistic prompt". Six of the certificates are for web (TLS) traffic and trusted by Chrome, Mozilla, Microsoft and Apple; two are for code signing and trusted by Microsoft.`,
    `Security researcher Scott Helme ${L(HELME, "wrote")} that he recovered all eight on his laptop, including one that is simply the number 4, by trying at most 255 candidates. The certificates were created on 30 April 2025, which Helme called "a 17 month window" in which anyone examining them could have done the same. Mozilla's post does not report any misuse, and ${L(CD_EM, "CoinDesk")} said no crypto attacks had been reported.`,
    `The response was fast. Mozilla received the report, forwarded by Chrome's root programme, at 20:06 UTC on Saturday 17 October, and had pushed a block through OneCRL, its central revocation list, by 22:59 UTC. It released NSS 3.131.1, its certificate library, removing the root that signed the intermediates, and Firefox 158.0.1 with ESR 115.43.1 and 153.5.1; a further Android release followed at 08:29 UTC on Wednesday. Chrome blocked the certificates the same day, Apple on 19 October and Microsoft on 20 October, CoinDesk reported.`,
    `eMudhra's account is on the same bug. It revoked the eight on 18 October and said the B and C series, built for its US and European operations, "were not put into production except" one, from which no end-entity certificates were issued. On Monday it said a preliminary review found "a flaw in the KGC script", its key-generation ceremony, which created a second, weaker key pair that was used "by mistake" because the key labels were similar. "There were human errors in multiple steps of the process," it wrote. ${L(REG, "The Register")} said eMudhra, which says it has issued more than 60 million certificates, had not answered its questions.`,
    `Mozilla then went further. Citing multiple people recovering the keys independently, it announced the emergency removal of trust in eMudhra's emSign ECC Root CA - G3 to protect software that cannot use revocation. eMudhra replied on the bug that it had ceased issuance under that root, and that about 30,000 certificates, about 97 per cent of them obtained through the automated ACME protocol, need migrating to its RSA root.`,
    `The remaining exposure is outside browsers. Helme wrote that most non-browser clients trust a certificate bundle stored on disk and do not check revocation by default; in his tests curl, Python and Node accepted a forged certificate for api.stripe.com on every Linux and macOS machine he tried, and Windows accepted the chain unless revocation checking was switched on. Devices with frozen firmware, such as routers and printers, "will trust these certificates until expiry, which is July 2039," he wrote.`,
    `Cloudflare, quoted by The Register, said "an attacker can create a forged certificate for any domain", though the attacker would still need to sit between the user and the server. CoinDesk noted that exchange bots, trading scripts and wallet back ends often run on Python, Node or Go. "This is not a crypto-specific issue," Mudit Gupta, chief technology officer of Polygon Labs, told the outlet. "It is a generic issue that can be exploited for man-in-the-middle attacks."`,
    `Why it matters: the browser programmes closed the hole within hours, but revocation only protects software that checks it, so the fix elsewhere is updating certificate bundles and rebuilding container images. Komposite has covered how quickly attackers move on exposed keys and tools, including <a href="/cybersecurity/the-support-tool-that-held-the-keys/">the BeyondTrust support tool</a>, and <a href="/technology/enterprise-browsers-quiet-standard/">the enterprise shift to managed browsers</a>.`
  ]
}),

/* ---------- 15:30Z POLICY ---------- */
PO({ slug: "the-occ-finalises-its-stablecoin-rule-and-keeps-rewards-open", kick: "Stablecoins",
  headline: "The stablecoin rule that will not say what a reward is",
  dek: "The OCC on Wednesday finalised its GENIUS Act rule for stablecoin issuers, effective 18 January 2027. It dropped a proposed presumption against reward arrangements and declined to define interest or yield, leaving each programme to its facts.",
  metaDesc: "The OCC finalised its GENIUS Act stablecoin rule on Wednesday, effective 18 January 2027, dropping a presumption against rewards and leaving yield undefined.",
  author: "jonathan-bright", date: "2026-10-21T15:30:00Z",
  capt: "United States hundred-dollar notes fanned on a table, in a file photograph.",
  tags: [
    { name: "Stablecoins", slug: "stablecoins" },
    { name: "Regulation", slug: "regulation" },
    { name: "Banking", slug: "banking" }
  ],
  related: [
    R("/fintech/the-charter-picks-the-arithmetic/", "Stablecoins"),
    R("/fintech/two-hundred-and-seventy-seven-questions/", "Federal Reserve"),
    R("/fintech/treasury-genius-act-stablecoin-rules/", "Treasury")
  ],
  body: [
    `The Office of the Comptroller of the Currency (OCC), the federal regulator of national banks, on Wednesday finalised its rule implementing the GENIUS Act for payment stablecoin issuers, dropping a proposed presumption against reward arrangements. The rule and the Act take effect on 18 January 2027, ${L(OCC_NR, "the agency said")} in its announcement.`,
    `The rule covers permitted payment stablecoin issuers and foreign issuers under the OCC's jurisdiction, and custody by the banks it supervises. ${L(OCC_BUL, "Bulletin 2026-50")} says most of it sits in a new Part 15 of Title 12 of the Code of Federal Regulations, covering activities, reserve assets, redemption, risk management, audits, custody, applications, revocation and a capital and operational backstop. Anti-money-laundering, Bank Secrecy Act and sanctions rules are left to a separate rulemaking with the Treasury.`,
    `"Today's final rule advances President Trump and Secretary Bessent's vision for American leadership in digital assets," said Jonathan Gould, the Comptroller. "We are providing a clear, practical framework for payment stablecoin innovation, with strong standards for reserve backing, redemption, and risk management." Scott Bessent, the Treasury Secretary, compared the Act to the National Currency Act of 1863 in the same release.`,
    `The contested point is yield. The Act bars issuers from paying holders "any form of interest or yield" solely in connection with holding, using or retaining a stablecoin. The OCC's proposal, published on 2 March, would have presumed that certain arrangements with affiliates and related third parties broke that ban. ${L(OCC_RULE, "The final rule")} says the OCC "has determined to eliminate the rebuttable presumption", and that it "will apply principles of statutory interpretation" to the terms "in light of the facts and circumstances before it", rather than define interest or yield.`,
    `The word "solely" carries much of the weight. The rule says it "is best read under its plain terms to exclude payments made in connection with reasons other than holding, using, or retaining a payment stablecoin", so "payments made for other purposes are not barred". Transaction-based payments that are not interest or yield, or not made solely for holding or use, "would not be prohibited", it says, while the OCC will look through payments made "only nominally for another purpose" to evade the ban.`,
    `It gives no safe harbours. The OCC "declines to presume that rewards programs that predated the GENIUS Act comply", and will judge them the same as later ones. It declined a safe harbour for white-label partners, whose payments "may be more likely to be made on behalf of" an issuer. Payments for bona fide services "generally would not be prohibited". On pending legislation, it says: "Unless and until such legislation passes, the OCC must implement the GENIUS Act's yield prohibition, as enacted."`,
    `The banks' argument is recorded but not adopted. Commenters favouring a strict ban cited reports that deposits "could be reduced by trillions of dollars", the rule notes, particularly at community banks. ${L(AB, "American Banker")} read the final text as leaving room for yield manoeuvres, and ${L(CD_OCC, "CoinDesk")} as a fresh start for weighing rewards programmes against the ban.`,
    `The OCC is one of several agencies writing rules under the Act. Treasury proposed its rules on <a href="/fintech/treasury-genius-act-stablecoin-rules/">18 August</a> and the Federal Reserve on <a href="/fintech/two-hundred-and-seventy-seven-questions/">24 September</a>; CoinDesk reported that the OCC's is the first final rule from a federal banking regulator. The OCC said it will announce separately when it begins accepting applications and waiver requests.`,
    `Why it matters: by declining to define a reward in advance, the OCC has left exchanges, wallet providers and issuers to design programmes at their own risk, with supervision and enforcement setting the boundary case by case. Komposite compared the agencies' proposals in <a href="/fintech/the-charter-picks-the-arithmetic/">"The charter picks the arithmetic"</a>, which noted that none was final at the time.`
  ]
}),

/* ---------- 15:50Z BUSINESS (LEAD) ---------- */
BU({ slug: "spacex-and-tesla-weigh-a-merger-musk-cannot-attend", kick: "Mergers",
  headline: "Two special committees, one conflicted chief executive",
  dek: "SpaceX and Tesla have each formed a special committee of independent directors to consider a combination, Elon Musk told SpaceX's earnings call on Tuesday. No terms are agreed, and on Tesla's side a deal would need a majority of all shares.",
  metaDesc: "Elon Musk said SpaceX and Tesla have formed special committees to weigh a merger, with no terms agreed, as SpaceX reported $14.6bn in third-quarter revenue.",
  author: "tom-kessler", date: "2026-10-21T15:50:00Z",
  capt: "A SpaceX Falcon Heavy rocket lifts off beside a SpaceX hangar in Florida during its 2018 demonstration mission, in a file photograph.",
  tags: [
    { name: "Capital Markets", slug: "capital-markets" },
    { name: "Corporate Strategy", slug: "corporate-strategy" },
    { name: "AI Infrastructure", slug: "ai-infrastructure" }
  ],
  related: [
    R("/technology/eight-billion-for-14-mhz-and-the-carriers-sold-off/", "Spectrum"),
    R("/markets/forty-billion-dollars-on-a-bbb/", "Credit"),
    R("/ai/openai-seeks-thirty-billion-before-anthropic-lists/", "AI")
  ],
  body: [
    `SpaceX and Tesla have each formed a special committee of independent directors to consider combining the two companies, Elon Musk, chief executive of both, said on SpaceX's third-quarter earnings call on Tuesday, according to ${L(FOOL, "a transcript of the call")}. He said the committees have not agreed terms and that he is excluded from their talks.`,
    `"So both SpaceX and Tesla have formed special committees to discuss this idea at the request of shareholders," Musk said. "Because I'm a conflicted party, I can't actually be in the discussions of the special committees." He said "the special committees have not reached agreement on the terms of any transaction", adding: "there's no guarantee that they will." He said: "Do I think it would be a good idea, yes," but added that "it's really up to the special committees of both companies".`,
    `He also set out the bar. "Some people out there assume that a SpaceX and Tesla merger is a certainty," he said. On the Tesla side, "we will need a 50% vote of all shares, not just those who vote, but of all shareholders." Neither company has filed details of the committees. ${L(TSLA_PROXY, "Tesla's proxy statement")} for its 3 December annual meeting, filed on Monday, does not mention them; it does disclose that Tesla's agreed $2bn investment in xAI became a right to SpaceX shares when SpaceX acquired xAI in February.`,
    `Musk sits on both sides at scale. His ${L(SPCX_13G, "Schedule 13G")} on SpaceX, filed in August as of 30 June, reports beneficial ownership of 6.42 billion Class A shares, or 48.4 per cent, counting Class B shares held by his trusts, restricted Class B shares subject to performance conditions and 350 million options, all convertible into Class A. Class B shares carry ten votes each. Tesla's proxy gives him 699.6 million Tesla shares, or 19.8 per cent.`,
    `The results framed the call. SpaceX reported revenue of $14.6bn for the quarter to 30 September, up 161 per cent from $5.6bn a year earlier, and net income of $4.4bn against a net loss of $1.1bn, ${L(SPCX_PR, "according to its earnings release")}. Diluted earnings were 35 cents a share against a loss of 36 cents. Income from operations was $2.8bn and adjusted EBITDA, a non-GAAP measure, $8.8bn. The company's numbers are its own.`,
    SPCX_TABLE,
    `The AI business drove the jump. Revenue in the Super Intelligence segment, which includes xAI's Grok models and the coding company Cursor, rose to $7.6bn from $813m, about 9.3 times by our arithmetic; Cursor, acquired on 14 August at an implied equity value of $60bn, contributed $608m. The segment accounted for $16.4bn of the quarter's $19.6bn capital spending, about 84 per cent by our arithmetic, as nameplate compute reached 1.7 gigawatts. Starlink's Connectivity segment brought in $5.2bn, up 69 per cent, with 13.6 million consumer subscribers paying an average $69 a month.`,
    `The guidance is steeper still. Bret Johnsen, the chief financial officer, said SpaceX expects fourth-quarter capital expenditure of "$35 billion to $40 billion", roughly 1.8 to 2 times the third quarter's by our arithmetic, and "total company revenues in the range of $33 billion to $37 billion for Q1 of 2027", a midpoint about 2.4 times the quarter just reported. He put the backlog at $63bn at 30 September, about $42bn of it expected to be recognised within a year.`,
    `Why it matters: with Musk on both sides, the decision rests with independent directors at each company, and Tesla's threshold of a majority of all shares outstanding, rather than of votes cast, is the figure to watch. Neither company has given a timetable. Komposite has followed SpaceX's spending, including <a href="/markets/forty-billion-dollars-on-a-bbb/">its $40bn chip financing</a> and <a href="/technology/eight-billion-for-14-mhz-and-the-carriers-sold-off/">its 800 MHz spectrum purchase</a>.`
  ]
}),

];
