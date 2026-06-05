import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Run your Magento store | scandiweb",
  description:
    "50% off the first 40 hours of Magento support. 24/7 monitored, 99.99% uptime, 8-min response SLA. From the world's most-certified Magento and Hyvä agency.",
  alternates: {
    canonical: "https://scandiweb.com/solutions/magento/optimize",
  },
  openGraph: {
    title: "Run your Magento store | scandiweb",
    description:
      "50% off the first 40 hours of Magento support. 24/7 monitored, 99.99% uptime, 8-min response SLA.",
    url: "https://scandiweb.com/solutions/magento/optimize",
    siteName: "scandiweb",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Run your Magento store | scandiweb",
    description:
      "50% off the first 40 hours of Magento support. 24/7 monitored, 99.99% uptime.",
  },
};

export default function OptimizeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={cormorant.variable}>{children}</div>
  );
}
