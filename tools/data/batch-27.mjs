/** Batch 27 — 14 September 2026. Checked against the company announcement as
 *  relayed by two outlets that agree on the investor list. Both quotes are
 *  Ambre Soubiran's, verbatim from the cited reports. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const BC = P("blockchain","Blockchain","blockchain");

export default [

BC({ slug:"everyone-who-needs-the-price-bought-the-same-vendor", kick:"Market Data",
  headline:"Everyone who needs the price bought the same vendor",
  dek:"S&amp;P Global led $110m into Kaiko, with Nasdaq, Broadridge, BNP Paribas, RBC and two trading firms alongside it. A round with that many competitors in it is closer to a standards committee than an investment.",
  metaDesc:"Kaiko raised a $110 million Series B extension led by S&amp;P Global, with Nasdaq Ventures, Broadridge, BNP Paribas, RBC, DRW and Coinbase Ventures participating.",
  author:"marcus-oyelaran", date:"2026-09-14T16:45:00Z",
  capt:"A ledger records who owns a thing. It does not say what the thing is worth.",
  tags:[{name:"Tokenization",slug:"tokenization"},{name:"Market Structure",slug:"market-structure"},{name:"Digital Assets",slug:"digital-assets"}],
  related:[
    {href:"/blockchain/broadridge-dlx-tokenization-platform/",kick:"Tokenization",title:"Broadridge builds on a $351bn-a-day book",ago:"SEPTEMBER 2026"},
    {href:"/blockchain/sebi-settles-ten-billion-rupees-onchain/",kick:"Settlement",title:"India settles ten billion rupees of bonds onchain",ago:"SEPTEMBER 2026"},
    {href:"/blockchain/tokenized-treasuries-money-funds/",kick:"Treasury",title:"Tokenized Treasury funds become crypto's cash drawer",ago:"SEPTEMBER 2026"},
  ],
  body:[
    `Most funding rounds are one investor's opinion about the future, with others along for the ride. This one is a dozen institutions' opinion, and a good number of them compete with each other for a living.`,
    `Kaiko, the Paris market data company, <a href="https://techstartups.com/2026/09/14/crypto-data-startup-kaiko-raises-110-million-in-funding-led-by-sp-global" rel="noopener">raised a $110m Series B extension</a> led by S&amp;P Global. The other names on the round are the interesting part: BNP Paribas, Bpifrance, Broadridge, the Canton Foundation, Coinbase Ventures, DRW Venture Capital, Nasdaq Ventures, Royal Bank of Canada, Stellar and Susquehanna Private Equity Investments, with Anthemis, Point Nine and Revaia returning.`,
    `Read that list by function rather than by name. An index provider, an exchange group, a post-trade processor, two banks, two proprietary trading firms, a crypto exchange's venture arm, a French state investor and two blockchain foundations. Several of them sell competing products to the same customers.`,
    `What they have in common is that they all need the same number, and none of them wants to be the one who publishes it alone.`,
    `This is the part of tokenization that gets less attention than the ledgers. A token can record who owns a Treasury bill without answering what the bill is worth this afternoon, and the second question is the one that determines whether a regulated institution may hold it. Assets have to be marked for accounting, valued for collateral, and priced for margin. None of that runs on a chain.`,
    `Kaiko's actual asset is the permission. Kaiko Indices is authorised under the EU's Benchmark Regulation, which is what allows a fund in Europe to use its prices for a purpose that matters rather than for a dashboard. The company also acquired Cometh in May, an onchain infrastructure provider authorised in France under MiCA, and holds SOC 1 and SOC 2 Type 2 attestations.`,
    `That is an unglamorous stack of paperwork, and it is the reason a group of incumbents wrote a cheque rather than building the thing themselves. Regulated benchmark administration is slow to acquire and awkward to replicate, and the alternative to a shared vendor is eleven internal pricing sources that disagree at the worst possible moment.`,
    `Ambre Soubiran, Kaiko's chief executive, was direct about the arrangement: "These are partners, not just shareholders. Together we will define how institutional money moves onchain." She described the investors as spanning "several key areas of digital asset markets, including pricing, trading, capital allocation and blockchain development".`,
    `The structure that follows makes the intent plain. Kaiko is convening a Strategic Industry Working Group to define what data and infrastructure tokenized financial products require — which is a standards body, assembled by a vendor, staffed by its own shareholders.`,
    `That is how market plumbing has usually been built, and it works. It is also worth naming what it is. Incumbents funding the pipes is the reliable way to make sure the pipes do not route around the incumbents, and benchmark administration in particular is a licensing business whose concentration regulators have had cause to examine before.`,
    `The more immediate test is narrower. Broadridge, one of the investors, <a href="/blockchain/broadridge-dlx-tokenization-platform/">already moves hundreds of billions a day</a> through a platform that will need exactly these prices. If the tokenized products of the next two years settle against a Kaiko number, the round was cheap. If they settle against each institution's own, it was a subscription paid in advance.`]}),

];
