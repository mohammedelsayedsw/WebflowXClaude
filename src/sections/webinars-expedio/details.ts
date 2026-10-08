/**
 * The webinar's date, time and registration form, in one place because the
 * hero and the final CTA both show them and must never disagree.
 */
export const EYEBROW_PARTS = ["Free webinar", "10 November", "14:00 GMT"];

/** The Expedio demo: the same store on Magento and on Expedio, side by side. */
export const DEMO_URL = "https://expedio-demo.scandiweb.com/";

/**
 * HubSpot registration form. Empty until the form exists: the CTA renders
 * nothing in the form area while it is empty, and the page stays noindex
 * (see app/webinars/expedio/layout.tsx) until the form works.
 */
export const HUBSPOT_PORTAL = "25724996";
export const HUBSPOT_FORM_ID = "";

/* `photo` is the card portrait, `face` the small hero avatar. */
export const SPEAKERS = [
  {
    name: "Glebs Vrevsky",
    title: "Co-founder",
    bio: "Works on scandiweb's newest Magento products, including Expedio and Ari, and helps merchants see what they can do for their stores.",
    photo: "/webinars/expedio/glebs-vrevsky.jpg",
    face: "/webinars/expedio/glebs-vrevsky-face.jpg",
  },
  {
    name: "Alfreds Genkins",
    title: "CTO",
    bio: "Leads all of scandiweb's Magento technology. Founded ScandiPWA, the first open-source PWA theme built for Magento, and Ari, the first agent for Magento.",
    photo: "/webinars/expedio/alfreds-genkins.jpg",
    face: "/webinars/expedio/alfreds-genkins-face.jpg",
  },
];
