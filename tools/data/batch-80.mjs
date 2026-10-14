import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const MK = P("markets", "Markets", "markets", "Photograph via Wikimedia Commons");
const CY = P("cybersecurity", "Cybersecurity", "cybersecurity", "Photograph via Wikimedia Commons");
const AI = P("ai", "AI", "ai", "Photograph via Wikimedia Commons");
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

/** Batch 80 — Wednesday 14 October 2026, round 8. One main story and
 *  three others. Lead: the SEC's approval of Cboe's binary KPI options
 *  (Markets, 13:15Z, newest, so the front-zone builder makes it the lead).
 *  Others, newest first: Ledger implant (Cybersecurity 13:00Z) and Maia 300
 *  (AI 12:45Z) take the two cluster slots under the lead; Binance Pool
 *  (Crypto 12:30Z) takes the big Latest card. Repeat check: repo grep for
 *  Maia, CryptoBilis, Ledger, "Binance Pool", "binary option", Cboe, KPI:
 *  nothing on any of these events. The 29 Sep CCUS margin story is linked.
 *
 *  MARKETS / CBOE BINARY KPI OPTIONS (lead). Checked 14 Oct against the raw
 *  text of SEC Release 34-106659 (SR-CBOE-2026-061, 13 Oct 2026, PDF text
 *  extracted in full) and Chairman Atkins's 13 Oct statement (page HTML).
 *  Verified: filed 30 Jun; FR 15 Jul; deadline 13 Oct (Rel. 106196);
 *  Amendment No. 1 filed 1 Oct, "replaces and supersedes the original filing
 *  in its entirety"; accelerated approval; $1 exercise settlement amount;
 *  European-style, cash-settled; "meets or exceeds" the strike; KPI in an
 *  earnings-related filing; issuer list (Apple ... Coinbase, JPMorgan ...
 *  Tesla, Walt Disney) and KPI table (NVIDIA Data Center Revenue, Tesla
 *  Model 3/Y Production, Meta Family Daily Active People); fully funded;
 *  electronic and complex orders only, no FLEX or floor; 25,000 standard
 *  contracts, 100 binary = 1 standard; 250,000 for the stock options ("ten
 *  times higher"); commenter letters (Paradigm, Rothera, Kalshi 5 Aug;
 *  Thesis Market 9 Sep; Robinhood agrees with Cboe); commenters' wait-for-
 *  CCUS/OPRA/FINRA argument and the Commission's "separate matter" reply;
 *  "will clear through CCUS, subject to CCUS receiving approval of its
 *  application for temporary registration"; price "expected ... to move in
 *  relation to the value of the issuer's stock"; one commenter: no "settle"
 *  on price or value of a security; joint SEC-CFTC request for comment;
 *  "does not address what may be similar products"; FINRA surveillance.
 *  Atkins quote "a new spirit of harmonization, innovation, and investor
 *  choice" verified verbatim on the SEC page; "does not address—and does not
 *  foreclose—CFTC jurisdiction" verbatim.
 *  CHANGED: [VERIFY] flags resolved; "the order gives no date" replaced by
 *  the CCUS condition; the materiality sentence reworded to match the order;
 *  "on Friday" for the CFTC proposal made "on 9 October"; honorifics cut.
 *  Our arithmetic: 25,000 x 100 = 2.5 million binary contracts, $2.5m at $1.
 *  Hero: Old Post Office, Chicago (Cboe Global Markets is a tenant),
 *  Teemu008, CC BY-SA 2.0, 2010. Not used elsewhere on the site.
 *
 *  CYBERSECURITY / LEDGER IMPLANT. Checked 14 Oct against Ledger's own X
 *  posts read raw: @Ledger_Support 9 Oct (pause, "last 90 days"), 10 Oct
 *  (implant in one device), @Ledger 11 Oct 72-hour update ("all confirmed
 *  cases ... involve devices sold through the Southeast Asia reseller
 *  CryptoBilis"), 13 Oct 06:39Z Donjon update (LTE, eSIM, Secure Element
 *  untouched; "Figures circulating online come from third parties and
 *  Ledger has not fully verified them"), 13 Oct 12:29Z MediaMarkt Saturn
 *  update ("No loss of funds were reported"), 13 Oct 22:03Z Southeast Asia
 *  and Hong Kong suspension (seven markets listed). Bitquery's own
 *  investigation page read raw: $102.0M from 324 wallets on six chains
 *  (12 Oct count), "more than the $86M first reported"; 6 in 10 victim
 *  wallets first funded inside the 90-day window, more than 8 in 10 from
 *  June. Karpelès's own posts (9 Oct) read raw for the LTE chip, e-SIM and
 *  antenna; Help Net Security (read raw) and others place his unit in
 *  Malaysia; The Block (403 to direct fetch, read via fetch tool) reports a
 *  Ledger Flex bought at Singapore's airport. Both given, attributed.
 *  CHANGED: loss figures rebuilt from Bitquery's page ($93M was an earlier
 *  count; HNS's attribution of the 90-day quote was to Bitquery, not to
 *  HNS); the X user's claim corrected from "Friday, two devices" to his
 *  Sunday post (one device, in store, official reseller in Europe), with
 *  BTC-Echo's report of a second MediaMarkt unit on 12 Oct; Ledger's 13 Oct
 *  evening suspension added. CUT: MediaMarkt spokesperson quote and Trezor's
 *  Danny Sanders quote (only seen through a summarising tool); Trezor and
 *  OneKey details now paraphrased and attributed to The Block.
 *  Hero: Ledger Nano S, Motokoka, CC BY-SA 4.0. Ledger is the subject.
 *
 *  AI / MICROSOFT MAIA 300. Checked 14 Oct against the raw HTML of Scott
 *  Guthrie's post (12 Oct) and the Azure deep dive (Borkar and Dighe,
 *  12 Oct): "we expect Maia 300 to deliver 40% more tokens per megawatt
 *  compared to leading GPU-based systems" (no system, model or workload
 *  named); "Maia 300 will begin production deployments in 2027"; "scale our
 *  Azure Maia family to multi-gigawatt deployments starting in 2027, making
 *  Maia the primary inference system for Microsoft products and services";
 *  Maia 200 "up to 1.7x more tokens per watt ... compared with leading GPU
 *  infrastructure" (also unnamed); 96 accelerators, 167 kW, 27.6 TB HBM,
 *  1.7 PB/s, 950 W TDP, eight HBM4 stacks, 18 TB/s, 288 GB, N2P, 12,288
 *  accelerators, 128 racks; "up to 7 times" rack-scale throughput and "more
 *  than 2.5 times" / "up to 2.5x" performance per watt vs Maia 200; "useful
 *  tokens per watt and useful tokens per dollar" (deep dive); Ignite "next
 *  month" (both posts). Computerworld (raw): "after the turn of the year",
 *  Maia 200 "launched in January", The Verge on Nvidia and AMD.
 *  CHANGED: timing conflict stated (Microsoft gives only the year);
 *  baseline caveat extended to the Maia 200 claim; [VERIFY] flags removed.
 *  Hero: Azure data centres at Wenatchee, Washington, Tedder, CC BY 4.0.
 *
 *  CRYPTO / BINANCE POOL. Checked 14 Oct against the raw announcement text
 *  (Binance CMS API, published 2026-10-13 03:00:09 UTC): "As part of our
 *  ongoing review of products and services"; closure 2026-11-10 07:00 UTC;
 *  KYC by 2026-11-10 23:59 UTC; pages until 2026-11-24 07:00 UTC; product
 *  and feature list; eligible shares counted. The Block (fetch tool): Nest
 *  Trading options, $433.4bn / $29.5bn, AI interface on Monday after a
 *  ~150,000-user beta.
 *  CHANGED: the draft said Binance gave no reason; it cites an "ongoing
 *  review of products and services". Paragraphs rebuilt around that.
 *  Our arithmetic: 13 Oct to 10 Nov = 28 days; 433.4 / 29.5 = 14.7.
 *  Hero: Canaan AvalonMiner A10 machines, Canaan, CC BY-SA 4.0.
 */

const ORDER = "https://www.sec.gov/files/rules/sro/cboe/2026/34-106659_1.pdf";
const ATKINS = "https://www.sec.gov/newsroom/speeches-statements/atkins-101326-statement-commissions-approval-proposed-rule-change-permit-listing-binary-options-overlying-key";

const LEDGER_DONJON = "https://x.com/Ledger/status/2109896739985453358";
const LEDGER_72H = "https://x.com/Ledger/status/2109331538072494364";
const LEDGER_MM = "https://x.com/Ledger/status/2109984923343782374";
const LEDGER_SEA = "https://x.com/Ledger/status/2110129361382994076";
const LEDGER_FIRST = "https://x.com/Ledger_Support/status/2108551100613714002";
const BITQUERY = "https://bitquery.io/investigations/ledger-cryptobilis-hack";
const HNS = "https://www.helpnetsecurity.com/2026/10/12/ledger-wallets-compromised-via-hardware-implant/";
const BLOCK_L = "https://www.theblock.co/news/business/2026-10-13-ledger-confirms-hardware-implant-cryptobilis-reseller-units-mediamarkt-suspends-sales-europe-418442";
const BTCECHO = "https://www.btc-echo.de/news/ledger-skandal-erreicht-europa-239048/";

const GUTHRIE = "https://blogs.microsoft.com/blog/2026/10/12/microsoft-to-expand-azure-maia-system-to-multi-gigawatt-deployments/";
const DEEPDIVE = "https://azure.microsoft.com/en-us/blog/deep-dive-into-azure-maia-300-architecture/";
const CW = "https://www.computerworld.com/article/4234722/microsoft-unveils-new-maia-300-ai-chip.html";

const BINANCE = "https://www.binance.com/en/support/announcement/detail/2b45800173fd44f48b4517f25f941434";
const BLOCK_B = "https://www.theblock.co/news/business/2026-10-13-binance-to-shut-down-mining-pool-cloud-mining-and-related-services-418410";

export default [

/* ---------- 12:30Z CRYPTO ---------- */
CR({ slug: "binance-gives-miners-four-weeks", kick: "Exchanges",
  headline: "Binance gives miners four weeks",
  dek: "Binance said on Tuesday it will shut Binance Pool, Pool Savings, Cloud Mining and Transaction Accelerator on 10 November, citing an ongoing review of its products. Miners must point their hardware at another pool before then.",
  metaDesc: "Binance said on Tuesday it will discontinue Binance Pool, Cloud Mining and related services on 10 November, telling miners to move hashrate to another pool.",
  author: "marcus-oyelaran", date: "2026-10-14T12:30:00Z",
  capt: "Bitcoin mining machines, in a file photograph.",
  tags: [
    { name: "Digital Assets", slug: "digital-assets" },
    { name: "Market Structure", slug: "market-structure" },
    { name: "Trading", slug: "trading" }
  ],
  related: [
    R("/crypto/perpetual-futures-come-for-the-stocks/", "Derivatives"),
    R("/crypto/two-coins-one-exchange-no-margin/", "Exchanges"),
    R("/crypto/bitcoin-mining-grid-services/", "Mining")
  ],
  body: [
    `Binance said on Tuesday it will discontinue Binance Pool, its mining pool, along with Pool Savings, Cloud Mining and Transaction Accelerator, "as part of our ongoing review of products and services", in a ${L(BINANCE, "notice published at 03:00 UTC")}. The services end at 07:00 UTC on 10 November, four weeks after the notice by our count. From that time, the exchange says, it will begin disconnecting mining connections and disable its Stratum URLs and mining endpoints, and hashrate submitted afterwards will not be credited.`,
    `The notice lists related features that go with the pool: Telegram hashrate alerts, email notifications and the mining pool API. Miners are told to reconfigure their machines to point to a different pool before the deadline to avoid interruptions. Eligible shares submitted before the cutoff count toward the final reward calculation under the pool's rules, the notice says, and users with active Pool Savings positions are asked to redeem or unsubscribe before the service ends.`,
    `Payments still owed follow a set path. Eligible outstanding rewards, balances, refunds or settlements will be processed after the cutoff, subject to product rules, account status, risk controls, compliance checks and applicable law. Users are asked to complete any required identity verification by 23:59 UTC on 10 November. Binance Pool pages will stay viewable for historical records until 07:00 UTC on 24 November, after which they become permanently inaccessible, and the notice tells users to download any records they need.`,
    `The review is the only reason the notice gives. ${L(BLOCK_B, "The Block, which reported the closure")}, placed it alongside the exchange's recent product choices. Last month, it reported, Binance announced plans for physically settled options on more than 1,000 US-listed stocks through Nest Trading, its broker-dealer regulated in Abu Dhabi Global Market. The Block also reported traditional-finance perpetual futures volume of $433.4bn in August, up from $29.5bn in January, and said Binance rolled out an AI-powered trading interface to global English-language users on Monday after a beta of about 150,000 users. We have not verified the volume figures.`,
    `By our arithmetic, the August figure is about 14.7 times January's. If it holds, the exchange's growth is coming from products that look like conventional markets, which mining services do not. That is an inference from the product list, not a statement from Binance. The company has not said how large the pool was, how many miners it served or whether it will point them to a successor, and the notice does not address those points.`,
    `For miners the change is mainly logistics. Miners who direct hashrate to a pool are paid in proportion to the shares they submit, so a pool's closure forces a switch to another operator and, for holders of Pool Savings positions, a decision on redemption. Four weeks is enough time to repoint hardware. Cloud Mining users run on the same schedule. The exchange itself is not closing, and the notice does not mention its spot or derivatives businesses.`,
    `The move sits alongside the exchange's push into instruments that mirror equity markets, which we have followed in <a href="/crypto/perpetual-futures-come-for-the-stocks/">perpetual futures on individual stocks</a> and <a href="/crypto/two-coins-one-exchange-no-margin/">the limits some venues put on leverage</a>. Mining has its own, separate shift, as <a href="/crypto/bitcoin-mining-grid-services/">operators reposition as grid assets</a>.`
  ]
}),

/* ---------- 12:45Z AI ---------- */
AI({ slug: "forty-per-cent-more-tokens-against-an-unnamed-gpu", kick: "AI Chips",
  headline: "Forty per cent more tokens, against an unnamed GPU",
  dek: "Microsoft on Monday unveiled Maia 300, its third-generation AI accelerator, and said it expects 40 per cent more tokens per megawatt than leading GPU-based systems. It did not name the systems, and production deployments begin in 2027.",
  metaDesc: "Microsoft unveiled its Maia 300 AI chip on Monday, saying it expects 40 per cent more tokens per megawatt than unnamed leading GPU systems; deployments start in 2027.",
  author: "dana-whitfield", date: "2026-10-14T12:45:00Z",
  capt: "Microsoft Azure data centres near Wenatchee, Washington, in a file photograph.",
  tags: [
    { name: "Semiconductors", slug: "semiconductors" },
    { name: "Data Centers", slug: "data-centers" },
    { name: "Cloud", slug: "cloud" }
  ],
  related: [
    R("/ai/the-buyers-started-making-their-own/", "AI Chips"),
    R("/ai/broadcom-forecast-prices-the-custom-silicon-boom/", "Semiconductors"),
    R("/ai/nvidia-weighs-buying-the-lab-it-already-funds/", "Dealmaking")
  ],
  body: [
    `Microsoft on Monday unveiled Maia 300, the third generation of its in-house AI accelerator, and said it will scale the Azure Maia family to multi-gigawatt deployments, ${L(GUTHRIE, "Scott Guthrie, the company's executive vice president for cloud and AI, wrote")} in a blog post. "We expect Maia 300 to deliver 40% more tokens per megawatt compared to leading GPU-based systems," Guthrie wrote. The post does not name the systems, models or workloads behind that comparison, and Microsoft presents the figure as an expectation, not a measured result.`,
    `"Maia 300 will begin production deployments in 2027," the post says. Guthrie wrote that Microsoft will "scale our Azure Maia family to multi-gigawatt deployments starting in 2027, making Maia the primary inference system for Microsoft products and services". ${L(CW, "Computerworld reported")} that Microsoft plans to deploy the chip "after the turn of the year"; Microsoft's own post gives only the year. Computerworld also said, citing The Verge, that the chip will make Microsoft less dependent on Nvidia and AMD. Microsoft's post frames the effort around efficiency and capacity and does not name suppliers.`,
    `Rani Borkar and Saurabh Dighe of Microsoft's Azure hardware group set out the design in ${L(DEEPDIVE, "a separate technical post")}. Compute chiplets are built on TSMC's N2P process, and each accelerator has eight HBM4 memory stacks providing 288 GB of capacity and 18 TB per second of bandwidth, within a 950-watt power rating given in Guthrie's post. A rack holds 96 accelerators in a 167-kilowatt envelope, and a superpod can span up to 12,288 accelerators across up to 128 racks. By our arithmetic, 96 accelerators at 288 GB each gives 27.6 TB of memory per rack, which matches the rack figure Microsoft gives.`,
    `Most of Microsoft's comparisons are with its own previous chip. The technical post says a full rack delivers up to seven times the token throughput of Maia 200 and gives performance per watt as "more than 2.5 times" the earlier chip's in one passage and "up to 2.5x" in another. It gives no tokens-per-megawatt figure, so the 40 per cent comparison with GPU systems rests on Guthrie's post. Guthrie also wrote that Maia 200 delivers up to 1.7 times more tokens per watt for AI features in Teams, Copilot and Cowork than "leading GPU infrastructure", again without naming it. Neither post publishes a benchmark method.`,
    `Maia 200, the previous generation, launched in January, Computerworld reported. Guthrie's post says it now serves Microsoft production workloads including Copilot and supports the company's MAI model team, with GitHub Copilot and Microsoft Foundry to follow by the end of the year. It runs OpenAI models, Microsoft's MAI models and open-source model families, the post says, and is deploying across the United States, Europe and Australia.`,
    `The announcement fits a pattern in which large cloud customers of the GPU makers design their own silicon for inference, the workload that grows with every user query. As <a href="/ai/the-buyers-started-making-their-own/">we reported</a>, the largest buyers of AI accelerators now ship their own chips at volume, which changes supplier leverage more than it changes raw performance. Microsoft's plan to make Maia the primary inference system is about its own products and services. Neither post says whether Azure will change its purchases of third-party accelerators for customers.`,
    `The posts also leave open what Maia 300 costs to build and run. The technical post says the chip is designed to maximise "useful tokens per watt and useful tokens per dollar", but Microsoft publishes no price or cost comparison. Custom silicon is also a supply-chain commitment, as <a href="/ai/broadcom-forecast-prices-the-custom-silicon-boom/">our coverage of Broadcom's forecast</a> showed. Microsoft said it will share more at its Ignite conference in San Francisco next month.`
  ]
}),

/* ---------- 13:00Z CYBERSECURITY ---------- */
CY({ slug: "a-wallet-that-passed-the-genuine-check", kick: "Supply Chain",
  headline: "A wallet that passed the genuine check",
  dek: "Ledger says an implant hidden in devices sold by a Southeast Asian reseller read recovery phrases off the screen and sent them over a mobile link. It has asked resellers in seven Asian markets to pull its devices, and MediaMarkt Saturn has stopped selling them. Ledger has not verified the loss figures in circulation.",
  metaDesc: "Ledger says an implant in wallets sold via reseller CryptoBilis sent recovery phrases over LTE; it has paused sales across Southeast Asia and loss figures are unverified.",
  author: "sam-porter", date: "2026-10-14T13:00:00Z",
  capt: "A Ledger Nano S hardware wallet, in a file photograph.",
  tags: [
    { name: "Cybersecurity", slug: "cybersecurity" },
    { name: "Supply Chain", slug: "supply-chain" },
    { name: "Custody", slug: "custody" },
    { name: "Digital Assets", slug: "digital-assets" }
  ],
  related: [
    R("/cybersecurity/a-softbank-cloud-tells-customers-to-rebuild/", "Cybersecurity"),
    R("/crypto/the-adviser-holds-the-keys-when-no-one-else-will/", "Custody"),
    R("/cybersecurity/a-16-year-old-and-110-terabytes/", "Cybersecurity")
  ],
  body: [
    `Ledger has described how an unauthorised implant in devices sold through a Southeast Asian reseller stole owners' recovery phrases. In ${L(LEDGER_DONJON, "an update on X on Tuesday")}, the company said its Donjon security team found that the implant sits inside the enclosure and reads what is shown on the screen. When the device displays the 24-word recovery phrase during setup, a microcontroller decodes the words and transmits them over LTE using a provisioned eSIM. Ledger said the implant is a separate component that does not modify the Secure Element or its operating system and does not alter transactions or signatures.`,
    `Ledger first said on 9 October that it was investigating losses among users in Southeast Asia who had bought from the reseller, CryptoBilis, and ${L(LEDGER_FIRST, "asked it to pause sales and shipments")}. In a ${L(LEDGER_72H, "72-hour update")} on Sunday it said "all confirmed cases related to the disclosed draining incident of Oct 9th, 2026, involve devices sold through the Southeast Asia reseller CryptoBilis", that its systems and direct sales channels were unaffected, and that CryptoBilis had stopped selling hardware wallets. On Tuesday evening it ${L(LEDGER_SEA, "asked resellers and distributors")} in Indonesia, Singapore, Thailand, the Philippines, Vietnam, Malaysia and Hong Kong to suspend sales and take its devices off the shelves while the investigation continues.`,
    `The size of the losses is not established. Ledger said on Tuesday that it has not confirmed the number of affected users or the total value lost, and that figures circulating online come from third parties and have not been fully verified. On-chain researchers put the total above $86m on the day of the drain. ${L(BITQUERY, "Bitquery")}, a blockchain analytics company, has since counted $102.0m taken from 324 wallets on six blockchains, a figure it has revised upward as it found more drained wallets.`,
    `Much of the public detail on the hardware came first from Mark Karpelès, the former chief executive of Mt. Gox. He posted photos of a small board hidden under a device's screen and said that all versions he had seen carry an LTE chip, an e-SIM and an antenna, and that the implant "just monitors what's shown on the screen". The unit still passed Ledger's Genuine Check, he said, because the security chip is real, ${L(HNS, "Help Net Security reported")}. Accounts of where he bought it differ. Help Net Security and other outlets said his tampered unit was bought in Malaysia; ${L(BLOCK_L, "The Block")} reported that he said on Tuesday that a Ledger Flex bought at Singapore's airport contained an implant, and that Ledger had not confirmed a link to the same incident.`,
    `The question now is whether the problem stops at one reseller. Ledger said on Tuesday that MediaMarkt Saturn has, ${L(LEDGER_MM, "with Ledger's alignment")}, stopped selling its devices in stores and online after one customer in Germany reported an implant, and that no loss of funds was reported in that case. A user on X had posted photos on Sunday of a device he said he had bought in store from an official reseller in Europe, and German outlet ${L(BTCECHO, "BTC-Echo")} reported that a second unit he bought at MediaMarkt in Germany on 12 October also held an implant. Those claims are unverified. Ledger says it is reviewing reports of implants in other devices and locations and has not verified a drain linked to a device bought outside Southeast Asia.`,
    `Ledger's advice is not to set up a device bought from CryptoBilis and, for anyone who already has, to move assets promptly to a new device with a new recovery phrase. Its first notice addressed buyers from the last 90 days. Bitquery found that about six in ten of the victim wallets it checked first received funds inside that window and more than eight in ten from June onward, which it said suggests the risk may reach back about four months. Ledger tells users who lost funds to coordinate with law enforcement before opening the device.`,
    `Rivals have moved to limit their own exposure. Trezor said it had seen no evidence that its devices were compromised and is cutting back its reseller network, with notified resellers losing authorisation on 1 January 2027, The Block reported. OneKey offered free replacements for devices bought through CryptoBilis between 1 March and 13 October, according to the same report.`,
    `The episode moves the risk from the wallet's software to its supply chain. A device can carry genuine components and still be altered after it leaves the factory, and a check that verifies the chip does not examine what is wrapped around it. Komposite has covered <a href="/crypto/the-adviser-holds-the-keys-when-no-one-else-will/">who holds the keys</a> when owners do not, and <a href="/cybersecurity/a-softbank-cloud-tells-customers-to-rebuild/">infrastructure compromises</a> on the enterprise side. Ledger says it is still investigating who tampered with the devices and where in the distribution chain it happened.`
  ]
}),

/* ---------- 13:15Z MARKETS (lead) ---------- */
MK({ slug: "an-option-that-pays-on-a-metric", kick: "Options",
  headline: "An option that pays on a metric, not a price",
  dek: "The SEC on Tuesday approved Cboe's plan to list binary options that pay $1 if a company's reported figure, such as revenue or users, meets a set level. The order treats them as securities options, over comments that they look more like something else.",
  metaDesc: "The SEC on Tuesday approved Cboe's rule change to list binary options settled on issuers' reported KPIs, treating them as securities options rather than swaps.",
  author: "priya-raghavan", date: "2026-10-14T13:15:00Z",
  capt: "The Old Post Office in Chicago, where Cboe Global Markets is among the tenants, in a file photograph.",
  tags: [
    { name: "Market Structure", slug: "market-structure" },
    { name: "Regulation", slug: "regulation" },
    { name: "Trading", slug: "trading" }
  ],
  related: [
    R("/policy/a-swap-on-the-exchange-a-bet-at-the-sportsbook/", "Prediction Markets"),
    R("/markets/the-margin-is-named-in-the-rule/", "Markets"),
    R("/crypto/perpetual-futures-come-for-the-stocks/", "Derivatives")
  ],
  body: [
    `The Securities and Exchange Commission on Tuesday approved a rule change allowing Cboe Exchange to list binary options whose payout depends on a figure a company reports, rather than on its share price, according to ${L(ORDER, "the Commission's order")}. Each contract pays $1 if an issuer's reported number, such as quarterly revenue or a user count, meets or exceeds a strike level set in advance, and nothing otherwise. The SEC approved the proposal on an accelerated basis, on the day it had set as its deadline to act.`,
    `The order describes the products as European-style, cash-settled options. Settlement turns on a specific metric that the issuer discloses in an earnings-related filing with the Commission, not on where the stock trades. Cboe's rule text lists the eligible companies and metrics; the companies include Apple, Alphabet, Amazon, Meta, Microsoft, Nvidia, Tesla, Netflix, Disney, JPMorgan, Coinbase and Robinhood. Examples of eligible metrics include Nvidia's data centre revenue, Tesla's Model 3/Y production and Meta's family daily active people.`,
    `Cboe filed the proposal on 30 June and amended it on 1 October; the amendment replaced the original filing in its entirety, the order says. The order records letters from several commenters, including prediction-market operator Kalshi, Paradigm Operations, Rothera Exchange and Clearing, Thesis Market and Robinhood. Some argued that the Commission should wait until a clearing agency had been approved and changes to options price-reporting and FINRA rules were in place. The Commission replied that an exchange's implementation of an approved rule is a separate matter from the approval itself. Trading has not begun: the order says the contracts will clear through Cboe Clear U.S. (CCUS), subject to approval of its application for temporary registration as a clearing agency, which <a href="/markets/the-margin-is-named-in-the-rule/">we reported on last month</a>. No start date is given.`,
    `The central question was classification. Cboe's case, which the Commission accepted, is that a contract paying on an issuer's reported figure is an option on a security rather than a swap. The order reasons that the metrics appear in filings with the SEC because they are material to investors valuing the stock, and that each contract's price is expected to move in relation to the value of the issuer's shares. One commenter argued that, unlike binary options already trading, these do not settle on the price or value of a security, the order notes; another said a pending joint SEC and CFTC request for comment on the definitions of swap and security-based swap should delay approval. The Commission approved the proposal regardless.`,
    `The order limits its own reach. It says it does not address similar products on the same metrics structured differently. ${L(ATKINS, "Chairman Paul Atkins's statement")} says the approval "does not address—and does not foreclose—CFTC jurisdiction" over contracts on the same metrics structured to fall under that agency. Atkins wrote that jurisdictional "turf wars" between the two agencies had frustrated innovation for decades, and that the order "reflects a new spirit of harmonization, innovation, and investor choice". His statement describes the options as standardised, subject to the securities laws and to exchange rules on customer accounts, margin, halts, auctions and market-maker obligations.`,
    `The investor protections are those of the existing options market. Per the order, the contracts are fully funded, which by our reading means a buyer cannot lose more than the premium paid. At launch they will trade electronically and in complex orders only, with no FLEX or floor trading. Cboe set a position limit of 25,000 standard contracts per expiration, counting 100 binary contracts as one standard contract. By our arithmetic, that is up to 2.5 million binary contracts, or $2.5m of payout at $1 each. That is a limit in contracts, not a measure of anyone's exposure. The limit for ordinary options on the same issuers is ten times higher, at 250,000 contracts, according to Cboe's filing.`,
    `The approval also draws a line between the SEC and the CFTC over event-style contracts. The CFTC on 9 October proposed adding sports, political and other event contracts to its definition of a swap, as <a href="/policy/a-swap-on-the-exchange-a-bet-at-the-sportsbook/">we reported</a>. The SEC's order puts contracts that settle on a company's own filings on the securities side. Kalshi, which filed comments, is among the firms seeking to list perpetual futures on individual stocks, as <a href="/crypto/perpetual-futures-come-for-the-stocks/">Komposite reported</a>. How the two agencies' definitions interact remains open, and the order says it decides only the contracts before it.`,
    `For investors, the practical change is that the earnings report becomes the settlement event rather than only a catalyst for the share price. Insider trading is the obvious pressure point. Cboe says it will work with FINRA to update insider-trading surveillance for the products' features, and the order cites the securities laws' insider-trading prohibitions as one reason the classification fits. Whether the contracts attract meaningful volume will show in open interest once trading starts. As <a href="/policy/the-nfl-says-a-contract-on-a-game-is-a-bet/">we reported</a> on the sports side, the courts have not settled where the line falls.`
  ]
}),

];
