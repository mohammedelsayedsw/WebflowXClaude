"use client";

import { useState } from "react";
import { Race } from "./Race";
import { Reveal } from "@/components/primitives/Reveal";
import { Capacity, Method, Work } from "./Sections";

type Tab = "response" | "traffic" | "work" | "method";

const TABS: { id: Tab; label: string }[] = [
  { id: "response", label: "Response time" },
  { id: "traffic", label: "Traffic capacity" },
  { id: "work", label: "Database queries" },
  { id: "method", label: "How it was measured" },
];

/**
 * Every benchmark view behind one set of tabs, so the page stays short. Each
 * tab carries a literal heading in the PDF's own words: what was measured, and
 * under what traffic.
 */
export function Benchmarks() {
  const [tab, setTab] = useState<Tab>("response");
  const [mode, setMode] = useState<"peak" | "normal">("peak");

  const heading: Record<Tab, string> = {
    response: `Response time: ${mode} traffic`,
    traffic: "Traffic capacity",
    work: "Database queries and server time per page",
    method: "How it was measured",
  };
  const note: Record<Tab, string> = {
    response:
      mode === "peak"
        ? "Median response time per page type, at the traffic where stock Magento began to strain. Bars replay each response four times slower."
        : "Median response time per page type, at about half of peak traffic. Bars replay each response four times slower.",
    traffic:
      "Highest traffic each build handled without strain, in requests a second. A + means Expedio was not yet strained at the highest traffic tested.",
    work: "",
    method: "",
  };

  return (
    <section id="benchmark" className="relative z-10 py-24 md:py-36 scroll-mt-4">
      <div className="wrap">
        <Reveal>
          <h2 className="text-[40px] md:text-[56px] lg:text-[64px]">Benchmark</h2>
        </Reveal>
        <div className="relative mt-10">
        <div role="tablist" aria-label="Benchmark views" className="tabs-scroll flex gap-1 overflow-x-auto hair-b -mx-1 px-1 pb-1 md:pb-0">
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={tab === t.id}
              aria-controls="bench-panel"
              onClick={() => setTab(t.id)}
              className={`relative shrink-0 h-12 px-4 text-[15px] font-semibold font-[family-name:var(--font-golos)] transition whitespace-nowrap ${
                tab === t.id ? "text-white" : "text-white/50 hover:text-white/80"
              }`}
            >
              {t.label}
              <span
                aria-hidden
                className="absolute left-3 right-3 -bottom-px h-[2px] transition-opacity"
                style={{ background: "var(--sw-mint)", opacity: tab === t.id ? 1 : 0 }}
              />
            </button>
          ))}
        </div>
        </div>

        <div id="bench-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} className="pt-8 md:pt-12 min-h-[640px]">
          <div className="grid lg:grid-cols-12 gap-4 lg:gap-12 items-end mb-8">
            <h3 className="lg:col-span-7 text-[28px] md:text-[36px] leading-[1.1]">{heading[tab]}</h3>
            {note[tab] && <p className="lg:col-span-5 text-white/60 text-[15px] leading-[1.6]">{note[tab]}</p>}
          </div>
          {tab === "response" && <Race bare onMode={setMode} />}
          {tab === "traffic" && <Capacity bare forced="traffic" />}
          {tab === "work" && <Work bare />}
          {tab === "method" && <Method bare />}
        </div>
      </div>
    </section>
  );
}
