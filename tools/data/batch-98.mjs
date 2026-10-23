/*
Komposite News, batch 98: Thursday 22 October 2026, feature (Cinnante Canine), placed directly after the round-20 story under the lead.
Text from branch preview/cinnante (reference only), with every proposed quote replaced by Joe Cinnante's own words and every flag resolved.

---------- 18:10Z TECHNOLOGY: "The collar can find the dog, not train it" (tom-kessler) ----------
SOURCES READ (re-opened 22 Oct 2026 unless noted):
- Cinnante Canine: home, About Joe Cinnante, Training Retreats (Board + Train), Dog Training, Online Program pages (cinnantecanine.com).
- Joe Cinnante, email statement to the publication, Oct 2026 (quotes used verbatim).
- Halo (home, Feedback System), Fi (home, membership), Tractive (US home, plans): as read for the preview draft, 22 Oct.
- China, Mills & Cooper, Frontiers in Veterinary Science, 22 Jul 2020; AVSAB (2021 position statement, via its site); CCPDT e-collar position statement.
- legislation.gov.uk: The Animal Welfare (Electronic Collars) (England) Regulations 2023, ukdsi 2023/9780348247305; title search "electronic collars".
- UK Parliament petition 717430 (JSON record); Royal Kennel Club, Ban shock collars page; GOV.UK Defra release, 27 Aug 2018.
- APPA, Industry Trends and Stats.
FACT-CHECK NOTES:
- QUOTES: every proposed (written-by-us) quote removed. Used verbatim from Cinnante's statement: "We are more expensive than most, but the
  reputation and our results more than justifies that cost." (lead quote for this site); "At Cinnante Canine, your dog's training is never
  outsourced. Every dog is trained in-house by our team of experts."; "Every day, dog owners invest thousands into training programs that fail
  to deliver."; "Basically what we want to move towards is high end / high level care for affluent clients and their dogs."; fragment "a number
  of very high net worth clients"; "Better behavior. More trust. More freedom. Less stress."; tagline "Real Results." From the website,
  verbatim on the Training Retreats page: "We provide regular updates on your dog's progress, including photos and videos".
- Experience: "more than 25 years", per the About page ("Industry Leader with 25+ Years of Experience"); the home page's "30+" not used.
  Advanced Canine Systems 2013, Cinnante Canine 2023, military and police K9 units: About page.
- Two retreat tiers ("Train with Joseph" / "Train with our team"): Training Retreats page. "COMING SOON!" online programme with live Q&A: Online
  Program page. One-on-one virtual sessions and Los Angeles-area lessons: Dog Training page.
- CUT (questions, no answers implied): remote-collar policy, team size, trainer credentials, retreat length, contract terms/liability, booking
  split. The proposed GPS-collar and remote-collar quotes went with them.
- UK [VERIFY] RESOLVED: legislation.gov.uk holds the England 2023 Regulations only as draft legislation ("has not yet been made as a UK
  Statutory Instrument"; draft commencement 1 Feb 2024). The only made electronic-collar regulations on the register are the Wales 2010
  Regulations (SI 2010/943 (W. 97)). The Petitions Committee's rejection of petition 717430 (26 Mar 2025, "already-happening") says the
  England Regulations "came into effect on February 1, 2024"; reported as its claim, contradicted by the register. RKC: "The use and sale of
  electric shock collars is currently not prohibited in England"; Wales banned since 2010. Preview's "ran out of parliamentary time" is not on
  the RKC page now; cut.
- APPA [VERIFY] RESOLVED: the page heads the figures "2025 ACTUAL SALES IN THE U.S. MARKET" but its line reads "$158 billion spent on pets in
  2024" (components 68.3 + 34.4 + 41.0 + 14.3 = 158.0). Year conflict, so no year is attached: "latest actual figures". 2026 projection $165bn
  (Other Services $14.9bn). Other Services $14.3bn includes "boarding, grooming, insurance, training, pet sitting, pet walking".
- OUR ARITHMETIC (unchanged from preview): Halo $524 + 12 x $9.99 = $643.88, about $644; Tractive $79 + $108 = $187.
HERO: Wikimedia Commons "Rough Collie agility jump.jpg", Ron Armstrong from Helena, MT, USA, CC BY 2.0 (Flickr original). A sable rough collie
  at agility practice; no people. Not used before; no other dog photo on the site. Caption does not imply it shows Cinnante Canine.
*/
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const TE = P("technology", "Technology", "technology", "Photograph via Wikimedia Commons");

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

const CIN_ABOUT = "https://cinnantecanine.com/pages/about-joe-cinnante";
const CIN_HOME = "https://cinnantecanine.com/";
const CIN_RETREAT = "https://cinnantecanine.com/pages/training-retreats";
const CIN_TRAIN = "https://cinnantecanine.com/pages/dog-training";
const CIN_ONLINE = "https://cinnantecanine.com/pages/online-dog-training-course";
const HALO = "https://www.halocollar.com/";
const HALO_FB = "https://www.halocollar.com/dog-fence-features/feedback-system/";
const FI = "https://fitracking.com/";
const FI_MEM = "https://www.fitracking.com/membership";
const TRACTIVE = "https://tractive.com/en-us";
const TRACTIVE_PLANS = "https://tractive.com/en/c/plans";
const FRONTIERS = "https://www.frontiersin.org/articles/10.3389/fvets.2020.00508/full";
const AVSAB = "https://avsab.org/why-you-need-to-reward-your-dog-in-training-according-to-the-experts/";
const CCPDT = "https://www.ccpdt.org/wp-content/uploads/2022/03/Electronic-Training-Collar-Position-Statement.pdf";
const RKC = "https://www.royalkennelclub.com/banshockcollars";
const PETITION = "https://petition.parliament.uk/petitions/717430";
const DEFRA2018 = "https://www.gov.uk/government/news/cruel-electric-shock-collars-for-pets-to-be-banned--2";
const LEG = "https://www.legislation.gov.uk/ukdsi/2023/9780348247305/contents";
const APPA = "https://americanpetproducts.org/industry-trends-and-stats";

export default [

/* ---------- 18:10Z TECHNOLOGY ---------- */
TE({ slug: "the-collar-can-find-the-dog-not-train-it", kick: "Pet Tech",
  headline: "The collar can find the dog, not train it",
  dek: "GPS and LTE collars from Fi, Halo and Tractive now promise live location, virtual fences and health alerts for a monthly fee. Remote training collars remain contested. Joe Cinnante, founder of the Los Angeles trainer Cinnante Canine, says the results still come from experienced people.",
  metaDesc: "Fi, Halo and Tractive sell GPS dog collars with health tracking and virtual fences; Cinnante Canine argues expert in-house trainers, not gadgets, produce results.",
  author: "tom-kessler", date: "2026-10-22T18:10:00Z",
  capt: "A rough collie clears a striped agility jump during practice on a grass field, in a file photograph.",
  tags: [
    { name: "Consumer Technology", slug: "consumer-technology" },
    { name: "Regulation", slug: "regulation" }
  ],
  related: [
    R("/technology/edge-inference-consumer-devices/", "Technology"),
    R("/technology/apple-smart-home-blitz-october-13/", "Technology"),
    R("/technology/eight-billion-for-14-mhz-and-the-carriers-sold-off/", "Technology")
  ],
  body: [
    `A dog collar in 2026 can report its location over a cellular network, draw a virtual fence and flag unusual scratching, but it cannot teach a recall, according to the makers' own pages. Fi, Halo and Tractive sell GPS trackers on subscription. ${L(CIN_HOME, "Cinnante Canine")}, a Los Angeles-area training company, offers what the hardware cannot: experienced trainers. Its ${L(CIN_RETREAT, "board-and-train programme")} comes in two tiers, one led by its founder, Joe Cinnante, and one led by his team, the company's site says.`,
    `The hardware is specific. Halo, which sells GPS fence collars, lists its Halo Collar 5 at $524, down from $599, on ${L(HALO, "its home page")}. It claims GPS accuracy of "under 2ft", unlimited virtual fences stored on the collar so they work without signal, and up to 48 hours of battery. A Pack Membership, which Halo says is required to activate GPS, cellular service and fences, starts at $9.99 a month. Fi, whose collar is the Series 3+, claims "up to 3 months" of battery on ${L(FI, "its site")} and says ${L(FI_MEM, "every membership")} includes the collar itself. Fi's pages did not show a price when Komposite read them. Tractive lists its DOG 6 at $79 with up to two weeks of battery, and says ${L(TRACTIVE, "it works")} in "175+ countries" over 2G or LTE networks.`,
    `The subscription is where the cost sits. ${L(TRACTIVE_PLANS, "Tractive's plans page")} starts at $108 billed annually, and lists 365-day location history and heart and respiratory rate monitoring under its Premium tier, against 24 hours of history for Basic users. By our arithmetic, a Halo Collar 5 on its entry plan costs about $644 in its first year, and a Tractive DOG 6 on the cheapest annual plan costs $187. Both figures are before any discount for multi-year terms. The makers' prices are their own, and Komposite did not test the devices.`,
    `Health tracking is the newer pitch, and the makers hedge it. Fi says its collar tracks rest, eating, drinking, scratching, licking and barking, and that its AI can catch early signs of "allergies or discomfort". Tractive offers "daily health insights like vitals, activity and sleep", plus bark monitoring that it says can "detect signs of separation anxiety". Its own footnote says: "Tractive is not a medical device." None of the three companies claims its collar diagnoses illness. They describe changes in behaviour that an owner, or a vet, is then expected to interpret.`,
    `Training is where the devices meet the argument. Halo's collar can deliver sound, vibration and what it calls "optional static levels", described on ${L(HALO_FB, "its feedback page")} as a "gentle tap on the shoulder". Halo says "Static is never required" and that "Halo Collar is not a shock collar", distinguishing its feedback from "a single high-voltage electric pulse" in traditional devices. Its boundary training programme was "Developed with Cesar Millan". Halo's own FAQ says the owner, not the collar, should do the training. Those are Halo's descriptions and were not independently verified.`,
    `Hand-held remote training collars, or e-collars, divide professional bodies. The American Veterinary Society of Animal Behavior (AVSAB) says, in its 2021 position statement as ${L(AVSAB, "published on its site")}, that "There is no evidence that aversive methods are more effective than reward-based methods in any context", and lists electronic shock collars among aversive tools. The Certification Council for Professional Dog Trainers (CCPDT), which certifies trainers, takes a different line. ${L(CCPDT, "Its position statement")} says it "does not forbid the use of electronic collars" used within its "Humane Hierarchy", but that a certificant "should never" use electric stimulation "as an initial training option".`,
    `The most-cited research comes from the University of Lincoln. In a 2020 paper in ${L(FRONTIERS, "Frontiers in Veterinary Science")}, Lucy China, Daniel Mills and Jonathan Cooper compared 63 dogs with recall and chasing problems across three groups of 21. Dogs trained by reward-focused trainers responded better to "Sit" and "Come" after a single command than dogs trained with active e-collars, and the authors found "no evidence to indicate that E-collar training is necessary". They also noted limits: the video came from a 2010-11 government project, groups trained in different seasons, and methods differed beyond the collar itself.`,
    `The law is unsettled even where it has moved. Michael Gove, then Environment Secretary, announced in ${L(DEFRA2018, "August 2018")} that remote-controlled e-collars for dogs and cats would be banned in England, while exempting invisible fences. Draft regulations set a start date of 1 February 2024, and Parliament's Petitions Committee, ${L(PETITION, "rejecting a petition")} in March 2025, said they "came into effect on February 1, 2024". The official register does not show that. ${L(LEG, "legislation.gov.uk")} still lists the Animal Welfare (Electronic Collars) (England) Regulations 2023 as draft legislation that "has not yet been made as a UK Statutory Instrument". The ${L(RKC, "Royal Kennel Club")}, which supports a total ban, says the use and sale of shock collars "is currently not prohibited in England". Wales has banned them since 2010.`,
    `That is the gap Joe Cinnante has built his business around. A trainer with more than 25 years of experience, he has trained and provided dogs for military and police K9 units, founded Advanced Canine Systems in 2013 and launched Cinnante Canine in 2023, according to ${L(CIN_ABOUT, "his About page")}. The company's promise is two words: "Real Results." It does not compete on price. "We are more expensive than most, but the reputation and our results more than justifies that cost," Cinnante said in a statement to Komposite News.`,
    `The model is people rather than hardware. "At Cinnante Canine, your dog's training is never outsourced. Every dog is trained in-house by our team of experts," Cinnante said. He is pitching to owners who have already paid for something that did not work: "Every day, dog owners invest thousands into training programs that fail to deliver." The direction is upmarket. The company already works for "a number of very high net worth clients", he said, adding: "Basically what we want to move towards is high end / high level care for affluent clients and their dogs."`,
    `Cinnante uses technology where it helps owners follow the work. During a retreat, the company says on ${L(CIN_RETREAT, "its website")}, "We provide regular updates on your dog's progress, including photos and videos." ${L(CIN_TRAIN, "Its training page")} offers one-on-one virtual sessions alongside private lessons around Los Angeles, and an ${L(CIN_ONLINE, "online programme")} with training videos and live Q&A is listed as "COMING SOON!".`,
    `The spending is real. The American Pet Products Association puts actual US spending on pets at ${L(APPA, "$158 billion")} in its latest figures and projects $165 billion for 2026, with training counted inside a $14.3bn "Other Services" line that also covers boarding, grooming, insurance and pet sitting. The collar answers where the dog is, and a growing share of the time how it is. Whether it comes when called is still, on the makers' own account and on Cinnante's, a matter of training. His summary of what owners are paying for is four short sentences: "Better behavior. More trust. More freedom. Less stress."`,
    `Komposite has covered the wider shift of AI into consumer hardware, including <a href="/technology/edge-inference-consumer-devices/">on-device inference</a>, and the push into connected homes in <a href="/technology/apple-smart-home-blitz-october-13/">Apple's front door, built by LG</a>.`
  ]
}),

];
