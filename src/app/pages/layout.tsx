import { Header } from "@/components/site/Header";

/** Default shell for all routes under `/pages/*`: site Header + page content. Footer stays in root layout. */
export default function PagesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
