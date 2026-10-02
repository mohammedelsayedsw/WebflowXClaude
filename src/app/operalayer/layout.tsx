import type { Metadata } from "next";

const title = "OperaLayer: Apps for the Work Between Your Systems";
const description =
  "OperaLayer by scandiweb connects to the ERP, CRM, store, and warehouse systems you already run and adds focused apps for the work none of them handle. A working prototype in week one, live in week four.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title: `${title} | scandiweb`, description, type: "website" },
  twitter: { card: "summary_large_image", title: `${title} | scandiweb`, description },
};

/** All /operalayer pages bring their own header (scandiweb | OperaLayer with section links). Footer stays in the root layout. */
export default function OperaLayerLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="bg-[#05070f] text-white">{children}</div>;
}
