/** Batch 26 — 14 September 2026, breaking. Both records are checked against
 *  the court record and the company's own announcement. Quotes are verbatim
 *  from the cited pages and attributed to the named speaker; the complaint's
 *  language is quoted as a filing, not as anyone's remark to a reporter. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const PO=P("policy","Policy","policy"), ST=P("startups","Startups","startups");

export default [

PO({ slug:"the-gatekeeper-walks-the-model-maker-stays", kick:"Antitrust",
  headline:"The gatekeeper walks, the model maker stays",
  dek:"Musk's companies asked a Texas judge to drop Apple from their antitrust case and to keep going against OpenAI. A conspiracy claim missing the party that controls the distribution is a different claim.",
  metaDesc:"X Corp and xAI filed to voluntarily dismiss Apple from their antitrust lawsuit in the Northern District of Texas, while claims against OpenAI continue.",
  author:"jonathan-bright", date:"2026-09-14T17:00:00Z",
  capt:"The default position on the device was the whole theory of the case.",
  tags:[{name:"Antitrust",slug:"antitrust"},{name:"Enforcement",slug:"enforcement"},{name:"Regulation",slug:"regulation"}],
  related:[
    {href:"/policy/app-store-becomes-the-age-gate/",kick:"Platforms",title:"The app store becomes the age gate",ago:"SEPTEMBER 2026"},
    {href:"/policy/the-commission-goes-to-court/",kick:"Enforcement",title:"The commission goes to court",ago:"SEPTEMBER 2026"},
    {href:"/ai/both-capitals-say-no-to-pacing/",kick:"AI Policy",title:"Both capitals say no within 48 hours",ago:"SEPTEMBER 2026"},
  ],
  body:[
    `An antitrust conspiracy claim needs two conspirators. On Monday one of them was excused, and the case carried on against the other.`,
    `X Corp and xAI asked a federal judge in Fort Worth to approve the voluntary dismissal of Apple from the lawsuit they filed against it in August 2025. <a href="https://www.bloomberg.com/news/articles/2026-09-14/musk-s-xai-resolves-claims-against-apple-over-ai-competition" rel="noopener">Bloomberg reported the filing</a>, which resolves the Apple portion of the case and leaves the claims against OpenAI in place. No terms were disclosed, and representatives for the four companies did not respond to requests for comment.`,
    `The case is <em>X Corp. v. Apple Inc.</em>, No. 4:25-cv-00914, in the Northern District of Texas, before Judge Mark T. Pittman. It was filed on 25 August 2025 and alleged that Apple and OpenAI had conspired to monopolise the markets for smartphones and generative AI chatbots — that ChatGPT's integration into Apple Intelligence was exclusive by design, and that App Store rankings were arranged to keep rivals, Grok among them, out of reach. <a href="https://www.ibtimes.com.au/musk-xai-dismiss-apple-antitrust-lawsuit-1875522" rel="noopener">The complaint called the arrangement</a> "two monopolists joining forces to ensure their continued dominance", and asked for billions in damages and for the partnership to be undone.`,
    `It was not a weak filing. In November 2025, Judge Pittman denied both defendants' motions to dismiss, which meant the pleading was good enough to put Apple and OpenAI into discovery rather than out of the courthouse. That is the stage most antitrust complaints against large platforms do not reach.`,
    `Which makes the shape of Monday's filing the thing worth reading. The party released is the one that owns the surface. Apple decides what an iPhone does out of the box, what the assistant defaults to and where an app sits in a search result. That control was not incidental to the theory of harm; it was the theory of harm. Without a device maker in the case, what remains is a claim against a model vendor for having accepted a deal that somebody else was in a position to offer.`,
    `A conspiracy count can survive one defendant leaving — dismissals are routine, and the remaining party can be held to the whole agreement. But the remedy changes. The relief that would have mattered here was structural and it sat on Apple's side: unwind the integration, stop ranking the App Store in a way that favours the partner. None of that can be ordered against OpenAI, which cannot change a default it does not set.`,
    `There is also the matter of who is now suing. Both plaintiffs are subsidiaries of SpaceX, which <a href="https://www.reuters.com/business/musks-spacex-merge-with-xai-combined-valuation-125-trillion-bloomberg-news-2026-02-02/" rel="noopener">acquired xAI in February</a> in an all-stock deal valuing the combined company at $1.25 trillion. The entity arguing that two large firms should not be allowed to combine distribution and models is itself the product of the largest merger on record, and it is preparing to go public.`,
    `That is not a legal argument against the claim. Antitrust does not require clean hands, and a plaintiff's own size has no bearing on whether a defendant's conduct was unlawful. It does bear on what a court will want to hear about market definition, because a company of that scale describing itself as foreclosed has a harder time explaining what it was foreclosed from.`,
    `The unanswered question is money. A voluntary dismissal with nothing on the record is consistent with a settlement, with a commercial arrangement reached elsewhere, or with a plaintiff deciding that one front was enough. The docket will not say, and nobody involved is saying either.`,
    `What the filing does establish is that the most testable competition question in consumer AI — whether the assistant a phone ships with is a market or a feature — will not be answered in this case. It was the question Apple was in the room to answer, and Apple has left the room.`]}),

ST({ slug:"the-money-moves-to-the-layer-that-retries", kick:"Venture",
  headline:"The money moves to the layer that retries",
  dek:"Temporal raised $550m at $12.55bn, up from $5bn in February. The number that explains it is not the valuation but the retention: existing customers are spending more than twice what they did.",
  metaDesc:"Temporal raised a $550 million Series E at a $12.55 billion valuation, co-led by Lightspeed, seven months after a $300 million round valued it at $5 billion.",
  author:"grace-lindqvist", date:"2026-09-14T16:55:00Z",
  capt:"Work that has to be picked up exactly where it was put down.",
  tags:[{name:"Venture",slug:"venture"},{name:"AI Infrastructure",slug:"ai-infrastructure"},{name:"Enterprise AI",slug:"enterprise-ai"}],
  related:[
    {href:"/startups/venture-funding-infrastructure-software/",kick:"Venture",title:"Venture funding turns to infrastructure software",ago:"SEPTEMBER 2026"},
    {href:"/startups/revenue-per-employee-is-the-pitch/",kick:"Venture",title:"Revenue per employee is the pitch",ago:"SEPTEMBER 2026"},
    {href:"/technology/four-hundred-and-twenty-five-billion-in-a-quarter/",kick:"Semiconductors",title:"A quarter of a trillion dollars of chips, and then some",ago:"SEPTEMBER 2026"},
  ],
  body:[
    `On the day the heads of the largest AI labs asked the industry to slow down and chip stocks fell on the suggestion, $550 million went into the software that handles what happens when an AI system stops halfway through a job.`,
    `Temporal <a href="https://temporal.io/news/temporal-raises-550m-at-a-12-55b-valuation" rel="noopener">announced a $550m Series E</a> at a $12.55bn valuation, co-led by Lightspeed with Wellington Management, Growth Equity at Goldman Sachs Alternatives and Tiger Global, and participation from T. Rowe Price, SV Angel and returning investors including Andreessen Horowitz, Sequoia, Index, GIC, Sapphire Ventures and Amplify.`,
    `Seven months ago the same company raised $300m at $5bn. The markup is two and a half times in the time it takes most enterprise software firms to close one sales cycle.`,
    `The product is unglamorous and specific. Durable execution is the discipline of writing a long-running process so that it survives the machine it was running on: state is recorded at each step, and when something fails the work resumes where it stopped rather than starting again or quietly ending. It was built for payments, order fulfilment and provisioning — the jobs where dropping halfway is expensive and doing it twice is worse.`,
    `Agents turned that into a much larger market. A model call is a network request that can time out, return something unusable or cost real money each time it runs, and an agent chains dozens of them across tools and minutes. Anything built that way fails constantly in small ways, which means the interesting engineering is not the model but the recovery.`,
    `Samar Abbas, the chief executive, put the shift in terms of when the work gets done: "Reliability has never been optional, but AI has quickly raised the cost of skipping it, and developers need a foundation for that built in from day one, not bolted on afterward." He described the round as "a bet that far more of the world's most demanding software is going to be built on it."`,
    `The usage figures are the part that supports the price. Temporal says billable actions on its cloud reached 1.9 trillion in August, up more than 350% on the year, with open-source installs above 43 million and paying customers past 4,300. Headcount doubled to 570.`,
    `Net dollar retention is the number to hold on to: above 200% since February. That is not new logos. It means the customers who were already there are now spending more than twice what they were, which for a consumption-priced product is a direct measurement of how many steps their systems are running. Agents are not being evaluated. They are being run, repeatedly, in production.`,
    `The customer list is consistent with that reading, and it includes the labs themselves. Venkat Venkataramani, OpenAI's VP of infrastructure, said that "Durable Execution is more than ever a core requirement for modern AI systems, and Temporal offers a compelling platform to help build it in from the start" — a model company describing the orchestration beneath it as a requirement rather than an implementation detail.`,
    `There is a caution in the structure of the round. Wellington, Goldman's growth arm, Tiger Global and T. Rowe Price are crossover investors, and their arrival at this size usually points at a public offering rather than at another private round. That is also where the risk sits: consumption revenue growing at 350% is wonderful while agent deployments expand and unforgiving if enterprises decide they are running more steps than the results justify.`,
    `Still, the direction is clear enough. When capital stops paying for the thing that is impressive and starts paying for the thing that has to not fail, the technology has moved out of the demonstration and into the estate.`]}),

];
