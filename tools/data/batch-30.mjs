/** Batch 30 — 16 September 2026. Weighted to the four desks that did not
 *  publish on the 15th. Market levels are Tuesday's close as reported, not
 *  Wednesday's intraday prints, which were still moving at the time of
 *  writing. The Japanese breakdown by employee and contractor comes from a
 *  single outlet and is attributed to it. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const MK=P("markets","Markets","markets"), MU=P("music","Music","music"),
      CY=P("cybersecurity","Cybersecurity","cybersecurity"), ST=P("startups","Startups","startups");

export default [

MK({ slug:"the-ten-year-crosses-five-per-cent", kick:"Fixed Income",
  headline:"The ten-year crosses five per cent",
  dek:"The benchmark closed above the line for the first time since 2007, a day before a Fed decision the futures market now treats as all but settled.",
  metaDesc:"The 10-year Treasury yield closed above 5% for the first time since 2007 as oil rose and futures priced a Federal Reserve rate hike on 16 September.",
  author:"priya-raghavan", date:"2026-09-16T13:10:00Z",
  capt:"The threshold was psychological. The close above it was not.",
  tags:[{name:"Fixed Income",slug:"fixed-income"},{name:"Capital Markets",slug:"capital-markets"},{name:"Economic Policy",slug:"economic-policy"}],
  related:[
    {href:"/markets/four-ninety-eight-and-the-fed-in-the-way/",kick:"Fixed Income",title:"Two and a half basis points from five per cent",ago:"SEPTEMBER 14, 2026"},
    {href:"/markets/four-ninety-seven-and-the-bull-holds/",kick:"Fixed Income",title:"The ten-year reaches 4.97% and the bull holds",ago:"SEPTEMBER 12, 2026"},
    {href:"/markets/oil-spike-pushes-yields-to-multi-year-highs/",kick:"Fixed Income",title:"An oil shock arrives in the bond market first",ago:"SEPTEMBER 11, 2026"},
  ],
  body:[
    `On Monday this desk wrote that five per cent was doing psychological rather than economic work. On Tuesday the ten-year went through it and stayed there, which changes the psychology if not the arithmetic.`,
    `The benchmark yield was at 5.006% late on Tuesday afternoon in New York, <a href="https://www.ibtimes.com/treasury-yields-hit-highest-level-almost-20-years-oil-kept-climbing-stocks-fell-again-3807493" rel="noopener">IBTimes reported</a>, having touched 5.041% earlier in the session. That is the highest level since 2007. <a href="/markets/four-ninety-eight-and-the-fed-in-the-way/">On Monday it had sat unchanged at 4.975%</a>.`,
    `Equities took the move the way they have taken each step of it. The S&amp;P 500 fell 0.45%, the Dow 0.63% and the Nasdaq Composite 0.78%, the largest decline landing, again, on the index most exposed to long-dated growth.`,
    `Oil supplied the push. Brent rose 2.76% to $108.60 a barrel and West Texas Intermediate 4.45% to $105.90 after fresh strikes on Saudi Arabia's East-West pipeline. Chris Wright, the US energy secretary, called it "a brief and temporary interruption" whose length would be "measured in days".`,
    `That assurance is aimed at the oil price, but the bond market is the audience that matters. A supply disruption measured in days is something a central bank can look through. A run of them is an inflation regime, and the yield curve has spent a month pricing the second possibility.`,
    `Which brings the week to Wednesday afternoon. The Federal Open Market Committee announces its decision at 2pm Eastern with its target range at 3.50% to 3.75%, and futures on Tuesday put the probability of a quarter-point increase above 92% according to CME's FedWatch tool. A hike would be the first since July 2023.`,
    `A decision priced at 92% is not really a decision. It is a confirmation, and the information in it will come from the statement, the projections and the press conference: whether the committee describes this as a single insurance move or the start of a sequence.`,
    `Traders have already chosen a side. <a href="https://www.bloomberg.com/news/articles/2026-09-15/bond-market-s-extreme-short-counts-on-fed-to-deliver-rate-hike" rel="noopener">Bloomberg reported</a> that bond traders added to bearish positions ahead of the meeting, betting that the selloff which carried yields to their highest in almost two decades will continue.`,
    `That positioning is the risk on both sides of 2pm. A crowded short makes a hawkish surprise cheap to absorb and a cautious one expensive, and a committee that raises rates while sounding reluctant could produce the sharpest rally in Treasuries in months for reasons that have nothing to do with inflation.`,
    `The more durable point is the one the close made on Tuesday. For most of the past two decades the ten-year above five per cent was a memory. It is now a price, and every asset valued against the risk-free rate has to be valued against that price from this morning.`]}),

MU({ slug:"universal-sues-the-pipe-not-the-song", kick:"Rights",
  headline:"Universal sues the pipe, not the song",
  dek:"The complaint against DistroKid says it has no quarrel with disclosed AI music. Its target is the distributor that, by one industry count, carried three-quarters of the AI tracks sent to the charts.",
  metaDesc:"Universal Music Group has sued DistroKid in Delaware, alleging deceptive trade practices and copyright infringement tied to mass uploads of AI-generated music.",
  author:"colin-abernathy", date:"2026-09-16T12:45:00Z",
  capt:"Distribution is the last place a person decides whether a track goes out.",
  tags:[{name:"Rights",slug:"rights"},{name:"Streaming",slug:"streaming"},{name:"AI",slug:"ai"}],
  related:[
    {href:"/music/ten-per-cent-of-streams-are-not-real/",kick:"Rights",title:"A tenth of streams are not real",ago:"SEPTEMBER 14, 2026"},
    {href:"/music/universal-licenses-its-catalogue-to-the-remix/",kick:"Rights",title:"Universal stops litigating and starts licensing",ago:"SEPTEMBER 11, 2026"},
    {href:"/music/lyrics-became-the-engagement-surface/",kick:"Streaming",title:"The lyric sheet became the engagement surface",ago:"SEPTEMBER 13, 2026"},
  ],
  body:[
    `Two days ago this section noted that the industry's campaign against fraudulent streams had settled on distributors as the chokepoint. On Tuesday the largest record company in the world took the argument to court against the largest distributor that had declined to join it.`,
    `UMG Recordings, Capitol Records and Capitol CMG <a href="https://www.billboard.com/pro/universal-music-sues-distrokid-in-lawsuit-over-ai-songs/" rel="noopener">sued DistroKid in federal court in Delaware</a> on 15 September. The 52-page complaint brings five counts: breach of Delaware's Uniform Deceptive Trade Practices Act, direct and vicarious copyright infringement, and direct and vicarious infringement of pre-1972 sound recordings.`,
    `The deceptive-practices count is the interesting one, because it is not really about AI. Universal says the case is "not about the distribution of AI-generated music when clearly disclosed as such". Its claim is that DistroKid presents mass-generated tracks as artist-backed releases by real people, and presents itself as a supporter of anti-fraud measures that it does not enforce.`,
    `The examples are chosen for scale. One act called Lofi Chill is said to have released 4,562 tracks through the service in a single twelve-month period. The complaint also describes existing Universal recordings uploaded sped up, remixed, or with new vocals laid over the original, which is ordinary infringement with no model required.`,
    `Universal is seeking statutory damages of up to $150,000 per work, along with an injunction and the destruction of infringing copies. <a href="https://www.musicbusinessworldwide.com/universal-music-group-sues-distrokid-ai-generated-slop/" rel="noopener">Music Business Worldwide reports</a> that the exhibits name 1,000 specific recordings, which the suit describes as "the tip of the iceberg".`,
    `The figure that explains the choice of defendant is not in the damages section. Music Business Worldwide reports that of 1,551 AI tracks submitted to SIQA's charts in the first quarter, 90.4% were made with Suno and 75.8% were distributed by DistroKid, which handles releases for some four million artists.`,
    `The timing is not subtle either. On 14 September the IFPI announced a streaming integrity initiative under which 24 signatories committed to know-your-customer checks and to measures for identifying AI-generated content. DistroKid was not among them, and nor were UnitedMasters or Believe's TuneCore.`,
    `Universal has done this before, and the precedent points at the likely outcome. It sued Believe and TuneCore for $500m in November 2024 and settled in April this year. Litigation against a distributor has so far been a way to set terms rather than to shut anyone down.`,
    `DistroKid said it was confident in its practices and would defend itself "vigorously", <a href="https://www.hypebot.com/umg-sues-distrokid-for-alleged-ai-slop-and-copyright-theft/" rel="noopener">according to Hypebot</a>, adding that it was disappointed Universal had gone to court rather than through established industry processes.`,
    `The risk is the one this section raised on Monday. A distributor pressed to screen harder will screen crudely, and the independent artist whose single is held for review bears the cost of a fight between two companies that will both survive it. The complaint draws its line at disclosure, and that is the right line; whether the settlement keeps it there is the part worth watching.`]}),

CY({ slug:"the-breach-came-through-a-known-vpn-flaw", kick:"Data Breach",
  headline:"The breach came through a known VPN flaw",
  dek:"Japan's Digital Agency lost about 246,000 records of personal data through a remote access device. The vulnerability was rated medium and was not new.",
  metaDesc:"Japan's Digital Agency says attackers used a known VPN vulnerability to reach a shared government platform, exposing about 246,000 rows of personnel data.",
  author:"sam-porter", date:"2026-09-16T12:20:00Z",
  capt:"The device that grants remote access is the one nobody wants to take offline.",
  tags:[{name:"Threat Intelligence",slug:"threat-intelligence"},{name:"Security Operations",slug:"security-operations"},{name:"Risk",slug:"risk"}],
  related:[
    {href:"/cybersecurity/japan-ransomware-record-points-at-the-vpn/",kick:"Ransomware",title:"Japan's ransomware record has one entry point",ago:"SEPTEMBER 11, 2026"},
    {href:"/cybersecurity/the-request-came-from-a-real-government-domain/",kick:"Fraud",title:"The request came from a real government domain",ago:"SEPTEMBER 14, 2026"},
    {href:"/cybersecurity/everyone-shares-the-same-vendors/",kick:"Risk",title:"Everyone shares the same vendors",ago:"SEPTEMBER 2026"},
  ],
  body:[
    `On 11 September this desk reported that VPN equipment was the most common entry point in Japan's record half-year of ransomware. On the same day, the government agency responsible for the country's digital infrastructure disclosed that it had been breached the same way.`,
    `Japan's Digital Agency said an attacker <a href="https://www.bleepingcomputer.com/news/security/japans-digital-agency-says-vpn-flaw-exposed-246-000-personnel-records/" rel="noopener">exploited a vulnerability in a VPN device</a> to reach the Government Solution Service, a shared IT platform used across ministries and government bodies. About 246,000 rows of personal data were exposed.`,
    `The contents are specific: roughly 236,000 names, 231,000 email addresses, 94,000 telephone numbers and 1,000 workplace addresses. <a href="https://cybersecuritynews.com/japan-digital-agency-data-breach/" rel="noopener">Cybersecurity News reports</a> that about 189,000 of the records relate to public officials and 57,000 to contractors. My Number identifiers, bank details and pension numbers were not included.`,
    `The agency began investigating on 25 June, after spotting a large volume of file access from an account belonging to a maintenance and operations worker. On 9 July it established that a third party had used the VPN flaw to get in, suspended the account and cut the affected equipment off from outside connections. The Personal Information Protection Commission was notified on 15 July.`,
    `Public disclosure took another two months. The agency attributed the delay to the complexity of establishing how the intruder got in, which is a real difficulty and also a long time for 246,000 people not to know their contact details had left the building.`,
    `The detail that should trouble every security team is the vulnerability's description. The agency rated it medium severity and said it was not a zero-day. It has not named the product. A flaw that was already known, and that nobody scored as critical, was enough to open a platform shared across the Japanese government.`,
    `Severity scores measure a flaw in isolation. They do not measure where the flaw sits, and a medium-rated bug on an internet-facing appliance that hands out network access is more dangerous in practice than a critical one on a server nobody outside can reach. Patching queues ordered by score get that backwards.`,
    `The maintenance account is the second lesson. Operations staff hold broad access because their job requires it, and an intruder moving through their credentials looks at first like somebody doing that job. What gave this one away was the volume of files it opened, not the way it got in.`,
    `No misuse of the data has been detected, and the agency has warned those affected about phishing and impersonation. That warning is the realistic harm: a clean list of government email addresses matched to names and telephone numbers is exactly what a targeted campaign against officials would be built from.`,
    `The agency says it will overhaul how it manages vulnerabilities and secures external connections. It is the correct commitment, and it is the same one the police statistics made necessary <a href="/cybersecurity/japan-ransomware-record-points-at-the-vpn/">for everyone else the day before</a>.`]}),

ST({ slug:"the-bet-on-being-named-in-the-answer", kick:"Venture",
  headline:"The bet on being named in the answer",
  dek:"Profound raised $180m at $1.8bn to help brands appear in AI-generated answers. The valuation has nearly doubled since February, and the revenue it rests on is undisclosed.",
  metaDesc:"Profound has raised a $180 million Series D at a $1.8 billion valuation, co-led by Sequoia and Kleiner Perkins, to help brands show up in AI search answers.",
  author:"grace-lindqvist", date:"2026-09-16T11:50:00Z",
  capt:"A list of links could be climbed. An answer has room for three names.",
  tags:[{name:"Venture Capital",slug:"venture-capital"},{name:"Enterprise AI",slug:"enterprise-ai"},{name:"Media",slug:"media"}],
  related:[
    {href:"/startups/the-money-moves-to-the-layer-that-retries/",kick:"Venture",title:"The money moves to the layer that retries",ago:"SEPTEMBER 14, 2026"},
    {href:"/startups/revenue-per-employee-is-the-pitch/",kick:"Startups",title:"Revenue per employee is the pitch",ago:"SEPTEMBER 2026"},
    {href:"/startups/two-markets-wearing-one-label/",kick:"Venture Capital",title:"Two markets wearing one label",ago:"SEPTEMBER 2026"},
  ],
  body:[
    `Search engine optimisation was a business built on a list. A query returned ten links, the links had an order, and an industry grew up around moving a client a few places up it. An AI assistant returns a paragraph, and a paragraph has room for perhaps three names.`,
    `Profound sells the attempt to be one of them. The New York company <a href="https://www.globenewswire.com/news-release/2026/09/15/3362180/0/en/profound-raises-180m-series-d-at-1-8b-valuation-to-build-the-ai-platform-for-marketing-teams.html" rel="noopener">announced a $180m Series D</a> on 15 September at a valuation of $1.8bn, co-led by Sequoia Capital and Kleiner Perkins, with Lightspeed Venture Partners, Khosla Ventures, Saga Ventures, Evantic and South Park Commons participating.`,
    `The pace is the first number to notice. In February Profound raised $96m at $1bn in a round led by Lightspeed. Seven months later the price is 80% higher, and <a href="https://thenextweb.com/news/profound-180m-series-d-ai-answer-engine-optimisation" rel="noopener">The Next Web puts</a> total funding since the company's founding in 2024 at more than $335m.`,
    `The product began as measurement. Profound tracks how brands appear in answers from ChatGPT, Perplexity, Gemini and Google's AI Overviews, which is harder than it sounds: there is no fixed ranking to observe, the same question returns different answers, and the engines do not publish what moves them.`,
    `It has since moved from watching to acting. The company now sells an agent it calls AI Marketer, which analyses brand data and deploys sub-agents to make changes, and an Ads Studio for managing paid campaigns across OpenAI, Google and Meta. That second product is the telling one. When the answer engines sell placement directly, a measurement company has to follow the money into paid media or be left describing a channel it cannot influence.`,
    `The traction claims are real but partial. Profound says it works with more than 1,000 enterprise brands, including a third of the Fortune 100, and names Walmart, Comcast, Estée Lauder, Ramp, Figma and MongoDB among them. <a href="https://techcrunch.com/2026/09/15/aeo-startup-profound-hits-unicorn-valuation-raises-180m-series-d-7-months-after-last-round/" rel="noopener">TechCrunch reports</a> that revenue has tripled in the past six months.`,
    `Tripled from what is the question nobody has answered. The company has not disclosed its revenue, and without it a valuation of $1.8bn is a judgement about the category as much as about the business, which The Next Web noted in almost those words.`,
    `James Cadwallader, the chief executive, who founded the company with chief technology officer Dylan Babbs, frames the pitch around a new kind of employee, the forward-deployed marketing engineer, a role he says "is becoming one of the most important roles in marketing, and this platform we built is for them".`,
    `The structural risk is not a competitor with a better dashboard. It is the platforms. Google built Search Console and gave it away because understanding search made advertisers spend more on it, and any assistant that sells ads has the same incentive to tell brands, for free, how they appear.`,
    `Against that, the investors are betting that the answer engines will stay plural and opaque for long enough that someone neutral has to measure all of them at once. That was a good bet for a decade in search. The new money will fund research labs in New York and San Francisco, which is an acknowledgement that measuring a model's answers is now a research problem rather than a reporting one.`]}),

];
