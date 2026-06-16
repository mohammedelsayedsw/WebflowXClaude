import { Header } from "@/components/site/Header";

/** Default shell for all routes under `/shopify/*` (mounted at `/solutions/shopify/...` on scandiweb.com via Next.js basePath): site Header + page content. Footer stays in root layout. */
export default function ShopifyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
