import type { Metadata } from "next";

const title =
  "K-12 STEM Toys & Kits Commerce — Production-Ready eCommerce Accelerator | scandiweb";
const description =
  "A production-ready commerce accelerator for retailers selling STEM toys, science kits, and robotics to families. Live in 12 weeks. Supplier-fed catalogs, marketplaces and shopping feeds, subscription boxes, shipping rules for difficult products, and a completeness check that saves Christmas morning.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description:
      "Production-ready commerce accelerator for STEM toy retailers. Live in 12 weeks. Supplier feeds, marketplaces, subscription boxes, shipping rules, completeness check.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Production-ready commerce accelerator for STEM toy retailers. Live in 12 weeks. Supplier feeds, marketplaces, subscriptions, shipping rules, completeness check.",
  },
};

export default function K12Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
