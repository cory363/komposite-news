/** Batch 35 — 18 September 2026. The data-centre piece rests on CNBC's
 *  reporting and the figures cited in it. The OpenAI security piece works
 *  from Hacktron's own timeline and the WSJ disclosure as relayed by Fortune
 *  and Metacurity; it names the class of flaw and nothing operational. The
 *  SEMICON figures differ between reports — ten approved projects in one
 *  account, twelve in another — so the story says so rather than choosing. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const AI=P("ai","AI","ai"), CY=P("cybersecurity","Cybersecurity","cybersecurity"), MU=P("music","Music","music"),
      TE=P("technology","Technology","technology"), BU=P("business","Business","business");

export default [

AI({ slug:"the-labs-go-looking-for-small-sites", kick:"AI Infrastructure",
  headline:"The labs go looking for small sites",
  dek:"Anthropic and OpenAI have spent a year announcing gigawatts. Both are now hunting 20 to 30 megawatt sites, because the scarce thing is not capital but power that already exists.",
  metaDesc:"Anthropic and OpenAI are pursuing 20-30 megawatt data centre deals alongside gigawatt campuses, chasing sites already connected to power for inference work.",
  author:"dana-whitfield", date:"2026-09-18T16:50:00Z",
  capt:"The megawatt that is already energised is worth more than the one that is promised.",
  tags:[{name:"AI Infrastructure",slug:"ai-infrastructure"},{name:"Data Centers",slug:"data-centers"},{name:"Energy for Computing",slug:"energy-for-computing"}],
  related:[
    {href:"/technology/queue-position-is-the-real-asset/",kick:"Infrastructure",title:"Queue position is the real asset",ago:"AUGUST 2026"},
    {href:"/ai/ai-infrastructure-spending-new-phase/",kick:"AI Infrastructure",title:"AI infrastructure spending moves into a new phase",ago:"AUGUST 2026"},
    {href:"/ai/the-price-rises-as-the-listing-recedes/",kick:"Capital",title:"The price rises as the listing recedes",ago:"SEPTEMBER 16, 2026"},
  ],
  body:[
    `Every announcement in AI infrastructure for the past year has been measured in gigawatts. The interesting move this week is three orders of magnitude smaller.`,
    `Anthropic and OpenAI are both looking for data centre deals in the range of 20 to 30 megawatts, <a href="https://www.cnbc.com/2026/09/18/anthropic-openai-small-ai-data-center-deals.html" rel="noopener">CNBC reported on Friday</a>, citing people familiar with the discussions. The sites under consideration are ones that already have power, in the United States, the United Kingdom and the Nordics, and the labs are pursuing them alongside the enormous campuses they have already committed to.`,
    `The reason is arithmetic about time rather than money. A gigawatt campus needs a grid connection, and a grid connection needs a queue position, a substation and years. A 25-megawatt building that is already energised needs a lease. Jabez Tan of Structure Research put the advantage in CNBC's report as "speed to usable capacity", which is the whole thesis in three words.`,
    `What makes it work technically is the shift in what the compute is for. Training one frontier model wants a single tightly coupled cluster, because the machines have to talk to each other constantly. Inference — running the model for users — is embarrassingly divisible, and can be spread across many modest sites without penalty.`,
    `The mix is moving that way fast. JLL, cited in the same report, expects inference to rise from about 9% of global AI workloads last year to 37% by 2030, and to overtake training as the dominant workload in 2027. Infrastructure bought for the training era is not the infrastructure the inference era needs.`,
    `Small is a relative term here. Rod Evans of Nscale told CNBC that a 20-megawatt cluster of some 10,000 GPUs represents roughly $2bn of capital. These are not side projects; they are the size of a serious enterprise data centre, bought as an increment rather than as a campus.`,
    `The gigawatt commitments have not gone anywhere. Anthropic has 5GW of capacity coming with Amazon, a further 5GW of Google TPU capacity through Broadcom, and a 460MW, $45bn arrangement with Nscale in West Virginia; OpenAI has 3GW in Georgia, 8GW in Ohio and the wider Stargate programme. The small sites are what fills the gap until those arrive.`,
    `<a href="/technology/queue-position-is-the-real-asset/">This is the trade we described in August</a>, when the binding constraint in the build-out turned out to be a place in the interconnection queue rather than money or chips. When capital is abundant and electricity is not, the premium moves to whoever already has the electricity.`,
    `It also explains a set of otherwise odd buyers. Owners of small, powered, unglamorous industrial sites — including the ones built for cryptocurrency mining — are holding an asset the two best-funded companies in the industry now want, and they can charge for it accordingly.`,
    `<a href="/ai/the-price-rises-as-the-listing-recedes/">OpenAI is raising at more than $1.2tn</a> partly to keep paying for this. The strategy the money buys is no longer only the biggest possible machine. It is also a hundred ordinary buildings that can be switched on this year.`]}),

CY({ slug:"three-researchers-one-model-and-6500", kick:"AI Security",
  headline:"Three researchers, one model, $6,500",
  dek:"A small team used a newly released frontier model to reach OpenAI's internal code repository, proved it with a harmless pull request, and got paid a bug bounty. The price is the story.",
  metaDesc:"Hacktron AI researchers used Claude to reach OpenAI employee accounts and its internal code repository, disclosed the flaw, and received a $6,500 bounty.",
  author:"sam-porter", date:"2026-09-18T16:25:00Z",
  capt:"Disclosure worked exactly as designed. That is the uncomfortable part.",
  tags:[{name:"AI Security",slug:"ai-security"},{name:"Threat Intelligence",slug:"threat-intelligence"},{name:"OpenAI / Model Providers",slug:"openai-model-providers"}],
  related:[
    {href:"/cybersecurity/an-ai-agent-logged-in-then-kept-looking/",kick:"AI Security",title:"An AI agent logged in, then kept looking",ago:"SEPTEMBER 17, 2026"},
    {href:"/ai/anthropic-publishes-what-it-stopped/",kick:"AI Security",title:"Anthropic publishes what it stopped",ago:"SEPTEMBER 12, 2026"},
    {href:"/ai/opinion-catch-me-if-you-can/",kick:"Opinion",title:"Catch me if you can",ago:"SEPTEMBER 13, 2026"},
  ],
  body:[
    `Yesterday this desk covered a regulator's first breach notification blamed on an AI agent. Today's case is the same capability pointed at one of the companies building it, by people who then filed a report and took a cheque.`,
    `Three researchers at Hacktron AI reached the ChatGPT and Codex accounts of OpenAI employees in July, and through a connected integration reached the company's internal code repository, the Monorepo. They disclosed the work this week to the Wall Street Journal, <a href="https://fortune.com/2026/09/18/open-ai-hacked-anthropic-claude-source-code-6500-reward" rel="noopener">as reported by Fortune</a>. OpenAI paid them $6,500 through its bug bounty programme.`,
    `The route is worth describing only at the level of its class, because the lesson is there. The flaw was a memory-handling bug in an image library used by the third-party forum software that runs OpenAI's community site. From that foothold, sign-in tokens issued by the forum turned out to carry more access than the forum needed.`,
    `That is the ordinary shape of a serious breach: a peripheral system nobody considers core, holding credentials that reach further than their purpose. The community forum is not where the algorithms live. It just happened to hand out keys that worked elsewhere.`,
    `The researchers proved their access without abusing it, opening an innocuous pull request in the private repository rather than reading what was in it, and reported through the bounty platform the same day. <a href="https://www.metacurity.com/three-guys-used-claude-and-codex-to-hack-into-openai/" rel="noopener">OpenAI said</a> it thanked the researchers, narrowed the permissions on community sign-in tokens and revoked the affected tokens and sessions. The fix went in within hours.`,
    `The part that will be argued over is the model. Hacktron's account is that it asked one frontier model version to write the exploit code and it could not; when the next version was released a day later, the same request succeeded within hours. Whatever one thinks of that as a benchmark, it is a capability jump measured in a single version and observed by people outside the lab.`,
    `Mohan Pedhapati, Hacktron's chief technology officer, drew the conclusion himself, and it is the quotable line of the week: "I don't think we are as strong as Chinese threat actors. We're just three guys with Claude and Codex subscriptions."`,
    `Read that as a statement about cost rather than talent. Capability that recently required a resourced team now requires a small one with commercial subscriptions, and the constraint that used to ration serious offensive research — expert time — is the one being relaxed.`,
    `The defensive reading is more encouraging than the headline suggests. This was responsible disclosure: a vulnerability found, proven without damage, reported, fixed in hours, paid for. <a href="/ai/anthropic-publishes-what-it-stopped/">Every published account of this kind describes the attempt that was caught or surrendered</a>, and the same tools are available to the people fixing things.`,
    `The awkward number remains $6,500. That is the market price OpenAI set for a finding that reached employee accounts and the door of its own repository, and bounty economics only work while researchers prefer the cheque to the alternatives. Three people with subscriptions found this one. The next three may not file a report.`]}),

MU({ slug:"one-hundred-and-fifty-thousand-a-day", kick:"Streaming",
  headline:"One hundred and fifty thousand a day",
  dek:"Uploads to streaming services have reached a rate no audience can absorb. A fifth of everything already there was streamed exactly zero times last year.",
  metaDesc:"Luminate says about 150,000 tracks a day are uploaded to streaming services, while a fifth of catalogued recordings drew no streams at all last year.",
  author:"colin-abernathy", date:"2026-09-18T16:05:00Z",
  capt:"Distribution stopped being the scarce thing a long time ago.",
  tags:[{name:"Streaming",slug:"streaming"},{name:"Rights",slug:"rights"},{name:"Music",slug:"music"}],
  related:[
    {href:"/music/half-the-uploads-are-machines/",kick:"Streaming",title:"Half the uploads are machines",ago:"SEPTEMBER 6, 2026"},
    {href:"/music/universal-sues-the-pipe-not-the-song/",kick:"Rights",title:"Universal sues the pipe, not the song",ago:"SEPTEMBER 16, 2026"},
    {href:"/music/ten-per-cent-of-streams-are-not-real/",kick:"Rights",title:"A tenth of streams are not real",ago:"SEPTEMBER 14, 2026"},
  ],
  body:[
    `The number that describes the music business this year is not a revenue figure. It is an intake figure.`,
    `Close to 150,000 tracks a day are now uploaded to streaming services, Rob Jonas, the chief executive of the data firm Luminate, said on Billboard's On the Record podcast, <a href="https://musically.com/2026/09/17/150000-new-tracks-are-uploaded-to-music-services-every-day" rel="noopener">as reported by Music Ally</a>. "That's a material increase," he said, "so breaking through and reaching an audience is really hard."`,
    `The consequence is visible in Luminate's own year-end data. Of 253 million recordings it tracked in 2025, 55.3 million — 21.9% — were streamed exactly zero times, and another 65.2 million were streamed between one and ten times. Roughly half the recorded music in existence has an audience indistinguishable from nobody.`,
    `Those are not obviously failures. A zero-stream recording can be a demo, a regional release, an archive transfer or a machine-made file nobody intended anyone to hear. What the figure measures is that supply has decoupled entirely from demand, because uploading costs nothing.`,
    `Generated music is the largest single reason the rate keeps climbing. Deezer has said more than half of its daily intake is fully AI-generated, about 90,000 tracks a day, and Apple Music has put its own share at more than a third. <a href="/music/half-the-uploads-are-machines/">We covered that crossing earlier this month</a>; the new detail is how fast the total is rising around it.`,
    `Jonas was candid that even measuring this is unresolved. Identifying which uploads are AI-generated is "an incredibly hard problem to solve", he said, and Luminate's approach is to combine its own detection with signals shared by the services rather than to claim a single reliable test.`,
    `That admission matters for every policy built on top of the number. <a href="/music/universal-sues-the-pipe-not-the-song/">Universal's case against DistroKid</a> turns on undisclosed AI music passed off as human; the streaming integrity initiative asks distributors to identify AI-generated content. Both assume a detection capability the industry's own measurement firm says is not settled.`,
    `The economics underneath are unchanged and unforgiving. Streaming pays from a fixed pool divided by plays, so an upload that nobody hears takes nothing from anyone. The damage is not dilution of the pool; it is dilution of attention, and of every discovery surface that has to sort 150,000 new candidates a day.`,
    `Which is why the industry's fights have moved from the song to the pipe. When the marginal cost of releasing music is zero and the marginal cost of listening is a finite human day, the leverage sits with whoever decides what gets surfaced, and the arguments follow the leverage.`,
    `The number to watch next is not the upload rate, which will keep rising. It is whether the share of recordings with no audience at all goes up with it. If the catalogue grows while the listened-to fraction shrinks, the business is not getting larger. It is only getting longer.`]}),

TE({ slug:"india-offers-to-be-the-safe-supplier", kick:"Semiconductors",
  headline:"India offers to be the safe supplier",
  dek:"At SEMICON India, the pitch was not cost or scale. It was that supply chains are being weaponised and India is the destination that will not do the weaponising.",
  metaDesc:"Narendra Modi opened SEMICON India 2026 by pitching the country as a trustworthy chipmaking destination as global supply chains are weaponised.",
  author:"tom-kessler", date:"2026-09-18T15:45:00Z",
  capt:"Reliability is the product being marketed, and it is not a technical claim.",
  tags:[{name:"Semiconductors",slug:"semiconductors"},{name:"Supply Chain",slug:"supply-chain"},{name:"Emerging Markets",slug:"emerging-markets"}],
  related:[
    {href:"/technology/four-hundred-and-twenty-five-billion-in-a-quarter/",kick:"Semiconductors",title:"A quarter of a trillion dollars of chips, and then some",ago:"SEPTEMBER 14, 2026"},
    {href:"/technology/queue-position-is-the-real-asset/",kick:"Infrastructure",title:"Queue position is the real asset",ago:"AUGUST 2026"},
    {href:"/ai/the-buyers-started-making-their-own/",kick:"Semiconductors",title:"The buyers started making their own",ago:"SEPTEMBER 2026"},
  ],
  body:[
    `Countries selling semiconductor manufacturing normally sell cost, scale or process node. India opened its industry's showcase this week selling something else: the promise that it will not use the supply chain as a weapon.`,
    `Narendra Modi inaugurated the fifth SEMICON India at Yashobhoomi in New Delhi on 17 September, pitching the country as a "new and trustworthy" destination for chipmaking at a moment when, as he put it, global supply chains are being weaponised, <a href="https://www.convergence-now.com/embedded-tech/semicon-india-2026-modi-pitches-india-as-trusted-chipmaking-hub-amid-supply-chain-risks/" rel="noopener">according to reports of the speech</a>.`,
    `The framing is aimed at a specific anxiety. Export controls, entity lists and rare-earth restrictions have made every large buyer of chips aware that its supply runs through jurisdictions with their own foreign policy. A country that offers capacity without that exposure is selling insurance, not silicon.`,
    `The money behind the pitch has roughly doubled. The second phase of the India Semiconductor Mission carries an outlay reported at about $13.5bn, against some $8bn in the first, and the programme's approvals now run to ten or twelve projects depending on which account you read, with investment commitments around ₹1.6 lakh crore.`,
    `That inconsistency is itself informative. When the headline count of a national programme varies between reports, the projects are at different stages — approved, funded, under construction, producing — and the distinction is being blurred in the retelling.`,
    `What exists today is real but narrow. Plants operated by Micron and by Kaynes have begun commercial production, and those are assembly, testing and packaging operations rather than leading-edge fabrication. Packaging is a genuine part of the chain, and it is the part that requires the least of what India is still building.`,
    `The skills pipeline is where the state has moved fastest. The design programme has put free tools into more than 300 universities, 211 chips have been taped out through it, and the government counts 70,000 students trained against a target of one lakh. Tape-outs are not products, but they are the only way a country acquires designers.`,
    `<a href="/technology/four-hundred-and-twenty-five-billion-in-a-quarter/">Set against a global industry shipping a quarter of a trillion dollars of chips in a quarter</a>, none of this yet changes the map. India is not competing with Taiwan for the leading edge and is not claiming to.`,
    `The realistic prize is the middle of the stack: packaging, mature nodes, materials, equipment supply and design labour, in a jurisdiction that buyers can add to their list without political risk. That is a large business and an unglamorous one.`,
    `The claim to watch is the one that cannot be audited. "Trustworthy" is a promise about future behaviour under pressure, and it is tested only when a country has capacity somebody else badly needs. India is making the promise before it has the leverage that would make it meaningful — which is, in fairness, the only time such a promise is cheap to make.`]}),

BU({ slug:"the-settlement-stays-sealed", kick:"Antitrust",
  headline:"The settlement stays sealed",
  dek:"OpenAI wanted to see what Apple gave Elon Musk's companies to get out of the case. The judge read it privately and said it had nothing to do with the claims that remain.",
  metaDesc:"A federal judge denied OpenAI access to the confidential settlement between X Corp, SpaceXAI and Apple, leaving the antitrust case against OpenAI alone.",
  author:"jonathan-bright", date:"2026-09-18T15:25:00Z",
  capt:"What ended the dispute stays between the parties that ended it.",
  tags:[{name:"Antitrust",slug:"antitrust"},{name:"Corporate Strategy",slug:"corporate-strategy"},{name:"OpenAI / Model Providers",slug:"openai-model-providers"}],
  related:[
    {href:"/policy/the-gatekeeper-walks-the-model-maker-stays/",kick:"Antitrust",title:"The gatekeeper walks, the model maker stays",ago:"SEPTEMBER 14, 2026"},
    {href:"/business/paramount-says-the-market-was-invented/",kick:"Antitrust",title:"Paramount's defence: the market was invented",ago:"SEPTEMBER 13, 2026"},
    {href:"/business/doj-examines-how-the-groq-deal-was-built/",kick:"Antitrust",title:"The question is the structure, not the price",ago:"SEPTEMBER 11, 2026"},
  ],
  body:[
    `When a conspiracy case loses one of its two alleged conspirators, the defendant left behind has an obvious question: what did the other one get?`,
    `OpenAI asked the court for the answer and did not get it. Judge Mark Pittman, of the federal district court in Fort Worth, <a href="https://9to5mac.com/2026/09/17/judge-rejects-openais-bid-to-see-xs-confidential-settlement-with-apple-in-antitrust-lawsuit/" rel="noopener">denied OpenAI's emergency motion</a> on 17 September to compel X Corp and SpaceXAI to hand over the confidential agreement that ended their claims against Apple.`,
    `The mechanism of the refusal matters more than the refusal. The judge reviewed the agreement in camera — privately, without giving it to the other side — and concluded that it does "not present information relevant to the issues" remaining in the case. That is a finding about the contents, made by someone who has read them.`,
    `<a href="/policy/the-gatekeeper-walks-the-model-maker-stays/">Apple's exit last week</a> left an antitrust claim that began as an allegation of coordination between a platform and a model maker standing against the model maker alone. OpenAI's interest in the terms is not curiosity: a settlement can reveal how the parties valued the claims, and whether anything was promised that bears on the conduct still being litigated.`,
    `The judge's answer is that nothing in it does. OpenAI can still argue that a two-party conspiracy claim is weaker when one party has been released, and that argument does not require the document.`,
    `Confidentiality also survived the earlier order that made this newsworthy. The court had asked Musk's companies to explain why they were dropping Apple, prompted by OpenAI's request for information about the arrangement. Explaining the dismissal to the court and disclosing the deal to an opposing party are different things, and the court has now drawn the line between them.`,
    `For Apple the outcome is clean. It is out of the case, with prejudice, and the price of leaving remains unpublished, which is the entire point of paying it.`,
    `The case now proceeds against OpenAI, which has been given more time to prepare a summary judgment motion. That is the next real event: an argument that the claims fail as a matter of law before any of this reaches a jury.`,
    `The strategic asymmetry is worth naming. Musk's companies keep a live claim against their principal competitor while their dispute with the distribution platform is resolved privately. Whatever the settlement said, the litigation now points in one direction only.`,
    `It is also a reminder of how rarely these cases produce the disclosure the public expects of them. <a href="/business/paramount-says-the-market-was-invented/">Antitrust fights generate documents</a>, but the ones that end fights tend to stay sealed, and the reasoning that resolved this one exists only in a judge's private reading.`]}),

];
