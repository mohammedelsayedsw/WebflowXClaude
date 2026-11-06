/** Form, sources and numbers for /chat-to-buy/free-demo. Change them here, nowhere else. */

export const HUBSPOT_PORTAL_ID = "25724996";
/**
 * Interim (2026-11-06): the "[Contact form] AI Visibility Core (AEO)" form, which only has email, website and message,
 * so name, company, phone, note and ref all go into message under a "Chat to Buy free demo request" line.
 * When "[Contact form] Chat to Buy free demo" exists (fields email, website, firstname, lastname, company, phone,
 * message), put its id here and set FORM_HAS_CONTACT_FIELDS to true.
 */
export const HUBSPOT_FORM_ID = "65e13011-1fb4-4005-a293-1265087b1280";
export const FORM_HAS_CONTACT_FIELDS = false;

/**
 * Amazon's 60%+: Q3 2025 results (October 30, 2025), shoppers who use Rufus are over 60% more likely to complete a purchase.
 * Hero client logos: Acer's needs written approval for new external uses (master agreement); Kristaps asked for it here, 2026-11-06.
 */
export const CLIENTS: { name: string; src: string; h: string }[] = [
  { name: "Acer", src: "/shared/logos/clients/acer.png", h: "h-[17px] md:h-[20px]" },
  { name: "Samsung", src: "/shared/logos/clients/samsung.svg", h: "h-[15px] md:h-[18px]" },
  { name: "The New York Times", src: "/shared/logos/clients/nytimes.svg", h: "h-[17px] md:h-[20px]" },
  { name: "PUMA", src: "/shared/logos/clients/puma.svg", h: "h-[26px] md:h-[30px]" },
  { name: "University of Michigan", src: "/shared/logos/clients/michigan.svg", h: "h-[26px] md:h-[30px]" },
];
