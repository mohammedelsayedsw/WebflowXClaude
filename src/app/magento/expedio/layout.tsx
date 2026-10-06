import type { Metadata } from "next";
import { EXPEDIO_SHARE_IMAGE } from "@/sections/magento-expedio/share";

// The root layout applies the `%s | scandiweb` template; OG and Twitter titles are not templated.
const TITLE = "Expedio: Magento 2x faster";
const SHARE_TITLE = `${TITLE} | scandiweb`;
const DESCRIPTION =
  "Expedio speeds up Magento's backend. At peak traffic, every page type answered at least twice as fast. Same store, same data, no replatforming.";
const URL = "https://scandiweb.com/solutions/magento/expedio";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: SHARE_TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "scandiweb",
    type: "website",
    images: [EXPEDIO_SHARE_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: DESCRIPTION,
    images: [EXPEDIO_SHARE_IMAGE.url],
  },
};

export default function ExpedioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
