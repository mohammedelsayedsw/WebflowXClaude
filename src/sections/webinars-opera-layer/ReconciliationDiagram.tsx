"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * Document-reconciliation flow, rebuilt from the production system diagram as a
 * vertical, seven-stage flow. Boxes are HTML (text stays at body size and
 * stacks on mobile); the connectors are an SVG overlay whose paths are measured
 * from the boxes, so they stay correct on resize. On scroll into view the
 * connectors light up in flow order, loop with a pause, and are shown fully lit
 * with no motion when the visitor prefers reduced motion.
 */

type Tone = "external" | "actor" | "process" | "resolved" | "archived" | "ai";

const TONE: Record<Tone, { border: string; label: string }> = {
  external: { border: "rgba(245,176,66,0.55)", label: "#f5b042" },
  actor: { border: "rgba(110,247,110,0.5)", label: "#6ef76e" },
  process: { border: "rgba(255,255,255,0.16)", label: "rgba(255,255,255,0.55)" },
  resolved: { border: "rgba(110,247,110,0.4)", label: "#6ef76e" },
  archived: { border: "rgba(224,79,79,0.6)", label: "#e8706e" },
  ai: { border: "rgba(168,132,255,0.65)", label: "#b7a0ff" },
};

function Box({
  tag,
  title,
  desc,
  tone = "process",
  boxRef,
}: {
  tag?: string;
  title: string;
  desc?: string;
  tone?: Tone;
  boxRef?: React.Ref<HTMLDivElement>;
}) {
  const t = TONE[tone];
  return (
    <div
      ref={boxRef}
      className="relative z-10 h-full rounded-[4px] bg-white/[0.035] px-4 py-3.5 md:px-5 md:py-4"
      style={{ border: `1px solid ${t.border}` }}
    >
      {tag && (
        <div
          className="font-head text-[13px] md:text-[14px] font-semibold uppercase tracking-[0.1em] mb-1.5"
          style={{ color: t.label }}
        >
          {tag}
        </div>
      )}
      <div className="font-head text-white text-[17px] md:text-[19px] leading-[1.2]">
        {title}
      </div>
      {desc && (
        <div className="text-white/65 text-[15px] md:text-[16px] leading-snug mt-1.5">
          {desc}
        </div>
      )}
    </div>
  );
}

function StageLabel({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span
        className="font-head inline-flex h-7 min-w-7 items-center justify-center rounded-[3px] px-2 text-[14px] font-bold text-[var(--sw-black)]"
        style={{ background: "var(--sw-mint)" }}
      >
        {n}
      </span>
      <span className="label-code text-[13px] md:text-[14px] text-white/60">
        {children}
      </span>
    </div>
  );
}

type Conn = { id: string; d: string; dashed?: boolean; group: number };
type Label = { x: number; y: number; text: string };

// Lighting order: trunk 1>2>3>4, then the stage5>6 branch group, then 6>7,
// then the AI-learning loop back up. One entry per group.
const GROUP_ORDER = [0, 1, 2, 3, 4, 5, 6];

export function ReconciliationDiagram() {
  const wrapRef = useRef<HTMLDivElement>(null);

  // measured anchors
  const s1 = useRef<HTMLDivElement>(null);
  const s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null);
  const s4 = useRef<HTMLDivElement>(null);
  const diamond = useRef<HTMLDivElement>(null);
  const exportDN = useRef<HTMLDivElement>(null);
  const exportInv = useRef<HTMLDivElement>(null);
  const archived = useRef<HTMLDivElement>(null);
  const cmrRecon = useRef<HTMLDivElement>(null);
  const s6 = useRef<HTMLDivElement>(null);
  const s7 = useRef<HTMLDivElement>(null);
  const aiLearning = useRef<HTMLDivElement>(null);

  const pathEls = useRef<Record<string, SVGPathElement | null>>({});
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [conns, setConns] = useState<Conn[]>([]);
  const [labels, setLabels] = useState<Label[]>([]);

  const measure = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const c = wrap.getBoundingClientRect();
    const rel = (el: HTMLElement | null) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        cx: r.left - c.left + r.width / 2,
        top: r.top - c.top,
        bottom: r.bottom - c.top,
        left: r.left - c.left,
        right: r.right - c.left,
        cy: r.top - c.top + r.height / 2,
      };
    };

    const A = {
      s1: rel(s1.current),
      s2: rel(s2.current),
      s3: rel(s3.current),
      s4: rel(s4.current),
      diamond: rel(diamond.current),
      exportDN: rel(exportDN.current),
      exportInv: rel(exportInv.current),
      archived: rel(archived.current),
      cmrRecon: rel(cmrRecon.current),
      s6: rel(s6.current),
      s7: rel(s7.current),
      ai: rel(aiLearning.current),
    };
    if (Object.values(A).some((v) => v === null)) return;

    // vertical connector with a smooth S-curve when x drifts
    const vlink = (x1: number, y1: number, x2: number, y2: number) => {
      const my = y1 + (y2 - y1) / 2;
      return `M ${x1} ${y1} C ${x1} ${my} ${x2} ${my} ${x2} ${y2}`;
    };

    const next: Conn[] = [
      { id: "t1", group: 0, d: vlink(A.s1!.cx, A.s1!.bottom, A.s2!.cx, A.s2!.top) },
      { id: "t2", group: 1, d: vlink(A.s2!.cx, A.s2!.bottom, A.s3!.cx, A.s3!.top) },
      { id: "t3", group: 2, d: vlink(A.s3!.cx, A.s3!.bottom, A.s4!.cx, A.s4!.top) },
      { id: "t4", group: 3, d: vlink(A.s4!.cx, A.s4!.bottom, A.diamond!.cx, A.diamond!.top) },
      // stage 5 -> 6 branches
      { id: "no", group: 4, d: vlink(A.diamond!.cx, A.diamond!.bottom, A.exportDN!.cx, A.exportDN!.top) },
      { id: "yes", group: 4, d: vlink(A.diamond!.cx, A.diamond!.bottom, A.exportInv!.cx, A.exportInv!.top) },
      // CMR reconciliation skips the diamond and goes straight to Archived
      { id: "arch", group: 4, d: vlink(A.cmrRecon!.cx, A.cmrRecon!.bottom, A.archived!.cx, A.archived!.top) },
      // stage 6 -> 7
      { id: "t6", group: 5, d: vlink(A.exportInv!.cx, A.s6!.bottom, A.s7!.cx, A.s7!.top) },
      // AI-learning loop back up into stage 4 (dashed)
      {
        id: "loop",
        group: 6,
        dashed: true,
        d: `M ${A.ai!.cx} ${A.ai!.top} C ${A.ai!.cx} ${A.ai!.top - 60} ${A.s4!.right + 40} ${A.s4!.cy} ${A.s4!.right} ${A.s4!.cy}`,
      },
    ];

    setLabels([
      { x: (A.diamond!.cx + A.exportDN!.cx) / 2 - 16, y: (A.diamond!.bottom + A.exportDN!.top) / 2, text: "No" },
      { x: (A.diamond!.cx + A.exportInv!.cx) / 2 + 4, y: (A.diamond!.bottom + A.exportInv!.top) / 2, text: "Yes, invoice first" },
    ]);
    setConns(next);
    setSize({ w: c.width, h: c.height });
  }, []);

  useLayoutEffect(() => {
    measure();
    const wrap = wrapRef.current;
    if (!wrap) return;
    const ro = new ResizeObserver(measure);
    ro.observe(wrap);
    const t1 = window.setTimeout(measure, 400); // after web fonts settle
    const t2 = window.setTimeout(measure, 1200);
    return () => {
      ro.disconnect();
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [measure]);

  // Sequenced lighting, gated on scroll into view. Reduced motion: all lit.
  useEffect(() => {
    if (conns.length === 0) return;
    const wrap = wrapRef.current;
    if (!wrap) return;

    const setLit = (ids: string[], lit: boolean) => {
      ids.forEach((id) => {
        const el = pathEls.current[`glow-${id}`];
        if (el) el.classList.toggle("dg-lit", lit);
      });
    };
    const idsInGroup = (g: number) => conns.filter((c) => c.group === g).map((c) => c.id);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      conns.forEach((c) => setLit([c.id], true));
      return;
    }

    let cancelled = false;
    const wait = (ms: number) => new Promise<void>((r) => window.setTimeout(r, ms));

    const run = async () => {
      while (!cancelled) {
        conns.forEach((c) => setLit([c.id], false));
        await wait(300);
        for (const g of GROUP_ORDER) {
          if (cancelled) return;
          setLit(idsInGroup(g), true);
          await wait(360); // < transition time, so connectors overlap into flow
        }
        await wait(2000); // hold the finished diagram, then loop
      }
    };

    let started = false;
    const startIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            run();
          }
        });
      },
      { threshold: 0.25 }
    );
    startIo.observe(wrap);

    return () => {
      cancelled = true;
      startIo.disconnect();
    };
  }, [conns]);

  const setGlowRef = (id: string) => (el: SVGPathElement | null) => {
    pathEls.current[`glow-${id}`] = el;
  };

  // 3-box row helper class
  const row3 = "grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4";

  return (
    <div>
      <div ref={wrapRef} className="relative">
        {/* connector overlay */}
        {size.w > 0 && (
          <svg
            className="pointer-events-none absolute inset-0 z-0"
            width={size.w}
            height={size.h}
            viewBox={`0 0 ${size.w} ${size.h}`}
            preserveAspectRatio="none"
            aria-hidden
          >
            {conns.map((c) => (
              <path
                key={`base-${c.id}`}
                d={c.d}
                fill="none"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth={2}
                strokeDasharray={c.dashed ? "6 6" : undefined}
              />
            ))}
            {conns.map((c) => (
              <path
                key={`glow-${c.id}`}
                ref={setGlowRef(c.id)}
                className="dg-glow"
                d={c.d}
                fill="none"
                stroke="var(--sw-mint)"
                strokeWidth={2.5}
                pathLength={1}
                strokeDasharray={c.dashed ? "0.06 0.06" : 1}
                strokeDashoffset={1}
              />
            ))}
            {labels.map((l) => (
              <text
                key={l.text}
                x={l.x}
                y={l.y}
                className="font-head"
                fontSize={14}
                fill="rgba(255,255,255,0.6)"
                textAnchor="middle"
              >
                {l.text}
              </text>
            ))}
          </svg>
        )}

        {/* ---- STAGE 1 · sources ---- */}
        <div ref={s1}>
          <StageLabel n={1}>Where the documents come from</StageLabel>
          <div className={row3}>
            <Box
              tone="external"
              tag="External system"
              title="Microsoft Dynamics NAV"
              desc="Source of purchase orders"
            />
            <Box
              tone="actor"
              tag="Person"
              title="Warehouse"
              desc="Uploads delivery note, delivery note plus invoice, transport waybill"
            />
            <Box
              tone="actor"
              tag="Person"
              title="Accountant"
              desc="Uploads invoices"
            />
          </div>
        </div>

        {/* ---- OperaLayer boundary wraps stages 2 to 6 ---- */}
        <div
          className="relative mt-9 rounded-[6px] px-4 pb-8 pt-11 md:px-6"
          style={{ border: "1px solid rgba(110,247,110,0.28)" }}
        >
          <div
            className="font-head absolute left-4 top-0 -translate-y-1/2 rounded-[3px] px-3 py-1 text-[14px] font-bold text-[var(--sw-black)] md:left-6"
            style={{ background: "var(--sw-mint)" }}
          >
            OperaLayer
          </div>

          {/* STAGE 2 · import */}
          <div ref={s2}>
            <StageLabel n={2}>Import into OperaLayer</StageLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
              <Box tone="process" title="PO Import" desc="ERP sync" />
              <Box tone="process" title="Delivery Note Import" desc="PDF or photo upload" />
              <Box tone="process" title="Delivery Note + Invoice Import" desc="One combined file" />
              <Box tone="process" title="CMR Import" desc="Transport waybill upload" />
              <Box tone="process" title="Invoice Import" desc="PDF or photo upload" />
            </div>
          </div>

          {/* STAGE 3 · read and resolve */}
          <div ref={s3} className="mt-9">
            <StageLabel n={3}>Read and resolve</StageLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <Box
                tone="process"
                title="AI Extraction and OCR"
                desc="Reads the document, per-supplier hints applied"
              />
              <Box
                tone="resolved"
                title="Purchase Orders"
                desc="Resolved PO lines, ready to match"
              />
            </div>
          </div>

          {/* STAGE 4 · reconciliation */}
          <div ref={s4} className="mt-9">
            <StageLabel n={4}>Reconciliation</StageLabel>
            <div className={row3}>
              <Box
                tone="process"
                title="Delivery Note Reconciliation"
                desc="Match delivery note lines to PO lines"
              />
              <Box
                boxRef={cmrRecon}
                tone="process"
                title="CMR Reconciliation"
                desc="Link waybill to PO, no export"
              />
              <Box
                tone="process"
                title="Invoice Reconciliation"
                desc="Match invoice lines to PO lines"
              />
            </div>
          </div>

          {/* AI learning · side loop */}
          <div className="mt-8 flex justify-end">
            <div ref={aiLearning} className="w-full sm:w-[62%] lg:w-[46%]">
              <Box
                tone="ai"
                tag="Feedback loop"
                title="AI Learning"
                desc="SKU aliases, pack and unit factors, per-supplier hints. This is the loop that makes it more accurate over time."
              />
            </div>
          </div>

          {/* STAGE 5 · decision */}
          <div className="mt-9 flex flex-col items-center">
            <StageLabel n={5}>Decision</StageLabel>
            <div
              ref={diamond}
              className="relative flex items-center justify-center text-center"
              style={{ width: 260, height: 150 }}
            >
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background: "rgba(168,132,255,0.10)",
                  border: "1px solid rgba(168,132,255,0.5)",
                  transform: "rotate(45deg) scale(0.72)",
                  borderRadius: 6,
                }}
              />
              <div className="relative px-6">
                <div className="font-head text-white text-[16px] md:text-[17px] leading-tight">
                  Combined delivery note and invoice?
                </div>
                <div className="text-white/60 text-[14px] mt-1">
                  Which order should the export run in
                </div>
              </div>
            </div>
          </div>

          {/* STAGE 6 · result */}
          <div ref={s6} className="mt-9">
            <StageLabel n={6}>Result</StageLabel>
            <div className={row3}>
              <Box
                boxRef={exportDN}
                tone="process"
                title="Export Delivery Note to ERP"
                desc="Goods receipt"
              />
              <Box
                boxRef={exportInv}
                tone="process"
                title="Export Invoice to ERP"
                desc="Confirm and send"
              />
              <Box
                boxRef={archived}
                tone="archived"
                title="Archived"
                desc="The waybill is never sent to the ERP"
              />
            </div>
          </div>
        </div>

        {/* ---- STAGE 7 · back to the ERP ---- */}
        <div ref={s7} className="mt-9">
          <StageLabel n={7}>Back to the ERP</StageLabel>
          <Box
            tone="external"
            tag="External system"
            title="Microsoft Dynamics NAV"
            desc="Goods receipt posted, invoice posted"
          />
        </div>
      </div>

      <p className="mt-6 text-[14px] md:text-[15px] italic text-white/50">
        This is the real system running in production, not a mockup.
      </p>

      <style jsx>{`
        .dg-glow {
          opacity: 0;
          transition: stroke-dashoffset 520ms ease, opacity 200ms ease;
          filter: drop-shadow(0 0 4px rgba(110, 247, 110, 0.6));
        }
        .dg-glow.dg-lit {
          opacity: 1;
          stroke-dashoffset: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          .dg-glow {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
