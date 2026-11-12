import type { Metadata } from "next";
import localFont from "next/font/local";

/*
 * This page's own type, after getfairwind.com: Roboto Flex set a little wide for headlines,
 * Instrument Sans for text. page.css points the site's font variables at them inside .olp.
 *
 * The files (Google Fonts, Open Font License) live in ./fonts so the build does not fetch them:
 * a failed font download is one of the things that stops Webflow Cloud publishing a build.
 * Each family comes as two files, as Google serves it: Latin, and the extra letters such as the "ā" in Māris.
 * The values are written out in full because next/font only accepts literals.
 */

const display = localFont({
  src: "./fonts/RobotoFlex-latin.woff2",
  weight: "100 1000",
  variable: "--font-rf",
  display: "swap",
  declarations: [
    { prop: "unicode-range", value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD" },
    { prop: "font-stretch", value: "25% 151%" },
  ],
});
const displayExt = localFont({
  src: "./fonts/RobotoFlex-latin-ext.woff2",
  weight: "100 1000",
  variable: "--font-rf-ext",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [
    { prop: "unicode-range", value: "U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C4, U+2113, U+2C60-2C7F, U+A720-A7FF" },
    { prop: "font-stretch", value: "25% 151%" },
  ],
});
const text = localFont({
  src: "./fonts/InstrumentSans-latin.woff2",
  weight: "400 700",
  variable: "--font-is",
  display: "swap",
  declarations: [{ prop: "unicode-range", value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD" }],
});
const textExt = localFont({
  src: "./fonts/InstrumentSans-latin-ext.woff2",
  weight: "400 700",
  variable: "--font-is-ext",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [{ prop: "unicode-range", value: "U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C4, U+2113, U+2C60-2C7F, U+A720-A7FF" }],
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
  return <div className={`contents ${display.variable} ${displayExt.variable} ${text.variable} ${textExt.variable}`}>{children}</div>;
}
