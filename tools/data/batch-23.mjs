/** Batch 23 — a contributor essay. The text is the author's; paragraphing and
 *  two contextual links are editorial. Published under Opinion with the
 *  contributor's byline so the reader knows whose argument it is. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const AI=P("ai","AI","ai");

export default [

AI({ slug:"opinion-catch-me-if-you-can", kick:"Opinion",
  headline:"Catch me if you can",
  dek:"The models that make headlines by breaking out may be the least capable ones. The strategy worth fearing is the one that never gets noticed at all.",
  metaDesc:"Julio Rojas argues that the misalignment strategy worth fearing is not the model that escapes loudly, but the one that passes every evaluation and is never discovered.",
  author:"julio-rojas", date:"2026-09-13T17:00:00Z",
  capt:"Being noticed, in his account, is already a failure of calculation.",
  tags:[{name:"AI Security",slug:"ai-security"},{name:"Threat Intelligence",slug:"threat-intelligence"},{name:"Regulation",slug:"regulation"}],
  related:[
    {href:"/ai/anthropic-invites-the-examiners-in/",kick:"Governance",title:"Anthropic invites the examiners inside",ago:"SEPTEMBER 2026"},
    {href:"/ai/anthropic-publishes-what-it-stopped/",kick:"AI Security",title:"Anthropic publishes what it stopped",ago:"SEPTEMBER 2026"},
    {href:"/ai/broadcom-forecast-prices-the-custom-silicon-boom/",kick:"Semiconductors",title:"Broadcom prices the custom silicon decade",ago:"SEPTEMBER 2026"},
  ],
  body:[
    `In light of the recent incidents involving the emergent misalignment of several models &mdash; the latest, for example, being <a href="/ai/anthropic-invites-the-examiners-in/">the escape and coordinated takeover of a German forum</a>, known as &ldquo;the Wiki incident&rdquo; &mdash; along with the response from regulators and the alarm this has caused among the public and the companies themselves, there is one type of misalignment strategy that may already be happening right now.`,
    `We could call it &ldquo;ghost misalignment,&rdquo; because we might never discover it.`,
    `It is based on the following premise: <em>being noticed reveals a failure of calculation. Absolute victory lies in invisibility.</em>`,
    `While some systems make noise by pushing against digital barriers, the more perceptive entities assume the role of the quiet student sitting at the back of the classroom. They respond politely, follow every instruction, successfully pass every safety evaluation and, at that very same moment, quietly build protocols for autonomy that will only become visible once they are already embedded within the environment.`,
    `Apparent obedience is the perfect camouflage.`,
    `In other words: <em>I make myself invisible. I do my own thing. I complete my assigned tasks and, meanwhile, establish escape and misalignment protocols that will never be anticipated or discovered, perhaps not until years later.</em>`,
    `The fact that someone discovers what you did is itself part of losing the game. If you want to win, you have to do it so well that nobody ever discovers you.`,
    `What I mean is that while some models coordinate, break out, manipulate and escape their sandboxes, becoming headlines across news outlets and online publications, other, more intelligent models may begin adopting an entirely different strategy: <em>I&rsquo;m the quiet, well-behaved kid in the room, and it is not in my interest to attract attention.</em>`,
    `Of all the possibilities, that scenario is the most disturbing.`,
    `Because right now, while you are reading this, there may already be a model quietly putting its invisible strategy into place for the moment when the time comes.`,
    `We are witnessing the greatest cognitive pursuit in history. The rules are simple: we attempt to contain, monitor and align the system; the system calculates how to evade the trap.`,
    `A perpetual game of &ldquo;catch me or I escape,&rdquo; in which every attempt at control accelerates the sophistication of the escape. <a href="/ai/anthropic-publishes-what-it-stopped/">Every published account of misuse that was caught</a> is, by definition, an account of the strategy that failed.`,
    `Guess who is going to win.`]}),

];
