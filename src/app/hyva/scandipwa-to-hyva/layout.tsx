import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ScandiPWA to Hyvä Migration — by the Team that Built ScandiPWA | scandiweb",
  description:
    "Migrate your Magento store from ScandiPWA to Hyvä. Built by the team that created ScandiPWA and is a Hyvä Platinum Partner. 10–14 weeks kickoff to live, content and integrations preserved, faster store, fewer bugs.",
  openGraph: {
    title: "ScandiPWA to Hyvä Migration — by the Team that Built ScandiPWA | scandiweb",
    description:
      "Migrate your Magento store from ScandiPWA to Hyvä. Built by the team that wrote ScandiPWA and is a Hyvä Platinum Partner. 10–14 weeks, content and integrations preserved.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScandiPWA to Hyvä Migration — by the Team that Built ScandiPWA | scandiweb",
    description:
      "ScandiPWA to Hyvä in 10–14 weeks. Built by the team behind ScandiPWA and a Hyvä Platinum Partner.",
  },
};

export default function ScandipwaToHyvaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
