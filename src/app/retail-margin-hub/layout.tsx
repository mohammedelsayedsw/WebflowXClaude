import type { Metadata } from "next";
import { Header } from "@/components/site/Header";

export const metadata: Metadata = {
  title: "Retail Margin Hub | scandiweb",
  description:
    "A weekly demand forecast at the grain your buyers plan in, split across sizes, with a forward reorder queue. Built with Sportland: 97% category-level forecast accuracy across 9.3M transactions. Free consultation with scandiweb's analytics team.",
  alternates: {
    canonical: "https://scandiweb.com/solutions/retail-margin-hub",
  },
  robots: { index: false, follow: false },
};

export default function RetailMarginHubLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
