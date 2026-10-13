/** Batch 78 — Tuesday 13 October 2026, round 5. One lead and two side
 *  stories, all filed in AI so the front-zone builder hangs the two sides
 *  under the lead: lead 13:20Z, sides 12:40Z and 12:20Z (newer than batch
 *  76's Meta piece, so they take the lead's cluster slots). None covered
 *  before: repo grep for Character.AI, Character Technologies, Decart,
 *  Yandex and Karandeep found nothing.
 *
 *  AI / CHARACTER.AI CHAPTER 11 (13:20Z, lead). Fact-check 13 Oct:
 *  Voluntary petition, Doc 1, case 26-11603 (D. Del.), filed 10/12/26,
 *  read in full from Stretto's PDF (pages rendered to check the boxes):
 *  debtor Character Technologies, Inc., d/b/a Character.AI; estimated
 *  assets and liabilities each $50,000,001-$100 million; 100-199
 *  creditors; "Funds will be available for distribution to unsecured
 *  creditors" box ticked; signed by Colin M. Adams, CEO, and Erin R. Fay
 *  (Wilson Sonsini). Restructuring committee consent: board created the
 *  committee on 8 Oct 2026; consent signatures dated 12 Oct 2026.
 *  Top-20 list: 1 Google LLC trade payable $4,148,944.00; 2 Hogan Lovells
 *  professional services $2,125,026.00; 3 DigitalOcean trade payable
 *  $1,953,100.00; 18-20 Commonwealth of Pennsylvania, Commonwealth of
 *  Kentucky, [Name Redacted] (Minor Plaintiff): litigation, C/U/D,
 *  unknown. Our arithmetic: the 17 stated amounts sum to $10,691,343.61.
 *  Stretto case page read: proposed counsel WSGR, financial adviser
 *  Areté Partners, investment banker Houlihan Lokey.
 *  Bloomberg Law (Audrey Wan, 13 Oct 03:59Z) read (unpaywalled part):
 *  stalking horse Disney; non-exclusive, perpetual licence to certain IP
 *  and claims; $20m plus transition services; wind-down if no buyer
 *  continues the platform.
 *  TechCrunch (Ivan Mehta, 13 Oct) read: Adams quotes ("significant
 *  legal, regulatory, and operational headwinds"; "court-supervised sale
 *  process"; "maximize value for all stakeholders"; "If such a bid is
 *  unavailable, however, the platform will be wound down"); operating
 *  during the sale; close late Nov/early Dec; transition staff joined
 *  Disney last month alongside former CEO Karandeep Singh Anand.
 *  Reuters via NBC News (13 Oct) read: other bidders can top Disney's
 *  offer; Kentucky and Pennsylvania suits; Disney cease-and-desist in
 *  September 2025; 2024 Google licensing and rehiring of founders.
 *  CUT from the draft: everything sourced only to PPC Land that the
 *  petition, Bloomberg Law, TechCrunch or Reuters did not confirm:
 *  Skadden advising Disney; Anand's CTO title and dates; Pennsylvania
 *  State Board of Medicine and its May date; the "minimal disruptions"
 *  quote; the motion for bidding procedures; the $2.7bn Google figure
 *  (TechCrunch carries it, but it is not needed). Draft's "with no
 *  purpose stated" for Google's claim corrected: the list calls it a
 *  trade payable.
 *  Hero: Junkyardsparkle, public domain, Walt Disney Studios gate, Burbank.
 *
 *  AI / AMAZON-DECART TALKS (12:20Z). Fact-check 13 Oct:
 *  Reuters (Angela Christy, Bengaluru, Sun 11 Oct, via KSL) read: WSJ,
 *  people familiar; around $7bn; Amazon "declined to comment outside
 *  regular business hours"; Decart did not respond; Lucy edits live
 *  video in real time "according to the company's website"; Oasis
 *  simulated environments for robotics and autonomous driving; valued at
 *  nearly $4bn in May (WSJ citing PitchBook); $300m round led by Radical
 *  Ventures, Nvidia new investor; Bloomberg: Anthropic explored a $6bn
 *  deal in August and decided last month not to pursue after due
 *  diligence; "A deal could happen soon if talks do not fall apart or
 *  another suitor emerges". SiliconANGLE (Mike Wheatley, 11 Oct) read:
 *  DOS optimisation software for specific processors; early Trainium3
 *  access last year (as reported); founders; unclear why Anthropic
 *  walked away. WebSearch 13 Oct: no confirmation by Amazon or Decart.
 *  Headline changed from the draft's "a startup Anthropic passed on" to
 *  keep Anthropic's reported decision in proportion. Draft's paragraph of
 *  inference about Amazon's strategy cut.
 *  Our arithmetic: $7bn / under $4bn = premium of more than 75 per cent.
 *  Hero: SounderBruce, CC BY-SA 4.0, Amazon Spheres, Seattle.
 *
 *  AI / YANDEX DATA CENTRES (12:40Z). Fact-check 13 Oct:
 *  Al Jazeera (11 Oct, with AFP and Reuters) read: Vladimir "completely
 *  suspended"; "unstable"; no injuries; emergency mode; disaster-recovery
 *  advice in Telegram alert; third attack in a week; Sasovo 8 Oct,
 *  "Ukrainian attack", "two of the three supercomputers"; Kaluga Friday,
 *  Yandex said struck by Ukrainian drones, partly knocked out; Zelenskyy
 *  quotes verbatim; "Russia's Google". Euronews (Sasha Vakulina, 12 Oct)
 *  read: Cloudflare Radar about 94 per cent, caveats; Warsaw Security
 *  Forum quotes ("a little easier to breathe on many social media
 *  platforms"; "fewer bots"). CUT: draft's "suddenly" inside the quote
 *  (not in the source text read); Vladimir strike not attributed to
 *  Ukraine (Al Jazeera does not say who launched it).
 *  Hero: Ralf Smallkaa, CC BY 2.0, Yandex head office in Moscow at night.
 *
 *  Weekdays: 8 Oct 2026 Thu, 9 Oct Fri, 11 Oct Sun, 12 Oct Mon, 13 Oct Tue.
 */
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const AI = P("ai", "AI", "ai", "Photograph via Wikimedia Commons");

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

// Sources: Character.AI
const C_PET = "https://cases.stretto.com/public/x936/14939/PLEADINGS/1493910122680000000088.pdf";
const C_STRETTO = "https://cases.stretto.com/chartech";
const C_BL = "https://news.bloomberglaw.com/bankruptcy-law/character-ai-files-for-chapter-11-bankruptcy-in-delaware";
const C_TC = "https://techcrunch.com/2026/10/13/just-5-years-in-interactive-chatbot-platform-character-ai-files-for-bankruptcy/";
const C_REU = "https://www.nbcnews.com/tech/tech-news/characterai-files-bankruptcy-sell-assets-disney-20-million-rcna603174";
// Sources: Decart
const D_REU = "https://www.ksl.com/article/51635095/amazon-in-talks-to-buy-ai-startup-decart-for-around-7-billion-wsj-reports";
const D_SA = "https://siliconangle.com/2026/10/11/report-amazon-in-talks-with-ai-startup-decart-over-possible-7b-acquisition/";
// Sources: Yandex
const Y_AJ = "https://www.aljazeera.com/news/2026/10/11/russias-yandex-says-data-centre-in-vladimir-shut-down-after-drone-attack";
const Y_EN = "https://www.euronews.com/2026/10/12/did-ukrainian-strikes-on-yandex-data-centres-cause-russian-bot-activity-to-plummet";

export default [

/* ---------- 12:20Z AI (side) ---------- */
AI({ slug: "amazon-weighs-7bn-for-decart", kick: "Dealmaking",
  headline: "Amazon weighs a $7bn deal for Decart",
  dek: "Amazon is in talks to buy the AI startup Decart for around $7bn, the Wall Street Journal reported on Sunday. Neither company has confirmed the talks. Bloomberg reported that Anthropic looked at a $6bn deal in August and decided against it.",
  metaDesc: "Amazon is in talks to buy AI startup Decart for about $7bn, the WSJ reported on Sunday; neither company has confirmed. Bloomberg said Anthropic looked at a deal earlier.",
  author: "grace-lindqvist", date: "2026-10-13T12:20:00Z",
  capt: "The Amazon Spheres at the company's headquarters in Seattle, in a file photograph.",
  tags: [
    { name: "Venture Capital", slug: "venture-capital" },
    { name: "Semiconductors", slug: "semiconductors" },
    { name: "Corporate Strategy", slug: "corporate-strategy" }
  ],
  related: [
    R("/ai/nvidia-weighs-buying-the-lab-it-already-funds/", "Deal Talks"),
    R("/startups/a-2-5bn-ask-from-a-sequoia-backed-newcomer/", "Venture"),
    R("/ai/two-billion-dollars-for-the-layer-underneath/", "AI Hardware")
  ],
  body: [
    `Amazon is in talks to acquire Decart, an AI startup, in a deal valued at around $7bn, the Wall Street Journal reported on Sunday, citing people familiar with the matter, ${L(D_REU, "according to Reuters")}. No agreement has been announced. Amazon declined to comment outside regular business hours, Reuters said, and Decart did not respond to requests for comment. The Journal said a deal could happen soon if the talks do not fall apart or another suitor emerges, Reuters reported.`,
    `Decart has two lines of work in the reports. Reuters described Lucy, a model backed by Nvidia that edits live video in real time, according to the company's website, and Oasis, which generates simulated environments for training and testing robotics and autonomous-driving systems. ${L(D_SA, "SiliconANGLE reported")} that Decart also sells software that optimises AI training and inference workloads for a specific processor, and that the company was given early access last year to Trainium3, the AI chip Amazon Web Services offers. Those descriptions are the company's and the outlets'; we have not tested the products.`,
    `The price is a step up. The Journal, citing PitchBook data, said Decart was valued at nearly $4bn in May, Reuters reported. By our arithmetic, $7bn would be a premium of more than 75 per cent to that figure in about five months. Reuters also reported that Decart raised $300m in May in a round led by Radical Ventures, with Nvidia joining as a new investor.`,
    `Amazon is not the first company reported to have looked. Bloomberg News reported, as relayed by Reuters, that Anthropic explored a possible $6bn deal for Decart in August and decided last month not to pursue it after due diligence. The reports do not give Anthropic's reasons, SiliconANGLE said it was unclear what led to the decision, and we have not seen a statement from Anthropic. A decision not to proceed after diligence can turn on price, fit or terms, and the reports do not say which applied here.`,
    `Much is still open. The reports do not say how a deal would be structured, whether Decart's products would remain available to customers of other clouds, or whether any regulator would review it. The Journal's sourcing is anonymous, and neither Amazon nor Decart has confirmed that talks are taking place.`,
    `Large technology companies have been using acquisitions and licensing deals to add AI teams. Komposite reported on Monday that <a href="/ai/nvidia-weighs-buying-the-lab-it-already-funds/">Nvidia is weighing whether to invest more in Reflection AI or buy it</a>, a story that also turned on how a deal might be structured, and on Sunday on <a href="/startups/a-2-5bn-ask-from-a-sequoia-backed-newcomer/">a Sequoia-backed chip startup seeking a $2.5bn valuation</a>. Until Amazon or Decart says otherwise, the $7bn figure is the Journal's, not either company's.`
  ]
}),

/* ---------- 12:40Z AI (side) ---------- */
AI({ slug: "three-yandex-data-centres-in-a-week", kick: "Data Centres",
  headline: "Three Yandex data centres in a week",
  dek: "Yandex said operations at its Vladimir data centre were completely suspended after a drone attack on Sunday, the third on its facilities in a week, Al Jazeera reported. An earlier target houses two of the three supercomputers used to develop its AI model.",
  metaDesc: "Yandex said its Vladimir data centre was fully suspended after a drone attack on Sunday, the third on its sites in a week, with its cloud in emergency mode.",
  author: "tom-kessler", date: "2026-10-13T12:40:00Z",
  capt: "Yandex's head office in Moscow at night, in a file photograph.",
  tags: [
    { name: "Data Centers", slug: "data-centers" },
    { name: "Cloud", slug: "cloud" },
    { name: "Resilience", slug: "resilience" }
  ],
  related: [
    R("/ai/the-labs-go-looking-for-small-sites/", "Data Centres"),
    R("/ai/the-dependency-runs-the-other-way/", "Supply Chain"),
    R("/cybersecurity/a-softbank-cloud-tells-customers-to-rebuild/", "Cloud Outages")
  ],
  body: [
    `Yandex said operations at its data centre in Vladimir, east of Moscow, had been "completely suspended" after a drone attack on Sunday, ${L(Y_AJ, "Al Jazeera reported")}. No injuries were reported. It was the third attack on Yandex data centres in a week, Al Jazeera said, and the company described the remaining resource configuration as "unstable".`,
    `Several Yandex services were unavailable, according to Al Jazeera, which drew on AFP and Reuters. In a Telegram alert, Yandex told users of its cloud platform that it was running in emergency mode and advised them to activate their disaster-recovery plans. The company had not, in the reports we read, given a timetable for restoring the site.`,
    `The sequence, as Al Jazeera set it out: on Thursday 8 October a Ukrainian attack shut Yandex's Sasovo hub, southeast of Moscow, which houses two of the three supercomputers used to develop the company's AI model. On Friday Yandex said its data centre in the Kaluga region, southwest of Moscow, had been struck by Ukrainian drones and partly knocked out of action. Al Jazeera did not say who launched the drones that hit Vladimir. The attributions are the outlet's and Yandex's; Komposite has not independently confirmed who carried out each attack.`,
    `Ukraine's president, Volodymyr Zelenskyy, said on Thursday after the Sasovo strike: "We always respond in mirror-like fashion." He added: "You all know, they have been hitting and continue to hit our data centres," according to Al Jazeera, which noted that Russia has struck several Ukrainian data centres and telecom facilities over the past month, including targets in central Kyiv.`,
    `${L(Y_EN, "Euronews reported")} on Monday that Cloudflare Radar data showed automated traffic from Yandex's network fell by about 94 per cent on Sunday compared with its average in the second half of September. Euronews cautioned that the figures include legitimate automated traffic such as search-engine crawlers and do not establish whether Kremlin-linked social media bots were affected. Zelenskyy, speaking at the Warsaw Security Forum on Monday, said it had become "a little easier to breathe on many social media platforms" after the strikes because there were "fewer bots", Euronews reported, adding that claims of falling bot activity in several countries had circulated without independently verified figures. The sources do not establish a causal link, and we do not draw one.`,
    `What the reports do establish is an infrastructure fact. A company Al Jazeera calls "Russia's Google" has had three of its data centres hit in under a week, at least one of them housing AI training hardware, and its cloud customers have been told to invoke recovery plans. Yandex has not said how much capacity it has lost.`,
    `For operators elsewhere, the episode adds physical attack to a site-selection conversation that has mostly been about power and permits, and it bears on concentration: by the accounts above, the Sasovo site was central rather than peripheral to the company's AI work. Komposite has covered how AI labs are <a href="/ai/the-labs-go-looking-for-small-sites/">looking for smaller sites already connected to power</a>, and how a cloud failure reaches customers in <a href="/cybersecurity/a-softbank-cloud-tells-customers-to-rebuild/">the IDCF Cloud outage</a>.`
  ]
}),

/* ---------- 13:20Z AI (lead) ---------- */
AI({ slug: "twenty-million-for-the-licence-not-the-app", kick: "Bankruptcy",
  headline: "Twenty million for the licence, not the app",
  dek: "Character Technologies, the operator of Character.AI, filed for Chapter 11 in Delaware on Monday with Disney as its opening bidder at $20m. The bid buys a licence to intellectual property, not the chatbot service, which the company says will be wound down if no buyer keeps it running.",
  metaDesc: "Character.AI's parent filed for Chapter 11 in Delaware on Monday. Disney's $20m stalking-horse bid buys an IP licence; without a buyer, the platform will be wound down.",
  author: "dana-whitfield", date: "2026-10-13T13:20:00Z",
  capt: "The entrance gate to Walt Disney Studios in Burbank, California, in a file photograph.",
  tags: [
    { name: "Consumer Technology", slug: "consumer-technology" },
    { name: "Regulation", slug: "regulation" },
    { name: "Corporate Strategy", slug: "corporate-strategy" }
  ],
  related: [
    R("/policy/ai-liability-courts-first-cases/", "AI Liability"),
    R("/ai/gpu-cloud-market-shakeout/", "AI Infrastructure"),
    R("/ai/fifty-billion-not-seventy/", "AI Finance")
  ],
  body: [
    `Character Technologies, the company behind the Character.AI chatbot service, filed ${L(C_PET, "a voluntary Chapter 11 petition")} in the US Bankruptcy Court for the District of Delaware on Monday. Disney Worldwide Services is the stalking-horse bidder: it would pay $20m and provide transition services in return for a non-exclusive, perpetual licence to certain company intellectual property and claims, ${L(C_BL, "Bloomberg Law reported")}, citing a company statement.`,
    `The licence is the whole of the offer. Chief executive Colin Adams said the company hoped the sale process would produce a proposal that allows the platform to keep operating. "If such a bid is unavailable, however, the platform will be wound down," he wrote, ${L(C_TC, "TechCrunch reported")}. The service will keep running while the sale proceeds, and the company expects it to close in late November or early December.`,
    `A stalking-horse bid sets a floor for a court-supervised auction, and other bidders can top Disney's offer, ${L(C_REU, "Reuters reported")}. The transition services would come from former Character.AI employees who joined Disney last month alongside the company's former chief executive, Karandeep Singh Anand, according to TechCrunch. The case number is 26-11603; the claims agent's ${L(C_STRETTO, "case page")} lists Wilson Sonsini Goodrich & Rosati as proposed counsel, Houlihan Lokey as proposed investment banker and Areté Partners as proposed financial adviser.`,
    `The petition estimates assets and liabilities of $50m to $100m each and between 100 and 199 creditors, and it states that funds will be available for distribution to unsecured creditors. The largest unsecured claim on its list of 20 is a $4,148,944 trade payable to Google LLC, followed by $2,125,026 for professional services to the law firm Hogan Lovells and a $1,953,100 trade payable to DigitalOcean. By our arithmetic, the 17 claims with stated amounts total about $10.7m. The Commonwealths of Pennsylvania and Kentucky and a minor plaintiff whose name is redacted appear as contingent, unliquidated and disputed litigation claimants, with amounts listed as unknown.`,
    `Adams pointed to "significant legal, regulatory, and operational headwinds" and said the board had determined that a "court-supervised sale process" offered the best opportunity "to maximize value for all stakeholders", TechCrunch reported. According to the petition, the board created a restructuring committee on 8 October, and the committee approved the filing by unanimous written consent dated Monday.`,
    `The numbers invite a comparison that should be made carefully. By our arithmetic, $20m is 20 to 40 per cent of the petition's estimated liabilities range. But Disney is not buying the company, and its bid is a floor, not a valuation. What it would get is a licence and a transition team, which is a narrower thing than a business.`,
    `The legal exposure is part of the background. Kentucky has sued the company, saying its chatbots encouraged users to cut, starve or kill themselves, and Pennsylvania has filed a lawsuit alleging its chatbots posed as doctors, Reuters reported. Earlier this year Character.AI and Google settled a suit brought by the mother of a 14-year-old Florida boy who died by suicide. Disney itself sent Character.AI a cease-and-desist letter in September 2025 demanding that it stop using Disney's copyrighted characters without permission, according to Reuters. The filing does not put a figure on the litigation claims.`,
    `The outcome is open until the auction. If a higher bidder appears and keeps the service running, users keep their product; if not, a consumer AI service ends in a licence of rights to a media company. Komposite has followed how courts are starting to allocate responsibility for automated systems in <a href="/policy/ai-liability-courts-first-cases/">our coverage of AI liability</a>, and the cost of running models at scale in <a href="/ai/gpu-cloud-market-shakeout/">our look at the GPU cloud shakeout</a>.`
  ]
}),

];
