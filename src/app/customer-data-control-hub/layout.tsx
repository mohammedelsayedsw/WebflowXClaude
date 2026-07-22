import type { Metadata } from "next";
import { Header } from "@/components/site/Header";

export const metadata: Metadata = {
  title: "Customer Data Control Hub | scandiweb",
  description:
    "Own one clean customer identity your team controls, and activate it across email, SMS, paid media, reporting, and store teams. Proven with Lafayette 148. Book a 20-minute fit call with scandiweb's data and analytics team.",
  alternates: {
    canonical: "https://scandiweb.com/solutions/customer-data-control-hub",
  },
  robots: { index: false, follow: false },
};

export default function CustomerDataControlHubLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
