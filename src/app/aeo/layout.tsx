import type { Metadata } from "next";

const TITLE = "AI Visibility Core | €1,000/month";
const SHARE_TITLE = `${TITLE} | scandiweb`;
const DESCRIPTION =
  "Make AI visibility in ChatGPT and other AI tools part of running your business. AI Visibility Core includes AnswerRank tracking, content tailored to AI search questions, and practical recommendations for €1,000/month.";
const URL = "https://scandiweb.com/solutions/aeo";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: SHARE_TITLE, description: DESCRIPTION, url: URL, siteName: "scandiweb", type: "website" },
  twitter: { card: "summary_large_image", title: SHARE_TITLE, description: DESCRIPTION },
};

/** No site Header here: the page renders its own sticky header (light page, in-page links). Footer stays in root layout. */
export default function AeoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
