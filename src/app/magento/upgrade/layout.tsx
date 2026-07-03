import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fixed-price Magento upgrade from $990",
  description:
    "Senior Magento engineers upgrade your store on a locked scope and timeline. Start with a free estimate that gives you your exact fixed price in 48 hours, no live changes, no admin access.",
  alternates: {
    canonical: "https://scandiweb.com/solutions/magento/upgrade",
  },
  openGraph: {
    title: "Fixed-price Magento upgrade from $990 | scandiweb",
    description:
      "Fixed price, fixed scope, fixed timeline. scandiweb upgrades Magento and Adobe Commerce stores on a price locked before work starts. Free 48-hour estimate first.",
    url: "https://scandiweb.com/solutions/magento/upgrade",
    siteName: "scandiweb",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fixed-price Magento upgrade from $990 | scandiweb",
    description:
      "Senior Magento engineers upgrade your store on a locked price and timeline. Free estimate in 48 hours.",
  },
};

export default function MagentoUpgradeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
