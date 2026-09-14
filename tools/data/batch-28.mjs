/** Batch 28 — two new editions of The Divide, 14 September 2026. Short by
 *  design: these are columns, not features. Each side argues from facts the
 *  other side would accept; no statistics are invented to win a point. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"" } });
const DV = P("divide","The Divide","the-divide");
const TAGS = (...t) => [{name:"The Divide",slug:"the-divide"}, ...t];

export default [

DV({ slug:"divide-return-to-office-left", kick:"Opinion", opinion:true,
  headline:"The commute is the part nobody is paying for",
  dek:"A mandate does not create the hours it consumes. It moves them, from the worker's day to the company's, and sends no invoice.",
  metaDesc:"Return-to-office mandates move an uncompensated cost onto workers, and arrive most often at companies that are also reducing headcount.",
  author:"ruth-calloway", date:"2026-09-14T21:40:00Z",
  tags:TAGS({name:"Workplace",slug:"workplace"},{name:"Workforce",slug:"workforce"}),
  related:[
    {href:"/divide/divide-return-to-office-right/",kick:"Opinion",title:"Somebody has to teach the twenty-three-year-old",ago:"SEPTEMBER 14, 2026"},
    {href:"/business/the-office-is-a-quality-trade/",kick:"Workplace",title:"The office is a quality trade",ago:"SEPTEMBER 2026"},
    {href:"/divide/divide-free-college-left/",kick:"Opinion",title:"Public college should cost what public school costs: nothing",ago:"AUGUST 2026"},
  ],
  body:[
    `Every argument for the mandate is made in the language of culture, and every cost of it is paid in the currency of time. An hour each way is ten hours a week, unpaid, and nobody who signs the policy is counting them.`,
    `Add what the hour drags behind it. The fare or the fuel, the second car, the childcare that has to start earlier and end later, the lunch that used to be made at home. These are real expenditures out of after-tax pay, and the company that requires them reimburses none of it.`,
    `If presence is genuinely worth what its advocates say, then buy it. Pay for the commute, subsidise the childcare, shorten the day at both ends. A firm that believes the office produces value should have no difficulty paying for the thing that produces it. The reluctance is informative.`,
    `Then there is the timing. The mandates arrive loudest at companies that are also, separately and coincidentally, looking to reduce headcount, and a rule that a certain kind of employee cannot comply with is a layoff that does not have to be announced, funded or explained.`,
    `<a href="/business/the-office-is-a-quality-trade/">We have argued on this site</a> that the office can be a fair trade when it is offered as one. A trade has two sides. This one has an instruction on the first side and a bill on the second.`]}),

DV({ slug:"divide-return-to-office-right", kick:"Opinion", opinion:true,
  headline:"Somebody has to teach the twenty-three-year-old",
  dek:"Remote work is comfortable for people who already have a network and a reputation. It is a closed door for the person who has neither.",
  metaDesc:"The case for the office rests on apprenticeship: the people who benefit most from remote work are the ones who were trained in a room.",
  author:"grant-whitmore", date:"2026-09-14T21:40:00Z",
  tags:TAGS({name:"Workplace",slug:"workplace"},{name:"Workforce",slug:"workforce"}),
  related:[
    {href:"/divide/divide-return-to-office-left/",kick:"Opinion",title:"The commute is the part nobody is paying for",ago:"SEPTEMBER 14, 2026"},
    {href:"/business/the-office-is-a-quality-trade/",kick:"Workplace",title:"The office is a quality trade",ago:"SEPTEMBER 2026"},
    {href:"/divide/divide-free-college-right/",kick:"Opinion",title:"Free college is a subsidy in search of a problem",ago:"AUGUST 2026"},
  ],
  body:[
    `Notice who makes the case for working from home. It is almost always somebody with fifteen years of contacts, a reputation that precedes them into a meeting and a manager who already knows what they are worth. For that person the office is pure overhead, and they are right.`,
    `Now take the twenty-three-year-old. No network, no track record, no idea which of their instincts are good. What they need is the thing that has never once been delivered on a scheduled call: the overheard argument, the correction that lasts four seconds, the senior person who turns their chair around because something in the room sounded wrong.`,
    `That is apprenticeship, and it is not a nostalgia. It is how a profession reproduces itself, and it is the first thing a fully distributed company quietly stops doing, because nobody's calendar has a slot marked "notice what the new person is getting wrong".`,
    `A firm is also entitled to decide how it works. Employment is an exchange, not a grant, and the terms are set at the front rather than renegotiated afterwards by whoever finds the commute inconvenient. Hiring on one basis and then declining the basis is not a principle.`,
    `The honest version of the mandate is narrow, and worth defending in that form: not five days because five is a number, but enough days that the people who have everything to learn are in a position to learn it from the people who already have.`]}),

DV({ slug:"divide-ticket-pricing-left", kick:"Opinion", opinion:true,
  headline:"Dynamic pricing puts a toll booth on affection",
  dek:"A price that rises with how much you want the thing is not a market discovering value. It is a meter attached to devotion.",
  metaDesc:"Dynamic ticket pricing charges the most to the fans who care most, and the disclosure arrives after the decision to queue has been made.",
  author:"ruth-calloway", date:"2026-09-14T21:10:00Z",
  tags:TAGS({name:"Live Business",slug:"live-business"},{name:"Rights",slug:"rights"}),
  related:[
    {href:"/divide/divide-ticket-pricing-right/",kick:"Opinion",title:"The ticket was always underpriced",ago:"SEPTEMBER 14, 2026"},
    {href:"/music/all-in-pricing-comes-to-tickets/",kick:"Live Business",title:"All-in pricing comes to tickets",ago:"SEPTEMBER 2026"},
    {href:"/divide/divide-wealth-tax-left/",kick:"Opinion",title:"Tax fortunes, not just paychecks",ago:"AUGUST 2026"},
  ],
  body:[
    `Ordinary pricing asks what a thing is worth. Dynamic pricing asks how badly you want it, which is a different question, and the person who has waited eleven years to see this band answers it worst.`,
    `The mechanism is designed to find exactly that person. Demand surges at the moment of sale, the price follows it upward in real time, and the fan who cared enough to be in the queue at ten in the morning is the one the system identifies as willing to pay more. Indifference is rewarded with a cheaper seat later.`,
    `What makes it feel like a trick is the sequencing. The decision to queue is made against an advertised price; the price that appears at checkout is a different one, arrived at after you had already spent the morning. <a href="/music/all-in-pricing-comes-to-tickets/">All-in pricing fixed the fees</a>, which was worth doing, and left the swing untouched.`,
    `None of this requires banning anything. Publish the ceiling before the sale opens, cap the movement within a single on-sale, and hold a fixed allocation at the advertised price. A fan should be able to find out what a night out costs before deciding to want it.`,
    `The defence is that the money reaches the artist rather than a broker. Sometimes it does. That is an argument about who collects the toll, not about whether the road should have one.`]}),

DV({ slug:"divide-ticket-pricing-right", kick:"Opinion", opinion:true,
  headline:"The ticket was always underpriced",
  dek:"For forty years the gap between face value and what people would pay went to brokers. Dynamic pricing is an argument about who collects it.",
  metaDesc:"The case for dynamic ticket pricing: the difference between face value and market value was always captured by resellers, not fans.",
  author:"grant-whitmore", date:"2026-09-14T21:10:00Z",
  tags:TAGS({name:"Live Business",slug:"live-business"},{name:"Rights",slug:"rights"}),
  related:[
    {href:"/divide/divide-ticket-pricing-left/",kick:"Opinion",title:"Dynamic pricing puts a toll booth on affection",ago:"SEPTEMBER 14, 2026"},
    {href:"/music/all-in-pricing-comes-to-tickets/",kick:"Live Business",title:"All-in pricing comes to tickets",ago:"SEPTEMBER 2026"},
    {href:"/divide/divide-wealth-tax-right/",kick:"Opinion",title:"A wealth tax is a machine for capital destruction",ago:"AUGUST 2026"},
  ],
  body:[
    `Hold the anger about the price for one moment and ask where the money used to go. A sold-out show priced below what the room would bear does not stay cheap. It gets bought in bulk within seconds and sold on at the real price by somebody who will never attend a concert in their life.`,
    `That gap has existed for as long as ticketed music has, and for decades it was collected entirely by brokers. The face value was a polite fiction, and the fan who paid it was mostly the fan who got lucky, not the fan who cared most.`,
    `Dynamic pricing is the promoter declining to keep donating that difference. Whatever else is wrong with it, the money ends up with the people who built the show rather than with an intermediary who added a browser script. That is a better destination, and pretending otherwise requires nostalgia for a system that was quietly worse.`,
    `A cap does not remove the gap; it relocates it. Hold the price below clearing and the difference reappears on the resale market within the hour, which is precisely where it was before anyone objected to the practice. You cannot legislate away the fact that more people want the room than fit in it.`,
    `The real grievance is not the price but the surprise, and that is fixable without price control. Say the range in the announcement, show the all-in figure from the first click, and let people decide. Treat the audience as adults and most of the argument goes away.`]}),

];
