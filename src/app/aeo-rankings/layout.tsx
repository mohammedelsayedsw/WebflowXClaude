import type { Metadata } from "next";
import { PRE_HYDRATION, PRE_HYDRATION_CSS } from "@/sections/aeo-rankings/prehydrate";

const TITLE = "Baltic AI Brand Ranking: where AI ranks 5,548 companies";
const SHARE_TITLE = `${TITLE} | scandiweb`;
const DESCRIPTION =
  "See where AI assistants rank 5,548 companies across 113 industries in Latvia, Estonia, and Lithuania, who they name first, and the buyer questions behind each score.";
const URL = "https://scandiweb.com/solutions/aeo-rankings";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: SHARE_TITLE, description: DESCRIPTION, url: URL, siteName: "scandiweb", type: "website" },
  twitter: { card: "summary_large_image", title: SHARE_TITLE, description: DESCRIPTION },
};

const DATASET = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "Baltic AI Brand Ranking",
  description: DESCRIPTION,
  url: URL,
  creator: { "@type": "Organization", name: "scandiweb", url: "https://scandiweb.com" },
  spatialCoverage: ["Latvia", "Estonia", "Lithuania"],
  datePublished: "2026-09-24",
  variableMeasured: ["Visibility", "Sentiment", "Average position", "Score"],
};

/** The ranking keeps the Baltic Brand Forum event look and its own header (sections/aeo-rankings/Frame); no site Header. Footer stays in root layout. */
export default function AeoRankingsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        precedence="default"
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap"
      />
      <style>{PRE_HYDRATION_CSS}</style>
      <script dangerouslySetInnerHTML={{ __html: PRE_HYDRATION }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(DATASET) }} />
      {children}
    </>
  );
}
