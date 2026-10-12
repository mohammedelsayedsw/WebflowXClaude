/*
 * Expedio packages, from "Expedio - positioning, packages and landing page
 * brief" (October 2026). Prices in EUR, matching the Stripe checkouts.
 */
export const PACKAGES_URL = "/solutions/magento/expedio/packages";
export const ARI_URL = "https://www.withari.ai";

export type Pkg = {
  id: string;
  name: string;
  price: string;
  then?: string;
  body: string;
  cta: { label: string; href: string; external?: boolean };
  ari?: boolean;
};

export const PACKAGES: Pkg[] = [
  {
    id: "self-managed",
    name: "Self-managed",
    price: "Free",
    body: "The open-source edition of Expedio, to try it on your own store. No support, version updates, review or performance guarantee.",
    cta: { label: "Get the free version", href: "/solutions/magento/expedio#contact" },
  },
  {
    id: "support",
    name: "Support & updates",
    price: "€990",
    then: "per year",
    body: "Product support and version updates from the Expedio team, to keep your installation supported and up to date.",
    cta: { label: "Buy now", href: "https://buy.stripe.com/cNi9AScjW5JD09D6ui3VC01", external: true },
    ari: true,
  },
  {
    id: "review",
    name: "Expert review",
    price: "€4,900",
    then: "first year, then €990 per year",
    body: "Everything in Support & updates, plus one expert review of your implementation with a prioritized list of improvements.",
    cta: { label: "Buy now", href: "https://buy.stripe.com/5kQ28qcjWgohe0tcSG3VC00", external: true },
  },
  {
    id: "implementation",
    name: "Implementation",
    price: "€19,900",
    then: "with the first year of support, then €990 per year",
    body: "scandiweb implements and optimizes Expedio across your whole store, tests it, and launches it, with the performance result written into your contract.",
    cta: { label: "Buy now", href: "https://buy.stripe.com/6oU5kC6ZCdc509D4ma3VC02", external: true },
  },
];

/** Comparison rows: Self-managed, Support & updates, Expert review, Implementation. */
export const COMPARE: [string, string, string, string, string][] = [
  ["Expedio core", "Included", "Included", "Included", "Included"],
  ["Documentation and setup guides", "Not included", "Included", "Included", "Included"],
  ["Expedio product support", "Not included", "Included", "Included", "Included"],
  ["Expedio version updates", "Not included", "Included", "Included", "Included"],
  ["Installation and theme adaptation", "Your team", "Your team", "Your team", "Done by scandiweb"],
  ["Expert implementation review", "Not included", "Not included", "One review", "Part of delivery"],
  ["Performance findings and recommendations", "Not included", "Not included", "Included", "Included"],
  ["Template and database query optimization", "Your team", "Your team", "Recommendations", "Included"],
  ["Staging testing and launch", "Your team", "Your team", "Your team", "Done by scandiweb"],
  ["Contractual performance guarantee", "Not included", "Not included", "Not included", "Included"],
];

/** What each paid level covers, from the brief. */
export const TERMS: [string, string][] = [
  ["Support & updates", "Covers the Expedio product and access to version updates. Applying updates to your customized store and general Magento development are separate services."],
  ["Expert review", "One review of your Expedio implementation and a prioritized list of recommended improvements. Implementing those improvements is separate work."],
  ["Implementation", "End-to-end implementation, whole-store optimization, testing, and launch. The performance target and how it is measured are defined in your implementation agreement."],
];
