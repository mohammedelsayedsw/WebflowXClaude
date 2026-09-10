/* Everything that will change lives here. Resolve before launch. */

/* Lead delivery: same FormSubmit endpoint as /aeo/hotels and /aeo/clinics,
   so submissions land in the same inbox alongside the audit requests. */
export const FORM_ENDPOINT = "https://formsubmit.co/ajax/9d1b2680c9cd3f7648a04329a9ece4aa";
export const NOTIFY_CC = "marcusopt@gmail.com";
export const LEAD_SUBJECT = "New Retention Score request: ";
export const PIXEL_CONTENT = "Retention Score";
export const DL_EVENT = "retention_scan_request";
export const VERTICAL = "retention";

/* HubSpot meetings link for the booking modal. Empty = placeholder box shown. */
export const CALENDAR_URL = "";

export const HOST_NAME = "Andres Reitsnik";
export const HOST_TITLE = "Lifecycle Lead";
export const LEGAL_ENTITY = "scandiweb SIA";

export const PAGE_URL = "https://scandiweb.com/solutions/retention-90";
