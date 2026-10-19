import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const AI = P("ai", "AI", "ai", "Photograph via Unsplash");
const ST = P("startups", "Startups", "startups", "Photograph via Unsplash");
const FT = P("fintech", "Fintech", "fintech", "Photograph via Unsplash");

const L = (href, text) => `<a href="${href}" rel="noopener">${text}</a>`;

/** Related card from an existing page: real headline and publication date. */
const MONTHS = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
const R = (href, kick) => {
  const f = href.replace(/^\//, "") + "index.html";
  const h = fs.readFileSync(f, "utf8");
  const title = h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1].replace(/&amp;/g, "&");
  const d = h.match(/datePublished":"(\d{4})-(\d\d)-(\d\d)/);
  return { href, kick, title, ago: `${MONTHS[+d[2] - 1]} ${+d[3]}, ${d[1]}` };
};

/** Batch 91 — Monday 19 October 2026, round 16. One new main story and three
 *  others. Lead: the OpenAI recording-device case (AI, 16:30Z, the newest, so
 *  the front-zone builder makes it the lead; tools/data/lead.json now pins it
 *  for the day instead of the round-15 CERT-In piece). Others, newest first:
 *  Nvidia Nemotron 3.5 (AI 16:00Z), JPM Coin on Ethereum (Fintech 15:30Z),
 *  Tenstorrent Series E (Startups 15:00Z).
 *  Repeat check: grep of komposite-news, cranberry-journal, the-13th-bell,
 *  media-morpheus, suite646 and velvet-hollywood for Alfozan, "toilet paper",
 *  Tenstorrent, JPM Coin/JPMD/Kinexys and Nemotron: no earlier story.
 *
 *  AI / OPENAI DEVICE CASE (lead, 16:30Z). Every claim is an allegation from
 *  a filing as reported, or the defence's reply. Sources: SF Standard (George
 *  Kelly, 19 Oct 08:55 PT; credits CNBC with first reporting the documents)
 *  for the Sunday detention memo and Friday defence motion; The Register
 *  (Connor Jones, 14 Oct) for the complaint; The National (Cody Combs, 14 Oct,
 *  updated 15 Oct) for the 8 Oct prosecution filing on one-way tickets via
 *  Istanbul and Pernik's quotes. CNBC (403), the DOJ release (bot wall) and the
 *  filings themselves could not be opened. Hearing: 11:00 PT = 18:00Z; at
 *  17:00Z no outcome was reported, and the copy says so.
 *  Corrections to the draft: the defence's proposed bond is backed by Bay Area
 *  supporters AND the Saudi Consulate General (the draft said supporters only);
 *  the Patel quote was dropped (The Register prints "SI innovation", which reads
 *  as a typo, so paraphrased); the OpenAI quote trimmed to the words verified;
 *  the prosecution's earlier one-way-ticket claim added so both sides of the
 *  ticket dispute appear; the Doha line left out (it conflicts with his
 *  custody from 9 Oct and the source is unclear on who flew).
 *  Hero: Unsplash 1cSFxRmuUMk (Malcolm Choong), empty meeting room with a
 *  wall-mounted television, no people; not the OpenAI room, captioned so.
 *
 *  AI / NVIDIA NEMOTRON 3.5 (16:00Z). The draft said Nvidia released the
 *  models on Monday; Nvidia's own blog post (Kari Briski) is dated Thursday,
 *  15 October, and TechCrunch's 19 Oct piece also says "on Thursday". Rewritten
 *  on Nvidia's post. TechCrunch's version of Briski's "own what they build"
 *  does not match Nvidia's published text ("oversee what they build"); we
 *  quote Nvidia's text. The comparison with Anthropic and OpenAI models is in
 *  TechCrunch only, not in either Nvidia post we read; attributed to TechCrunch
 *  and flagged. Bolt E4B date fixed to 23 October (draft: "later in October").
 *  Hero: Unsplash G78c3DPmD_A (Martin Sanchez), half-open laptop with lit
 *  keyboard, no branding visible, no people.
 *
 *  FINTECH / JPM COIN (15:30Z). JPMorgan's release read in raw HTML: both
 *  quotes verbatim, $4tn and $7bn with footnote "Calculated based on Kinexys
 *  internal volume and values data". Canton plan now confirmed from the
 *  primary: Canton Network/Digital Asset announcement of 7 January 2026,
 *  "rollout will take place in phases throughout 2026"; no live date found.
 *  The writer's "roughly 570 days" sum dropped (meaningless without a
 *  breakdown). Hero: Unsplash 7cmA9ZL5dDk (Kanchanara), a gold-coloured
 *  Ethereum souvenir coin on a circuit board; captioned as such.
 *
 *  STARTUPS / TENSTORRENT (15:00Z). Press release: $1.5bn Series E, $6.2bn
 *  post-money, leads Trace Capital and Innovation X, participants as listed,
 *  Samsung and LG as licensees (in the release itself). Prior round now from
 *  Tenstorrent's own December 2024 announcement (over $693m at a $2bn
 *  pre-money valuation, via insideHPC) and BetaKit's $2.6bn post-money. The
 *  Qualcomm talks: The Information via Reuters, 15 June 2026; both companies
 *  declined to comment; no deal. The Keller "HBM" quote (Bloomberg via Tech
 *  Startups) was cut: we could not read the interview. Hero: Unsplash
 *  bN5XdU-bap4 (Chris Ried), green circuit board, no people.
 */

const SFS = "https://sfstandard.com/2026/10/19/accused-openai-spy-had-ties-saudi-royal-prosecutors-say/";
const REG = "https://www.theregister.com/security/2026/10/14/openai-engineer-charged-after-boardroom-bug-found-wrapped-in-toilet-paper/5303000";
const NAT = "https://www.thenationalnews.com/future/technology/2026/10/14/abdulrahman-alfozan-lawyer-openai-saudi/";

const NV = "https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/";
const NV_DEV = "https://developer.nvidia.com/blog/nvidia-nemotron-3-5-super-vl-powers-specialized-agents-with-multimodal-reasoning/";
const TC_NV = "https://techcrunch.com/2026/10/19/nvidia-launches-new-open-models-to-run-agents-in-the-enterprise-and-on-pcs/";

const JPM = "https://www.jpmorgan.com/payments/newsroom/jpm-coin-live-on-ethereum";
const LI = "https://www.ledgerinsights.com/jpm-coin-arrives-on-ethereum/";
const CANTON = "https://www.canton.network/news/j.p.-morgans-deposit-token-to-be-issued-natively-on-canton-network";

const TT = "https://www.tenstorrent.com/newsroom/tenstorrent-announces-series-e";
const TT_D = "https://insidehpc.com/2024/12/tenstorrent-closes-693m-series-d-round";
const BK = "https://betakit.com/?p=380421";
const QC = "https://www.design-reuse.com/news/202530687-qualcomm-shares-rise-on-tenstorrent-deal-talks-and-ai-push/";

export default [

/* ---------- 15:00Z STARTUPS ---------- */
ST({ slug: "tenstorrent-more-than-doubles-to-6-2bn", kick: "AI Chips",
  headline: "Tenstorrent more than doubles to $6.2bn",
  dek: "The RISC-V chip designer led by Jim Keller has raised $1.5bn in a Series E round, it said on Monday. It will spend the money on volume manufacturing, Galaxy server deployments and the processor designs it licenses to others. It gave no revenue figures.",
  metaDesc: "Tenstorrent said on Monday it raised a $1.5bn Series E at a $6.2bn post-money valuation, led by Trace Capital and Innovation X, up from about $2.6bn in December 2024.",
  author: "grace-lindqvist", date: "2026-10-19T15:00:00Z",
  capt: "A green computer circuit board with mounted chips, photographed close up with a shallow focus, in a file photograph.",
  tags: [
    { name: "Semiconductors", slug: "semiconductors" },
    { name: "Venture Capital", slug: "venture-capital" },
    { name: "AI Infrastructure", slug: "ai-infrastructure" }
  ],
  related: [
    R("/ai/nvidia-weighs-buying-the-lab-it-already-funds/", "AI Chips"),
    R("/startups/fifteen-times-run-rate-for-modal/", "AI Infrastructure"),
    R("/startups/sixty-billion-four-months-after-forty-four/", "Valuations")
  ],
  body: [
    `Tenstorrent, the AI chip company led by chief executive Jim Keller, has raised $1.5bn in a Series E round at a post-money valuation of $6.2bn, the company said ${L(TT, "in an announcement")} on Monday. Trace Capital and Innovation X led the round. Tenstorrent designs AI processors and CPUs built on RISC-V, an open instruction set, and licenses some of those designs to other chipmakers.`,
    `The announcement lists other participants, new and existing: Agostinelli Group, ARK Invest, Brett Barna, Cadence Ventures, Eclipse, Fidelity Management & Research Company, Maverick Silicon, Morgan Stanley, Protagonist, Sandisk, T. Rowe Price, Tether Investments, Troluce Capital, Virtu Financial and XTX Markets. It does not say how much each put in. The page marks T. Rowe Price with an asterisk that it does not explain.`,
    `Tenstorrent said the money will go on volume manufacturing and global commercial expansion, on deploying its Galaxy servers at scale, on serving open-weight models for language and video generation, and on the processor and AI designs it licenses to companies building their own silicon. The company says it licenses its TT-Ascalon RISC-V CPU and Tensix AI cores to chip designers including Samsung and LG, which are also among its backers.`,
    `"We built one architecture and sell it at every size," Keller said in the announcement. Ben Mahdavi, founder of Trace Capital, said Keller and his team "bring decades of hands-on silicon, software, and IP experience". George Bousis, co-founder and managing partner of Protagonist, said: "Few companies design the chip and the software that runs on it. Tenstorrent does both."`,
    `The step up is large. When Tenstorrent last raised money, in December 2024, it said ${L(TT_D, "it had closed more than $693m")} in a Series D led by Samsung Securities and AFW Partners at a pre-money valuation of $2bn; ${L(BK, "BetaKit")} put the post-money figure at $2.6bn. On that basis the new valuation is about 2.4 times the last one, by our arithmetic, in a little under two years.`,
    `There has also been talk of a sale. In June, The Information reported that Qualcomm was in talks to buy Tenstorrent for $8bn to $10bn, ${L(QC, "Reuters reported")} at the time; both companies declined to comment, and Reuters said it could not verify the report. No deal has been announced, and Monday's announcement does not mention Qualcomm.`,
    `Tenstorrent did not disclose revenue, shipments or customer numbers, so the valuation rests on the investors' view of its designs and its licensing business rather than on published results. The round adds a well-funded alternative supplier as AI developers spread their spending across chipmakers. Komposite reported this month on <a href="/ai/nvidia-weighs-buying-the-lab-it-already-funds/">Nvidia's talks over Reflection AI, a lab it already funds</a>, and on <a href="/startups/fifteen-times-run-rate-for-modal/">Modal's $15.75bn round for AI infrastructure</a>.`
  ]
}),

/* ---------- 15:30Z FINTECH ---------- */
FT({ slug: "jpmorgans-deposit-token-now-on-the-main-chain", kick: "Tokenised Deposits",
  headline: "JPMorgan's deposit token, now on the main chain",
  dek: "Kinexys, JPMorgan's blockchain unit, has made its dollar deposit token, JPM Coin, available on Ethereum for institutional clients. It had been live only on Base, an Ethereum layer-2 network. The bank gave volumes for the whole platform, not for the token.",
  metaDesc: "JPMorgan's Kinexys said on Monday its JPM Coin deposit token (JPMD) is live on Ethereum for institutional clients, after launching on Base in November 2025.",
  author: "elena-vasquez", date: "2026-10-19T15:30:00Z",
  capt: "A gold-coloured souvenir coin bearing the Ethereum logo, resting on a computer circuit board, in a file photograph.",
  tags: [
    { name: "Tokenization", slug: "tokenization" },
    { name: "Banking", slug: "banking" },
    { name: "Settlement", slug: "settlement" }
  ],
  related: [
    R("/fintech/one-api-for-fiat-and-stablecoins/", "Payments"),
    R("/fintech/deutsche-bank-is-weeks-from-holding-bitcoin/", "Banking"),
    R("/crypto/usdc-becomes-the-eus-first-significant-token/", "Stablecoins")
  ],
  body: [
    `JPMorgan has made its dollar deposit token, JPM Coin, available on Ethereum, Kinexys by J.P. Morgan said ${L(JPM, "in an announcement")} on Monday. The token, which carries the ticker JPMD, is open to the bank's institutional clients. Until now it had been available only on Base, the Ethereum layer-2 network, since its launch in November 2025. JPMorgan calls Ethereum the token's second public blockchain.`,
    `A deposit token is a claim on deposits at a bank, rather than a token issued by a non-bank against a pool of reserves, as stablecoins are. JPMorgan says JPM Coin supports peer-to-peer transfers between institutional clients within the Ethereum Virtual Machine ecosystem, including Base and Ethereum, and could allow programmable treasury operations from clients' own wallet interfaces. The announcement does not mention access for retail customers.`,
    `The bank presented the move as part of a wider presence on Ethereum. J.P. Morgan Asset Management launched tokenised money market funds on the network earlier this year, the announcement says. ${L(LI, "Ledger Insights")} called the move "positioning": Base "made sense as a launch partner given the Coinbase relationship", it wrote, but tokenised funds and securities are concentrated on Ethereum, and a token meant to serve as the cash leg of those trades needs to be on the same chain.`,
    `"Tokenized financial infrastructure is no longer theoretical," said Emma Landriault, global head of Kinexys Labs. "Issuing JPM Coin first on Base and now on Ethereum is a meaningful step towards providing our institutional clients with multi-chain optionality for moving wholesale money across both the web3 and traditional finance ecosystems." Matthew Dawson, co-founder of Ethereum Institutional, called it "a clear signal that institutional finance is moving onto public, verifiable infrastructure". His organisation promotes Ethereum to institutions.`,
    `JPMorgan said the Kinexys platform has processed more than $4tn in cumulative transactions since it began, with average daily volume of $7bn, figures it says were calculated from Kinexys's internal data. Ledger Insights noted that those numbers cover all of Kinexys's services, including payments and its tokenised collateral network, and "say nothing about JPMD activity on public chains". The announcement gives no figures for JPM Coin itself.`,
    `Ethereum is not the last stop. In January, Kinexys and Digital Asset ${L(CANTON, "said JPM Coin would be issued natively on the Canton Network")}, a blockchain used by financial institutions, with a rollout "in phases throughout 2026". Monday's announcement does not mention Canton, and we found no announcement that the token is live there.`,
    `Banks and card networks are competing with stablecoin issuers to carry settlement on public chains. Komposite has reported on <a href="/fintech/one-api-for-fiat-and-stablecoins/">Mastercard's first BVNK product, which holds fiat and stablecoins together</a>, on <a href="/crypto/usdc-becomes-the-eus-first-significant-token/">the EU's classification of USDC as a significant e-money token</a> and on <a href="/fintech/deutsche-bank-is-weeks-from-holding-bitcoin/">Deutsche Bank's plans for crypto custody</a>.`
  ]
}),

/* ---------- 16:00Z AI ---------- */
AI({ slug: "nvidias-open-models-from-server-to-laptop", kick: "Open Models",
  headline: "Nvidia's open models, from server to laptop",
  dek: "Nvidia has released Nemotron 3.5 Super VL, an open 120-billion-parameter model for enterprise agents, and a 74-billion-parameter Bolt model sized to run on a laptop. Its performance claims are its own, and a third model is due on Friday.",
  metaDesc: "Nvidia released open-weight Nemotron 3.5 Super VL (120bn parameters) and Bolt 74B-A9B for local agents on 15 October; Bolt E4B follows on 23 October.",
  author: "tom-kessler", date: "2026-10-19T16:00:00Z",
  capt: "A half-open laptop with a keyboard lit in pink and green light on a dark background, in a file photograph.",
  tags: [
    { name: "Open Source", slug: "open-source" },
    { name: "AI Agents", slug: "ai-agents" },
    { name: "Enterprise AI", slug: "enterprise-ai" }
  ],
  related: [
    R("/ai/meta-opens-the-weights-on-816-billion-parameters/", "Open Models"),
    R("/ai/two-open-models-and-no-weights-yet/", "Open Models"),
    R("/ai/nvidia-weighs-buying-the-lab-it-already-funds/", "Nvidia")
  ],
  body: [
    `Nvidia has released a new set of open-weight models for AI agents, from data-centre servers down to laptops. In ${L(NV, "a blog post dated Thursday, 15 October")}, Kari Briski, Nvidia's vice president for open models and software, announced Nemotron 3.5 Super VL, a 120-billion-parameter model for enterprise agents, and two smaller "Bolt" models for local machines. Super VL and the larger Bolt model are available now; the smaller Bolt is due on Friday, 23 October.`,
    `Nvidia says Super VL matches the accuracy of its largest reasoning model on agent tasks such as following instructions, using tools, running multistep business workflows and understanding images, at roughly one-fifth of the parameter count. It calls it "the fastest open agentic model in its class" and says it is up to five times faster than the next best. Those are Nvidia's figures. The model reads text, web pages, charts and PDFs, and ships with open weights, open datasets and training recipes, the company says, and is available on Hugging Face and OpenRouter, among others.`,
    `The larger edge model, Nemotron 3.5 Bolt 74B-A9B 24GB, has 74 billion parameters, of which about 9 billion are active at a time, and uses 2-bit quantisation to fit in 24GB of memory. Nvidia says it is built for its RTX Spark laptops and also runs on GeForce RTX PCs and DGX Spark and DGX Station workstations, and that it ranks first among open models of its class on the PinchBench benchmark. Users can hand it tasks "from researching the web to writing to debugging code — all without sending those workloads to the cloud", Briski wrote. Bolt E4B 4GB is meant for voice assistants and other conversational agents.`,
    `Nvidia named a long list of companies adapting Super VL. It says Scale AI post-trained the model for agents at Skydance and EY, and that Ramp, Lila Sciences and R1 are among others customising it; Atlassian, CrowdStrike, Dassault Systèmes, Perplexity, Salesforce and Synopsys are integrating it into their software. "Unlike closed frontier models, organizations can post-train Super VL on their own data, deploy it on their own infrastructure and oversee what they build," Briski wrote.`,
    `${L(TC_NV, "TechCrunch")}, which wrote about the models on Monday, said Nvidia claims Super VL completes tasks faster than competing models from Anthropic and OpenAI when it is post-trained on specific agentic tasks. That comparison does not appear in Nvidia's announcement or in ${L(NV_DEV, "its technical blog post")}, and no figures for it have been published. Nvidia's announcement also does not name a licence beyond describing the weights as open.`,
    `TechCrunch's reading of the strategy is that the closed-model labs that are both Nvidia's customers and its investments are buying more chips from other suppliers, such as Amazon's Trainium and Cerebras, or designing their own, so Nvidia is courting companies that want to run open models on their own hardware. That is the publication's analysis, not Nvidia's. For laptops, the pitch is privacy: agents that work on a user's files without the data leaving the machine.`,
    `Komposite has covered the wider open-weight field, including <a href="/ai/meta-opens-the-weights-on-816-billion-parameters/">Meta's release of an 816-billion-parameter model</a> and <a href="/ai/two-open-models-and-no-weights-yet/">two "open" models from Mistral and Reflection whose weights had not yet shipped</a>.`
  ]
}),

/* ---------- 16:30Z AI (LEAD) ---------- */
AI({ slug: "prosecutors-tie-the-openai-recorder-case-to-a-saudi-royal", kick: "Courts",
  headline: "A hidden recorder, a Saudi royal and a bail fight",
  dek: "Federal prosecutors say the former OpenAI engineer charged over a recording device found in an executive conference room was courted by a member of the Saudi royal family and should stay in custody. His lawyers say he is no flight risk. None of the allegations has been tested in court.",
  metaDesc: "Prosecutors allege ex-OpenAI engineer Abdulrahman Alfozan, charged over a hidden recorder, was courted by a Saudi royal; his lawyers say he is no flight risk.",
  author: "dana-whitfield", date: "2026-10-19T16:30:00Z",
  capt: "An empty meeting room with a long wooden table and a wall-mounted television, in a file photograph. It is not the OpenAI room.",
  tags: [
    { name: "AI Security", slug: "ai-security" },
    { name: "Enforcement", slug: "enforcement" },
    { name: "OpenAI / Model Providers", slug: "openai-model-providers" }
  ],
  related: [
    R("/ai/three-researchers-fired-two-accounts/", "OpenAI"),
    R("/ai/the-ftc-asks-two-labs-for-their-incident-files/", "Regulation"),
    R("/ai/none-of-the-organisations-noticed/", "AI Security")
  ],
  body: [
    `Federal prosecutors have asked a court to keep a former OpenAI engineer in custody, alleging that he was in contact with a member of the Saudi royal family and is a flight risk, ${L(SFS, "the San Francisco Standard reported")} on Monday, citing a detention memo filed on Sunday. Abdulrahman Alfozan, 35, is charged with attempting to intercept oral communications over a recording device found in an OpenAI executive conference room. His lawyers dispute the government's picture of a man ready to leave the country. A magistrate judge was due to hear arguments on his release at 11:00 Pacific time on Monday; no ruling had been reported when this article was published.`,
    `The charge rests on events at OpenAI's San Francisco offices. According to the criminal complaint as ${L(REG, "summarised by The Register")}, staff found a small recording device on 30 September, wrapped in toilet paper and plugged into the USB port of a television in a conference room used for top-level meetings, including, officials said, non-public technical meetings and meetings with government representatives. Prosecutors allege that Alfozan, who joined OpenAI in July 2025, installed it on or around 28 September. He was arrested on 9 October and has been in custody since. The charge carries a maximum sentence of five years in prison and a $250,000 fine.`,
    `OpenAI could not recover any data from the device's memory card after making a forensic image of it, The Register reported, and officials have not said whether it captured anything. The company said it had "no indications of this individual inappropriately accessing or exfiltrating model weights" and that the employee had been fired. FBI Director Kash Patel said in a statement that the bureau treats the protection of American innovation as one of its highest counterintelligence priorities.`,
    `Sunday's memo goes further than the complaint. Prosecutors say a search of his home and a preliminary review of his phone turned up electronic components similar to those in the devices, and photographs dated 22 to 28 September that appear to show another concealed recorder in a second OpenAI conference room, according to the Standard. They also cite WhatsApp messages in which a member of the Saudi royal family, who is not named, urged him to join an AI initiative. In May, prosecutors say, the royal wrote "Saudi needs you more then the U.S.!"; Alfozan replied "100" and said he would not leave until his stock vested.`,
    `Prosecutors further allege that Alfozan applied in July to the Misk Foundation's 2030 Leaders programme, open only to Saudi nationals, and that between July and September he used an OpenAI productivity agent to ask about Saudi government engagements. They say his wife told FBI agents that she and their son were moving permanently to Saudi Arabia and that he planned to join them. The memo notes that the US has no extradition treaty with Saudi Arabia and says more serious charges could follow. In an earlier filing, on 8 October, prosecutors said he and his family had booked one-way tickets to Saudi Arabia via Istanbul, ${L(NAT, "The National reported")}.`,
    `The defence motion, filed on Friday by his lawyers William Pernik and Nas Yasin, reads the same facts differently. It says Alfozan bought economy tickets to Riyadh on 13 September under his own name, 17 days before the device was found, for $1,897.59 for three travellers, with changes costing $180. It says he has a naturalisation interview on 6 November and a long record of foreign trips from which he always returned. The lawyers propose GPS monitoring, home detention in Millbrae and the surrender of his passports, with a bond signed by Bay Area supporters and backed by the Saudi Consulate General, which, the filing says, has written that it "would issue him no travel documents". They attached 54 letters of support. "That is not the profile of a person with one foot out the door," they wrote.`,
    `Pernik has also pointed out what is not in the case. The complaint does not charge Alfozan with stealing trade secrets or acting as an agent of a foreign government. "There is no evidence to suggest otherwise at this time that has been shared with us," he told The National last week, calling the allegations "wholly out of character for him". Monday's hearing concerns only whether he can be released before trial, not whether the government can prove any of its claims.`,
    `For AI developers, the case is a reminder that some of their most sensitive information still passes through ordinary rooms with ordinary televisions. Komposite has reported on OpenAI's dispute with <a href="/ai/three-researchers-fired-two-accounts/">three safety researchers it dismissed</a> and on <a href="/ai/the-ftc-asks-two-labs-for-their-incident-files/">the FTC's demands to OpenAI and Anthropic for their incident files</a>.`
  ]
}),

];
