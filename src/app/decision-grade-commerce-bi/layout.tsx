import type { Metadata } from "next";
import { Header } from "@/components/site/Header";

export const metadata: Metadata = {
  title: "Decision-Grade Commerce BI | scandiweb",
  description:
    "Rebuild your eCommerce tracking across your stores, tie it to your real sales, and turn it into dashboards your team can actually decide from. One trusted set of numbers across every store. Proven with Haypp Group. Free analytics consultation with scandiweb's data and analytics team.",
  alternates: {
    canonical: "https://scandiweb.com/solutions/decision-grade-commerce-bi",
  },
  robots: { index: false, follow: false },
};

export default function DecisionGradeCommerceBiLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
