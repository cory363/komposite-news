/** Batch 32 — 16 September 2026, evening. The tally, the dissenters and the
 *  motion to reconsider are from the Senate Periodical Press Gallery's floor
 *  log. NPR's reporting is credited for the weekend ethics language and the
 *  ICBA interview; the piece is written fresh rather than adapted from theirs.
 *  NPR and Senator Warren describe the state attorney general provision in
 *  opposite terms, so both are given and neither is adopted. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const CR=P("crypto","Crypto","crypto");

export default [

CR({ slug:"the-clarity-act-stops-at-forty-nine", kick:"Regulation",
  headline:"The CLARITY Act stops at forty-nine",
  dek:"The Senate would not open debate on crypto market structure. The bill failed over who gets to police a president's profits, not over the rules for the market.",
  metaDesc:"The Senate voted 49-50 against advancing the CLARITY Act, leaving crypto market structure legislation stalled over ethics rules ahead of the midterm elections.",
  author:"marcus-oyelaran", date:"2026-09-16T19:30:00Z",
  capt:"A procedural vote, and the only one the bill could not afford to lose.",
  tags:[{name:"Regulation",slug:"regulation"},{name:"Digital Assets",slug:"digital-assets"},{name:"Stablecoins",slug:"stablecoins"}],
  related:[
    {href:"/crypto/clarity-act-draws-a-line-around-control/",kick:"Regulation",title:"The CLARITY Act draws its line around control",ago:"SEPTEMBER 11, 2026"},
    {href:"/policy/the-wash-sale-rule-catches-up/",kick:"Tax Policy",title:"The wash-sale rule catches up",ago:"SEPTEMBER 15, 2026"},
    {href:"/fintech/treasury-genius-act-stablecoin-rules/",kick:"Regulation",title:"Treasury drafts the stablecoin perimeter",ago:"SEPTEMBER 2026"},
  ],
  body:[
    `Five days ago this desk wrote that Tuesday's vote on the CLARITY Act was procedural, and that a procedural vote measures whether a bill can be debated rather than whether it can pass. It turned out to be the only question that mattered. The Senate declined to let the bill onto the floor at all.`,
    `The motion to invoke cloture on the motion to proceed to H.R. 3633, the Digital Asset Market Clarity Act, failed 49 to 50 at about 3pm on 15 September, <a href="https://www.dailypress.senate.gov/tuesday-september-15-2026/" rel="noopener">according to the Senate press gallery's floor log</a>. It needed 60. Four Republicans voted no: Susan Collins, Josh Hawley, Jerry Moran and Thom Tillis. Senator Chris Coons did not vote.`,
    `Tillis's vote is the one to read closely. He voted no so that he could immediately enter a motion to reconsider, which he did a minute later. Under Senate rules only a member on the prevailing side can make that motion, so the defection is also the device that keeps the bill procedurally alive. It is a way of losing that leaves the door unlocked.`,
    `What the vote did not turn on is the substance this bill spent years arguing about. <a href="/crypto/clarity-act-draws-a-line-around-control/">The 630-page draft released last week</a> settled, at least on paper, the questions of which protocols count as decentralised and how oversight divides between the SEC and a CFTC that would take most of it. Those were not where the votes were lost.`,
    `The reason was ethics. Democrats had demanded an enforceable bar on the president and other senior officials profiting from an industry whose rules they would be writing, and that demand hardened after President Trump disclosed more than $1.4bn in crypto income for 2025.`,
    `Republicans moved over the weekend. <a href="https://www.npr.org/2026/09/15/nx-s1-5968711/clarity-act-crypto-senate-vote" rel="noopener">NPR reports</a> that new language would have barred federally elected officials and their spouses from issuing their own tokens, which would have ended the $TRUMP meme coin, and required officials to divest "significant" crypto holdings, a term critics said was loose enough to walk around.`,
    `The two sides did not even agree on what the text did. NPR describes the revision as giving state attorneys general more ability to sue over breaches. Senator Elizabeth Warren, in prepared floor remarks <a href="https://financefeeds.com/us-senate-fails-advance-clarity-act-cloture-vote/" rel="noopener">reported by FinanceFeeds</a>, said the provision left enforcement to the Justice Department, barred state attorneys general and private parties from acting, and expired. She called it a "weak fig leaf that will do nothing to stop him from making his next $1.4 billion in crypto profits". Senator Elissa Slotkin, who also raised money-laundering safeguards and the CFTC's staffing, wrote that "the ethics provisions in this bill are simply too thin".`,
    `Enforcement is the whole argument, and it explains why the concessions did not move votes. A prohibition policed by an attorney general appointed by the person it restrains is a prohibition whose force depends on that person's forbearance. Democrats were not asking for stricter words. They were asking for a different enforcer.`,
    `There was a second opposition that got less attention. Community banks fought the bill's treatment of stablecoin rewards, arguing that letting issuers pay customers for holding a dollar token competes for deposits without bank regulation. Rebeca Romero Rainey, chief executive of the Independent Community Bankers of America, told NPR that if local deposits leave, she does not think the crypto industry is going to fund small businesses, ranchers and farmers in their place.`,
    `Markets priced a long wait. Bitcoin fell 2.81% to about $75,986 and Coinbase shares dropped 8.65% to $174.89, FinanceFeeds reported. The House has cancelled its late-September voting weeks, the midterms are seven weeks away, and the analysts FinanceFeeds cites see no serious attempt at comprehensive crypto legislation before 2029.`,
    `The consequence is the one the bill's sponsors warned about. Without a statute, crypto oversight remains whatever the agencies say it is, and agency positions reverse with the White House, as they did between the last administration's SEC and the current one. <a href="/fintech/treasury-genius-act-stablecoin-rules/">Stablecoins at least have a law</a>. Everything else waits on the next Congress, and on the White House after that.`]}),

];
