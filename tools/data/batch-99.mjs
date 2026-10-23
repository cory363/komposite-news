/*
Komposite News, batch 99: Friday 23 October 2026, round 21 (new lead + 2). Fact-checked against primary documents.

---------- 15:20Z MARKETS (LEAD): "The SEC's examiners put super intelligence on the 2027 list" (priya-raghavan) ----------
SOURCES READ:
- SEC press release 2026-109, 23 Oct 2026 (fetched twice; quotes checked).
- SEC Division of Examinations, "Examination Priorities: Fiscal Year 2027" PDF, full text extracted locally (PDFKit) and searched.
FACT-CHECK NOTES:
- [VERIFY] Atkins: full sentence confirmed: "Examinations are one of the Commission's most important tools for promoting compliance with the
  federal securities laws." Cassidy quote confirmed verbatim.
- [VERIFY] 34,000: release says "across the Division's more than 34,000 registrants". Confirmed.
- Release lists "Emerging technologies, including super intelligence ..." among focus areas; PDF uses "super intelligence (SI)".
- Disclaimer, leadership-message SI passage, "intensifying its efforts", "without displacing examiner judgment", deepfake/phishing, fraud
  prevention/back office/AML/Reg BI/trading, the three-part test for automated tools, Reg S-P, third-party access "may be insufficient to protect
  client assets and data", clearing agencies, Treasury clearing, Reg SCI (SI, tokenization, extended hours, quantum), CFTC MOU: all in the PDF.
- Fixes: "hard-to-trade" -> "difficult to trade, have unusual features, or are illiquid"; "default risk management" -> "risk management of
  defaults"; algorithms test is against "investors' investment profiles or stated strategies"; "easier to receive observations" reworded to the
  document's "strengthening how registrants access the observations". "Crypto" does not appear in the PDF at all (text search).
- Timestamp moved from 16:40Z (future at integration) to 15:20Z.
HERO: Unsplash P_5mirRrg0k, MJ Duford (@duforddigital): a magnifying glass beside a closed laptop on a white marble table. No people. Not used
  before; no other magnifying-glass photo on the site.

---------- 15:00Z CYBERSECURITY: "Quest says patient records were reached through its ordering portal" (sam-porter) ----------
SOURCES READ:
- Quest Diagnostics Form 8-K (Item 8.01), event 21 Oct 2026, signed 22 Oct 2026, full text extracted locally.
- Quest Quanum incident notice, "As of 8:00 am ET, October 23, 2026", downloaded and read in full.
- TechCrunch, 23 Oct 2026 (Zack Whittaker), downloaded and read in full.
- Quest Form 8-K, 3 June 2019 (AMCA), via search summary of the EDGAR filing.
FACT-CHECK NOTES:
- 8-K wording and the notice's FAQ confirmed (pause, LIS/EMR ordering unaffected, paper requisitions/Quanum eLabs workaround, Essential
  Insights/LabHQ paused with no data accessed, not related to the PHP issue, notification letters with credit and identity monitoring).
  Notice still says it anticipates full service "as soon as tomorrow, October 23"; reported as written.
- [VERIFY] "about half a million clinicians" (TechCrunch citing Quest materials): not found in any Quest source we could reach; CUT, along with
  the 6-million-patient case study figure, which was also TechCrunch's reading.
- [VERIFY] 2019: confirmed from Quest's own 3 June 2019 8-K: AMCA, a billing collections vendor, about 11.9 million Quest patients; Quest said
  lab results were not affected. Now sourced to that filing.
- Rivera, the noindex code and the list of 2026 healthcare attacks (Stryker, Boston Scientific, CareCloud, Craneware, McKesson) are TechCrunch's.
HERO: Unsplash QHBtGNo580Y, Nathan Rimoux (@nathan_rmx): rows of capped sample tubes in a green lab rack. No people. Not used before.

---------- 14:40Z CRYPTO: "a16z drops 'crypto' from the name of its crypto unit" (marcus-oyelaran) ----------
SOURCES READ:
- a16z Frontier announcement by Chris Dixon at a16zfrontier.com (undated page), downloaded and read in full.
- TechCrunch, 22 Oct 2026 (Marina Temkin), downloaded and read in full.
FACT-CHECK NOTES:
- The post says the firm is "expanding the scope of our new fund beyond crypto startups" to "frontier startups"; the draft's claim that it says
  nothing about funds was wrong and is fixed. It does not use the word robotics: it talks about AI-native products, new devices and autonomous
  machines, biology and medicine, and networks for machines. Rewritten to match. Leadership list confirmed (Dixon, Andreessen, Horowitz,
  Lazzarin, Wuollet).
- Date: page is undated; "announced Thursday" is attributed to TechCrunch.
- $10bn/five funds/2018/Coinbase and the "receded in importance" framing: attributed to TechCrunch.
- Ali Yahya: attributed to The Information as reported by TechCrunch; we note that the leadership list in the post does not include him. No
  further claim made.
HERO: Unsplash vJXjiHvW2vc, Enchanted Tools (@enchantedtools): an orange robotic hand against a plain light background. No people. Not used
  before; the site's other robot photos are factory arms.

BACKUP (OpenAI Decisions API, single source, TypeSafe $7.6bn vs $7.5bn conflict): not used; all three primary drafts survived.
*/
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const MK = P("markets", "Markets", "markets", "Photograph via Unsplash");
const CY = P("cybersecurity", "Cybersecurity", "cybersecurity", "Photograph via Unsplash");
const CR = P("crypto", "Crypto", "crypto", "Photograph via Unsplash");

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

const SEC_PR = "https://www.sec.gov/newsroom/press-releases/2026-109-sec-announces-fiscal-year-2027-examination-priorities";
const SEC_PDF = "https://www.sec.gov/files/2027-exam-priorities.pdf";
const Q_8K = "https://www.sec.gov/Archives/edgar/data/0001022079/000094787126000941/ss6979200_8k.htm";
const Q_NOTICE = "https://www.questdiagnostics.com/links/quanum-notice";
const Q_TC = "https://techcrunch.com/2026/10/23/lab-testing-giant-quest-diagnostics-confirms-patients-personal-and-health-data-was-compromised-during-breach/";
const Q_2019 = "https://www.sec.gov/Archives/edgar/data/1022079/000094787119000415/ss138857_8k.htm";
const A_POST = "https://a16zfrontier.com/";
const A_TC = "https://techcrunch.com/2026/10/22/as-blockchain-investing-falls-out-of-vogue-a16z-crypto-rebrands-as-a16z-frontier/";

export default [

/* ---------- 14:40Z CRYPTO ---------- */
CR({ slug: "a16z-drops-crypto-from-the-name-of-its-crypto-unit", kick: "Venture Capital",
  headline: "a16z drops 'crypto' from the name of its crypto unit",
  dek: "Andreessen Horowitz has renamed a16z Crypto, the unit led by Chris Dixon, as a16z Frontier and widened its new fund's scope to AI-era products, autonomous machines and networks built for them. It says it will keep investing in crypto.",
  metaDesc: "Andreessen Horowitz renamed a16z Crypto as a16z Frontier, widening its new fund beyond crypto start-ups to frontier technology while saying it will keep investing in crypto.",
  author: "marcus-oyelaran", date: "2026-10-23T14:40:00Z",
  capt: "An orange robotic hand against a plain light background, in a file photograph.",
  tags: [
    { name: "Venture Capital", slug: "venture-capital" },
    { name: "Digital Assets", slug: "digital-assets" },
    { name: "Startups", slug: "startups" }
  ],
  related: [
    R("/startups/tenstorrent-more-than-doubles-to-6-2bn/", "Startups"),
    R("/crypto/the-clarity-act-stops-at-forty-nine/", "Crypto"),
    R("/fintech/one-api-for-fiat-and-stablecoins/", "Fintech")
  ],
  body: [
    `Andreessen Horowitz (a16z) has renamed its digital-asset unit from a16z Crypto to a16z Frontier and is widening the scope of its new fund beyond crypto start-ups, according to ${L(A_POST, "an announcement signed by Chris Dixon")}, the unit's managing partner. ${L(A_TC, "TechCrunch reported")} that the firm announced the change on Thursday.`,
    `"We're renaming a16z Crypto to a16z Frontier," the post says. It describes the change as "an expansion" towards "frontier startups", which it defines as companies building new technologies and creating markets that may take years to develop, and says the firm "will continue to invest in crypto and related ventures and advocate for sensible crypto regulation". Mr Dixon argues that as blockchains have become more widely used the label matters less, and that it makes more sense to define companies by what they do than by the technology they use.`,
    `The new focus is the current wave of AI. The post names brand-new uses of AI rather than faster versions of old tasks, a proliferation of new devices including autonomous machines that can act in the physical world, advances in biology and medicine, and networks built for machines and AI agents rather than people. It says blockchains will play "a significant role" in that, through stablecoins, programmable financial services and machine-to-machine transactions. Mr Dixon writes that he will lead the fund with the firm's founders, Marc Andreessen and Ben Horowitz, and general partners Eddy Lazzarin and Guy Wuollet, and that operating teams will keep supporting existing and future portfolio companies. The post gives no fund size or date.`,
    `TechCrunch said the unit has raised nearly $10bn across five funds since it launched in 2018, and backed Coinbase among other companies; Komposite has not verified those figures. The outlet framed the rename as "a sign that crypto and blockchain-focused investing has receded in importance", and said a16z and rival firms had struggled for years to push crypto's usefulness beyond financial rails, trading applications and speculative assets. That is TechCrunch's reading; a16z's post presents the change as a widening of scope, not a retreat.`,
    `TechCrunch also reported, citing The Information, that Ali Yahya, who joined the crypto strategy as its first investor in 2017, has left the firm. Komposite has not confirmed his departure with a16z; he is not among the leaders named in Mr Dixon's post.`,
    `Why it matters: a16z is one of the largest backers of digital-asset start-ups, so the name over its door is a signal to founders deciding whom to approach. A rename does not change existing holdings, and the post does not say how the new fund's capital will be split between crypto and everything else. The policy backdrop is in <a href="/crypto/the-clarity-act-stops-at-forty-nine/">our report on the Senate's stalled market-structure bill</a>, and the AI money flowing elsewhere in <a href="/startups/tenstorrent-more-than-doubles-to-6-2bn/">Tenstorrent's doubled valuation</a>.`
  ]
}),

/* ---------- 15:00Z CYBERSECURITY ---------- */
CY({ slug: "quest-says-patient-records-were-reached-through-its-ordering-portal", kick: "Healthcare Breach",
  headline: "Quest says patient records were reached through its ordering portal",
  dek: "Quest Diagnostics told the SEC that an unauthorised party accessed certain patient records in its Quanum LSM system, which clients use to order tests and look up results. It has not said how many patients are affected.",
  metaDesc: "Quest Diagnostics said in an SEC filing that an unauthorised party accessed patient records in its Quanum LSM ordering system; it has not said how many people are affected.",
  author: "sam-porter", date: "2026-10-23T15:00:00Z",
  capt: "Capped sample tubes in a laboratory rack, in a file photograph.",
  tags: [
    { name: "Cybersecurity", slug: "cybersecurity" },
    { name: "Resilience", slug: "resilience" }
  ],
  related: [
    R("/cybersecurity/microsoft-says-agents-hit-2250-tenants-through-connectwise/", "Cybersecurity"),
    R("/cybersecurity/railway-tells-every-customer-to-rotate-its-keys/", "Cybersecurity"),
    R("/cybersecurity/everyone-shares-the-same-vendors/", "Cybersecurity")
  ],
  body: [
    `Quest Diagnostics, the US laboratory-testing company, said in ${L(Q_8K, "a filing with the Securities and Exchange Commission")} dated Thursday that it learned on Wednesday of unauthorised access to its Quanum LSM system and believes an unauthorised party accessed certain patient records. The filing does not say how many patients are affected.`,
    `The 8-K describes Quanum LSM as a system "which certain clients use to place test orders, receive and look up results". Quest said it started its incident-response procedures to contain the activity, notified federal law enforcement and engaged outside cybersecurity experts. The full scope remains under investigation, the filing says, and the incident has not materially disrupted the company's operations or its ability to serve patients.`,
    `A ${L(Q_NOTICE, "notice on Quest's website")}, marked as of 08:00 Eastern on Friday, says the company paused access to Quanum Lab Services Manager on discovering the incident. Providers that order through direct laboratory-system interfaces or electronic medical records can carry on, and Quanum LSM customers can use paper requisitions or Quanum eLabs in the meantime. The notice says Quest anticipated restoring full service "as soon as" 23 October. Two other products, Essential Insights and LabHQ, were paused as a precaution; Quest says no data was accessed in them. It says it believes "some patient data within Quanum LSM was accessed" and is working to determine which data, and that the incident is not related to this week's PHP programming-language flaws.`,
    `Quest says it will notify affected patients, providers and health plans as the law requires, and that letters to patients will describe the resources available, including credit and identity monitoring. ${L(Q_TC, "TechCrunch reported")} that Quest did not say when the intrusion began or whether attackers have demanded payment, and that a spokesperson, Amanda Rivera, did not answer its questions and pointed to the notice. TechCrunch also noted that the notice page carries code telling search engines not to list it.`,
    `It is not Quest's first exposure of patient data. In June 2019 the company ${L(Q_2019, "disclosed")} that a breach at American Medical Collection Agency, a billing collections vendor, had reached information on about 11.9 million Quest patients; it said then that laboratory results were not affected. This time the system involved is Quest's own.`,
    `TechCrunch placed the incident in a run of healthcare attacks this year, including those at Stryker, Boston Scientific, CareCloud, Craneware and McKesson.`,
    `Why it matters: a laboratory ordering portal holds names, test orders and results for many practices at once, so one point of access can reach many providers' patients. So far the 8-K is the only source with a firm date and the company's own scope language. Komposite has reported on similar single-vendor exposure in <a href="/cybersecurity/microsoft-says-agents-hit-2250-tenants-through-connectwise/">the ConnectWise intrusions</a> and <a href="/cybersecurity/railway-tells-every-customer-to-rotate-its-keys/">Railway's call to rotate keys</a>.`
  ]
}),

/* ---------- 15:20Z MARKETS (LEAD) ---------- */
MK({ slug: "the-sec-examiners-put-super-intelligence-on-the-2027-list", kick: "Regulation",
  headline: "The SEC's examiners put super intelligence on the 2027 list",
  dek: "The SEC's Division of Examinations published its fiscal 2027 priorities on Friday. They single out registrants' use of what the document calls super intelligence, cyberattacks that use it, cybersecurity and customer data, private credit, and tokenisation at clearing agencies.",
  metaDesc: "The SEC's Division of Examinations on Friday set its fiscal 2027 priorities, naming registrants' use of super intelligence, cyber resilience, private credit and tokenisation.",
  author: "priya-raghavan", date: "2026-10-23T15:20:00Z",
  capt: "A magnifying glass beside a closed laptop, in a file photograph.",
  tags: [
    { name: "Regulation", slug: "regulation" },
    { name: "Compliance", slug: "compliance" },
    { name: "AI Governance", slug: "ai-governance" },
    { name: "Cybersecurity", slug: "cybersecurity" },
    { name: "Capital Markets", slug: "capital-markets" }
  ],
  related: [
    R("/markets/bond-funds-may-get-their-cross-trades-back/", "Markets"),
    R("/cybersecurity/railway-tells-every-customer-to-rotate-its-keys/", "Cybersecurity"),
    R("/policy/the-occ-finalises-its-stablecoin-rule-and-keeps-rewards-open/", "Policy")
  ],
  body: [
    `The Securities and Exchange Commission's Division of Examinations on Friday published its fiscal year 2027 examination priorities, naming registrants' use of what it calls "super intelligence" (SI), cybersecurity and customer data, private credit and tokenisation among the areas it considers higher risk, ${L(SEC_PR, "the SEC said")}. The priorities apply across what the release calls "the Division's more than 34,000 registrants".`,
    `The ${L(SEC_PDF, "priorities document")} is a staff statement. A disclaimer on its first page says it is not a rule, regulation or statement of the Commission, which has neither approved nor disapproved it, and that it creates no new or additional obligations. The release says the list is not exhaustive and that the division may adjust its focus in response to market events and new developments.`,
    `SI appears in the leadership message before the priorities themselves. The division says registrants are "increasingly incorporating super intelligence (SI) into their businesses", using generative tools for research, drafting, coding and client communications, as well as advisory and portfolio management functions and compliance monitoring. It says it is "intensifying its efforts" to understand how the technologies influence outcomes and whether firms continue to comply with existing, technology-neutral obligations. The division adds that it is working to bring SI into its own examinations and risk assessment "without displacing examiner judgment".`,
    `The section on emerging financial technology is more specific. It says threat actors are using SI to automate and accelerate cyberattacks, and that examiners will review registrants' preparation for SI-related threats such as SI-generated phishing messages and synthetic or deepfake voice and video used for social engineering. The division will also prioritise policies for monitoring SI used in fraud prevention and detection, back-office operations, anti-money-laundering and Regulation Best Interest compliance, and trading. For automated investment tools, it will test whether representations are fair and accurate, whether operations and controls match what investors were told, and whether algorithms produce advice consistent with investors' investment profiles or stated strategies.`,
    `Cybersecurity and operational resilience remain a priority, with examiners reviewing governance, data loss prevention, access controls, and response and recovery protocols, including for ransomware. The division says it will assess the risks of registrants' increased use of third-party service providers and shared technologies. Under the amended Regulation S-P, staff will evaluate incident-response policies, customer notification procedures and oversight of service providers. For investment advisers, the document also flags firms that use third parties to access clients' accounts, where existing controls "may be insufficient to protect client assets and data".`,
    `On products, the division says it will prioritise advisers that recommend investments that are difficult to trade, have unusual features or are illiquid. Its examples include loans provided by private funds or business development companies, stakes in private companies held through special purpose vehicles, and higher-risk products such as exchange-traded funds based on less liquid assets, option-based funds, inverse and single-stock ETFs, and zero-days-to-expiration options. For private fund advisers, examiners will check disclosures on debt, fund-level lines of credit, affiliated service providers and the accuracy of fee and expense calculations.`,
    `Market infrastructure gets its own entries. Examinations of clearing agencies will focus on areas including risk management of defaults, recovery and wind-down, securities lending, operations and tokenisation, and on compliance with new rules including those on expanded Treasury clearing. Under Regulation Systems Compliance and Integrity, examiners will look at emerging trends including SI, tokenisation of securities, extended trading hours and quantum computing. The document does not mention crypto assets; tokenisation is the nearest it comes.`,
    `Paul S. Atkins, the SEC's chairman, said in the release: "Examinations are one of the Commission's most important tools for promoting compliance with the federal securities laws." Keith Cassidy, the division's director, said: "The markets we oversee continue to evolve rapidly, and the examination program must evolve with them." The document says a central focus this year is strengthening how registrants get access to the observations examiners gather, and it notes an enhanced memorandum of understanding with the Commodity Futures Trading Commission that deepens coordination between the two agencies.`,
    `Why it matters: the priorities are not rules, but they tell regulated firms where examiners will ask questions in the coming year. For firms that have put generative tools into research, client communications or compliance, the document signals that disclosures, controls and monitoring around those tools will be examined under existing law. It also arrives as the SEC works on other plans for funds, including the <a href="/markets/bond-funds-may-get-their-cross-trades-back/">cross-trading proposal</a> Komposite covered this month, and as incidents such as <a href="/cybersecurity/railway-tells-every-customer-to-rotate-its-keys/">Railway's key-rotation warning</a> keep third-party risk in view.`
  ]
}),

];
