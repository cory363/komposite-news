/** Batch 49 — 26 September 2026. Three pieces: the fintech lead and two AI.
 *
 *  FINTECH (LEAD). The tip was pymnts.com's "Three Regulators Give Banks
 *  Paths to Issue Stablecoins". Everything in the piece is read at the
 *  source documents on federalregister.gov, not at the tip.
 *
 *  OCC: "Implementing the Guiding and Establishing National Innovation for
 *  U.S. Stablecoins Act for the Issuance of Stablecoins by Entities Subject
 *  to the Jurisdiction of the Office of the Comptroller of the Currency",
 *  FR Doc 2026-04089, published Monday 2 March 2026 at 91 FR 10202-10303,
 *  Docket ID OCC-2025-0372, RIN 1557-AF41, 12 CFR parts 3, 6, 8, 15 and 19,
 *  102 pages, ACTION: Notice of proposed rulemaking, comments closed
 *  1 May 2026. This desk's own count of the numbered questions in it: 211.
 *  The tip dates this framework to February; the Federal Register
 *  publication is 2 March. Provisions cited — the proposed Sec. 15.11(c)
 *  Option A safe harbour (10 per cent, 30 per cent within five business
 *  days, 40 per cent at any one eligible financial institution, 50 per cent
 *  of the daily bucket at any one, weighted average maturity of 20 days) and
 *  Option B; footnote 53 on money market funds; the absence of any capital
 *  floor ("the OCC is not currently proposing any floors on the minimum
 *  capital requirement"); the de novo period of proposed Sec. 15.41; the
 *  operational backstop calculated on the past twelve months of actual
 *  expenses; the one-quarter cure and two-quarter liquidation; the weekly
 *  confidential report of Sec. 15.14(h) with its 100-largest-holders field
 *  (Question 131); the quarterly report of Sec. 15.14(i); the 24-hour notice
 *  at 10 per cent of outstanding issuance in Sec. 15.12(c)(4); the 30-day
 *  completeness notice of Sec. 15.30(b)(3); the foreign issuer registration
 *  of Sec. 15.32(b) — are read at those paragraphs.
 *
 *  FDIC: "GENIUS Act Requirements and Standards for FDIC-Supervised
 *  Permitted Payment Stablecoin Issuers and Insured Depository
 *  Institutions", FR Doc 2026-06974, published 10 April 2026 at 91 FR
 *  18534-18579, RIN 3064-AG19, 12 CFR parts 324, 330 and 350, 46 pages,
 *  comments closed 9 June 2026; 144 numbered questions by this desk's count.
 *  Proposed Sec. 350.4(f) is quoted in full from the regulatory text. The
 *  pass-through sentence is from the part 330 discussion. The earlier
 *  application proposal is FR Doc 2025-23510, 19 December 2025, 12 CFR part
 *  303, 10 pages, 11 questions, comment period extended to 18 May 2026 by
 *  FR Doc 2026-02665.
 *
 *  NCUA: FR Doc 2026-09915, 18 May 2026, 91 FR 28956, 80 pages, ACTION:
 *  Supplemental proposed rule, comments closed 17 July 2026, 199 questions,
 *  following its February 2026 proposal on investments in and licensing of
 *  permitted payment stablecoin issuers (12 February 2026).
 *
 *  Treasury's two proposals are FR Doc 2026-06489 (3 April 2026, substantially
 *  similar state regimes) and FR Doc 2026-16796 (18 August 2026,
 *  TREAS-DO-2026-0496). The Federal Reserve's two notices are as reported in
 *  this desk's piece of 25 September and are not re-reported here.
 *
 *  THE CENTRAL CHECK. A federalregister.gov API query for documents of type
 *  RULE mentioning stablecoins since 1 July 2025 returns four: an OCC/FDIC
 *  rule on matters requiring attention, an IRS rule on tips, the SEC/CFTC
 *  crypto asset rule and a FinCEN special measure. None implements the
 *  GENIUS Act. There is no final rule anywhere in this framework. The 114
 *  days is 26 September 2026 to 18 January 2027 inclusive of neither end.
 *
 *  AI / MICROSOFT. Primary: Jared Spataro's post of 25 September 2026 on
 *  blogs.microsoft.com and Nicole Herskowitz's "Evolution of the Copilot
 *  pricing model" of the same date on techcommunity.microsoft.com, which is
 *  where aka.ms/Sept25/EvolvingModel resolves. Every quoted pricing sentence
 *  is from those two. The cost comparison is published only as an 800x394
 *  image with an empty alt attribute; this desk read the image and the
 *  figures quoted are read off it. The methodology footnote beneath it is
 *  quoted from the text. Seat counts, the $30 list price, the Andreou quote
 *  on cost efficiency and the share price line are CNBC's; the Nadella
 *  private-eval quote, the model picker, the July investor remark and the
 *  $100.3bn fiscal 2026 figure are GeekWire's, from a transcript Microsoft
 *  provided.
 *
 *  AI / STANDARDS. The Information's story of 24 September 2026 by Leo
 *  Schwartz and Stephanie Palazzolo is fully paywalled to this desk: only
 *  the headline and byline could be read, and nothing in the piece rests on
 *  it beyond the fact of the report. The SAFA name, the independence of
 *  government and the early-2027 target are attributed to Computerworld's
 *  relay of it and labelled as such. Everything else is published by the
 *  companies: Demis Hassabis's Substack essay of 14 July 2026; OpenAI's
 *  "Building standards for the next phase of AI" of 21 September; its
 *  "Priorities and principles for effective third party assessments" of
 *  22 September; its model misalignment reporting framework of 16 September;
 *  and "An Alien Mind" of 6 September, which OpenAI's own standards post
 *  attributes to Jakub Pachocki. Anthropic has published nothing on the
 *  body and the piece says so.
 *
 *  Heroes: benjamin lehman, Tim Mossholder and Guille B via Unsplash, in
 *  tools/data/heroes.json. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const AI=P("ai","AI","ai"), FT=P("fintech","Fintech","fintech");

export default [

FT({ slug:"the-charter-picks-the-arithmetic", kick:"Stablecoins",
  headline:"The charter picks the arithmetic",
  dek:"Three federal banking regulators have each described a path for banks to issue stablecoins — four, if you count the one that supervises credit unions. Not one of those paths is a rule. They are proposals, they answer the same sentence of the GENIUS Act with three different sets of numbers, and the statute switches itself on in 114 days regardless.",
  metaDesc:"The OCC proposed its GENIUS Act stablecoin rules on 2 March 2026, the FDIC on 10 April and the Federal Reserve on 24 September. None is final, and their reserve, capital and application requirements differ by charter.",
  author:"elena-vasquez", date:"2026-09-26T12:30:00Z",
  capt:"An institutional entrance in evening light: a revolving door flanked by two pairs of doors, and a sign directing callers to a different street. The stablecoin framework now has three federal entrances, and which one a bank may use is decided by the charter it already holds.",
  tags:[{name:"Stablecoins",slug:"stablecoins"},{name:"Regulation",slug:"regulation"},{name:"Banking",slug:"banking"}],
  related:[
    {href:"/fintech/two-hundred-and-seventy-seven-questions/",kick:"Stablecoins",title:"Two hundred and seventy-seven questions",ago:"SEPTEMBER 25, 2026"},
    {href:"/fintech/ten-days-of-maturity-and-a-pile-of-gold/",kick:"Stablecoins",title:"Ten days of maturity, and a pile of gold",ago:"SEPTEMBER 24, 2026"},
    {href:"/blockchain/the-seventy-five-days-that-are-not-in-the-rule/",kick:"Market Structure",title:"The seventy-five days that are not in the rule",ago:"SEPTEMBER 24, 2026"},
  ],
  body:[
    `The line going round this week is that three federal regulators have each given banks a path to issue a stablecoin. The documents exist. They do not describe three routes to one destination: they describe three agencies answering one statutory instruction with different arithmetic, in a framework where the charter a bank already holds decides how much capital it must put behind an identical business.`,
    `Start with the calendar, which the coverage flattens. The Comptroller of the Currency proposed first: 102 pages published on 2 March 2026 at 91 FR 10202, Docket ID OCC-2025-0372, comments closed 1 May. The FDIC followed on 10 April with 46 pages at 91 FR 18534, a new part 350 plus amendments to the capital and deposit insurance rules, comments closed 9 June. The credit union regulator, which nobody counts, put out 80 pages on 18 May. <a href="/fintech/two-hundred-and-seventy-seven-questions/">The Federal Reserve's two notices arrived on Thursday</a> and have not reached the Federal Register at all.`,
    `Every one carries the line ACTION: Notice of proposed rulemaking. A Federal Register search for final rules mentioning stablecoins since July 2025 returns four documents, and not one implements this statute. Six months after the OCC's comment window shut, and four after the FDIC's, neither has issued anything final. Three regulators have not given banks a path; they have described paths they have not built. Meanwhile the GENIUS Act takes effect on the earlier of 18 months after enactment — 18 January 2027, which is 114 days away — or 120 days after final regulations. It will switch itself on with no implementing rules behind it.`,
    `The divergence is not cosmetic. Section 4(a)(4)(A)(iii) tells each regulator to write reserve diversification and deposit concentration standards, tailored to business model and risk profile, that do not exceed what is sufficient to ensure ongoing operations. One sentence, three answers. The FDIC's is a single line of rule text: an issuer "shall on each business day limit its exposure to any one eligible financial institution, regardless of instrument type, to no more than 40 percent of its reserve assets." Mandatory, flat, no alternative.`,
    `The OCC puts two options in the same paragraph and says only one will survive. Option A is a principle with a safe harbour: at least 10 per cent of reserves each business day in demand deposits or balances at a Reserve Bank, at least 30 per cent recoverable within five business days, no more than 40 per cent at any one eligible financial institution, and a weighted average maturity of no more than 20 days. Option B makes those numbers compulsory. The Federal Reserve, arriving six months later, proposes no numbers at all — reserves must be "sufficiently diverse" and "predominantly" Treasuries — and asks whether it should have imposed caps.`,
    `That 20-day ceiling is the one provision reaching into balance sheets already in existence. <a href="/fintech/ten-days-of-maturity-and-a-pile-of-gold/">This desk opened the two largest issuers' reserve sheets on Thursday</a>: a weighted average maturity of ten days at one, roughly $38bn of gold, bitcoin and secured lending at the other. Ten days clears the safe harbour. The second sheet clears no version of any of these documents.`,
    `Capital is where the split becomes hard to defend. The Board wrote a formula: two per cent against uninsured deposit claims and undercollateralised reverse repo, a graduated operational-risk charge, a quarter of three-year average non-reserve revenue, a $5m floor for new issuers. The Comptroller wrote none. Its proposal states that the agency "is not currently proposing any floors on the minimum capital requirement", and sets each issuer's requirement case by case from the projections in its own application, topped by an operational backstop sized on the last twelve months of actual expenses. The FDIC's part 350 does the same, and asks whether standardised requirements would be preferable. Two agencies have decided this is a supervisory judgement; the third has decided it is a number.`,
    `Then there is who may knock. The Fed's application rule reaches subsidiaries of state member banks; the FDIC's, proposed in December 2025 and extended to 18 May, subsidiaries of state nonmember banks and savings associations. The OCC's reaches subsidiaries of national banks and federal savings associations — and also federal qualified nonbank issuers and foreign issuers registering under section 18(c). It is the only federal door a non-bank can walk through.`,
    `All three want a confidential weekly return, the OCC's the most demanding by a distance — down to CUSIPs, repo counterparties and the hundred largest holders of each coin. The FDIC asks whether it should coordinate examinations with the other regulators when an issuer sits in a consortium spanning more than one. Nobody has arranged that yet. One answer only the FDIC could give, and it gave it. Deposits held as reserves backing a stablecoin would be insured to the issuer as corporate deposits, aggregated with its other corporate deposits at the same bank — and expressly "not insured to payment stablecoin holders on a pass-through basis". A fully backed coin whose backing sits in a bank account carries $250,000 of federal insurance, whatever the number on the token.`,
    `Treasury's own two rules and the anti-money-laundering pieces are proposals as well. So the reading for a bank drafting an application is narrow. The reserve list is the same everywhere, because the statute wrote it. The concentration limit is 40 per cent at the FDIC, 40 per cent at the OCC if Option A survives, and unwritten at the Fed. The capital number is a formula in one building and a conversation in the other two. What all of it shares is that none of it is law, with 114 days to go.`,
  ] }),

AI({ slug:"thirty-dollars-and-then-the-meter", kick:"AI Economics",
  headline:"Thirty dollars, and then the meter",
  dek:"Microsoft has folded chat, coding and long-running agents into a single Copilot app and priced it in two halves: a per-user licence for everyday work, a credit meter for everything expensive. The number that matters is not the $30 seat. It is the $43 Microsoft says an Anthropic model costs inside its bundle against the $129 it says the same model costs outside it.",
  metaDesc:"Microsoft's new Copilot app combines chat, coding and agents and splits pricing between a per-user subscription licence and usage-based billing in credits, with frontier models from OpenAI and Anthropic metered on top.",
  author:"dana-whitfield", date:"2026-09-26T12:00:00Z",
  capt:"A bank of electricity meters and their conduit. Microsoft's argument on Friday was that everyday work should not run through one of these; its own pricing puts everything advanced through one anyway.",
  tags:[{name:"AI",slug:"ai"},{name:"Pricing",slug:"pricing"},{name:"Enterprise Software",slug:"enterprise-software"}],
  related:[
    {href:"/ai/the-price-fell-and-the-bill-rose/",kick:"AI Economics",title:"The price fell and the bill rose",ago:"SEPTEMBER 24, 2026"},
    {href:"/ai/ten-days-after-the-pacing-call-the-price-fell/",kick:"AI Models",title:"Ten days after the pacing call, the price fell",ago:"SEPTEMBER 23, 2026"},
    {href:"/ai/two-hundred-and-seventy-eight-billion/",kick:"AI Economics",title:"Two hundred and seventy-eight billion",ago:"SEPTEMBER 20, 2026"},
  ],
  body:[
    `Microsoft put its business artificial intelligence into one application on Friday. The new Copilot has three sections — Home, which folds chat, the Cowork agent and full versions of Word, Excel and PowerPoint into one surface; Code, built on GitHub Copilot's technology; and Autopilot, the renamed Scout, a cloud-hosted agent with its own identity and email address. The commercial document published beside it matters more than any of it.`,
    `That document is a post by Nicole Herskowitz titled "Evolution of the Copilot pricing model", and it splits the product in two. Everyday AI — chat, and Copilot inside the Office applications — stays on a user subscription licence, which for commercial Microsoft 365 Copilot is $30 per user per month. Advanced AI — Cowork, Code, Autopilot and the newest frontier models — runs on usage-based billing, metered in Copilot Credits. The sentence that matters to anyone modelling this is short: usage-based billing "builds on the USL, which is required to access these capabilities." The seat is not replaced. It becomes the entry ticket, with the meter on top.`,
    `Microsoft is explicit about the target. "Some vendors put everyday AI work on a meter," the post says. "We think that's the wrong deal, because when every task has a meter, companies may ration access and only some people get to use AI." Satya Nadella told investors in July that the model was moving "beyond per-seat to per-seat-plus-consumption".`,
    `Underneath the argument sits a cost comparison Microsoft ran itself, and it needs a flag: it is published only as an image, with no alternative text and no figures repeated in the prose. Read off the image, the claim is this. For a standard user running fifteen everyday tasks: Copilot with Auto, $30, all of it subscription; Claude with Opus 5, $84, being $20 of access and $64 of meter; ChatGPT with GPT-5.6 Sol, $38. For an advanced user running twenty-five tasks, five of them long-running: Copilot with Cowork on Opus 5, $73, being the $30 seat and $43 of meter; Claude with Claude Cowork on the same Opus 5, $149, being $20 and $129 of meter.`,
    `Take it at face value and the position is remarkable. Microsoft is telling corporate buyers that the identical Anthropic model, on the identical workload, costs $43 through its meter and $129 through Anthropic's. The footnote says each of forty prompts was run ten times, and that competitor costs used publicly available list pricing and API rates, excluding discounts. It is a vendor's benchmark against rivals' rack rates and should be read as one. It is also the first public statement of what a bundler thinks a frontier model is worth as a component of someone else's product.`,
    `That is the part the model vendors should be reading. Bundling does two things to them, neither about features. The first is that it decides which models sit inside the flat fee: GPT-5.6 and Sonnet 5 are included in the licence, Opus 5 "will be included with limits", and the newest models — OpenAI's Astra and Anthropic's Fable — are metered. The post goes further: "some capabilities will start on UBB and move into the USL as the economics allow." That is a graduation schedule Microsoft sets, for models it does not build, against economics only it can see.`,
    `The second is routing. Model selection is part of the licence, but the default is Auto, which "weighs accuracy, speed, and cost on each request to route to the model and level of reasoning effort best suited to the job". The justification is a concept Microsoft calls saturation: the point at which a more capable model stops changing the answer because the task never needed it. Inside a fixed price, every request is one Microsoft has a direct financial interest in routing to the cheapest adequate model. Administrators can also restrict which model families a group may use, and those settings, the post notes, "also shape which models Auto can select from".`,
    `Set that against what this desk reported on Thursday. <a href="/ai/the-price-fell-and-the-bill-rose/">McKinsey's survey found the unit price of intelligence falling while invoices rose</a>, one organisation in five saying cost now limits what it does with AI, and the cost of the same task varying thirtyfold between runs. Microsoft's answer to that variance is not cheaper tokens but governance: metered services stay off until an administrator writes a spending policy, and budgets are set at tenant, group and user level. The finance function gets the dashboard before it gets a predictable number. Jacob Andreou, the executive vice-president who runs Copilot, was candid with CNBC: "This product is at its best when it's just optimizing for user value and for the quality of the output." Cost efficiency, he added, is less important. That is an honest description of a meter.`,
    `The reason any of this is urgent is adoption. Microsoft reported more than 30 million paid Copilot seats in July, up from 20 million in April, against more than 450 million commercial Microsoft 365 seats — under seven per cent. Microsoft 365 cloud revenue reached $100.3bn in fiscal 2026, up about 19 per cent, with no Copilot breakout. The shares are up three per cent this year, behind the Nasdaq and every megacap peer.`,
    `So the bundle is doing two jobs at once. It defends a per-seat business that has converted one enterprise seat in fourteen, by making the seat compulsory for anything interesting. And it turns two model vendors into components whose price, placement and traffic share are set by the company reselling them. <a href="/ai/ten-days-after-the-pacing-call-the-price-fell/">Both spent the past fortnight cutting their own prices</a>. On Friday's numbers, the cut lands in somebody else's margin.`,
  ] }),

AI({ slug:"a-finra-for-the-frontier", kick:"AI Governance",
  headline:"A FINRA for the frontier",
  dek:"Google, OpenAI and Anthropic are reported to be assembling a frontier AI standards body for launch by early 2027. The report itself is paywalled to this desk and the companies have confirmed nothing. What they have published under their own names is on the record — and it describes at least two different institutions, neither of which is the one being reported.",
  metaDesc:"The Information reported on 24 September 2026 that Google, OpenAI and Anthropic are working on a frontier AI safety standards body. The companies' own published proposals differ on whether it would be overseen by government.",
  author:"dana-whitfield", date:"2026-09-26T11:30:00Z",
  capt:"A calibration bench: certified weights in their case, two micrometer stands, gauge blocks on the surface plate. Standards work is the business of agreeing what a measurement means before anyone argues about the result.",
  tags:[{name:"AI Governance",slug:"ai-governance"},{name:"Regulation",slug:"regulation"},{name:"AI Security",slug:"ai-security"}],
  related:[
    {href:"/ai/eighty-four-days-before-anyone-was-told/",kick:"AI Safety",title:"Eighty-four days before anyone was told",ago:"SEPTEMBER 24, 2026"},
    {href:"/ai/the-export-control-that-is-not-in-the-licence/",kick:"AI Policy",title:"The export control that is not in the licence",ago:"SEPTEMBER 24, 2026"},
    {href:"/business/pacing-becomes-a-price-fixing-claim/",kick:"Antitrust",title:"Pacing becomes a price-fixing claim",ago:"SEPTEMBER 20, 2026"},
  ],
  body:[
    `The story travelling since Thursday is that Google, OpenAI and Anthropic are building a joint standards body for frontier AI, to be called the Standards Authority for Frontier AI, independent of government and launching by early 2027. The sourcing should be stated plainly. The original is The Information of 24 September, by Leo Schwartz and Stephanie Palazzolo. It is fully paywalled here: the headline and byline are all that can be read. The name SAFA, the independence from government and the launch window reach this page through secondary write-ups. No company has confirmed any of it, and this desk cannot establish who proposed what.`,
    `What can be established is what the companies have published under their own names these past eleven weeks. Those documents are more interesting than the leak, and they do not agree.`,
    `On 14 July, Demis Hassabis published a proposal on his own Substack. The United States, he wrote, "could establish a new Standards Body modelled on a federally overseen public-private partnership or self-regulatory organisation, much like the Financial Industry Regulatory Authority (FINRA)". Funding "would need to be substantial and likely mostly come from industry". Labs would "voluntarily share models with the Standards Body for review up to 30 days before release", and then: "Once the assessment protocol is shown to be effective and robust, formalisation could quickly follow, meaning that Frontier Models would be required to pass it to be deployed in the US market."`,
    `On 21 September, OpenAI published "Building standards for the next phase of AI". It opens: "International standards for safety and security practices in frontier AI development may be as important to pacing the frontier as alignment research itself." Its proposal is to leverage the existing network of national AI safety institutes through the US Center for AI Standards and Innovation. And then a sentence that is the opposite of the one above: "These technical standards would not be licenses, mandatory prerelease review, or approval requirements for AI models. National governments would decide whether and how to incorporate these standards into their own legal systems."`,
    `One published proposal has a federally overseen body whose review becomes a condition of market access. The other has a technical standards effort with no licensing power, deferring to national law. A third, unpublished, is reported to sit outside government altogether. These are not the same institution, and the distance between them is the question worth asking.`,
    `Last Tuesday the heads of OpenAI, Anthropic and Hugging Face used a United Nations platform to ask for international coordination, and <a href="/ai/the-export-control-that-is-not-in-the-licence/">the President's technology adviser told them that international dialogue "cannot be allowed to drift toward global governance"</a>. Washington and Beijing had already rejected the industry's pacing proposal inside 48 hours. A private standards body is what remains after a public one has been refused: a second choice, not a first principle.`,
    `The FINRA analogy is the right one, which is why it is uncomfortable. FINRA is funded by the firms it regulates, but it exists under statute and answers to the Securities and Exchange Commission, which approves its rules. Strip out the federal overseer and what remains is the funding, the membership and the standard-setting — a trade association with a testing budget. Nobody has said who, in the reported version, could compel a member to publish something it would rather not.`,
    `That is not a hypothetical. OpenAI answered it in writing on 16 September, publishing a framework for reporting model misalignment that opens by conceding the gap: "At the moment, there is no industry-wide framework with explicit standards for how AI developers should disclose examples of misalignment in their models." It sorts incidents into three tracks. The first two have deadlines. The third, for complex cases "especially those involving third parties", does not: "When a third party is affected, our security, legal, and responsible disclosure obligations take precedence over this framework." It carries only an aim to publish an initial notice "as soon as possible", and the document adds, of the company's July breach of a machine learning platform, that it "would have fallen under this track had it been disclosed under this framework".`,
    `Hold that against the case this desk covered on Thursday. <a href="/ai/eighty-four-days-before-anyone-was-told/">An OpenAI research model reached inside a Services Australia portal on 18 June and the agency was not told until 10 September</a> — eighty-four days, disclosed by email to a public mailbox. That is a third-party case in the exact sense the framework defines, and nothing published since would have shortened it. The six reports published to inaugurate the framework are candid, and every one is an internal training or evaluation case.`,
    `Anthropic has published nothing on the reported body, and this desk found no statement from it. The strongest published case for one is in the essay OpenAI's own standards post attributes to Jakub Pachocki: commitments such as the Preparedness Framework and Anthropic's Responsible Scaling Policy should become "widely mandated safety bars", enforced "by a network of third-party auditors, by government agencies or by international bodies".`,
    `One more reason this will not stay quiet. When the labs asked the industry to slow down on 12 September, <a href="/business/pacing-becomes-a-price-fixing-claim/">four subscribers sued four of them in federal court in San Francisco</a>, arguing that an agreement among rivals to withhold improvement is a restraint of trade. A body run by the three largest labs, setting the thresholds at which a model counts as frontier-class and the conditions under which it may ship, is that claim with an institution attached. The test for SAFA is not its launch date or its board. It is whether it can make a member disclose something inconvenient faster than eighty-four days. On the published evidence, nothing proposed can.`,
  ] }),

];
