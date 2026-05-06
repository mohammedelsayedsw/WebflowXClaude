import type { Metadata } from "next";
import { Golos_Text, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { DevLinkProvider } from "@/webflow/DevLinkProvider";
import { Footer as WebflowFooter } from "@/webflow/v7Layout/Footer";
import { EmbedScriptRunner } from "@/components/site/EmbedScriptRunner";

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
      <body className="min-h-full" suppressHydrationWarning>
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
