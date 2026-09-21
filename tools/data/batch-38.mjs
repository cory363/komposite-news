/** Batch 38 — 21 September 2026. Five pieces, five desks. The Bank of Russia
 *  figures are from the draft regulation as reported; the Kredete deal price
 *  was not disclosed and no figure is implied. Box-office figures are
 *  Variety's market-share numbers as relayed, and the gross is worldwide
 *  unless the piece says otherwise. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const ST=P("startups","Startups","startups"), BC=P("blockchain","Blockchain","blockchain"),
      CR=P("crypto","Crypto","crypto"), CU=P("culture","Culture","culture"), FT=P("fintech","Fintech","fintech");

export default [

ST({ slug:"stoke-raises-a-billion-for-reuse", kick:"Venture",
  headline:"Stoke raises a billion for reuse",
  dek:"A company that has not yet reached orbit has now raised $2.3bn on the argument that the second stage has to come back too.",
  metaDesc:"Stoke Space raised $1 billion in a Series E co-led by Point72 Ventures and Spark Capital, targeting a first orbital launch of its reusable Nova rocket in 2027.",
  author:"grace-lindqvist", date:"2026-09-21T13:20:00Z",
  capt:"A launch plume after sunset. On almost every rocket flying, the stage that made it is discarded.",
  tags:[{name:"Venture Capital",slug:"venture-capital"},{name:"Infrastructure",slug:"infrastructure"},{name:"Startups",slug:"startups"}],
  related:[
    {href:"/startups/building-startups-for-one-customer/",kick:"Venture",title:"Building startups for one customer",ago:"SEPTEMBER 20, 2026"},
    {href:"/startups/boring-company-raises-three-billion-for-the-gulf/",kick:"Venture",title:"The Boring Company raises $3bn and moves the work abroad",ago:"SEPTEMBER 11, 2026"},
    {href:"/startups/the-money-moves-to-the-layer-that-retries/",kick:"Venture",title:"The money moves to the layer that retries",ago:"SEPTEMBER 14, 2026"},
  ],
  body:[
    `Rocket companies are valued on a promise, and the size of the promise is usually the size of the cheque. Stoke Space has now raised $1bn against a promise nobody has kept: a rocket where every part of it comes home.`,
    `The Series E, <a href="https://evertiq.com/news/2026-09-21-stoke-space-raises-1-billion-to-accelerate-fully-reusable-launch" rel="noopener">announced on Monday</a>, was co-led by Point72 Ventures and Spark Capital, with General Innovation, Glade Brook Capital, Washington Harbour Partners, Woven Capital, Y Combinator and others participating. It takes the company's total raised to $2.3bn.`,
    `The distinction that justifies the money is narrow and expensive. Falcon 9 returns its first stage and discards its second; the upper stage, the part that reaches orbital velocity, is thrown away on every flight. Stoke's design brings both back, which is why the company exists and why it has taken this long.`,
    `Physics explains the difficulty. A first stage separates at a few thousand kilometres an hour and comes back through thin air. A second stage is travelling at orbital speed, and slowing it down means either carrying fuel you would rather spend on payload or surviving a re-entry that melts most materials.`,
    `Andy Lapsa, the co-founder and chief executive, puts the case in transport terms rather than aerospace ones: "Every mature transportation system is built around fully reusable vehicles. It's the only way to reach the cost floor while scaling availability."`,
    `That is the right frame and it is worth being precise about it. Aviation became cheap not when aircraft got bigger but when the same airframe could fly thousands of times. Launch is still at the stage of building a new aeroplane for every flight, and partially reusing it.`,
    `What the money buys is time to prove it. Nova Pathfinder, the near-term test vehicle, is approaching a first flight, with an orbital attempt targeted for early 2027 and a larger Block 2 vehicle behind it. Until that flies, the thesis is drawings and static fires.`,
    `The investors are not pretending otherwise. Chris Morales of Point72 Ventures described the company as having shown "exceptional technical progress and the ambition to build a launch system capable of serving the market at industrial scale", which is a careful way of saying the hard evidence comes later.`,
    `The market context is what makes a billion rational. Launch demand is no longer speculative — constellations, defence payloads and the flood of small satellites have made capacity the constraint — and anyone who genuinely halves the cost per kilogram inherits a queue.`,
    `The risk is equally plain. Full reusability has been attempted before by companies that ran out of money one flight short, and the graveyard of launch startups is full of good engineering that was correct and late. $1bn buys roughly two more years of being early.`]}),

BC({ slug:"nyse-brings-its-matching-engine-onchain", kick:"Tokenization",
  headline:"NYSE brings its engine onchain",
  dek:"ICE plans a tokenised trading venue for 2027 that pairs the exchange's own matching engine with blockchain settlement. The incumbent has decided to compete rather than object.",
  metaDesc:"ICE plans to launch a Digital Trading Platform in early 2027, combining NYSE's Pillar matching engine with blockchain-based settlement for regulated securities.",
  author:"marcus-oyelaran", date:"2026-09-21T13:00:00Z",
  capt:"The matching engine stays. The plumbing underneath it changes.",
  tags:[{name:"Tokenization",slug:"tokenization"},{name:"Market Structure",slug:"market-structure"},{name:"Capital Markets",slug:"capital-markets"}],
  related:[
    {href:"/blockchain/the-exemption-picks-its-winners/",kick:"Tokenization",title:"The exemption picks its winners",ago:"SEPTEMBER 20, 2026"},
    {href:"/blockchain/stock-tokens-get-a-five-year-door/",kick:"Tokenization",title:"Stock tokens get a five-year door",ago:"SEPTEMBER 17, 2026"},
    {href:"/crypto/perpetual-futures-come-for-the-stocks/",kick:"Market Structure",title:"Perpetual futures come for the stocks",ago:"SEPTEMBER 20, 2026"},
  ],
  body:[
    `The standard story about tokenised securities has crypto venues arriving to take business from the exchanges. The exchange that owns the New York Stock Exchange has read the same story and decided to write the sequel itself.`,
    `Intercontinental Exchange plans to launch what it calls the Digital Trading Platform at the beginning of 2027, <a href="https://www.tradersmagazine.com/xtra/incumbent-exchanges-to-benefit-from-disruptors" rel="noopener">Traders Magazine reports</a>: NYSE's Pillar matching engine on the front end, blockchain-based post-trade systems behind it, built for round-the-clock trading and onchain settlement of regulated securities. ICE is working with the SEC on moving NYSE-listed securities onchain inside its existing regulated framework.`,
    `The architecture is the argument. Nothing about tokenisation requires replacing the part of an exchange that matches buyers to sellers; Pillar is fast, tested and trusted. What tokenisation changes is what happens after the match — settlement, custody, the transfer agent — and that is precisely the layer ICE is swapping out.`,
    `The pieces have been assembled in public. ICE took a position in Securitize in March and agreed a memorandum with tZERO in August, under which tZERO becomes a design partner for a digital transfer agent and broker-dealer, licensing 103 patents into the platform. BNY and Citi are working on tokenised deposits across clearing houses.`,
    `Read that list and the shape is a supply chain, not an experiment. A tokenised market needs an issuer record, a transfer agent, a settlement asset and a venue. ICE has now contracted for each of them.`,
    `The competitive read from the sell side is that none of this is a threat to the incumbents. Ashish Sabadra of RBC Capital Markets told the publication that these disruptions are best viewed as "addressable market expanders rather than cannibalization risks" — 24/7 trading, prediction markets and tokenisation growing the pie rather than moving slices of it.`,
    `That is comfortable and probably half right. The incumbents own the listings, the surveillance and the regulatory relationships, and <a href="/blockchain/the-exemption-picks-its-winners/">the SEC's tokenised-stock exemption was written with caps and issuer opt-outs</a> that make it hard for a challenger to build real scale inside it.`,
    `The half that is wrong is the assumption that market structure changes gently. The interesting question is not whether ICE can build this but what a 24-hour equity market does to the practices built around a closing auction, a settlement cycle and a night when nothing trades.`,
    `<a href="/crypto/perpetual-futures-come-for-the-stocks/">Kalshi, Coinbase and Kraken filed on Friday for perpetual futures on single stocks</a>, which is the same demand arriving through a different door. Between the two, the US equity market is being asked to stay open permanently.`,
    `The date to hold is early 2027. If ICE ships on time, the tokenisation argument stops being about whether regulated venues will do this and becomes about which of them does it best, which is a far less interesting question and a far larger business.`]}),

CR({ slug:"russia-caps-bank-crypto-at-one-per-cent", kick:"Regulation",
  headline:"Russia caps bank crypto at one per cent",
  dek:"Draft rules from the central bank would hold every bank's total crypto exposure to a hundredth of its capital, and weight what remains at 1,250%.",
  metaDesc:"The Bank of Russia has proposed limiting banks' total crypto exposure to 1% of capital, with a 1,250% risk weight and reporting to begin in January 2027.",
  author:"jonathan-bright", date:"2026-09-21T12:40:00Z",
  capt:"A permission that comes with a 1,250% risk weight is a permission in name.",
  tags:[{name:"Regulation",slug:"regulation"},{name:"Digital Assets",slug:"digital-assets"},{name:"Banking",slug:"banking"}],
  related:[
    {href:"/blockchain/canada-rules-a-token-is-still-a-deposit/",kick:"Regulation",title:"Canada rules that a token is still a deposit",ago:"SEPTEMBER 12, 2026"},
    {href:"/fintech/brazil-closes-one-door-to-stablecoins/",kick:"Payments",title:"Brazil closes one door to stablecoins",ago:"SEPTEMBER 20, 2026"},
    {href:"/fintech/treasury-genius-act-stablecoin-rules/",kick:"Regulation",title:"Treasury drafts the stablecoin perimeter",ago:"SEPTEMBER 8, 2026"},
  ],
  body:[
    `Three weeks after letting its banks into crypto, Russia has published the terms, and the terms are the policy.`,
    `The Bank of Russia's draft regulation would cap a credit institution's total exposure to cryptocurrencies and foreign digital instruments at 1% of its own capital, <a href="https://crypto.news/bank-of-russia-sets-1-crypto-risk-limit-under-draft-rules" rel="noopener">crypto.news reports</a>, through two new ratios: N31 for individual banks and N32 for banking groups on a consolidated basis.`,
    `The definition of exposure is drawn widely, which is where these rules do their work. It covers direct holdings, loans and credit lines tied to crypto, derivatives and bonds whose payments depend on it, repo transactions and guarantees. There is no obvious structure that gets a bank around the limit by changing the wrapper.`,
    `The capital treatment makes the cap almost redundant. Aggregate crypto exposure would carry a 1,250% risk weight, the international convention for an asset a supervisor wants funded entirely by equity: hold one rouble of it and set aside a rouble of capital.`,
    `There is a gradation inside that, and it rewards the transactions supervisors can see. Exchange-traded derivatives and qualifying over-the-counter positions with approved counterparties sit in a group where opposing long and short positions can be netted. Direct holdings and crypto-settled loans sit in a group where they cannot.`,
    `Compliance is continuous rather than quarterly. Banks would have to meet the ratios every operating day, and six breaches in any thirty operating days would trigger enforcement. Reporting begins in January 2027, with the regulation expected in the final quarter of this year.`,
    `Put beside the retail regime that began on 1 September, the design becomes legible. Ordinary investors may buy up to 300,000 roubles of eligible crypto a year and qualified investors face no ceiling, while the banks that would otherwise intermediate all of it are held to one per cent of capital.`,
    `That is a deliberate separation of risk from the payment system. Households may take the exposure; the institutions whose failure would be the state's problem may barely touch it. It is the same instinct behind the Basel treatment of crypto assets, executed with less ambiguity.`,
    `It is also consistent with what other supervisors did this month. <a href="/blockchain/canada-rules-a-token-is-still-a-deposit/">Canada confirmed that a tokenised deposit is a deposit</a>, and <a href="/fintech/brazil-closes-one-door-to-stablecoins/">Brazil shut stablecoins out of bulk currency settlement</a>. Each answer differs; the shared principle is that the regulated core is where the line gets drawn.`,
    `The practical effect for Russian banks is that crypto becomes a client service rather than a balance-sheet business. Custody, execution and structured exposure where the bank does not carry the loss remain available. Anything that requires the bank to own the asset has been priced out.`]}),

CU({ slug:"four-hundred-million-on-a-ten-million-film", kick:"Film",
  headline:"Four hundred million on a ten-million film",
  dek:"A horror picture directed by a twenty-one-year-old made more this summer than most studio tentpoles, and made its distributor the fourth-largest in America.",
  metaDesc:"A24's Backrooms took about $402 million worldwide on a $10 million budget, lifting the studio to fourth place among US distributors this summer.",
  author:"colin-abernathy", date:"2026-09-21T12:20:00Z",
  capt:"The economics of horror have always been the best argument against the tentpole.",
  tags:[{name:"Film",slug:"film"},{name:"Entertainment",slug:"entertainment"},{name:"Business of Culture",slug:"business-of-culture"}],
  related:[
    {href:"/culture/stones-throw-at-thirty-sells-curation/",kick:"Business of Culture",title:"At thirty, an independent label sells curation",ago:"SEPTEMBER 14, 2026"},
    {href:"/business/thirty-films-a-year-and-a-monitor-for-cnn/",kick:"Antitrust",title:"Thirty films a year, a monitor for CNN",ago:"SEPTEMBER 20, 2026"},
    {href:"/culture/producers-ask-governments-to-fund-local-stories/",kick:"Business of Culture",title:"Producers ask governments to make streamers pay for local stories",ago:"SEPTEMBER 2026"},
  ],
  body:[
    `The cheapest film in the conversation won the summer. Backrooms, made for about $10m and released at the end of May, has taken roughly $402m worldwide, which is A24's biggest picture ever and a return that no studio tentpole came close to matching.`,
    `The consequence shows up in the distributor table. <a href="https://screenrant.com/a24-backrooms-summer-box-office-market-domination" rel="noopener">Citing Variety's figures</a>, A24 finished the summer fourth in the domestic market with about $237m, ahead of Paramount at $192m and Warner Bros. at $165m, behind only Universal, Sony and Disney.`,
    `Hold those numbers side by side. A24 outgrossed two of the six major studios domestically while spending a fraction of what either of them spends on a single franchise instalment, and it did so with a film whose director, Kane Parsons, is twenty-one and came out of making videos on the internet.`,
    `Horror has always been the genre where the arithmetic favours the small. The audience turns up on the opening weekend regardless of stars, the production costs are bounded by the fact that darkness is cheap, and a concept that travels needs no translation.`,
    `What is new is where the concept came from. The Backrooms began as an internet creepypasta — endless empty office corridors under fluorescent light — and was built into a following by a teenager posting short films, which is a development pipeline no studio owns and none can easily buy.`,
    `The casting of Chiwetel Ejiofor is the detail that shows how the model has matured. An established actor taking the lead in a film by a first-time director working from internet folklore is not a stunt; it is a signal that the route is now legitimate.`,
    `For the majors the lesson is uncomfortable, because it is not new. Every decade produces a cheap film that outperforms the slate, and every decade the response is to option the property rather than to change the cost base. A sequel is already in development.`,
    `<a href="/business/thirty-films-a-year-and-a-monitor-for-cnn/">Paramount is currently negotiating a commitment to release thirty films a year</a> as part of an antitrust settlement, which is a promise about volume made by a company whose summer was beaten by one picture costing $10m.`,
    `The caution is that A24's summer was not all Backrooms. The Invite took $55.7m worldwide, Tony $18.3m and The Death of Robin Hood $5.3m — a normal spread of modest results around one enormous outlier, which is what an independent's year usually looks like.`,
    `That is the honest version of the story. Nobody has found a repeatable way to make $400m from $10m; what A24 has is a cost base low enough that one such film changes the year, and a relationship with an audience that the studios keep trying to buy rather than build.`]}),

FT({ slug:"the-payments-layer-buys-its-plumbing", kick:"Payments",
  headline:"The payments layer buys its plumbing",
  dek:"Kredete, which moves $18bn a year for diaspora customers, has bought the stablecoin settlement network underneath it. Owning the rail is becoming the strategy again.",
  metaDesc:"Kredete has acquired Gravv, a stablecoin settlement network handling $3bn in annualised volume, to own the infrastructure behind its cross-border payments.",
  author:"elena-vasquez", date:"2026-09-21T12:00:00Z",
  capt:"Every payments company eventually decides to own the part it rents.",
  tags:[{name:"Payments",slug:"payments"},{name:"Stablecoins",slug:"stablecoins"},{name:"Emerging Markets",slug:"emerging-markets"}],
  related:[
    {href:"/fintech/brazil-closes-one-door-to-stablecoins/",kick:"Payments",title:"Brazil closes one door to stablecoins",ago:"SEPTEMBER 20, 2026"},
    {href:"/fintech/chime-buys-the-bank-it-was-renting/",kick:"Banking",title:"Chime buys the bank it was renting",ago:"SEPTEMBER 15, 2026"},
    {href:"/blockchain/the-ledger-nets-the-old-rails-settle/",kick:"Tokenization",title:"The ledger nets, the old rails settle",ago:"SEPTEMBER 16, 2026"},
  ],
  body:[
    `A pattern has repeated three times this month in different markets: the company that sells the customer experience buys the infrastructure it had been renting.`,
    `Kredete, which provides payments, savings and stablecoin-based products to emerging-market and diaspora customers across more than 60 countries, <a href="https://techcabal.com/2026/09/21/kredete-acquires-gravv-to-build-agentic-stablecoin-infrastructure-for-real-time-global-money-movement" rel="noopener">said on Monday that it has acquired Gravv</a>, a settlement network connecting banks, blockchains and local payment rails. Terms were not disclosed.`,
    `The scale figures explain the logic. Kredete says it serves more than 6.5 million users and processes $18bn of payments on an annualised basis, against $24.75m raised. Gravv says it handles more than $3bn annualised for over 1,000 businesses in more than 100 countries, with seven global banking partners.`,
    `A cross-border payment is not one transaction. It is a chain: collect in one currency, convert, move value across a border, deliver into a local rail, reconcile, and hold liquidity at both ends so nobody waits. The parts that look like technology are mostly parts that look like treasury.`,
    `That is why owning the settlement layer matters more than it sounds. A company that routes through somebody else's network pays a spread on every leg and inherits that provider's banking relationships, currency coverage and outages. Buying it converts a variable cost into a fixed asset.`,
    `The stablecoin element is the reason this can be bought at all. The settlement leg that used to require a correspondent bank in each corridor can now be a token transfer, which is what makes a network like Gravv assemblable by a startup rather than by a consortium.`,
    `The word the companies use for the result is "agentic" — software that watches liquidity, picks routes, manages currency exposure and reconciles without a person deciding each time. Adeola Adedewe, Kredete's chief executive, put the thesis in one line: "Infrastructure is the moat, and intelligence is the operating layer."`,
    `Treat the second half of that sentence as a claim rather than a fact. Automated routing across fragmented rails is genuinely hard, and the failure mode is not a bad exchange rate but stranded liquidity in a jurisdiction on a Friday afternoon.`,
    `The regulatory backdrop is less friendly than it was a week ago. <a href="/fintech/brazil-closes-one-door-to-stablecoins/">Brazil has just barred stablecoins from settling bulk currency flows</a>, and any operator whose economics depend on the token leg has to assume more of that, corridor by corridor.`,
    `Which is the argument for buying the rail rather than renting it. A company that owns its settlement network can reroute a corridor through licensed currency transactions when a regulator closes the token path. A company that resells someone else's waits to be told what its product does next.`]}),

];
