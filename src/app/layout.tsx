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
  title: "scandiweb",
  description: "scandiweb landing pages on Webflow Cloud.",
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
          <WebflowFooter />
        </DevLinkProvider>
        <EmbedScriptRunner />
      </body>
    </html>
  );
}
