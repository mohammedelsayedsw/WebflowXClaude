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

/* Omnisend API key, brand "Scandiweb.com (demand)". TEMPORARY fallback committed at Marko's
   request (13 Oct 2026) until an env var is available. env OMNISEND_API_KEY wins when set.
   Rotate this key in Omnisend once it moves to env: the repo is public. */
export const OMNISEND_API_KEY_FALLBACK = "6acda3b7160c976a2a289b79-OoKM8xT4FE3thK8jAXLsDHTozIQzGLf9BhylNwVytBNYj7JTHd";

/* Calendly personal access token for the no-show webhook (api/retention/calendly).
   Used only when env CALENDLY_WEBHOOK_TOKEN is not set. Paste the token between the quotes. */
export const CALENDLY_WEBHOOK_TOKEN_FALLBACK = "eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzkzNzcyMDY0LCJqdGkiOiI0YzQzZDdhZS04NjVlLTQwZTQtOWVhZC1iM2I2OGQ5MTgxNDYiLCJ1c2VyX3V1aWQiOiJhYmM1ZjJkYy1mNTAxLTQ4MDMtOWJmYy05ZTZhMGZkODdiMDEiLCJzY29wZSI6IndlYmhvb2tzOnJlYWQgd2ViaG9va3M6d3JpdGUgYXZhaWxhYmlsaXR5OnJlYWQgYXZhaWxhYmlsaXR5OndyaXRlIGV2ZW50X3R5cGVzOnJlYWQgZXZlbnRfdHlwZXM6d3JpdGUgbG9jYXRpb25zOnJlYWQgcm91dGluZ19mb3JtczpyZWFkIHNoYXJlczpyZWFkIHNoYXJlczp3cml0ZSBzY2hlZHVsZWRfZXZlbnRzOnJlYWQgc2NoZWR1bGVkX2V2ZW50czp3cml0ZSBzY2hlZHVsaW5nX2xpbmtzOndyaXRlIn0.h0yV0SqA1SlWgr5v6QoZ9dxCC_ZmSjhpYC12_xxFezLIUAfiqAIaCWjXGJM1ISt5nN_QDeXtuJ1UgaLn3bk2wQ";
