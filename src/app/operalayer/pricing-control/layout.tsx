import type { Metadata } from "next";

const title = "State-by-State Pricing Control for Magento | OperaLayer";
const description =
  "OperaLayer prices every product in every US state from one set of rules and sends scheduled updates to Magento (Adobe Commerce) through its API. Built by scandiweb.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | scandiweb`,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | scandiweb`,
    description,
  },
};

export default function PricingControlLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
