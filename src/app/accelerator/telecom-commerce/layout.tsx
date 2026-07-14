import type { Metadata } from "next";

const title = "Telecom Commerce Accelerator | scandiweb";
const description =
  "A production-ready commerce accelerator for telecom operators. Sell devices, plans, and bundles online, with installments, number selection, and coverage checks built in. Your BSS and CRM stay exactly as they are: the store connects to them, it does not replace them.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description:
      "A production-ready commerce accelerator for telecom operators. Live in 6 to 12 weeks. Five modules, proven in production at a national telecom operator: device and plan bundles, telecom payments, numbers and SIM, BSS and CRM connection, launch machinery.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "A production-ready commerce accelerator for telecom operators. Live in 6 to 12 weeks. Five modules, proven in production at a national telecom operator.",
  },
};

export default function TelecomCommerceLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
