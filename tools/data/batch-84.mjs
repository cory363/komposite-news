import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const CY = P("cybersecurity", "Cybersecurity", "cybersecurity", "Photograph via Unsplash");
const CYC = P("cybersecurity", "Cybersecurity", "cybersecurity", "Photograph via Wikimedia Commons");
const CR = P("crypto", "Crypto", "crypto", "Photograph via Unsplash");
const ST = P("startups", "Startups", "startups", "Photograph via Unsplash");

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

/** Batch 84 — Thursday 15 October 2026, round 12. One new main story and
 *  three others. Lead: Citizen Lab's AdFection report (Cybersecurity, 17:00Z,
 *  the newest, so the front-zone builder makes it the lead and the round-10
 *  CoreWeave lead moves down). Others, newest first: PAN-OS CVE-2026-0322
 *  (Cybersecurity 16:50Z, cluster slot under the lead), EBA/USDC (Crypto
 *  16:40Z) and Ramp (Startups 16:30Z). Repeat check: repo grep for
 *  CVE-2026-0322, PAN-OS, Discover-Tech, AdFection, Candiru, Citizen Lab,
 *  "significant e-money", Ramp valuation, Dragoneer: no earlier story on any
 *  of these events (Ramp appears only as a customer name in two pieces).
 *
 *  CYBERSECURITY / ADFECTION (lead, 17:00Z). Checked 15 Oct against the full
 *  raw HTML of Citizen Lab Report 195 (dated October 15, 2026; all ~167k
 *  characters of text, not a summary). Verbatim in the report: "This is the
 *  first-ever public confirmation of zero-click mercenary spyware delivered
 *  via targeted ads."; "A Discover-Tech ad impression does not in and of
 *  itself confirm targeting or infection with spyware."; "appears to be a
 *  front for large-scale ad espionage abuse". At least 45 Al Jazeera devices
 *  TARGETED in 2024-25, linked "with high confidence" to Candiru via
 *  Discover-Tech ads; devices were infected (no infection count given).
 *  MyDSP March-June 2026: 3,770,286,576 bids, 441,954,291 won (11.7%),
 *  ~$109,091 spend "assuming the cost is recorded in micros of USD";
 *  718,748,885 script-tagged bids (~19%); 75,373 apps and 120,768 websites.
 *  IAEA and ICC: IN THE REPORT ITSELF (section "NATO and the United
 *  Nations": Confiant's research "found signs they were shown in networks of
 *  the International Atomic Energy Agency (IAEA) and the International
 *  Criminal Court"), along with US DoD, Dutch economy ministry, Estonia's RIA,
 *  Spain's digital ministry, Armenia's PM's office, Israeli entities. Industry
 *  actions, Controlium source code on the login page, the token flaw it did
 *  not attempt to exploit, the AliExpress caveat, DARK CARTOGRAPHER and the
 *  call on regulators all checked in the report. Marczak quotes verbatim on
 *  TechCrunch's page (Whittaker, 15 Oct 10:00Z); Al Jazeera / Discover-Tech /
 *  Integrity Labs non-response per TechCrunch; Discover-Tech, Candiru and
 *  Bindecy non-response to Citizen Lab per the report.
 *  CHANGED: "Candiru spyware reached at least 45 devices" corrected to 45
 *  devices targeted (the report's word); IAEA/ICC now sourced to the report;
 *  the source-code detail now from the report rather than TechCrunch; the
 *  authentication line corrected (Citizen Lab says a token could easily be
 *  spoofed and chose not to try); AliExpress line matched to the report.
 *  CUT: "which governments were behind the attacks is unclear" (not stated
 *  in those words in either source).
 *
 *  CYBERSECURITY / PAN-OS (16:50Z). Checked against the raw HTML of Palo Alto
 *  Networks' advisory (published 14 Oct, updated 15 Oct): CVSS-B 8.6 HIGH
 *  (8.5 if management is limited to a jump box), urgency HIGHEST, PR:H, root,
 *  products, Cloud NGFW and Prisma Access not affected, fixed versions for
 *  10.2/11.1/11.2/12.1/12.2 including 11.2.16, no workarounds, Threat IDs
 *  510046/510047 with content 9159-10287 and their four prerequisites,
 *  exploitation quote verbatim, Suraj Siddharudh, three IPs. CISA's KEV JSON
 *  feed (released 2026-10-15T17:00Z): CVE-2026-0322 added 2026-10-14, due
 *  2026-10-17, under BOD 26-04, forensic triage "Yes". BleepingComputer
 *  (Abrams, 14 Oct) for the 11.2.16 timing and its open questions.
 *  CHANGED: mitigations split correctly (restricting access is the risk
 *  reduction; MGT-through-DP routing, certificate replacement, decryption
 *  and threat prevention are the prerequisites for the Threat IDs); "Palo
 *  Alto had not answered" changed to "BleepingComputer said it had asked"
 *  (the report does not say no answer came); deadline now cited to CISA's
 *  own catalogue.
 *
 *  CRYPTO / USDC (16:40Z). Checked against the raw HTML of the EBA press
 *  release (14 Oct 2026): 45 EMTs, USDC first significant, Circle Internet
 *  Financial Europe SAS, 12 November 2026, supervisory split with the ACPR,
 *  NYDFS MoU, MiCA Arts 43 and 56, Delegated Regulation 2024/1506, annual
 *  assessment. The Block (Danga, 15 Oct 07:10 EDT; read via fetch tool, raw
 *  page 403): ~$73bn USDC, $184bn USDT, $294bn dollar stablecoins, no Circle
 *  comment. Circle: no statement found on circle.com/pressroom or
 *  circle.com/blog (fetched 15 Oct ~19:15Z) or in search.
 *  CUT: "NYDFS oversees Circle's New York-regulated operations" (not in The
 *  Block's text as read); the Binance and Chelsea paragraph (unconnected).
 *
 *  STARTUPS / RAMP (16:30Z). TechCrunch (Iyer, 15 Oct 14:47Z) raw HTML: Ramp
 *  "said on Thursday" it raised $1.85bn at $60bn; co-leads; other investors;
 *  ~$5bn raised; revenue >$2bn vs reported $1.5bn in June, growth 25% faster
 *  than a year ago; >$275bn purchase volume up 175%; 85,000 customers vs
 *  70,000; Jensen statement verbatim; Rabois quotes verbatim but from an
 *  interview "last month", not about this round. SECOND SOURCES: Ramp's own
 *  blog post "Ramp at $60B" signed by Eric Glyman and Karim Atiyeh (raw
 *  HTML): 85,000 businesses, >$1bn a month saved, 1.5m hours in September,
 *  passed $2bn annualised revenue over the summer with positive cash flow,
 *  "Our mission hasn't changed. It's just gotten bigger." Bloomberg (Rebecca
 *  Torrence, 9 Oct, as reported by The Next Web on 10 Oct): about $1.85bn at
 *  roughly $60bn before the new money, led by Dragoneer and Thrive, citing
 *  people familiar; Ramp declined to comment then.
 *  CHANGED: round now attributed to Ramp's announcement as reported by
 *  TechCrunch, with the company's own post and Bloomberg's earlier report as
 *  corroboration; Rabois quotes dated to his September conversation.
 */

const CLAB = "https://citizenlab.ca/research/how-discover-tech-turned-targeted-ads-into-a-pipeline-for-spyware/";
const TC1 = "https://techcrunch.com/2026/10/15/citizen-lab-says-governments-are-abusing-online-ads-to-hack-people-with-zero-click-spyware/";
const PAN = "https://security.paloaltonetworks.com/CVE-2026-0322";
const BC = "https://www.bleepingcomputer.com/news/security/palo-alto-networks-warns-of-pan-os-rce-flaw-exploited-in-attacks/";
const KEV = "https://www.cisa.gov/known-exploited-vulnerabilities-catalog";
const EBA = "https://www.eba.europa.eu/publications-and-media/press-releases/eba-classifies-usdc-first-significant-e-money-token-european-union";
const BLOCK = "https://www.theblock.co/news/regulation/2026-10-15-eba-designates-circles-usdc-as-the-eus-first-significant-e-money-token-418637";
const TC4 = "https://techcrunch.com/2026/10/15/ramp-reaches-60b-valuation-as-it-pushes-deeper-into-ai/";
const BLOG = "https://ramp.com/blog/ramp-at-60-billion";
const TNW = "https://thenextweb.com/news/ramp-60bn-valuation-1-85bn-round";

export default [

/* ---------- 16:30Z STARTUPS ---------- */
ST({ slug: "sixty-billion-four-months-after-forty-four", kick: "Venture",
  headline: "Sixty billion, four months after forty-four",
  dek: "Ramp, the corporate card and spend-management company, said on Thursday it had raised $1.85bn at a $60bn valuation, four months after a round at $44bn. It says annualised revenue has passed $2bn.",
  metaDesc: "Ramp says it has raised $1.85bn at a $60bn valuation, up from $44bn in June, and that annualised revenue has passed $2bn with 85,000 customers.",
  author: "grace-lindqvist", date: "2026-10-15T16:30:00Z",
  capt: "A calculator and a pen on a sheet of handwritten figures, in a file photograph.",
  tags: [
    { name: "Venture Capital", slug: "venture-capital" },
    { name: "Fintech", slug: "fintech" },
    { name: "Payments", slug: "payments" }
  ],
  related: [
    R("/startups/fifteen-times-run-rate-for-modal/", "Venture"),
    R("/startups/eight-hundred-seventy-million-for-a-model-that-writes-nothing/", "Venture"),
    R("/fintech/agentic-payments-authorization/", "Agentic Payments")
  ],
  body: [
    `Ramp, the corporate card and spend-management company, said on Thursday that it had raised $1.85bn in a funding round that values it at $60bn, ${L(TC4, "TechCrunch reported")}. The round was co-led by Dragoneer Investment Group, Thrive Capital, Founders Fund, Sands Capital and Avenir Growth, according to the report, and brings the total Ramp has raised to about $5bn. ${L(BLOG, "A post on Ramp's blog")}, signed by its co-founders and co-chief executives Eric Glyman and Karim Atiyeh, is headed "Ramp at $60B".`,
    `The terms had leaked a week earlier. Bloomberg reported on 9 October, citing people familiar with the matter, that Ramp had raised about $1.85bn at roughly $60bn, a figure it described as the valuation before the new money, with Dragoneer and Thrive leading; Ramp declined to comment at the time, ${L(TNW, "The Next Web reported")}. The valuation compares with $44bn in June, when Ramp raised $750m. By our arithmetic that is a rise of about 36 per cent in four months.`,
    `TechCrunch listed a long roster of other investors, including Capital International, Fidelity Management &amp; Research, T. Rowe Price, D1 Capital Partners, Greenoaks, ICONIQ, GIC, Coatue, General Catalyst, Khosla Ventures and Lightspeed Venture Partners.`,
    `The operating figures are the company's own. Ramp said annualised revenue has passed $2bn, up from a reported $1.5bn in June, and that revenue growth is 25 per cent faster than at this time last year. It put annualised purchase volume above $275bn, up 175 per cent on a year earlier, and customers at 85,000, up from 70,000 in June. By our arithmetic, revenue has risen by about a third and the customer count by about a fifth since the last round. The blog post says Ramp passed $2bn in annualised revenue over the summer "with positive cash flow".`,
    `The post also says customers save more than $1bn a month and that Ramp saved them 1.5 million hours in September. Those are Ramp's claims about its customers' outcomes and have not been independently verified. "Our mission hasn't changed. It's just gotten bigger," the co-founders wrote.`,
    `Much of the pitch is about artificial intelligence. TechCrunch said Ramp has embedded AI agents across its products, launched a corporate card designed for AI agents to use, entered the model routing business in August and, this month, launched Glass, a workspace that stores and shares the AI automations, prompts and skills that employees build. Named customers include Visa, Uber, Shopify, Robinhood, Anduril, Notion, Cursor and Figma.`,
    `"We believe Ramp is well on its way to becoming one of the defining companies of this era," Christian Jensen, a partner at Dragoneer, said in a statement. Keith Rabois, an early investor through Founders Fund and Khosla Ventures, told TechCrunch last month that "Ramp is not worried about Rippling", the HR and payroll company that has moved into corporate cards, expense management and bill payments. In the same conversation he said Ramp would compete with Anthropic and that he wanted it to be "larger and more successful and more important than Anthropic". That is an investor's aspiration, not a company plan.`,
    `By our arithmetic, $60bn is at most 30 times the $2bn revenue run rate, a ceiling because the company says revenue is above $2bn. Neither the company's post nor the reporting breaks that revenue down, so the multiple is a guide to how investors price growth, not a measure of profit.`,
    `What the round tests is whether a payments-and-software business is valued as fintech or as an AI platform. The AI products described are recent, and none of the sources gives revenue from them. Komposite reported on Wednesday that <a href="/startups/fifteen-times-run-rate-for-modal/">Modal raised at about fifteen times its run rate</a>, and has covered <a href="/fintech/agentic-payments-authorization/">how payment authorisation is being rebuilt for software agents</a>.`
  ]
}),

/* ---------- 16:40Z CRYPTO ---------- */
CR({ slug: "usdc-becomes-the-eus-first-significant-token", kick: "Stablecoins",
  headline: "One of forty-five, and the first to be significant",
  dek: "The European Banking Authority has classified Circle's USDC as a significant e-money token under MiCA, the first of 45 notified. From 12 November the EBA, not France's ACPR, will directly supervise its reserves, liquidity and redemption plans.",
  metaDesc: "The EBA has classified Circle's USDC as the EU's first significant e-money token; from 12 November it takes over supervision of reserves, own funds and redemption plans from France's ACPR.",
  author: "marcus-oyelaran", date: "2026-10-15T16:40:00Z",
  capt: "The towers of La Défense, the business district west of Paris where the European Banking Authority is based, at night, in a file photograph.",
  tags: [
    { name: "Stablecoins", slug: "stablecoins" },
    { name: "Regulation", slug: "regulation" },
    { name: "Digital Assets", slug: "digital-assets" }
  ],
  related: [
    R("/crypto/eight-days-after-asking-for-a-law/", "Stablecoins"),
    R("/crypto/the-fsb-says-stablecoins-are-untested-in-a-crisis/", "Stablecoins"),
    R("/fintech/stablecoin-transfer-button-82-million-galaxy-devices/", "Stablecoins")
  ],
  body: [
    `The European Banking Authority has classified Circle's USDC as a significant e-money token under the EU's Markets in Crypto-Assets regulation, the first of the 45 e-money tokens notified in the bloc to receive the label, according to ${L(EBA, "an EBA press release dated Wednesday")}. The token is issued in the EU by Circle Internet Financial Europe SAS.`,
    `The classification changes who supervises what. From 12 November 2026, the EBA says, USDC will fall under MiCA's dual supervision regime for significant tokens, with direct supervision of own funds, the reserve of assets, liquidity requirements, and recovery and redemption plans passing from the French regulator, the Autorité de Contrôle Prudentiel et de Résolution (ACPR), to the EBA. By our count that is 29 days after the announcement.`,
    `The ACPR keeps supervision of governance, qualifying holdings, fit-and-proper assessments, outsourcing and conflicts of interest, and the EBA says the two authorities will work closely together on the transition. The EBA classifies tokens under Articles 43 and 56 of MiCA, using indicators set out in Commission Delegated Regulation (EU) 2024/1506, and reassesses each year whether a token should still count as significant. The release does not say which indicator or threshold USDC met.`,
    `The EBA has also signed a memorandum of understanding with the New York State Department of Financial Services, which it says will support cooperation and information exchange in its supervision of cross-border stablecoin activity. USDC is issued in the United States by a separate entity, Circle Internet Financial, LLC.`,
    `${L(BLOCK, "The Block")} put USDC's supply at nearly $73bn on its own data dashboard, behind Tether's USDT at $184bn, in a dollar-pegged stablecoin market it counted at $294bn. By our arithmetic, USDC is about a quarter of that total. Those are The Block's figures, not the EBA's. The EBA release names no official and carries no quotation, and Circle had published no statement on the decision on its press page or blog by Thursday afternoon; The Block's report carried none either.`,
    `The practical meaning is a shift in supervisory weight. A token large enough to matter across the single market now has its reserve and redemption arrangements overseen at EU level, rather than by one national authority. For holders and for firms that use USDC as a settlement asset, the release describes no new obligation or change in redemption rights; any such detail will sit in the EBA's supervisory work after 12 November.`,
    `The decision follows a year in which European regulators have focused on stablecoins' weak points. Komposite reported that <a href="/crypto/eight-days-after-asking-for-a-law/">ESMA told national supervisors to expect licensed firms to stop serving clients in non-compliant stablecoins</a>, and that <a href="/crypto/the-fsb-says-stablecoins-are-untested-in-a-crisis/">the Financial Stability Board called stablecoins untested in a crisis</a>. USDC is the first token the EBA has placed in MiCA's significant tier.`
  ]
}),

/* ---------- 16:50Z CYBERSECURITY ---------- */
CYC({ slug: "a-root-flaw-in-the-firewall-management-page", kick: "Vulnerabilities",
  headline: "A root flaw on the firewall's own door",
  dek: "Palo Alto Networks says a high-severity PAN-OS flaw, CVE-2026-0322, has been exploited in what it calls very limited attacks on the management interface. There is no workaround, and CISA has given federal agencies until Saturday, 17 October.",
  metaDesc: "Palo Alto Networks says attackers have exploited CVE-2026-0322, an authenticated root-level flaw in the PAN-OS management interface; there is no workaround and CISA has set a 17 October deadline.",
  author: "sam-porter", date: "2026-10-15T16:50:00Z",
  capt: "Palo Alto Networks PA-220 firewalls, under a Juniper Networks VPN gateway, in an equipment rack at The Gathering computer festival in Norway in 2019.",
  tags: [
    { name: "Cybersecurity", slug: "cybersecurity" },
    { name: "Security Operations", slug: "security-operations" },
    { name: "Threat Intelligence", slug: "threat-intelligence" }
  ],
  related: [
    R("/cybersecurity/a-fully-patched-vpn-and-root-in-three-steps/", "Exploitation"),
    R("/cybersecurity/the-third-netscaler-patch-in-eleven-days/", "Patching"),
    R("/cybersecurity/the-ninth-time-this-year/", "Vulnerabilities")
  ],
  body: [
    `Palo Alto Networks said on Wednesday that attackers have exploited CVE-2026-0322, a remote code execution flaw in the management interface of its PAN-OS firewall software. "Very limited exploitation has been observed targeting the Palo Alto Networks management interface," the company said in ${L(PAN, "its security advisory")}. The US Cybersecurity and Infrastructure Security Agency added the flaw to ${L(KEV, "its Known Exploited Vulnerabilities catalogue")} the same day and gave federal civilian agencies until 17 October to act.`,
    `The advisory scores the flaw 8.6 on the CVSS 4.0 scale, rated high, with a suggested urgency of "highest". An attacker needs high-privilege credentials and network access to the management interface, and can then run code as root on the firewall. The advisory says no special configuration is needed for a device to be affected, and that the risk is highest where the management interface is reachable from the internet. It credits an internal researcher, Suraj Siddharudh, with finding the issue.`,
    `Affected products are the PA-Series and VM-Series firewalls and Panorama, in both virtual and M-Series forms. Cloud NGFW and Prisma Access are not affected. The advisory lists fixed releases for the 10.2, 11.1, 11.2, 12.1 and 12.2 branches and tells users of older, unsupported versions to move to a supported fixed release. ${L(BC, "BleepingComputer reported")} on Wednesday that a fix for 11.2.16 was expected on Thursday; the advisory, updated on Thursday, now lists 11.2.16 among the fixed versions.`,
    `The company says there are no known workarounds. Restricting management access to trusted internal IP addresses, or to a single jump box, reduces the risk. Customers with a Threat Prevention subscription get what the company calls limited coverage from Threat IDs 510046 and 510047, in content version 9159-10287 or later, but only if they route management traffic through a data-plane interface, replace the certificate for inbound management traffic, decrypt that traffic so the firewall can inspect it, and enable threat prevention on it.`,
    `Several basic facts are not public. Neither the advisory nor BleepingComputer's report says when exploitation began or who is behind it. BleepingComputer said it had asked Palo Alto Networks those questions and whether attackers had compromised firewalls or used them to reach internal networks. The advisory lists three IP addresses associated with the activity.`,
    `The credential requirement narrows the risk but does not remove it. A flaw that needs a login is still a route to root for anyone who has stolen or guessed a management password, and the advisory's own first advice, keeping the interface off untrusted networks, is a reminder that management ports are often reachable from places they should not be. "Very limited" is the company's own assessment and has not been independently verified.`,
    `CISA's catalogue entry sets the deadline under its Binding Operational Directive 26-04 and marks the flaw for forensic triage. The deadline binds only US federal civilian agencies, but private operators often treat the catalogue as a priority list.`,
    `Edge devices have supplied a steady run of exploited flaws this year. Komposite reported on <a href="/cybersecurity/a-fully-patched-vpn-and-root-in-three-steps/">a fully patched VPN that attackers could still take to root</a> and on <a href="/cybersecurity/the-third-netscaler-patch-in-eleven-days/">a third NetScaler patch in eleven days</a>. The PAN-OS case differs in that the entry point is the management plane, the part of the device that administrators are told to isolate.`
  ]
}),

/* ---------- 17:00Z CYBERSECURITY (LEAD) ---------- */
CY({ slug: "an-ad-network-that-delivered-spyware", kick: "Spyware",
  headline: "The ad was the exploit",
  dek: "Citizen Lab says an Israeli ad company, Discover-Tech, gave spyware makers a route from ad auctions onto people's devices, and that at least 45 devices at Al Jazeera were targeted with Candiru spyware through it. The researchers call it the first public confirmation of zero-click spyware delivered by targeted ads.",
  metaDesc: "Citizen Lab says Discover-Tech's ad platform let spyware makers infect devices through targeted ads; at least 45 Al Jazeera devices were targeted with Candiru spyware in 2024 and 2025.",
  author: "sam-porter", date: "2026-10-15T17:00:00Z",
  capt: "App icons glowing on the screen of an Android smartphone, in a file photograph.",
  tags: [
    { name: "Threat Intelligence", slug: "threat-intelligence" },
    { name: "Cybersecurity", slug: "cybersecurity" },
    { name: "Media", slug: "media" }
  ],
  related: [
    R("/cybersecurity/fixed-for-the-phones-that-did-not-upgrade/", "Mobile Security"),
    R("/cybersecurity/the-request-came-from-a-real-government-domain/", "Phishing"),
    R("/cybersecurity/the-ninth-time-this-year/", "Vulnerabilities")
  ],
  body: [
    `The Citizen Lab at the University of Toronto said on Thursday that an Israel-based advertising company, Discover-Tech, ran a platform that let spyware makers infect devices through targeted online ads, and that at least 45 devices at the news network Al Jazeera were targeted in 2024 and 2025 with spyware from Candiru, which now trades as Integrity Labs. "This is the first-ever public confirmation of zero-click mercenary spyware delivered via targeted ads," says ${L(CLAB, "the report, titled \"Exposing AdFection\"")}.`,
    `According to the report, Discover-Tech presents itself as a legitimate ad company but "appears to be a front for large-scale ad espionage abuse". Its platform, Controlium, lets partners de-anonymise and fingerprint devices and infect them the moment an ad renders, with no click needed. Citizen Lab links the Al Jazeera attacks to Candiru with what it calls high confidence, based on network analysis, infrastructure fingerprints and similarities with Candiru malware it captured in 2021. It also ties a second spyware maker, Bindecy, to Controlium through login records and server fingerprints. Discover-Tech had published the full source code of Controlium's front end on its login page, which let the researchers rebuild its interface.`,
    `The researchers worked from exposed ad-bidding data: nearly four billion bidding records that the report says sat publicly on a Discover-Tech server. For its MyDSP platform, between March and June 2026, the records show about 3.77bn bids, about 442m of them won (11.7 per cent), and spending of about $109,091. At least 718,748,885 bids, about 19 per cent, were for ads carrying attacker script tags, and those ads were displayed in 75,373 apps and on 120,768 websites, close to 200,000 in all by our arithmetic.`,
    `The report is careful about what the numbers do not show. "A Discover-Tech ad impression does not in and of itself confirm targeting or infection with spyware," it says. The data covers one platform and four months, and IP geolocation can be wrong because of VPNs and satellite links. Citizen Lab says it would be easy to spoof a valid Controlium access token but that it did not try, because doing so would have been unauthorised access. It found no evidence of a business relationship between Discover-Tech and AliExpress, whose name appeared on many of the ads, and thinks those ads were probably not bought on AliExpress's behalf.`,
    `The exposure of sensitive networks is therefore a matter of risk, not proof of infection. The report cites a companion investigation by the ad-security firm Confiant, which found signs that the ads were displayed on networks of the US Department of Defense, the Dutch Ministry of Economic Affairs, Estonia's Information System Authority, Spain's digital transformation ministry, the office of Armenia's prime minister and several Israeli government bodies, and also on networks of the International Atomic Energy Agency and the International Criminal Court.`,
    `Bill Marczak, a senior researcher at Citizen Lab, told ${L(TC1, "TechCrunch")} that Discover-Tech is "surely just the tip of the iceberg" and that "now for the first time, we have concrete technical evidence showing this process in action." His advice to people who may be targeted because of who they are or what they do: "it's time to disable ad tracking on your devices or even block ads altogether." Al Jazeera and Discover-Tech did not respond to TechCrunch, and Integrity Labs could not be reached. Citizen Lab says Discover-Tech, Candiru and Bindecy did not respond to its own requests for comment.`,
    `Parts of the ad industry have already acted. According to the report, Google and IAB Europe removed Discover-Tech from their vendor registries in early October and Google cut its access to its ad exchanges; Beeswax removed it, Vungle (Liftoff) paused its access pending a review, and Eskimi also acted against it. Citizen Lab calls on regulators to investigate whether Discover-Tech and Candiru broke the law. It says a separate actor using Discover-Tech's infrastructure, which it calls DARK CARTOGRAPHER, will be the subject of a later report.`,
    `The finding moves the spyware attack surface from the individual device to the bidding market. A zero-click attack that arrives as an ordinary ad cannot be avoided by declining to open a message, and the defences the researchers point to, blocking ads or limiting ad tracking, are not ones most organisations enforce. The evidence concerns one firm and one period; Marczak's own warning is that it is unlikely to be the only one.`,
    `Komposite has tracked how attackers reach phones, including <a href="/cybersecurity/fixed-for-the-phones-that-did-not-upgrade/">an exploited flaw fixed only for the phones that did not upgrade</a>. The Citizen Lab report describes a different route, in which the delivery channel is the advertising system itself, and the companies in the middle are only now being asked what they knew.`
  ]
}),

];
