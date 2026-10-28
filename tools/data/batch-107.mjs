/*
Komposite News, batch 107: PUBLISHED 28 Oct 2026 (quotes approved by Daniel Rosenberg; previously previewed on branch preview/twotaps). Partner feature draft on the podcast Two Taps & Friends:
a panel of defense lawyers explaining the week's legal stories, and how the show puts that analysis where people search.
Published on main as a normal story.

YOUTUBE LINKS (verified by oEmbed 28 Oct, channel "Two Taps & Friends"): ep 94 t6Ld519lc4o, ep 84 UTNXuV-upps, ep 90 VRZ9PMD5T0M, ep 70 V152amSJ9BM; channel @twotapsandfriends.
SOURCES READ (28 Oct 2026):
- twotapsandfriends.com home, /about/ (Legal Panel explains cases "the way working defense lawyers see them"; Dye "Daniel's trial partner";
  Golburgh "more than three decades of legal experience"; "New full episodes usually arrive on Wednesdays").
- twotapsandfriends.com/catalog.json (live, built 2026-10-28T17:23:31Z): 98 entries, 95 with chapters, 1,338 chapters, median 14; 925 clips;
  Dye or Golburgh named on 48 entries. Episode summaries and chapter titles for eps 70, 84, 85, 86, 90, 92, 94 (used in the table).
- Episode 94 page (live): 16 chapters, page JSON-LD with PodcastEpisode, VideoObject and 16 Clip objects.
- Buzzsprout ep 94 transcript: host identified as SPEAKER_04 ("I'm the host of the show, Danny Rosenberg"). Quotes used verbatim:
  "Now, what I will say is to get a search warrant is not so easy, right?" / "The standard is not the same as of a conviction.
  Conviction is beyond a reasonable doubt. The standard is probable cause for a search warrant, right?" / "it builds the channel,
  helps us more outreach, get more topics, get more guests".
  (Ep 84 transcript read; speaker labels ambiguous, so no ep 84 quote is attributed.)
- Two Taps News (/news/all/ "114 stories"): "The Ilhan Omar Investigation, and What It Would Take to Revoke a Citizenship" (21 Oct; cites AP, CBS);
  "Inside the State and Federal Split in the Luigi Mangione Case" (19 Aug); "Information vs. Indictment: The Charging Fight at the Center
  of the New Comey Case" (27 Oct; quotes Fed. R. Crim. P. 7); "Grand Jury Declines to Indict Cassidy Hutchinson Over Her Jan. 6 Testimony"
  (28 Oct); "Supreme Court Will Weigh 24 Gun Petitions at Its November 6 Conference" (27 Oct); Israel election coverage (26 Oct).
- Stanford HAI, 11 Jan 2024 (Daniel E. Ho et al.): "hallucination rates range from 69% to 88% in response to specific legal queries"
  for GPT 3.5, Llama 2 and PaLM 2.
- VRT press release, 22 Oct 2025, on the EBU/BBC study: "45% of all AI answers had at least one significant issue"; 22 public broadcasters,
  18 countries, more than 3,000 responses from ChatGPT, Copilot, Gemini and Perplexity.
- YouTube Official Blog, 26 Feb 2025: "more than 1 billion monthly active viewers of podcast content on YouTube".
- Google Search Central, video structured data: "We will prioritize key moments set by you, either through structured data or the YouTube description."
- drosenberglaw.com: The Law Offices of Daniel Rosenberg P.A., Fort Lauderdale, criminal defense.

OUR ANALYSIS: table of six episodes and the legal question each one's chapters put to the panel (from catalog chapter titles).
NOT CONFIRMED (flagged): channel-wide audience figures (catalogue view fields are partial and changed between the 27 and 28 Oct builds, so none are used).
QUOTES: 2 approved by Daniel Rosenberg for this article.
PHOTO: Unsplash QEf3mq665qU (photo-1698199071311-bd5fe0e37449), Albert Stoynov, Unsplash License; camera with shotgun mic, no identifiable people.
Owner direction 28 Oct: no headshot on Komposite.
*/
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "unsplash-QEf3mq665qU", origW: 1400, origH: 1050, alt: "A mirrorless video camera on a tripod with a shotgun microphone mounted on top", credit: "Albert Stoynov via Unsplash", capt: o.capt, creditLine } });
const TE = P("technology", "Technology", "technology", "Photograph via Unsplash");

const L = (href, text) => `<a href="${href}" rel="noopener">${text}</a>`;

const MONTHS = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
const R = (href, kick) => {
  const f = href.replace(/^\//, "") + "index.html";
  const h = fs.readFileSync(f, "utf8");
  const title = h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1].replace(/&amp;/g, "&");
  const d = h.match(/datePublished":"(\d{4})-(\d\d)-(\d\d)/);
  return { href, kick, title, ago: `${MONTHS[+d[2] - 1]} ${+d[3]}, ${d[1]}` };
};

const FIRM_HOME = "https://www.drosenberglaw.com/";
const TT_HOME = "https://twotapsandfriends.com/";
const TT_ABOUT = "https://twotapsandfriends.com/about/";
const TT_EP94 = "https://twotapsandfriends.com/episodes/94-lawyers-drop-bombshell-evidence-on-ilhan-omar-that-can/";
const TT_EP84 = "https://twotapsandfriends.com/episodes/84-the-shocking-legal-loophole-in-the-luigi-mangione-case/";
const TT_EP90 = "https://twotapsandfriends.com/episodes/90-the-lindsay-clancy-trial-the-11-1-hung-jury/";
const TT_NEWS = "https://twotapsandfriends.com/news/all/";
const TT_OMAR = "https://twotapsandfriends.com/news/ilhan-omar-investigation-citizenship-law/";
const TT_MANGIONE = "https://twotapsandfriends.com/news/luigi-mangione-case-state-federal/";
const TT_COMEY = "https://twotapsandfriends.com/news/information-vs-indictment-comey-statute-of-limitations/";
const TT_HUTCH = "https://twotapsandfriends.com/news/grand-jury-declines-indict-cassidy-hutchinson/";
const TT_GUNS = "https://twotapsandfriends.com/news/supreme-court-november-6-conference-24-gun-petitions/";
const YT_CHANNEL = "https://www.youtube.com/@twotapsandfriends";
const YT_EP94 = "https://www.youtube.com/watch?v=t6Ld519lc4o";
const YT_EP84 = "https://www.youtube.com/watch?v=UTNXuV-upps";
const YT_EP90 = "https://www.youtube.com/watch?v=VRZ9PMD5T0M";
const YT_EP70 = "https://www.youtube.com/watch?v=V152amSJ9BM";
const TT_CATALOG = "https://twotapsandfriends.com/catalog.json";
const BZ_EP94 = "https://twotapsandfriends.buzzsprout.com/2447577/episodes/19993871-lawyers-drop-bombshell-evidence-on-ilhan-omar-that-can-get-her-deported-lawyers-just-uncovered-something-big-about-ilhan-omar-now-she-s-in-hot-waters";
const STANFORD = "https://hai.stanford.edu/news/hallucinating-law-legal-mistakes-large-language-models-are-pervasive";
const EBU = "https://communication.vrt.be/largest-study-of-its-kind-shows-ai-assistants-misrepresent-news-content-45-of-the-time-regardless-of-language-or-territory";
const YT_BLOG = "https://blog.youtube/news-and-events/1-billion-monthly-podcast-users/";
const GOOGLE_VIDEO = "https://developers.google.com/search/docs/appearance/structured-data/video";

const TH = (t) => `<th style="text-align:left;border-bottom:2px solid #222;padding:6px 8px">${t}</th>`;
const TD = (t) => `<td style="text-align:left;border-bottom:1px solid #ddd;padding:6px 8px;vertical-align:top">${t}</td>`;
const ROW = (a, b, c) => `<tr>${TD(a)}${TD(b)}${TD(c)}</tr>`;
const TABLE = `<div class="datatable" style="overflow-x:auto;margin:18px 0;max-width:calc(100vw - 32px)"><table style="border-collapse:collapse;width:100%;font-size:15px"><thead><tr>${TH("Episode")}${TH("The story")}${TH("The legal question in its chapters")}</tr></thead><tbody>`
  + ROW("94, 21 Oct", "Search of Ilhan Omar's home", "Probable cause and search warrants; how far a warrant for devices reaches; grand jury subpoenas")
  + ROW("90, 30 Sep", "Lindsay Clancy's 11-1 hung jury", "The Massachusetts insanity standard; double jeopardy and a retrial; civil commitment versus prison")
  + ROW("92, 9 Oct", "Cornell fraternity lawsuit", "New York law on consent and intoxication; why the district attorney declined charges; civil versus criminal standard")
  + ROW("86, 1 Sep", "Keefe D guilty in the Tupac Shakur killing", "A 2008 immunity dispute; circumstantial evidence and reasonable doubt")
  + ROW("84, 19 Aug", "Luigi Mangione", "State versus federal charges; New York's double jeopardy rule and a plea; inventory searches; jury nullification")
  + ROW(L(YT_EP70, "70, 13 May"), "Guns and self-defense", "Stand Your Ground and the duty to retreat; concealed and open carry; hearsay")
  + `</tbody></table></div>`;


export default [

TE({ slug: "three-defense-lawyers-read-the-weeks-cases", kick: "Legal Media",
  headline: "Three defense lawyers read the week's cases",
  dek: "Two Taps and Friends puts criminal defense lawyers in front of the week's legal stories, from the Ilhan Omar search to Luigi Mangione's double jeopardy question. Then it chapters, transcribes and clips the result so it surfaces where people search.",
  metaDesc: "Two Taps and Friends has defense lawyers explain the Omar search, Mangione's double jeopardy question and grand juries, then packages it for search.",
  author: "tom-kessler", date: "2026-10-28T15:00:00Z",
  capt: "A video camera fitted with a shotgun microphone on a tripod, in a file photograph.",
  tags: [
    { name: "Media", slug: "media" },
    { name: "Streaming", slug: "streaming" },
    { name: "Consumer Technology", slug: "consumer-technology" }
  ],
  related: [
    R("/startups/the-bet-on-being-named-in-the-answer/", "Startups"),
    R("/business/creator-agencies-iconify-media-platform-risk/", "Media"),
    R("/music/one-hundred-and-fifty-thousand-a-day/", "Music")
  ],
  body: [
    `${L(TT_HOME, "Two Taps and Friends")}, a weekly podcast ${L(YT_CHANNEL, "on YouTube")}, has three working defense lawyers, Daniel Rosenberg, Michael Dye and Lloyd Golburgh, explain the week's big cases, from the Ilhan Omar search to Luigi Mangione's double jeopardy question. Its Legal Panel episodes take the trials in the news and explain them "the way working defense lawyers see them", ${L(TT_ABOUT, "the show's site says")}. Rosenberg hosts every episode. Dye is described there as "Daniel's trial partner", and Golburgh has "more than three decades of legal experience".`,
    `The latest episode shows the method. Federal agents searched Ilhan Omar's Washington home on 12 October and grand jury subpoenas went to some of her relatives, the show's newsroom ${L(TT_OMAR, "reported")}, citing the Associated Press and CBS News. She has not been charged and denies wrongdoing. On ${L(YT_EP94, "episode 94")}, released on 21 October, the panel set the headline aside and started with the paperwork: what agents had to show a judge, how far a warrant for phones reaches, and what subpoenas to family members say about where prosecutors are going. "Now, what I will say is to get a search warrant is not so easy, right?" Rosenberg says in the ${L(BZ_EP94, "episode's transcript")}. "The standard is not the same as of a conviction. Conviction is beyond a reasonable doubt. The standard is probable cause for a search warrant, right?"`,
    `Procedure is where the panel spends its time. In ${L(YT_EP84, "episode 84")}, Rosenberg and Dye walked through the Mangione case on two tracks: second-degree murder in New York state court, and a federal case in which the murder count had been dismissed, leaving stalking charges. The question the episode's title calls a loophole is how New York's double jeopardy rule could shape a plea across both courts, as the show's ${L(TT_MANGIONE, "write-up")} puts it. ${L(YT_EP90, "Episode 90")} took Lindsay Clancy's 11-1 hung jury through the Massachusetts insanity standard and whether a retrial is possible. The show's newsroom has explained why prosecutors charged James Comey by ${L(TT_COMEY, "information rather than indictment")} on the last day of what prosecutors say is a 10-year limit, reported a Washington grand jury's ${L(TT_HUTCH, "refusal to indict")} Cassidy Hutchinson, and previewed ${L(TT_GUNS, "24 gun petitions")} awaiting the Supreme Court's 6 November conference. Its Israel coverage runs from the October 7 border communities to the 27 October election.`,
    `<strong>Komposite analysis: what the panel was asked to explain.</strong> The table below is our reading of the chapter titles in the show's public ${L(TT_CATALOG, "catalogue")} for six recent legal episodes. In each, the chapters name a rule of procedure or evidence, not only the event.`,
    TABLE,
    `That is the part a machine summary tends to lose. Researchers writing for Stanford's Institute for Human-Centered AI reported ${L(STANFORD, "hallucination rates of 69% to 88%")} when they put specific legal queries to GPT 3.5, Llama 2 and PaLM 2, in a study published in January 2024. Those models have since been superseded. The problem has not gone away in news. A study of more than 3,000 answers from ChatGPT, Copilot, Gemini and Perplexity, coordinated by the European Broadcasting Union and led by the BBC, found that "45% of all AI answers had at least one significant issue", ${L(EBU, "VRT reported")} in October 2025. The difference between an information and an indictment, or between a dismissed federal count and an acquittal, is the kind of detail that decides a case and the kind a one-line summary flattens.`,
    `The show's answer is to put the lawyers' explanation where the search lands. YouTube said in February 2025 that it had ${L(YT_BLOG, "more than 1 billion monthly active viewers")} of podcast content. By our count, 95 of the 98 entries in the show's catalogue carry chapter markers, 1,338 in all, a median of 14 an episode, many of them titled with the legal question. Episode 94's page publishes its 16 chapters as schema.org Clip markup. Google's ${L(GOOGLE_VIDEO, "video guidance")} says: "We will prioritize key moments set by you, either through structured data or the YouTube description." The Buzzsprout pages for episodes 84 and 94 carry full transcripts, ${L(TT_NEWS, "Two Taps News")} lists 114 written stories that link back to episodes, and the catalogue lists 925 clips and Shorts.`,
    `Clips cut both ways. A 60-second cut can carry a lawyer's explanation to people who will never watch 48 minutes, and it can also strip out the caveat. The chapters and transcripts are the show's hedge: the clip points back to a long episode where the reasoning is on the record. "People search for a case, not for a podcast. When someone looks up a trial, we want a defense lawyer's explanation to be what they find," Rosenberg said. "A headline can tell you someone was charged. It can't tell you whether the charge was brought the right way, and that is often where a case is won or lost," he added.`,
    `Rosenberg, who runs ${L(FIRM_HOME, "a criminal defense practice")} in Fort Lauderdale, Florida, closes episodes with the creator's standard request: subscribe, because "it builds the channel, helps us more outreach, get more topics, get more guests". The show says nothing on it is legal advice. What it offers is narrower and, in a feed of summaries, rarer: lawyers who try cases reading the filings on camera, with the timestamps to find the part that matters. New full episodes usually arrive on Wednesdays, the show says, on ${L(YT_CHANNEL, "its YouTube channel")} and the main podcast apps.`,
    `Komposite has reported on companies paying to be <a href="/startups/the-bet-on-being-named-in-the-answer/">named in AI search answers</a>, and on agencies that build channels while <a href="/business/creator-agencies-iconify-media-platform-risk/">the platforms still own the field</a>.`,
    `<em>This feature was prepared in cooperation with Two Taps &amp; Friends.</em>`
  ]
})

];
