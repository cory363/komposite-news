import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const PO = P("policy", "Policy", "policy", "Photograph via Unsplash");
const CR = P("crypto", "Crypto", "crypto", "Photograph via Unsplash");
const MK = P("markets", "Markets", "markets", "Photograph via Unsplash");

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

/** Batch 92 — Tuesday 20 October 2026, round 17. One new main story and two
 *  others. Lead: the DHS DeepSeek order (Policy, 17:00Z, the newest, so the
 *  front-zone builder makes it the lead; tools/data/lead.json pins it until
 *  21 Oct 14:00Z). Others: CFTC v CME standing brief (Crypto 16:40Z) and the
 *  OKXICE issuer objections (Markets 16:20Z).
 *  Repeat check: grep of the repo for OKXICE, BTCPERP, Kollar-Kotelly, CME and
 *  DeepSeek. OKXICE was covered once ("Sixty-three stocks and no order book",
 *  5 Oct; only Cerebras had objected then), so story 3 is a follow-up, not a
 *  repeat. No earlier story on the CME lawsuit or on the DeepSeek order.
 *
 *  POLICY / DEEPSEEK ORDER (lead, 17:00Z). PRIMARY READ: Federal Register
 *  notice 2026-21447, 91 FR 66346, Docket DHS-2026-0628, published 20 Oct,
 *  filed 19 Oct 08:45 (federalregister.gov API + full-text XML), and the four
 *  page images of the signed order in its appendix ("Exclusion and Removal
 *  Order #2026-01", "Original Release Date: July 24, 2026", from Secretary
 *  Markwayne Mullin, cc OMB Director Russell Vought). Also TechCrunch (Kate
 *  Park, 20 Oct 06:07 PDT) and BleepingComputer (Bill Toulas, 20 Oct).
 *  Corrections to the draft: the order is dated 24 July 2026 (a Friday); it
 *  was not issued on Tuesday, only published. The draft's "60 days = 19
 *  December" [VERIFY] was wrong and is cut: 60 days from 24 July is 22
 *  September (our arithmetic); the notice does not say whether the window
 *  runs from publication instead, and the copy says so. Authority added:
 *  FASCSA 2018, 41 U.S.C. 1321-1328, 41 CFR 201-1, after an FASC
 *  recommendation. Scope added from the order: civilian agencies except
 *  their national security systems and SCI systems (DoD and DNI have their
 *  own authority). The order's reasons quoted from the order itself; the
 *  NowSecure report is its footnote 7 (6 Feb 2025). Mao Ning quotes, the
 *  December 2025 law, the distillation claims: TechCrunch only, attributed.
 *  Bloomberg export-control item replaced by our own 16 Oct story on the same
 *  Chinese proposal (40 technologies, 23 in AI).
 *  Hero: Unsplash MHgLD0-9VvM (Solen Feyissa), a phone showing the DeepSeek
 *  chat app held in a dark room; hand only, no face. No other photo from this
 *  shoot is on the site.
 *
 *  CRYPTO / CFTC v CME (16:40Z). PRIMARY READ: the CFTC's reply brief, CME v
 *  Selig, D.D.C. No. 1:26-cv-02157-CKK, Dkt 46, filed 16 Oct 2026 (Friday),
 *  31 pages, via CourtListener/RECAP; docket entries via CourtListener's API
 *  (complaint filed 18 June; CME's opposition 2 Oct, Dkt 45). Both quoted
 *  passages verbatim from the brief. Volume table from page 9-10 of the
 *  brief (the CFTC's tabulation of CME's monthly volume reports). Also
 *  CoinDesk (Jesse Hamilton, 19 Oct) for the Seiberg note and CME's
 *  no-comment, and CoinDesk (3 Sep) for the 29 May Kalshi BTCPERP order,
 *  the "much ado about nothing" motion and the administrative-record ruling.
 *  Corrections to the draft: filing date now 16 October (draft: "Friday"
 *  [VERIFY]); court confirmed as the US District Court for the District of
 *  Columbia; the CFTC's volume claim given with its own figures, including
 *  July's dip below May, which the brief's table shows; the CFTC's earlier
 *  win on jurisdictional discovery (Dkt 44) added from the brief; "We have
 *  not seen the brief" removed.
 *  Hero: Unsplash mbywgz4kjm0 (Dulcey Lima), the clock and carved name on the
 *  Chicago Board of Trade Building; CBOT is a CME Group exchange. No people.
 *
 *  MARKETS / OKXICE OBJECTIONS (16:20Z). PRIMARY READ: OKXICE TSV public
 *  notice dated 19 Oct 2026 (8-page PDF from okx.com, text extracted with
 *  pdf.js): the 16 objecting issuers listed by name and ticker, matching
 *  CoinDesk (Krisztian Sandor, 20 Oct 08:40 EDT). The 19 Oct notice carries
 *  no stock roster, so the 63 tickers / 62 companies and "nine the week
 *  before" are CoinDesk's, attributed; 63 matches our 5 Oct story on the
 *  4 Oct notice. 62 - 15 = 47 is our subtraction. The 30-day objection rule
 *  is from the SEC order as reported in our 5 Oct story. Draft's "announced
 *  plans on 5 October" changed to the 4 October notice (our own record).
 *  Hero: Unsplash UXEJDX4SqdE (Ishant Mishra), a phone on a desk showing a
 *  list of US stock quotes; no people, no OKX or ICE branding.
 */

const FR = "https://www.federalregister.gov/documents/2026/10/20/2026-21447/notice-of-order-regarding-exclusion-and-removal-of-deepseek-products-from-federal-civilian-executive";
const TC = "https://techcrunch.com/2026/10/20/us-orders-federal-agencies-to-remove-chinas-deepseek-ai-from-their-systems/";
const BC = "https://www.bleepingcomputer.com/news/security/dhs-bans-deepseek-products-across-us-federal-civilian-agencies/";
const NS = "https://www.nowsecure.com/blog/2025/02/06/nowsecure-uncovers-multiple-security-and-privacy-flaws-in-deepseek-ios-mobile-app/";

const BRIEF = "https://storage.courtlistener.com/recap/gov.uscourts.dcd.293632/gov.uscourts.dcd.293632.46.0.pdf";
const DOCKET = "https://www.courtlistener.com/docket/73500937/chicago-mercantile-exchange-inc-v-selig/";
const CD_OCT = "https://www.coindesk.com/policy/2026/10/19/u-s-cftc-rebuffs-cme-legal-stance-in-consequential-fight-over-perpetual-futures";
const CD_SEP = "https://www.coindesk.com/policy/2026/09/03/cftc-asks-judge-to-dismiss-cme-lawsuit-over-crypto-perpetual-futures";
const PERP_PS = "https://www.federalregister.gov/documents/2026/06/03/2026-11020/policy-statement-concerning-the-listing-of-perpetual-contracts";

const OKX_N = "https://www.okx.com/cdn/assets/okfe/web3-activities/okxicetsv/notices/OKXICE_Tokenized_Securities_Venue_Public_Notice_26.10.19.pdf";
const CD_OKX = "https://www.coindesk.com/business/2026/10/19/microsoft-alphabet-and-goldman-sachs-join-objections-to-okx-ice-tokenized-stock-trading";

export default [

/* ---------- 16:20Z MARKETS ---------- */
MK({ slug: "sixteen-issuers-opt-out-of-the-tokenised-stock-venue", kick: "Tokenisation",
  headline: "Sixteen issuers opt out of the tokenised stock venue",
  dek: "Microsoft, Alphabet and Goldman Sachs are among seven more companies that have objected to having their shares traded in tokenised form on OKXICE, the venue planned by OKX and the owner of the NYSE. The venue's notice now lists 16 objectors. It gives no reasons.",
  metaDesc: "OKXICE's public notice of 19 October lists 16 issuers objecting to tokenised trading of their shares, including Microsoft, Alphabet, Goldman Sachs and Qualcomm.",
  author: "priya-raghavan", date: "2026-10-20T16:20:00Z",
  capt: "A smartphone on a wooden desk showing a list of US stock quotes, in a file photograph.",
  tags: [
    { name: "Tokenization", slug: "tokenization" },
    { name: "Market Structure", slug: "market-structure" },
    { name: "Capital Markets", slug: "capital-markets" }
  ],
  related: [
    R("/blockchain/sixty-three-stocks-and-no-order-book/", "Tokenisation"),
    R("/crypto/perpetual-futures-come-for-the-stocks/", "Market Structure"),
    R("/markets/exchanges-race-tokenized-collateral/", "Tokenisation")
  ],
  body: [
    `Sixteen companies, among them Microsoft, Alphabet and Goldman Sachs, have objected to having tokenised versions of their shares traded on OKXICE, ${L(OKX_N, "according to the venue's public notice")} dated Monday, 19 October. OKXICE is a joint venture, owned 50-50, of Intercontinental Exchange (ICE), the owner of the New York Stock Exchange, and a holding company of the crypto exchange OKX. A tokenised stock is a blockchain token that represents one share held in custody.`,
    `The notice lists the objectors by name and ticker: Cerebras Systems, AppLovin, Applied Digital, Rocket Lab, CoreWeave, Verizon, Applied Optoelectronics, Broadcom, UnitedHealth, Goldman Sachs, Microsoft, Qualcomm, Caterpillar, McDonald's, Western Digital and Alphabet, whose two share classes are listed together. Seven of them are new since the previous week's notice, which showed nine, ${L(CD_OKX, "CoinDesk reported")}: Microsoft, Alphabet, Goldman Sachs, Qualcomm, Caterpillar, McDonald's and Western Digital.`,
    `The objections carry weight under the Securities and Exchange Commission's rules. The SEC's <a href="/blockchain/stock-tokens-get-a-five-year-door/">exemptive order of 17 September</a> lets a "Tokenized Securities Venue" trade tokens of US-listed shares without registering as an exchange. When a third party rather than the company makes the tokens, the venue must notify the company and wait at least 30 days, and if the company objects in that time the stock cannot be listed, as <a href="/blockchain/sixty-three-stocks-and-no-order-book/">Komposite reported when OKXICE published its first notice</a>. OKXICE's notice says that no member of the venue or its affiliates tokenises any of the stocks; a third-party "Tokenizer" holds the shares one for one through a registered broker-dealer.`,
    `The venue's first notice, dated 4 October, listed 63 stocks. CoinDesk counts them as 63 tickers for 62 companies, with Alphabet appearing twice. Fifteen of those 62 have now objected, which leaves 47 without a disclosed objection, by our subtraction. The sixteenth objector, Cerebras, was not on the original list; it had objected by the time of the first notice.`,
    `The notice does not say why any company objected or when each objection arrived, and none of the companies is quoted in it or in CoinDesk's report. Companies have obvious reasons to be wary. The notice says the venue's prices are set by Uniswap liquidity pools on OKX's X Layer network, without reference to the market for the underlying share, and that holders' rights to dividends and votes rest on the tokenizer's representations. Whether those are the reasons in this case, the companies have not said.`,
    `The list reads as a cross-section of the large-cap market rather than a single sector: two of the biggest technology companies, a bank, a chipmaker, an industrial group, a restaurant chain and a health insurer, alongside several AI infrastructure names. The notice still gives no launch date.`,
    `The SEC's framework lets a venue list a company's shares without asking first and leaves it to the company to say no. Two weeks after the first notice, 16 have done so. The notice does not say when the companies were notified, so it is not clear how long the rest have left to object. Komposite has followed the tokenisation of US markets, including <a href="/crypto/perpetual-futures-come-for-the-stocks/">filings for perpetual futures on individual stocks</a> and <a href="/markets/exchanges-race-tokenized-collateral/">the race to accept tokenised collateral</a>.`
  ]
}),

/* ---------- 16:40Z CRYPTO ---------- */
CR({ slug: "the-cftc-says-cme-cannot-have-it-both-ways", kick: "Derivatives",
  headline: "The CFTC says CME cannot have it both ways",
  dek: "In a brief filed on Friday, the US derivatives regulator told a federal judge that CME has no standing to challenge its approval of a bitcoin perpetual future. It cited CME's own volume data and its chief executive's remarks to investors that customers have not asked for the product.",
  metaDesc: "The CFTC's 16 October reply brief says CME lacks standing to fight its approval of Kalshi's bitcoin perpetual future, citing CME's own volumes and earnings call.",
  author: "marcus-oyelaran", date: "2026-10-20T16:40:00Z",
  capt: "The clock and carved name on the facade of the Chicago Board of Trade Building in Chicago, in a file photograph. CBOT is one of CME Group's exchanges.",
  tags: [
    { name: "Regulation", slug: "regulation" },
    { name: "Market Structure", slug: "market-structure" },
    { name: "Trading", slug: "trading" }
  ],
  related: [
    R("/crypto/perpetual-futures-come-for-the-stocks/", "Perpetual Futures"),
    R("/policy/a-swap-on-the-exchange-a-bet-at-the-sportsbook/", "CFTC"),
    R("/blockchain/selig-tells-the-treasury-market-to-get-ready/", "CFTC")
  ],
  body: [
    `The Commodity Futures Trading Commission (CFTC) has told a federal court that CME Group cannot show any financial harm from the agency's approval of perpetual futures, and so has no standing to sue. The argument is in ${L(BRIEF, "a reply brief filed on Friday, 16 October")}, in the US District Court for the District of Columbia. A perpetual future is a leveraged derivative with no expiry date that tracks an asset's current price.`,
    `The case is over a CFTC order of 29 May that approved BTCPERP, a cash-settled bitcoin perpetual contract from the prediction-market operator Kalshi, ${L(CD_SEP, "CoinDesk reported")}, together with ${L(PERP_PS, "a policy statement")} that the agency will treat such products as futures, case by case. CME, the largest US futures exchange operator, ${L(DOCKET, "sued on 18 June")}. It argues that perpetuals have no expiry or delivery obligation and involve funding payments between traders, so they are swaps rather than futures, and that the CFTC did not explain its break from enforcement cases that treated crypto perpetuals as swaps.`,
    `The brief's central line is that competition alone is not an injury. "Everyone agrees on at least this much: CME must plausibly allege an actual or imminent increase in competition. CME has not even done that," the CFTC wrote. "Allegations of increased competition, without any plausible inference of an imminent financial injury, therefore do not meet basic Article III standards." The agency says CME has conceded that any added competition is limited to its retail business, not its institutional clients.`,
    `Its sharpest argument uses CME's own words. In CME's second-quarter earnings script of 22 July, the brief says, its chief executive said the exchange has "the full technical and operational capabilities to launch perpetual futures" but has "not heard demand from our customers". "CME cannot have it one way with the Court and another way with the investing public on earnings calls," the CFTC wrote. CME did not immediately respond to a request for comment, ${L(CD_OCT, "CoinDesk reported")} on Monday.`,
    `The brief also sets out CME's own crypto volumes, from the exchange's monthly reports, to argue that perpetuals have done it no harm. On the CFTC's figures, CME's twelve crypto futures traded 3.28 million contracts in September, against 2.66 million in May, the month of the approval. The table also shows a dip in July, to 2.52 million, below the May level. Only one product, Chainlink futures, remained lower than in May, by 340 contracts.`,
    `<div class="datatable" style="overflow-x:auto;margin:18px 0;max-width:calc(100vw - 32px)"><table style="border-collapse:collapse;width:100%;font-size:15px;font-variant-numeric:tabular-nums"><thead><tr><th style="text-align:left;border-bottom:2px solid #222;padding:6px 8px">CME crypto futures (contracts)</th><th style="text-align:right;border-bottom:2px solid #222;padding:6px 8px">May 2026</th><th style="text-align:right;border-bottom:2px solid #222;padding:6px 8px">July 2026</th><th style="text-align:right;border-bottom:2px solid #222;padding:6px 8px">Sept 2026</th><th style="text-align:right;border-bottom:2px solid #222;padding:6px 8px">May to Sept</th></tr></thead><tbody><tr><td style="text-align:left;border-bottom:1px solid #ddd;padding:6px 8px">Bitcoin</td><td style="text-align:right;border-bottom:1px solid #ddd;padding:6px 8px">259,329</td><td style="text-align:right;border-bottom:1px solid #ddd;padding:6px 8px">246,072</td><td style="text-align:right;border-bottom:1px solid #ddd;padding:6px 8px">267,693</td><td style="text-align:right;border-bottom:1px solid #ddd;padding:6px 8px">+8,364</td></tr><tr><td style="text-align:left;border-bottom:1px solid #ddd;padding:6px 8px">Micro Bitcoin</td><td style="text-align:right;border-bottom:1px solid #ddd;padding:6px 8px">1,113,719</td><td style="text-align:right;border-bottom:1px solid #ddd;padding:6px 8px">1,117,816</td><td style="text-align:right;border-bottom:1px solid #ddd;padding:6px 8px">1,354,088</td><td style="text-align:right;border-bottom:1px solid #ddd;padding:6px 8px">+240,369</td></tr><tr><td style="text-align:left;border-bottom:1px solid #ddd;padding:6px 8px">Ether</td><td style="text-align:right;border-bottom:1px solid #ddd;padding:6px 8px">326,981</td><td style="text-align:right;border-bottom:1px solid #ddd;padding:6px 8px">320,040</td><td style="text-align:right;border-bottom:1px solid #ddd;padding:6px 8px">378,292</td><td style="text-align:right;border-bottom:1px solid #ddd;padding:6px 8px">+51,311</td></tr><tr><td style="text-align:left;border-bottom:1px solid #ddd;padding:6px 8px">Micro Ether</td><td style="text-align:right;border-bottom:1px solid #ddd;padding:6px 8px">735,326</td><td style="text-align:right;border-bottom:1px solid #ddd;padding:6px 8px">674,601</td><td style="text-align:right;border-bottom:1px solid #ddd;padding:6px 8px">911,822</td><td style="text-align:right;border-bottom:1px solid #ddd;padding:6px 8px">+176,496</td></tr><tr><td style="text-align:left;border-bottom:1px solid #ddd;padding:6px 8px">All twelve products</td><td style="text-align:right;border-bottom:1px solid #ddd;padding:6px 8px">2,660,960</td><td style="text-align:right;border-bottom:1px solid #ddd;padding:6px 8px">2,523,699</td><td style="text-align:right;border-bottom:1px solid #ddd;padding:6px 8px">3,282,530</td><td style="text-align:right;border-bottom:1px solid #ddd;padding:6px 8px">+621,570</td></tr></tbody></table><p style="font-size:13px;line-height:1.4;margin:6px 0 0;color:#555;font-family:inherit">Source: the CFTC's reply brief of 16 October, tabulating CME Group's monthly volume reports. The other eight products are Solana, XRP, Chainlink and Sui futures and their micro versions.</p></div>`,
    `This is the agency's second attempt to end the case early. It moved to dismiss on 2 September, calling the dispute "much ado about nothing", CoinDesk reported. CME filed its opposition on 2 October. The judge, Colleen Kollar-Kotelly, has refused the CFTC's request to withhold the administrative record until the dismissal motion is decided, and, according to the brief, also denied the agency's request for limited discovery on standing. The Hyperliquid Policy Center has filed a brief in the case, which the CFTC cites.`,
    `Not everyone thinks the agency is ahead. Jaret Seiberg, a policy analyst at TD Cowen, wrote in a Monday client note that CME may still have the edge on standing and on its argument that perpetuals are swaps, CoinDesk reported. "What increasingly concerns us is the growth in perps while the litigation is playing out," he wrote, adding that unwinding the market could become complicated if CME won.`,
    `The stakes reach beyond one contract: the policy covers perpetuals on other digital commodities, and exchanges have filed for perpetuals on individual stocks. Komposite has reported on <a href="/crypto/perpetual-futures-come-for-the-stocks/">those equity perpetual filings</a> and on the CFTC's separate attempt to <a href="/policy/a-swap-on-the-exchange-a-bet-at-the-sportsbook/">define event contracts as swaps</a>.`
  ]
}),

/* ---------- 17:00Z POLICY (LEAD) ---------- */
PO({ slug: "washington-orders-deepseek-out-of-civilian-agencies", kick: "AI Policy",
  headline: "Washington orders DeepSeek out of civilian agencies",
  dek: "The Department of Homeland Security has ordered federal civilian agencies to stop buying DeepSeek products and to remove them, including third-party tools built on its models. The order is dated 24 July and was published on Tuesday. It does not apply to private or consumer use.",
  metaDesc: "A DHS order dated 24 July and published on 20 October bars federal civilian agencies from buying DeepSeek products and orders their removal, with exceptions via CISA.",
  author: "jonathan-bright", date: "2026-10-20T17:00:00Z",
  capt: "A smartphone showing the DeepSeek chat app's start screen, held in a dark room, in a file photograph.",
  tags: [
    { name: "AI Governance", slug: "ai-governance" },
    { name: "Procurement", slug: "procurement" },
    { name: "AI Security", slug: "ai-security" }
  ],
  related: [
    R("/ai/china-registers-its-ai-exports/", "Export Controls"),
    R("/ai/the-ftc-asks-two-labs-for-their-incident-files/", "Regulation"),
    R("/policy/eight-attorneys-general-one-chatbot/", "AI Policy")
  ],
  body: [
    `The US Department of Homeland Security (DHS) has ordered federal civilian agencies to stop buying DeepSeek products and to remove them from their IT systems, ${L(FR, "according to a notice in the Federal Register")} on Tuesday, 20 October. The signed order, attached to the notice, is dated 24 July 2026. DeepSeek is the Hangzhou-based AI developer whose R1 reasoning model unsettled markets in January 2025.`,
    `The order, "Exclusion and Removal Order #2026-01", is signed by the Secretary of Homeland Security, Markwayne Mullin. It is made under the Federal Acquisition Supply Chain Security Act of 2018, a law that lets the secretary bar risky technology from civilian agencies on the recommendation of the Federal Acquisition Security Council, an interagency body. The notice says the secretary acted "following review of the Federal Acquisition Security Council Recommendation and affiliated evidence". It does not explain why publication came almost three months after the order was released.`,
    `The order has two parts. Agencies must exclude DeepSeek, its affiliates and their products from procurement, "effective immediately after issuance of this Order", including approved-product lists and e-commerce marketplaces. And they must remove products from DeepSeek, its affiliates, and "third-party products and services developed using DeepSeek implementations" from their systems immediately, or seek an exception. Until removal is complete, agencies are encouraged to monitor traffic, step up logging and controls on data leaving their networks, and flag anomalous activity.`,
    `Exceptions must be requested in writing "within 60 days of the issuance of this order", with a justification and any mitigations, and the Cybersecurity and Infrastructure Security Agency (CISA) will approve or refuse them. By our arithmetic, 60 days from 24 July was 22 September. The notice does not say whether agencies get a new window from Tuesday's publication. CISA may also give technical help to agencies that cannot comply on their own, and the secretary must review the order within a year and every year after.`,
    `The order states its reasons briefly. It says DeepSeek's servers are in China, where "the PRC legal system permits extensive authority to government cyber and intelligence functions to access private company infrastructure"; that its account sign-up collects personal information and may track and fingerprint users; and that prompts from US government employees or vendors could send sensitive data to China. "The models themselves may contain malware or other security vulnerabilities," it adds, citing ${L(NS, "a February 2025 NowSecure report")} that found critical flaws in DeepSeek's iOS app.`,
    `The reach is limited. The order applies to federal civilian agencies "except for their national security systems and secure compartmented information systems", which fall to the Pentagon and the Director of National Intelligence. ${L(BC, "BleepingComputer")} noted that it "is not a general ban on private or consumer use". ${L(TC, "TechCrunch")} said it extends to civilian agencies restrictions that a law passed in December 2025 placed on DeepSeek in intelligence agencies' national-security systems. Neither report carried a statement from DeepSeek.`,
    `Beijing objected. Foreign Ministry spokesperson Mao Ning said China opposes "overstretching the concept of national security and politicizing technology and trade issues", according to TechCrunch, and added: "We will resolutely safeguard the legitimate rights and interests of Chinese enterprises." China is tightening its own controls: Komposite reported last week that <a href="/ai/china-registers-its-ai-exports/">Beijing proposed adding 40 technologies, 23 of them in AI, to its export-control catalogue</a>.`,
    `The order lands in a wider dispute over Chinese labs. TechCrunch cited a September report accusing DeepSeek and five other Chinese AI companies, including Alibaba and Moonshot AI, of large-scale distillation, training on the outputs of US systems. It said OpenAI told US lawmakers it had seen suspected DeepSeek distillation attempts and that Anthropic said it had found unauthorised attempts by DeepSeek and other Chinese labs to collect outputs from Claude. Those are the companies' claims; DeepSeek has not responded in the reports we read.`,
    `The clause with the widest effect is the one on third-party products. A vendor that sells agencies software built on DeepSeek's open-weight models now falls inside the order, and the notice does not say how agencies are to find such products. Komposite has followed US scrutiny of AI developers, including <a href="/ai/the-ftc-asks-two-labs-for-their-incident-files/">the FTC's request to two labs for their incident files</a> and <a href="/policy/eight-attorneys-general-one-chatbot/">eight state attorneys general's action on a single chatbot</a>.`
  ]
}),

];
