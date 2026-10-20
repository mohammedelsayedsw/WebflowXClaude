import Script from "next/script";
import { GOOGLE_ADS, LINKEDIN } from "./config";

/* Google Ads base tag + LinkedIn Insight Tag for the AEO routes. Conversions fire from the page
   (track.ts adConversions) after a successful submit. */
export function AdTags({ id }: { id: string }) {
  return (
    <>
      {/* Google Ads AW-879717196 with enhanced conversions, as on the scandiweb.ai pages */}
      <Script id={id + "-gads-lib"} strategy="afterInteractive" src={"https://www.googletagmanager.com/gtag/js?id=" + GOOGLE_ADS.id} />
      <Script id={id + "-gads"} strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){dataLayer.push(arguments)};
gtag('js',new Date());gtag('config','${GOOGLE_ADS.id}',{allow_enhanced_conversions:true});`}
      </Script>
      {/* LinkedIn Insight Tag, partner 2329169. The site GTM container may already load it;
          this only loads it when GTM did not (same snippet as retention-90). */}
      <Script id={id + "-li-insight"} strategy="afterInteractive">
        {`(function(){var p='${LINKEDIN.partner}';window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];
if(window._linkedin_data_partner_ids.indexOf(p)<0)window._linkedin_data_partner_ids.push(p);
setTimeout(function(){if(window.lintrk)return;window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[];
var s=document.getElementsByTagName('script')[0],b=document.createElement('script');b.type='text/javascript';b.async=true;
b.src='https://snap.licdn.com/li.lms-analytics/insight.min.js';s.parentNode.insertBefore(b,s)},3000)})();`}
      </Script>
    </>
  );
}
