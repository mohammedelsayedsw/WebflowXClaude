import type { Metadata } from "next";

const TITLE = "Akeneo Plus Bundle: Cut Your Akeneo License Costs";
const SHARE_TITLE = `${TITLE} | scandiweb`;
const DESCRIPTION =
  "Move from licensed Akeneo to Community Edition with the Akeneo Plus Bundle. scandiweb handles migration, hosting, maintenance, and upgrades at fixed prices.";
const URL = "https://scandiweb.com/solutions/akeneo/plus-bundle";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: SHARE_TITLE, description: DESCRIPTION, url: URL, siteName: "scandiweb", type: "website" },
  twitter: { card: "summary_large_image", title: SHARE_TITLE, description: DESCRIPTION },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
