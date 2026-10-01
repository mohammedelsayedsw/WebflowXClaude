import type { Metadata } from "next";

const title = "Supplier Purchasing Intelligence for Business Central | OperaLayer";
const description =
  "OperaLayer gives buyers one view of seasonal commitments, deliveries, and invoices across every supplier brand, on top of Microsoft Business Central. Built by scandiweb.";

export const metadata: Metadata = {
  title,
  description,
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

export default function SupplierPurchasingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
