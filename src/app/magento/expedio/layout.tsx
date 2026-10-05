import type { Metadata } from "next";

// The root layout applies the `%s | scandiweb` template.
const TITLE = "Expedio: Magento 2x faster";
const DESCRIPTION =
  "Expedio speeds up Magento's backend. At peak traffic, every page type answered at least twice as fast. Same store, same data, no replatforming.";
const URL = "https://scandiweb.com/solutions/magento/expedio";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: `${TITLE} | scandiweb`, description: DESCRIPTION, url: URL, siteName: "scandiweb", type: "website" },
  twitter: { card: "summary_large_image", title: `${TITLE} | scandiweb`, description: DESCRIPTION },
};

export default function ExpedioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
