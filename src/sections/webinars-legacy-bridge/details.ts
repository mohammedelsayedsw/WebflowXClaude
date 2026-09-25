/**
 * The webinar's date and time, in one place because they appear in both the
 * hero eyebrow and the final CTA and must never disagree.
 */
export const WEBINAR_DATE = "27 October";
export const WEBINAR_TIME = "15:00 GMT";

/**
 * Two eyebrows, not one.
 *
 * The hero's is cut to what is worth a glance, because the H1 under it already
 * names the AS/400 and the hero has three seconds to land. The final CTA
 * restates who the session is for and how long it runs, since by then the
 * reader has scrolled the page and is deciding whether to register.
 */
export const HERO_EYEBROW_PARTS = ["Free webinar", WEBINAR_DATE, WEBINAR_TIME];

export const CTA_EYEBROW_PARTS = [
  "Free webinar for companies running AS/400 (IBM i)",
  WEBINAR_DATE,
  WEBINAR_TIME,
];
