/**
 * Support dates per release line, from the Adobe Commerce software lifecycle
 * policy (checked 2026-09-21):
 * https://experienceleague.adobe.com/en/docs/commerce-operations/release/planning/lifecycle-policy
 *
 * `ext` is the additional year Adobe Commerce customers receive. Magento Open
 * Source has no extended period, so `reg` is the hard stop there. Adobe has
 * not published extended dates for 2.4.8 and 2.4.9.
 */
export type Release = {
  id: string;
  name: string;
  /** end of regular support, ISO date */
  reg: string;
  /** end of extended support, ISO date */
  ext: string | null;
  /** release lines behind 2.4.9 */
  behind: number;
  replatform?: boolean;
};

export const LATEST = "2.4.9";
export const POLICY_URL =
  "https://experienceleague.adobe.com/en/docs/commerce-operations/release/planning/lifecycle-policy";

export const RELEASES: Release[] = [
  { id: "244", name: "2.4.4", reg: "2025-04-12", ext: "2026-04-14", behind: 5 },
  { id: "245", name: "2.4.5", reg: "2025-08-12", ext: "2026-08-11", behind: 4 },
  { id: "246", name: "2.4.6", reg: "2026-08-11", ext: "2027-08-31", behind: 3 },
  { id: "247", name: "2.4.7", reg: "2027-05-31", ext: "2028-05-31", behind: 2 },
  { id: "248", name: "2.4.8", reg: "2028-05-31", ext: null, behind: 1 },
  { id: "249", name: "2.4.9", reg: "2029-05-31", ext: null, behind: 0 },
  { id: "m1", name: "Magento 1", reg: "2020-06-30", ext: null, behind: 0, replatform: true },
];

export const DEFAULT_RELEASE = "246";
