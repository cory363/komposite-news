/** Batch 50 — Sunday 27 September 2026. Four pieces: the markets lead, two AI
 *  and a sceptical read of a forecast.
 *
 *  MARKETS (LEAD). Tips: inkl's relay of "Battered bonds draw support from
 *  falling oil prices" (403 to this desk, nothing rests on it), Charley
 *  Blaine's "What's ahead after a wild week for markets" on aol.com, dated
 *  Sat 26 September 2026 21:37 UTC, and BigGo Finance's translation of a
 *  Seoul piece on the KOSPI, PCE and Micron.
 *
 *  Every yield in the piece is read off Treasury's own daily par yield curve
 *  CSV for 2026 (daily-treasury-rates.csv/2026/all), not off a summary page:
 *  a WebFetch of the TextView page returned numbers that do not match the
 *  published file, so the file was taken directly. Closes for the week —
 *  2yr/10yr/20yr/30yr — Mon 21: 4.76, 4.96, 5.33, 5.29. Tue 22: 4.71, 4.96,
 *  5.33, 5.29. Wed 23: 4.85, 5.11, 5.45, 5.40. Thu 24: 4.87, 5.18, 5.53,
 *  5.47. Fri 25: 4.81, 5.17, 5.54, 5.49. Previous Friday 18 September: 4.76,
 *  5.01, 5.38, 5.34. 2 January 2026: 3.47, 4.19, 4.81, 4.86. The 2s30s
 *  spread arithmetic is this desk's, off those rows.
 *
 *  The 20-year comparison was made by pulling Treasury's yearly CSVs from
 *  2004 to 2026 and searching for closes at or above 5.54: seven in 2004,
 *  the last on 14 June 2004 at 5.59, and exactly one since, on 25 September
 *  2026. Treasury's 2004 file has no 30-year column at all, which is why the
 *  30-year is described against the resumed series and not against 2004 —
 *  see this desk's piece of 24 September. FRED's DGS30 does carry 2004
 *  values; they are not the constant-maturity 30-year and are not used here.
 *
 *  The ten-year history is off FRED's DGS10 daily file: the last close at or
 *  above 5.23 was 14 June 2007, and at or above 5.17, 6 July 2007. The AOL
 *  piece says July 2006; that is wrong by a year and the piece says so.
 *  Breakevens are T10YIE (2.33 on 24 September, 2.34 on 25 September); the
 *  10-year real yield is DFII10 (2.85 on 24 September) and, for Friday, this
 *  desk's own subtraction, 5.17 less 2.34.
 *
 *  Oil: EIA's daily Europe Brent spot (RBRTE) and Cushing WTI (RWTC) series,
 *  both released 23 September with data through 22 September and next
 *  released 30 September. Brent 130.80 on 16 September, 116.15 on 21st,
 *  114.89 on 22nd; WTI 107.02 on 15 September, 96.97 on 21st, 96.41 on 22nd.
 *  Retail on-highway diesel is EIA's weekly series: $6.529 on 21 September
 *  2026 against $3.749 on 22 September 2025. Friday's futures settlements
 *  (WTI November $92.41, Brent November $104.32) are Blaine's: CME blocked
 *  automated requests to this desk and no futures settlement was read at
 *  source. Wednesday's Brent November price of $103.08 is from this desk's
 *  own piece of 24 September.
 *
 *  Calendar: BEA's published news release schedule lists "Personal Income and
 *  Outlays, August 2026" for 30 September 2026. The Federal Reserve's own
 *  FOMC calendar lists 27-28 October. Micron's investor pages returned 403
 *  to this desk and no 8-K fixing the date exists on EDGAR; the 30 September
 *  date and the after-the-close timing are Blaine's and BigGo's, and match
 *  this desk's piece of 24 September. PCE and Micron consensus figures are
 *  BigGo's relay of Daishin Securities and Blaine's.
 *
 *  AI / CHINA. Tip: Eunice Yoon, "China wants in on U.S. AI data center
 *  boom. Here's why", CNBC, Sat 26 September 2026 08:00 EDT. Brightray,
 *  S.K. Lee, PrefabDC, Yangzhou, the Stanford HAI counts (5,427 US against
 *  449 Chinese AI data centres in 2025), the $765bn and $295bn figures,
 *  Jeffrey Ding of George Washington University and Benjamin Boucher of Wood
 *  Mackenzie are all hers. The regulatory reading is at the regulations:
 *  Appendix A to 31 CFR part 800 (read at ecfr.gov) names data centres once,
 *  in item (v), collocated at a submarine cable landing point; items (xi)
 *  and (xii) are the bulk-power system and electric storage connected to it.
 *  15 CFR part 791 subpart A: the ICTS Transaction definition at Sec. 791.2,
 *  the purpose and procedure at Sec. 791.1, and China's designation as a
 *  foreign adversary at Sec. 791.4(a)(1). The Nvidia figures are from its
 *  10-Q for the quarter ended 26 July 2026, filed 26 August 2026.
 *
 *  AI / LABOUR. Tip: CNBC's "AI is fueling a blue-collar jobs boom", 26
 *  September 2026. Every employment number in the piece is from the BLS
 *  public API, series CES2000000001, CES2023610001, CES2023620001,
 *  CES2023713001, CES2023821001, CES2023822001 and CES3133500001 — note the
 *  three-digit trade detail runs a month behind the headline, so electrical
 *  contractors and line construction are July figures and the rest August.
 *  Abbott's directive is his own office's press release of 21 September 2026.
 *  Data Center Watch's quarterly counts are read on its own site: 75
 *  projects and roughly $130bn in Q1 2026, at least 45 and nearly $68bn in
 *  Q2. CNBC attributes the Q1 figure to the year to date; that is the error
 *  corrected here. The Hochul statewide ban is CNBC's; governor.ny.gov
 *  refused automated requests and this desk could not confirm it at source.
 *  Polling figures are CNBC's and were not read in the crosstabs.
 *
 *  MARKETS / FORECAST. Source: "AI Chip Market for Data Centers to Hit $860
 *  Billion by 2030", Seoul Economic Daily English edition, by Kim Hye-ran,
 *  published 27 September 2026 15:20 KST, which the outlet labels as
 *  AI-translated from Korean. The author of the forecast is the Overseas
 *  Economic Research Institute at the Export-Import Bank of Korea.
 *  koreaexim.go.kr did not respond to this desk, so the underlying report was
 *  not read and the method is known only through the newspaper. The CAGR
 *  check, the two exchange rates and the comparison with Nvidia's filing are
 *  this desk's arithmetic.
 *
 *  Heroes: Mihai Lazar, Jason Leung, Kiefer Likens and Po-Hsuan Huang via
 *  Unsplash, in tools/data/heroes.json. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const AI=P("ai","AI","ai"), MK=P("markets","Markets","markets");

export default [

MK({ slug:"the-support-arrived-at-the-front-end", kick:"Fixed Income",
  headline:"The support arrived at the front end",
  dek:"Oil came off its highs and the bond market is being written up as having found its footing. On Friday's closes the two-year fell six basis points and the thirty-year rose two, to the highest level of the reintroduced series. A curve that was the flattest of the year on Monday ended the week fifteen basis points steeper. Wednesday brings the August PCE print and Micron's fourth quarter in the same session.",
  metaDesc:"The 10-year Treasury closed at 5.17 per cent on 25 September 2026 and the 30-year at 5.49. The 2s30s spread widened from 53 to 68 basis points in four sessions. PCE and Micron both land on 30 September.",
  author:"priya-raghavan", date:"2026-09-27T14:00:00Z",
  capt:"A crossover seen from above in low sun: two rails leave the straight and run away from it. The week's rally reached the front of the Treasury curve and stopped there.",
  tags:[{name:"Fixed Income",slug:"fixed-income"},{name:"Treasury",slug:"treasury"},{name:"Energy",slug:"energy"}],
  related:[
    {href:"/markets/the-long-end-stops-standing-still/",kick:"Fixed Income",title:"The long end stops standing still",ago:"SEPTEMBER 24, 2026"},
    {href:"/markets/the-deposits-arrive-before-the-bits/",kick:"Semiconductors",title:"The deposits arrive before the bits",ago:"SEPTEMBER 24, 2026"},
    {href:"/markets/ninety-cents-on-the-dollar/",kick:"AI Infrastructure",title:"Ninety cents on the dollar",ago:"SEPTEMBER 24, 2026"},
  ],
  body:[
    `The weekend's description of the bond market is that battered Treasuries drew support from falling oil. Treasury's own par yield curve says something narrower and more useful for the week that starts tomorrow. Support arrived on Friday. It reached the two-year, just about reached the ten-year, and did not reach the long end at all.`,
    `Friday's curve: the two-year at 4.81 per cent, the five-year 4.98, the ten-year 5.17, the twenty-year 5.54 and the thirty-year 5.49. Against Thursday, that is the two-year down six basis points, the ten-year down one, the twenty-year up one and the thirty-year up two, with both risers closing at their highs. On the week — measured off the previous Friday — the ten-year added sixteen basis points, the twenty-year sixteen and the thirty-year fifteen, against five at the two-year. A market ending the week sixteen basis points higher in its benchmark has not been rescued by anything.`,
    `The levels are worth stating precisely because they are being stated loosely. The ten-year traded as high as 5.23 per cent on Friday before closing at 5.17, and one widely syndicated account puts that at levels last seen in July 2006. On the Federal Reserve's own daily ten-year series the last close at or above 5.23 was 14 June 2007, and the last at or above Friday's 5.17 was 6 July 2007. Nineteen years.`,
    `At the back it is older than that. The twenty-year's 5.54 per cent is the first close at or above that level since 14 June 2004, when it printed 5.59 — this desk searched Treasury's annual files from 2004 forward and found seven such closes in 2004 and exactly one since, on Friday. The thirty-year's 5.49 is the highest since the bond was reintroduced in February 2006. <a href="/markets/the-long-end-stops-standing-still/">As this desk set out on Thursday</a>, Treasury's 2004 curve carries no thirty-year column at all, which is why the 2004 comparison belongs to the twenty-year and nowhere else. That inversion survived the week too: the twenty-year is paying five basis points more than the thirty.`,
    `Put the two ends together and the shape has turned over. The spread from two years to thirty closed Monday at 53 basis points, the narrowest of 2026; it closed Friday at 68. Fifteen basis points of steepening in four sessions, from a market that spent September flattening. On Monday the argument here was that September was a front-end event about the Federal Reserve. By Wednesday it was not, and by Friday the front end was rallying while the long end was not. Whatever is being priced now is duration, not policy.`,
    `The composition confirms it. The ten-year breakeven closed at 2.34 per cent on Friday against 2.33 on Thursday: inflation expectations did not move. Subtract it and the real ten-year yield fell from 2.85 to about 2.83 — the whole of Friday's rally, two basis points of real rate. <a href="/blockchain/twenty-eight-million-on-the-day-the-price-broke/">That real rate is the variable that has repriced every zero-coupon asset this year</a>, and it is still at an eighteen-year high.`,
    `Now the oil, which did fall. EIA's daily Brent spot series has the barrel at $130.80 on 16 September and $114.89 on 22 September — down 12 per cent in five sessions — while Cushing WTI went from $107.02 on the 15th to $96.41 on the 22nd. Both series were released on 23 September and stop there; the next publication is Wednesday. Friday's futures settlements, which this desk could not read at source because CME blocks automated requests, are reported at $92.41 for November WTI and $104.32 for November Brent. That second number deserves attention: the Brent front month settled Friday above the $103.08 it reached on Wednesday the 23rd, the day the ten-year rose fifteen basis points. Spot fell. The contract everybody quotes did not.`,
    `Nor has the physical market caught up. EIA's weekly on-highway diesel average was $6.529 a gallon on 21 September against $3.749 a year earlier, the highest in the series. A twelve per cent fall in the Brent print from a $130 peak is not disinflation arriving; it is a spike that has stopped widening, in a week when equities rose anyway, the S&amp;P 500 by 1.2 per cent.`,
    `Which brings the argument to Wednesday, when it gets settled twice. At half past eight New York time the Bureau of Economic Analysis publishes Personal Income and Outlays for August — the date is on its own release schedule — with consensus at 3.7 per cent headline and 3.4 per cent core, an acceleration from 3.3 in July. The Federal Reserve's calendar has the next meeting on 27-28 October, and the market prices better than even odds of an increase. A core print that confirms the acceleration puts the front end back where it was on Thursday.`,
    `After the close on the same day, Micron reports its fourth quarter — consensus around $51bn to $52bn against guidance of $50.4bn to $51bn, next quarter's consensus already at $56.9bn. <a href="/markets/the-deposits-arrive-before-the-bits/">As this desk argued on Thursday</a>, the headline is the least informative part of that release: what matters is the deposit book, whether the ceiling on the largest take-or-pay agreements has moved, and whether bit shipments grew at all. Micron's investor pages refused automated requests here, so the date rests on two secondary reports that agree. Payrolls follow on Friday.`,
    `Underneath all of it sits the arithmetic <a href="/markets/ninety-cents-on-the-dollar/">this desk set out on Thursday</a>: an AI build-out whose flagship project financing priced at 6.58 per cent, against a thirty-year Treasury that closed Friday at 5.49 and rising. The cost of the long end is the cost of the build-out. It went up again on the day the bonds were said to have found support.`,
  ] }),

AI({ slug:"the-dependency-runs-the-other-way", kick:"AI Infrastructure",
  headline:"The dependency runs the other way",
  dek:"Chinese manufacturers want to sell prefabricated data centres into the American build-out, and CNBC has found one doing it through a Singapore registration. The instrument everybody reaches for does not reach a sale at all: the word 'data center' appears once in the CFIUS regulations, and only at a submarine cable landing. The shortage the Chinese suppliers are selling into is in electrical equipment, not chips.",
  metaDesc:"Chinese prefabricated data centre makers are targeting the US market. CFIUS covers data centres only at submarine cable landings; the instrument that reaches equipment imports is the ICTS rule at 15 CFR part 791.",
  author:"dana-whitfield", date:"2026-09-27T13:30:00Z",
  capt:"Container cranes and stacked boxes at dusk. The American AI build-out's bottleneck is in transformers, switchgear and cable, and a large share of the world's supply of all three is loaded at ports like this one.",
  tags:[{name:"AI Infrastructure",slug:"ai-infrastructure"},{name:"Trade",slug:"trade"},{name:"Data Centers",slug:"data-centers"}],
  related:[
    {href:"/ai/the-guidance-that-assumes-china-buys-nothing/",kick:"Semiconductors",title:"The guidance that assumes China buys nothing",ago:"SEPTEMBER 24, 2026"},
    {href:"/ai/five-years-for-a-wire-six-for-a-turbine/",kick:"AI Infrastructure",title:"Five years for a wire, six for a turbine",ago:"SEPTEMBER 24, 2026"},
    {href:"/ai/the-export-control-that-is-not-in-the-licence/",kick:"AI Policy",title:"The export control that is not in the licence",ago:"SEPTEMBER 24, 2026"},
  ],
  body:[
    `Eunice Yoon reported on Saturday that Chinese manufacturers are eyeing the American data-centre build-out as a market. The company she found is worth naming, because the structure is the story. Brightray is registered in Singapore, manages construction, and has a single manufacturer: a Chinese firm called PrefabDC, whose factory is in Yangzhou. "We can see very big potential in the U.S. market," its global vice-president S.K. Lee told CNBC. Prefabricated construction is used in America already, but for modules inside a shell; Brightray supplies the shell too, and says it can halve a build that normally runs two to three years.`,
    `Start with why the demand is here rather than there, because the framing gets it backwards. Stanford's AI index counted 5,427 AI data centres in the United States in 2025 against 449 in China. Four American companies are expected to spend around $765bn on AI infrastructure this year, and Jamie Dimon puts next year at a trillion; Beijing's plan is $295bn over five years. Jeffrey Ding of George Washington University gives the reason without decoration: Chinese companies "are not generating as much revenues from their AI services", and underneath that, "there is not as much demand for the AI services". China is not losing a build-out race. It is not having one, and its manufacturers would like to sell into someone else's.`,
    `So: can they? The reflex answer is CFIUS, and the reflex is wrong twice over. The Committee reviews investments and certain real-estate purchases; a Chinese factory selling steel modules to an American owner is not a covered transaction, because nobody acquires an interest in anything. And even if someone were, the list matters. Appendix A to 31 CFR part 800, which enumerates covered investment critical infrastructure, contains the phrase "data center" exactly once, at item (v): "Any data center that is collocated at a submarine cable landing point, landing station, or termination station." An inland campus in west Texas is not on it. The items that would bite are (xi) and (xii) — the bulk-power system and electric storage physically connected to it — and they bite on ownership, not on supply.`,
    `The instrument that does reach an import is the one nobody names. Under 15 CFR part 791, made under Executive Order 13873, an ICTS Transaction is "any acquisition, importation, transfer, installation, dealing in, or use" of technology "primarily intended to fulfil or enable the function of information or data processing, storage, retrieval, or communication". The Secretary of Commerce determined in 2021 that China is a foreign adversary for those purposes, and the rule reaches "any corporation, partnership, association, or other organization, wherever organized or doing business, that is owned or controlled by a foreign adversary" — so a Singapore certificate of incorporation is not, on the face of the regulation, an exit.`,
    `What part 791 does not have is a filing requirement. No notification, no threshold, no clock. The Secretary evaluates transactions "on a case-by-case basis", issues an Initial Determination, takes the parties' response, then prohibits, permits, or permits with mitigation. Nobody has to tell Commerce that a container of Yangzhou-built data hall is on a ship. CNBC reports the administration is considering bans on Chinese open-weight models and on new categories of Chinese data-centre components. Considering is the right word: that would be a rulemaking, and there is not one.`,
    `Now the direction that makes this interesting. American export control is an outbound regime, and it has worked. <a href="/ai/the-guidance-that-assumes-china-buys-nothing/">Nvidia's guidance assumes no China data-centre revenue at all</a>; its filing for the quarter to 26 July records Hopper shipments to China at less than 1 per cent of data-centre revenue, and shipments under the H200 licensing programme at less than 1 per cent as well. The United States has removed itself as a seller of accelerators to China with considerable success.`,
    `It has built nothing symmetrical on the other side of the ledger, and the other side is where the constraint is. Benjamin Boucher, who covers supply chains for Wood Mackenzie, told CNBC that the United States is short of key components, particularly electrical equipment, "doesn't have a lot of what it needs domestically", and faces long lead times where China "can offer those at a much more favorable timing". His summary is the sentence to keep: "China is definitely very important towards the U.S. supply chain for data centers at the moment." Transformers, batteries, fibre-optic cable. <a href="/ai/five-years-for-a-wire-six-for-a-turbine/">The binding constraint on the build-out is the wire and the turbine</a>, not the silicon — and the wire is exactly what is being offered.`,
    `A smaller version of the same blind spot exists inside the industry. <a href="/ai/the-export-control-that-is-not-in-the-licence/">Anthropic's newest model declines kernel work for certain machine-learning accelerators</a>, a restriction keyed to the hardware a question is about rather than to who is asking, which is why testers found it catching Amazon's silicon alongside Huawei's. A classifier cannot see the person; an outbound control regime cannot see the thing coming in. A Singapore-registered intermediary with one Chinese factory sits in the gap.`,
    `None of which settles whether the modules should be allowed. The security argument against them is specific: a prefabricated hall arrives with its power distribution, cooling controls and building management installed by the supplier, and the supplier then operates, maintains, updates and services it — the exact conduct part 791 treats as making technology foreign-adversary technology whatever the invoice says. The point here is narrower. Washington has built an elaborate apparatus for deciding what American compute may leave the country, and has none, and no pending rule, for deciding what foreign electrical plant may come in to power it. On the published regulations, the dependency that is load-bearing runs towards the United States.`,
  ] }),

AI({ slug:"the-trade-the-grid-needs-did-not-grow", kick:"Data Centers",
  headline:"The trade the grid needs did not grow",
  dek:"The AI build-out has created construction jobs, and the federal data says they are smaller in number and narrower in distribution than either side of the argument claims. Electrical contractors added 42,000 people in a year. Power and communication line construction — the trade that builds the interconnection — lost 1,500. And the count of projects stopped by local opposition is roughly double the figure now being quoted.",
  metaDesc:"BLS data show US construction employment at 8.359 million in August 2026, up 1.5 per cent. Electrical contractors grew 3.8 per cent; power and communication line construction fell. Texas halted data centre permits on 21 September.",
  author:"dana-whitfield", date:"2026-09-27T13:00:00Z",
  capt:"A fabrication shop: a long steel section on trestles, a worker checking it by hand. The trades the build-out hires cannot be offshored and cannot be done remotely, which is most of their political force and all of their vulnerability to a permit freeze.",
  tags:[{name:"Data Centers",slug:"data-centers"},{name:"Workforce",slug:"workforce"},{name:"Energy",slug:"energy"}],
  related:[
    {href:"/ai/five-years-for-a-wire-six-for-a-turbine/",kick:"AI Infrastructure",title:"Five years for a wire, six for a turbine",ago:"SEPTEMBER 24, 2026"},
    {href:"/markets/ninety-cents-on-the-dollar/",kick:"AI Infrastructure",title:"Ninety cents on the dollar",ago:"SEPTEMBER 24, 2026"},
    {href:"/markets/the-paper-has-to-go-somewhere/",kick:"Private Credit",title:"The paper has to go somewhere",ago:"SEPTEMBER 24, 2026"},
  ],
  body:[
    `There is a good story going round that the AI build-out has produced a blue-collar employment boom: welders, pipefitters, electricians and HVAC technicians in demand, apprentices on $40,000 to $60,000, experienced electricians past $100,000, postings for welders and pipefitters up 164 per cent year on year. The job postings are real. The payroll survey is a different document, and it is the one that decides whether this is a boom or a rounding error.`,
    `Total construction employment in the United States was 8,359,000 in August, up 120,000 on the year — 1.5 per cent. Inside that number is the thing worth looking at. Nonresidential building construction reached 947,300, up 26,000 on the year and 29,100 on two years. Residential building construction was 923,700, up 900 on the year and still 14,200 below August 2024. Two years ago residential led nonresidential by nearly 20,000 people; it now trails by 23,600. The crossover is the build-out in one line of a federal survey: America has not hired more builders, it has moved them from houses to sheds.`,
    `The trades break down the way the anecdotes suggest, at a fraction of the implied scale. Electrical contractors employed 1,157,100 in July, up 42,000 on the year — 3.8 per cent, the fastest growth of any large trade. Plumbing, heating and air-conditioning contractors were at 1,338,200, up 23,200. Electrical equipment manufacturing, which makes transformers and switchgear, employed 443,400 in August, up 14,900. Good years for a mature trade. Not a national labour-market event.`,
    `Then the series nobody quotes. Power and communication line and related structures construction — the line crews and substation connections, the people who physically attach a campus to the grid — employed 248,900 in July, down 1,500 on the year. <a href="/ai/five-years-for-a-wire-six-for-a-turbine/">The constraint on this build-out is the interconnection queue and the lead time on heavy electrical plant</a>, and the one occupational series that would shorten either is shrinking. Whatever the hyperscalers are bidding for, it is not line crews.`,
    `That matters for the multiplier now being put in front of county boards. Cushman &amp; Wakefield's research has every 100 megawatts of new development creating nearly 1,300 jobs locally, $110m of annual wages and $344m of gross output. Hold it against the stock. The Brookings paper <a href="/markets/ninety-cents-on-the-dollar/">this desk examined on Thursday</a> counts 57 gigawatts of operating American capacity and assumes 183 by 2032. At 1,300 per 100 megawatts, today's fleet would already account for 741,000 jobs — against 947,300 people employed in all nonresidential building construction in the country. The 2032 figure would imply 2.4 million, a 28 per cent rise in total construction employment. That number can only be temporary job-years counted with indirect effects, and it is used in rooms where people hear permanent jobs.`,
    `Michael Hicks, who has studied the local economics of data centres since the early 1990s, puts it plainly: "Permanent labor market effects are muted." He blames the backlash on the promises rather than the buildings — "developers have woefully overpromised jobs and given tax breaks that are beyond obscene" — while arguing the real local benefit is the tax base, not the payroll. Brookings found the debate moving faster than the research: the "evidence base has not kept pace".`,
    `Which brings the argument to the counties, where the circulating number is wrong. Data Center Watch, the research project at 10a Labs that tracks this, is being cited for "at least 75 data center projects worth roughly $130 billion" blocked or delayed this year. That is its figure for the first quarter of 2026 alone, which its own report calls the largest single-quarter concentration on record. Its second-quarter report adds at least 45 more projects worth nearly $68bn. The published running total for the first half is therefore at least 120 projects and around $198bn — not 75 and $130bn. The same reports count more than 300 state data-centre bills filed in the first six weeks of 2026, moratorium proposals in 14 states, and Maine one House vote short of the first statewide ban.`,
    `Texas then stopped being hypothetical. On 21 September the governor directed the Texas Commission on Environmental Quality to halt all permits sought by data centres until the grid operator completes an audit of every project in its interconnection queue. "Data centers must pay their own way, protect our grid and water," the directive reads. "Until they do, TCEQ will issue no permits sought by data center projects." A week earlier the water board had been told to compel water-use reporting. The commission must report on its compliance by 19 October. And at the end, the sentence that should worry a developer more than the freeze: next session, the governor will work with the legislature "to eliminate any financial incentives for data centers".`,
    `Public opinion is behind all of it — around seven in ten Americans opposed to a local data centre on Gallup's measure, roughly two-thirds across all three party identifications in a New York Times/Siena poll this month, 57 per cent in Texas itself — though this desk has not read those crosstabs. New York is reported to have gone further with a statewide ban; the governor's press office did not respond here and the claim is unconfirmed at source.`,
    `So the ground-level picture is coherent, and it is not the one either camp is selling. The jobs are real, concentrated in one trade, a fraction of what the multiplier implies, and almost entirely inside the fence. The crews who would clear the queue outside it are not being hired. And the political risk now attaches to the permit rather than the ballot — which, as <a href="/markets/the-paper-has-to-go-somewhere/">the credit documents behind these campuses show</a>, is where delay becomes a payment date.`,
  ] }),

MK({ slug:"a-round-number-in-won", kick:"Semiconductors",
  headline:"Eight hundred and sixty billion is a round number in won",
  dek:"A projection putting the data-centre AI chip market at $860bn in 2030 has travelled a long way since Sunday morning. It has an author, the research arm of Korea's export credit agency; a policy conclusion it was written to support; and a base year two years stale. Nvidia booked more data-centre revenue in six months than the forecast's entire starting market.",
  metaDesc:"The Export-Import Bank of Korea's research institute projects the data centre AI chip market at $860bn in 2030 from $124bn in 2024. Nvidia reported $164.3bn of data centre revenue in six months to 26 July 2026.",
  author:"priya-raghavan", date:"2026-09-27T12:30:00Z",
  capt:"An anemometer and wind vane silhouetted at dusk, the cups blurred by the wind they are measuring. An instrument that reads the present is not the same thing as a forecast, and the difference is the method nobody publishes.",
  tags:[{name:"Semiconductors",slug:"semiconductors"},{name:"AI Infrastructure",slug:"ai-infrastructure"},{name:"Economic Policy",slug:"economic-policy"}],
  related:[
    {href:"/markets/the-deposits-arrive-before-the-bits/",kick:"Semiconductors",title:"The deposits arrive before the bits",ago:"SEPTEMBER 24, 2026"},
    {href:"/markets/ninety-cents-on-the-dollar/",kick:"AI Infrastructure",title:"Ninety cents on the dollar",ago:"SEPTEMBER 24, 2026"},
    {href:"/ai/the-guidance-that-assumes-china-buys-nothing/",kick:"Semiconductors",title:"The guidance that assumes China buys nothing",ago:"SEPTEMBER 24, 2026"},
  ],
  body:[
    `The figure moving this morning is that the market for AI chips used in data centres will reach $860bn by 2030. A good number: large, round, four years out and detached from any company you could check it against. So begin with the author, because a forecast is a claim and claims have owners.`,
    `This one belongs to the Overseas Economic Research Institute at the Export-Import Bank of Korea, reported on Sunday by Kim Hye-ran in the Seoul Economic Daily. The institute projects the data-centre AI chip market growing from $124bn in 2024 to $860bn in 2030, an average of 38 per cent a year, with demand shifting from training to inference and so towards neural processing units, which are cheaper and draw less power. It puts Nvidia at 78.2 per cent of the market last year, Google at 4.7, AMD at 4.1, Intel at 3.7 and Huawei at 2.6.`,
    `The arithmetic is honest, which is the first thing to say: $124bn to $860bn over six years requires 38.1 per cent a year, so the headline rate is the rate.`,
    `The currency is where the precision starts to dissolve. The institute gives both figures in won as well: 170 trillion won in 2024, 1,200 trillion in 2030. Those imply 1,371 won to the dollar in the base year and 1,395 in the terminal year — two different exchange rates in a single sentence, neither stated as an assumption. What the institute has actually forecast is 1,200 trillion won, a round number in its own currency. The $860bn is a conversion of a round number, presented to three significant figures, and a forecast four years out does not get more accurate by crossing a currency.`,
    `Then the definition, which is absent. "AI chips used in data centers" is defined nowhere in the coverage. Does it include high-bandwidth memory? Networking silicon? Whole systems, or the accelerator alone? The share table answers part of that in a way that raises more: Google is credited with 4.7 per cent, and Google sells tensor processing units to nobody. To give it a share you must price an internal transfer — a defensible methodological choice, and an undisclosed one.`,
    `Now the test that matters, which is against a filing rather than against another forecast. Nvidia's quarterly report for the three months to 26 July 2026 puts Data Center revenue at $89.023bn, up 117 per cent on the year, and $164.269bn for the six months. One company, in half a year, booked more revenue than the institute's entire market in its base year. Annualise the July quarter and Nvidia alone is running at $356bn. Apply the institute's own 78.2 per cent share and the 2026 market is somewhere near $455bn — more than half the 2030 figure, reached four years early.`,
    `Run that forward and the forecast inverts. From roughly $455bn in 2026 to $860bn in 2030 is growth of about 17 per cent a year, not 38. This is not an aggressive projection. It is a deceleration forecast with a two-year-old base, wearing a historical growth rate as a headline: the 38 per cent describes what already happened, and most of the distance from $124bn to $860bn was covered before the forecast was published.`,
    `One caveat against this desk's own test, stated because it cuts the other way. Nvidia's Data Center segment includes networking and complete systems, so it is not a like-for-like measure of chips and the implied 2026 market is an upper bound. That is exactly the difficulty: with no published definition, there is no honest way to reconcile the forecast with any company's accounts. A number that cannot be checked against a filing is neither conservative nor aggressive. It is untestable.`,
    `Which brings the question back to why it exists. The newspaper's own subheading says it: "Export-Import Bank Urges Support for Early Demand, Overseas Expansion". The institute's conclusion is that Korean entrants — FuriosaAI, whose RNGD chip went into mass production early this year, and Rebellions, whose REBEL 100 is due in the second half — have the design expertise but trail the leaders "by more than three years in capital, commercialization experience and ecosystem". Its recommendations are tax breaks or subsidies for buyers of domestically made AI chips, and diplomatic support for export sales, with the Middle East singled out because governments there want alternatives to expensive Nvidia hardware.`,
    `That is a coherent industrial policy argument, and it is the purpose the forecast serves: the institute is the research arm of a state-owned policy bank whose business is financing Korean exports, and the bigger the 2030 market, the larger the prize from getting two domestic startups into it. None of that makes the number false. It makes it an advocacy number, to be read with the proposal attached — which the wire copy detaches. Two caveats on sourcing, in the same spirit: the institute's own publication could not be reached from this desk, so the method is known only through a newspaper summary, and that newspaper labels its English edition as AI-translated from Korean.`,
    `Set it beside the two forecasts this desk has tested in the past week. <a href="/markets/ninety-cents-on-the-dollar/">The Brookings paper on financing the build-out</a> publishes its comparison table, its gigawatt assumptions, the share of the pipeline it assumes never gets built, and the single figure that would falsify it: about $5.50 of revenue per installed GPU-hour by 2032. <a href="/markets/the-deposits-arrive-before-the-bits/">Micron's take-or-pay book</a> is demand already contracted, cash paid in advance, terms in a filing. Against either, $860bn is a destination with no route published — and the question worth asking of any projection is the one this one cannot answer: what would have to happen for it to be wrong?`,
  ] }),

];
