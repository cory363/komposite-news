import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const AI = P("ai", "AI", "ai", "Photograph via Unsplash");

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

/** Batch 94 — Tuesday 20 October 2026, round 17c. One new story, the new
 *  homepage LEAD: tools/data/lead.json now pins it (until 21 Oct 20:00Z).
 *  The round-17 DeepSeek lead moves down through build-front-zone's normal
 *  ordering.
 *  Repeat check: grep of the repo for 1.4tn, $30bn, "mid-November", IPO and
 *  Anthropic. Covered before: the $1.2tn talks (16 Sep, "The price rises as
 *  the listing recedes"), the $50bn-not-$70bn run rate (8 Oct), and a single
 *  sentence on Bloomberg's ~$1.4tn / $30bn report inside the SoftBank Gulf
 *  story (9 Oct). New here: the acceleration to beat Anthropic's IPO, the
 *  investors in talks, and both companies' revenue claims side by side.
 *  All three earlier pieces linked.
 *
 *  AI / OPENAI ROUND. PRIMARY READ: Reuters exclusive, "OpenAI seeks to
 *  accelerate fundraising ahead of Anthropic IPO, sources say", Echo Wang,
 *  Krystal Hu and Sabrina Valle, 19 Oct 2026 7:18pm EDT (read in full in a
 *  browser; WebFetch blocked). Every figure below checked in it:
 *  >$1.4tn and mid-November debut (two people); ~$30bn, SoftBank/MGX/other
 *  backers in talks (one person); long-only and sovereign funds met last
 *  week while Anthropic hosted its investor day; $50bn annualised after
 *  GPT-6 Astra, $70bn expected by year-end, price cuts on cheaper models
 *  (one person); Anthropic ~$65bn annualised by July (Reuters earlier), Q3
 *  $16.8bn vs Q2 $11.6bn (told investors); net vs gross accusation and
 *  Anthropic's "established accounting practices" reply; Sarah Friar;
 *  $852bn in March after $122bn incl. up to $50bn from Amazon; FT reported
 *  details earlier; ~$1.5tn vs $2tn investor views (Reuters last week);
 *  AirTrunk REIT, Firmus, SB Energy pulled/paused; SOX members -$1.6tn in
 *  under two weeks. Comment: OpenAI and SoftBank declined; Anthropic and
 *  MGX did not immediately respond. WebSearch on 20 Oct found no later
 *  statement from either company.
 *  Corrections to the draft: date 14:00Z -> 20:45Z (written after 17b);
 *  "terms are not final" was the Yahoo writer's gloss, now "no terms have
 *  been announced"; the $30bn figure is from one person, not two; the
 *  "$1.4tn round first reported in early October" (TNW) was Bloomberg on
 *  30 Sep and is now attributed to our own 9 Oct story; Best's first quote,
 *  wrongly thought TechStartups-only, is in Reuters and is used, with
 *  Reuters' note that he is not on the deal and spoke hypothetically; the
 *  "we have not read the Reuters original" line is removed (now read);
 *  invented tags "OpenAI"/"Anthropic" replaced with existing tags; section
 *  Markets -> AI (where the earlier OpenAI valuation stories sit).
 *  IPO timing: "expected ... in mid-November" is Reuters' wording; the
 *  14 Oct investor day matches Reuters' "last week". No Anthropic-announced
 *  date in any source read, so the copy says so. Komposite's 18 Oct fund
 *  story only says Anthropic is planning an IPO; no conflict.
 *  OUR ARITHMETIC: 1.4/0.852 = 1.643 (+64%); 1,400/50 = 28; 1,400/70 = 20.
 *  Hero: Unsplash C3jmPfWIUEw (Sam, @samtakespictures), a ChatGPT billboard
 *  on a San Francisco rooftop; the figures in the ad are tiny and not
 *  identifiable. Not used before; distinct from the DeepSeek phone hero.
 */

const REUTERS = "https://www.reuters.com/world/openai-seeks-accelerate-fundraising-ahead-anthropic-ipo-sources-say-2026-10-19/";

const TH = 'style="text-align:left;border-bottom:2px solid #222;padding:6px 8px"';
const TD = 'style="text-align:left;border-bottom:1px solid #ddd;padding:6px 8px;vertical-align:top"';
const row = (a, b, c) => `<tr><td ${TD}>${a}</td><td ${TD}>${b}</td><td ${TD}>${c}</td></tr>`;
const TABLE = `<div class="datatable" style="overflow-x:auto;margin:18px 0;max-width:calc(100vw - 32px)"><table style="border-collapse:collapse;width:100%;font-size:15px"><thead><tr><th ${TH}>As reported by Reuters</th><th ${TH}>OpenAI</th><th ${TH}>Anthropic</th></tr></thead><tbody>`
  + row("Valuation sought", "More than $1.4tn, in a round of about $30bn (people familiar)", "$2tn desired at listing; some investors argued for about $1.5tn")
  + row("Last private mark", "$852bn in March, after a $122bn round", "Not given in the report")
  + row("Revenue claim", "$50bn annualised; $70bn expected by year-end (company pitch, per one person)", "About $65bn annualised by July; Q3 revenue $16.8bn, up from $11.6bn in Q2 (told investors)")
  + row("How revenue is booked", "Net: partners' shares subtracted upfront", "OpenAI says gross; Anthropic says it follows established accounting practices")
  + row("Listing", "Planned for 2027", "Debut expected in mid-November")
  + `</tbody></table></div>`;

export default [

/* ---------- 20:45Z AI ---------- */
AI({ slug: "openai-seeks-thirty-billion-before-anthropic-lists", kick: "OpenAI",
  headline: "Thirty billion, ahead of Anthropic's listing",
  dek: "OpenAI is racing to line up about $30bn from investors, at a valuation that could top $1.4tn, before Anthropic's expected mid-November stock market debut, Reuters reported, citing people familiar with the talks. OpenAI declined to comment.",
  metaDesc: "OpenAI is seeking about $30bn at a valuation that could exceed $1.4tn before Anthropic's expected mid-November IPO, Reuters reported, citing people familiar.",
  author: "dana-whitfield", date: "2026-10-20T20:45:00Z",
  capt: "A ChatGPT billboard on a rooftop in San Francisco, in a file photograph.",
  tags: [
    { name: "OpenAI / Model Providers", slug: "openai-model-providers" },
    { name: "Capital Markets", slug: "capital-markets" },
    { name: "Venture Capital", slug: "venture-capital" }
  ],
  related: [
    R("/ai/fifty-billion-not-seventy/", "OpenAI"),
    R("/ai/the-price-rises-as-the-listing-recedes/", "OpenAI"),
    R("/ai/anthropic-sets-aside-five-per-cent-for-a-fund/", "Anthropic")
  ],
  body: [
    `OpenAI is trying to secure investor commitments for a round of about $30bn that could value it at more than $1.4tn before Anthropic's expected stock market debut in mid-November, ${L(REUTERS, "Reuters reported")} on Monday, citing people familiar with the matter. No terms have been announced.`,
    `Reuters attributed the valuation and the timetable to two people, and the size of the round to one of them. OpenAI and SoftBank Group declined to comment to Reuters, and Anthropic and MGX, the Abu Dhabi investment firm, did not immediately respond. We found no public statement from either OpenAI or Anthropic on the report by Tuesday afternoon. The mid-November date is Reuters' description of an expected debut; none of the sources we read gives a date announced by Anthropic.`,
    `SoftBank, MGX and other existing OpenAI backers are in talks to join the round, one of the people told Reuters. OpenAI met long-only funds and sovereign wealth funds last week while Anthropic was hosting its own investor day, and the round is expected to move faster than is usual for a raise of its size, the people said. SoftBank had already completed a $30bn investment in OpenAI's previous round, <a href="/markets/a-second-hundred-billion-from-the-gulf/">Komposite reported on 9 October</a>, citing Bloomberg, which had described OpenAI's talks at about $1.4tn.`,
    `Why the hurry? According to Reuters' sources, the fast timetable partly reflects a wish to get ahead of Anthropic, because the two labs increasingly draw on the same investors, and to make use of OpenAI's recent revenue growth. One person said OpenAI wants to finish before Anthropic's financial disclosures give investors a fuller picture of its business and invite comparisons. Some investors see the push as an attempt to lock in money that might otherwise go to Anthropic's offering, the people said. Investors familiar with OpenAI told Reuters it also needs capital for its infrastructure commitments and its balance sheet, in case a weaker IPO market delays its planned 2027 listing. OpenAI has not stated any of these reasons itself.`,
    `What is OpenAI telling investors? That growth sped up after the launch of its GPT-6 Astra model, taking annualised revenue, the current monthly rate multiplied by twelve, to $50bn, with $70bn expected by the end of the year, according to one person. It has also cut prices on its cheaper models, which it says has lifted usage. These are the company's own figures as relayed by a source, not audited results. Earlier this month OpenAI told investors <a href="/ai/fifty-billion-not-seventy/">its run rate was near $50bn, not the roughly $70bn</a> that had been reported.`,
    `Anthropic's numbers come from the same report. Its annualised revenue reached roughly $65bn by July, Reuters previously reported, and it told investors that third-quarter revenue rose to $16.8bn from $11.6bn in the second quarter. Reuters said slowing month-to-month growth had raised concerns among investors about Anthropic's valuation, and reported last week that some existing and prospective investors argued for a debut valuation closer to $1.5tn than the $2tn the company wants, after third-quarter results fell short of expectations. Those are investors' views as reported, not the company's.`,
    TABLE,
    `The two companies count revenue differently, and each defends its own method. OpenAI records revenue net, subtracting partners' shares upfront, and has accused Anthropic of inflating its revenue by counting the full, gross value of contracts sold through third-party cloud providers, Reuters reported. Anthropic told Reuters earlier that it follows established accounting practices. Until both publish audited accounts on a common basis, the headline figures above are not directly comparable. One person told Reuters that Anthropic's disclosures could lead investors to press OpenAI's chief financial officer, Sarah Friar, for more detail on its growth and outlook.`,
    `"OpenAI could want to set its own valuation and not have to worry about a comp (comparison)," Edward Best, co-chair of capital markets at the law firm Willkie Farr & Gallagher, told Reuters. "It's really a two-horse race in terms of being public." Reuters noted that Best is not working on the deal and spoke hypothetically.`,
    `The price has moved quickly. OpenAI was last valued at $852bn in March, after a $122bn round that included Amazon's agreement to invest up to $50bn, Reuters said; in September it was in early talks at <a href="/ai/the-price-rises-as-the-listing-recedes/">more than $1.2tn</a>. By our arithmetic, $1.4tn is about 64 per cent above the March mark, 28 times the $50bn run rate and 20 times the $70bn OpenAI expects.`,
    `The backdrop is less friendly than it was. Bankers and investors told Reuters that several companies preparing to list have chosen to wait until after Anthropic's IPO, and that some late-stage companies are timing private rounds to avoid it. AirTrunk REIT, Firmus and SB Energy have pulled or paused listings, and members of the Philadelphia Semiconductor Index have lost $1.6tn in market value in less than two weeks, Reuters said. Anthropic, which plans to list as a public benefit corporation, said on Sunday that it will <a href="/ai/anthropic-sets-aside-five-per-cent-for-a-fund/">commit five per cent of its shares to a public benefit fund</a>, subject to stockholder approval.`
  ]
}),

];
