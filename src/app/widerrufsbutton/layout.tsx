import type { Metadata } from "next";

const title = "German Widerrufsbutton (§ 356a BGB) Compliance | scandiweb";
const description =
  "Since 19 June 2026, § 356a BGB requires online shops selling to German consumers to offer a withdrawal button, a two-step confirmation flow, and an automatic confirmation of receipt wherever a right of withdrawal applies. scandiweb makes your Shopify or Magento store compliant in days.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "The German Widerrufsbutton is now required under § 356a BGB wherever a right of withdrawal applies. scandiweb adds the compliant withdrawal button, two-step flow, confirmation, and legal updates to your Shopify or Magento store in days.",
  },
};

export default function WiderrufsbuttonLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
