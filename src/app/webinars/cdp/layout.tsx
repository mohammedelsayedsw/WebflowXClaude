import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Sportland x Bloomreach x scandiweb webinar: More revenue on less spend | scandiweb",
  },
  description:
    "How Sportland runs personalization across three Baltic states, and what it took. Their team joins Bloomreach and scandiweb to share what worked, what didn't, and what they'd tell a retailer starting out today. September 24, 3 PM EEST.",
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
