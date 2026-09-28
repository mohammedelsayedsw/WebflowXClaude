/**
 * The webinar's date and time, in one place because they appear in both the
 * hero eyebrow and the final CTA and must never disagree.
 */
export const WEBINAR_DATE = "27 October";
export const WEBINAR_TIME = "15:00 GMT";

/**
 * One eyebrow, used by both the hero and the final CTA.
 *
 * The CTA's used to restate who the session is for and how long it runs. It is
 * the same line in both places now, so the two cannot drift and the reader
 * meets the same short promise at the top of the page and at the form.
 */
export const EYEBROW_PARTS = ["Free webinar", WEBINAR_DATE, WEBINAR_TIME];
