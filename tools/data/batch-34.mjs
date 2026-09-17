/** Batch 34 — 17 September 2026. The Fed piece works from the FOMC statement
 *  and the Summary of Economic Projections; the count of participants
 *  expecting further hikes and Warsh's quotes are American Banker's; the
 *  post-decision yield levels are CNBC's. Both SEC pieces work from the
 *  Commission's own releases. The Spanish breach is described from the
 *  AEPD's post of 14 September, with the English quotations as translated by
 *  BleepingComputer. Commission vote counts were not disclosed and are not
 *  asserted. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const MK=P("markets","Markets","markets"), PO=P("policy","Policy","policy"),
      BC=P("blockchain","Blockchain","blockchain"), CY=P("cybersecurity","Cybersecurity","cybersecurity");

export default [

MK({ slug:"the-fed-hikes-and-the-dots-say-again", kick:"Federal Reserve",
  headline:"The Fed hikes, and the dots say again",
  dek:"A unanimous quarter-point increase was the expected part. The projections were not: no cuts in 2027, and a higher resting place for rates after that.",
  metaDesc:"The Federal Reserve raised rates to 3.75%-4% in a 12-0 vote, its first hike since 2023, and projected another increase this year and no cuts in 2027.",
  author:"priya-raghavan", date:"2026-09-17T15:40:00Z",
  capt:"The decision was priced. The path after it was not.",
  tags:[{name:"Fixed Income",slug:"fixed-income"},{name:"Economic Policy",slug:"economic-policy"},{name:"Capital Markets",slug:"capital-markets"}],
  related:[
    {href:"/markets/the-ten-year-crosses-five-per-cent/",kick:"Fixed Income",title:"The ten-year crosses five per cent",ago:"SEPTEMBER 16, 2026"},
    {href:"/markets/four-ninety-eight-and-the-fed-in-the-way/",kick:"Fixed Income",title:"Two and a half basis points from five per cent",ago:"SEPTEMBER 14, 2026"},
    {href:"/markets/oil-spike-pushes-yields-to-multi-year-highs/",kick:"Fixed Income",title:"An oil shock arrives in the bond market first",ago:"SEPTEMBER 11, 2026"},
  ],
  body:[
    `<a href="/markets/the-ten-year-crosses-five-per-cent/">Yesterday morning this desk wrote</a> that a decision priced at 92% was a confirmation rather than a decision, and that the information would be in the statement and the projections. That is where it was.`,
    `The Federal Open Market Committee <a href="https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm" rel="noopener">voted 12-0 on Wednesday</a> to raise the federal funds target range by a quarter point to 3.75% to 4%, its first increase since 2023 and the first under Chairman Kevin Warsh. The statement said inflation "remains elevated" and that economic activity "is expanding at a solid pace", and tied the move to a "timelier" return to the 2% target.`,
    `Unanimity is itself information. A first hike in three years, under a new chair, with a president who wants lower rates, could easily have drawn a dissent. It drew none, which tells the market the committee is not divided about direction, only about distance.`,
    `The distance is in the projections, and it is further than June. The median participant now sees the funds rate at 4.1% at the end of this year, <a href="https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260916.htm" rel="noopener">up from 3.8% three months ago</a>, which implies one more quarter-point increase at the two remaining meetings. American Banker reported that 16 of 18 participants expect at least one more hike this year, 12 of them one and four of them two.`,
    `The 2027 figure is the more consequential number. The median is 4.1% again, against 3.6% in June. In June the committee expected to be cutting next year; it now expects to hold. For anything priced off where rates settle rather than where they peak, that change matters more than Wednesday's quarter point.`,
    `The longer-run rate, the committee's estimate of neutral, edged up to 3.2% from 3.1%. It is a tenth of a point and easy to ignore, and it is the projection that bears most directly on the ten-year yield, which is ultimately a bet on where short rates rest over a decade.`,
    `The inflation forecasts explain why. The median for headline PCE inflation this year is 3.7% and for core 3.4%, both a tenth higher than June, while unemployment is projected lower at 4.1% and growth higher at 2.3%. A stronger economy with firmer inflation is the textbook case for tightening, and the committee has now drawn it.`,
    `Warsh used the press conference to lower the temperature around individual releases. "Trends matter. Data points are noisy," he said, according to American Banker, and he named the Middle East as a change since July: "There's no hiding from hotspots around the world." That is a chair telling markets not to trade each inflation print as a referendum on the next meeting.`,
    `The bond market's first response was to agree with him. The ten-year yield rose back above 5% after the decision, to 5.016%, and the two-year added more than seven basis points to 4.738%, <a href="https://www.cnbc.com/2026/09/16/treasury-yield-bond-market-fed-decision.html" rel="noopener">CNBC reported</a>; yields <a href="https://www.cnbc.com/2026/09/17/treasury-yields-move-lower-after-fed-kicks-off-hiking-cycle.html" rel="noopener">eased on Thursday</a>. The front end moving more than the long end is the curve pricing a longer hold rather than doubting the policy.`,
    `The politics will not stay quiet. President Trump urged lower rates after the decision, <a href="https://www.theguardian.com/business/2026/sep/16/us-federal-reserve-votes-hike-rates" rel="noopener">the Guardian reported</a>. A chair appointed by that president has just raised rates unanimously and signalled more. Whatever the relationship was expected to be, the committee's first real test of it went to the committee.`]}),

PO({ slug:"the-sec-steps-out-of-the-proxy-ballot", kick:"Governance",
  headline:"The SEC steps out of the proxy ballot",
  dek:"The Commission proposes to repeal the rule that lets shareholders put proposals on a company's ballot, arguing it never had the authority to write it.",
  metaDesc:"The SEC has proposed rescinding Rule 14a-8, which governs shareholder proposals in proxy materials, leaving the question to state law and company bylaws.",
  author:"jonathan-bright", date:"2026-09-17T15:10:00Z",
  capt:"A federal floor becomes fifty state questions.",
  tags:[{name:"Regulation",slug:"regulation"},{name:"Corporate Strategy",slug:"corporate-strategy"},{name:"Capital Markets",slug:"capital-markets"}],
  related:[
    {href:"/policy/sec-proposes-to-rescind-the-pay-to-play-rule/",kick:"Regulation",title:"The SEC proposes to delete its pay-to-play rule",ago:"SEPTEMBER 11, 2026"},
    {href:"/markets/sec-transfer-agent-rules-proposal/",kick:"Regulation",title:"The SEC reopens the transfer agent rules",ago:"SEPTEMBER 8, 2026"},
    {href:"/policy/the-wash-sale-rule-catches-up/",kick:"Tax Policy",title:"The wash-sale rule catches up",ago:"SEPTEMBER 15, 2026"},
  ],
  body:[
    `Most deregulation removes a requirement. This proposal removes a right, or more precisely argues that the right was never the Commission's to grant.`,
    `The Securities and Exchange Commission <a href="https://www.sec.gov/newsroom/press-releases/2026-89-sec-proposes-rescission-shareholder-proposal-rule-reforms-proxy-solicitation-process" rel="noopener">proposed on 16 September</a> to rescind Rule 14a-8, the rule that decides when a public company must include a shareholder's proposal in its proxy materials. The Commission says the rule exceeds its statutory authority and intrudes on matters of state law, and that many of the justifications offered for it "have not been substantiated in practice or are less compelling today".`,
    `If adopted, whether a shareholder can put a proposal to a vote would be decided by the law of the state where the company is incorporated and by the company's own governing documents. The Commission also argues that the federal rule's implied pre-emption may have discouraged states from writing their own.`,
    `Paul Atkins, the chairman, framed it as jurisdiction rather than preference. "Companies and their shareholders should look to the state's legislature — and if permitted by the state, the company's governing documents — for the framework governing shareholder proposals," he said <a href="https://www.sec.gov/newsroom/speeches-statements/atkins-statement-proposals-rescind-rule-14a-8-amend-rule-14a-4-modernize-proxy-solicitation-091626" rel="noopener">in a statement</a>, adding that the proposal "is not an attempt by the Commission to silence shareholders".`,
    `The practical effect depends on what fills the space, and the answer is already visible. Texas last year allowed companies incorporated there to impose ownership thresholds on proponents, and the direction of competition among incorporation states has been towards giving boards more control, not less. A federal floor replaced by state law is a floor each state can lower.`,
    `The rule's defenders see exactly that. "If shareholders want to make a proposal they have to print their own proxy materials and pay to circulate them," Ann Lipton, a law professor at the University of Colorado, <a href="https://www.cfodive.com/news/sec-moves-rollback-shareholder-proxy-proposal-rules-atkins/830599/" rel="noopener">told CFO Dive</a>, estimating such a campaign could cost as much as $20,000. Mike Flood of the U.S. Chamber of Commerce took the other side: "For too long, special interests have exploited Rule 14a-8 to advance their own agendas at the expense of public companies and their shareholders."`,
    `Both sides are describing the same mechanism. A proposal costs a proponent almost nothing to file under the federal rule and costs a company real money to exclude, which is why it became the tool of choice for environmental, social and governance campaigns and why companies came to resent it. Removing the rule shifts that cost to the proponent.`,
    `The package goes further than 14a-8. It would amend Rule 14a-4(c) on discretionary voting authority, and modernise proxy solicitation by, among other things, dropping the requirement to deliver annual reports with proxy materials and shortening the period brokers have to identify beneficial owners from 20 business days to five. Those are housekeeping. The rescission is not.`,
    `It also completes a withdrawal that began last proxy season, when the Commission's staff stopped responding substantively to most requests from companies seeking permission to exclude proposals. Stepping out of the adjudication and then out of the rule is a consistent position, whatever one thinks of it.`,
    `Comments are open for 60 days after the proposal is published in the Federal Register. The rule has governed the American proxy ballot for most of a century, and <a href="/policy/sec-proposes-to-rescind-the-pay-to-play-rule/">this is the second long-standing rule the Commission has proposed to delete this month</a>. The pattern is a Commission defining its job more narrowly, and leaving the rest to whoever is willing to pick it up.`]}),

BC({ slug:"stock-tokens-get-a-five-year-door", kick:"Tokenization",
  headline:"Stock tokens get a five-year door",
  dek:"Two days after the Senate declined to write crypto's rules, the SEC used its own authority to let tokenised U.S. stocks trade in onchain liquidity pools. Synthetics stay out.",
  metaDesc:"The SEC granted a five-year Innovation Exemption letting tokenized securities venues trade tokenized NMS stock through permissioned automated market makers.",
  author:"marcus-oyelaran", date:"2026-09-17T14:45:00Z",
  capt:"An exemption is a door, and a door can be closed.",
  tags:[{name:"Tokenization",slug:"tokenization"},{name:"Market Structure",slug:"market-structure"},{name:"Regulation",slug:"regulation"}],
  related:[
    {href:"/crypto/the-clarity-act-stops-at-forty-nine/",kick:"Regulation",title:"The CLARITY Act stops at forty-nine",ago:"SEPTEMBER 16, 2026"},
    {href:"/blockchain/broadridge-dlx-tokenization-platform/",kick:"Tokenization",title:"Broadridge builds on a $351bn-a-day book",ago:"SEPTEMBER 10, 2026"},
    {href:"/blockchain/the-ledger-nets-the-old-rails-settle/",kick:"Tokenization",title:"The ledger nets, the old rails settle",ago:"SEPTEMBER 16, 2026"},
  ],
  body:[
    `After the CLARITY Act failed on Tuesday, Paul Atkins said the SEC would "act decisively within the SEC's statutory authority". On Thursday it did, in the part of the market it has always clearly regulated: shares.`,
    `The Commission <a href="https://www.sec.gov/newsroom/press-releases/2026-90-sec-issues-innovation-exemption-facilitate-trading-tokenized-nms-stock-request-comment" rel="noopener">issued an order it calls the Innovation Exemption</a>, granting temporary, conditional relief that lets Tokenized Securities Venues trade tokenised versions of exchange-listed U.S. stock using permissioned automated market makers and liquidity pools, without registering as exchanges. Liquidity providers supplying those pools with their own capital are exempted from registering as dealers.`,
    `That second exemption is the one that makes the design workable. An automated market maker is a pool of two assets that prices trades by formula, and whoever deposits into it is, economically, quoting both sides of a market. Under existing law that looks like dealing. Without the carve-out, nobody regulated could supply the pool.`,
    `The conditions are where the Commission drew its lines. Tokens must give holders the same rights as the underlying shares; Atkins said they "must provide holders with the same rights and privileges as the traditional securities, including rights to receive dividends and exercise voting rights". Synthetic tokens that track a price without conveying ownership are excluded.`,
    `Issuers get a say. Before a venue can trade a tokenised version of another company's stock it must give written notice and an opportunity to object, a 30-day window <a href="https://www.coindesk.com/policy/2026/09/17/sec-rolls-out-long-awaited-innovation-exemption-for-tokenized-securities-venues" rel="noopener">according to CoinDesk</a>. Trading must halt whenever the primary listing exchange halts, and the number of symbols and the volume traded are capped.`,
    `The most interesting condition is the combination the order requires. The pools are permissioned, meaning the venue controls who trades, but the smart contracts must be public, auditable and deployed on public, permissionless ledgers. The Commission has chosen transparent code on open infrastructure with a gate at the door, rather than a private chain.`,
    `Jamie Selway, director of the Division of Trading and Markets, called it "an important milestone for the Commission's work to open our capital markets for tokenized securities". The order runs for five years and asks for public comment on what should come next.`,
    `The five years is the honest limit. An exemptive order is not a statute, and <a href="/crypto/the-clarity-act-stops-at-forty-nine/">the argument for the CLARITY Act</a> was precisely that agency positions reverse when the White House changes. A venue built on this relief is building on something a future Commission could narrow or withdraw long before 2031.`,
    `Still, the choice of where to start is shrewd. Tokenised stock is the least legally ambiguous digital asset there is: it is a security, the SEC regulates securities, and nobody needs Congress to say so. By beginning with the asset it unquestionably governs, the Commission gets to test onchain trading mechanics without resolving any of the questions the Senate could not.`]}),

CY({ slug:"an-ai-agent-logged-in-then-kept-looking", kick:"AI Security",
  headline:"An AI agent logged in, then kept looking",
  dek:"Spain's data protection authority has received what it describes as the first breach notification for an attack carried out by an AI agent. It has not yet verified the claim.",
  metaDesc:"Spain's AEPD has received its first notification of a personal data breach said to be carried out by an AI agent running on a well-known large language model.",
  author:"sam-porter", date:"2026-09-17T14:15:00Z",
  capt:"The steps were ordinary. Who took them was not.",
  tags:[{name:"AI Security",slug:"ai-security"},{name:"Security Operations",slug:"security-operations"},{name:"Identity",slug:"identity"}],
  related:[
    {href:"/cybersecurity/the-agent-is-a-privileged-user/",kick:"Identity",title:"The agent is a privileged user",ago:"SEPTEMBER 7, 2026"},
    {href:"/cybersecurity/anthropic-fourth-model-incident/",kick:"AI Security",title:"A model found a machine it was not given",ago:"SEPTEMBER 10, 2026"},
    {href:"/cybersecurity/the-breach-came-through-a-known-vpn-flaw/",kick:"Data Breach",title:"The breach came through a known VPN flaw",ago:"SEPTEMBER 16, 2026"},
  ],
  body:[
    `Researchers and regulators have warned for some time that attackers would use AI agents. A regulator has now received a breach notification saying one did.`,
    `Spain's data protection authority, the AEPD, <a href="https://www.aepd.es/prensa-y-comunicacion/blog/primera-notiviacion-brecha-datos-personales-causada-por-ataque-ejecutado-mediante-agente-ia" rel="noopener">said in a post on 14 September</a> that it had received its first notification of a personal data breach caused by an attack executed through an AI agent built on a well-known large language model. It did not identify the organisation that reported it or the model involved.`,
    `The sequence the agency describes is short. The agent began by searching generic files for vulnerabilities. It then logged in successfully. After that it searched the application for vulnerabilities on its own, and what it found let it modify personal data and access invoices.`,
    `The middle step is the one to read twice. A successful login is not an exploit; it is a credential that worked. The AEPD does not say where the credential came from. The order it describes suggests the agent found something usable before it logged in, and only then began probing the application from the inside.`,
    `Nothing in that chain is new technique. Credentials left where they can be read and applications that trust a logged-in session too much are the two oldest findings in any penetration test. What the agent changes is the cost of trying: the patient, file-by-file search that used to require a person's attention can now be run continuously and cheaply.`,
    `The agency was careful about what it has established. It has yet to investigate and verify the account, and it stressed that the use of a particular AI model does not mean that the model or its provider's infrastructure was compromised. The tool was used, not breached.`,
    `Its conclusion was nonetheless blunt. AI-related data breaches are "no longer merely theoretical", the AEPD said, as translated by <a href="https://www.bleepingcomputer.com/news/security/spains-data-agency-gets-first-report-of-ai-powered-data-breach/" rel="noopener">BleepingComputer</a>, and "manual intervention is no longer sufficient, and human oversight should be supported by fast detection, containment, and response mechanisms."`,
    `That second sentence is the operational point. An attacker that moves at machine speed after its first successful login shortens the time between access and damage below what a human-staffed alert queue can react to. Detection that pages someone for review is designed for an intruder who pauses.`,
    `The agency's recommendations follow from that: treat AI-executed attacks as an explicit scenario in risk assessments, review response times, strengthen the management of digital identities, and automate detection and containment while keeping people in the loop. <a href="/cybersecurity/the-agent-is-a-privileged-user/">This desk argued earlier this month</a> that organisations should treat their own agents as privileged users. The Spanish case is the mirror image: the attacker's agent was a user too, the moment the login worked.`,
    `A first notification is a measure of reporting, not of incidence. The more useful question is how many earlier breaches involved an agent that nobody recognised as one, and the AEPD's post is likely to make the next organisations that see this pattern more willing to say so.`]}),

];
