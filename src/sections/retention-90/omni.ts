/* What the Omnisend nurture emails and segments need about one scan. Client-safe: no keys.
   Contact properties are all strings prefixed r90_, tags are retention-90 / r90-*.
   The templates read [[contact.custom_properties.r90_*]]; the flow splits on the tags. */
import { COPY } from "./copy";
import { fmt } from "./scoring";
import { gapRows } from "./Summary";

export const OMNI_BASE_TAG = "retention-90";

const FOCUS_BY_GAP: Record<string, string> = {
  "Email + SMS revenue share": "flows",
  "Flow coverage": "flows",
  "Cart & checkout recovery": "cart",
  "SMS programme": "sms",
  "Replenishment & subscription": "repl",
  "Discount dependency": "disc",
};
const QKEY_BY_GAP: Record<string, string> = {
  "Email + SMS revenue share": "share",
  "Flow coverage": "flows",
  "Cart & checkout recovery": "cart",
  "SMS programme": "sms",
  "Replenishment & subscription": "repl",
  "Discount dependency": "disc",
};

export function revBand(rev: number): "small" | "mid" | "large" {
  return rev < 50000 ? "small" : rev < 150000 ? "mid" : "large";
}

export function buildOmni(store: string, answers: Record<string, number>, labels: Record<string, string>, score: number, leak: number, bandHead: string) {
  const { rows } = gapRows(answers, labels);
  const top = rows.slice(0, 3);
  /* revenue share has no playbook email of its own: the focus is the weakest concrete area */
  const focusRow = rows.find((r) => r.tier > 0 && r.g.n !== "Email + SMS revenue share") || rows.find((r) => r.g.n === "Flow coverage") || rows[0];
  const focus = FOCUS_BY_GAP[focusRow.g.n] || "flows";
  const band = revBand(answers.rev);
  const props: Record<string, string> = {
    r90_store: store,
    r90_score: String(score),
    r90_upside: fmt(leak),
    r90_revenue: labels.rev || "",
    r90_rev_band: band,
    r90_band_head: bandHead,
    r90_focus: focus,
    r90_focus_answer: labels[QKEY_BY_GAP[focusRow.g.n]] || focusRow.lbl,
    r90_scan_date: new Date().toISOString().slice(0, 10),
  };
  top.forEach((r, i) => {
    const n = i + 1;
    props[`r90_gap${n}_name`] = r.g.n === "SMS programme" ? "SMS program" : r.g.n;
    props[`r90_gap${n}_answer`] = labels[QKEY_BY_GAP[r.g.n]] || r.lbl;
    props[`r90_gap${n}_verdict`] = r.v;
  });
  const tags = [OMNI_BASE_TAG, `r90-band-${band}`, `r90-focus-${focus}`];
  return { props, tags };
}

export const OMNI_BAND_HEAD = (score: number) =>
  (score < 40 ? COPY.bands.critical : score < 60 ? COPY.bands.leaking : score < 78 ? COPY.bands.average : COPY.bands.strong).head;
