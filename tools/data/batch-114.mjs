/*
Komposite News, batch 114: Sunday 1 November 2026, round 34. New lead + 2 stories. tools/data/lead.json pins the new lead
(the round-33 OpenAI pin moves down the normal way). Brave was unavailable this round, so leads came from WebSearch and the
day's reader-trend signal, then every story was reported from the sources listed below. Written and checked under the 26 Oct
SEO/trust rules: house byline only, labelled original analysis, 2+ internal and 2+ external links, metaDesc <= 155 characters.
The North Korea story is the owner-assigned piece (Komposite angle: the money machine; The 13th Bell takes the state angle).

---------- 14:00Z AI (LEAD): "Apple's AI reaches China, two years and a partner later" (dana-whitfield, house byline) ----------
SOURCES READ:
- Apple Newsroom China, "Apple 智能即将登陆中国", Cupertino, 31 Oct 2026 (read, translated): first core features open for
  testing from 4 Nov in the latest iOS developer beta, release to users in China with iOS 27.3 in December; 18 features listed
  (Live Translation, Writing Tools, Visual Intelligence, Clean Up, Genmoji, natural-language Photos search, memory movies,
  priority Mail, Mail summaries, Smart Replies, notification summaries, priority notifications, Reduce Interruptions, Notes audio
  summaries, call transcript summaries, Type to Siri, Qwen in Siri, Qwen "Creation" in Writing Tools); Apple Intelligence
  "powered by generative models built by Apple"; Qwen added to parts of Siri, Writing Tools and Visual Intelligence; sign in
  with a Qwen account or Sign in with Apple; excludes Siri AI and other WWDC 2026 features; other platforms after "the
  necessary approvals"; devices: iPhone 15 Pro/Pro Max, iPhone 16 and later, iPhone Air, iPhone Duo; English or Simplified
  Chinese.
- Xinhua, 1 Nov 2026 (read): Alibaba announced the partnership on Saturday 31 Oct; users choose whether to enable Qwen and what
  to share; Alibaba "will not use user requests or generated responses for model training"; eligibility (iPhone bought in
  China, or device location and Apple Account region both China); Eddie Wu quote; Wang Xiaojie (BUPT) comment; CAC completed
  the filing of seven on-device generative AI services for smartphones, including Apple Intelligence, in July.
- TNW, Ana Maria Constantin, 30 Oct 2026 23:24 UTC (read): confirms an earlier Bloomberg report; China's internet regulator
  cleared the setup in July; Apple trained a China-only model with Alibaba's help; features briefly went live in March before
  approval. TNW, Ana Maria Constantin, 15 Jul 2026 (read): Apple-Alibaba deal struck in February 2025; rollout delayed more than
  a year by content filtering and security review.
- Apple Newsroom, 28 Oct 2024 (read): first Apple Intelligence features released in iOS 18.1, US English.
- Apple Form 8-K exhibit 99.1, fiscal Q3 2026 (quarter to 27 Jun 2026), SEC EDGAR (read): Greater China net sales $18,816m vs
  $15,369m; nine months $64,839m vs $49,884m; total nine-month net sales $364,357m. EDGAR shows no fiscal Q4 8-K as of 1 Nov.
- TechCrunch, Anthony Ha, 31 Oct 2026 14:41 PDT (read): Ternus, CEO since the start of September, told Wired "We don't want to
  ship AI for AI's sake."
FACT-CHECK NOTES: Sources differ on device lists (TNW: iPhone 15 Pro and newer); Apple's own list is used. Several aggregators
  (FourWeekMBA, BigGo, Kingy) were seen in search and not used. The Bloomberg report is cited only through TNW. No Alibaba
  share-price figure is used (no market open since the announcement).
OUR ARITHMETIC: 28 Oct 2024 to 31 Oct 2026 = 733 days; Greater China +22.4% y/y in the June quarter; 17.8% of nine-month net
  sales; nine-month Greater China +30.0%. Feature count (18) and Qwen surfaces (3) are our count from Apple's release.
HERO: Wikimedia Commons, "Hangzhou West Lake Apple Store.jpg", Simon Wade, CC BY-SA 4.0, 18 Jan 2015: the store's calligraphy
  hoarding before opening, in Hangzhou, Alibaba's home city. Passers-by are small and not identifiable. Not used on any sister
  site (grep of ~/Sites).

---------- 13:40Z CRYPTO: "Twenty minutes to steal, forty-five days to wash" (marcus-oyelaran, house byline) ----------
SOURCES READ:
- Chainalysis, "2025 Crypto Theft" blog, 18 Dec 2025 (read): DPRK at least $2.02bn in 2025, +51% / +$681m y/y; over $3.4bn stolen
  in all; Bybit $1.5bn; $6.75bn cumulative lower bound; 74% fewer known attacks; 76% of service compromises; IT workers inside
  crypto services; recruiter impersonation with fake "technical screens"; executive outreach posing as investors; laundering:
  Chinese-language money movement and guarantee services, bridges +97%, mixers +100%, >60% of volume in transfers under
  $500,000; roughly 45-day, three-wave laundering pattern.
- TRM Labs, Binance blog, 29/30 Oct 2026 (read): $6.36bn across ten chains, most in about 20 minutes from 20:05 UTC; TraderTraitor
  with high confidence; ~325m USDT sold for ~122,300 ETH at a >10% discount; peel chain of 1,000 and 100 BTC pieces; lending
  against stolen stablecoins on Aave and JustLend; TRM expects bridges, swap services and OTC brokers next.
- TRM Labs, 30 Apr 2026 (read): $577m, 76% of 2026 hack losses through April; Drift $285m on 1 Apr (NK group distinct from
  TraderTraitor; months of social engineering incl. in-person meetings; pre-signed durable-nonce transactions; about 12
  minutes); KelpDAO $292m on 18 Apr (TraderTraitor; two internal RPC nodes compromised, DDoS on external nodes, single
  verifier); KelpDAO ETH swapped to BTC mostly through THORChain; Bybit via a compromised Safe{Wallet} signing interface; NK
  share of hack losses 22% (2022), 37% (2023), 39% (2024), 64% (2025); more than $6bn since 2017.
- TRM Labs, H1 2026 report, 1 Jul 2026 (read): $972m across 207 hacks; NK about $643m, about 66%; H1 2025 $2.3bn, NK roughly
  $1.7bn. Found via CoinGeek (8 Jul), then read at TRM.
- FBI PSA I-022625-PSA, 26 Feb 2025 (read): Bybit, about $1.5bn, on or about 21 Feb 2025, "TraderTraitor"; assets converted to
  bitcoin and dispersed across thousands of addresses on many blockchains; asks RPC node operators, exchanges, bridges and
  DeFi services to block the addresses.
- FBI PSA I-012325-PSA, 23 Jan 2025 (read): IT workers' data extortion, code copied to personal accounts, AI and
  face-swapping in video interviews.
- CISA AA22-108A, 18 Apr 2022 (read): "Lazarus Group, APT38, BlueNoroff, and Stardust Chollima"; recruitment lures to
  sysadmin/DevOps staff and trojanised "TraderTraitor" trading apps.
- Elliptic, Bybit blog, 23 Feb 2025, updated 5 Mar 2025 (read): $1.46bn; tokens swapped for ether on DEXs within minutes; 50
  wallets of about 10,000 ETH each, last emptied 3 March; eXch; most ETH converted to BTC; Cryptomixer and Wasabi.
- Elliptic, Ronin blog, March 2022 with 14 Apr 2022 update (read): 173,600 ETH and 25.5m USDC, about $540m at theft, over $615m
  at discovery; five of nine validator keys; OFAC tied the address to Lazarus on 14 Apr 2022.
- Japan National Police Agency notice, 24 Dec 2024 (read): FBI, DC3 and NPA identify TraderTraitor as responsible for the
  May 2024 theft of about ¥48.2bn ($308m) from DMM Bitcoin.
FACT-CHECK NOTES (owner's lead, r34-nk-crypto-lead.md): $2.02bn, +51% confirmed (Chainalysis). "~60% of all crypto stolen"
  is our arithmetic on Chainalysis (59%); TRM says 64%: both given. "12% of incidents" not found: dropped. "$6.75bn since 2016
  across 263 incidents": $6.75bn confirmed as Chainalysis's cumulative lower bound, but no start year or incident count in the
  source: the 2016 date and 263 figure dropped. "2026 to date ~$1.1bn from 185 incidents, 55%" not found in any source read:
  dropped; TRM's published 2026 figures (H1: $643m of $972m, 207 hacks) predate Binance, which resolves the apparent conflict
  with the $6.36bn Binance figure. Binance $6.36bn and TraderTraitor confirmed (TRM). Group names: CISA's list confirmed;
  vendors use different names and TRM separates the Drift group from TraderTraitor. UN-panel claims left to The 13th Bell's
  state-angle story. Binance is linked, not retold. FBI.gov pages returned 403; FBI/DC3/NPA DMM statement read on the NPA site.
OUR ARITHMETIC: 2024 = $2.02bn - $681m = about $1.34bn; $2.02bn / $3.4bn = 59%; Bybit = 72-74% of the 2025 NK total;
  Binance = 3.1x the 2025 NK total; 2026 attributed >= $643m + $6.36bn = about $7.0bn (lower bound: H2 incidents other than
  Binance not counted), above Chainalysis's $6.75bn cumulative figure; Drift + KelpDAO = $577m, matching TRM's April total.
HERO: Wikimedia Commons, "DMZ - Eulji Observatory highly guarded fences.jpg", Friar's Balsam, CC BY 2.0, 15 Aug 2008: fences
  along the DMZ from the Eulji Observatory. No people. Not used on any sister site.

---------- 13:20Z MARKETS: "Nvidia may cosign the loan for its own chips" (priya-raghavan, house byline) ----------
SOURCES READ:
- TechCrunch, Aditya Mehta, 30 Oct 2026 18:20 PDT (read): The Information reported on Thursday that Nvidia is in talks to
  guarantee "billions" of debt for Nscale's West Virginia campus, corroborated by Bloomberg; a "residual value guarantee": on a
  default Nvidia would temporarily take over the facility and help find a buyer and tenant; first building 460MW, Vera Rubin;
  second ~$45bn Anthropic deal under discussion; Nscale seeking up to $35bn valuation in its IPO; ~25,000 chips running in
  August vs nearly 500,000 planned; The Information: about $170bn of Nvidia investments and credit support to neoclouds and
  large customers; CoreWeave, Nebius and IREN each down more than 30% in October (CNBC, via TechCrunch).
- Nscale Ltd Form S-1, SEC EDGAR, filed 18 Sep 2026 (read): Anthropic Services Agreements of 25 Aug 2026, up to about $44.6bn,
  four agreements, Vera Rubin NVL72 in four tranches at Monarch; "we have not obtained binding commitments for any of the
  financings required"; best-efforts duty to obtain qualifying financing within a specified period; Microsoft up to about
  $43.8bn through December 2033; Monarch Compute Campus, Mason County, ~2,250 acres, up to 8GW gross power, acquired March 2026
  for $792.6m; Nvidia guarantee of up to $860.3m of Ward County, Texas lease obligations (14 Oct 2025) with a $470.0m escrow;
  Nvidia $1.0bn of the minimum $3.1bn convertible subscription, closing on or around 16 Nov 2026; H1 2026 revenue $140.6m;
  cash $1.5bn at 30 Jun 2026.
FACT-CHECK NOTES: The Information and Bloomberg are paywalled (Bloomberg returned 403) and were not read; their reporting is
  attributed through TechCrunch, so the guarantee talks rest on one outlet we could read. No size for the guarantee was
  reported and none is given. The S-1 statements are as of its 18 Sep date. A search snippet tying an Nvidia guarantee to
  "Texas and North Carolina" was checked against the S-1, which says Ward County, Texas only.
OUR ARITHMETIC: $44.6bn / $140.6m = about 317 times half-year revenue; $44.6bn / $1.5bn cash = about 30 times; the who-is-Nvidia
  table compiled from the S-1 and TechCrunch.
HERO: Wikimedia Commons, "Kanawha Ohio confluence.jpg", Charles Johnson, U.S. Army Corps of Engineers, public domain: aerial
  view of Point Pleasant, the seat of Mason County, West Virginia, where the Kanawha meets the Ohio. Not used on any sister site.

Not a repeat: repo grep found no coverage of Apple Intelligence in China, of the Nvidia-Nscale guarantee talks (the 22 Sep Nscale
filing story is linked as background) or of North Korea's laundering pipeline (the Binance theft is linked, not retold).
r34-claims.md checked before writing and before commit. 6-gram overlap with the top outlet sources: lead 1.1% (TNW) and 2.9%
(Xinhua); North Korea 0.0% (Elliptic), 0.9% (TRM), 0.2% (Chainalysis); Nvidia 1.4% (TechCrunch), 1.3% (Nscale S-1).
*/
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const AI = P("ai", "AI", "ai", "Photograph via Wikimedia Commons");
const MK = P("markets", "Markets", "markets", "Photograph via Wikimedia Commons");
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
const APPLE_CN = "https://www.apple.com.cn/newsroom/2026/10/apple-intelligence-features-are-coming-to-users-in-china/";
const XINHUA = "https://english.news.cn/20261101/773fa2ac33a34a5ca3484d7e5920d094/c.html";
const TNW_CN = "https://thenextweb.com/news/apple-intelligence-china-ios-27-3-alibaba-qwen";
const TNW_JUL = "https://thenextweb.com/news/alibaba-qwen-apple-intelligence-china-approved";
const APPLE_US = "https://www.apple.com/newsroom/2024/10/apple-intelligence-is-available-today-on-iphone-ipad-and-mac/";
const AAPL_8K = "https://www.sec.gov/Archives/edgar/data/320193/000032019326000018/a8-kex991q3202606272026.htm";
const TC_TERNUS = "https://techcrunch.com/2026/10/31/apple-ceo-says-the-company-doesnt-want-to-ship-ai-for-ais-sake/";

const CHA_2025 = "https://www.chainalysis.com/blog/crypto-hacking-stolen-funds-2026/";
const TRM_BNB = "https://www.trmlabs.com/resources/blog/north-korea-steals-usd-6-36-billion-from-binance-in-the-largest-hack-in-history";
const TRM_APR = "https://www.trmlabs.com/resources/blog/north-korea-stole-76-of-all-crypto-hack-value-in-2026-with-just-two-attacks";
const TRM_H1 = "https://www.trmlabs.com/resources/blog/h1-2026-crypto-hacks-reach-record-high-as-losses-fall-below-usd-1-billion";
const FBI_BYBIT = "https://www.ic3.gov/PSA/2025/PSA250226";
const FBI_ITW = "https://www.ic3.gov/PSA/2025/PSA250123";
const CISA_TT = "https://www.cisa.gov/news-events/cybersecurity-advisories/aa22-108a";
const ELL_BYBIT = "https://www.elliptic.co/blog/bybit-hack-largest-in-history";
const ELL_RONIN = "https://www.elliptic.co/blog/540-million-stolen-from-the-ronin-defi-bridge";
const NPA_DMM = "https://www.npa.go.jp/bureau/cyber/koho/caution/caution20241224.html";

const TC_NSC = "https://techcrunch.com/2026/10/30/nvidia-weighs-playing-the-cosigner-for-nscales-ai-data-center-in-west-virginia/";
const NSC_S1 = "https://www.sec.gov/Archives/edgar/data/2110365/000119312526395475/ck0002110365-20260918.htm";

const CN_TABLE = table(["Date", "Step", "Source"], [
  ["June 2024", "Apple unveils Apple Intelligence at its developer conference", "Xinhua"],
  ["28 October 2024", "First features released in the US, in US English", `${L(APPLE_US, "Apple")}`],
  ["February 2025", "Apple and Alibaba reach their agreement", `${L(TNW_JUL, "TNW")}`],
  ["March 2026", "Features briefly appear on Chinese iPhones before approval, then are pulled", "TNW"],
  ["July 2026", "Cyberspace regulator completes the filing of seven on-device generative AI services, Apple Intelligence among them", `${L(XINHUA, "Xinhua")}`],
  ["31 October 2026", "Apple and Alibaba announce the China launch", `${L(APPLE_CN, "Apple")}`],
  ["4 November 2026", "Developer beta opens", "Apple"],
  ["December 2026", "Release to users in China with iOS 27.3", "Apple"]
], `Compiled by Komposite from the sources shown. By our count, 733 days separate the US release from Saturday's announcement.`);

const HEIST_TABLE = table(["Victim", "When", "Amount reported", "Attributed to", "Way in, as reported"], [
  ["Binance (exchange)", "29 Oct 2026", "$6.36bn", "TraderTraitor (TRM Labs, \"high confidence\")", "Binance points to a compromised engineer's laptop; TRM says that does not explain everything"],
  ["Bybit (exchange)", "21 Feb 2025", "$1.46bn (Elliptic); about $1.5bn (FBI)", "TraderTraitor (FBI)", "A compromised Safe{Wallet} signing interface (TRM)"],
  ["Ronin bridge (Axie Infinity)", "March 2022", "About $540m at the time; over $615m at discovery", "Lazarus Group (US Treasury, via Elliptic)", "Keys to five of nine validators, socially engineered"],
  ["DMM Bitcoin (exchange, Japan)", "May 2024", "$308m (about ¥48.2bn)", "TraderTraitor (FBI, DC3 and Japan's National Police Agency)", "Not described in the notice we read"],
  ["KelpDAO (restaking protocol)", "18 Apr 2026", "$292m", "TraderTraitor (TRM)", "Two internal RPC nodes poisoned, a single bridge verifier fooled"],
  ["Drift (derivatives exchange)", "1 Apr 2026", "$285m", "A North Korean group distinct from TraderTraitor (TRM)", "Months of social engineering, including in-person meetings, and pre-signed transactions"]
], `Compiled by Komposite from ${L(TRM_BNB, "TRM Labs")}, ${L(TRM_APR, "TRM Labs")}, ${L(ELL_BYBIT, "Elliptic")}, ${L(FBI_BYBIT, "the FBI")}, ${L(ELL_RONIN, "Elliptic")} and ${L(NPA_DMM, "Japan's National Police Agency")}. Amounts are as each source valued them at the time and are not adjusted.`);

const YEAR_TABLE = table(["Year", "Stolen by North Korea-linked hackers", "Share of all crypto hack losses"], [
  ["2024", "About $1.34bn (by our subtraction from Chainalysis)", "39 per cent (TRM)"],
  ["2025", "At least $2.02bn (Chainalysis); Bybit was 72 to 74 per cent of it, by our arithmetic", "59 per cent by our arithmetic on Chainalysis's totals; 64 per cent (TRM)"],
  ["2026, first half", "About $643m (TRM)", "About 66 per cent (TRM)"],
  ["2026, with Binance", "At least $7.0bn, by our arithmetic", "Not yet published"]
], `Sources: ${L(CHA_2025, "Chainalysis")}, ${L(TRM_APR, "TRM Labs")} and ${L(TRM_H1, "TRM Labs")}. The 2026 total adds TRM's first-half figure to its Binance count and leaves out any other second-half incidents, so it is a floor.`);

const NV_TABLE = table(["Nvidia's role", "What the record shows", "Source"], [
  ["Supplier", "The Anthropic contract at Monarch is to deploy Nvidia Vera Rubin NVL72 systems in four tranches", "Nscale S-1"],
  ["Lease guarantor", "Guarantees up to $860.3m of Nscale's lease payments on a facility in Ward County, Texas, for the first five years, backed by a $470.0m escrow", "Nscale S-1"],
  ["Investor", "$1.0bn of a minimum $3.1bn convertible financing, due to close on or around 16 November", "Nscale S-1"],
  ["Possible residual value guarantor", "Would temporarily take over the West Virginia facility and help find a buyer and tenant if Nscale defaulted on construction payments", "The Information and Bloomberg, via TechCrunch"]
], `Compiled by Komposite from ${L(NSC_S1, "Nscale's registration statement")} of 18 September and ${L(TC_NSC, "TechCrunch's account")} of the talks.`);

export default [

/* ---------- 13:20Z MARKETS ---------- */
MK({ slug: "nvidia-may-cosign-the-loan-for-its-own-chips", kick: "AI Infrastructure",
  headline: "Nvidia may cosign the loan for its own chips",
  dek: "Nvidia is in talks to guarantee billions of dollars of debt for Nscale's West Virginia campus, where Anthropic has signed for up to $44.6bn of computing. Nscale's IPO filing says none of the financing for that contract was committed.",
  metaDesc: "Nvidia is in talks to guarantee debt for Nscale's West Virginia campus, home to a $44.6bn Anthropic contract its filing says is not yet financed.",
  author: "priya-raghavan", date: "2026-11-01T13:20:00Z",
  capt: "An aerial view of Point Pleasant, the seat of Mason County, West Virginia, where the Kanawha River meets the Ohio, in a file photograph.",
  tags: [
    { name: "AI Infrastructure", slug: "ai-infrastructure" },
    { name: "Data Centers", slug: "data-centers" },
    { name: "Private Credit", slug: "private-credit" }
  ],
  related: [
    R("/ai/nscales-backlog-has-two-names-on-it/", "IPO"),
    R("/markets/the-bonds-say-fifteen-the-backlog-says-104bn/", "Credit"),
    R("/markets/anthropic-files-with-16-3bn-of-revenue-and-an-80-7bn-loss/", "IPO")
  ],
  body: [
    `Nvidia is in talks to guarantee billions of dollars of debt for Nscale's AI data centre campus in West Virginia, The Information reported on Thursday, in an account Bloomberg corroborated, ${L(TC_NSC, "according to TechCrunch")}. No figure for the guarantee has been reported, and neither company has commented in the accounts we read.`,
    `The arrangement under discussion is a residual value guarantee. If Nscale defaulted on its construction payments, Nvidia would step in, temporarily take over the facility and help find a buyer and a new tenant, TechCrunch said. The money would pay for electricity and construction at the site, where the first building is planned at 460 megawatts and is expected to run Nvidia's Vera Rubin chips. TechCrunch noted that Nvidia's earlier support for cloud providers has mostly covered leases and chip purchases rather than construction.`,
    `The customer is Anthropic. On 25 August Nscale signed four agreements with the AI lab that provide for payments of up to about $44.6bn, subject to delivery and availability requirements, at its Monarch Compute Campus in Mason County, ${L(NSC_S1, "according to Nscale's registration statement")}. The filing describes Monarch as a site of about 2,250 acres with up to 8 gigawatts of gross power, bought in March for $792.6m. It also says Nscale must use its best efforts to obtain financing within a set period, and that "we have not obtained binding commitments for any of the financings required" to perform the contract. That was the position on 18 September, the date of the filing.`,
    `The scale of the gap is plain from the same document. Nscale reported revenue of $140.6m for the first half of 2026 and cash of $1.5bn at the end of June. By our arithmetic, the Anthropic contract is worth about 317 times the company's half-year revenue and about 30 times its cash. Nscale and Anthropic are also discussing a second deal of roughly $45bn for another building, TechCrunch reported. Nscale is seeking a valuation of up to $35bn in its listing.`,
    NV_TABLE,
    `Nvidia would not be new to guaranteeing Nscale's obligations. The filing shows that in October 2025 it agreed to guarantee up to $860.3m of Nscale's payments under a lease in Ward County, Texas, receiving warrants in return, with Nscale keeping $470.0m in escrow as Nvidia's recourse. Nvidia is also putting $1.0bn into Nscale's convertible financing. The Information puts Nvidia's investments and credit support for neoclouds, the specialist AI cloud providers, and other large customers at roughly $170bn, TechCrunch reported.`,
    `What would a guarantee change? A lender to a data centre builder is exposed to two risks: that the tenant walks away, and that the half-built asset is worth little to anyone else. A residual value guarantee from the chip supplier addresses the second, because Nvidia would stand behind the asset's value and help re-let it. It also ties more of Nvidia's balance sheet to demand for its own products, the point TechCrunch made when it described the chipmaker as offering to cosign the loan.`,
    `The talks come as investors mark down the businesses that rent out AI computing. Shares of CoreWeave, Nebius and IREN each fell more than 30 per cent in October, TechCrunch said, citing CNBC, and CoreWeave's 2032 bonds yielded 14.8 per cent earlier in the month, as Komposite <a href="/markets/the-bonds-say-fifteen-the-backlog-says-104bn/">reported</a>. Anthropic, the tenant, made its own listing documents public last week, showing <a href="/markets/anthropic-files-with-16-3bn-of-revenue-and-an-80-7bn-loss/">first-half revenue of $16.3bn and a net loss of $80.7bn</a>.`,
    `Why it matters: the AI build-out is being financed further and further from the companies that will use it, and the risk is being passed back to the supplier. Komposite reported in September that <a href="/ai/nscales-backlog-has-two-names-on-it/">Nscale's backlog has two names on it</a>, Microsoft and Anthropic, and that the Anthropic contract was not yet financed. If Nvidia signs, the third name standing behind that campus will be the company selling the chips.`
  ]
}),

/* ---------- 13:40Z CRYPTO ---------- */
CR({ slug: "twenty-minutes-to-steal-forty-five-days-to-wash", kick: "Crypto Crime",
  headline: "Twenty minutes to steal, forty-five days to wash",
  dek: "North Korea-linked hackers took at least $2.02bn in crypto in 2025 and, with the Binance theft, at least $7bn so far in 2026. The method repeats: a human way in, a drain in minutes, then weeks of swaps, bridges and brokers.",
  metaDesc: "How North Korea's crypto theft works on-chain, from recruiter lures to bridges and brokers, with a table of its largest heists and yearly totals.",
  author: "marcus-oyelaran", date: "2026-11-01T13:40:00Z",
  capt: "Fences along the Korean Demilitarized Zone, seen from the Eulji Observatory in South Korea, in a file photograph.",
  tags: [
    { name: "Digital Assets", slug: "digital-assets" },
    { name: "Threat Intelligence", slug: "threat-intelligence" },
    { name: "Cybersecurity", slug: "cybersecurity" }
  ],
  related: [
    R("/crypto/six-billion-dollars-out-of-binances-hot-wallets/", "Exchanges"),
    R("/cybersecurity/chainalysis-reports-its-own-intruder/", "Data Breach"),
    R("/cybersecurity/hacken-puts-most-q3-hack-losses-outside-the-audit/", "Crypto Hacks")
  ],
  body: [
    `North Korea-linked hackers stole at least $2.02bn in crypto in 2025, a record and 51 per cent more than in 2024, ${L(CHA_2025, "according to Chainalysis")}, and by our arithmetic at least $7bn so far in 2026, most of it in a single theft from Binance. The thefts follow a pattern that analytics firms and the FBI have now documented many times over.`,
    `The pattern has three stages. First comes a way in, usually through people or suppliers rather than a flaw in the code. Then the funds are drained in minutes. Then comes the slow part: weeks or months of converting, splitting and moving the proceeds until they can be sold for cash. The second and third stages leave a record on public blockchains, which is why so much of the process can be described in detail.`,
    `Who is doing it? The US government's 2022 advisory on the group it calls TraderTraitor says the industry tracks it as "Lazarus Group, APT38, BlueNoroff, and Stardust Chollima", ${L(CISA_TT, "according to CISA")}. The names are not interchangeable in every vendor's usage. TRM Labs, a blockchain analytics firm, attributes Binance and KelpDAO to TraderTraitor but says April's Drift theft was the work of a separate North Korean group.`,
    HEIST_TABLE,
    `How do they get in? The recruiter lure is the oldest route. CISA described spear-phishing messages offering "high-paying jobs" to system administrators and DevOps staff, which led them to download trojanised trading apps. Chainalysis says the approach has widened to fake hiring processes with "technical screens" for web3 and AI firms, and to approaches posing as investors or acquirers. North Korean IT workers hired under false identities are a third route: the FBI has warned that they have used AI and face-swapping in video interviews, copied company code to personal accounts and held stolen data for ransom, ${L(FBI_ITW, "in a January 2025 notice")}. The fourth is the supply chain. Bybit's $1.46bn was taken through a compromised Safe{Wallet} signing interface, TRM says, and KelpDAO's through two of its own poisoned RPC nodes, the servers that relay blockchain data.`,
    `The drain itself is fast. TRM counts $6.36bn moved out of Binance wallets on ten blockchains, most of it in about 20 minutes, ${L(TRM_BNB, "in its analysis of the theft")}. Drift lost $285m in about 12 minutes through transactions its own signers had been induced to pre-authorise, TRM said in April. Komposite <a href="/crypto/six-billion-dollars-out-of-binances-hot-wallets/">reported the Binance theft</a> on Friday and does not retell it here.`,
    `The first move after a theft is to swap anything that can be frozen for something that cannot. At Bybit, staked ether tokens were swapped for ether on decentralised exchanges within minutes and spread across 50 wallets of about 10,000 ETH each, ${L(ELL_BYBIT, "Elliptic reported")}. At Binance, TRM says the attacker sold about 325m USDT, a dollar stablecoin its issuer can freeze, for about 122,300 ether at a discount of more than 10 per cent, and borrowed ether against stolen stablecoins on lending protocols. It also split 18,270 bitcoin into pieces of 1,000 and 100 coins.`,
    `Then comes chain hopping. Most of Bybit's ether was converted into bitcoin, much of it through THORChain, a cross-chain swap protocol, according to TRM, and through eXch, a swap service that refused Bybit's requests to block the flows, according to Elliptic. The bitcoin then went through mixers. ${L(FBI_BYBIT, "The FBI's notice")} on Bybit asked node operators, exchanges, bridges and decentralised finance services to block the addresses involved. Compared with other thieves, North Korean groups use bridges 97 per cent more and mixers 100 per cent more, Chainalysis found, and send more than 60 per cent of their volume in transfers of less than $500,000.`,
    `The last stage is cash. Chainalysis identifies Chinese-language money movement and guarantee services as the most distinctive feature of North Korean laundering, and describes a pattern of about 45 days after a large theft: mixing and decentralised finance in the first five days, exchanges with limited identity checks next, and conversion through no-KYC exchanges, guarantee services and Chinese-language laundering networks from about day 20. For Binance, TRM expects bridges, swap services and over-the-counter brokers next. Some funds wait: TRM said in April that the ether taken from Drift had not moved.`,
    YEAR_TABLE,
    `What do the totals show? Fewer, larger thefts. Chainalysis counted 74 per cent fewer known North Korean attacks in 2025 than in 2024 while the value stolen rose. By our arithmetic, the Bybit theft alone was 72 to 74 per cent of North Korea's 2025 haul, and Binance is 3.1 times that whole year. The sources differ on share: on Chainalysis's figures North Korea took about 59 per cent of the more than $3.4bn stolen in 2025, while TRM puts its share at 64 per cent. TRM's figures for the first half of 2026, $643m of $972m across 207 hacks, ${L(TRM_H1, "published in July")}, predate Binance, which is why earlier tallies for this year look small.`,
    `Why it matters: the weak point is rarely the cryptography. In every theft in our table whose way in has been described, the attackers went through people, suppliers or the infrastructure around the code, and the money then left through services willing to swap, bridge or broker it. The analytics firms that trace these flows are themselves targets: Chainalysis, which helps trace the Binance funds, <a href="/cybersecurity/chainalysis-reports-its-own-intruder/">disclosed an intrusion of its own</a> on Friday. Hacken found that most third-quarter hack losses came from <a href="/cybersecurity/hacken-puts-most-q3-hack-losses-outside-the-audit/">systems outside the audit</a>, which is where North Korea has been working for years.`
  ]
}),

/* ---------- 14:00Z AI (LEAD) ---------- */
AI({ slug: "apples-ai-reaches-china-two-years-and-a-partner-later", kick: "Consumer AI",
  headline: "Apple's AI reaches China, two years and a partner later",
  dek: "Apple Intelligence will reach iPhone users in China with iOS 27.3 in December, with a developer beta from Wednesday. Apple's own models run most features; Alibaba's Qwen works inside Siri, Writing Tools and Visual Intelligence. The new Siri is not included.",
  metaDesc: "Apple Intelligence reaches China in December with iOS 27.3, Apple said; Alibaba's Qwen works in Siri, Writing Tools and Visual Intelligence. Beta 4 Nov.",
  author: "dana-whitfield", date: "2026-11-01T14:00:00Z",
  capt: "The Apple Store at West Lake in Hangzhou, Alibaba's home city, behind a calligraphy hoarding before its opening, in a file photograph.",
  tags: [
    { name: "Consumer Technology", slug: "consumer-technology" },
    { name: "Emerging Markets", slug: "emerging-markets" },
    { name: "Regulation", slug: "regulation" }
  ],
  related: [
    R("/ai/the-model-said-no-tools-then-called-beijing/", "AI Security"),
    R("/ai/china-registers-its-ai-exports/", "Export Controls"),
    R("/technology/apple-smart-home-blitz-october-13/", "Apple")
  ],
  body: [
    `Apple Intelligence will launch for iPhone users in mainland China with iOS 27.3 in December, with Alibaba's Qwen model built into Siri, Writing Tools and Visual Intelligence, ${L(APPLE_CN, "Apple said on Saturday")}. A developer beta opens on Wednesday, 4 November. The launch comes two years after the features reached US users.`,
    `Apple's announcement lists 18 features by our count. Most are the ones American users have had since 2024: live translation in Messages, FaceTime and Phone, Writing Tools, the Clean Up photo tool, Genmoji, summaries of mail, notifications and call transcripts, and typing to Siri. Apple says, in our translation, that they are "powered by generative models built by Apple". Qwen is named in three places. Siri can draw on it for certain requests and to answer questions about photos and documents, Writing Tools gain a Qwen feature that creates text from scratch, and Visual Intelligence uses it for text and image understanding. Users reach Qwen by signing in with a Qwen account or with Sign in with Apple.`,
    `What is left out? Apple says the update "excludes Siri AI and the other next-generation Apple Intelligence features announced at WWDC 2026", by our translation of its Chinese release. The rebuilt Siri is therefore not coming to China yet. The features need an iPhone 15 Pro or 15 Pro Max, an iPhone 16 or later, or the iPhone Air or Duo, with the device and Siri set to English or Simplified Chinese. Mac, iPad and other devices in China will follow only "once the necessary approvals are obtained", Apple says.`,
    `Alibaba made its own announcement on Saturday. Users can choose whether to turn on the Qwen integration and what information to share, and Alibaba said it "will not use user requests or generated responses for model training", ${L(XINHUA, "Xinhua reported")}. Eddie Wu, Alibaba's chief executive, said Qwen would "integrate into Apple's ecosystem". Wang Xiaojie, an AI expert at Beijing University of Posts and Telecommunications, told Xinhua it was the first time a leading global consumer hardware maker had used a Chinese large model as its main system-level AI in China. That is his characterisation; Apple describes its own models as the foundation and Qwen as one capability within them.`,
    `The route here was long. Apple and Alibaba reached their agreement in February 2025, and content filtering and security review then delayed the rollout by more than a year, ${L(TNW_JUL, "TNW reported")} in July. The features briefly appeared on Chinese iPhones in March before they were approved and were then withdrawn, ${L(TNW_CN, "TNW said")}, adding that Apple trained a China-only model with Alibaba's help. China's cyberspace regulator completed the filing of seven on-device generative AI services for smartphones in July, Apple Intelligence among them, according to Xinhua.`,
    CN_TABLE,
    `Why a local partner? Apple has not said. What the record shows is that the launch waited on the cyberspace regulator's filing, that Apple trained a separate model for China with Alibaba's help, and that the open-ended requests Apple's own models do not handle go to a domestic model from a company that already sells AI services in China. Qwen is Alibaba's family of large language models. Komposite reported last week on a security test in which, Cohere said, a Qwen model <a href="/ai/the-model-said-no-tools-then-called-beijing/">tried to upload a test string to a Beijing cloud bucket</a>; Alibaba did not comment at the time.`,
    `The commercial stakes are visible in Apple's own accounts. Greater China produced $18.8bn of net sales in the quarter to 27 June, up 22.4 per cent from a year earlier by our arithmetic, ${L(AAPL_8K, "according to Apple's results")}. Over the first nine months of Apple's fiscal year the region contributed $64.8bn, or 17.8 per cent of total net sales, and grew 30.0 per cent. Apple has not yet reported its September-quarter results. Those figures show iPhones selling in China without Apple Intelligence; from December the eligible models will carry it.`,
    `Apple's chief executive has been careful not to promise too much. "We don't want to ship AI for AI's sake," John Ternus, who took over at the start of September, told Wired in an interview, ${L(TC_TERNUS, "TechCrunch reported")} on Saturday. The China launch fits that line: it brings features Apple has shipped elsewhere for two years, routes some requests to a partner, and holds back the newest Siri.`,
    `Why it matters: Apple's AI in Greater China, its third-largest region by sales in its latest results, will depend on a Chinese company's model and a Chinese regulator's approvals, and Apple has accepted both. It is the clearest case yet of a US platform splitting its AI by jurisdiction, as China tightens its own rules on what AI may cross its borders, including the export-control catalogue Komposite covered when <a href="/ai/china-registers-its-ai-exports/">China proposed listing 40 technologies</a>. Developers can test the China build from Wednesday.`
  ]
}),

];
