import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Get PDFs into your AS/400 without typing | scandiweb",
  },
  description:
    "Watch documents fill in your AS/400 (IBM i) screens while your team approves every entry. Free 60-minute webinar with a live demo.",
  alternates: {
    canonical: "https://scandiweb.com/solutions/webinars/legacy-bridge",
  },
  robots: { index: false, follow: false },
};

export default function LegacyBridgeWebinarLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
