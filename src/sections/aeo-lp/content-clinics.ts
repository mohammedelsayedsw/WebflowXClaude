import { NOTIFY_CC } from "./config";
import { list, str, type FunnelCfg } from "./types";

export const CLINIC_WORDS = ["dental practice", "medspa", "implant clinic", "surgery practice", "hair clinic"];

export const CLINIC_DEMO_TABS = ["Dental", "Medspa", "Surgery", "Hair"];

export const CLINIC_REPORT: { tab: string; rows: [string, "red" | "amb" | "ok", string][] }[] = [
  { tab: "Dental", rows: [["“best dental implant clinic in [your city]”", "red", "Not named"], ["“All-on-4 cost [your city]”", "red", "Competitor named"], ["“is [your clinic] legit: reviews”", "amb", "Named, outdated info"], ["“best-reviewed dentist near me”", "ok", "Named"], ["“dental implants abroad vs at home”", "red", "Not named"]] },
  { tab: "Medspa", rows: [["“best medspa in [your city]”", "red", "Not named"], ["“how to choose an injector”", "red", "Competitor named"], ["“is [your clinic] legit: reviews”", "amb", "Named, outdated info"], ["“best-reviewed medspa near me”", "ok", "Named"], ["“lip filler cost [your city]”", "red", "Not named"]] },
  { tab: "Surgery", rows: [["“best facelift surgeon in [your city]”", "red", "Not named"], ["“facelift cost [your city]”", "red", "Competitor named"], ["“is [your clinic] board-certified”", "amb", "Named, outdated info"], ["“best-reviewed plastic surgeon near me”", "ok", "Named"], ["“tummy tuck after weight loss: who to trust”", "red", "Not named"]] },
  { tab: "Hair", rows: [["“best hair transplant clinic [your country]”", "red", "Not named"], ["“FUE vs DHI: which clinic”", "red", "Competitor named"], ["“is [your clinic] legit: reviews”", "amb", "Named, outdated info"], ["“best-reviewed hair clinic near me”", "ok", "Named"], ["“is a hair transplant in Istanbul safe”", "red", "Not named"]] },
];

export const CLINIC_CHART = [8, 14, 21, 30, 38, 47];

export const CLINICS: FunnelCfg = {
  fn: "aeo-clinics",
  vertical: "clinic",
  cta: "Get my free AI Growth Report",
  headerCta: "Get my free report",
  warn: "Your clinic: not mentioned",
  cardFoot: "Illustrative answer. Clinic names are fictional.",
  cards: [
    { q: "best dental implant clinic in London", h: ["Marylebone Implant Studio", "The Harley Street Dental Rooms", "Kensington Smile Clinic"] },
    { q: "best medspa for injectables in NYC", h: ["SoHo Skin & Aesthetics", "Tribeca Medspa Collective", "UES Aesthetics Lab"] },
    { q: "best facelift surgeon in Miami", h: ["Coral Gables Facial Plastics", "Brickell Aesthetic Surgery", "Aventura Face Institute"] },
    { q: "best hair transplant clinic: is Istanbul safe?", h: ["Bosphorus Hair Institute", "Nişantaşı Hair Clinic", "Levent FUE Center"] },
  ],
  results: [
    { n: "#23 → #1", l: "A travel brand, from invisible to the top recommendation across AI answers.", who: "Travel · AI search" },
    { n: "+110%", l: "AI-referred traffic for a retail brand after an AI-visibility programme.", who: "Retail · AI search" },
    { n: "+62.7%", l: "Higher conversion rate after a strategy roadmap and Hyvä rebuild.", who: "Enterprise retail · site revamp" },
    { n: "+39%", l: "Higher revenue with an award-winning storefront redesign.", who: "Läderach · luxury confectionery" },
    { n: "3-4×", l: "Better site performance across new markets, launched fast.", who: "PUMA · market expansion" },
  ],
  guides: [
    { k: "AI search", t: "How an AI picks 3 clinics out of 40", d: "It doesn’t search like Google. It assembles an answer from sources it trusts.", stat: "3-5 named per answer", img: "/aeo-lp/c_g1.webp", body: [
      "When a patient asks an AI “best implant clinic in [city]”, it doesn’t rank 40 websites. It assembles an answer from the sources it trusts: your site’s content and structure, reviews, and how often you’re mentioned across the web.",
      "If your clinic isn’t clearly described, well-reviewed and consistently cited, the AI names competitors instead, and you never see the patient.",
      "Your AI Growth Report shows exactly this: are you named, for which questions, and where the gaps are."] },
    { k: "Citations", t: "77% of what AI reads about you isn’t on your website", d: "Reviews, Reddit, YouTube and listicles feed the answer. Most clinics have never looked.", stat: "77% off-page", img: "/aeo-lp/c_g2.webp", body: [
      "77% of what AI engines cite about local businesses comes from third-party sources: review platforms, Reddit threads, YouTube, “best of” listicles (Whitespark, Jul 2026).",
      "That means your AI answer is being written by other people right now. Review velocity, how you respond, and where you’re mentioned decide it.",
      "The report maps every source behind your answers, so you know which mentions to earn first."] },
    { k: "Economics", t: "The $610 patient", d: "What paid ads spend to win one surgical patient, and what a named slot does to that number.", stat: "~$610 CAC", img: "/aeo-lp/c_g3.webp", body: [
      "A surgical patient costs ~$610 to acquire through today’s channels, the highest blended CAC in medicine (Dentplicity / ThinkBasis, 2025-26). Dental runs $150 to $300.",
      "An AI referral has no cost per click. At an $8K to $25K ticket, one additional named patient a month changes the economics of your whole marketing budget.",
      "The report tells you which winnable answers are worth the most for your procedures."] },
  ],
  book: {
    title: "Book a 30-minute call with Janis",
    body: "A conversation about your clinic: what AI answers when patients ask about your procedures, who gets named instead, and what’s worth fixing first.",
    points: ["Your AI answers, looked at live", "What’s winnable first, and what it’s worth", "No prep needed, no sales deck"],
  },
  pixel: { lead: "AEO Clinics report", call: "AEO Clinics call" },
  newsletter: {
    title: "AI visibility for clinic owners, monthly",
    body: "How patients now choose clinics through AI answers, and what to do about it. No spam.",
    ph: "you@yourclinic.com",
    ok: "You’re in. AI visibility tips, monthly. No spam.",
    subject: "AEO clinics newsletter signup: ",
  },
  quiz: {
    submitLabel: "Get my report",
    finalNote: "We’ll only use this to send your report and book your walkthrough. No spam.",
    doneTitle: "Thanks, we’ve got everything we need.",
    doneBody: "We’ll review your clinic and get in touch about your AI Growth Report within 3 days.",
    companyKey: "clinic",
    companyLabel: "Clinic",
    steps: [
      { type: "single", key: "clinicType", q: "What kind of clinic are you?", options: ["Medspa / aesthetic clinic", "Plastic or cosmetic surgery", "Cosmetic / implant dentistry", "Hair restoration", "Dermatology", "Other"] },
      { type: "single", key: "locations", q: "How many locations do you operate?", options: ["1", "2–5", "6–30", "30+"] },
      { type: "single", key: "patientOrigin", q: "Where are your patients mostly from?", options: ["Local (under 50 km)", "National", "International (medical tourism)"] },
      { type: "multi", key: "procedures", q: "Which procedures matter most to your revenue?", hint: "Pick up to 3", cap: 3, options: ["Anti-wrinkle injections / filler", "Laser, skin & RF", "Body contouring", "Facial surgery", "Breast", "Post-weight-loss surgery", "Implants / All-on-4", "Veneers & smile", "Aligners / ortho", "Hair transplant", "Weight loss / GLP-1", "Other"] },
      { type: "multi", key: "channels", q: "How do most new patients find you today?", options: ["Google search / maps", "Instagram / TikTok", "Referrals", "Paid ads", "Directories (RealSelf etc.)", "Don't know"] },
      { type: "single", key: "growthProblem", q: "What’s the biggest growth problem right now?", options: ["Not enough consults", "Consults don't convert", "Ads too expensive", "Reviews / reputation", "New location launch", "Competitors everywhere"] },
      { type: "fields", q: "Your clinic details", note: "Your report is built on your real clinic, city and procedures.", fields: [
        { key: "clinic", label: "Clinic name", ph: "e.g. Marylebone Implant Studio", req: true },
        { key: "website", label: "Website", ph: "yourclinic.com", url: true }] },
      { type: "single", key: "role", q: "What’s your role?", options: ["Owner / partner", "Practice manager", "Marketing lead", "Medical director", "Other"] },
      { type: "contact", q: "Where should we send your AI Growth Report?", fields: [
        { key: "name", label: "Your name", ph: "First name" },
        { key: "email", label: "Work email", ph: "you@yourclinic.com", type: "email" },
        { key: "whatsapp", label: "WhatsApp / phone (optional)", ph: "For your walkthrough reminder only" },
        { key: "notes", label: "Anything else? (optional)", area: true }] },
    ],
    /* Same fields and subject as scandiweb.ai/aeo/clinics (ClinicsLanding.tsx). */
    lead: (d, utm) => ({
      _cc: NOTIFY_CC,
      name: str(d, "name"), email: str(d, "email"), clinic: str(d, "clinic"), website: str(d, "website"),
      clinicType: str(d, "clinicType"), locations: str(d, "locations"), patientOrigin: str(d, "patientOrigin"),
      procedures: list(d, "procedures").join(", "), channels: list(d, "channels").join(", "),
      growthProblem: str(d, "growthProblem"), role: str(d, "role"),
      whatsapp: str(d, "whatsapp"), notes: str(d, "notes"),
      utm_source: utm.utm_source, utm_medium: utm.utm_medium, utm_campaign: utm.utm_campaign,
      utm_content: utm.utm_content, angle: utm.angle,
      _subject: "New clinic AI Growth Report request: " + str(d, "clinic"),
      _template: "table",
    }),
    summary: (d) => ({
      clinicType: str(d, "clinicType"), locations: str(d, "locations"), patientOrigin: str(d, "patientOrigin"),
      procedures: list(d, "procedures").join("|"), growthProblem: str(d, "growthProblem"), role: str(d, "role"),
    }),
  },
};
