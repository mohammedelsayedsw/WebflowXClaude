import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi-Market Personalization Engine | scandiweb",
  description:
    "Replace siloed email, recommendation, and ad tools with one CDP that personalizes across channels, per market. Free CDP audit.",
  robots: { index: false, follow: false },
};

export default function SportlandCdpLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
