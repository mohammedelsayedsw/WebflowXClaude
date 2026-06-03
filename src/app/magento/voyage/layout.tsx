import type { Metadata } from "next";
import { Cormorant_Garamond, Italianno } from "next/font/google";

// Period serif used throughout the Voyage LP (Roman numerals, italic labels,
// engraved-plate aesthetic). Pairs with Golos Text from the root layout.
const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// Copperplate script for ornamental flourishes — the hero eyebrow.
const italianno = Italianno({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Build, run, and grow your Magento store | scandiweb",
  description:
    "Build, optimize, and grow on Adobe Commerce with scandiweb. 2,100+ Magento projects shipped for 700 brands since 2008. $5,000 off new builds, 50% off the first 40 hours of support or growth work, free review of one stuck Magento ticket.",
  alternates: {
    canonical: "https://scandiweb.com/solutions/magento/voyage",
  },
  openGraph: {
    title: "Build, run, and grow your Magento store | scandiweb",
    description:
      "Adobe Commerce builds in weeks not quarters, 24/7 support with 99.99% uptime, and growth across SEO, paid, CRO, email, marketplaces, and AI search. By scandiweb, since 2008.",
    url: "https://scandiweb.com/solutions/magento/voyage",
    siteName: "scandiweb",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build, run, and grow your Magento store | scandiweb",
    description:
      "Adobe Commerce builds, support, and growth. 2,100+ projects shipped for 700 brands since 2008. $5,000 off new builds; 50% off first 40 hours on Optimize and Grow.",
  },
};

export default function VoyageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${cormorant.variable} ${italianno.variable}`}>
      {children}
    </div>
  );
}
