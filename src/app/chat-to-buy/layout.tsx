import { Header } from "@/components/site/Header";

/** Shell for /chat-to-buy/*: site Header + page content. Footer stays in root layout. */
export default function ChatToBuyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
