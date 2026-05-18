import { Header } from "@/components/site/Header";

/** Default shell for all routes under `/events/*` (mounted at `/solutions/events/...` on scandiweb.com via Next.js basePath): site Header + page content. Footer stays in root layout. */
export default function EventsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
