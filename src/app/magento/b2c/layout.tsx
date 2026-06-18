import type { Metadata } from "next";

const title = "B2C eCommerce on Magento & Adobe Commerce | scandiweb";
const description =
  "Adobe Commerce for retail and DTC brands. Fast Hyvä storefronts, CRO, personalization, and multi-market commerce. Real results for Läderach, PUMA, and BUFF.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Adobe Commerce for B2C: fast Hyvä storefronts, CRO, personalization, and multi-market commerce. Built for retail and DTC brands.",
  },
};

export default function MagentoB2CLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
