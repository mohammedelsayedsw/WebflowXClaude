import type { Metadata } from "next";
import { Header } from "@/components/site/Header";

export const metadata: Metadata = {
  // absolute, so the root layout's "%s | scandiweb" template does not double the suffix
  title: {
    absolute: "Google Shopping Baltics: Feed Setup for LT, LV, and EE | scandiweb",
  },
  description:
    "Google Shopping reaches Lithuania, Latvia, and Estonia this holiday season. We build your product feed, get it through Merchant Center review, and hand it over ready to sell from day one.",
  alternates: {
    canonical: "https://scandiweb.com/solutions/google-shopping-baltics",
  },
  robots: { index: false, follow: false },
};

export default function GoogleShoppingBalticsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
