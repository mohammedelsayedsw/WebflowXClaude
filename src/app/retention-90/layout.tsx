import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/site/Header";

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
      {/* HubSpot EU1, portal 25724996: attaches the scan to the contact timeline */}
      <Script id="hs-script-loader" strategy="afterInteractive" src="https://js-eu1.hs-scripts.com/25724996.js" />
      <Header />
      {children}
    </>
  );
}
