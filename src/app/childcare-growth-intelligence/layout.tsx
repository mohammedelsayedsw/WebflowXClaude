import type { Metadata } from "next";
import { Header } from "@/components/site/Header";

export const metadata: Metadata = {
  title: "Childcare Growth Intelligence Hub | scandiweb",
  description:
    "Bring occupancy, recruitment, and board numbers into one view: forecast how full each room will be, show investors numbers you can stand behind, and decide where to grow on evidence. Proven with Family First. Book a 20-minute fit call with scandiweb's data and analytics team.",
  alternates: {
    canonical: "https://scandiweb.com/solutions/childcare-growth-intelligence",
  },
  robots: { index: false, follow: false },
};

export default function ChildcareGrowthIntelligenceLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
