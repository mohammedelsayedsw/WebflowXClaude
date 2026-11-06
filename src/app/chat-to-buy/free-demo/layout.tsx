import type { Metadata } from "next";

const TITLE = "Chat to Buy | Free demo on your own store";
const SHARE_TITLE = `${TITLE} | scandiweb`;
const DESCRIPTION =
  "Chat to Buy is an AI salesperson for your online store. Customers say what they need and it recommends your products. Get a free demo built on your own store.";
const URL = "https://scandiweb.com/solutions/chat-to-buy/free-demo";
/** 1200x630 share card (link previews in WhatsApp, LinkedIn, Slack, email): headline plus the sofa chat. */
const SHARE_IMAGE = {
  url: "https://scandiweb.com/solutions/chat-to-buy/og.jpg",
  width: 1200,
  height: 630,
  alt: "Chat to Buy by scandiweb: give your online store an AI salesperson",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: SHARE_TITLE, description: DESCRIPTION, url: URL, siteName: "scandiweb", type: "website", images: [SHARE_IMAGE] },
  twitter: { card: "summary_large_image", title: SHARE_TITLE, description: DESCRIPTION, images: [SHARE_IMAGE.url] },
};

export default function ChatToBuyFreeDemoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
