"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { useCycle } from "@/sections/operalayer/shared/useCycle";

/**
 * The workbook the retailer priced from before OperaLayer. Each loop step
 * selects one price cell and lights up the cells its formula reaches into,
 * on this sheet and on the hidden lookup sheets.
 */
const ROWS = [
  { state: "TX", cost: "18.00", excise: "2.40", margin: "D3", price: "29.99" },
  { state: "CA", cost: "18.00", excise: "5.75", margin: "D6", price: "33.99" },
  { state: "NY", cost: "18.00", excise: "4.80", margin: "D5", price: "32.99" },
  { state: "FL", cost: "18.00", excise: "1.20", margin: "D2", price: "27.99" },
  { state: "OH", cost: "18.00", excise: "3.10", margin: "D4", price: "29.99" },
  { state: "PA", cost: "18.00", excise: "#REF!", margin: "D4", price: "#REF!" },
];

const TABS = ["Prices", "Excise", "Margins", "Margins_old", "Margins_v2 (do not use)"];

const GAPS = [
  "Recalculate every state when a supplier cost changes",
  "Keep a record of who changed which rule, and when",
  "Send new prices to the store on a set date",
  "Run while the person who built it is on holiday",
];

function Sheet() {
  const { ref, index, pick } = useCycle(ROWS.length, 2200);
  const row = ROWS[index];
  const r = index + 2;
  const formula = `=ROUNDUP((B${r}+VLOOKUP(A${r},Excise!A:C,3,0))*(1+Margins!${row.margin}),0)-0.01`;

  return (
    <div ref={ref} className="rounded-[4px] overflow-hidden bg-white border border-[var(--sw-black)]/12 shadow-[0_30px_60px_-30px_rgba(16,19,44,0.25)]">
      <div className="flex items-center gap-3 border-b border-[var(--sw-black)]/10 px-4 h-10">
        <span className="label-code text-[var(--sw-black)]/55">state_prices_FINAL_v14.xlsx</span>
        <span className="ml-auto label-code text-[var(--sw-black)]/45 hidden sm:inline">1 editor</span>
      </div>
      <div className="flex items-center gap-3 border-b border-[var(--sw-black)]/10 px-4 py-2.5 font-mono text-[11px] md:text-[12px] text-[var(--sw-black)]/80 overflow-hidden">
        <span className="text-[var(--sw-black)]/45 shrink-0">E{r}</span>
        <span className="text-[var(--sw-black)]/30 shrink-0">fx</span>
        <span className="truncate">{formula}</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[12px] md:text-[13px] tabular-nums border-collapse">
          <thead>
            <tr className="bg-[#f3f4f8] text-[var(--sw-black)]/50">
              <th className="w-8 border-r border-[var(--sw-black)]/10" />
              {["A  State", "B  Cost", "C  Excise", "D  Margin", "E  Price"].map((h) => (
                <th key={h} className="text-left font-normal px-2 md:px-3 py-1.5 border-r border-[var(--sw-black)]/10 last:border-r-0 whitespace-pre">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((x, i) => {
              const active = i === index;
              const broken = x.price === "#REF!";
              const cell = "px-2 md:px-3 py-2 border-t border-r border-[var(--sw-black)]/10 last:border-r-0 transition-colors duration-300";
              const ref1 = active ? "bg-[#e9ebfa]" : "";
              return (
                <tr key={x.state} onClick={() => pick(i)} className="cursor-pointer text-[var(--sw-black)]/85">
                  <td className="text-center text-[var(--sw-black)]/40 bg-[#f3f4f8] border-t border-r border-[var(--sw-black)]/10">{i + 2}</td>
                  <td className={`${cell} ${ref1}`}>{x.state}</td>
                  <td className={`${cell} ${ref1}`}>{x.cost}</td>
                  <td className={`${cell} ${ref1} ${broken ? "text-[var(--sw-orange)]" : ""}`}>{x.excise}</td>
                  <td className={`${cell} ${active ? "bg-[#e9ebfa]" : ""} text-[var(--sw-black)]/50`}>→ {x.margin}</td>
                  <td
                    className={`${cell} font-semibold ${broken ? "text-[var(--sw-orange)]" : ""}`}
                    style={active ? { outline: "2px solid var(--sw-blue)", outlineOffset: -2 } : undefined}
                  >
                    {x.price}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex gap-px bg-[var(--sw-black)]/10 border-t border-[var(--sw-black)]/10 overflow-x-auto">
        {TABS.map((t, i) => {
          const lit = i === 1 || i === 2;
          return (
            <span
              key={t}
              className={`shrink-0 px-3 py-2 text-[11px] whitespace-nowrap ${
                i === 0 ? "bg-white text-[var(--sw-black)]" : "bg-[#f3f4f8] text-[var(--sw-black)]/50"
              } ${lit ? "!text-[var(--sw-blue)]" : ""}`}
            >
              {t}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function Spreadsheet() {
  return (
    <section id="before" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[1fr_1.2fr] gap-14 lg:gap-20 items-start">
          <div>
            <Reveal>
              <div className="label-code text-[var(--sw-black)]/50 mb-5">Before OperaLayer</div>
              <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[46px] lg:text-[52px] leading-[1.05] max-w-[16ch]">
                The pricing spreadsheet one person kept running
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-7 text-[16px] md:text-[18px] text-[var(--sw-black)]/70 leading-relaxed max-w-[50ch]">
                The retailer priced its whole catalog in Excel. Each state has its own
                excise and sales tax rules, and the formulas that combined them had
                grown sheet by sheet for years.
              </p>
              <p className="mt-4 text-[16px] md:text-[18px] text-[var(--sw-black)]/70 leading-relaxed max-w-[50ch]">
                One person carried the logic in their head. When a cost changed,
                every state price waited for them.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-10 label-code text-[var(--sw-black)]/50 mb-3">What the workbook could not do</div>
              <ul className="border-t border-[var(--sw-black)]/15 max-w-[50ch]">
                {GAPS.map((g) => (
                  <li key={g} className="border-b border-[var(--sw-black)]/15 py-3.5 text-[15px] md:text-[16px] text-[var(--sw-black)]/85">
                    {g}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Sheet />
            <p className="mt-4 text-[13px] text-[var(--sw-black)]/50">
              A reconstruction with example figures. Click a row to follow its formula.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
