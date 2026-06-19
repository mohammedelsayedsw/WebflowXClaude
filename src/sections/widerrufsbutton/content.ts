export type Lang = "en" | "de";

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
    formNote: string;
    disclaimer: string;
  };
};

export const C: Record<Lang, Content> = {
  en: {
    nav: { cta: "Get compliant" },
    hero: {
      badge: "§ 356a BGB · in force 19 June 2026",
      h1: "The German Widerrufsbutton, live on your store",
      h1accent: "in days",
      sub: "German law now requires online shops selling to German consumers to offer a withdrawal button, a two-step confirmation flow, and an automatic confirmation of receipt, wherever a right of withdrawal applies. We add all three to your store, whatever platform it runs on. A standard setup can go live in a single day.",
      ctaPrimary: "Get compliant",
      ctaSecondary: "What the law requires",
      assurances: [
        "Any eCommerce platform",
        "Works for guest orders",
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
        "Since 19 June 2026, § 356a BGB applies to every B2C online shop where a right of withdrawal exists, on any platform. It comes down to four things, and a footer link meets none of them.",
      items: [
        {
          tag: "the button",
          title: "A visible withdrawal button",
          body: "Clearly labeled 'Vertrag widerrufen', prominent, and continuously available while the withdrawal period runs, reachable without a login. A buried email address or a PDF form does not count.",
        },
        {
          tag: "the flow",
          title: "A two-step process",
          body: "The customer enters their order details, then confirms on a separate step. You cannot force a reason, and the first click cannot complete the withdrawal.",
        },
        {
          tag: "the confirmation",
          title: "An automatic confirmation",
          body: "The moment a withdrawal is submitted, the customer gets a confirmation of receipt on a durable medium, with the exact date and time it arrived.",
        },
        {
          tag: "the legal pages",
          title: "Updated cancellation policy",
          body: "Your Widerrufsbelehrung has to point to the new button and match the new flow, so the policy and the store actually agree.",
        },
      ],
    },
    solution: {
      eyebrow: "the solution",
      h2: "We make your store compliant,",
      h2accent: "in days",
      h2tail: ".",
      intro:
        "A standard setup goes live in a single day, and most stores are fully compliant within days. We work on any platform, Shopify, Magento / Adobe Commerce, WooCommerce, BigCommerce, Salesforce Commerce, or a custom or headless build, and add the button, the two-step flow, the confirmation, and the updated Widerrufsbelehrung, then test it against § 356a BGB. Headless or multi-market builds take a little longer.",
      items: [
        {
          title: "On-page withdrawal button",
          body: "Labeled 'Vertrag widerrufen', on every page, reachable without a login.",
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
          body: "Logged-in and guest customers, with no new passwords for your shoppers.",
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
        "This is not legal advice. We build to the functional requirements of § 356a BGB. Final legal sign-off on your cancellation policy stays with your counsel.",
    },
    cta: {
      eyebrow: "get compliant",
      h2: "Get your",
      h2accent: "withdrawal button",
      h2tail: " live.",
      body: "Tell us your platform and where your store is today. We will scope the work, give you a timeline, and get you compliant with § 356a BGB. The rule is already in force, and stores without a compliant button are exposed to Abmahnungen, the formal warning letters that competitors and consumer-protection groups can send.",
      points: [
        "Any platform, including custom and headless",
        "Button, two-step flow, confirmation, and legal pages",
        "Live in as little as one day",
      ],
      formNote: "We respond within one business day.",
      disclaimer:
        "This is not legal advice. Final sign-off on your cancellation policy stays with your counsel.",
    },
  },

  de: {
    nav: { cta: "Jetzt umsetzen" },
    hero: {
      badge: "§ 356a BGB · in Kraft seit 19. Juni 2026",
      h1: "Der Widerrufsbutton in Ihrem Shop, live",
      h1accent: "in wenigen Tagen",
      sub: "Seit dem 19. Juni 2026 verlangt § 356a BGB von Onlineshops, die an Verbraucher in Deutschland verkaufen, einen Widerrufsbutton, einen zweistufigen Bestätigungsablauf und eine automatische Eingangsbestätigung, überall dort, wo ein Widerrufsrecht besteht. Wir richten alle drei in Ihrem Shop ein, unabhängig von der Plattform. Eine Standardeinrichtung kann an einem einzigen Tag live gehen.",
      ctaPrimary: "Jetzt umsetzen",
      ctaSecondary: "Was das Gesetz verlangt",
      assurances: [
        "Jede E-Commerce-Plattform",
        "Funktioniert für Gastbestellungen",
        "Sie behalten die Kontrolle über Rückerstattungen",
      ],
      logosLabel: "über 700 führende Marken weltweit vertrauen uns",
    },
    requirements: {
      eyebrow: "was das Gesetz verlangt",
      h2: "Widerrufen muss",
      h2accent: "so einfach sein wie Bestellen",
      h2tail: ".",
      intro:
        "Seit dem 19. Juni 2026 gilt § 356a BGB für jeden B2C-Onlineshop mit Widerrufsrecht, auf jeder Plattform. Es kommt auf vier Dinge an, und ein Link im Footer erfüllt keines davon.",
      items: [
        {
          tag: "der Button",
          title: "Ein sichtbarer Widerrufsbutton",
          body: "Klar mit 'Vertrag widerrufen' beschriftet, gut sichtbar und während der gesamten Widerrufsfrist durchgehend erreichbar, ohne Login. Eine versteckte E-Mail-Adresse oder ein PDF-Formular reichen nicht.",
        },
        {
          tag: "der Ablauf",
          title: "Ein zweistufiger Prozess",
          body: "Der Kunde gibt seine Bestelldaten ein und bestätigt dann in einem separaten Schritt. Ein Grund darf nicht verpflichtend sein, und der erste Klick darf den Widerruf nicht abschließen.",
        },
        {
          tag: "die Bestätigung",
          title: "Eine automatische Bestätigung",
          body: "Sobald ein Widerruf abgeschickt wird, erhält der Kunde eine Eingangsbestätigung auf einem dauerhaften Datenträger, mit dem genauen Datum und der Uhrzeit des Eingangs.",
        },
        {
          tag: "die Rechtstexte",
          title: "Aktualisierte Widerrufsbelehrung",
          body: "Ihre Widerrufsbelehrung muss auf den neuen Button verweisen und zum neuen Ablauf passen, damit Rechtstext und Shop übereinstimmen.",
        },
      ],
    },
    solution: {
      eyebrow: "die Lösung",
      h2: "Wir machen Ihren Shop konform,",
      h2accent: "in wenigen Tagen",
      h2tail: ".",
      intro:
        "Eine Standardeinrichtung geht an einem einzigen Tag live, und die meisten Shops sind innerhalb weniger Tage vollständig konform. Wir arbeiten auf jeder Plattform, ob Shopify, Magento / Adobe Commerce, WooCommerce, BigCommerce, Salesforce Commerce oder ein individueller oder Headless-Aufbau, und richten den Button, den zweistufigen Ablauf, die Bestätigung und die aktualisierte Widerrufsbelehrung ein und testen alles gegen § 356a BGB. Headless- oder Mehrmarkt-Projekte brauchen etwas länger.",
      items: [
        {
          title: "Widerrufsbutton auf jeder Seite",
          body: "Mit 'Vertrag widerrufen' beschriftet, auf jeder Seite, ohne Login erreichbar.",
        },
        {
          title: "Zweistufige Bestätigung",
          body: "Bestelldaten, dann ein separater Bestätigungsschritt. Kein Pflichtfeld für den Grund.",
        },
        {
          title: "Sofortige Eingangsbestätigung",
          body: "Auf einem dauerhaften Datenträger, mit Zeitstempel, im Moment des Widerrufs.",
        },
        {
          title: "Gastbestellungen abgedeckt",
          body: "Angemeldete Kunden und Gastkunden, ohne neue Passwörter für Ihre Käufer.",
        },
        {
          title: "Vollständiges Protokoll",
          body: "Jeder Widerruf wird protokolliert, damit Sie die Einhaltung nachweisen können.",
        },
        {
          title: "Sie behalten die Kontrolle über Rückerstattungen",
          body: "Nichts wird automatisch erstattet. Ihr Team prüft und bearbeitet alles in einer Übersicht.",
        },
      ],
      disclaimer:
        "Dies ist keine Rechtsberatung. Wir setzen die funktionalen Anforderungen des § 356a BGB um. Die rechtliche Freigabe Ihrer Widerrufsbelehrung bleibt bei Ihrem Anwalt.",
    },
    cta: {
      eyebrow: "jetzt umsetzen",
      h2: "Ihr",
      h2accent: "Widerrufsbutton",
      h2tail: ", jetzt live.",
      body: "Sagen Sie uns, welche Plattform Sie nutzen und wo Ihr Shop heute steht. Wir schätzen den Aufwand, nennen Ihnen einen Zeitplan und machen Sie konform mit § 356a BGB. Die Regel gilt bereits, und Shops ohne konformen Button riskieren Abmahnungen, die formellen Warnschreiben von Wettbewerbern und Verbraucherschutzverbänden.",
      points: [
        "Jede Plattform, auch individuell und headless",
        "Button, zweistufiger Ablauf, Bestätigung und Rechtstexte",
        "Live in nur einem Tag",
      ],
      formNote: "Wir antworten innerhalb eines Werktags.",
      disclaimer:
        "Dies ist keine Rechtsberatung. Die endgültige Freigabe Ihrer Widerrufsbelehrung bleibt bei Ihrem Anwalt.",
    },
  },
};
