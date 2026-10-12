/** Batch 74 — Monday 12 October 2026. One lead and two side stories:
 *  SpaceX's 800 MHz spectrum purchase from Grain Management and the carrier
 *  sell-off (lead, 12:40Z), the FT's report that Nvidia is weighing a deeper
 *  investment in or purchase of Reflection AI (12:20Z) and Samsung Wallet's
 *  USDC transfers for US Galaxy users (12:00Z). Timed after the 11 October
 *  NFL lead in batch 72 so the spectrum piece takes the homepage lead and the
 *  other two sit in the cluster under it. None of the three had been covered
 *  before (repo grep for Grain Management, Starlink Mobile, Reflection's
 *  acquisition talks, Samsung Wallet and Bastion).
 *
 *  TECHNOLOGY / SPECTRUM (lead). Fact-check 12 Oct: Via Satellite (8 Oct) read:
 *  terms not disclosed, FCC approval needed, FCC approved 15,000
 *  direct-to-device satellites just before. CNBC (9 Oct 16:26Z) read in
 *  full: closes VZ -8.75% (worst since July 2002), TMUS -13.27% (2013),
 *  T -9.81% (2000), SpaceX ~+1%, "license portfolio of up to 14 megahertz",
 *  Carr quotes, JPMorgan "more credible", Evercore "outline of a real
 *  network". NBC: T-Mobile worst since 2011. SDxCentral (Dan Meyer, 9 Oct):
 *  "key remaining technical gaps" quote, Saw LinkedIn points (paraphrased).
 *  MarketWatch (Christine Ji, 8 Oct, via Longbridge copy): Rezaei quotes.
 *  Reuters (9 Oct, via The Star): WSJ's ~$8bn, unconfirmed. Reuters (Kumar
 *  Tanishk, 12 Oct, via KSL): Australia/NZ moves, Tuckwell, Citi. Telecom
 *  Review Americas: 4.85-14 MHz, "approximately 14 MHz of blended spectrum
 *  depth nationwide", $2.9bn plus 10 MHz of 600 MHz in 212 counties, FCC
 *  1 July, D2D solicitation before end-2026. Telecompetitor: closed in
 *  August. CUT: Axios's $36bn combined market-value loss and the Saw
 *  "70 per cent of traffic indoors" line (Axios unreachable, not found
 *  elsewhere); Verizon spokesman's "empty airwaves" quote (U.S. News page
 *  unreachable, Reuters byline unconfirmed); "Gen2" label; Quartz EchoStar
 *  figures (unreachable); the T-Mobile 10-Q/annual-report paragraph and the
 *  2.2x carrying-value multiple and future-proceeds clause (SEC pages
 *  returned 403). Our arithmetic: 8/2.9 = 2.76.
 *  Hero: Mudit Agarwal (Unsplash QfAnNvh3qTw), three telecoms masts.
 *
 *  AI / NVIDIA-REFLECTION. Fact-check 12 Oct: Reuters (Rishabh Jaiswal,
 *  edited by Matthew Lewis, Sat 10 Oct) via KFGO read: FT report "on
 *  Saturday", people with direct knowledge, early talks, "in the coming
 *  weeks", could fall apart, acqui-hire could avoid a lengthy regulatory
 *  review, $800m invested, Reuters could not verify, no immediate comment
 *  outside business hours, Laskin to CNBC in April ($25bn pre-money),
 *  founders Laskin and Ioannis Antonoglou (ex-DeepMind, 2024). TNW (12 Oct)
 *  read: other options of more chips or a bigger stake; Hugging Face
 *  $12.93bn. TechCrunch 5 Oct (Beam) read: 501bn/23bn MoE, GLM-5.2 parity,
 *  "3-4x less inference compute", not independently verified, PitchBook
 *  ~$4.7bn, SpaceX and Nebius compute deals >$7bn for GB300 through 2029,
 *  "AI factory", $25bn last round; weights and technical details due "this
 *  month". TechCrunch 9 Oct 2025: $2bn at $8bn, Nvidia among investors.
 *  TNW DOJ/Groq read: DOJ examining whether the licensing deal was
 *  structured to avoid antitrust review (citing the NYT); spokesperson quote
 *  "a prime example of the American system working as designed" is in TNW,
 *  attributed to an Nvidia spokesperson (draft wrongly said "told the
 *  Times"). Fixed: Beam was unveiled, weights not yet published (draft said
 *  "launched"); "chip supplier in all but contract" cut (unsourced); Groq
 *  CEO/COO now sourced to Komposite's own 11 Sept report (Jonathan Ross,
 *  Sunny Madra). FT original paywalled, not read. Our arithmetic: 0.8/4.7 =
 *  17.0 per cent.
 *  Hero: Christian Wiediger (Unsplash 3GUW88tRmv8), Nvidia GeForce RTX card.
 *
 *  FINTECH / SAMSUNG WALLET. Fact-check 12 Oct: Samsung Newsroom
 *  release (7 Oct) read in full incl. footnotes 1-5 and About Bastion: all
 *  eligibility, fee, 82m-device, disclaimer, Bastion/Coinbase Prime Vault,
 *  Solana/Sui, Chai quote and title, Samsung Pay/Coinbase One, NY trust
 *  charter (Bastion Platforms Trust Company), "preliminary conditional"
 *  OCC approval, a16z/Coinbase Ventures. Bastion release (7 Oct 20:15 EDT,
 *  FinancialContent copy) read: "the licensed custodian and money
 *  transmission partner", ledger/KYC/screening/payout roles, Eddequiouaq
 *  quote. Coinbase blog (8 Oct) returned 403; its figures and Lovett quote
 *  are taken from PYMNTS (8 Oct). Cut: "on behalf of the licensed provider"
 *  and NYDFS custody (unverified). Cointelegraph (19 Sept): no deposits or
 *  loans. Our arithmetic: 82/7 = 11.7.
 *  Hero: Tech Daily (Unsplash GdRvIi8mWzE), hand holding a phone showing a
 *  dollar-to-euro transfer screen.
 *
 *  Weekdays: 18 Sept 2026 Fri, 7 Oct Wed, 8 Oct Thu, 9 Oct Fri, 10 Oct Sat,
 *  12 Oct Mon.
 */
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const TE = P("technology", "Technology", "technology", "Photograph via Unsplash"),
      AI = P("ai", "AI", "ai", "Photograph via Unsplash"),
      FI = P("fintech", "Fintech", "fintech", "Photograph via Unsplash");

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

// Sources: Nvidia / Reflection
const N_REUTERS = "https://kfgo.com/2026/10/10/nvidia-in-talks-to-invest-further-in-reflection-ai-or-buy-it-ft-reports/";
const N_FT = "https://www.ft.com/content/052610c5-22b4-4dd4-932e-b7f9f0628b6a";
const N_TNW = "https://thenextweb.com/news/nvidia-reflection-ai-acquisition-talks-ft";
const N_TC_BEAM = "https://techcrunch.com/2026/10/05/reflection-debuts-beam-a-open-weight-ai-model-to-rival-chinese-models-at-lower-compute-cost/";
const N_TC_2025 = "https://techcrunch.com/2025/10/09/reflection-raises-2b-to-be-americas-open-frontier-ai-lab-challenging-deepseek/";
const N_CNBC = "https://www.cnbc.com/video/2026/04/23/reflection-ceo-on-ai-race-the-best-open-models-are-coming-from-china.html";
const N_TNW_HF = "https://thenextweb.com/news/nvidia-hugging-face-acquisition-confirmed";
const N_TNW_DOJ = "https://thenextweb.com/news/doj-nvidia-groq-licensing-antitrust-review";

// Sources: SpaceX / Grain spectrum
const S_VIASAT = "https://www.satellitetoday.com/connectivity/2026/10/08/spacex-moves-to-acquire-nationwide-low-band-spectrum-for-starlink-mobile/";
const S_CNBC9 = "https://www.cnbc.com/2026/10/09/verizon-att-tmobile-stocks-spacex-network.html";
const S_NBC = "https://www.nbcnews.com/business/corporations/elon-musk-spacex-verizon-tmobile-att-rcna602525";
const S_REUTERS9 = "https://www.thestar.com.my/tech/tech-news/2026/10/09/us-european-telecom-stocks-slide-as-spacex-spectrum-deal-rattles-sector";
const S_SDX = "https://www.sdxcentral.com/news/verizon-att-t-mobile-us-stocks-sink-tech-executive-lashes-out-on-spacexs-spectrum-serve/";
const S_MW = "https://longbridge.com/news/301336038";
const S_TELREV = "https://www.telecomreviewamericas.com/articles/telecom-operators/t-mobile-completes-usd-2-9-billion-800-mhz-spectrum-sale-to-grain-management/";
const S_TELECOMP = "https://www.telecompetitor.com/spacex-to-buy-grain-managements-nationwide-800-mhz-spectrum-for-starlink-mobile/";
const S_REUTERS12 = "https://www.ksl.com/article/51635200/telecom-stocks-in-australia-nz-slide-after-spacex-spectrum-deal";

// Sources: Samsung Wallet / USDC
const W_SAMSUNG = "https://news.samsung.com/us/samsung-wallet-bring-stablecoin-access-eligible-galaxy-users-us/";
const W_BASTION = "https://www.financialcontent.com/article/gnwcq-2026-10-8-bastion-selected-as-one-of-samsung-wallets-stablecoin-partners-providing-regulated-infrastructure-custody-and-cross-border-remittances";
const W_COINBASE = "https://www.coinbase.com/blog/coinbase-and-samsung-bring-usdc-to-samsung-wallet";
const W_PYMNTS = "https://www.pymnts.com/cryptocurrency/2026/coinbase-and-samsung-team-to-bring-stablecoins-to-digital-wallets/";
const W_CTEL = "https://cointelegraph.com/news/bastion-wins-conditional-occ-approval-for-national-trust-bank-charter";

export default [

/* ---------- 12:20Z AI ---------- */
AI({ slug: "nvidia-weighs-buying-the-lab-it-already-funds", kick: "Dealmaking",
  headline: "Nvidia weighs buying the lab it already funds",
  dek: "Nvidia is in early talks to deepen its investment in Reflection AI, in which it has put $800m, or to buy it, the Financial Times reported. One route, an acqui-hire, could avoid a lengthy regulatory review. Neither company had commented when Reuters published.",
  metaDesc: "Nvidia is in early talks to invest more in Reflection AI or acquire it, the FT reported on Saturday; an acqui-hire route could avoid a lengthy regulatory review.",
  author: "dana-whitfield", date: "2026-10-12T12:20:00Z",
  capt: "An Nvidia GeForce RTX graphics card installed in a computer, in a file photograph.",
  tags: [
    { name: "AI Infrastructure", slug: "ai-infrastructure" },
    { name: "Antitrust", slug: "antitrust" },
    { name: "Venture Capital", slug: "venture-capital" },
    { name: "Open Source", slug: "open-source" }
  ],
  related: [
    R("/ai/two-open-models-and-no-weights-yet/", "Open Models"),
    R("/business/doj-examines-how-the-groq-deal-was-built/", "Antitrust"),
    R("/startups/eight-hundred-seventy-million-for-a-model-that-writes-nothing/", "Startups")
  ],
  body: [
    `Nvidia is in talks to deepen its investment in Reflection AI, the open-weight model developer it already backs, or to acquire it outright, ${L(N_FT, "the Financial Times reported")} on Saturday, citing people with direct knowledge of the matter. ${L(N_REUTERS, "Reuters, which relayed the report")}, said it could not immediately verify it. Nvidia and Reflection did not immediately respond to requests for comment outside business hours, and neither had commented on the record when Reuters published.`,
    `According to Reuters' account of the FT report, the talks are at an early stage and a deal could take several forms. One is a so-called acqui-hire, in which Nvidia would hire Reflection's staff and license its technology rather than buy the company, a route the FT said could potentially avoid a lengthy regulatory review. The FT said an agreement could come in the coming weeks, and that the discussions could still fall apart. ${L(N_TNW, "The Next Web, summarising the same report")}, said other options include supplying the startup with more chips or raising Nvidia's stake.`,
    `The FT reported that Nvidia has already invested $800m in Reflection. Nvidia was among the investors in the startup's ${L(N_TC_2025, "$2bn round at an $8bn valuation")} in October 2025, and ${L(N_TC_BEAM, "TechCrunch reported")}, citing PitchBook, that Reflection has raised roughly $4.7bn in total from backers including Nvidia, Sequoia Capital and Lightspeed Venture Partners. By our arithmetic, $800m is about 17 per cent of that total, though the two figures come from different sources and neither company has confirmed either.`,
    `The valuation is less settled. Reuters noted that Misha Laskin, Reflection's chief executive, ${L(N_CNBC, "told CNBC in April")} that the company was raising fresh capital at a pre-money valuation of $25bn. TechCrunch, writing on 5 October, described $25bn as the valuation of the company's last round. The reports we reviewed do not say whether that round has closed, or what price Nvidia might pay.`,
    `Reflection, founded in 2024 by the former Google DeepMind researchers Laskin and Ioannis Antonoglou, unveiled what it calls its first open-weight model, Beam, on Monday 5 October, and said it would publish the weights and technical details later in October. As <a href="/ai/two-open-models-and-no-weights-yet/">Komposite reported the next day</a>, the weights were not yet available. Per TechCrunch, Beam is a text-only mixture-of-experts model with 501bn total parameters and 23bn active. The company says it scores on par with Z.ai's GLM-5.2 on advanced reasoning benchmarks using "3-4x less inference compute". TechCrunch noted that Reflection's performance claims have not been independently verified.`,
    `Nvidia is also tied to Reflection through compute. TechCrunch reported that Reflection signed compute deals this summer with SpaceX and Nebius, collectively worth more than $7bn, to secure access to Nvidia's GB300 chips through 2029. Reflection is pitching Beam to enterprises and sovereign customers as the basis for local "AI factories", an idea TechCrunch noted Nvidia chief executive Jensen Huang has long championed and that would run on Nvidia GPUs.`,
    `The structure matters because of Nvidia's recent record. TNW reported that Nvidia ${L(N_TNW_HF, "agreed in September to buy Hugging Face")} for $12.93bn, a deal that has yet to close. Nvidia also has a licensing deal with the chip startup Groq, after which Groq's founder and chief executive, Jonathan Ross, and its chief operating officer, Sunny Madra, moved to Nvidia, as <a href="/business/doj-examines-how-the-groq-deal-was-built/">Komposite reported in September</a>. TNW, citing the New York Times, reported that the Justice Department is ${L(N_TNW_DOJ, "examining whether the Groq deal was structured")} to avoid antitrust review. An Nvidia spokesperson, quoted by TNW, called the Groq story "a prime example of the American system working as designed". Nothing in the reports on Reflection says any regulator has looked at these talks.`,
    `The reports give no price, no stake size and no timetable beyond "the coming weeks". We have relied on Reuters' and TNW's summaries of the FT's reporting, not the FT's own text. Any hire-and-license arrangement would also depend on terms that have not been published.`,
    `For Reflection, the open question is what it would mean to be tied more closely to the company whose chips its compute deals secure. TechCrunch described its pitch as a Western answer to Chinese open models such as DeepSeek, Qwen and Z.ai, which rests partly on the company being an independent lab. Komposite has tracked the capital flowing to model developers, including <a href="/startups/eight-hundred-seventy-million-for-a-model-that-writes-nothing/">TypeSafe AI's $870m raise</a> at a $7.5bn valuation, and will report further if Nvidia or Reflection confirms the talks.`
  ]
}),

/* ---------- 12:00Z FINTECH ---------- */
FI({ slug: "stablecoin-transfer-button-82-million-galaxy-devices", kick: "Stablecoins",
  headline: "A stablecoin transfer button, on 82 million Galaxy devices",
  dek: "Samsung Electronics America said on Wednesday that USDC transfers will arrive in Samsung Wallet in the last week of October for eligible US Galaxy users. The 82 million figure counts compatible devices, and Samsung has not said how many users will qualify.",
  metaDesc: "Samsung said USDC transfers will launch in Samsung Wallet for eligible US Galaxy users in late October, with Bastion as custodian and Coinbase as sub-custodian.",
  author: "elena-vasquez", date: "2026-10-12T12:00:00Z",
  capt: "A hand holding a smartphone showing a money-transfer screen from US dollars to euros, in a file photograph.",
  tags: [
    { name: "Stablecoins", slug: "stablecoins" },
    { name: "Payments", slug: "payments" },
    { name: "Custody", slug: "custody" },
    { name: "Consumer Technology", slug: "consumer-technology" }
  ],
  related: [
    R("/fintech/rain-applies-for-the-charter-the-community-banks-are-suing-over/", "Charters"),
    R("/fintech/okx-money-stablecoin-savings-app/", "Stablecoins"),
    R("/fintech/the-charter-picks-the-arithmetic/", "Regulation")
  ],
  body: [
    `Samsung Electronics America said on Wednesday that stablecoin wallet functionality will launch in Samsung Wallet in the last week of October for eligible Galaxy users in the United States, starting with the dollar stablecoin USDC, ${L(W_SAMSUNG, "according to its announcement")}. The company said the feature will be available across 82 million US Galaxy devices at launch. It did not give a launch date within that week.`,
    `The announcement describes two uses. Eligible users will be able to send USDC to compatible external crypto wallets, and to bank accounts in more than 60 countries, where recipients receive local currency. Samsung said it does not charge a fee for transfers to external wallets, but its footnotes add that recipient wallet providers or exchanges may impose their own, and that speed depends on blockchain network conditions. Bank transfers carry fees that vary by destination country and amount, and the app will show them before the sender confirms. The release does not publish a fee schedule.`,
    `Eligibility is narrower than the device count suggests. Per the footnotes, the service is open only to US residents aged 18 or over with a Samsung Account, on a Galaxy device compatible with Samsung Wallet running Android 13 or higher, and requires account registration, identity verification and biometric authentication setup. Samsung defined the 82 million as the number of US Galaxy devices compatible with Samsung Wallet. It did not say how many of those meet the other conditions, and it did not disclose any transfer volumes or sign-up targets.`,
    `Samsung says it is not providing the financial services itself. A footnote states that accounts, custody and money movement are provided by regulated partners, and that Samsung "is not a bank, money transmitter, or digital asset custodian and does not hold customer funds". Bastion, which Samsung describes as a licensed stablecoin custodian and infrastructure provider, will power the service, with Coinbase as its sub-custodian holding the USDC in Coinbase Prime Vault. Solana and Sui are named as blockchain network partners.`,
    `Bastion's own account is more specific about the division of labour. ${L(W_BASTION, "In its release on the same day")}, the New York company called itself "the licensed custodian and money transmission partner" for the service, and said it keeps a ledger of each user's balance, verifies identities, screens blockchain addresses for fraud and sanctions risk, and converts USDC for bank payouts through local regulated partners. Coinbase announced its part ${L(W_COINBASE, "in a blog post on Thursday")}. "Samsung's global reach makes this a significant distribution milestone for USDC," Alec Lovett, Coinbase's head of infrastructure products, wrote there, ${L(W_PYMNTS, "PYMNTS reported")}.`,
    `Samsung's Woncheol Chai, executive vice president and head of the digital wallet team at the Mobile eXperience Business, said: "Sending money abroad should feel as convenient as using the wallet already on your phone." Nassim Eddequiouaq, Bastion's chief executive, said in the Bastion release: "Financial infrastructure works best when people don't have to see it."`,
    `Bastion's regulatory footing is partly in place. Samsung's description of the company says it holds a New York trust charter, through Bastion Platforms Trust Company, and has preliminary conditional approval from the Office of the Comptroller of the Currency for a national trust bank charter. ${L(W_CTEL, "Cointelegraph reported")} in September that the proposed national bank could not accept deposits or make loans. A preliminary conditional approval is not a final charter, and Samsung's release does not say which licence covers the Samsung Wallet service at launch.`,
    `The scale claim needs context. Coinbase said in its post that USDC circulation grew 72 per cent last year to more than $75bn, and that wallets holding USDC grew 59 per cent to nearly 7 million, according to PYMNTS. By our arithmetic, 82 million compatible devices is more than eleven times that wallet count, though the two figures measure different things: devices that could use the feature, against wallets that already hold the token. All of the figures are the companies' own and none was independently verified.`,
    `Coinbase appears at several points in the arrangement. Samsung's release notes that Samsung Pay became a payment option in the Coinbase app and that Coinbase One benefits are available through Samsung Wallet. It also lists Andreessen Horowitz and Coinbase Ventures among Bastion's backers, so Coinbase is a partner, the sub-custodian and an investor in the primary custodian. Samsung said future capabilities "may include" paying with stablecoins online or by tapping a Galaxy device in store, and expansion into other markets in line with regulation in each country. It made no commitment on either.`,
    `For now the test is use rather than reach. The feature removes the separate app and the private keys, but it still depends on identity checks, partner terms and fees that Samsung has so far shown only in outline. The licensing beneath it is still being settled: Komposite reported last week that the stablecoin card company Rain <a href="/fintech/rain-applies-for-the-charter-the-community-banks-are-suing-over/">applied for a national trust charter</a> of the kind community bankers are suing the OCC over, and OKX has <a href="/fintech/okx-money-stablecoin-savings-app/">launched its own stablecoin app</a>. Samsung's version arrives preinstalled.`
  ]
}),

/* ---------- 12:40Z TECHNOLOGY (lead) ---------- */
TE({ slug: "eight-billion-for-14-mhz-and-the-carriers-sold-off", kick: "Spectrum",
  headline: "Eight billion for 14 MHz, and the carriers sold off",
  dek: "SpaceX has agreed to buy up to 14 MHz of paired 800 MHz spectrum from Grain Management for Starlink Mobile, subject to FCC approval. Terms were not disclosed; the Wall Street Journal put the price at about $8bn, and carrier shares fell in the US and Australia.",
  metaDesc: "SpaceX agreed on Thursday to buy 800 MHz spectrum from Grain Management; the WSJ put the price at about $8bn, and telecom shares fell in the US and Australia.",
  author: "tom-kessler", date: "2026-10-12T12:40:00Z",
  capt: "Three telecommunications masts fitted with antennas against a cloudy blue sky, in a file photograph.",
  tags: [
    { name: "Infrastructure", slug: "infrastructure" },
    { name: "Capital Markets", slug: "capital-markets" },
    { name: "Regulation", slug: "regulation" }
  ],
  related: [
    R("/technology/satellite-joins-the-procurement-list/", "Satellite"),
    R("/policy/fcc-leaves-the-transceiver-alone/", "Regulation")
  ],
  body: [
    `SpaceX said on Thursday 8 October that it has agreed to buy a nationwide portfolio of 800 MHz spectrum from Grain Management for Starlink Mobile, a deal that needs approval from the <a href="/policy/fcc-leaves-the-transceiver-alone/">Federal Communications Commission</a>. Financial terms were not disclosed, ${L(S_VIASAT, "Via Satellite reported")}. The Wall Street Journal put the price at about $8bn, ${L(S_REUTERS9, "Reuters reported")}. Neither SpaceX nor Grain has confirmed that figure.`,
    `SpaceX described the holding as a "license portfolio of up to 14 megahertz of paired spectrum in the 800 MHz band", ${L(S_CNBC9, "according to CNBC")}. The "up to" matters. When T-Mobile sold the same portfolio to Grain, the holding ranged from 4.85 MHz to 14 MHz depending on the area, and Grain described it as "approximately 14 MHz of blended spectrum depth nationwide", according to ${L(S_TELREV, "Telecom Review Americas")}. SpaceX said that "low-band spectrum addresses one of the key remaining technical gaps that will pave the way for Starlink Mobile", ${L(S_SDX, "SDxCentral reported")}.`,
    `US carriers took the news badly on Friday. Verizon closed down 8.75 per cent, its worst day since July 2002, CNBC reported; T-Mobile fell 13.27 per cent and AT&T 9.81 per cent, their worst days since 2013 and 2000 respectively, by CNBC's count. ${L(S_NBC, "NBC News")} gave a different benchmark for T-Mobile, calling it the worst day since 2011. SpaceX's own shares rose about 1 per cent on the day, according to CNBC.`,
    `Analysts split on how much has changed. Madison Rezaei of Bernstein wrote in a note that "Buying spectrum is not a commitment to build a nationwide network", adding that "this is the spectrum we thought SpaceX needed to make that option more credible - and less expensive", ${L(S_MW, "MarketWatch reported")}. JPMorgan wrote that the purchase made Starlink Mobile's long-term opportunity "more credible", according to CNBC, and Evercore ISI that SpaceX "now has the outline of a real network". T-Mobile's chief technology officer, John Saw, argued in a LinkedIn post that SpaceX remains short of spectrum and that indoor coverage and a competitive network take heavy capital, SDxCentral reported.`,
    `The regulator sounded relaxed. FCC Chairman Brendan Carr, whose agency will review the deal, told CNBC that competition in the spectrum market was "really good news for the American consumers". "It's not for us ultimately to pick winners and losers," he added. The FCC had approved SpaceX's plan for 15,000 direct-to-device satellites shortly before the announcement, Via Satellite reported.`,
    `The $8bn is a press figure, not a company figure. Grain bought the portfolio from T-Mobile for $2.9bn and 10 MHz of its own 600 MHz spectrum in 212 counties, according to Telecom Review Americas, after the FCC approved the swap on 1 July; ${L(S_TELECOMP, "Telecompetitor reported")} that Grain completed the purchase in August. By our arithmetic, $8bn is roughly 2.8 times the $2.9bn. That overstates Grain's markup, because it leaves out the 600 MHz spectrum Grain handed over, which has no published value in the material we have seen.`,
    `The sell-off then crossed the Pacific. ${L(S_REUTERS12, "Reuters reported on Monday")} that Telstra fell 2.5 per cent to a six-week low, TPG Telecom lost nearly 5 per cent in its worst day since early June, and Spark New Zealand slipped 1.8 per cent. Superloop fell 2.4 per cent and Aussie Broadband nearly 2 per cent. David Tuckwell, chief investment officer at ETF Shares in Sydney, told Reuters: "Investors fear the U.S. is just the first market, and that incumbents' biggest advantage, coverage, is losing its value." Citi said the purchase was likely to weigh on Telstra's share price but kept its buy rating, saying the deal "shows the importance of having terrestrial spectrum".`,
    `The market is pricing an option rather than a subscriber base. Spectrum is one input. SpaceX has no terrestrial network of the kind the incumbents run, and the FCC has yet to approve the transfer. Low-band spectrum such as 800 MHz carries further and reaches indoors better than the higher bands, which is the gap SpaceX says it is closing.`,
    `Satellite links were already moving into carriers' catalogues: Komposite reported in September that <a href="/technology/satellite-joins-the-procurement-list/">low-orbit connectivity had become a line item</a> that carriers resell alongside fibre. Grain is expected to run a competitive solicitation for direct-to-device operators and file applications before the end of 2026, according to Telecom Review Americas. We have not seen a decision date for the SpaceX transfer.`
  ]
}),

];
