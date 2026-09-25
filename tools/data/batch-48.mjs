/** Batch 48 — 25 September 2026, evening. One piece, the lead.
 *
 *  FINTECH (LEAD). Everything about the rulemaking is read at
 *  federalreserve.gov. The press release of 24 September 2026, released at
 *  2:30 p.m. EDT, is bcreg20260924a.htm: the description of the two
 *  proposals, the "full backing" language, the tailored application process
 *  and the sentence that the comment period closes 60 days after publication
 *  in the Federal Register.
 *
 *  The two staff memoranda to the Board, both dated 3 September 2026, are the
 *  attached PDFs bcreg20260924a1.pdf (ten pages) and bcreg20260924a2.pdf
 *  (three pages). The two notices themselves are bcreg20260924a3.pdf —
 *  Docket No. R-1900, RIN 7100-AH30, 12 CFR parts 247 and 262, sixty pages,
 *  "Application Procedures for Board-Supervised Insured Depository
 *  Institutions Seeking Approval for a Subsidiary to Issue Payment
 *  Stablecoins" — and bcreg20260924a4.pdf — Docket No. R-1899, RIN
 *  7100-AH29, 12 CFR parts 208, 211, 217, 225, 247 and 263, 392 pages,
 *  "Implementing the Federal Reserve Board's Responsibilities under the
 *  GENIUS Act". Both carry ACTION: Notice of proposed rulemaking.
 *
 *  THE STAGE. Both DATES fields still read "[INSERT DATE 60 DAYS FROM DATE OF
 *  PUBLICATION IN THE FEDERAL REGISTER]", and federalregister.gov's API
 *  returns zero documents for docket R-1899 and zero for R-1900 as of the
 *  evening of 25 September. Nothing is in force and the sixty days has not
 *  started. The piece says so because most coverage does not.
 *
 *  The question counts are this desk's own: the numbered questions in the
 *  larger notice run from 1 to 254 (question 136 is typeset "Question: 136:",
 *  which is why a naive count returns 253), and the applications notice
 *  carries 23. Two hundred and seventy-seven is our sum of those two.
 *
 *  Every substantive provision cited — the permissible reserve assets of
 *  proposed § 247.11(b), including the 93-day limit and footnote 48 on money
 *  market funds; the principles-based diversification standard of § 247.11(c)
 *  and the "predominantly of U.S. Treasury securities" sentence; the two per
 *  cent charge on uninsured deposit claims and undercollateralised reverse
 *  repo; the graduated operational-risk charge of 2.0/1.5/1.0 per cent; the
 *  25 per cent of three-year average non-reserve-asset revenue; the loss
 *  scalar; the $5m de novo floor of § 247.15(b)(2) and the OCC's $6.05m to
 *  $25m range quoted in support of it; the consequences of missing the
 *  minimum for two consecutive quarters; the two-business-day redemption
 *  period and the Board's discretion to extend it; and the confidential
 *  weekly report of § 247.14(h) against a twelve-month examination cycle —
 *  is read in those documents at the paragraph cited. Provisions examined but
 *  cut for length, and available if the piece is ever expanded: the anti-tying
 *  authority over all PPSIs, the $10bn transition for covered state-qualified
 *  issuers, the "unusual and exigent circumstances" back-up power with its
 *  48 hours' notice and its section 13(3) disclaimer, and the deconsolidation
 *  and CET1 deduction in part 217.
 *
 *  The Treasury-demand passage is the larger notice's economic analysis,
 *  headed "Increased Demand for U.S. Financial Products". Both quoted
 *  sentences are the Board's own language.
 *
 *  The vote is the Board's published voting record at
 *  federalreserve.gov/aboutthefed/boardvotes.htm: two entries dated
 *  09/24/2026, both carrying Chairman Warsh, Vice Chair Jefferson, Vice Chair
 *  for Supervision Bowman and Governors Barr, Cook, Powell and Waller, with
 *  none against and none abstaining. Governor Barr's statement is quoted from
 *  barr-statement-20260924.htm in full context.
 *
 *  THE OVERSEAS PUSH is deliberately subordinate and labelled. Bloomberg's
 *  own article returns HTTP 403 to this desk and nothing here rests on it;
 *  the account used is CoinDesk's and crypto.news's relay of it, both of
 *  which attribute the plan to people familiar with the discussions and name
 *  no country, company, sum or date. No figure from those reports is used in
 *  the piece; only the fact of the deliberation and its sourcing.
 *
 *  Reserve figures for Circle and Tether are not re-reported here. They are
 *  linked to this desk's own piece of 24 September,
 *  /fintech/ten-days-of-maturity-and-a-pile-of-gold/, which sourced them to
 *  Circle's Form 10-Q, the Circle Reserve Fund factsheet of 31 August and
 *  Tether's BDO attestation at 30 June.
 *
 *  Hero: Joshua Woroniecki via Unsplash, in tools/data/heroes.json. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const FT=P("fintech","Fintech","fintech");

export default [

FT({ slug:"two-hundred-and-seventy-seven-questions", kick:"Stablecoins",
  headline:"Two hundred and seventy-seven questions",
  dek:"The Federal Reserve Board voted seven to nothing on Thursday to put two proposed rules for payment stablecoin issuers out for comment. It has decided nothing. The notices run to 452 pages, ask 277 numbered questions and have not yet reached the Federal Register, so the sixty days has not started — but the reserve list inside them is an answer to the balance sheets this desk opened yesterday.",
  metaDesc:"The Federal Reserve Board approved two notices of proposed rulemaking on 24 September 2026 implementing the GENIUS Act for payment stablecoin issuers. Comments close 60 days after Federal Register publication, which has not yet happened.",
  author:"elena-vasquez", date:"2026-09-25T18:00:00Z",
  capt:"The Federal Reserve Bank of Chicago at LaSalle and Jackson. The rules were written at the Board in Washington, but the state member banks that are the only institutions entitled to apply under the second of them are examined through the Reserve Banks.",
  tags:[{name:"Stablecoins",slug:"stablecoins"},{name:"Regulation",slug:"regulation"},{name:"Banking",slug:"banking"}],
  related:[
    {href:"/fintech/ten-days-of-maturity-and-a-pile-of-gold/",kick:"Stablecoins",title:"Ten days of maturity, and a pile of gold",ago:"SEPTEMBER 24, 2026"},
    {href:"/blockchain/eight-hundred-and-forty-seven-use-cases/",kick:"Regulation",title:"Eight hundred and forty-seven use cases",ago:"SEPTEMBER 24, 2026"},
    {href:"/blockchain/two-remortgages-and-a-marketplace/",kick:"Tokenization",title:"Two remortgages and a marketplace",ago:"SEPTEMBER 24, 2026"},
  ],
  body:[
    `At half past two on Thursday afternoon the Federal Reserve Board released two documents and a vote — taken twice, once on each, and both times it was Chairman Warsh, Vice Chair Jefferson, Vice Chair for Supervision Bowman and Governors Barr, Cook, Powell and Waller in favour, none against. Each document carries a line near the top reading ACTION: Notice of proposed rulemaking. That line is the story, and it is the line the coverage dropped.`,
    `Nothing has been ruled. The Board has asked. Docket No. R-1899 runs to 392 pages and puts 254 numbered questions to the public; Docket No. R-1900 is sixty pages of application procedure and adds twenty-three. Comments are due sixty days after publication in the Federal Register, and both notices still carry the bracketed placeholder where that date will go: as of Friday evening neither appears in the Federal Register. The clock has not started. The statute takes effect on the earlier of 18 January 2027 or 120 days after final rules, and these are not final rules.`,
    `They are the first full description of what a supervised dollar stablecoin must look like. <a href="/fintech/ten-days-of-maturity-and-a-pile-of-gold/">This desk opened the two largest issuers' reserve sheets yesterday</a> and found a ten-day weighted average maturity at one and roughly $38bn of gold, bitcoin and secured lending against a $4.11bn cushion at the other. Proposed section 247.11(b) answers exactly that spread: dollars and Federal Reserve balances, eligible deposit claims, Treasuries with 93 days or less remaining, overnight repo against such bills, over-collateralised overnight reverse repo, government money market funds invested solely in those things, and tokenised versions with identical legal rights. A footnote shuts the obvious door: a fund holding any Treasury with more than 93 days to run would not be eligible. Ten days clears that comfortably. Nothing else on yesterday's page comes close.`,
    `Diversification gets a principle rather than a number. Reserves must be "sufficiently diverse" to hold the one-to-one line "at all times, including under stress" and should consist "predominantly of U.S. Treasury securities". Caps were considered and shelved, with the Board asking whether it should have imposed them — the one place where the March 2023 lesson, an issuer stranded at a single failing bank, draws no figure.`,
    `Capital is where the numbers are. Two per cent against uninsured deposit claims and undercollateralised reverse repo. A graduated operational-risk charge of 2.0 per cent on the first $20bn of coins outstanding, 1.5 on the next $30bn and 1.0 above $50bn, plus a quarter of three-year average revenue from anything other than reserve assets, plus a scalar keyed to realised losses. New issuers face a floor of $5m for three years, indexed to nominal GDP — a figure the Board calls the lower bound, citing the OCC's own estimate that a viable stablecoin business needs $6.05m to $25m. Miss it at a quarter end and you file a plan; miss it again and you liquidate the reserves and redeem the coins.`,
    `Two provisions deserve attention. Redemption, capped at two business days, may be extended at the Board's discretion where an issuer threatens its own soundness or financial stability, or where an extension "would otherwise be in the public interest": a supervised stablecoin is an instrument whose par redemption the state may suspend. And reporting is a confidential weekly return, per coin, of issuance, redemptions, trading volume and reserve assets, against an examination once every twelve months. The supervisory cadence is weekly.`,
    `Governor Barr voted for both and published his reservations, the useful document here. He wants comment on whether the rule "adequately addresses interest rate and foreign currency risks" and wants "universal redemption rights" clear in the final text. His objection is the enforcement threshold: an anti-money-laundering deficiency must be "significant or systemic" before the Board may act, a standard he says "may have unknown effects on the Board's ability to effectively substantiate that an institution establishes and maintains compliant programs".`,
    `The Board did not bury the Treasury argument in a speech; it wrote it into the economic analysis, under the heading "Increased Demand for U.S. Financial Products". By requiring short-dated bills and Treasury-secured repo as reserves, it says, "the proposal creates structural demand for such securities", with "potential benefits for the funding of the U.S. government" — and is "likely to increase demand for U.S. dollars", because sturdier coins "would allow a broader set of transactions to be denominated in U.S. dollars".`,
    `Against that, give the reported plan to push dollar stablecoins overseas the weight it has earned. Bloomberg reported this week that the administration is weighing joint ventures with private firms — possibly involving Treasury, the State Department and the Development Finance Corporation — to spread dollar stablecoins abroad and deepen the bid for Treasuries. Bloomberg's page refuses automated requests and this desk has not read it; the accounts that can be read attribute the plan to people familiar with the discussions and name no country, company, sum or date. It is a deliberation. The 392-page notice is a document, and it already says the quiet part in a paragraph seven governors voted on.`,
    `So, for anyone drafting an application: no rule, 277 questions, no comment deadline yet, and a statutory backstop in January 2027 that is closer than this calendar comfortably allows. What it settles is the shape of the argument. The reserve list is short-dated government paper and nothing else; the capital is calibrated to the two exposures that actually broke an issuer once; the reporting is weekly. An issuer whose balance sheet already looks like that has a filing to write. One that does not has already said what it thinks of the perimeter by <a href="/fintech/ten-days-of-maturity-and-a-pile-of-gold/">building a second token to sit inside it</a>.`,
  ] }),

];
