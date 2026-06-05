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
  title: "Build your Magento store | scandiweb",
  description:
    "$5,000 off any new Magento build. From the world's most-certified Magento and Hyvä agency. 2,100+ projects shipped for 700+ brands. B2C, B2B, and omnichannel.",
  alternates: {
    canonical: "https://scandiweb.com/solutions/magento/build",
  },
  openGraph: {
    title: "Build your Magento store | scandiweb",
    description:
      "$5,000 off any new Magento build. From the world's most-certified Magento and Hyvä agency. Live in 8 to 14 weeks.",
    url: "https://scandiweb.com/solutions/magento/build",
    siteName: "scandiweb",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build your Magento store | scandiweb",
    description:
      "$5,000 off any new Magento build. From the world's most-certified Magento and Hyvä agency.",
  },
};

export default function BuildLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={cormorant.variable}>{children}</div>
  );
}
