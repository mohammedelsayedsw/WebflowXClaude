import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "eCommerce security audit for Magento and Adobe Commerce",
  description:
    "Find out what an attacker can reach on your store before it becomes a breach and a fine. scandiweb runs senior-led penetration testing, code and config review, and data-exposure checks. Start with a free security check.",
  alternates: {
    canonical: "https://scandiweb.com/solutions/magento/security-audit",
  },
  openGraph: {
    title: "eCommerce security audit | scandiweb",
    description:
      "One flaw can expose every customer record, and every region has a fine for it. scandiweb's senior security engineers find the exposures attackers use first. Free security check in 48 hours.",
    url: "https://scandiweb.com/solutions/magento/security-audit",
    siteName: "scandiweb",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce security audit | scandiweb",
    description:
      "Find what an attacker can reach on your store before it becomes a breach and a fine. Free security check in 48 hours.",
  },
};

export default function SecurityAuditLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
