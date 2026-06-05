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
  title: "Grow your Magento store | scandiweb",
  description:
    "50% off the first 40 hours of Magento growth work. SEO, paid, CRO, email, marketplaces, or AI search. From the world's most-certified Magento and Hyvä agency.",
  alternates: {
    canonical: "https://scandiweb.com/solutions/magento/grow",
  },
  openGraph: {
    title: "Grow your Magento store | scandiweb",
    description:
      "50% off the first 40 hours of Magento growth work. SEO, paid, CRO, email, marketplaces, or AI search.",
    url: "https://scandiweb.com/solutions/magento/grow",
    siteName: "scandiweb",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow your Magento store | scandiweb",
    description:
      "50% off the first 40 hours of Magento growth. SEO, paid, CRO, email, marketplaces, AI search.",
  },
};

export default function GrowLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={cormorant.variable}>{children}</div>
  );
}
