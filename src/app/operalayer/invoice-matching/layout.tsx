import type { Metadata } from "next";
import { Instrument_Sans, Roboto_Flex } from "next/font/google";

/*
 * This page's own type, after getfairwind.com: Roboto Flex set a little wide for headlines,
 * Instrument Sans for text. page.css points the site's font variables at them inside .olp.
 */
const display = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth", "opsz"],
  display: "swap",
});
const text = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const title = "OperaLayer | Purchase order and invoice matching";
const description =
  "Check supplier invoices against purchase orders and warehouse receipts. Follow three invoice examples and read the case study.";

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

/** This page brings its own light header (scandiweb | OperaLayer). Footer stays in the root layout. */
export default function InvoiceMatchingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={`contents ${display.variable} ${text.variable}`}>{children}</div>;
}
