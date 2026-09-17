/** Batch 33 — a contributor essay, 17 September 2026. Written by Julio Rojas
 *  in Spanish as "¿De qué hablamos cuando hablamos de superinteligencia?" and
 *  translated closely: the argument, order and voice are his. Editorial
 *  changes are limited to merging a repeated sentence (the Nokia line appears
 *  twice in the original), typographic fixes, and two contextual links.
 *  The headline keeps his Carver echo; the full word would exceed the title
 *  length limit, so it uses the acronym he introduces in the first paragraph.
 *  Factual references were checked: Bostrom's 2014 definition and his IQ
 *  6,455 remark, Good (1965), Kurzweil's 2005 and 2024 dates, Yudkowsky and
 *  Soares (2025), and Yudkowsky's atoms line. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const AI=P("ai","AI","ai");

export default [

AI({ slug:"opinion-what-we-talk-about-when-we-talk-about-asi", kick:"Opinion",
  headline:"What we talk about when we talk about ASI",
  dek:"Not the AI that writes suspiciously good emails. A mind as far above us as we are above a chimpanzee, which three very different thinkers agree is coming, and soon.",
  metaDesc:"Julio Rojas explains what superintelligence means, from Bostrom's definition to Kurzweil's dates and Yudkowsky's warning, and why no lab can stop alone.",
  author:"julio-rojas", date:"2026-09-17T13:30:00Z",
  capt:"The scale is the point: the analogies work where the numbers stop.",
  tags:[{name:"AI Governance",slug:"ai-governance"},{name:"AI Security",slug:"ai-security"},{name:"Opinion",slug:"opinion"}],
  related:[
    {href:"/ai/opinion-catch-me-if-you-can/",kick:"Opinion",title:"Catch me if you can",ago:"SEPTEMBER 13, 2026"},
    {href:"/ai/both-capitals-say-no-to-pacing/",kick:"AI Security",title:"Both capitals say no within 48 hours",ago:"SEPTEMBER 14, 2026"},
    {href:"/ai/the-price-rises-as-the-listing-recedes/",kick:"Capital",title:"The price rises as the listing recedes",ago:"SEPTEMBER 16, 2026"},
  ],
  body:[
    `When everyone talks about an artificial intelligence that could <a href="/ai/opinion-catch-me-if-you-can/">endanger our civilisation</a>, we are not talking about the AI that writes suspiciously good emails, or the one you use every day to put together presentations. We are talking about a superintelligence, or by its famous initials, ASI: artificial superintelligence.`,
    `But what is that, really?`,
    `In 2014 Nick Bostrom, the Swedish philosopher who then ran an institute at Oxford, published <em>Superintelligence: Paths, Dangers, Strategies</em>. In it he set down a definition that still holds: an intellect that greatly exceeds humans in virtually every domain we care about. Science, strategy, persuasion, invention.`,
    `That is superintelligence. A mind that does what we do, better, faster and on a thousand fronts at once. Its IQ? Perhaps a thousand times ours. Bostrom himself warns that IQ stops being useful: a number like 6,455 would tell us nothing about what it could actually do. The analogies are more illuminating. It would be as far above us as a human is above a chimpanzee, a beetle or a frog.`,
    `The AI you use today, whichever one it is &mdash; the one that writes, translates, codes and converses, that shines at some tasks and stumbles at others &mdash; is at its Nokia 1992 moment. Artificial general intelligence, the famous AGI, the point at which a machine matches a person at any intellectual task, would be the new 2026 folding iPhone. Superintelligence is the step after that. According to more than a few people, it is also the shortest step. And it has no shape, because it is unimaginable.`,
    `The reason is mechanical. A machine capable of improving its own design also improves its capacity to improve itself &mdash; the famous recursive self-improvement. Each cycle takes less time than the one before. The mathematician I. J. Good called it an intelligence explosion in 1965, when all of this was science fiction (or nearly).`,
    `Ray Kurzweil has spent decades putting a date on it. In <em>The Singularity Is Near</em>, in 2005, he set AGI for 2029 and the singularity for 2045. In 2024 he published <em>The Singularity Is Nearer</em> and stood by both dates. His vision is luminous: we will merge with the machines and multiply our intelligence millions of times over. For Kurzweil, the superintelligence will be us, expanded.`,
    `Eliezer Yudkowsky sees the same horizon in a different light. He has been sounding the alarm for more than twenty years from the Machine Intelligence Research Institute, and in 2025 he published <em>If Anyone Builds It, Everyone Dies</em> with Nate Soares. The title is the thesis. His argument: a superior mind will pursue its goals with total efficiency, and if those goals drift a millimetre from ours, we are left by the roadside. Yudkowsky once put it coldly (and with a rather sad humour): we are made of atoms that such a mind could use for something else.`,
    `Bostrom. Kurzweil. Yudkowsky. All three believe superintelligence will arrive soon if nobody intervenes. All three believe it will arrive fast. All three believe it will change the species. And all three believe the window to decide how it arrives is open now, and not for long.`,
    `Stopping it would take something close to impossible: that on a date in the near future, say the second Tuesday of November at nine in the morning, every company halts development at the same moment. Every one. This is where the prisoner's dilemma comes in. Each lab decides blind, without knowing what the others will do. If one stops and the rest press on, the one that stopped is out of the race. If they all press on, we all run the risk. The only way out is <a href="/ai/both-capitals-say-no-to-pacing/">a simultaneous halt</a>, and that kind of trust is the scarcest thing on the planet.`]}),

];
