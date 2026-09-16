/** Batch 31 — 16 September 2026, afternoon. The OpenAI figures are the FT's,
 *  as relayed by PYMNTS; the prior round is given as $122bn at $852bn
 *  post-money, which reconciles the $110bn/$730bn pre-money figures that
 *  other outlets carry from the February announcement. The Singapore piece
 *  works from the banks' joint release of 10 September. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const AI=P("ai","AI","ai"), BC=P("blockchain","Blockchain","blockchain");

export default [

AI({ slug:"the-price-rises-as-the-listing-recedes", kick:"Capital",
  headline:"The price rises as the listing recedes",
  dek:"Investors are offering OpenAI a valuation above $1.2tn, four days after its chief executive said a public listing was unlikely before 2027.",
  metaDesc:"OpenAI is in early talks with investors over a funding round valuing it above $1.2 trillion, after Sam Altman said its IPO is unlikely to happen before 2027.",
  author:"dana-whitfield", date:"2026-09-16T13:55:00Z",
  capt:"Private money is doing the work a public offering was supposed to do.",
  tags:[{name:"OpenAI / Model Providers",slug:"openai-model-providers"},{name:"Private Capital",slug:"private-capital"},{name:"Venture Capital",slug:"venture-capital"}],
  related:[
    {href:"/ai/both-capitals-say-no-to-pacing/",kick:"AI Security",title:"Both capitals say no within 48 hours",ago:"SEPTEMBER 14, 2026"},
    {href:"/ai/samsung-openai-chip-partnership-deepens/",kick:"Semiconductors",title:"Samsung moves up OpenAI's chip stack",ago:"SEPTEMBER 10, 2026"},
    {href:"/policy/the-gatekeeper-walks-the-model-maker-stays/",kick:"Antitrust",title:"The gatekeeper walks, the model maker stays",ago:"SEPTEMBER 14, 2026"},
  ],
  body:[
    `The usual order is that a company raises private money until it is large enough to list, and then lists. OpenAI is being offered the private money precisely because it is not listing.`,
    `The company is in early talks over a funding round that would value it at more than $1.2tn, the Financial Times reported on Tuesday, <a href="https://www.pymnts.com/news/artificial-intelligence/2026/openai-eyes-1-2-trillion-valuation-in-pre-ipo-funding-round/" rel="noopener">as relayed by PYMNTS</a>. One person familiar with the matter said the talks were initiated by investors rather than by OpenAI, and that whether they proceed depends on when the company chooses to go public. OpenAI declined to comment.`,
    `The figure is about 41% above the last one. OpenAI raised $122bn at an $852bn valuation in March and filed confidentially for an initial public offering in June, which left open the possibility of a listing this year.`,
    `That timetable has moved. Sam Altman said on Saturday that the offering is unlikely to happen before 2027, and has described the present as an "ill-advised moment" to go public amid growing concern about the risks the technology presents.`,
    `The reason given matters as much as the delay. <a href="/ai/both-capitals-say-no-to-pacing/">Altman was among the executives who publicly backed slowing the pace of frontier development</a> last week, a proposal Washington and Beijing each rejected within two days. A listing would put the company's own statements about risk into a prospectus, where they become disclosures with legal weight rather than positions in a debate.`,
    `Seen from the investors' side, the approach is straightforward. A company that has filed and then paused is a company with an audited story and no public price, and a late private round is the last chance to buy before that price is set by a market that may pay more.`,
    `The revenue gives them something to point at. Annualised revenue passed $40bn in August, according to the report, after a 20% rise that followed the release of GPT-5.6 in July. At $1.2tn that is a multiple of about thirty times, high by any public-market standard and not obviously high for a company still growing at that rate.`,
    `What the round would really buy OpenAI is time. Private capital on this scale lets the company keep spending on compute and chips, <a href="/ai/samsung-openai-chip-partnership-deepens/">including the supply arrangements it has been deepening with Samsung</a>, without an equity market setting its cost of capital each quarter.`,
    `There is a tension in that, and it is not a small one. A company arguing that the frontier should move more slowly is at the same time raising enough money to move it faster than almost anyone else, and delaying the one step that would require it to explain that combination to public shareholders.`,
    `None of this is agreed. The talks are early, the size of the round has not been reported, and the person who described them made the whole thing conditional on a listing date that the company has not set. The number that has been fixed is the one investors opened with, and they opened above a trillion.`]}),

BC({ slug:"the-ledger-nets-the-old-rails-settle", kick:"Tokenization",
  headline:"The ledger nets, the old rails settle",
  dek:"Singapore's three largest banks paid each other in tokenised deposits for the first time. The shared ledger matched the obligations; the money still moved the old way.",
  metaDesc:"DBS, OCBC and UOB completed Singapore's first live interbank tokenised deposit payments on Swift's ledger, with final settlement run through existing systems.",
  author:"marcus-oyelaran", date:"2026-09-16T13:35:00Z",
  capt:"Interoperability was always the missing piece, not the token.",
  tags:[{name:"Tokenization",slug:"tokenization"},{name:"Banking",slug:"banking"},{name:"Settlement",slug:"settlement"}],
  related:[
    {href:"/blockchain/canada-rules-a-token-is-still-a-deposit/",kick:"Regulation",title:"Canada rules that a token is still a deposit",ago:"SEPTEMBER 12, 2026"},
    {href:"/blockchain/us-bank-completes-its-stablecoin-pilot/",kick:"Stablecoins",title:"U.S. Bank finishes a stablecoin pilot on its own",ago:"SEPTEMBER 11, 2026"},
    {href:"/blockchain/sebi-settles-ten-billion-rupees-onchain/",kick:"Tokenization",title:"India settles ten billion rupees of bonds onchain",ago:"SEPTEMBER 13, 2026"},
  ],
  body:[
    `A tokenised deposit has had one practical limitation since banks began issuing them. A corporate client could send one to another client of the same bank, and to nobody else, which made the token a faster internal transfer rather than a new form of money.`,
    `Singapore's three largest banks have now closed that gap between themselves. DBS, OCBC and UOB <a href="https://www.dbs.com/newsroom/DBS_OCBC_and_UOB_complete_first_live_blockchain_enabled_SGD_transactions_on_Swifts_ledger" rel="noopener">said on 10 September</a> that they had completed live domestic Singapore dollar transactions using tokenised deposits on Swift's blockchain-based ledger, the first time the three have executed interbank payments that way.`,
    `The mechanics deserve a careful reading, because they are more modest than the headline and more useful. The banks exchanged payment messages over Swift's ledger. The resulting obligations were recorded as tokenised deposit obligations on each bank's own infrastructure. Swift's platform acted as what the release calls an orchestration layer, matching and netting those obligations between the banks "prior to final settlement through existing systems".`,
    `In other words, the ledger did the coordination and the conventional rails did the settlement. Nothing about that is a failure. It is how a new system is introduced into payments that cannot be allowed to break: run the new layer on top, keep finality where the law and the central bank already recognise it, and move settlement across only once the layer has earned it.`,
    `It also clarifies what the industry is actually building. The hard problem in tokenised money was never issuing a token; <a href="/blockchain/us-bank-completes-its-stablecoin-pilot/">banks have shown repeatedly that they can do that on their own</a>. The hard problem is getting tokens issued by competing banks to mean the same thing to each other, and a neutral message network that every bank already uses is the obvious candidate to solve it.`,
    `That is why Swift, rather than a consortium chain, is where this landed. Ledger Insights <a href="https://www.ledgerinsights.com/singapore-banks-complete-first-domestic-tokenized-deposit-payments-via-swift-blockchain/" rel="noopener">describes Swift's ledger</a> as Singapore's de facto interoperability layer for tokenised deposits, and the incumbent network's advantage is the one incumbents usually have: the connections already exist.`,
    `The banks' own descriptions point to the use case they expect to sell. Rachel Chew, co-head of digital assets in DBS's transaction services business, said clients "can transact USD and SGD payments any time, any day, including over a weekend". UOB's So Lay Hua said the bank had "expanded from Hong Kong dollar to Singapore dollar and US dollar transactions beyond traditional banking hours".`,
    `Weekend corporate payments are a real product, and they expose the limit of the current design. Netting can run around the clock; final settlement through existing systems runs when those systems do. A payment matched on Saturday that settles on Monday is an improvement in certainty, not in finality, and treasurers will price the difference.`,
    `The regulatory question is less open than it was a week ago. <a href="/blockchain/canada-rules-a-token-is-still-a-deposit/">Canada's supervisor confirmed on 10 September</a> that a tokenised deposit is legally a deposit, which is the premise every bank in this kind of arrangement is relying on, and on the same day Singapore's banks demonstrated the plumbing that makes the premise useful.`,
    `The live transactions follow Swift's announcement in July that 17 banks across six continents were preparing to transact in tokenised deposits on the ledger. Ledger Insights reports that the three banks had already made cross-border transactions in recent weeks; this is their first domestic one. The test that matters is the second step: the day final settlement moves onto the ledger as well, which is the day this stops being a better message and becomes different money.`]}),

];
