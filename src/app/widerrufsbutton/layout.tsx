import type { Metadata } from "next";
import { Header } from "@/components/site/Header";

const title = "German Widerrufsbutton (§ 356a BGB) Compliance";
const description =
  "The German Widerrufsbutton (§ 356a BGB) is mandatory from 19 June 2026. scandiweb adds a compliant withdrawal button to your store, live in a day.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://scandiweb.com/solutions/widerrufsbutton" },
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

export default function WiderrufsbuttonLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
