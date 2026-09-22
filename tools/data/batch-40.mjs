/** Batch 40 — 22 September 2026. Three pieces. SoFi's figures and quotes are
 *  from its own release; the release does not name the blockchain or say how
 *  much volume has moved, and the piece says so. The Pontes participants are
 *  the ECB's list. Nscale's contract figures are from its IPO filing as
 *  reported by Bloomberg and Investing.com; the filing itself was not read.
 *
 *  Heroes: Simon Kadula, Masood Aslami and the American Public Power Association via Unsplash, in
 *  tools/data/heroes.json. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const FT=P("fintech","Fintech","fintech"), BC=P("blockchain","Blockchain","blockchain"), AI=P("ai","AI","ai");

export default [

AI({ slug:"nscales-backlog-has-two-names-on-it", kick:"AI Infrastructure",
  headline:"Nscale's backlog has two names on it",
  dek:"The British data-centre developer has disclosed $103bn of contracts ahead of its New York listing. Microsoft and Anthropic account for 85 per cent of it, and $2.6bn is live.",
  metaDesc:"Nscale's IPO filing shows $103bn of contracted value, 85% from Microsoft and Anthropic, with only $2.6bn active at the end of August and the Anthropic deal not yet financed.",
  author:"dana-whitfield", date:"2026-09-22T12:40:00Z",
  capt:"An electrical substation. Contracted compute becomes revenue only once the power is connected.",
  tags:[{name:"AI Infrastructure",slug:"ai-infrastructure"},{name:"Data Centers",slug:"data-centers"},{name:"Capital Markets",slug:"capital-markets"}],
  related:[
    {href:"/ai/the-labs-go-looking-for-small-sites/",kick:"AI Infrastructure",title:"The labs go looking for small sites",ago:"SEPTEMBER 18, 2026"},
    {href:"/ai/two-hundred-and-seventy-eight-billion/",kick:"Capital",title:"Two hundred and seventy-eight billion",ago:"SEPTEMBER 20, 2026"},
    {href:"/markets/the-window-opened-for-a-few/",kick:"Capital Markets",title:"The window opened for a few",ago:"SEPTEMBER 6, 2026"},
  ],
  body:[
    `A backlog is a promise with a counterparty attached. Nscale has $103bn of promises, and most of the money comes from two counterparties.`,
    `The British data-centre developer, which is preparing to list in New York at a valuation of up to $35bn, disclosed in its IPO filing that Microsoft and Anthropic account for 85 per cent of its total contract value, <a href="https://www.bloomberg.com/news/articles/2026-09-21/anthropic-and-microsoft-dominate-nscale-s-103-billion-in-contracts" rel="noopener">Bloomberg reported</a>. Microsoft has signed several agreements since late 2025, worth about $43.8bn through 2033. Anthropic signed a $44.6bn agreement in August for computing capacity at a planned facility in West Virginia.`,
    `Two other figures in the filing matter more than the headline. Only $2.6bn of the $103bn was active at the end of August, and Nscale has not yet secured financing for the Anthropic contract, <a href="https://www.investing.com/news/stock-market-news/85-of-nscales-103b-of-contracts-are-with-microsoft-and-anthropic-4908995" rel="noopener">according to Investing.com's account of the document</a>. In the first half of 2026 the company reported revenue of $140.6m and a net loss of $1.02bn.`,
    `Read together, the numbers describe a company whose valuation depends on work it has not yet done, paid for with money it has not yet raised. Contracted value is not revenue. It turns into revenue only once the building is up, the power is connected and the chips are installed. Until then it is an option held by the customer, and the filing reportedly lets customers terminate if milestones are missed.`,
    `Customer concentration is not unusual in this business. Every large AI compute provider depends on a handful of buyers, because only a handful of buyers need capacity at this scale. What stands out here is how far the contracted value runs ahead of what has been built. The live portion is about 2.5 per cent of the total, so an investor buying at $35bn is buying mostly the other 97.5 per cent.`,
    `Nvidia is the other name that recurs. It is a major shareholder and Nscale's main chip supplier, and it took $1bn of a recent $3.1bn financing round in convertible notes and non-voting shares. That is a familiar pattern in this market: the supplier of the scarce input also funds the customer that buys it.`,
    `For Anthropic, the contract belongs to a strategy of buying capacity from every direction at once. Komposite reported on Friday that the labs are also <a href="/ai/the-labs-go-looking-for-small-sites/">hunting for 20 to 30 megawatt sites</a>, because power that can be connected this year is scarcer than capital. A gigawatt-scale campus in West Virginia is the other end of that strategy, and it is the end that takes longest to deliver.`,
    `The listing will test how the market prices that gap. Public investors have already taken the view that <a href="/markets/the-window-opened-for-a-few/">the IPO window is open for a few very large names</a>. Nscale is asking them to value a construction programme on the strength of two customers' signatures. The number to watch after listing is not the backlog. It is how quickly the $2.6bn grows, and whether the Anthropic financing closes on terms that leave the equity story intact.`,
  ] }),

BC({ slug:"the-ecb-puts-central-bank-money-on-the-ledger", kick:"Tokenization",
  headline:"The ECB puts central bank money on the ledger",
  dek:"Pontes went live on Monday with fourteen institutions and four ledger operators. It gives tokenised markets a cash leg that is neither a stablecoin nor a bank's deposit token.",
  metaDesc:"The Eurosystem launched Pontes on 21 September 2026, letting wholesale tokenised-asset trades settle in central bank money, with 14 institutions and four DLT operators at launch.",
  author:"marcus-oyelaran", date:"2026-09-22T12:55:00Z",
  capt:"The euro sculpture outside the Eurotower in Frankfurt. The Eurosystem now offers central bank money to tokenised markets.",
  tags:[{name:"Tokenization",slug:"tokenization"},{name:"Settlement",slug:"settlement"},{name:"Stablecoins",slug:"stablecoins"}],
  related:[
    {href:"/blockchain/hong-kong-tokenises-the-collateral-first/",kick:"Tokenization",title:"Hong Kong tokenises the collateral first",ago:"SEPTEMBER 21, 2026"},
    {href:"/blockchain/the-ledger-nets-the-old-rails-settle/",kick:"Tokenization",title:"The ledger nets, the old rails settle",ago:"SEPTEMBER 16, 2026"},
    {href:"/blockchain/nyse-brings-its-matching-engine-onchain/",kick:"Tokenization",title:"NYSE brings its engine onchain",ago:"SEPTEMBER 21, 2026"},
  ],
  body:[
    `Every tokenised bond has the same weak point, and it is the cash. The security can move on a ledger in seconds. The money that pays for it has had to be a stablecoin, a bank's tokenised deposit, or a conventional payment that settles on a different system at a different time. The Eurosystem has now offered a fourth option.`,
    `Pontes, which <a href="https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.pr260921~e754847a7b.en.html" rel="noopener">went live on 21 September</a>, lets wholesale transactions in tokenised assets settle in central bank money. It connects market distributed-ledger platforms to the Eurosystem's TARGET services, <a href="https://www.coindesk.com/business/2026/09/21/ecb-deploys-pontes-platform-to-settle-wholesale-tokenized-assets-in-central-bank-money" rel="noopener">CoinDesk reported</a>, so the cash leg of a trade recorded on a ledger is paid in the same money banks use to settle with each other.`,
    `The launch group is substantial. The ECB lists fourteen market participants: ABANCA, BayernLB, Caisse des Dépôts et Consignations, Cecabank, Deutsche Bank, Deka Bank, DZ Bank, the European Investment Bank, KfW, Memo Bank, NRW.BANK, Santander, Société Générale and the Deutsche Bundesbank. There are four ledger operators: Axiology, Cashlink, Clearstream and SWIAT. More participants have committed to connect in the coming months.`,
    `Christine Lagarde gave the plainest description when she briefed finance ministers at the Eurogroup on Friday: "it's a digital euro made available for banks so that they can transact amongst themselves using tokenized assets and distributed ledger technology." Piero Cipollone, the executive board member who leads the work, said Pontes "brings the stability and trust of central bank money to the European tokenised finance ecosystem."`,
    `The design is also a policy choice. A tokenised market needs a settlement asset. If the central bank does not provide one, private tokens will fill the gap, and in practice the most liquid private tokens are denominated in dollars. By offering wholesale settlement in central bank money, the Eurosystem gives European banks a reason to keep euro tokenised markets on a euro cash leg that carries no issuer risk.`,
    `The limits are set out in the ECB's own announcement. Pontes starts with a core set of services. Enhanced features and longer operating hours are to come gradually, with full implementation expected by 2028. For now, then, it does not provide the round-the-clock settlement that is one of tokenisation's main selling points. Appia, the Eurosystem's longer-term blueprint for an integrated ledger ecosystem, is also due by 2028.`,
    `Other central banks are taking different routes to the same problem. <a href="/blockchain/hong-kong-tokenises-the-collateral-first/">Hong Kong has committed</a> to testing tokenised Exchange Fund Bills and moving its tokenised-deposit pilot to 24/7 settlement in central bank digital currency. <a href="/blockchain/the-ledger-nets-the-old-rails-settle/">Singapore's banks have netted tokenised deposits</a> on a shared ledger while the money still moved the old way. Europe has chosen to bridge existing ledgers to its existing payment system rather than build a new one.`,
    `The ECB has also said it will invest part of its own funds in tokenised securities and settle those purchases through Pontes. That makes the central bank one of its own first customers. The measure of success will be volume, and in particular whether issuers of euro tokenised bonds start naming Pontes as their settlement route instead of a stablecoin.`,
  ] }),

FT({ slug:"sofi-settles-its-card-book-in-its-own-coin", kick:"Payments",
  headline:"SoFi settles its card book in its own coin",
  dek:"The first national bank to issue a stablecoin is now using it to settle its card programme across Mastercard. The token matters less than the fact that the bank issuing it holds the money on both sides.",
  metaDesc:"SoFi Bank is moving its card programme, expected to carry $25bn a year, to settlement in its own SoFiUSD stablecoin across Mastercard's network, a first for a US national bank.",
  author:"elena-vasquez", date:"2026-09-22T13:20:00Z",
  capt:"A merchant's point-of-sale terminal. SoFi's pitch to merchants is settlement that arrives at any hour, in a SoFi account.",
  tags:[{name:"Payments",slug:"payments"},{name:"Stablecoins",slug:"stablecoins"},{name:"Banking",slug:"banking"}],
  related:[
    {href:"/fintech/the-payments-layer-buys-its-plumbing/",kick:"Payments",title:"The payments layer buys its plumbing",ago:"SEPTEMBER 21, 2026"},
    {href:"/blockchain/stablecoin-settlement-b2b-payments/",kick:"Stablecoins",title:"Stablecoin settlement volumes expand across B2B payments",ago:"AUGUST 16, 2026"},
    {href:"/fintech/the-swipe-fee-settles-for-now/",kick:"Payments",title:"The swipe fee settles, for now",ago:"SEPTEMBER 7, 2026"},
  ],
  body:[
    `Stablecoin settlement has mostly meant a payments company paying a card network in someone else's token. The version SoFi switched on this week is a bank paying in its own.`,
    `SoFi Technologies and Mastercard said on Tuesday that settlement for SoFi Bank's debit and credit card programme now runs in SoFiUSD across Mastercard's global network, <a href="https://investors.sofi.com/news/news-details/2026/SoFi-Becomes-First-National-Bank-to-Go-Live-with-Stablecoin-Settlement-across-Mastercards-Global-Payments-Network/default.aspx" rel="noopener">according to SoFi's announcement</a>. SoFi is moving the whole programme, which it expects to carry more than $25bn a year, and says it is the first national bank to go live with stablecoin settlement on the network.`,
    `SoFiUSD is issued by SoFi Bank, N.A., which is supervised by the Office of the Comptroller of the Currency. It is redeemable one-for-one for dollars and backed by reserves the bank describes as consisting primarily of cash. The release is careful to add that it is not FDIC-insured, not guaranteed by the bank and not legal tender. The coin has been available in SoFi's app <a href="https://investors.sofi.com/news/news-details/2026/SoFiUSD-Becomes-the-First-Stablecoin-Issued-by-a-US-National-Bank-to-Launch-on-a-Banking-Platform/default.aspx" rel="noopener">since May</a>.`,
    `What matters is where the money sits. When a payments company settles in a third-party stablecoin, the liability belongs to the token's issuer and the reserves sit with that issuer. SoFi's arrangement shortens the chain: the token is a claim on SoFi Bank, the reserves sit with SoFi Bank, and the card programme being settled is SoFi Bank's. The bank is not renting a settlement asset from anyone. It is using a claim on itself.`,
    `The merchant side of the pitch is where the strategy shows. SoFi says merchants can receive settlement funds instantly in a SoFi Bank account and withdraw to cash around the clock at no cost, without holding stablecoins themselves. That is a faster way to get paid, and it is also a way to open accounts: a merchant who wants the speed has to bank with SoFi. The company says it is in talks with large US merchants, from multinational retailers to technology platforms. It names none.`,
    `"In six months, SoFi and Mastercard took stablecoin settlement from an idea to a live product that materially improves how money moves," said Anthony Noto, SoFi's chief executive. Sherri Haymond of Mastercard said stablecoins "become meaningful when they solve real problems that businesses face every day." The two companies say they will look next at cross-border payments and remittances.`,
    `Some things are missing from the announcement. It does not name the blockchain the settlement runs on, does not say how much of the $25bn has moved so far, and gives no figure for the saving. "Materially improves" is the chief executive's description, not a measurement. SoFi's shares rose about 3 per cent on the news, <a href="https://www.investing.com/news/stock-market-news/sofi-stock-rises-as-first-bank-to-use-stablecoin-settlement-93CH-4910689" rel="noopener">Investing.com reported</a>.`,
    `The deal also fits a wider pattern. Payments companies are <a href="/fintech/the-payments-layer-buys-its-plumbing/">buying the settlement rails underneath them</a>, because owning the rail is where the margin sits. SoFi has taken a bank's version of that route. It owns the charter, the token and the reserves, and now a network that settles in them. Settling its own card programme in its own coin is an internal efficiency. The real test is the merchant list: if merchants choose to be paid in SoFiUSD, the float moves to SoFi Bank's balance sheet, and that is a change in who holds the money.`,
  ] }),

];
