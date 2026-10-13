import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const PO = P("policy", "Policy", "policy", "Photograph via Wikimedia Commons");

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

/** Batch 79 — Tuesday 13 October 2026, round 7. One extra Policy story,
 *  timed 13:00Z: older than batch 78's 13:20Z Character.AI lead, so the
 *  lead stays, and filed in Policy, so the front-zone builder keeps the two
 *  AI side stories (Decart, Yandex) in the lead's cluster.
 *  Repeat check: repo grep for "event contract", "prediction market",
 *  "Kalshi" — the NFL amicus story (11 Oct), the Divide pair on sports event
 *  contracts (11 Oct) and older crypto features; none covers the CFTC's
 *  9 Oct rulemakings, so this is new news. All three are linked.
 *
 *  POLICY / CFTC EVENT CONTRACTS AS SWAPS (13:00Z). Fact-check 13 Oct:
 *  CFTC release 9310-26 (9 Oct 2026, Friday) read raw: NPRM "expressly
 *  further defining the term 'swap' to include event contracts, including
 *  those based on sports, politics, cultural, and weather-related events";
 *  Selig quote verbatim ("These products are commodity derivatives
 *  squarely within the CFTC's regulatory remit under the Commodity
 *  Exchange Act and are within the agency's exclusive jurisdiction");
 *  comments within 30 days of Federal Register publication.
 *  CFTC release 9309-26 (9 Oct) read raw: IFR "codifies the CFTC's
 *  longstanding position that casino-style gambling products, including
 *  wagers placed on sportsbooks and casino games, are excluded"; Selig
 *  "Casino-style gambling products are not derivatives." verbatim;
 *  effective on FR publication; comments within 30 days of publication.
 *  NPRM text (RIN 3038-AF82, "Further Definition of 'Swap' - Inclusions",
 *  "subject to pre-publication technical corrections") read in full:
 *  17 CFR 1.3 (Swap)(2)(i)(G); "best reading of the statute"; CEA
 *  1a(47)(A)(ii) "associated with a potential financial, economic, or
 *  commercial consequence"; DATES left blank (30 days after FR
 *  publication). Circuit discussion: 3d Cir. April 2026 divided panel
 *  (KalshiEX v. Flaherty, 172 F.4th 220) quote verbatim; 9th Cir. 28 Aug
 *  2026 (KalshiEX v. Assad, No. 25-7516) "likely not swaps under the CEA",
 *  "substance" ... "sports gambling, regardless of whether [the DCM] calls
 *  them swaps", "the CEA expressly preempts state law regulating swaps
 *  'traded or executed on' a DCM"; rehearing/en banc petition Dkt 206.1,
 *  9 Sep 2026; 6th Cir. 25 Sep 2026 (KalshiEX v. Schuler) "inherently
 *  associated"; "widespread confusion and disuniformity about the
 *  definition of swap". State actions: Minnesota statute (felony),
 *  Arizona criminal information, New York TRO, geofencing orders in
 *  Michigan, Washington, Nevada (citations name KalshiEX).
 *  IFR text (RIN 3038-AF81, "Further Definition of 'Swap' to Exclude
 *  Casino-Style Gambling Products") read: Provider Test (state gaming
 *  commissioner or Tribe; regulated as gambling under State or Tribal
 *  law) and Product Test (not traded on a board of trade, exchange, SEF or
 *  multilateral market; "house rules" bets pass; DCM contracts fail, price
 *  set by "the competitive interaction of multiple buyers and sellers");
 *  modelled on the 2012 CFTC/SEC insurance and consumer-transaction
 *  exclusions. States' arguments as the IFR quotes them: 40 states + DC
 *  comment letter (Yost et al., 30 Apr 2026) "indistinguishable from
 *  traditional sports betting"; New Jersey Supreme Court brief (No.
 *  26-299) "[n]othing in the [CEA] gives the CFTC unprecedented authority
 *  to become the sole regulator of sports gambling in this country".
 *  These are kept separate from the Ninth Circuit's own wording.
 *  Federal Register: API and public-inspection list checked 13 Oct ~19:50Z;
 *  neither document published or on public inspection.
 *  CoinDesk (Jesse Hamilton, 9 Oct) read raw: Seiberg (TD Cowen) quote
 *  verbatim and now given in full (draft had cut it mid-sentence); "lone
 *  commissioner on what's meant to be a five-member commission".
 *  Lone commissioner confirmed on cftc.gov Chairman & Commissioners page
 *  (only Selig listed). White House review confirmed by American Banker
 *  (Melinda Lucy, Thu 1 Oct 2026): both rules filed with OIRA "on
 *  Monday", i.e. 28 Sep.
 *  CFTC release 9179-26 (4 Feb 2026) read: 2024 proposal withdrawn; Selig
 *  "will advance a new rulemaking grounded in a rational and coherent
 *  interpretation of the Commodity Exchange Act" verbatim.
 *  CHANGED from the draft: headline (the draft's "calls a bet on a game a
 *  swap" contradicted the companion rule, which says sportsbook bets are
 *  not swaps); the release quote misattributed with the rule text's
 *  hyphenation; Ninth Circuit wording no longer attributed to the states;
 *  Polymarket mention, unsourced reading of courts not being bound by the
 *  agency, "only 30 days", and "we have not seen a public response" cut.
 *  Our arithmetic: none.
 *  Hero: G. Edward Johnson, CC BY 4.0, CFTC entrance at Three Lafayette
 *  Centre, Washington (Commons, 15 Mar 2026). No person in frame. Not
 *  used elsewhere on the site.
 */

const NPRM = "https://www.cftc.gov/PressRoom/PressReleases/9310-26";
const IFR = "https://www.cftc.gov/PressRoom/PressReleases/9309-26";
const NPRM_TEXT = "https://www.cftc.gov/media/14731/NRPM_EventContractsSwapInclusions100926/download";
const IFR_TEXT = "https://www.cftc.gov/media/14726/IFREventContractsSwapExclusion100926/download";
const COINDESK = "https://www.coindesk.com/policy/2026/10/09/u-s-cftc-moves-to-fold-event-contracts-into-swaps-regulations-as-legal-fight-rages";
const AB = "https://www.americanbanker.com/news/cftc-files-two-swap-definition-change-rules-to-white-house";
const COMM = "https://www.cftc.gov/About/Commissioners/index.htm";
const WITHDRAW = "https://www.cftc.gov/PressRoom/PressReleases/9179-26";

export default [

/* ---------- 13:00Z POLICY ---------- */
PO({ slug: "a-swap-on-the-exchange-a-bet-at-the-sportsbook", kick: "Prediction Markets",
  headline: "A swap on the exchange, a bet at the sportsbook",
  dek: "The Commodity Futures Trading Commission on Friday proposed writing sports, political, cultural and weather event contracts into its definition of a swap. A companion interim rule says casino-style gambling is not one. Three federal appeals courts have split on the question.",
  metaDesc: "The CFTC on Friday proposed defining event contracts, including sports contracts, as swaps, and issued an interim final rule excluding casino-style gambling.",
  author: "jonathan-bright", date: "2026-10-13T13:00:00Z",
  capt: "The entrance to the Commodity Futures Trading Commission's headquarters at Three Lafayette Centre in Washington, in a file photograph.",
  tags: [
    { name: "Regulation", slug: "regulation" },
    { name: "Market Structure", slug: "market-structure" },
    { name: "Trading", slug: "trading" }
  ],
  related: [
    R("/policy/the-nfl-says-a-contract-on-a-game-is-a-bet/", "Policy"),
    R("/divide/divide-sports-event-contracts-right/", "The Divide"),
    R("/crypto/the-offer-of-leverage-is-the-switch/", "Crypto")
  ],
  body: [
    `The Commodity Futures Trading Commission on Friday issued two linked rulemakings on event contracts, the yes-or-no instruments listed by exchanges such as Kalshi. The first, ${L(NPRM, "according to the agency")}, is a proposal to define the term "swap" expressly to include event contracts, "including those based on sports, politics, cultural, and weather-related events". The second is ${L(IFR, "an interim final rule")} that codifies what the agency calls its "longstanding position" that casino-style gambling products, "including wagers placed on sportsbooks and casino games", are not swaps.`,
    `The proposal would add a paragraph (2)(i)(G) to the swap definition in the Commission's regulations at 17 CFR 1.3, naming event contracts as swaps in a non-exhaustive list, ${L(NPRM_TEXT, "according to the proposed text")}. Its argument is statutory. The Commodity Exchange Act counts as a swap any contract whose payment depends on an event or contingency "associated with a potential financial, economic, or commercial consequence", and the agency says "the best reading of the statute" is that sports, political, cultural and weather contracts qualify. Comments are due 30 days after the proposal appears in the Federal Register. The texts posted on Friday are marked "subject to pre-publication technical corrections", and by our check neither had been published in the Federal Register or placed on its public-inspection list by Tuesday afternoon, so neither comment period has started.`,
    `The interim rule ${L(IFR_TEXT, "sets two tests")}, modelled, its text says, on the exclusions for insurance and consumer transactions that the CFTC and the Securities and Exchange Commission adopted in 2012. A product is outside the swap definition if it is offered by a person supervised by a state gaming commissioner, or a similar official, or by a tribe, and is regulated as gambling under state or tribal law. It must also not be traded on an exchange or any other market where trades are executed multilaterally. A sportsbook's bet offered as principal under standard "house rules" passes; a contract on a CFTC-registered exchange does not, because its price is set by "the competitive interaction of multiple buyers and sellers". The rule takes effect when it is published in the Federal Register, with comments taken for 30 days afterwards.`,
    `Chairman Michael Selig said in the agency's release that the contracts "are commodity derivatives squarely within the CFTC's regulatory remit under the Commodity Exchange Act and are within the agency's exclusive jurisdiction." Of the companion rule he said: "Casino-style gambling products are not derivatives."`,
    `The proposal sets out why the agency is acting now. In April a divided Third Circuit panel held that sports event contracts on a CFTC-licensed exchange "fit within the Act's definition of 'swaps' subject to the CFTC's jurisdiction". On 28 August the Ninth Circuit took the opposite view, concluding that such contracts "are likely not swaps under the CEA"; a petition for rehearing and rehearing en banc was filed on 9 September. On 25 September the Sixth Circuit also held that they are not swaps, for different reasons: it accepted that a game's outcome can be an "event", but said the event must be "inherently associated" with a financial, economic or commercial consequence. The agency says the rulings show "widespread confusion and disuniformity about the definition of swap".`,
    `The two documents answer different arguments. The Ninth Circuit, as the CFTC quotes it, said the "substance" of the contracts before it was "sports gambling, regardless of whether [the DCM] calls them swaps". The states' argument, as the interim rule describes it, runs the other way: if event contracts are swaps, so are wagers at casinos and sportsbooks. Forty states and the District of Columbia told the agency in an April comment letter that sports event contracts are "indistinguishable from traditional sports betting", and New Jersey has told the Supreme Court that "[n]othing in the [CEA] gives the CFTC unprecedented authority to become the sole regulator of sports gambling in this country", the rule's text says. The proposal also cites a Minnesota law making it a felony to offer such contracts, criminal charges in Arizona, a New York suit and state-court orders requiring Kalshi to geofence its sports contracts in Michigan, Washington and Nevada.`,
    `Jaret Seiberg, a policy analyst at TD Cowen, read the gambling rule as an answer to the states. "We view this interim final rule as designed to improve the agency's position in court as the states are arguing that the CFTC's definition of a swap would make federally illegal any wager made at a state or tribal casino or sportsbook," he wrote in a Friday note to clients, ${L(COINDESK, "CoinDesk reported")}. "Whether this actually works is a different question."`,
    `The rules moved quickly. ${L(AB, "American Banker reported")} on 1 October that both had been filed with the White House Office of Information and Regulatory Affairs that Monday, less than two weeks before Friday's release. Selig is the only commissioner listed on the ${L(COMM, "agency's website")} for a commission designed to have five, and CoinDesk noted that he is able to make decisions about the CFTC's policies on his own. The stake for the exchanges is pre-emption: even the Ninth Circuit acknowledged, in a passage the proposal quotes, that "the CEA expressly preempts state law regulating swaps 'traded or executed on' a DCM". That is why the label decides whether the states can regulate the contracts at all.`,
    `The NFL, as Komposite reported, <a href="/policy/the-nfl-says-a-contract-on-a-game-is-a-bet/">asked the Supreme Court last week to hear New Jersey's challenge to the Third Circuit ruling</a>, and The Divide set out <a href="/divide/divide-sports-event-contracts-left/">the case that a bet does not stop being a bet on an exchange</a> on Sunday. The commission also <a href="/crypto/the-offer-of-leverage-is-the-switch/">published an advance notice on crypto regulation</a> on 5 October. It had ${L(WITHDRAW, "withdrawn")} its 2024 event-contracts proposal in February, when Selig said the Commission would "advance a new rulemaking grounded in a rational and coherent interpretation of the Commodity Exchange Act".`
  ]
}),

];
