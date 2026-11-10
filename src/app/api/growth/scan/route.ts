import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* Growth Scan: reads the store's homepage once and reports what it can see from the outside.
   Called by the Growth Accelerator quiz while the visitor answers the questions.
   - Only public domain names (no IPs, no ports, no paths), https first, then http.
   - One request, 7 s limit, reads at most 1.5 MB, follows redirects.
   - Never throws: a blocked or slow site returns {ok:false} and the quiz scores from answers. */

const MAX_BYTES = 1_500_000;
const DOMAIN_RE = /^(?=.{4,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,24}$/;

export type ScanResult = {
  ok: boolean;
  ms?: number;
  kb?: number;
  platform?: string;
  metaPixel?: boolean;
  googleTag?: boolean;
  googleAds?: boolean;
  tiktok?: boolean;
  serverSide?: boolean;
  capi?: boolean;
  consent?: boolean;
  esp?: string;
  popup?: boolean;
  reviews?: string;
  productSchema?: boolean;
  orgSchema?: boolean;
  metaDescription?: boolean;
  title?: boolean;
  hreflang?: boolean;
};

const has = (s: string, re: RegExp) => re.test(s);
const first = (s: string, pairs: [RegExp, string][]) => pairs.find(([re]) => re.test(s))?.[1] || "";

function detect(html: string): Omit<ScanResult, "ok" | "ms" | "kb"> {
  const h = html.slice(0, MAX_BYTES);
  const ld = (h.match(/<script[^>]+application\/ld\+json[^>]*>[\s\S]*?<\/script>/gi) || []).join(" ");
  return {
    platform: first(h, [
      [/cdn\.shopify\.com|Shopify\.theme|myshopify\.com/i, "Shopify"],
      [/Magento_|mage\/cookies|\/static\/version\d+\/frontend|"Magento"|hyva/i, "Magento"],
      [/woocommerce|wc-ajax|wp-content\/plugins\/woocommerce/i, "WooCommerce"],
      [/cdn11\.bigcommerce\.com|bigcommerce/i, "BigCommerce"],
      [/shopware/i, "Shopware"],
      [/prestashop/i, "PrestaShop"],
      [/static\.wixstatic\.com|wix\.com/i, "Wix"],
      [/squarespace/i, "Squarespace"],
      [/salesforce-commerce|demandware/i, "Salesforce Commerce"],
      [/wp-content|wordpress/i, "WordPress"],
    ]),
    /* Shopify loads the Meta pixel through its web-pixels manager, so the config JSON counts too */
    metaPixel: has(h, /connect\.facebook\.net\/[^"']*fbevents\.js|fbq\(\s*['"]init|facebook_pixel|facebook-pixel/i),
    capi: has(h, /facebookCapiEnabled\\?"?\s*:\s*\\?"?true/i),
    googleTag: has(h, /googletagmanager\.com\/(gtag\/js|gtm\.js)|gtag\(\s*['"]config|GTM-[A-Z0-9]{4,}/i),
    googleAds: has(h, /AW-\d{6,}/),
    tiktok: has(h, /analytics\.tiktok\.com|ttq\.load/i),
    /* gtm.js or gtag/js served from the store's own domain points to server-side tagging */
    serverSide: has(h, /src=["'](?:https?:)?\/\/(?!www\.googletagmanager\.com)[^"']+\/(?:gtm\.js|gtag\/js)\?id=/i),
    consent: has(h, /cookiebot|onetrust|cookieyes|usercentrics|iubenda|consentmanager|consentframework|didomi|termly|cookiefirst|complianz|cookie-script|axeptio|tarteaucitron|klaro|cookiehub|borlabs|trustarc|quantcast|sirdata|cookieinformation|shopify-privacy-banner|privacy-banner/i),
    esp: first(h, [
      [/klaviyo/i, "Klaviyo"], [/omnisend/i, "Omnisend"], [/mailchimp|chimpstatic/i, "Mailchimp"],
      [/dotdigital|dmtrk/i, "Dotdigital"], [/bloomreach|exponea/i, "Bloomreach"], [/braze/i, "Braze"],
      [/attentive/i, "Attentive"], [/sendinblue|brevo/i, "Brevo"], [/activecampaign/i, "ActiveCampaign"],
      [/drip\.com|getdrip/i, "Drip"], [/rulemailer|rule\.io/i, "Rule"], [/voyado/i, "Voyado"], [/apsis/i, "APSIS"],
    ]),
    popup: has(h, /klaviyo[^"']*forms|omnisend[^"']*form|privy|justuno|optimonk|wisepops|popupsmart|sumo\.com|getsitecontrol/i),
    reviews: first(h, [
      [/trustpilot/i, "Trustpilot"], [/yotpo/i, "Yotpo"], [/judge\.me|judgeme/i, "Judge.me"], [/okendo/i, "Okendo"],
      [/reviews\.io|reviewsio/i, "REVIEWS.io"], [/stamped\.io/i, "Stamped"], [/feefo/i, "Feefo"], [/trustedshops/i, "Trusted Shops"],
    ]),
    productSchema: /"@type"\s*:\s*"Product"|"@type"\s*:\s*\[[^\]]*"Product"/i.test(ld) || /itemtype=["']https?:\/\/schema\.org\/Product/i.test(h),
    orgSchema: /"@type"\s*:\s*"(Organization|OnlineStore|Store|WebSite)"/i.test(ld),
    metaDescription: has(h, /<meta[^>]+name=["']description["'][^>]+content=["'][^"']{30,}|<meta[^>]+content=["'][^"']{30,}["'][^>]+name=["']description["']/i),
    title: has(h, /<title>[^<]{10,}<\/title>/i),
    hreflang: has(h, /hreflang=/i),
  };
}

async function readCapped(r: Response): Promise<string> {
  const reader = r.body?.getReader();
  if (!reader) return "";
  const dec = new TextDecoder();
  let out = "", n = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done || !value) break;
    n += value.length;
    out += dec.decode(value, { stream: true });
    if (n >= MAX_BYTES) { try { await reader.cancel(); } catch {} break; }
  }
  return out;
}

/* Hostnames we never fetch: IP literals, localhost-style names and wildcard-DNS services that map
   a name to any IP (127.0.0.1.nip.io). Checked on the first URL and on every redirect hop. */
const BAD_HOST = /^(\d{1,3}(\.\d{1,3}){3}|\[.*\]|localhost)$|\.(local|localhost|internal|lan|home|arpa|test|invalid)$|(^|\.)(nip\.io|sslip\.io|xip\.io|localtest\.me|lvh\.me)$/i;
const safeUrl = (u: URL) => /^https?:$/.test(u.protocol) && !u.port && !u.username && !BAD_HOST.test(u.hostname) && DOMAIN_RE.test(u.hostname.replace(/^www\./, ""));

/* Per-IP cap: 10 scans a minute per isolate. Enough for a person, useless as a traffic relay. */
const hits = new Map<string, number[]>();
function limited(ip: string): boolean {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < 60_000);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > 10;
}

/* Follows up to 4 redirects by hand so each target is checked. */
async function get(start: string, deadline: number): Promise<Response | null> {
  let url = new URL(start);
  for (let hop = 0; hop < 5; hop++) {
    if (!safeUrl(url)) return null;
    const left = deadline - Date.now();
    if (left < 500) return null;
    const r = await fetch(url.toString(), {
      redirect: "manual",
      signal: AbortSignal.timeout(left),
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; scandiweb-growth-scan/1.0; +https://scandiweb.com/solutions/growth-accelerator)",
        Accept: "text/html,application/xhtml+xml",
        "Accept-Language": "en;q=0.9",
      },
    });
    if (r.status >= 300 && r.status < 400) {
      const loc = r.headers.get("location");
      if (!loc) return null;
      url = new URL(loc, url);
      continue;
    }
    return r;
  }
  return null;
}

export async function GET(req: NextRequest) {
  const ip = req.headers.get("cf-connecting-ip") || req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const d = String(req.nextUrl.searchParams.get("d") || "").trim().toLowerCase().replace(/^https?:\/\//, "").replace(/^www\./, "").split(/[/?#:]/)[0];
  if (!DOMAIN_RE.test(d) || BAD_HOST.test(d) || limited(ip)) return NextResponse.json({ ok: false } satisfies ScanResult);
  /* one overall budget of 8 s across both attempts */
  const deadline = Date.now() + 8000;
  for (const url of [`https://${d}/`, `https://www.${d}/`]) {
    const t0 = Date.now();
    try {
      const r = await get(url, deadline);
      if (!r) continue;
      const ms = Date.now() - t0;
      if (!r.ok || !/html/i.test(r.headers.get("content-type") || "html")) continue;
      const html = await readCapped(r);
      if (html.length < 500) continue;
      const res: ScanResult = { ok: true, ms, kb: Math.round(html.length / 1024), ...detect(html) };
      return NextResponse.json(res, { headers: { "Cache-Control": "private, max-age=600" } });
    } catch { /* try the next URL */ }
  }
  return NextResponse.json({ ok: false } satisfies ScanResult);
}
