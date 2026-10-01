/**
 * Example season data for the supplier purchasing page. Category totals add
 * up to the €34 million of SS26 purchasing from the case; the monthly split,
 * delivery and invoice progress are illustrative and labelled as such on the
 * page. No supplier brand names: the client is anonymous.
 */
export type Category = {
  name: string;
  committed: number; // € million, SS26
  brands: number;
  delivered: number; // share of committed, 0..1
  invoiced: number; // share of committed, 0..1
  shift: number[]; // per-month tweak to the base split
};

export const CATEGORIES: Category[] = [
  { name: "Running footwear", committed: 8.6, brands: 9, delivered: 0.71, invoiced: 0.64, shift: [0.02, 0.03, 0, -0.02, -0.02, -0.01] },
  { name: "Outdoor apparel", committed: 7.2, brands: 11, delivered: 0.63, invoiced: 0.58, shift: [-0.04, -0.02, 0.02, 0.03, 0.01, 0] },
  { name: "Team sports", committed: 5.4, brands: 8, delivered: 0.77, invoiced: 0.69, shift: [0.04, 0.02, 0, -0.02, -0.02, -0.02] },
  { name: "Training apparel", committed: 4.9, brands: 7, delivered: 0.68, invoiced: 0.66, shift: [0, 0.01, 0.01, 0, -0.01, -0.01] },
  { name: "Kids", committed: 3.8, brands: 6, delivered: 0.6, invoiced: 0.52, shift: [-0.03, 0, 0.02, 0.02, 0, -0.01] },
  { name: "Swimwear", committed: 2.1, brands: 5, delivered: 0.44, invoiced: 0.4, shift: [-0.08, -0.06, -0.02, 0.04, 0.07, 0.05] },
  { name: "Accessories", committed: 2.0, brands: 6, delivered: 0.74, invoiced: 0.7, shift: [0.03, 0.02, 0, -0.02, -0.02, -0.01] },
];

export const TOTAL = CATEGORIES.reduce((s, c) => s + c.committed, 0); // 34.0

export const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const BASE = [0.12, 0.22, 0.24, 0.2, 0.14, 0.08];
// How far each month has progressed by "today" (mid May in the example).
const DELIVERED_BY_MONTH = [1, 1, 0.97, 0.78, 0.32, 0];
const INVOICED_BY_MONTH = [1, 0.99, 0.94, 0.7, 0.18, 0];

export function monthly(c: Category) {
  const raw = BASE.map((b, i) => Math.max(0.02, b + c.shift[i]));
  const sum = raw.reduce((s, v) => s + v, 0);
  return raw.map((r, i) => {
    const committed = (r / sum) * c.committed;
    return {
      month: MONTHS[i],
      committed,
      delivered: committed * DELIVERED_BY_MONTH[i],
      invoiced: committed * INVOICED_BY_MONTH[i],
    };
  });
}

export function eur(m: number) {
  return m >= 1 ? `€${m.toFixed(1)}M` : `€${Math.round(m * 1000)}K`;
}
