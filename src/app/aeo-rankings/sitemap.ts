import type { MetadataRoute } from "next";
import { abs, PAGES, ROUTE } from "@/sections/aeo-rankings/paths";

/** /solutions/aeo-rankings/sitemap.xml: the ranking pages. scandiweb.com/sitemap.xml comes from Webflow and lists no /solutions pages, so submit this one in Search Console. */
export default function sitemap(): MetadataRoute.Sitemap {
  const modified = new Date("2026-10-28");
  return [
    { url: abs(ROUTE), lastModified: modified, changeFrequency: "monthly", priority: 1 },
    { url: abs(PAGES.winners), lastModified: modified, changeFrequency: "monthly", priority: 0.8 },
    { url: abs(PAGES.howTo), lastModified: modified, changeFrequency: "monthly", priority: 0.8 },
    { url: abs(PAGES.missing), lastModified: modified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
