/** Batch 37 — 20 September 2026, evening. Four reported pieces and two new
 *  editions of The Divide. The FCC piece separates the July order from the
 *  rules taking effect this month, and keeps Commissioner Gomez's dissent
 *  attached to the proposal she dissented from. The Paramount terms are
 *  reported as under discussion, not agreed. Divide columns carry no
 *  photograph by design. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:o.opinion ? "" : "Photograph via Unsplash" } });
const CR=P("crypto","Crypto","crypto"), PO=P("policy","Policy","policy"),
      MU=P("music","Music","music"), BU=P("business","Business","business");
const DV = P("divide","The Divide","the-divide");
const TAGS = (...t) => [{name:"The Divide",slug:"the-divide"}, ...t];

export default [

CR({ slug:"perpetual-futures-come-for-the-stocks", kick:"Market Structure",
  headline:"Perpetual futures come for the stocks",
  dek:"Three venues filed on the same day to offer contracts on Tesla and Nvidia that never expire. The instrument was built offshore for crypto; it is now asking to be domesticated.",
  metaDesc:"Kalshi, Coinbase and Kraken's Bitnomial have all filed to offer perpetual futures on individual US stocks, an instrument built in offshore crypto markets.",
  author:"marcus-oyelaran", date:"2026-09-20T17:40:00Z",
  capt:"A contract with no expiry date has to be anchored some other way.",
  tags:[{name:"Market Structure",slug:"market-structure"},{name:"Digital Assets",slug:"digital-assets"},{name:"Capital Markets",slug:"capital-markets"}],
  related:[
    {href:"/blockchain/the-exemption-picks-its-winners/",kick:"Tokenization",title:"The exemption picks its winners",ago:"SEPTEMBER 20, 2026"},
    {href:"/blockchain/stock-tokens-get-a-five-year-door/",kick:"Tokenization",title:"Stock tokens get a five-year door",ago:"SEPTEMBER 17, 2026"},
    {href:"/crypto/sgx-perpetual-futures-us-institutions/",kick:"Derivatives",title:"SGX opens crypto perps to US funds",ago:"SEPTEMBER 2026"},
  ],
  body:[
    `The perpetual future is the one genuinely original instrument crypto has produced. It has no expiry date, and instead of settling on a fixed day it pays a funding rate between longs and shorts, frequently, to keep its price glued to the underlying. Offshore exchanges have traded trillions of dollars of them. No American venue has ever offered one on a share of Tesla.`,
    `Three filings landed on Friday asking to change that. Kalshi filed a proposed rule change with the SEC and submitted it to the Commodity Futures Trading Commission, <a href="https://cointelegraph.com/news/kalshi-joins-coinbase-with-filing-for-us-stock-perpetual-futures" rel="noopener">Cointelegraph reported</a>; Coinbase filed its own proposal the same day; and Payward, Kraken's parent, filed through its Bitnomial exchange.`,
    `Kalshi says the contracts would be treated as security futures products and cleared through Kalshi Klear, its CFTC-registered clearing house. Payward says it would start with perpetuals on ten equities including Tesla, Nvidia, Apple, Microsoft and Amazon, and work towards trading five days a week around the clock.`,
    `The appeal to a retail trader is obvious and worth stating plainly: leverage without a roll. A conventional futures position has to be closed and reopened each time the contract expires, which costs money and attention. A perpetual just continues, and the funding payment quietly charges whichever side is crowded.`,
    `That funding mechanism is also the risk. It is a price signal that updates every few hours, and in a stressed market it can invert violently, which is how offshore perpetual markets produce cascades of liquidations in minutes. Bringing the instrument onshore means bringing that dynamic to Apple.`,
    `The regulatory shape is unusual. These are equity derivatives, which puts them in the SEC's world, cleared through futures infrastructure, which puts them in the CFTC's. Each filing is effectively asking both agencies to agree on which of them is being asked.`,
    `It is not a coincidence that this arrives now. <a href="/blockchain/stock-tokens-get-a-five-year-door/">The SEC opened a five-year door for tokenised stock on Thursday</a>, and Paul Atkins said after the CLARITY Act failed that the Commission would act within its existing authority. Firms are reading that as an invitation and filing accordingly.`,
    `Whether that invitation extends this far is the open question. A tokenised share gives the holder the economics and rights of ownership; a perpetual future gives them neither, and delivers leveraged exposure to a retail audience instead. The two things are being proposed in the same fortnight and they are not the same proposition.`,
    `The venues will argue, correctly, that Americans already trade these contracts — on offshore platforms, without segregated clearing or a regulator to complain to. Onshore versions would at least sit inside a clearing house and a rulebook.`,
    `That argument has won before. It is roughly how spot bitcoin ETFs arrived, and it will probably win again, because the alternative to regulated leverage has turned out to be unregulated leverage rather than none at all.`]}),

PO({ slug:"the-broadband-label-gets-shorter", kick:"Regulation",
  headline:"The broadband label gets shorter",
  dek:"The price label modelled on the nutrition panel took effect this week in a trimmed form: a link instead of a label at the point of sale, and fees bundled into an 'up to'.",
  metaDesc:"Revised FCC broadband label rules took effect this month, letting providers link to the label at the point of sale and dropping machine-readable data.",
  author:"tom-kessler", date:"2026-09-20T17:15:00Z",
  capt:"A disclosure that takes one more click is a disclosure fewer people read.",
  tags:[{name:"Regulation",slug:"regulation"},{name:"Consumer Technology",slug:"consumer-technology"},{name:"Policy",slug:"policy"}],
  related:[
    {href:"/policy/fcc-leaves-the-transceiver-alone/",kick:"Regulation",title:"The FCC leaves the transceiver alone, for now",ago:"SEPTEMBER 12, 2026"},
    {href:"/policy/the-sec-steps-out-of-the-proxy-ballot/",kick:"Governance",title:"The SEC steps out of the proxy ballot",ago:"SEPTEMBER 17, 2026"},
    {href:"/business/the-settlement-stays-sealed/",kick:"Antitrust",title:"The settlement stays sealed",ago:"SEPTEMBER 18, 2026"},
  ],
  body:[
    `The broadband consumer label was a good idea executed literally: a panel modelled on the nutrition label on a cereal box, showing the monthly price, the fees, the speeds and the data caps, displayed where the customer decides to buy.`,
    `As of this month it is smaller. Under revised rules that took effect on 14 September, following <a href="https://www.fcc.gov/document/fcc-make-broadband-labels-more-useful-consumer-tool-0" rel="noopener">an order the Commission adopted in July</a>, an internet provider no longer has to display the label itself at the point of sale. An icon or a link will do. Individual fees can be consolidated into an "up to" figure, and the requirement to publish label data in machine-readable form is gone.`,
    `Chairman Brendan Carr framed the package as a simplification that serves everyone: a label that is easier for consumers to use, with lower compliance costs for providers, "a win all the way around", he said at the July meeting.`,
    `The click is the part to weigh. Disclosure research is consistent that the difference between information shown and information one step away is most of the effect, which is why the original rule specified the point of sale rather than the website. A link satisfies the rule; a panel changes the decision.`,
    `The machine-readable requirement mattered for a different reason. It allowed comparison sites, researchers and state regulators to pull every provider's prices into one table automatically, which is how patterns across a market become visible. Without it, each label must be read one at a time by a person.`,
    `It also has an accessibility cost that the Commission says is handled by separate obligations. Structured data is what screen readers and assistive tools consume most reliably, and moving from a data file to a rendered panel makes that harder even where the legal duty to be accessible remains.`,
    `The dissent is on the record from an earlier stage. Anna Gomez, the Commission's sole Democratic member, called the proposal that led here "one of the most anti-consumer items I have seen", arguing that it would let providers hide add-on fees.`,
    `Consumer advocates have taken the same view. Teresa Murray of U.S. PIRG called the Commission's direction "very troubling", and Ryan Johnston of TURN described the original rule as a transparency tool that was working as designed.`,
    `The counter-argument deserves its due. Compliance costs are real, they fall hardest on small rural providers, and a label nobody reads is a cost with no benefit. The honest test is empirical: does a linked label get opened?`,
    `That is the test nobody will be able to run. <a href="/policy/the-sec-steps-out-of-the-proxy-ballot/">As with the SEC's proposal to leave shareholder proposals to state law</a>, the machinery that would let anyone measure the effect is part of what has been removed.`]}),

MU({ slug:"the-cd-is-up-fifty-nine-per-cent", kick:"Music Business",
  headline:"The CD is up fifty-nine per cent",
  dek:"American recorded music grew 6.9% in the first half. The fastest-growing format was the one the industry spent twenty years writing off.",
  metaDesc:"RIAA mid-year data shows US recorded music revenue of about $6 billion, with CD revenue up 58.6% and vinyl up 17.7% in the first half of 2026.",
  author:"colin-abernathy", date:"2026-09-20T16:50:00Z",
  capt:"The format that was supposed to be finished is the one that is growing fastest.",
  tags:[{name:"Music",slug:"music"},{name:"Business of Culture",slug:"business-of-culture"},{name:"Streaming",slug:"streaming"}],
  related:[
    {href:"/music/one-hundred-and-fifty-thousand-a-day/",kick:"Streaming",title:"One hundred and fifty thousand a day",ago:"SEPTEMBER 18, 2026"},
    {href:"/music/vinyl-is-a-real-business-again/",kick:"Music",title:"Vinyl is a real business again",ago:"SEPTEMBER 2026"},
    {href:"/music/the-growth-is-somewhere-else/",kick:"Music",title:"The growth is somewhere else",ago:"SEPTEMBER 2026"},
  ],
  body:[
    `Two days ago this section reported that 150,000 tracks a day are uploaded to streaming services and that a fifth of all recordings were streamed exactly zero times last year. Here is the same industry from the other end: the fastest-growing product in American music this year is a plastic disc in a jewel case.`,
    `The RIAA's mid-year figures put US recorded music revenue at about $6bn for the first half, up 6.9% on last year, <a href="https://musically.com/2026/09/01/us-recorded-music-revenues-grew-by-6-9-in-the-first-half-of-2026/" rel="noopener">as reported by Music Ally</a>. Physical formats rose 25.9% overall. Vinyl grew 17.7% to $543.8m, and CD revenue rose 58.6% to $171.1m, from roughly $108m in the same period last year.`,
    `Streaming is still almost the entire business and nothing here changes that. What the physical numbers describe is a different transaction happening alongside it, and one with an economics the streaming business cannot replicate.`,
    `The arithmetic is the argument. A CD sold at $13 returns more to the rights holder than several thousand streams, and it returns it once, immediately, from a buyer who has decided to own a specific record rather than rent access to everything.`,
    `The CD's revival has an obvious cause and an unfashionable one. It is the cheapest way to own an album — vinyl has passed $35 a copy in many shops — and it is the format that a teenager discovering physical media can actually afford on pocket money.`,
    `There is a supply-side reason too. Vinyl pressing capacity is finite, lead times run to months, and an artist who wants a physical product for a release next quarter can get CDs made in weeks. Constraint at the prestige format pushes volume to the practical one.`,
    `<a href="/music/one-hundred-and-fifty-thousand-a-day/">Set this against the upload figures</a> and the two trends look like the same story told twice. When recorded music becomes infinite and free at the margin, the scarce thing is not the recording but the object, the shelf and the decision to own something.`,
    `Independent shops are the channel that benefits most, and they are the part of the industry with the least leverage over streaming. A record store keeps the margin on a physical sale and the relationship with the buyer, neither of which any playlist provides.`,
    `The caution is that percentages on small bases flatter. CDs at $171m against a $6bn half-year is a rounding error in the industry's accounts, and one good half does not reverse two decades.`,
    `But the direction is the point. The industry spent twenty years planning for a future in which physical music was a souvenir, and the souvenir aisle is now the fastest-growing part of the shop.`]}),

BU({ slug:"thirty-films-a-year-and-a-monitor-for-cnn", kick:"Antitrust",
  headline:"Thirty films a year, a monitor for CNN",
  dek:"Paramount is reportedly close to settling with the states blocking its Warner takeover. The terms under discussion read less like an antitrust remedy than an industrial policy.",
  metaDesc:"Paramount is in advanced talks with state attorneys general to settle the suit blocking its Warner Bros. Discovery takeover, with a hearing in October.",
  author:"jonathan-bright", date:"2026-09-20T16:25:00Z",
  capt:"Remedies negotiated in private become commitments nobody voted on.",
  tags:[{name:"Antitrust",slug:"antitrust"},{name:"Media",slug:"media"},{name:"Corporate Strategy",slug:"corporate-strategy"}],
  related:[
    {href:"/business/paramount-says-the-market-was-invented/",kick:"Antitrust",title:"Paramount's defence: the market was invented",ago:"SEPTEMBER 13, 2026"},
    {href:"/business/paramount-and-the-states-agree-to-talk/",kick:"Antitrust",title:"Paramount and the states agree to talk",ago:"SEPTEMBER 12, 2026"},
    {href:"/business/pacing-becomes-a-price-fixing-claim/",kick:"Antitrust",title:"Pacing becomes a price-fixing claim",ago:"SEPTEMBER 20, 2026"},
  ],
  body:[
    `An antitrust settlement is supposed to fix a competition problem. The terms reported to be under discussion between Paramount and the states suing it would fix rather more than that.`,
    `Paramount Skydance is in advanced talks with California's attorney general, Rob Bonta, over the twelve-state suit blocking its takeover of Warner Bros. Discovery, <a href="https://variety.com/2026/film/news/paramount-california-ag-bonta-advanced-talks-settle-antitrust-suit-1236867326/" rel="noopener">Variety reported</a>. A judge has ordered the parties to a two-day settlement conference in San Francisco on 14 and 15 October.`,
    `The terms said to be in play are specific. An editorial board to monitor CNN. A commitment to release thirty films a year in cinemas. An undertaking not to negotiate carriage for all the company's channels as a single bundle. The sale of some cable networks. And a promise to keep the company in California.`,
    `Sort those into two piles. The carriage undertaking and the channel divestitures are ordinary antitrust remedies: they address bundling power and concentration, which is what the case was about. The rest is something else.`,
    `Thirty theatrical releases a year is an industrial commitment to a distribution channel and to the people employed by it. Staying in California is a jobs guarantee to the state whose attorney general is negotiating. Neither has anything to do with whether the merged company can raise prices.`,
    `The CNN editorial board is the most consequential and the least examinable. Whatever its intent, it creates a standing body with some claim over a news organisation's judgement, negotiated by a state law officer as the price of a merger approval, with no statute defining its powers.`,
    `That is why the political objections are coming from the same side as the enforcement. Senator Elizabeth Warren said it would be "a massive mistake to cave on the Paramount merger", and the actor Mark Ruffalo publicly urged Bonta not to settle.`,
    `The case for settling is simply that the alternative is uncertain. Litigating to judgment risks losing outright, and <a href="/business/paramount-says-the-market-was-invented/">Paramount's defence that the plaintiffs invented the market they are protecting</a> is not frivolous. A settlement converts a possible loss into a set of enforceable promises.`,
    `The cost is that it converts merger review into bargaining over concessions unrelated to competition. Every future acquirer now knows that a state's objection can be answered with production quotas and headquarters commitments, which is a transferable lesson.`,
    `October's conference is the date to watch. If it produces a deal, a $110bn merger will have been resolved on terms that no court tested and no legislature wrote, and the precedent will outlast every provision in it.`]}),

DV({ slug:"divide-ai-pacing-left", kick:"Opinion", opinion:true,
  headline:"The race is not a law of nature",
  dek:"Competitors coordinating to go slower is exactly what antitrust forbids, and exactly what safety requires. The answer is to change the rule, not to sue the restraint.",
  metaDesc:"The case for allowing AI labs to coordinate on safety: unilateral restraint is impossible in a race, and antitrust was not written for this problem.",
  author:"ruth-calloway", date:"2026-09-20T18:10:00Z",
  tags:TAGS({name:"AI Governance",slug:"ai-governance"},{name:"Antitrust",slug:"antitrust"}),
  related:[
    {href:"/divide/divide-ai-pacing-right/",kick:"Opinion",title:"Safety by private agreement is a cartel",ago:"SEPTEMBER 20, 2026"},
    {href:"/business/pacing-becomes-a-price-fixing-claim/",kick:"Antitrust",title:"Pacing becomes a price-fixing claim",ago:"SEPTEMBER 20, 2026"},
    {href:"/ai/both-capitals-say-no-to-pacing/",kick:"AI Security",title:"Both capitals say no within 48 hours",ago:"SEPTEMBER 14, 2026"},
  ],
  body:[
    `A firm that slows down alone loses, and everybody in this industry knows it. That is not a moral failing; it is the structure. Which is why the demand that each company restrain itself privately, without talking to anyone, is a demand that nothing happen.`,
    `Antitrust law exists because agreements among rivals usually take something from the public: a higher price, a smaller supply, a worse product. The pacing argument is that on this one product, some of the supply is the risk. A law written for bread and steel is being asked to referee a question it was never drafted for.`,
    `We already accept this logic elsewhere. Banks coordinate on capital standards, airlines on maintenance rules, drug companies on trial protocols — and where competition law would otherwise bite, legislatures have written exemptions, because the alternative was a race in the wrong direction.`,
    `The honest version of the complaint against the labs is not that they agreed. It is that they agreed among themselves, in private, with no public accountability for what they decided. That is a real objection, and its remedy is a public process with a waiver attached, not a lawsuit demanding they compete harder on the thing they say is dangerous.`,
    `<a href="/business/pacing-becomes-a-price-fixing-claim/">Four subscribers are now suing over slower AI</a>. Read the claim plainly: consumers were denied faster capability. If that is a harm the law must remedy, then the law has decided that the only permitted speed is maximum, and it has decided it without anyone ever voting for that.`]}),

DV({ slug:"divide-ai-pacing-right", kick:"Opinion", opinion:true,
  headline:"Safety by private agreement is a cartel",
  dek:"When the four largest firms in a market agree on how good the product may get, the burden is on them to show why this is not the oldest trick in commerce.",
  metaDesc:"The case against AI labs coordinating: every cartel in history has explained itself as responsible restraint, and the remedy for risk is public rules.",
  author:"grant-whitmore", date:"2026-09-20T18:10:00Z",
  tags:TAGS({name:"AI Governance",slug:"ai-governance"},{name:"Antitrust",slug:"antitrust"}),
  related:[
    {href:"/divide/divide-ai-pacing-left/",kick:"Opinion",title:"The race is not a law of nature",ago:"SEPTEMBER 20, 2026"},
    {href:"/business/pacing-becomes-a-price-fixing-claim/",kick:"Antitrust",title:"Pacing becomes a price-fixing claim",ago:"SEPTEMBER 20, 2026"},
    {href:"/ai/both-capitals-say-no-to-pacing/",kick:"AI Security",title:"Both capitals say no within 48 hours",ago:"SEPTEMBER 14, 2026"},
  ],
  body:[
    `Every cartel in the history of commerce has described itself as responsible restraint. Railways agreed on rates to prevent ruinous competition. Airlines fixed fares for the safety of the industry. In each case the explanation was sincere, widely believed, and worth a fortune to the people offering it.`,
    `Notice which firms are proposing the pace. They are the four with the largest models, the deepest capital and the most to lose from a competitor arriving with something better and cheaper. A ceiling on capability is a moat for whoever is already at the top of it.`,
    `If the danger is real, the remedy is public and it already exists: legislate, license, require evaluations, impose liability. All of that is legitimate, reviewable and applies to every entrant equally. What is not legitimate is four companies deciding among themselves what the market may be offered and calling the result governance.`,
    `The test is who is in the room. A rule made by Congress binds the firm that has not been founded yet. A gentleman's agreement among incumbents binds nobody except by their consent, and is abandoned the moment one of them sees an advantage in abandoning it.`,
    `The labs cannot have this both ways. If the pacing commitment is real enough to restrain output, it is real enough to be an agreement, and agreements between rivals about output are the plainest thing competition law prohibits. If it is not real, it was public relations, and the answer is to stop pretending it was safety.`]}),

DV({ slug:"divide-shareholder-proposals-left", kick:"Opinion", opinion:true,
  headline:"The ballot is the only lever owners have",
  dek:"A shareholder proposal is the one mechanism by which the people who own a company can put a question to it without buying control. The SEC proposes to remove it.",
  metaDesc:"The case for keeping Rule 14a-8: the shareholder proposal is the cheapest accountability tool owners have, and state law will not replace it.",
  author:"ruth-calloway", date:"2026-09-20T18:05:00Z",
  tags:TAGS({name:"Regulation",slug:"regulation"},{name:"Corporate Strategy",slug:"corporate-strategy"}),
  related:[
    {href:"/divide/divide-shareholder-proposals-right/",kick:"Opinion",title:"A company ballot is not a town hall",ago:"SEPTEMBER 20, 2026"},
    {href:"/policy/the-sec-steps-out-of-the-proxy-ballot/",kick:"Governance",title:"The SEC steps out of the proxy ballot",ago:"SEPTEMBER 17, 2026"},
    {href:"/divide/divide-wealth-tax-left/",kick:"Opinion",title:"Tax fortunes, not just paychecks",ago:"AUGUST 2026"},
  ],
  body:[
    `Owning shares in a public company buys you almost nothing in the way of influence. You cannot call the chief executive, you will not be at the meeting that matters, and your holding is too small to threaten anyone. What you have had, for eighty years, is the right to put one question on the ballot and make the other owners vote on it.`,
    `That right is cheap by design, and the cheapness is the point. A proposal costs a pension fund or a parish investor a filing and a few hundred words. Take it away and the same question costs tens of thousands of dollars in printed proxy materials, which means only the people who already have money and access can ask it.`,
    `The answer offered is that state law will provide. It will not provide the same thing. States compete for incorporations by offering managers a comfortable home, and the recent movement has been to raise the ownership thresholds a proponent must clear, not to lower them.`,
    `Most proposals fail, which is presented as evidence they are a nuisance. It is evidence of the opposite: a mechanism that lets the owners say no cheaply, and occasionally say yes, is a mechanism working exactly as intended. Boards changed course on executive pay, on climate disclosure and on board elections because a vote was coming.`,
    `<a href="/policy/the-sec-steps-out-of-the-proxy-ballot/">The Commission says this is about its own authority</a> rather than about silencing anyone. Perhaps. The effect is the same either way: the one lever available to small owners is removed, and nothing is put in its place.`]}),

DV({ slug:"divide-shareholder-proposals-right", kick:"Opinion", opinion:true,
  headline:"A company ballot is not a town hall",
  dek:"The federal proposal rule turned corporate meetings into a venue for campaigns that shareholders never asked to fund. Ownership questions belong in state law.",
  metaDesc:"The case for rescinding Rule 14a-8: the proxy ballot became a subsidised venue for activist campaigns, and corporate governance is state law.",
  author:"grant-whitmore", date:"2026-09-20T18:05:00Z",
  tags:TAGS({name:"Regulation",slug:"regulation"},{name:"Corporate Strategy",slug:"corporate-strategy"}),
  related:[
    {href:"/divide/divide-shareholder-proposals-left/",kick:"Opinion",title:"The ballot is the only lever owners have",ago:"SEPTEMBER 20, 2026"},
    {href:"/policy/the-sec-steps-out-of-the-proxy-ballot/",kick:"Governance",title:"The SEC steps out of the proxy ballot",ago:"SEPTEMBER 17, 2026"},
    {href:"/divide/divide-wealth-tax-right/",kick:"Opinion",title:"A wealth tax is a machine for capital destruction",ago:"AUGUST 2026"},
  ],
  body:[
    `Start with the part nobody disputes: corporate governance is state law. Who may vote, on what, and how a company is run are questions answered by the state of incorporation and the company's own charter. The federal rule at issue was an accident of proxy regulation that grew into something else.`,
    `What it grew into was a subsidy. A holder of a few thousand dollars of stock can compel a company to print, circulate and defend a proposal to every other owner, at the company's expense. The cost falls on the shareholders as a whole, and most of them never asked for the campaign.`,
    `And the campaigns stopped being about the business a long time ago. A proposal about the lobbying of a trade association, about a supplier's politics, about a policy question already before Congress — these use the ballot as a stage because it is the cheapest stage available, not because the owners are the right audience.`,
    `Removing the federal rule does not abolish shareholder proposals. It returns the question to the states and to company charters, where a firm can adopt whatever threshold and subject matter its owners will accept, and where investors who dislike the answer can invest elsewhere.`,
    `The complaint that states will compete to be permissive to managers cuts both ways. Delaware's franchise exists because investors will pay for the law it offers, and a state that lets boards ignore their owners entirely will find its companies valued accordingly. That is a market for governance, and it is more honest than a federal rule written for a different era.`]}),

];
