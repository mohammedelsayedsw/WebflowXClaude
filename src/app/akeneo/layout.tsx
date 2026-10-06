import { Header } from "@/components/site/Header";

/** Default shell for all routes under `/akeneo/*` (mounted at `/solutions/akeneo/...` on scandiweb.com via Next.js basePath): site Header + page content. Footer stays in root layout. */
export default function AkeneoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
