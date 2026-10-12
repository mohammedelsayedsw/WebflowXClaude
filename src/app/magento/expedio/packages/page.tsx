import type { Metadata } from "next";
import { AuroraRain } from "@/sections/magento-expedio/AuroraRain";
import { PackagesDetail } from "@/sections/magento-expedio/Packages";
import { EXPEDIO_SHARE_IMAGE } from "@/sections/magento-expedio/share";
import { SiteHeader } from "@/sections/magento-expedio/SiteHeader";

const DESCRIPTION =
  "Expedio is open source. Choose a package: Self-managed for free, Support & updates, Expert review, or full Implementation by scandiweb.";
const URL = "https://scandiweb.com/solutions/magento/expedio/packages";

export const metadata: Metadata = {
  title: "Expedio packages",
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: "Expedio packages | scandiweb", description: DESCRIPTION, url: URL, siteName: "scandiweb", type: "website", images: [EXPEDIO_SHARE_IMAGE] },
  twitter: { card: "summary_large_image", title: "Expedio packages | scandiweb", description: DESCRIPTION, images: [EXPEDIO_SHARE_IMAGE.url] },
};

export default function ExpedioPackagesPage() {
  return (
    <main className="expedio relative isolate min-h-screen flex flex-col bg-[var(--sw-ink)] font-[family-name:var(--font-inter)]">
      <SiteHeader />
      <AuroraRain />
      <PackagesDetail />
    </main>
  );
}
