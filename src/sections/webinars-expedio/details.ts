/**
 * The webinar's date, time and registration form, in one place because the
 * hero and the final CTA both show them and must never disagree.
 */
export const EYEBROW_PARTS = ["Free webinar", "10 October", "14:00 GMT", "60 min"];

/** The Expedio demo: the same store on Magento and on Expedio, side by side. */
export const DEMO_URL = "https://expedio-demo.scandiweb.com/";

/**
 * HubSpot registration form. Empty until the form exists: the CTA renders
 * nothing in the form area while it is empty, and the page stays noindex
 * (see app/webinars/expedio/layout.tsx) until the form works.
 */
export const HUBSPOT_PORTAL = "25724996";
export const HUBSPOT_FORM_ID = "";

/* TODO before publish: real photos and titles for both speakers. */
export const SPEAKERS = [
  { name: "Glebs Vrevsky", title: "[CONFIRM title]" },
  { name: "Alfreds Genkins", title: "[CONFIRM title]" },
];
