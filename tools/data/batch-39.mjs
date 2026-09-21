/** Batch 39 — 21 September 2026. One piece. The Exchange Fund Bills commitment
 *  is quoted from the English text of the 2026 Policy Address (para 35(ii)),
 *  which says "tests on the operation", not a pilot issuance; the piece keeps
 *  that distinction. HK$1.3tn is the stock of bills the address cites, not the
 *  size of any test. Christopher Hui's press-conference remarks are as relayed
 *  by ChainCatcher; no government transcript was found.
 *
 *  Hero: Manson via Unsplash, in tools/data/heroes.json. */
const P = (dir, sectionLabel, sectionHref) => (o) => ({ dir, sectionLabel, sectionHref, ...o,
  photo: { file:"", origW:1, origH:1, alt:"", credit:"", capt:o.capt, creditLine:"Photograph via Unsplash" } });
const BC=P("blockchain","Blockchain","blockchain");

export default [

BC({ slug:"hong-kong-tokenises-the-collateral-first", kick:"Tokenization",
  headline:"Hong Kong tokenises the collateral first",
  dek:"The Policy Address commits the HKMA to testing tokenised Exchange Fund Bills by year-end. Of all the assets it could have picked, it chose the one banks pledge for liquidity.",
  metaDesc:"Hong Kong's 2026 Policy Address commits the HKMA to testing tokenised Exchange Fund Bills by year-end, alongside 24/7 CBDC settlement and licensed stablecoin trading.",
  author:"marcus-oyelaran", date:"2026-09-21T18:00:00Z",
  capt:"Victoria Harbour and the Central skyline. The paper being tokenised is the paper Hong Kong's banks already pledge to the HKMA.",
  tags:[{name:"Tokenization",slug:"tokenization"},{name:"Settlement",slug:"settlement"},{name:"Stablecoins",slug:"stablecoins"}],
  related:[
    {href:"/blockchain/the-ledger-nets-the-old-rails-settle/",kick:"Tokenization",title:"The ledger nets, the old rails settle",ago:"SEPTEMBER 16, 2026"},
    {href:"/blockchain/sebi-settles-ten-billion-rupees-onchain/",kick:"Tokenization",title:"India settles ten billion rupees of bonds onchain",ago:"SEPTEMBER 13, 2026"},
    {href:"/blockchain/nyse-brings-its-matching-engine-onchain/",kick:"Tokenization",title:"NYSE brings its engine onchain",ago:"SEPTEMBER 21, 2026"},
  ],
  body:[
    `Most tokenisation programmes start with something an investor might want to buy. Hong Kong has started with something a bank has to hold.`,
    `The Policy Address that John Lee delivered to the Legislative Council on 16 September commits the Hong Kong Monetary Authority to "conduct tests on the operation of the tokenisation of Exchange Fund Bills by year's end", so that banks can make "efficient, round-the-clock use" of more than HK$1.3tn of the bills for asset and liability management, <a href="https://www.policyaddress.gov.hk/2026/public/pdf/policy/policy-full_en.pdf" rel="noopener">according to the published text</a>.`,
    `Christopher Hui, the Secretary for Financial Services and the Treasury, repeated the timetable when he briefed on the address's financial measures, <a href="https://www.chaincatcher.com/en/article/2290913" rel="noopener">ChainCatcher reported</a>, and most coverage since has called it a pilot. The address's own word is tests. It names no participating banks, no ledger and no volume.`,
    `The choice of asset is the story. Exchange Fund Bills are Hong Kong dollar debt that banks pledge to the HKMA to borrow intraday through the Intraday Repo and overnight through the Discount Window, <a href="https://www.hkma.gov.hk/eng/key-functions/money/liquidity-facility-framework/hong-kong-dollar-liquidity-facility-framework/" rel="noopener">under the authority's liquidity framework</a>. They are the collateral that keeps the payment system moving. Tokenising them means tokenising the part of the market that everything else leans on.`,
    `The address also covers the cash side. The HKMA plans central bank digital currency settlement and 24/7 operations under EnsembleTX by around the end of the year. EnsembleTX is the pilot it <a href="https://www.info.gov.hk/gia/general/202511/13/P2025111300366.htm" rel="noopener">launched last November</a> for real-value tokenised deposit transactions, and it currently settles interbank through the ordinary RTGS system. Put the two commitments together and the design becomes clear: a tokenised bill pledged against tokenised central bank money at hours when the conventional system is shut.`,
    `The address sets out the pieces but not how they connect. It separately promises a digital asset platform from CMU OmniClear this year for issuing and settling digital bonds, a second-phase legal review by the HKMA's Tokenised Bond Expert Group, and a wholesale e-HKD payment solution for after-hours derivatives trading, with real-value transactions targeted this year. The government puts Hong Kong's share of global digital bond issuance between 2025 and mid-2026 at nearly half.`,
    `Stablecoins get one sentence, and it is specific: the city will promote trading of regulated stablecoins on licensed virtual-asset trading platforms "and their use in the settlement of tokenised money market funds". That gives a licensed coin an institutional job, not a retail one.`,
    `There is not much licensed supply yet. The HKMA has granted two issuer licences under the Stablecoins Ordinance, <a href="https://www.info.gov.hk/gia/general/202604/10/P2026041000471.htm" rel="noopener">both on 10 April</a>: to Anchorpoint Financial, the Standard Chartered, HKT and Animoca Brands venture, and to HSBC. Anchorpoint <a href="https://www.coindesk.com/business/2026/08/12/standard-chartered-led-anchorpoint-launches-hong-kong-dollar-stablecoin" rel="noopener">opened its HKDAP token to institutions and professional investors on 12 August</a> through HashKey Exchange and OSL. HSBC has said its coin will follow in the second half of the year. The SFC set out terms for licensed platforms dealing in these coins <a href="https://apps.sfc.hk/edistributionWeb/api/circular/openFile?lang=EN&amp;refNo=26EC26" rel="noopener">in a May circular</a>.`,
    `The sequencing is what distinguishes Hong Kong's approach. <a href="/blockchain/the-ledger-nets-the-old-rails-settle/">Singapore's banks netted tokenised deposits on a shared ledger this month while the money still moved the old way</a>. Hong Kong is trying to put the settlement asset, the collateral and the licensed dollar token on the same always-on footing, in that order, with the central bank supplying the first two.`,
    `The caveats are real. "Tests on the operation" is a modest commitment, and HK$1.3tn describes the stock of bills, not the size of any test. The second-phase legal review is a reminder that the legal treatment of tokenised instruments in the capital market is still being worked out. The measure worth watching is whether the HKMA accepts tokenised bills as eligible collateral in its own facilities. Until it does, they are a digital copy of a bond. Once it does, they are money-market plumbing.`]}),

];
