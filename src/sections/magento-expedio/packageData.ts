/*
 * Expedio packages, from "Expedio - positioning, packages and landing page
 * brief" (October 2026). Prices in EUR, matching the Stripe checkouts.
 */
export const PACKAGES_URL = "/solutions/magento/expedio/packages";

export const REGISTER_URL = "https://expedio.withari.ai";
export const INSTALL_WITH_ARI_URL = "https://www.withari.ai/expedio/install-with-ari";

export type Pkg = {
  id: string;
  name: string;
  badge?: string;
  price: string;
  then?: string;
  body: string;
  howAri?: boolean;
  byScandiweb?: boolean;
  cta: { label: string; href: string };
};

/** Mirrors withari.ai/expedio/packages. */
export const PACKAGES: Pkg[] = [
  {
    id: "self-managed",
    name: "Self-managed",
    price: "Free",
    body: "The open-source edition of Expedio, to try it on your own store. No support, version updates, review or performance guarantee.",
    cta: { label: "Register", href: REGISTER_URL },
  },
  {
    id: "with-ari",
    name: "With Ari",
    badge: "Supported and updated",
    price: "€990",
    then: "per year",
    body: "Ari installs Expedio on a copy of your store, and the Expedio team keeps it supported and up to date with product support and version updates.",
    howAri: true,
    cta: { label: "Register", href: REGISTER_URL },
  },
  {
    id: "review",
    name: "Expert review",
    badge: "Expedio team audits",
    price: "€4,900",
    then: "first year, then €990 per year",
    body: "Product support and version updates, plus an expert review of your implementation with a prioritized list of improvements.",
    byScandiweb: true,
    cta: { label: "Buy now", href: "https://buy.stripe.com/5kQ28qcjWgohe0tcSG3VC00" },
  },
  {
    id: "implementation",
    name: "Implementation",
    badge: "2x speed guaranteed by contract",
    price: "€19,900",
    then: "with the first year of support, then €990 per year",
    body: "scandiweb implements and optimizes Expedio across your whole store, tests it, and launches it, with the performance result written into your contract.",
    byScandiweb: true,
    cta: { label: "Buy now", href: "https://buy.stripe.com/6oU5kC6ZCdc509D4ma3VC02" },
  },
];

/** Comparison rows: Self-managed, Support & updates, Expert review, Implementation. */
export const COMPARE: [string, string, string, string, string][] = [
  ["Expedio core", "Included", "Included", "Included", "Included"],
  ["Documentation and setup guides", "Not included", "Included", "Included", "Included"],
  ["Expedio product support", "Not included", "Included", "Included", "Included"],
  ["Expedio version updates", "Not included", "Included", "Included", "Included"],
  ["Installation and theme adaptation", "Your team", "Done by Ari", "Your team", "Done by scandiweb"],
  ["Expert implementation review", "Not included", "Not included", "Included", "Part of delivery"],
  ["Performance findings and recommendations", "Not included", "Not included", "Included", "Included"],
  ["Template and database query optimization", "Your team", "Your team", "Recommendations", "Included"],
  ["Staging testing and launch", "Your team", "Your team", "Your team", "Done by scandiweb"],
  ["Contractual performance guarantee", "Not included", "Not included", "Not included", "Included"],
];

/** What each paid level covers, from the brief. */
export const TERMS: [string, string][] = [
  ["With Ari", "Covers the Expedio product and access to version updates. Applying updates to your customized store and general Magento development are separate services."],
  ["Expert review", "One review of your Expedio implementation and a prioritized list of recommended improvements. Implementing those improvements is separate work."],
  ["Implementation", "End-to-end implementation, whole-store optimization, testing, and launch. The performance target and how it is measured are defined in your implementation agreement."],
];
