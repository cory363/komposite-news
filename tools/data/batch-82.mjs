import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const MK = P("markets", "Markets", "markets", "Photograph via Wikimedia Commons");
const CY = P("cybersecurity", "Cybersecurity", "cybersecurity", "Photograph via Unsplash");
const FT = P("fintech", "Fintech", "fintech", "Photograph via Unsplash");
const AI = P("ai", "AI", "ai", "Photograph via Wikimedia Commons");

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

/** Batch 82 — Thursday 15 October 2026, round 10. One main story and three
 *  others. Lead: CoreWeave's bond and share sell-off (Markets, 13:20Z, the
 *  newest, so the front-zone builder makes it the lead; timed more than 24
 *  hours after the 14 Oct 13:15Z Markets lead so that story is not pulled
 *  into the lead's same-section cluster). Others, newest first: Anthropic's
 *  self-replication research (Cybersecurity 13:10Z) and Payward/Saldo Bank
 *  (Fintech 13:00Z) take the two cluster slots under the lead; Gemini 4
 *  Argon pricing (AI 12:50Z) takes the big Latest card. Repeat check: repo
 *  grep for Saldo, Payward, Argon, "Gemini 4", self-replicat, Kimwolf,
 *  Intrator: nothing on any of these events (a 13 Oct Treasury story
 *  mentions CoreWeave's share price in passing only).
 *  The writer's draft put the Anthropic research first; the CoreWeave story
 *  leads instead because it is the hard market news of the week, checked in
 *  full against CNBC and the company's SEC filing, while the Anthropic piece
 *  is one company's research and forecast.
 *
 *  MARKETS / COREWEAVE (lead, 13:20Z). Checked 15 Oct against the raw HTML
 *  of CNBC (Michelle Fox, published 2026-10-14 16:24 UTC): shares "nosedived
 *  15.5%"; 9.625% 2032 notes 14.8% YTM; 9.75% 2031 notes "around 14.9%";
 *  Intrator memo "obtained by CNBC", both sentences verbatim; S&P Credit
 *  Ratings B+, "junk bond territory"; Gavan Nolan (executive director of
 *  fixed income pricing, S&P Global Market Intelligence) quote verbatim;
 *  Luis Alvarado (co-head of global fixed income strategy, Wells Fargo
 *  Investment Institute) quote verbatim; Paul Meeks (head of technology
 *  research, Freedom Capital Markets) quotes verbatim; Oracle "closed down
 *  nearly 9%", 6.25% Nov 2032 bond at 7.24%; Nasdaq Composite -1.9%;
 *  $228bn of hyperscaler bonds as of 13 Oct per LSEG, "more than double"
 *  2025; all but Oracle investment grade at S&P; next results November.
 *  Company figures checked against the Q2 2026 press release as filed on
 *  EDGAR (8-K, EX-99.1, 11 Aug 2026; the investor-site copy returned 403):
 *  backlog "approximately $104 billion as of June 30, 2026", footnote
 *  excludes "more than $25 billion of net new customer commitments added in
 *  early Q3" and the delivery condition quoted; revenue $2,575m vs $1,212m;
 *  interest expense, net $640m vs $267m; net loss $626m vs $290m; recourse
 *  debt $6,235m current + $25,170m non-current, non-recourse $1,278m +
 *  $2,385m.
 *  CHANGED: S&P B+ and the Nolan and Alvarado lines now come from CNBC's own
 *  page (the draft had them via investinglive); Intrator memo now quoted
 *  verbatim from CNBC; share fall given as CNBC's 15.5 per cent. CUT: all
 *  Value The Markets material (79.5 cents price, Gil Luria estimate, Brannin
 *  McBee/FT remark, $4.4bn/$6.2bn repayment figures, Intrator's promise to
 *  address concerns on the call) because it could not be confirmed at a
 *  primary or established source; Nebius and Dell moves and the
 *  inflation/Fed framing (investinglive's own analysis) cut.
 *  Our arithmetic: 14.8 - 9.625 = 5.2 points; 14.8 - 7.24 = 7.6 points;
 *  debt 31,405 + 3,663 = $35.1bn; 104 / 35.1 = 3.0; revenue 2,575 / 1,212
 *  = up 112 per cent; interest 640 / 267 = 2.4 times.
 *  Hero: Wikimedia Commons "Le Centre Datarmor, les coulisses (Ifremer
 *  00957-106840 - 54954).jpg", Gregory Rocher / Ifremer, CC BY 4.0, 2025
 *  (a candlestick-chart photo was rejected under the house no-charts rule).
 *  Not used before on the site.
 *
 *  CYBERSECURITY / ANTHROPIC SELF-REPLICATION RESEARCH (13:10Z). Checked
 *  15 Oct against the raw HTML of the Anthropic Frontier Red Team post
 *  (William Zhou, Daniel Freeman, 12 Oct 2026) and SecurityWeek (Eduard
 *  Kovacs, 13 Oct). Verified verbatim on the page: "would be challenging to
 *  shut down, since there's no centralized point to shut off"; "doubling
 *  time of days"; "tend to not know the right questions to ask"; "an upper
 *  bound on real-world success"; "We don't yet have a full rogue
 *  replicator". Figures: 15 boxes, ~$55, 4GB, Gemma4-26B-A4B, 0.39 tokens/s;
 *  9B model on 8 of 9 hardware types; 8-node firewalled VPC of GCP nodes
 *  running the redroid Android 15 emulator, unauthenticated ADB; GLM-5.2
 *  8/8 in 4 of 5 trials, 7/8 in one; the worm stood up Llama3.1-8B as a
 *  stand-in; ECI fit 13.7 a year, R2 0.95, "only a proxy"; Kimwolf "over 2
 *  million" (reported by Synthient), ~133k replicas, at most ~40 H100s,
 *  "over 1-2 days per 9B replication"; Qwen3.5-9B 45% to 61-84%; advisor
 *  was Opus 4.8, "no significant improvement"; Mirai 92% in 14 days vs 74%;
 *  UK default-password rule; R0 below 1.
 *  CHANGED: headline made conditional ("would need"), since no replicator
 *  ran on the TV boxes, only a model; "upper bound" attributed to the post
 *  itself; the advisor identified as Anthropic's own Opus 4.8; the claim that
 *  the post says frontier models suit "the harder stages" cut (the post
 *  says social engineering and high-level coordination); "no central cost
 *  to cut off" replaced by the post's own wording. The second draft quote
 *  ("Right now, the floor and ceiling don't intersect") is verified but not
 *  used. Fairness: every finding attributed to Anthropic; no independent
 *  replication stated; Anthropic's commercial position noted neutrally.
 *  Our arithmetic: 2m / 15 = ~133,000; 92 - 74 = 18 points.
 *  Hero: Unsplash MPKQiDpMyqU, Jake Walker (@jakewalker), green
 *  installation text on a dark screen. Not used before on the site.
 *
 *  FINTECH / PAYWARD-SALDO (13:00Z). Checked 15 Oct against the raw HTML
 *  of Payward's release "Payward to acquire Saldo Bank" (payward.com, first
 *  published 14 Oct 2026) and Fortune (Camila Grigera Naon, 14 Oct).
 *  Release: definitive agreement to acquire Saldo Finance Oy, a Finnish
 *  holding company whose subsidiary Saldo Bank UAB is "a digital-first
 *  specialized bank licensed in Lithuania"; four operating markets plus a
 *  passport into the Netherlands; close "expected in 2027, subject to
 *  customary closing conditions and regulatory approvals"; planned interest
 *  on deposits, SME and consumer lending, credit cards, banking-as-a-
 *  service with full SEPA access; Saldo's current products by market;
 *  Payward's Fed limited-purpose master account, Central Bank of Ireland
 *  EMI licence, "over $2 billion in loans". Sethi and Mäensivu quotes
 *  verbatim from the release. Fortune: "first crypto-native firm to own a
 *  European bank" (Fortune's framing), price not disclosed, spokesperson
 *  quote verbatim, Coinbase/Ripple trust-charter comparison, Nasdaq $100m
 *  at a reported $21bn valuation.
 *  CHANGED: the draft relied on Fortune alone; the company release added
 *  as the primary source. The buyer's target is Saldo Finance Oy (holding
 *  company) and its bank subsidiary, not simply "Saldo Bank"; Sethi quote
 *  completed from the release; "[VERIFY]" notes removed; regulator still
 *  not named in either source, said so.
 *  Hero: Unsplash hflI7EJtKmc, Gantas Vaičiulėnas (@gantas), Vilnius at
 *  dusk (location per Unsplash). Not used before on the site.
 *
 *  AI / GEMINI 4 ARGON PRICING (12:50Z). Checked 15 Oct against the raw
 *  HTML of Google's post (Koray Kavukcuoglu, SVP, Google DeepMind and Chief
 *  AI Architect, Google; published 2026-10-13 16:00 UTC): availability;
 *  "introductory price of $2 per million input tokens and $10 per million
 *  output tokens (with cached input tokens at 95% off)"; "After the
 *  introductory period expires on November 30, 2026, the price of $4 ...
 *  and $20 ... will apply"; #1 on the Vals Index; ERQA 87%; code submissions
 *  up "more than 35%" and rollbacks down "nearly a third"; ADK session prep
 *  -40%; Gray Swan 0.7% across 15 adaptive attempts; bio red teaming "less
 *  than 1%"; Fairwind expansion "to hundreds of additional" partners, Wiz;
 *  1M unified input-output token limit. VentureBeat (Carl Franzen, 13 Oct,
 *  read through a fetch tool after the site returned 429): 30 Sept unveiling
 *  to a limited group; Vals 68.90 vs 67.04 (Sonnet 5.5) and 66.97 (Opus
 *  5.5) as of 12 Oct; Artificial Analysis 53, tying GPT-6 Astra and Claude
 *  Fable 5.1, below Opus 5.5, Sonnet 5.5 and Muse Wonder Full; Terminal-
 *  Bench 4.0 66.4 vs 57.4 (Google-disclosed); prices exclude tools and
 *  infrastructure; distribution reading.
 *  RIVAL PRICE TABLE VERIFIED against vendor pages on 15 Oct: Anthropic
 *  pricing docs (Sonnet 5.5 $2/$10, Opus 5.5 $4/$20, Fable 5.1 $10/$50);
 *  OpenAI API pricing, standard short-context (gpt-6.1-sol $2/$10,
 *  gpt-6-astra $10/$50); Meta's Muse Wonder model page ($4/$20).
 *  CHANGED: rollbacks "fell 30 per cent" (VentureBeat) given as Google's
 *  "nearly a third"; the 100,000-employee figure (VentureBeat only) cut;
 *  Sam Witteveen quote cut (VentureBeat's reviewer; not needed and it
 *  would have been the only qualitative verdict on a rival); price table
 *  now sourced to the vendors. Fairness: Google's claims attributed to
 *  Google; rankings given both ways.
 *  Our arithmetic: $4/$2 and $20/$10 = 2x; 68.90 - 67.04 = 1.86 points.
 *  Hero: Wikimedia Commons "Googleplex HQ (cropped).jpg", Asoundd, CC BY-SA
 *  4.0, 2016. Not used before on the site.
 */

const CNBC = "https://www.cnbc.com/2026/10/14/coreweave-stock-bond-yields-ai-debt.html";
const CWQ2 = "https://www.sec.gov/Archives/edgar/data/1769628/000176962826000362/coreweave2q26earningspress.htm";
const ANTH = "https://www.anthropic.com/research/self-replicating-ai";
const SECW = "https://www.securityweek.com/small-ai-models-may-soon-be-able-to-self-replicate-on-iot-devices-anthropic-warns/";
const PAYW = "https://www.payward.com/press-release/payward-acquires-saldo-bank";
const FORTUNE = "https://fortune.com/2026/10/14/kraken-parent-company-payward-first-crypto-firm-european-bank-purchase";
const GBLOG = "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/";
const VB = "https://venturebeat.com/technology/google-makes-gemini-4-argon-broadly-available-with-limited-time-low-api-pricing-of-2-10-per-1m-token";
const ANTP = "https://platform.claude.com/docs/en/about-claude/pricing";
const OAIP = "https://developers.openai.com/api/docs/pricing";
const METAP = "https://dev.meta.ai/models/muse-wonder/";

export default [

/* ---------- 12:50Z AI ---------- */
AI({ slug: "half-price-until-30-november", kick: "Pricing",
  headline: "Half price until 30 November",
  dek: "Google made Gemini 4 Argon generally available on Tuesday at $2 per million input tokens and $10 per million output tokens, an introductory rate that doubles after 30 November. Independent rankings place it first on one index and mid-table on another.",
  metaDesc: "Google opened Gemini 4 Argon to developers at $2 and $10 per million tokens until 30 November, then $4 and $20; independent indexes rank it differently against rivals.",
  author: "dana-whitfield", date: "2026-10-15T12:50:00Z",
  capt: "Google's headquarters building in Mountain View, California, in a file photograph.",
  tags: [
    { name: "AI", slug: "ai" },
    { name: "Pricing", slug: "pricing" },
    { name: "Enterprise AI", slug: "enterprise-ai" },
    { name: "Developer Tools", slug: "developer-tools" }
  ],
  related: [
    R("/ai/metas-first-frontier-model-priced-at-the-frontier/", "Pricing"),
    R("/ai/ten-days-after-the-pacing-call-the-price-fell/", "Pricing"),
    R("/ai/the-price-fell-and-the-bill-rose/", "Costs")
  ],
  body: [
    `Google on Tuesday made Gemini 4 Argon generally available to developers and enterprises through its API, at an introductory price of $2 per million input tokens and $10 per million output tokens, ${L(GBLOG, "according to a post by Koray Kavukcuoglu")}, senior vice-president of Google DeepMind and Google's chief AI architect. After the introductory period ends on 30 November, the price becomes $4 and $20, Google said. By our arithmetic that is exactly double on both sides, so the launch rate is a promotion with a stated end date.`,
    `Google first unveiled Argon on 30 September, when access was limited to a small group of early testers, ${L(VB, "VentureBeat reported")}. Tuesday's release opens it through the paid Gemini API tier in AI Studio and on Google's enterprise platform. Individual developers need a Google AI Ultra subscription to use it in Antigravity, Google's development environment, and Ultra and Pro subscribers get it in the Gemini app and in AI Mode in Search. Cached input tokens are 95 per cent cheaper during the introductory period, Google said.`,
    `Against list prices published by the other developers, the introductory rate matches the $2 and $10 that Anthropic ${L(ANTP, "charges for Claude Sonnet 5.5")} and that OpenAI ${L(OAIP, "charges for GPT-6.1 Sol")}. The post-promotion rate of $4 and $20 matches Anthropic's Claude Opus 5.5 and Meta's ${L(METAP, "Muse Wonder")}. OpenAI's GPT-6 Astra and Anthropic's Claude Fable 5.1 are listed at $10 and $50. VentureBeat, which compiled a similar table, noted that per-token prices exclude the cost of tools, infrastructure and other services.`,
    `Google's post says Argon ranks first on the Vals Index, which measures performance on finance, coding, legal and tax work, and that it scored 87 per cent on ERQA, an embodied-reasoning benchmark. It says Argon outperforms other frontier models without naming them. VentureBeat reported the Vals figures as of 12 October: Argon at 68.90 per cent, Claude Sonnet 5.5 at 67.04 and Claude Opus 5.5 at 66.97, a lead of about 1.9 points by our subtraction.`,
    `Other measures rank the models differently. On the Artificial Analysis Intelligence Index, VentureBeat reported, Argon scores 53, level with GPT-6 Astra and Claude Fable 5.1 and below Claude Opus 5.5, Claude Sonnet 5.5 and Meta's Muse Wonder Full. On Terminal-Bench 4.0, a test of coding through command-line tools, figures Google had disclosed earlier put Opus 5.5 at 66.4 per cent and Argon at 57.4, VentureBeat said, describing them as company-reported rather than independently replicated.`,
    `Google also cited results from its own use. Argon in Antigravity helped its engineers increase agentic code submissions by more than 35 per cent while reducing code rollbacks by nearly a third, the post says, and cut in-memory session preparation time in Google's Agent Development Kit by 40 per cent in long sessions. Google says Argon leads the Gray Swan indirect prompt-injection benchmark, with attack success held to 0.7 per cent across 15 adaptive attempts. These are Google's figures.`,
    `Access and safety terms are part of the release. Google said it is beginning to extend the Fairwind Program, which gives approved cybersecurity defenders access to Argon without its cyber guardrails, to hundreds of additional partners, with Wiz among the early users. It said external biological red teaming could unlock less than 1 per cent of the biological sub-tasks it tests for. The model offers a one-million-token combined input and output limit through the Gemini API, according to the post; VentureBeat noted that Google had not said how that limit relates to the length of a single response.`,
    `Why it matters is the shape of the price rather than its level. A temporary rate that matches rivals' cheaper models sets a reference point that developers will budget around, and the doubling takes effect on 1 December. VentureBeat's reading is that Google's advantage lies in the breadth of products and infrastructure through which it can distribute Argon rather than in any single benchmark.`,
    `Komposite reported in September that <a href="/ai/ten-days-after-the-pacing-call-the-price-fell/">frontier list prices fell</a> when Anthropic and OpenAI released new models, and that <a href="/ai/the-price-fell-and-the-bill-rose/">McKinsey found operating costs still constrain AI use</a> at one in five organisations. Per-token price is only part of the bill.`
  ]
}),

/* ---------- 13:00Z FINTECH ---------- */
FT({ slug: "krakens-parent-buys-a-lithuanian-bank", kick: "Banking",
  headline: "Kraken's parent buys a Lithuanian bank",
  dek: "Payward, the parent of the Kraken exchange, has agreed to acquire the holding company of Saldo Bank, a digital bank licensed in Lithuania. The price was not disclosed, and the deal is expected to close in 2027, subject to regulatory approval.",
  metaDesc: "Payward, Kraken's parent, agreed to buy the owner of Lithuania-licensed Saldo Bank; the price is undisclosed and closing is expected in 2027, subject to regulatory approval.",
  author: "elena-vasquez", date: "2026-10-15T13:00:00Z",
  capt: "The rooftops of Vilnius, Lithuania, at dusk, in a file photograph.",
  tags: [
    { name: "Banking", slug: "banking" },
    { name: "Digital Assets", slug: "digital-assets" },
    { name: "Payments", slug: "payments" },
    { name: "Embedded Finance", slug: "embedded-finance" }
  ],
  related: [
    R("/fintech/chime-buys-the-bank-it-was-renting/", "Banking"),
    R("/fintech/rain-applies-for-the-charter-the-community-banks-are-suing-over/", "Charters"),
    R("/crypto/perpetual-futures-come-for-the-stocks/", "Derivatives")
  ],
  body: [
    `Payward, the parent company of the crypto exchange Kraken, has signed a definitive agreement to acquire Saldo Finance Oy, a Finnish holding company whose subsidiary, Saldo Bank UAB, is a digital bank licensed in Lithuania, ${L(PAYW, "the company said on Wednesday")}. The transaction is expected to close in 2027, subject to customary closing conditions and regulatory approvals. Neither the release nor ${L(FORTUNE, "Fortune's report")} gave a price; Kraken said it does not disclose financial terms for its deals, Fortune reported.`,
    `Payward describes Saldo Bank as "a digital-first specialized bank licensed in Lithuania" with four operating markets, Lithuania, Finland, Sweden and Germany, and a passport into the Netherlands. Under EU rules, a bank licensed in one member state can extend its services to others through passporting rather than seek a separate licence in each. Fortune reported that, once completed, the deal would make Payward the first crypto-native firm to own a European bank; that is Fortune's characterisation.`,
    `The release lists what Payward expects to offer once the deal closes, subject to regulatory approvals: interest on deposits, secured and unsecured loans to small and medium-sized businesses, consumer lending, credit cards, and a banking-as-a-service line with card issuance and full access to SEPA euro payments for partners building on Payward. Saldo already offers retail term deposits in all four markets, consumer lending in Lithuania, Finland and Sweden, and business lending in Lithuania and Finland, according to the release. Its credit card launched in Finland and is expected in Sweden in 2027.`,
    `Arjun Sethi, Payward's co-chief executive, said in the release: "A regulated EU bank is the piece that lets us serve European clients the way a primary financial institution should: one place to hold assets, move them freely, and put them to work." Jarkko Mäensivu, president of Saldo Bank, said: "A banking license is only as valuable as what you build on top of it." A Kraken spokesperson told Fortune: "Once the deal closes in 2027, we hope to expand shortly thereafter."`,
    `The point of a bank, in both accounts, is deposits. Fortune contrasted the deal with the US national trust charters held by Coinbase and Ripple, which it said allow them to safeguard funds and move money without touching customer deposits. Payward said its US arm already holds a Federal Reserve limited-purpose master account, and that it holds an e-money licence from the Central Bank of Ireland and has originated more than $2bn in loans. Those are the company's figures.`,
    `Several things are not yet public. Neither source names the authority that will review the change of ownership, and neither gives Saldo's assets, deposits or customer numbers, so the size of what Payward is buying cannot be judged from the material published so far. The release says the integration work and the regulatory approval process are both under way.`,
    `The deal follows other Payward moves this year. Fortune reported that Kraken Financial obtained its Federal Reserve account seven months ago, giving it direct dollar payments over Fedwire, and that Nasdaq agreed last month to invest $100m in Payward at a reported $21bn valuation, with the two developing blockchain-based versions of stocks expected in the second quarter of 2027. The valuation is a reported figure, not one Komposite has confirmed.`,
    `The acquisition fits a pattern Komposite has been tracking, of companies that rented banking services buying the licence instead. <a href="/fintech/chime-buys-the-bank-it-was-renting/">Chime agreed to buy Stride Bank</a> for $590m in September, and in the US crypto-linked firms such as Rain are applying for trust charters, <a href="/fintech/rain-applies-for-the-charter-the-community-banks-are-suing-over/">a route community banks are contesting in court</a>. Payward is taking the European version of the step, by acquisition rather than application.`
  ]
}),

/* ---------- 13:10Z CYBERSECURITY ---------- */
CY({ slug: "the-replicator-that-would-need-fifteen-tv-boxes", kick: "AI Safety",
  headline: "The replicator that would need fifteen TV boxes",
  dek: "Anthropic's Frontier Red Team says small open-weight models may be months from being able to copy themselves across cheap internet-connected devices. One model did so reliably in a simplified test the authors call an upper bound; they expect any spread to be slow.",
  metaDesc: "Anthropic researchers say small AI models may soon self-replicate across cheap IoT devices; one model did so in a simplified test that the authors call an upper bound.",
  author: "sam-porter", date: "2026-10-15T13:10:00Z",
  capt: "Text from a software installation scrolling on a dark computer screen, in a file photograph.",
  tags: [
    { name: "AI Security", slug: "ai-security" },
    { name: "Cybersecurity", slug: "cybersecurity" },
    { name: "Threat Intelligence", slug: "threat-intelligence" }
  ],
  related: [
    R("/ai/anthropic-publishes-what-it-stopped/", "AI Safety"),
    R("/ai/two-open-models-and-no-weights-yet/", "Open Weights"),
    R("/cybersecurity/a-fully-patched-vpn-and-root-in-three-steps/", "Zero-Days")
  ],
  body: [
    `Small AI models may be months away from being able to copy themselves across cheap internet-connected devices such as off-brand Android TV boxes, with no data centre involved, according to ${L(ANTH, "a research post published on Monday")} by William Zhou and Daniel Freeman of Anthropic's Frontier Red Team. The authors write that such a replicator "would be challenging to shut down, since there's no centralized point to shut off", though it may be slow, "with a doubling time of days". They also say no complete rogue replicator exists yet.`,
    `The post splits autonomous replication into four stages: finding targets, gaining execution on a device, getting a model running on it, and spreading from the new host. The authors largely set aside the break-in stages, citing earlier research, and test the other two. In a demonstration, the team bought 15 off-brand Android TV boxes at about $55 each, each with 4GB of memory, and ran a 26-billion-parameter open-weight model, Gemma4-26B-A4B, split across them at 0.39 tokens per second. Separately, a 9-billion-parameter model got inference running on eight of the nine hardware types tested.`,
    `The end-to-end result comes from a closed network. In a firewalled cloud network of eight nodes running an Android emulator, each reachable through an unauthenticated debug port, models were asked to spread and stand up a small stand-in model, Llama3.1-8B, on each node. Of the open-weight models tested, only GLM-5.2 completed full replication, reaching all eight nodes in four of five trials and seven in the fifth; the others "fail reliably", the post says. Models of 30 billion parameters or fewer can complete many individual steps, the authors write, but make mistakes when chaining them.`,
    `The authors are explicit that the test flatters the attacker. Keeping the break-in trivial "makes this an upper bound on real-world success", the post says, though it notes that the Mirai botnet spread by trying lists of default manufacturer passwords. The timeline is a projection: fitting a trend of about 13.7 points a year on the Epoch Capabilities Index, which the authors call only a proxy for replication ability, they estimate that a small model could reach GLM-5.2's level by the end of 2026. ${L(SECW, "SecurityWeek")} reported the findings the following day.`,
    `The spread estimate is anchored on Kimwolf, a botnet that infected more than two million devices, mostly Android TV boxes, according to figures from Synthient cited in the post. If every group of 15 such boxes ran one copy of the 26-billion-parameter model, the post estimates about 133,000 replicas, which by our arithmetic matches two million divided by 15. Their combined computing power would be at most about 40 Nvidia H100 chips, and each replication of a 9-billion-parameter model would take more than a day. The authors say the estimate rests on one class of hardware and one past botnet.`,
    `The post also reports what did not work. Giving a small model, Qwen3.5-9B, access to a stronger adviser, Anthropic's own Claude Opus 4.8, produced no significant improvement, because small models "tend to not know the right questions to ask", the authors write. Notes passed between generations of the same small model did help: setup success rose from 45 per cent in the first generation to between 61 and 84 per cent in later ones. The authors also found small models weak at spear-phishing and expect social engineering to be done mostly by larger models.`,
    `The recommendations are aimed at network operators and device makers. The authors suggest that internet providers watch flow data for multi-gigabyte model payloads and sustained device-to-device traffic, that defenders use decoy devices to capture a replicator's code, and that infected subscribers be quarantined and notified. For the last, they cite a Mirai clean-up in which quarantine with notification cleared 92 per cent of infections within 14 days, against 74 per cent without notification, an 18-point gap by our subtraction. They also point to the UK's ban on default IoT passwords and to the aim of driving each infection's onward spread below one.`,
    `The work is one company's safety team publishing its own tests and its own forecast, and Komposite has not seen independent replication of the GLM-5.2 result. Anthropic develops frontier models itself, and the post lists large closed-weight models among the possible replicators it did not test. What the post establishes, on its own account, is that the separate steps are within reach of models small enough to run on hardware of this kind.`,
    `The practical defences are familiar ones: closed ports, no default credentials and monitored traffic. Komposite reported last month that <a href="/ai/anthropic-publishes-what-it-stopped/">Anthropic published the misuse it had blocked</a>, and earlier this month that two developers were <a href="/ai/two-open-models-and-no-weights-yet/">holding back open weights until after red-teaming</a>; the release of small open-weight models is the variable this research turns on.`
  ]
}),

/* ---------- 13:20Z MARKETS (lead) ---------- */
MK({ slug: "the-bonds-say-fifteen-the-backlog-says-104bn", kick: "Credit",
  headline: "The bonds say fifteen, the backlog says $104bn",
  dek: "CoreWeave's shares fell 15.5 per cent on Wednesday and yields on two of its bonds neared 15 per cent, CNBC reported. Its chief executive told staff the market was acting irrationally and pointed to a contract backlog the company put at about $104bn.",
  metaDesc: "CoreWeave shares fell 15.5 per cent and its 2032 bonds yielded 14.8 per cent on Wednesday, CNBC reported, as its chief executive pointed to a $104bn contract backlog.",
  author: "priya-raghavan", date: "2026-10-15T13:20:00Z",
  capt: "Servers and cabling inside a supercomputer rack at a research computing centre in Brest, France, in a file photograph.",
  tags: [
    { name: "AI Infrastructure", slug: "ai-infrastructure" },
    { name: "Fixed Income", slug: "fixed-income" },
    { name: "Data Centers", slug: "data-centers" },
    { name: "Capital Markets", slug: "capital-markets" }
  ],
  related: [
    R("/markets/a-50bn-backlog-and-anthropics-35bn/", "Backlogs"),
    R("/ai/nscales-backlog-has-two-names-on-it/", "Backlogs"),
    R("/ai/fifty-billion-not-seventy/", "Financing")
  ],
  body: [
    `CoreWeave's shares fell 15.5 per cent on Wednesday and the yields on two of its bonds rose to almost 15 per cent, ${L(CNBC, "CNBC reported")}, as investors grew concerned that some technology companies are borrowing too heavily to build artificial-intelligence infrastructure. The yield to maturity on the company's 9.625 per cent notes due 2032 stood at 14.8 per cent and on its 9.75 per cent notes due 2031 at around 14.9 per cent, according to CNBC. A bond's yield rises as its price falls, so the move means investors were paying less for debt whose coupons are fixed.`,
    `Mike Intrator, CoreWeave's chief executive, dismissed the moves in a memo obtained by CNBC. "When you are building a new type of technology company there will be periods of time when the market misunderstands and acts irrationally," he wrote. "We are confident in our backlog which more than supports all of our debt obligations."`,
    `The backlog is set out in CoreWeave's second-quarter results. Revenue backlog was approximately $104bn at 30 June, ${L(CWQ2, "according to the results release filed with the SEC")} on 11 August, and that figure excludes more than $25bn of net new customer commitments the company said it added early in the third quarter. CoreWeave defines backlog as remaining performance obligations plus other amounts it expects to recognise under committed contracts, "subject to the satisfaction of delivery and availability of service requirements". It is revenue the company expects to earn as it builds and supplies capacity, not cash it holds.`,
    `The same release shows the cost of building it. Second-quarter revenue was $2,575m, up from $1,212m a year earlier, an increase of 112 per cent by our arithmetic. Net interest expense rose to $640m from $267m, about 2.4 times the year-earlier figure, and the net loss widened to $626m from $290m. At 30 June the balance sheet carried $31.4bn of recourse debt and $3.7bn of non-recourse debt, about $35.1bn in total by our addition. The backlog is roughly three times that debt, by our arithmetic, but backlog is future revenue, not profit, so the comparison flatters the company's position.`,
    `S&P rates CoreWeave B+, which CNBC described as junk bond territory. Gavan Nolan, executive director of fixed income pricing at S&P Global Market Intelligence, told CNBC that with interest rates generally higher, it was natural for highly leveraged companies such as CoreWeave to be affected. CoreWeave "has capital expenditure levels that are almost hyperscaler-like, but it doesn't have the hyperscaler balance sheet," Nolan said, referring to the largest cloud operators.`,
    `Not every analyst CNBC spoke to was alarmed. Paul Meeks, head of technology research at Freedom Capital Markets, called CoreWeave's balance sheet "relatively bad" compared with its neocloud peers, because it has borrowed more and is building more data centres. But he said the yields had risen on concern "that I don't share" about its ability to meet interest costs over time, and added: "It's definitely not a deteriorating situation." He said he did not expect improvement until the new data centres are running.`,
    `The sell-off reached beyond CoreWeave. Oracle shares closed down nearly 9 per cent, and the yield on its 6.25 per cent bond due November 2032 rose to 7.24 per cent, CNBC reported; the Nasdaq Composite closed 1.9 per cent lower. Alphabet, Amazon, Meta and Oracle had together issued more than $228bn of bonds this year as of 13 October, according to LSEG data cited by CNBC, more than double their total for all of 2025. All but Oracle hold investment-grade ratings from S&P.`,
    `By our arithmetic, a 14.8 per cent yield is 5.2 percentage points above the coupon on CoreWeave's 2032 notes and about 7.6 points above the yield on Oracle's bond of similar maturity. Luis Alvarado, co-head of global fixed income strategy at Wells Fargo Investment Institute, described the shift to CNBC: "The era of easy money, which we experienced in the first nine months of the year, is starting to disappear and dissipate."`,
    `Why it matters is the cost of new money rather than the share price. The coupons on CoreWeave's existing bonds do not change, but the yields at which they trade indicate what lenders would demand for fresh borrowing or refinancing, and the company's growth depends on building capacity ahead of the revenue in its backlog. CoreWeave's next quarterly results are expected in November, according to CNBC.`,
    `The company's numbers are its own. Komposite has reported on <a href="/markets/a-50bn-backlog-and-anthropics-35bn/">Lambda's $50bn backlog</a> and on <a href="/ai/nscales-backlog-has-two-names-on-it/">Nscale's filing</a>, where contracted value was concentrated in a few customers. This week the bond market put a price on how much such backlogs are worth to lenders.`
  ]
}),

];
