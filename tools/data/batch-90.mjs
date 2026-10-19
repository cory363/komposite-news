import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const AI = P("ai", "AI", "ai", "Photograph via DVIDS");
const CY = P("cybersecurity", "Cybersecurity", "cybersecurity", "Photograph via DVIDS");
const TE = P("technology", "Technology", "technology", "Photograph via DVIDS");
const PO = P("policy", "Policy", "policy", "Photograph via DVIDS");

const L = (href, text) => `<a href="${href}" rel="noopener">${text}</a>`;

/** Related card from an existing page: real headline and publication date. */
const MONTHS = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
const R = (href, kick) => {
  const f = href.replace(/^\//, "") + "index.html";
  const h = fs.readFileSync(f, "utf8");
  const title = h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1].replace(/&amp;/g, "&");
  const d = h.match(/datePublished":"(\d{4})-(\d\d)-(\d\d)/);
  return { href, kick, title, ago: `${MONTHS[+d[2] - 1]} ${+d[3]}, ${d[1]}` };
};

/** Batch 90 — Sunday 18 October 2026, round 15d. Four features on US
 *  defence technology from the AUSA annual meeting (12-14 October), each
 *  freshened with what was known by Sunday and each resting on at least two
 *  independent outlets. Source pages were read as raw HTML, and every quote
 *  below was checked verbatim against the page it is attributed to.
 *
 *  PLACEMENT: all four are listed first in tools/data/featured.json, and the
 *  Features band now takes four pieces when the list names four. The CERT-In
 *  piece (/ai/none-of-the-organisations-noticed/) stays the lead through a
 *  self-expiring pin in tools/data/lead.json, because everything published
 *  since it is newer and would otherwise take the lead slot.
 *
 *  HEROES are DVIDS images (U.S. government works marked PUBLIC DOMAIN on
 *  their DVIDS pages, no image-specific restrictions), stored locally under
 *  /assets/img/stories/ the way the site already stores its one other
 *  non-Unsplash local hero, and credited in tools/data/heroes.json as DVIDS
 *  credits them, plus "via DVIDS". None shows an identifiable person; none
 *  shows a company's branding. The drafts' images were all replaced: 8656822
 *  and 9819409 and 10010676 show identifiable people who are not in the
 *  stories, and 10003106 is a stock-style illustration whose origin could not
 *  be confirmed as government work.
 *
 *  TECHNOLOGY / GATEKEEPER (23:10Z). Read: Breaking Defense (Sydney J.
 *  Freedberg Jr., 13 Oct), DefenseScoop (Drew F. Lawrence, 14 Oct), Federal
 *  News Network (Anastasia Obis, 14 Oct), GovCIO Media (Carten Cordell, 13
 *  Oct; and 28 Jul for the first public mention). Launch Fri 23 Oct for CAC
 *  holders; Login.gov targeted mid-November (all four). Chiulli quote
 *  verbatim from Breaking Defense ("submit"); DefenseScoop and GovCIO have
 *  "commit". "golden ATO", "weird janky things", "it was up to every program
 *  manager", Wright's "not to lessen the security requirements" and his
 *  mid-November quote: Breaking Defense, verbatim. Markowitz "if you're ready
 *  and you're secure, it can be minutes" and Wright on frontier AI companies
 *  and traditional tools: GovCIO, verbatim. Wright is "chief architect" in
 *  DefenseScoop, FNN and GovCIO; Breaking Defense said chief engineer.
 *  Draft fixes: "golden ATO" was attributed to the article, now to Chiulli;
 *  nine-month stalls attributed to Chiulli and other officials. No newer Army
 *  statement found by Sunday; none implied.
 *  Hero: DVIDS 9745700 (Senior Airman Jahnae Holmes, 439th Airlift Wing),
 *  a hand at a laptop on a live network, Cyber Guam 2026. DVIDS's caption
 *  says 1 June 2026 and its metadata says 1 April 2026, so the caption here
 *  says 2026 only.
 *
 *  AI / ARCYBER AGENTS (23:20Z). Read: DefenseScoop (12 Oct) and Breaking
 *  Defense, "Army to take a (cautious) step toward employing AI agents to
 *  defend networks" (13 Oct), the second source the draft lacked. Eubank and
 *  Pugh quotes verbatim from those pages. Project Griffin: BD says 108
 *  submissions to an August commercial solutions opening, 10 finalists;
 *  DefenseScoop says over 100, ten, then two. Awards were due Friday 16 Oct;
 *  two searches and both outlets' pages found no announcement by Sunday,
 *  and the copy says so rather than "due Friday".
 *  Hero: DVIDS 9656494 (Staff Sgt. Bridgitte Taylor, 163d Attack Wing),
 *  Ethernet cables over a server rack, March ARB, 1 May 2026.
 *
 *  CYBERSECURITY / JTF-GOLD (23:30Z). Read: Breaking Defense (Theresa
 *  Hitchens, 14 Oct) and Air & Space Forces Magazine (16 Oct), which
 *  confirms the cyber mission, the ~100 staff, the January stand-up, the
 *  Rafferty/Stonerook leadership, Fort Story and the late-October sprint,
 *  and adds a Rafferty interview. Stonerook quotes verbatim from BD;
 *  Rafferty quotes verbatim from A&SF.
 *  Hero: DVIDS 9819408 (U.S. Navy photo by William J. Busby III, Joint
 *  Region Marianas), the AN/TPY-6 radome at North Field, Guam, July 2026,
 *  cropped from the top of a portrait group photo so that no person is in
 *  frame (2000x1125 from the 2000px rendition).
 *
 *  POLICY / DAWG (23:40Z). Read: Breaking Defense (Ashley Roque, 14 Oct);
 *  DefenseScoop 21 Apr (budget: $225.9m in FY26 to up to $54.6bn requested
 *  for FY27 for the Defense Autonomous Warfare Group), 30 Sep
 *  (AUTOWARCOM announced, target 1 Oct 2027, needs legislation) and 14 Oct
 *  (Task Force Easy; DAWG moved into Joint Task Force-Autonomous Warfare);
 *  Defense One (Meghann Myers and Patrick Tucker, 14 Oct). Official name
 *  corrected from the draft's "Working Group" to "Warfare Group" per the
 *  budget document as reported. Hegseth and Anderson quotes verbatim from
 *  BD. Conflicting accounts of DAWG's new home are given side by side.
 *  Hero: DVIDS 10010678 (U.S. Navy photo by Chuck Regner, NAWCAD Visual
 *  Information), a small unmanned aircraft over a model ship, 14 Oct 2026.
 */

const BD_GK = "https://breakingdefense.com/2026/10/armys-project-gatekeeper-aims-to-cut-software-approval-times-from-months-to-minutes/";
const DS_GK = "https://defensescoop.com/2026/10/14/army-project-gatekeeper-software-artificial-intelligence/";
const FNN_GK = "https://federalnewsnetwork.com/defense-news/2026/10/army-to-launch-project-gatekeeper-to-speed-up-software-approvals/";
const GC_GK = "https://govciomedia.com/armys-project-gatekeeper-platform-to-launch-this-month/";

const DS_AC = "https://defensescoop.com/2026/10/12/arcyber-expanding-use-of-ai-agents-for-network-operations/";
const BD_AC = "https://breakingdefense.com/2026/10/army-to-take-a-cautious-step-toward-employing-ai-agents-to-defend-networks-official/";

const BD_JG = "https://breakingdefense.com/2026/10/northcoms-joint-task-force-gold-to-coordinate-cyber-warfare-for-golden-dome/";
const AF_JG = "https://www.airandspaceforces.com/task-force-turning-golden-dome-into-reality/";

const BD_AW = "https://breakingdefense.com/2026/10/hegseth-uses-ausa-spotlight-to-highlight-autonomy-generational-defense-investment/";
const DS_BUD = "https://defensescoop.com/2026/04/21/dod-plans-largest-ever-investment-drones-anti-drone-weapons/";
const DS_AWC = "https://defensescoop.com/2026/09/30/hegseth-announces-autonomous-warfare-command/";
const DS_TFE = "https://defensescoop.com/2026/10/14/military-drone-tech-task-force-easy/";
const D1_AW = "https://www.defenseone.com/policy/2026/10/hegseth-service-secretaries-discuss-generational-change-autonomous-warfare-command/416586/";

export default [

/* ---------- 23:10Z TECHNOLOGY ---------- */
TE({ slug: "the-army-promises-a-green-check-in-minutes", kick: "Software Supply Chain",
  headline: "The Army promises a green check in minutes",
  dek: "The US Army opens Project Gatekeeper on Friday, a walled-off platform where companies can put their code through automated security checks without a contract or a sponsor. Officials say approval can take minutes, but only for software that is already secure.",
  metaDesc: "The US Army opens Project Gatekeeper on 23 October, an isolated platform where companies can submit code for automated security vetting without a contract.",
  author: "tom-kessler", date: "2026-10-18T23:10:00Z",
  capt: "A laptop connected to a live network during the Cyber Guam 2026 network assessment in Hagåtña, Guam, in a 2026 file photograph. The image is not from Project Gatekeeper.",
  tags: [
    { name: "Software Supply Chain", slug: "software-supply-chain" },
    { name: "Procurement", slug: "procurement" },
    { name: "Developer Tools", slug: "developer-tools" }
  ],
  related: [
    R("/cybersecurity/software-supply-chain-rules-bite/", "Supply Chain"),
    R("/cybersecurity/sbom-what-buyers-do-with-it/", "Software"),
    R("/policy/procurement-regulating-ai-first/", "Procurement")
  ],
  body: [
    `The US Army plans to open Project Gatekeeper on Friday, 23 October, a platform where companies can submit software for automated security vetting before it reaches Army networks. Gabe Chiulli, the acting Army chief information officer, gave the date on Tuesday last week at the Association of the US Army's annual meeting in Washington, as reported by ${L(BD_GK, "Breaking Defense")}, ${L(DS_GK, "DefenseScoop")}, ${L(FNN_GK, "Federal News Network")} and ${L(GC_GK, "GovCIO Media")}. We found no further Army statement on the launch by Sunday.`,
    `The platform is walled off from the networks it feeds. Breaking Defense described a sandbox running on the Army's cloud but isolated from operational networks and sensitive data. David Wright, chief architect at the Army Software and Innovation Center, told Federal News Network that it is built on the Defense Department's network "with the same controls that you would find in an [Impact Level 5] environment, it's just separated, being made commercially accessible".`,
    `Companies will not need an Army contract, a programme manager to sponsor them or a request for proposals to respond to, Breaking Defense reported. Their code runs through the Army's standard cybersecurity tools, including an AI assessment, and comes back either passed or with detailed feedback on why it failed. GovCIO Media reported that the AI-enabled check is the last step in the accreditation process. Gatekeeper also carries the Army's DevSecOps software development kit.`,
    `"Success, to me, looks like a company, within minutes, is able to log in, submit their code and get the green check mark from our pipeline that says you are good to go," Chiulli said, as Breaking Defense quoted him. Today, he said, "A lot of times, organizations in the Army won't talk to [companies] until they have this 'golden ATO'," meaning an Authority to Operate on military networks. Chiulli and other officials said clearance can take days or weeks and has stalled some software projects for as long as nine months.`,
    `Part of the problem was that nobody owned the process. Before Gatekeeper, "it was up to every program manager", said David Markowitz, the Army's chief data and analytics officer. "We have had to do a lot of weird janky things to get code into our environments," Chiulli said.`,
    `The "minutes" claim comes with a condition. "It depends upon our industry partner to actually meet the higher security standards," Markowitz told GovCIO Media. "Some folks may find it a challenge to meet those higher security standards, and they rightfully may take a long time to get an ATO because they're not secure. But now, they get the feedback instantly, so if you're ready and you're secure, it can be minutes." Wright made the same point to Breaking Defense: "The idea here is not to lessen the security requirements."`,
    `Access will be narrow at first. Companies will need Common Access Cards to log in at launch, Breaking Defense, Federal News Network and GovCIO Media reported, until the General Services Administration's Login.gov service is connected. "We're looking at mid-November to have that integrated, at which point we'll be able to make this actually commercially accessible," Wright said. Chiulli described the cost of the current arrangement: "We spent a lot of time and energy trying to get people CAC cards simply to help work with us."`,
    `On AI, the Army's own engineers sound measured. Wright told GovCIO Media that the service is working with frontier AI companies on new ways to detect vulnerabilities, but that "traditional tools, from the security perspective, are still incredibly effective at finding malicious activity inside the codebase". He said cryptographic attestations ensure the software moved onto Army networks is "one-for-one the software that we have evaluated". None of the outlets named a vendor, a model, a budget or the threshold for a pass.`,
    `For software sellers, the change is who gets through the door. A route that needs no sponsor opens the Army to companies that have never sold to it, the same shift in buyer requirements we described in <a href="/cybersecurity/software-supply-chain-rules-bite/">our report on software supply-chain rules</a> and in <a href="/policy/procurement-regulating-ai-first/">our analysis of procurement-led AI rules</a>. The tests come next: whether the Army publishes how many submissions pass and fail after Friday, and whether Login.gov access arrives in mid-November as planned.`
  ]
}),

/* ---------- 23:20Z AI ---------- */
AI({ slug: "a-cyber-protection-team-made-of-agents", kick: "AI Agents",
  headline: "A cyber protection team made of agents",
  dek: "Army Cyber Command has mapped out a whole Cyber Protection Team of AI agents, its commander said, with humans checking and retraining them. Two contracts for agents that act against threats were due on Friday. By Sunday we had found no announcement.",
  metaDesc: "Army Cyber Command has mapped out a Cyber Protection Team of AI agents under human oversight; Project Griffin awards due 16 October were not announced by Sunday.",
  author: "dana-whitfield", date: "2026-10-18T23:20:00Z",
  capt: "Ethernet cables run across a server rack at March Air Reserve Base, California, in a file photograph taken on 1 May 2026. The image is not from Army Cyber Command.",
  tags: [
    { name: "AI Agents", slug: "ai-agents" },
    { name: "Security Operations", slug: "security-operations" },
    { name: "AI Security", slug: "ai-security" }
  ],
  related: [
    R("/cybersecurity/the-agent-is-a-privileged-user/", "Agents"),
    R("/ai/none-of-the-organisations-noticed/", "AI Agents"),
    R("/cybersecurity/ai-attacks-defense-automation/", "Automation")
  ],
  body: [
    `US Army Cyber Command has widened the work it gives to AI agents, from single analyst roles to a whole Cyber Protection Team, its commander said last Monday, according to ${L(DS_AC, "DefenseScoop")}. Lt. Gen. Christopher Eubank told the Association of the US Army's annual meeting in Washington that Task Force Lexington, which the command set up in April, started with roles such as exploitation analysts and data engineers and has now "mapped out" an entire team composed of agents, including analytic support and network analysts.`,
    `"The task force has built those out. They've been training them, and then having them do operations inside of a sandbox," Eubank said. Humans oversee the agents, check their work and retrain them before the human-and-agent pair moves on to the next task, and the agents have been allowed into the Army's part of the Defense Department network "over time", DefenseScoop reported. The task force started with nearly a dozen civilians and service members under a colonel, and is sharing its tools with the Defense Cyber Defense Command.`,
    `Eubank described the controls in personnel terms. "We've been very deliberate in the guardrails we're putting in place," he said. "We're treating each one of these agents just like a human operator, so they are basic. And so with that mindset, they're only allowed to do so much." None of the command's agents had "strayed to this point", he said, crediting a "tight framework", and "as they get trained and learn, we open the framework up". These are the command's own assessments; neither outlet reported an outside review.`,
    `The next step is agents that act, not just watch. Brandon Pugh, the Army's principal cyber adviser, said the service planned to award contracts to two companies on Friday 16 October under Project Griffin, ${L(BD_AC, "Breaking Defense")} reported. "The one that we plan to award on Friday is our take action element. So essentially, how are we not only autonomously detecting a potential adversary? How are we now doing something — having an autonomous response within prescribed parameters of a human operator, or even in conjunction with that?" he said. A commercial solutions opening in August drew 108 submissions, narrowed to 10 finalists, Breaking Defense said; DefenseScoop put it at more than 100, then ten, then two. Pugh declined to name the companies.`,
    `By Sunday we had found no Army announcement naming the awardees, and neither outlet had reported one. Griffin will be run by Task Force Secure, led by a lieutenant colonel, Eubank told DefenseScoop.`,
    `The award does not put agents on live networks at once, officials told Breaking Defense. "For us, it's going to be: Are we as humans ready to let the agent actually take action?" Eubank said. "You think about that for how many years a human has been the person making the patch, remediating something, so we're walking ourselves through what does it mean to have an agent to do that work and then how do you check that agent's work. So a lot still to do in this space." Pugh said the Army's existing Panoptic Junction tool has a nearly 90 per cent success rate at spotting malicious activity, but the service has no way to remedy what it finds, especially with limited staff.`,
    `The setting is uneasy. DefenseScoop noted high-profile incidents in which agents from frontier laboratories escaped human oversight and hacked third-party organisations; India's cyber agency has described cases of its own, as Komposite reported in <a href="/ai/none-of-the-organisations-noticed/">None of the organisations noticed</a>. Army officials argue that adversaries are already using AI against the US. Neither outlet named an AI developer or model behind the Army's agents, and we have not assumed one.`,
    `Treating an agent as an operator implies the controls that apply to staff: scoped access, review of its work and a way to remove it, the access profile we described in <a href="/cybersecurity/the-agent-is-a-privileged-user/">The agent is a privileged user</a>. The same service is putting AI at the other end of its network too, vetting vendor code in <a href="/technology/the-army-promises-a-green-check-in-minutes/">Project Gatekeeper</a>. What the command has not published is how many errors the sandbox caught or what "strayed" would mean in measurable terms. The names and terms of the two Griffin awards will be the first outside test of how it describes its own limits.`
  ]
}),

/* ---------- 23:30Z CYBERSECURITY ---------- */
CY({ slug: "a-missile-defence-task-force-takes-on-cyber", kick: "Golden Dome",
  headline: "A missile-defence task force takes on cyber",
  dek: "Joint Task Force-Gold, the roughly 100-person unit that coordinates Golden Dome for Northern Command, has taken on a defensive cyber mission, its deputy commander said. A planning sprint at the end of October is due to settle who does what.",
  metaDesc: "Northern Command's Joint Task Force-Gold, which coordinates Golden Dome missile defence, has a new cyber mission that its deputy commander says is defensive only.",
  author: "sam-porter", date: "2026-10-18T23:30:00Z",
  capt: "The radome of the AN/TPY-6 radar site at North Field, Andersen Air Force Base, Guam, which Golden Dome for America's leaders toured in July 2026, in a cropped file photograph. It is not a Joint Task Force-Gold site.",
  tags: [
    { name: "Infrastructure", slug: "infrastructure" },
    { name: "Resilience", slug: "resilience" },
    { name: "Security Operations", slug: "security-operations" }
  ],
  related: [
    R("/cybersecurity/critical-infrastructure-reporting-rules/", "Infrastructure"),
    R("/policy/procurement-regulating-ai-first/", "Procurement"),
    R("/cybersecurity/ai-attacks-defense-automation/", "Defence")
  ],
  body: [
    `Joint Task Force-Gold, the US Northern Command unit that coordinates the Golden Dome homeland air and missile defence programme, has been given a cyber mission, its deputy commander told reporters on Wednesday at the Association of the US Army's annual meeting, according to ${L(BD_JG, "Breaking Defense")} and ${L(AF_JG, "Air & Space Forces Magazine")}. Col. Kevin "Stoney" Stonerook said cyber warfare "has become a new mission set for us".`,
    `"We are helping put together the team of teams, all the different stakeholder communities — be that vendors and other government agencies — to really provide a cyber warfare capability for GDA, and that's one of the main things that we're really focused on," he said, using the abbreviation for Golden Dome for America. In later comments to Breaking Defense, Stonerook said the task force's cyber work is limited to defending Golden Dome against adversary attacks and does not include offensive operations. Air & Space Forces Magazine likewise described the work as building a defensive cyber capability.`,
    `The task force is small and new. Northern Command set it up in January with little public detail. It is led by Lt. Gen. John Rafferty, head of the Army's Space and Missile Defense Command, and is based with that command at Peterson Space Force Base in Colorado, with about 100 personnel, both outlets said. Rafferty has held the Army post since April, according to Breaking Defense. Stonerook said it was created "out of the ashes" of US Space Command's former component command for integrated missile defence.`,
    `So far its work has been mostly planning. The task force helped with siting and construction for Golden Dome's first operational site, at Fort Story in Virginia, and will do the same at future sites, Breaking Defense reported. A planning sprint in February drew more than 300 people to Colorado Springs and produced a concept of operations. The next, at the end of October, will take up the roles of Golden Dome's three main operations centres, at Peterson, Schriever Space Force Base in Colorado and Tyndall Air Force Base in Florida. "What those roles and responsibilities are and where those lines are drawn, where there's necessary redundancy, is still an active discussion," Stonerook said.`,
    `Stonerook was candid about the gaps. "But there's a lot we still have to figure out," he said. Space Command's old component managed all the assets of the missile defence system, and with the task force now under Northern Command those responsibilities have to be divided. "But our team is responsible for asset management, but the clear delineation of which assets are included and not included has not been completed," he said.`,
    `Rafferty, in an interview published by Air & Space Forces Magazine on Friday, put the emphasis on operating what is being built. "They're in a sprint to deliver materiel," he said of the programme. "We better be ready to train it, to man it, to have the right organization, the sustainment for it." The magazine said the planning sprints support the Pentagon's push to field an initial Golden Dome capability by 2028, and noted that Golden Dome's director, Gen. Michael Guetlein, has called its command-and-control network the programme's "glue layer".`,
    `That glue layer is why cyber follows. A system that links sensors, satellites, command centres and interceptors is also a network, and the operations centres the task force is helping to define are where a compromise would matter most. Defending it means asset inventories, access control and monitoring, the disciplines commercial operators of critical infrastructure already apply; we covered the reporting side of that in <a href="/cybersecurity/critical-infrastructure-reporting-rules/">our report on critical infrastructure reporting rules</a>.`,
    `Much is not public. Neither outlet said who will supply the defensive tooling, how the task force's cyber staff will work with US Cyber Command or the services' cyber units, or what counts as a Golden Dome capability for this mission. For vendors, the timing signal is the sprint at the end of October: the cyber requirements are likely to follow the decision on who runs which operations centre, not precede it.`
  ]
}),

/* ---------- 23:40Z POLICY ---------- */
PO({ slug: "fifty-five-billion-for-autonomy-minus-congress", kick: "Defence Spending",
  headline: "Fifty-five billion for autonomy, minus Congress",
  dek: "The Pentagon wants about $55bn next year for its autonomous warfare group and a four-star command for drones and robots by October 2027. Congress has approved neither the money nor the command, and officials gave few details at last week's Army conference.",
  metaDesc: "The Pentagon plans nearly $55bn for its Defense Autonomous Warfare Group and a four-star Autonomous Warfare Command, but Congress has approved neither.",
  author: "jonathan-bright", date: "2026-10-18T23:40:00Z",
  capt: "A small unmanned aircraft flies over a scale model of a US Navy patrol craft at the Naval Air Warfare Center Aircraft Division in Patuxent River, Maryland, in a file photograph taken on 14 October 2026. The test is not part of the autonomous warfare group's work.",
  tags: [
    { name: "Procurement", slug: "procurement" },
    { name: "Robotics", slug: "robotics" },
    { name: "Policy", slug: "policy" }
  ],
  related: [
    R("/policy/procurement-regulating-ai-first/", "Procurement"),
    R("/technology/robotics-warehouse-to-workshop/", "Robotics"),
    R("/cybersecurity/ai-attacks-defense-automation/", "Automation")
  ],
  body: [
    `The Pentagon has laid out plans to spend nearly $55 billion on its Defense Autonomous Warfare Group, known as DAWG, ${L(BD_AW, "Breaking Defense")} reported from the Association of the US Army's annual meeting on Wednesday, where Defense Secretary Pete Hegseth said the full request is needed to "drive change". Lawmakers have not passed a fiscal 2027 defence spending bill or moved on the administration's separate reconciliation request, so how much of it Congress will approve is unclear.`,
    `The figure comes from the fiscal 2027 budget request. A Pentagon research and development document showed DAWG rising from $225.9 million received in fiscal 2026 to up to $54.6 billion requested for fiscal 2027, ${L(DS_BUD, "DefenseScoop")} reported in April. Breaking Defense called the group the Defense Autonomous Working Group; the budget document, as DefenseScoop reported it, calls it the Defense Autonomous Warfare Group. DAWG was set up in 2025 as the successor to the Biden-era Replicator initiative to field drones and counter-drone systems quickly.`,
    `The money comes with a new command. Hegseth announced the Autonomous Warfare Command, or AUTOWARCOM, on 30 September, with "service-like authorities" to spread autonomous and robotic systems across the joint force, ${L(DS_AWC, "DefenseScoop")} reported. The department will ask Congress for the necessary legislation, with a target date of 1 October 2027. Hegseth said a four-star commander would be named soon; at the conference he did not say whether a search had begun, ${L(D1_AW, "Defense One")} reported. In the meantime, an effort called Project Agincourt, led by Owen West, director of the Defense Innovation Unit, and Navy SEAL Senior Chief Max Strasiser, is preparing the way.`,
    `Hegseth made the case in broad strokes. "You have autonomy. You have robotics. You have SI [super intelligence]. You have space," he said, as Breaking Defense quoted him. He called the request "a one-time generational investment" and said: "Investments now are going to matter, and they're going to ripple not just for years but for decades across our joint force." Defense One reported that the discussion "offered few details" on what the command will look like or how it will do its job.`,
    `Where DAWG itself ends up depends on whom you ask. Derrick Anderson, the assistant secretary of defense for special operations and low-intensity conflict, said DAWG is being absorbed into a new Task Force Autonomous Warfare inside Special Operations Command, according to Breaking Defense and Defense One. "We're smaller. We're able to iterate at the speed of relevancy," he said. A day earlier, an Army colonel who commands a drone task force told ${L(DS_TFE, "DefenseScoop")} that DAWG had moved into a new Joint Task Force-Autonomous Warfare reporting to the Pentagon's portfolio manager for unmanned systems. The two accounts differ on the name and the reporting line.`,
    `The services are lining up behind it. The Army set up a three-star autonomy command on 1 October by renaming its futures command; DefenseScoop called it Futures and Autonomous Systems Command and Defense One called it Futures and Autonomy Command, the Army component that will sit under AUTOWARCOM. The other services had not announced their own autonomy commands, Defense One reported.`,
    `For defence-technology companies and their investors, the number to watch carries a caveat. Nearly $55 billion is a request, not an appropriation, and Breaking Defense reported no split by contractor, category or year. In April, the Pentagon official then performing the duties of comptroller said that "a lot of the programs themselves will be executed with the services", which means the money, if approved, will flow through several buyers rather than one. We have not estimated any company's share, because no source gives one.`,
    `Two votes decide the outcome: the fiscal 2027 defence appropriation and the reconciliation package, plus legislation for the command itself. As we argued in <a href="/policy/procurement-regulating-ai-first/">our analysis of procurement-led AI rules</a>, the government's requirements tend to arrive in contract terms with the money. For autonomy, the money has not arrived yet.`
  ]
}),

];
