/** Batch 59 — Monday 5 October 2026. One piece, client-supplied copy
 *  published verbatim (headline, dek, body, subheads and links exactly as
 *  supplied): Asher Lara and Iconify Media, in Business. Not the lead: dated
 *  before today's lead so the front zone keeps OKXICE on top.
 *
 *  Photograph: courtesy of Asher Lara, hosted on the site at
 *  /assets/img/stories/asher-lara-iconify-media.jpg (cropped to 16:9 from a
 *  1600x2000 portrait so his face sits inside every crop). Credit in
 *  heroes.json. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Courtesy of Asher Lara" } });
const BU=P("business","Business","business");

export default [

BU({ slug:"creator-agencies-iconify-media-platform-risk", kick:"Creator Economy",
  headline:"Asher Lara Is Selling the Creator Playbook. The Platforms Still Own the Field.",
  dek:"Asher Lara earns more than most creators ever will. His agency is selling his methods to companies that don't control the feeds they post into.",
  metaDesc:"Creator ad spending hit $37 billion in 2025. Asher Lara's Iconify Media is betting businesses will also pay for creator methods. The platforms still set the rules.",
  author:"priya-raghavan", date:"2026-10-05T12:55:00Z",
  capt:"Asher Lara",
  tags:[{name:"Media",slug:"media"},{name:"Startups",slug:"startups"}],
  related:[
    {href:"/business/thirty-films-a-year-and-a-monitor-for-cnn/",kick:"Antitrust",title:"Thirty films a year, a monitor for CNN",ago:"SEPTEMBER 20, 2026"},
    {href:"/culture/stones-throw-at-thirty-sells-curation/",kick:"Media",title:"At thirty, an independent label sells curation",ago:"SEPTEMBER 14, 2026"},
    {href:"/culture/producers-ask-governments-to-fund-local-stories/",kick:"Media",title:"Producers ask governments to make streamers pay for local stories",ago:"SEPTEMBER 11, 2026"},
  ],
  body:[
    "U.S. advertisers spent about $37 billion on creator ads in 2025, up 26% from 2024, by the <a href=\"https://www.iab.com/news/creator-economy-ad-spend-to-reach-37-billion-in-2025-growing-4x-faster-than-total-media-industry-according-to-iab/\" rel=\"noopener\">Interactive Advertising Bureau</a>'s estimate. The trade group said that pace was roughly four times the growth of the media industry as a whole. Nearly half of advertisers it surveyed, 48%, now call creators a must-buy.",
    "Most of that money pays creators to put brands in front of their audiences. A smaller business sits beside it. An influencer deal rents attention a creator has already built. A creator-led agency promises to help a business build an audience of its own, which takes longer and leaves the client carrying the platform risk.",
    "Asher Lara runs one of those agencies, Iconify Media. His earnings also put him in a small segment of the creator market. <a href=\"https://www.goldmansachs.com/insights/articles/the-creator-economy-could-approach-half-a-trillion-dollars-by-2027\" rel=\"noopener\">Goldman Sachs Research</a> counts about 50 million creators worldwide and estimates only about 4% earn more than $100,000 a year. On <a href=\"https://podcasts.happyscribe.com/coffeez-with-joe-shalaby/pokemon-cards-beat-the-s-p-500-asher-lara-coffeez-ep\" rel=\"noopener\">Coffeez</a>, a business podcast hosted by mortgage executive Joseph Shalaby, Lara said his YouTube videos alone brought in around $50,000 a month in 2024. That figure is his own.",
    "<h2>What is being sold</h2>",
    "Iconify's pitch rests on habits Lara built on his own channel. \"Posting constantly means nothing without understanding what actually resonates,\" he has said. He tracked where viewers dropped off, how long they watched and which formats drew comments instead of quick exits, according to a contributor profile on <a href=\"https://www.nylon.com/life/behind-the-views-how-asher-lara-turned-content-expertise-into-agency\" rel=\"noopener\">Nylon</a>'s site. He tested hooks, formats, packaging, tone and posting cadence. He reports gaining 1 million YouTube subscribers in 30 days, and his channel had reached 8.5 million by January.",
    "The signals aren't secret. YouTube says its recommendations draw on viewing history, likes, dislikes, subscriptions and answers to satisfaction surveys. What Iconify sells is the discipline to read those numbers every day and change course quickly. For a client, the agency starts with what the business wants to be known for, fits formats to attention spans on each platform and sets a schedule the client can keep.",
    "<h2>Two descriptions of one business</h2>",
    "The company's public descriptions don't fully match. The Nylon profile quotes Iconify's line, \"We don't run ads, we build channels people actually enjoy watching.\" On the Coffeez episode, Lara described the agency as helping businesses grow \"through organic or paid content.\"",
    "For a buyer, the difference matters. An organic channel can become an asset that keeps working after a contract ends, if it works at all. Paid content buys reach that stops when the spending stops. Plenty of agencies sell both. Iconify's public pitch leans hard on the first.",
    "<h2>A thin public record</h2>",
    "Iconify's published results are few and self-reported. On LinkedIn, Lara described a client who went from 30,000 to 100,000 YouTube subscribers in two months after the agency reworked her positioning, topics, packaging and publishing. Komposite News could not independently verify those figures.",
    "The other public case is Shalaby himself, Iconify's first official client. Videos he made with Lara reached millions of views and brought in customers, according to contributor profiles published in February. Neither case comes with revenue numbers, client retention or cost.",
    "<h2>The platform problem</h2>",
    "The larger risk is built into the model. Goldman's analysts listed AI-driven recommendation engines and engagement data among the tools platforms use to compete for creators. Those systems belong to YouTube, TikTok and Meta. They change constantly and with little explanation. A tactic that lifts reach one quarter can stop working the next.",
    "That cuts both ways for an agency. Constant change is why businesses hire outside help in the first place. It is also why any method has a short shelf life. Lara's defense is proximity. He still publishes on the same platforms as his clients and adjusts as the numbers move.",
    "A second dependency is harder to fix. Iconify's method grew out of one creator's judgment. As the client list grows, more of that judgment has to come from people other than Lara.",
    "Advertisers have clearly decided creators are worth paying. Whether they will pay an agency to build a channel from nothing, instead of renting an audience that already exists, is the question Iconify is betting on. The company hasn't released the numbers that would answer it.",
  ] }),

];
