/** Batch 73 — Sunday 11 October 2026, round 2. Three pieces: the SEC's
 *  approval of the Cboe listing rule for Volatility Shares' 3x funds
 *  (11:10Z), the Deno team joining Cloudflare (11:30Z) and Nuvacore's
 *  reported $2.5bn fundraising (11:50Z). Timed before the 12:00Z NFL lead in
 *  batch 72 so that piece stays the homepage lead.
 *  Two drafts were dropped as already covered: "Manus raises $500m after the
 *  split" (Komposite ran the round on 8 October in "The agent maker Meta had
 *  to give back", ai/the-agent-maker-meta-had-to-give-back), and "One revenue
 *  report, and the AI trade sold off" (covered on 8 October in "Fifty billion,
 *  not seventy", ai/fifty-billion-not-seventy, including the share moves).
 *
 *  CRYPTO / 3x FUNDS. Fact-check 11 Oct: SEC Release No. 34-106577, File No.
 *  SR-CboeBZX-2026-065, dated 2 Oct 2026, read in full (9 pp, text extracted
 *  from the PDF): filed 10 Aug, Federal Register 19 Aug, no comments; six
 *  funds, series of VS Trust; first- and second-month futures; sponsor
 *  Volatility Shares LLC, trustee Wilmington Trust, custodian U.S. Bank;
 *  Rule 14.11(e)(4) precludes leveraged/inverse generic listing; n.5 ETF/ETP
 *  definitions; n.18 BITX, ETHU, SHNY and delisted USLV, OILU, UGAZ;
 *  continued-listing, notification and delisting language; Reg BI, FINRA
 *  notices, BZX Rule 3.7; signed Sherry R. Haywood under delegated
 *  authority. VS Trust S-1 (17 Aug) read via SEC page: management fee 1.85%
 *  ("Each Fund pays the Sponsor a management fee ... 1.85% per annum");
 *  breakeven table at $15.00: bitcoin total 2.48%, ether 3.28%, other
 *  expenses 0.45%, interest income -0.50%, breakeven 1.98% / 2.78%; bitcoin
 *  "declined from approximately $90,000 to approximately $60,000 in a matter
 *  of days", about 33%; single-day move "approaching 33%" could result in
 *  "the total loss or near total loss". S-1/A Amendment No. 1 filed Wed 7 Oct
 *  (EDGAR index; accession 0001213900-26-107622) read: tickers BITH, ETHK;
 *  "THE FUNDS HAVE NOT COMMENCED TRADING"; preliminary prospectus dated 7 Oct,
 *  cover date 20 October 2026; breakeven figures unchanged. EDGAR company
 *  list showed no EFFECT notice as of 11 Oct. CoinDesk (Omkar Godbole, 5 Oct
 *  07:14 EDT) read: "can't trade yet", registration "effective", 2x cap,
 *  Balchunas quote on X. Cut: Benzinga (HTTP 403, not read) including the
 *  Direxion/18f-4 claim; "first 3x ETFs" (in CoinDesk's headline framing
 *  only, not its text); the draft's claim that the prospectus says a 3x fund
 *  "would likely have suffered" total loss in the Jan-Feb fall (the filing's
 *  33% warning is about a single-day move); Yahoo Finance piece (content
 *  farm). Our arithmetic: 1.10 x 0.90 = 0.99; 1.30 x 0.70 = 0.91.
 *  Hero: M.A. Dipp (Unsplash 0ep0A2hjEpo), Chicago towers (Cboe is based in Chicago).
 *
 *  TECHNOLOGY / DENO. Fact-check 11 Oct: Deno blog "Deno is joining
 *  Cloudflare" (Ryan Dahl, 9 Oct) read; Cloudflare blog of the same title
 *  (Ryan Dahl and Kenton Varda, 9 Oct) read; TechCrunch (Anthony Ha, 10 Oct
 *  09:25 PDT) read: "acquiring", terms not disclosed, $26m total, Series A
 *  led by Sequoia, Varda "principal engineer for Cloudflare Workers". Fixed:
 *  draft called Dahl and Belder Deno's co-founders "as Cloudflare's post
 *  notes"; the post says Dahl created Node.js and started Deno and that
 *  Belder is on the team that built it, so that wording is used. "Designed to
 *  be compatible" replaced by the post's own description of celld. Lock-in
 *  and ecosystem passages and "good business" checked verbatim. Deno's
 *  website product menu read for Sandbox, Subhosting and Enterprise. Our
 *  arithmetic: six months from 9 Oct is about April 2027; a year is about
 *  October 2027.
 *  Hero: Mohammad Rahmani (Unsplash 8qEB0fTe9Vw), laptop showing code.
 *
 *  STARTUPS / NUVACORE. Fact-check 11 Oct: Investing.com (Simon Mugo, 9 Oct
 *  21:08) summary of the Reuters exclusive read; Reuters wire text read via a
 *  syndicated feed copy (Devdiscourse, 10 Oct 04:03 IST, no byline); Reuters
 *  itself not reachable. Confirmed: six months old, San Jose, hundreds of
 *  millions at about $2.5bn, two people familiar, round not closed, The
 *  Information's $200m-or-more, founders, Williams ex-Apple, Nuvia to
 *  Qualcomm for $1.4bn in 2021, "build the core functionality of the chip",
 *  Intel/AMD, Amazon/Microsoft Arm designs, Nvidia Vera $20bn (Huang, not a
 *  direct quote), Crunchbase $10.7bn vs $12.2bn, declined to comment. Added
 *  from the wire: Sequoia led a seed round announced earlier this year
 *  (amount not given). Our arithmetic: 2.5/1.4 = 1.79; 10.7/12.2 = 87.7%.
 *  Hero: Brian Kostiuk (Unsplash S4jSvcHYcOs), processor held by tweezers.
 *
 *  Weekdays: 2 Oct 2026 Fri, 5 Oct Mon, 7 Oct Wed, 9 Oct Fri, 10 Oct Sat,
 *  11 Oct Sun, 20 Oct Tue.
 */
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const CR = P("crypto", "Crypto", "crypto", "Photograph via Unsplash"),
      TE = P("technology", "Technology", "technology", "Photograph via Unsplash"),
      ST = P("startups", "Startups", "startups", "Photograph via Unsplash");

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

// Sources
const XORD = "https://www.sec.gov/files/rules/sro/cboebzx/2026/34-106577.pdf";
const XS1 = "https://www.sec.gov/Archives/edgar/data/1793497/000121390026090839/ea0291255-s1_vstrust.htm";
const XS1A = "https://www.sec.gov/Archives/edgar/data/1793497/000121390026107622/ea0307918-s1a1_vstrust.htm";
const XCD = "https://www.coindesk.com/daybook-us/2026/10/05/sec-approves-a-3x-fix-for-bitcoin-and-ether-traders-who-miss-the-wild-swings";

const DCF = "https://blog.cloudflare.com/deno-joins-cloudflare/";
const DDENO = "https://deno.com/blog/cloudflare";
const DTC = "https://techcrunch.com/2026/10/10/cloudflare-acquires-deno-to-improve-its-workers-programming-model/";
const DCELLD = "https://celld.dev/";

const NINV = "https://www.investing.com/news/stock-market-news/sequoiabacked-nuvacore-seeks-25bn-valuation-in-funding-round-reuters-4941907";

export default [

/* ---------- 11:10Z CRYPTO ---------- */
CR({ slug: "three-times-the-swing-still-not-trading", kick: "ETFs",
  headline: "Three times the swing, still not trading",
  dek: "The SEC on 2 October approved a Cboe rule change that lets Volatility Shares list 3x bitcoin and ether funds. They cannot trade until their registration takes effect. An amended filing on Wednesday kept a 1.98 per cent breakeven for the bitcoin fund.",
  metaDesc: "The SEC approved a Cboe BZX rule change to list Volatility Shares' 3x bitcoin and ether funds, which cannot trade until their registration statement is effective.",
  author: "marcus-oyelaran", date: "2026-10-11T11:10:00Z",
  capt: "Glass office towers in Chicago under a cloudy sky, with the Willis Tower on the right, in a file photograph.",
  tags: [
    { name: "Digital Assets", slug: "digital-assets" },
    { name: "Market Structure", slug: "market-structure" },
    { name: "Regulation", slug: "regulation" }
  ],
  related: [
    R("/crypto/the-offer-of-leverage-is-the-switch/", "Regulation"),
    R("/crypto/two-coins-one-exchange-no-margin/", "ETFs"),
    R("/crypto/the-etf-shelf-gets-crowded/", "ETFs")
  ],
  body: [
    `The Securities and Exchange Commission on Friday 2 October approved a Cboe BZX Exchange rule change that lets the exchange list six triple-leveraged funds from Volatility Shares, including products tied to bitcoin and ether, ${L(XORD, "according to the commission's order")}. The approval covers the listing rule, not the start of trading. The funds "can't trade yet", ${L(XCD, "CoinDesk reported")} on Monday, because the issuer still needs the SEC to declare its registration statement effective, and the order sets no deadline for that.`,
    `The order, Release No. 34-106577, was issued by the Division of Trading and Markets under delegated authority. Cboe filed the proposal (SR-CboeBZX-2026-065) on 10 August and it was published for comment in the Federal Register on 19 August; the commission said it received no comments. The six funds, each a series of VS Trust, seek three times the daily performance of gold, silver, bitcoin, ether, light sweet crude oil and natural gas, as measured by a portfolio of first- and second-month futures contracts. Volatility Shares LLC is the sponsor, Wilmington Trust the trustee and U.S. Bank the custodian.`,
    `A separate rule change was needed because of how the funds are built. They are commodity-based trust shares under BZX Rule 14.11(e)(4), and the order says that rule "precludes" such shares from generic listing if they seek leveraged or inverse exposure. Cboe said the funds meet the rule's other requirements. Despite "ETF" in their names, the order classes them as exchange-traded products: they register their shares under the Securities Act but are not regulated under the Investment Company Act of 1940.`,
    `We found no conditions in the order specific to the bitcoin and ether funds. It makes the proposal's representations about benchmarks and holdings continued listing requirements, requires the trust to notify the exchange of any failure to comply, and says Cboe will begin delisting procedures if a fund falls out of compliance. The commission also pointed to Regulation Best Interest, FINRA's "increased sales practice and customer margin requirements" for leveraged products, and the exchange's own suitability rule, BZX Rule 3.7, as existing investor protections.`,
    `The order also records that leveraged products on all six commodities already trade. It cites Volatility Shares' 2x bitcoin and ether funds, BITX and ETHU, and the MicroSectors Gold 3x Leveraged ETN, and lists 3x silver, crude oil and natural gas products that were once listed but no longer trade. CoinDesk said crypto funds in the US had until now been capped at 2x leverage. On the order's own evidence, the novelty is the multiple applied to crypto, not triple leverage as such.`,
    `The costs are in ${L(XS1, "the preliminary prospectus")} filed on 17 August, which sets a management fee of 1.85 per cent a year of average daily net assets for each fund. Its breakeven table, which assumes a $15.00 share price, puts total fees and expenses at 2.48 per cent for the bitcoin fund (BITH) and 3.28 per cent for the ether fund (ETHK). After assumed interest income of 0.50 per cent, the 12-month breakeven is 1.98 per cent for bitcoin and 2.78 per cent for ether. ${L(XS1A, "An amended registration statement")} filed on Wednesday 7 October carries the same breakeven figures. The numbers are the sponsor's own.`,
    `Because the funds reset daily, returns over longer periods can diverge from three times the underlying move. By our arithmetic, if bitcoin rises 10 per cent and then falls 10 per cent, it ends down 1 per cent; a 3x fund gains 30 per cent and then loses 30 per cent, ending down 9 per cent. The prospectus notes that bitcoin fell from about $90,000 to about $60,000 "in a matter of days" between late January and early February 2026, a drop of about 33 per cent, and warns that a single-day move approaching 33 per cent "could result in the total loss or near total loss" of an investment in a fund. Bloomberg's senior ETF analyst Eric Balchunas, quoted by CoinDesk, wrote on X: "Leveraged ETFs are for trading, not investing."`,
    `The next step is the registration statement. The amended filing is still a preliminary prospectus marked subject to completion, and it says in capitals that the funds "have not commenced trading". Its cover carries a date of 20 October 2026, but that is not a launch date, and the SEC's EDGAR system showed no notice of effectiveness for VS Trust as of Sunday. Neither the order nor the filings say when the shares will begin trading.`,
    `The approval is separate from the Commodity Futures Trading Commission's work on leveraged retail crypto trading, which Komposite covered in <a href="/crypto/the-offer-of-leverage-is-the-switch/">its report on the agency's 5 October notice</a>. Other markets are moving more cautiously: Thailand's new rules for bitcoin and ether ETFs <a href="/crypto/two-coins-one-exchange-no-margin/">allow no margin at all</a>, as we reported on Friday. The SEC's order answers a narrower question, whether an exchange may list the funds, and leaves the timing to the registration process.`
  ]
}),

/* ---------- 11:30Z TECHNOLOGY ---------- */
TE({ slug: "deno-gets-a-year-deploy-gets-six-months", kick: "Developer Tools",
  headline: "Deno gets a year, Deploy gets six months",
  dek: "The team behind the Deno JavaScript runtime is joining Cloudflare to make its Workers platform easier to self-host. Deno said it will end development of the runtime after a year, shut Deno Deploy in six months and keep the code open source.",
  metaDesc: "Deno will stop developing its runtime after a year and close Deno Deploy in six months as its team joins Cloudflare, according to the companies' announcements.",
  author: "tom-kessler", date: "2026-10-11T11:30:00Z",
  capt: "A laptop screen showing JavaScript code in a dark editor under blue and purple light, in a file photograph.",
  tags: [
    { name: "Developer Tools", slug: "developer-tools" },
    { name: "Open Source", slug: "open-source" },
    { name: "Cloud", slug: "cloud" }
  ],
  related: [
    R("/technology/the-dependency-nobody-funds/", "Open Source"),
    R("/technology/open-source-maintenance-funding/", "Open Source"),
    R("/technology/cloud-repatriation-selective/", "Cloud")
  ],
  body: [
    `${L(DCF, "Cloudflare said on Friday")} that the team behind Deno, the JavaScript and TypeScript runtime, is joining the company. ${L(DDENO, "Deno said in its own announcement")} that it will stop developing the Deno runtime after a year and close its Deno Deploy hosting service after six months. ${L(DTC, "TechCrunch reported")} the deal as an acquisition and said the financial terms were not disclosed. The two companies' posts describe the Deno team as joining Cloudflare. TechCrunch's short item, published on Saturday, focused on Cloudflare's plans for its Workers platform and did not mention the wind-down.`,
    `Deno's post, written by Ryan Dahl and dated 9 October, sets out four commitments. "We will support the Deno runtime for another year with monthly releases containing bug fixes and security updates," it says, after which the company's development of the runtime ends. Deno Deploy will keep operating for six months before it shuts down, with migration support for paying customers moving to Cloudflare Workers. The JSR package registry will continue, with its infrastructure moving to Cloudflare. Deno will also keep supporting rusty_v8, its Rust bindings to the V8 engine, and work towards integrating it into workerd, Cloudflare's open-source Workers runtime.`,
    `Deno gave no start date for either period. By our arithmetic, counting from Friday's announcement, Deploy would close around April 2027 and the runtime's development would end around October 2027. Those dates are ours, not Deno's. Dahl wrote that "the entire Deno team" is joining Cloudflare. "We know this is a consequential change for people who have built on Deno," he added.`,
    `Cloudflare's stated reason for the deal is self-hosting. In a joint post, Dahl and Kenton Varda, whom TechCrunch described as principal engineer for Cloudflare Workers, said workerd has been open source for years but supports Durable Objects, the stateful building block of the Workers model, only in a single-instance form that is "good enough for local testing, but unable to scale". In August the Deno team released ${L(DCELLD, "celld")}, which the post describes as an open-source implementation of Workers and Durable Objects focused on self-hosting and scale: "one binary, written in Rust, with object storage as its only external service dependency."`,
    `The plan is to fold celld's code and ideas back into workerd. "We're merging workerd and celld!" the post says. Dahl and Bert Belder, who is part of the team that built Deno, "will be leading a new effort" to make self-hosting workerd a first-class way to run Workers applications, according to the post, which promises more announcements "in the coming months". None of that work has shipped yet, and Cloudflare has given no timetable for it.`,
    `Varda also addressed a long-standing criticism, that Cloudflare "made Cloudflare Workers work differently from other cloud platforms in order to create 'lock-in.'" He wrote that the theory is wrong and that Workers is different because it is better, and that "being open source and giving people an escape hatch is good business". He also conceded that "we haven't done a great job of building out the ecosystem of adjacent services and tooling", and said Cloudflare had hoped the community would adapt the runtime.`,
    `For developers running Deno in production, the practical question is what happens after the company that built the runtime stops developing it. "Deno will remain open source, and we welcome others who want to continue its development," the post says. It does not name a successor maintainer or fork. Its migration offer is for paying Deno Deploy customers moving to Workers, and it does not say what happens for other users. Deno's website also lists Deno Sandbox, Subhosting and Deno for Enterprise as products, and the post does not address them by name.`,
    `Dahl created Node.js before starting Deno, as Cloudflare's post notes. TechCrunch said Deno had raised $26m in total, including a Series A led by Sequoia. What its investors receive from the deal was not disclosed. By our reading of the two posts, the transaction looks less like the purchase of a competing runtime than the hiring of its authors, with the runtime's longer-term future left to whoever picks up the code.`,
    `Funding for the open-source software that companies depend on is already thin, as Komposite has reported in <a href="/technology/the-dependency-nobody-funds/">The dependency nobody funds</a>, and enterprises have only recently begun <a href="/technology/open-source-maintenance-funding/">paying for maintenance</a> of the projects they rely on. Neither post gives a price, a headcount or a date for the first merged release of celld and workerd. Until Cloudflare publishes that timetable, the only fixed dates are the ones Deno has set for winding itself down.`
  ]
}),

/* ---------- 11:50Z STARTUPS ---------- */
ST({ slug: "a-2-5bn-ask-from-a-sequoia-backed-newcomer", kick: "Semiconductors",
  headline: "A $2.5bn ask from a Sequoia-backed newcomer",
  dek: "Nuvacore, a six-month-old San Jose chip startup with no product yet, is raising hundreds of millions of dollars at a valuation of about $2.5bn, Reuters reported on Friday. The round has not closed and the company declined to comment.",
  metaDesc: "Sequoia-backed chip startup Nuvacore is raising hundreds of millions of dollars at about a $2.5bn valuation for a data-centre CPU, Reuters reported on Friday.",
  author: "grace-lindqvist", date: "2026-10-11T11:50:00Z",
  capt: "A computer processor held up by black tweezers against a grey background, in a file photograph.",
  tags: [
    { name: "Semiconductors", slug: "semiconductors" },
    { name: "Venture Capital", slug: "venture-capital" },
    { name: "Data Centers", slug: "data-centers" }
  ],
  related: [
    R("/startups/eight-hundred-seventy-million-for-a-model-that-writes-nothing/", "Startups"),
    R("/ai/the-buyers-started-making-their-own/", "Semiconductors"),
    R("/technology/four-hundred-and-twenty-five-billion-in-a-quarter/", "Semiconductors")
  ],
  body: [
    `Nuvacore, a six-month-old semiconductor startup backed by Sequoia Capital, is raising hundreds of millions of dollars at a valuation of about $2.5bn, Reuters reported exclusively on Friday, citing two people familiar with the fundraising. Nuvacore declined to comment, according to the report. The company has not announced a round, and the figures are the sources' account of a deal that has not closed.`,
    `The round remains open, and the final valuation and the amount raised could change, Reuters reported. We were not able to read the Reuters article on its own site; this account draws on the wire text as syndicated and on ${L(NINV, "a summary published by Investing.com")}. Neither names a lead investor for the round or gives a precise amount. Sequoia led a seed round that Nuvacore announced earlier this year, according to the wire text, which does not give its size. Komposite has not independently verified the figures.`,
    `The Information had earlier reported that the startup was raising $200m or more, according to the report. Investing.com's summary says the $2.5bn valuation had not previously been disclosed. Because neither gives a valuation for the seed round, there is no earlier price against which to measure the ask, and we have not tried to supply one.`,
    `Nuvacore is based in San Jose, California, and is developing a central processing unit for data centres, the report said. It has yet to release a product. Its approach is to "build the core functionality of the chip" before committing to an instruction-set architecture such as Intel and AMD's x86 or Arm, according to the report, which could free it from the constraints of either.`,
    `The founders are semiconductor engineers Gerard Williams, John Bruno and Ram Srinivasan. Williams, a former Apple executive, founded Nuvia, which Qualcomm bought for $1.4bn in 2021, according to the report. By our arithmetic, the $2.5bn ask is about 1.8 times that price. The comparison is loose: it sets a prospective valuation of one company against the completed sale price of another.`,
    `The market Nuvacore is aiming at is changing. Demand for data-centre CPUs has risen because AI systems need processors to coordinate specialised chips and to run autonomous AI agents, the report said. Intel and AMD have long dominated the market, while Arm-based designs, including custom CPUs used by Amazon and Microsoft, have made inroads. Nvidia has also entered with its Vera CPU, which chief executive Jensen Huang expects to bring in $20bn in sales in the fiscal year ending in January, according to the report. That is Nvidia's own expectation as relayed by Reuters.`,
    `Investor appetite for chip startups has risen with AI infrastructure spending. Semiconductor startups attracted about $10.7bn in the first five months of 2026, against $12.2bn raised globally in all of 2025, according to Crunchbase data cited in the report. By our arithmetic, the five-month figure is about 88 per cent of the full-year 2025 total.`,
    `The ask rests on a team's record and a market's growth rather than on sales. Nuvacore has no product on the market, and the valuation could move before the round closes. Until the company or its investors confirm terms, the $2.5bn remains a figure from two unnamed sources.`,
    `The largest chip buyers have also been <a href="/ai/the-buyers-started-making-their-own/">designing their own silicon</a>, which is the market a new CPU designer has to sell into. Large valuations at an early stage have featured in our coverage before: Komposite reported on Saturday that <a href="/startups/eight-hundred-seventy-million-for-a-model-that-writes-nothing/">TypeSafe AI raised $870m at a $7.5bn valuation</a>, a completed round announced by the company, which is a different footing from the unconfirmed Nuvacore talks.`
  ]
}),

];
