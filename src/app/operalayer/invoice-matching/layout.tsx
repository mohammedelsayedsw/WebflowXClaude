import type { Metadata } from "next";

const title = "OperaLayer | Purchase order and invoice matching";
const description =
  "Check supplier invoices against purchase orders and warehouse receipts. Follow three invoice examples and read one customer’s story.";

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

export default function InvoiceMatchingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
