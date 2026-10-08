import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Make Magento twice as fast without replatforming | Free webinar | scandiweb",
  },
  description:
    "Watch the same Magento store run on stock Magento and on Expedio, side by side. Free 60-minute webinar with a live demo and Q&A.",
  alternates: {
    canonical: "https://scandiweb.com/solutions/webinars/expedio",
  },
  // noindex until the HubSpot registration form is in place
  robots: { index: false, follow: false },
};

export default function ExpedioWebinarLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
