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
  who: string;
  included: string;
  /** one line for the main-page tile */
  short: string;
  ariLink?: boolean;
  byScandiweb?: boolean;
  cta: { label: string; href: string };
};

/** Mirrors withari.ai/expedio/packages (checked 2026-10-12). */
export const PACKAGES: Pkg[] = [
  {
    id: "self-managed",
    name: "Expedio Open Source",
    price: "Free",
    who: "Your developers or Ari",
    included: "Core package, documentation, step-by-step setup guides and migration skills, with no committed support.",
    short: "The core, documentation and setup guides, implemented by your developers.",
    cta: { label: "Register", href: REGISTER_URL },
  },
  {
    id: "with-ari",
    name: "Expedio Supported",
    badge: "Supported and updated",
    price: "€990",
    then: "per year",
    who: "Your developers or Ari",
    included: "Version updates, compatibility fixes and product support.",
    short: "Version updates, compatibility fixes and product support.",
    ariLink: true,
    cta: { label: "Register", href: REGISTER_URL },
  },
  {
    id: "review",
    name: "Implementation Audit",
    badge: "Expedio team audits",
    price: "€4,900",
    then: "first year, then €990 per year",
    who: "Your developers or agency",
    included: "Independent review of the implementation, with performance advice. Fixes are priced separately.",
    short: "An independent review of your implementation, with performance advice.",
    byScandiweb: true,
    cta: { label: "Buy now", href: "https://buy.stripe.com/5kQ28qcjWgohe0tcSG3VC00" },
  },
  {
    id: "implementation",
    name: "Expedio by scandiweb",
    badge: "2x speed guaranteed by contract",
    price: "€19,900",
    then: "with the first year of support, then €990 per year",
    who: "scandiweb",
    included: "Full implementation, optimization, testing and supervised launch, with the Supported plan included.",
    short: "scandiweb implements, optimizes, tests and launches it, with 2x speed guaranteed by contract.",
    byScandiweb: true,
    cta: { label: "Buy now", href: "https://buy.stripe.com/6oU5kC6ZCdc509D4ma3VC02" },
  },
];

/** Comparison rows: Self-managed, Support & updates, Expert review, Implementation. */
export const COMPARE: [string, string, string, string, string][] = [
  ["Expedio core", "Included", "Included", "Included", "Included"],
  ["Documentation and setup guides", "Included", "Included", "Included", "Included"],
  ["Migration skills", "Included", "Included", "Included", "Included"],
  ["Version updates and compatibility fixes", "Not included", "Included", "Included", "Included"],
  ["Expedio product support", "Not included", "Included", "Included", "Included"],
  ["Installation and theme adaptation", "Your team or Ari", "Your team or Ari", "Your team or agency", "Done by scandiweb"],
  ["Independent implementation review", "Not included", "Not included", "Included", "Part of delivery"],
  ["Performance advice", "Not included", "Not included", "Included", "Included"],
  ["Template and database query optimization", "Your team", "Your team", "Fixes priced separately", "Included"],
  ["Staging testing and supervised launch", "Your team", "Your team", "Your team", "Done by scandiweb"],
  ["Contractual performance guarantee", "Not included", "Not included", "Not included", "Included"],
];
