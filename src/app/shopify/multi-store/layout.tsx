import type { Metadata } from "next";

const title = "Shopify Multi-Store Support & Operating System";
const description =
  "Support for merchants running multiple Shopify stores, custom apps, integrations, and regional setups. scandiweb connects Shopify, apps, ERP, CMS, analytics, monitoring, and releases into one operating view.";

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

export default function ShopifyMultiStoreLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
