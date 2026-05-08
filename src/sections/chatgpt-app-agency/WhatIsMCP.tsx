"use client";

import { Reveal } from "@/components/primitives/Reveal";

export function WhatIsMCP() {
  const tells = [
    "what your app can do",
    "what data it can safely access",
    "which tools require login",
    "which actions need confirmation",
    "what UI should be shown",
    "how results should be returned",
  ];

  const tools = [
    "search products",
    "check live inventory",
    "get customer order history",
    "create a quote",
    "start a return",
    "compare products",
    "find replacement parts",
    "sync with a CRM",
    "open a support ticket",
    "recommend next best action",
  ];

  return (
    <section id="what-is-mcp" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="max-w-[64ch] mb-14 md:mb-16">
          <Reveal>
            <p className="text-[13px] uppercase tracking-[0.18em] font-semibold text-[var(--sw-blue)] mb-5">
              What is an MCP App
            </p>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05]">
              The connection layer between{" "}
              <span className="text-[var(--sw-blue)]">ChatGPT</span>{" "}
              and your business.
            </h2>
            <p className="mt-6 text-[16px] md:text-[17px] text-[var(--sw-black)]/70 max-w-[60ch] leading-relaxed">
              MCP stands for Model Context Protocol. Your MCP server is the bridge: it tells ChatGPT what your app can do, what data it can safely touch, and how to act on your customer’s behalf.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-10 md:gap-16 md:grid-cols-2">
          <Reveal>
            <div>
              <h3 className="font-head text-[var(--sw-black)] text-[22px] md:text-[24px] font-bold leading-[1.2] mb-5">
                Your MCP server tells ChatGPT:
              </h3>
              <ul className="space-y-2.5 text-[15px] text-[var(--sw-black)]/80 leading-relaxed">
                {tells.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="text-[var(--sw-blue)] font-semibold shrink-0">→</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-[14px] text-[var(--sw-black)]/65 leading-relaxed border-t border-[var(--sw-black)]/10 pt-6">
                Customers get a simple ChatGPT experience. Your business gets a new AI channel connected to real operations.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <h3 className="font-head text-[var(--sw-black)] text-[22px] md:text-[24px] font-bold leading-[1.2] mb-5">
                Example tools we ship:
              </h3>
              <div className="grid grid-cols-1 gap-1.5">
                {tools.map((t) => (
                  <div
                    key={t}
                    className="rounded-[2px] bg-white border border-[var(--sw-black)]/10 px-4 py-2.5 text-[14px] text-[var(--sw-black)]/80 font-mono"
                    style={{ fontFamily: "var(--font-jetbrains, monospace)" }}
                  >
                    {t.replace(/\s/g, "_")}()
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
