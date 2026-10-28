import "@/sections/aeo-rankings/bbf.css";
import { Bottom, Top } from "@/sections/aeo-rankings/Frame";
import { PRE_HYDRATION, PRE_HYDRATION_CSS } from "@/sections/aeo-rankings/prehydrate";

/**
 * Every /aeo-rankings page: the Baltic Brand Forum event look with its own header and menu (sections/aeo-rankings/Frame),
 * no site Header. Each page sets its own metadata. Footer stays in root layout.
 */
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
      <div className="bbf">
        <Top />
        <main>{children}</main>
        <Bottom />
      </div>
    </>
  );
}
