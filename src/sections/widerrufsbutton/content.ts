import translationsJson from "./translations.json";

export type Lang = "en" | "de" | "fr" | "it" | "es";

export const LANGS: { id: Lang; label: string; name: string }[] = [
  { id: "en", label: "EN", name: "English" },
  { id: "de", label: "DE", name: "Deutsch" },
  { id: "fr", label: "FR", name: "Français" },
  { id: "it", label: "IT", name: "Italiano" },
  { id: "es", label: "ES", name: "Español" },
];

// The 27 EU member states. Shown the same across all UI languages (English
// endonyms), since the list itself is the same regardless of which language
// the page is rendered in.
export const EU_COUNTRIES: { name: string; flag: string }[] = [
  { name: "Austria", flag: "🇦🇹" },
  { name: "Belgium", flag: "🇧🇪" },
  { name: "Bulgaria", flag: "🇧🇬" },
  { name: "Croatia", flag: "🇭🇷" },
  { name: "Cyprus", flag: "🇨🇾" },
  { name: "Czechia", flag: "🇨🇿" },
  { name: "Denmark", flag: "🇩🇰" },
  { name: "Estonia", flag: "🇪🇪" },
  { name: "Finland", flag: "🇫🇮" },
  { name: "France", flag: "🇫🇷" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Greece", flag: "🇬🇷" },
  { name: "Hungary", flag: "🇭🇺" },
  { name: "Ireland", flag: "🇮🇪" },
  { name: "Italy", flag: "🇮🇹" },
  { name: "Latvia", flag: "🇱🇻" },
  { name: "Lithuania", flag: "🇱🇹" },
  { name: "Luxembourg", flag: "🇱🇺" },
  { name: "Malta", flag: "🇲🇹" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "Poland", flag: "🇵🇱" },
  { name: "Portugal", flag: "🇵🇹" },
  { name: "Romania", flag: "🇷🇴" },
  { name: "Slovakia", flag: "🇸🇰" },
  { name: "Slovenia", flag: "🇸🇮" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "Sweden", flag: "🇸🇪" },
];

type Item = { tag?: string; title: string; body: string };

export type Content = {
  nav: { cta: string };
  hero: {
    badge: string;
    h1: string;
    h1accent: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    assurances: string[];
    logosLabel: string;
  };
  requirements: {
    eyebrow: string;
    h2: string;
    h2accent: string;
    h2tail: string;
    intro: string;
    items: Item[];
  };
  coverage: {
    eyebrow: string;
    h2: string;
    h2accent: string;
    h2tail: string;
    intro: string;
    countriesLabel: string;
    stakesLabel: string;
    stakes: Item[];
  };
  solution: {
    eyebrow: string;
    h2: string;
    h2accent: string;
    h2tail: string;
    intro: string;
    items: Item[];
    disclaimer: string;
  };
  cta: {
    eyebrow: string;
    h2: string;
    h2accent: string;
    h2tail: string;
    body: string;
    points: string[];
    contactRole: string;
    formNote: string;
    disclaimer: string;
  };
};

const en: Content = {
  nav: { cta: "Get compliant" },
  hero: {
    badge: "EU Directive 2023/2673 · in force 19 June 2026",
    h1: "The withdrawal button, live on your store",
    h1accent: "in days",
    sub: "From 19 June 2026, EU law requires online shops to add a compliant withdrawal button. We add it to your store on any platform, live in as little as a day.",
    ctaPrimary: "Get compliant",
    ctaSecondary: "What the law requires",
    assurances: [
      "Every EU market",
      "Any eCommerce platform",
      "You keep control of refunds",
    ],
    logosLabel: "trusted by 700+ leading brands worldwide",
  },
  requirements: {
    eyebrow: "what the law requires",
    h2: "Canceling has to be",
    h2accent: "as simple as ordering",
    h2tail: ".",
    intro:
      "The rule comes from EU Directive 2023/2673, which adds Article 11a to the Consumer Rights Directive. It is fully harmonized, so the same four things apply in every EU country, on any platform, and a footer link meets none of them.",
    items: [
      {
        tag: "the button",
        title: "A visible withdrawal button",
        body: "Clearly labeled 'withdraw from contract here', prominent, and continuously available throughout the withdrawal period, reachable without contacting you. A buried email address or a PDF form does not count.",
      },
      {
        tag: "the flow",
        title: "A two-step process",
        body: "The customer fills in their order details, then submits on a separate 'confirm withdrawal' step. You cannot force a reason, and the first click cannot complete the withdrawal.",
      },
      {
        tag: "the confirmation",
        title: "An automatic confirmation",
        body: "The moment a withdrawal is submitted, the customer gets a confirmation of receipt on a durable medium, with the content and the exact date and time it arrived.",
      },
      {
        tag: "the legal pages",
        title: "Updated cancellation policy",
        body: "Your withdrawal instructions have to point to the new button and match the new flow, so the policy and the store actually agree.",
      },
    ],
  },
  coverage: {
    eyebrow: "where it applies",
    h2: "One EU rule,",
    h2accent: "27 markets",
    h2tail: ".",
    intro:
      "Directive 2023/2673 applies in every EU member state from 19 June 2026. Germany transposed it as § 356a BGB, others under their own statutes, but the obligation is the same wherever you sell to EU consumers.",
    countriesLabel: "Applies across all 27 EU member states from 19 June 2026",
    stakesLabel: "what it costs to skip it",
    stakes: [
      {
        title: "A 12-month return window",
        body: "Without a compliant withdrawal function, the 14-day cooling-off period extends by up to 12 months, so customers can withdraw from orders for more than a year.",
      },
      {
        title: "Warning letters",
        body: "Competitors and consumer associations can demand a cease-and-desist and go to court. In Germany these Abmahnungen are expected within days of the deadline.",
      },
      {
        title: "Fines",
        body: "National fines vary, from up to €50,000 in Germany and €75,000 in France. In Italy, where the failure is treated as an unfair commercial practice, penalties can reach €10 million. For serious cross-border breaches, EU rules allow fines of up to 4% of annual turnover.",
      },
    ],
  },
  solution: {
    eyebrow: "the solution",
    h2: "We make your store compliant,",
    h2accent: "in days",
    h2tail: ".",
    intro:
      "A standard setup goes live in a single day, and most stores are fully compliant within days. We work on any platform, Shopify, Magento / Adobe Commerce, WooCommerce, BigCommerce, Salesforce Commerce, or a custom or headless build, and add the button, the two-step flow, the confirmation, and the updated withdrawal instructions, then test it against the directive. Headless or multi-market builds take a little longer.",
    items: [
      {
        title: "On-page withdrawal button",
        body: "In the local language required by the directive, on every page, reachable without a login.",
      },
      {
        title: "Two-step confirmation",
        body: "Order details, then a separate confirm step. No forced reason field.",
      },
      {
        title: "Instant confirmation of receipt",
        body: "Sent on a durable medium, time-stamped, the moment a withdrawal is submitted.",
      },
      {
        title: "Guest orders covered",
        body: "Logged-in customers and guests, with no new passwords for your shoppers.",
      },
      {
        title: "Full audit log",
        body: "Every withdrawal recorded, so you can show you complied if anyone asks.",
      },
      {
        title: "You keep control of refunds",
        body: "Nothing is auto-refunded. Your team approves and triages in one queue.",
      },
    ],
    disclaimer:
      "This is not legal advice. We build to the functional requirements of EU Directive 2023/2673. Final legal sign-off on your withdrawal instructions stays with your counsel.",
  },
  cta: {
    eyebrow: "get compliant",
    h2: "Get your",
    h2accent: "withdrawal button",
    h2tail: " live.",
    body: "Tell us your platform, your markets, and where your store is today. We will scope the work, give you a timeline, and get you compliant across the EU. The rule is already in force, and stores without a compliant button face an extended return window and warning letters.",
    points: [
      "Every EU market, any platform, including custom and headless",
      "Button, two-step flow, confirmation, and legal pages",
      "Live in as little as one day",
    ],
    contactRole: "Co-founder, scandiweb",
    formNote: "We respond within one business day.",
    disclaimer:
      "This is not legal advice. Final sign-off on your withdrawal instructions stays with your counsel.",
  },
};

const t = translationsJson as unknown as Record<"de" | "fr" | "it" | "es", Content>;

export const C: Record<Lang, Content> = {
  en,
  de: t.de,
  fr: t.fr,
  it: t.it,
  es: t.es,
};
