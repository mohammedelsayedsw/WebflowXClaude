import type { Metadata } from "next";
import { Header } from "@/components/site/Header";

export const metadata: Metadata = {
  title: "Omnichannel BI Platform | scandiweb",
  description:
    "Pull your online store, shops, ads, and email into one view leadership can run the business from. One trusted set of numbers across every channel, online and in store. Proven with Scouting America Outfitters. Free analytics consultation with scandiweb's data and analytics team.",
  alternates: {
    canonical: "https://scandiweb.com/solutions/omnichannel-bi-platform",
  },
  robots: { index: false, follow: false },
};

export default function OmnichannelBiPlatformLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
