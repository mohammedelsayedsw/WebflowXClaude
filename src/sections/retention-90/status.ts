/* Everything that will change lives here. Resolve before launch. */

/* Lead delivery and the Calendly link live server-side in server-config.ts; the browser
   only talks to our own /api/retention/submit gate. */
export const SUBMIT_ENDPOINT = "/solutions/api/retention/submit";
export const PIXEL_CONTENT = "Retention Score";
export const DL_EVENT = "retention_scan_request";
export const VERTICAL = "retention";

/* Who takes the call (modal + summary). The lifecycle lead on the team section is separate. */
export const HOST_NAME = "Nika Z.";
export const HOST_TITLE = "our Business Growth Manager";
export const HOST_PHOTO = "nika.webp";
export const LIFECYCLE_LEAD = "Andres Reitsnik";
export const LEGAL_ENTITY = "scandiweb SIA";

export const PAGE_URL = "https://scandiweb.com/solutions/retention-90";
