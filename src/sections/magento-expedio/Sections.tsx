"use client";

import { assetUrl } from "@/lib/assets";
import { useState } from "react";
import { CAPACITY, CPU, WORK } from "./data";
import { btnPrimary } from "./Hero";
import { LightSweep } from "./LightSweep";
import { Reveal } from "@/components/primitives/Reveal";
import { Shell } from "./Shell";
import { PDF_FORM, read, submitHubSpot } from "./hubspot";

const H2 = "mt-4 text-[40px] md:text-[56px] lg:text-[64px]";
const EYEBROW = "label-code text-white/50";

/** Pages 8 and 9 of the PDF: how much traffic, and how much of the server it took. */
export function Capacity({ bare = false, forced }: { bare?: boolean; forced?: "traffic" | "cpu" }) {
  const [own, setView] = useState<"traffic" | "cpu">("traffic");
  const view = forced ?? own;
  const maxRate = 90;
  return (
    <Shell bare={bare}>
        {!bare && (
          <>
        <Reveal className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <h2 className={H2.replace("mt-4 ", "")}>{view === "traffic" ? "Traffic capacity" : "CPU use: peak traffic"}</h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-white/70 text-[17px] leading-[1.6]">
              {view === "traffic"
                ? "Highest traffic each build handled without strain, in requests a second. A + means Expedio was not yet strained at the highest traffic tested."
                : "Average share of the server's CPU in use while serving the same traffic."}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 inline-flex rounded-[2px] border border-white/20 p-1">
          {(
            [
              ["traffic", "Traffic capacity"],
              ["cpu", "CPU use"],
            ] as const
          ).map(([k, label]) => (
            <button
              key={k}
              onClick={() => setView(k)}
              className={`h-9 px-4 text-[14px] font-semibold rounded-[2px] transition ${
                view === k ? "bg-[var(--sw-beige)] text-[var(--sw-black)]" : "text-white/70 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

          </>
        )}
        <div className={`${bare ? "" : "mt-8 "}hair-t`}>
          {view === "traffic"
            ? CAPACITY.map((r) => (
                <Line
                  key={r.page}
                  page={r.page}
                  a={r.magento / maxRate}
                  b={r.expedio / maxRate}
                  aLabel={`${r.magento}/s`}
                  bLabel={`${r.expedio}${r.plus ? "+" : ""}/s`}
                  result={r.x}
                />
              ))
            : CPU.map((r) => (
                <Line
                  key={r.page}
                  page={r.page}
                  a={r.magento / 100}
                  b={r.expedio / 100}
                  aLabel={`${r.magento}%`}
                  bLabel={`${r.expedio}%`}
                  result={`${Math.round((1 - r.expedio / r.magento) * 100)}% less`}
                />
              ))}
        </div>
    </Shell>
  );
}

function Line({
  page,
  a,
  b,
  aLabel,
  bLabel,
  result,
}: {
  page: string;
  a: number;
  b: number;
  aLabel: string;
  bLabel: string;
  result: string;
}) {
  return (
    <div className="hair-b py-5 grid grid-cols-12 gap-x-4 gap-y-3 items-center">
      <div className="col-span-7 md:col-span-3 text-white text-[16px] font-semibold">{page}</div>
      <div className="col-span-5 md:col-span-2 md:order-last text-right font-[family-name:var(--font-golos)] font-bold text-[22px] md:text-[26px] mint tabular-nums">
        {result}
      </div>
      <div className="col-span-12 md:col-span-7 space-y-2">
        {[
          [a, aLabel, "var(--magento)"],
          [b, bLabel, "var(--sw-mint)"],
        ].map(([w, l, c]) => (
          <div key={String(c)} className="flex items-center gap-3">
            <div className="relative flex-1 h-3 bg-white/[0.06] rounded-[1px] overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 rounded-[1px] transition-[width] duration-700 ease-out"
                style={{ width: `${Number(w) * 100}%`, background: String(c) }}
              />
            </div>
            <div className="w-[64px] text-right text-[14px] text-white tabular-nums">{String(l)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Pages 11, 12 and 14: the work behind one page, without saying how. */
export function Work({ bare = false }: { bare?: boolean }) {
  return (
    <section className={bare ? "" : "relative z-10 py-24 md:py-36"}>
      <div className={`${bare ? "" : "wrap "}grid lg:grid-cols-12 gap-12`}>
        <Reveal className="lg:col-span-4">
          {!bare && <h2 className={H2.replace("mt-4 ", "")}>Database queries and server time per page</h2>}
          <p className={`${bare ? "" : "mt-6 "}text-white/70 text-[17px] leading-[1.6]`}>Per request. Empty-cache rows had all caches emptied first.</p>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-8">
          <div className="grid grid-cols-12 gap-4 pb-3 hair-b label-code text-white/45">
            <div className="col-span-6">Measured</div>
            <div className="col-span-3 text-right">Stock Magento</div>
            <div className="col-span-3 text-right">Expedio</div>
          </div>
          {WORK.map((w) => (
            <div key={w.label} className="grid grid-cols-12 gap-4 py-4 hair-b items-baseline">
              <div className="col-span-6 text-white/85 text-[15px] md:text-[16px]">{w.label}</div>
              <div className="col-span-3 text-right text-white/50 text-[18px] md:text-[22px] tabular-nums font-[family-name:var(--font-golos)]">
                {w.magento}
              </div>
              <div className="col-span-3 text-right mint text-[18px] md:text-[22px] font-bold tabular-nums font-[family-name:var(--font-golos)]">
                {w.expedio}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/** Page 2 and page 15, the conditions a journalist or an engineer will ask about. */
export function Method({ bare = false }: { bare?: boolean }) {
  const rows: [string, string][] = [
    ["Store", "One real merchant's Magento store on Hyvä, with about 1,000 categories and 20,000 products"],
    ["Builds", "Stock Magento as the store runs today, and the same store on Expedio"],
    ["Server", "One ReadyMage server. Each build had two physical cores and eight application workers, with the database, search, and cache on the same machine"],
    ["Page cache", "None. Every request carried a random URL parameter, so no page cache could answer it. Late requests counted as failed"],
    ["Rule", "Optimizations that would help both builds equally were not made"],
    ["Load", "50%, 75%, and 100% of each build's limit. Expedio also ran at every level used for stock Magento"],
    ["Volume", "162 runs and 487,115 requests on September 28 and 29, 2026"],
  ];
  return (
    <section className={bare ? "" : "relative z-10 py-24 md:py-36"}>
      <div className={`${bare ? "" : "wrap "}grid lg:grid-cols-12 gap-12`}>
        <Reveal className="lg:col-span-4">
          {!bare && <h2 className={H2.replace("mt-4 ", "")}>How it was measured</h2>}
          <p className="mt-6 text-white/70 text-[17px] leading-[1.6]">
            On this server, stock Magento already answers in 70 to 472 ms without a page cache. That is faster than
            most Magento stores, so the gap was measured against a strong baseline.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-8 hair-t">
          {rows.map(([k, v]) => (
            <div key={k} className="grid grid-cols-12 gap-4 py-4 hair-b">
              <div className="col-span-12 sm:col-span-3 label-code text-white/45 pt-1">{k}</div>
              <div className="col-span-12 sm:col-span-9 text-white/85 text-[15px] md:text-[16px] leading-[1.55]">{v}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/** The gated PDF. The form is a layout only for now: it sends nothing. */
export function Report() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const v = read(e.currentTarget);
    setState("sending");
    try {
      await submitHubSpot(PDF_FORM, [
        { name: "firstname", value: v.firstname },
        { name: "email", value: v.email },
        { name: "name", value: v.company ?? "", objectTypeId: "0-2" },
      ]);
      setState("sent");
    } catch {
      setState("error");
    }
  };
  return (
    <section id="report" className="relative z-10 overflow-x-clip py-24 md:py-40 scroll-mt-4">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-[45%] bottom-0 [mask-image:linear-gradient(180deg,transparent_0%,#000_30%,#000_80%,transparent_100%)]">
        <LightSweep />
      </div>
      {/* a dark pool behind the copy, so the sweep never runs through the words */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(45% 60% at 70% 50%, rgba(5,7,15,0.9) 0%, rgba(5,7,15,0.75) 45%, rgba(5,7,15,0) 80%)" }} />
      <div className="wrap relative grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <Reveal className="lg:col-span-5 order-last lg:order-first">
          <div className="relative mx-auto max-w-[380px] lg:max-w-none">
            <img
              src={assetUrl("/magento/expedio/pdf2-p7.png")}
              alt=""
              className="absolute left-[14%] top-[-6%] w-[78%] rotate-[5deg] rounded-[3px] border border-white/10 opacity-70"
            />
            <img
              src={assetUrl("/magento/expedio/pdf2-p1.png")}
              alt="Cover of the PDF, Benchmarks and technology behind Expedio"
              className="relative w-[82%] -rotate-[3deg] rounded-[3px] border border-white/15 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <h2 className={H2.replace("mt-4 ", "")}>Benchmarks and technology behind Expedio</h2>
          <p className="mt-6 text-white/70 text-[17px] leading-[1.6] max-w-[36rem]">
            All benchmark results, a look at the technology, and how it was measured.
          </p>

          {state === "sent" ? (
            <p className="mt-10 text-white text-[22px] font-semibold font-[family-name:var(--font-golos)] max-w-[36rem]">
              Thank you. The PDF is on its way to your email.
            </p>
          ) : (
          <form onSubmit={onSubmit} className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-7 max-w-[36rem]">
            {[
              ["firstname", "Name", "name", "text", "Jane Smith", true],
              ["email", "Work email", "email", "email", "jane@company.com", true],
              ["company", "Company", "organization", "text", "Company", false],
            ].map(([id, label, ac, type, ph, req]) => (
              <label key={String(id)} htmlFor={`r-${id}`} className="group block">
                <span className="label-code text-white/55 group-focus-within:text-[var(--sw-mint)] transition-colors">{label}</span>
                <input id={`r-${id}`} name={String(id)} type={String(type)} autoComplete={String(ac)} placeholder={String(ph)} required={Boolean(req)} className="line-field !text-[18px]" />
              </label>
            ))}
            <div className="sm:col-span-2 pt-2 flex flex-col items-start gap-3">
              <button type="submit" disabled={state === "sending"} className={`${btnPrimary} !h-14 !px-12 disabled:opacity-60`}>
                {state === "sending" ? "Sending" : "Send me the PDF"}
              </button>
              {state === "error" && (
                <span className="text-[#ff5a31] text-[14px]">That did not go through. Please try again.</span>
              )}
            </div>
          </form>
          )}

          <p className="mt-6 text-white/70 text-[14px] leading-[1.6] [text-shadow:0_1px_12px_rgba(5,7,15,.9)]">
            Press contact: Kristaps Gailitis, CMO, scandiweb.{" "}
            <a className="underline underline-offset-4 hover:text-white" href="mailto:kristaps.gailitis@scandiweb.com">
              kristaps.gailitis@scandiweb.com
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
