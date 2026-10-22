/*
Komposite News, batch 97: Thursday 22 October 2026, round 20 (one more story, first slot under the lead). Fact-checked against primary documents.

---------- 18:30Z CYBERSECURITY: "AI agents tried 2,250 tenants through one backup vendor" (sam-porter) ----------
SOURCES READ (full text, downloaded and read locally, not tool summaries):
- Microsoft Threat Intelligence, Microsoft Security Blog, 21 Oct 2026: "Storm-0940 uses ARTEX agentic AI ... ConnectWise supply chain compromise".
- ConnectWise Trust Center advisory, "Cloud Backup (formerly known as SkyKick) Service Interruption": every update from Fri 16 Oct 17:47 UTC
  to Thu 22 Oct 13:00 UTC, plus FAQs and the 18 Oct technical guidance.
- TechCrunch, 22 Oct 2026 (In Brief): "Chinese hackers spied on thousands of companies after breaching IT giant ConnectWise".
FACT-CHECK NOTES:
- "More than 2,250 tenants at 2,900 sign-in attempts per minute": Microsoft, verbatim. TechCrunch's "hack into around 2,250 organizations" overstates
  it; Microsoft says "attempt to sign-in". Headline says "tried".
- Password spray (10-14 Oct, 144.172.64[.]99): 327 accounts at eight organisations, 151,000+ failed logons, peak 11 Oct at 2,900 failures a minute,
  111,000+ in one day, lockouts ~98%, no successful authentication. All Microsoft.
- ADDED (draft omitted it): with the stolen app identities the agents did authenticate in some tenants and went on to Graph reconnaissance,
  application credential changes and changes to identities, groups and privileged roles; Microsoft found "multiple customer environments" with
  follow-on activity, incl. an app self-assigning Global Administrator (detections table). Microsoft's caveat on data access kept.
- Draft said "Cloud Backup app"; Microsoft says identities of "multiple ConnectWise cloud applications" (three app IDs in the queries: Cloud Backup,
  MS Teams, MS Graph; text says four). ConnectWise disabled seven application identities at 07:00 UTC on 17 Oct.
- Timeline from ConnectWise: discovery 14 Oct (FAQ); first advisory Fri 16 Oct 17:47 UTC; Sat 17 Oct 05:01 UTC shutting off Cloud Backup access;
  17 Oct certificates revoked; SaaS Security and Cloud Management suspension first appears in the 18 Oct updates ("by 18 October");
  19 Oct full account/credential reset; Wed 21 Oct 19:00 UTC phased restoration begun, "several days".
- ConnectWise quotes now verbatim from the Thu 22 Oct 13:00 UTC update (no serial commas in that version).
- "Agents are not constrained by factors affecting humans": Microsoft, verbatim.
- [VERIFY] CrowdStrike/South Korea: TechCrunch does not name CrowdStrike. Microsoft itself says public reporting in October tied ARTEX to breaches
  of Korean financial institutions; attributed to Microsoft, CrowdStrike cut.
- Draft's "Railway ... on Thursday" wrong: Railway's notice was Wednesday 21 Oct (our story, 22 Oct). Fixed.
- No prior Komposite story on ConnectWise, SkyKick or Storm-0940 (repo grep). ARTEX appears only in passing in the Denmark CPR story.
HERO: Unsplash VYfxkePredI, Nick (@nkend): an opened hard disk drive showing its platters. No people. Not used before; no other hard-drive
  photo on the site.
*/
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

const MS = "https://www.microsoft.com/en-us/security/blog/2026/10/21/storm-0940-uses-artex-agentic-ai-connectwise-supply-chain-compromise/";
const CW = "https://www.connectwise.com/company/trust/advisories#cloudbackup";
const TC = "https://techcrunch.com/2026/10/22/chinese-hackers-spied-on-thousands-of-companies-after-breaching-it-giant-connectwise/";

export default [

/* ---------- 18:30Z CYBERSECURITY ---------- */
CY({ slug: "microsoft-says-agents-hit-2250-tenants-through-connectwise", kick: "Supply Chain",
  headline: "AI agents tried 2,250 tenants through one backup vendor",
  dek: "Microsoft said a China state-aligned group used an open-source AI agent framework after breaking into ConnectWise's cloud backup service, then tried to sign in to more than 2,250 customer tenants. ConnectWise has suspended the service and says its backup archives show no sign of compromise.",
  metaDesc: "Microsoft said China state-aligned Storm-0940 used the ARTEX AI agent framework after compromising ConnectWise Cloud Backup to try sign-ins at over 2,250 tenants.",
  author: "sam-porter", date: "2026-10-22T18:30:00Z",
  capt: "An opened hard disk drive showing its platters, in a file photograph.",
  tags: [
    { name: "Supply Chain", slug: "supply-chain" },
    { name: "AI Agents", slug: "ai-agents" },
    { name: "Cybersecurity", slug: "cybersecurity" }
  ],
  related: [
    R("/cybersecurity/everyone-shares-the-same-vendors/", "Supply Chain"),
    R("/cybersecurity/an-ai-agent-logged-in-then-kept-looking/", "AI Security"),
    R("/cybersecurity/railway-tells-every-customer-to-rotate-its-keys/", "Cloud Security")
  ],
  body: [
    `A China state-aligned group used AI agents to try to sign in to more than 2,250 Microsoft 365 customer tenants after compromising ConnectWise's Cloud Backup service, ${L(MS, "Microsoft said on Wednesday")}. It put the pace at 2,900 sign-in attempts a minute.`,
    `Microsoft tracks the group as Storm-0940 and says it has been active since 2021, stealing data from organisations in many industries. It assessed that the group was behind the ConnectWise compromise. ConnectWise, which sells IT management software mainly to managed service providers, has suspended Cloud Backup, a service formerly called SkyKick that copies customers' Microsoft 365 data. A tenant is one organisation's own Microsoft 365 environment.`,
    `The route in was the trust customers had already given the vendor. After taking control of the identities of several ConnectWise cloud applications, Microsoft said, the attackers' agents used those app credentials to authenticate to customer environments, with no interactive user sign-in needed. In some tenants they went further, into reconnaissance through Microsoft Graph, changes to application credentials that can act as a backdoor, and changes to identities, groups and privileged roles. Microsoft said it found "multiple customer environments" with such follow-on activity, but cautioned that an affected application, or even a successful sign-in, "does not necessarily indicate" that data was accessed or taken. ${L(TC, "TechCrunch reported")} that the credentials could let the hackers reach emails and other files.`,
    `The tool was ARTEX, which Microsoft describes as an open-source penetration-testing framework of AI agents that can use any AI model and run an attack from reconnaissance to data theft with little human input. Storm-0940 has used it since at least September against organisations in sectors from aerospace and defence to think tanks, Microsoft said, in several cases reaching privileged cloud access less than three hours after first targeting. Microsoft also noted public reporting this month that ARTEX was used in data breaches at Korean financial institutions. Agents "are not constrained by factors affecting humans", it wrote: they work around the clock and try several paths at once.`,
    `Not everything worked. Between 10 and 14 October, Microsoft said, infrastructure linked to the group ran an automated password-spray campaign against 327 accounts at eight organisations, logging more than 151,000 failed sign-ins, over 111,000 of them on a single day. Lockouts made up nearly 98 per cent of the activity, and Microsoft saw no successful authentication. ConnectWise's own advisory says it discovered the intrusion on 14 October and first published a notice on Friday 16 October. On 17 October it shut off Cloud Backup access, disabled seven ConnectWise application identities and revoked the certificates used by the affected connections; by 18 October it had also suspended two linked products, SaaS Security and Cloud Management. It reset all accounts and credentials in the affected environment on 19 October and began a phased restoration on Wednesday, which it expects to take several days.`,
    `In its update on Thursday, ${L(CW, "ConnectWise said")}: "Existing backup archives remain encrypted, isolated and preserved, with no indication of compromise." It added that it has "no indication that other ConnectWise products, services or offerings are impacted by this incident". It has said its systems cannot show whether individual customers' Microsoft 365 tenants were affected, so each must be reviewed. Those are the company's statements, and Komposite has not independently verified them.`,
    `Microsoft's advice is specific: keep the affected ConnectWise connections disabled until ConnectWise issues formal restoration instructions, and do not delete the enterprise applications as a first response, so that evidence survives. It told customers to search every tenant for the applications by ID rather than display name, and to review service-principal sign-ins, the log of app-only logins, from at least 15 October, or from 1 October where records allow.`,
    `Why it matters: the entry route, a vendor's stored credentials, is familiar; the speed is not. Microsoft's figures describe an automated sweep across thousands of tenants that left defenders little time to respond, even though most of the targeting failed. As we reported, <a href="/cybersecurity/everyone-shares-the-same-vendors/">shared vendors</a> concentrate this kind of risk, and Railway's warning on Wednesday that <a href="/cybersecurity/railway-tells-every-customer-to-rotate-its-keys/">every customer should rotate its keys</a> is another case of one platform holding many companies' secrets.`
  ]
}),

];
