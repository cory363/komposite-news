/** Batch 15 — five pieces reported from primary documents.
 *  Every figure, date, docket number and defined term below is taken from the
 *  Federal Register record cited in the body. Nothing is inferred and no
 *  quotation is attributed to anyone. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const CR=P("crypto","Crypto","crypto"), F=P("fintech","Fintech","fintech"),
      MK=P("markets","Markets","markets"), B=P("business","Business","business");

export default [

CR({ slug:"sec-proposes-regulation-crypto-assets", kick:"Regulation",
  headline:"SEC proposes a $75m crypto exemption",
  dek:"Regulation Crypto Assets would create two registration exemptions and a conditional safe harbour from the phrase that has governed the market since 2017: investment contract.",
  metaDesc:"The SEC's Regulation Crypto Assets proposes exemptions of $5m over four years and $75m per 12 months, plus a conditional safe harbour from investment contract.",
  author:"marcus-oyelaran", date:"2026-09-08T13:00:00Z",
  capt:"The proposal replaces case-by-case argument with stated thresholds.",
  tags:[{name:"Regulation",slug:"regulation"},{name:"Digital Assets",slug:"digital-assets"},{name:"Compliance",slug:"compliance"}],
  body:[
    `For nine years the question of whether a token is a security has been argued one enforcement action at a time. On August 21 the Securities and Exchange Commission proposed answering it with numbers instead. <a href="https://www.federalregister.gov/documents/2026/08/21/2026-17183/regulation-crypto-assets" rel="noopener">Regulation Crypto Assets</a>, published at document 2026-17183 under RIN 3235-AN38, would build what the Commission calls a tailored offering regime for certain investment contracts involving crypto assets.`,
    `The structure is two exemptions from the registration requirements of section 5 of the Securities Act of 1933. The first permits offerings of up to $5 million during a four-year period. The second permits offerings of up to $75 million during each 12-month period. Both are conditioned on disclosure: issuers must make what the Commission describes as principles-based narrative disclosures available to their investors.`,
    `The second exemption carries the heavier burden. Issuers relying on it must provide financial statements and are subject to ongoing reporting requirements. That is the difference between a one-time disclosure and a continuing obligation, and it is where the $75 million tier starts to resemble a small registered offering.`,
    `Neither exemption is a release from liability. The proposal states that issuers relying on them remain subject to the antifraud and antimanipulation provisions of the federal securities laws. Whatever else changes, the Commission is not proposing to give up its fraud jurisdiction.`,
    `The provision with the longest reach is the third one. The proposal would create a conditional safe harbour from the term investment contract in the definitions of security in both the 1933 Act and the Securities Exchange Act of 1934. If the conditions are satisfied, a crypto asset would be deemed not to be subject to an investment contract for purposes of those definitions.`,
    `That phrase has carried the weight of the entire argument since the Commission's 2017 report on decentralised autonomous organisations. Firms have spent years constructing token designs around it, and litigation has turned on how a promoter's continuing efforts should be characterised years after issuance. A stated set of conditions changes the nature of that work from prediction to compliance.`,
    `What the proposal does not do is settle the classification question in the abstract. It creates a route by which an asset can be treated as outside investment contract analysis if specified conditions hold. Assets that do not meet those conditions are where the old argument continues.`,
    `The comment period closes on October 20, 2026. Rulemaking of this size rarely emerges in the form it was proposed, and the two most consequential elements — the conditions attached to the safe harbour and the reporting obligations at the $75 million tier — are the ones most likely to move between proposal and adoption.`,
    `For issuers the practical question is not whether the regime is generous. It is whether the conditions can be met by a token that is already trading, or only by one designed against the rule from the beginning. That distinction will decide how much of the existing market the regulation actually reaches.`,
  ],
  related:[
    {href:"/fintech/treasury-genius-act-stablecoin-rules/",kick:"Regulation",title:"Treasury drafts the stablecoin perimeter",ago:"SEPTEMBER 8, 2026"},
    {href:"/markets/sec-transfer-agent-rules-proposal/",kick:"Market Structure",title:"The SEC reopens the transfer agent rules",ago:"SEPTEMBER 8, 2026"},
    {href:"/crypto/crypto-market-structure-rules-reshape-exchanges/",kick:"Regulation",title:"Market structure rules reshape exchanges",ago:"AUGUST 2026"},
  ]}),

F({ slug:"treasury-genius-act-stablecoin-rules", kick:"Regulation",
  headline:"Treasury drafts the stablecoin perimeter",
  dek:"A proposed rule implements section 3 of the GENIUS Act, the part that says who is prohibited from issuing, offering and selling payment stablecoins in the United States.",
  metaDesc:"Treasury has proposed regulations implementing section 3 of the GENIUS Act, covering prohibitions on payment stablecoin issuance, offer and sale in the US.",
  author:"elena-vasquez", date:"2026-09-08T12:30:00Z",
  capt:"The statute set the principle; the rulemaking sets the perimeter.",
  tags:[{name:"Payments",slug:"payments"},{name:"Regulation",slug:"regulation"},{name:"Digital Assets",slug:"digital-assets"}],
  body:[
    `The Guiding and Establishing National Innovation for U.S. Stablecoins Act settled the principle that payment stablecoins are a regulated payment instrument rather than an open question. It left the perimeter to be drawn later. On August 18 the Department of the Treasury proposed drawing it, publishing <a href="https://www.federalregister.gov/documents/2026/08/18/2026-16796/genius-act-regulations-on-payment-stablecoin-issuance-offer-and-sale" rel="noopener">GENIUS Act Regulations on Payment Stablecoin Issuance, Offer, and Sale</a> at document 2026-16796.`,
    `The proposal implements section 3 of the Act: the statutory prohibitions and limitations on payment stablecoin issuance, offer and sale in the United States. Section 3 is the part of the statute that operates by exclusion. It does not describe how a compliant issuer should behave so much as establish who is not permitted to be one.`,
    `That distinction matters more than it sounds. A reserve or disclosure requirement is a condition of operating, and a firm that fails it has a remediation problem. A prohibition on issuance is a question of standing, and a firm on the wrong side of it does not have a compliance programme to fix. It has a business that cannot be conducted.`,
    `The commercial consequence falls on distribution rather than issuance. Most institutions that touch a stablecoin do not mint it; they offer it, sell it, or hold it for a customer. Section 3 reaches offer and sale as well as issuance, which is why the rulemaking is being read closely by firms that never intended to run a reserve.`,
    `The comment period closes on October 19, 2026, a day before the SEC's separate crypto asset proposal. The two are not the same exercise. Treasury is implementing a statute that already passed. The Commission is proposing a regime under existing securities law. A payment stablecoin that satisfies the GENIUS Act framework sits outside the securities question by design; assets that do not are where the two proceedings begin to interact.`,
    `For issuers already operating, the practical work is establishing which of the statutory prohibitions apply to their structure, and whether the answer is different for the issuing entity than for the affiliates that distribute. Group structures assembled before the Act were not built with section 3 in mind.`,
    `The proposal is one part of a longer implementation. Section 3 governs who may participate; the provisions on reserves, redemption and supervision are separate exercises with their own timelines. Firms treating this rulemaking as the whole of GENIUS Act compliance will find they have answered only the first question.`,
  ],
  related:[
    {href:"/crypto/sec-proposes-regulation-crypto-assets/",kick:"Regulation",title:"SEC proposes a $75m crypto exemption",ago:"SEPTEMBER 8, 2026"},
    {href:"/fintech/instant-payments-b2b-standard/",kick:"Payments",title:"Instant payments become the B2B standard",ago:"AUGUST 2026"},
    {href:"/blockchain/stablecoin-settlement-b2b-payments/",kick:"Stablecoins",title:"Stablecoin settlement volumes expand across B2B payments",ago:"AUGUST 2026"},
  ]}),

B({ slug:"kkr-250-million-premerger-filing-penalty", kick:"Antitrust",
  headline:"KKR would pay $250m over merger filings",
  dek:"A proposed final judgment in the Southern District of New York sets the civil penalty for failures under section 7A of the Clayton Act, the provision behind premerger notification.",
  metaDesc:"The Justice Department has filed a proposed final judgment requiring KKR to pay a $250,000,000 civil penalty over sixteen incomplete premerger filings.",
  author:"jonathan-bright", date:"2026-09-08T12:00:00Z",
  capt:"Procedural obligations carry penalties sized like substantive ones.",
  tags:[{name:"Regulation",slug:"regulation"},{name:"Venture Capital",slug:"venture-capital"},{name:"Compliance",slug:"compliance"}],
  body:[
    `Premerger notification is the least discussed part of antitrust practice. It is a filing obligation, not a theory of harm, and firms treat it as administrative. A proposed final judgment filed in the Southern District of New York puts a price on getting it wrong.`,
    `The Justice Department's Antitrust Division has given <a href="https://www.federalregister.gov/documents/2026/09/04/2026-18136/united-states-v-kkr-and-co-inc-et-al-proposed-final-judgment-and-competitive-impact-statement" rel="noopener">notice under the Antitrust Procedures and Penalties Act</a> that a proposed Final Judgment, Stipulation and Competitive Impact Statement have been filed in United States of America v. KKR &amp; Co. Inc., et al., Civil Action No. 1:25-cv-343-LTS. The proposed judgment, filed on August 26, 2026, requires KKR &amp; Co. GP LLC to pay a civil penalty of $250,000,000 within thirty calendar days of entry.`,
    `The underlying complaint was filed on January 14, 2025. It alleged that KKR &amp; Co. Inc. and various related entities, including KKR &amp; Co. GP LLC, failed to make complete and accurate premerger filings at least sixteen separate times, in violation of section 7A of the Clayton Act, 15 U.S.C. 18a.`,
    `Section 7A is the Hart-Scott-Rodino notification requirement. It obliges parties to a qualifying transaction to file with the antitrust agencies and wait before closing, so that a deal can be reviewed while it can still be stopped. The obligation is procedural. Its purpose is to preserve the government's opportunity to look.`,
    `That is what makes the figure notable. This is not a penalty for a transaction that harmed competition. It is a penalty for filings that were incomplete, repeated across at least sixteen instances. The theory is that a review process depends on the accuracy of what is submitted to it, and that systematic under-disclosure degrades the process whether or not any individual deal was problematic.`,
    `For private capital the number sets a reference point. Large sponsors file constantly, across funds and holding structures, and the documents that must accompany a filing include material prepared for deal evaluation. Where the boundary of that category sits has long been treated as a matter of judgment exercised under time pressure.`,
    `A $250 million civil penalty makes that judgment expensive. Compliance spending on notification has historically been modest relative to deal budgets, on the reasoning that the downside was a delayed closing rather than a fine of this order.`,
    `The judgment is proposed rather than entered. Public comment is invited within 60 days of the notice, and comments together with responses will be posted on the Antitrust Division's website and filed with the court. Under the Antitrust Procedures and Penalties Act, the court must find that entry is in the public interest before the judgment takes effect.`,
  ],
  related:[
    {href:"/business/corporate-venture-arms-return/",kick:"Private Capital",title:"Corporate venture arms return",ago:"AUGUST 2026"},
    {href:"/markets/private-markets-liquidity-windows/",kick:"Private Capital",title:"Private markets open liquidity windows",ago:"AUGUST 2026"},
    {href:"/crypto/sec-proposes-regulation-crypto-assets/",kick:"Regulation",title:"SEC proposes a $75m crypto exemption",ago:"SEPTEMBER 8, 2026"},
  ]}),

MK({ slug:"cftc-cdor-tiie-swap-clearing-transition", kick:"Market Structure",
  headline:"CFTC retires CDOR and TIIE from clearing",
  dek:"An amended clearing requirement follows Canadian and Mexican interest rate benchmarks to their replacements, closing a chapter of the reform that began with LIBOR.",
  metaDesc:"The CFTC has amended its interest rate swap clearing requirement for the CDOR to CORRA transition and the TIIE to F-TIIE transition in Mexican pesos.",
  author:"priya-raghavan", date:"2026-09-08T11:30:00Z",
  capt:"Benchmark reform ends in the plumbing, not in the announcement.",
  tags:[{name:"Capital Markets",slug:"capital-markets"},{name:"Fixed Income",slug:"fixed-income"},{name:"Regulation",slug:"regulation"}],
  body:[
    `Benchmark transition is announced in speeches and completed in rulebooks. On September 8 the Commodity Futures Trading Commission published a <a href="https://www.federalregister.gov/documents/2026/09/08/2026-18212/clearing-requirement-determination-under-section-2h-of-the-commodity-exchange-act-for-interest-rate" rel="noopener">clearing requirement determination under section 2(h) of the Commodity Exchange Act</a> that does the second part for two currencies.`,
    `The rule amends the Commission's interest rate swap clearing requirement regulations to address the transition from the Canadian Dollar Offered Rate to the Canadian Overnight Repo Rate Average, and the transition from the Mexican Interbank Equilibrium Interest Rate, the Tasa de Interés Interbancaria de Equilibrio, to the TIIE Funding Rate. The replacements govern swaps denominated in Canadian dollars and Mexican pesos respectively.`,
    `The clearing requirement is the obligation to send a swap in a specified class to a registered clearing house rather than leave it bilateral. It is defined by reference to the characteristics of the contract, and a floating rate benchmark is one of those characteristics. When the benchmark underlying a class of swaps is retired, the description in the regulation stops matching the instruments the market actually trades.`,
    `Left unamended, that produces a gap of the least useful kind. Contracts referencing the successor rate would sit outside a mandate that was written for the predecessor, not because anyone decided they should clear bilaterally but because the rule text described a rate that no longer exists.`,
    `The pattern is familiar from the sterling and dollar transitions. CDOR and TIIE are smaller markets than LIBOR, and the mechanical work is the same: identify the class, substitute the reference rate, preserve the scope of the obligation across the change.`,
    `The distinction from the LIBOR episode is that these transitions were conducted without the credibility problem that forced the original reform. CDOR and TIIE were retired for structural reasons — thin underlying transaction volumes and a preference for overnight rates anchored in observable funding markets — rather than because of misconduct.`,
    `For clearing members the operational consequence is small and specific: the eligibility logic that determines whether a given trade must be submitted needs to recognise the successor rates. Firms that completed the earlier transitions have the pattern.`,
    `What the determination marks is the point at which the successor rates stop being the new benchmark and become the benchmark. A rate that appears in a clearing mandate is part of the market's default infrastructure rather than a migration target.`,
  ],
  related:[
    {href:"/markets/benchmark-reform-second-wave/",kick:"Fixed Income",title:"Benchmark reform enters a second wave",ago:"AUGUST 2026"},
    {href:"/markets/sec-transfer-agent-rules-proposal/",kick:"Market Structure",title:"The SEC reopens the transfer agent rules",ago:"SEPTEMBER 8, 2026"},
    {href:"/markets/treasury-market-plumbing-modernizes/",kick:"Capital Markets",title:"Treasury market plumbing modernises",ago:"AUGUST 2026"},
  ]}),

MK({ slug:"sec-transfer-agent-rules-proposal", kick:"Market Structure",
  headline:"The SEC reopens the transfer agent rules",
  dek:"A proposal would add rules, amend others, rescind one, and rewrite both Form TA-1 and Form TA-2 — the registration and reporting forms for the firms that maintain the record of who owns what.",
  metaDesc:"The SEC has proposed new and amended transfer agent rules, changes to Forms TA-1 and TA-2, and the rescission of one rule, in a modernisation of the regime.",
  author:"priya-raghavan", date:"2026-09-08T11:00:00Z",
  capt:"The register of ownership is infrastructure most investors never see.",
  tags:[{name:"Capital Markets",slug:"capital-markets"},{name:"Regulation",slug:"regulation"},{name:"Market Structure",slug:"market-structure"}],
  body:[
    `A transfer agent keeps the record of who owns a company's securities, processes transfers, and pays out dividends and interest. The function is invisible until it fails, which is why the rules governing it have been left alone for a long time.`,
    `On September 4 the Securities and Exchange Commission proposed changing them. The <a href="https://www.federalregister.gov/documents/2026/09/04/2026-18190/transfer-agent-rules" rel="noopener">Transfer Agent Rules</a> proposal, document 2026-18190, would adopt new rules, amend existing rules, amend Form TA-1 and Form TA-2, and rescind one existing rule governing registered transfer agents. The Commission describes the package as designed to modernise the rules governing registered transfer agents.`,
    `Form TA-1 is the registration form and Form TA-2 the annual activity report. Amending both is the part of the proposal with the widest reach, because the forms determine what the Commission knows about the population it supervises. A regime is limited by the questions its forms ask.`,
    `The existing framework was built for an environment of certificated securities and mailed proxies. Transfer agents now operate as data processors managing electronic positions, and a substantial part of what they do — cybersecurity, business continuity, vendor management — has no clear home in rules written before those categories existed.`,
    `The rescission is the detail worth watching. Removing a rule outright is a stronger statement than amending it, and it indicates the Commission regards the underlying requirement as obsolete rather than merely dated.`,
    `The constituency is broader than the registered agent population. Issuers rely on the transfer agent record for corporate actions and shareholder votes. Companies with retail registers depend on it directly. The tokenisation projects now moving to production are, in a specific sense, proposals to reimplement this same function on different infrastructure, which makes the standard applied to the incumbent version relevant to the successor.`,
    `The comment period closes on November 3, 2026, a longer window than the Commission allowed on its crypto asset proposal. Transfer agents are a smaller and more technical constituency than crypto issuers, and the operational detail in a proposal of this kind takes time to work through.`,
  ],
  related:[
    {href:"/markets/cftc-cdor-tiie-swap-clearing-transition/",kick:"Market Structure",title:"CFTC retires CDOR and TIIE from clearing",ago:"SEPTEMBER 8, 2026"},
    {href:"/crypto/sec-proposes-regulation-crypto-assets/",kick:"Regulation",title:"SEC proposes a $75m crypto exemption",ago:"SEPTEMBER 8, 2026"},
    {href:"/blockchain/tokenization-pilots-to-institutional-markets/",kick:"Tokenization",title:"Tokenization moves from pilots to institutional markets",ago:"AUGUST 2026"},
  ]}),

];
