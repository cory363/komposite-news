/** Batch 45 — 24 September 2026. Two pieces.
 *
 *  AI / SEMICONDUCTORS. The China-exclusion language is quoted from Nvidia's
 *  own second-quarter fiscal 2027 release of 26 August 2026 ("NVIDIA is not
 *  assuming any Data Center compute revenue from China in its outlook"), not
 *  from secondary coverage, which paraphrases it. The revenue-by-geography
 *  figures — China including Hong Kong at $7,880m in the quarter against
 *  $3,985m a year earlier, and $12,430m for the half against $13,644m — are
 *  from the Form 10-Q for the period ended 26 July 2026, as are the H200
 *  licensing passage, the "less than 1% of Data Center revenue" figure, the
 *  $0.4bn and $4.5bn charges, the 25 per cent tariff on inspected H200s and the
 *  "effectively foreclosed" sentence. Colette Kress's remark is from the
 *  earnings call of 26 August. The $30bn estimate of Chinese demand is
 *  KeyBanc's and is attributed. Alibaba's chip specifications are the
 *  company's own claims, made at its Apsara Conference and not independently
 *  verified; they are labelled as claims throughout. South-East Asian material
 *  follows Politico's reporting of 24 September.
 *
 *  BLOCKCHAIN. Every procedural statement is taken from the documents rather
 *  than from coverage of them. The generic listing standards were approved on
 *  17 September 2025 by Release No. 34-103995 (SR-NASDAQ-2025-056;
 *  SR-CboeBZX-2025-104; SR-NYSEARCA-2025-54). The phrase "75 days" appears
 *  nowhere in that order; this desk searched the full text. The relief runs
 *  through Rule 19b-4(e), under which a qualifying listing is not deemed a
 *  proposed rule change at all. The 27 September date is the 45th day under
 *  Section 19(b)(2) on SR-ISE-2026-42, noticed at Release No. 34-106067 on
 *  10 August 2026 and published 13 August; the Commission extended it to
 *  11 November on 21 September, at Release No. 34-106448, published in
 *  Thursday's Federal Register. The modified standards are SR-NASDAQ-2026-032,
 *  Release No. 34-105995 of 27 July 2026. Fund launch dates are from reporting
 *  and are attributed as such.
 *
 *  Heroes: Julia Taubitz and David Vives via Unsplash, in tools/data/heroes.json. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const AI=P("ai","AI","ai"), BC=P("blockchain","Blockchain","blockchain");

export default [

AI({ slug:"the-guidance-that-assumes-china-buys-nothing", kick:"Semiconductors",
  headline:"The guidance that assumes China buys nothing",
  dek:"Nvidia's outlook for the quarter now ending books no data-centre compute revenue from China at all. That is the company's own sentence, not an inference — and it turns the largest market it is barred from into something closer to a free option than a hole.",
  metaDesc:"Nvidia guided to $108bn for its third quarter and told investors it assumes no Data Center compute revenue from China. The filings show why the assumption is cheap.",
  author:"dana-whitfield", date:"2026-09-24T17:30:00Z",
  capt:"Containers stacked under gantry cranes at a deep-water terminal. Nvidia's forecast for the quarter now ending books nothing moving in one particular direction.",
  tags:[{name:"Semiconductors",slug:"semiconductors"},{name:"AI Infrastructure",slug:"ai-infrastructure"},{name:"Trade",slug:"trade"}],
  related:[
    {href:"/ai/the-export-control-that-is-not-in-the-licence/",kick:"AI Policy",title:"The export control that is not in the licence",ago:"SEPTEMBER 24, 2026"},
    {href:"/ai/the-buyers-started-making-their-own/",kick:"Semiconductors",title:"The buyers started making their own",ago:"SEPTEMBER 6, 2026"},
    {href:"/policy/export-controls-shift-to-enforcement/",kick:"Policy",title:"Export controls shift to enforcement",ago:"SEPTEMBER 6, 2026"},
  ],
  body:[
    `The most informative line in Nvidia's current guidance is a negative, and it is the company's own. Revenue for the third quarter of fiscal 2027 "is expected to be $108.0 billion, plus or minus 2%", the release of 26 August says, and then: "NVIDIA is not assuming any Data Center compute revenue from China in its outlook." <a href="https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Second-Quarter-Fiscal-2027/default.aspx" rel="noopener">That is the text of the outlook</a>, not a reading of it; the accounts now circulating, which say the forecast assumes China buys zero AI chips this quarter, are for once an accurate paraphrase. On the call the same day the chief financial officer, Colette Kress, put it in her own words: "given ongoing geopolitical uncertainty, there is no China data center compute revenue in our forward outlook."`,
    `What matters is how little that assumption costs. In the quarter ended 26 July the company billed $7,880m to customers headquartered in China including Hong Kong, against $96,221m of total revenue — a shade over eight per cent, and nearly double the $3,985m of a year earlier. Read the half rather than the quarter and the direction reverses: $12,430m against $13,644m, a fall of nine per cent in a period when group revenue almost doubled. The geography is assigned by the direct customer's headquarters in any case, so it records where an invoice went, not what kind of chip was sold.`,
    `Strip out the parts export rules do not touch and almost nothing remains. Washington began granting licences in February to ship small volumes of H200 to named China-based buyers; Beijing restricted the purchases, and the company says it has "been unable to sell all the products for which we have licenses". Of the fraction actually shipped, the <a href="https://www.sec.gov/Archives/edgar/data/1045810/000104581026000075/nvda-20260726.htm" rel="noopener">quarterly filing</a> says those "shipments account for less than 1% of Data Center revenue in our most recent quarter". Data-centre revenue was $89.0bn.`,
    `The economics of that sliver are worse than its size suggests. Nvidia took a $0.4bn charge in the first half of fiscal 2027 on H200 inventory and purchase obligations, after a $4.5bn charge on H20 a year before. Licensed H200s must be inspected in the United States before shipment, which makes them imports carrying a 25 per cent tariff the company says it has "been unable to pass along any of". That is a rounding error with legal risk attached, not a forecast.`,
    `So the zero-China baseline is a floor rather than a gap. KeyBanc's John Vinh has modelled Chinese demand at roughly $30bn a year; against revenue running at $108bn a quarter that is about seven per cent. Excluding it converts China from a forecast input into an option held for nothing. If Washington and Beijing reopen the market, every dollar is upside against a published number; if they do not, the guidance still stands. That asymmetry, rather than any expectation about Thursday's Trump–Xi summit, is why the assumption is worth making.`,
    `Nvidia's own account of the cost is more candid than its guidance. At the end of the quarter, the filing says, while it could still ship uncontrolled gaming and workstation parts, "we were effectively foreclosed from competing in China's data center computing/compute market, and our effective foreclosure from the China market helped our competitors build larger developer and customer ecosystems to challenge us worldwide." That is a company telling shareholders the policy has produced a rival, not merely a lost quarter.`,
    `This week that competitor acquired a name. At Alibaba's Apsara Conference in Hangzhou, the chief executive, Eddie Wu, unveiled the Zhenwu V900, designed by the group's T-Head silicon unit and described by him as the most powerful AI chip in China today — three times the performance of the previous Zhenwu M890, <a href="https://www.nbcnews.com/world/asia/china-alibaba-unveils-powerful-chip-ambitious-ai-model-plans-rcna599343" rel="noopener">NBC News reported</a>. Alibaba also said it would train a model of five to ten trillion parameters, against 2.4 trillion for its current Qwen3.8-Max, and expects more than 20 gigawatts of computing capacity by 2032. Every performance figure there is the vendor's, untested by anyone outside. Nor is design the binding constraint; fabrication and high-bandwidth memory are, as Wu conceded: "global shortages across the AI data center supply chain are currently limiting the speed at which we can scale."`,
    `Whether the foreclosure spreads will be settled elsewhere. American policy now tries to keep controlled parts out of China by tracking them everywhere else, and everywhere else is South-East Asia, where data-centre capacity is projected to reach 9.4 gigawatts by 2035. <a href="https://www.politico.com/news/2026/09/24/america-southeast-asia-china-ai-chips-01088982" rel="noopener">Politico reports</a> that the research group C4ADS documented fifty shipments of Nvidia GPUs diverted through Vietnam, Malaysia and India to China and Hong Kong between 2023 and 2025, worth $13.4m — a figure researchers call almost certainly understated. Three bills are queued for the defence authorisation, among them the Chip Security Act, which would put location verification inside advanced chips. The countries being asked to accept that surveillance are the same ones Alibaba, Moonshot and Z.ai are selling cheaper models into.`,
    `Set beside the private restriction this desk examined <a href="/ai/the-export-control-that-is-not-in-the-licence/">on Thursday morning</a>, the shape is clear enough: a statutory layer, a licensing layer and a layer of classifiers no statute mentions, none of them written on the same page as the others. The guidance prices the whole stack at zero and moves on. The figure that follows — $108.0bn, plus or minus two per cent — is what the largest market in the world is now worth to the company that cannot sell into it.`,
  ] }),

BC({ slug:"the-seventy-five-days-that-are-not-in-the-rule", kick:"Market Structure",
  headline:"The seventy-five days that are not in the rule",
  dek:"Crypto coverage says the SEC has cut its altcoin ETF review to 75 days for Solana, XRP and Dogecoin, with a deadline falling on 27 September. The funds have traded for the better part of a year, the number appears in no Commission document, and the deadline was extended to 11 November three days ago.",
  metaDesc:"The SEC's generic listing standards removed the 19b-4 clock rather than shortening it. The 27 September deadline belongs to an options filing, and was extended on 21 September.",
  author:"marcus-oyelaran", date:"2026-09-24T18:00:00Z",
  capt:"The Broad Street facade of the New York Stock Exchange. Several of the funds whose approval track is being described as newly shortened have listed on its Arca platform since last autumn.",
  tags:[{name:"Market Structure",slug:"market-structure"},{name:"Digital Assets",slug:"digital-assets"},{name:"Regulation",slug:"regulation"}],
  related:[
    {href:"/crypto/the-etf-shelf-gets-crowded/",kick:"Digital Assets",title:"The ETF shelf gets crowded",ago:"SEPTEMBER 6, 2026"},
    {href:"/blockchain/the-exemption-picks-its-winners/",kick:"Market Structure",title:"The exemption picks its winners",ago:"SEPTEMBER 20, 2026"},
    {href:"/crypto/perpetual-futures-come-for-the-stocks/",kick:"Market Structure",title:"Perpetual futures come for the stocks",ago:"SEPTEMBER 20, 2026"},
  ],
  body:[
    `A claim has been going round since Wednesday that the Securities and Exchange Commission has compressed its review of altcoin exchange-traded products from up to 240 days to roughly 75, opening a path for spot funds in Solana, XRP and Dogecoin, with a deadline on Sunday. Three things are wrong with it. The funds already trade. The seventy-five days are in no Commission document. And the deadline, which is real, concerns something else and was extended on Monday.`,
    `Start with the rule. On 17 September 2025 the Commission granted accelerated approval to proposals from Nasdaq, Cboe BZX and NYSE Arca adopting generic listing standards for Commodity-Based Trust Shares, at <a href="https://www.federalregister.gov/documents/2025/09/22/2025-18258/self-regulatory-organizations-the-nasdaq-stock-market-llc-cboe-bzx-exchange-inc-nyse-arca-inc-order" rel="noopener">Release No. 34-103995</a>. That was a year ago, and it is the event being re-reported this week.`,
    `What it did is more interesting than a shorter clock, because it is not a clock at all. The relief runs through Rule 19b-4(e), under which the listing of a new derivative securities product complying with an exchange's already-approved rules, surveillance programmes and listing standards "is not deemed a proposed rule change". No filing means no Section 19(b)(2) timetable: not the 45 days, not the extension to 90, not the 240-day outer limit. The exchange's only obligation is to post eight items about the product — issuer type, class, underlying, ticker, markets, settlement, position limits — on its website within five business days of trading starting. Calling the removal of a process a seventy-five-day process gets the direction of travel right and the mechanism exactly backwards.`,
    `Where, then, does the number come from? Not the order; this desk searched its full text and the figure does not appear. It is an estimate, widely attributed to Bloomberg's ETF analysts, of how long the Division of Corporation Finance takes to clear a Securities Act registration statement — the one gate the generic standards leave standing, and a gate with no deadline anybody can enforce. A registration statement takes effect automatically twenty days after filing under Section 8(a); issuers file delaying amendments precisely so that it does not, then wait for staff comments to stop. Seventy-five days describes staff behaviour in 2025, not an undertaking to repeat it.`,
    `The standards do contain one waiting period, and it decides which tokens qualify. Under Nasdaq Rule 5711(d)(iv)(A), each commodity held must trade on a market belonging to the Intermarket Surveillance Group; or underlie a futures contract "made available to trade on a designated contract market for at least six months", with a surveillance-sharing agreement in place; or, on an initial basis only, sit behind an exchange-traded fund giving at least 40 per cent of its net asset value in exposure to it. Six months, running on a futures contract rather than a fund. That is the queue.`,
    `Which is why the premise fails. Spot Solana funds began trading on 28 October 2025. Dogecoin has four listed vehicles, from REX-Osprey's on Cboe BZX that September to 21Shares' on Nasdaq in January. Spot XRP funds cleared in March and took in more than $1.5bn inside sixty days. The regulatory question closed last autumn; as <a href="/crypto/the-etf-shelf-gets-crowded/">this desk argued on 6 September</a>, what remains is an asset-management question about which funds gather enough money to stay open.`,
    `Now the deadline. It is real, falls on 27 September, and has nothing to do with spot ETFs. On 28 July, Nasdaq ISE filed to adopt listing criteria for options on commodity-based trusts holding digital commodities. The Commission noticed it at Release No. 34-106067 on 10 August and published on the 13th, setting the 45th day under Section 19(b)(2) at Sunday. On 21 September it extended, "so that it has sufficient time to consider the proposed rule change", designating 11 November as the date by which it must approve, disapprove or open proceedings. <a href="https://www.federalregister.gov/documents/2026/09/24/2026-19514/self-regulatory-organizations-nasdaq-ise-llc-notice-of-designation-of-a-longer-period-for-commission" rel="noopener">That notice, Release No. 34-106448, ran in Thursday's Federal Register</a> — the same day the seventy-five-day story was being written. It also records that no comments were filed.`,
    `What ISE is asking for deserves more attention than the arithmetic that displaced it. The purpose is to align the options rulebook with Nasdaq Rule 5711(d) as amended in July by SR-NASDAQ-2026-032, approved at Release No. 34-105995. That amendment replaced "crypto asset" with the narrower "digital commodity", drawn from the joint SEC and CFTC interpretative guidance effective 23 March; opened the standards to actively managed trusts; and created a buffer under which up to 15 per cent of a trust's net asset value may sit in holdings failing the eligibility criteria. ISE would carry the buffer across, so options could be listed on a trust where 15 per cent of the basket underlies no derivative on a surveilled market. Its defence is careful: every constituent must still clear an average daily global market value of $700m over twelve months, so "the liquidity standard thus operates as a uniform floor that applies to 100% of the trust's commodity holdings, even where the surveillance requirement applies to only 85%".`,
    `So, the sober version. Listing an altcoin fund no longer requires the Commission's permission at all, a larger change than a shorter deadline, and it happened a year ago. What is pending is narrower: whether options may be written on baskets only 85 per cent surveilled. An extension is not an approval, and that nobody filed a comment on the proposal says more about the state of the debate than any number of days does.`,
  ] }),

];
