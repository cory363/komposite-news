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
const TABLE = `<div class="datatable" style="overflow-x:auto;margin:18px 0;max-width:calc(100vw - 32px)"><table style="border-collapse:collapse;width:100%;font-size:15px"><thead><tr>${TH("Layer")}${TH("What the show publishes")}${TH("What a machine can read")}</tr></thead><tbody>`
  + ROW("Chapters", "95 of 98 catalogue entries, 1,338 markers, a median of 14 an episode", "Timestamped titles, often naming the legal rule at issue")
  + ROW("Clip markup", "Episode 94's page lists its 16 chapters as schema.org Clip objects", "Start and end times a search engine can link to directly")
  + ROW("Transcripts", "Full text on the Buzzsprout pages for episodes 84 and 94", "The lawyers' exact words, quotable and searchable")
  + ROW("Written explainers", "114 Two Taps News stories that link back to episodes", "A crawlable article for each case")
  + ROW("Clips and Shorts", "925 listed in the catalogue", "Short entry points that lead back to the full episode")
  + `</tbody></table></div>`;


export default [

TE({ slug: "ai-gets-the-law-wrong-a-podcast-bets-on-chapters", kick: "Search",
  headline: "AI gets the law wrong. A podcast bets on chapters",
  dek: "Chatbots still garble legal detail. Two Taps and Friends, a show hosted by criminal defense lawyers, structures every episode so search engines can find the lawyers' own explanation rather than a summary of it.",
  metaDesc: "AI assistants still garble legal detail. Two Taps and Friends, a defense lawyers' podcast, uses chapters, transcripts and clip markup to be found instead.",
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
    `Studies keep finding that AI assistants get legal and news detail wrong, and one podcast hosted by criminal defense lawyers is answering with metadata. ${L(TT_HOME, "Two Taps and Friends")} marks up its episodes with chapters, transcripts and clip data so that search engines point people to the lawyers' explanation itself.`,
    `The accuracy problem is well documented. Researchers writing for Stanford's Institute for Human-Centered AI reported ${L(STANFORD, "hallucination rates of 69% to 88%")} when they put specific legal queries to GPT 3.5, Llama 2 and PaLM 2, in a study published in January 2024. Those models have since been replaced, but the pattern has carried into news. A study of more than 3,000 answers from ChatGPT, Copilot, Gemini and Perplexity, coordinated by the European Broadcasting Union and led by the BBC, found that "45% of all AI answers had at least one significant issue", ${L(EBU, "VRT reported")} in October 2025. In criminal law the detail that gets dropped is often the one that matters: whether a charge came by information or by indictment, or whether a federal count was dismissed rather than tried.`,
    `Two Taps and Friends is a weekly show ${L(YT_CHANNEL, "on YouTube")} and the podcast apps. Daniel Rosenberg, who runs ${L(FIRM_HOME, "a criminal defense practice")} in Fort Lauderdale, Florida, hosts it with fellow defense attorneys Michael Dye and Lloyd Golburgh. Its Legal Panel episodes explain trials "the way working defense lawyers see them", ${L(TT_ABOUT, "the show's site says")}.`,
    `<strong>Komposite analysis: how one episode is packaged for machines.</strong> We counted the layers the show publishes around its audio, using its public ${L(TT_CATALOG, "catalogue")}, its episode pages and its podcast host.`,
    TABLE,
    `Google says creators can steer this. Its ${L(GOOGLE_VIDEO, "video guidance")} states: "We will prioritize key moments set by you, either through structured data or the YouTube description." Two Taps titles many of its chapters after the rule in dispute rather than the headline. On ${L(YT_EP94, "episode 94")}, about the search of Representative Ilhan Omar's home, the chapters cover probable cause, how far a warrant for phones reaches and grand jury subpoenas. On ${L(YT_EP84, "episode 84")}, about Luigi Mangione, they cover state versus federal charges and New York's double jeopardy rule. Someone searching for either rule can land on the minute where a lawyer explains it.`,
    `The transcripts carry the reasoning verbatim. "Now, what I will say is to get a search warrant is not so easy, right?" Rosenberg says in the ${L(BZ_EP94, "episode 94 transcript")}. "The standard is not the same as of a conviction. Conviction is beyond a reasonable doubt. The standard is probable cause for a search warrant, right?"`,
    `Clips are the risky layer. A 60-second cut can reach people who will never sit through 48 minutes, and it can also lose the caveat. The chapters and transcripts work as the backstop, because each clip points back to a full episode where the argument is on the record. "People search for a case, not for a podcast. When someone looks up a trial, we want a defense lawyer's explanation to be what they find," Rosenberg said. "A headline can tell you someone was charged. It can't tell you whether the charge was brought the right way, and that is often where a case is won or lost," he added.`,
    `The audience is there to be found. YouTube said in February 2025 that it had ${L(YT_BLOG, "more than 1 billion monthly active viewers")} of podcast content. Rosenberg ends episodes with the creator's usual request to subscribe, because "it builds the channel, helps us more outreach, get more topics, get more guests". The show says nothing on it is legal advice. New full episodes usually arrive on Wednesdays, the show says, on ${L(YT_CHANNEL, "its YouTube channel")}.`,
    `Komposite has reported on companies paying to be <a href="/startups/the-bet-on-being-named-in-the-answer/">named in AI search answers</a>, and on agencies that build channels while <a href="/business/creator-agencies-iconify-media-platform-risk/">the platforms still own the field</a>.`,
    `<em>This feature was prepared in cooperation with Two Taps &amp; Friends.</em>`
  ]
})

];
