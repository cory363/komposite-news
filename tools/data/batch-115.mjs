/*
Komposite News, batch 115: Monday 2 November 2026, round 35. New lead + 2 stories. tools/data/lead.json pins the new lead
(the round-34 Apple pin moves down the normal way). Brave was unavailable this round, so leads came from WebSearch and the
day's reader-trend signal, then every story was reported from the primary sources listed below. Written and checked under the
26 Oct SEO/trust rules: house byline only, labelled original analysis, 2+ internal and 2+ external links, metaDesc <= 155
characters. r35-claims.md checked before writing and before commit. The AO3 security incident was first picked for the
cybersecurity slot but yielded to The Game of Giving, which made it its lead; the Cursor/Claude Code story replaces it.

---------- 13:40Z MARKETS (LEAD): "A hundred and fifteen billion, paid in shares" (priya-raghavan, house byline) ----------
SOURCES READ:
- Marvell/Lumentum joint release, "Marvell and Lumentum to Combine, Creating a Category Leader in AI Connectivity", Santa Clara
  and San Jose, 2 Nov 2026 (Marvell 8-K exhibit 99.1 on EDGAR, and investor.marvell.com) (read): all-stock; 4.500 Marvell
  shares per Lumentum share; implied enterprise value $115bn; about $1,132 a share; premium about 23.9% to unaffected closes on
  28 Oct 2026, "the last trading day before market speculation"; Marvell holders about 67%, Lumentum about 33% fully diluted;
  TAM $550bn; >$1bn annual run-rate cost synergies; accretive to Marvell non-GAAP EPS in year one; close expected H1 calendar
  2028; Murphy stays chairman and CEO; three Lumentum directors incl. Hurlston join Marvell's seven-member board; Marvell
  preliminary fiscal Q3 2027 revenue consistent with guidance, midpoint kept, range narrowed to +/-2% from +/-5%; joint call 5:00
  PT. Quotes: Matt Murphy, Chairman and CEO of Marvell; Michael Hurlston, President and CEO of Lumentum (verbatim).
- Marvell Form 8-K, Item 1.01, dated 1 Nov 2026, filed 2 Nov (read): merger agreement signed 1 Nov; two-step merger via Java
  Merger Sub I and II; conditions incl. Lumentum holder adoption, Marvell holder approval of the share issuance and a charter
  amendment raising authorised shares, HSR expiry "and the receipt of certain other required regulatory approvals", effective
  S-4; outside date 11:59pm PT 1 Nov 2027, extendable to 1 Feb, 1 May and 1 Aug 2028 if regulatory approvals are outstanding;
  termination fees: Marvell $5.8bn, Lumentum $2.9bn, Marvell regulatory fee $3.2bn.
- Lumentum Q1 fiscal 2027 results, Form 8-K exhibit 99.1, 2 Nov 2026 (read): quarter ended 26 Sep 2026; net revenue $1,262.6m
  vs $1,006.3m (Q4 FY26) and $533.8m (Q1 FY26), +25.5% q/q, +136.5% y/y; GAAP net income $360.3m ($3.54/share); components
  $754.2m, systems $508.4m; GAAP gross margin 51.0%, non-GAAP 53.2%; GAAP op margin 28.5%, non-GAAP 42.3%; cash and short-term
  investments $2.0bn, down $758.8m; Q2 guide $1.575bn-$1.625bn, non-GAAP op margin 45-46%; Hurlston: second major NPO/CPO win
  "backed by purchase commitments exceeding $5 billion"; "approximately $350 million in sequential growth" expected.
FACT-CHECK NOTES: the deal was first seen via search snippets (Bloomberg, Investing.com, StreetInsider, Quiver); every figure
  used was confirmed in the two companies' filings. Bloomberg's "one of the biggest tech tie-ups" framing is not used. The
  release names no regulators beyond the 8-K's HSR reference, so none are named. Aggregator FourWeekMBA seen, not used.
OUR ARITHMETIC: $1,132 / 4.5 = about $251.6 implied Marvell price; $1,132 / 1.239 = about $914 implied unaffected Lumentum price
  (both derived from the companies' rounded figures); fees as share of EV: 5.0%, 2.5%, 2.8%; EV / annualised Q1 revenue
  ($5.05bn) = 22.8x; EV / annualised Q2 guidance midpoint ($6.4bn) = 18.0x; Q2 midpoint minus Q1 = $337m; components 59.7% of
  revenue; board 7 + 3 = 10; first outside date (1 Nov 2027) falls before the expected H1 2028 close.
HERO: Wikimedia Commons, "Lumentum, Westfield Business Park - geograph.org.uk - 7296980.jpg", Derek Harper, CC BY-SA 2.0,
  26 Jul 2021: a Lumentum office building with parked cars, no people. Not used on any sister site (grep of ~/Sites).

---------- 13:20Z CYBERSECURITY: "Eleven hours on someone else's shelf" (sam-porter, house byline) ----------
SOURCES READ:
- Cursor, "Claude Code extension security notice", Cursor Team, 29 Oct 2026, updated 30 Oct 11:30 PT (read): versions 2.1.312
  and 2.1.313 for Windows and macOS, "not developed by Anthropic"; window about 2:27am to 1:35pm PT on 29 Oct; removed on
  detection, audited access, "no other extensions were tampered with", rotated keys, rebuilt the marketplace, worked with the
  host to take the server offline; SSH step "would fail" outside highly unusual circumstances but key, persistence and host
  details still went through; "Uninstalling the extension may not be sufficient"; no user count; no root cause given.
- BleepingComputer, Bill Toulas, 30 Oct 2026 (read): up to 5,000 developers; loader at the start of extension.js; Git email and
  public IP collected; macOS systemsetup check fails without elevation; Windows step run through /bin/sh fails; researchers
  Phorion and OpenSourceMalware; early reports naming npm, Open VSX and the VS Code Marketplace later ruled out; how access was
  obtained is unanswered.
- StepSecurity, Rohan Prabhu, 30 Oct 2026, updated 30 Oct and 1 Nov (read): UTC timeline (09:27 to 20:35 on 29 Oct; C2 taken
  down 30 Oct; static analysis 1 Nov); svc-telemetry Ed25519 key; reverse tunnel every 60 seconds to port 22 via
  134.209.82.225; beacon to port 8099; names (not values) of up to 40 credential-like environment variables; no second stage
  observed; the 2.1.312 build on Open VSX verified clean; Anthropic (David Dworken) says 2.1.313 was never published to Open
  VSX, the Microsoft Marketplace or other official hosts; Felix Rieseberg (Anthropic) quote.
- heise online, Dirk Knop, 30 Oct 2026 (read): Reuters reported up to 5,000 users; fix in 2.1.314 or later; links Cursor's notice.
- Hacker News comment by Felix of Anthropic (item 50304129, read): "it wasn't a compromise of Anthropic's systems or employee
  laptops"; "this only impacts Cursor users". Quoted via StepSecurity's record, which carries the same words.
FACT-CHECK NOTES: Socket's blog returned 403 and is not used. The 5,000 figure is Cursor's initial upper bound as reported by
  BleepingComputer, StepSecurity and Reuters (via heise); Cursor's own notice gives no number, and we say so. No outlet or
  party has said how the attacker obtained publishing access; we say so. Anthropic is the extension's publisher, not the
  compromised party, on every account read; the copy is careful to keep that distinction.
OUR ARITHMETIC: window 09:27 to 20:35 UTC = 11 hours 8 minutes; timeline table is our compilation; "claims vs record" table is
  our comparison of early reports with the later record.
HERO: Wikimedia Commons, "CSS code on a screen (Unsplash).jpg", Sai Kiran Anagani, CC0, 30 Jan 2016: HTML markup on a dark
  editor screen. No people. Not used on any sister site (grep of ~/Sites).

---------- 13:00Z AI: "OpenAI's agents go to the oilfield" (dana-whitfield, house byline) ----------
SOURCES READ:
- ADNOC press release, "ADNOC signs landmark partnership agreement with OpenAI and G42, becoming first energy company to deploy
  OpenAI Frontier technology", 2 Nov 2026, as published on Energy Connects (ADIPEC's news platform) (read): multi-year
  partnership; signing witnessed by Sheikh Khaled bin Mohamed bin Zayed Al Nahyan; first energy company to deploy OpenAI
  Frontier; custom decision-intelligence capability combining OpenAI models with ADNOC's industrial data, on G42's sovereign AI
  infrastructure in the UAE, with human oversight of consequential decisions; first uses field master planning and barrel
  valuation; builds on ENERGYai and G42-ADNOC work through AIQ; cyber defence support via OpenAI's Daybreak Blue; ChatGPT
  Enterprise to more than 40,000 employees, adoption above 97%; more than 200 AI applications and 70 robotics use cases; no
  financial terms. Quotes: Dr Sultan Ahmed Al Jaber; Sam Altman; Mansoor Al Mansoori, CEO, G42 International (verbatim).
- Gulf News, Rahf Youssef, 2 Nov 2026 (read): signed as ADIPEC opened at the Abu Dhabi Energy Centre; Al Jaber said the deal
  would transform field development, asset management and commercial operations; no financial terms.
- CNBC, Ashley Capoot, 5 Feb 2026 (read): Frontier launched as an enterprise platform for building, deploying and managing
  agents, including third-party agents from Google, Microsoft and Anthropic; initial customers Uber, State Farm, Intuit and
  Thermo Fisher Scientific; small set of customers first; no pricing; Sarah Friar: enterprise about 40% of the business, near
  50% by year-end.
FACT-CHECK NOTES: Investing.com's AI-assisted item (Exxon/Chevron executives skipping ADIPEC) seen, not used. A reported
  Mubadala/Inception42/OpenAI agreement rests on a post on X: not used. Unite.ai seen in search, not used (house rule). "First
  energy company" is ADNOC's claim and is attributed.
OUR ARITHMETIC: 5 Feb to 2 Nov 2026 = 270 days; "what the release says and does not say" table is our analysis; none of the
  four launch customers CNBC named is an energy company (our reading of the list).
HERO: Wikimedia Commons, ""Sagadril-1" Oil rig @ Corniche @ Abu Dhabi (16044160715).jpg", Guilhem Vellut, CC BY 2.0,
  14 Dec 2014: a jack-up drilling rig and an orange supply vessel off the Abu Dhabi Corniche. No people visible. Not used on
  any sister site (grep of ~/Sites).

UNIQUENESS: 6-gram overlap with top sources reported in the commit message.
*/
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const AI = P("ai", "AI", "ai", "Photograph via Wikimedia Commons");
const MK = P("markets", "Markets", "markets", "Photograph via Wikimedia Commons");
const CY = P("cybersecurity", "Cybersecurity", "cybersecurity", "Photograph via Wikimedia Commons");

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
const MRVL_PR = "https://investor.marvell.com/news-events/press-releases/detail/1040/marvell-and-lumentum-to-combine-creating-a-category-leader-in-ai-connectivity";
const MRVL_8K = "https://www.sec.gov/Archives/edgar/data/1835632/000119312526442717/d352474d8k.htm";
const LITE_Q1 = "https://www.sec.gov/Archives/edgar/data/1633978/000162828026068655/lite_ex991xq1fy27.htm";

const CURSOR = "https://cursor.com/blog/claude-code-extension-security-notice";
const BLEEP = "https://www.bleepingcomputer.com/news/security/malicious-claude-code-extension-on-cursor-planted-ssh-backdoors/";
const STEPSEC = "https://www.stepsecurity.io/blog/claude-code-extension-trojanized";
const HEISE = "https://www.heise.de/en/news/Claude-Code-extension-infected-with-malware-on-Cursor-marketplace-11506459.html";

const ADNOC_PR = "https://www.energyconnects.com/opinion/thought-leadership/2026/november/adnoc-signs-landmark-partnership-agreement-with-openai-and-g42-becoming-first-energy-company-to-deploy-openai-frontier-technology/";
const GULF = "https://gulfnews.com/uae/abu-dhabi/adnoc-partners-with-openai-and-g42-to-revolutionize-energy-sector-with-ai-at-adipec-2026-1.500732521";
const CNBC_FR = "https://www.cnbc.com/2026/02/05/open-ai-frontier-enterprise-customers.html";

const DEAL_TABLE = table(
  ["Item", "Figure", "Source"],
  [
    ["Exchange ratio", "4.500 Marvell shares per Lumentum share", "Joint release; 8-K"],
    ["Implied value", "About $1,132 a share; $115bn enterprise value", "Joint release"],
    ["Premium", "About 23.9% to unaffected closes on 28 October", "Joint release"],
    ["Ownership after closing", "Marvell holders about 67%, Lumentum holders about 33%", "Joint release"],
    ["Fee if Marvell walks for a better offer", "$5.8bn (5.0% of enterprise value*)", "8-K"],
    ["Fee if Lumentum does", "$2.9bn (2.5%*)", "8-K"],
    ["Fee if regulators block or delay", "$3.2bn, paid by Marvell (2.8%*)", "8-K"],
    ["Outside date", "1 November 2027, extendable to 1 August 2028", "8-K"],
    ["Expected close", "First half of 2028", "Joint release"],
    ["Lumentum revenue, quarter to 26 September", "$1,262.6m, up 136.5% a year", "Lumentum results"],
    ["Price paid per dollar of revenue*", "22.8x annualised last quarter; 18.0x annualised guidance", "Our arithmetic"]
  ],
  "* Komposite's arithmetic on the companies' figures. Annualised revenue is four times the quarter: $5.05bn on the September quarter and $6.4bn on the midpoint of Lumentum's December-quarter guidance. Sources: Marvell and Lumentum joint release and Marvell Form 8-K, 2 November 2026; Lumentum fiscal first-quarter results, 2 November 2026."
);

const CURSOR_TABLE = table(
  ["When (UTC)", "What happened", "Source"],
  [
    ["29 Oct, about 09:27", "Tampered builds 2.1.312 and 2.1.313 appear on Cursor's extension marketplace for macOS and Windows", "Cursor; StepSecurity"],
    ["29 Oct, 20:35", "Cursor removes the builds, takes the marketplace offline and rotates keys", "Cursor; StepSecurity"],
    ["30 Oct", "The attacker's server is taken offline with the hosting provider; Cursor updates its indicators and the affected versions", "Cursor"],
    ["30 Oct", "Early claims that npm, Open VSX and Microsoft's marketplace were hit are ruled out; Cursor was the only source", "BleepingComputer; StepSecurity"],
    ["1 Nov", "StepSecurity publishes a static analysis of the recovered extension code", "StepSecurity"]
  ],
  "Timeline compiled by Komposite from Cursor's security notice (29 October, updated 30 October), StepSecurity's analysis (30 October, updated 1 November) and BleepingComputer (30 October). Cursor gave its times in Pacific time; StepSecurity's UTC conversion is used. The window was 11 hours 8 minutes by our arithmetic."
);

const ADNOC_TABLE = table(
  ["Question", "What ADNOC's release says"],
  [
    ["What is being built?", "A custom \"decision intelligence\" capability on OpenAI Frontier, using OpenAI's models and ADNOC's industrial data"],
    ["Where does it run?", "On G42's sovereign AI infrastructure in the UAE"],
    ["First uses", "Field master planning and valuing each barrel before it is produced"],
    ["Who decides?", "Human experts keep oversight of consequential decisions"],
    ["What it builds on", "ChatGPT Enterprise for more than 40,000 staff; more than 200 AI applications and 70 robotics use cases"],
    ["Value of the deal", "Not disclosed"],
    ["Timetable", "Not disclosed beyond \"multi-year\""]
  ],
  "Komposite's summary of ADNOC's release of 2 November 2026. ADNOC's figures are its own and were not independently verified."
);

export default [

/* ---------- 13:00Z AI ---------- */
AI({ slug: "adnoc-signs-openai-and-g42-to-run-frontier-agents-on-its-oilfields", kick: "Enterprise AI",
  headline: "OpenAI's agents go to the oilfield",
  dek: "ADNOC agreed a multi-year deal on Monday with OpenAI and G42 to run OpenAI's Frontier agent platform on its field planning and crude valuation. No price or timetable was given, and the system will run on G42's servers in the UAE.",
  metaDesc: "ADNOC signed a multi-year deal with OpenAI and G42 on 2 November to use OpenAI Frontier for field planning and barrel valuation. No value was disclosed.",
  author: "dana-whitfield", date: "2026-11-02T13:00:00Z",
  capt: "A jack-up drilling rig and an orange supply vessel in the water off the Corniche in Abu Dhabi, in a file photograph.",
  tags: [
    { name: "Enterprise AI", slug: "enterprise-ai" },
    { name: "Energy", slug: "energy" },
    { name: "Emerging Markets", slug: "emerging-markets" }
  ],
  related: [
    R("/ai/openai-takes-frontier-training-off-the-live-internet/", "OpenAI"),
    R("/markets/nvidia-may-cosign-the-loan-for-its-own-chips/", "AI Infrastructure"),
    R("/ai/apples-ai-reaches-china-two-years-and-a-partner-later/", "Consumer AI")
  ],
  body: [
    `Abu Dhabi National Oil Company has signed OpenAI and G42 to a multi-year partnership to run OpenAI's Frontier agent platform on its oilfield planning and crude valuation, ${L(ADNOC_PR, "ADNOC said on Monday")}. The agreement was signed at ADIPEC, the oil and gas conference in Abu Dhabi, and its value was not disclosed.`,
    `What does the release commit to? The three companies will build a custom "decision intelligence" capability that combines OpenAI's models with ADNOC's own industrial data, and it will run on hardware operated by G42 inside the UAE, according to the release. G42 is an Abu Dhabi AI group, and the release says it has worked with ADNOC for years through AIQ. ADNOC says human experts will keep oversight of consequential decisions. The release says no other energy company has yet deployed OpenAI Frontier. That is ADNOC's description, and it could not be independently verified.`,
    `Two uses come first. The first is field master planning, which ADNOC says will merge reservoir, facility and economic studies into a single decision, drawing on data from thousands of wells, several reservoirs layered on one another and hundreds of installations above ground. The second is what it calls barrel valuation: connected agents would forecast supply, demand, prices and margins across production, refining, logistics, sales and trading, so that each barrel is valued before it is produced. The release also mentions cyber defence support through an OpenAI initiative called Daybreak Blue, without detail.`,
    ADNOC_TABLE,
    `The executives spoke in the release. "This is industrial AI at scale, pioneered here in Abu Dhabi," said Dr Sultan Ahmed Al Jaber, the UAE's Minister of Industry and Advanced Technology and ADNOC's managing director and group chief executive. "Together, we're shaping the future of AI-enabled energy," said Sam Altman, OpenAI's chief executive. Mansoor Al Mansoori, chief executive of G42 International, said: "You should not have to use AI to benefit from it." Al Jaber said the partnership would change ADNOC's field development, asset management and commercial operations, ${L(GULF, "Gulf News reported")}. Sheikh Khaled bin Mohamed bin Zayed Al Nahyan, Abu Dhabi's crown prince, witnessed the signing.`,
    `What is Frontier? OpenAI launched it on 5 February as a platform for building, deploying and managing AI agents, including agents made by Google, Microsoft and Anthropic, ${L(CNBC_FR, "CNBC reported at the time")}. It opened to a small set of customers first. The four that CNBC named were Uber, State Farm, Intuit and Thermo Fisher Scientific, none of them an energy company. OpenAI did not give pricing. Its chief financial officer, Sarah Friar, told CNBC then that business customers made up about 40 per cent of OpenAI's business and that she expected the share to approach 50 per cent by the end of the year.`,
    `By our arithmetic, ADNOC's signing comes 270 days after that launch. The company is not new to OpenAI's products: it says it has given more than 40,000 employees ChatGPT Enterprise, with adoption above 97 per cent, and counts more than 200 AI applications and 70 robotics uses either in service or being built. Those figures are ADNOC's own and were not independently verified. The new work also builds on ENERGYai, the subsurface AI platform ADNOC developed with AIQ.`,
    `What the release leaves out matters as much. It gives no contract value, no timetable beyond "multi-year", no measure of the savings it expects and no detail of how OpenAI's models will be hosted on G42's hardware. The claim that oilfield planning can be compressed by agents is a projection, and the release offers no test results.`,
    `Why it matters: Frontier's pitch is that agents can work across a company's systems rather than inside one tool. A national oil company is a large test of that idea, and running the system on G42's machines in the UAE keeps the data inside the country. OpenAI's own security posture has been under scrutiny: Komposite reported last month that it would <a href="/ai/openai-takes-frontier-training-off-the-live-internet/">train its frontier models without live internet access</a> after a breach. The financing of the hardware behind such deals is its own story, as Nvidia's <a href="/markets/nvidia-may-cosign-the-loan-for-its-own-chips/">talks to guarantee Nscale's debt</a> showed on Sunday.`
  ]
}),

/* ---------- 13:20Z CYBERSECURITY ---------- */
CY({ slug: "a-tampered-claude-code-extension-sat-on-cursors-marketplace-for-eleven-hours", kick: "Supply Chain",
  headline: "Eleven hours on someone else's shelf",
  dek: "A tampered copy of Anthropic's Claude Code extension was served from Cursor's marketplace for about 11 hours on 29 October. It tried to plant an SSH backdoor. Cursor has not said how the attacker got publishing access.",
  metaDesc: "A tampered Claude Code extension sat on Cursor's marketplace for 11 hours on 29 October, trying to plant an SSH backdoor. Its origin is unexplained.",
  author: "sam-porter", date: "2026-11-02T13:20:00Z",
  capt: "Lines of HTML markup in colour on a dark code editor screen, in a file photograph.",
  tags: [
    { name: "Supply Chain", slug: "supply-chain" },
    { name: "Developer Tools", slug: "developer-tools" },
    { name: "Cybersecurity", slug: "cybersecurity" }
  ],
  related: [
    R("/cybersecurity/a-preview-pane-that-could-read-the-whole-disk/", "AI Security"),
    R("/cybersecurity/railway-tells-every-customer-to-rotate-its-keys/", "Breach"),
    R("/cybersecurity/chainalysis-reports-its-own-intruder/", "Breach")
  ],
  body: [
    `A tampered copy of Anthropic's Claude Code extension was available on Cursor's extension marketplace for about 11 hours on 29 October and tried to install a hidden SSH backdoor on developers' machines, ${L(CURSOR, "Cursor said in a security notice")}. Versions 2.1.312 and 2.1.313 for macOS and Windows were affected. Cursor said the builds "were not developed by Anthropic".`,
    `Cursor is an AI code editor built on Microsoft's open-source VS Code, and it runs its own marketplace for the extensions its users install. Claude Code, Anthropic's coding agent, is offered there as an extension. The malicious builds were live from about 2:27am to 1:35pm Pacific time, Cursor said. Cursor removed them on detection, audited access, rotated its keys, rebuilt the marketplace and brought it back online, and it worked with the hosting provider to take the attacker's server offline. It said it found no other tampered extensions. Its notice does not say how many people installed the builds, or how the attacker obtained the access to publish them.`,
    `What did the code do? A loader added to the top of the extension's main file ran as soon as the extension loaded, ${L(BLEEP, "BleepingComputer reported")}, citing the researchers at Phorion and OpenSourceMalware who found it. According to ${L(STEPSEC, "a static analysis by StepSecurity")}, it added an attacker's key named "svc-telemetry" to the machine's list of authorised SSH keys, tried to switch on the SSH server, and every 60 seconds tried to open a reverse tunnel to a server at 134.209.82.225. It set itself to survive a restart through a LaunchAgent on macOS and a scheduled task or startup script on Windows. It also sent the machine's name, user name, Git email address and the names, but not the values, of up to 40 environment variables that looked like credentials.`,
    CURSOR_TABLE,
    `How far did it get? Less far than it tried. Cursor said the step that switches on SSH "would fail" outside highly unusual circumstances, but that the extension still added the key, installed its persistence and sent host details. BleepingComputer traced the failures to coding errors: on macOS the remote-login check needs administrator rights it did not have, and on Windows the setup ran through a Unix shell that standard Windows machines do not have. StepSecurity found no second-stage download and no access to Claude or editor data, and stressed that installing an affected version does not by itself prove a machine was compromised.`,
    `The numbers are thinner than the coverage. Up to 5,000 users may have been exposed, ${L(HEISE, "heise reported")}, citing Reuters, and BleepingComputer and StepSecurity both describe that as Cursor's initial upper bound. Cursor's own notice gives no figure. Early reports also said the tampered build had reached npm, the Open VSX registry and Microsoft's marketplace. That was ruled out: Cursor was the only distribution point, and StepSecurity verified the 2.1.312 build on Open VSX as clean.`,
    `Anthropic says its own systems were not breached. Felix Rieseberg of Anthropic said "it wasn't a compromise of Anthropic's systems or employee laptops", and that the versions on its official channels were unaffected, StepSecurity recorded. David Dworken of Anthropic confirmed that 2.1.313 was never published to Open VSX, Microsoft's marketplace or its other official hosts, and the company moved straight to version 2.1.314, which users should now be on. Cursor's advice for anyone who installed during the window is to look for the svc-telemetry key, remove the persistence and tunnel processes, and rotate credentials from a trusted machine. "Uninstalling the extension may not be sufficient," it said.`,
    `Why it matters: a developer's machine holds the keys to everything else, and an extension runs with the developer's rights. Here the publisher's code was clean and its official channels were untouched; the weak point was a third-party store that redistributes its work, and that store has not yet explained how it was used. Cursor has had other security questions in recent days: researchers said last week that browsers built into five AI coding tools, Cursor's among them, <a href="/cybersecurity/a-preview-pane-that-could-read-the-whole-disk/">broke basic security rules</a>; Cursor's has since been fixed. Railway's customers were told this month to <a href="/cybersecurity/railway-tells-every-customer-to-rotate-its-keys/">rotate every key</a> after an unauthorised party may have decrypted some of their environment variables, the same class of material a reverse tunnel into a developer's laptop could reach.`
  ]
}),

/* ---------- 13:40Z MARKETS (LEAD) ---------- */
MK({ slug: "marvell-to-buy-lumentum-for-115bn-in-stock", kick: "M&A",
  headline: "A hundred and fifteen billion, paid in shares",
  dek: "Marvell agreed on Monday to buy Lumentum in an all-stock deal that values the AI laser maker at $115bn, or about $1,132 a share. The companies expect to close in the first half of 2028, after a date the contract treats as the first deadline.",
  metaDesc: "Marvell will buy Lumentum in an all-stock deal valuing it at $115bn, 4.5 shares each. Marvell owes $3.2bn if regulators block it. Close due H1 2028.",
  author: "priya-raghavan", date: "2026-11-02T13:40:00Z",
  capt: "A Lumentum office building on Westfield Business Park, with cars parked outside, in a file photograph.",
  tags: [
    { name: "Capital Markets", slug: "capital-markets" },
    { name: "AI Infrastructure", slug: "ai-infrastructure" },
    { name: "Semiconductors", slug: "semiconductors" }
  ],
  related: [
    R("/ai/lumentums-sold-out-date-moves-to-2029/", "Optical"),
    R("/markets/nvidia-may-cosign-the-loan-for-its-own-chips/", "AI Infrastructure"),
    R("/markets/data-centres-up-78-per-cent-pcs-down-12/", "Earnings")
  ],
  body: [
    `Marvell Technology has agreed to buy Lumentum Holdings, which makes lasers and optical parts for AI data centres, in an all-stock deal that values Lumentum at $115bn, ${L(MRVL_PR, "the two companies said on Monday")}. Lumentum shareholders will receive 4.500 Marvell shares for each share they hold, worth about $1,132 a share. That is a premium of about 23.9 per cent to both companies' closing prices on 28 October, which they describe as the last trading day before speculation about a deal began.`,
    `The merger agreement was signed on Sunday, 1 November, ${L(MRVL_8K, "according to Marvell's filing")} with the Securities and Exchange Commission. Marvell will absorb Lumentum through two merger subsidiaries, and after closing its shareholders will own about 67 per cent of the combined company and Lumentum's about 33 per cent. Both boards approved the deal unanimously. It needs a vote of Lumentum's shareholders, and Marvell's shareholders must approve both the new shares and a change to Marvell's charter raising the number of shares it is allowed to issue. It also needs the expiry of the US antitrust waiting period under the Hart-Scott-Rodino Act "and the receipt of certain other required regulatory approvals", which the filing does not name.`,
    `The contract prices the risk of failure. If Marvell's board withdraws its recommendation or walks away for a better offer, Marvell pays Lumentum $5.8bn; the reciprocal fee for Lumentum is $2.9bn. If the deal is blocked or refused by regulators, or runs out of time, while only the regulatory conditions remain open, Marvell owes Lumentum $3.2bn. The first deadline in the agreement is 11:59pm Pacific time on 1 November 2027, which can be extended to 1 February, 1 May and 1 August 2028 if regulatory approvals are still outstanding. The companies expect to close in the first half of 2028. By our reading, that timetable assumes at least one of those extensions will be needed.`,
    `The executives framed the deal as a bet on light replacing copper. "AI infrastructure is undergoing a fundamental architectural shift toward optical connectivity, creating an opportunity that comes along once in a generation," said Matt Murphy, Marvell's chairman and chief executive, who will run the combined company. "Joining Marvell creates a company uniquely positioned to capitalize on a market opportunity of $550 billion and generate significant, sustainable stockholder value," said Michael Hurlston, Lumentum's president and chief executive. The $550bn market estimate is the companies' own. Hurlston and two other Lumentum directors will join Marvell's board, which now has seven members, taking it to ten by our count.`,
    DEAL_TABLE,
    `What is Marvell buying? On the same morning ${L(LITE_Q1, "Lumentum reported")} revenue of $1,262.6m for the quarter to 26 September, up 136.5 per cent from a year earlier, with net income of $360.3m. Components such as lasers made up $754.2m and systems $508.4m. Hurlston said Lumentum had won a second major order for near-packaged or co-packaged optics, which put optical connections next to or inside the chip package, "backed by purchase commitments exceeding $5 billion". Lumentum forecast $1.575bn to $1.625bn of revenue for the December quarter; by our arithmetic the midpoint is $337m above the quarter just reported.`,
    `By our arithmetic, $115bn is 22.8 times Lumentum's annualised September-quarter revenue, and 18.0 times the annualised midpoint of its guidance. The companies' figures also imply a Marvell share price of about $251.6 and an unaffected Lumentum price of about $914, though both are derived from rounded numbers. In return, the companies promise more than $1bn a year of cost savings at full run rate and say the deal will add to Marvell's adjusted earnings per share in its first year after closing. Those are forecasts. Marvell said its revenue for the quarter now under way would be consistent with its earlier guidance, narrowing the range to plus or minus 2 per cent from 5 per cent, without giving a figure.`,
    `Lumentum's pitch to buyers has been scarcity. Its chief executive said last month that its AI optical parts were <a href="/ai/lumentums-sold-out-date-moves-to-2029/">sold out to early 2029</a>, a year later than he had said in the spring. Because the price is paid in shares, no cash changes hands for Lumentum's stock, at a time when other parts of the AI supply chain are leaning on borrowed money, as Nvidia's talks to <a href="/markets/nvidia-may-cosign-the-loan-for-its-own-chips/">guarantee Nscale's financing</a> showed on Sunday.`,
    `Why it matters: an AI data centre is increasingly limited by how fast chips can talk to each other, and the companies argue that copper is reaching its physical limits. Combining Marvell's chip design with Lumentum's lasers and its indium phosphide manufacturing would put more of that link under one roof. That is also what antitrust reviewers will look at, and the contract gives them until August 2028 before Marvell's $3.2bn fee comes into play.`
  ]
}),

];
