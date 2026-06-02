import { Header } from "@/components/site/Header";

/** Default shell for all routes under `/webinars/*` (mounted at `/solutions/webinars/...` on scandiweb.com via Next.js basePath): site Header + page content. Footer stays in root layout. */
export default function WebinarsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
