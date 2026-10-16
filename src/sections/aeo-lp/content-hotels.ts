import { NOTIFY_CC } from "./config";
import { list, str, type FunnelCfg } from "./types";

export const HOTEL_POINTS: [string, number][] = [
  ["AI visibility (AEO)", 3], ["SEO & local presence", 7], ["Site speed & Core Web Vitals", 5], ["Mobile booking experience", 6],
  ["Booking flow & conversion", 5], ["Direct vs OTA dependency", 4], ["Paid & metasearch readiness", 6], ["Guest data & CRM capture", 4],
  ["Reputation & rate signals", 7], ["Analytics, trust & compliance", 6],
];

export const HOTEL_GROWTH = [34, 42, 48, 60, 72, 88];

export const HOTELS: FunnelCfg = {
  fn: "aeo-hotels",
  vertical: "hotel",
  cta: "Get professional audit",
  headerCta: "Get professional audit",
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
    { n: "#23 → #1", l: "A travel brand, from invisible to the top recommendation across AI answers.", who: "Travel · AI search (AEO)" },
    { n: "3-4×", l: "Better site performance across new markets, launched fast.", who: "PUMA · market expansion" },
    { n: "+62.7%", l: "Higher conversion rate after a strategy roadmap and Hyvä rebuild.", who: "Enterprise retail · site revamp" },
    { n: "+39%", l: "Higher revenue with an award-winning storefront redesign.", who: "Läderach · luxury confectionery" },
    { n: "10+", l: "Data silos eliminated with one unified platform across 16 countries.", who: "B2B group · unified data" },
  ],
  guides: [
    { k: "Guide", t: "How AI decides which hotels to recommend", d: "What ChatGPT, Gemini and Perplexity read when a traveller asks where to stay.", stat: "", img: "/aeo-lp/h_p1.webp", body: [
      "When a guest asks an AI “best hotels in [city]”, it doesn’t search like Google. It assembles an answer from the sources it trusts: your site’s content and structure, third-party reviews, and how often you’re mentioned across the web.",
      "If your property isn’t clearly described, well-reviewed and consistently cited, the AI simply names competitors instead, and you never see the guest.",
      "Point 1 of the audit scores exactly this: are you named, for which questions, and where the gaps are."] },
    { k: "Guide", t: "OTA commission vs direct: the real cost per booking", d: "Why a $312 OTA night nets far less than a $519 direct one.", stat: "", img: "/aeo-lp/h_p2.webp", body: [
      "OTAs take 18 to 30% of every booking and keep the guest relationship: the email, the data, the next stay.",
      "Once you net out commission, an OTA booking is worth far less than a direct one, and you’ve paid to rent a guest who was already looking for you.",
      "The audit scores how hard your site drives direct vs how much you’re leaking to the OTAs, and what winning it back is worth."] },
    { k: "Guide", t: "The 10 things we check on your hotel site", d: "A quick tour of the 10-point growth audit.", stat: "", img: "/aeo-lp/h_p3.webp", body: [
      "We score ten growth points from your live site: AI visibility, SEO & local, speed, mobile, booking flow, direct vs OTA, paid & metasearch, guest data, reputation & rates, and analytics & compliance.",
      "Each gets a score out of ten, rolled into a total out of 100, with the highest-impact fixes first.",
      "It takes 3 business days and it’s done by specialists, not a script."] },
    { k: "Success story", t: "#23 → #1 in AI answers", d: "A travel brand, from invisible to the top recommendation.", stat: "#23 → #1", img: "/aeo-lp/h_f1.webp", body: [
      "A travel brand was invisible when travellers asked AI for recommendations, ranked around #23, well behind competitors.",
      "We rebuilt how AI reads and cites them: content, structure and the signals models trust.",
      "They moved to the #1 recommendation across the major AI answer engines."] },
    { k: "Success story", t: "+62.7% conversion after a rebuild", d: "A strategy roadmap and Hyvä rebuild that paid for itself.", stat: "+62.7% conversion", img: "/aeo-lp/h_f3.webp", body: [
      "An enterprise retailer’s site was converting well below its potential, on a slow, dated storefront.",
      "We set a strategy roadmap and rebuilt the front end on Hyvä for speed and clarity.",
      "Conversion rose 62.7%, the same booking-flow and speed work behind audit points 3 to 5."] },
    { k: "Success story", t: "+39% revenue, award-winning redesign", d: "Läderach: a redesign that lifted revenue and conversions.", stat: "+39% revenue", img: "/aeo-lp/h_fold2.webp", body: [
      "Läderach needed a storefront worthy of the brand that also performed.",
      "Our award-winning redesign paired premium craft with a conversion-first path.",
      "The result: +39% revenue and +47.8% conversions, the direct-booking-site work behind audit point 5."] },
  ],
  book: {
    title: "Book a 30-minute call with Janis",
    body: "A conversation about your hotel: how guests find you in AI and search today, where bookings leak to the OTAs, and what’s worth fixing first.",
    points: ["Your AI answers, looked at live", "Where direct bookings leak, and what it’s worth", "No prep needed, no sales deck"],
  },
  pixel: { lead: "AEO Hotels audit", call: "AEO Hotels call" },
  newsletter: {
    title: "AEO tips for hoteliers, monthly",
    body: "How AI search is changing hotel discovery, and what to do about it. No spam.",
    ph: "you@yourhotel.com",
    ok: "You’re in. AEO tips, monthly. No spam.",
    subject: "AEO hotels newsletter signup: ",
  },
  quiz: {
    submitLabel: "Get my audit",
    finalNote: "We’ll only use this to send your audit and book your walkthrough. No spam.",
    doneTitle: "Thanks, we’ve got everything we need.",
    doneBody: "We’ll review your hotel and get in touch about your 10-point growth audit within 3 days.",
    companyKey: "hotel",
    companyLabel: "Hotel",
    steps: [
      { type: "single", key: "propertyType", q: "What type of property?", options: ["Independent hotel", "Boutique hotel", "Resort", "Hotel group / chain", "Serviced apartments"] },
      { type: "single", key: "rooms", q: "How many rooms?", options: ["Under 50", "50–150", "150+", "Multiple properties"] },
      { type: "single", key: "occupancy", q: "Occupancy over the last 12 months?", options: ["Under 50%", "50-70%", "70-85%", "85%+", "Not sure"] },
      { type: "multi", key: "channels", q: "Where do your bookings come from today?", hint: "Pick any that apply.", options: ["OTAs (Booking.com, Expedia)", "Travel agents / partners", "Google / metasearch", "Paid ads", "SEO / organic", "Direct / our website"] },
      { type: "multi", key: "struggles", q: "What are your biggest struggles right now?", hint: "Pick any that apply.", other: { key: "strugglesOther", label: "Anything else? (optional)" }, options: ["Too dependent on OTAs / low direct", "Low occupancy / seasonality", "Low average rate (ADR)", "Not enough repeat guests", "Website or tracking issues", "No time / team for marketing"] },
      { type: "multi", key: "extras", q: "What do you sell beyond rooms?", hint: "Pick any that apply.", options: ["Weddings", "Meetings & events", "F&B / restaurant", "Spa & wellness", "Venue / space hire", "Rooms only"] },
      { type: "single", key: "team", q: "Who runs your marketing & dev today?", options: ["In-house team", "External agency", "Freelancers", "Just me", "Nobody, really"] },
      { type: "fields", q: "Your hotel details", fields: [
        { key: "hotel", label: "Hotel name", ph: "e.g. The Marbella Club", req: true },
        { key: "website", label: "Website", ph: "yourhotel.com", url: true }] },
      { type: "single", key: "role", q: "What’s your role?", options: ["Owner / GM", "Commercial / Revenue", "Marketing", "IT / Operations"] },
      { type: "contact", q: "Where should we send it?", fields: [
        { key: "name", label: "Your name", ph: "First name" },
        { key: "email", label: "Work email", ph: "you@yourhotel.com", type: "email" },
        { key: "whatsapp", label: "WhatsApp / phone (optional)", ph: "For your walkthrough reminder only" },
        { key: "notes", label: "Anything else? (optional)", area: true }] },
    ],
    /* Same fields and subject as scandiweb.ai/aeo/hotels (HotelLanding.tsx). */
    lead: (d, utm) => ({
      _cc: NOTIFY_CC,
      name: str(d, "name"), email: str(d, "email"), hotel: str(d, "hotel"), website: str(d, "website"),
      propertyType: str(d, "propertyType"), rooms: str(d, "rooms"), occupancy: str(d, "occupancy"),
      channels: list(d, "channels").join(", "), struggles: list(d, "struggles").join(", "),
      strugglesOther: str(d, "strugglesOther"), extras: list(d, "extras").join(", "),
      team: str(d, "team"), role: str(d, "role"), whatsapp: str(d, "whatsapp"), notes: str(d, "notes"),
      utm_source: utm.utm_source, utm_medium: utm.utm_medium, utm_campaign: utm.utm_campaign,
      utm_content: utm.utm_content, angle: utm.angle,
      _subject: "New hotel audit request: " + (str(d, "hotel") || "(no name)"),
      _template: "table",
    }),
    summary: (d) => ({
      propertyType: str(d, "propertyType"), rooms: str(d, "rooms"), occupancy: str(d, "occupancy"),
      team: str(d, "team"), role: str(d, "role"),
    }),
  },
};
