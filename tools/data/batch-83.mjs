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

/** Batch 83 — Thursday 15 October 2026, round 11. One more story, not a lead.
 *  Timed 12:45Z: older than all four batch-82 stories (13:20Z lead, 13:10Z
 *  and 13:00Z cluster, 12:50Z), so the front-zone builder leaves those slots
 *  as they are; filed in Policy, outside the lead's Markets cluster. Repeat
 *  check: repo grep for "debank": no earlier story. Distinct from the round-9
 *  Bank of America piece (OCC NR 2026-89, a $750m BSA/AML penalty on one
 *  bank); this is NR 2026-90, a supervisory report on nine banks' fair-access
 *  policies with no penalty. It links to that piece.
 *
 *  POLICY / OCC DEBANKING REPORT (12:45Z). Checked 15 Oct against the raw
 *  HTML of OCC NR 2026-90 (14 Oct): nine banks as named, 2020 to September
 *  2025, all nine had such policies, sectors as listed, nearly 100,000
 *  complaints, approximately 50,000 documents / 420,000 pages, announced
 *  September 2025, preliminary findings December 2025, considering actions,
 *  assessing further changes. Gould quotes verbatim from the release,
 *  including "irrefutable evidence", "not a mantra—it is a mandate" and "I am
 *  not confident that they will be enough" (the draft had only paraphrased
 *  the last; it IS in the release). Report PDF (nr-occ-2026-90a.pdf, text
 *  extracted): digital-asset restrictions "including on issuers, exchanges,
 *  or administrators, often attributed to financial crime considerations";
 *  restrictions "varied from categorical prohibitions to escalated reviews
 *  and approvals"; banks' recent "removal or relaxation of restrictions"
 *  including digital assets, "difficult to assess at this stage"; the OCC
 *  "was unable to quantify on a comprehensive basis the full extent of
 *  debanking". Reputation-risk rule: Federal Register 2026-06947, 91 FR
 *  18279, OCC and FDIC final rule published 10 Apr 2026, "effective June 9,
 *  2026" (the report dates its issue 7 Apr). No penalty: none in the release
 *  or report; Reuters (Schroeder, Saini, 14 Oct, syndicated copy read) says
 *  the OCC "did not indicate any sanctions or punishments were forthcoming".
 *  CHANGED: "the OCC and the Treasury announced a $1.21bn penalty" against
 *  BofA corrected to the OCC's $750m (the $1.21bn is the Treasury's total for
 *  FinCEN plus OFAC); "imposed no fines" (Crypto Times citing Reuters) now
 *  attributed to Reuters directly; "findings do not establish that every
 *  policy led to a refusal" (not in any source) replaced with the report's
 *  own line on quantification. CUT: "47-page" (not confirmed), Crypto Times
 *  and CryptoSlate as sources (every fact now from the OCC, the Federal
 *  Register or Reuters). No arithmetic of ours.
 *  Hero: Constitution Center, 400 7th Street SW, the OCC's headquarters
 *  (address per occ.gov and 12 CFR 4.4), Tim1965, CC BY-SA 3.0, no people.
 */

const OCC = "https://www.occ.gov/news-issuances/news-releases/2026/nr-occ-2026-90.html";
const REPORT = "https://www.occ.gov/news-issuances/news-releases/2026/nr-occ-2026-90a.pdf";
const FR = "https://www.federalregister.gov/documents/2026/04/10/2026-06947/prohibition-on-the-use-of-reputation-risk-by-regulators";

export default [

/* ---------- 12:45Z POLICY ---------- */
PO({ slug: "nine-banks-a-review-and-no-penalty", kick: "Debanking",
  headline: "Nine banks, a review, and no penalty",
  dek: "The OCC said on Wednesday that all nine of the largest national banks it supervises had policies that could deny or limit services over beliefs or lawful business, digital assets included. It announced no penalty, and its head said he was not confident the banks' own fixes would be enough.",
  metaDesc: "The OCC's debanking review found all nine of the largest national banks it supervises had restrictive policies, including on digital assets. No penalty was announced.",
  author: "jonathan-bright", date: "2026-10-15T12:45:00Z",
  capt: "Constitution Center at 400 7th Street SW in Washington, which houses the headquarters of the Office of the Comptroller of the Currency, in a 2011 file photograph.",
  tags: [
    { name: "Banking", slug: "banking" },
    { name: "Regulation", slug: "regulation" },
    { name: "Digital Assets", slug: "digital-assets" }
  ],
  related: [
    R("/fintech/the-record-penalty-comes-after-the-order/", "Enforcement"),
    R("/fintech/rain-applies-for-the-charter-the-community-banks-are-suing-over/", "Charters"),
    R("/fintech/the-charter-picks-the-arithmetic/", "Banking")
  ],
  body: [
    `The Office of the Comptroller of the Currency on Wednesday published the findings of its review of debanking at the nine largest national banks it supervises, and said that between 2020 and September 2025 all nine had policies that may have led them to deny or limit financial services to Americans because of their political or religious beliefs or lawful business activities, ${L(OCC, "according to the agency's release")}. The banks are JPMorgan Chase, Bank of America, Citibank, Wells Fargo, U.S. Bank, Capital One, PNC, TD Bank and BMO.`,
    `The OCC said broad "reputation risk" policies, which lacked clear standards and objective, risk-based criteria, disadvantaged some customers. It said the banks kept public and non-public policies restricting whole industries: oil and gas exploration, coal mining or coal-powered plants, firearms or ammunition, the construction or operation of detention facilities, tobacco and e-cigarettes, and digital asset activities. ${L(REPORT, "The report itself")} says those restrictions "varied from categorical prohibitions to escalated reviews and approvals before providing access".`,
    `The exercise was large. The OCC said it reviewed nearly 100,000 complaints and received about 50,000 documents, running to about 420,000 pages, from the banks. It announced the review in September 2025 and issued preliminary findings in December 2025. Even so, the report says the agency "was unable to quantify on a comprehensive basis the full extent of debanking or alleged debanking actions or the costs to customers", citing the completeness of the banks' responses and how they tracked such decisions.`,
    `On crypto the report is brief. It says many institutions restricted banking for digital asset activities, "including on issuers, exchanges, or administrators, often attributed to financial crime considerations". It names no affected crypto firms and gives no count of those refused. It also notes that banks have recently removed or relaxed restrictions affecting industries including firearms, tobacco and digital assets, but says it is "difficult to assess at this stage" whether those changes affect actual decisions.`,
    `"Today's report provides irrefutable evidence that the nation's largest banks have denied, debanked and discriminated against customers and lawful businesses," said Comptroller of the Currency Jonathan V. Gould. "Americans should have access to financial services regardless of their beliefs, affiliations, or political views. Fair access to financial services is not a mantra—it is a mandate."`,
    `No penalty came with the report, and Reuters reported that the OCC did not indicate any sanctions or punishments were forthcoming. The agency said instead that it is considering actions to stop banks discriminating against customers on the basis of political or religious beliefs and to address the role of reputation risk in bank decisions. "Notwithstanding certain efforts by the largest banks to rein in these practices, I am not confident that they will be enough," Gould said, adding that the OCC "will be assessing further changes to the regulatory and supervisory framework applicable to the largest banks".`,
    `The contrast with the day before is plain. On Tuesday the same agency fined Bank of America $750m, the largest penalty in its history, for an anti-money-laundering programme it called deficient, as we reported in <a href="/fintech/the-record-penalty-comes-after-the-order/">our coverage of that action</a>. That case punished one bank for too little financial-crime control. This report faults nine for leaning on loose risk language, and the crypto restrictions it describes were themselves often justified as financial-crime controls.`,
    `The regulators' side has already changed. An OCC and FDIC final rule that ${L(FR, "took effect on 9 June")} bars the agencies from criticising or taking adverse action against a bank on the basis of reputation risk, and from pushing a bank to close or refuse an account because of a customer's political, social, cultural or religious views or politically disfavoured but lawful business. Some crypto firms are meanwhile seeking national trust charters of their own, a route community bankers are suing the OCC over, as covered in <a href="/fintech/rain-applies-for-the-charter-the-community-banks-are-suing-over/">our report on Rain's application</a>.`,
    `The report is a finding about the past, not a remedy. It leaves the banks free to decline customers on financial-crime and other risk grounds, and what any further rules for the largest banks would require is not yet known.`
  ]
}),

];
