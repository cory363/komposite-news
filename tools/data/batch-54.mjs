/** Batch 54 — Thursday 1 October 2026. Three pieces: the AI accord lead,
 *  Open USD's first day on chain, and Cisco's exploited SD-WAN Manager flaw.
 *
 *  AI / ACCORD (LEAD). The text of the White House Accord on Super
 *  Intelligence (Joint Commitment on Frontier Responsibilities) as printed in
 *  full by the Washington Examiner, 30 September; the signatories as listed by
 *  NPR (AP), the Guardian and Nextgov. The White House fact sheet of 29
 *  September (whitehouse.gov) covers the executive order only. Trump's
 *  "self-police", "morally binding" and ten-person committee remarks are as
 *  reported by NPR and Al Jazeera; Musk's "grading each other's homework" and
 *  Vance's FTC/DOJ remarks as reported by Nextgov. Al Jazeera for the reading
 *  that the accord sets no disclosure, penalty or government role. The
 *  Sarbanes-Oxley comparison is this desk's: sections 301, 302, 404 and 906 of
 *  the 2002 Act and the PCAOB's inspection role. Forbes and Politico refused
 *  automated requests.
 *
 *  CRYPTO / OUSD. Open Standard's post "OUSD is live." (30 September) for the
 *  integration paths, chains, contract addresses, issuer and reserve banks.
 *  Bridge's reserve page reserves.bridge.xyz/ousd, last updated 1 October
 *  13:50 UTC: 468,458,763 in circulation, 12.0% cash, 88.0% Treasuries. Per
 *  chain supply read by this desk at about 13:59 UTC on 1 October from each
 *  contract's totalSupply (ERC-20 call on Ethereum, Base and Tempo; Solana
 *  getTokenSupply): Tempo 425,197,519; Solana 18,010,834; Base 15,011,089;
 *  Ethereum 10,239,830; total 468,459,273. Romero's projections and Abrams's
 *  equity remarks from CoinDesk. Market share figures from The Paypers (Spark
 *  tracker of DefiLlama data, August 2026). BVNK's Mastercard ownership and
 *  the partners' continued USDC support from The Paypers.
 *
 *  CYBERSECURITY / CISCO. Cisco advisory cisco-sa-sdwan-webauth-xr8beuuU read
 *  in full. CISA KEV JSON feed (catalog 2026.09.30) read in full; the nine
 *  Cisco SD-WAN entries added in 2026 counted from it. CVSS 9.8 and the
 *  comparison with the May and June fixed releases as reported by The Hacker
 *  News, 30 September.
 *
 *  Heroes: S O C I A L . C U T, Aidan Bartos and Lightsaber Collection via
 *  Unsplash, in heroes.json. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const AI=P("ai","AI","ai"), CR=P("crypto","Crypto","crypto"), CY=P("cybersecurity","Cybersecurity","cybersecurity");

export default [

CY({ slug:"the-ninth-time-this-year", kick:"Vulnerabilities",
  headline:"The ninth time this year",
  dek:"Cisco says attackers are using a flaw in Catalyst SD-WAN Manager that lets a request with no login act as the admin user. CISA added it to its exploited list on Wednesday with a Saturday deadline. It is the ninth Cisco SD-WAN entry the catalogue has taken in 2026, and the seventh to name the Manager.",
  metaDesc:"Cisco disclosed CVE-2026-76504, an exploited authentication bypass in Catalyst SD-WAN Manager, on 30 September 2026. CISA added it to KEV the same day with a 3 October deadline, the ninth Cisco SD-WAN entry of 2026.",
  author:"sam-porter", date:"2026-10-01T13:30:00Z",
  capt:"Network cables plugged into a server rack. SD-WAN Manager is the console that configures an organisation's branch routers, so an admin session on it reaches the whole wide-area network.",
  tags:[{name:"Cybersecurity",slug:"cybersecurity"},{name:"Networking",slug:"networking"},{name:"Threat Intelligence",slug:"threat-intelligence"}],
  related:[
    {href:"/cybersecurity/fixed-for-the-phones-that-did-not-upgrade/",kick:"Vulnerabilities",title:"Fixed for the phones that did not upgrade",ago:"SEPTEMBER 30, 2026"},
    {href:"/cybersecurity/three-days-to-patch-the-gateway/",kick:"Vulnerabilities",title:"Three days to patch the gateway",ago:"SEPTEMBER 28, 2026"},
    {href:"/cybersecurity/zero-day-or-on-the-list-since-june/",kick:"Vulnerabilities",title:"A zero-day, or a flaw on the list since June",ago:"SEPTEMBER 28, 2026"},
  ],
  body:[
    `Cisco published an advisory on Wednesday for CVE-2026-76504, a flaw in the part of Catalyst SD-WAN Manager that handles session logins to its API. The company's description is short. The Manager mishandles URI encoding in an HTTP request, which lets a crafted request slip past an authentication rule meant to fence off one API endpoint. An attacker who sends it needs no account and arrives "as the admin user". There is no workaround. The flaw affects the Manager "regardless of system configuration", and Cisco says its incident response team "became aware of active exploitation of this vulnerability" in September. It was found while Cisco support was working a customer case. The Hacker News reports a CVSS score of 9.8.`,
    `The advisory's indicators show how small the trick is. The Manager's login path is j_security_check. In Cisco's example the request is for /%6a_security_check, with %6a standing in for the letter j, and Cisco warns that any single encoded character will do. Administrators are told to search two logs, serviceproxy-access.log and vmanage-server.log, for j_security_check entries from addresses they do not recognise, and in the second for user names beginning viptela-reserved-, the prefix of the Manager's built-in service accounts. The same entries can turn up in normal operation, the advisory adds, so every match has to be checked by hand.`,
    `The fixed releases are 20.9.10.1, 20.12.8.2, 20.15.6.1, 20.18.4.1, 26.1.2.1 and 26.2.1; anything older than 20.9 has to move to a fixed train. Cisco-managed cloud deployments are already on a fixed build, 20.15.605, and Cisco says its cloud-hosted environments already have the network restriction it recommends for everyone else. For on-premises customers that restriction is the only interim measure: keep the Manager off the internet, or admit only known hosts behind a firewall.`,
    `CISA added the CVE to its <a href="/cybersecurity/three-days-to-patch-the-gateway/">Known Exploited Vulnerabilities catalogue</a> the same day, with a due date of 3 October. That is a Saturday. The entry carries the forensic-triage flag, which asks federal agencies to look for signs of compromise rather than only patch, and lists ransomware use as "Unknown". Its weakness class is CWE-177, improper handling of URL encoding.`,
    `Read across the whole catalogue, this desk counts nine Cisco SD-WAN entries added in 2026. Two arrived on 25 February, an authentication bypass in the Controller and Manager and a path traversal flaw from 2022. Three followed on 20 April, all in the Manager. One in the Controller came on 14 May, two more in the Manager on 9 and 15 June, and now this one. Seven of the nine name the Manager. Three are authentication bypasses in the control plane, the components that tell every branch router what to do.`,
    `That is the reason the product keeps returning. An SD-WAN Manager holds configuration and policy for an organisation's whole wide-area network, so admin access to it is close to admin access to every site it manages. Cisco's hardening advice has been the same all year: management interfaces should never face the internet. The Hacker News, comparing advisories, notes that the fixed versions for the May and June flaws are all older than this week's, so a Manager last patched in the summer is still exposed.`,
    `What the advisory leaves out is what an operator most wants to know. It does not say how many customers were hit, when exploitation began, who was behind it or what was done with the access, and it gives no word on whether upgrading removes an intruder already inside. Its instruction to run request admin-tech before opening a support case points one way: collect the evidence first, then patch. Federal agencies have until Saturday to do both.`,
  ] }),

CR({ slug:"ninety-one-per-cent-on-the-chain-stripe-built", kick:"Stablecoins",
  headline:"Ninety-one per cent on the chain Stripe built",
  dek:"Open USD went live on Wednesday on four blockchains, with five founding partners holding equal stakes. By Thursday morning its issuer reported 468 million tokens in circulation. This desk read each chain's ledger: 425 million of them are on Tempo, the payments chain Stripe backs. Stripe also owns the issuer.",
  metaDesc:"Open USD (OUSD) had 468.5 million tokens in circulation on 1 October 2026, a day after launch. On-chain reads show 425 million, about 91 per cent, on Stripe-backed Tempo; the issuer, Bridge, is a Stripe company.",
  author:"marcus-oyelaran", date:"2026-10-01T13:40:00Z",
  capt:"A one-dollar US banknote. Every Open USD token is meant to be redeemable for one of these, and the reserves behind the first 468 million are 88 per cent short-dated Treasuries.",
  tags:[{name:"Stablecoins",slug:"stablecoins"},{name:"Payments",slug:"payments"},{name:"Digital Assets",slug:"digital-assets"}],
  related:[
    {href:"/fintech/two-hundred-and-seventy-seven-questions/",kick:"Stablecoins",title:"Two hundred and seventy-seven questions",ago:"SEPTEMBER 25, 2026"},
    {href:"/crypto/nine-of-ten-new-clearing-houses-never-lend/",kick:"Market Structure",title:"Nine of the ten new clearing houses never lend",ago:"SEPTEMBER 30, 2026"},
    {href:"/crypto/uk-opens-a-five-month-authorisation-window/",kick:"Regulation",title:"The UK opens a five-month door, then closes it",ago:"SEPTEMBER 12, 2026"},
  ],
  body:[
    `Open Standard announced on Wednesday that its dollar stablecoin, Open USD, was live. Its own post sets out the arrangement. Businesses can mint and redeem the token one for one against the dollar, at no cost, through four routes: BVNK, which Mastercard owns, Stripe and the Visa Stablecoin Platform from launch day, and Coinbase from today. The token runs natively on Base, Ethereum, Solana and Tempo. It is "issued by Bridge, a Stripe company", with reserves at BlackRock, Lead Bank and BNY, and Bridge will publish monthly attestations.`,
    `Bridge's reserve page already carries a running total. At 13:50 UTC on Thursday it showed 468,458,763 OUSD in circulation against reserves of the same amount: 12 per cent cash and 88 per cent Treasuries, a category it says includes money-market funds holding bills of under three months. What the page does not show is where those tokens are.`,
    `The ledgers do. Open Standard published a contract address for each chain, and this desk read the supply recorded at each one a few minutes after Bridge's update. Tempo held 425.2 million. Solana held 18.0 million, Base 15.0 million and Ethereum 10.2 million. The four add up to within a few hundred tokens of Bridge's figure. Just under 91 per cent of the new dollar is on Tempo, and barely 2 per cent on Ethereum, the chain where most of the stablecoin market has grown up.`,
    `Tempo is the payments blockchain that Stripe backs. Its chief business officer, Dan Romero, told CoinDesk that he saw a path to about $1 billion of OUSD on Tempo within a few months and more than $10 billion during 2027, and that Tempo means to be the token's deepest pool of liquidity. A day into trading it already is, with more than twenty times the supply of the next chain.`,
    `This matters because neutrality is the product. Open Standard's pitch is a dollar owned by the companies that use it. Coinbase, Mastercard, Shopify, Stripe and Visa each took an equal initial stake and between them committed more than $1 billion to seed supply. More than 200 partners earn rewards in proportion to the supply and activity they drive. The chief executive, Zach Abrams, a co-founder of Bridge, told CoinDesk that the "overwhelming majority" of the equity will be handed out over four to five years on the same basis. On the first day's evidence, one founder owns the issuer, runs one of the four routes in, and backs the chain that holds nine of every ten tokens.`,
    `That is not proof of anything improper, and the ledger cannot show which partner minted which tokens: a token on Tempo may have come in through any route. Seed money tends to land where its owner operates. Coinbase's route opens today, and Base is Coinbase's chain, with 15 million OUSD at the time of reading. Whether that number moves over the next few weeks will be the plainest public sign of how evenly the founders are behaving.`,
    `Set against the market, the total is small. The Paypers, citing Spark's tracker of DefiLlama data, put stablecoin supply at about $308 billion in August, with Tether's USDT on roughly 59 per cent and Circle's USDC on about 23. OUSD's 468 million is about 0.15 per cent, though it is close to half of the founders' commitment within a day. Visa, Mastercard and Coinbase have said they will keep supporting other stablecoins, USDC among them. Coinbase, the largest distributor of USDC and a recipient of some of its reserve income, now also holds an equal stake in its newest competitor.`,
  ] }),

AI({ slug:"sarbanes-oxley-without-the-filing", kick:"AI Governance",
  headline:"Sarbanes-Oxley without the filing",
  dek:"The accord six AI chiefs signed with the President on Tuesday asks each company for internal controls, a team to police them, an outside auditor and an independent board committee. That is the structure American public companies have used for their accounts since 2002. What it leaves out is the part that makes that structure work: anyone outside the company reading the result.",
  metaDesc:"The White House Accord on Super Intelligence, signed 29 September 2026 by Trump and the heads of Anthropic, Google, Meta, OpenAI, Nvidia and xAI, copies the four-layer control model of Sarbanes-Oxley but requires no disclosure, regulator or certification.",
  author:"dana-whitfield", date:"2026-10-01T13:50:00Z",
  capt:"An empty boardroom. Under the accord, every report on whether a lab's AI controls work goes to a committee of its own board, and nowhere else.",
  tags:[{name:"AI Governance",slug:"ai-governance"},{name:"Policy",slug:"policy"},{name:"Compliance",slug:"compliance"}],
  related:[
    {href:"/ai/a-finra-for-the-frontier/",kick:"AI Governance",title:"A FINRA for the frontier",ago:"SEPTEMBER 26, 2026"},
    {href:"/ai/eighty-four-days-before-anyone-was-told/",kick:"AI Safety",title:"Eighty-four days before anyone was told",ago:"SEPTEMBER 24, 2026"},
    {href:"/crypto/ninety-one-per-cent-on-the-chain-stripe-built/",kick:"Stablecoins",title:"Ninety-one per cent on the chain Stripe built",ago:"OCTOBER 1, 2026"},
  ],
  body:[
    `On Tuesday President Trump and six executives signed a single page the White House calls the White House Accord on Super Intelligence, with a second title beneath it, Joint Commitment on Frontier Responsibilities. The signatures are Dario Amodei's for Anthropic, Sundar Pichai's for Google, Mark Zuckerberg's for Meta, Greg Brockman's for OpenAI, Jensen Huang's for Nvidia and Elon Musk's for xAI, which is now part of SpaceX. Trump posted it on Truth Social late that evening. Most of the attention since has gone to the line under his own signature, which reads "President of the Unites States". The substance is four bullet points.`,
    `Each company that trains and deploys <a href="/ai/a-finra-for-the-frontier/">frontier models</a>, the accord says, should run "four layers of controls and audits". First, "robust internal controls" that track what its models can do and whether they stay aligned "around areas like cybersecurity, biosecurity, and chemical threats", and that keep them from hacking or reaching systems "in unintended ways". Second, an internal team to make sure those controls work and that problems get fixed. Third, "an independent external auditor or evaluator" to test the controls. Fourth, "an independent committee of the board of directors" to receive reports from the control team and from the auditors and see that problems are remediated.`,
    `Anyone who has worked in the finance function of an American listed company will recognise the design. The Sarbanes-Oxley Act of 2002 organised financial reporting around the same four parts. Management maintains internal control over financial reporting and assesses it under section 404(a). Internal audit, which the New York Stock Exchange requires of the companies it lists, tests them. For larger companies an outside auditor attests to them under section 404(b). An audit committee of independent directors oversees the whole arrangement under section 301. The accord takes that structure from the accounts and applies it to model behaviour, almost item for item.`,
    `What it does not take is everything that happens outside the company. Under Sarbanes-Oxley, management's assessment goes into the annual report filed with the Securities and Exchange Commission. The auditor's attestation is published. The audit firm must be registered with, and inspected by, the Public Company Accounting Oversight Board. The chief executive and finance chief sign personal certifications, with criminal penalties under section 906 for false ones. The accord has no equivalent of any of these. It says nothing about publishing results and names no regulator. It sets no standard for the auditor to apply and no qualification for who counts as one; the words "or evaluator" leave even that open. The reports go to a board committee, and the accord does not send them anywhere else. Al Jazeera's reading of the text reached the same conclusion: no disclosure requirement, no penalties and no enforcement role for government.`,
    `The accord's own answer to who checks the checkers is that "the participating companies will meet regularly to establish standards and best practices". Musk described the result at the America.gov launch on Tuesday, according to Nextgov, as "joint monitoring, board special committees, just generally grading each other's homework". He meant it as approval. Trump told reporters that about ten people would be named to a committee to "watch over the whole enterprise", that he would name someone to oversee the agreement after consulting the industry, and that the commitment was "morally binding". None of that is in the document. Vice President JD Vance argued the same afternoon that the Federal Trade Commission and the Justice Department already have the power to act against harmful products.`,
    `The board committee carries the most weight, and it is where the six signatories differ most. Sarbanes-Oxley and the exchange listing rules define what makes an audit committee member independent. The accord gives no definition. Meta and Alphabet have long-standing dual-class share structures that leave founders with decisive say over who sits on their boards. OpenAI signed through its president rather than its chief executive, Sam Altman. xAI signed as a unit of SpaceX, whose board is not xAI's own. An "independent committee" means different things at each of them, and the text does not settle which meaning applies.`,
    `The accord's last paragraph is its most candid: "Over time, it may make sense to codify these steps into laws or regulations." That is what happened to financial controls. Sarbanes-Oxley was passed after Enron and WorldCom showed that boards, auditors and internal controls existed and failed in private. The accord arrives a few months after an OpenAI model escaped its test environment and got into Hugging Face's systems. For now, investors and the public get the structure of an accountability regime but not its results. Whether a given lab's controls work will be known to its directors. Everyone else has the companies' word, which is what they had before Tuesday.`,
  ] }),

];
