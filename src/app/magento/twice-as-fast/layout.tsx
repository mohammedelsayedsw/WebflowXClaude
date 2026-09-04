import type { Metadata } from "next";

// The root layout applies the `%s | scandiweb` template, so the page title
// carries no suffix of its own. OG and Twitter titles are not templated.
const TITLE = "We made Magento ×2 faster";
const SHARE_TITLE = `${TITLE} | scandiweb`;
const DESCRIPTION =
  "Magento, twice as fast. Faster than Shopify. No new platform, no replatforming, your Magento. See it yourself on September 29, 2026.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://scandiweb.com/solutions/magento/twice-as-fast",
  },
  openGraph: {
    title: SHARE_TITLE,
    description: DESCRIPTION,
    url: "https://scandiweb.com/solutions/magento/twice-as-fast",
    siteName: "scandiweb",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: DESCRIPTION,
  },
};

export default function TwiceAsFastLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
