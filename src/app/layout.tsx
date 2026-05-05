import type { Metadata, Viewport } from "next";
import { Golos_Text, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { DevLinkProvider } from "@/webflow/DevLinkProvider";
import { FooterDeprecated } from "@/webflow/FooterDeprecated";
import { ScandiwebHeader } from "@/components/scandiweb-header";

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
  metadataBase: new URL("https://scandiweb.com"),
  title: {
    default: "scandiweb",
    template: "%s | scandiweb",
  },
  description:
    "Full service eCommerce agency for digital growth and development. 600+ companies rely on us for consulting, support, and custom Magento & Shopify solutions.",
  icons: {
    icon: "https://cdn.prod.website-files.com/61387043ab1e4143deac1e21/6277b7d3d3ca4eb3c978a38c_favicon-1.svg",
    apple:
      "https://cdn.prod.website-files.com/61387043ab1e4143deac1e21/6277b7d683e32b624480ab6a_favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "scandiweb",
    images: [
      "https://cdn.prod.website-files.com/61387043ab1e4143deac1e21/6267b817e1881018199986d0_Scandiweb.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://cdn.prod.website-files.com/61387043ab1e4143deac1e21/6267b817e1881018199986d0_Scandiweb.png",
    ],
  },
  robots: { index: true, follow: true },
  authors: [{ name: "scandiweb" }],
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${golos.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="antialiased">
        <ScandiwebHeader />
        <DevLinkProvider>
          {children}
          <FooterDeprecated />
        </DevLinkProvider>
      </body>
    </html>
  );
}
