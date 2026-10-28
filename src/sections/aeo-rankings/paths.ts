import { APP_BASE_PATH } from "@/lib/appBasePath";

/** Route paths without the /solutions base path (for next/link and metadata) and with it (for plain links and history). */
export const ROUTE = "/aeo-rankings";
export const BASE = `${APP_BASE_PATH}${ROUTE}`;
export const PAGES = {
  winners: `${ROUTE}/winners`,
  howTo: `${ROUTE}/how-to-rank-in-ai-search`,
  missing: `${ROUTE}/dont-see-your-brand`,
} as const;
export const SITE = "https://scandiweb.com";
/** Absolute URL of a route path, e.g. abs(PAGES.winners). */
export const abs = (path: string) => `${SITE}${APP_BASE_PATH}${path}`;
