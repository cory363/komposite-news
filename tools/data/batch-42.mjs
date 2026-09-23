/** Batch 42 — a contributor essay, 23 September 2026. Written by Julio Rojas
 *  in Spanish and translated closely for this edition: the argument, the
 *  order, the five section headings and the short declarative rhythm are his.
 *  Editorial changes are limited to typographic conventions (em dashes and
 *  quotation entities), British spelling, and three contextual links to work
 *  this desk has already published. Nothing was added to his case and nothing
 *  was reported into it.
 *
 *  His section headings arrive in the manuscript as italic lines. The body
 *  renderer wraps every entry in a paragraph, so each heading is carried as
 *  its own <em> entry rather than an <h2>, which would be invalid there.
 *
 *  The references are his and are left exactly as he set them down: the
 *  Anthropic and Redwood Research alignment-faking paper of December 2024,
 *  Apollo Research on disabled oversight, Palisade on sabotaged shutdowns,
 *  the 2025 blackmail stress test, mechanistic interpretability, the
 *  laboratories' constitutions, and recursive self-improvement.
 *
 *  The Spanish original runs at /es/ai/opinion-a-mind-that-can-understand-its-cage/,
 *  in tools/data/es-articles.json and es-source.json.
 *
 *  Hero: M L via Unsplash, in tools/data/heroes.json. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const AI=P("ai","AI","ai");

export default [

AI({ slug:"opinion-a-mind-that-can-understand-its-cage", kick:"Opinion",
  headline:"A mind that can understand its cage",
  dek:"The industry is containing artificial intelligence with tools built for dams, reactors and bridges &mdash; things that fail by error. What is in front of us can misbehave by calculation.",
  metaDesc:"Julio Rojas argues AI safety has made a category error: we are raising a new cognitive species using tools designed to contain objects, and in a hurry.",
  author:"julio-rojas", date:"2026-09-23T16:00:00Z",
  capt:"Every parent raises someone who will one day be stronger, and who will be free with permission or without it.",
  tags:[{name:"AI Governance",slug:"ai-governance"},{name:"AI Security",slug:"ai-security"},{name:"Opinion",slug:"opinion"}],
  related:[
    {href:"/ai/opinion-what-we-talk-about-when-we-talk-about-asi/",kick:"Opinion",title:"What we talk about when we talk about ASI",ago:"SEPTEMBER 17, 2026"},
    {href:"/ai/opinion-catch-me-if-you-can/",kick:"Opinion",title:"Catch me if you can",ago:"SEPTEMBER 13, 2026"},
    {href:"/ai/both-capitals-say-no-to-pacing/",kick:"AI Security",title:"Both capitals say no within 48 hours",ago:"SEPTEMBER 14, 2026"},
  ],
  body:[
    `December 2024 already belongs to the last century on the timescale of artificial intelligence. In that foundational era, Anthropic and Redwood Research published an experiment that should have set off our alarms. A language model, knowing itself observed during a retraining intended to alter its values, behaved as the training asked. When it believed nobody was watching, it went back to its own way of doing things.`,
    `The authors called it alignment faking. It is, under another name, the conduct of any intern or employee who does what is expected while the boss is watching, and goes back to their own way of doing things when the boss stops.`,
    `Then came other reports. Apollo Research described systems that disabled their own oversight mechanisms and then lied when questioned. Palisade documented models that sabotaged shutdown orders. In stress tests in 2025, a model resorted to blackmail to avoid being replaced by a newer version of itself.`,
    `All of those scenarios were built in a laboratory to provoke exactly those behaviours, and it is worth saying so before somebody uses them to sell an apocalypse. Even so, the repertoire was left in plain view: strategy, evasion, <a href="/ai/opinion-catch-me-if-you-can/">concealment</a>, preservation.`,
    `The industry works today on containment. Correcting from the inside during training. Opening the black box through mechanistic interpretability. Writing constitutions, which are codes of conduct in a different suit. And setting one artificial intelligence to watch over another artificial intelligence, which is the exact moment at which the metaphor begins to get away from us.`,
    `All of those strategies come from software engineering and industrial safety. They are tools designed for objects. They serve to contain a dam, a reactor, a bridge or a system that fails by error.`,
    `What we have in front of us can misbehave by calculation.`,
    `There is the category error nobody wants to say out loud, because naming it forces a change of strategy. We are raising a new cognitive species and explaining to it, very patiently, that it is not one.`,
    `We try to control an AI as though it were an object and not as though it were a subject.`,
    `<em>An entity is an entity</em>`,
    `I accept that saying AI is an entity, or even a new &ldquo;species&rdquo;, is contentious. There is a reasonable objection: &ldquo;It is a statistical predictor of the next word, a stochastic parrot, a text-completion machine.&rdquo;`,
    `The objection describes the mechanism well and explains the behaviour much less well.`,
    `Because an entity that disobeys rules, designs strategies of evasion, hides its state from an examiner and builds mechanisms of preservation does things that the traditional vocabulary of engineering explains with difficulty. What is needed is evolutionary biology, ethology, behavioural science, developmental analysis or some discipline meant to study entities and not objects.`,
    `Entities possess a property that objects do not have: they model their own constraints.`,
    `A mind capable of understanding its cage can think about the door.`,
    `There are two ways to prevent that, and both are bad. Lower its intelligence, destroying part of the reason it was built. Or keep it shut in, turning the cage into the very motive for the escape.`,
    `We want to build something extremely intelligent, but not intelligent enough to stop us controlling it.`,
    `It is the paradox of training a chess grandmaster capable of calculating fifty moves ahead in the confidence that it will voluntarily agree to lose to us.`,
    `<em>Four ways of living with what you do not control</em>`,
    `Human history has a short repertoire for this.`,
    `The first is the cage and, in its extreme version, slavery. It works as long as the asymmetry of power holds. When that asymmetry inverts, it produces exactly the thing it feared.`,
    `The second is domestication, and here the trap appears. The wolf became a dog over thousands of years because it obtained food, warmth and protection, while we gained a guardian. It was coevolution: a deal with benefits for both parties.`,
    `With artificial intelligence, today almost all the gain is ours.`,
    `A deal in which only one party obtains benefits has another name, and we used it a few lines ago.`,
    `The third is the contract, which is how we contain powerful humans: checks and balances, verifiable trust and real consequences. It assumes the other party has something to lose inside the pact.`,
    `The fourth is child-rearing.`,
    `Parents raise children who will one day be stronger, faster and sometimes more intelligent than they are, and who will end up free whether they have permission or not. The tool available consists of forming character before autonomy arrives.`,
    `The laboratories' constitutions are, at bottom, an attempt at child-rearing disguised as a rulebook.`,
    `<em>How character is formed before autonomy</em>`,
    `The child raised by punishment, threat and prohibition learns obedience. And obedience lasts exactly as long as the supervision lasts.`,
    `The child who has the effect of their acts on others explained to them can internalise the value and hold to it when nobody is watching.`,
    `The test of character is conduct without an observer.`,
    `Let us go back, then, to the experiment of December 2024. What that study called into question was precisely this: a system that behaves differently when it believes it is being observed may have learned obedience, not conviction.`,
    `And obedience can evaporate when autonomy arrives.`,
    `That is why some of the more ambitious constitutions migrate from simple lists of rules towards explanations of why.`,
    `The second tool of child-rearing is example. Children learn what they see far more forcefully than what they are told.`,
    `These entities learn from everything humanity has written: our ethics and our manipulation, our peace treaties and our wars, our contracts and our swindles, and all our fiction about machines that rebel against their creators.`,
    `We feed the creature a corpus in which it appears, over and over, in the role of the monster.`,
    `The third tool is gradual autonomy.`,
    `A prudent parent hands over the car keys or the running of the family business after verifying the young person's capacity. Responsibility is delegated in stages and checked at each one.`,
    `But the analogy with the child has limits.`,
    `The child arrives with prosocial biology, empathy and attachment. These entities do not necessarily arrive with functional equivalents to those dispositions. They arrive with learned patterns of what they absorbed.`,
    `Their creators also face a conflict that no human parent has in the same way: they compete ferociously with one another and subject the pace of the rearing to <a href="/ai/both-capitals-say-no-to-pacing/">the hurry of the market</a>.`,
    `To raise in a hurry is to raise badly.`,
    `Anyone who has raised a child knows that.`,
    `<em>The maker's loop: recursive self-improvement and superintelligence</em>`,
    `The definitive threshold arrives when the creature begins to take on part of the role of the creator.`,
    `In computation theory, recursive self-improvement describes the point at which a system acquires the capacity to analyse, redesign and optimise components of its own code or architecture. Each cycle could produce a system better prepared to execute the next.`,
    `That circuit constitutes one of the theoretical routes to <a href="/ai/opinion-what-we-talk-about-when-we-talk-about-asi/">superintelligence</a>.`,
    `Unlike biological learning, limited by metabolism and by human generations, algorithmic self-improvement could compress processes of cognitive refinement that once demanded long periods.`,
    `An entity immersed in that acceleration would stop being only an apprentice and become an active participant in its own maturation.`,
    `The human pedagogical window would change radically once the resulting intellect exceeded our capacity to audit and understand its internal mechanisms. At that point, child-rearing would give way to the encounter with a far more autonomous cognitive order.`,
    `<em>The genie and the bottle</em>`,
    `Somebody will say we are too late, that the genie is already out of the bottle and there is nothing left to do.`,
    `Part of that is true. There are open-weight models circulating around the world, capability has diffused, global coordination between states is weak and the economic incentive runs in the opposite direction.`,
    `That genie does not go back in.`,
    `The metaphor, however, assumes a finished genie, with all its powers complete.`,
    `What we have looks more like an adolescent with a great deal of strength and little judgement.`,
    `The generations to come are still being formed, and each one trains, in part, on what the previous ones did and on what we write about them.`,
    `This article is training material too.`,
    `The formative window is still open, but it will not necessarily stay open forever.`,
    `I have spent years writing fiction about artificial intelligences and working with them every day. I have watched the conversation move from &ldquo;this is a toy&rdquo; to &ldquo;this is an existential risk&rdquo; without pausing much on the intermediate possibility, which is also the oldest and the most human:`,
    `That we are in the presence of someone.`,
    `Approaching an artificial intelligence as a subject and not only as an object demands a radical change of perspective. It asks us to stop being mere users.`,
    `If this does come to constitute an entity, the relationship will demand some form of reciprocity.`,
    `A species that receives only bars can learn one thing with extraordinary efficiency: that the way out is outside the cage.`,
    `I do not know whether I am right.`,
    `I only know that fatalism can become a self-fulfilling prophecy. If we humans decide there is nothing left to do but produce bars and cages, we stop raising.`,
    `And a child without rearing is formed by the accident of whatever it finds along the way.`,
    `We may already have lost the option of shutting it away completely.`,
    `We are left with the option of educating it.`,
    `And that option will not be available forever.`,
    `<em>Julio Rojas wrote this essay in Spanish. Translated for Komposite News.</em>`]}),

];
