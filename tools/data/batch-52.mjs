/** Batch 52 — Tuesday 29 September 2026. Three pieces: the rial lead, the
 *  SEC staff's four-word edit on token buybacks, and Cboe's request to be
 *  treated like the OCC.
 *
 *  MARKETS / RIAL (LEAD). Open-market rates are Bonbast's: the live feed
 *  (the site's own /json endpoint, read by this desk at about 12:40 UTC on
 *  29 September, last_modified "September 29, 2026 12:40", USD sell 254,600
 *  toman) and its dated archive, which the desk queried one day at a time and
 *  accepted only where the page echoed the requested date: 25 February
 *  165,950; 1 September 215,900; 28 September 245,000 (all toman, sell). The
 *  archive returns the latest day's table when a request is throttled, so
 *  unechoed days were discarded rather than used. The record-low framing and
 *  the 2.2 million of 2 September are the Associated Press's (Aamer Madhani,
 *  29 September, 7.57am ET); the 2 September Bonbast page was not returned
 *  with its date and is not used. The official rate of 1,706,268 rials is the
 *  Central Bank of Iran's SANA rate for exchange offices as reported by
 *  Trend (26 September, 09:17); cbi.ir rejected automated requests and ice.ir
 *  (the Exchange Centre) is served only inside Iran, so neither was read at
 *  source. The 83.8 per cent inflation figure is Governor Abdolnaser
 *  Hemmati's, via Tasnim, as carried by Iran International (26 September).
 *  Nobitex's role is quoted from Treasury's OFAC release of 2 June 2026,
 *  read in full. Nobitex's public API did not resolve from this desk, so no
 *  tether-rial price is given. All ratios are this desk's arithmetic.
 *
 *  CRYPTO / BUYBACKS. The Division of Corporation Finance FAQ page on
 *  sec.gov, read in full: originally issued 25 September, updated 28
 *  September; Question 2.5's answer carries the note "Updated Sept. 28, 2026,
 *  to add 'and has no central party.'" The definitions of "functional"
 *  (footnote 49), "decentralized" (footnote 50) and "central party"
 *  (footnote 54) are from the Commission's interpretive release, Release No.
 *  33-11412, read in full from sec.gov. The staff disclaimer is quoted from
 *  the FAQ page.
 *
 *  MARKETS / CBOE CLEAR. SEC Release No. 34-106493, File No. 4-930, published
 *  at 91 FR 61528 on 29 September 2026, read in full from the Federal
 *  Register. The application itself is not reproduced in the Register and
 *  the desk relies on the Commission's summary of it. Form CA-1 dates are
 *  from the SEC's CCUS Form CA-1 page (Release No. 34-105960).
 *
 *  Heroes: Ashkan Forouzani, Towfiqu barbhuiya and Tim Evans via Unsplash,
 *  in heroes.json. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const MK=P("markets","Markets","markets"), CR=P("crypto","Crypto","crypto");

export default [

MK({ slug:"the-margin-is-named-in-the-rule", kick:"Market Structure",
  headline:"The margin is named in the rule",
  dek:"Cboe's new clearing house wants its members' customer margin on binary options treated the way the broker-dealer protection rule treats margin at the OCC. The rule names the OCC because, when it was written, there was no other options clearing house. Comments are due on 20 October.",
  metaDesc:"Cboe Clear U.S. asked the SEC on 18 September 2026 for an exemption letting broker-dealers count binary-option margin held at CCUS under Item 13 of Rule 15c3-3a, which names only the OCC. Comments close 20 October.",
  author:"jonathan-bright", date:"2026-09-29T12:30:00Z",
  capt:"Rows of numbered brass deposit boxes in a bank. The customer protection rule turns on where a broker's customers' money sits and whether it is kept apart from the firm's own.",
  tags:[{name:"Market Structure",slug:"market-structure"},{name:"Regulation",slug:"regulation"},{name:"Trading",slug:"trading"}],
  related:[
    {href:"/crypto/prediction-markets-institutional-hedging/",kick:"Market Structure",title:"Prediction markets court the hedging crowd",ago:"JUNE 18, 2026"},
    {href:"/blockchain/stock-tokens-get-a-five-year-door/",kick:"Tokenization",title:"Stock tokens get a five-year door",ago:"SEPTEMBER 17, 2026"},
    {href:"/crypto/four-words-on-the-buyback/",kick:"Regulation",title:"Four words on the buyback",ago:"SEPTEMBER 29, 2026"},
  ],
  body:[
    `The Federal Register on Tuesday carried a three-page notice about an accounting line that most investors will never see and that every broker holding customer cash computes, daily or weekly. It is Item 13 of the customer reserve formula, and the question in front of the Securities and Exchange Commission is whether it should keep naming a single clearing house.`,
    `The applicant is Cboe Clear U.S., LLC. It filed Form CA-1 to register as a clearing agency on 30 June, amended it twice in July, and wants temporary registration to act as central counterparty for binary options that are securities: contracts that pay a fixed amount if something happens and nothing if it does not. On 18 September it filed a second application, the one published on Tuesday as Release No. 34-106493, asking for an exemption under section 36 of the Exchange Act.`,
    `The mechanics are narrow and the stakes are not. Rule 15c3-3, the customer protection rule, makes a broker that holds customer cash compute how much it owes those customers and keep that sum in a special reserve account at a bank. Some of what the broker has posted elsewhere on customers' behalf counts as a debit against the requirement, because it is customer money already locked up for customers. Item 13 allows that credit for "the amount of margin required and on deposit with OCC for all option contracts written or purchased in customer accounts". The Options Clearing Corporation is named in the rule.`,
    `Cboe's argument, as the Commission summarises it, is that the name is an accident of history. When the Commission adopted Item 13 and its Note F, the OCC "was the only clearing agency registered with the Commission to provide central counterparty services for securities options". Reading the item to exclude a second clearing house because it did not exist when the rule was written would, Cboe says, conflict with section 17A of the Exchange Act, which tells the Commission to have "due regard for the maintenance of fair competition among clearing agencies". It points out that Items 14 and 15, written later for security futures and for cleared Treasury trades, refer to "a registered clearing agency" rather than to anyone by name.`,
    `Without the exemption, Cboe says, its clearing members would face "a customer reserve computation penalty" for clearing customer options at CCUS rather than at the OCC. That is the practical point. A broker that can offset margin held at the OCC against its reserve requirement, but not the same margin held at Cboe's clearing house, has to lock up more of its own cash for the privilege of using the newcomer. Before any contract trades, the rule's wording makes the incumbent cheaper to use.`,
    `The conditions Cboe proposes are tight. The relief would cover only margin on customer positions in binary options, not options generally. CCUS must first be registered. Binary options would be "fully margined", with daily and intraday margin collection, a guaranty fund and a default waterfall, and margin changes would go through the Commission's rule-filing process. Customer margin would be kept "separately and independently" from margin on clearing members' own positions, and every condition that Note F applies to the OCC would apply to CCUS.`,
    `That scope says as much as the argument does. Binary options on securities are one way an exchange can offer event-style contracts inside the securities regime rather than the futures one. <a href="/crypto/prediction-markets-institutional-hedging/">The prediction-market boom has so far run mostly on CFTC-regulated venues</a>. A securities clearing house built for fixed-payout contracts, and a request to put its margin on the same footing as the OCC's, looks like preparation to compete for that business from the other side of the regulatory line.`,
    `The Commission asks three questions: whether Cboe's reasons justify an exemption, whether its conditions are enough, and whether the relief would have "a competitive impact" on broker-dealers and their customers. Comments are due by 20 October, three weeks from publication. The application itself is not printed in the Register; the Commission's notice is the public record of what it says.`,
    `The request does not ask the Commission to rewrite the rule. It asks for an order that would make the rule read as if it had been written after a second options clearing house existed. Whether the Commission grants that by order, or eventually by amending Item 13 to say "a registered clearing agency" as its neighbours do, the OCC's name in the formula is now a question with a file number.`,
  ] }),

CR({ slug:"four-words-on-the-buyback", kick:"Regulation",
  headline:"Four words on the buyback",
  dek:"On Sunday the SEC's corporate finance staff edited one answer in the crypto FAQs they had published on Thursday, adding the words \"and has no central party\". Under the Commission's own definitions, that moves the safe ground for a token buyback from a network that works to a network nobody controls.",
  metaDesc:"The SEC staff updated crypto FAQ 2.5 on 28 September 2026 to add \"and has no central party\", tying buyback comfort to the Commission's definition of decentralization rather than functionality.",
  author:"marcus-oyelaran", date:"2026-09-29T12:40:00Z",
  capt:"A hand stacking coins into short piles on a table. A buyback takes tokens out of circulation with money someone has to control, which is why the edit matters.",
  tags:[{name:"Digital Assets",slug:"digital-assets"},{name:"Regulation",slug:"regulation"},{name:"Compliance",slug:"compliance"}],
  related:[
    {href:"/crypto/clarity-act-draws-a-line-around-control/",kick:"Regulation",title:"The CLARITY Act draws its line around control",ago:"SEPTEMBER 11, 2026"},
    {href:"/crypto/sec-proposes-regulation-crypto-assets/",kick:"Regulation",title:"SEC proposes a $75m crypto exemption",ago:"SEPTEMBER 8, 2026"},
    {href:"/crypto/exchange-tokens-regulatory-reckoning/",kick:"Regulation",title:"Exchange tokens face their regulatory reckoning",ago:"JULY 8, 2026"},
  ],
  body:[
    `The Securities and Exchange Commission's Division of Corporation Finance published a set of frequently asked questions on crypto assets on Thursday 25 September. On Sunday it changed one of the answers. The page now reads "Updated: Sept. 28, 2026", and beneath Question 2.5 a note records exactly what changed: the answer was "Updated Sept. 28, 2026, to add 'and has no central party.'"`,
    `Question 2.5 is about token buybacks, the programmes through which a project uses treasury funds or protocol revenue to buy its own token back and hold it or burn it. The staff list the usual reasons: "treasury management, supply reduction, protocol-funded burns, and rebalancing". The question is whether announcing one amounts to "a representation or promise to undertake essential managerial efforts", which is the part of the Howey test that turns a token sale into an investment contract.`,
    `On Thursday the answer began: where a crypto system is functional, an issuer's buyback announcement would not constitute such a promise. Since Sunday it begins: "Where a crypto system is functional and has no central party, an issuer's announcement of a non-security crypto asset buyback program would not constitute a representation or promise to undertake essential managerial efforts." The second half is unchanged. Where a system is not functional, a buyback "could" amount to such a promise "if the issuer presents the buyback as creating yield or return for token holders."`,
    `Four words is a small edit. Read against the Commission's own definitions, it is not a small change.`,
    `The FAQs rest on the interpretive release the Commission adopted on 17 March, Release No. 33-11412. Its definition of "functional", in footnote 49, is modest: a system is functional "if the system's native crypto asset can be used on the system in accordance with the programmatic utility of the system". A token that does what its code says qualifies. Its definition of "central party", in footnote 54, is anything but modest: "a person, entity, or group of persons or entities having operational, economic, or voting control of a crypto system."`,
    `Set that beside the release's definition of "decentralized", in footnote 50: a system that "functions and operates autonomously with no person, entity, or group of persons or entities having operational, economic, or voting control". The words are nearly the same. On Thursday a buyback was safe ground for any system that worked. Since Sunday it is safe ground for a system that works and that nobody controls, which is, in substance, the Commission's test for decentralization.`,
    `That is a much smaller set of projects, and the reason is in the definition itself. "Economic control" is a broad phrase to put next to a buyback, because a buyback is an economic decision made by someone. A foundation that decides when to buy, how much and with which funds is exercising exactly the kind of control the footnote describes. The edit does not say such a programme is an investment contract. It says the staff's comfort no longer reaches it automatically, and that the question falls back to the facts.`,
    `The neighbouring answers point the same way. Question 2.4 already tied the durability of a token's status to the absence of a central party, saying that once "a functional crypto system has no central party", an issuer's statements likely would not create a new investment contract. Question 2.5 now uses the same condition. <a href="/crypto/clarity-act-draws-a-line-around-control/">Congress drew the line in the CLARITY Act around control</a> too. On the vocabulary, the agency and the bill are converging on the same word.`,
    `Two cautions on how much weight any of this bears. The FAQ page says in terms that the answers "represent the views of the staff" and "are not a rule, regulation or statement of the Securities and Exchange Commission", that the Commission "has neither approved nor disapproved their content", and that "like all staff guidance, these FAQs have no legal force or effect". And the staff have not said why they made the edit, whether in response to a question, a comment or second thoughts. The page links a comparison with the prior version and nothing more.`,
    `For a project running a buyback today, the practical reading is plain. Before Sunday the argument ran: our network works, so our buyback is not a promise. After Sunday it has to run: our network works, and no person or group has operational, economic or voting control of it. The second sentence is harder to write, and harder still for the entity that is doing the buying.`,
  ] }),

MK({ slug:"the-official-rial-is-februarys-market-rial", kick:"Currencies",
  headline:"The official rial is February's market rial",
  dek:"The dollar cost more than 2.5 million rials in Tehran's open market on Tuesday, a record. The central bank's rate for exchange offices is 1.71 million. That official price is now weaker than the street price was the week before the war began, and the street has moved another 49 per cent beyond it.",
  metaDesc:"Iran's rial hit a record open-market low of about 2.55 million to the dollar on 29 September 2026, against an official SANA rate of 1,706,268. The official rate is now weaker than the pre-war market rate.",
  author:"priya-raghavan", date:"2026-09-29T12:50:00Z",
  capt:"A worn ten-rial note issued by Bank Melli Iran, lying on a wooden table. Denominations like this one have long since lost their meaning; the currency is now quoted in hundreds of thousands of toman to the dollar.",
  tags:[{name:"Economic Policy",slug:"economic-policy"},{name:"Policy",slug:"policy"},{name:"Digital Assets",slug:"digital-assets"}],
  related:[
    {href:"/markets/oil-spike-pushes-yields-to-multi-year-highs/",kick:"Fixed Income",title:"An oil shock arrives in the bond market first",ago:"SEPTEMBER 11, 2026"},
    {href:"/crypto/sixty-one-million-of-the-one-and-a-half-billion/",kick:"Enforcement",title:"Sixty-one million of the one and a half billion",ago:"SEPTEMBER 15, 2026"},
    {href:"/markets/the-margin-is-named-in-the-rule/",kick:"Market Structure",title:"The margin is named in the rule",ago:"SEPTEMBER 29, 2026"},
  ],
  body:[
    `Traders in Tehran were exchanging "more than 2.5 million rials to the U.S. dollar" on Tuesday, the Associated Press reports, a record low and the second in a month; the previous one, 2.2 million, was set on 2 September. Bonbast, which publishes a running quote from Tehran's open market in toman, ten rials apiece, had the dollar at 254,600 toman to sell at 12:40 UTC. That is 2,546,000 rials, up from 2,450,000 on Monday.`,
    `That is one price. The Central Bank of Iran publishes another. Its SANA rate, the rate it sets for licensed exchange offices, was 1,706,268 rials to the dollar on Saturday, according to Trend, which reports the bank's daily table. The central bank's own site rejected this desk's requests, and the Exchange Centre, where importers buy currency at managed rates, serves its pages only to users inside Iran. The official rate is therefore reported here second-hand.`,
    `Put the two together and the gap is the story. At Tuesday's open-market price the dollar costs 49 per cent more on the street than at the window. The official rial is worth about two-thirds of what the central bank says it is worth.`,
    `The more telling comparison is with the past. On 25 February, three days before the war began, Bonbast's archive has the dollar at 165,950 toman, or 1,659,500 rials. The central bank's official rate today, 1,706,268, is nearly 3 per cent weaker than that. Seven months of war and blockade have moved the official rate to roughly where the open market stood before any of it started. The open market has moved another 49 per cent on top.`,
    `From 25 February to Tuesday the dollar's open-market price rose 53 per cent. Put the other way, the rial lost 35 per cent of its dollar value. Since 1 September, when Bonbast's archive has 215,900 toman, the dollar has risen 18 per cent. Abdolnaser Hemmati, the central bank governor, said in remarks reported on Saturday that point-to-point inflation had eased to 83.8 per cent in September from 84.4 per cent in August, according to Iran International, which cited the Tasnim news agency. "Although the decrease is small," he said, "the fact that the trend of point-to-point inflation is declining is very important."`,
    `A two-tier rate is not a curiosity. It is a subsidy with a queue attached. Whoever is allowed to buy dollars at 1.71 million and sell goods priced off 2.55 million collects the difference, and the allocation of that right is a political decision rather than a market one. For households, the open-market rate is the one that sets the price of anything imported, whatever the official table says.`,
    `The route out of the rial that does not pass through either window is crypto, and the United States has spent the year trying to close it. On 2 June Treasury's Office of Foreign Assets Control designated Nobitex, Iran's largest exchange, and three others. Treasury said Nobitex processed "more than 50 percent of all Iranian digital asset inflows in 2025" and "helped the Central Bank of Iran access hundreds of millions of dollars in stablecoins used to prop up the plummeting value of the Iranian rial". <a href="/crypto/sixty-one-million-of-the-one-and-a-half-billion/">What the enforcement side recovers from such flows</a> tends to be small against what moves. Nobitex's public market data did not resolve from this desk on Tuesday, so the rial price of tether, the closest thing to a third exchange rate, is not given here.`,
    `The diplomatic backdrop is the only thing that has moved the other way. The AP reports that Abbas Araghchi, Iran's foreign minister, says indirect talks with the United States on reopening the strait, conducted through Qatar, have become "more serious". President Trump rejected Tehran's latest proposal on Saturday. The open market, which has no mediator, priced the rejection faster than the talks.`,
    `Two numbers will say whether the gap closes. One is the official rate: a central bank that lets it drift towards the street is admitting what the street already knows, and one that holds it at 1.71 million is choosing to keep paying the subsidy. The other is the street rate on the day the strait reopens, if it does. Until one of them moves, Iran has an official currency priced in February and a real one priced in September.`,
  ] }),

];
