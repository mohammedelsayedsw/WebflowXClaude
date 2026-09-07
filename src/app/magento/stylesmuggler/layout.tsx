import type { Metadata } from "next";

// The root layout applies the `%s | scandiweb` template, so the page title
// carries no suffix of its own. OG and Twitter titles are not templated.
const TITLE = "StyleSmuggler: Magento zero-day emergency response";
const SHARE_TITLE = `${TITLE} | scandiweb`;
const DESCRIPTION =
  "StyleSmuggler, disclosed September 5, 2026, gives attackers unauthenticated remote code execution on every current Magento and Adobe Commerce version, with no official patch yet. scandiweb checks stores for compromise, applies temporary protection, and tests checkout. Check if your store has been affected, or have a call about security.";

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
