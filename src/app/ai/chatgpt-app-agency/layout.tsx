import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ChatGPT Apps for eCommerce — MCP App development | scandiweb",
  description:
    "Build an MCP-powered ChatGPT App connected to your real catalog, real prices, and real customer data. Prebuilt blueprints for Shopify, Adobe Commerce, and B2B commerce. Productized packages from €9,900.",
  alternates: {
    canonical: "https://scandiweb.com/solutions/ai/chatgpt-app-agency",
  },
  openGraph: {
    title: "ChatGPT Apps for eCommerce — MCP App development | scandiweb",
    description:
      "MCP-powered ChatGPT Apps connected to your real catalog, real prices, and real customer data. Prebuilt blueprints for Shopify, Adobe Commerce, and B2B commerce. Productized packages from €9,900.",
    url: "https://scandiweb.com/solutions/ai/chatgpt-app-agency",
    siteName: "scandiweb",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT Apps for eCommerce — MCP App development",
    description:
      "MCP-powered ChatGPT Apps for Shopify, Adobe Commerce, and B2B commerce. Productized packages from €9,900.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "ChatGPT App development with MCP",
      serviceType: "AI app development",
      provider: {
        "@type": "Organization",
        name: "scandiweb",
        url: "https://scandiweb.com",
        foundingDate: "2003",
        award: [
          "Meet Magento NY 2023",
          "Meet Magento NY 2024",
          "Meet Magento NY 2025",
        ],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "Adobe Commerce Gold Partner",
            recognizedBy: { "@type": "Organization", name: "Adobe" },
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Hyvä Platinum Partner",
            recognizedBy: { "@type": "Organization", name: "Hyvä" },
          },
        ],
      },
      areaServed: "Worldwide",
      description:
        "MCP-powered ChatGPT App development for eCommerce, B2B commerce, and digital operations. Includes MCP server, platform integrations, OAuth, ChatGPT widgets, and OpenAI submission preparation.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "ChatGPT App packages",
        itemListElement: [
          {
            "@type": "Offer",
            name: "MCP Launchpad",
            price: "9900",
            priceCurrency: "EUR",
            description:
              "Working proof in 10–15 business days. 1 use case, 2–3 MCP tools, 1 platform integration, read-only workflow, Developer Mode tested.",
          },
          {
            "@type": "Offer",
            name: "ChatGPT App Pilot",
            price: "29900",
            priceCurrency: "EUR",
            description:
              "Real customer-facing app in 4–6 weeks. 4–6 MCP tools, OAuth login, 1 ChatGPT widget, OpenAI submission prep, 1 review cycle.",
          },
          {
            "@type": "Offer",
            name: "Commerce AI App Suite",
            price: "74900",
            priceCurrency: "EUR",
            description:
              "Enterprise commerce AI channel in 8–12 weeks. 8–15 MCP tools, multi-system integration, role-based OAuth, 2–4 widgets, 30-day improvement sprint.",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "We already have a chatbot. How is this different?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A chatbot answers questions on your site. A ChatGPT App lets users act inside ChatGPT, against your real systems, with approved tools, live data, and structured UI. Different layer, different value – not just a prompt, but an action layer connected to live commerce.",
          },
        },
        {
          "@type": "Question",
          name: "We are not ready to give AI access to our systems.",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You don't need to start with risky actions. Most clients begin with read-only tools – search catalog, show policies, answer product questions, check stock, show order status after login. Write actions like creating quotes or returns can require explicit confirmation and permissions.",
          },
        },
        {
          "@type": "Question",
          name: "What if the AI gives wrong answers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The app does not guess core business data. It calls your tools and returns structured information from your approved systems. For sensitive actions we add confirmation steps, permission checks, audit logs, and human handoff – by default.",
          },
        },
        {
          "@type": "Question",
          name: "Will this replace our website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. It gives your website and systems a new entry point. The website still matters. ChatGPT becomes another high-intent channel where people can discover, decide, and act.",
          },
        },
        {
          "@type": "Question",
          name: "Will OpenAI approve our app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nobody outside OpenAI can guarantee approval. We build against the documented review path, prepare the app properly, test it in Developer Mode, review safety issues, clean up metadata, and support fixes if review feedback comes back.",
          },
        },
        {
          "@type": "Question",
          name: "Our systems are too custom.",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MCP lets us expose clean tools to ChatGPT while your complex backend logic stays where it belongs. ChatGPT does not need to understand your whole ERP. It needs safe, well-defined tools that return the right data.",
          },
        },
        {
          "@type": "Question",
          name: "Can users buy directly inside ChatGPT?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depends on your platform, payment flow, risk model, and what OpenAI supports for your use case at submission time. A safe v1 often starts with product discovery, quote creation, cart creation, or checkout handoff.",
          },
        },
        {
          "@type": "Question",
          name: "How fast can we launch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A focused proof of concept can be built in 10–15 business days. A real customer-facing app usually takes 4–6 weeks. An enterprise app with several systems usually takes 8–12 weeks or more.",
          },
        },
      ],
    },
    {
      "@type": "Organization",
      name: "scandiweb",
      url: "https://scandiweb.com",
      foundingDate: "2003",
      knowsAbout: [
        "Adobe Commerce",
        "Magento",
        "Hyvä",
        "Shopify",
        "Shopify Plus",
        "BigCommerce",
        "MCP",
        "Model Context Protocol",
        "ChatGPT Apps",
        "OpenAI development",
        "B2B commerce",
        "eCommerce",
      ],
    },
  ],
};

export default function ChatgptAppAgencyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script
        id="chatgpt-app-agency-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
