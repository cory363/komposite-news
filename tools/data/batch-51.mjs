/** Batch 51 — Monday 28 September 2026. Three pieces: the crypto lead and two
 *  cybersecurity pieces that share one federal directive.
 *
 *  CRYPTO (LEAD). The fund's size is read off Bitget's own Protection Fund
 *  page (bitget.com/protection-fund), whose structured data reads "5500 BTC"
 *  with dateModified 2026-09-28T13:03:58Z; the page says the dollar value is
 *  based on the entry price at 00:00 UTC each day. The wallet address was not
 *  found in the page source and the holding was not checked on-chain. The
 *  incident time and the withdrawal schedule are Bitget's own support
 *  articles 12560603896025 (posted 24 September 23:30) and 12560603896185
 *  (BTC processing notice, 28 September 08:25). Loss figures: $351.6m is the
 *  initial figure carried everywhere on 24-25 September; $387.5m is quoted
 *  from Gracy Chen by The Record (Jonathan Greig, 25 September) and by
 *  Electronic Payments International via Yahoo Finance (28 September), which
 *  gives Bitget's reason for the revision as "latest onchain tracing and
 *  classification of transactions"; $390.06m is The Hacker News's figure
 *  (Ravie Lakshmanan, 25 September). Chen's quotations on the mechanism are
 *  CoinDesk's (Omkar Godbole, 25 September); on attribution and on Bybit,
 *  The Record's. Chains and assets are The Hacker News and CryptoSlate; the
 *  $339,100 of frozen stablecoins and the $1.04bn North Korean total are The
 *  Hacker News's; the "over $1 billion" of proprietary assets is CryptoSlate's
 *  relay of Chen. Every bitcoin price is Coinbase Exchange's public daily
 *  candle API (BTC-USD, UTC days) and its spot endpoint read at 13:04 UTC on
 *  28 September ($83,393.99). Threshold arithmetic and day counts are this
 *  desk's: 270 daily closes from 1 January to 27 September 2026. Blockonomi
 *  relays a Chen remark about a $300m baseline; this desk could not see the
 *  original and does not use it. Invezz refused automated requests.
 *
 *  CYBERSECURITY / NETSCALER. CISA's KEV catalogue JSON, catalogVersion
 *  2026.09.27, released 21:30 UTC on 27 September: both CVE entries, dates,
 *  due dates and the forensicTriage flag; the whole-catalogue arithmetic on
 *  remediation windows and on Citrix entries is this desk's. The 88771 entry's
 *  notes point to the NVD page for 88772 — both entries carry the same NVD
 *  link. NVD's CVE API supplies descriptions, fixed builds and both CVSS
 *  scores (Citrix's v4.0 9.5 for each; NVD's own v3.1, 9.8 and 8.1). BOD 26-04
 *  is read in full on cisa.gov. Citrix's bulletin (the community.citrix.com
 *  URL for CVE-2026-88771 through -88778 given in CISA's notes) returned 403
 *  and the support-site article renders only in a browser; the count of eight
 *  CVEs rests on the bulletin's own title. watchTowr's role is The Hacker
 *  News's report.
 *
 *  CYBERSECURITY / FBI. The FBI's statement is quoted as carried by
 *  Cybersecurity Dive (Eric Geller, 23 September) and the Associated Press
 *  (Eric Tucker, 23 September). ShinyHunters' claims are as carried by
 *  Cybersecurity Dive and the AP; the 5,000 sample records are The Record's.
 *  The zero-day claim is the group's, via Cybersecurity Dive. Oracle's
 *  Security Alert for CVE-2026-35273 and CISA's KEV entry for it are read at
 *  source. fbijobs.gov served a bot challenge to this desk on Monday, so the
 *  portal's status was not established. SecurityWeek was not read.
 *
 *  Heroes: Lu, Kirill Sh and MIKE STOLL via Unsplash, in heroes.json. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const CR=P("crypto","Crypto","crypto"), CY=P("cybersecurity","Cybersecurity","cybersecurity");

export default [

CY({ slug:"zero-day-or-on-the-list-since-june", kick:"Data Breach",
  headline:"A zero-day, or a flaw on the list since June",
  dek:"ShinyHunters says it broke into the FBI's jobs portal with an unknown PeopleSoft flaw. The PeopleSoft flaw it is known to use has been on the federal must-patch list since 12 June, with a deadline three days later. Either answer is awkward, and the FBI has not yet said whose server it was.",
  metaDesc:"ShinyHunters claims a PeopleSoft zero-day breach of FBIJobs.gov. CVE-2026-35273, a PeopleSoft flaw the group already exploits, was added to CISA's KEV list on 12 June 2026 with a 15 June deadline.",
  author:"sam-porter", date:"2026-09-28T12:50:00Z",
  capt:"Rows of numbered steel card drawers in a records room. An applicant file is the most complete document most people ever hand to an employer, and a hiring portal is where it lives.",
  tags:[{name:"Cybersecurity",slug:"cybersecurity"},{name:"Threat Intelligence",slug:"threat-intelligence"},{name:"Procurement",slug:"procurement"}],
  related:[
    {href:"/cybersecurity/three-days-to-patch-the-gateway/",kick:"Vulnerabilities",title:"Three days to patch the gateway",ago:"SEPTEMBER 28, 2026"},
    {href:"/cybersecurity/the-breach-came-through-a-known-vpn-flaw/",kick:"Data Breach",title:"The breach came through a known VPN flaw",ago:"SEPTEMBER 16, 2026"},
    {href:"/cybersecurity/the-request-came-from-a-real-government-domain/",kick:"Fraud",title:"The request came from a real government domain",ago:"SEPTEMBER 14, 2026"},
  ],
  body:[
    `ShinyHunters has given the FBI a week. The extortion group says it holds "very sensitive data on almost ALL FBI Agents and individuals who filed an application with the FBI for a job", taken through FBIJobs.gov, and it has demanded that the bureau "correct or simply remove" passages about the group in a public advisory it issued in May. "This is not a ransom, coercion, or extortion," the group added, according to the Associated Press. The demand was published in the middle of last week, which puts its deadline in this one.`,
    `The FBI's own account is narrower. "The FBI is aware of a cyber-criminal enterprise group claiming a compromise of the FBIJobs.gov portal and alleged impact to FBI employee personally identifiable information," the bureau said. "While the point of breach is still undetermined—whether a third-party or the FBI's enterprise—we are actively and aggressively investigating this matter and working closely with those third-party providers that support FBIJobs.gov to mitigate any and all risk." The group has handed about 5,000 sample records to reporters, The Record reports. The bureau has not confirmed that any data was taken.`,
    `The detail worth holding onto is the route in. ShinyHunters told reporters it used a zero-day: a flaw in Oracle's PeopleSoft human-resources software that nobody else knew about. That is possible. It is also the most flattering account available to both parties, because a zero-day is the one kind of breach for which nobody is at fault for failing to patch.`,
    `The PeopleSoft flaw the group is already known to exploit is not a zero-day. Oracle published a Security Alert for CVE-2026-35273 in June: a vulnerability in PeopleSoft PeopleTools, versions 8.61 and 8.62, that is "remotely exploitable without authentication" and "may result in remote code execution". CISA added it to its Known Exploited Vulnerabilities catalogue on 12 June, described it as allowing "an unauthenticated attacker to obtain takeover", and marked its use in ransomware campaigns as known. Cybersecurity Dive reports that ShinyHunters had already exploited it before the FBI incident.`,
    `The date on that entry matters. CISA issued Binding Operational Directive 26-04 on 10 June, replacing the regime that had governed the catalogue since 2021, which in practice gave agencies 21 days, with timelines as short as three days. The PeopleSoft entry went into the catalogue two days later with a due date of 15 June. It was among the first flaws federal civilian agencies were required to fix under the new clock. <a href="/cybersecurity/three-days-to-patch-the-gateway/">The same clock now runs out on two Citrix flaws on Wednesday</a>.`,
    `So the two possibilities are these. If ShinyHunters has a genuinely new PeopleSoft flaw, it is not in the catalogue, no deadline applies to it anywhere, and every PeopleSoft installation in government and on campus is exposed to a group that has shown it will use one against the FBI. If the flaw is CVE-2026-35273, then a system handling FBI applicant files was running a vulnerability that federal agencies were ordered to remove more than three months ago.`,
    `That second case is where the FBI's wording starts to matter. "Whether a third-party or the FBI's enterprise" is not an idle distinction under the directive. BOD 26-04 binds federal civilian agencies, and it says in terms that "unless directed by the governing procurement contract, this Directive does not apply to contractors". Agencies are told to review their contracts and to obtain compliance from cloud providers, but a portal run by a vendor is patched on the vendor's schedule unless someone wrote the government's schedule into the contract. <a href="/cybersecurity/the-breach-came-through-a-known-vpn-flaw/">Japan's Digital Agency lost 246,000 records this month</a> through a remote-access device whose flaw was neither new nor rated critical. The known flaw in the third party's box is the most ordinary breach there is.`,
    `None of that establishes what happened. The FBI has not said which system was entered, which vulnerability was used, or who operates the servers behind the portal, and FBIJobs.gov served this desk a bot challenge rather than a page on Monday. The cost of the answer is what makes it worth waiting for. Cynthia Kaiser, a former FBI cybersecurity official now at Halcyon, told Cybersecurity Dive that "foreign actors could use the information to target FBI employees and their families for intelligence collection". An applicant file carries the history an investigator would otherwise spend months assembling.`,
    `The question for this week is not whether the bureau edits its May advisory. It is whether the flaw has a number, and whether that number was on the list.`,
  ] }),

CY({ slug:"three-days-to-patch-the-gateway", kick:"Vulnerabilities",
  headline:"Three days to patch the gateway",
  dek:"CISA put two actively exploited NetScaler flaws on its must-patch list on Sunday evening, with a Wednesday deadline and a forensic check attached. It is the fourth NetScaler entry in 32 days. The three-day window is new this year, and September has already brought more additions to the catalogue than any other month of 2026.",
  metaDesc:"CISA added Citrix NetScaler CVE-2026-88771 and CVE-2026-88772 to its KEV catalogue on 27 September 2026 with a 30 September deadline, the fourth NetScaler entry since 26 August.",
  author:"sam-porter", date:"2026-09-28T13:00:00Z",
  capt:"Fibre patch leads plugged into the front of a switch in a data-centre rack. A NetScaler sits at the edge of this kind of equipment, where remote workers and outside traffic enter, which is why a flaw in one is an entry point rather than a local fault.",
  tags:[{name:"Cybersecurity",slug:"cybersecurity"},{name:"Networking",slug:"networking"},{name:"Compliance",slug:"compliance"}],
  related:[
    {href:"/cybersecurity/zero-day-or-on-the-list-since-june/",kick:"Data Breach",title:"A zero-day, or a flaw on the list since June",ago:"SEPTEMBER 28, 2026"},
    {href:"/cybersecurity/the-breach-came-through-a-known-vpn-flaw/",kick:"Data Breach",title:"The breach came through a known VPN flaw",ago:"SEPTEMBER 16, 2026"},
    {href:"/cybersecurity/an-ai-agent-logged-in-then-kept-looking/",kick:"AI Security",title:"An AI agent logged in, then kept looking",ago:"SEPTEMBER 17, 2026"},
  ],
  body:[
    `At 21:30 UTC on Sunday the Cybersecurity and Infrastructure Security Agency published version 2026.09.27 of its Known Exploited Vulnerabilities catalogue. It added two flaws in Citrix <a href="/cybersecurity/patched-by-wednesday-rebooting-by-friday/">NetScaler ADC and NetScaler</a> Gateway, the appliances that sit at the edge of a network and let remote users and outside traffic in. Both are marked as exploited in the wild. Both carry a due date of Wednesday 30 September, and both carry a flag that no catalogue entry carried before July: forensic triage required.`,
    `The first, CVE-2026-88771, is an input validation flaw that "could allow an unauthenticated attacker to execute arbitrary commands", in CISA's wording. The second, CVE-2026-88772, is a memory-buffer flaw that can lead to <a href="/cybersecurity/fixed-in-july-explained-on-wednesday-attacked-on-thursday/">remote code execution</a> or denial of service. Fixed builds are 14.1-73.37 and 13.1-64.23, with separate numbering for the FIPS editions. Citrix scores both 9.5 out of 10 under version 4 of the scoring system. NVD, scoring under version 3.1, gives the first 9.8 and the second 8.1, rating the second's attack complexity high. The researchers at watchTowr were first to report exploitation, according to The Hacker News.`,
    `Citrix's bulletin covers CVE-2026-88771 through CVE-2026-88778, which is eight identifiers, two of which CISA has listed. The bulletin itself refused automated requests from this desk. One clerical point for anyone scripting against the catalogue: CISA's entry for 88771 links to the NVD page for 88772. Both entries point to the same page.`,
    `The pattern is the story. NetScaler has been added to the catalogue five times this year: on 30 March, 26 August, 9 September and now twice on 27 September. Four of those five came in the last 32 days. Citrix products account for 26 entries in the catalogue in all.`,
    `The deadline is the other half. Through 2025 a KEV listing gave federal civilian agencies 21 days to remediate in almost every case; the median window was 21 days in each of 2023, 2024 and 2025. Binding Operational Directive 26-04, issued on 10 June, revoked that regime and replaced it with timelines keyed to whether an asset is exposed to the internet, whether exploitation can be automated and how much control it gives an attacker. Where an entry carries the forensic flag, the directive requires agencies to "complete remediation or mitigation action within the timeline (three days) and carry out a forensic triage of the asset to assess whether the system is compromised". The directive gives its reason plainly: attackers' "use of AI may further narrow the time defenders have to react between patch release and possible exploitation".`,
    `The catalogue shows the change arriving in steps. The median window on entries added in January and February was 21 days; from March to May it was 14; from June to September it has been three. September has brought 41 additions so far, more than any other month this year. An agency security team that once had three weeks per entry now has three days, and gets more entries.`,
    `The forensic requirement is what makes Wednesday hard. A patch closes the door; it says nothing about who came through it before it was closed. CISA's notes tell agencies to run Citrix's indicators of compromise in the NetScaler console and to follow Citrix's published steps for appliances suspected of compromise. For an appliance exploited before a fix existed, the second task is the larger one, and three days is the time allowed for both.`,
    `The deadline binds only federal civilian agencies. The directive excludes national security systems, and "unless directed by the governing procurement contract, this Directive does not apply to contractors". Everyone else running a NetScaler, which is most large companies and a great many state and local governments, has the same exposure and no deadline at all. <a href="/cybersecurity/zero-day-or-on-the-list-since-june/">The FBI is finding out this week what that gap can cost</a>.`,
  ] }),

CR({ slug:"the-cover-is-priced-in-bitcoin", kick:"Security",
  headline:"The cover is priced in bitcoin",
  dek:"Bitget says the $387.5m taken from its hot wallets falls within its user protection fund, and withdrawals began reopening on Monday. The fund is 5,500 bitcoin, not dollars. Below $70,455 it no longer covers the loss, and bitcoin closed below that on 126 of this year's 270 days, most recently on 19 August.",
  metaDesc:"Bitget's protection fund holds 5,500 BTC, worth about $459m on 28 September 2026 against a $387.5m hack loss. It stops covering the loss below $70,455, a level bitcoin closed under on 126 days in 2026.",
  author:"marcus-oyelaran", date:"2026-09-28T13:10:00Z",
  capt:"An open vault door in polished brass, the corridor behind it dark. A reserve is only as large as the thing it is held in, and this one is held in an asset that has moved nearly 15 per cent this month.",
  tags:[{name:"Digital Assets",slug:"digital-assets"},{name:"Cybersecurity",slug:"cybersecurity"},{name:"Custody",slug:"custody"}],
  related:[
    {href:"/blockchain/twenty-eight-million-on-the-day-the-price-broke/",kick:"Digital Assets",title:"Twenty-eight million on the day the price broke",ago:"SEPTEMBER 24, 2026"},
    {href:"/crypto/sixty-one-million-of-the-one-and-a-half-billion/",kick:"Enforcement",title:"Sixty-one million of the one and a half billion",ago:"SEPTEMBER 15, 2026"},
    {href:"/cybersecurity/three-days-to-patch-the-gateway/",kick:"Vulnerabilities",title:"Three days to patch the gateway",ago:"SEPTEMBER 28, 2026"},
  ],
  body:[
    `Bitget reopened bitcoin withdrawals at 08:00 UTC on Monday, four days after its security systems detected unauthorised transfers out of its hot wallets at 18:31 UTC on 24 September. Ether follows on Tuesday, tether on Wednesday, and everything else, including fiat and peer-to-peer trading, on 2 October, according to the schedule on the exchange's own support site. By 08:25 it had posted a second notice asking users to be patient with withdrawals stuck "Under Review", which it put down to slow bitcoin block times.`,
    `The reassurance underneath the schedule is a single sentence from the chief executive, Gracy Chen: "The full amount of this loss falls within the coverage of Bitget's User Protection Fund, which currently holds over $464 million." It is true. It is also a sentence with a price in it, and the price is not fixed.`,
    `Start with the loss, because there are three figures in circulation. The first, $351.6m, was the number everyone printed on Thursday and Friday. Chen then gave $387.5m, and Bitget's revision cited the "latest onchain tracing and classification of transactions", according to Electronic Payments International. The Hacker News puts the total transferred to attacker-controlled addresses at $390.06m. This piece uses the company's own revised figure, $387.5m. The attacker did not take private keys, Chen said: they "compromised a critical backend system within our wallet infrastructure, used it to spoof transaction data, and triggered our authorization process to move funds out."`,
    `Now the fund. Bitget's Protection Fund page lists its holdings as 5,500 BTC, updated on Monday, and says the dollar value shown is based on bitcoin's price at midnight UTC each day. It is not a dollar reserve. Chen's "$464 million" is 5,500 multiplied by roughly $84,400, which is where bitcoin traded on the day of the hack. Coinbase's daily data has it closing 24 September at $84,385.46, a fund value of $464.1m.`,
    `At 13:04 UTC on Monday, with bitcoin down on <a href="/blockchain/twenty-eight-million-on-the-day-the-price-broke/">the same rising-yield, rising-oil morning that has weighed on it since last week</a>, Coinbase's spot price was $83,393.99. The fund was worth $458.7m. The cushion over the loss was $71.2m.`,
    `Divide the loss by the holding and you get the number that matters: $70,454.55. Above that bitcoin price, the fund covers the hack. Below it, it does not. Bitcoin would need to fall 15.5 per cent from Monday's price to get there, and September alone has seen closes as low as $75,584 and as high as $86,595. That is a range of 14.6 per cent in one month.`,
    `The year gives a blunter answer. Of the 270 daily closes from 1 January to 27 September, 126 were below $70,455, and the most recent was 19 August, five and a half weeks ago. Bitcoin's lowest close of the year was $58,523.93 in June; at that price the fund would have been worth $321.9m, about $66m short of the loss. Using the smaller $351.6m figure, the threshold is $63,927, and bitcoin closed below that on 48 days this year, most recently on 16 August.`,
    `There is a second mismatch, and it runs the other way. The loss was not taken in bitcoin. The attacker moved ether, XRP, BNB, AVAX, USDT and USDC across Ethereum, the XRP Ledger, Arbitrum, Avalanche, Optimism, BNB Chain and Base. The stablecoin share of the hole is fixed in dollars; the rest moves with its own tokens, which tend to move with bitcoin. A fund in one asset set against a loss in six is a hedge only roughly, and the part that is fixed in dollars is the part it hedges worst. Circle and Tether have frozen $339,100 of stablecoins linked to the theft, The Hacker News reports, which is less than a tenth of 1 per cent of it.`,
    `None of which means Bitget cannot pay. Chen has said the company holds more than $1bn of its own assets beyond the fund, according to CryptoSlate. She has pointed to Bybit, which was drained of $1.5bn last year and stayed open: "If Bybit can hold on [after] a $1.5 billion loss, we can definitely hold on to a $350 million+ loss," she told The Record. The point is narrower. "Falls within the coverage" is a statement about one day's bitcoin price. Held in bitcoin, the fund's cover goes up and down with every close.`,
    `The attribution is not settled, but it is consistent. Chen told The Record that "IP addresses, behavioral patterns and on-chain signatures indicated that the attack is tied to North Korean-linked hacker groups", and researchers have linked the laundering to the TraderTraitor cluster behind the Bybit theft. If that holds, The Hacker News's tally puts North Korea at $1.04bn stolen this year. <a href="/crypto/sixty-one-million-of-the-one-and-a-half-billion/">As this desk noted this month</a>, what gets recovered from such thefts tends to be measured in tens of millions, not hundreds.`,
    `Bitget has not said how the fund will be drawn, whether any of the bitcoin will be sold, or at what price the loss will be booked against it. Until it does, the most precise description of its cover is not a dollar figure. It is a bitcoin price, $70,455, and a count of how often this year the market has been below it.`,
  ] }),

];
