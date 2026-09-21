import type { Metadata } from "next";

// The root layout applies the `%s | scandiweb` template, so the page title
// carries no suffix of its own. OG and Twitter titles are not templated.
const TITLE = "Free Magento upgrades, forever";
const SHARE_TITLE = `${TITLE} | scandiweb`;
const DESCRIPTION =
  "Perpetual by scandiweb: every Magento 2.4.x release and every security patch applied to your store at no charge, for as long as scandiweb is your development team.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://scandiweb.com/solutions/magento/perpetual",
  },
  openGraph: {
    title: SHARE_TITLE,
    description: DESCRIPTION,
    url: "https://scandiweb.com/solutions/magento/perpetual",
    siteName: "scandiweb",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description:
      "Every Magento release. Every security patch. $0, for as long as scandiweb builds your store.",
  },
};

export default function MagentoPerpetualLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
