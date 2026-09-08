import type { Metadata } from "next";

// The root layout applies the `%s | scandiweb` template, so the page title
// carries no suffix of its own. OG and Twitter titles are not templated.
const TITLE = "StyleSmuggler: a critical Magento vulnerability";
const SHARE_TITLE = `${TITLE} | scandiweb`;
const DESCRIPTION =
  "Attackers are exploiting a newly discovered Magento and Adobe Commerce security flaw called StyleSmuggler. Adobe released an emergency hotfix on September 7; Magento Open Source stores below 2.4.6 get no patch. scandiweb checks stores for signs of compromise, installs the fix, and has rebuilt it for Magento 2.2.0 to 2.4.3. Get a free security check, download the patch for older versions, or talk to our team.";

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
