/** Batch 53 — Wednesday 30 September 2026. Three pieces: the clearing-house
 *  lead, Apple's exploited CoreGraphics flaw, and the CFTC's Cash FX complaint.
 *
 *  CRYPTO / CLEARING (LEAD). The Commission's orders of registration for
 *  Coinbase Clearing LLC and Quanta Clear, Inc., both dated 28 September 2026,
 *  read in full from cftc.gov (the operative page of each is an image and was
 *  read as one). The register of clearing organizations is the CFTC's own
 *  Industry Filings table, read by this desk on the morning of 30 September:
 *  26 organizations listed as Registered, 12 as Pending Registration. The
 *  dates in that table are the table's own and in some rows record a status
 *  change rather than first registration, which the piece says. The
 *  definition of "fully collateralized position" is quoted from 17 CFR 39.2
 *  via the eCFR. Coinbase's rulebook is Exhibit A-2 to its application as
 *  posted by the CFTC; later amendments are referred to in the order but not
 *  published, so the piece says the posted version. Molly Abraham's words are
 *  as quoted by Crowdfund Insider (Omar Faridi, 29 September); Coinbase's own
 *  blog refused automated requests. The November 2025 application date is
 *  as reported by Crowdfund Insider from CFTC records; the application cover
 *  sheet is a scanned image with no legible date. The 19 registered DCOs of
 *  December 2024 are Finance Magnates' count at the time.
 *
 *  CYBERSECURITY / APPLE. CISA's KEV JSON feed (catalog 2026.09.29), entry
 *  CVE-2026-86950, read in full. Apple's security notes 149226 (iOS 26.7.1),
 *  149228 (macOS Tahoe 26.7.1) and 149229 (macOS Sequoia 15.8.1), all dated
 *  28 September, read in full; Apple's security releases page for the list of
 *  28 September updates; notes 149034 (iOS 27) and 149035 (macOS Golden Gate
 *  27) searched for the CVE and not found.
 *
 *  FINTECH / CASH FX. CFTC Release 9304-26 and the complaint, CFTC v. Cash FX
 *  Group S.A. et al., No. 3:26-cv-02573 (M.D. Fla., filed 24 September 2026),
 *  read from cftc.gov. All figures are the complaint's allegations.
 *
 *  Heroes: Aedrian Salazar, Sam Grozyan and Jason Leung via Unsplash, in
 *  heroes.json. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const CR=P("crypto","Crypto","crypto"), CY=P("cybersecurity","Cybersecurity","cybersecurity"), FT=P("fintech","Fintech","fintech");

export default [

FT({ slug:"nine-fifty-raised-four-oh-six-lost", kick:"Enforcement",
  headline:"Nine hundred and fifty million raised, twenty-seven from Americans",
  dek:"The CFTC's complaint against Cash FX puts $950 million into a forex pool that promised up to 15 per cent a week from traders, bots and artificial intelligence. Americans put in at least $27 million of it. The loss the Commission alleges is $406 million, and the scheme it describes ended almost three years before the suit.",
  metaDesc:"The CFTC sued Cash FX Group and four others on 24 September 2026 over a $950 million forex Ponzi scheme. The complaint says US residents paid at least $27 million and participants lost at least $406 million.",
  author:"elena-vasquez", date:"2026-09-30T14:30:00Z",
  capt:"Banknotes from several countries spread across a table. The complaint describes a pool that took money from more than 400,000 accounts, fewer than 6,100 of them in the United States.",
  tags:[{name:"Fraud",slug:"fraud"},{name:"Enforcement",slug:"enforcement"},{name:"Regulation",slug:"regulation"}],
  related:[
    {href:"/crypto/the-cover-is-priced-in-bitcoin/",kick:"Security",title:"The cover is priced in bitcoin",ago:"SEPTEMBER 28, 2026"},
    {href:"/fintech/realtime-fraud-model-sharing/",kick:"Fintech",title:"Banks start sharing fraud signals at network speed",ago:"JULY 14, 2026"},
    {href:"/crypto/nine-of-ten-new-clearing-houses-never-lend/",kick:"Market Structure",title:"Nine of the ten new clearing houses never lend",ago:"SEPTEMBER 30, 2026"},
  ],
  body:[
    `The Commodity Futures Trading Commission's headline number is $950 million. Its release says the defendants solicited "over $950 million from the public, including individuals in the United States", for a pool that was supposed to trade retail foreign exchange. The complaint, filed on 24 September in the Middle District of Florida, puts the American part of that in a single clause: at least $27 million, from more than 6,000 accounts owned by US residents, out of more than 400,000 accounts in all.`,
    `That is under 3 per cent of the money. It is the reason the case is in a Florida court: two of the individual defendants are American, one in Oregon and one in Florida, and the pool took American money. But the scheme the complaint describes was international, run through a Panamanian company, Cash FX Group S.A., which the complaint says was "legally dissolved and liquidated in October 2022" and kept operating anyway. It "has never been registered with the Commission".`,
    `The pitch is familiar and the vocabulary is current. Cash FX told participants, the complaint says, that it would trade "through a combination of professional traders, proprietary 'bots,' and artificial intelligence", and certain defendants "falsely promised pool participants up to 15% weekly returns". The Commission's enforcement director, David I. Miller, called it "the massive fraud it targets". The release says Cash FX "engaged in minimal forex trading" and used new money to pay old participants.`,
    `The second number is the one participants will care about. The complaint alleges that "approximately 81% of pool participants collectively lost at least $406 million". The difference between $950 million paid in and $406 million lost is not money that was saved: it is, on the complaint's account, money that went round, paid out to earlier participants as fictitious profits, the ordinary arithmetic of a Ponzi scheme in which some people are paid with other people's deposits.`,
    `Much of it moved in bitcoin. The complaint's worked examples are denominated in it: 0.374 BTC collected from 19 participants in April 2021 and paid out within days, 11.36 BTC paid to a single participant in June 2020, 58.45 BTC moved into an account controlled by the chief executive in June 2022. The pool was nominally a forex product; its plumbing was crypto wallets.`,
    `The third figure is a date. The complaint's "Relevant Period" runs from at least 28 June 2019 to at least 20 December 2023. The suit was filed on 24 September 2026, two years and nine months after the last conduct it alleges. The Commission asks for restitution, disgorgement, penalties and trading bans; whether any of the $406 million is recoverable from defendants in Brazil, Oregon, Florida and a dissolved Panamanian company is a question the complaint does not answer.`,
    `Read together, the three numbers say something the headline does not. The case is large; the American exposure is small; and the enforcement is late. None of that makes it less of a fraud. It does make "$950 million" a measure of how much money circulated through the scheme, not of what Americans lost, or of what anyone is likely to get back.`,
  ] }),

CY({ slug:"fixed-for-the-phones-that-did-not-upgrade", kick:"Vulnerabilities",
  headline:"Fixed for the phones that did not upgrade",
  dek:"Apple patched an actively exploited CoreGraphics flaw on Monday in iOS 26.7.1 and two older macOS lines. Its own note says the attacks it knows of hit versions of iOS before iOS 27. The CVE does not appear in iOS 27's security notes, and CISA has given federal agencies until Friday.",
  metaDesc:"Apple fixed CVE-2026-86950, an exploited CoreGraphics out-of-bounds write, in iOS 26.7.1, macOS Tahoe 26.7.1 and macOS Sequoia 15.8.1 on 28 September 2026. CISA added it to KEV on 29 September with a 2 October deadline.",
  author:"sam-porter", date:"2026-09-30T14:40:00Z",
  capt:"An iPhone face up on a wooden table. The exploited flaw was fixed on Monday for devices still on iOS 26, not in a new build of iOS 27.",
  tags:[{name:"Cybersecurity",slug:"cybersecurity"},{name:"Threat Intelligence",slug:"threat-intelligence"},{name:"Consumer Technology",slug:"consumer-technology"}],
  related:[
    {href:"/cybersecurity/three-days-to-patch-the-gateway/",kick:"Vulnerabilities",title:"Three days to patch the gateway",ago:"SEPTEMBER 28, 2026"},
    {href:"/cybersecurity/zero-day-or-on-the-list-since-june/",kick:"Vulnerabilities",title:"A zero-day, or a flaw on the list since June",ago:"SEPTEMBER 28, 2026"},
    {href:"/crypto/nine-of-ten-new-clearing-houses-never-lend/",kick:"Market Structure",title:"Nine of the ten new clearing houses never lend",ago:"SEPTEMBER 30, 2026"},
  ],
  body:[
    `Apple shipped seven software updates on Monday. Four of them, including iOS 27.0.1 and macOS Golden Gate 27.0.1, carry the line "This update has no published CVE entries." The other three fix one flaw, and it is one Apple says has been used.`,
    `The flaw is CVE-2026-86950, an out-of-bounds write in CoreGraphics, the framework that draws images and documents across Apple's systems. Apple's notes for iOS 26.7.1, macOS Tahoe 26.7.1 and macOS Sequoia 15.8.1 describe the same impact: "Processing a maliciously crafted file may lead to arbitrary code execution." All three add the sentence Apple reserves for exploited bugs: "Apple is aware of a report that this issue may have been exploited in an extremely sophisticated attack against specific targeted individuals on versions of iOS before iOS 27." The finder is credited as Meta Product Security.`,
    `The phrase to read is "before iOS 27". The fix was released for the older line, the one on devices whose owners have not taken the major upgrade Apple shipped on 14 September. This desk searched Apple's security notes for iOS 27 and macOS Golden Gate 27 for the CVE and did not find it, and the 27.0.1 updates list no CVEs at all. Apple has not said whether the current line was ever vulnerable. What its notes do say is where the attacks were seen, and that the repair went to the phones that stayed behind. The two macOS notes repeat the iOS sentence word for word, which says where the exploitation was reported rather than that Macs were attacked.`,
    `CISA added the CVE to its Known Exploited Vulnerabilities catalog on Tuesday with a due date of 2 October: three days, the same window as every addition since 22 September, including the one it gave <a href="/cybersecurity/three-days-to-patch-the-gateway/">Citrix NetScaler on Sunday</a>. The entry carries the forensic-triage flag, which under the implementation guidance for BOD 26-04 asks agencies to look for signs of compromise, not only to patch. Its "known ransomware campaign use" field reads "Unknown".`,
    `For an enterprise the practical instruction is narrower than the headline. The devices at risk, on Apple's account, are those still on iOS 26 or the two older macOS lines, and the fix for them is the .1 release of the version they are already on. A fleet that moved to 27 in the last fortnight is not named in any of Monday's notes. A fleet that held back, as many do in the first weeks of a major release, has three days on the federal clock and a targeted exploit already in use.`,
  ] }),

CR({ slug:"nine-of-ten-new-clearing-houses-never-lend", kick:"Market Structure",
  headline:"Nine of the ten new clearing houses never lend",
  dek:"The CFTC registered Coinbase Clearing and Quanta Clear on Monday with identical orders. Both may clear only fully collateralised contracts. On the Commission's own register, nine of the ten clearing houses dated since June 2024 carry the same limit, and twelve more are waiting. The order that has been described as approving a USDC clearing house does not mention USDC.",
  metaDesc:"The CFTC registered Coinbase Clearing LLC and Quanta Clear, Inc. as DCOs on 28 September 2026, both limited to fully collateralized contracts. Nine of ten DCOs dated since June 2024 on the CFTC register carry the limit; the order does not mention USDC.",
  author:"marcus-oyelaran", date:"2026-09-30T14:50:00Z",
  capt:"A trading screen with candlesticks and a price ladder. A fully collateralised clearing house holds the whole of what a position can lose before it accepts the trade, so it never extends credit.",
  tags:[{name:"Market Structure",slug:"market-structure"},{name:"Regulation",slug:"regulation"},{name:"Institutional Crypto",slug:"institutional-crypto"}],
  related:[
    {href:"/markets/the-margin-is-named-in-the-rule/",kick:"Market Structure",title:"The margin is named in the rule",ago:"SEPTEMBER 29, 2026"},
    {href:"/crypto/prediction-markets-institutional-hedging/",kick:"Market Structure",title:"Prediction markets court the hedging crowd",ago:"JUNE 18, 2026"},
    {href:"/fintech/two-hundred-and-seventy-seven-questions/",kick:"Stablecoins",title:"Two hundred and seventy-seven questions",ago:"SEPTEMBER 25, 2026"},
  ],
  body:[
    `On Monday the Commodity Futures Trading Commission issued two orders of registration for derivatives clearing organizations. They are the same order with a different name typed in. Coinbase Clearing LLC and Quanta Clear, Inc. are each "permitted to clear, in its capacity as a DCO, fully collateralized futures, options on futures, and swaps", and each order adds that a position counts as fully collateralized only "if it meets the definition of 'fully collateralized position' in Commission Regulation 39.2".`,
    `Coverage of the first order has been about Coinbase: a "USDC-native" clearing house with round-the-clock settlement that completes, in the words of its general counsel Molly Abraham as quoted by Crowdfund Insider, "Coinbase's end-to-end derivatives infrastructure". Read at source, the order is about something else. It does not mention USDC, stablecoins, weekends or settlement hours. It mentions one condition on what may be cleared, and that condition is the thing the Commission has now granted, in the same words, to most of the clearing houses it has registered in the past two years.`,
    `The Commission keeps a public register of clearing organizations. On Wednesday morning it listed 26 as registered and 12 as pending. Ten of the 26 carry a date in or after June 2024: ForecastEx, Kalshi Klear, Polymarket's QC Clearing, Electron Exchange DCO, Underdog Clearinghouse, Gemini Olympus, ICE Direct Clear, ProphetX, Quanta Clear and Coinbase Clearing. Nine of those ten are limited to fully collateralized positions. Kalshi Klear is the exception. (The register's dates are its own, and in some rows record a change of status or name rather than a first registration.) In December 2024, when Polymarket's clearing house was registered, Finance Magnates counted 19 registered DCOs. It is 26 now, and every one of the seven added since is limited the same way.`,
    `The limit is not a technicality. Regulation 39.2 defines a fully collateralized position as one where the clearing house must "hold, at all times, funds in the form of the required payment sufficient to cover the maximum possible loss that a party or counterparty could incur upon liquidation or expiration of the contract." That rules out the product that pays for most derivatives markets. A trader who wants to hold a futures position on 10 per cent margin cannot do it at a fully collateralized clearing house, because the clearing house may not accept the trade until the whole of the possible loss is on deposit. Coinbase's own summary of its clearing activities, filed with the application, says so directly: full collateralization means "negating the need to calculate variation margin levels or maintain a default fund, and making it easier to offer clearing services directly to participants."`,
    `That last clause explains the queue. A clearing house that never lends has no member it can be left exposed to, which means no default fund to mutualise losses and no need to route customers through futures commission merchants. It can take the customer directly. That is the model built for event contracts, where the maximum loss is the price of the contract, and it is why the recent register reads like a list of prediction markets and sports-contract venues: Polymarket, Underdog, ProphetX, and on the pending list Sporttrade, Smarkets and Eventive. Of the twelve applications pending, eleven are dated in 2026.`,
    `The USDC question is real but it is not answered by the order. Coinbase's proposed rulebook, the version the CFTC has posted as Exhibit A-2 to the application, does not use the word USDC or the word stablecoin once. Its collateral rule says the company "will accept from Participants any form of collateral deemed acceptable by the Company and as communicated through Participant Notices and on the Website". A clearing house can therefore add USDC as eligible collateral by notice, without a new order; the order's own condition is Regulation 39.2's, which asks for funds "in the form of the required payment". Whether a dollar stablecoin counts as that form for a contract that pays in dollars is a question the order does not address, and the amended rulebook the Commission reviewed has not been published.`,
    `What Monday did settle is structural. Coinbase now has, by its own account, an exchange, a futures commission merchant and a clearing house under one roof, and for fully collateralized contracts it no longer needs anyone else to clear them. The leveraged perpetual-style products that make up most crypto derivatives volume are not in that perimeter and cannot be under this order. The clearing houses the CFTC is registering are, almost without exception, built for contracts where nobody borrows. That is a choice about what kind of market is growing fastest, and the Commission's register makes it plainer than any announcement.`,
  ] }),

];
