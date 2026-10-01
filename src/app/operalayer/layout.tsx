import type { Metadata } from "next";
import { Header } from "@/components/site/Header";

const title = "OperaLayer: Apps for the Work Between Your Systems";
const description =
  "OperaLayer by scandiweb connects to the ERP, CRM, store, and warehouse systems you already run and adds focused apps for the work none of them handle. A working prototype in week one, live in week four.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title: `${title} | scandiweb`, description, type: "website" },
  twitter: { card: "summary_large_image", title: `${title} | scandiweb`, description },
};

/** Default shell for all routes under `/operalayer/*` (mounted at `/solutions/operalayer/...` on scandiweb.com via Next.js basePath): site Header + page content. Footer stays in root layout. */
export default function OperaLayerLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
