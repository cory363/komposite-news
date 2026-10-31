/*
Komposite News, batch 113: Saturday 31 October 2026, round 33. New lead + 2 stories. tools/data/lead.json pins the new lead
(the round-31 Binance pin moves down the normal way). Researched with Brave News leads and the day's reader-trend signal,
then reported from the sources listed below. Written and checked under the 26 Oct SEO/trust rules: house byline only,
labelled original analysis, 2+ internal and 2+ external links, metaDesc <= 155 characters.

---------- 14:00Z MARKETS (LEAD): "A third off the round, a tenth off the price" (priya-raghavan, house byline) ----------
SOURCES READ:
- Reuters via Central Oregon Daily, "OpenAI slashes funding target by $10 billion amid tech rout, FT reports", Ananya Palyekar,
  Bengaluru, 30 Oct 2026 (read): target cut by $10bn to about $20bn, citing the FT and people with knowledge; valuation sought
  $1.25tn, down from $1.4tn (the wire copy prints "$1.4 billion", an obvious slip; TNW and others give $1.4tn); "first close"
  expected below $20bn after some investors cut allocations; commitment deadline Friday; UAE consortium including MGX expected to
  be the largest participant, with an option for OpenAI to lease new computing capacity in the region; Founders Fund, Coatue,
  Sequoia Capital and Andreessen Horowitz expected to take part; wealthy individuals may invest later through a retail offering
  at $1.25tn; listing pursued in 2027; wants to close before Anthropic lists because both draw on similar investors; Nasdaq
  down 2.9% on Friday and 7.8% below its 6 October closing high.
- TNW, Cristian Dina, 31 Oct 2026 11:38 UTC (read): same FT account; "has not independently verified"; $1.4tn was the first
  pitch and the cut to $1.25tn came the previous week; the Wall Street Journal reported less than half of $30bn raised;
  Anthropic made its IPO filing public on Monday.
- The Decoder, Matthias Bastian, 31 Oct 2026 (read): citing the WSJ, about $11bn secured. Single secondary source, attributed.
- Reuters via Central Oregon Daily, "Wall Street closes sharply lower as AI cash burn fears spark tech selloff", Stephen Culp and
  Purvi Agarwal, New York, 30 Oct 2026 (read): Dow -572.25 (-1.09%) to 51,770.31; S&P 500 -140.32 (-1.82%) to 7,580.07; Nasdaq
  -747.73 (-2.86%) to 25,437.00; Nasdaq's largest one-day percentage drop since 5 June; Intel about -28.6%; S&P 500 and Nasdaq
  down for October, Dow up.
- FRED (Federal Reserve Bank of St Louis), NASDAQCOM and SP500 daily closes, downloaded 31 Oct (data to 29 Oct): Nasdaq 30 Sep
  26,861.06; 6 Oct 27,599.89 (October high); 19 Oct 26,430.89; 29 Oct 26,184.72. S&P 500 30 Sep 7,651.54. Check: 26,184.72 -
  747.73 = 25,436.99, matching Reuters' 25,437.00.
- TechCrunch, Lucas Ropek, 30 Oct 2026 2:52pm PDT (read): FT reported Blackstone, anchor of a $63bn deal financing Anthropic's
  chips, told investors it expects a "high" junk rating after the IPO, double-B, having earlier predicted investment grade before
  2027; "Blackstone's forecast is just a prediction"; Anthropic and Blackstone declined to comment.
- Komposite archive: /ai/openai-seeks-thirty-billion-before-anthropic-lists/ (Reuters, 20 Oct: about $30bn at more than $1.4tn;
  $852bn in March after a $122bn round); /ai/the-price-rises-as-the-listing-recedes/ (FT, 16 Sep: early talks above $1.2tn);
  /markets/anthropic-files-with-16-3bn-of-revenue-and-an-80-7bn-loss/ (S-1 made public 26 Oct).
FACT-CHECK NOTES: The FT and WSJ originals are paywalled and were not read; every FT and WSJ figure is attributed through the
  outlet that relayed it. No OpenAI comment appears in the accounts read, and none is claimed. The $11bn commitments figure is
  single-sourced (The Decoder citing the WSJ) and labelled so. Weekdays checked: 30 Oct Friday; 26 Oct Monday; Reuters' $30bn
  report ran on Monday 19 Oct (our archive story, published Tuesday 20 Oct, says "on Monday"); the FT's $1.2tn report ran on
  Tuesday 15 Sep (archive story of Wednesday 16 Sep says "on Tuesday"); 5 June a Friday.
OUR ARITHMETIC: $10bn / $30bn = one third; $150bn / $1.4tn = 10.7%; $1.25tn / $852bn = +46.7%; stake bought by the round, as a
  simple ratio, $30bn / $1.4tn = 2.1% vs $20bn / $1.25tn = 1.6%; Nasdaq 25,437.00 / 26,861.06 = -5.3% for October;
  / 27,599.89 = -7.8% from the 6 Oct high; / 26,430.89 = -3.8% since the 19 Oct close; S&P 500 7,580.07 / 7,651.54 = -0.9% for October.
HERO: Wikimedia Commons, "1515 Third Street.jpg", Coolcaesar, CC BY 4.0, 15 June 2025: glass office building in San Francisco's
  Mission Bay that housed OpenAI's headquarters when photographed (per the Commons description). Pedestrians are tiny and not
  identifiable. Not used on any sister site (grep of ~/Sites).

---------- 13:40Z CYBERSECURITY: "Chainalysis reports its own intruder" (sam-porter, house byline) ----------
SOURCES READ:
- Chainalysis, "Chainalysis Security Incident Information", blog, dated 30 Oct 2026 (read): external actor used "offensive
  agentic techniques to gain unauthorized access" to systems and internal tools; no evidence of access to investigation content
  (graphs, notes, cases), query results, clear-text passwords, MFA secrets or session tokens; non-sensitive data accessed: user
  IDs, names, email addresses, organisation role labels; still working out which records per customer; third-party experts,
  large language models used in its review, vulnerabilities being patched; advice: watch for unexpected password-reset or
  authentication prompts, enable two-factor authentication; organisation-specific updates to follow; unrelated to the Binance
  theft.
- BleepingComputer, Ax Sharma, 31 Oct 2026 08:50 (read): disclosure posted Friday about 5:14pm ET with the customer email;
  spokesperson confirmed; warning about impersonators offering fund recovery or recruitment; not disclosed: vulnerabilities,
  internal tools, dwell time; unclear whether ARTEX or custom agents were used.
- The Block, Zack Abrams, 31 Oct 2026 9:27am EDT, updated 9:38am (read): "provisioned users"; "available to date"; first flagged by
  International Cyber Digest; not disclosed: detection date, number of customers, vulnerabilities, how agents were used,
  attacker identity, evidence for the no-link-to-Binance statement; declined specific follow-up questions; Chainalysis puts the
  Binance theft at $6.4bn; about $2.8bn of stablecoins frozen by issuers; "not related to the recent crypto theft at Binance".
- Komposite archive: /cybersecurity/microsoft-says-agents-hit-2250-tenants-through-connectwise/ (22 Oct);
  /cybersecurity/one-operator-two-hundred-targets/ (30 Oct); /crypto/six-billion-dollars-out-of-binances-hot-wallets/ (30 Oct).
FACT-CHECK NOTES: "this month" detection is the company's wording; no date is claimed. Quotes are limited to short phrases
  confirmed in the notice and in The Block's and BleepingComputer's quotations of it.
OUR ANALYSIS: the reached / not reached / not disclosed table, compiled from the notice and the two outlets' lists; timeline of
  three agentic-intrusion disclosures in ten days from Komposite's own reporting.
HERO: Wikimedia Commons, "Homepage of CHAINALYSIS Website magnified on logo with magnifying glass (53146955436).jpg", Jernej
  Furman, CC BY 2.0, 25 Aug 2023: a magnifying glass over the Chainalysis logo on its website. Only a dark, out-of-focus hand
  holding the glass; no identifiable person. Not used on any sister site.

---------- 13:20Z CRYPTO: "Offshore perps, an onshore operator" (marcus-oyelaran, house byline) ----------
SOURCES READ:
- ICE press release, "Intercontinental Exchange and Trade[XYZ] to Bring Hyperliquid-Based Perpetual Markets Onshore", Atlanta and
  New York, Business Wire, 29 Oct 2026 (read; still on ir.theice.com on 31 Oct): definitive agreement; subject to regulatory
  approvals; ICE exclusive operator of Trade[XYZ]'s regulated markets; new dedicated retail market and clearing structure;
  KYC/AML; approvals to support leveraged trading; access via FCMs that become members; separate from institutional futures and
  clearing, with no exposure for hedgers and institutional customers to retail trading or counterparty risk; distribution incl.
  the ICE-OKX joint venture, pending its approvals as a US broker-dealer and FCM; ICE invested in OKX earlier in 2026; minority
  stake, not expected to materially affect 2026 adjusted results, capital return or deleveraging; ICE's business over 99 per
  cent institutional; Trade[XYZ] offers eligible non-US users 24/7 perps on equities, indices, commodities and currencies.
  Sprecher quote verbatim; Trade[XYZ] line verbatim.
- CoinDesk, Oliver Knight and Omkar Godbole, 29 Oct 2026 7:11am EDT (read): venue name ICE[XYZ]; crypto contracts too; timing
  and eligibility not announced; terms of the investment not disclosed; Trade[XYZ] says more than $650bn of volume in just over a
  year; builder-deployed markets about half of Hyperliquid volume (linked reporting).
- CoinDesk, Aoyon Ashraf, 29 Oct 2026 1:04pm EDT (read): Druckenmiller's first X post; investment size not disclosed; CME sued the
  CFTC in June arguing perpetuals are swaps; CFTC asked the court to dismiss; HYPE up nearly 20 per cent on Thursday; Jeff Yan
  quote.
- The Block, Jason Shubnell, 29 Oct 2026 10:44am EDT (read): HIP-3 roles; HYPE +15% to about $91.21 at publication; HIP-3 open
  interest $2.38bn in April; CFTC staff advisory and no-action relief for US perps in May; Sprecher on round-the-clock retail
  participation; Druckenmiller "24/7 perpetual futures on Hyperliquid to the United States".
FACT-CHECK NOTES: Reports that ICE deleted a post on X about the deal were seen only in aggregator snippets and are not used;
  the press release itself was live on ICE's site when checked on Saturday. HYPE moves differ by time (15% at The Block's
  publication, nearly 20% later per CoinDesk); both attributed.
OUR ARITHMETIC: $650bn over "just over a year", taken as 13 months = about $50bn a month, an upper bound on the monthly average.
HERO: Wikimedia Commons, "LIFFE Trader Statue, Dowgate Hill (01).jpg", Doyle of London, CC BY-SA 4.0, 6 Mar 2022: the bronze
  LIFFE Trader statue (a sculpture, not a real person) in the City of London; LIFFE is now part of ICE's futures business. The
  portrait original lost the statue's head in the site's landscape crops, so a 1280x853 crop (head to knees) is stored at
  /assets/img/stories/liffe-trader-statue-dowgate-hill.jpg and credited "(cropped)", as CC BY-SA requires. A Hyperliquid trading-screen screenshot was tried first and dropped: validate.mjs fails it under the house no-charts
  imagery rule. NYSE facade shots rejected as near-duplicates of an existing Komposite hero and a Cranberry photo. Not used on
  any sister site.

Not a repeat: repo grep found no coverage of the $20bn cut, the Chainalysis breach or the ICE-Trade[XYZ] deal (earlier OpenAI
round stories are linked as background). r33-claims.md checked before writing and before commit: no other site claimed these.
*/
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const MK = P("markets", "Markets", "markets", "Photograph via Wikimedia Commons");
const CY = P("cybersecurity", "Cybersecurity", "cybersecurity", "Photograph via Wikimedia Commons");
const CR = P("crypto", "Crypto", "crypto", "Photograph via Wikimedia Commons");

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
const RT_OAI = "https://www.centraloregondaily.com/news/consumer/openai-slashes-funding-target-by-10-billion-amid-tech-rout-ft-reports/article_c29e3c58-5f4e-5e2a-8fdf-f69955e2fb19.html";
const TNW_OAI = "https://thenextweb.com/news/openai-funding-round-20bn-target-cut-ft";
const DEC_OAI = "https://the-decoder.com/openai-raises-just-11-billion-of-its-30-billion-target-as-big-investors-lose-their-ai-appetite/";
const RT_MKT = "https://centraloregondaily.com/news/consumer/wall-street-slides-as-ai-cash-burn-worries-spark-tech-selloff/article_be1376a4-8b07-53c1-ac25-67e08e1daac6.html";
const FRED_NQ = "https://fred.stlouisfed.org/series/NASDAQCOM";
const TC_ANT = "https://techcrunch.com/2026/10/30/anthropic-expected-to-receive-high-junk-rating-from-credit-agencies-following-ipo-report-says/";
const CHA_NOTE = "https://www.chainalysis.com/blog/security-incident-october-30/";
const BC_CHA = "https://www.bleepingcomputer.com/news/security/chainalysis-discloses-data-breach-from-offensive-agentic-techniques/";
const TB_CHA = "https://www.theblock.co/news/business/2026-10-31-chainalysis-says-hacker-using-offensive-agentic-techniques-accessed-its-customers-names-and-emails-432244";
const ICE_PR = "https://ir.theice.com/press/news-details/2026/Intercontinental-Exchange-and-TradeXYZ-to-Bring-Hyperliquid-Based-Perpetual-Markets-Onshore/default.aspx";
const CD_ICE = "https://www.coindesk.com/markets/2026/10/29/nyse-owner-takes-steps-to-bring-hyperliquid-perpetual-futures-to-u-s";
const CD_DRU = "https://www.coindesk.com/business/2026/10/29/stanley-druckenmiller-s-first-x-post-backs-hyperliquid-venture-after-usd23-million-indirect-investment";
const TB_ICE = "https://www.theblock.co/news/business/2026-10-29-ice-tradexyz-hyperliquid-perpetual-futures-us-432132";

const OAI_TABLE = table(["When reported", "What OpenAI was seeking or got", "Valuation", "Reported by"], [
  ["March 2026", "$122bn round, completed", "$852bn", "Reuters, via <a href=\"/ai/openai-seeks-thirty-billion-before-anthropic-lists/\">Komposite, 20 October</a>"],
  ["15 September", "Early talks on a new round", "More than $1.2tn", "Financial Times, via <a href=\"/ai/the-price-rises-as-the-listing-recedes/\">Komposite</a>"],
  ["Week of 19 October", "About $30bn", "More than $1.4tn", "Reuters"],
  ["30 October", "About $20bn, first close below that", "$1.25tn", "Financial Times, via Reuters"]
], `Compiled by Komposite from the reports shown. None of the figures has been published by OpenAI. By our arithmetic, $1.25tn is 46.7 per cent above the March valuation and 10.7 per cent below the $1.4tn first pitched for this round.`);

const NQ_TABLE = table(["Nasdaq Composite close", "Level", "Change to Friday's close, by our arithmetic"], [
  ["30 September (end of September)", "26,861.06", "-5.3 per cent"],
  ["6 October (October high)", "27,599.89", "-7.8 per cent"],
  ["19 October (first report of the $30bn round)", "26,430.89", "-3.8 per cent"],
  ["30 October (Friday)", "25,437.00", "-2.86 per cent on the day"]
], `Sources: ${L(FRED_NQ, "Federal Reserve Bank of St Louis (FRED) daily closes")} to 29 October; Friday's close from ${L(RT_MKT, "Reuters")}. Percentages are Komposite's arithmetic.`);

const CHA_TABLE = table(["Category", "What Chainalysis has said"], [
  ["Reached", "User IDs, full names, email addresses and organisation role labels of provisioned users"],
  ["No evidence of access, on evidence available to date", "Investigation content (graphs, notes, cases), transaction and query results, clear-text passwords, MFA secrets, session tokens"],
  ["Not disclosed", "When the intrusion was detected beyond \"this month\", how many customers are affected, which vulnerabilities and internal tools were involved, how long the attacker had access, how AI agents were used, who the attacker is"],
  ["Promised", "An organisation-by-organisation account of which records were accessed"]
], `Compiled by Komposite from ${L(CHA_NOTE, "Chainalysis's notice")} and the lists of undisclosed details published by ${L(TB_CHA, "The Block")} and ${L(BC_CHA, "BleepingComputer")}.`);

const ICE_TABLE = table(["Party", "Role under the agreement"], [
  ["Hyperliquid", "Underlying trading infrastructure, through its HIP-3 framework for builder-deployed markets"],
  ["Trade[XYZ]", "Designs the contracts; keeps running its existing markets for eligible non-US users"],
  ["ICE", "Exclusive operator of the US-regulated markets; builds a dedicated retail market and clearing structure; minority investor in Trade[XYZ]"],
  ["Futures commission merchants", "Become members and give verified customers access"],
  ["ICE-OKX joint venture", "One distribution channel, pending its own approvals as a US broker-dealer and futures commission merchant"],
  ["Regulators", "Must approve the market, the clearing structure and leveraged trading; no timetable given"]
], `Compiled by Komposite from ${L(ICE_PR, "ICE's announcement")} and ${L(TB_ICE, "The Block's")} description of the structure.`);

export default [

/* ---------- 13:20Z CRYPTO ---------- */
CR({ slug: "offshore-perps-an-onshore-operator", kick: "Derivatives",
  headline: "Offshore perps, an onshore operator",
  dek: "Intercontinental Exchange, owner of the New York Stock Exchange, has agreed to run US-regulated versions of Trade[XYZ]'s Hyperliquid-based perpetual futures and is taking a minority stake. The markets need regulatory approval, and no launch date has been set.",
  metaDesc: "ICE agreed to operate US-regulated versions of Trade[XYZ]'s Hyperliquid perpetual futures and take a minority stake, pending approval and with no date.",
  author: "marcus-oyelaran", date: "2026-10-31T13:20:00Z",
  capt: "The LIFFE Trader, a bronze statue of a futures trader on a phone, on Dowgate Hill in the City of London, in a file photograph.",
  tags: [
    { name: "Market Structure", slug: "market-structure" },
    { name: "Regulation", slug: "regulation" },
    { name: "Trading", slug: "trading" }
  ],
  related: [
    R("/crypto/the-cftc-says-cme-cannot-have-it-both-ways/", "Derivatives"),
    R("/policy/nba-signs-cftc-pact-and-picks-kalshi-and-polymarket/", "Prediction Markets"),
    R("/markets/sixteen-issuers-opt-out-of-the-tokenised-stock-venue/", "Tokenisation")
  ],
  body: [
    `Intercontinental Exchange, the owner of the New York Stock Exchange, has signed a definitive agreement to operate US-regulated versions of Trade[XYZ]'s perpetual futures markets, which run on the Hyperliquid blockchain, and is taking a minority stake in the company, ${L(ICE_PR, "ICE said on Thursday")}. The plan needs regulatory approval.`,
    `A <a href="/crypto/perpetual-futures-come-for-the-stocks/">perpetual future</a> is a futures contract with no expiry date. Instead of settling on a fixed day, it is held close to the price of the underlying asset by periodic payments between buyers and sellers. Trade[XYZ] uses Hyperliquid to offer eligible non-US users round-the-clock contracts on shares, equity indices, commodities and currencies. ICE will be the exclusive operator of the regulated versions and plans a new market and clearing structure dedicated to retail traders, with identity and anti-money-laundering checks, and will seek approval to support leveraged trading, the release says. CoinDesk reported that the venue, called ICE[XYZ], would also list crypto contracts.`,
    ICE_TABLE,
    `ICE is careful to keep the new business apart from its old one. The retail market would run separately from its institutional futures and clearing operations, and the company says its commercial hedgers and institutional customers would have no exposure to retail trading or counterparty risk. Customers would reach the markets through futures commission merchants that become members, and through partners including ICE's joint venture with OKX, which itself is awaiting approval as a US broker-dealer and futures commission merchant. ICE says its existing business is more than 99 per cent institutional.`,
    `"We see these perp markets as additive to our futures markets, not a replacement for them," Jeffrey Sprecher, ICE's chair and chief executive, said in the release. He also pointed to a clear rise in retail participation, often around the clock, ${L(TB_ICE, "The Block reported")}. Trade[XYZ] described the planned market as "a new venue for price discovery, open whenever the world moves." Neither company disclosed the size of the stake. ICE said it was not expected to have a material effect on its 2026 adjusted results, capital return or plans to reduce debt.`,
    `Trade[XYZ] says its markets on Hyperliquid have handled more than $650bn of trading in just over a year, ${L(CD_ICE, "CoinDesk reported")}. By our arithmetic, taking "just over a year" as 13 months, that is no more than about $50bn a month on average. Open interest across HIP-3 markets, the Hyperliquid framework that lets outside builders such as Trade[XYZ] deploy contracts, reached $2.38bn in April, according to The Block. Hyperliquid's HYPE token rose about 15 per cent on Thursday to around $91, The Block said; CoinDesk later put the day's gain at nearly 20 per cent.`,
    `The deal also brought a new name to the venture. Stanley Druckenmiller, the investor, used his first post on X to say he had invested in Trade[XYZ], without giving an amount, ${L(CD_DRU, "CoinDesk reported")}. He wrote that the partnership would bring "24/7 perpetual futures on Hyperliquid to the United States", according to The Block. Jeff Yan, a Hyperliquid co-founder, wrote that he "could never have predicted the progress that we've made as a community in a single year to make this come true."`,
    `The regulatory path is open but contested. The Commodity Futures Trading Commission issued a staff advisory and no-action relief for US perpetual futures in May, The Block reported. CME Group sued the CFTC in June, arguing that perpetual contracts were wrongly classified as futures rather than swaps, and the regulator has asked the court to dismiss the case, CoinDesk reported. Neither ICE nor Trade[XYZ] has said when the markets could open or who will be eligible.`,
    `Why it matters: the two largest US futures exchange groups have now taken opposite positions on the same product. CME is in court arguing that the CFTC should not have approved a perpetual, as Komposite reported when <a href="/crypto/the-cftc-says-cme-cannot-have-it-both-ways/">the regulator answered CME's challenge</a>. ICE, which has also invested in OKX and in Polymarket, is building a retail venue on a crypto chain's rails. The CFTC's approach to event contracts has already brought sports leagues to <a href="/policy/nba-signs-cftc-pact-and-picks-kalshi-and-polymarket/">prediction markets</a>; perpetuals on shares and commodities would extend that reach to round-the-clock leveraged trading.`
  ]
}),

/* ---------- 13:40Z CYBERSECURITY ---------- */
CY({ slug: "chainalysis-reports-its-own-intruder", kick: "Data Breach",
  headline: "Chainalysis reports its own intruder",
  dek: "Chainalysis, the blockchain analytics firm tracing this week's Binance theft, said an attacker using \"offensive agentic techniques\" reached its internal tools and customers' names, emails and role labels. It found no sign that investigation data or credentials were taken.",
  metaDesc: "Chainalysis said an attacker using agentic techniques reached internal tools and customer names, emails and roles, but not investigation data or credentials.",
  author: "sam-porter", date: "2026-10-31T13:40:00Z",
  capt: "A magnifying glass held over the Chainalysis logo on the company's website, in a file photograph.",
  tags: [
    { name: "Threat Intelligence", slug: "threat-intelligence" },
    { name: "AI Security", slug: "ai-security" },
    { name: "Digital Assets", slug: "digital-assets" }
  ],
  related: [
    R("/cybersecurity/one-operator-two-hundred-targets/", "Threat Intelligence"),
    R("/cybersecurity/microsoft-says-agents-hit-2250-tenants-through-connectwise/", "Supply Chain"),
    R("/crypto/six-billion-dollars-out-of-binances-hot-wallets/", "Exchanges")
  ],
  body: [
    `Chainalysis, the blockchain analytics company, said an outside attacker using "offensive agentic techniques" gained access to its systems and internal tools and reached customers' names and email addresses, ${L(CHA_NOTE, "in a security notice dated Friday")}. It said it had found no evidence that investigation data or login credentials were accessed.`,
    `The data reached, according to the notice, was user IDs, names, email addresses and organisation role labels, which The Block described as belonging to provisioned users, the staff that client organisations set up on the platform. Chainalysis said it had found no evidence of access to investigation content such as graphs, notes and cases, to query results, or to clear-text passwords, multi-factor authentication secrets or session tokens, on the evidence "available to date". It is still working out which records belonged to which customer and said it would send each organisation its own update. The company said the intrusion was "not related to the recent crypto theft at Binance".`,
    `Chainalysis published the notice, together with the email it sent customers, at about 5:14pm Eastern time on Friday, ${L(BC_CHA, "BleepingComputer reported")}, and a spokesperson confirmed the incident to the publication. The breach was first flagged by International Cyber Digest, ${L(TB_CHA, "The Block reported")}. The company has brought in outside cybersecurity specialists, is using large language models in a wider review of its platform and is patching vulnerabilities. It advised customers to turn on two-factor authentication and to watch for unexpected password-reset requests or sign-in prompts, and warned of scammers impersonating the company, particularly those offering to recover funds or to recruit.`,
    CHA_TABLE,
    `"Agentic" describes AI systems that plan and carry out multi-step tasks, such as scanning, logging in and moving between tools, with limited human direction. Chainalysis has not said how such techniques were used against it. BleepingComputer noted that it is unclear whether the attacker used an existing framework such as ARTEX or custom agents. Chainalysis declined to answer specific follow-up questions from The Block, which listed what the company had not disclosed: when it detected the intrusion, how many customers were affected, which vulnerabilities were exploited, the attacker's identity, and the evidence behind its statement that the incident was unrelated to Binance.`,
    `This is the third disclosure of an agent-assisted intrusion in ten days, by our count of Komposite's own reporting. On 21 October Microsoft said a China state-aligned group had used an open-source agent framework to <a href="/cybersecurity/microsoft-says-agents-hit-2250-tenants-through-connectwise/">try more than 2,250 customer tenants</a> after breaking into ConnectWise's cloud backup service. On Thursday CrowdStrike said a group it calls Vapor Panda used the ARTEX framework against <a href="/cybersecurity/one-operator-two-hundred-targets/">more than 200 organisations</a>, nine of them confirmed compromised. In the first two, the disclosure came from the investigator; this time it comes from the company that was breached, and one whose business is investigation.`,
    `The timing is awkward. Chainalysis is one of the firms tracing the funds stolen from Binance, a theft it puts at $6.4bn. On Saturday it said the thieves had moved stablecoins through JustLend, a lending protocol on the Tron blockchain, and swapped them for ether, writing that "now the exploiter is free of worry of a freeze", The Block reported. Issuers such as Circle and Tether have frozen about $2.8bn of stablecoins, Chainalysis said.`,
    `Why it matters: the records taken are not secrets, but together they form a directory of who at Chainalysis's client organisations uses a crypto-tracing service, and in what role. That is the material targeted phishing is built from, which is why the company's own advice centres on password-reset prompts and impersonators. Binance's loss began with one engineer's laptop, as Komposite <a href="/crypto/six-billion-dollars-out-of-binances-hot-wallets/">reported on Friday</a>.`
  ]
}),

/* ---------- 14:00Z MARKETS (LEAD) ---------- */
MK({ slug: "a-third-off-the-round-a-tenth-off-the-price", kick: "Private Markets",
  headline: "A third off the round, a tenth off the price",
  dek: "OpenAI has cut its funding target to about $20bn from $30bn and is now seeking a $1.25tn valuation, down from $1.4tn, the Financial Times reported. The Nasdaq fell 2.9 per cent on Friday, its worst day since June, and 5.3 per cent in October.",
  metaDesc: "OpenAI cut its round to about $20bn at a $1.25tn valuation, from $30bn at $1.4tn, the FT reported, as the Nasdaq fell 2.9% on Friday and 5.3% in October.",
  author: "priya-raghavan", date: "2026-10-31T14:00:00Z",
  capt: "The glass office building at 1515 Third Street in San Francisco's Mission Bay, which housed OpenAI's headquarters when photographed in June 2025, in a file photograph.",
  tags: [
    { name: "OpenAI / Model Providers", slug: "openai-model-providers" },
    { name: "Capital Markets", slug: "capital-markets" },
    { name: "Venture Capital", slug: "venture-capital" }
  ],
  related: [
    R("/ai/openai-seeks-thirty-billion-before-anthropic-lists/", "OpenAI"),
    R("/markets/anthropic-files-with-16-3bn-of-revenue-and-an-80-7bn-loss/", "IPO"),
    R("/markets/seventy-seven-billion-out-forty-two-billion-in/", "Earnings")
  ],
  body: [
    `OpenAI has cut the target for its latest funding round by a third, to about $20bn, and is seeking a valuation of $1.25tn rather than $1.4tn, the Financial Times reported on Friday, ${L(RT_OAI, "according to Reuters")}. The FT cited people with knowledge of the matter.`,
    `The first close of the round is expected to raise less than $20bn because some investors have reduced their allocations, and the deadline for commitments was Friday, Reuters said, relaying the FT. A consortium of investors from the United Arab Emirates that includes MGX, the state-backed Abu Dhabi investment firm, is expected to be the largest participant, and in return OpenAI would get an option to lease newly built computing capacity in the region. Founders Fund, Coatue, Sequoia Capital and Andreessen Horowitz are also expected to take part, and wealthy individuals may be able to invest later through a retail offering at the same $1.25tn valuation.`,
    `The cut in valuation came first. The $1.4tn figure was the original pitch for the round and was lowered to $1.25tn the previous week, ${L(TNW_OAI, "TNW reported")}, adding that the Wall Street Journal had reported OpenAI raising less than half of its $30bn goal. The Decoder, ${L(DEC_OAI, "citing the Journal")}, put commitments at about $11bn. That figure comes from a single report we could not read in the original, and OpenAI has not published any of these numbers. No comment from the company appears in the accounts we read.`,
    `What does the change amount to? By our arithmetic, the target is down by a third and the price by a tenth: $150bn off $1.4tn is 10.7 per cent. The new money would buy about 1.6 per cent of the company, against about 2.1 per cent under the original plan, as a simple ratio of the amount raised to the valuation. At $1.25tn, OpenAI would still be valued 46.7 per cent above the $852bn of its March round.`,
    OAI_TABLE,
    `The public market moved the other way first. The Nasdaq Composite fell 747.73 points, or 2.86 per cent, to 25,437.00 on Friday, its largest one-day percentage drop since 5 June, after weak results from Intel and Amazon, ${L(RT_MKT, "Reuters reported")}. Intel's shares fell about 28.6 per cent. The S&P 500 lost 1.82 per cent to 7,580.07 and the Dow Jones Industrial Average 1.09 per cent to 51,770.31. The S&P 500 and the Nasdaq ended October lower, while the Dow finished the month up.`,
    NQ_TABLE,
    `Set side by side, the two prices have not moved by the same amount. Since Reuters first reported the $30bn round, the Nasdaq Composite has fallen 3.8 per cent by our arithmetic, while the valuation OpenAI is seeking has come down 10.7 per cent. The private price is not set by trading, so the comparison is loose, but it is the clearest measure available of how far demand for the largest private AI company has cooled against the listed market.`,
    `OpenAI is pursuing a stock market listing in 2027, and it wants this round closed before Anthropic lists, Reuters said, because the two companies draw on many of the same investors. Anthropic made its registration statement public on Monday, showing <a href="/markets/anthropic-files-with-16-3bn-of-revenue-and-an-80-7bn-loss/">first-half revenue of $16.3bn and a net loss of $80.7bn</a>. Its borrowing outlook has also shifted. Blackstone, the anchor investor in a recent $63bn deal financing Anthropic's chips, has told investors it expects Anthropic to receive a "high" junk rating, double-B, after its listing, having earlier predicted an investment-grade rating before 2027, the FT reported, ${L(TC_ANT, "according to TechCrunch")}. TechCrunch noted that "Blackstone's forecast is just a prediction"; Anthropic and Blackstone declined to comment.`,
    `Why it matters: the two largest private AI labs are raising equity and debt in the same weeks that public investors are marking down the companies that supply and host them. Amazon spent $77.3bn on property and equipment in its third quarter, <a href="/markets/seventy-seven-billion-out-forty-two-billion-in/">182 per cent of its operating cash flow</a>, and Alphabet <a href="/markets/forty-one-billion-raised-nine-billion-short/">raised $41.1bn of debt and stock</a> to cover its own build-out. A smaller round at a lower price does not change what OpenAI must spend; it changes how much of the company it gives up to pay for it, as Komposite noted when the round was <a href="/ai/openai-seeks-thirty-billion-before-anthropic-lists/">first reported at $30bn</a>.`
  ]
}),

];
