/** Batch 63 — Wednesday 7 October 2026. One piece. Lead: "In Sweden, a
 *  prosecutor holds the switch" (Sweden's live facial recognition law three
 *  months after entry into force, set against the AI Act and the current
 *  Scottish, UK and Western Australian debates), dated 14:30Z so the front
 *  zone, which leads with the newest article, puts it first.
 *
 *  POLICY / SWEDEN LFR. Not presented as new news: the Riksdag vote was 26
 *  May 2026 and Biometric Update covered it on 29 May. Primary sources read:
 *  Lag (2026:806) om användning av AI-system för ansiktsigenkänning i realtid
 *  för brottsbekämpande ändamål (SFS PDF: utfärdad 28 May, publicerad 2 June,
 *  "Denna lag träder i kraft den 1 juli 2026"); Förordning (2026:815) (every
 *  use notified to IMY); betänkande 2025/26:JuU28 incl. reservations 1 (C),
 *  2 (V, MP), 3 (MP), 4 (V, MP) and the vote on point 1 (317-28; C 0-24, V
 *  19-1, independents 6-3); prop. 2025/26:150 (prosecutor/court split and
 *  reasoning, Lagrådet and remiss summaries: JK, Advokatsamfundet, Institutet
 *  för mänskliga rättigheter). IMY page on its LFR mandate (updated 8 July
 *  2026). Use status: Sveriges Radio P4 Malmöhus (10 August, Jimmy Lindin,
 *  region Syd to start in the autumn; 11 August, Pramberg Stiernströmer's
 *  eleven studies); Omni (15 August) summarising DN's Lindin interview
 *  (region Öst introducing, Syd toward winter). DN itself not readable. No
 *  later report of a first deployment found. All Swedish renderings ours.
 *  AI Act Article 5(1)(h), 5(2), 5(3), 5(5), 5(6), 5(7) read on EUR-Lex.
 *  Biometric Update (Masha Borak, 29 May) checked against the statute: it
 *  says court permission is required; the law splits approval between
 *  prosecutor and court.
 *
 *  Pegs: The Herald (Craig Paton, 30 September) for Plastow's quote and
 *  Police Scotland/BTP status; FutureScot (30 September) for the Home Office
 *  "patchwork" wording; GOV.UK consultation page (opened 4 December 2025,
 *  closed 12 February 2026, no outcome published). WA Police "Overt Live
 *  Facial Recognition Trial - Update" (wa.gov.au, first published 22
 *  September, updated 6 October). 3.8 per cent is our calculation.
 *
 *  Hero: Jason Mendes via Unsplash (Riddarhustorget, Stockholm); download
 *  endpoint triggered. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const AI=P("ai","AI","ai"), PO=P("policy","Policy","policy"), MK=P("markets","Markets","markets"),
  TE=P("technology","Technology","technology"), CR=P("crypto","Crypto","crypto"), FT=P("fintech","Fintech","fintech"),
  BU=P("business","Business","business"), CY=P("cybersecurity","Cybersecurity","cybersecurity");

export default [

PO({ slug:"in-sweden-a-prosecutor-holds-the-switch", kick:"AI Governance",
  headline:"In Sweden, a prosecutor holds the switch",
  dek:"Sweden's law letting police run live facial recognition in public places has been in force since 1 July. It is the EU's ban with the exception written out in full, and its most contested clause is who signs off. Scotland and England are still asking for a law of their own.",
  metaDesc:"Sweden's law on police use of real-time facial recognition (SFS 2026:806) took effect on 1 July 2026 under the AI Act's Article 5 exception. Prosecutors approve preventive use and courts approve use in investigations, with notifications to IMY. Scotland's biometrics commissioner wants a similar statute.",
  author:"jonathan-bright", date:"2026-10-07T14:30:00Z",
  capt:"Pedestrians crossing the street at Riddarhustorget in central Stockholm. Sweden's law covers police use of real-time facial recognition in public places.",
  tags:[{name:"AI Governance",slug:"ai-governance"},{name:"Regulation",slug:"regulation"},{name:"Digital Identity",slug:"digital-identity"}],
  related:[
    {href:"/policy/new-york-city-wants-a-validator-for-every-model/",kick:"AI Governance",title:"New York's council wants a validator for every model",ago:"OCTOBER 6, 2026"},
    {href:"/policy/state-privacy-laws-national-floor/",kick:"Privacy",title:"State privacy laws set a national floor",ago:"SEPTEMBER 2, 2026"},
    {href:"/policy/ai-rules-implementation-phase/",kick:"Regulation",title:"AI regulation enters its implementation phase",ago:"AUGUST 9, 2026"},
  ],
  body:[
    "Since 1 July, Swedish police have had a statute that lets them point live facial recognition at public places. The Riksdag passed it on 26 May by 317 votes to 28, as <a href=\"https://www.biometricupdate.com/202605/sweden-authorizes-police-use-of-live-facial-recognition\" rel=\"noopener\">Biometric Update</a> reported at the time. Three months on, it is less news than a template. The EU's AI Act bans real-time remote biometric identification by police in public, then lets member states lift the ban for a short list of purposes if they write detailed rules of their own. Sweden has written them, a worked answer to a question being asked in Edinburgh, London and Western Australia: what would a statute for this technology actually say?",
    "The default in the AI Act is prohibition. <a href=\"https://eur-lex.europa.eu/eli/reg/2024/1689/oj\" rel=\"noopener\">Article 5</a> forbids \"the use of 'real-time' remote biometric identification systems in publicly accessible spaces for the purposes of law enforcement, unless and in so far as such use is strictly necessary\" to find victims of abduction, trafficking or sexual exploitation and missing persons, to prevent an imminent threat to life or a terrorist attack, or to locate suspects of serious offences listed in its Annex II. Each use needs prior authorisation from \"a judicial authority or an independent administrative authority whose decision is binding\". None of it is available until a member state writes the detailed rules into national law and notifies them to the Commission.",
    "Sweden's <a href=\"https://svenskforfattningssamling.se/sites/default/files/sfs/2026-05/SFS2026-806.pdf\" rel=\"noopener\">Lag (2026:806)</a> follows that structure closely. It covers the Police Authority and the Security Service, and use must be \"absolutely necessary\" (our translation) to locate or identify a specific person: a suspected victim of abduction, trafficking or sexual exploitation; a missing person thought to be a crime victim; someone at imminent risk of committing a serious crime that endangers life or physical safety; or someone suspected or convicted of an Annex II offence carrying four years or more. A permit must name the person, purpose, period and area, may not run longer than a month, and may cover no more ground than absolutely necessary. In an emergency the police may start without one if they apply within 24 hours; if refused, use stops and the data is deleted. Under an accompanying <a href=\"https://data.riksdagen.se/dokument/sfs-2026-815.html\" rel=\"noopener\">ordinance</a>, every use must be reported to the Swedish Authority for Privacy Protection (IMY), which <a href=\"https://www.imy.se/verksamhet/ai/ai-forordningen/imys-uppdrag-att-kontrollera-polisens-anvandning-av-ai-for-ansiktsigenkanning-i-realtid/\" rel=\"noopener\">says</a> it became the supervising authority on 1 July and will report annually to the Commission.",
    "The clause that sets Sweden apart is who grants the permit. Biometric Update reported that a court must approve; the statute is more selective. When the purpose is to investigate or prosecute a crime, a court decides, on a written application from a prosecutor and without the public representative that Swedish courts appoint in secret-surveillance cases. When the purpose is to prevent, stop or detect crime, or to enforce a sentence, a prosecutor decides alone, and the Riksdag's justice committee agreed with the government that a prosecutor's decision should not be open to appeal. The government's reasoning, in <a href=\"https://data.riksdagen.se/dokument/HD03150.html\" rel=\"noopener\">Proposition 2025/26:150</a>, is that prosecutors are already treated as independent of the police when they approve covert measures for intelligence work, are on call for quick decisions, and that intelligence work is \"typically alien to the general courts\" (our translation).",
    "Not everyone consulted was persuaded. The Chancellor of Justice said that, from an EU-law perspective, it appeared uncertain that a prosecutor should be the deciding body, according to the proposition's summary of the consultation. The Swedish Bar Association said courts were best placed to handle every permit, that without a public representative the individual had no adversarial process, risking conflict with fair-trial guarantees in the European Convention, and that prosecutors' decisions should be appealable. The Council on Legislation, which vets bills, did not object to the technology but called for a more restrictive view of its use; the government accepted some of its points. Article 5 leaves room for that instinct: \"Member States may introduce, in accordance with Union law, more restrictive laws on the use of remote biometric identification systems.\" Sweden did not add a sunset clause, and plans a review about three years in.",
    "Only the Centre Party opposed the bill outright; its 24 members, three independents and one Left Party member voted to reject it, according to the <a href=\"https://data.riksdagen.se/dokument/HD01JuU28.html\" rel=\"noopener\">committee report's</a> voting record. The Left and Green parties voted yes while filing reservations asking for a court to approve every use and for the law to be time-limited.",
    "Whether the police have used it yet is not public. On 10 August Jimmy Lindin, who heads camera surveillance and analysis for the police in the southern region, told <a href=\"https://www.sverigesradio.se/artikel/polisen-i-sodra-sverige-forbereder-ai-ansiktsigenkanning\" rel=\"noopener\">Sveriges Radio's P4 Malmöhus</a> that the region would start using the technology in the autumn to identify people suspected of serious crimes in real time. Five days later, according to <a href=\"https://omni.se/polisen-ansiktsigenkanning-en-nyttig-tillgang-for-oss/a/k0B1MX\" rel=\"noopener\">Omni's</a> summary of an interview he gave Dagens Nyheter, the eastern police region was introducing it and the southern region would have access toward winter. We found no police announcement of a first deployment, and IMY's page, last updated on 8 July, gives no count of notifications. Emelie Pramberg Stiernströmer, a Malmö University criminologist, found only eleven studies on the method and limited evidence that it reduces crime, <a href=\"https://www.sverigesradio.se/artikel/ansiktsigenkanning-live-saknar-stod-for-farre-brott\" rel=\"noopener\">Sveriges Radio</a> reported on 11 August.",
    "Britain has no equivalent statute. The framework the Home Office has proposed for England and Wales would replace what <a href=\"https://futurescot.com/scotlands-biometrics-commissioner-renews-call-for-legislation-to-govern-use-of-live-facial-recognition-tech/\" rel=\"noopener\">FutureScot</a> called \"an outdated patchwork of common law powers and data protection rules\" with statutory limits and a single oversight body. The Home Office <a href=\"https://www.gov.uk/government/consultations/legal-framework-for-using-facial-recognition-in-law-enforcement\" rel=\"noopener\">consultation</a> on a legal framework closed on 12 February, and no outcome has been published. In Scotland, where Police Scotland does not yet have the technology but British Transport Police use it, the biometrics commissioner, Brian Plastow, used his annual report to ask ministers for a bill, <a href=\"https://www.heraldscotland.com/news/26593148.scottish-ministers-urged-legislate-facial-recognition/\" rel=\"noopener\">The Herald</a> reported on 30 September. \"LFR technology is highly intrusive and constitutes mass public surveillance, so it is my view that primary legislation is the best route to deliver safeguards capable of ensuring both public acceptance and legitimacy,\" he said. The Scottish Government's reply was that deployment is an operational matter for the chief constable, scrutinised by the Scottish Police Authority.",
    "Western Australia shows what a public ledger looks like. Its police began an overt trial on 22 June, and an <a href=\"https://www.wa.gov.au/government/announcements/overt-live-facial-recognition-trial-update\" rel=\"noopener\">update</a> first published on 22 September and revised on 6 October counts 77 deployments at 36 locations, 905,117 faces scanned, 209 alerts, eight of them incorrect, and 79 arrests. The force puts its error rate at 0.0009 per cent, measured against faces scanned. Measured against alerts, which is what an officer acts on, eight in 209 is 3.8 per cent, by our calculation.",
    "That is what Sweden's design leaves for later. The statute is precise about who may ask and who may approve, but the evidence of what the technology does will sit in notifications to IMY and in the annual reports to Brussels that Article 5 requires, stripped of sensitive operational data. Western Australia has published a scorecard after three months of its trial. Sweden has a fully written permit regime and, so far, no public count. When Holyrood or the Home Office drafts its own bill, the Swedish text shows how to constrain the switch. It does not yet show how often anyone has used it.",
  ] }),

];
