import type { Metadata } from "next";
import Script from "next/script";

const TITLE = "Is your clinic the one AI recommends?";
const SHARE_TITLE = `${TITLE} | scandiweb`;
const DESCRIPTION =
  "36% of patients choosing a doctor now ask AI first. Get a free AI Growth Report: what ChatGPT, Gemini and Perplexity say about your clinic, who gets named instead, and what to fix. 3 days, no pitch.";
const URL = "https://scandiweb.com/solutions/aeo/clinics";

export const metadata: Metadata = {
  title: { absolute: SHARE_TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: SHARE_TITLE, description: DESCRIPTION, url: URL, siteName: "scandiweb", type: "website" },
  twitter: { card: "summary_large_image", title: SHARE_TITLE, description: DESCRIPTION },
  /* noindex until Marko signs off the copy */
  robots: { index: false, follow: false },
};

/* Own header and footer (sections/aeo-lp/Shell). The site header opts out via HEADERLESS_PREFIXES;
   the global Webflow footer, the Hachly / Intercom chat and HubSpot pop-ups are hidden on this route only. */
export default function ClinicsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {/* Meta pixel: PageView here; Lead on submit and Schedule on a Cal.com booking fire from the page */}
      <Script id="aeo-clinics-meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;
n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','421756528598953');fbq('track','PageView');`}
      </Script>
      <style>{`.footer_block{display:none!important}
#hachly-ai-container{display:none!important}
.intercom-lightweight-app,.intercom-launcher,.intercom-launcher-frame,#intercom-container{display:none!important}
#hs-web-interactives-top-push-anchor,#hs-web-interactives-top-anchor,#hs-web-interactives-bottom-anchor,#hs-web-interactives-floating-container,#hs-interactives-modal-overlay{display:none!important}`}</style>
      {children}
    </>
  );
}
