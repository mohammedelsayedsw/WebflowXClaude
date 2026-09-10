/* All copy the funnel renders. Placeholders like {store}, {share}, {leak} are filled at runtime. */
import { assetUrl } from "@/lib/assets";

export type Question = { k: string; q: string; h: string; o: [string, number][] };

export const COPY = {
 questions: [
  {k:"rev", q:"What does your store do in monthly revenue?", h:"",
   o:[["Under $50K",30000],["$50K to $150K",100000],["$150K to $400K",275000],["$400K to $1M",700000],["$1M to $2M",1500000],["$2M+",2500000]]},
  {k:"share", q:"What share of revenue comes from email + SMS today?", h:"",
   o:[["Under 10%",0.07],["10 to 20%",0.15],["20 to 30%",0.25],["Over 30%",0.33],["No idea",0.10]]},
  {k:"flows", q:"How many automated flows are actually live?", h:"",
   o:[["0 to 2",1],["3 to 5",4],["6 to 9",7],["10+",11],["Honestly, not sure",2]]},
  {k:"cart", q:"Is an abandoned checkout / cart flow running right now?", h:"",
   o:[["Yes, multi-step with SMS",3],["Yes, one or two emails",2],["No / not sure",0]]},
  {k:"repl", q:"Do customers buy the same thing again from you?", h:"",
   o:[["Yes, and we run subscriptions",3],["Yes, but no subscription or reminder flows",1],["Not really, mostly one-time purchases",2]]},
  {k:"sms", q:"Are you collecting and sending SMS?", h:"",
   o:[["Yes, flows and campaigns",3],["Collecting numbers, barely sending",1],["No SMS at all",0]]},
  {k:"disc", q:"How much of your email revenue depends on discount blasts?", h:"",
   o:[["Most of it, no code no sales",0],["Mixed",1],["Little, flows and full-price sends carry it",3]]},
  {k:"who", q:"Who runs your email today?", h:"",
   o:[["Nobody, really",0],["Me / someone in-house, part-time",1],["A freelancer",2],["An agency",2]]}
 ],
 quizUI: {
  urlQ:"What's your store URL?", urlH:"", urlLabel:"First things first", urlBtn:"Start the scan →", urlErr:"Enter your store URL, e.g. yourstore.com",
  qLabel:"Question {n} of {total}"
 },
 bands: {
  critical: {name:"Major revenue leak detected", head:"Your retention setup is running, but almost none of what email could earn is being captured."},
  leaking:  {name:"Revenue leak detected",       head:"Your retention setup is working, but it's leaving significant revenue behind."},
  average:  {name:"Moderate revenue gap",        head:"Your retention setup is around benchmark. The remaining gap is in how much each flow earns per recipient."},
  strong:   {name:"Narrow gap · strong setup", head:"Your retention setup is ahead of most brands your size. The gap left is the distance to the top decile."}
 },
 score: { label:"Retention Score", outOf:"/ 100" },
 leak: {
  label:"Estimated revenue opportunity",
  basis:"Based on your answers, closing part of the gap between your current {share}% email + SMS contribution and a 30% benchmark could be worth approximately {leak} per month.",
  atBenchmark:"Based on your answers, your email + SMS contribution is already at benchmark. The opportunity left is per-recipient performance: the average cart flow earns $3.65 per recipient, the top decile $28.89. Closing part of that gap could be worth approximately {leak} per month."
 },
 chart: {
  title:"Your current path vs. your estimated upside",
  sub:"Projected monthly email + SMS revenue if the improvements hold. Day 90 is when performance is measured against the agreed target.",
  marker:"90-DAY TEST MEASURED",
  legendUp:"Your estimated upside",
  legendNow:"Your current path",
  legend90:"Day 90: guarantee performance is measured",
  note:"Day 120: projected revenue impact if the improvements continue."
 },
 gapsUI: {
  title:"What's holding your score back",
  sub:"Each area scored from your answers, ordered by opportunity.",
  footer:"This is a directional estimate based on your answers and benchmark data. Your actual baseline is confirmed from live account data before the test begins."
 },
 gaps: [
  {n:"Email + SMS revenue share", bench:"benchmark ~30% of revenue", v:["At benchmark","Benchmark: ~30%"]},
  {n:"Flow coverage", bench:"core set is 8 to 10 flows", v:["Strong coverage","Core set: 8 to 10 flows"]},
  {n:"Cart & checkout recovery", bench:"top decile: $28.89 per recipient", lbl:["Multi-step","Basic","Missing"], v:["Keep and optimize","Worth strengthening","High-priority opportunity"]},
  {n:"SMS programme", bench:"3 to 4x email revenue per recipient", lbl:["Running","Dormant","None"], v:["Keep and optimize","Worth activating","High-priority opportunity"]},
  {n:"Replenishment & subscription", bench:"subscribers order ~3x more", lbl:["Running","Untapped","Low fit"], v:["Keep and optimize","Worth adding","Not a priority"]},
  {n:"Discount dependency", bench:"strong flows convert without codes", lbl:["Healthy","Mixed","Discount-dependent"], v:["Healthy","Needs review","Needs review"]}
 ],
 matchUI: { title:"A comparable brand. A real result.", why:"Selected because its starting setup and revenue range are closest to yours." },
 match: {
  small:{k:"£12.75 back per £1", d:"MyNextMattress", p:"First email programme built from zero, strategy, copy, design and setup, to prove the channel before a single flow was built."},
  mid:{k:"£1.2M in 3 months", d:"Christmas Tree World", p:"Flows, campaigns and segmentation rebuilt. Cart, browse and checkout recovery added to an existing email programme."},
  large:{k:"€150K/mo from zero", d:"FELCO", p:"Every core flow built, localised and launched across 5 markets and 3 languages in 30 days, then SMS added for high-intent moments."}
 },
 tiles: {
  liftLabel:"Estimated upside",
  gapsValue:"{n} priority gaps", gapsValueOne:"{n} priority gap", gapsLabel:"Worth addressing first",
  gapsValueNone:"No priority gaps", gapsLabelNone:"Your setup is already at benchmark",
  daysValue:"90 days", daysLabel:"To measure the agreed improvement"
 },
 cta: {
  h:"Now let's confirm the numbers.",
  p:"In 30 minutes, we'll validate your baseline against your live account data, confirm the biggest opportunities, and tell you whether the 90-day test makes sense for {store}."
 },
 flows: [
  {n:"Welcome", brand:"CircuitMess", note:"4-email welcome sequence: founder story, product education, first offer, community. Built in Klaviyo.", lbl:["Email 1","Email 2","Email 3","Email 4"]},
  {n:"Abandoned cart", brand:"Christmas Tree World", note:"4-step cart recovery with reviews and a buying guide before any discount. £1.2M email revenue in 3 months.", lbl:["1h","24h","48h","72h"]},
  {n:"Post-purchase", brand:"FELCO", note:"Order confirmation, care guide, delivery, review request. The sequence that turns one order into a second. Live in 5 markets.", lbl:["Confirm","Care","Delivered","Review"]},
  {n:"Winback", brand:"Shimansky", note:"3-touch winback for a luxury jeweller: we-miss-you, new collection, personal incentive. No discount until step 3.", lbl:["Day 60","Day 75","Day 90"]},
  {n:"Campaigns", brand:"Sportland · CircuitMess", note:"Campaign templates built as a reusable system, the monthly sends that sit on top of the flows.", lbl:["Sale","Last chance","Launch","Winback"]}
 ]
} as const;

export const QUESTIONS: Question[] = COPY.questions.map((q) => ({
  k: q.k, q: q.q, h: q.h, o: q.o.map((o) => [o[0], o[1]] as [string, number]),
}));

export const FLOW_META = [
  { logo: "circuitmess.webp", inv: true, shots: ["asset-11.webp", "asset-12.webp", "asset-13.webp", "asset-14.webp"] },
  { logo: "christmas-tree-world.webp", inv: false, shots: ["asset-15.webp", "asset-16.webp", "asset-17.webp", "asset-18.webp"] },
  { logo: "felco.webp", inv: false, shots: ["asset-19.webp", "asset-20.webp", "asset-21.webp", "asset-22.webp"] },
  { logo: "", inv: false, shots: ["asset-23.webp", "asset-24.webp", "asset-25.webp"] },
  { logo: "", inv: false, shots: ["asset-26.webp", "asset-27.webp", "asset-28.webp", "asset-29.webp"] },
].map((m) => ({ ...m, logo: m.logo ? img(m.logo) : "", shots: m.shots.map(img) }));

export const MATCH_ASSETS = {
  small: { shot: img("mynextmattress-email.webp") },
  mid: { shot: img("christmas-tree-world-campaign-email.webp") },
  large: { shot: img("felco-email.webp") },
};

export function img(file: string): string {
  return assetUrl(`/retention-90/${file}`);
}

export function T(s: string, v?: Record<string, string | number>): string {
  return String(s ?? "").replace(/\{(\w+)\}/g, (m, k) => (v && v[k] != null ? String(v[k]) : m));
}
