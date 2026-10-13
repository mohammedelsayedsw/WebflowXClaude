/** Prices, plans, form and outbound links for /aeo. Change them here, nowhere else. */

export const PLANS = {
  core: { name: "AI Visibility Core", price: "€1,000" },
  leader: { name: "AI Search Industry Leader", price: "€5,000" },
} as const;

export type Plan = keyof typeof PLANS;

export const HUBSPOT_PORTAL_ID = "25724996";
/** "[Contact form] AI Visibility Core (AEO)": email and website required; message optional and carries the plan and notes. */
export const HUBSPOT_FORM_ID = "65e13011-1fb4-4005-a293-1265087b1280";

export const BETTERANSWER_URL = "https://betteranswer.ai/";
export const ANSWERRANK_URL = "https://answerrank.ai/";
