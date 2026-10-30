/*
Komposite News, batch 111: Friday 30 October 2026, round 31. Three new stories. tools/data/lead.json now pins the Binance
story (replacing the round-29 Alphabet pin, which moves down the normal way). Fact-checked against the sources listed below.
Written and checked under the 26 Oct SEO/trust rules: house byline only, labelled original analysis, 2+ internal and 2+
external links, metaDesc <= 155 characters.

---------- 14:20Z CRYPTO (LEAD): "Six billion dollars out of Binance's hot wallets" (marcus-oyelaran, house byline) ----------
SOURCES READ:
- Binance, "Security Incident Update (2026-10-30)", support announcement, published 2026-10-30 02:23, updated 11:36 (read):
  initial investigation suggests a compromised DevOps engineer's laptop let an attacker reach a service container and submit
  unauthorised withdrawal transactions; "We have found no evidence of any wallet private key leak."; estimated impact about
  $6.3bn; about $3bn frozen on-chain with partners; "Binance will cover all losses from the SAFU fund and the company's
  funds."; "User funds are safe."; withdrawals temporarily suspended while security checks are completed, no resumption
  date; deposits unaffected (later clarification); affected address authorisation revoked; law enforcement engaged;
  post-mortem and an updated Proof of Reserves to follow.
- TRM Labs, "North Korea Steals USD 6.36 Billion From Binance in the Largest Hack in History", TRM Team, 29 Oct 2026 (page
  metadata 30 Oct 02:10 UTC, modified 02:38 UTC; on-chain data to 30 Oct 00:30 UTC) (read): ~$6.36bn across ten chains,
  mostly in ~20 minutes from 20:05 UTC on 29 Oct; ~4x Bybit's $1.5bn (Feb 2025); TraderTraitor (North Korea), high
  confidence; chain breakdown (Ethereum ~$3.79bn; 18,270 BTC ~$1.47bn; Tron ~$628m; 233.46m XRP ~$296m; 970,500 SOL ~$96m;
  Arbitrum/Optimism/Base ~$39m; Avalanche ~$28m; Polygon ~$10m); freezes (Tether ~$1.77bn USDT, first 971.1m at 21:01;
  Circle ~$825m USDC, 823m at 21:04 with law enforcement; Ripple 40.5m RLUSD; World Liberty Financial 27.8m USD1; Arbitrum
  Security Council forced transfers of 8,426 ETH and 74.6m ARB, ~$30m, at 00:08 on 30 Oct); Binance stated at 23:35 that
  $2.54bn was verified frozen, TRM counts ~$2.7bn by 00:30; attacker still controls ~$2.4bn incl. 420,000+ ETH and 18,270
  BTC; 50 pre-signed EIP-7702 authorisations over consecutive nonces on the Ethereum hot wallet; ~325m USDT sold via UniswapX
  and other intent contracts for ~122,300 ETH, implied ~$2,650/ETH vs ~$2,300-2,350 market, "a discount above 10%"; Binance
  has not published a root cause.
- TechCrunch, Zack Whittaker, 29 Oct 2026 15:27 PDT (read): Binance statement "aware of reports of a potential security
  issue and are actively investigating"; spokesperson Ross O'Leary: "temporarily suspended withdrawals on multiple networks
  following a security incident as a precautionary measure"; Changpeng Zhao no longer runs Binance, is its largest
  shareholder, posted that it had likely been hacked.
- Al Jazeera, John Power, 30 Oct 2026 (read): Binance says ~$6.3bn stolen; engineer's compromised laptop; Ari Redbord (TRM,
  global head of policy) "unprecedented", "watershed"; bitcoin fell about 5 per cent to below $77,000; Sean Foley (Macquarie
  University) "Any assets held at a centralised exchange are only as safe as the exchange itself."; TRM 2026 Crypto Crime
  Report: $2.87bn stolen in nearly 150 hacks in 2025.
- ABC News (Australia), Ange Lavoipierre, 30 Oct 2026 (read): Binance told ABC it had reserved over $6.34bn of company funds,
  $5bn of it in the same tokens affected; 30 to 40 tokens affected.
FACT-CHECK NOTES: TechCrunch wrote that Circle froze about $800m "in Tether"; Circle issues USDC and TRM's on-chain count is
  823m USDC frozen by Circle. We use TRM. ABC calls Zhao Binance's "founder and CEO"; he is not CEO (TechCrunch: he no longer
  runs it). Not used. Al Jazeera says Binance suspended "all deposits and withdrawals"; Binance's own update says deposits
  are unaffected. We use Binance. A Yahoo-hosted aggregator item gave a 48-hour resumption window; not in Binance's update,
  not used. Chainalysis attribution seen only in search snippets, not used. Bybit's loss is given as $1.4bn by TechCrunch and
  $1.5bn by TRM and Al Jazeera; we say "about $1.5bn". Binance's update timestamps carry no zone; we do not give clock times
  for it.
OUR ARITHMETIC: stablecoins taken 1,875 + 823 + 88.5 (Ethereum) + 612.7 (Tron USDT) = $3,399m, 53 per cent; 6.36 / 1.5 = 4.2x Bybit; 6.36 / 2.87 = 2.2x all of 2025's hack losses (TRM figures); freeze table sum 1,770
  + 825 + 40.5 + 27.8 + 30 = $2,693m, about $2.7bn, 42 per cent of $6.36bn; chain shares of $6.36bn: Ethereum 60%, Bitcoin
  23%, Tron 10%, XRP 5%, others 3% (rounded); implied discount (2,650 - 2,325) / 2,650 = about 12 per cent (TRM says "above 10%").
HERO: Wikimedia Commons, "Binance t-shirt and bag - 2022-07-09.jpg", Bretwa, CC BY-SA 4.0: a black Binance T-shirt and a
  yellow Binance tote bag on a white sheet. No people. Not used on any sister site (grep of ~/Sites).

---------- 14:00Z MARKETS: "Data centres up 78 per cent, PCs down 12" (priya-raghavan, house byline) ----------
SOURCES READ:
- Intel, "Intel Reports Third-Quarter 2026 Financial Results", Exhibit 99.1 to Form 8-K, SEC EDGAR, dateline "SANTA CLARA,
  Calif., October 29, 2026" (read): revenue $16.5bn (+21%; Q3 2025 $13.7bn); GAAP gross margin 43.0% (38.2%), non-GAAP 44.1%
  (40.0%); GAAP EPS $0.60 ($0.90), non-GAAP $0.52 ($0.23); CCPG $8.1bn (-5%), DCAI $7.3bn (+78%), Intel Foundry $6.7bn
  (+58%), All Other $0.7bn (-30%); operating cash flow $5.1bn, gross capex $4.2bn, adjusted free cash flow $1.6bn; Q4
  guidance revenue $15.0-16.0bn, GAAP gross margin 37.1%, non-GAAP 38.0%, GAAP EPS $0.10, non-GAAP $0.25. Quotes verbatim:
  Tan "Despite near-term headwinds across the PC industry, demand for our CPUs remains robust"; Tan "Our immediate priority
  is to unlock additional supply to meet extraordinary demand for our Xeon family"; Zinsner "we see the PC slowdown
  continuing at least through the first half of next year". Risk factors cite "current industry-wide substrate and memory
  shortages".
- Investing.com, earnings call transcript and summary, 29 Oct 2026 (read): consensus non-GAAP EPS $0.40, revenue $16.48bn;
  close $92.07, after hours $72.85 (-20.87%); Zinsner: "We expect the 2026 PC unit TAM to decline approximately 12%, with
  second-half units down more than 20%."; Fab 28 in Israel shut about two weeks, restart expected by end of week; Zinsner:
  "I think the current thinking is that we will have about a $300 million impact to the fourth quarter."; ~200 basis points
  of Q4 gross margin; Tan: "the unprecedented memory crunch"; server CPU industry units expected to grow more than 30% in
  2026 and 2027.
- Fox News live blog (Fox Business), updated 30 Oct 2026 10:29 EDT (read): Intel shares down more than 25% premarket Friday,
  about 28%; Tan: "The pace of this PC correction has accelerated over the last two months."; Gartner Q3 PC shipments -22.4%;
  Alphabet class A fell 12.64% on Thursday to $283.82 (WSJ figures), about $499.8bn of market value; Amazon about -7%
  premarket Friday; Nasdaq futures down more than 2%.
FACT-CHECK NOTES: Quartz/Bloomberg Q4 consensus (~$17bn revenue, 43 cents) seen only in a search snippet (Quartz page 403),
  not used. Friday's share move was still in progress at writing; both the after-hours and premarket figures are attributed.
  Segment revenues are not summed (Intel Foundry's figure includes work for Intel's own product groups).
OUR ARITHMETIC: Q4 revenue midpoint $15.5bn vs $16.5bn = -6.1%; non-GAAP gross margin 44.1% -> 38.0% = -6.1 points, of which
  Israel ~2 points per Zinsner; non-GAAP EPS 0.52 -> 0.25 = -52%; DCAI year-earlier 7.3 / 1.78 = ~$4.1bn; CCPG year-earlier
  8.1 / 0.95 = ~$8.5bn; DCAI is 44% of revenue (7.3 / 16.5); gross free cash flow 5.1 - 4.2 = $0.9bn vs Intel's adjusted $1.6bn;
  after-hours fall 92.07 - 72.85 = $19.22.
HERO: Wikimedia Commons, "Intel HQ exterior 1.JPG", BrokenSphere, CC BY-SA 3.0, 12 Jan 2010: the glass-and-panel headquarters
  at 2200 Mission College Boulevard, Santa Clara, with parked cars. No identifiable people. Not used on any sister site.

---------- 13:40Z CYBERSECURITY: "One operator, two hundred targets" (sam-porter, house byline) ----------
SOURCES READ:
- CrowdStrike, Counter Adversary Operations, "VAPOR PANDA Uses AI-Driven ARTEX to Scale a Global Espionage Campaign", 29 Oct
  2026 (read): OverWatch found the campaign; ARTEX agentic framework with DeepSeek plus an unconfirmed subscription commercial
  LLM; VAPOR PANDA China-nexus, active since 2021; separate from Microsoft's Storm-0940 ARTEX activity; started 17 Oct, 11-day
  window; 200+ organisations, at least 14 countries; post-exploitation confirmed at nine, BLOODALCHEMY deployed; spraying and
  credential scanning at 12+ more; ~1.4bn input tokens for planning agents in a single intrusion; victims by type (two Latin
  American foreign ministries, a Middle East interior ministry, telecoms in the US, Belgium and the Philippines, two US
  pharmaceutical organisations, a Greek government entity; one engagement on 19 US organisations); Chinese-language
  operator instructions labelled 【人类指令】 with CST timestamps; instruction to find machines "without Falcon"; unsigned
  SAML + XXE to cloud metadata; 2022 directory-export keys; VPN key from a May 2024 email leak; "highly likely" more
  China-nexus adoption over 12 months; recommendations (rotate keys incl. old backups, SAML validation, IMDSv2, ARTEX markers).
- NBC News, Kevin Collier, 29 Oct 2026 18:00 EDT (read, partly paywalled): 200+ organisations, 11 days, DeepSeek and other
  AI tools.
- Fox News live blog, 30 Oct 2026 (read): Adam Meyers, CrowdStrike SVP... page says "vice president of threat intelligence",
  told NBC News: "This is the first time we've seen them using an AI or agentic capability at scale."; targets included US
  semiconductor companies, defence organisations, think tanks.
FACT-CHECK NOTES: CrowdStrike gives no formal confidence rating and names no victims; we name none. No CVEs listed. Neither
  source carries a response from DeepSeek. The second model is unnamed by CrowdStrike; we do not guess. Meyers's title as
  Fox gives it.
OUR ARITHMETIC: 17 Oct + 11-day window = to 27 Oct; 200 / 11 = about 18 organisations a day; 9 / 200 = 4.5 per cent, fewer
  than one in twenty; 9 + 12 = 21 organisations with confirmed hands-on or credential activity, about one in ten.
HERO: Wikimedia Commons, "HK 石塘咀市政大廈 Shek Tong Tsui Municipal Services Building 電腦鍵盤 Chinese input keyboard
  Jan-2012.jpg", Poa Mosyuen, CC BY-SA 3.0, 28 Jan 2012: a public-terminal keyboard with Latin letters and Chinese input
  characters on the keys. No people. Not used on any sister site. Server-rack photos rejected: too many on Komposite already.

BACKUP r31-4 (Alphabet's 12.6 per cent one-day fall, ~$500bn): not written as a story; folded as context into the Intel piece.
Not a repeat: repo grep found no coverage of the Binance theft, Vapor Panda or Intel's Q3. The 22 Oct Storm-0940 story is a
  different ARTEX campaign (CrowdStrike says so) and is linked as context.
*/
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const CR = P("crypto", "Crypto", "crypto", "Photograph via Wikimedia Commons");
const MK = P("markets", "Markets", "markets", "Photograph via Wikimedia Commons");
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
const BNB_UPDATE = "https://www.binance.com/en/support/announcement/detail/c5a8729a97ac486d963784d96c5642d7";
const TRM = "https://www.trmlabs.com/resources/blog/north-korea-steals-usd-6-36-billion-from-binance-in-the-largest-hack-in-history";
const TC_BNB = "https://techcrunch.com/2026/10/29/binance-pauses-withdrawals-as-hackers-suspected-of-stealing-billions-in-crypto/";
const AJ_BNB = "https://www.aljazeera.com/economy/2026/10/30/binance-says-2-54bn-in-crypto-funds-frozen-amid-potential-security-issue";
const ABC_BNB = "https://www.abc.net.au/news/2026-10-30/largest-cryptocurrency-hack-billions-stolen-binance/107327732";
const INTC_Q3 = "https://www.sec.gov/Archives/edgar/data/0000050863/000005086326000188/q326earningsrelease.htm";
const INV_INTC = "https://www.investing.com/news/transcripts/earnings-call-transcript-intel-beats-q3-2026-estimates-but-stock-sinks-93CH-4985498";
const FOX_LIVE = "https://www.foxnews.com/live-news/ai-boom-google-stock-loss-wall-street-10-30-26";
const CS_VP = "https://www.crowdstrike.com/en-us/blog/vapor-panda-uses-artex-to-scale-global-campaign/";
const NBC_VP = "https://www.nbcnews.com/tech/security/china-linked-hackers-used-ai-target-200-organizations-crowdstrike-says-rcna606343";

const BNB_CHAINS = table(["Chain", "Taken, at the time of each transfer", "Share of the total"], [
  ["Ethereum (ether, USDT, USDC, RLUSD and 185 other tokens)", "About $3.79bn", "60 per cent"],
  ["Bitcoin (18,270 BTC)", "About $1.47bn", "23 per cent"],
  ["Tron (612.7m USDT and 46.4m TRX)", "About $628m", "10 per cent"],
  ["XRP Ledger (233.46m XRP)", "About $296m", "5 per cent"],
  ["Solana, Arbitrum, Optimism, Base, Avalanche and Polygon", "About $173m", "3 per cent"],
  ["Total", "About $6.36bn", ""]
], `Source: ${L(TRM, "TRM Labs")}, on-chain data to 00:30 UTC on 30 October. Shares are Komposite's arithmetic and are rounded.`);

const BNB_FREEZES = table(["Who froze or moved funds", "Amount", "When (UTC)"], [
  ["Tether (USDT on several chains)", "About $1.77bn", "First 971.1m USDT at 21:01 on 29 October"],
  ["Circle (USDC), with law enforcement", "About $825m", "823m USDC at 21:04"],
  ["Ripple (RLUSD)", "$40.5m", "22:01"],
  ["Arbitrum Security Council (forced transfers of ETH and ARB)", "About $30m", "00:08 on 30 October"],
  ["World Liberty Financial (USD1)", "$27.8m", "22:10 and 22:26"],
  ["Total", "About $2.7bn, or 42 per cent of the $6.36bn", ""]
], `Source: ${L(TRM, "TRM Labs")}. Binance's own update puts the frozen total at about $3bn. The sum and percentage are Komposite's arithmetic.`);

const INTC_TABLE = table(["Intel, non-GAAP unless stated", "Third quarter 2026", "Fourth-quarter guidance", "Change, by our arithmetic"], [
  ["Revenue", "$16.5bn (up 21 per cent)", "$15.0bn to $16.0bn", "Minus 6 per cent at the $15.5bn midpoint"],
  ["Gross margin", "44.1 per cent", "38.0 per cent", "Minus 6.1 points, about 2 of them from the Israel plant"],
  ["Earnings per share", "$0.52", "$0.25", "Minus 52 per cent"],
  ["Data centre and AI revenue", "$7.3bn (up 78 per cent)", "Not guided", "About $4.1bn a year earlier"],
  ["PC (client) revenue", "$8.1bn (down 5 per cent)", "Not guided", "About $8.5bn a year earlier"]
], `Sources: ${L(INTC_Q3, "Intel's third-quarter release")} and ${L(INV_INTC, "the earnings call")}, 29 October 2026. Year-earlier segment figures and changes are Komposite's arithmetic from the growth rates Intel gives.`);

const VP_TABLE = table(["Victim type, as CrowdStrike describes it", "What CrowdStrike says happened"], [
  ["Foreign ministries of two Latin American countries", "Extensive intrusion; BLOODALCHEMY backdoor at one"],
  ["An interior ministry in the Middle East", "Compromised; BLOODALCHEMY deployed"],
  ["Telecoms providers in the US, Belgium and the Philippines", "Compromised"],
  ["Two US pharmaceutical organisations", "Compromised, from an engagement aimed at 19 US organisations"],
  ["A Greek government entity", "Mailboxes read using unrotated 2022 keys and a VPN key from a 2024 email leak"],
  ["US think tanks and European government bodies", "Password spraying and credential scanning, at least 12 organisations"]
], `Source: ${L(CS_VP, "CrowdStrike's report")}, 29 October 2026. CrowdStrike names no victims. Table compiled by Komposite.`);

export default [

/* ---------- 13:40Z CYBERSECURITY ---------- */
CY({ slug: "one-operator-two-hundred-targets", kick: "Threat Intelligence",
  headline: "One operator, two hundred targets",
  dek: "CrowdStrike says a China-linked group it calls Vapor Panda used ARTEX, an AI agent framework running on DeepSeek and a second commercial model, to work against more than 200 organisations in 11 days. Nine were confirmed compromised.",
  metaDesc: "CrowdStrike says China-linked Vapor Panda used the ARTEX AI agent framework and DeepSeek against 200+ organisations in 11 days, breaching at least nine.",
  author: "sam-porter", date: "2026-10-30T13:40:00Z",
  capt: "A public-terminal keyboard with Latin letters and Chinese input characters printed on its keys, in Hong Kong, in a file photograph.",
  tags: [
    { name: "Threat Intelligence", slug: "threat-intelligence" },
    { name: "AI Security", slug: "ai-security" },
    { name: "Cybersecurity", slug: "cybersecurity" }
  ],
  related: [
    R("/cybersecurity/microsoft-says-agents-hit-2250-tenants-through-connectwise/", "AI Agents"),
    R("/cybersecurity/an-ai-agent-logged-in-then-kept-looking/", "AI Security"),
    R("/cybersecurity/the-agent-is-a-privileged-user/", "Identity")
  ],
  body: [
    `A China-linked hacking group used an AI agent framework called ARTEX, running mainly on DeepSeek's model, to target more than 200 organisations in at least 14 countries over 11 days from 17 October, ${L(CS_VP, "CrowdStrike said in a report on Thursday")}. The security company confirmed hands-on intrusions at nine of them.`,
    `CrowdStrike calls the group Vapor Panda and describes it as a "China-nexus" adversary active since 2021, mostly against governments, think tanks and energy and extractive companies. ARTEX, the report says, runs a main agent that directs planner and worker agents through a shared map of facts and goals, taking each target from first access through reconnaissance to moving across the network. The second model was a subscription commercial one that CrowdStrike "could not confirm"; it does not name it. In a single intrusion, the planning agents consumed about 1.4bn input tokens.`,
    `The human role was small and visible. CrowdStrike says it recovered transcripts of an operator giving the agents instructions in Chinese, labelled "human instruction" and time-stamped in China Standard Time, asking for web shells, domain administrator passwords and an inventory of security software. At one pharmaceutical company, the operator told the agents to find Windows machines "without Falcon", CrowdStrike's own endpoint sensor. Adam Meyers, CrowdStrike's vice president of threat intelligence, told NBC News, ${L(FOX_LIVE, "as Fox News reported")}: "This is the first time we've seen them using an AI or agentic capability at scale."`,
    VP_TABLE,
    `The techniques were not new; the throughput was. Agents chained an unsigned SAML login assertion with an XML flaw to reach a cloud metadata service and take over a role that could command thousands of servers, according to the report. Against the Greek target, the operator supplied directory-export keys from 2022 that had probably never been rotated, and the agents used a VPN key from a May 2024 email leak to get inside. The agents tried several paths at once and switched when one failed.`,
    `By our arithmetic, more than 200 organisations in an 11-day window is about 18 a day, and nine confirmed intrusions is fewer than one in twenty of the targets. Adding the 12 organisations hit with password spraying gives 21 with confirmed hostile activity, about one in ten. AI lets such groups "operate on a scale that previously required far more human effort", ${L(NBC_VP, "NBC News reported")}. Neither CrowdStrike nor NBC carried a response from DeepSeek.`,
    `This is the second ARTEX campaign made public in little more than a week. Microsoft said last week that a different China state-aligned group, Storm-0940, used the same framework after compromising a backup vendor to try sign-ins at more than 2,250 customer tenants, as Komposite <a href="/cybersecurity/microsoft-says-agents-hit-2250-tenants-through-connectwise/">reported on 22 October</a>. CrowdStrike says the Vapor Panda activity is separate, and that it has also seen ARTEX used by criminal and unattributed actors.`,
    `Why it matters: an AI agent that holds credentials behaves like any other privileged account, a point Komposite made in September: <a href="/cybersecurity/the-agent-is-a-privileged-user/">the agent is a privileged user</a>. What changes is the arithmetic for defenders, since one operator can now run many intrusions in parallel. CrowdStrike assesses that China-nexus groups will "highly likely" keep adopting such frameworks over the next 12 months, and its first recommendation is unglamorous: rotate signing keys and service credentials, including those sitting in old backups.`
  ]
}),

/* ---------- 14:00Z MARKETS ---------- */
MK({ slug: "data-centres-up-78-per-cent-pcs-down-12", kick: "Earnings",
  headline: "Data centres up 78 per cent, PCs down 12",
  dek: "Intel's server chip sales rose 78 per cent in the third quarter and it beat profit forecasts, but it guided fourth-quarter revenue and margins lower, citing a PC market it expects to shrink about 12 per cent this year. The shares fell by about a fifth after hours.",
  metaDesc: "Intel's data centre revenue rose 78% in Q3, but it guided Q4 revenue and margins lower on a PC slump and memory shortages. Shares fell about a fifth.",
  author: "priya-raghavan", date: "2026-10-30T14:00:00Z",
  capt: "The glass and pale-panelled headquarters of Intel on Mission College Boulevard in Santa Clara, California, with cars parked in front, in a file photograph.",
  tags: [
    { name: "Semiconductors", slug: "semiconductors" },
    { name: "Capital Markets", slug: "capital-markets" },
    { name: "AI Infrastructure", slug: "ai-infrastructure" }
  ],
  related: [
    R("/technology/samsung-q3-record-profit-memory-boom/", "Semiconductors"),
    R("/markets/seventy-seven-billion-out-forty-two-billion-in/", "Earnings"),
    R("/markets/forty-one-billion-raised-nine-billion-short/", "Earnings")
  ],
  body: [
    `Intel's data centre and AI revenue rose 78 per cent to $7.3bn in the third quarter, but the company forecast lower fourth-quarter revenue and margins on Thursday because of a shrinking PC market, ${L(INTC_Q3, "according to its results release")}. The shares fell about 21 per cent in after-hours trading.`,
    `Total revenue was $16.5bn, up 21 per cent from $13.7bn a year earlier, and non-GAAP earnings were 52 cents a share against 23 cents. The non-GAAP gross margin rose to 44.1 per cent from 40.0 per cent. Intel Foundry, the manufacturing arm, reported $6.7bn, up 58 per cent. Client computing, the PC business, fell 5 per cent to $8.1bn. For the fourth quarter Intel guided revenue of $15.0bn to $16.0bn, a non-GAAP gross margin of 38.0 per cent and earnings of 25 cents a share.`,
    `"Despite near-term headwinds across the PC industry, demand for our CPUs remains robust," Lip-Bu Tan, the chief executive, said in the release, adding that the "immediate priority is to unlock additional supply to meet extraordinary demand for our Xeon family". David Zinsner, the chief financial officer, said: "we see the PC slowdown continuing at least through the first half of next year."`,
    INTC_TABLE,
    `On the call, Zinsner put a number on the slowdown. "We expect the 2026 PC unit TAM to decline approximately 12%, with second-half units down more than 20%," he said, ${L(INV_INTC, "according to the transcript")}. Tan blamed "the unprecedented memory crunch", as prices and shortages of memory chips push up the cost of PCs. Zinsner also said Intel's Fab 28 in Israel had been shut for about two weeks, adding: "I think the current thinking is that we will have about a $300 million impact to the fourth quarter." He put the cost at about two points of gross margin.`,
    `The market weighed the guidance over the beat. Analysts had expected 40 cents a share on revenue of $16.48bn, Investing.com reported, so Intel beat on profit by 12 cents. The stock closed the regular session at $92.07 and traded at $72.85 after hours, down $19.22. On Friday morning the fall in premarket trading was more than 25 per cent, ${L(FOX_LIVE, "Fox News reported")}, citing Tan's remark that "the pace of this PC correction has accelerated over the last two months".`,
    `By our arithmetic, the guidance midpoint of $15.5bn is 6 per cent below the third quarter, and the margin guide is 6.1 points lower, of which the Israel plant explains about 2. The rest comes from the PC mix and supply costs Intel describes. Cash was thinner than the headline profit: operating cash flow of $5.1bn less $4.2bn of gross capital spending leaves $0.9bn, against the $1.6bn of adjusted free cash flow Intel reports after its own adjustments.`,
    `Why it matters: the memory shortage that is lifting chipmakers such as Samsung, which <a href="/technology/samsung-q3-record-profit-memory-boom/">forecast a record quarterly profit on AI memory demand</a> this month, is a cost for companies that sell into PCs. Intel's server business is growing as fast as it can be supplied, but the PC business is still the larger of the two. The fall came a day after Alphabet's class A shares dropped 12.64 per cent, about $500bn of market value, Fox News reported, following results that showed <a href="/markets/forty-one-billion-raised-nine-billion-short/">capital spending running ahead of operating cash</a>.`
  ]
}),

/* ---------- 14:20Z CRYPTO (LEAD) ---------- */
CR({ slug: "six-billion-dollars-out-of-binances-hot-wallets", kick: "Exchange Hack",
  headline: "Six billion dollars out of Binance's hot wallets",
  dek: "Binance says about $6.3bn was taken from its hot wallets on Thursday, the largest crypto theft on record, and that it will cover every loss. Stablecoin issuers have frozen about $2.7bn. TRM Labs attributes the theft to North Korea.",
  metaDesc: "About $6.3bn was taken from Binance's hot wallets on Thursday, the biggest crypto theft on record. About $2.7bn is frozen; TRM blames North Korea.",
  author: "marcus-oyelaran", date: "2026-10-30T14:20:00Z",
  capt: "A black T-shirt and a yellow tote bag, both printed with the Binance logo, laid out on a white sheet, in a file photograph.",
  tags: [
    { name: "Digital Assets", slug: "digital-assets" },
    { name: "Cybersecurity", slug: "cybersecurity" },
    { name: "Stablecoins", slug: "stablecoins" }
  ],
  related: [
    R("/cybersecurity/hacken-puts-most-q3-hack-losses-outside-the-audit/", "Crypto Hacks"),
    R("/crypto/sixty-one-million-of-the-one-and-a-half-billion/", "Enforcement"),
    R("/crypto/circle-wants-forty-more-countries/", "Stablecoins")
  ],
  body: [
    `About $6.3bn in crypto was taken from Binance, the world's largest exchange, on Thursday in what is the largest theft in the industry's history, ${L(BNB_UPDATE, "the company said in an update on Friday")}. Binance said it would cover all losses, that "user funds are safe" and that withdrawals were suspended while it completed security checks.`,
    `Binance's update says an initial investigation suggests "a compromised DevOps engineer's laptop" allowed an attacker to reach a service container and submit unauthorised withdrawal transactions. "We have found no evidence of any wallet private key leak," it says. The exchange said about $3bn had been frozen on-chain with partners, that "Binance will cover all losses from the SAFU fund and the company's funds", referring to its emergency reserve, and that it would publish a technical post-mortem and an updated proof of reserves. Deposits are unaffected. The update gives no date for withdrawals to resume.`,
    `${L(TRM, "TRM Labs")}, a blockchain analytics firm, counts $6.36bn moved out of Binance wallets on ten blockchains, most of it in about 20 minutes from 20:05 UTC on Thursday. It attributes the theft "with high confidence" to TraderTraitor, a North Korean unit that the FBI blamed for the theft of about $1.5bn from the exchange Bybit in February 2025. Ari Redbord, TRM's global head of policy, called the attack "unprecedented", ${L(AJ_BNB, "Al Jazeera reported")}. Binance has not named a culprit; it said it was working with law enforcement.`,
    BNB_CHAINS,
    `The two accounts of how it happened are not yet the same. Binance points to one engineer's laptop. TRM says the attacker produced valid signatures on chains with different key types and signing schemes within about half an hour, which "a simple phishing explanation" does not cover, and that on Ethereum it used 50 pre-signed authorisations under EIP-7702, a 2025 feature that lets an ordinary wallet hand control to a smart contract, prepared so that one would match whatever the hot wallet's transaction count was at the time. TRM's assessment is that the attacker could direct Binance's hot-wallet signing system across chains. Binance has not published a root cause.`,
    BNB_FREEZES,
    `The freezes came quickly. Tether froze 971.1m USDT 37 minutes after the main sweep and Circle froze 823m USDC three minutes later, working with law enforcement, according to TRM. The attacker still controls about $2.4bn, including more than 420,000 ether and the 18,270 bitcoin, which it is moving through a chain of small transfers. TRM says it sold about 325m USDT to market makers for roughly 122,300 ether at an implied price of about $2,650, when ether traded at $2,300 to $2,350, giving up more than 10 per cent to convert tokens that could be frozen into one that cannot.`,
    `By our arithmetic, the theft is 4.2 times the Bybit loss and 2.2 times the $2.87bn that TRM says was stolen in nearly 150 crypto hacks in the whole of 2025. Binance told ${L(ABC_BNB, "ABC News")} it had reserved more than $6.34bn of company funds for the incident, $5bn of it in the same tokens that were taken, which would cover the gross loss before any recovery. That figure is the company's own and has not been independently verified. Bitcoin fell about 5 per cent to below $77,000 after the news, Al Jazeera reported.`,
    `Binance confirmed the incident to ${L(TC_BNB, "TechCrunch")} on Thursday after users reported funds draining from its wallets; hours earlier Changpeng Zhao, the founder and largest shareholder, who no longer runs the exchange, had posted that it had probably been hacked. Sean Foley of Macquarie University told Al Jazeera: "Any assets held at a centralised exchange are only as safe as the exchange itself."`,
    `Why it matters: by our arithmetic from TRM's breakdown, about $3.4bn of the stolen value, more than half, was in dollar stablecoins, and those were the easiest to stop because their issuers can freeze them; nearly all of the $2.7bn frozen so far is stablecoins. The ether and bitcoin cannot be frozen that way. Hacken, a security firm, had already attributed most third-quarter crypto hack losses to suppliers, unapplied fixes and systems left out of security reviews, as Komposite <a href="/cybersecurity/hacken-puts-most-q3-hack-losses-outside-the-audit/">reported this month</a>, rather than to flaws in audited code. Binance accounts have also figured in American enforcement: prosecutors were <a href="/crypto/sixty-one-million-of-the-one-and-a-half-billion/">seeking to seize $61m from two of them</a> in September.`
  ]
}),

];
