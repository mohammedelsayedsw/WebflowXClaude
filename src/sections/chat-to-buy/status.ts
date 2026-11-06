/** Form, sources and numbers for /chat-to-buy/free-demo. Change them here, nowhere else. */

export const HUBSPOT_PORTAL_ID = "25724996";
/**
 * "[Contact form] Chat to Buy free demo" (created 2026-11-06, cloned from the AI Visibility form, so it notifies Kristaps and the
 * Business development team): email and website required; firstname, lastname, company, phone (no length limit) and message.
 */
export const HUBSPOT_FORM_ID = "ae4208d8-e811-46b5-920c-ab56cc5b78f5";
/** True: name, company and phone go to their own HubSpot fields; message carries only the note and the ref. */
export const FORM_HAS_CONTACT_FIELDS = true;

/**
 * Amazon's 60%+: Q3 2025 results (October 30, 2025), shoppers who use Rufus are over 60% more likely to complete a purchase.
 * Hero client logos: Acer's needs written approval for new external uses (master agreement); Kristaps asked for it here, 2026-11-06.
 */
/** The scandiweb.com homepage brand strip: same files (its Webflow assets), same order, same intrinsic sizes. `lg` = shown from 1024px; the rest from 1280px. */
export const CLIENTS: { name: string; src: string; w: number; h: number; lg: boolean }[] = [
  { name: "PUMA", src: "/chat-to-buy/clients/puma.svg", w: 73, h: 56, lg: true },
  { name: "University of Michigan", src: "/chat-to-buy/clients/michigan.svg", w: 66, h: 42, lg: true },
  { name: "The New York Times", src: "/chat-to-buy/clients/nytimes.svg", w: 183, h: 56, lg: true },
  { name: "Boy Scouts of America", src: "/chat-to-buy/clients/boy-scouts.svg", w: 129, h: 56, lg: false },
  { name: "Adobe", src: "/chat-to-buy/clients/adobe.svg", w: 85, h: 56, lg: false },
  { name: "Acer", src: "/chat-to-buy/clients/acer.svg", w: 83, h: 56, lg: true },
  { name: "Samsung", src: "/chat-to-buy/clients/samsung.svg", w: 116, h: 56, lg: true },
];

// Retriggers the Webflow Cloud build: #836 merged 2026-11-06 13:11 UTC with CI green and was not published.
