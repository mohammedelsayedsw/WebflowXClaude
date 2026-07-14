import type { Metadata } from "next";

const title = "Telecom Commerce Accelerator | scandiweb";
const description =
  "A production-ready commerce layer for telecom operators. It sits between your sales channels and your BSS: offers, bundles, prices, and eligibility in one place your business team controls. Your billing and provisioning systems stay exactly as they are.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description:
      "A production-ready commerce layer for telecom operators. Launch a new offer in weeks, not months. Five modules, configured to your systems. TM Forum aligned, any commerce engine, full code ownership.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "A production-ready commerce layer for telecom operators. Launch a new offer in weeks, not months. Five modules, configured to your systems.",
  },
};

export default function TelecomCommerceLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
