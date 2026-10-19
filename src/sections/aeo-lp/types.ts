import type { Funnel } from "./config";

export type Field = { key: string; label: string; ph?: string; type?: string; area?: boolean; req?: boolean; url?: boolean };

export type QStep =
  | { type: "single"; key: string; q: string; options: string[] }
  | { type: "multi"; key: string; q: string; options: string[]; hint?: string; cap?: number; other?: { key: string; label: string } }
  | { type: "fields"; q: string; fields: Field[]; note?: string }
  | { type: "contact"; q: string; fields: Field[] };

export type QuizData = Record<string, string | string[]>;
export type Utm = { utm_source: string; utm_medium: string; utm_campaign: string; utm_content: string; angle: string };

export type ReportTab = { tab: string; rows: [string, "red" | "amb" | "ok", string][] };

export type AnswerCard = { q: string; h: string[] };
export type Result = { n: string; l: string; who: string };
export type Guide = { k: string; t: string; d: string; stat: string; img: string; body: string[] };

export type FunnelCfg = {
  fn: Funnel;
  cta: string;
  headerCta: string;
  cards: AnswerCard[];
  warn: string;
  cardFoot?: string;
  results: Result[];
  guides: Guide[];
  vertical: "clinic" | "hotel";
  book: { title: string; body: string; points: string[] };
  pixel: { lead: string; call: string };
  newsletter: { title: string; body: string; ph: string; ok: string; subject: string };
  quiz: {
    steps: QStep[];
    submitLabel: string;
    finalNote: string;
    doneTitle: string;
    doneBody: string;
    companyKey: string;
    companyLabel: string;
    /* FormSubmit payload: field names and subject identical to the scandiweb.ai pages. */
    lead: (d: QuizData, utm: Utm) => Record<string, string>;
    /* Non-PII answers for dataLayer / hub. */
    summary: (d: QuizData) => Record<string, string>;
  };
};

/* Option values stay exactly as on scandiweb.ai (they land in the lead email); only the
   label shown on the page swaps en dashes and straight apostrophes for the house style. */
export const disp = (v: string) => v.replace(/–/g, "-").replace(/'/g, "’");

export const str = (d: QuizData, k: string) => (typeof d[k] === "string" ? (d[k] as string) : "");
export const list = (d: QuizData, k: string) => (Array.isArray(d[k]) ? (d[k] as string[]) : []);
