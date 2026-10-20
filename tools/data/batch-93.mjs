import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const PO = P("policy", "Policy", "policy", "Photograph via Unsplash");

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

/** Batch 93 — Tuesday 20 October 2026, round 17b. One more story, in the
 *  top slot under the lead. The round-17 DeepSeek lead keeps its pin
 *  (tools/data/lead.json, until 21 Oct 14:00Z); this piece is the newest
 *  Policy story within 24 hours of the lead, so build-front-zone puts it
 *  first in the cluster under the lead.
 *  Repeat check: grep of the repo for OneGov, 552.239, GSA and "General
 *  Services Administration". Only "Procurement is regulating AI first"
 *  (3 Sep) covered the clause, as a draft; this is the final clause taking
 *  effect, so a follow-up (linked). No overlap with today's DeepSeek lead,
 *  which is a DHS exclusion order under FASCSA, not a GSA contract clause.
 *
 *  POLICY / GSAR 552.239-7001 (19:00Z). PRIMARY READ: the clause text in
 *  GSA's RGO deviation PDF on acquisition.gov (RGO-2026-01.pdf, 230 pages;
 *  covering memo from Jeffrey A. Koses, GSA senior procurement executive;
 *  clause "Basic Safeguarding of Data within Large Language Model
 *  Artificial Intelligence Systems (GSAR Deviation)(Sept 2026)", PDF pages
 *  135-150; prescription at 539.71). Text extracted locally with PDFKit.
 *  The memo's Attachment A date table is an image, so the 19 October
 *  effective date is from FedScoop (1 Oct) and Wiley (13 Oct), attributed.
 *  Notice periods resolved from the clause itself: (d)(2) 72 hours, material
 *  violation; (f)(5) 72 hours, security incident, daily updates; (i)(1) 30
 *  calendar days' advance notice of adding/replacing/materially changing a
 *  model or provider, not needed where concurrent access is given; (i)(2)
 *  30/15 calendar days' concurrent access to successor (major/minor), or 5
 *  business days' notice of a third-party provider's deprecation; (i)(3) 7
 *  calendar days, material change raising bias / cutting guardrails /
 *  degrading truthfulness. The draft's "sources differ" framing was wrong:
 *  they are separate obligations, all in the text. [VERIFY] removed.
 *  Single-source items now verified in the text: suspension right
 *  (j)(3)(i) "at any time"; training bar (e)(3)(i); 25% decommissioning cap
 *  (j)(3)(ii)(B); precedence over ToS/click-wrap (c); deletion incl.
 *  fine-tuned weights (e)(...)(vii); export (h)(1); open-model flowdown
 *  exemption (a)(1)(ii); "reasonable efforts" accuracy duty (j)(1).
 *  OneGov: McCarter's account replaced with GSA's own 10 Sep release
 *  (OpenAI ChatGPT, first agreement of the next OneGov phase, 27-month
 *  offer from 1 Oct, 50% off token-based use). The draft's "31 December
 *  2028" end date and "$1 pricing" framing are not in GSA's release: cut.
 *  Quotes: Kalaskar ("seems to be taking...", "unworkable") and Tillipman
 *  checked in FedScoop 15 Jul; Andrews quote and "over 75 comments" checked
 *  in FedScoop 1 Oct. Refresh 34 on 6 Nov and 26 Oct webinar: Wiley.
 *  Date moved from the draft's 14:10Z to 19:00Z (written after round 17).
 *  Hero: Unsplash TtJ0CLjLi6w (Markus Winkler), "Terms of Service" typed on
 *  paper in a typewriter; no people. The clause overrides vendors' terms of
 *  service. Not used before on the site (one other Winkler photo, a
 *  different shot of letter tiles, on crypto/ninety-million-behind-ten-billion).
 */

const CLAUSE = "https://www.acquisition.gov/sites/default/files/page_file_uploads/RGO-2026-01.pdf";
const FS_OCT = "https://fedscoop.com/gsa-issued-an-ai-acquisition-policy-for-new-contracts-heres-what-it-says/";
const WILEY = "https://www.wiley.law/alert-GSA-Releases-Final-Language-of-AI-Contract-Clause";
const FS_JUL = "https://fedscoop.com/gsa-proposed-acquisition-rule-contractors-experts-react/";
const GSA_ONEGOV = "https://www.gsa.gov/about-gsa/newsroom/news-releases/gsa-expands-onegov-ai-offerings-with-discounted-openais-chatgpt-09102026";

const TH = 'style="text-align:left;border-bottom:2px solid #222;padding:6px 8px"';
const TD = 'style="text-align:left;border-bottom:1px solid #ddd;padding:6px 8px;vertical-align:top"';
const row = (a, b, c) => `<tr><td ${TD}>${a}</td><td ${TD}>${b}</td><td ${TD}>${c}</td></tr>`;
const TABLE = `<div class="datatable" style="overflow-x:auto;margin:18px 0;max-width:calc(100vw - 32px)"><table style="border-collapse:collapse;width:100%;font-size:15px"><thead><tr><th ${TH}>Deadline</th><th ${TH}>What triggers it</th><th ${TH}>Clause paragraph</th></tr></thead><tbody>`
  + row("72 hours", "Security incident affecting an LLM that may affect government data (then daily updates)", "(f)(5)")
  + row("72 hours", "Vendor learns of a material violation of the clause", "(d)(2)")
  + row("5 business days", "A third-party provider the vendor does not control deprecates a model", "(i)(2)")
  + row("7 calendar days", "A material change that raises output bias, weakens guardrails or degrades truthfulness", "(i)(3)")
  + row("15 / 30 calendar days", "Minimum overlap with a successor model, minor / major versions", "(i)(2)")
  + row("30 calendar days (in advance)", "Adding, replacing or materially changing a model or provider, unless overlap access is given", "(i)(1)")
  + row("30 days", "Disclosing that a model was modified for, or to comply with the rules of, a non-US government (after award or after learning of it)", "(f)(3)")
  + row("120 days", "Disclosing which LLMs process government data, if the contract sets no date", "(f)(1)")
  + `</tbody></table></div>`;

export default [

/* ---------- 19:00Z POLICY ---------- */
PO({ slug: "seventy-two-hours-to-report-an-ai-incident", kick: "Procurement",
  headline: "Seventy-two hours to report an AI incident",
  dek: "The General Services Administration's new contract clause for AI systems took effect on Monday. It gives vendors 72 hours to report security incidents, bars training on government data and overrides their own terms of service.",
  metaDesc: "GSA's AI clause GSAR 552.239-7001 took effect on 19 October: 72-hour incident reports, a bar on training with government data and set notice periods for model changes.",
  author: "jonathan-bright", date: "2026-10-20T19:00:00Z",
  capt: "The words \"Terms of Service\" typed on a sheet of paper in a typewriter, in a file photograph.",
  tags: [
    { name: "Procurement", slug: "procurement" },
    { name: "AI Governance", slug: "ai-governance" }
  ],
  related: [
    R("/policy/procurement-regulating-ai-first/", "Procurement"),
    R("/ai/enterprise-buyers-ai-contract-terms/", "AI"),
    R("/policy/washington-orders-deepseek-out-of-civilian-agencies/", "AI Policy")
  ],
  body: [
    `AI vendors whose US General Services Administration (GSA) contracts carry ${L(CLAUSE, "a new clause, GSAR 552.239-7001")}, must report security incidents within 72 hours. The clause took effect on Monday 19 October. It sets data, reporting and model-change terms for large language models (LLMs), the systems behind chatbots and AI assistants.`,
    `GSA, the federal government's main buying agency, issued the clause as a class deviation, a change that applies to its contracting staff before formal rulemaking. The clause text, titled "Basic Safeguarding of Data within Large Language Model Artificial Intelligence Systems", is part of the agency's rewritten acquisition rules posted on acquisition.gov. The 19 October start date was reported by ${L(FS_OCT, "FedScoop")} and the law firm ${L(WILEY, "Wiley Rein")}. Contracting officers may add it to existing contracts at their discretion, FedScoop said.`,
    `It applies when the government buys an LLM, "generative assistant, chatbot, agentic system, LLM-enabled document or productivity tool, or similar system" where LLM functionality is a material feature and government data goes into or comes out of the model, the text says. It does not apply to a contractor's internal tools that are not delivered to or accessed by the government, or where AI is incidental to a product bought for another purpose.`,
    `The clause sets several separate clocks. A vendor must notify the contracting officer within 72 hours of discovering a security incident that may affect government data, then send daily updates until it is resolved, and separately within 72 hours of learning of a material violation of the clause. It needs 30 calendar days' written notice before adding, replacing or materially changing a model or provider, unless it lets the government use the old and new models side by side. That overlap must last at least 30 days for a major version and 15 for a minor one. If an outside model provider retires a version, the vendor has five business days to tell the government. A change that materially increases output bias, weakens safety guardrails or degrades truthfulness must be reported within seven calendar days. Incident logs and forensic material must be kept for at least 90 days.`,
    TABLE,
    `Government data may not be used to train, fine-tune or otherwise improve any LLM, including third-party models, or to inform a vendor's marketing, sales or business decisions. At the end of a contract the vendor must permanently delete government data and any custom work, "including fine-tuned model weights, embeddings, indexes, and caches", unless the contracting officer directs otherwise in writing. LLM services must let the government export its data in open or standard formats.`,
    `The clause also overrides vendors' own paperwork. Where it conflicts with a company's "terms of service, click-wrap, browse-wrap, or other commercial agreements", the clause takes precedence, though it does not replace the standard commercial-items clause. The government may run its own automated tests of a deployed model at any time, for bias, truthfulness, safety and "unsolicited ideological content", and "retains the right to suspend use of the LLM at any time". If a contract is ended for cause after a vendor fails to fix a problem it was warned about in writing, the vendor pays reasonable decommissioning costs, capped at 25 per cent of the affected task or delivery order.`,
    `The final text is softer than the drafts that industry fought over this summer. At a July listening session reported by ${L(FS_JUL, "FedScoop")}, Menaka Kalaskar, who leads Palantir's US government legal and contracting team, said GSA "seems to be taking a lot of risk with this initiative, and it's not obvious why", and called the material-change notice "unworkable" for software-as-a-service companies. GSA received over 75 comments, FedScoop reported. The earlier "unbiased AI principles" language was largely dropped in favour of a duty to use "reasonable efforts" to prioritise accuracy and acknowledge uncertainty. Nvidia's chief external affairs officer, Bruce Andrews, had argued that "obligations should follow the data, not the model's authorship"; the final clause exempts fully open models, which publish their architecture, weights, code and data, from its foreign-control flowdowns. Models that publish only their weights do not qualify.`,
    `GSA plans to add the clause to its Multiple Award Schedule, the catalogue of pre-approved vendors, in Refresh 34, which Wiley put at 6 November, with a GSA webinar on 26 October. It also arrives as the agency moves to paid AI deals: on 10 September ${L(GSA_ONEGOV, "GSA announced")} a 27-month, consumption-based OneGov offer for OpenAI's ChatGPT models from 1 October, at a 50 per cent discount on token-based use, the first agreement in the next phase of its OneGov AI strategy. Komposite covered <a href="/policy/procurement-regulating-ai-first/">an earlier draft of the clause</a> in September, and the private-sector version of these fights in <a href="/ai/enterprise-buyers-ai-contract-terms/">enterprise buyers' AI contract terms</a>.`
  ]
}),

];
