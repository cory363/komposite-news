/*
Komposite News, batch 108: Wednesday 28 October 2026, round 28 (new homepage lead; the round-27 SK hynix lead moves down).
Fact-checked against primary documents. Written and checked under the 26 Oct SEO/trust rules: house byline only,
labelled original analysis, 2+ internal and 2+ external links, metaDesc <= 155 characters.

---------- 23:40Z MARKETS (LEAD): "Thirty-seven and a half billion, with sixty to follow" (priya-raghavan, house byline) ----------
SOURCES READ:
- Meta investor relations, "Meta Announces Pricing of Offering of Depositary Shares Representing Series A Mandatory Convertible
  Preferred Stock and Offering of Class A Common Stock in Connection with Forward Sale Agreements", 26 Oct 2026 (read):
  250,000,000 depositary shares at $50, each 1/20th of a 6.50% Series A Mandatory Convertible Preferred share, Nasdaq "METAM"
  applied for; $25.0bn of Class A at $625.00, "upsized to $25.0 billion from the previously announced offering size of $22.5
  billion"; greenshoes 37,500,000 depositary shares and up to $3.75bn common; forward net ~$24.9bn at initial forward price
  ~$622.92, ~$28.7bn with option; no initial proceeds from forward purchasers' sales; general corporate purposes; dividends
  6.50% on $1,000 liquidation preference, quarterly 15 Feb 2027 to 15 Aug 2029; mandatory conversion ~15 Aug 2029 at
  1.3620-1.6000 Class A per preferred share (0.0681-0.0800 per depositary share); possible conversion into Class C;
  forward counterparties Morgan Stanley Capital Services LLC and Goldman Sachs & Co. LLC, 40,000,000 shares (46,000,000 with
  option), settlement on or before 19 Nov 2027; close expected 29 Oct 2026; offerings not conditioned on each other;
  bookrunners Morgan Stanley and Goldman Sachs; co-managers Allen & Company, BDT & MSD, Centerview, Jefferies, Lazard, Raine.
- SEC, Meta free writing prospectus (FWP), 26 Oct 2026 (read): "The Company plans to launch an approximately $60 billion
  at-the-market ("ATM") program upon the commencement of trading" of Class C; "has not entered into any agreement";
  "timing, size and terms of any such program, if established, have not been determined"; "not expected to commence until
  the first quarter of 2027"; "Sales under the ATM program are not conditioned upon the underwritten offerings."
- SEC, final 424(b)(5) prospectus supplement for the Class A forward offering, 26 Oct 2026 (read): 40,000,000 Class A at
  $625.00; NVIDIA, AMD and Broadcom as "Cornerstone Investors" that "indicated an interest in purchasing up to an aggregate of
  $5.0 billion"; indications "not binding agreements or commitments to purchase".
- SEC, preliminary 424(b)(5) prospectus supplement for the depositary shares, 26 Oct 2026 (read): "As of September 30, 2026,
  our total consolidated indebtedness was $83.7 billion"; 2,214m Class A and 342m Class B outstanding at 30 Sep 2026;
  Class C charter filed 21 Oct, effective 19 Jan 2027; 1 vote per A, 10 per B, none per C.
- Meta Q3 2026 results release, 21 Oct 2026 (read): revenue $64.6bn (+26%); operating margin 20% vs 40%; capex incl.
  finance-lease principal $34.91bn; free cash flow -$2.12bn; cash and marketable securities $82.45bn; long-term debt $80.9bn;
  no Q3 buybacks; 2026 capex $135-145bn; $9.89bn legal charge.
- The Motley Fool, Daniel Sparks, 28 Oct 2026 16:37 ET (read): $625 vs $630.56 last sale on 26 Oct; close $612.49 on 28 Oct,
  down $7.70 (1.24 per cent); Nvidia "said it would invest $3 billion" (single source, attributed); 2025 buybacks $26.2bn;
  dilution ~2.2-2.3 per cent.
- Investing.com via Yahoo Finance, Frank DeMatteo, 27 Oct 2026 10:06 ET (read): $97.5bn combined framing; ATM is future
  capacity; Q3 free cash flow first negative quarter in more than a decade (theirs, attributed).
FACT-CHECK NOTES:
- An aggregator summary (TradingView) described a "$35B offering of Class C nonvoting shares"; the filings do not support it. Not used.
- Some reports say pricing came on Tuesday; the final prospectus supplement and the release are dated Monday 26 October. Monday used.
- The Q3 results were covered on the sister site Cranberry Journal on 22 Oct; this story is about the equity raise, and Q3
  figures are context only. Komposite's 22 Oct Class C story is linked, not repeated.
OUR ARITHMETIC: shares 2,214m + 342m = 2,556m; 40m / 2,556m = 1.56%; preferred 250m x 0.0681-0.0800 = 17.0-20.0m Class A
  (0.67-0.78%); total 57.0-60.0m = 2.2-2.3%; with both options 46m + 287.5m x 0.0681-0.0800 = 65.6-69.0m (2.6-2.7%);
  $60bn / $625 = 96m Class A equivalents = 3.8% (before the Class C dividend doubles the count, which leaves the proportion
  unchanged); $625 / $630.56 = 0.88% discount; 2,556m x $625 = ~$1.6tn; 37.5 / 1,597.5 = 2.3%; 6.5% x $12.5bn = $812.5m a
  year; votes: Zuckerberg 1.22m + 341.2m x 10 = 3,413.4m of 2,214m + 3,420m = 5,634m (60.6%); +40m Class A: 3,413.4 / 5,674 =
  60.2%; +20m more on conversion into Class A: 3,413.4 / 5,694 = 59.9%; 37.5 / 140 (capex midpoint) = 27%; $5bn / $25bn = 20%.
HERO: Wikimedia Commons, "Facebook, Highway 126, Prineville - DPLA - fd9c0cae95b43c5864c55d3eef1bf5a6.jpg", Gary Halvorson,
  Oregon State Archives, CC BY 4.0, 8 Jul 2014: Meta's (then Facebook's) server farm west of Prineville, Oregon. No people.
  Not used before on Komposite or any sister site (Cranberry's Meta Q3 story uses the Luleå building; avoided).

BACKUP r28-2 (Anthropic's 40 per cent GSA discount): not used; single company source.
Not a repeat: repo grep found no coverage of the pricing, the forward sale, the cornerstone investors or the ATM programme.
*/
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const MK = P("markets", "Markets", "markets", "Photograph via Wikimedia Commons");

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
const META_PR = "https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Announces-Pricing-of-Offering-of-Depositary-Shares-Representing-Series-A-Mandatory-Convertible-Preferred-Stock-and-Offering-of-Class-A-Common-Stock-in-Connection-with-Forward-Sale-Agreements/default.aspx";
const META_FWP = "https://www.sec.gov/Archives/edgar/data/0001326801/000119312526431036/d116268dfwp.htm";
const META_424A = "https://www.sec.gov/Archives/edgar/data/0001326801/000119312526436410/d94886d424b5.htm";
const META_424P = "https://www.sec.gov/Archives/edgar/data/0001326801/000119312526431043/d133631d424b5.htm";
const META_Q3 = "https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Third-Quarter-2026-Results/default.aspx";
const FOOL = "https://www.fool.com/investing/2026/10/28/meta-just-priced-a-stock-sale-at-usd625-a-share-i-d-consider-buying-at-the-same-price/";
const INV = "https://finance.yahoo.com/news/meta-97-5b-ai-money-140646904.html";

const META_TABLE = table(["Piece", "Size", "Terms", "Status"], [
  ["Class A common stock, forward sale", "$25.0bn (40m shares at $625); up to $3.75bn more", "Morgan Stanley and Goldman Sachs affiliates sell borrowed shares now; Meta delivers shares and takes about $24.9bn on or before 19 Nov 2027", "Priced 26 Oct; closes 29 Oct"],
  ["Mandatory convertible preferred (depositary shares)", "$12.5bn (250m at $50); up to 37.5m more", "6.50% dividend; converts around 15 Aug 2029 into 0.0681 to 0.0800 Class A shares per depositary share", "Priced 26 Oct; closes 29 Oct"],
  ["At-the-market programme, Class C stock", "About $60bn", "Sold from time to time through a manager; no agreement signed; timing, size and terms not determined", "Not before the first quarter of 2027"],
  ["Total", "$37.5bn priced; $97.5bn including the planned programme", "Our arithmetic, before over-allotment options", ""]
], `Sources: ${L(META_PR, "Meta's pricing announcement")}, ${L(META_FWP, "free writing prospectus")} and ${L(META_424A, "prospectus supplement")}, all 26 October 2026. Totals are Komposite's arithmetic.`);

export default [

/* ---------- 23:40Z MARKETS (LEAD) ---------- */
MK({ slug: "thirty-seven-and-a-half-billion-with-sixty-to-follow", kick: "Equity Raise",
  headline: "Thirty-seven and a half billion, with sixty to follow",
  dek: "Meta priced $37.5bn of new equity on Monday, $25bn of common stock at $625 a share and $12.5bn of mandatory convertible preferred, and said it plans a further $60bn share-sale programme next year. Nvidia, AMD and Broadcom indicated interest in buying up to $5bn.",
  metaDesc: "Meta priced $25bn of stock at $625 and $12.5bn of convertible preferred, and plans a $60bn share programme in 2027 as AI spending outruns its cash flow.",
  author: "priya-raghavan", date: "2026-10-28T23:40:00Z",
  capt: "A long, low Meta data centre building, then Facebook's, behind a row of juniper trees and a wire fence west of Prineville, Oregon, in a file photograph.",
  tags: [
    { name: "Capital Markets", slug: "capital-markets" },
    { name: "AI Infrastructure", slug: "ai-infrastructure" },
    { name: "Corporate Strategy", slug: "corporate-strategy" }
  ],
  related: [
    R("/markets/a-second-meta-share-without-the-vote/", "Capital Structure"),
    R("/markets/spacex-takes-its-forty-billion-as-a-lease/", "Financing"),
    R("/markets/the-ai-payoff-stops-at-seven-companies/", "AI Economics")
  ],
  body: [
    `Meta Platforms priced $37.5bn of new equity late on Monday, selling $25bn of Class A common stock at $625 a share and $12.5bn of mandatory convertible preferred stock, ${L(META_PR, "the company said in its pricing announcement")}. It also said it plans to sell about $60bn more stock through an at-the-market programme from next year.`,
    `The common stock sale was ${L(META_PR, "upsized to $25.0bn from $22.5bn")} and is structured as a forward sale. Affiliates of Morgan Stanley and Goldman Sachs, the two lead bookrunners, will borrow and sell 40m Class A shares now; Meta will deliver new shares and collect about $24.9bn, at an initial forward price of about $622.92, on dates of its choosing on or before 19 November 2027. Meta expects no proceeds from that initial sale of borrowed shares, the release said. The preferred stock is sold as 250m depositary shares at $50, each a twentieth of a share carrying a 6.50 per cent annual dividend, and converts into Class A stock around 15 August 2029. Both offerings are expected to close on Thursday, and the proceeds are for "general corporate purposes".`,
    `The third piece is not yet a deal. In a ${L(META_FWP, "free writing prospectus filed with the SEC")}, Meta said it "plans to launch an approximately $60 billion at-the-market ('ATM') program" once its new non-voting Class C shares begin trading, and that the programme "is not expected to commence until the first quarter of 2027". It added that it "has not entered into any agreement" and that "the timing, size and terms of any such program, if established, have not been determined." An at-the-market programme lets a company sell shares into the market in small amounts over time rather than in one underwritten block.`,
    META_TABLE,
    `Three chipmakers are on the buy side. ${L(META_424A, "The prospectus supplement")} names NVIDIA, AMD and Broadcom as "Cornerstone Investors" that "indicated an interest in purchasing up to an aggregate of $5.0 billion" of the common stock, about a fifth of the offering by our arithmetic, and says the indications are "not binding agreements or commitments to purchase". ${L(FOOL, "The Motley Fool reported")} that Nvidia said it would invest $3bn; Komposite has not seen that figure in a filing. The price of $625 was about 0.9 per cent below the last sale of $630.56 on Monday, by our arithmetic from that report, and the shares closed at $612.49 on Wednesday, down 1.24 per cent.`,
    `The reason is in the cash flow statement. Meta's ${L(META_Q3, "third-quarter results")}, published on 21 October, show capital expenditure, including finance-lease principal, of $34.91bn in the quarter and free cash flow of minus $2.12bn. The company kept its 2026 capital spending forecast at $135bn to $145bn and made no share buybacks in the quarter. It ended September with $82.45bn of cash and marketable securities, and the preliminary prospectus puts ${L(META_424P, "total consolidated indebtedness at $83.7bn")}. ${L(INV, "Investing.com described")} the negative free cash flow as the first in more than a decade.`,
    `The dilution is modest on its own. By our arithmetic, the 40m new common shares equal 1.6 per cent of the 2,556m Class A and Class B shares outstanding on 30 September, and the preferred will convert into between 17.0m and 20.0m more, so the two priced deals add 2.2 to 2.3 per cent before over-allotment options, or up to 2.7 per cent if both are exercised in full. The full $60bn programme, at Monday's price, would be roughly another 3.8 per cent. At $625 a share, the $37.5bn priced is about 2.3 per cent of Meta's market value of roughly $1.6tn. The preferred dividend costs about $812.5m a year.`,
    `The order of the deals matters for control. Meta created the Class C shares, which carry no votes, so that it could raise equity without diluting Mark Zuckerberg, who held about 60.6 per cent of the voting power, as <a href="/markets/a-second-meta-share-without-the-vote/">Komposite reported last week</a>. Monday's sale, however, is of voting Class A shares, because the Class C stock does not take effect until 19 January. By our arithmetic from the prospectus share counts, 40m new Class A votes take Mr Zuckerberg's share to about 60.2 per cent, and conversion of the preferred into Class A would take it to about 59.9 per cent. The filings allow the forward sales and the preferred to be settled in Class C stock in some circumstances, which would avoid that.`,
    `Why it matters: Meta has paid for its data centres from operating cash and, increasingly, from bonds; ${L(FOOL, "The Motley Fool counts")} $29.9bn of long-term borrowing in the fourth quarter of 2025 and $24.9bn in the second quarter of 2026. It is now adding equity, with chipmakers among the would-be buyers. Against the midpoint of its 2026 spending forecast, the $37.5bn priced this week would cover about 27 per cent of a single year's capital expenditure, by our arithmetic, and the cash from the common stock is not due until as late as November 2027.`,
    `Other capital-intensive AI builders have reached for different structures. SpaceX <a href="/markets/spacex-takes-its-forty-billion-as-a-lease/">took $40bn of GPU financing as a lease</a> from an Apollo-managed vehicle, Komposite reported on Monday, and Apollo's chief economist argued at the weekend that <a href="/markets/the-ai-payoff-stops-at-seven-companies/">the financial payoff from AI has so far stopped at seven companies</a>, Meta among them. Meta has now asked public shareholders to fund more of the bet directly.`
  ]
}),

];
