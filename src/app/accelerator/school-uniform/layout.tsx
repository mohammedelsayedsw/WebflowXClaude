import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Uniform Commerce — Production-Ready eCommerce Platform | scandiweb",
  description:
    "A production-ready commerce platform for school uniform retailers. Already built, peak-tested at term-start, and live in 11 weeks. Parent-child-school accounts, school-gated catalogs, sized uniform PDPs, ERP integration, term-aware delivery.",
  openGraph: {
    title: "School Uniform Commerce — Production-Ready eCommerce Platform | scandiweb",
    description:
      "A production-ready commerce platform for school uniform retailers. Already built, peak-tested, and live in 11 weeks. Parent-child-school accounts, school-gated catalogs, ERP integration.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "School Uniform Commerce — Production-Ready eCommerce Platform | scandiweb",
    description:
      "Production-ready school uniform commerce platform. Live in 11 weeks. Parent-child-school accounts, ERP integration, term-aware delivery.",
  },
};

export default function SchoolUniformLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
