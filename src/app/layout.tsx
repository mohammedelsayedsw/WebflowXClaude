import type { Metadata } from "next";
import Script from "next/script";
import { Golos_Text, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { DevLinkProvider } from "@/webflow/DevLinkProvider";
import { Footer as WebflowFooter } from "@/webflow/v7Layout/Footer";
import { EmbedScriptRunner } from "@/components/site/EmbedScriptRunner";

// Same GTM container as scandiweb.com so events from these LPs land in the
// main analytics estate. Apply at the root so every page under this app
// (current and future LPs) is instrumented automatically.
const GTM_ID = "GTM-TCLKQ96";

const golos = Golos_Text({
  variable: "--font-golos",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "scandiweb — eCommerce Solutions for the World's Biggest Brands",
    template: "%s | scandiweb",
  },
  description:
    "scandiweb builds and grows eCommerce solutions for retailers and B2B brands. Custom development, design, growth marketing, AI, and analytics – trusted by 700+ leading brands worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${golos.variable} ${inter.variable} ${jetbrains.variable} antialiased`}
    >
      <head>
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="min-h-full" suppressHydrationWarning>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <DevLinkProvider>
          {children}
          <WebflowFooter
            callToActionHeadingCta1Visibility={false}
            callToActionHeadingCta2Visibility={false}
            callToActionHeadingCta3Visibility={false}
            callToActionHeadingHeadingCareerVisibility={false}
          />
        </DevLinkProvider>
        <EmbedScriptRunner />
      </body>
    </html>
  );
}
