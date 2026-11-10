/* All Growth Accelerator copy. {store}, {market}, {target} are filled at runtime. */

/* ---------- Dynamic hero: the ad's angle picks the headline (?a= or utm_content prefix) ---------- */
export type AngleKey = "guarantee" | "ai" | "margin" | "measure" | "retention" | "bench";
export type Angle = { h1: string; accent: string; sub: string };

export const ANGLES: Record<AngleKey, Angle> = {
  guarantee: {
    h1: "Grow your online revenue 15% in 90 days.",
    accent: "Or you don’t pay.",
    sub: "A senior scandiweb team works on your ads, search, conversion and retention, and puts its fees on the line. Start with a free Growth Scan of your store.",
  },
  ai: {
    h1: "Is your store in ChatGPT’s answer?",
    accent: "Or your competitor’s?",
    sub: "Buyers now ask AI what to buy. Scan your store across ads, Google, AI answers, conversion, retention and tracking. Stores that qualify get our guarantee: 15% more revenue in 90 days, or you don’t pay.",
  },
  margin: {
    h1: "Grow revenue without growing your ad bill.",
    accent: "15% in 90 days, or you don’t pay.",
    sub: "Most stores don’t need more spend. They need the euros they already spend to work harder. The free Growth Scan shows where your next profitable sale is.",
  },
  measure: {
    h1: "Your ad platforms say one number.",
    accent: "Your store says another.",
    sub: "We judge growth on your store’s own revenue, not on platform ROAS. Scan your tracking, ads and site in a minute, then see if you qualify for 15% more revenue in 90 days, or you don’t pay.",
  },
  retention: {
    h1: "Sell more to the customers you already have.",
    accent: "15% more revenue in 90 days, or you don’t pay.",
    sub: "Retention is one of five things we work on, next to ads, search, conversion and tracking. The free Growth Scan shows which one moves your numbers first.",
  },
  bench: {
    h1: "How does your store compare with stores your size?",
    accent: "Find out in a minute.",
    sub: "Your Growth Score across ads, Google, AI answers, conversion, retention and tracking. Stores that qualify get our guarantee: 15% more revenue in 90 days, or you don’t pay.",
  },
};

/* utm_content from the ads starts with the angle key, e.g. ai-sweden-v1 */
export function pickAngle(q: URLSearchParams): AngleKey {
  const raw = (q.get("a") || q.get("utm_content") || "").toLowerCase();
  const k = (Object.keys(ANGLES) as AngleKey[]).find((x) => raw === x || raw.startsWith(x + "-") || raw.startsWith(x + "_"));
  return k || "guarantee";
}

/* ---------- Markets (?m=) preselect question 2 and name the market in the hero ---------- */
export const MARKETS: [string, string][] = [
  ["uk", "UK & Ireland"], ["se", "Sweden"], ["no", "Norway"], ["fi", "Finland"], ["dk", "Denmark"],
  ["nl", "Netherlands & Belgium"], ["de", "Germany, Austria & Switzerland"], ["eu", "Elsewhere in Europe"], ["row", "Outside Europe"],
];
export const MARKET_IN: Record<string, string> = {
  uk: "in the UK", se: "in Sweden", no: "in Norway", fi: "in Finland", dk: "in Denmark",
  nl: "in the Netherlands", de: "in Germany, Austria and Switzerland",
};

/* ---------- The six questions (the store URL comes first, in the hero) ---------- */
export type Opt = { v: string; l: string; n?: number };
export type Question = { k: string; q: string; h?: string; multi?: boolean; o: Opt[] };

export const QUESTIONS: Question[] = [
  {
    k: "goal", q: "What matters most for the next 90 days?",
    o: [
      { v: "margin", l: "Grow revenue without losing margin" },
      { v: "acquire", l: "New customers at a lower cost" },
      { v: "retain", l: "Sell more to existing customers" },
      { v: "found", l: "Be found on Google and in AI answers" },
      { v: "convert", l: "Convert more of the traffic I already have" },
    ],
  },
  { k: "market", q: "Where do most of your sales come from?", o: MARKETS.map(([v, l]) => ({ v, l })) },
  {
    k: "channels", q: "Which channels bring you revenue today?", h: "Pick all that apply.", multi: true,
    o: [
      { v: "meta", l: "Meta ads (Facebook, Instagram)" },
      { v: "google", l: "Google ads" },
      { v: "seo", l: "Google organic search" },
      { v: "email", l: "Email and SMS" },
      { v: "tiktok", l: "TikTok" },
      { v: "market", l: "Marketplaces (Amazon, Zalando, others)" },
      { v: "social", l: "Organic social and influencers" },
    ],
  },
  {
    k: "rev", q: "What does your store make online in a month?",
    o: [
      { v: "r1", l: "Under €20K", n: 12000 },
      { v: "r2", l: "€20K to €50K", n: 35000 },
      { v: "r3", l: "€50K to €150K", n: 100000 },
      { v: "r4", l: "€150K to €400K", n: 275000 },
      { v: "r5", l: "€400K to €1M", n: 700000 },
      { v: "r6", l: "Over €1M", n: 1500000 },
    ],
  },
  {
    k: "spend", q: "Roughly what do you spend on ads a month, all channels?",
    o: [
      { v: "s0", l: "Nothing yet", n: 0 },
      { v: "s1", l: "Under €2K", n: 1000 },
      { v: "s2", l: "€2K to €10K", n: 6000 },
      { v: "s3", l: "€10K to €30K", n: 20000 },
      { v: "s4", l: "Over €30K", n: 45000 },
    ],
  },
  {
    k: "when", q: "When would you want to start?",
    o: [
      { v: "now", l: "Now" },
      { v: "next", l: "Next quarter" },
      { v: "explore", l: "Just exploring" },
    ],
  },
];

/* ---------- Score areas (weights published on the result, as the concept requires) ---------- */
export type AreaKey = "paid" | "retention" | "search" | "ai" | "conversion" | "tracking";
export const AREAS: { k: AreaKey; n: string; w: number; module: string }[] = [
  { k: "paid", n: "Paid acquisition", w: 0.2, module: "Acquire" },
  { k: "retention", n: "Retention (email and SMS)", w: 0.2, module: "Keep" },
  { k: "search", n: "Google search", w: 0.15, module: "Be found" },
  { k: "ai", n: "AI answers", w: 0.15, module: "Be found" },
  { k: "conversion", n: "Conversion", w: 0.15, module: "Convert" },
  { k: "tracking", n: "Tracking and data", w: 0.15, module: "Measure" },
];

/* ---------- Landing sections ---------- */
export const STEPS = [
  { t: "Free Growth Scan", d: "One minute. We read your store’s homepage and your answers, and score six areas: ads, Google, AI answers, conversion, retention and tracking." },
  { t: "30-minute plan call", d: "For stores doing €50K+ a month. A senior growth lead walks you through the scan, checks it against your real numbers, and tells you honestly whether the guarantee fits." },
  { t: "90 days of hands-on work", d: "One team on your store: paid ads, SEO and AI search, conversion and retention. Weekly numbers, a monthly review, and one target: 15% more revenue." },
];

export const MODULES = [
  { k: "Acquire", d: "Meta and Google ads rebuilt around new-customer revenue and blended return, not platform ROAS. Fresh creative every month." },
  { k: "Be found", d: "SEO and AI search: category pages, product data and feeds, and the answers ChatGPT, Gemini and Perplexity give about your category." },
  { k: "Convert", d: "Mobile speed, product pages and checkout. Fewer steps between the ad and the order." },
  { k: "Keep", d: "Email and SMS flows that bring customers back: welcome, cart, post-purchase, winback. Tested against what runs today." },
  { k: "Measure", d: "Tracking you can trust: consent mode, server-side tagging, one dashboard on your store’s revenue and margin. Always included." },
];

export const STATS: [string, string][] = [
  ["20+ years", "building and growing eCommerce"],
  ["600+", "specialists in 45 countries"],
  ["700+", "brands served"],
  ["4.9", "average client rating"],
];

export const RESULTS: { k: string; d: string; who: string; logo?: string }[] = [
  { k: "+108%", d: "direct-to-consumer revenue in 6 months", who: "FELCO", logo: "felco.webp" },
  { k: "£1.2M", d: "email revenue in the first 3 months", who: "Christmas Tree World", logo: "christmas-tree-world.webp" },
  { k: "+38.5%", d: "revenue", who: "Northerner", logo: "northerner.webp" },
  { k: "+$3.9M", d: "organic revenue across four markets", who: "PUMA" },
  { k: "+39%", d: "revenue", who: "Läderach" },
  { k: "+47.7%", d: "orders", who: "Gear-Up" },
];

export const PARTNERS = ["Adobe Commerce Gold Partner", "Hyvä Platinum Partner", "OpenAI Select Partner", "Shopify technology partner"];

/* The guarantee. Exact wording still needs scandiweb legal and finance sign-off (see the PR). */
export const GUARANTEE = {
  title: "The guarantee, in plain words",
  lines: [
    ["The target", "At least 15% more online revenue in the 90-day cycle than in the same 90 days last year. If last year isn’t comparable, we agree a baseline from your recent sales before we start."],
    ["How it’s measured", "On your store’s own sales reports (Shopify, Magento, WooCommerce and others), not on ad-platform numbers."],
    ["If we miss it", "You don’t pay our fee for that 90-day cycle."],
    ["Who qualifies", "Stores doing €50K+ a month online, with at least 12 months of sales history. We confirm it on the plan call."],
    ["What you do", "Give us access to your store and ad accounts, and approve agreed changes on time. Ad spend is yours and is paid directly to the platforms."],
  ] as [string, string][],
  fine: "Full terms are in your agreement before any work starts.",
};

export const COMMITMENTS: [string, string][] = [
  ["You own everything", "Every ad account, pixel, audience and dashboard stays in your name."],
  ["No lock-in", "Month to month after the first 90-day cycle."],
  ["A named senior lead", "You meet the person who runs your account before you sign."],
  ["Clear pricing", "A fixed monthly fee. No percentage of your ad spend."],
];

export const FAQ: [string, string][] = [
  ["What does it cost?", "A fixed monthly fee, agreed on the plan call after we’ve seen your numbers. It depends on the size of the store and how many of the five areas the plan needs. No setup fee and no share of your ad spend."],
  ["How can you guarantee revenue?", "We only offer it to stores where the scan and the plan call show room to grow, and we measure it on your store’s own sales, so both sides see the same number. If we miss, you don’t pay for that cycle."],
  ["We already have an agency. Does that matter?", "No. Many clients keep a partner for one channel. We agree who owns what before we start, and judge the result on total store revenue."],
  ["Which platforms do you work with?", "Shopify, Magento (Adobe Commerce), WooCommerce and most other platforms. scandiweb has built and grown eCommerce stores for 20+ years."],
  ["What happens on the call?", "30 minutes with a senior growth lead. We go through your scan, look at what’s really driving revenue, and tell you which three things we’d change first, whether or not we end up working together."],
  ["My store makes under €50K a month. Can I still use it?", "Yes. The scan is free for every store, and you get the full result and a short series of fixes by email. Calls and the guarantee are for stores doing €50K+ a month."],
];
