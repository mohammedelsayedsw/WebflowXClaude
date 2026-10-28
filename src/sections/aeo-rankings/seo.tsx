import type { Metadata } from "next";
import { abs, ROUTE, SITE } from "./paths";

/** Title, description, canonical, Open Graph and Twitter for one ranking page. og names a file in public/aeo-rankings/og/. */
export function pageMeta({ path, title, description, og }: { path: string; title: string; description: string; og: string }): Metadata {
  const url = abs(path);
  const image = { url: abs(`${ROUTE}/og/${og}.png`), width: 1200, height: 630, alt: title };
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "scandiweb", type: "website", locale: "en", images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

export const PUBLISHER = { "@type": "Organization", name: "scandiweb", url: SITE };

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

/** Home > page breadcrumb for subpages. */
export const breadcrumb = (name: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Baltic AI Brand Ranking", item: abs(ROUTE) },
    { "@type": "ListItem", position: 2, name, item: abs(path) },
  ],
});
