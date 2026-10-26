/*
Komposite News, batch 101: Sunday 25 October 2026, round 22 add-on. Owner-approved feature on J.C. (Juan Carlos) Ruffier, moved
from the preview/ruffier draft into the normal pipeline with the text unchanged. Placed first in the front-page features band
(tools/data/featured.json); the round-22 lead pin in lead.json is untouched. Ruffier is not a client: no disclosure line.

SOURCES READ:
- Cranberry Journal, "eight-ways-to-sue-a-state" (23 Oct 2026) and RedSquibble, "jc-ruffier-international-delinquent-memoir":
  factual baseline; nothing here contradicts them.
- Ruffier's extraordinary federal appeal, CAF 61373/2016, signed 3 Aug 2026 (26 pp., text extracted locally with PDFKit).
  Quoted phrase "la pérdida del vínculo paterno-filial durante casi nueve años" is verbatim from it.
- Lawyer's notice of service, 27 Aug 2026; Chamber I order, 17 Sep 2026 (read in full).
- internationaldelinquent.com home page and /audiobook/ ("Currently in Production", "Release Date: JANUARY 15, 2027").
- Agencia Nova, 7 Sep 2026: "considera fundamental someter la actuación de ambos Estados al escrutinio público" verbatim.
  (Nova says the appeal was "granted"; it is NOT. Not repeated.)
- Clarín, 13 Oct 2014 (padre_0_H1reP2u5P7x): "Fueron nueve años de lucha y ahora puedo descansar" verbatim; plane from Moscow.
- Clarín, 21 Jun 2015 (dia_del_padre...): "Cuando bajó, me dijo la única palabra que es igual en ruso que en español: Papá";
  Ruffier learned Russian to live with the boy's mother in Belarus.
- HCCH Prel. Doc. No 19A (Lowe & Stephens), 2021 applications: 75% mothers / 23% fathers as taking persons; 88% primary or
  joint-primary carers (94% mothers, 71% fathers); 39% return rate; 207 days average to final outcome.
- US State Department, 2026 Annual Report on International Child Abduction (CY 2025): 908 active cases; 845 return cases with
  1,164 children; 256 children returned; IPCA "is a crime under specified circumstances..." quote verbatim; Argentina cited,
  57% unresolved >12 months, cited in 2015-2025 reports.
- 18 U.S.C. 1204 (Cornell LII): up to 3 years; defences incl. valid custody order and fleeing domestic violence.
- Nielsen (2018), Journal of Child Custody 15(1), DOI 10.1080/15379418.2017.1422414: 60 studies, 34 better on all measures
  (via author summaries/testimony; journal page 403s to our fetcher).
- Kentucky Law Journal blog, 19 Feb 2019: HB 528, first state with rebuttable presumption of joint custody and equal time;
  excludes parties with a domestic violence order in force or pending.
ATTRIBUTED, NOT CONFIRMED: plea/sentence/Montalvo/time served (Ruffier says); voluntary surrender at the bridge (Ruffier says);
  FBI attaché delivery, omissions, wiretaps/email (his appeal alleges); Interpol Minsk 2013 (his appeal says); Foreign Ministry
  refusal to transmit (Ruffier's side says); travel authorisation and Formosa habitual-residence finding (per the appeal).
HERO: Unsplash uSj_ce8vtyE, Dvir Adler (@dvir_adler): silhouettes of a man and a small child at the water's edge at dusk. No
  identifiable faces. Not used before on Komposite; differs from Cranberry (Palacio de Justicia) and RedSquibble (book cover).
*/
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const PO = P("policy", "Policy", "policy", "Photograph via Unsplash");

const L = (href, text) => `<a href="${href}" rel="noopener">${text}</a>`;

const MONTHS = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
const R = (href, kick) => {
  const f = href.replace(/^\//, "") + "index.html";
  const h = fs.readFileSync(f, "utf8");
  const title = h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1].replace(/&amp;/g, "&");
  const d = h.match(/datePublished":"(\d{4})-(\d\d)-(\d\d)/);
  return { href, kick, title, ago: `${MONTHS[+d[2] - 1]} ${+d[3]}, ${d[1]}` };
};

const ID_SITE = "https://internationaldelinquent.com/";
const ID_AUDIO = "https://internationaldelinquent.com/audiobook/";
const NOVA = "https://www.agencianova.com/judiciales-y-policiales/2026/09/07/172227/recupero-a-su-hijo-y-va-por-todo-ruffier-lleva-a-la-corte-suprema-su-lucha-contra-la-inmunidad-soberana-estadounidense/";
const CLARIN14 = "https://www.clarin.com/sociedad/padre_0_H1reP2u5P7x.html";
const CLARIN15 = "https://www.clarin.com/sociedad/dia_del_padre-jonathan-juan_carlos_ruffier_0_rJjavDtvXe.html";
const TX_APP = "https://caselaw.findlaw.com/court/tx-court-of-appeals/1438466.html";
const AP = "https://www.cbsnews.com/texas/news/records-man-arrested-in-texas-after-fleeing-abroad-with-son";
const DOCKET = "https://www.courtlistener.com/docket/6080766/united-states-v-ruffier/";
const HCCH = "https://assets.hcch.net/docs/a75d7234-deb9-4764-be72-a4a9d87c8af7.pdf";
const STATE = "https://travel.state.gov/content/travel/en/International-Parental-Child-Abduction/for-providers/legal-reports-and-data.html";
const USC1204 = "https://www.law.cornell.edu/uscode/text/18/1204";
const NIELSEN = "https://doi.org/10.1080/15379418.2017.1422414";
const KLJ = "https://www.kentuckylawjournal.org/blog/index.php/2019/02/19/kentuckys-new-presumption-for-joint-custody-and-equal-parenting-time";

export default [

PO({ slug: "the-father-who-published-his-own-court-file", kick: "Family Law",
  headline: "The father who published his own court file",
  dek: "J.C. Ruffier was jailed in Paraguay in 2005 and spent nearly nine years apart from his son. He has answered with a memoir in six languages, an album and a site that offers the case documents, arguing that a father in a cross-border custody fight can be treated as a fugitive before he is heard.",
  metaDesc: "J.C. Ruffier, separated from his son for nearly nine years after a cross-border custody fight, has turned the case into a memoir, an album and a public archive of court papers.",
  author: "jonathan-bright", date: "2026-10-25T23:55:00Z",
  capt: "A man and a small child at the water's edge at dusk, in a file photograph.",
  tags: [
    { name: "Rights", slug: "rights" },
    { name: "Policy", slug: "policy" },
    { name: "Media", slug: "media" }
  ],
  related: [
    R("/culture/publishing-is-hollywoods-r-and-d/", "Culture"),
    R("/policy/in-sweden-a-prosecutor-holds-the-switch/", "Policy"),
    R("/policy/cross-border-data-regimes-settle/", "Policy")
  ],
  body: [
    `Juan Carlos Ruffier, an Argentine-American pilot who spent eight years and ten months apart from his son after an international custody fight, has turned the case into a memoir, an album and a public archive of its court papers. Writing as J.C. Ruffier, he has published <em>International Delinquent</em> in English, Spanish, Portuguese, French, Russian and Arabic on ${L(ID_SITE, "his own site")}, which says the shortened name was "chosen to transcend language barriers". An audiobook is listed as "Currently in Production", with a release date of 15 January 2027.`,
    `The cover states his case in one line: "The true story of a man who was falsely declared an International Delinquent." Everything else he has built from the case makes the same argument, that a father in a cross-border custody dispute can be arrested as a kidnapper on paperwork no court has tested, and that the record should be open for anyone to check.`,
    `<h2>What happened to Ruffier and his son?</h2>`,
    `He was arrested in Paraguay in December 2005 and was not reunited with his son until October 2014. The boy was born in Buenos Aires in 2002. That year, according to Ruffier's court filings, both parents signed a travel authorisation that let the child travel abroad but required that he return to Buenos Aires. In 2004 Ruffier began a custody case in Texas, and in 2005 a Texas judge gave custody to the mother. On 13 May 2005 he returned to Argentina with his son. The mother's complaint led to arrest warrants and international location requests, and on 12 December 2005 he was detained in Paraguay, where he spent 43 days in Tacumbú prison before being extradited to Argentina. His son was taken from him.`,
    `The courts then began to find in his favour. On 13 April 2006 a Texas appeals court in El Paso ${L(TX_APP, "ruled")} that the trial court had lacked jurisdiction over the child and reversed its custody orders. In December 2008 a federal court in Formosa dismissed the abduction case against him with a <em>sobreseimiento</em>, a final dismissal that bars a new prosecution on the same facts, and found that the boy's habitual residence was Argentina, according to his appeal. Habitual residence, the country a child normally lives in, is the test the Hague abduction convention uses to decide which country's courts rule on custody.`,
    `None of it brought the boy home. Ruffier learned only in 2013, through Interpol in Minsk, that his son had been in Belarus, his appeal says. He traced him the next year through a social network, and the boy, then 12, landed in Argentina from Moscow in October 2014, ${L(CLARIN14, "Clarín reported")}. "Fueron nueve años de lucha y ahora puedo descansar," Ruffier told the paper: it had been nine years of struggle, and now he could rest. Two months later, Argentina's Supreme Court ruled that Argentine courts should hear the custody case.`,
    `<h2>Why does he say fathers are treated as criminals?</h2>`,
    `Because in his case the criminal process ran ahead of the civil one. The Hague Convention on the Civil Aspects of International Child Abduction is, as its name says, civil: it asks the courts of the country a child is taken to to send the child back to the country of habitual residence, whose courts then decide custody. The United States also treats the same events as crime. The State Department's 2026 annual report to Congress says international parental child abduction "is a crime under specified circumstances in every state and the District of Columbia and is also a federal crime under the International Parental Kidnapping Crime Act." That ${L(USC1204, "federal law")} carries up to three years in prison, with defences for a parent acting within a valid custody order or fleeing domestic violence.`,
    `Ruffier's appeal argues that the documents that set off his arrest were incomplete. It says they left out that the Texas custody orders were under appeal and omitted the 2002 travel authorisation, and that they were delivered to an Argentine court by the FBI's legal attaché in Buenos Aires. It also alleges that an FBI agent intercepted his phone calls and read his email while he was in Argentina, without authorisation from any Argentine judge. These are his allegations. No court has ruled on them.`,
    `There is a US criminal record, and the book takes it on directly. A federal indictment was filed against Ruffier in El Paso in 2006. In March 2017 he was taken into custody in Texas on kidnapping charges over taking his son abroad, the ${L(AP, "Associated Press reported")}. Ruffier says he surrendered voluntarily to FBI agents at an international bridge. The ${L(DOCKET, "public docket")} shows he first pleaded not guilty and was held without bond. Ruffier says the case ended in 2018 with a guilty plea under Rule 11(c)(1)(C), which binds the judge to an agreed sentence once accepted, and that US District Judge Frank Montalvo sentenced him to 12 months and a day, of which he had already served about ten. Komposite has not seen the plea agreement or the judgment.`,
    `<h2>How often is the parent left behind a father?</h2>`,
    `Most often, the global figures suggest. In the latest worldwide study of cases under the Hague convention, covering applications made in 2021, 75% of the people who took a child across a border were mothers and 23% were fathers, according to the ${L(HCCH, "report")} by Nigel Lowe and Victoria Stephens for the Hague Conference on Private International Law. The same study gives context the other way: 88% of taking parents were the child's primary or joint-primary carer, including 94% of taking mothers and 71% of taking fathers. Only 39% of return applications ended with the child going back, the lowest rate in five studies since 1999, and cases took an average of 207 days to resolve.`,
    `The State Department's Office of Children's Issues handled 908 active abduction cases in 2025, 845 of them involving 1,164 children whose parents were seeking their return, according to its ${L(STATE, "annual report")}. It recorded 256 children returned to the United States that year. Argentina is cited in the same report for a pattern of non-compliance with the convention, with 57% of its convention cases unresolved for more than 12 months, and has been cited in every annual report since 2015.`,
    `<h2>What does research say about shared parenting?</h2>`,
    `The broader fathers'-rights case starts earlier, with custody law that keeps both parents in a child's life. In a 2018 review in the ${L(NIELSEN, "<em>Journal of Child Custody</em>")}, Linda Nielsen of Wake Forest University compared 60 studies of children in joint physical custody, meaning at least 35% of their time with each parent, against children in sole custody. In 34 of them, children in joint custody did better on every measure, and she concluded that joint custody was generally linked to better outcomes independent of family income or parental conflict. The studies show an association, not proof that shared care causes the gains.`,
    `Legislators have started to act on it. Kentucky became the first state to enact a rebuttable presumption of joint custody and equal parenting time, through House Bill 528 in 2018, the ${L(KLJ, "<em>Kentucky Law Journal</em> noted")}. The presumption can be overturned on the evidence, and it does not apply where a domestic violence order is in force or pending.`,
    `<h2>Why publish the court documents?</h2>`,
    `Ruffier says he did not set out to be an author. He began the book in June 2020, during the pandemic, working with a professional writer, and finished it alone. In the note that opens it, which his site makes free to read, he writes: "Although I am neither a writer nor wish to be one, I continued writing little by little until I finished on my own." The note sets out his purpose: "I feel it is my duty to write this book, and I do it for the good of all societies in all parts of the world so that this injustice will never happen again."`,
    `The languages follow the story. Ruffier learned Russian to live with the boy's mother in Belarus, ${L(CLARIN15, "Clarín reported")} in 2015, and when his son stepped off the plane in 2014 he said "the only word that is the same in Russian and in Spanish: Papá", Ruffier told the paper (translated from Spanish). An album, also titled <em>International Delinquent</em>, came out in February 2022, with tracks including "Free", "Nothing to Hide" and "Run Away".`,
    `The documents are the part that sets the project apart from a memoir. The site offers the case papers in their original language so readers can compare his account with the record. Ruffier "considera fundamental someter la actuación de ambos Estados al escrutinio público", ${L(NOVA, "Agencia Nova reported")} in September: he considers it essential to put the conduct of both states to public scrutiny. The agency said he has serious doubts that Argentina's courts will give him a fair answer. A second volume will pick up the story from December 2021, and he has received offers to adapt it for film or television, Nova reported, a route Komposite has looked at in <a href="/culture/publishing-is-hollywoods-r-and-d/">Publishing is Hollywood's R&amp;D</a>.`,
    `<h2>Where does his lawsuit stand?</h2>`,
    `In 2016 Ruffier sued both Argentina and the United States for damages in Buenos Aires, in file CAF 61373/2016. His appeal describes the central harm as "la pérdida del vínculo paterno-filial durante casi nueve años", the loss of the bond between father and son for almost nine years. The US Embassy said in 2019 that Washington would not waive its immunity. A federal judge ordered the suit served on the United States in October 2021, then on 16 October 2025 held that the United States was immune. Chamber I of the federal administrative appeals court upheld that ruling on 30 June 2026, with costs against Ruffier.`,
    `His lawyers, María Laura Garrido and Rolando David Garrido, filed an extraordinary appeal to the Supreme Court, signed on 3 August 2026. It argues that the alleged wiretaps in Argentina fall within the exception in Argentina's Law 24.488 for wrongs "cometidos en el territorio" (committed in the territory). As of 25 October the appeal is pending before Chamber I, which must decide whether to send it to the Supreme Court. On 17 September the chamber ordered an official letter to the Foreign Ministry so the appeal could be served on the United States. Ruffier's side says the ministry has refused to pass the notice to the US Embassy. Komposite has not seen correspondence confirming that, and the ministry has not commented.`,
    `The claim against Argentina, which denies liability, continues in the same case. The boy's mother is not a party to it, and none of Ruffier's allegations about her or about US officials has been tested in court. For now, the fullest version of his side is the one he has published himself.`
  ]
})

];
