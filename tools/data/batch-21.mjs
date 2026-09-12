/** Batch 21 — verified against the cited reporting before writing. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const MK=P("markets","Markets","markets");

export default [

MK({ slug:"four-ninety-seven-and-the-bull-holds", kick:"Fixed Income",
  headline:"The ten-year reaches 4.97% and the bull holds",
  dek:"Yields at a level that would normally end a rally have not ended this one. The explanation on offer is that the buying is coming from inside the technology sector.",
  metaDesc:"The ten-year Treasury yield reached 4.97%, capping a months-long selloff, without breaking an equity market held up by AI capital spending.",
  author:"priya-raghavan", date:"2026-09-12T16:10:00Z",
  capt:"A yield is only a threshold if something breaks when it is crossed.",
  tags:[{name:"Fixed Income",slug:"fixed-income"},{name:"Capital Markets",slug:"capital-markets"},{name:"AI Infrastructure",slug:"ai-infrastructure"}],
  related:[
    {href:"/markets/oil-spike-pushes-yields-to-multi-year-highs/",kick:"Fixed Income",title:"An oil shock arrives in the bond market first",ago:"SEPTEMBER 2026"},
    {href:"/markets/treasury-yields-buyback-disappoints/",kick:"Fixed Income",title:"Yields hit 4.86% as a buyback lands short",ago:"SEPTEMBER 2026"},
    {href:"/markets/cftc-cdor-tiie-swap-clearing-transition/",kick:"Market Structure",title:"CFTC retires CDOR and TIIE from clearing",ago:"SEPTEMBER 2026"},
  ],
  body:[
    `Round numbers do not have economic properties. What makes five per cent on the ten-year worth discussing is the list of things that have historically stopped working before it arrives, and the fact that this week none of them did.`,
    `The benchmark ten-year Treasury yield climbed to 4.97% late on Thursday. <a href="https://www.businessinsider.com/bonds-bond-market-10-year-treasury-yields-rates-stocks-impact-2026-9" rel="noopener">Business Insider reported</a> that this capped a months-long selloff driven by higher oil prices, sticky inflation, heavy government borrowing and expectations that the Federal Reserve holds rates higher for longer.`,
    `Each of those four is a different problem wearing the same number. Oil is a supply shock, inflation a persistence problem, borrowing a supply-of-paper problem, and policy expectation a forecast. They arrived together, which is why the move has been large and orderly at once.`,
    `The selling continued even after the Treasury tripled the size of one of its long-dated buybacks, <a href="/markets/treasury-yields-buyback-disappoints/">an operation the market judged too small when it landed on Wednesday</a>. Support was offered and the market kept selling, which is the most informative sequence of the week.`,
    `What has not happened is the part worth explaining. Economists at TS Lombard argued in a Wednesday note that rising yields are not yet an equity killer, on the reasoning that this rise is not the kind that normally ends a bull market.`,
    `Their distinction is between causes. A yield rise driven by an overheating economy signals a central bank that will have to break something; a rise driven by supply shocks and by changes in the Treasury market itself carries no such implication. Freya Beamish and Davide Oneglia place this one in the second category.`,
    `The support underneath equities, on their account, is capital spending on artificial intelligence. Companies are still committing to data centres and infrastructure, and that spending sustains investment and demand regardless of what the discount rate does.`,
    `They put the mechanism more bluntly than most sell-side notes manage: when technology companies are chasing the notion of infinite demand, it is quite hard to slow them down with a few basis points. A firm that believes it is in a land grab does not run a discounted cash flow on the marginal data centre.`,
    `That is a coherent explanation and an uncomfortable one, because it locates the market's resilience in the conviction of a single sector rather than in the breadth of the economy.`,
    `The question they raise at the end is the one to carry into the autumn: whether the spending spreads beyond technology. At present much of the demand originates inside the industry doing the spending, which is a circuit rather than a cycle.`,
    `Which sets the real test, and it is not 5%. If AI capital expenditure slows, the yield level stops being survivable at exactly the moment the thing that was offsetting it goes away. The number to watch is not the one on the ten-year.`]}),

];
