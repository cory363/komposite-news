/** Batch 29 — 15 September 2026. Every figure here is checked against the
 *  filing or the company announcement. The DOJ language is quoted from the
 *  US Attorney's statement rather than attributed to an individual, because
 *  the secondary reports do not agree on who delivered it. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const FT=P("fintech","Fintech","fintech"), PO=P("policy","Policy","policy"), CR=P("crypto","Crypto","crypto");

export default [

FT({ slug:"chime-buys-the-bank-it-was-renting", kick:"Banking",
  headline:"Chime buys the bank it was renting",
  dek:"$590m in cash for a seven-year partner, at about one and a half times tangible book. The rented charter was supposed to be the cheap way to avoid becoming a bank.",
  metaDesc:"Chime agreed to acquire Stride Bank for $590 million in cash, converting a seven-year banking partnership into ownership of a national charter.",
  author:"elena-vasquez", date:"2026-09-15T12:30:00Z",
  capt:"The cheapest charter is the one you do not have to keep asking for.",
  tags:[{name:"Banking",slug:"banking"},{name:"Fintech",slug:"fintech"},{name:"Regulation",slug:"regulation"}],
  related:[
    {href:"/fintech/tabapay-buys-transact-bank/",kick:"Banking",title:"TabaPay buys a bank to close the loop",ago:"SEPTEMBER 2026"},
    {href:"/fintech/rbi-argues-for-proportionate-fintech-rules/",kick:"Regulation",title:"India's central bank argues against making fintechs into banks",ago:"SEPTEMBER 2026"},
    {href:"/fintech/open-banking-goes-back-to-drafting/",kick:"Regulation",title:"Open banking goes back to drafting",ago:"SEPTEMBER 2026"},
  ],
  body:[
    `For most of the last decade the standard fintech answer to banking regulation was to find somebody who already had a charter and pay them to hold the deposits. The arrangement had an obvious appeal: the partner bank carried the examinations, the capital and the liability, and the fintech carried the app.`,
    `Chime has decided to stop renting. It agreed on 8 September to acquire Stride Bank, N.A. for $590m in cash, <a href="https://fintech.global/2026/09/09/chime-to-acquire-stride-bank-for-590m/" rel="noopener">about one and a half times Stride's tangible book value</a>, and to bring the charter in-house. Stride becomes wholly owned and is to be renamed Chime Bank, N.A.`,
    `The two have worked together for seven years, which is the detail that gives the price its meaning. This is not an acquisition of capability. Chime already had access to everything Stride does; what it did not have was the right to keep that access without asking.`,
    `That is the shift worth naming. A partnership is a contract, and a contract can be renegotiated, repriced, or ended by a regulator talking to the other party. Supervisors have spent three years pressing banks on how carefully they oversee the fintechs they sponsor, and the predictable effect has been to make sponsorship more expensive and more conditional for everyone renting one.`,
    `At some point on that curve, buying becomes cheaper than renting, and 1.5 times book is what that point looks like on a term sheet. Chime is paying a premium for the removal of a counterparty, not for a balance sheet.`,
    `The exchange is not free. A bank holding company answers to the Federal Reserve as well as the Office of the Comptroller of the Currency, holds capital against its assets, and files what banks file. The examinations Stride used to absorb arrive at Chime's own door instead, and they arrive whether or not the quarter was good.`,
    `Chris Britt, Chime's chief executive and co-founder, framed it as scale rather than structure: combining the company's brand and member relationships with "Stride's national charter and team" to "accelerate toward our vision to be the largest provider of primary bank accounts in America". Brud Baker, Stride's chairman and chief executive, said the charter and the team "will be central to what comes next".`,
    `Neither statement mentions the part that decides whether this works. The OCC and the Federal Reserve both have to approve it, and the deal is not expected to close until the first half of 2027, which is a long time to hold a price agreed in a different rate environment.`,
    `<a href="/fintech/tabapay-buys-transact-bank/">TabaPay reached the same conclusion a week ago</a> at a smaller scale. Two firms buying their sponsors inside a fortnight is a pattern rather than a coincidence, and it suggests the banking-as-a-service era is ending the way most intermediated models end: the biggest customer decides to own the intermediary.`]}),

PO({ slug:"the-wash-sale-rule-catches-up", kick:"Tax Policy",
  headline:"The wash-sale rule catches up",
  dek:"The headline is a $10 exemption for network fees. The substance is a loophole that has been open since 1921 finally closing around digital assets.",
  metaDesc:"The Digital Asset Tax Certainty Act would extend wash-sale and constructive-sale rules to digital assets while exempting network fees under $10, with a Ways and Means markup on 16 September.",
  author:"jonathan-bright", date:"2026-09-15T12:05:00Z",
  capt:"A markup on Wednesday morning decides whether this is a law or a marker.",
  tags:[{name:"Tax Policy",slug:"tax-policy"},{name:"Digital Assets",slug:"digital-assets"},{name:"Regulation",slug:"regulation"}],
  related:[
    {href:"/crypto/clarity-act-draws-a-line-around-control/",kick:"Regulation",title:"The CLARITY Act draws its line around control",ago:"SEPTEMBER 2026"},
    {href:"/policy/sec-proposes-to-rescind-the-pay-to-play-rule/",kick:"Regulation",title:"The SEC proposes to delete its pay-to-play rule",ago:"SEPTEMBER 2026"},
    {href:"/fintech/treasury-genius-act-stablecoin-rules/",kick:"Regulation",title:"Treasury drafts the stablecoin perimeter",ago:"SEPTEMBER 2026"},
  ],
  body:[
    `Tax bills are read from the provision the sponsors lead with, which is usually the one that costs the least. This one leads with a $10 exemption and is carried by something else entirely.`,
    `The Digital Asset Tax Certainty Act, H.R. 10357, runs to 114 pages and <a href="https://www.coindesk.com/policy/2026/09/14/u-s-house-panel-shares-crypto-tax-bill-ahead-of-hearing-later-this-week" rel="noopener">was released ahead of a House Ways and Means markup</a> set for Wednesday morning. CoinDesk reports it was introduced by Representatives Steven Horsford and Max Miller, and that it covers de minimis transactions, gain and loss accounting, transfers, wash sale rules, mining, staking and broker requirements.`,
    `Start with the small part, because it is genuinely useful. Network and transaction fees below $10 would stop generating taxable events, which removes an accounting burden that has been absurd since the beginning: a wallet that pays forty cents in gas has technically disposed of property and owes a calculation on it.`,
    `The relief is also bounded. It does not extend to anyone who made more than 5,000 transfers in a year, which draws the line between a person using a wallet and a business operating one. That is a reasonable place to draw it, and it is the first sign that the bill is not simply an industry wish list.`,
    `The provision that matters is the wash-sale rule. Section 1091 has, since 1921, denied a loss deduction when a taxpayer sells at a loss and buys the same position back inside thirty days — and it applies to "stock or securities", which digital assets have never been. The practical result is that crypto holders have been able to sell at the bottom, rebuy immediately, keep the position and book the loss.`,
    `Extending the rule ends that, and it ends a real annual practice rather than a theoretical one. Tax-loss harvesting without a holding gap has been a standard December exercise for anyone with a large position and a bad year, and it is the single largest revenue item in this bill by a distance.`,
    `Constructive-sale rules go the same way, which closes the matching side of the door: holding an offsetting position rather than selling has been the other route to a realised loss without a realised disposal.`,
    `Qualified US dollar stablecoins are excluded, and the exclusion is correct rather than generous. A wash-sale rule on an instrument designed not to move in price would be a rule about nothing, and treating a payment token as a trading position is how tax codes acquire provisions nobody can administer.`,
    `What the bill does not do is resolve where any of this sits. It directs Treasury and the IRS to write rules as needed, which is the sentence that decides how the statute actually behaves, and those rules do not exist yet.`,
    `Timing is the honest caveat. The House has limited floor time before the recess that follows November's election, and a 114-page tax bill introduced in September of an election year is more often a marker for the next Congress than a law for this one. The markup on Wednesday will show which of the two it is.`]}),

CR({ slug:"sixty-one-million-of-the-one-and-a-half-billion", kick:"Enforcement",
  headline:"Sixty-one million of the one and a half billion",
  dek:"Prosecutors want to seize $61m from two Binance accounts. The figure they put in the press release, describing the wider network, is twenty-five times larger.",
  metaDesc:"Federal prosecutors in Manhattan filed a civil forfeiture complaint against $61 million in crypto tied to Iranian oil sales laundered through Binance accounts.",
  author:"marcus-oyelaran", date:"2026-09-15T11:40:00Z",
  capt:"The chain was never the hard part. The paperwork around it was.",
  tags:[{name:"Enforcement",slug:"enforcement"},{name:"Digital Assets",slug:"digital-assets"},{name:"Compliance",slug:"compliance"}],
  related:[
    {href:"/crypto/doj-restrains-fifty-two-million-with-an-issuer/",kick:"Enforcement",title:"The issuer is now part of the investigation",ago:"SEPTEMBER 2026"},
    {href:"/crypto/thailand-writes-rules-for-the-plumbing/",kick:"Regulation",title:"Thailand writes rules for the plumbing",ago:"SEPTEMBER 2026"},
    {href:"/crypto/uk-opens-a-five-month-authorisation-window/",kick:"Regulation",title:"The UK opens a five-month door, then closes it",ago:"SEPTEMBER 2026"},
  ],
  body:[
    `The amount in a forfeiture complaint is rarely the amount in the investigation, and the gap between the two is usually where the story is.`,
    `Federal prosecutors in Manhattan filed a civil forfeiture complaint on 14 September <a href="https://www.theblock.co/news/regulation/2026-09-15-doj-61-million-crypto-proceeds-iranian-oil-sales-414768" rel="noopener">against $61m in cryptocurrency</a> said to be proceeds of black-market Iranian oil sales, held in accounts at Binance. The Justice Department's own description of the surrounding conduct puts the network at more than $1.5bn.`,
    `Two Chinese companies are named. One, according to the complaint, presented itself as a digital asset custodian offering fiat-to-crypto conversion for Iran-linked transactions; the other presented itself as a commodities brokerage. Both ran trading accounts on the exchange, and both are alleged to have moved money onward to Iranian exchanges and to the Islamic Revolutionary Guard Corps.`,
    `The government's framing was explicit about the destination. Iran, prosecutors said, "used a network of cryptocurrency actors in China and elsewhere to launder more than $1.5 billion in illicit oil money intended to benefit the Iranian military and the terror-designated IRGC".`,
    `What is notable in the mechanics is how little of this is about cryptography. Nothing here turned on a mixer, a privacy chain or a technical evasion. It turned on two companies describing their business as one thing to an exchange's compliance function while doing another, which is the oldest arrangement in sanctions evasion and long predates the asset class.`,
    `That is the uncomfortable part for the industry's usual defence. Public ledgers do make funds traceable, and this case is evidence of it: prosecutors could follow the money because it moved onchain. The failure was upstream, at the point where a customer explained who it was and an intermediary decided whether to believe it.`,
    `Binance's position here is unresolved and worth stating carefully. The exchange hosted the accounts; it has not been charged in this action, and it had not responded publicly when the filing was reported. It has previously denied related allegations and sued over them.`,
    `Civil forfeiture also carries a lower bar than a prosecution, which is why it is the tool of choice in matters like this. The government sues the property rather than a person, the standard is a preponderance of the evidence, and a claimant who wants the money back has to appear in a US court to say so — which, for an entity routing Iranian oil proceeds, is not an attractive invitation.`,
    `Set against $1.5bn, $61m is what could be reached rather than what was found. <a href="/crypto/doj-restrains-fifty-two-million-with-an-issuer/">As with the $52m restraint order on 12 September</a>, the recoverable share is the share that had not yet left the regulated perimeter, and that is the only share any of these actions ever touches.`]}),

];
