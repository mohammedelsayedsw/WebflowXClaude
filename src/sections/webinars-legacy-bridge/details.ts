/**
 * The webinar's date and time, in one place because they appear in both the
 * hero eyebrow and the final CTA and must never disagree.
 *
 * Both are placeholders until the session is scheduled. They are written so
 * they are impossible to miss on the page rather than reading as a real date,
 * which is the failure mode that gets a placeholder published.
 */
/* TODO: set the real date and time before this page goes live. */
export const WEBINAR_DATE = "[DATE]";
export const WEBINAR_TIME = "[TIME] GMT";
export const WEBINAR_LENGTH = "60 minutes";

/** The eyebrow, identical in the hero and the final CTA. */
export const EYEBROW_PARTS = [
  "Free webinar for companies running AS/400 (IBM i)",
  WEBINAR_DATE,
  WEBINAR_TIME,
  WEBINAR_LENGTH,
];
