/** Batch 25 — 14 September 2026, second run. Verified against the cited
 *  reporting. The Guardian piece is a signed first-person article by Philip
 *  Selway and is attributed to him throughout. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const TE=P("technology","Technology","technology"), MU=P("music","Music","music"), CU=P("culture","Culture","culture");

export default [

TE({ slug:"four-hundred-and-twenty-five-billion-in-a-quarter", kick:"Semiconductors",
  headline:"A quarter of a trillion dollars of chips, and then some",
  dek:"Semiconductor revenue reached $425bn in three months, a record 31.4% rise on the previous quarter. Memory and price, not volume, did most of the work.",
  metaDesc:"Global semiconductor revenue passed $425 billion in the second quarter of 2026, up a record 31.4% quarter on quarter, according to Omdia.",
  author:"tom-kessler", date:"2026-09-14T15:50:00Z",
  capt:"A cycle this steep is usually price before it is volume.",
  tags:[{name:"Semiconductors",slug:"semiconductors"},{name:"AI Infrastructure",slug:"ai-infrastructure"},{name:"Supply Chain",slug:"supply-chain"}],
  related:[
    {href:"/technology/china-clears-domestic-quartz-but-not-the-crucible/",kick:"Supply Chain",title:"China clears its own quartz, but not for the part that counts",ago:"SEPTEMBER 2026"},
    {href:"/technology/error-correction-stops-being-theory/",kick:"Quantum",title:"Error correction stops being theory",ago:"SEPTEMBER 2026"},
    {href:"/technology/satellite-joins-the-procurement-list/",kick:"Networking",title:"Satellite joins the procurement list",ago:"SEPTEMBER 2026"},
  ],
  body:[
    `Semiconductor cycles are usually described in years. This one is being described in quarters, which is itself the most useful piece of information in the numbers.`,
    `Global semiconductor revenue passed $425 billion in the second quarter of 2026, a record 31.4% rise on the quarter before. <a href="https://www.telecomlead.com/chips/semiconductor-revenue-hits-record-425-billion-as-ai-and-memory-drive-telecom-chip-demand-124879" rel="noopener">The figures come from Omdia</a>, which puts first-half revenue at $752 billion.`,
    `The firm expects the third quarter to exceed $500 billion, which would take the first nine months of the year above $1.25 trillion. An industry that took decades to reach half a trillion annually is now being forecast to do that in a quarter.`,
    `Three things are named as drivers: artificial intelligence infrastructure, surging memory demand and higher chip prices. The order matters less than the third item, because price and volume are very different foundations for a record.`,
    `A 31.4% quarterly rise cannot be manufacturing capacity. Fabs do not expand a third in ninety days; wafer starts are committed years ahead, and advanced packaging is the constraint everybody has been describing since 2024. Most of that increase is what the same silicon now costs.`,
    `Memory is where that shows most clearly. High-bandwidth memory is allocated rather than sold, its supply is concentrated among three manufacturers, and an AI accelerator cannot ship without it, which is the definition of a component that can be priced rather than merely quoted.`,
    `That makes the number a measure of scarcity as much as of demand. Revenue rising faster than output is what a shortage looks like in an income statement, and it is not the same signal as a market growing because more customers are buying more parts.`,
    `The telecom read-through is the part the industry itself is watching. Mobile networks are becoming computing estates, with 5G-Advanced, AI-RAN, cloud-native cores, optical and edge deployments all adding processors, memory and networking silicon to sites that used to hold radios.`,
    `Data centre construction pulls on the same networks from the other end. Connecting clouds, data centres and enterprise customers requires high-capacity transport, which is why <a href="/policy/fcc-leaves-the-transceiver-alone/">the optical module has become a trade-policy object</a> rather than an ordinary component.`,
    `The risk in a cycle shaped this way is the one every memory cycle has had. Pricing power built on allocation reverses quickly when allocation eases, and the revenue that arrived through price leaves faster than the revenue that arrived through customers.`,
    `Which is the question to hold against the forecast. A $500 billion quarter is plausible on current constraints. Whether it describes an industry that has grown or an industry that is charging more for the same scarce parts will only be answerable when the parts stop being scarce.`]}),

MU({ slug:"therapy-reaches-the-tours-that-cannot-afford-it", kick:"Touring",
  headline:"Therapy reaches the tours that cannot afford it",
  dek:"Large tours have carried therapists for years. A £272,000 fund is an attempt to extend that to the smaller tours where the pressure is identical and the budget is not.",
  metaDesc:"The Pay It Forward Fund will finance mental health support for artists and crews on smaller tours, with £272,000 funding 150 tour teams over three years.",
  author:"colin-abernathy", date:"2026-09-14T15:48:00Z",
  capt:"The conditions do not scale down with the budget.",
  tags:[{name:"Touring",slug:"touring"},{name:"Rights",slug:"rights"},{name:"Media",slug:"media"}],
  related:[
    {href:"/music/ten-per-cent-of-streams-are-not-real/",kick:"Rights",title:"A tenth of streams are not real",ago:"SEPTEMBER 2026"},
    {href:"/music/lyrics-became-the-engagement-surface/",kick:"Streaming",title:"The lyric sheet became the engagement surface",ago:"SEPTEMBER 2026"},
    {href:"/music/universal-licenses-its-catalogue-to-the-remix/",kick:"Rights",title:"Universal stops litigating and starts licensing",ago:"SEPTEMBER 2026"},
  ],
  body:[
    `Touring is one of the few remaining parts of the music business where money is reliably made, and it is organised in a way that concentrates its costs on the people least able to carry them.`,
    `A new fund is aimed at one of those costs. <a href="https://www.theguardian.com/music/2026/sep/14/touring-musicians-mental-health-therapy-pay-it-forward-fund" rel="noopener">Writing in the Guardian</a>, the Radiohead drummer Philip Selway set out his backing for the Pay It Forward Fund, established by Tamsin Embleton and the Music Industry Therapist Collective to provide mental health support for musicians and crews on smaller tours.`,
    `The structure is the interesting part. The scheme grows out of the provision MITC already makes to larger tours, which is a way of saying that the service exists and has been priced beyond most of the acts who need it.`,
    `Initially £272,000 will finance 150 tour teams of practitioners over three years, delivering occupational health, mental health education and pastoral care for crews and artists on smaller tours.`,
    `That is a modest sum against the size of the touring industry, and a specific one: it funds practitioners rather than awareness, which is the distinction between a programme and a campaign.`,
    `Selway's account of why it is needed is first-hand and worth reading rather than summarising. He describes Radiohead signing after five or six years playing mainly in Oxford, then spending the second half of 1993 in the United States, and an anxiety that surfaced in his playing rather than in anything he said.`,
    `He names the mechanics plainly: emotional and geographical displacement, living on top of each other, sound check to gig to meeting people afterwards, and no way off the roundabout until the tour ends.`,
    `The observation most likely to be recognised by anyone who has worked a tour is about silence. It is difficult to raise because nobody wants to rock the boat, and because other people are going through the same thing, so raising it feels like adding to their load.`,
    `The design detail that matters is lived experience. The scheme's premise is that a practitioner who knows the industry is more use than one who does not, because the conditions being described are not ordinary working conditions and explaining them consumes the session.`,
    `What the fund does not change is the economics underneath. Small tours run on margins that do not accommodate a travelling therapist, and a three-year fund is a bridge across that gap rather than a repair to it.`,
    `Which is the honest way to read it. This is the industry acknowledging that its welfare provision currently tracks budget rather than need, and putting a modest, time-limited amount of money against the difference.`]}),

CU({ slug:"stones-throw-at-thirty-sells-curation", kick:"Media",
  headline:"At thirty, an independent label sells curation",
  dek:"Stones Throw marks three decades with a festival, two listening bars and a radio show. In a market with more music than anyone can hear, the product is judgement.",
  metaDesc:"Stones Throw marks its 30th anniversary with a three-day Highland Park festival, as founder Chris Manak builds a business around human curation and listening bars.",
  author:"colin-abernathy", date:"2026-09-14T15:46:00Z",
  capt:"When supply is infinite, the scarce thing is somebody choosing.",
  tags:[{name:"Media",slug:"media"},{name:"Streaming",slug:"streaming"},{name:"Rights",slug:"rights"}],
  related:[
    {href:"/culture/producers-ask-governments-to-fund-local-stories/",kick:"Media",title:"Producers ask governments to make streamers pay for local stories",ago:"SEPTEMBER 2026"},
    {href:"/culture/animation-follows-the-pipeline/",kick:"Media",title:"Animation follows the pipeline",ago:"SEPTEMBER 2026"},
    {href:"/culture/games-became-the-safest-bet/",kick:"Film",title:"Games became the safest bet",ago:"SEPTEMBER 2026"},
  ],
  body:[
    `An independent record label reaching thirty is unusual enough to be worth examining as a business rather than celebrating as a survival story. Almost everything about the industry it started in has been replaced twice.`,
    `Stones Throw is marking the anniversary with a three-day festival in Highland Park. <a href="https://www.latimes.com/entertainment-arts/music/story/2026-09-14/stones-throw-30th-anniversary-peanut-butter-wolf-highland-park" rel="noopener">The Los Angeles Times reported</a> on the label and its founder Chris Manak, who performs as Peanut Butter Wolf, and on a Grammy-winning catalogue that helped reshape underground funk, rock and rap.`,
    `The label's answer to the streaming era is not a streaming strategy. Manak runs two Highland Park listening bars, Gold Line and Palomino, and a show on KCRW, all of which are businesses in rooms and on airwaves rather than in feeds.`,
    `The through line the paper identifies is deep listening and human curation set against streaming-era oversaturation. That sounds like a sensibility and is closer to a market position.`,
    `The arithmetic supports it. When catalogue is effectively infinite and the cost of adding another track is near zero, the scarce input is not music but attention, and the service that allocates attention credibly is the one with pricing power.`,
    `Algorithms allocate attention at enormous scale and with no reputation at stake. A label that has been choosing records for thirty years is staking something when it puts its name on one, and that is the difference a listener is being asked to pay for.`,
    `The physical spaces are the part most likely to be misread as nostalgia. A listening bar is a venue with a margin, in a city where <a href="/music/all-in-pricing-comes-to-tickets/">the economics of live music have been tightening for years</a>, and it monetises the same judgement the label sells.`,
    `It also diversifies away from recorded income, which for an independent has never been reliable. A label with bars and a radio slot has revenue that does not depend on a per-stream rate set by somebody else.`,
    `The report is candid about the conditions around it, describing increasingly precarious touring and nightlife economies. Both of those are the businesses Manak has chosen to add, which makes the strategy a bet rather than a hedge.`,
    `Thirty years also means a catalogue, and a catalogue is the asset that has appreciated most in this cycle. Rights that were cheap when the label was signing them now sit in the category institutional money spent the last five years buying.`,
    `What the anniversary really demonstrates is that independence survived by becoming several businesses. The label is the name on the door; the room, the show and the catalogue are what pay for keeping it open.`]}),

];
