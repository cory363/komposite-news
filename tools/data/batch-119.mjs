/*
Komposite News, batch 119: published 5 Nov 2026 (approved by Cory). One first-person consumer story by Cory Chamberlain (real byline,
not a house name). Cory's own transaction: dealer quote $1,270 for a replacement Range Rover key; LocKey Locksmith (Pittsburgh)
cut and programmed the key in his driveway for $550. Model year withheld at Cory's request.

---------- BUSINESS: "The dealer quoted $1,270 for my Range Rover key. A locksmith charged $550" (cory-chamberlain) ----------
FIGURES:
- $1,270 dealer quote and $550 paid: Cory, first-hand. $720 difference; 57% saving; $550 = 43% of $1,270 (our arithmetic).
- Cost components (blank $20-30, programming ~$200, mobile call ~$100): Cory's reporting on trade pricing; presented as
  estimates, not as LocKey's invoice.
SOURCES READ:
- LocKey Locksmith, Land Rover key page (lockeylocksmithpgh.com, read 5 Nov 2026): services, models, five-step process,
  upfront estimates, 24/7, dispatch Pittsburgh 15217, "PA HIC #PA175243", LocKey LockSmith LLC.
- Pennsylvania Attorney General Home Improvement Contractor search (hicsearch.attorneygeneral.gov): registration lookup.
- Pennsylvania has no statewide locksmith license (contrast: states such as New Jersey and Texas license locksmiths).
HERO: Unsplash iTHT1gXJuS8, Bence Balla-Schottner: a flip key fob on a car dashboard. No people, no visible brand. Not used on
  any sister site (grep of ~/Sites, 5 Nov).
*/
import fs from "node:fs";

const P = (dir, sectionLabel, sectionHref, creditLine) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file: "", origW: 1, origH: 1, alt: "", credit: "", capt: o.capt, creditLine } });
const BU = P("business", "Business", "business", "Photograph via Unsplash");

const L = (href, text) => `<a href="${href}" rel="noopener">${text}</a>`;

const MONTHS = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
const R = (href, kick) => {
  const f = href.replace(/^\//, "") + "index.html";
  const h = fs.readFileSync(f, "utf8");
  const title = h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1].replace(/&amp;/g, "&");
  const d = h.match(/datePublished":"(\d{4})-(\d\d)-(\d\d)/);
  return { href, kick, title, ago: `${MONTHS[+d[2] - 1]} ${+d[3]}, ${d[1]}` };
};

const TH = 'style="text-align:left;border-bottom:2px solid #222;padding:6px 8px"';
const TD = 'style="text-align:left;border-bottom:1px solid #ddd;padding:6px 8px;vertical-align:top"';
const table = (heads, rows, note) => `<div class="datatable" style="overflow-x:auto;margin:18px 0;max-width:calc(100vw - 32px)"><table style="border-collapse:collapse;width:100%;font-size:15px"><thead><tr>${heads.map(h => `<th ${TH}>${h}</th>`).join("")}</tr></thead><tbody>`
  + rows.map(r => `<tr>${r.map(c => `<td ${TD}>${c}</td>`).join("")}</tr>`).join("")
  + `</tbody></table><div class="tablenote" style="font-size:13px;color:#666;margin:6px 0 0">${note}</div></div>`;

/* Sources */
const LOCKEY = "https://lockeylocksmithpgh.com/car-key-replacement/land-rover-car-key-replacement-pittsburgh/";
const PA_HIC = "https://hicsearch.attorneygeneral.gov/";

const COST_TABLE = table(
  ["Item", "Approximate cost"],
  [
    ["Key blank or fob shell", "$20 to $30"],
    ["Coding the chip and programming the key to the car", "about $200"],
    ["Mobile service call (travel, equipment, on-site labor)", "about $100"],
    ["<strong>Paid to LocKey Locksmith, in my driveway</strong>", "<strong>$550</strong>"],
    ["<strong>Land Rover dealership quote</strong>", "<strong>$1,270</strong>"],
    ["<strong>Difference</strong>", "<strong>$720 (57 percent less)</strong>"]
  ],
  "Component costs are typical trade prices gathered for this article, not an itemised invoice. The $550 and $1,270 figures are the author's own payment and quote for the same Range Rover key. Percentage is Komposite's arithmetic."
);

export default [

/* ---------- BUSINESS ---------- */
BU({ slug: "range-rover-key-dealer-quote-1270-locksmith-550", kick: "Consumer",
  headline: "The dealer quoted $1,270 for my Range Rover key. A locksmith charged $550",
  dek: "A Land Rover dealership quoted $1,270 for a replacement Range Rover key. A Pittsburgh mobile locksmith cut and programmed one in the author's driveway for $550, 57 percent less. Most of the price is programming, not the key.",
  metaDesc: "A dealer quoted $1,270 for a replacement Range Rover key; a Pittsburgh mobile locksmith did it on-site for $550. Where the money goes, and how to vet a locksmith.",
  author: "cory-chamberlain", date: "2026-11-05T20:22:00Z",
  capt: "A flip-style car key fob resting on a car's instrument panel.",
  tags: [
    { name: "Consumer Technology", slug: "consumer-technology" },
    { name: "Pricing", slug: "pricing" },
    { name: "Cost Management", slug: "cost-management" }
  ],
  related: [
    R("/business/teslas-operating-margin-halves-as-capital-spending-doubles/", "Autos"),
    R("/business/waiting-for-rates-to-fall-building-costs/", "Costs"),
    R("/business/middle-market-adopts-enterprise-ai/", "Business")
  ],
  body: [
    `A Land Rover dealership quoted me $1,270 to replace the key to my Range Rover. ${L(LOCKEY, "LocKey Locksmith")}, a mobile locksmith in Pittsburgh, cut and programmed a new one in my driveway for $550. That is $720, or 57 percent, less than the dealer's price.`,
    `I paid the locksmith's bill myself, and I am reporting the numbers because few owners know a cheaper option exists until they need it. The gap between the two prices comes almost entirely from labor and programming. The key itself is cheap.`,
    `<h2>Why does a Land Rover key cost so much to replace?</h2>`,
    `Most of the price pays for programming, not for the key. Land Rover's current models, the Range Rover, Range Rover Sport, Evoque, Discovery, Discovery Sport and Defender, use keys that carry a transponder chip or work as a proximity fob. A transponder is a small chip that sends a coded signal to the car's immobilizer, the anti-theft system that stops the engine from starting without a recognised key. A cut blade with no matching code will open a door but will not start the car.`,
    `Matching a new key to the car takes diagnostic equipment and software that can talk to the vehicle's security modules. Dealers charge a premium for that work. A growing number of independent automotive locksmiths have bought comparable tools and do the same job at the car.`,
    COST_TABLE,
    `<h2>What does the dealer's price leave out?</h2>`,
    `The dealer's quote did not include the cost of getting the car there. An owner who has lost every key cannot drive to the service department, so a tow comes first. Dealer service departments often book days ahead and may have to order the fob, and someone has to arrange rides to and from the dealership. Pittsburgh owners also have few dealers to choose between, which leaves little competition on price.`,
    `The locksmith's visit avoided all of that. The car did not move, the technician brought the cutting and programming equipment, and the job took a single service call.`,
    `<h2>What does a mobile locksmith actually do?</h2>`,
    `LocKey, which dispatches from Pittsburgh's 15217 ZIP code and operates around the clock, describes a five-step process on its website. The technician verifies that the customer owns the vehicle, cuts the blade, programs the key to the immobilizer, tests the locks, ignition and remote, and hands over the key. The firm says it gives a price before starting, and that the total depends on the key type, the model and year, how complex the programming is, and whether the call comes after hours.`,
    `The ownership check matters. A locksmith willing to program a key to a luxury SUV without confirming who owns it is also willing to do it for a thief.`,
    `<h2>How do you check a locksmith in Pennsylvania?</h2>`,
    `Pennsylvania does not license locksmiths statewide, unlike states such as New Jersey and Texas, so the checking falls to the customer. LocKey trades as LocKey LockSmith LLC and lists Pennsylvania Home Improvement Contractor registration PA175243, which can be looked up in ${L(PA_HIC, "the Attorney General's contractor search")}. That is a registration with the state, not a locksmith's license.`,
    `The common complaint against bad operators is a low price on the phone and a much larger bill once the car is open. Ask for the full price, including programming and the service call, before work begins, and get it in writing.`,
    `<h2>Is there a cheaper way?</h2>`,
    `Yes: replace a key before the last one is gone. "All keys lost" is the most expensive version of the job because there is no working key to copy. Adding a spare while one still works costs a fraction of that. Keeping the spare at home rather than in the car, changing the fob battery when range weakens, and keeping fobs away from water and heat all lower the odds of ending up there.`,
    `Why it matters: car keys have become small computers, and replacing one is now an electronics job priced like a repair. For owners of luxury models, the dealer is the default but not the only choice. In my case the alternative came to the driveway and cost $720 less.`
  ]
})

];
