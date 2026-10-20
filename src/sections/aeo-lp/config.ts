/* AEO landing pages (/solutions/aeo/hotels, /solutions/aeo/clinics): everything that will change lives here. */

export type Funnel = "aeo-hotels" | "aeo-clinics";

/* Lead email goes straight from the browser to FormSubmit, same endpoint and same subjects/fields as the
   scandiweb.ai pages, so the lead-processing skills keep working (they match on the subject line). */
export const FORM_ENDPOINT = "https://formsubmit.co/ajax/9d1b2680c9cd3f7648a04329a9ece4aa";
export const NOTIFY_CC = "marcusopt@gmail.com";

/* Marko's hub collector. OFF until track.php / the hub dashboards can split funnels by `fn`:
   today r-retention-funnel counts every session in the log, so AEO visits would inflate the
   Retention numbers. Flip to true once the hub filters by fn. GTM dataLayer + Meta fire regardless. */
export const HUB_TRACKING = false;

/* Omnisend wiring (server routes in app/api/aeo). The lead email still goes from the browser to FormSubmit. */
export const SUBMIT_ENDPOINT = "/solutions/api/aeo/submit";
export const UPDATE_ENDPOINT = "/solutions/api/aeo/update";
export const SMS_CONSENT =
  "Yes, text me my booking link and one follow-up from scandiweb. Up to 2 messages. Reply STOP to opt out. Message and data rates may apply.";

/* Call host for both funnels: Janis on Cal.com. */
export const HOST = {
  name: "Janis Sarmulis",
  role: "AEO Strategist",
  photo: "/aeo-lp/janis.webp",
  photoLarge: "/aeo-lp/janis-lg.webp",
  calLink: "janis-sarmulis/betteranswer-discovery-call",
};

/* Google Ads: the same lead conversion the scandiweb.ai pages fired (Lovable src/lib/trackLead.ts), so the
   campaigns keep counting leads. $300 value, enhanced conversions (gtag hashes the email in the browser). */
export const GOOGLE_ADS = { id: "AW-879717196", leadSendTo: "AW-879717196/_N_JCLzWhe4cEMzWvaMD", leadValue: 300, currency: "USD" };

/* LinkedIn Insight Tag, partner 2329169 (Scandiweb V2, account 506797827). Conversion IDs per funnel are
   still to come from Campaign Manager (check 21234978 / 21234986 first); a null ID fires nothing. */
export const LINKEDIN = { partner: "2329169", conversion: { "aeo-hotels": null, "aeo-clinics": null } as Record<Funnel, number | null> };

/* Not wired (Marko, 20 Oct 2026): HubSpot tracking script + form submit. */
