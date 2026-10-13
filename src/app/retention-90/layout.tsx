import type { Metadata } from "next";
import Script from "next/script";

const TITLE = "We’ll increase your email revenue by 15%, or you don’t pay until we do";
const SHARE_TITLE = `${TITLE} | scandiweb`;
const DESCRIPTION =
  "Scan your store in 60 seconds and get your Retention Score, estimated revenue gap and the flows with the biggest opportunity. Then a 90-day head-to-head test: if we don’t improve results by at least 15%, you pay nothing.";
const URL = "https://scandiweb.com/solutions/retention-90";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: SHARE_TITLE, description: DESCRIPTION, url: URL, siteName: "scandiweb", type: "website" },
  twitter: { card: "summary_large_image", title: SHARE_TITLE, description: DESCRIPTION },
  robots: { index: false, follow: false },
};

export default function Retention90Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {/* Meta pixel: same Lead event the audit funnels fire */}
      <Script id="r90-meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;
n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','421756528598953');fbq('track','PageView');`}
      </Script>
      {/* LinkedIn Insight Tag, partner 2329169 (Scandiweb V2). The site GTM container already
          loads it; this only loads it when GTM did not, so the Lead conversion never depends on GTM. */}
      <Script id="r90-li-insight" strategy="afterInteractive">
        {`(function(){var p='2329169';window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];
if(window._linkedin_data_partner_ids.indexOf(p)<0)window._linkedin_data_partner_ids.push(p);
setTimeout(function(){if(window.lintrk)return;window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[];
var s=document.getElementsByTagName('script')[0],b=document.createElement('script');b.type='text/javascript';b.async=true;
b.src='https://snap.licdn.com/li.lms-analytics/insight.min.js';s.parentNode.insertBefore(b,s)},3000)})();`}
      </Script>
      {/* Omnisend (brand 6acda3b7160c976a2a289b79, "Scandiweb.com (demand)"): store connection +
          page views. Contacts and consent are written server-side in api/retention/submit. */}
      <Script id="r90-omnisend" strategy="afterInteractive">
        {`window.omnisend=window.omnisend||[];omnisend.push(["brandID","6acda3b7160c976a2a289b79"]);omnisend.push(["track","$pageViewed"]);
!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://omnisnippet1.com/inshop/launcher-v2.js";
var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();`}
      </Script>
      {/* HubSpot EU1, portal 25724996: attaches the scan to the contact timeline */}
      <Script id="hs-script-loader" strategy="afterInteractive" src="https://js-eu1.hs-scripts.com/25724996.js" />
      {/* This route runs its own header and footer (sections/retention-90/SiteChrome). The
          global Webflow footer comes from the root layout, and the Hachly "Reinis" chat and
          Intercom are injected site-wide by GTM, so all three are hidden here, on this route
          only. The chat scripts still load; the clean fix is a GTM exception on tags 359 / 28.
          HubSpot web interactives (site-wide banners/pop-ups such as "We made Magento 2x
          faster") are hidden too; HubSpot tracking itself keeps running for the lead identify.
          Clean fix for those: exclude this URL in each CTA's targeting in HubSpot. */}
      <style>{`.footer_block{display:none!important}
#hachly-ai-container{display:none!important}
.intercom-lightweight-app,.intercom-launcher,.intercom-launcher-frame,#intercom-container{display:none!important}
#hs-web-interactives-top-push-anchor,#hs-web-interactives-top-anchor,#hs-web-interactives-bottom-anchor,#hs-web-interactives-floating-container,#hs-interactives-modal-overlay{display:none!important}
.hs-web-interactives-top-banner-open .r90 .r90h{translate:none!important}`}</style>
      {children}
    </>
  );
}
