/* Growth Accelerator: everything that may change before or after launch lives here. */
import { assetUrl } from "@/lib/assets";

export const PAGE_URL = "https://scandiweb.com/solutions/growth-accelerator";
export const SCAN_ENDPOINT = "/solutions/api/growth/scan";
export const SUBMIT_ENDPOINT = "/solutions/api/growth/submit";
export const UPDATE_ENDPOINT = "/solutions/api/retention/update";

/* Lead email (FormSubmit + hub). The hub keeps Growth Scan leads in the Retention funnel
   list: the Growth Accelerator replaced that funnel on 10 Nov 2026. */
export const LEAD_SUBJECT = "New Growth Scan: ";
export const NOTIFY_CC = "marcusopt@gmail.com";

/* Ads and analytics */
export const PIXEL_CONTENT = "Growth Scan";
export const DL_EVENT = "growth_scan_request";
/* LinkedIn conversion "Retention Score request" (account Scandiweb V2). Same Lead conversion
   until a Growth Scan conversion is created in Campaign Manager. */
export const LI_CONVERSION_ID = 30790906;

/* Who takes the calls */
export const HOST_NAME = "Nika Z.";
export const HOST_TITLE = "Business Growth Manager";
export const HOST_PHOTO = "nika.webp";
export const LEAD_NAME = "Andres Reitsnik";
export const LEAD_TITLE = "Growth strategy lead";

/* Qualification: stores at or above this monthly online revenue (EUR) can book a call and
   qualify for the guarantee. Everyone else gets the full scan and the email track. */
export const CALL_GATE_EUR = 50000;

/* Videos (HOOK 1, compressed for the web). 24 s cut loops muted in the hero; the full 46 s
   version plays with sound in the player. */
export const VIDEO = {
  heroMobile: "/growth-accelerator/video/hook-24-9x16",
  heroDesktop: "/growth-accelerator/video/hook-24-4x5",
  fullMobile: "/growth-accelerator/video/hook-46-9x16",
  fullDesktop: "/growth-accelerator/video/hook-46-4x5",
};

export const vid = (base: string, ext: "mp4" | "jpg") => assetUrl(`${base}.${ext}`);
/* Shared photos and logos already published for the Retention page */
export const img = (file: string) => assetUrl(`/retention-90/${file}`);
