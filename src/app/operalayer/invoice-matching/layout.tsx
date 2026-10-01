import type { Metadata } from "next";

const title = "AI Invoice Matching for Microsoft Dynamics NAV | OperaLayer";
const description =
  "OperaLayer reads supplier PDF invoices in any layout and checks every line against the purchase order in Microsoft Dynamics NAV. Your team reviews only the exceptions.";

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
