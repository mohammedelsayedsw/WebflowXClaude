import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trading Cards Commerce — Production-Ready eCommerce Platform | scandiweb",
  description:
    "A production-ready commerce platform for trading card retailers and breakers. Already built. Already running PSA-vaulted pack purchases at scale. Configure it to your catalog, your grading partner, and your live show in 14 weeks.",
  openGraph: {
    title: "Trading Cards Commerce — Production-Ready eCommerce Platform | scandiweb",
    description:
      "A production-ready commerce platform for trading card retailers and breakers. PSA-vault integration, pack randomization, buyback flows, AEO trust content. Live in 14 weeks.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trading Cards Commerce — Production-Ready eCommerce Platform | scandiweb",
    description:
      "Production-ready trading cards commerce platform. PSA vault, pack randomization, buyback. Live in 14 weeks.",
  },
};

export default function TradingCardsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
