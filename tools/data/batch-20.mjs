/** Batch 20 — verified against the cited reporting before writing. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const AI=P("ai","AI","ai"), PO=P("policy","Policy","policy"), CR=P("crypto","Crypto","crypto");

export default [

AI({ slug:"anthropic-publishes-what-it-stopped", kick:"AI Security",
  headline:"Anthropic publishes what it stopped",
  dek:"A third misuse report describes blocked attempts at cyberattacks, surveillance and biological research, and argues the capability floor for serious attacks has dropped.",
  metaDesc:"Anthropic said it blocked attempts to use its models for cyberattacks, surveillance and research that could have supported biological weapons.",
  author:"dana-whitfield", date:"2026-09-12T15:30:00Z",
  capt:"Disclosure is a choice, and so far a voluntary one.",
  tags:[{name:"AI Security",slug:"ai-security"},{name:"Threat Intelligence",slug:"threat-intelligence"},{name:"Regulation",slug:"regulation"}],
  related:[
    {href:"/ai/broadcom-forecast-prices-the-custom-silicon-boom/",kick:"Semiconductors",title:"Broadcom prices the custom silicon decade",ago:"SEPTEMBER 2026"},
    {href:"/ai/samsung-openai-chip-partnership-deepens/",kick:"Semiconductors",title:"Samsung moves up OpenAI's chip stack",ago:"SEPTEMBER 2026"},
    {href:"/ai/the-buyers-started-making-their-own/",kick:"Semiconductors",title:"The buyers started making their own",ago:"SEPTEMBER 2026"},
  ],
  body:[
    `An AI company reporting what its models were nearly used for is doing something no rule requires. That is the most important fact about the document, and the reason to read it carefully rather than gratefully.`,
    `Anthropic said on Thursday that it had blocked attempts to use its models for cyberattacks, surveillance, and research that could have supported biological weapons. <a href="https://pbs.org/newshour/nation/anthropic-says-it-blocked-misuse-of-its-ai-that-could-have-supported-biological-weapons" rel="noopener">PBS reported the disclosure</a>, the company's third such report since March 2025.`,
    `The claim underneath is about skill, not intent. As models become more capable, the company argues, elaborate cyberattacks no longer require sophisticated operators, and lone individuals can now assemble threats that would not have been possible a year ago.`,
    `That is the part worth taking seriously regardless of what one makes of the source. Security has always relied on an implicit tax: a difficult attack required a skilled attacker, and skilled attackers are rare and busy. Lowering that requirement widens the field of people who can try.`,
    `The company was direct about the selection. "The cases we share here aren't typical misuse, but rather examples of the most notable and novel threat activity we've identified to date," it said — which means the report describes the edge of what it found, not the shape of the whole.`,
    `Its stated reason for publishing is an obligation rather than a requirement. "We're publishing this work because we believe we have a responsibility to disclose malicious misuse of our services," the company said, adding that risks will grow with capability unless developers and defenders act.`,
    `The report includes fragments of the malicious code and the prompts involved, and urges governments and competitors to look for the same patterns. Sharing indicators is standard practice in security and almost unheard of between AI labs, which treat their abuse data as commercially sensitive.`,
    `Timing complicates the reading. The report landed two days after one of the company's own researchers resigned publicly, saying he did not believe Anthropic and its competitors were acting responsibly, and the company is preparing an initial public offering this autumn.`,
    `Neither fact makes the findings wrong. Both are reasons to note that a voluntary disclosure regime lets the discloser choose the moment, the framing and the contents, and that no external party can check what was left out.`,
    `For anyone defending real infrastructure the transferable content is thin but real: the described activity is ordinary intrusion work assembled faster, not a new class of attack, and the controls that answer it are the ones already on the list.`,
    `The larger question the report raises is structural. Three voluntary reports in eighteen months from one company is not an industry practice, and a safety regime that depends on the willingness of the firm being reported on is not yet a regime at all.`]}),

PO({ slug:"fcc-leaves-the-transceiver-alone", kick:"Trade",
  headline:"The FCC leaves the transceiver alone, for now",
  dek:"A final equipment rule tightened authorisation for blacklisted components and did not touch the optical modules that move data inside AI data centres. The market read it immediately.",
  metaDesc:"The FCC's final equipment authorisation rule tightened requirements for blacklisted components but left Chinese optical transceivers untouched.",
  author:"jonathan-bright", date:"2026-09-12T14:40:00Z",
  capt:"What a rule leaves out is a decision as much as what it covers.",
  tags:[{name:"Trade",slug:"trade"},{name:"Supply Chain",slug:"supply-chain"},{name:"AI Infrastructure",slug:"ai-infrastructure"}],
  related:[
    {href:"/policy/sec-proposes-to-rescind-the-pay-to-play-rule/",kick:"Regulation",title:"The SEC proposes to delete its pay-to-play rule",ago:"SEPTEMBER 2026"},
    {href:"/policy/water-becomes-a-permitting-question/",kick:"Policy",title:"Water becomes a permitting question",ago:"SEPTEMBER 2026"},
    {href:"/policy/the-commission-goes-to-court/",kick:"Antitrust",title:"The commission goes to court",ago:"SEPTEMBER 2026"},
  ],
  body:[
    `The most consequential line in a trade rule is often the one that is not there. A category left uncovered has been considered and passed over, and everyone who trades the sector knows it.`,
    `The Federal Communications Commission published its final decision on updates to equipment authorisation rules, adopted in July and finalised on Friday. <a href="https://scmp.com/tech/big-tech/article/3367219/chinese-optical-transceiver-makers-dodge-us-ban-now-fcc-updates-rules" rel="noopener">The South China Morning Post reported</a> that the rule tightens requirements for devices containing components from entities on the Covered List, the American blacklist of suppliers judged to pose an unacceptable security risk.`,
    `Optical transceivers were not targeted. Those are the modules inside a data centre that convert electrical signals to light and back, and they sit in the path of essentially all traffic between racks.`,
    `The omission mattered because the market had been pricing the opposite. A Reuters report in August described the administration drafting measures to block new Chinese models from entering the American market this year, and the final rule did not do it.`,
    `Share prices moved on the reading rather than on any change in trade. Zhongji Innolight closed up about four per cent in Shenzhen and 4.37 per cent in Hong Kong, and Eoptolink gained nearly three; Suzhou TFC Optical Communication fell 2.62 per cent.`,
    `That split is worth noticing. A sector-wide reprieve does not lift every name equally, because exposure to the American market differs company by company, and the spread reflects who was actually at risk.`,
    `The strategic position behind the story is the uncomfortable part. Optical communications has become central to AI infrastructure, and Chinese suppliers hold a commanding share of it, which is precisely the concentration that invites a ban and precisely what makes one expensive.`,
    `A cluster of accelerators is only as fast as the fabric connecting it, and that fabric is optical. Restricting the modules would not slow a rival's chip programme; it would slow the construction of American data centres that buy them today.`,
    `Which is the tension the rule appears to acknowledge without resolving. Tightening authorisation for blacklisted components is a real measure. Declining to extend it to the component with no ready substitute is a judgement about sequencing, not about risk.`,
    `The phrase doing the work in every account of this decision is for now. A rule finalised in September can be revisited, and an industry that has just been reprieved has been told exactly which dependency to remove.`,
    `The buyers with the most to lose are the ones who will not act. Data centre operators choosing components this quarter are optimising for delivery dates, and a supply risk that has been deferred rather than removed does not usually change a purchase order.`]}),

CR({ slug:"doj-restrains-fifty-two-million-with-an-issuer", kick:"Enforcement",
  headline:"The issuer is now part of the investigation",
  dek:"A single day of coordinated action restrained more than $52m tied to a scam marketplace, with the stablecoin issuer credited for its assistance. That is a permanent change in what a token is.",
  metaDesc:"The Justice Department restrained more than $52 million in cryptocurrency linked to the Xinbi Guarantee network, crediting Tether's assistance.",
  author:"marcus-oyelaran", date:"2026-09-12T13:55:00Z",
  capt:"An asset that can be frozen by its issuer is a different asset.",
  tags:[{name:"Enforcement",slug:"enforcement"},{name:"Stablecoins",slug:"stablecoins"},{name:"Risk",slug:"risk"}],
  related:[
    {href:"/crypto/uk-opens-a-five-month-authorisation-window/",kick:"Regulation",title:"The UK opens a five-month door, then closes it",ago:"SEPTEMBER 2026"},
    {href:"/crypto/clarity-act-draws-a-line-around-control/",kick:"Regulation",title:"The CLARITY Act draws its line around control",ago:"SEPTEMBER 2026"},
    {href:"/crypto/sgx-perpetual-futures-us-institutions/",kick:"Market Structure",title:"SGX opens crypto perps to US funds",ago:"SEPTEMBER 2026"},
  ],
  body:[
    `The argument about whether stablecoins are censorship-resistant ended some time ago, quietly, in favour of the answer nobody in the industry wanted to say out loud. Enforcement actions like this one are what the answer looks like in practice.`,
    `The Justice Department restrained more than $52 million in cryptocurrency in a single day of coordinated action against wallets and channels linked to the Xinbi Guarantee network. <a href="https://crypto.news/us-doj-restrains-52m-in-crypto-with-tethers-help" rel="noopener">Tether said in a September 11 statement</a> that the department credited its proactive assistance in the operation.`,
    `The specifics describe scale rather than a single seizure. Authorities took two wallets that Xinbi had allegedly used to receive about $12 million in payments, and sought restraint orders covering 47 further wallets tied to suspected laundering.`,
    `Xinbi itself was not a scam site but a service hub. According to American authorities and blockchain researchers, its vendors connected fraud groups with money launderers, with operators of fake investment platforms, and with recruiters involved in human trafficking.`,
    `That description is the part that should displace any remaining romance about this category of activity. The marketplace was infrastructure for other people's crimes, and the most serious of them were not financial.`,
    `The issuer's role is what makes the action structurally interesting. Tether says it has now helped 340 agencies freeze more than $5 billion across 67 countries, a figure that describes a private company operating as a standing instrument of law enforcement.`,
    `A token whose issuer can freeze it at a government's request is not a bearer asset. It is a liability with an administrator, closer to a bank balance than to cash, and that is true regardless of the ledger it is recorded on.`,
    `For enforcement this is straightforwardly good. Tracing is easier on a public ledger than through correspondent banking, and an issuer that will act removes the jurisdictional problem that makes cross-border asset recovery so slow.`,
    `For the market it is a fact to price rather than to celebrate. The freeze capability is available to any authority the issuer chooses to honour, and the standard it applies is its own policy rather than a published legal test.`,
    `The people who built this technology to be seizure-resistant have therefore produced the opposite at the point where it reached scale. Dollar-denominated tokens won by being useful, and being useful meant being administrable.`,
    `What the $52 million really demonstrates is that the architecture now has a control point, and everyone has located it. Whether that is reassuring depends entirely on your view of who will be asking the issuer next, and for what.`]}),

];
