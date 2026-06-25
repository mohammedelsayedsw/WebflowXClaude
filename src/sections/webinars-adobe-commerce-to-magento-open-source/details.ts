/**
 * Webinar details — single source of truth for the placeholders that change
 * once the session is confirmed. Edit the three blocks below and every section
 * (Hero, IntroParagraph, SpeakerBio, CTA) updates automatically.
 *
 * TODO(announce): replace the date/time/speaker placeholders once confirmed,
 * and swap REGISTER_URL for the real registration / webinar link.
 */

export const WEBINAR = {
  // e.g. "Tuesday, July 22, 2026"
  date: "Date to be announced",
  // e.g. "10:00 AM (GMT)"
  time: "Time to be announced",
} as const;

export const SPEAKER = {
  // TODO(announce): set the real speaker name once confirmed.
  name: "Speaker to be announced",
  title: "Senior Strategist, scandiweb",
  photo: "/webinars/adobe-commerce-to-magento-open-source/speaker.svg",
  alt: "Webinar speaker placeholder",
} as const;

// TODO(announce): point this at the real registration form / webinar link.
// Until then it links to the migration solutions page.
export const REGISTER_URL =
  "https://scandiweb.com/solutions/magento/adobe-commerce-to-magento-open-source";
