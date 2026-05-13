import { Header } from "@/components/site/Header";

/** Default shell for all routes under `/solutions/*`: site Header + page content. Footer stays in root layout. */
export default function SolutionsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
