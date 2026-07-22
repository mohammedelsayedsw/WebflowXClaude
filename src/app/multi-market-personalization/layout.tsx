import type { Metadata } from "next";
import { Header } from "@/components/site/Header";

export const metadata: Metadata = {
  title: "Multi-Market Personalization Engine | scandiweb",
  description:
    "Run personalization across every market from one view of the customer. A leading Baltics retailer grew email orders 20% and ad return 39% while cutting spend 21%. Free consultation with scandiweb's analytics team.",
  alternates: {
    canonical: "https://scandiweb.com/solutions/multi-market-personalization",
  },
  robots: { index: false, follow: false },
};

export default function MultiMarketPersonalization2Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
