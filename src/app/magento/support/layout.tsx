import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magento Support Takeover — Adobe Commerce at €19/hr | scandiweb",
  description:
    "Adobe Commerce support at rates that change the math. €19/hr for a full-time developer (sub-€10M merchants). €29/hr for a blended dev / PM / QA team. Bring your last invoice — we'll show you the comparison.",
  openGraph: {
    title: "Magento Support Takeover — Adobe Commerce at €19/hr | scandiweb",
    description:
      "Adobe Commerce support at rates that change the math. €19/hr for a full-time developer. €29/hr for a blended team. Bring your last invoice — we'll show you the comparison.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Magento Support Takeover — Adobe Commerce at €19/hr | scandiweb",
    description:
      "Adobe Commerce support at €19/hr developer rate. €29/hr blended team. Math-first conversation, no demo, no pitch.",
  },
};

export default function MagentoSupportLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
