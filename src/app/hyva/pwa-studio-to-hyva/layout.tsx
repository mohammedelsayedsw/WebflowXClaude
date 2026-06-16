import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PWA Studio to Hyvä Migration · Magento Frontend Modernization | scandiweb",
  description:
    "Migrate your Magento store from Adobe PWA Studio (Venia) to Hyvä. Hyvä Platinum Partner and one of the most-certified Magento teams. 10 to 14 weeks kickoff to live, content and integrations preserved, faster store, fewer bugs.",
  openGraph: {
    title: "PWA Studio to Hyvä Migration · Magento Frontend Modernization | scandiweb",
    description:
      "Migrate your Magento store from PWA Studio to Hyvä. Hyvä Platinum Partner. 10 to 14 weeks, content and integrations preserved.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PWA Studio to Hyvä Migration · Magento Frontend Modernization | scandiweb",
    description:
      "PWA Studio to Hyvä in 10 to 14 weeks. Hyvä Platinum Partner and one of the most-certified Magento teams.",
  },
};

export default function PwaStudioToHyvaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
