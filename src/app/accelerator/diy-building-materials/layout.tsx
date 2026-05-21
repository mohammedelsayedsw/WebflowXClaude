import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DIY & Building Materials Commerce — Production-Ready eCommerce Backbone | scandiweb",
  description:
    "A production-ready commerce backbone for multi-warehouse DIY retail. Built across Byggmax, Murergrej, and Ermitazas. Three countries, three peak seasons, zero rebuilds. Live in 14 weeks. Multi-warehouse inventory, trade-and-DIY accounts, supplier-fed catalogs, peak-resilient infrastructure.",
  openGraph: {
    title: "DIY & Building Materials Commerce — Production-Ready eCommerce Backbone | scandiweb",
    description:
      "Production-ready commerce backbone for multi-warehouse DIY retail. Live in 14 weeks. Multi-warehouse stock, trade-and-DIY accounts, supplier-fed catalogs, peak resilience.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIY & Building Materials Commerce — Production-Ready eCommerce Backbone | scandiweb",
    description:
      "Production-ready DIY commerce backbone. Live in 14 weeks. Multi-warehouse stock, trade-and-DIY accounts, supplier-fed catalogs, peak resilience.",
  },
};

export default function DiyBuildingMaterialsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
