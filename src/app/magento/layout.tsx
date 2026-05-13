import { Header } from "@/components/site/Header";

/** Default shell for all routes under `/magento/*` (mounted at `/solutions/magento/...` on scandiweb.com via Next.js basePath): site Header + page content. Footer stays in root layout. */
export default function MagentoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
