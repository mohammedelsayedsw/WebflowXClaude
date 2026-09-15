import type { Metadata } from "next";

// The root layout applies the `%s | scandiweb` template, so the page title
// carries no suffix of its own. OG and Twitter titles are not templated.
const TITLE = "We made Magento 2x faster";
const SHARE_TITLE = `${TITLE} | scandiweb`;
const DESCRIPTION =
  "Magento is slow. Was. 2x faster than Shopify, on your Magento. See it yourself on October 6, 2026.";
// The share image lives in public/magento/twice-as-fast; the /solutions prefix is the app basePath.
const SHARE_IMAGE = {
  url: "https://scandiweb.com/solutions/magento/twice-as-fast/og.png",
  width: 1200,
  height: 630,
  alt: "Magento is slow. Was. 2x faster than Shopify. October 6.",
};

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
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: DESCRIPTION,
    images: [SHARE_IMAGE.url],
  },
};

export default function TwiceAsFastLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
