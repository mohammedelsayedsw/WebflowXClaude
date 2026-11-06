import type { Metadata } from "next";

const TITLE = "Chat to Buy | Free demo on your own store";
const SHARE_TITLE = `${TITLE} | scandiweb`;
const DESCRIPTION =
  "Chat to Buy is an AI salesperson for your online store. Customers say what they need and it recommends your products. Get a free demo built on your own store.";
const URL = "https://scandiweb.com/solutions/chat-to-buy/free-demo";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: SHARE_TITLE, description: DESCRIPTION, url: URL, siteName: "scandiweb", type: "website" },
  twitter: { card: "summary_large_image", title: SHARE_TITLE, description: DESCRIPTION },
};

export default function ChatToBuyFreeDemoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
