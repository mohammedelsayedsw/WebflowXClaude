"use client";

/**
 * The complete reconciliation flow, drawn natively.
 *
 * Layout is column-based: each node carries an explicit x/y so the edge
 * router can stay dumb. Edges are orthogonal elbows; `bend` overrides the
 * midpoint when two elbows would otherwise share a vertical.
 */

const MINT = "#6EF76E"; // people
const AMBER = "#f0b429"; // your systems, external to OperaLayer
const PURPLE = "#8b7ee8"; // decisions and learning
const RED = "#b4453c"; // archived, never leaves OperaLayer
const PAPER = "255,255,255";

const NODE_W = 190;
const NODE_H = 92;
const DIA_W = 230;
const DIA_H = 130;

// SVG has no flexbox, so the title-plus-sub-lines block is measured and
// centred by hand. Every line is drawn with dominantBaseline="middle", so
// each y below is a line centre rather than a baseline.
const TITLE_LH = 15;
const SUB_LH = 12;
const TITLE_GAP = 5;

/** Line centres for a title + wrapped sub-lines block, centred in `boxH`. */
function centredLines(subCount: number, boxTop: number, boxH: number) {
  const blockH =
    TITLE_LH + (subCount ? TITLE_GAP + subCount * SUB_LH : 0);
  const top = boxTop + (boxH - blockH) / 2;
  return {
    title: top + TITLE_LH / 2,
    sub: (i: number) =>
      top + TITLE_LH + TITLE_GAP + i * SUB_LH + SUB_LH / 2,
  };
}

type NodeType =
  | "person"
  | "external"
  | "step"
  | "archived"
  | "learning"
  | "decision";

type Node = {
  id: string;
  type: NodeType;
  title: string;
  sub: string;
  x: number;
  y: number;
};

// Columns
const C0 = 20; // people and the ERP as a source
const C1 = 280; // PO sync and the uploads
const C2 = 540; // purchase orders and extraction
const C3 = 800; // reconciliation
const C4 = 1050; // first decision, archive, learning
const C5 = 1290; // second decision
const C6 = 1570; // exports
const C7 = 1830; // the ERP as a destination

const nodes: Node[] = [
  // People
  {
    id: "warehouse",
    type: "person",
    title: "Warehouse",
    sub: "Uploads delivery note, delivery note + invoice, or CMR",
    x: C0,
    y: 300,
  },
  {
    id: "accounting",
    type: "person",
    title: "Accounting",
    sub: "Uploads invoices",
    x: C0,
    y: 640,
  },

  // Your ERP, external on both ends
  {
    id: "erpSource",
    type: "external",
    title: "Your ERP",
    sub: "Source of purchase orders",
    x: C0,
    y: 40,
  },
  {
    id: "erpGoods",
    type: "external",
    title: "Your ERP",
    sub: "Goods receipt posted",
    x: C7,
    y: 180,
  },
  {
    id: "erpInvoice",
    type: "external",
    title: "Your ERP",
    sub: "Invoice posted",
    x: C7,
    y: 600,
  },

  // OperaLayer
  {
    id: "poSync",
    type: "step",
    title: "PO sync",
    sub: "Pulls purchase orders from your ERP",
    x: C1,
    y: 40,
  },
  {
    id: "purchaseOrders",
    type: "step",
    title: "Purchase orders",
    sub: "Lines ready to match",
    x: C2,
    y: 40,
  },
  {
    id: "dnUpload",
    type: "step",
    title: "Delivery note upload",
    sub: "PDF or photo",
    x: C1,
    y: 200,
  },
  {
    id: "dnInvUpload",
    type: "step",
    title: "Delivery note + invoice upload",
    sub: "One file, combined",
    x: C1,
    y: 310,
  },
  {
    id: "cmrUpload",
    type: "step",
    title: "CMR upload",
    sub: "Transport waybill",
    x: C1,
    y: 420,
  },
  {
    id: "invUpload",
    type: "step",
    title: "Invoice upload",
    sub: "PDF or photo",
    x: C1,
    y: 640,
  },
  {
    id: "extraction",
    type: "step",
    title: "AI extraction and OCR",
    sub: "AI reads the document, applies per-supplier hints",
    x: C2,
    y: 350,
  },
  {
    id: "dnRecon",
    type: "step",
    title: "Delivery note reconciliation",
    sub: "Match delivery note lines to PO lines",
    x: C3,
    y: 180,
  },
  {
    id: "cmrRecon",
    type: "step",
    title: "CMR reconciliation",
    sub: "Link CMR to PO, no export",
    x: C3,
    y: 420,
  },
  {
    id: "invRecon",
    type: "step",
    title: "Invoice reconciliation",
    sub: "Match invoice lines to PO lines",
    x: C3,
    y: 600,
  },
  {
    id: "archived",
    type: "archived",
    title: "Archived",
    sub: "CMR is never sent to your ERP",
    x: C4,
    y: 420,
  },
  {
    id: "exportDn",
    type: "step",
    title: "Export delivery note to ERP",
    sub: "Goods receipt",
    x: C6,
    y: 180,
  },
  {
    id: "exportInv",
    type: "step",
    title: "Export invoice to ERP",
    sub: "Confirm and send",
    x: C6,
    y: 600,
  },
  {
    id: "learning",
    type: "learning",
    title: "AI Learning",
    sub: "SKU aliases, pack and unit factors, per-supplier hints",
    x: C4,
    y: 790,
  },

  // Decisions
  {
    id: "combined",
    type: "decision",
    title: "Combined DN + Invoice?",
    sub: "Which order should export run in?",
    x: C4 - 20,
    y: 160,
  },
  {
    id: "blocked",
    type: "decision",
    title: "Invoice blocked?",
    sub: "Can it auto-export?",
    x: C5,
    y: 340,
  },
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

const w = (n: Node) => (n.type === "decision" ? DIA_W : NODE_W);
const h = (n: Node) => (n.type === "decision" ? DIA_H : NODE_H);
const midY = (n: Node) => n.y + h(n) / 2;

type Edge = {
  from: string;
  to: string;
  label?: string;
  dashed?: boolean;
  bend?: number;
  /** route out of the source's right edge, down, then into the target's left */
  drop?: number;
};

const edges: Edge[] = [
  { from: "erpSource", to: "poSync" },
  { from: "poSync", to: "purchaseOrders" },

  { from: "warehouse", to: "dnUpload", bend: 250 },
  { from: "warehouse", to: "dnInvUpload", bend: 258 },
  { from: "warehouse", to: "cmrUpload", bend: 266 },
  { from: "accounting", to: "invUpload" },

  { from: "dnUpload", to: "extraction", bend: 500 },
  { from: "dnInvUpload", to: "extraction", bend: 508 },
  { from: "cmrUpload", to: "extraction", bend: 516 },
  { from: "invUpload", to: "extraction", bend: 524 },

  { from: "extraction", to: "dnRecon", bend: 782 },
  { from: "extraction", to: "cmrRecon", bend: 774 },
  { from: "extraction", to: "invRecon", bend: 766 },

  { from: "purchaseOrders", to: "dnRecon", bend: 758 },
  { from: "purchaseOrders", to: "invRecon", bend: 748 },

  { from: "cmrRecon", to: "archived" },
  { from: "dnRecon", to: "combined" },

  { from: "combined", to: "exportDn", label: "No" },
  { from: "combined", to: "blocked", label: "Yes" },
  { from: "blocked", to: "exportInv", label: "No, invoice first" },
  { from: "blocked", to: "exportDn", label: "Combined case" },

  { from: "invRecon", to: "exportInv" },
  { from: "exportDn", to: "erpGoods" },
  { from: "exportInv", to: "erpInvoice" },

  // Corrections feed learning, which loops back into extraction
  { from: "dnRecon", to: "learning", dashed: true, drop: 1006 },
  { from: "cmrRecon", to: "learning", dashed: true, drop: 1018 },
  { from: "invRecon", to: "learning", dashed: true, drop: 1030 },
];

function edgePath(e: Edge) {
  const a = byId[e.from];
  const b = byId[e.to];
  const x1 = a.x + w(a);
  const y1 = midY(a);
  const y2 = midY(b);

  if (e.drop !== undefined) {
    // out the right edge, down past the column, then into the target's top
    const tx = b.x + w(b) / 2;
    return `M ${x1} ${y1} H ${e.drop} V ${b.y - 24} H ${tx} V ${b.y}`;
  }

  const x2 = b.x;
  const mx = e.bend ?? (x1 + x2) / 2;
  return `M ${x1} ${y1} H ${mx} V ${y2} H ${x2}`;
}

// The learning loop back into extraction, routed under the whole flow.
const learningLoop = (() => {
  const l = byId.learning;
  const x = byId.extraction;
  return `M ${l.x} ${midY(l)} H 505 V ${midY(x)} H ${x.x}`;
})();

function wrapText(text: string, max: number) {
  const out: string[] = [];
  let line = "";
  for (const word of text.split(" ")) {
    if (line && (line + " " + word).length > max) {
      out.push(line);
      line = word;
    } else {
      line = line ? line + " " + word : word;
    }
  }
  if (line) out.push(line);
  return out;
}

const styleFor = (t: NodeType) => {
  switch (t) {
    case "person":
      return { stroke: MINT, opacity: 0.7, fill: MINT, fillOpacity: 0.06, dash: "5 4", text: MINT };
    case "external":
      return { stroke: AMBER, opacity: 0.75, fill: AMBER, fillOpacity: 0.06, dash: "5 4", text: AMBER };
    case "archived":
      return { stroke: RED, opacity: 0.8, fill: RED, fillOpacity: 0.1, dash: "", text: "#e8918a" };
    case "learning":
      return { stroke: PURPLE, opacity: 0.75, fill: PURPLE, fillOpacity: 0.1, dash: "", text: PURPLE };
    default:
      return {
        stroke: `rgba(${PAPER},0.3)`,
        opacity: 1,
        fill: `rgba(${PAPER},0.045)`,
        fillOpacity: 1,
        dash: "",
        text: `rgba(${PAPER},0.95)`,
      };
  }
};

export function FullFlowDiagram() {
  return (
    <svg
      viewBox="0 0 2060 940"
      className="h-auto w-full"
      role="img"
      aria-label="The full document reconciliation flow. Warehouse and accounting upload delivery notes, combined delivery note and invoice files, CMRs, and invoices into OperaLayer. AI extraction reads each document, then delivery note, CMR, and invoice reconciliation match the lines against purchase orders synced from your ERP. CMRs are archived and never exported. Delivery notes and invoices export back to your ERP as a goods receipt and a posted invoice, with two decisions controlling the export order. Corrections from every reconciliation step feed AI Learning, which loops back into extraction."
    >
      <defs>
        <marker
          id="ff-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={`rgba(${PAPER},0.45)`} />
        </marker>
        <marker
          id="ff-arrow-learn"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={PURPLE} fillOpacity="0.75" />
        </marker>
      </defs>

      {/* OperaLayer boundary */}
      <rect
        x={255}
        y={10}
        width={1530}
        height={900}
        rx="10"
        fill={`rgba(${PAPER},0.018)`}
        stroke={`rgba(${PAPER},0.16)`}
        strokeWidth="1"
        strokeDasharray="8 6"
        vectorEffect="non-scaling-stroke"
      />
      <text
        x={275}
        y={36}
        className="font-head"
        fontSize="12"
        letterSpacing="1.6"
        fill={`rgba(${PAPER},0.4)`}
      >
        OPERALAYER
      </text>

      {/* Edges under the nodes */}
      {edges.map((e) => (
        <path
          key={`${e.from}-${e.to}-${e.label ?? ""}`}
          d={edgePath(e)}
          fill="none"
          stroke={e.dashed ? PURPLE : `rgba(${PAPER},0.32)`}
          strokeOpacity={e.dashed ? 0.55 : 1}
          strokeWidth="1.25"
          strokeDasharray={e.dashed ? "5 5" : undefined}
          markerEnd={`url(#${e.dashed ? "ff-arrow-learn" : "ff-arrow"})`}
          vectorEffect="non-scaling-stroke"
        />
      ))}
      <path
        d={learningLoop}
        fill="none"
        stroke={PURPLE}
        strokeOpacity="0.55"
        strokeWidth="1.25"
        strokeDasharray="5 5"
        markerEnd="url(#ff-arrow-learn)"
        vectorEffect="non-scaling-stroke"
      />

      {/* Edge labels */}
      {edges
        .filter((e) => e.label)
        .map((e) => {
          const a = byId[e.from];
          const b = byId[e.to];
          const x = e.bend ?? (a.x + w(a) + b.x) / 2;
          return (
            <text
              key={`lbl-${e.from}-${e.to}-${e.label}`}
              x={x + 6}
              y={(midY(a) + midY(b)) / 2}
              className="font-head"
              fontSize="10"
              fill={`rgba(${PAPER},0.6)`}
            >
              {e.label}
            </text>
          );
        })}

      {/* Nodes */}
      {nodes.map((n) => {
        const s = styleFor(n.type);
        const cx = n.x + w(n) / 2;

        if (n.type === "decision") {
          const cy = n.y + DIA_H / 2;
          const line = centredLines(1, n.y, DIA_H);
          return (
            <g key={n.id}>
              <polygon
                points={`${n.x},${cy} ${cx},${n.y} ${n.x + DIA_W},${cy} ${cx},${n.y + DIA_H}`}
                fill={PURPLE}
                fillOpacity="0.09"
                stroke={PURPLE}
                strokeOpacity="0.7"
                strokeWidth="1.25"
                vectorEffect="non-scaling-stroke"
              />
              <text
                x={cx}
                y={line.title}
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-head"
                fontSize="11.5"
                fontWeight="700"
                fill={PURPLE}
              >
                {n.title}
              </text>
              <text
                x={cx}
                y={line.sub(0)}
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-head"
                fontSize="9"
                fill={`rgba(${PAPER},0.6)`}
              >
                {n.sub}
              </text>
            </g>
          );
        }

        const subLines = wrapText(n.sub, 28);
        const line = centredLines(subLines.length, n.y, NODE_H);
        return (
          <g key={n.id}>
            <rect
              x={n.x}
              y={n.y}
              width={NODE_W}
              height={NODE_H}
              rx="5"
              fill={s.fill}
              fillOpacity={s.fillOpacity}
              stroke={s.stroke}
              strokeOpacity={s.opacity}
              strokeWidth="1.25"
              strokeDasharray={s.dash || undefined}
              vectorEffect="non-scaling-stroke"
            />
            <text
              x={cx}
              y={line.title}
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-head"
              fontSize="12"
              fontWeight="700"
              fill={s.text}
            >
              {n.title}
            </text>
            {subLines.map((l, i) => (
              <text
                key={l + i}
                x={cx}
                y={line.sub(i)}
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-head"
                fontSize="9.5"
                fill={`rgba(${PAPER},0.6)`}
              >
                {l}
              </text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

export const flowLegend: { label: string; color: string; dashed: boolean }[] = [
  { label: "People", color: MINT, dashed: true },
  { label: "Your systems", color: AMBER, dashed: true },
  { label: "OperaLayer steps", color: `rgba(${PAPER},0.4)`, dashed: false },
  { label: "Decisions and learning", color: PURPLE, dashed: false },
  { label: "Archived, never exported", color: RED, dashed: false },
];
