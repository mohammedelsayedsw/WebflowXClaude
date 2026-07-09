import type { Metadata } from "next";
import { Header } from "@/components/site/Header";

export const metadata: Metadata = {
  title: "Multi-Market Personalization Engine | scandiweb",
  description:
    "Replace siloed email, recommendation, and ad tools with one CDP that personalizes across channels, per market. Free CDP audit with scandiweb's analytics team.",
  alternates: {
    canonical: "https://scandiweb.com/solutions/multi-market-personalization",
  },
  robots: { index: false, follow: false },
};

export default function MultiMarketPersonalizationLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
