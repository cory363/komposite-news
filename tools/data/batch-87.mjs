import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const CY = P("cybersecurity", "Cybersecurity", "cybersecurity", "Photograph via Unsplash");

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

/** Batch 87 — Saturday 17 October 2026, round 14c. One more story, not a lead.
 *  Timed 17:15Z: older than the round-14 FTC lead (17:20Z), so the front-zone
 *  builder keeps that lead and its AI cluster (Meta 17:10Z, Anthropic 17:00Z),
 *  and newer than everything else, so this takes the top Latest card and the
 *  oldest grid occupant drops out. Repeat check: repo grep for Varonis,
 *  Proofpoint and Thoma Bravo: no earlier story.
 *
 *  CYBERSECURITY / PROOFPOINT-VARONIS (17:15Z). Checked 17 Oct against the
 *  raw HTML of the Varonis 8-K (acc. 0001213900-26-109901, filed 15 Oct,
 *  Items 1.01, 5.02, 7.01) and its Exhibit 99.1 joint release: ~$6.3bn
 *  all-cash, $49.75 a share; 52% over $32.71 (22 Jun, a Monday) and 17% over
 *  $42.35 (1 Sep, a Tuesday); ~53x LTM FCF (market cap basis) and 8.4x LTM
 *  revenue (EV basis) as of 30 Jun; 16,000+ enterprises (company claim);
 *  board unanimous; close H1 2027; Thoma Bravo committed equity and debt
 *  commitments; Ontario Teachers' investment; Q3 results after the close on
 *  3 Nov (a Tuesday), no call; advisers as listed. All quotes verbatim from
 *  the release. 8-K: termination fee $211.7m payable by Varonis (e.g. to take
 *  a Superior Proposal), reverse fee $423.3m payable by Proofpoint; outside
 *  date 15 Jul 2027 with a three-month regulatory extension; HSR and certain
 *  foreign approvals; majority-of-shares vote; no financing condition;
 *  customary "no-shop" (no go-shop); Faitelson support agreement, ~0.67% of
 *  shares; 18-month non-executive role after closing. Investing.com (Luke
 *  Juricic, 15 Oct): "shares climbed 2.7% in after-hours trading Thursday".
 *  Verdict via Yahoo: Hornetsecurity $1.8bn closed December 2025 (attributed).
 *  CHANGED: "Investing.com quoted the company" on the independent committee
 *  -> Faitelson's own words in the release; 80 of the Fortune 100 and the
 *  16,000 figure now sourced to the release; [VERIFY] on termination fee
 *  resolved from the 8-K; "nothing addresses approvals" replaced with the
 *  8-K's conditions. CUT: Reuters $5.71bn equity value (not opened). Our
 *  arithmetic: 49.75/32.71 = 1.52; 49.75/42.35 = 1.17; 423.3/211.7 = 2.0.
 *  Hero: Unsplash tebFqdANuxs (imgix), servers and blue network cables in a
 *  rack, no people, not used before on the site.
 */

const REL = "https://www.sec.gov/Archives/edgar/data/1361113/000121390026109901/ea030861001ex99-1.htm";
const EK = "https://www.sec.gov/Archives/edgar/data/1361113/000121390026109901/ea0308610-8k_varonis.htm";
const INV = "https://www.investing.com/news/stock-market-news/varonis-stock-climbs-on-63-billion-proofpoint-deal-4952619";
const VER = "https://finance.yahoo.com/news/proofpoint-acquire-varonis-6-3bn-071102242.html";

export default [

/* ---------- 17:15Z CYBERSECURITY ---------- */
CY({ slug: "fifty-two-per-cent-over-the-june-price", kick: "M&A",
  headline: "Fifty-two per cent over the June price",
  dek: "Proofpoint, owned by Thoma Bravo, has agreed to buy the data-security firm Varonis for about $6.3bn in cash, or $49.75 a share. The price is 52 per cent above the last close before sale rumours surfaced in June.",
  metaDesc: "Thoma Bravo-owned Proofpoint agreed to buy Varonis for about $6.3bn in cash at $49.75 a share, with closing expected in the first half of 2027.",
  author: "sam-porter", date: "2026-10-17T17:15:00Z",
  capt: "Servers and blue network cables in a rack, in a file photograph.",
  tags: [
    { name: "Cybersecurity", slug: "cybersecurity" },
    { name: "Private Capital", slug: "private-capital" },
    { name: "AI Security", slug: "ai-security" }
  ],
  related: [
    R("/cybersecurity/identity-first-security-spending/", "Spending"),
    R("/cybersecurity/everyone-shares-the-same-vendors/", "Vendors"),
    R("/startups/the-exit-is-an-acquisition/", "Exits")
  ],
  body: [
    `Proofpoint, a portfolio company of the private equity firm Thoma Bravo, has agreed to acquire Varonis Systems, the Nasdaq-listed data-security company, in an all-cash deal valued at about $6.3bn, the two companies said in ${L(REL, "a joint announcement")} on Thursday. Varonis shareholders would receive $49.75 a share. The Varonis board approved the agreement unanimously, and the companies expect it to close in the first half of 2027.`,
    `The announcement sets the price against two reference points. It is a 52 per cent premium to Varonis's close of $32.71 on 22 June, which the companies describe as the last full trading day before initial rumours of a sale, and 17 per cent above the $42.35 close on 1 September, the last full trading day before further media reports. By our arithmetic, $49.75 is 1.52 times the June figure and 1.17 times the September one. ${L(INV, "Investing.com reported")} that Varonis shares climbed 2.7 per cent in after-hours trading on Thursday.`,
    `The release gives two multiples as of 30 June: about 53 times trailing free cash flow, measured against market capitalisation, and 8.4 times trailing revenue, measured against enterprise value. It does not give dollar figures for revenue, and it does not say whether the headline $6.3bn is an equity or an enterprise value.`,
    `The merger agreement, summarised in ${L(EK, "Varonis's filing with the Securities and Exchange Commission")}, sets the cost of walking away. Varonis would owe Proofpoint a termination fee of $211.7m in specified circumstances, including if its board changes its recommendation or it terminates to accept a superior proposal. Proofpoint would owe Varonis a reverse termination fee of $423.3m in specified circumstances, including if it fails to close once the conditions are met. There is no go-shop period: the agreement carries a customary "no-shop" clause barring Varonis from soliciting rival offers.`,
    `On financing, the release says Thoma Bravo is providing committed equity and has secured debt financing commitments, and the filing says the buyer's obligations are not subject to any financing condition. The Ontario Teachers' Pension Plan has agreed to invest in Proofpoint in connection with the deal. Goldman Sachs is Varonis's exclusive financial adviser, with Paul Hastings as legal counsel. BofA Securities, Morgan Stanley, J.P. Morgan Securities, UBS Securities and Mizuho Securities are advising Proofpoint, with Kirkland &amp; Ellis as its legal counsel.`,
    `"Our mission is to secure AI and the data that powers it," said Yaki Faitelson, Varonis's chief executive, co-founder and chairman. He said the announcement followed "a comprehensive evaluation led by a committee of independent members of our Board of Directors, which included extensive outreach to a range of potential strategic and financial buyers", and called the deal "a realization of immediate, significant, and certain value". Faitelson, who the filing says owns about 0.67 per cent of the shares, has agreed to vote them in favour and has signed a term sheet to serve Proofpoint as a non-executive officer for 18 months after closing. Sumit Dhawan, Proofpoint's chief executive, said: "This is a defining step in Proofpoint's evolution into a cybersecurity platform built for the future of AI."`,
    `The strategic case is the companies' own, and it is stated in terms of AI. Proofpoint's business centres on email, cloud and collaboration security, and it says it counts more than 80 of the Fortune 100 and more than 14,000 large enterprises among its customers. Varonis sells automated visibility and control over sensitive data, backed by round-the-clock managed detection and response. The companies say the combined business will serve more than 16,000 enterprises.`,
    `Proofpoint has been buying. ${L(VER, "Verdict reported")} that it closed a $1.8bn purchase of the email-security firm Hornetsecurity in December 2025, which would make Varonis its second large acquisition in about a year. Varonis will report third-quarter results after the market closes on Tuesday, 3 November, without an earnings call, and the two companies will operate separately until the deal closes.`,
    `The deal still needs approval from holders of a majority of Varonis shares, clearance under the Hart-Scott-Rodino antitrust act and certain foreign approvals. Either side can walk away if it has not closed by 15 July 2027, a date that can be extended by three months to obtain regulatory approvals. A premium measured from the pre-rumour price is the conventional way to present a take-private, but the stock had already reached $42.35 by September, so what the offer is worth to a holder depends on when they bought. Buyers have been paying for control over who and what can reach data, a shift traced in our coverage of <a href="/cybersecurity/identity-first-security-spending/">identity-first security spending</a>.`
  ]
}),

];
