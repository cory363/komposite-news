/** Batch 76 — Monday 12 October 2026, round 4. One AI lead: Meta's release
 *  of Muse Wonder and Muse Wonder Full (22:40Z). Not covered before (repo
 *  grep for Muse, Alexandr Wang, Superintelligence Labs: only the Manus piece
 *  of 8 Oct mentions Meta's agent ambitions, and it is linked). Takes the
 *  lead from batch 75's Ahold Delhaize story, which moves down by date.
 *
 *  AI / META MUSE WONDER (lead). Fact-check 12 Oct:
 *  Meta blog, "Muse Wonder: A Frontier Model For Personal & Professional AI
 *  Agents" (research.meta.ai, 12 Oct) read in full: Muse Wonder available
 *  today through the Meta Model API and Muse Code; Wonder Full "available
 *  today for Muse Code subscribers"; Wonder "will soon power experiences in
 *  Muse, and will roll out first to subscribers"; "Fourteen months ago, we
 *  began a ground-up overhaul of our artificial intelligence efforts"
 *  (Reuters' rendering "began an overhaul" not used); trained at the
 *  "gigawatt-scale Prometheus data center"; "strongest safeguards to date"
 *  against CBRN and cyber misuse; full safety report "will be available
 *  soon". Model card PDF (research.meta.ai/static/muse-wonder-model-card)
 *  read in full: release 12 Oct 2026; 1M-token context; text/image/video/
 *  audio in, text out; comparison against GPT-6 Astra, Claude Fable 5.1 and
 *  Claude Opus 5.5 at max effort; competitor runs "remain best-effort:
 *  prompts, tools, and runtime may not be optimally tuned for proprietary
 *  models" (verbatim); SWE-Marathon "not a controlled common-harness
 *  comparison" (verbatim), Wonder Full at xhigh; DeepSWE uses Datacurve
 *  third-party results for Wonder, Wonder Full and Opus 5.5, OpenAI-reported
 *  for Astra, system card for Fable 5.1; without mitigations "we do not rule
 *  out the model reaching this threshold in the Chemical & Biological
 *  domain" (verbatim), hence classifiers; residual risk "moderate or lower".
 *  Muse Wonder model page (dev.meta.ai/models/muse-wonder) read: muse-
 *  wonder-1.0 $4.00 input, $0.20 cached input, $20.00 output per million
 *  tokens, 1M context; Wonder Full "Muse Code subscription only", Power
 *  Usage ($50.00/month) and Maximum Usage ($200.00/month); benchmark table
 *  read from page source. Columns: Wonder Full / Wonder / Fable 5.1 /
 *  Astra / Opus 5.5 (column alignment confirmed by the Opus OSWorld binary
 *  cell being blank, as the model card says). Rows used: Vals Finance Agent
 *  V2 59.1/56.6/58.9/53.5/58.6; Harvey LAB-AA 13.1/10.0/6.4/8.6/4.2;
 *  MemoryBench 85.5/85.6/79.0/81.4/81.5; DeepSWE 1.1 79.0/78.8/67.4/74.1/
 *  74.2; SWE-Marathon 57.5/53.1/45.6/42.5/46.3; Terminal-Bench 4.0-AA
 *  57.1/52.0/52.0/59.1/59.6; ProgramBench 59.0/50.0/55.5/52.5/70.5; AA
 *  Index 56/52/53/53/58. Our count of top scores across the 14 rows
 *  (OSWorld on its primary partial metric): Meta model top on 7 (PSI,
 *  Harvey, Vals, AutomationBench, MemoryBench, DeepSWE, SWE-Marathon),
 *  Opus 5.5 on 6 (HealthBench, JobBench, OSWorld, Terminal-Bench,
 *  ProgramBench, AA Index), Astra on 1 (GDP.pdf).
 *  Muse Code page and subscriptions doc (dev.meta.ai) read: "Muse Code
 *  subscriptions default to Contributor mode. In Contributor mode, you get
 *  more usage from your plan in exchange for letting Meta use your content
 *  to train future Meta models" (verbatim); can be switched off; Wonder and
 *  Wonder Full "available in either mode". Spark 1.3 contributor API tier
 *  $0.10/$0.20 "Used to improve our products"; no contributor tier listed
 *  for Wonder. Prices of Everyday/High plans not published there: not used.
 *  Artificial Analysis leaderboard and model pages read 12 Oct ~22:50Z:
 *  Intelligence Index Opus 5.5 (max) 58; Wonder Full (max) 56; Sonnet 5.5
 *  (max) 56; Fable 5.1 (max) 53; GPT-6 Astra (max) 53; Wonder (max) 52.
 *  Cost per index task: Wonder $4.52, Astra (max) $3.26, Opus 5.5 (max)
 *  $5.98, Fable 5.1 (max) $7.63; Wonder Full no price (not on API).
 *  Anthropic pricing docs read: Opus 5.5 $4 input / $20 output, cache hits
 *  $0.20; Fable 5.1 $10 / $50; full 1M context at standard price.
 *  OpenAI pricing docs read: gpt-6-astra $10.00 / $50.00 (short context,
 *  <=272K input); gpt-6-sol and gpt-6.1-sol $2.00 / $10.00.
 *  TechCrunch (Russell Brandom, 12 Oct 10:56 PDT) read: first frontier
 *  release since Wang restructured Meta's AI efforts in August 2025;
 *  Prometheus in central Ohio; Wonder Full not on API. Its "roughly
 *  equivalent in cost to GPT-6 Sol" not used: Sol lists at half the price.
 *  CNBC (Jonathan Vanian, 12 Oct 13:00 EDT) read in full: codename
 *  Watermelon per Wang; both Wang quotes verbatim; Wang said the API
 *  offering will be priced "meaningfully below" leading OpenAI and
 *  Anthropic models; Muse app plans $20 or $100 a month; Wonder Full only
 *  via Muse Code at $50 or $200 a month; user complaints of unauthorised
 *  message access, disputed by Meta; Wang's "I think there are certainly
 *  instances..." quote verbatim.
 *  Reuters via Investing.com (12 Oct) read: aimed at competing more
 *  directly with OpenAI and Anthropic; shares "rose about 4% in afternoon
 *  trading". Yahoo Finance chart data: close $742.96 on 12 Oct against
 *  $718.67 on Fri 9 Oct; our arithmetic +3.4 per cent.
 *  CUT: Quartz (403, not read); TechCrunch's Kopparapu video quote (not
 *  heard first-hand); any market-share effect (no usage data disclosed);
 *  "Watermelon" GPT-5.5 parity reports (secondary blogs only).
 *  Our arithmetic: $4/$10 and $20/$50 = 60 per cent below; $4/$2 = double;
 *  Aug 2025 to Oct 2026 = 14 months, matching Meta's blog.
 *  Hero: Wikimedia Commons, "Meta Platforms Headquarters Menlo Park
 *  California.jpg" by LPS.1, CC0 (entrance and sign at 1 Hacker Way, March
 *  2022; no people identifiable).
 *
 *  Weekdays: 12 Oct 2026 Mon, 9 Oct 2026 Fri.
 */
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const AIW = P("ai", "AI", "ai", "Photograph via Wikimedia Commons");

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

// Sources: Meta Muse Wonder
const M_BLOG = "https://research.meta.ai/blog/muse-wonder";
const M_CARD = "https://research.meta.ai/static/muse-wonder-model-card";
const M_MODEL = "https://dev.meta.ai/models/muse-wonder/";
const M_SUBS = "https://dev.meta.ai/docs/muse-code/subscriptions/";
const M_CODE = "https://dev.meta.ai/products/muse-code/";
const M_TC = "https://techcrunch.com/2026/10/12/meta-releases-its-first-frontier-model-muse-wonder/";
const M_CNBC = "https://www.cnbc.com/2026/10/12/meta-muse-wonder-ai-model-agent.html";
const M_REUT = "https://www.investing.com/news/stock-market-news/meta-releases-muse-wonder-ai-models-to-challengeanthropic-and-openai-4945058";
const M_AA = "https://artificialanalysis.ai/leaderboards/models";
const M_ANTH = "https://platform.claude.com/docs/en/about-claude/pricing";
const M_OAI = "https://developers.openai.com/api/docs/pricing";

export default [

/* ---------- 22:40Z AI (lead) ---------- */
AIW({ slug: "metas-first-frontier-model-priced-at-the-frontier", kick: "Frontier Models",
  headline: "Meta's first frontier model, priced at the frontier",
  dek: "Meta released Muse Wonder on Monday, its first frontier model since rebuilding its AI effort, and says it matches or beats OpenAI and Anthropic on agent, legal, finance and coding tests. One independent index puts it close, not ahead. Its API price equals Claude Opus 5.5's.",
  metaDesc: "Meta released Muse Wonder and Muse Wonder Full on Monday, claiming frontier parity on agent and coding tests; the API costs $4 and $20 per million tokens.",
  author: "dana-whitfield", date: "2026-10-12T22:40:00Z",
  capt: "The entrance to Meta's headquarters at 1 Hacker Way in Menlo Park, California, with the company's sign beside the road, in a file photograph.",
  tags: [
    { name: "OpenAI / Model Providers", slug: "openai-model-providers" },
    { name: "AI Agents", slug: "ai-agents" },
    { name: "Developer Tools", slug: "developer-tools" }
  ],
  related: [
    R("/ai/the-agent-maker-meta-had-to-give-back/", "AI Agents"),
    R("/ai/thirty-dollars-and-then-the-meter/", "Pricing"),
    R("/ai/the-price-fell-and-the-bill-rose/", "Costs")
  ],
  body: [
    `Meta on Monday released Muse Wonder and Muse Wonder Full, which it describes as its most capable AI models and "a major leap toward personal superintelligence", ${L(M_BLOG, "according to a post from its research division")}. Muse Wonder is available now to developers through the Meta Model API and Muse Code, the company's coding agent, while Muse Wonder Full is limited to Muse Code subscribers. Meta said Muse Wonder will "soon" power its Muse personal agent app, rolling out first to subscribers; CNBC reported that the app's paid plans cost $20 or $100 a month. ${L(M_TC, "TechCrunch")} called it the company's first frontier model since Alexandr Wang restructured Meta's AI efforts in August 2025.`,
    `The pitch is aimed at two rivals by name. ${L(M_REUT, "Reuters")} said the release was meant to let Meta compete more directly with OpenAI and Anthropic, and Meta's own comparison table sets the new models against OpenAI's GPT-6 Astra and Anthropic's Claude Fable 5.1 and Claude Opus 5.5. The models were known internally as Watermelon, Wang told ${L(M_CNBC, "CNBC")}. "Fourteen months ago, we began a ground-up overhaul of our artificial intelligence efforts," Meta wrote, adding that the models were trained at its "gigawatt-scale" Prometheus data centre, which TechCrunch located in central Ohio.`,
    `Meta's ${L(M_CARD, "model card")} gives Muse Wonder a context window of one million tokens; it accepts text, images, video and audio and replies in text. On the ${L(M_MODEL, "Muse Wonder product page")}, the API price is $4 per million input tokens, $0.20 per million cached input tokens and $20 per million output tokens. Muse Wonder Full has no API price at all: it is available only on Muse Code's Power Usage plan, at $50 a month, and its Maximum Usage plan, at $200 a month, which Meta says carries 80 times the usage of its Everyday Usage plan.`,
    `The performance claims are Meta's. Its table shows Muse Wonder Full scoring 59.1 on Vals AI's Finance Agent benchmark, against 58.9 for Claude Fable 5.1, 58.6 for Claude Opus 5.5 and 53.5 for GPT-6 Astra, which is close to a tie. On Harvey's legal-agent benchmark, as run by Artificial Analysis, Muse Wonder Full scores 13.1 and the three rival models between 4.2 and 8.6. On DeepSWE, a long-horizon coding test, it scores 79.0 against 74.2 for Opus 5.5, 74.1 for Astra and 67.4 for Fable 5.1. On Meta's own memory test, MemoryBench, the smaller Muse Wonder scores 85.6, the highest in the table.`,
    `The same table shows where the models trail. Claude Opus 5.5 leads on Terminal-Bench, a coding test run in a command-line environment (59.6 against 57.1 for Muse Wonder Full), and on ProgramBench, which asks a model to rebuild a whole program from scratch (70.5 against 59.0). By our count, a Meta model posts the top score on 7 of the 14 rows Meta published, Opus 5.5 on six and GPT-6 Astra on one. Meta's widest coding margin, 57.5 against 46.3 for Opus 5.5 on the long-horizon SWE-Marathon test, comes with caveats: Muse Wonder Full was reported at the "xhigh" reasoning setting rather than the maximum used elsewhere, and the model card says the rival scores came through OpenAI's Codex and Anthropic's Claude Code, so the row "is not a controlled common-harness comparison".`,
    `Meta discloses that its method mixes sources. Some rows come from third parties, among them Artificial Analysis, Vals AI and Datacurve; others from Meta's own runs or from figures the rivals reported. Where Meta ran competitors' models itself, the model card says those runs "remain best-effort: prompts, tools, and runtime may not be optimally tuned for proprietary models." Several of the tests, including MemoryBench and the Personal Superintelligence Index, a composite of seven evaluations, are Meta's own or include Meta's own, and cannot be checked from outside.`,
    `One independent measure is already public. ${L(M_AA, "Artificial Analysis")}, which runs its own suite of tests, scores Muse Wonder Full at 56 on its Intelligence Index, ahead of GPT-6 Astra and Claude Fable 5.1 at 53 and behind Claude Opus 5.5 at 58, all at their maximum reasoning settings; Muse Wonder scores 52. Those are the figures Meta's table cites. Komposite found no other independent evaluation published by Monday evening, and none of the coding or legal results above has been reproduced by a party Meta did not choose.`,
    `Wang's account of the price was that the API would be "meaningfully below" leading models from OpenAI and Anthropic, CNBC reported. Against list prices, that depends on the comparison. Muse Wonder's $4 and $20 are, by our arithmetic, 60 per cent below the $10 and $50 that ${L(M_OAI, "OpenAI charges")} for GPT-6 Astra and that ${L(M_ANTH, "Anthropic charges")} for Claude Fable 5.1. They are identical to Anthropic's price for Claude Opus 5.5, down to the $0.20 cached-input rate, and double OpenAI's $2 and $10 for GPT-6 Sol. Token use matters too: Artificial Analysis put the cost of one of its index tasks at $4.52 for Muse Wonder, against $3.26 for GPT-6 Astra and $5.98 for Opus 5.5.`,
    `For enterprises, the data terms deserve a reading. ${L(M_SUBS, "Meta's documentation")} says Muse Code subscriptions "default to Contributor mode", in which "you get more usage from your plan in exchange for letting Meta use your content to train future Meta models". It can be switched off, after which future content is not used for training, and both new models work in either mode. Meta's ${L(M_CODE, "Muse Code pricing")} lists cheaper contributor rates for its older Spark models, marked "Used to improve our products"; it lists no contributor rate for Muse Wonder on the API.`,
    `The security disclosures are partial. Meta says Muse Wonder has its "strongest safeguards to date" against chemical, biological, radiological, nuclear and cyber misuse, but its full safety report is promised only "soon". The model card says that without mitigations, "we do not rule out the model reaching this threshold in the Chemical &amp; Biological domain", meaning Meta's high-risk level, and that classifiers were added in response. CNBC reported that some Muse users have complained the agent accessed personal messages without authorisation, which Meta has disputed. "I think there are certainly instances users have authorized various communications or whatnot earlier in a conversation, and then may have forgotten about that," Wang said.`,
    `Wang described the training goal in terms of persistence. "When you do real-world tasks, you're going to get roadblocks and you're going to get things that come up or various setbacks," he told CNBC. "We specifically tried to train the model to be able to try other approaches instead of stalling and then checking back in with the user at any time." Meta calls this Active Focus, and pairs it with Active Memory, the ability to carry context about a user across conversations.`,
    `Investors welcomed the release. Meta's shares rose about 4 per cent in afternoon trading, Reuters reported, and closed at $742.96, up 3.4 per cent on Friday's close by our arithmetic from Yahoo Finance data. The release puts Meta in the same market for developers and coding seats in which OpenAI and Anthropic sell. Whether it takes business from them cannot yet be measured: Meta has published no usage figures for the API or Muse Code, and the cheapest route to its strongest model is a $50 subscription rather than a metered key.`,
    `Komposite reported last week on <a href="/ai/the-agent-maker-meta-had-to-give-back/">Manus, the agent start-up whose sale to Meta was unwound</a> on Beijing's orders, and last month on <a href="/ai/thirty-dollars-and-then-the-meter/">how Microsoft meters frontier models from OpenAI and Anthropic</a> on top of a seat licence. As we noted in September, <a href="/ai/the-price-fell-and-the-bill-rose/">the cost of an agent task can vary widely between runs</a>, which is why a per-token price is only the start of a comparison.`
  ]
}),

];
