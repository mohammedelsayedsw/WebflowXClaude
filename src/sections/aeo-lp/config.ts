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

/* Call host for both funnels: Janis on Cal.com. */
export const HOST = {
  name: "Janis Sarmulis",
  role: "AEO Strategist",
  photo: "/aeo-lp/janis.webp",
  photoLarge: "/aeo-lp/janis-lg.webp",
  calLink: "janis-sarmulis/betteranswer-discovery-call",
};

/* Not wired yet (Marko, 16 Oct 2026): LinkedIn conversion IDs, HubSpot form submit, Omnisend contact + tags.
   The scandiweb.ai pages also fired a Google Ads conversion (AW-879717196); not carried over. */
