import { NOTIFY_CC } from "./config";
import { str, type FunnelCfg, type ReportTab } from "./types";

export const HOTEL_GROWTH = [34, 42, 48, 60, 72, 88];

export const HOTEL_REPORT: ReportTab[] = [
  { tab: "City hotel", rows: [["“best hotel near [landmark] in [your city]”", "red", "Not named"], ["“hotel with parking in [your city] centre”", "red", "Competitor named"], ["“is [your hotel] good for business travel”", "amb", "Named, outdated info"], ["“best-reviewed hotel in [your city]”", "ok", "Named"], ["“where to stay in [your city] for a weekend”", "red", "Not named"]] },
  { tab: "Resort", rows: [["“best family resort in [your region]”", "red", "Not named"], ["“all-inclusive or half board in [your region]”", "red", "Competitor named"], ["“is [your resort] worth the price: reviews”", "amb", "Named, outdated info"], ["“best spa resort near [your city]”", "ok", "Named"], ["“adults-only resort in [your region]”", "red", "Not named"]] },
  { tab: "Boutique", rows: [["“best boutique hotel in [your city]”", "red", "Not named"], ["“romantic hotel for an anniversary in [your city]”", "red", "Competitor named"], ["“is [your hotel] legit: reviews”", "amb", "Named, outdated info"], ["“design hotel with a rooftop in [your city]”", "ok", "Named"], ["“quiet boutique hotel near the old town”", "red", "Not named"]] },
];

export const HOTEL_REPORT_INSIDE = [
  "What each engine says about your hotel today: ChatGPT, Gemini, Perplexity, Google AI",
  "Which guest questions you win, and which you lose",
  "Who gets named instead of you, and why",
  "Where the answers come from: reviews, OTAs, Reddit, YouTube, travel guides",
  "Your fix list, highest-impact first",
];
export const HOTEL_REPORT_NOTE = "Built by specialists in 3 business days, on your real hotel, city and guests. Measured monthly after that, so you see the trend, not a one-off screenshot.";

export const HOTELS: FunnelCfg = {
  fn: "aeo-hotels",
  vertical: "hotel",
  cta: "Get my free AI Growth Report",
  headerCta: "Get my free report",
  warn: "Your hotel: not mentioned",
  cards: [
    { q: "Best boutique hotels in London?", h: ["The Savoy", "Claridge’s", "The Connaught"] },
    { q: "Best boutique hotels in Dubai?", h: ["Burj Al Arab Jumeirah", "Atlantis The Royal", "One&Only One Za’abeel"] },
    { q: "Best boutique hotels in Oslo?", h: ["The Thief", "Hotel Continental", "Amerikalinjen"] },
    { q: "Best boutique hotels in New York?", h: ["The Carlyle", "The Mark", "Aman New York"] },
    { q: "Best boutique hotels in Marbella?", h: ["Marbella Club Hotel", "Puente Romano", "Nobu Hotel Marbella"] },
    { q: "Best boutique hotels in Paris?", h: ["Le Bristol", "Plaza Athénée", "The Ritz Paris"] },
  ],
  results: [
    { n: "#23 → #1", l: "A travel brand, from invisible to the top recommendation across AI answers.", who: "Travel · AI search" },
    { n: "+110%", l: "AI-referred traffic for a retail brand after an AI-visibility programme.", who: "Retail · AI search" },
    { n: "+62.7%", l: "Higher conversion rate after a strategy roadmap and Hyvä rebuild.", who: "Enterprise retail · site revamp" },
    { n: "+39%", l: "Higher revenue with an award-winning storefront redesign.", who: "Läderach · luxury confectionery" },
    { n: "3-4×", l: "Better site performance across new markets, launched fast.", who: "PUMA · market expansion" },
  ],
  guides: [
    { k: "AI search", t: "How AI decides which hotels to recommend", d: "What ChatGPT, Gemini and Perplexity read when a traveller asks where to stay.", stat: "3-5 named per answer", img: "/aeo-lp/h_p1.webp", body: [
      "When a guest asks an AI “best hotels in [city]”, it doesn’t search like Google. It assembles an answer from the sources it trusts: your site’s content and structure, third-party reviews, and how often you’re mentioned across the web.",
      "If your property isn’t clearly described, well-reviewed and consistently cited, the AI simply names competitors instead, and you never see the guest.",
      "Your AI Growth Report shows exactly this: are you named, for which guest questions, and where the gaps are."] },
    { k: "Citations", t: "Most of what AI reads about your hotel isn’t on your website", d: "Reviews, OTA listings, Reddit, YouTube and travel guides feed the answer.", stat: "77% off-page", img: "/aeo-lp/h_p3.webp", body: [
      "77% of what AI engines cite about local businesses comes from third-party sources: review platforms, Reddit threads, YouTube, “best of” lists (Whitespark, Jul 2026).",
      "For a hotel that means review sites, OTA listings, travel guides and the threads where guests compare stays. Your AI answer is being written by other people right now.",
      "The report maps every source behind your answers, so you know which mentions to earn first."] },
    { k: "Economics", t: "OTA commission vs direct: the real cost per booking", d: "Why a $312 OTA night nets far less than a $519 direct one.", stat: "18-30% commission", img: "/aeo-lp/h_p2.webp", body: [
      "OTAs take 18 to 30% of every booking and keep the guest relationship: the email, the data, the next stay.",
      "An AI recommendation has no commission. When the answer names your hotel and links your site, the guest books direct and the relationship is yours.",
      "The report shows which guest questions are winnable first, and what winning them is worth."] },
    { k: "Success story", t: "#23 → #1 in AI answers", d: "A travel brand, from invisible to the top recommendation.", stat: "#23 → #1", img: "/aeo-lp/h_f1.webp", body: [
      "A travel brand was invisible when travellers asked AI for recommendations, ranked around #23, well behind competitors.",
      "We rebuilt how AI reads and cites them: content, structure and the signals models trust.",
      "They moved to the #1 recommendation across the major AI answer engines."] },
    { k: "Success story", t: "+62.7% conversion after a rebuild", d: "A strategy roadmap and Hyvä rebuild that paid for itself.", stat: "+62.7% conversion", img: "/aeo-lp/h_f3.webp", body: [
      "An enterprise retailer’s site was converting well below its potential, on a slow, dated storefront.",
      "We set a strategy roadmap and rebuilt the front end on Hyvä for speed and clarity.",
      "Conversion rose 62.7%: the same speed and booking-flow work that turns an AI-referred guest into a direct booking."] },
    { k: "Success story", t: "+39% revenue, award-winning redesign", d: "Läderach: a redesign that lifted revenue and conversions.", stat: "+39% revenue", img: "/aeo-lp/h_fold2.webp", body: [
      "Läderach needed a storefront worthy of the brand that also performed.",
      "Our award-winning redesign paired premium craft with a conversion-first path.",
      "The result: +39% revenue and +47.8% conversions."] },
  ],
  book: {
    title: "Book a 30-minute call with Janis",
    body: "A conversation about your hotel: what AI answers when guests ask where to stay, who gets named instead, and what’s worth fixing first.",
    points: ["Your AI answers, looked at live", "What’s winnable first, and what it’s worth", "No prep needed, no sales deck"],
  },
  pixel: { lead: "AEO Hotels report", call: "AEO Hotels call" },
  newsletter: {
    title: "AI visibility for hoteliers, monthly",
    body: "How travellers now choose hotels through AI answers, and what to do about it. No spam.",
    ph: "you@yourhotel.com",
    ok: "You’re in. AI visibility tips, monthly. No spam.",
    subject: "AEO hotels newsletter signup: ",
  },
  quiz: {
    submitLabel: "Get my report",
    finalNote: "We’ll only use this to send your report and book your walkthrough. No spam.",
    doneTitle: "Thanks, we’ve got everything we need.",
    doneBody: "We’ll review your hotel and get in touch about your AI Growth Report within 3 days.",
    companyKey: "hotel",
    companyLabel: "Hotel",
    steps: [
      { type: "single", key: "propertyType", q: "What type of property?", options: ["Independent hotel", "Boutique hotel", "Resort", "Hotel group / chain", "Serviced apartments"] },
      { type: "single", key: "rooms", q: "How many rooms?", options: ["Under 50", "50–150", "150+", "Multiple properties"] },
      { type: "single", key: "occupancy", q: "Occupancy over the last 12 months?", options: ["Under 50%", "50-70%", "70-85%", "85%+", "Not sure"] },
      { type: "single", key: "channels", q: "Where do most of your bookings come from today?", options: ["OTAs (Booking.com, Expedia)", "Travel agents / partners", "Google / metasearch", "Paid ads", "SEO / organic", "Direct / our website"] },
      { type: "single", key: "struggles", q: "What’s your biggest struggle right now?", options: ["Not named when guests ask AI", "Too dependent on OTAs / low direct", "Low occupancy / seasonality", "Low average rate (ADR)", "Not enough repeat guests", "No time / team for marketing"] },
      { type: "single", key: "extras", q: "What do you sell beyond rooms?", options: ["Weddings", "Meetings & events", "F&B / restaurant", "Spa & wellness", "Venue / space hire", "Rooms only"] },
      { type: "single", key: "team", q: "Who runs your marketing today?", options: ["In-house team", "External agency", "Freelancers", "Just me", "Nobody, really"] },
      { type: "fields", q: "Your hotel details", note: "Your report is built on your real hotel, city and guests.", fields: [
        { key: "hotel", label: "Hotel name", ph: "e.g. The Marbella Club", req: true },
        { key: "website", label: "Website", ph: "yourhotel.com", url: true }] },
      { type: "single", key: "role", q: "What’s your role?", options: ["Owner / GM", "Commercial / Revenue", "Marketing", "IT / Operations"] },
      { type: "contact", q: "Where should we send your AI Growth Report?", fields: [
        { key: "name", label: "Your name", ph: "First name" },
        { key: "email", label: "Work email", ph: "you@yourhotel.com", type: "email" },
        { key: "whatsapp", label: "WhatsApp / phone (optional)", ph: "For your walkthrough reminder only" },
        { key: "notes", label: "Anything else? (optional)", area: true }] },
    ],
    /* Same fields and subject as scandiweb.ai/aeo/hotels (HotelLanding.tsx); the lead-processing skills match on the subject. */
    lead: (d, utm) => ({
      _cc: NOTIFY_CC,
      name: str(d, "name"), email: str(d, "email"), hotel: str(d, "hotel"), website: str(d, "website"),
      propertyType: str(d, "propertyType"), rooms: str(d, "rooms"), occupancy: str(d, "occupancy"),
      channels: str(d, "channels"), struggles: str(d, "struggles"), extras: str(d, "extras"),
      team: str(d, "team"), role: str(d, "role"), whatsapp: str(d, "whatsapp"), notes: str(d, "notes"),
      utm_source: utm.utm_source, utm_medium: utm.utm_medium, utm_campaign: utm.utm_campaign,
      utm_content: utm.utm_content, angle: utm.angle,
      _subject: "New hotel audit request: " + (str(d, "hotel") || "(no name)"),
      _template: "table",
    }),
    summary: (d) => ({
      propertyType: str(d, "propertyType"), rooms: str(d, "rooms"), occupancy: str(d, "occupancy"),
      channels: str(d, "channels"), struggles: str(d, "struggles"), team: str(d, "team"), role: str(d, "role"),
    }),
  },
};
