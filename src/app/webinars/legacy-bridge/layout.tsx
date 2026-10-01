import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "A virtual operator for your AS/400 (IBM i) | Free webinar | scandiweb",
  },
  description:
    "Watch documents fill in your AS/400 (IBM i) screens and wait for your team to approve. Free 60-minute webinar with a live demo.",
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
