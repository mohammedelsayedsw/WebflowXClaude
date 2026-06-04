import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Magento accelerators for vertical commerce | scandiweb",
  description:
    "Productized Magento builds for specific verticals: school photography, school uniform, DIY and building materials, trading cards. Live in 8 to 14 weeks. Replace multi-quarter custom builds with a vertical-aware backbone, audited by scandiweb.",
  alternates: {
    canonical: "https://scandiweb.com/solutions/accelerators",
  },
  openGraph: {
    title:
      "Magento accelerators for vertical commerce | scandiweb",
    description:
      "Productized Magento builds for specific verticals. Live in 8 to 14 weeks. School photography, school uniform, DIY and building materials, trading cards.",
    url: "https://scandiweb.com/solutions/accelerators",
    siteName: "scandiweb",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Magento accelerators for vertical commerce | scandiweb",
    description:
      "Productized Magento builds for specific verticals. Live in 8 to 14 weeks.",
  },
};

export default function AcceleratorsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
