import type { Metadata } from "next";

const title = "EU Withdrawal Button Compliance (Directive 2023/2673)";
const description =
  "From 19 June 2026, EU law requires online shops to add a withdrawal button. scandiweb makes your store compliant across every EU market, live in as little as a day.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://scandiweb.com/solutions/widerrufsbutton" },
  openGraph: {
    title: `${title} | scandiweb`,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | scandiweb`,
    description,
  },
};

export default function WiderrufsbuttonLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
