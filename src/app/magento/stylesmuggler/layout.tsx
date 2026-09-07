import type { Metadata } from "next";

// The root layout applies the `%s | scandiweb` template, so the page title
// carries no suffix of its own. OG and Twitter titles are not templated.
const TITLE = "StyleSmuggler: Magento zero-day emergency response";
const SHARE_TITLE = `${TITLE} | scandiweb`;
const DESCRIPTION =
  "StyleSmuggler is a security hole in every current Magento and Adobe Commerce version. Attackers are using it now, and Adobe has no fix yet. scandiweb checks stores for break-ins, blocks the attack, and keeps checkout working. Check if your store has been affected, or have a call about security.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://scandiweb.com/solutions/magento/stylesmuggler",
  },
  openGraph: {
    title: SHARE_TITLE,
    description: DESCRIPTION,
    url: "https://scandiweb.com/solutions/magento/stylesmuggler",
    siteName: "scandiweb",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: DESCRIPTION,
  },
};

export default function StyleSmugglerLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
