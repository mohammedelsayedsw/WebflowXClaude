import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

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

/** The OperaLayer app sets document numbers and amounts in JetBrains Mono; the page does the same. */
const mono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/** This page brings its own light header (scandiweb | OperaLayer). Footer stays in the root layout. */
export default function InvoiceMatchingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={mono.variable}>{children}</div>;
}
