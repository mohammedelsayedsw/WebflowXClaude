import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "scandiweb x Pimcore webinar: what fragmented product data costs you | scandiweb",
  },
  description:
    "A free 60-minute session on what scattered product data costs in hours, errors, and lost sales, with four live demos and a free PIM prototype built on your own catalog. September 8.",
  alternates: {
    canonical: "https://scandiweb.com/solutions/webinars/pimcore",
  },
  robots: { index: false, follow: false },
};

export default function PimcoreWebinarLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
