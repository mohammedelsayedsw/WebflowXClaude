import type { Metadata } from "next";

const title =
  "Fixed-Price Magento Upgrade: Senior Engineers, 48h Estimate | scandiweb";
const description =
  "A fixed-price Magento and Adobe Commerce upgrade, scaled to your store. Senior engineers, AI-assisted analysis, scope locked before we start. Most stores land between $5,000 and $15,000. Free fixed-price estimate in 48 hours, no admin access required.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Fixed-price Magento upgrade scaled to your store. Senior engineers, AI-assisted analysis, price locked before work starts. Free 48-hour estimate.",
  },
};

export default function MagentoFixedUpgradeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
