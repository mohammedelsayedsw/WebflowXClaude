import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "The best ChatGPT App agency for eCommerce — scandiweb",
  description:
    "scandiweb builds MCP-powered ChatGPT Apps for Shopify, Adobe Commerce, and B2B commerce. 22+ years of eCommerce engineering, 2,100+ projects shipped. Three productized packages from €9,900.",
  alternates: {
    canonical: "https://scandiweb.com/solutions/ai/chatgpt-app-agency",
  },
  openGraph: {
    title:
      "ChatGPT Apps for eCommerce, built by the people who ship eCommerce — scandiweb",
    description:
      "MCP-powered ChatGPT Apps connected to your real catalog, real prices, and real customer data. Three productized packages from €9,900. By scandiweb — Adobe Commerce Gold Partner, Hyvä Platinum Partner, 22 years in eCommerce.",
    url: "https://scandiweb.com/solutions/ai/chatgpt-app-agency",
    siteName: "scandiweb",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ChatGPT Apps for eCommerce, built by the people who ship eCommerce",
    description:
      "MCP-powered ChatGPT Apps for Shopify, Adobe Commerce, and B2B commerce. Three productized packages from €9,900.",
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
            text: "A chatbot answers questions on your site. A ChatGPT App lets users act inside ChatGPT, against your real systems, with approved tools. Different layer, different value.",
          },
        },
        {
          "@type": "Question",
          name: "What if the AI gives wrong answers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The app does not guess core data. It calls your tools and returns what your systems say. For sensitive actions we add confirmation steps, permission checks, audit logs, and human handoff – by default.",
          },
        },
        {
          "@type": "Question",
          name: "Will OpenAI approve our app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We build to OpenAI's documented review path: structured metadata, safety testing, auth flows, mobile UI checks. Approval is OpenAI's call. Readiness is ours – and we stay on through review feedback if it comes back.",
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
