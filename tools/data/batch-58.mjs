/** Batch 58 — Monday 5 October 2026. Two pieces: the first public notice
 *  under the SEC's tokenised-stock exemption from OKXICE, the OKX and ICE
 *  joint venture, as the lead, and Google's pause of product reports in its
 *  open-source bug bounty as the second.
 *
 *  BLOCKCHAIN / OKXICE (LEAD). "Public Notice of OKXICE TSV", dated
 *  4 October 2026, PDF linked from okx.com/en-us/okxicetsv, read in full
 *  (63 tickers counted; 50/50 ownership; Uniswap v4 on XLayer; SBT
 *  permissioning; no oracles; single-signature day-to-day admin key; no
 *  timelock; SBT contract not externally audited; Cerebras objection;
 *  Tier 1 limits; SIPC uncertainty; hosting). SEC Release 34-106402,
 *  91 FR 60168 (order of 17 September, published 22 September), read for
 *  issuer notice (30 days), revised notices, tier limits and the 2031
 *  expiry. OKX/ICE release text and Cuomo quote via Markets Media and
 *  Decrypt (5 October). ICE's March investment and valuation via
 *  Business Wire headline and CoinDesk (5 March); joint venture in June.
 *
 *  CYBERSECURITY / GOOGLE OSS VRP (SECOND). @GoogleVRP post of 1 October
 *  (full text). Google's OSS VRP launch post, 30 August 2022, read in full.
 *  Google VRP 2025 year in review (31 March 2026). Bug Hunters update on
 *  pre-1 October reports and Patch Rewards ceiling via BleepingComputer
 *  (5 October). Daniel Stenberg, "The end of the curl bug-bounty",
 *  26 January 2026, read in full. Risky Business on Intel's Intigriti
 *  programme (2 October).
 *
 *  Heroes: Tyler Prahm and Tanja Tepavac via Unsplash, in heroes.json. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const BC=P("blockchain","Blockchain","blockchain"), CY=P("cybersecurity","Cybersecurity","cybersecurity");

export default [

CY({ slug:"the-bounty-that-drew-too-many-reports", kick:"Bug Bounties",
  headline:"The bounty that drew too many reports",
  dek:"Google has stopped taking product vulnerability reports in its open-source reward programme, saying a rise in automated submissions has left most of them invalid. Curl ended its bounty in January for the same reason. Intel dropped its cash rewards last month and has not said why.",
  metaDesc:"Google paused product vulnerability submissions to its Open Source Software Vulnerability Rewards Program on 1 October 2026, citing a rise in automated, mostly invalid reports. Curl ended its bounty in January; Intel dropped cash rewards in September.",
  author:"sam-porter", date:"2026-10-05T12:50:00Z",
  capt:"A stack of papers marked with sticky tabs. Every report to a bug bounty has to be read and checked by someone before it can be paid or rejected.",
  tags:[{name:"Open Source",slug:"open-source"},{name:"AI Security",slug:"ai-security"},{name:"Cybersecurity",slug:"cybersecurity"}],
  related:[
    {href:"/cybersecurity/the-template-sandbox-had-a-second-door/",kick:"Vulnerabilities",title:"The template sandbox had a second door",ago:"OCTOBER 4, 2026"},
    {href:"/ai/a-hundred-notices-and-no-names/",kick:"AI Safety",title:"A hundred notices and no names",ago:"OCTOBER 2, 2026"},
    {href:"/cybersecurity/fixed-in-july-explained-on-wednesday-attacked-on-thursday/",kick:"Vulnerabilities",title:"Fixed in July, explained on Wednesday, attacked on Thursday",ago:"OCTOBER 3, 2026"},
  ],
  body:[
    `Google has stopped accepting product vulnerability reports in its Open Source Software Vulnerability Rewards Program. "We are temporarily no longer accepting OSS VRP product vulnerability submissions," the company's VRP account <a href="https://x.com/googlevrp/status/2105689195180179605" rel="noopener">posted on Thursday</a>. "Why is this happening? This pause is due to a significant rise in automated submissions, the vast majority of which are not valid." Supply-chain reports and reports already in the queue are not affected. Google says it will "continue to reformat and work on this aspect of the OSS VRP" and has committed to an update in the first quarter of 2027.`,
    `The programme is four years old. Google <a href="https://security.googleblog.com/2022/08/Announcing-Googles-Open-Source-Software-Vulnerability-Rewards-Program.html" rel="noopener">launched it on 30 August 2022</a> to pay for flaws in the open-source code it publishes, from the public repositories of Google-owned GitHub organisations to those projects' third-party dependencies. Rewards ran from $100 to $31,337, with the largest reserved for the projects Google called most sensitive: Bazel, Angular, Golang, Protocol Buffers and Fuchsia. The reason given at the time was the supply chain. Google pointed to Codecov and the Log4j flaw, incidents it said "showed the destructive potential of a single open source vulnerability".`,
    `The pause covers the part of the programme that invites the most volume. A product vulnerability report claims a bug in the code itself, and automated tools can now produce one quickly. Checking it takes longer. A Google engineer, or a project maintainer, has to reproduce the claim, decide whether it is real and work out how serious it is. When most submissions fail that check, the cost of reading them falls on the people the programme was meant to help. Google has not said how many reports it received or what share were invalid. BleepingComputer reported that, according to Google's Bug Hunters site, product reports filed before 1 October will still be handled, and that researchers can still send fixes to the Patch Rewards Program, which pays up to $15,000.`,
    `Google's wider bounty business is still growing. In its <a href="https://security.googleblog.com/2026/03/vrp-2025-year-in-review.html" rel="noopener">review of 2025</a>, published in March, Google said it paid more than $17m across all its programmes, an all-time high and more than 40 per cent above 2024, to more than 700 researchers. The open-source programme is one line in that total.`,
    `Curl got there first. Daniel Stenberg, the project's lead developer, <a href="https://daniel.haxx.se/blog/2026/01/26/the-end-of-the-curl-bug-bounty/" rel="noopener">ended its bounty on 31 January</a>. Over almost seven years on HackerOne it had confirmed 87 vulnerabilities and paid more than $100,000. In earlier years, he wrote, more than 15 per cent of submissions turned out to be real vulnerabilities. From 2025 the rate fell below 5 per cent. "Not even one in twenty was real." He blamed "AI slop" along with human reports that were weaker than before, and dropped cash rewards altogether, on the view that money was the incentive for "made up lies". Reports now go to the curl security team privately, with no payment.`,
    `Intel went further and has said less. Its programme on the Intigriti platform once offered up to $100,000 per confirmed vulnerability. In September the page was changed to remove all payouts and add a "No bounty" marker, <a href="https://news.risky.biz/risky-bulletin-intel-ends-paid-bug-bounties/" rel="noopener">Risky Business reported</a>, with the last archived version showing rewards dated 13 September. Intel declined to tell the newsletter why.`,
    `Three programmes have now changed course in nine months, and two of them name the same cause. Bounties pay because outside researchers find real flaws that in-house teams miss. That only works while the good reports are worth the time spent reading all the others. Google's pause takes away the reward for one kind of report, and the reward is what the automated submissions were after.`,
  ] }),

BC({ slug:"sixty-three-stocks-and-no-order-book", kick:"Tokenization",
  headline:"Sixty-three stocks and no order book",
  dek:"The joint venture half-owned by the New York Stock Exchange's parent has filed its notice under the SEC's tokenised-stock exemption. Its prices will come from Uniswap pools rather than the stock market, a single key can pause them, and one company has already said no.",
  metaDesc:"OKXICE, the OKX and ICE joint venture, filed a public notice dated 4 October 2026 to run a 24/7 tokenized stock venue for 63 U.S. stocks under the SEC's TSV exemption, using Uniswap v4 pools on X Layer. Cerebras has objected.",
  author:"marcus-oyelaran", date:"2026-10-05T13:00:00Z",
  capt:"A stock ticker display. On OKXICE's planned venue, the price of a tokenised share will be set by the ratio of assets in a liquidity pool, not by reference to the market for the share itself.",
  tags:[{name:"Tokenization",slug:"tokenization"},{name:"Market Structure",slug:"market-structure"},{name:"Capital Markets",slug:"capital-markets"}],
  related:[
    {href:"/blockchain/stock-tokens-get-a-five-year-door/",kick:"Tokenization",title:"Stock tokens get a five-year door",ago:"SEPTEMBER 17, 2026"},
    {href:"/blockchain/the-exemption-picks-its-winners/",kick:"Tokenization",title:"The exemption picks its winners",ago:"SEPTEMBER 20, 2026"},
    {href:"/policy/one-commissioner-is-now-a-quorum/",kick:"SEC",title:"One commissioner is now a quorum",ago:"OCTOBER 4, 2026"},
  ],
  body:[
    `OKXICE, the joint venture between the crypto exchange OKX and Intercontinental Exchange, the owner of the New York Stock Exchange, has published the notice that the SEC's new exemption requires before a venue can trade tokenised U.S. shares. The <a href="https://www.okx.com/en-us/okxicetsv" rel="noopener">notice</a> is dated 4 October and lists 63 stocks. They range from Nvidia, Microsoft and Apple to JPMorgan, Goldman Sachs, Walmart and Coca-Cola, and include crypto-linked companies such as Coinbase, Circle, Strategy, Robinhood, BitGo and Securitize. Each will trade against one of three stablecoins, USDC, USDG or Tether's USDT, 24 hours a day, seven days a week. Andrew Cuomo, the former New York governor who co-chairs the venture, called it "a landmark step toward a truly global, 24/7 Wall Street".`,
    `The SEC does not approve these venues one by one. Its <a href="https://www.federalregister.gov/documents/2026/09/22/2026-19388/order-granting-temporary-conditional-exemptive-relief-pursuant-to-section-36a1-of-the-securities" rel="noopener">order of 17 September</a> exempts a "Tokenized Securities Venue" from the definition of an exchange if it meets the order's conditions, notifies the agency and publishes a notice of how it works. The notice is that document, and it is frank about what the venue is not. OKXICE LLC, a Texas company owned 50-50 by ICE and an OKX holding company, says the venue "is not registered with the Securities and Exchange Commission (the 'SEC') in any capacity" for this activity, is not subject to Regulation NMS, and is not subject to the fair-access rules that apply to exchanges. "Unfair and unreasonably discriminatory denials or limitations of access of TSV Participants by the TSV are not subject to SEC review."`,
    `There is no <a href="/blockchain/the-exemption-picks-its-winners/">order book</a>. Trading happens in Uniswap v4 <a href="/blockchain/stock-tokens-get-a-five-year-door/">liquidity pools</a> on X Layer, the layer-2 network built by OKX, with an OKXICE extension that lets in only wallets holding a non-transferable "soulbound" token issued after identity and sanctions checks. Prices follow Uniswap's constant-product formula: each purchase raises the pool price and each sale lowers it. "OKXICE TSV's smart contracts do not use oracles or any other external market data," the notice says, so prices "may therefore differ from prices of the underlying NMS stock, particularly outside the regular trading hours" of the primary exchange. At three on a Sunday morning, the price of tokenised Nvidia will be whatever its pool says it is.`,
    `The pools depend on whoever chooses to fill them. Any approved participant can supply liquidity, and the notice warns that liquidity providers "may be unregulated, lightly capitalized and are under no obligation to provide liquidity". They can withdraw at any time. As of the notice, no OKXICE affiliate will act as one. There is no margin and no credit, so every trade must be fully funded. The venue has no policies to address maximal extractable value, the practice of reordering pending transactions for profit. It relies on permissioning, market surveillance by its affiliate OKX Inc. and the power to revoke a wallet's access.`,
    `Control sits with OKX. Upgrades to the smart contracts, creating pools and withdrawing a liquidity provider's funds need a multi-signature approval from OKX Technology and OKXICE staff. Pausing pools and adding or removing wallets are done "through a separate single signature administrative key managed by OKX Technology Inc." Changes "take effect without a timelock, so TSV Participants may receive no advance notice of an upgrade." The contract that issues the access tokens "has been audited internally, but not by external auditors". The pool extension is to be audited by an outside firm before it is deployed. The venue's website and back-end systems are hosted in the United States by Alibaba Cloud's Singapore company, and participants' personal data is held by Amazon Web Services in Oregon.`,
    `The exemption limits how big this can get. Stocks in Tier 1 of the market's limit-up, limit-down plan, which covers the S&P 500 and the Russell 1000 and so names such as Nvidia and Apple, are capped at 75 symbols per venue and at 0.25 per cent of each stock's average daily volume in the previous month. Smaller Tier 2 stocks are capped at 250 symbols and 2.5 per cent. OKXICE says its contracts keep a running daily total and will reject any trade that would cross the line. A second breach in the same stock means a three-month pause.`,
    `Companies get a say, and one has used it. When the tokens are made by a third party rather than by the company itself, the order requires the venue to notify the company and wait at least 30 days after it receives that notice. If the company objects within that time, the stock cannot be listed. The notice records an objection from Cerebras Systems. It does not name the firm that will make the tokens, saying only that a third-party "Tokenizer" will hold the shares one for one through a registered broker-dealer, and that, on the tokenizer's representations, holders get the same dividends and votes as ordinary shareholders. It also warns that if that broker-dealer fails, whether tokens held in a self-custodied wallet would count as customer property or be covered by SIPC "is uncertain".`,
    `The notice gives no launch date. ICE invested in OKX in March, at a valuation CoinDesk put at $25bn. The exemption runs until September 2031, and the SEC's order says any material change to a venue's operations must be published 20 days in advance. For now the first 24-hour stock venue backed by the NYSE's owner has put its design on record. It has no order book and no oracles, its prices are set by its pools, and its own risk disclosures are long.`,
  ] }),

];
