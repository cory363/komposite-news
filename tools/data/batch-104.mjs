/*
Komposite News, batch 104: Monday 26 October 2026, round 25 (1 new homepage lead; the round-23 lead moves down).
Fact-checked against primary documents. Written and checked under the 26 Oct SEO/trust rules: house bylines only,
labelled original analysis, 2+ internal and 2+ external links, metaDesc <= 155 characters.

---------- 20:20Z MARKETS: "SpaceX takes its forty billion as a lease" (priya-raghavan, house byline) ----------
SOURCES READ:
- SpaceX Form 8-K, Item 8.01, date of report 24 October 2026, signed 26 October 2026 by Bret Johnsen, Chief Financial
  Officer (SpaceX investor-relations PDF, CIK 0001181412), downloaded and read in full (three pages).
- SpaceX release "SpaceX Secures $40 Billion in the Largest GPU Financing Ever", 26 October 2026, published on
  apollo.com; downloaded, full text read. The CFO commentary is unnamed in the release; Johnsen is the CFO who signed
  the 8-K. Quotes verbatim from the release.
- TechCrunch, Aditya Mehta, 26 Oct 2026, 9:46 AM PDT (read). Used for Musk's X post ("guppy-level death and
  consolidation", "more than 200" neoclouds), attributed to TechCrunch; the X post itself was not opened.
- SpaceX Q3 2026 earnings release, Exhibit 99.1 to the 8-K of 20 Oct 2026 (sec.gov), read: revenue $14,575m; Super
  Intelligence segment revenue $7,560m; Q3 capex $19,593m; nine-month capex $48,069m; nine-month operating cash flow
  $13,097m; cash $51,294m; debt and finance leases $2,698m current + $36,146m non-current; nameplate compute 1.7 GW.
- TechCrunch, 20 Oct 2026: Johnsen guided $35bn-$40bn of Q4 capital investment (read).
- Reuters via KFGO, 6 Oct 2026 (Rishabh Jaiswal): FT-reported plan of ~$10bn bank loans + ~$30bn investment-grade
  debt, Apollo expected to lead, Pimco in talks, close expected 2027 (read).
- Komposite, 7 Oct (forty-billion-dollars-on-a-bbb), 21 Oct (SpaceX/Tesla committees) and 25 Oct (Apollo's Slok note)
  for internal links.
FACT-CHECK NOTES:
- 24 Oct 2026 was a Saturday; the 8-K gives it as the commitment date. Filing signed Monday 26 Oct.
- "largest committed GPU financing" is SpaceX's own description in the release; attributed, not adopted.
- Rate undisclosed: the 8-K says the fixed rate "will be determined at pricing". No interest cost is estimated.
- Draft's "Bloomberg called the talks preliminary" cut (only second-hand via Quartz); table uses Reuters' wording.
OUR ARITHMETIC: one-twentieth per quarter = 20 quarters = five years. $40bn / 20 = $2bn a quarter; x4 = $8bn a year
  of principal once all tranches run (tranches start at different times, so this is the full-run rate, not a 2027
  figure). $2,698m + $36,146m = $38,844m; + $40,000m = $78,844m, 2.03x. $48,069m + $35bn-$40bn = $83.1bn-$88.1bn.
  $48,069m - $13,097m = $34,972m. Reuters 6 Oct -> commitment 24 Oct = 18 days.
HERO: Unsplash fgGhlFs3JDM, Mark Zeller (@datamaze): close-up of a server motherboard's expansion slots beside an
  installed card. No people, no logos. Not used before on the site (checked used-images.json and heroes.json).

BACKUP r25-2 (Bedrock Robotics $600m Series C): not used; the lead survived, and the backup rested on a single
TechCrunch report. Not a repeat: the site's 7 Oct story covered the reported loan-and-bond plan; this is the signed
lease with a different structure, lead group, term and timetable. Byline is a labelled house byline; not the owner.
*/
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
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

const TH = 'style="text-align:left;border-bottom:2px solid #222;padding:6px 8px"';
const TD = 'style="text-align:left;border-bottom:1px solid #ddd;padding:6px 8px;vertical-align:top"';
const table = (heads, rows, note) => `<div class="datatable" style="overflow-x:auto;margin:18px 0;max-width:calc(100vw - 32px)"><table style="border-collapse:collapse;width:100%;font-size:15px"><thead><tr>${heads.map(h => `<th ${TH}>${h}</th>`).join("")}</tr></thead><tbody>`
  + rows.map(r => `<tr>${r.map(c => `<td ${TD}>${c}</td>`).join("")}</tr>`).join("")
  + `</tbody></table><div class="tablenote" style="font-size:13px;color:#666;margin:6px 0 0">${note}</div></div>`;

const SX_8K = "https://d18rn0p25nwr6d.cloudfront.net/CIK-0001181412/3ebc4201-9fd5-4bbc-830a-f403b53b1985.pdf";
const SX_REL = "https://www.apollo.com/insights-news/pressreleases/2026/10/spacex-secures--40-billion-in-the-largest-gpu-financing-ever";
const SX_TC = "https://techcrunch.com/2026/10/26/spacex-locks-in-40b-gpu-financing-deal-with-apollo/";
const SX_Q3 = "https://www.sec.gov/Archives/edgar/data/1181412/000162828026066482/spaceexplorationtechnologi.htm";
const SX_TC_Q3 = "https://techcrunch.com/2026/10/20/spacexs-ai-business-is-beating-expectations/";
const SX_RTRS = "https://kfgo.com/2026/10/06/spacex-seeks-40-billion-to-buy-nvidia-chips-ft-reports/";

const SX_TABLE = table(["", "Reported on 6 October", "Filed on 26 October"], [
  ["Form", "About $10bn of bank loans and $30bn of investment-grade debt", "A master finance lease: the lessor buys the GPU pods and leases them to SpaceX"],
  ["Who leads", "Apollo expected to lead; Pimco among lenders in talks", "Apollo and Goldman Sachs (sole structuring agent); anchor commitments from BlackRock, Goldman Sachs Asset Management and KKR-advised accounts"],
  ["Status", "Talks", "Binding commitment letter, signed 24 October; closing conditions apply"],
  ["Timing", "Expected to close in 2027", "Expected to close before the end of 2026; lease schedules start in the first half of 2027"],
  ["Term", "Not reported", "About five to five and a quarter years for each tranche"],
  ["Interest", "Not reported", "Fixed rate, set at pricing; not disclosed"]
], `Sources: ${L(SX_RTRS, "Reuters, citing the Financial Times")} (6 October); ${L(SX_8K, "SpaceX's Form 8-K")} and ${L(SX_REL, "release")} (26 October). The comparison is Komposite's.`);

export default [

/* ---------- 20:20Z MARKETS (LEAD) ---------- */
MK({ slug: "spacex-takes-its-forty-billion-as-a-lease", kick: "AI Infrastructure",
  headline: "SpaceX takes its forty billion as a lease",
  dek: "SpaceX has signed a binding commitment for an Apollo-managed entity to buy Nvidia GPU pods and lease them to it, with about $40bn of principal repaid over roughly five years. Three weeks ago the plan was reported as loans and bonds.",
  metaDesc: "SpaceX signed a binding commitment on 24 October for a $40bn GPU finance lease from an Apollo-managed entity, not the loans and bonds first reported.",
  author: "priya-raghavan", date: "2026-10-26T20:20:00Z",
  capt: "Expansion slots on a server motherboard beside an installed card, in a file photograph.",
  tags: [
    { name: "AI Infrastructure", slug: "ai-infrastructure" },
    { name: "Private Credit", slug: "private-credit" },
    { name: "Capital Markets", slug: "capital-markets" }
  ],
  related: [
    R("/markets/forty-billion-dollars-on-a-bbb/", "Private Credit"),
    R("/business/spacex-and-tesla-weigh-a-merger-musk-cannot-attend/", "Mergers"),
    R("/markets/the-ai-payoff-stops-at-seven-companies/", "Markets")
  ],
  body: [
    `SpaceX will pay for about $40bn of Nvidia graphics processors through a finance lease from an entity managed by Apollo Global Management, not the bank loans and bonds first reported, ${L(SX_8K, "according to a filing")} the company made on Monday. The lessor will buy the chips and rent them to SpaceX for about five years.`,
    `The filing sets out more than the headline figure. SpaceX says that on Saturday it signed a binding commitment letter to enter a master finance lease under which the lessor "will acquire and lease to the Company certain graphics processing unit pods and related equipment" for data centres SpaceX chooses. The equipment arrives in tranches, each on its own schedule lasting "approximately five to five and one-quarter years". Rent is paid quarterly in advance and is made up of one-twentieth of the tranche's financed cost, interest at a fixed annual rate on the outstanding balance, and certain costs. SpaceX expects principal payments across all the schedules to total about $40bn.`,
    `Two things are not yet settled. The fixed rate "will be determined at pricing", which happens before SpaceX signs the lease itself, so the interest cost is not known. And the lease is subject to "certain specified closing conditions"; SpaceX expects it to close before the year-end, with the schedules starting in the first half of 2027 as the chips are delivered. The 8-K is signed by Bret Johnsen, the chief financial officer.`,
    `${L(SX_REL, "A SpaceX release")}, published on Apollo's website, says the financing was committed by a group led by Apollo and Goldman Sachs, which was sole structuring agent, with anchor commitments from funds and accounts managed by BlackRock and Goldman Sachs Asset Management and capital accounts advised by KKR. It says the lease will deliver Nvidia's Vera Rubin chips for SpaceX's "terrestrial compute buildout" and calls it "the largest committed GPU financing". In commentary attributed to the chief financial officer, the company said: "As demand for compute continues to accelerate, we're seeing less than one year payback periods on our SI infrastructure investments. This lease diversifies our funding sources and addresses a notable portion of the funding required to deliver on our growth plans." SI is SpaceX's shorthand for its Super Intelligence segment, which includes Grok. The payback claim is the company's own and was not independently verified.`,
    `The deal that was signed is not the deal that was reported. On 6 October ${L(SX_RTRS, "Reuters, citing the Financial Times")}, said SpaceX planned about $10bn of bank loans and $30bn of investment-grade debt, with Apollo expected to lead and a close expected in 2027. As <a href="/markets/forty-billion-dollars-on-a-bbb/">Komposite reported at the time</a>, the investment-grade label was the point: it would open the deal to insurers and pension funds. Eighteen days later, by our count, the money has arrived as a lease, with a wider lead group and an earlier close.`,
    SX_TABLE,
    `The lease terms allow some arithmetic of our own. Repaying one-twentieth of the financed cost each quarter clears it in 20 quarters, or five years, which matches the stated term. On the full $40bn that is $2bn of principal a quarter, or $8bn a year, before any interest, once every tranche is running; because the tranches start as chips are delivered, the payments will build up rather than begin at once. For scale, SpaceX's Super Intelligence segment reported revenue of $7.56bn in the three months to 30 September, according to its ${L(SX_Q3, "third-quarter earnings release")}.`,
    `The same release shows debt and finance leases of $38.8bn on 30 September, by our addition of the current and non-current lines. Another $40bn of lease principal would roughly double that, to about $78.8bn. Capital expenditure was $19.6bn in the third quarter and $48.1bn in the first nine months, against $13.1bn of operating cash flow over the same nine months, a gap of about $35bn on our subtraction. Mr Johnsen told analysts on 20 October that the company would spend $35bn to $40bn on capital investment in the fourth quarter alone, ${L(SX_TC_Q3, "TechCrunch reported")}; on our addition that puts the year at $83bn to $88bn. SpaceX held $51.3bn of cash at the end of September.`,
    `The commitment comes as lenders grow more selective about the sector. TechCrunch, ${L(SX_TC, "reporting the deal")}, described a turbulent stretch for AI infrastructure debt, and said Elon Musk had argued on X that debt markets were closing to companies without large revenue beyond AI data centres, predicting "guppy-level death and consolidation" among the more than 200 so-called neoclouds that rent out GPUs. On Saturday Apollo's own chief economist, Torsten Slok, wrote that AI had delivered no financial payoff to corporate America outside the technology sector, as <a href="/markets/the-ai-payoff-stops-at-seven-companies/">Komposite reported on Sunday</a>.`,
    `Why it matters: a finance lease lets SpaceX spread a chip order of this size over the period it expects to use the chips, and it draws on private-credit and asset-management money rather than a public bond sale. The cost is a fixed charge that runs whether or not the compute is sold. The lease will sit beside the company's existing debt, and the rate, still to be set, will show what lenders charge to fund chips at this scale.`,
    `SpaceX is meanwhile weighing a far larger transaction. Special committees of independent directors at SpaceX and Tesla are considering a combination of the two companies, and Mr Musk, chief executive of both, has said that as a conflicted party he cannot take part in their discussions, as <a href="/business/spacex-and-tesla-weigh-a-merger-musk-cannot-attend/">Komposite reported last week</a>.`
  ]
}),

];
