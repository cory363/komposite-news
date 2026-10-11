/** The Divide, 11 October 2026. Three editions, each hung on a filing or a
 *  hearing from the past fortnight: the NFL's Supreme Court brief in Flaherty
 *  v. KalshiEX (8 October), the community bankers' suit against the OCC's
 *  trust-charter rule (2 October) and Rain's application (5 October), and New
 *  York City Council's Committee of the Whole hearing on AI (5 October).
 *  Figures are the league's, the complaint's or the council's own and are
 *  attributed as such. Divide columns carry no photograph by design. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:o.opinion ? "" : "Photograph via Unsplash" } });
const DV = P("divide","The Divide","the-divide");
const TAGS = (...t) => [{name:"The Divide",slug:"the-divide"}, ...t];
const D = "OCTOBER 11, 2026";

export default [

/* ---- Edition 1: sports event contracts ---- */

DV({ slug:"divide-sports-event-contracts-left", kick:"Opinion", opinion:true,
  headline:"A bet does not stop being a bet on an exchange",
  dek:"States built age limits, integrity rules and enforcement staff for sports wagering. Calling the wager a swap should not let a platform walk past all of it.",
  metaDesc:"The case for letting states regulate sports event contracts: a wager on a game is gambling, and state gaming law already has the rules and staff to police it.",
  author:"ruth-calloway", date:"2026-10-11T12:10:00Z",
  tags:TAGS({name:"Market Structure",slug:"market-structure"},{name:"Regulation",slug:"regulation"}),
  related:[
    {href:"/divide/divide-sports-event-contracts-right/",kick:"Opinion",title:"One national market beats a map of gaming boards",ago:D},
    {href:"/policy/the-nfl-says-a-contract-on-a-game-is-a-bet/",kick:"Prediction Markets",title:"The NFL says a contract on a game is a bet",ago:D},
    {href:"/divide/divide-ticket-pricing-left/",kick:"Opinion",title:"Dynamic pricing puts a toll booth on affection",ago:"SEPTEMBER 14, 2026"},
  ],
  body:[
    `Since the Supreme Court struck down the federal ban in 2018, the American settlement on sports betting has been clear enough. If you want to take wagers on games, you get a state licence, you check your customers' age, and you answer to a gaming regulator with staff on the ground. Prediction markets have found a way around every part of that, and the way around is a single word.`,
    `The word is "swap". Kalshi's argument, which the Third Circuit accepted in April, is that a contract on who wins on Sunday is a swap under the Dodd-Frank Act and so belongs to the Commodity Futures Trading Commission alone. The Sixth and Ninth Circuits have since rejected it, and their reasoning is the plain one: a swap manages a risk you already carry. A contract on a football game creates a risk for the thrill of carrying it.`,
    `The stakes are not abstract. In <a href="/policy/the-nfl-says-a-contract-on-a-game-is-a-bet/">the brief the NFL filed at the Supreme Court on Thursday</a>, the league says $1.8bn of $3.3bn in prediction-market volume on the season's first Sunday related to its games. It also says the CFTC has 543 employees for the entire country and every derivatives market in it. A betting market of that size, watched by an agency of that size, is supervised in name.`,
    `Federal oversight was supposed to bring discipline. On the league's account, the regulator and the exchanges have instead declined to adopt its list of prohibited wagers, or the minimum age of 21 that states generally apply. A teenager turned away at a casino sportsbook can trade the same outcome on an app. That is not innovation. It is arbitrage on consumer protection.`,
    `None of this requires hostility to new markets. Congress can write a federal regime for sports contracts with real staff, real age limits and real integrity rules, and the states would have to live with it. Until it does, the people who already police gambling should be allowed to police this. Letting a definition do the work of a statute is how a loophole becomes an industry.`]}),

DV({ slug:"divide-sports-event-contracts-right", kick:"Opinion", opinion:true,
  headline:"One national market beats a map of gaming boards",
  dek:"Sports contracts need rules. But many of the parties asking the Court for state control also profit from the licensed sportsbooks the exchanges compete with.",
  metaDesc:"The case for federal oversight of sports event contracts: one exchange-traded market under one regulator beats a state-by-state map drawn by incumbents.",
  author:"grant-whitmore", date:"2026-10-11T12:10:00Z",
  tags:TAGS({name:"Market Structure",slug:"market-structure"},{name:"Regulation",slug:"regulation"}),
  related:[
    {href:"/divide/divide-sports-event-contracts-left/",kick:"Opinion",title:"A bet does not stop being a bet on an exchange",ago:D},
    {href:"/policy/the-nfl-says-a-contract-on-a-game-is-a-bet/",kick:"Prediction Markets",title:"The NFL says a contract on a game is a bet",ago:D},
    {href:"/divide/divide-ticket-pricing-right/",kick:"Opinion",title:"The ticket was always underpriced",ago:"SEPTEMBER 14, 2026"},
  ],
  body:[
    `Look at who is lining up against Kalshi at the Supreme Court. The docket lists briefs from gaming regulators, legislators from gaming states, the American Gaming Association, the Casino Association of New Jersey and, as of Thursday, the National Football League. These are serious parties with serious arguments. Many of them also make money from the licensed sportsbook system that prediction markets compete with.`,
    `An exchange is a different animal from a sportsbook. A sportsbook sets the line and does well when its customers lose. An exchange matches buyers with sellers, charges a fee, and keeps a record of every trade that a regulator can audit. If the worry is someone trading on an injury report before it is public, one central order book under one federal supervisor is a better place to catch it than a patchwork of state-licensed books.`,
    `The Third Circuit read the statute and concluded in April that these contracts, traded on a federally designated exchange, belong to the CFTC. Two other circuits disagree, which is exactly why the Court should settle it. But the answer should not turn on whether a contract feels like gambling to the people who license gambling. Election contracts felt that way to the CFTC itself, until a federal court ruled for Kalshi in 2024.`,
    `<a href="/policy/the-nfl-says-a-contract-on-a-game-is-a-bet/">The league's own brief</a> is more candid than the headlines about it. It says that if the Court sides with the Third Circuit, the NFL will press the CFTC, the exchanges and Congress for stronger integrity and consumer protections before the 2027 season. That is the right fight. Age limits, banned-bettor lists and data-sharing with leagues can be written once, federally, and bind every venue in the country.`,
    `The alternative is a state-by-state map, each state with its own licence fees and its own incumbents to protect. Baseball and hockey have already signed deals with prediction markets; football has chosen the states. Customers are better served by one set of rules, written in the open and enforced nationally, than by whichever lobby is strongest in each capital.`]}),

/* ---- Edition 2: crypto trust charters ---- */

DV({ slug:"divide-crypto-trust-charters-left", kick:"Opinion", opinion:true,
  headline:"A bank charter should come with a bank's obligations",
  dek:"The trust charter was built for custodians. It should not become federal standing for payment companies without deposit insurance, capital rules or community duties.",
  metaDesc:"The case against national trust charters for crypto firms: the charter brings federal credibility and nationwide reach without the obligations of banking.",
  author:"ruth-calloway", date:"2026-10-11T12:20:00Z",
  tags:TAGS({name:"Banking",slug:"banking"},{name:"Stablecoins",slug:"stablecoins"}),
  related:[
    {href:"/divide/divide-crypto-trust-charters-right/",kick:"Opinion",title:"Let the newcomers in, and examine them",ago:D},
    {href:"/fintech/rain-applies-for-the-charter-the-community-banks-are-suing-over/",kick:"Stablecoins",title:"Rain applies for the charter the community banks are suing over",ago:"OCTOBER 6, 2026"},
    {href:"/divide/divide-crypto-retirement-left/",kick:"Opinion",title:"Retirement savings are not a testbed",ago:"SEPTEMBER 6, 2026"},
  ],
  body:[
    `A national bank charter is among the most valuable licences in American finance. It lets a company operate across the country under one federal regulator, and it pushes a good deal of state law aside along the way. In exchange, ordinary banks accept capital and liquidity rules, consolidated supervision, deposit insurance and, for insured banks, a duty under the Community Reinvestment Act to serve the places they take deposits from.`,
    `The trust charter was a narrow exception to that bargain: a federal home for firms that hold other people's assets as fiduciaries. The Office of the Comptroller of the Currency has now stretched it. Its March rule, built on a 2021 interpretive letter, says trust banks may carry on non-fiduciary business as well. By the count in the complaint community bankers filed on 2 October, 21 trust banks have been approved or conditionally approved under this administration, at least 13 of them crypto companies.`,
    `Look at what the applicants want to do. <a href="/fintech/rain-applies-for-the-charter-the-community-banks-are-suing-over/">Rain's application</a>, announced on 5 October, asks for a trust bank that would hold assets in custody, manage reserves for other stablecoin issuers and issue dollar stablecoins of its own. Holding assets for someone is trust business. Issuing a dollar token that people pay each other with looks a great deal like taking money and promising it back.`,
    `The applicants say they will take no deposits and make no loans, and many of them mean it. But a charter is a door, not a business plan. Once it is open it brings nationwide reach and the credibility of a federal bank name, with no FDIC insurance behind the customer. The community bankers say the OCC has not handled the receivership of an uninsured bank in nearly a century. That is not something to learn during a failure.`,
    `None of this means crypto firms should be shut out. The GENIUS Act already gives stablecoin issuers a regulated path, and a firm that wants to do banking can apply for a full bank charter and accept everything that comes with it. What should not exist is an entrance where the name and the reach come with the licence and the obligations are left outside.`]}),

DV({ slug:"divide-crypto-trust-charters-right", kick:"Opinion", opinion:true,
  headline:"Let the newcomers in, and examine them",
  dek:"The community banks' lawsuit is framed as a defence of the charter. Its practical effect would be a federal regulator keeping new competitors out of payments.",
  metaDesc:"The case for national trust charters for crypto firms: federal examination of stablecoin reserves beats a patchwork of state licences, and incumbents are not neutral.",
  author:"grant-whitmore", date:"2026-10-11T12:20:00Z",
  tags:TAGS({name:"Banking",slug:"banking"},{name:"Stablecoins",slug:"stablecoins"}),
  related:[
    {href:"/divide/divide-crypto-trust-charters-left/",kick:"Opinion",title:"A bank charter should come with a bank's obligations",ago:D},
    {href:"/fintech/rain-applies-for-the-charter-the-community-banks-are-suing-over/",kick:"Stablecoins",title:"Rain applies for the charter the community banks are suing over",ago:"OCTOBER 6, 2026"},
    {href:"/divide/divide-crypto-retirement-right/",kick:"Opinion",title:"Savers can be trusted with the choice",ago:"SEPTEMBER 6, 2026"},
  ],
  body:[
    `Every incumbent industry eventually discovers that the cheapest place to compete is a courtroom. The Independent Community Bankers of America sued the Office of the Comptroller of the Currency on 2 October, asking a judge to throw out the rule under which crypto companies have been winning national trust charters. The complaint is written in the language of safety. Its practical effect would be to keep a set of new payment firms out of the federal system.`,
    `Consider the alternative. Stablecoin issuers and crypto custodians do not vanish if they cannot get a federal charter. They operate under state licences, or from offshore. A national trust bank answers to OCC examiners who can walk in and count what it holds. That is more supervision, not less.`,
    `Nor are the applicants asking to become banks by the back door. <a href="/fintech/rain-applies-for-the-charter-the-community-banks-are-suing-over/">Rain's proposed trust bank</a> would take no deposits, make no commercial loans and offer no consumer accounts, and its release says the reserves behind its stablecoins would not be pledged, lent or reused. A firm that does not lend cannot run the maturity mismatch that sinks banks. Holding reserves in full and in custody is the most conservative kind of banking there is.`,
    `The complaint about Community Reinvestment Act duties proves too much. Those obligations attach to insured banks because they gather deposits backed by the FDIC. A trust bank that takes no deposits gets no deposit insurance, and should not carry the duties that come with it. The comptroller, Jonathan Gould, put the principle plainly in December: "New entrants into the federal banking sector are good for consumers, the banking industry and the economy."`,
    `If the OCC charters a firm that turns out to be a disguised bank, the remedy is to examine it and, if necessary, take the charter away. Stopping every approval while a trade group litigates hands a quiet win to the institutions that already hold charters. Congress passed the GENIUS Act to bring dollar stablecoins under American supervision. The regulator should be allowed to finish the job.`]}),

/* ---- Edition 3: city AI safety laws (newest; leads the homepage panel) ---- */

DV({ slug:"divide-city-ai-laws-left", kick:"Opinion", opinion:true,
  headline:"If Washington will not set the test, New York should",
  dek:"Under oath, four leading AI companies would not put a number on the worst case, and none said it was insured against one. A city of eight million is entitled to ask for proof.",
  metaDesc:"The case for New York City's AI safety bills: the companies say voluntary checks are not enough, and cities already require independent sign-off on risky products.",
  author:"ruth-calloway", date:"2026-10-11T12:30:00Z",
  tags:TAGS({name:"AI Governance",slug:"ai-governance"},{name:"Regulation",slug:"regulation"}),
  related:[
    {href:"/divide/divide-city-ai-laws-right/",kick:"Opinion",title:"A model built for the world cannot be licensed by a city",ago:D},
    {href:"/policy/new-york-city-wants-a-validator-for-every-model/",kick:"AI Governance",title:"New York's council wants a validator for every model",ago:"OCTOBER 6, 2026"},
    {href:"/ai/nyc-ai-hearing-safety-guarantee/",kick:"AI Regulation",title:"AI firms give New York no safety guarantee",ago:"OCTOBER 8, 2026"},
  ],
  body:[
    `On 5 October New York's City Council put OpenAI, Anthropic, Google and Meta under oath and asked them, one by one, to put a number on the worst case. The council sat as a Committee of the Whole, all 51 members, for the first time since 2022. When the speaker, Julie Menin, asked which of the companies carried insurance against catastrophic risk, none of the four raised a hand, TNW reported.`,
    `Her lead bill is modest in concept. <a href="/policy/new-york-city-wants-a-validator-for-every-model/">It would bar selling or deploying an AI system in the city</a> unless it has been checked by an independent validator and can be shut down by a human operator, with a $25,000 penalty per instance. That is the logic of the elevator inspection and the restaurant grade: if a product can hurt the public, someone other than the seller signs off on it.`,
    `The companies' own words make the case. They have signed voluntary pledges and promised outside evaluators, and OpenAI's witness told the council that voluntary commitments and self-regulation are not enough, as PPC Land reported. If that is true, someone has to make the checks mandatory, and no federal law yet does.`,
    `The objection is the patchwork, and it is a real cost. But a patchwork is how much of American consumer protection began: states and cities moved first, industry asked Congress for one national rule, and Congress eventually wrote one. Menin put it in a sentence: "When the federal government fails to act, cities take the lead."`,
    `The bill has gaps. It does not define what counts as an instance, and who may act as a validator is left to the city's Cyber Command to decide. Those should be settled before any vote. The principle is still sound. A city of more than eight million people is entitled to know that a product sold to them has been tested by someone who does not sell it.`]}),

DV({ slug:"divide-city-ai-laws-right", kick:"Opinion", opinion:true,
  headline:"A model built for the world cannot be licensed by a city",
  dek:"A frontier model is trained once and served everywhere. City-by-city validation will not make it safer. It will make it unavailable, or make the rule a formality.",
  metaDesc:"The case against city AI safety laws: model risk is national in scale, local validation regimes fragment the market, and only a federal standard binds every lab.",
  author:"grant-whitmore", date:"2026-10-11T12:30:00Z",
  tags:TAGS({name:"AI Governance",slug:"ai-governance"},{name:"Regulation",slug:"regulation"}),
  related:[
    {href:"/divide/divide-city-ai-laws-left/",kick:"Opinion",title:"If Washington will not set the test, New York should",ago:D},
    {href:"/policy/new-york-city-wants-a-validator-for-every-model/",kick:"AI Governance",title:"New York's council wants a validator for every model",ago:"OCTOBER 6, 2026"},
    {href:"/ai/nyc-ai-hearing-safety-guarantee/",kick:"AI Regulation",title:"AI firms give New York no safety guarantee",ago:"OCTOBER 8, 2026"},
  ],
  body:[
    `Nobody in the council chamber on 5 October argued that the risks are imaginary. The witnesses from the four companies said, in different words, that no one could promise a risk-free system. The question is not whether frontier AI needs rules. It is whether a city council is the body that should write them.`,
    `A model is trained once and served everywhere at the same moment. <a href="/policy/new-york-city-wants-a-validator-for-every-model/">Speaker Julie Menin's bill</a> would make it unlawful to sell or deploy one in New York City without third-party validation, with the criteria set by the city's Cyber Command and a $25,000 penalty per instance. Multiply that by every city and state with a view, and a developer would face a crowd of validators applying different standards to the same system.`,
    `The bill does not say what an instance is. For a product used by millions of New Yorkers, that is the difference between a nuisance and a ruinous fine, and the bill leaves the choice to whoever enforces it. Good law tells a company in advance what compliance looks like.`,
    `There is a competence problem too. Judging whether a frontier model can be turned to a cyberattack or a weapon is specialist work done by a small number of teams, some of them in national governments. Asking a municipal cyber agency to accredit those validators, and to keep pace with every release, is asking it to do something it was not built for.`,
    `Meta's witness asked the council for a uniform federal standard. That is the right answer, and the companies should be held to it: a national validation regime, written by Congress, that binds every developer and every new entrant alike. New York can make the loudest case for one. It should not mistake a local ordinance for a solution to a global technology.`]}),

];
