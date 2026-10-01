/**
 * Sample invoice lines for the mocks on this page. The supplier and item
 * names are generic electrical wholesale lines, written for illustration; the
 * real figures on the page (about 100 formats, 87%) come from the client case.
 */
export type LineStatus = "agrees" | "price" | "qty";

export type InvoiceLine = {
  item: string;
  inv: string;
  po: string;
  status: LineStatus;
  conf: number;
};

export type SampleInvoice = {
  supplier: string;
  number: string;
  layout: "classic" | "banded" | "compact";
  lines: InvoiceLine[];
};

export const INVOICES: SampleInvoice[] = [
  {
    supplier: "Cable supplier",
    number: "INV 48213",
    layout: "classic",
    lines: [
      { item: "NYM-J 3x1.5 cable, 100 m", inv: "12 × 64.20", po: "12 × 64.20", status: "agrees", conf: 99 },
      { item: "NYM-J 5x2.5 cable, 50 m", inv: "6 × 88.90", po: "6 × 84.50", status: "price", conf: 97 },
      { item: "Cable ties 200 mm, 100 pcs", inv: "40 × 3.10", po: "40 × 3.10", status: "agrees", conf: 98 },
      { item: "Conduit 20 mm, 3 m", inv: "50 × 2.45", po: "50 × 2.45", status: "agrees", conf: 96 },
    ],
  },
  {
    supplier: "Lighting supplier",
    number: "2026-11904",
    layout: "banded",
    lines: [
      { item: "LED panel 600x600, 36 W", inv: "24 × 31.00", po: "24 × 31.00", status: "agrees", conf: 99 },
      { item: "Emergency exit light", inv: "8 × 42.80", po: "10 × 42.80", status: "qty", conf: 94 },
      { item: "Downlight IP44, 8 W", inv: "60 × 9.75", po: "60 × 9.75", status: "agrees", conf: 98 },
      { item: "LED driver 40 W", inv: "24 × 12.40", po: "24 × 12.40", status: "agrees", conf: 95 },
    ],
  },
  {
    supplier: "Switchgear supplier",
    number: "F-77031",
    layout: "compact",
    lines: [
      { item: "MCB B16 1P", inv: "100 × 4.15", po: "100 × 4.15", status: "agrees", conf: 99 },
      { item: "RCD 40 A 30 mA", inv: "20 × 27.60", po: "20 × 27.60", status: "agrees", conf: 98 },
      { item: "Junction box IP65", inv: "35 × 5.90", po: "35 × 5.90", status: "agrees", conf: 97 },
      { item: "DIN rail enclosure, 24 modules", inv: "6 × 58.00", po: "6 × 52.00", status: "price", conf: 96 },
    ],
  },
];

export const STATUS_LABEL: Record<LineStatus, string> = {
  agrees: "Agrees",
  price: "Price differs",
  qty: "Quantity short",
};
