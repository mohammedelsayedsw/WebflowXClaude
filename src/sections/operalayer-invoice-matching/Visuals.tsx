"use client";

import { motion } from "motion/react";
import { Camera, UploadCloud, FileText, Copy, ArrowRight } from "lucide-react";
import { useSeq } from "@/sections/operalayer/kit/parts";
import { C, Window, Tag, Tick, AppButton, ease } from "@/sections/operalayer/kit/ui";

/**
 * The invoice app's own screens, drawn with the OperaLayer kit. Suppliers,
 * numbers and messages come from the OperaLayer demo app.
 */

const box = (fs = "clamp(10px,1.35cqw,14px)") => ({ containerType: "inline-size" as const, fontSize: fs });

/* ---------- Demo: the Invoices list filling in as documents are read ---------- */

type Row = {
  who: string;
  doc: string;
  amt: string;
  tone: "mint" | "orange" | "blue" | "dim";
  status: string;
  note?: string;
};

const LIST: Row[] = [
  { who: "Baltic Fasteners SIA", doc: "INV-BF-2244", amt: "198,50 €", tone: "mint", status: "Confirmed" },
  { who: "Cascade Cable Works GmbH", doc: "INV-CC-3420", amt: "274,00 €", tone: "mint", status: "Ready to export" },
  { who: "Ferrum Metalworks Ltd", doc: "INV-demo-inv-pair-blocked", amt: "1 920,00 €", tone: "orange", status: "Price mismatch", note: "+192,00 € on line 1" },
  { who: "Cascade Cable Works GmbH", doc: "INV-19022", amt: "55,20 €", tone: "orange", status: "Possible duplicate", note: "Matches an invoice already received" },
  { who: "Elektra Components UAB", doc: "INV-55298", amt: "476,70 €", tone: "orange", status: "Quantity mismatch" },
  { who: "Polarveld Industrial Oy", doc: "INV-PV-1001", amt: "202,40 €", tone: "blue", status: "No PO match" },
  { who: "NordTool Distribution AB", doc: "CN-NT-8803", amt: "−23,80 €", tone: "mint", status: "Credit note" },
  { who: "Cascade Cable Works GmbH", doc: "SCAN_0092", amt: "", tone: "orange", status: "Error", note: "Scan too low-resolution, re-scan at 300 dpi" },
];

export function InvoiceList() {
  const { ref, t } = useSeq(LIST.length + 1, 380, 500);
  const read = Math.min(t, LIST.length);
  const open = LIST.slice(0, read).filter((r) => r.tone !== "mint").length;
  return (
    <div ref={ref} style={box()}>
      <Window title="app.operalayer / invoices">
        <div className="flex flex-wrap items-center gap-x-[1.4em] gap-y-2 px-[1.6em] py-[1.1em] border-b" style={{ borderColor: C.line }}>
          <span className="font-semibold" style={{ fontSize: "1.25em" }}>
            Invoices
          </span>
          {["All", "Needs review", "Confirmed", "Posted"].map((f, i) => (
            <span
              key={f}
              className="rounded-[2px] px-[0.7em] py-[0.25em]"
              style={{ background: i === 0 ? "rgba(255,255,255,0.08)" : "transparent", color: i === 0 ? C.text : C.faint }}
            >
              {f}
            </span>
          ))}
          <span className="ml-auto flex items-center gap-[1em]" style={{ color: C.dim }}>
            <span>
              <b className="font-semibold tabular-nums" style={{ color: C.text }}>
                {read}
              </b>{" "}
              read
            </span>
            <span>
              <b className="font-semibold tabular-nums" style={{ color: open ? C.orange : C.text }}>
                {open}
              </b>{" "}
              need a person
            </span>
          </span>
        </div>

        <div className="hidden sm:grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_6em_11em] gap-x-[1.2em] px-[1.6em] py-[0.6em]" style={{ color: C.faint, fontSize: "0.85em", background: "#080b18" }}>
          <span>Supplier</span>
          <span>Document</span>
          <span className="text-right">Amount</span>
          <span className="text-right">Status</span>
        </div>

        <div>
          {LIST.map((r, i) => {
            const shown = read > i;
            return (
              <motion.div
                key={r.doc}
                className="grid grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_6em_11em] gap-x-[1.2em] gap-y-1 items-center px-[1.6em] py-[0.85em] border-t"
                style={{ borderColor: C.line }}
                initial={false}
                animate={{
                  opacity: shown ? 1 : 0.28,
                  backgroundColor: shown && r.tone === "orange" ? "rgba(255,90,49,0.06)" : "rgba(0,0,0,0)",
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="min-w-0">
                  <div className="truncate">{r.who}</div>
                  {r.note && shown && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="truncate"
                      style={{ color: r.tone === "orange" ? C.orange : C.dim, fontSize: "0.85em" }}
                    >
                      {r.note}
                    </motion.div>
                  )}
                </div>
                <span className="hidden sm:block font-mono truncate" style={{ color: C.dim, fontSize: "0.9em" }}>
                  {r.doc}
                </span>
                <span className="hidden sm:block text-right font-mono" style={{ color: C.dim }}>
                  {r.amt}
                </span>
                <span className="flex justify-end">
                  {shown ? (
                    <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, ease }}>
                      <Tag tone={r.tone}>{r.status}</Tag>
                    </motion.span>
                  ) : (
                    <Tag tone="dim">Reading</Tag>
                  )}
                </span>
              </motion.div>
            );
          })}
        </div>
      </Window>
    </div>
  );
}

/* ---------- Step 1: capture ---------- */

export function CaptureVisual() {
  const { ref, t } = useSeq(6, 300);
  const files = ["Rechnung_INV-CC-3420.pdf", "INV-BF-2244.pdf", "Foto_2026-08-25.jpg", "INV-55298.pdf", "CN-NT-8803.pdf"];
  return (
    <div ref={ref} style={box()}>
      <Window title="Add documents">
        <div className="p-[1.6em] grid grid-cols-[minmax(0,1fr)] sm:grid-cols-2 gap-[1em]">
          {[
            { icon: Camera, t: "Use camera", s: "Multi-page documents, straight from a phone" },
            { icon: UploadCloud, t: "Drop files", s: "PDF, JPG, PNG, or WebP, up to 50 files at a time" },
          ].map((x, i) => (
            <div
              key={x.t}
              className="rounded-[2px] p-[1.2em] flex gap-[0.9em] items-start"
              style={{ boxShadow: `inset 0 0 0 1px ${i === 1 ? "rgba(110,247,110,0.45)" : C.line}`, background: i === 1 ? "rgba(110,247,110,0.05)" : "transparent" }}
            >
              <x.icon style={{ width: "1.4em", height: "1.4em", color: i === 1 ? C.mint : C.dim }} />
              <div>
                <div className="font-semibold">{x.t}</div>
                <div style={{ color: C.dim, fontSize: "0.9em" }}>{x.s}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="px-[1.6em] pb-[1.6em]">
          <div style={{ color: C.faint, fontSize: "0.85em" }}>Processing queue</div>
          <div className="mt-[0.6em] border-t" style={{ borderColor: C.line }}>
            {files.map((f, i) => (
              <motion.div
                key={f}
                className="flex items-center gap-[0.8em] py-[0.7em] border-b"
                style={{ borderColor: C.line }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: t > i ? 1 : 0, x: t > i ? 0 : -10 }}
                transition={{ duration: 0.35, ease }}
              >
                <FileText style={{ width: "1.1em", height: "1.1em", color: C.dim }} />
                <span className="flex-1 truncate font-mono" style={{ fontSize: "0.92em" }}>
                  {f}
                </span>
                <Tag tone={t > i + 1 ? "mint" : "blue"}>{t > i + 1 ? "Read" : "In queue"}</Tag>
              </motion.div>
            ))}
          </div>
        </div>
      </Window>
    </div>
  );
}

/* ---------- Step 2: reading with confidence ---------- */

export function ReadingVisual() {
  const { ref, t } = useSeq(5, 450);
  const fields = [
    ["Supplier", "Cascade Cable Works GmbH"],
    ["Invoice number", "INV-CC-3420"],
    ["Purchase order", "I-PAS100202"],
    ["Net / gross", "274,00 € / 326,06 €"],
  ];
  return (
    <div ref={ref} style={box()} className="grid grid-cols-[minmax(0,1fr)] sm:grid-cols-[42%_minmax(0,1fr)] gap-[1.2em] items-center">
      <div className="bg-white rounded-[2px] p-[7%] text-[#14151c]" style={{ fontSize: "0.72em", boxShadow: "0 30px 60px -30px rgba(0,0,0,0.9)" }}>
        <div className="flex justify-between font-bold">
          <span>CASCADE CABLE WORKS</span>
          <span style={{ color: "#c8581f" }}>RECHNUNG</span>
        </div>
        <div className="mt-[6%] h-[2px]" style={{ background: "#c8581f" }} />
        {["Bestell-Nr. I-PAS100202", "H07RN-F 5G4mm² control cable   80 m   228,00", "Cable gland M20 IP68   40 pc   46,00", "Gesamtbetrag   326,06 EUR"].map((l, i) => (
          <motion.div
            key={l}
            className="mt-[6%] px-[3%] py-[3%] font-mono whitespace-pre truncate"
            initial={false}
            animate={{ backgroundColor: t > i ? "rgba(123,134,232,0.16)" : "rgba(0,0,0,0)" }}
          >
            {l}
          </motion.div>
        ))}
      </div>
      <Window>
        <div className="p-[1.4em]">
          <div className="flex items-center justify-between">
            <span style={{ color: C.dim }}>Read from the PDF</span>
            <Tag tone={t >= 5 ? "mint" : "blue"}>{t >= 5 ? "88% confident" : "Reading"}</Tag>
          </div>
          <div className="mt-[1em] border-t" style={{ borderColor: C.line }}>
            {fields.map(([k, v], i) => (
              <motion.div
                key={k}
                className="flex items-center justify-between gap-3 py-[0.75em] border-b"
                style={{ borderColor: C.line }}
                initial={false}
                animate={{ opacity: t > i ? 1 : 0.3 }}
              >
                <span style={{ color: C.faint }}>{k}</span>
                <span className="truncate font-medium">{t > i ? v : "…"}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-[1em]" style={{ color: C.faint, fontSize: "0.88em" }}>
            Language detected as German. Layout remembered for this supplier.
          </div>
        </div>
      </Window>
    </div>
  );
}

/* ---------- Step 3: line check against the PO ---------- */

export function LineCheckVisual() {
  const { ref, t } = useSeq(4, 650);
  return (
    <div ref={ref} style={box()}>
      <Window title="Ferrum Metalworks Ltd · checked against I-PAS100107">
        <div className="p-[1.6em]">
          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_2em] gap-x-[1em] pb-[0.7em]" style={{ color: C.faint, fontSize: "0.85em" }}>
            <span>FX-MP-1006, mounting plate</span>
            <span>On the invoice</span>
            <span>Purchase order in Navision</span>
            <span />
          </div>
          {[
            ["Item code", "FX-MP-1006", "FX-MP-1006", true],
            ["Quantity", "3 pc", "3 pc", true],
            ["Unit price", "832,00 €", "640,00 €", false],
          ].map(([k, a, b, ok], i) => (
            <motion.div
              key={String(k)}
              className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_2em] gap-x-[1em] items-center py-[0.85em] border-t"
              style={{ borderColor: C.line }}
              initial={false}
              animate={{ backgroundColor: !ok && t > i ? "rgba(255,90,49,0.07)" : "rgba(0,0,0,0)" }}
            >
              <span style={{ color: C.dim }}>{k}</span>
              <span className="font-mono" style={{ color: !ok && t > i ? C.orange : C.text }}>
                {a}
              </span>
              <span className="font-mono">{b}</span>
              <span className="flex justify-end">
                <Tick on={t > i} bad={!ok} />
              </span>
            </motion.div>
          ))}
          <div className="mt-[1.2em]">
            <div className="flex justify-between" style={{ color: C.faint, fontSize: "0.85em" }}>
              <span>Price tolerance you set</span>
              <span>+192,00 € over</span>
            </div>
            <div className="mt-[0.5em] relative h-[0.5em] rounded-[1px]" style={{ background: "rgba(255,255,255,0.07)" }}>
              <span className="absolute inset-y-0 left-0 w-[30%] rounded-[1px]" style={{ background: "rgba(110,247,110,0.5)" }} />
              <motion.span
                className="absolute inset-y-0 left-0 rounded-[1px] origin-left"
                style={{ background: C.orange, width: "100%" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: t >= 3 ? 1 : 0 }}
                transition={{ duration: 0.9, ease }}
              />
            </div>
          </div>
          <motion.div
            className="mt-[1.2em] flex items-center justify-between gap-3 rounded-[2px] px-[1em] py-[0.8em]"
            style={{ background: "rgba(255,90,49,0.08)", boxShadow: "inset 0 0 0 1px rgba(255,90,49,0.35)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: t >= 4 ? 1 : 0 }}
          >
            <span style={{ color: C.orange }}>Large price difference on line 1</span>
            <Tag tone="orange">Export blocked</Tag>
          </motion.div>
        </div>
      </Window>
    </div>
  );
}

/* ---------- Step 4: duplicate caught ---------- */

export function DuplicateVisual() {
  const { ref, t } = useSeq(3, 700);
  const docs = [
    { label: "Received 22 Jul", amt: "55,20 €", status: "Confirmed" },
    { label: "Uploaded again", amt: "135,00 €", status: "Possible duplicate" },
  ];
  return (
    <div ref={ref} style={box()}>
      <Window title="Cascade Cable Works GmbH · INV-19022">
        <div className="p-[1.6em] grid grid-cols-[minmax(0,1fr)] sm:grid-cols-2 gap-[1em]">
          {docs.map((d, i) => (
            <motion.div
              key={d.label}
              className="rounded-[2px] p-[1.2em]"
              style={{ boxShadow: `inset 0 0 0 1px ${i === 1 && t >= 2 ? "rgba(255,90,49,0.5)" : C.line}` }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: t > i ? 1 : 0, y: t > i ? 0 : 10 }}
              transition={{ duration: 0.4, ease }}
            >
              <div className="flex items-center gap-[0.6em]" style={{ color: C.dim }}>
                <Copy style={{ width: "1em", height: "1em" }} /> {d.label}
              </div>
              <div className="mt-[0.8em] font-mono font-semibold" style={{ fontSize: "1.3em" }}>
                INV-19022
              </div>
              <div className="mt-[0.3em] flex items-center justify-between">
                <span className="font-mono" style={{ color: C.dim }}>
                  {d.amt}
                </span>
                <Tag tone={i === 0 ? "mint" : "orange"}>{d.status}</Tag>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mx-[1.6em] mb-[1.6em] rounded-[2px] px-[1em] py-[0.8em]"
          style={{ background: "rgba(255,90,49,0.08)", color: C.orange }}
          initial={{ opacity: 0 }}
          animate={{ opacity: t >= 3 ? 1 : 0 }}
        >
          Same supplier and invoice number as a document already received. Nothing is paid twice until a person decides.
        </motion.div>
      </Window>
    </div>
  );
}

/* ---------- Step 5: approve and export to Navision ---------- */

export function ExportVisual() {
  const { ref, t } = useSeq(4, 700);
  return (
    <div ref={ref} style={box()}>
      <Window title="Cascade Cable Works GmbH · INV-CC-3420">
        <div className="p-[1.6em]">
          <div className="flex items-center justify-between">
            <span style={{ color: C.dim }}>2 of 2 lines agree with the order</span>
            <Tag tone="mint">Ready to export</Tag>
          </div>
          <div className="mt-[1em] border-t" style={{ borderColor: C.line }}>
            {[
              ["Posting user", "DEMO\\ADMIN"],
              ["Posting date", "01/10/2026"],
              ["Purchase order", "I-PAS100202"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between py-[0.75em] border-b" style={{ borderColor: C.line }}>
                <span style={{ color: C.faint }}>{k}</span>
                <span className="font-mono">{v}</span>
              </div>
            ))}
          </div>
          <div className="mt-[1.4em] flex flex-wrap items-center gap-[0.8em]">
            <AppButton state={t >= 2 ? 2 : t >= 1 ? 1 : 0} idle="Confirm all" busy="Confirm all" done="Confirmed" />
            <ArrowRight style={{ width: "1.1em", height: "1.1em", color: C.faint }} />
            <AppButton state={t >= 4 ? 2 : t >= 3 ? 1 : 0} idle="Export to Navision" busy="Export to Navision" done="Posted in Navision" />
          </div>
          <motion.div
            className="mt-[1.2em]"
            style={{ color: C.faint, fontSize: "0.88em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: t >= 4 ? 1 : 0 }}
          >
            Who confirmed it and when is kept in the audit trail.
          </motion.div>
        </div>
      </Window>
    </div>
  );
}
