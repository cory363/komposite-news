/*
Komposite News: batch 118: published 5 Nov 2026 (approved by Cory). Client feature on Dr. Richard Berry and Maple Health
Direct Primary Care, Mentor, Ohio. Komposite angle: the technology and market side (the tools a membership practice runs on,
where AI fits when a practice is paid for time, and employers as a buyer category). Cranberry (operator economics) and The
Script Pad (physician to physician) carry the other two angles. Previewed on branch preview/berry (alias berry-preview);
approved and published 5 Nov 2026, wired into all index surfaces.

SOURCES READ (2 Nov 2026):
- maplehealthdpc.com home: 8667 Tyler Blvd, Mentor, OH. "Complete 24/7 access to your care team - in clinic, video, voice,
  text, email." Same-day and next-day appointments. "Enroll Now" opens maplehealthdpc.atlas.md/enrollment. No app, portal,
  billing vendor or AI named anywhere on the site.
- maplehealthdpc.com/direct-primary-care: "Low patient-physician ratio (no more than 600 patients - 20% of what a typical
  family clinician oversees.)"; traditional care "Usually, 2,000 to 3,000 patients per clinician", "Average appointment time
  of 10 to 15 minutes".
- maplehealthdpc.com/health-plans: PA memberships $70/$80/$90 a month, Dr. Berry $125, joiner $80 per person, $200 family cap.
- maplehealthdpc.com/employers: $90/month per adult, $60 joining fee, "Groups as small as 2", 60+ employees: PA on site one
  full day a month, "extended visits (approximately 60 minutes)", higher-deductible plan "with lower premiums" claim, no figures.
- atlas.md: "EMR Software for Direct Care Medicine"; subscription billing, patient online payment, self-booking, video calls
  from the EMR, texts and images archived to the chart, in-house pharmacy dispensing via DrFirst/Rcopia.
- AAFP, 2026 Direct Primary Care Data Brief (PDF, file dated 13 Oct 2026): 313 respondents, 9.3% response rate, 167 in DPC;
  Atlas.md top EHR 26% (Elation 53% in 2022, 26% in 2024); 66% adopted AI-enabled tools, 49% using AI clinically; e-visits
  13/week (11 in 2024, 7 in 2022); average panel 504 (402 in 2024); 42.3 work hours, 24.5 face to face; 55% employer
  contracts (65% 2022, 63% 2024); by employer size <10: 69%, 10-25: 59%, 26-100: 40%, 101-250: 20%, >250: 22%; 26% had
  employers requesting data, 95% of those visit counts, 23% quality measures; top challenges panel growth 40%, nonvisit care
  burden 33%, revenue stability 29%; 47% lower earnings, 30% higher.
- MedCity News, 19 Aug 2025 (Marissa Plescia): Business Group on Health 2026 survey, median 9% projected cost trend, 7.6%
  after plan design changes, 121 employers.
- DPC News, 24 Nov 2023 (Debbie Farrago): Royal Marine Commando, Leicester training, MetroHealth residency; quote "When I say
  access, that means you can text, call, or email, and you'll get a response right away, around the clock."
QUOTES FROM HIS WRITTEN ANSWERS (questionnaire, exact words): the AI line; "fewer administrative barriers between patients and
their clinicians"; "Primary care shifting from transactions to subscriptions."; "is paid to keep a patient cared for over
time..."; the employer-funded primary care lines. v3 (4 Nov 2026) revised to Dr. Berry's notes: no volume or selling
framing, PAs manage their own panels in a collaborative team, employer DPC as an extension of the existing model, no
financially-unproven framing (practice operating since 2022). v4: positive framing, vision line,
BGH 2026 survey 14% DPC / 35% on-site or near-site (BGH resource page, his citation), bio per his own account, employer-contract
trend row and "real innovation" quote dropped (Cranberry uses it). Waitlist and PA-panel facts from his own revised text. Founding year 2022 is his own account. The BGH 14% figure is not used (not confirmed).
PHOTO: Unsplash SJwYvNVW1qY (photo-1676311522524-fa7c0bffd644), Bermix Studio, Unsplash License. Stethoscope on a smartphone,
no people. Not used anywhere else in ~/Sites (grep 2 Nov).
v4 (4 Nov 2026): moved to Business (/business/), kicker Health Care, Enterprise tags dropped, Atlas.md cut to two
sentences, AI to one paragraph, Copilot link cut. Sources added and opened: BenefitsLink BGH press release 27 Aug 2026
(9.2% median 2027, 8% after plan design, 60% elevating prevention and primary care, 127 employers); InsuranceNewsNet
20 Aug 2025 (35% primary care at on-site centres, prior survey); maplehealthdpc.com/health-plans (prices, waivers,
"Dr. Berry now has a waitlist"); /direct-primary-care (30 to 45 minute average visits); Mimi Vanderhaven, Mary Malik,
9 Feb 2026 (PAs Courtney Kozek and Jordan Smith welcoming new patients, 10-12% savings for large companies, one hour
physicals, 30 minute follow-ups); WKYC 2023 (about 400 patients 13 months after opening, 8 to 10 patients a day: page
403s, confirmed via search index text); AAFP brief re-read (55% from 63% 2024, 65% 2022, 22% >250, 40% panel growth,
0.61 to 1.29 non-physician clinicians with independent panels). BGH 14% DPC figure dropped (no openable source).
PA line is Dr. Berry's own wording from his revised Cranberry text.
*/
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "unsplash-SJwYvNVW1qY", origW: 1400, origH: 933, alt: "A stethoscope chest piece resting on the screen of a smartphone on a wooden table", credit: "Bermix Studio via Unsplash", capt: o.capt, creditLine } });
const L = (href, text) => `<a href="${href}" rel="noopener">${text}</a>`;

const MONTHS = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
const R = (href, kick) => {
  const f = href.replace(/^\//, "") + "index.html";
  const h = fs.readFileSync(f, "utf8");
  const title = h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1].replace(/&amp;/g, "&");
  const d = h.match(/datePublished":"(\d{4})-(\d\d)-(\d\d)/);
  return { href, kick, title, ago: `${MONTHS[+d[2] - 1]} ${+d[3]}, ${d[1]}` };
};

const MAPLE_HOME = "https://www.maplehealthdpc.com/";
const MAPLE_DPC = "https://www.maplehealthdpc.com/direct-primary-care";
const MAPLE_EMP = "https://www.maplehealthdpc.com/employers";
const MAPLE_PLANS = "https://www.maplehealthdpc.com/health-plans";
const AAFP = "https://www.aafp.org/assets/image/upload/v1792512986/pdf_dpc26_data_brief.pdf";
const BGH27 = "https://benefitslink.com/press-release/56445";
const INN = "https://insurancenewsnet.com/innarticle/employers-brace-for-steep-health-care-increases-in-2025-2026";
const WKYC = "https://www.wkyc.com/article/news/health/health-hub/maple-health-dpc-mentor-subscription-based-health-care-model/95-60b4bfc1-6cdb-4c08-90e0-28547dd82299";
const MIMI = "https://www.mimivanderhaven.com/health-care-that-works-for-real-life";

const TH = (t) => `<th style="text-align:left;border-bottom:2px solid #222;padding:6px 8px">${t}</th>`;
const TD = (t) => `<td style="text-align:left;border-bottom:1px solid #ddd;padding:6px 8px;vertical-align:top">${t}</td>`;
const ROW = (...c) => `<tr>${c.map(TD).join("")}</tr>`;
const TABLE = `<div class="datatable" style="overflow-x:auto;margin:18px 0;max-width:calc(100vw - 32px)"><table style="border-collapse:collapse;width:100%;font-size:15px"><thead><tr>${TH("Direct primary care practices")}${TH("2022")}${TH("2024")}${TH("2025")}</tr></thead><tbody>`
  + ROW("Share with employer contracts", "65%", "63%", "55%")
  + ROW("Average e-visits a week", "7", "11", "13")
  + ROW("Average patient panel", "n/a", "402", "504")
  + ROW("Practices using AI-enabled tools", "n/a", "n/a", "66%")
  + `</tbody></table></div>`;

const TAGS = [{ name: "AI", slug: "ai" }];
const RELATED = () => [
  R("/business/nineteen-months-three-million-texans/", "Health Data"),
  R("/cybersecurity/quest-says-patient-records-were-reached-through-its-ordering-portal/", "Breach")
];
const CAPT = "A stethoscope on a smartphone, in a file photograph. Membership practices promise access by phone, text and video between visits.";

const PA_LINE = `"Physician assistants at Maple Health manage their own patient panels within a collaborative clinical team rather than functioning simply as a way to increase visit volume," Dr. Berry wrote.`;
const AI_PARA = (attr) => `In a fee-for-service clinic, software tends to justify itself by helping a practice bill more encounters. In a membership practice the fee covers the relationship, so a tool earns its place by giving clinicians time back for patients. Dr. Berry put his test in one sentence. "AI should increase the amount of doctor-patient interaction, not replace doctors," he wrote${attr ? " in answers to questions from Komposite News" : ""}. Two in three respondents to the AAFP survey said their practices had adopted AI-enabled tools, and 49 per cent used AI for clinical purposes.`;
const BGH_PARA = `Large employers are looking for ways to manage rising costs. In Business Group on Health's 2027 employer survey of 127 companies, respondents projected a median rise of 9.2 per cent in health care costs for 2027, or 8 per cent after plan design changes, and 60 per cent said they were elevating prevention and primary care, ${L(BGH27, "according to the group's announcement")}. In last year's survey, 35 per cent said they would provide primary care at on-site health centres, ${L(INN, "InsuranceNewsNet reported")}.`;
const BIO = `Dr. Richard Berry, a family physician, founded the practice in 2022 and is its owner and chief executive. Before medicine, by his own account, he spent six years in the British Royal Marines, including tours in Afghanistan and Iraq. He trained at Leicester Medical School in England and completed his family medicine residency at MetroHealth in Cleveland.`;
const CLOSE = `Dr. Berry described the access promise to DPC News in 2023. "When I say access, that means you can text, call, or email, and you'll get a response right away, around the clock," he said. Maple Health has run on individual memberships since 2022, with a small panel and a collaborative clinical team. The open question is whether that model can scale from individual memberships into employer-sponsored primary care.`;

const BIZ = P("business", "Business", "business", "Photograph via Unsplash");
const BASE = { kick: "Health Care", author: "dana-whitfield", date: "2026-11-05T19:55:00Z", capt: CAPT, tags: TAGS };

export default [

BIZ({ ...BASE, slug: "six-hundred-patients-and-a-text-thread",
  headline: "Six hundred patients and a text thread",
  dek: "Maple Health, a direct primary care practice in Ohio, offers members round-the-clock access to their care team by text, video and email. Its founder says AI should add time with patients, not replace doctors, as the practice expands direct primary care to employers.",
  metaDesc: "An Ohio direct primary care practice caps panels at 600 and answers by text and video. What it runs on, where AI fits and how employers come in.",
  related: RELATED(),
  body: [
    `Patients at ${L(MAPLE_HOME, "Maple Health")} can reach their care team by text, video, phone or email at any hour. Each clinician keeps no more than 600 of them, ${L(MAPLE_DPC, "the practice's website says")}, against the "2,000 to 3,000 patients per clinician" it calls usual in traditional care.`,
    `The Mentor, Ohio, practice runs on direct primary care, a membership model. Patients pay a flat monthly fee, and the practice does not bill an insurer for each visit.`,
    `That model sets technology a different test. In a fee-for-service clinic, software tends to justify itself by helping a practice bill more encounters. When the fee covers the relationship, a tool earns its place only by giving clinicians time back for patients.`,
    `Dr. Richard Berry, a family physician, founded the practice in 2022 and is its owner and chief executive. He spent six years in the British Royal Marines, he says, including tours in Afghanistan and Iraq, before training at Leicester Medical School in England and completing his family medicine residency at MetroHealth in Cleveland.`,
    `Since then the practice has built its care around round-the-clock access, a small panel and a collaborative team. Direct primary care can restore "time, continuity, communication, and a stronger focus on prevention rather than simply reacting to illness," Dr. Berry said.`,
    `Members choose their clinician. Memberships with one of the practice's physician assistants run $70 to $90 a month, depending on age. Membership with Dr. Berry costs $125, according to ${L(MAPLE_PLANS, "the practice's plans page")}. Two new doctors join the practice in April, which Dr. Berry said will give it more than enough room to take on new patients. "Physician assistants at Maple Health manage their own patient panels within a collaborative clinical team rather than functioning simply as a way to increase visit volume," he said.`,
    `He sees a broader shift under way. "Primary care is shifting from transactions to subscriptions," he said. A membership practice, in his view, "is paid to keep a patient cared for over time, whether the work happens in the office, by phone, by message, or through proactive follow-up."`,
    `<h2>What it runs on</h2>`,
    `Maple Health's home page promises "complete 24/7 access to your care team" in the clinic and by video, voice, text and email, with same-day and next-day appointments. Its "Enroll Now" button opens a sign-up page hosted by Atlas.md, which calls itself "EMR Software for Direct Care Medicine" and offers subscription billing, self-booking, video visits and text messages filed to the patient's chart. Atlas.md was the records system most used by respondents to the American Academy of Family Physicians' ${L(AAFP, "2026 direct primary care data brief")}, at 26 per cent.`,
    `The brief drew on 313 family physicians who had engaged with the academy's direct primary care material, a 9.3 per cent response rate. Of those, 167 were practising in the model.`,
    TABLE,
    `<strong>Komposite analysis.</strong> The AAFP figures show care moving online. The average practice logged 13 e-visits a week in 2025, almost double the 2022 figure.`,
    `<h2>Where AI fits</h2>`,
    `Dr. Berry's test for AI is simple. "AI should increase the amount of doctor-patient interaction, not replace doctors," he said. Two in three AAFP respondents said their practices had adopted AI-enabled tools, and 49 per cent used AI for clinical purposes. His broader goal is a system "with fewer administrative barriers between patients and their clinicians," he said.`,
    `<h2>The employer market</h2>`,
    `Maple Health is expanding direct primary care to employers, an extension of the model it already runs. Its ${L(MAPLE_EMP, "employer page")} offers a business membership at $90 a month per adult with a $60 joining fee, open to groups as small as two. Companies with 60 or more employees also get a physician assistant on site one full day a month. The page pairs the membership with insurance meant mainly for larger medical expenses.`,
    `Employer contracts are familiar territory nationally. In the AAFP brief, 55 per cent of practising respondents had them in 2025, down from 63 per cent in 2024. Most clients are small. Among practices with contracts, 69 per cent worked with employers of fewer than 10 people and 59 per cent with employers of 10 to 25. Twenty-two per cent had clients with more than 250 workers.`,
    `Those employers mostly want visit counts. About a quarter of practices with employer contracts said clients asked for data, and 95 per cent of those requests were for visit counts. Only 23 per cent sought quality measures. A practice whose care happens in text threads and video calls will need records that show employers that work too.`,
    BGH_PARA,
    `<h2>What comes next</h2>`,
    `Dr. Berry described the access promise to DPC News in 2023. "When I say access, that means you can text, call, or email, and you'll get a response right away, around the clock," he said. Maple Health has run on individual memberships since 2022, with a small panel and a collaborative clinical team. The open question is whether that model can scale from individual memberships into employer-sponsored primary care.`,
    `For Dr. Berry, the measure of any new tool, AI included, is whether it gives that team more time with patients it already knows well.`
  ]
})

];
