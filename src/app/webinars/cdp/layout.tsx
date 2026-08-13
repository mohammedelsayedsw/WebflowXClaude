import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Sportland x Bloomreach x scandiweb webinar: More revenue on less spend | scandiweb",
  },
  description:
    "How Sportland runs AI personalization across four markets, and what it took to get there. An open conversation with Sportland, Bloomreach, and scandiweb. September 24, 2 PM CET.",
  alternates: {
    canonical: "https://scandiweb.com/solutions/webinars/cdp",
  },
  robots: { index: false, follow: false },
};

export default function CdpWebinarLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
