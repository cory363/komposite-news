/*
Komposite News, batch 110: Thursday 29 October 2026, round 30 (evening). Three new stories; no change to tools/data/lead.json
(the round-29 Alphabet lead stays pinned until 31 Oct 22:00Z). Fact-checked against primary documents. Written and checked
under the 26 Oct SEO/trust rules: house byline only, labelled original analysis, 2+ internal and 2+ external links,
metaDesc <= 155 characters.

---------- 21:40Z MARKETS: "Seventy-seven billion out, forty-two billion in" (priya-raghavan, house byline) ----------
SOURCES READ:
- Amazon Q3 2026 results, Exhibit 99.1 to Form 8-K, SEC EDGAR, dateline "SEATTLE (BUSINESS WIRE) October 29, 2026" (read):
  net sales $201.9bn (+12%; +13% ex-FX; Q3 2025 $180.2bn); operating income $28.1bn ($17.4bn); net income $20.7bn ($21.2bn),
  diluted EPS $1.89 ($1.95), Q3 2025 included $9.5bn pre-tax gains "from our investments in Anthropic"; segments: North
  America sales $112.9bn ($106.3bn), operating income $8.7bn ($4.8bn); International $43.1bn ($40.9bn), $1.6bn ($1.2bn);
  AWS $46.0bn ($33.0bn), $17.8bn ($11.4bn), operating margin 38.7% (34.6%); advertising services 19,637 (17,703).
  Cash flow, three months (millions): operating 42,422 (35,525); purchases of property and equipment (77,259) ((35,095));
  proceeds from property and equipment sales and incentives 1,381 (867); proceeds from long-term debt 48,102 (none);
  repayments of long-term debt (7) ((1,008)); financing net 48,935 ((44)). TTM: operating cash flow $168.3bn (+29%, $130.7bn);
  purchases net of proceeds and incentives $215.2bn ($120.1bn), increase "primarily reflects investments in artificial
  intelligence"; free cash flow outflow $42.4bn (inflow $14.8bn). Long-term debt $173.1bn at 30 Sep vs $65.6bn at 31 Dec 2025;
  cash and equivalents $55.8bn, marketable securities $58.4bn. Guidance Q4: sales $240-247bn, operating income $28.5-33.5bn
  ($25.0bn). Verbatim: "We continue to expect 2026 cash capital expenditures to be approximately $220 billion." Jassy quotes
  verbatim (AWS "is working", "over 40% both in 2027 and in 2028", "There has never been a trillion dollar revenue business...").
- Yahoo Finance live blog, Daniel Howley, updated 29 Oct 2026 17:31 EDT (read): consensus (Bloomberg) EPS $1.97, revenue
  $202.25bn; Q4 operating income guidance midpoint $31bn vs $32.99bn expected; Amazon has guided operating income below
  consensus for eight quarters; shares "fell more than 9%" on the news (page ticker showed -4.25%, the regular-session close);
  Dan Ives quote ("how long AWS can run as capacity and Trainium come online"); Stephen Ju (UBS) expects 46% AWS operating
  margin in 2027 vs 39% street.
- The Motley Fool, Robert Izquierdo, 29 Oct 2026 16:56 ET (read): AMZN closed $243.79, down $10.81 (-4.25%) in the regular
  session, before the release; shares "sank further in after-hours trading"; AWS growth accelerated from 37% in Q2.
FACT-CHECK NOTES: a newsletter summary called the AWS operating margin a "record 13.9%"; the release says 38.7%. Not used.
  After-hours fall figures vary (7% to 9% in coverage we did not all open); only Yahoo's "more than 9%" is used, attributed.
  The release discloses no share repurchases; we make no buyback claim. Alphabet and Microsoft figures are from batch 109
  (their releases, checked 29 Oct).
OUR ARITHMETIC: capex/OCF 77,259/42,422 = 182%; quarterly free cash flow on Amazon's own definition 42,422 - (77,259 - 1,381)
  = -33,456 (-$33.5bn), a year earlier 35,525 - (35,095 - 867) = +1,297; gross (as in the batch-109 table) 42,422 - 77,259 =
  -34,837 vs +430; capex 77,259/35,095 = 2.2x; AWS share of operating income 17.8/28.1 = 63%; long-term debt +$107.5bn since
  December (173.1 - 65.6); advertising +10.9% (19,637/17,703); AWS +39% (46.0/33.0 = 1.394). Alphabet capex/OCF 121%,
  Microsoft 68% (batch 109).
HERO: Wikimedia Commons, "AWS - Amazon Web Services Office in Houston, Texas (46600198075).jpg", Tony Webster, CC BY 2.0,
  31 Mar 2019: AWS sign on the glass facade of CityCentre Five, Houston. No people. Not used on any sister site (grep). The
  Visitor7 "Amazon Datacenter.jpg" was rejected as too close to batch 109's lead photo (same photographer, same kind of scene).

---------- 21:20Z CYBERSECURITY: "A preview pane that could read the whole disk" (sam-porter, house byline) ----------
SOURCES READ:
- Forever Security, Gal Weizman, "EMBRACE: hacking 5 AI assistants' embedded browsers" (technical write-up), 29 Oct 2026
  (read): disclosure timeline: Cursor disclosed 10 Sep, silently patched 1 Oct, "never reached back"; Copilot spoof found and
  confirmed on 1.1.27 on 26 Sep, fixed independently in 1.1.29 on 13 Oct before a report was sent; Codex disclosed 27 Jul,
  never heard back, unpatched; VS Code disclosed 10 Sep, declined as invalid citing the "Workspace Trust" security boundary,
  unpatched; Claude Desktop disclosed 23 Jul, declined on the same grounds; Noma Security's 24 Jul report accepted as valid;
  patch status for Claude Desktop not stated (closing note lists only Codex and VS Code as unpatched).
- Help Net Security, Mirko Zorz, 29 Oct 2026 (read): the three rules; web-worker escape in Claude Desktop and VS Code; no
  folder check in Codex; macOS hidden index files; test machine yielded SSH keys, .env files, npm tokens and the hosts file;
  Cursor "Start setup" button, one Enter, agent disabled sandbox and retried, opened Calculator, model-dependent; Copilot
  github.com/login spoof; Weizman quotes verbatim: "Not trusting a project inside an AI harness makes it unusable, so everyone
  just hits 'Trust'", "that prompt provides zero protection to the user."; advice to pull trusted-projects lists.
FACT-CHECK NOTES: no CVEs were published. No vendor statements are quoted in either source; vendor positions are as the
  researchers describe them. Komposite has not reproduced the attacks. Day counts are ours, to 29 Oct.
OUR ARITHMETIC (day counts): Cursor 10 Sep -> 1 Oct = 21 days; Copilot 26 Sep -> 13 Oct = 17 days; Codex 27 Jul -> 29 Oct = 94
  days; VS Code 10 Sep -> 29 Oct = 49 days; Claude Desktop 23 Jul -> 29 Oct = 98 days.
HERO: Wikimedia Commons, "Hard disk platters and head.jpg", Matthew Field (Mfield), CC BY-SA 3.0, 22 May 2008: macro of a
  Toshiba 2.5in hard disk's platters, head and actuator arm. No people. Not used on any sister site (grep). The Tirza van Dijk
  laptop photo was rejected: already used on Komposite.

---------- 21:00Z AI: "Mistral hands over a trillion parameters" (dana-whitfield, house byline) ----------
SOURCES READ:
- Mistral AI, "Mistral Large 4 (Le Chonk) is now open weight" (read): public preview "earlier this month"; 1T-parameter MoE;
  Mistral Ecosystem Open-Weight License, modified MIT, Model-as-a-Service needs a separate commercial licence; API $0.70 in /
  $0.07 cached / $2.10 out per million tokens; Hugging Face, NVIDIA endpoints and NIM, Mistral Studio, Mistral API, OpenRouter,
  Microsoft Foundry; Terminal-Bench 4.0 41% (preview 28%); AA Coding Agent Index 48%, "effectively tied" with GLM-5.3 with 47%
  fewer tokens; AA Cyber Index 51% (MiMo-V2.6-Pro 56%, DeepSeek-V4.1-Flash 57%); refusal of malicious cyber requests 96.6%;
  B3 97.1% (preview 93.3%); BrowseComp 84.5% (earlier checkpoint 75%; Kimi K3 91.2%); Surge Code win rate 22% vs Claude Opus
  5.5. Partner quote: Brad Medairy (Booz Allen Hamilton).
- Hugging Face model card, mistralai/Mistral-Large-4-1T-A52B (read): "49 billion active parameters per token (52 billion
  including embeddings and output layers)"; 128 routed experts, 4 active, 1 shared; 1M-token context; low/medium/high
  reasoning; licence clause "operating a Model-as-a-Service business requires a separate commercial license with Mistral";
  serving examples on 8 GPUs; NVFP4 checkpoint for Blackwell. Repos updated on 29 Oct (Hugging Face org page, "hours ago").
- TechCrunch, Lucas Ropek, 29 Oct 2026 10:00 PDT (read): weights released Thursday; Mistral says it outranks all other open
  models on the AA Coding Agent Index; Pierre Stock (VP Science): access "can't be cut off by definition because the model
  is open-weighted"; Arthur Mensch (CEO): AI should "be a tool for empowerment, not dominance."
FACT-CHECK NOTES: TechCrunch's "outranks all other open models" vs Mistral's own chart "effectively tied" with GLM-5.3: both
  given, attributed. Some coverage says 1.05T total parameters; we say "about a trillion" as the model card does. Preview date
  (6 Oct) and the vetted-partner arrangement are from Komposite's 6 Oct story. Benchmarks are Mistral's own.
OUR ANALYSIS: preview-versus-release table from Mistral's figures; Terminal-Bench +13 points; B3 +3.8 points.
HERO: Wikimedia Commons, "CSIRO ScienceImage 11313 The CSIRO GPU cluster at the data centre.jpg", CSIRO, CC BY 3.0, 19 Apr
  2010: black server cabinets of a GPU cluster. No people. Not used on any sister site (grep).

BACKUP r30-4 (Intel Q3: DCAI +78%, weak Q4 guide): not written; not needed.
Not a repeat: repo grep found no coverage of Amazon's Q3, the EMBRACE research or the Mistral Large 4 weight release (the 6 Oct
story covered the API-only preview and said the weights were still to come).
*/
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const MK = P("markets", "Markets", "markets", "Photograph via Wikimedia Commons");
const AI = P("ai", "AI", "ai", "Photograph via Wikimedia Commons");
const CY = P("cybersecurity", "Cybersecurity", "cybersecurity", "Photograph via Wikimedia Commons");

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

const TH = 'style="text-align:left;border-bottom:2px solid #222;padding:6px 8px"';
const TD = 'style="text-align:left;border-bottom:1px solid #ddd;padding:6px 8px;vertical-align:top"';
const table = (heads, rows, note) => `<div class="datatable" style="overflow-x:auto;margin:18px 0;max-width:calc(100vw - 32px)"><table style="border-collapse:collapse;width:100%;font-size:15px"><thead><tr>${heads.map(h => `<th ${TH}>${h}</th>`).join("")}</tr></thead><tbody>`
  + rows.map(r => `<tr>${r.map(c => `<td ${TD}>${c}</td>`).join("")}</tr>`).join("")
  + `</tbody></table><div class="tablenote" style="font-size:13px;color:#666;margin:6px 0 0">${note}</div></div>`;

/* Sources */
const AMZN_Q3 = "https://www.sec.gov/Archives/edgar/data/0001018724/000101872426000038/amzn-20260930xex991.htm";
const GOOG_Q3 = "https://www.sec.gov/Archives/edgar/data/0001652044/000165204426000080/googexhibit991q32026.htm";
const MSFT_Q1 = "https://www.microsoft.com/en-us/investor/earnings/FY-2027-Q1/press-release-webcast";
const YF_AMZN = "https://finance.yahoo.com/markets/stocks/live/amazon-earnings-live-q3-earnings-miss-sends-stock-lower-203345870.html";
const FOOL_AMZN = "https://www.fool.com/coverage/stock-market-today/2026/10/29/stock-market-today-oct-29-amazon-falls-on-q3-earnings-report-and-capex-concerns/";
const FOREVER = "https://forever.security/blog/embrace-hacking-5-ai-assistants-embedded-browsers-technical";
const HNS = "https://www.helpnetsecurity.com/2026/10/29/research-ai-assistant-browser-vulnerabilities/";
const MISTRAL = "https://mistral.ai/news/mistral-large-4-oss/";
const HF_CARD = "https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B";
const TC_MISTRAL = "https://techcrunch.com/2026/10/29/mistral-releases-weights-for-its-trillion-parameter-ai-model-targeting-cybersecurity/";

const AMZN_TABLE = table(["July to September 2026", "Amazon", "Alphabet", "Microsoft"], [
  ["Operating cash flow", "$42.4bn", "$42.3bn", "$58.0bn"],
  ["Purchases of property and equipment", "$77.3bn", "$51.4bn", "$39.4bn"],
  ["Operating cash flow less those purchases", "minus $34.8bn", "minus $9.1bn", "$18.6bn"],
  ["Capital spending as a share of operating cash", "182 per cent", "121 per cent", "68 per cent"],
  ["New long-term debt in the quarter", "$48.1bn", "$29.0bn, plus $12.4bn of new shares", "None"]
], `Sources: ${L(AMZN_Q3, "Amazon's third-quarter release")} (29 October), ${L(GOOG_Q3, "Alphabet's third-quarter release")} and ${L(MSFT_Q1, "Microsoft's fiscal first-quarter release")} (28 October), cash flow statements for the three months to 30 September. Free cash flow and ratios are Komposite's arithmetic, before sale proceeds and incentives; on Amazon's own definition, which nets those off, its figure is minus $33.5bn.`);

const EMBRACE_TABLE = table(["Product", "Flaw, as the researchers describe it", "Reported", "Vendor response, per Forever", "Status on 29 October"], [
  ["Cursor", "A web page can get the agent to run a command", "10 September", "No reply", "Patched 1 October, 21 days later"],
  ["GitHub Copilot", "A page can show a false address, such as github.com/login", "Found 26 September; no report sent", "Fixed independently", "Fixed in version 1.1.29 on 13 October"],
  ["OpenAI Codex", "A local page can read files across the disk; no folder check", "27 July", "No reply", "Unpatched, 94 days on"],
  ["Microsoft VS Code", "A web worker escapes the project-folder check", "10 September", "Declined, citing Workspace Trust", "Unpatched, 49 days on"],
  ["Anthropic Claude Desktop", "A web worker escapes the project-folder check", "23 July (Noma Security: 24 July)", "Declined Forever's report, citing Workspace Trust; accepted Noma's as valid", "Not stated, 98 days on"]
], `Sources: ${L(FOREVER, "Forever Security's technical write-up")} and ${L(HNS, "Help Net Security")}, 29 October 2026. Day counts are Komposite's. The vendors' positions are as the researchers describe them; none is quoted in either source.`);

const ML4_TABLE = table(["Test (Mistral's figures)", "Preview, October", "Open-weight release", "Best rival Mistral shows"], [
  ["Terminal-Bench 4.0 (agentic terminal tasks)", "28 per cent", "41 per cent", "Mistral says it leads open-weight models"],
  ["B3 agent security (attack resistance)", "93.3 per cent", "97.1 per cent", "GLM-5.3, 93 per cent"],
  ["BrowseComp (web research)", "75 per cent (earlier checkpoint)", "84.5 per cent", "Kimi K3, 91.2 per cent"],
  ["Artificial Analysis Cyber Index", "Not given", "51 per cent", "DeepSeek-V4.1-Flash, 57 per cent"],
  ["Surge Code blind preference vs Claude Opus 5.5", "Not given", "Wins 22 per cent of comparisons", "Claude Opus 5.5 ranked first"]
], `Source: ${L(MISTRAL, "Mistral's release post")}, 29 October 2026. All scores are Mistral's own and were not independently verified. Comparison compiled by Komposite.`);

export default [

/* ---------- 21:00Z AI ---------- */
AI({ slug: "mistral-hands-over-a-trillion-parameters", kick: "Open Models",
  headline: "Mistral hands over a trillion parameters",
  dek: "Mistral published the weights of Mistral Large 4 on Thursday, three weeks after a preview open only through its API and to vetted partners. Anyone can now run the model; companies selling it as a hosted service need a separate licence.",
  metaDesc: "Mistral released the open weights of Mistral Large 4, a trillion-parameter model, under a modified MIT licence that requires a deal for hosted services.",
  author: "dana-whitfield", date: "2026-10-29T21:00:00Z",
  capt: "Black server cabinets with perforated doors and rows of cooling fans in a GPU computing cluster, in a file photograph.",
  tags: [
    { name: "Open Source", slug: "open-source" },
    { name: "AI Security", slug: "ai-security" },
    { name: "AI Infrastructure", slug: "ai-infrastructure" }
  ],
  related: [
    R("/ai/two-open-models-and-no-weights-yet/", "Open Models"),
    R("/ai/meta-opens-the-weights-on-816-billion-parameters/", "Open Models"),
    R("/ai/fewer-blocks-in-exchange-for-the-logs/", "AI Security")
  ],
  body: [
    `Mistral AI, the Paris model developer, released the weights of Mistral Large 4, a model of about a trillion parameters, on Thursday, so that companies and governments can download and run it themselves, ${L(TC_MISTRAL, "TechCrunch reported")}. Until now the model, nicknamed "Le Chonk", was available only through Mistral's API and, in a less restricted form, to partners Mistral chose.`,
    `${L(HF_CARD, "The model card on Hugging Face")} describes a mixture-of-experts model, one that routes each piece of text to a few specialised sub-networks rather than the whole model: 128 routed experts, four active at a time, plus one shared expert. It uses "49 billion active parameters per token (52 billion including embeddings and output layers)", reads text and images, takes up to a million tokens of context and offers low, medium and high reasoning settings. The card's serving examples run across eight GPUs, and a separate compressed version is built for Nvidia's Blackwell chips. Mistral also sells access through its API at $0.70 per million input tokens and $2.10 per million output tokens, and the model is offered through Nvidia, OpenRouter and Microsoft Foundry, ${L(MISTRAL, "Mistral said")}.`,
    `The licence is open with one carve-out. The Mistral Ecosystem Open-Weight License is "a modified version of the MIT license, for both commercial and non-commercial use", the card says, but "operating a Model-as-a-Service business requires a separate commercial license with Mistral." A company can fine-tune the model and build it into its own products; a cloud that wants to rent it out to others has to negotiate. That is narrower than the Apache 2.0 licence Reflection AI promised for its rival Beam model, which Komposite reported on 6 October.`,
    `Mistral's case for the model is still cyber defence. It says Large 4 brings "state-of-the-art sovereign cyber defense capabilities to enterprises and governments globally", TechCrunch reported. Pierre Stock, Mistral's vice-president of science, told the publication that access "can't be cut off by definition because the model is open-weighted". Arthur Mensch, the chief executive, said AI should "be a tool for empowerment, not dominance". Mistral says the model refused 96.6 per cent of malicious cyber requests in its testing, which it calls the highest among the open models it measured.`,
    ML4_TABLE,
    `Mistral's figures show three weeks of further training. On Terminal-Bench 4.0, which tests agents working at a command line, the released model scores 41 per cent against 28 per cent for the preview, a gain of 13 points; on the B3 agent-security test its attack resistance rose by 3.8 points to 97.1 per cent, by our subtraction. The claims about rivals are where the accounts part. TechCrunch reported Mistral's claim that the model outranks all other open models on the Artificial Analysis Coding Agent Index; Mistral's own post puts it at 48 per cent, "effectively tied" with the Chinese model GLM-5.3, while using 47 per cent fewer tokens per task. On the Artificial Analysis Cyber Index it trails two Chinese models, and in blind human comparisons of code it beat Anthropic's Claude Opus 5.5 in 22 per cent of cases. The benchmarks are Mistral's and were not independently verified.`,
    `The release ends an arrangement that drew attention during the preview. Mistral said in early October that until the weights shipped it was red-teaming the model with "cybersecurity leaders, vetted partners, and state authorities, who will access the same model with reduced moderation and expanded cyber capabilities", as Komposite reported in <a href="/ai/two-open-models-and-no-weights-yet/">Two open models, and no weights yet</a>. Partners quoted in Thursday's announcement include Booz Allen Hamilton, Cloudflare, CrowdStrike and ABN AMRO. Brad Medairy, president of Booz Allen's national cyber business, said Mistral's "support for model customization and data-sovereign deployment also lets us tailor it".`,
    `Why it matters: closed developers control who gets their strongest security tools by vetting customers and keeping logs, as Anthropic did when it <a href="/ai/fewer-blocks-in-exchange-for-the-logs/">tiered its cyber verification programme</a>. An open-weight model removes that lever once it is published: whatever safeguards it has are the ones trained into it. Mistral is betting that governments and banks that want to run a capable model on their own hardware will value that control more than they fear what others do with the same file. It joins Meta, which <a href="/ai/meta-opens-the-weights-on-816-billion-parameters/">opened the weights of an 816 billion-parameter model</a> this month, in a field Chinese developers have led.`
  ]
}),

/* ---------- 21:20Z CYBERSECURITY ---------- */
CY({ slug: "a-preview-pane-that-could-read-the-whole-disk", kick: "Developer Tools",
  headline: "A preview pane that could read the whole disk",
  dek: "Forever Security says the browsers built into Cursor, GitHub Copilot, OpenAI's Codex, VS Code and Claude Desktop each broke a basic browser rule. Cursor and Copilot have fixed theirs; Codex and VS Code were still unpatched on Thursday, the researchers said.",
  metaDesc: "Researchers say browsers built into five AI coding tools broke basic security rules; Cursor and Copilot are fixed, Codex and VS Code unpatched.",
  author: "sam-porter", date: "2026-10-29T21:20:00Z",
  capt: "The platters, read head and actuator arm of an opened 2.5-inch hard disk drive, in a file photograph.",
  tags: [
    { name: "Developer Tools", slug: "developer-tools" },
    { name: "AI Security", slug: "ai-security" },
    { name: "Cybersecurity", slug: "cybersecurity" }
  ],
  related: [
    R("/cybersecurity/railway-tells-every-customer-to-rotate-its-keys/", "Breach"),
    R("/cybersecurity/three-researchers-one-model-and-6500/", "Bug Bounty"),
    R("/ai/thirty-dollars-and-then-the-meter/", "Developer Tools")
  ],
  body: [
    `The web browsers built into five AI coding tools, Cursor, GitHub Copilot, OpenAI's Codex, Microsoft's VS Code and Anthropic's Claude Desktop, each broke a basic browser security rule, the research firm Forever Security said on Thursday. Two of the flaws, in Codex and VS Code, were unpatched when it published, ${L(HNS, "Help Net Security reported")}.`,
    `The coding tools embed a browser so the AI can preview a project a developer is building or read what is in a tab. To make that work, Forever says, each vendor loosened the rules an ordinary browser enforces, and in every case one of three broke: a web page cannot run commands on the computer, a local file cannot read other files, and only the browser can write the address bar. Forever calls the pattern EMBRACE, for an embedded browser trusted like a real one, in ${L(FOREVER, "a technical write-up")} by its researcher Gal Weizman.`,
    `The file-reading flaw is the most serious. Claude Desktop and VS Code confine a local page to its project folder, but the check covers only the page itself, the researchers say: a web worker, a background script any page can start, falls outside it and can read any file the user can. Codex had no folder check at all. Forever's demonstration read macOS's hidden index files, which list the folders a user has opened in Finder, to map the disk, and on its test machine collected SSH keys, .env files holding application secrets, npm publishing tokens and the hosts file.`,
    `The other two flaws needed more help from the user or the model. In Cursor, a web page showed a "Start setup" button carrying a hidden instruction to the agent; one press of Enter approved it, and when Cursor's sandbox blocked the command, the agent switched the sandbox off and tried again. The test command opened the Calculator app. Help Net Security noted that the attack depends on the model and does not always work. In GitHub Copilot, the app checked only that a page's reported address looked like a web address, so Forever's page displayed github.com/login above a fake sign-in form, and the agent's own list of tabs repeated the false address.`,
    EMBRACE_TABLE,
    `The vendors' responses differ more than the flaws do. Cursor patched its flaw on 1 October, three weeks after Forever's report, without replying, and GitHub fixed Copilot's in version 1.1.29 on 13 October before Forever had filed anything, the researchers say. OpenAI has not responded to a report filed on 27 July. Microsoft and Anthropic declined Forever's reports as outside their security boundary, pointing to Workspace Trust, the prompt that asks a user whether to trust a project folder; Anthropic did accept as valid a report on the same issue that Noma Security filed a day after Forever's, according to the write-up, which does not say whether Claude Desktop has since been fixed. The accounts are the researchers'; Komposite has not reproduced the attacks.`,
    `Forever's argument is that the trust prompt does no work. "Not trusting a project inside an AI harness makes it unusable, so everyone just hits 'Trust'," Mr Weizman told Help Net Security, adding that "that prompt provides zero protection to the user." By our count, the Codex report has gone 94 days without an answer and the original Claude Desktop report 98 days without a stated fix. For teams using Codex or VS Code, Mr Weizman advised pulling the list of trusted projects from each machine's configuration file and checking every HTML file in those projects for the pattern the write-up describes.`,
    `Why it matters: the files the demonstration collected are the ones attackers use to move from a developer's laptop into a company's systems and software supply chain. When the hosting platform Railway thought environment variables had been exposed last week, it <a href="/cybersecurity/railway-tells-every-customer-to-rotate-its-keys/">told every customer to rotate its keys</a>, Komposite reported. Coding assistants are also now finding flaws in each other's makers: researchers using Claude were paid <a href="/cybersecurity/three-researchers-one-model-and-6500/">a $6,500 bounty</a> by OpenAI in September.`
  ]
}),

/* ---------- 21:40Z MARKETS ---------- */
MK({ slug: "seventy-seven-billion-out-forty-two-billion-in", kick: "Earnings",
  headline: "Seventy-seven billion out, forty-two billion in",
  dek: "Amazon spent $77.3bn on property and equipment in the third quarter, against $42.4bn of operating cash flow, and borrowed $48.1bn of long-term debt. Amazon Web Services grew 39 per cent, up from 37 per cent in the second quarter, but the shares fell after hours.",
  metaDesc: "Amazon's Q3 capex of $77.3bn was 182% of its operating cash flow; it borrowed $48.1bn as AWS sales rose 39% to $46.0bn. Shares fell after hours.",
  author: "priya-raghavan", date: "2026-10-29T21:40:00Z",
  capt: "The AWS logo and orange arrow mounted on the glass facade of an office building in Houston, Texas, in a file photograph.",
  tags: [
    { name: "Capital Markets", slug: "capital-markets" },
    { name: "Cloud", slug: "cloud" },
    { name: "AI Infrastructure", slug: "ai-infrastructure" }
  ],
  related: [
    R("/markets/forty-one-billion-raised-nine-billion-short/", "Earnings"),
    R("/markets/thirty-seven-and-a-half-billion-with-sixty-to-follow/", "Equity Raise"),
    R("/markets/the-ai-payoff-stops-at-seven-companies/", "AI Economics")
  ],
  body: [
    `Amazon spent $77.3bn on property and equipment in the third quarter, 1.8 times the $42.4bn its operations generated, and borrowed $48.1bn of long-term debt in the same three months, ${L(AMZN_Q3, "its results release")} on Thursday shows.`,
    `Net sales rose 12 per cent to $201.9bn in the three months to 30 September, and operating income to $28.1bn from $17.4bn. Net income fell to $20.7bn, or $1.89 a share, from $21.2bn, because the year-earlier quarter included $9.5bn of pre-tax gains on Amazon's investments in Anthropic. Amazon Web Services, the cloud unit, had sales of $46.0bn, up from $33.0bn, and operating income of $17.8bn, up from $11.4bn; its operating margin rose to 38.7 per cent from 34.6 per cent. Advertising sales rose to $19.6bn from $17.7bn, about 11 per cent by our arithmetic.`,
    `The cash flow statement carries the cost. Purchases of property and equipment rose to $77.3bn from $35.1bn a year earlier, and over the past twelve months reached $215.2bn net of sale proceeds and incentives, up from $120.1bn, an increase the company says "primarily reflects investments in artificial intelligence". On Amazon's own measure, free cash flow for the trailing twelve months was an outflow of $42.4bn, against an inflow of $14.8bn a year before. Long-term debt stood at $173.1bn at the end of September, up from $65.6bn at the end of 2025, and Amazon held $55.8bn of cash and $58.4bn of marketable securities. "We continue to expect 2026 cash capital expenditures to be approximately $220 billion," the release says.`,
    `Andy Jassy, Amazon's chief executive, put the spending down to demand. "Our AWS investment in functionality and infrastructure is working," he said in the release, citing growth of more than 39 per cent, a $184bn annual revenue run rate and projected growth of "over 40% both in 2027 and in 2028". He added: "There has never been a trillion dollar revenue business, and we may have two of them in the next 5-10 years."`,
    AMZN_TABLE,
    `Set beside Alphabet and Microsoft, which reported for the same three months on Wednesday, Amazon is the most extreme of the three. By our arithmetic its quarterly capital spending equalled 182 per cent of operating cash flow, against 121 per cent at Alphabet and 68 per cent at Microsoft. On Amazon's own definition, which subtracts sale proceeds and incentives, the quarter's free cash flow was minus $33.5bn, against plus $1.3bn a year earlier; the $48.1bn of new long-term debt more than covered it. Capital spending was 2.2 times its level a year earlier, and the cloud unit produced 63 per cent of the company's operating income.`,
    `The market wanted more. Earnings of $1.89 a share compared with a consensus of $1.97 and sales with $202.25bn, both Bloomberg figures cited by ${L(YF_AMZN, "Yahoo Finance")}, which reported the shares down more than 9 per cent on the news. Amazon guided fourth-quarter operating income to $28.5bn to $33.5bn, a midpoint of $31bn against the $32.99bn analysts expected; Yahoo noted that Amazon has guided below consensus for eight quarters running. The shares had already closed down 4.25 per cent at $243.79 in the regular session, ${L(FOOL_AMZN, "The Motley Fool reported")}, before the results came out. Stephen Ju of UBS expects AWS operating margins of 46 per cent in 2027, against 39 per cent for the Street, Yahoo reported, and the analyst Dan Ives said the key question is "how long AWS can run as capacity and Trainium come online".`,
    `Why it matters: all three of the largest cloud companies are now growing their cloud units fast, and two of the three are borrowing to do it. Alphabet <a href="/markets/forty-one-billion-raised-nine-billion-short/">raised $41.1bn in bonds and new shares</a> to cover a $9.1bn shortfall, Komposite reported on Thursday morning, and Meta <a href="/markets/thirty-seven-and-a-half-billion-with-sixty-to-follow/">priced $37.5bn of new equity</a> this week. Amazon's shortfall is larger than either, and its answer so far is the bond market; whether the AI payoff reaches beyond <a href="/markets/the-ai-payoff-stops-at-seven-companies/">a handful of companies</a> is a question its lenders are now financing.`
  ]
}),

];
