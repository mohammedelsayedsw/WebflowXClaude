import { Header } from "@/components/site/Header";

/** Default shell for all routes under `/ai/*`: site Header + page content. Footer stays in root layout. */
export default function AiLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
