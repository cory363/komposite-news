/** Batch 18a — found on the Brave wire on 11 September 2026 and verified
 *  against the cited reporting before writing. Figures, dates and quotations
 *  come from the linked source or the company's own release. Nothing is
 *  rewritten from anyone's copy. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const MK=P("markets","Markets","markets"), CR=P("crypto","Crypto","crypto"),
      BC=P("blockchain","Blockchain","blockchain"), AI=P("ai","AI","ai");

export default [

MK({ slug:"oil-spike-pushes-yields-to-multi-year-highs", kick:"Fixed Income",
  headline:"An oil shock arrives in the bond market first",
  dek:"Brent at a four-month high pushed global yields to multi-year peaks and sent equities down, with the supply disruption running through two chokepoints at once.",
  metaDesc:"Brent crude reached $109.97 a barrel after a 6% overnight jump, pushing global bond yields to multi-year highs as investors raised bets on further rate increases.",
  author:"priya-raghavan", date:"2026-09-11T16:20:00Z",
  capt:"An energy price is an inflation input before it is anything else.",
  tags:[{name:"Fixed Income",slug:"fixed-income"},{name:"Capital Markets",slug:"capital-markets"},{name:"Risk",slug:"risk"}],
  related:[
    {href:"/markets/treasury-yields-buyback-disappoints/",kick:"Fixed Income",title:"Yields hit 4.86% as a buyback lands short",ago:"SEPTEMBER 2026"},
    {href:"/markets/cftc-cdor-tiie-swap-clearing-transition/",kick:"Market Structure",title:"CFTC retires CDOR and TIIE from clearing",ago:"SEPTEMBER 2026"},
    {href:"/markets/sec-transfer-agent-rules-proposal/",kick:"Market Structure",title:"The SEC reopens the transfer agent rules",ago:"SEPTEMBER 2026"},
  ],
  body:[
    `An oil price is a consumer story in the second week and a rates story on the first day. The transmission runs through inflation expectations, and inflation expectations are priced in the bond market before anyone changes a forecast.`,
    `Brent crude reached a four-month high of $109.97 a barrel on Friday after jumping 6% overnight, putting it on course for a weekly gain of close to 13%. <a href="https://economictimes.indiatimes.com/markets/us-stocks/wall-street-guide/global-bond-yields-surge-as-oil-spike-fuels-inflation-fears/articleshow/134047045.cms" rel="noopener">Reuters reporting relayed by the Economic Times</a> put global bond yields at multi-year highs and equities lower across regions on the same session.`,
    `The supply picture behind the move involves two chokepoints rather than one. Flows remained constrained through the Strait of Hormuz amid attacks between the United States and Iran, while Iran-aligned Houthis took control of Yemen's port of Mocha, raising questions about Saudi exports routed through the Red Sea.`,
    `Two constrained routes is a different proposition from one. A single disrupted chokepoint has a reroute; the cost is freight, insurance and time. When the alternative route is also compromised, the market stops pricing a detour and starts pricing absence.`,
    `The front end moved with the rest. The two-year Treasury yield rose two basis points to 4.5835% after climbing twelve basis points overnight, which is the part of the curve that responds to what a central bank is expected to do rather than to term premium.`,
    `That is the distinction worth holding on to this week. Ten-year yields can rise because investors want more compensation for holding duration, or because they expect policy to stay tighter for longer. The first is a supply story. The second is an inflation story, and an oil shock produces the second.`,
    `Investors raised bets on further rate increases from central banks globally, which is a reversal of positioning rather than a change in policy. No rate has moved. What moved is the distribution of outcomes that traders are willing to fund.`,
    `The awkwardness for policymakers is that an energy shock is a supply shock, and the textbook response to a supply shock is to look through it. Looking through it is easier when expectations are anchored, and harder when the previous inflation episode is recent enough that households still remember it.`,
    `For anyone funding themselves, the practical consequence arrives before the macro argument is settled. Mortgage rates track the long end, and government financing costs track it directly. A yield that rises for the wrong reason costs the same as one that rises for the right one.`,
    `This lands on a market already digesting a disappointing long-bond buyback earlier in the week, which <a href="/markets/treasury-yields-buyback-disappoints/">pushed ten-year yields to their highest level since October 2023</a>. The buyback was a question about who will hold duration. The oil price is a question about what duration is worth.`,
    `Both questions have the same answer for now, which is why the move has been orderly rather than disorderly. The test is whether the two stay aligned if crude holds above $100 into next week.`]}),

CR({ slug:"clarity-act-draws-a-line-around-control", kick:"Regulation",
  headline:"The CLARITY Act draws its line around control",
  dek:"A 630-page Senate revision would pull centrally controlled trading protocols into CFTC registration, defining the category by who can change the rules rather than by what the software does.",
  metaDesc:"A revised Senate draft of the CLARITY Act would require centrally controlled crypto trading protocols to register with the CFTC ahead of a September 15 procedural vote.",
  author:"marcus-oyelaran", date:"2026-09-11T15:10:00Z",
  capt:"The definition that matters is not decentralisation but who can change the rules.",
  tags:[{name:"Regulation",slug:"regulation"},{name:"Market Structure",slug:"market-structure"},{name:"Digital Assets",slug:"digital-assets"}],
  related:[
    {href:"/crypto/sgx-perpetual-futures-us-institutions/",kick:"Market Structure",title:"SGX opens crypto perps to US funds",ago:"SEPTEMBER 2026"},
    {href:"/crypto/visa-onchain-lending-settlement-data/",kick:"Payments",title:"Visa opens settlement data to DeFi lenders",ago:"SEPTEMBER 2026"},
    {href:"/crypto/sec-proposes-regulation-crypto-assets/",kick:"Regulation",title:"SEC proposes a $75m crypto exemption",ago:"SEPTEMBER 2026"},
  ],
  body:[
    `Every attempt to regulate decentralised finance has run into the same problem: the word decentralised describes an aspiration more often than an architecture. A revised Senate draft proposes to stop arguing about the word and legislate around control instead.`,
    `A new Senate Republican draft of the CLARITY Act would require some centrally controlled crypto trading protocols to register with the Commodity Futures Trading Commission. <a href="https://thecryptobasic.com/2026/09/11/us-clarity-act-adds-new-rules-for-non-defi-protocols-ahead-of-sept-15-procedural-vote" rel="noopener">The 630-page revision was released on Thursday</a> by Senator Cynthia Lummis and fellow Republicans, ahead of the bill's first procedural vote on September 15.`,
    `The mechanism is a category the draft calls non-decentralised finance. A protocol can fall into it when an individual or a coordinated group holds authority, exercised directly or indirectly through an agreement, relationship or other arrangement, to oversee its functionality or to make material changes to its operations or to the rules governing consensus.`,
    `Read that definition slowly, because it does not ask what a protocol looks like. It asks who can change it. A front end, a multisignature key, an upgrade path, an informal arrangement among the people who write the code: any of these can constitute the authority the definition describes.`,
    `That is a more durable test than counting validators, and a more demanding one. Protocols that describe themselves as decentralised while retaining an upgrade key have been relying on the gap between the description and the architecture. The draft closes the gap by ignoring the description.`,
    `Entities inside the category would be subject to CFTC registration, and the legislation directs the Commission, together with the Treasury, to write the implementing regulations. The statutory language sets the perimeter; the rulemaking will decide how wide it is in practice.`,
    `A second revision narrows the reach. The relevant provisions are limited to spot and cash transactions involving digital commodities, which keeps the section away from the derivatives questions that already have a regulator and a rulebook.`,
    `The politics are visible in the drafting. Lummis said Republicans accepted more than 114 provisions sought by Democratic colleagues during negotiations, and a crypto industry source told the publication that Democrats sought the inclusion of the new section.`,
    `Her stated argument for the bill is continuity rather than leniency: that statutory rules survive a change of administration in a way that agency positions do not. The sector has spent four years being regulated by enforcement priorities that reversed with the White House, and that instability has its own cost.`,
    `The September 15 vote is procedural, not final, and a procedural vote establishes whether there are enough votes to proceed rather than enough to pass. A bill of 630 pages will not be read before then by most of the people voting on it.`,
    `What the draft settles, if it survives, is the question the industry has litigated since 2017 in the wrong forum. Whether a protocol is decentralised has never been answerable in a courtroom. Whether somebody can change its rules is a question with a factual answer.`]}),

BC({ slug:"us-bank-completes-its-stablecoin-pilot", kick:"Tokenization",
  headline:"U.S. Bank finishes a stablecoin pilot on its own",
  dek:"USBDC settled on Stellar in a test that covered minting, redemption, freezing and clawback — the four functions a supervised issuer actually needs.",
  metaDesc:"U.S. Bank completed a pilot of its USBDC stablecoin on the Stellar network, testing minting, redemption, freezing and clawback across entities in North America and Europe.",
  author:"marcus-oyelaran", date:"2026-09-11T14:05:00Z",
  capt:"The functions a bank tests first are the ones a supervisor asks about.",
  tags:[{name:"Tokenization",slug:"tokenization"},{name:"Stablecoins",slug:"stablecoins"},{name:"Banking",slug:"banking"}],
  related:[
    {href:"/blockchain/broadridge-dlx-tokenization-platform/",kick:"Tokenization",title:"Broadridge builds on a $351bn-a-day book",ago:"SEPTEMBER 2026"},
    {href:"/blockchain/rollups-discover-the-income-statement/",kick:"Blockchain Infrastructure",title:"Rollups discover the income statement",ago:"SEPTEMBER 2026"},
    {href:"/blockchain/private-credit-moves-onchain/",kick:"Tokenization",title:"Private credit moves onchain",ago:"SEPTEMBER 2026"},
  ],
  body:[
    `A bank testing a stablecoin does not start with speed. It starts with the operations a supervisor will ask about when something goes wrong, and the list of those operations is short and unglamorous.`,
    `U.S. Bank completed a pilot of its USBDC token moving value between U.S. Bank entities in North America and Europe. <a href="https://coingeek.com/us-bank-stablecoin-debut-circle-buys-tazapay-to-boost-asia-rails/" rel="noopener">The transaction ran on the Stellar payments network</a>, in keeping with the bank's announcement last November that it had partnered with Stellar on the then-unnamed project.`,
    `The pilot was intended to evaluate minting, payment redemption, freezing and clawback capabilities. Those four verbs are the whole story. The first two are the product; the second two are the reason a regulated institution can offer it at all.`,
    `Freezing and clawback are precisely the functions that a permissionless token is designed to make impossible, and precisely the ones a bank cannot operate without. A supervised issuer has to be able to stop a transfer and reverse one, because the legal obligations it carries do not pause when value moves to a chain.`,
    `Chief executive Gunjan Kedia said the pilot "demonstrates our ability to accelerate global cash management and money movement abilities." Jamie Walker, the bank's head of digital strategy, called it "another step forward in our broader digital asset strategy."`,
    `The applications the bank says it is evaluating are treasury functions rather than retail ones: liquidity management, collateral mobility, cross-border treasury operations, and institutional uses where settlement speed and transparency have a measurable cost today.`,
    `That framing matters for anyone reading bank stablecoin announcements as consumer products. Internal cash movement between a bank's own entities is the least regulated and most immediately profitable use of a token, because both ends of the transaction are already inside the institution.`,
    `The pilot also feeds the bank's in-house Digital Asset Platform, which is where its tokenisation plans are meant to sit. A token is the first asset on a platform of this kind, not the purpose of building one.`,
    `Strategically, U.S. Bank is taking the path fewer banks have chosen. It is one of the few American institutions pursuing a go-it-alone stablecoin, mirroring JPMorgan's deposit token rather than joining a shared structure.`,
    `The contrast arrived a week earlier, when ten other U.S. banks joined a consortium of 21 banks planning stablecoins denominated in G7 currencies, beginning with the dollar and adding a euro-backed token later. That is the same product with the opposite theory of distribution.`,
    `Which approach wins depends on whether a bank stablecoin is a network or a feature. A consortium assumes the value is in reaching other banks' customers. A proprietary token assumes the value is in controlling your own plumbing, and U.S. Bank has now tested the plumbing end to end.`]}),

AI({ slug:"broadcom-forecast-prices-the-custom-silicon-boom", kick:"Semiconductors",
  headline:"Broadcom prices the custom silicon decade",
  dek:"A forecast taking AI-related chip revenue from $2.6bn to $230bn in six years describes a supply chain, not a product cycle — and the supply has already been bought.",
  metaDesc:"Broadcom's forecast would take its AI chip and networking revenue from $2.6 billion in fiscal 2022 to $230 billion in fiscal 2028, two orders of magnitude in six years.",
  author:"dana-whitfield", date:"2026-09-11T13:30:00Z",
  capt:"Custom silicon is a supply chain commitment before it is a chip.",
  tags:[{name:"Semiconductors",slug:"semiconductors"},{name:"AI Infrastructure",slug:"ai-infrastructure"},{name:"Enterprise AI",slug:"enterprise-ai"}],
  related:[
    {href:"/ai/samsung-openai-chip-partnership-deepens/",kick:"Semiconductors",title:"Samsung moves up OpenAI's chip stack",ago:"SEPTEMBER 2026"},
    {href:"/ai/the-buyers-started-making-their-own/",kick:"Semiconductors",title:"The buyers started making their own",ago:"SEPTEMBER 2026"},
    {href:"/ai/ai-infrastructure-spending-new-phase/",kick:"Analysis",title:"AI infrastructure spending moves into a new phase",ago:"AUGUST 2026"},
  ],
  body:[
    `The interesting number in an AI chip forecast is rarely the revenue. It is whether the company has already secured the manufacturing inputs required to deliver it, because everything upstream of a finished accelerator is booked years in advance.`,
    `Broadcom's forecast, given by chief executive Hock Tan alongside third-quarter fiscal 2026 results, would take the company's AI-related chip sales from $2.6 billion in fiscal 2022 to $230 billion in fiscal 2028. <a href="https://nextplatform.com/connect/2026/09/10/broadcom-rides-rocketing-trend-for-custom-ai-accelerators/5295681" rel="noopener">The Next Platform, which laid the figures out</a>, notes that this is two orders of magnitude in six years.`,
    `The line covers custom accelerators, AI networking, and the surrounding components that go into AI clusters. Grouping them is not padding. A custom accelerator that cannot be connected to forty thousand others at line rate is a research project, and the networking is where a large part of the difficulty lives.`,
    `What makes the forecast more than a slide is the procurement behind it. Broadcom has secured the high-bandwidth memory, the wafers and the packaging capacity to fulfil the revenue stream, which converts the number from a demand estimate into a supply commitment.`,
    `That distinction is the one to apply to every AI infrastructure projection this year. Demand for accelerators is not the constraint and has not been for two years. HBM allocation, advanced packaging slots and foundry capacity are the constraint, and they are contracted well ahead.`,
    `The company's position was not built during the boom. Broadcom had been helping Google design its tensor processing units and move them through Taiwan Semiconductor Manufacturing Company's foundry and packaging for seven years before generative AI arrived.`,
    `Seven years of doing unglamorous co-design work for one customer is what a moat looks like before anyone calls it one. The capability that matters is not a chip design; it is the accumulated knowledge of getting somebody else's chip through a fab.`,
    `The strategic consequence is that the counterweight to a merchant silicon monopoly is not another merchant vendor. It is the set of companies large enough to design their own accelerators and the partners who can get those designs manufactured.`,
    `For buyers, custom silicon changes the negotiation rather than the price. A hyperscaler with a credible internal part has an alternative to cite, and the existence of the alternative does more work in the conversation than the part does in the cluster.`,
    `For everyone below hyperscaler scale, the effect is indirect and mostly unhelpful. Custom parts absorb the same constrained memory and packaging capacity that merchant accelerators need, which means the largest buyers are competing with the rest of the market for the identical bottleneck.`,
    `The forecast is a forecast, and a six-year projection given to Wall Street is a statement of intent as much as an estimate. The part that is already real is the supply Broadcom has bought, and that is the part competitors cannot answer quickly.`]}),

];
