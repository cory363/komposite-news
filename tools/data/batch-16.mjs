/** Batch 16 — two stories found on the wire and verified against the primary
 *  announcements. Quotes are real, taken from the companies' own releases and
 *  attributed to named speakers with titles. Nothing here is rewritten from
 *  another outlet's copy; the discovery was Brave, the reporting is the
 *  primary document. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const CR = P("crypto","Crypto","crypto"), F = P("fintech","Fintech","fintech");

export default [

CR({ slug:"visa-onchain-lending-settlement-data", kick:"Payments",
  headline:"Visa opens settlement data to DeFi lenders",
  dek:"VisaNet settlement records are being wired into onchain credit facilities, so a card programme's receivables can be underwritten while they are still in flight.",
  metaDesc:"Visa is wiring VisaNet settlement data into onchain lending, opening working capital to stablecoin card programmes. Settlement volume is at a $20bn run rate.",
  author:"elena-vasquez", date:"2026-09-08T15:30:00Z",
  capt:"Settlement receivables are collateral that has never been legible to lenders in real time.",
  tags:[{name:"Payments",slug:"payments"},{name:"Digital Assets",slug:"digital-assets"},{name:"Capital Markets",slug:"capital-markets"}],
  body:[
    `A card programme's most reliable asset is money it has already earned and not yet received. Settlement receivables are predictable, short-dated and backed by completed transactions, and they have been almost impossible to borrow against, because no lender could see how they performed until after they had settled.`,
    `Visa said on September 8 that it is <a href="https://investor.visa.com/news/news-details/2026/Visa-Brings-Onchain-Lending-into-Everyday-Payments/default.aspx" rel="noopener">connecting VisaNet settlement data to onchain lending infrastructure</a>, so that lenders financing stablecoin-linked card programmes can underwrite those receivables directly.`,
    `The scale behind the announcement is the part worth reading twice. Visa counts more than 160 stablecoin-linked card programmes on its network, with payment volume on them up roughly 200% year over year. Its own stablecoin settlement volume has passed a $20 billion annualised run rate, a figure the company puts at more than fifteen times where it stood a year ago.`,
    `The lending market it is plugging into is larger still. Visa's release puts $694 billion of stablecoin-denominated loans through onchain lending protocols since 2020 — a credit market that grew up entirely outside the banking system and has, until now, had no clean way to price a payments company's cash flows.`,
    `"Stablecoins are not only changing how money moves, they're creating opportunities to rethink the financial infrastructure that supports payments," said Rubail Birwadker, Visa's global head of growth products and partnerships, in the release.`,
    `The model has been running quietly. Visa has been working with Credit Coop, a lending platform that automates funding, collateral management and repayment through smart contracts. That facility has supported more than $2.5 billion in cumulative financed settlement volume since 2023, across more than 3,000 borrow events and 9,000 repayment events, with zero defaults across participating facilities.`,
    `Zero defaults over a $2.5 billion book is the number that will get attention, and it deserves a caveat: the collateral is short-dated receivables from completed card transactions, which is close to the safest thing a lender can hold. The absence of losses says less about onchain credit than about the quality of the asset.`,
    `Credit Coop's chief executive, Chris Walker, framed the gap the arrangement closes. "Payment companies have always had good collateral in their settlement receivables, but no way to show lenders how it performs in real time," he said.`,
    `That is the actual change. Fast-growing payment companies typically fail a traditional credit assessment not because their economics are poor but because they lack operating history. Underwriting against live settlement performance substitutes observable behaviour for the years of audited accounts a bank would otherwise require.`,
    `It also places Visa in an unfamiliar position. The company is not lending. It is supplying the data that makes someone else's lending decision possible, which makes its settlement network a credit bureau for a market it does not regulate. That is a durable position, and a quiet one.`,
  ],
  related:[
    {href:"/fintech/tabapay-buys-transact-bank/",kick:"Banking",title:"TabaPay buys a bank to close the loop",ago:"SEPTEMBER 8, 2026"},
    {href:"/crypto/sec-proposes-regulation-crypto-assets/",kick:"Regulation",title:"SEC proposes a $75m crypto exemption",ago:"SEPTEMBER 8, 2026"},
    {href:"/fintech/treasury-genius-act-stablecoin-rules/",kick:"Regulation",title:"Treasury drafts the stablecoin perimeter",ago:"SEPTEMBER 8, 2026"},
  ]}),

F({ slug:"tabapay-buys-transact-bank", kick:"Banking",
  headline:"TabaPay buys a bank to close the loop",
  dek:"A processor moving more than $100bn a year is acquiring an OCC-chartered bank, which turns a dependency on sponsor banks into something it owns.",
  metaDesc:"TabaPay has raised $155m led by FTV Capital and plans to acquire Transact Bank, an OCC-chartered lender it will rename TabaBank, closing in the fourth quarter.",
  author:"elena-vasquez", date:"2026-09-08T14:45:00Z",
  capt:"Owning the charter changes what a processor is allowed to do.",
  tags:[{name:"Payments",slug:"payments"},{name:"Regulation",slug:"regulation"},{name:"Compliance",slug:"compliance"}],
  body:[
    `Every payments company that is not a bank rents its access to the banking system. A sponsor bank holds the charter, carries the regulatory relationship and takes a cut, and the processor builds its business on top of an arrangement it does not control.`,
    `TabaPay is buying its way out of that. The company <a href="https://ftvcapital.com/2026/tabapay-closes-155-million-strategic-growth-financing-led-by-ftv-capital-and-announces-planned-acquisition-of-transact-bank/" rel="noopener">closed $155 million in strategic growth financing led by FTV Capital</a> and announced its intent to acquire Transact Bank, N.A., an OCC-chartered and FDIC-insured bank based in Denver.`,
    `The bank will be renamed TabaBank, N.A. and will sit alongside the processor under TabaHoldings, Inc., a newly registered bank holding company. The transaction is expected to close in the fourth quarter of 2026, subject to regulatory approval — the condition that decides whether any of this happens.`,
    `The company is not small. TabaPay says it is on track to process more than $100 billion in payment volume this year, ranks as the fifth-largest card-not-present processor in the United States by transaction count, and touches roughly one-third of American households. It currently works through a network of more than 20 partner banks across the US and Canada.`,
    `That last figure explains the deal. Twenty sponsor relationships is not diversification so much as overhead: twenty sets of risk appetites, twenty compliance regimes, and twenty conversations every time a client wants to do something unusual.`,
    `"The planned launch of TabaBank will bring payments and banking capabilities under one roof, offering our clients a more integrated experience," said Rodney Robinson, TabaPay's co-founder and chief executive.`,
    `The strategic logic is that a charter converts a permission into an asset. A processor with its own bank can hold deposits, sponsor card programmes directly and take on the categories sponsor banks tend to decline. TabaPay's release names digital banking and debt repayment among them, alongside support for RTP and FedNow, ACH and wire, and card sponsorship across the major networks.`,
    `The cost is supervision. Buying a national bank means acquiring a primary regulator, capital requirements and an examination cycle, and doing it inside a newly formed holding company that the Federal Reserve will supervise. Firms that make this move generally find that the compliance burden arrives faster than the revenue.`,
    `Robert Anderson, a partner at FTV Capital, joins the board. The financing includes both primary capital and a secondary transaction, which means some existing holders took money off the table — normal at this stage, and worth noting when reading a growth round as a pure vote of confidence.`,
  ],
  related:[
    {href:"/crypto/visa-onchain-lending-settlement-data/",kick:"Payments",title:"Visa opens settlement data to DeFi lenders",ago:"SEPTEMBER 8, 2026"},
    {href:"/fintech/treasury-genius-act-stablecoin-rules/",kick:"Regulation",title:"Treasury drafts the stablecoin perimeter",ago:"SEPTEMBER 8, 2026"},
    {href:"/markets/sec-transfer-agent-rules-proposal/",kick:"Market Structure",title:"The SEC reopens the transfer agent rules",ago:"SEPTEMBER 8, 2026"},
  ]}),

];
