import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adobe Commerce to Magento Open Source migration",
  description:
    "Same platform. No license fee. Move from Adobe Commerce to Magento Open Source with scandiweb. Keep your catalog, checkout, and storefront, drop the annual license. Start with a free migration check.",
  alternates: {
    canonical:
      "https://scandiweb.com/solutions/magento/adobe-commerce-to-magento-open-source",
  },
  openGraph: {
    title: "Adobe Commerce to Magento Open Source migration | scandiweb",
    description:
      "Identical platform, zero license fee. scandiweb migrates Adobe Commerce stores to Magento Open Source. Catalog, checkout, and custom code preserved. Free migration check, then a fixed-price move.",
    url: "https://scandiweb.com/solutions/magento/adobe-commerce-to-magento-open-source",
    siteName: "scandiweb",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adobe Commerce to Magento Open Source migration | scandiweb",
    description:
      "Same platform. No license fee. scandiweb moves Adobe Commerce stores to Magento Open Source. Free migration check first.",
  },
};

export default function AcOpenSourceLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
