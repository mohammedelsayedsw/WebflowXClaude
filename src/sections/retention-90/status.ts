/* Everything that will change lives here. Resolve before launch. */

/* The Calendly link and the blocklists live server-side in server-config.ts. */
export const SUBMIT_ENDPOINT = "/solutions/api/retention/submit";
/* Lead email goes straight from the browser to formsubmit (same as since launch). The
   gate above only decides whether this submission may send, and hands back the booking link. */
export const FORM_ENDPOINT = "https://formsubmit.co/ajax/9d1b2680c9cd3f7648a04329a9ece4aa";
export const NOTIFY_CC = "marcusopt@gmail.com";
export const LEAD_SUBJECT = "New Retention Score request: ";
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
