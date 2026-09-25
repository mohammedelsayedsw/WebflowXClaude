/* SERVER ONLY. Never import from a "use client" file: the public Calendly URL and the
   blocklist must not reach the browser bundle. */

export const FORM_ENDPOINT = "https://formsubmit.co/ajax/9d1b2680c9cd3f7648a04329a9ece4aa";
export const NOTIFY_CC = "marcusopt@gmail.com";
export const LEAD_SUBJECT = "New Retention Score request: ";
export const BLOCKED_SUBJECT = "Blocked retention attempt: ";

/* Calendly. CALENDLY_TOKEN (env) enables single-use links; without it the public URL is
   returned only to submissions that pass every check. */
export const CALENDLY_EVENT_TYPE = "6155663e-f4f4-4dd9-abda-dd582af12273";
export const CALENDLY_PUBLIC_URL = "https://calendly.com/nika-zhgheria-scandiweb/growth-intro-meeting";

/* Blocklist. Extend without a deploy via env RETENTION_BLOCKLIST, a JSON object with the
   same three keys. Matching is case-insensitive.
   - emails: exact addresses
   - localParts: regexes tested against the part before @
   - stores: exact domains (www. stripped) */
export const BLOCKLIST = {
  emails: ["kauslunde@hotmail.com"],
  localParts: ["^kauslunde$", "^(kaus|kais|klaus).*lunde"],
  stores: ["kaus.dk", "kais.dk", "kauslunde.dk"],
};
