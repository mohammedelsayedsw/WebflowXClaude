import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Helly Hansen — Store X-ray | scandiweb",
  description:
    "A confidential, full-funnel growth teardown of hellyhansen.com by scandiweb — built from public data.",
  robots: { index: false, follow: false },
};

export default function DemoHellyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
