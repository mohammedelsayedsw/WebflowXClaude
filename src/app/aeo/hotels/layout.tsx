import type { Metadata } from "next";
import Script from "next/script";
import { AdTags } from "@/sections/aeo-lp/AdTags";

const TITLE = "More guests, more revenue, for free: get your hotel named by AI";
const SHARE_TITLE = `${TITLE} | scandiweb`;
const DESCRIPTION =
  "Travellers now ask ChatGPT, Gemini and Perplexity where to stay. Get a free AI Growth Report: what AI says about your hotel, who gets named instead, and what to fix first. 3 days, no pitch.";
const URL = "https://scandiweb.com/solutions/aeo/hotels";

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
export default function HotelsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {/* Meta pixel: PageView here; Lead on submit and Schedule on a Cal.com booking fire from the page */}
      <Script id="aeo-hotels-meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;
n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','421756528598953');fbq('track','PageView');`}
      </Script>
      <AdTags id="aeo-hotels" />
      <style>{`.footer_block{display:none!important}
#hachly-ai-container{display:none!important}
.intercom-lightweight-app,.intercom-launcher,.intercom-launcher-frame,#intercom-container{display:none!important}
#hs-web-interactives-top-push-anchor,#hs-web-interactives-top-anchor,#hs-web-interactives-bottom-anchor,#hs-web-interactives-floating-container,#hs-interactives-modal-overlay{display:none!important}
/* HubSpot locks page scroll (an overflow:hidden class on body) while one of its pop-up CTAs is open.
   The pop-ups are hidden above, so the lock froze the page. Keep it scrollable unless our own popup is open. */
body:not(.noscroll):not(.aeolp-lock){overflow-y:auto!important}`}</style>
      {children}
    </>
  );
}
