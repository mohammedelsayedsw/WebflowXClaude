import { notFound, permanentRedirect } from "next/navigation";

/**
 * Case-insensitive aliases for top-level routes. Routes are case-sensitive and next.config redirects are not
 * (a /AEO-rankings rule would also match /aeo-rankings and loop), so the alias lives here. Everything else 404s as before.
 */
const ALIASES: Record<string, string> = { "aeo-rankings": "/aeo-rankings" };

export const dynamic = "force-dynamic";

export default async function Alias({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { slug } = await params;
  const to = ALIASES[decodeURIComponent(slug).toLowerCase()];
  if (!to) notFound();
  const q = new URLSearchParams();
  Object.entries(await searchParams).forEach(([k, v]) => [v ?? []].flat().forEach((x) => q.append(k, x)));
  permanentRedirect(q.size ? `${to}?${q}` : to);
}
