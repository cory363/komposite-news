/** Batch 44 — 24 September 2026. Three pieces.
 *
 *  MARKETS. Every figure attributed to the Brookings paper was read from the
 *  BPEA conference draft itself (Stijn Van Nieuwerburgh, "Financing the AI
 *  Buildout", draft dated 4 September 2026, circulated for the Fall 2026
 *  conference of 24–25 September): the $10.3tn, the 3.63 per cent of GDP, the
 *  Table 1 comparison with canals, railroads, electrification, highways and
 *  telecoms, the 57 GW installed and 509 GW pipeline, the Hyperion capital
 *  stack including the 90 per cent debt-to-asset ratio, the 1.12x coverage
 *  ratio, the 6.58 per cent coupon and the 100-basis-point premium, the
 *  Moody's and Wall Street Journal off-balance-sheet tallies, the $500bn
 *  Nvidia vendor facility, the $3.7tn revenue requirement and the conclusion
 *  that it would be premature to call the sector systemically risky. The two
 *  direct quotations from the author ("freaking complicated", the subprime
 *  comparison) are from the Reuters interview of 24 September, which this desk
 *  read via Investing.com; they are not in the paper.
 *
 *  Oracle's force majeure notice follows TechCrunch and CNBC, both of which
 *  are readable. The $18bn of Project Jupiter loans quoted at 89–91 cents is
 *  Bloomberg's reporting as relayed by third parties. The Bloomberg newsletter
 *  of 23 September on data-centre debt returned HTTP 403 to this desk and was
 *  not read; nothing in the piece rests on it, and the loan quote is labelled
 *  in the text as something we could not verify at source. The $165bn of
 *  industrial revenue bonds is from Doña Ana County's own announcement and is
 *  a property-tax abatement mechanism, not borrowing; the piece says so
 *  because most coverage does not.
 *
 *  BLOCKCHAIN. Written from UK Finance's own press release of 24 September,
 *  "UK banks complete first live customer transactions using tokenised
 *  sterling deposits", not from the wire summaries. Named quotations are from
 *  that release. Euronews supplied the initial tip only.
 *
 *  AI. The consumption findings are McKinsey's, presented in a McKinsey Live
 *  session and reported by Fortune on 23 September; the survey figures are
 *  from the State of AI global survey (1,719 respondents, 97 countries,
 *  fielded 4 May to 8 June 2026). mckinsey.com timed out repeatedly on this
 *  desk's connection, so the report's own PDF could not be opened; every
 *  survey number used here was cross-checked against at least two independent
 *  secondary accounts and is attributed to the survey rather than quoted from
 *  the document.
 *
 *  Heroes: Jan Huber, Sue Winston and Han-Hsing Tu via Unsplash, in
 *  tools/data/heroes.json. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const AI=P("ai","AI","ai"), BC=P("blockchain","Blockchain","blockchain"), MK=P("markets","Markets","markets");

export default [

AI({ slug:"the-price-fell-and-the-bill-rose", kick:"AI Economics",
  headline:"The price fell and the bill rose",
  dek:"McKinsey has put numbers on the thing every finance chief has noticed. A unit of intelligence keeps getting cheaper; the invoice keeps getting larger. One in five organisations now says cost is limiting what it does with AI, and the cost of the same task can vary thirtyfold between runs.",
  metaDesc:"McKinsey's State of AI survey finds one in five organisations say AI operating costs constrain their use of it, while agent task costs vary up to 30-fold between runs.",
  author:"dana-whitfield", date:"2026-09-24T18:30:00Z",
  capt:"A wall of electricity meters. Metered consumption is the billing model the AI industry has adopted, and the thing about a meter is that it is indifferent to the tariff.",
  tags:[{name:"AI",slug:"ai"},{name:"Pricing",slug:"pricing"},{name:"Cost Management",slug:"cost-management"}],
  related:[
    {href:"/ai/ten-days-after-the-pacing-call-the-price-fell/",kick:"AI Models",title:"Ten days after the pacing call, the price fell",ago:"SEPTEMBER 23, 2026"},
    {href:"/ai/inference-costs-reshape-product-design/",kick:"AI",title:"Falling inference costs are reshaping product design",ago:"AUGUST 9, 2026"},
    {href:"/business/cfo-scrutiny-technology-spend/",kick:"Business",title:"CFOs bring new scrutiny to technology spending",ago:"AUGUST 8, 2026"},
  ],
  body:[
    `On Tuesday the two largest American laboratories cut their prices within an hour of each other, and <a href="/ai/ten-days-after-the-pacing-call-the-price-fell/">this desk wrote up the supply side of it</a>. On Wednesday the demand side arrived. McKinsey's senior partners Tanguy Catlin and Lari Hämäläinen used a client session titled "Improving the Economics of Agentic AI" to make a point that sits awkwardly beside a price war: the cost of intelligence is collapsing and enterprise AI bills are going up anyway.`,
    `The arithmetic of the paradox is not in dispute. GPT-4 arrived in 2023 at $60 per million output tokens. Models that match it on the standard benchmarks now run at a small fraction of that, and Tuesday's cuts moved the frontier price down again — Anthropic's cache reads fell 60 per cent in a single release. "Intelligence at a certain capability level is getting a lot more affordable," Hämäläinen said, <a href="https://fortune.com/2026/09/23/mckinsey-cheaper-ai-models-bigger-ai-bills-cfo/" rel="noopener">as Fortune reported</a>. What has grown faster than the price has fallen is the quantity consumed.`,
    `McKinsey's own survey supplies the scale. Fielded between 4 May and 8 June across 1,719 respondents in 97 countries, it finds roughly one in five now say AI-related operating costs — token costs among them — are constraining how much AI they use. About a third put more than a tenth of their technology budget into AI. Sixty per cent expect to spend more next year regardless.`,
    `The mechanism is agents, and specifically the fact that an agent decides for itself how much work a task requires. A multistep job can be completed by a short path or a long one, and the firm reports that cost "variance can be up to 30x between different runs" of the same task. Hämäläinen's framing is the sharpest: "Imagine like you're running an operation, but every day there's a 30x difference in the cost."`,
    `That is a different complaint from the one usually filed under AI spending. A level can be budgeted; a level that moves thirtyfold for constant output cannot. Procurement is built to negotiate unit prices, and the unit price here is falling. What it is not built to do is forecast volumes set by a model's own judgement about how hard it should try.`,
    `The economics driving the volume explain why cheaper models make bills larger rather than smaller. McKinsey's threshold for a viable agent is that a success rate above roughly 10 per cent can generate value provided checking the work costs about a tenth of doing it manually. That is an argument about the cost of verification, not about model quality, and it licenses a strategy of many cheap attempts: every reduction in the price of an attempt widens the set of tasks worth attempting badly. Cheaper cache reads, likewise, reward feeding the model more context rather than less.`,
    `Software development is where this lands hardest, because coding agents are, as the firm puts it, very token hungry. It is also where the second-order effect shows up. Nearly a third of organisations report deciding against buying at least one software product or feature because they could now build it in-house with agentic tools. The AI line on the budget is not simply growing; it is partly eating the enterprise software line next to it. A finance chief challenged on AI spend has an answer available that most are not yet giving: some of it is not new money.`,
    `Against that sits the return. The same survey finds 37 per cent attributing any EBIT impact at all to AI, unchanged on last year, and 6 per cent qualifying as high performers deriving more than 5 per cent of EBIT from it, also unchanged. Eighty per cent of individual users report being more productive. The gap between the personal experience and the profit-and-loss statement has not closed in twelve months, while the bill has grown.`,
    `McKinsey's remedies are three: visibility into which use cases, units, agents and models are driving spend; workflow optimisation, meaning matching model complexity to the task, routing requests, caching reusable context and capping tool calls and agent loops; and sourcing discipline, meaning unused licences removed, quotas managed, terms negotiated and single-vendor dependence avoided. All three are sensible. Two of them are also products. Routing and caching are now features the laboratories sell, which means the most-recommended cost control is one the vendor configures, meters and prices.`,
    `The firm's own caution is the right one: cost reduction should not be indiscriminate, since the objective is to spend more on the highest-return applications and less on the rest. But that presupposes the organisation can tell which is which, and the survey's finding that only a third of firms can see where their AI spend is going suggests most cannot. Consumption pricing transfers the forecasting problem from the seller to the buyer. The laboratories know precisely what a token costs them. Their customers, on the present evidence, do not know how many they are about to buy.`,
    `The price war is therefore not the relief it looks like from the buyer's chair. It lowers the cost of every individual call and raises the number of calls worth making, and the second effect has so far been the larger one. The discipline question for the next four quarters is not whether models get cheaper — they will — but whether finance can learn to meter something engineering has just made elastic.`,
  ] }),

BC({ slug:"two-remortgages-and-a-marketplace", kick:"Tokenization",
  headline:"Two remortgages and a marketplace",
  dek:"Seven British banks moved tokenised sterling between each other on Thursday in the first live customer transactions of their kind. The settlement is not the interesting part. The condition attached to it is.",
  metaDesc:"UK Finance's Great British Tokenised Deposit project completed its first live interbank transactions on 24 September 2026 across seven banks, on infrastructure built by Quant.",
  author:"marcus-oyelaran", date:"2026-09-24T19:00:00Z",
  capt:"The Bank of England on Threadneedle Street. The central bank is one of four public bodies backing the project; none of them settled anything on Thursday.",
  tags:[{name:"Tokenization",slug:"tokenization"},{name:"Banking",slug:"banking"},{name:"Settlement",slug:"settlement"}],
  related:[
    {href:"/blockchain/eight-hundred-and-forty-seven-use-cases/",kick:"Regulation",title:"Eight hundred and forty-seven use cases",ago:"SEPTEMBER 24, 2026"},
    {href:"/blockchain/the-ecb-puts-central-bank-money-on-the-ledger/",kick:"Tokenization",title:"The ECB puts central bank money on the ledger",ago:"SEPTEMBER 22, 2026"},
    {href:"/fintech/sofi-settles-its-card-book-in-its-own-coin/",kick:"Stablecoins",title:"SoFi settles its card book in its own coin",ago:"SEPTEMBER 22, 2026"},
  ],
  body:[
    `Three live customer payments went through on Thursday that would have been unremarkable on any existing British payment rail. Two were remortgage completions. One was a private purchase on an online marketplace. What makes them worth reporting is that the money moved as tokenised commercial bank deposits between banks that do not share a ledger, and that in each case the money was released by a condition rather than by an instruction.`,
    `UK Finance, which convenes the Great British Tokenised Deposit project, <a href="https://www.ukfinance.org.uk/news-and-insight/press-release/uk-banks-complete-first-live-customer-transactions-using-tokenised" rel="noopener">announced the transactions in its own release</a>. Seven institutions are in the initiative: Barclays, HSBC UK, Lloyds Banking Group, Monzo, Nationwide, NatWest and Santander. The two remortgages were settled between Lloyds, NatWest and Barclays, with funds locked and then released automatically at completion; the marketplace payment involved HSBC, with the buyer's money held and released only once the goods changed hands. The platform was built by Quant as shared industry infrastructure, EY ran the programme and Linklaters wrote the legal framework and the rulebook.`,
    `The distinction worth drawing is between speed and conditionality. Britain already settles interbank payments quickly; Faster Payments clears in seconds and CHAPS settles same-day in central bank money. What neither does is hold a payment against a state of the world. Once sent, the money is gone, which is why the conveyancing chain relies on solicitors' client accounts, why marketplaces rely on escrow providers, and why both add a day and a fee to transactions that are otherwise instantaneous. A programmable deposit collapses that intermediary into the payment instruction itself. In the remortgage case the funds sat locked, still earning the customer interest, until completion was confirmed — and UK Finance says the pilot explored a digital integration with HM Land Registry to supply that confirmation.`,
    `That is the claim to novelty, and it is a real one. It is also narrower than the announcements suggest. Three transactions is three transactions. UK Finance has published no amounts, no settlement times and no failure data. The project does not yet have a legal entity: establishing a company and a governance framework is listed as work still to do, which means the rulebook under which these payments were made is a pilot document rather than a scheme rule enforceable between members.`,
    `The strategic point is about what kind of money this is. A tokenised deposit is a claim on a licensed bank, carrying the deposit protection and the supervisory apparatus that go with one. It is not a stablecoin, and the whole design is an answer to stablecoins — the argument that programmability is a property of the ledger rather than a property of the issuer, and that a bank can therefore offer conditional money without anyone having to accept the credit of a payments company. Canada's regulators reached the <a href="/blockchain/canada-rules-a-token-is-still-a-deposit/">same conclusion from the other direction</a> this month by ruling that a token backed by deposits is still a deposit. The British version is the affirmative case: keep the liability where it is and change what it can do.`,
    `It is also not central bank money, which is where this week's other developments sit. The European Central Bank's Pontes, <a href="/blockchain/the-ecb-puts-central-bank-money-on-the-ledger/">launched on Monday</a>, settles tokenised assets in central bank money and solves a different problem — the finality of the cash leg for institutional securities trades. The Hong Kong Monetary Authority's work <a href="/blockchain/hong-kong-tokenises-the-collateral-first/">starts from the collateral</a> rather than the payment. GBTD is aimed at retail and commercial flows: a house purchase, a marketplace order, eventually a supply-chain payment. The Bank of England, HM Treasury, the Financial Conduct Authority and the Payment Systems Regulator all back the project, but none of them settled anything on Thursday. The money used was the banks' own.`,
    `Official enthusiasm is not in short supply. "These first live transactions mark a critical milestone for payments innovation in the UK," said Lucy Rigby, the Economic Secretary to the Treasury. Jana Mackintosh, UK Finance's managing director of payments and innovation, framed the result as showing "practical, real-world benefits and contingent payments that give customers greater control over their money". Chris Woolard, the government's digital markets champion, described the project as part of "moving the UK to a multi-money, multi-asset system".`,
    `The next phase is the one that will test the architecture. The banks intend to issue digital debt instruments that can be traded and settled against tokenised deposits, with coupons paid the same way — three bonds, expected in the first quarter of 2027. That requires delivery against payment across two separate token systems, and the project's stated ambition goes further, to delivery versus payment versus reserves, in which the securities leg, the commercial bank money leg and the central bank reserve leg all move together. That is the point at which the Bank of England stops being a supporter and becomes a participant, and it is a materially harder problem than releasing a remortgage on a confirmation from the Land Registry.`,
    `European supervisors, meanwhile, have just made tokenisation a priority while <a href="/blockchain/eight-hundred-and-forty-seven-use-cases/">admitting they have no baseline measurement of it</a>. Britain's approach has been the reverse: build the thing with the incumbents, under the regulators' eye, and produce the evidence first. Thursday's evidence amounts to three payments. The number matters less than the fact that it is a number at all.`,
  ] }),

MK({ slug:"ninety-cents-on-the-dollar", kick:"AI Infrastructure",
  headline:"Ninety cents on the dollar",
  dek:"A Brookings paper published on Wednesday puts the American AI build-out at $10.3tn by 2032 — larger relative to output than the railroads, electrification or the interstates — and argues its risk has migrated to structures that do not report it. On Thursday, Oracle sent a force majeure notice on a campus whose loans were already trading below par.",
  metaDesc:"Stijn Van Nieuwerburgh's BPEA paper estimates $10.3tn of US AI infrastructure investment over 2025-32, averaging 3.63 per cent of GDP, with risk moving off balance sheet.",
  author:"priya-raghavan", date:"2026-09-24T19:30:00Z",
  capt:"A construction site under heavy cloud. The paper's benchmark is that a 200-megawatt AI campus costs about $8.2bn, roughly two-thirds of it equipment whose useful life is shorter than the debt raised against the building.",
  tags:[{name:"AI Infrastructure",slug:"ai-infrastructure"},{name:"Private Credit",slug:"private-credit"},{name:"Data Centers",slug:"data-centers"}],
  related:[
    {href:"/markets/the-long-end-stops-standing-still/",kick:"Fixed Income",title:"The long end stops standing still",ago:"SEPTEMBER 24, 2026"},
    {href:"/ai/nscales-backlog-has-two-names-on-it/",kick:"AI Infrastructure",title:"Nscale's backlog has two names on it",ago:"SEPTEMBER 22, 2026"},
    {href:"/ai/two-hundred-and-seventy-eight-billion/",kick:"AI",title:"Two hundred and seventy-eight billion",ago:"SEPTEMBER 20, 2026"},
  ],
  body:[
    `Stijn Van Nieuwerburgh of Columbia Business School has produced the first serious accounting of how the American AI build-out is being paid for. His conference draft for the Brookings Papers on Economic Activity, <a href="https://www.brookings.edu/articles/financing-the-ai-buildout/" rel="noopener">summarised by Brookings on Wednesday</a>, estimates $10.3tn of investment over 2025 to 2032, averaging 3.63 per cent of GDP a year. His own comparison table is the context: the railroads of 1870–90 ran at 2.24 per cent of GDP, the interstate highways at 1.13, the telecoms and fibre boom of 1996–2003 at 1.10. Nothing in American history has been this large relative to output. Against 57 gigawatts of operating US capacity he counts an announced pipeline of 509, of which he assumes 183 gigawatts arrive by 2032 and 227 never.`,
    `The financing argument is where the paper earns its keep. Combined capital expenditure at Oracle, Microsoft, Amazon, Meta and Alphabet rose from about $97bn in 2020 to more than $400bn in 2025 and is projected above $800bn this year, surpassing their combined operating cash flow for the first time. Beyond that point the money comes from outside. Morgan Stanley, whom the paper cites, expects more than half of the $2.9tn needed through 2028 to be external capital, with private credit supplying about $800bn of it.`,
    `Meta's Hyperion campus is the worked example, and worth setting out precisely because it is the template — about two gigawatts and $30bn. Meta sold 80 per cent of the equity to Blue Owl for roughly $2.5bn; the joint venture then raised $27bn of debt in October 2025, rated A+ — one notch below Meta's own rating, and the largest single investment-grade corporate issue in American history. That is a debt-to-asset ratio of about 90 per cent at project level and a coverage ratio of 1.12 times, against Meta's own book leverage of roughly 25 per cent. The bonds priced at 6.58 per cent, at least a percentage point above what Meta would have paid unsecured — more than $5bn of extra interest over the life of the deal, reaching bondholders through the lease. Meta is not buying cheaper money. It is buying a thinner balance sheet.`,
    `The credit rests on five four-year leases running to the 2049 maturity, each with a termination right and a residual-value guarantee covering any shortfall on sale. Neither reaches Meta's balance sheet until it takes effect, though one must. Moody's puts hyperscaler lease commitments at roughly $970bn, about $660bn of it unrecognised.`,
    `Then the circularity. In August a private-credit consortium stood up a $500bn facility to finance purchases of Nvidia chips, against which Nvidia wrote a 25 per cent residual-value guarantee — a backstop of up to $125bn from the supplier of the collateral. Exposures that look independent deal by deal rest on the same tenants, chips and forecast; the beta of listed data-centre REITs against the S&amp;P 500 has duly risen from about 0.5 to about 1.`,
    `The underwriting question reduces to one figure: the build-out needs about $3.7tn of annual revenue by 2032 to earn a 10 per cent unlevered return, or roughly $5.50 per installed GPU-hour. That sits inside today's range of frontier rental prices, and has to stay there after 180 gigawatts of new supply arrives. "This is freaking complicated," the author <a href="https://www.investing.com/news/economy-news/financing-of-historic-ai-buildout-raises-systemic-risks-in-us-researcher-says-4914834" rel="noopener">told Reuters</a>, adding that "this opacity of all these special purpose vehicles is somewhat reminiscent of what happened in the subprime mortgage crisis". The paper is more careful: it would be "premature to conclude that AI infrastructure already poses systemic risk comparable to earlier credit booms".`,
    `Thursday supplied a data point. Oracle sent a force majeure notice to a Blue Owl unit over Project Jupiter, the 2.45-gigawatt Stargate campus in New Mexico, <a href="https://techcrunch.com/2026/09/24/oracle-sends-force-majeure-notice-on-its-new-mexico-stargate-data-center/" rel="noopener">as TechCrunch reported</a>. Oracle is not walking away as anchor tenant; it is preserving its position on payments should the site miss 2028. The causes are what the paper files under execution risk: an Energy Transfer pipeline delayed six months after repeated permit refusals, and an air-quality permit for the campus fuel cells still pending. "Project Jupiter remains on our planned schedule," Oracle said, and Blue Owl said the notice changed nothing about its commitments. The shares fell about 4 per cent.`,
    `One thing about that campus is worth getting right, because most accounts do not. The $165bn of industrial revenue bonds approved by Doña Ana County is not borrowing: in New Mexico an IRB is a property-tax abatement under which the county takes nominal title for up to thirty years while the developer arranges its own financing. The actual financing is roughly $18bn of syndicated leveraged loans, which Bloomberg reports were quoted between 89 and 91 cents on the dollar before the notice went out. This desk could not read Bloomberg at source — its 23 September newsletter on data-centre debt returned an error to us, and nothing here rests on it — but Oracle's own paper points the same way: S&amp;P cut the company to BBB− in July, and its ten-year bonds now yield around 6.5 per cent.`,
    `A project loan at ninety cents is not a crisis. It is a syndicate asking for more cushion on a build that slipped two quarters because a pipeline did not arrive. It is also the first public price on the risk the paper describes: long-dated debt written against one tenant, one site and one demand forecast, in a structure whose ultimate holders are not disclosed.`,
  ] }),

];
