import type { Metadata } from "next";
import { Header } from "@/components/site/Header";

const TITLE = "AI Visibility Core | €1,000/month";
const SHARE_TITLE = `${TITLE} | scandiweb`;
const DESCRIPTION =
  "Make AI visibility in ChatGPT and other AI tools part of running your business. AI Visibility Core includes AnswerRank tracking, content tailored to AI search questions, and practical recommendations for €1,000/month.";
const URL = "https://scandiweb.com/solutions/ai-visibility-package";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: SHARE_TITLE, description: DESCRIPTION, url: URL, siteName: "scandiweb", type: "website" },
  twitter: { card: "summary_large_image", title: SHARE_TITLE, description: DESCRIPTION },
  // Not public: shared directly with scandiweb clients and former leads only.
  robots: { index: false, follow: false },
};

/** Site Header + page content. Footer stays in root layout. */
export default function AiVisibilityPackageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
