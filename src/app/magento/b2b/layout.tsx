import type { Metadata } from "next";

const title = "B2B eCommerce on Magento & Adobe Commerce | scandiweb";
const description =
  "Adobe Commerce B2B for manufacturers and distributors. Account pricing, quotes, punchout, requisition lists, and ERP and PIM integration on one platform. Real work for Macron, IONTO, and more.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Adobe Commerce B2B: account pricing, quotes, punchout, and ERP integration on one platform. Built for manufacturers and distributors.",
  },
};

export default function MagentoB2BLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
