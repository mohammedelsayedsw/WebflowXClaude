"use client";

import { useRef, useState } from "react";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";

type Demo = {
  n: string;
  title: string;
  before: string;
  inSystem: string[];
  after: string;
};

const DEMOS: Demo[] = [
  {
    n: "1",
    title: "The rejected file",
    before:
      "A partner portal rejects your product file because a field they require is empty",
    inSystem: [
      "Required fields checked before export",
      "Gaps flagged where they happen",
      "Corrections made once",
    ],
    after: "The product goes live, and the fix holds for every product after it",
  },
  {
    n: "2",
    title: "One product, every channel",
    before:
      "The same product shows differently on your website, at a distributor, and on a partner sheet",
    inSystem: [
      "One record for the product",
      "Channel-specific views generated from it",
    ],
    after: "Every channel shows the same product, updated from one place",
  },
  {
    n: "3",
    title: "Every language, up to date",
    before: "You add a language, and the translations never keep up",
    inSystem: [
      "Language versions tracked against the source",
      "Status visible for every market",
    ],
    after: "A new market launches on current content instead of guesswork",
  },
  {
    n: "4",
    title: "Product data an AI can use",
    before:
      "You want to use AI on your catalog, and the data underneath isn't ready",
    inSystem: [
      "Structured, complete, consistent records",
      "One definition per field",
    ],
    after:
      "The data underneath is ready for AI and automation, instead of blocking it",
  },
];

/** The three columns, shared by the desktop tab panel and the mobile accordion. */
function DemoBody({ demo }: { demo: Demo }) {
  return (
    <div className="grid gap-5 md:gap-0 md:grid-cols-[1fr_auto_1.15fr_auto_1fr] md:items-stretch">
      <div className="md:pr-7">
        <div className="label-code text-[var(--sw-black)]/45">Before</div>
        <p className="mt-2.5 text-[var(--sw-black)]/70 text-[14px] md:text-[15px] leading-relaxed">
          {demo.before}
        </p>
      </div>

      <div aria-hidden className="hidden md:flex items-center">
        <ArrowRight className="h-4 w-4 text-[var(--sw-black)]/25" />
      </div>

      <div className="md:px-7 md:border-x md:border-[var(--sw-black)]/10">
        <div className="label-code text-[var(--sw-black)]/45">In the system</div>
        <ul className="mt-2.5 flex flex-col gap-2">
          {demo.inSystem.map((s) => (
            <li
              key={s}
              className="flex gap-2.5 text-[var(--sw-black)]/80 text-[14px] md:text-[15px] leading-relaxed"
            >
              <span
                aria-hidden
                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-[4px] bg-[var(--sw-blue)]"
              />
              {s}
            </li>
          ))}
        </ul>
      </div>

      <div aria-hidden className="hidden md:flex items-center">
        <ArrowRight className="h-4 w-4 text-[var(--sw-black)]/25" />
      </div>

      <div className="md:pl-7">
        <div className="label-code text-[var(--sw-blue)]">After</div>
        <p className="mt-2.5 font-head text-[var(--sw-black)] text-[15px] md:text-[16px] leading-[1.45]">
          {demo.after}
        </p>
      </div>
    </div>
  );
}

/** Tabs from md up. Roving tabindex, so arrow keys move between them. */
function DemoTabs({
  active,
  setActive,
}: {
  active: number;
  setActive: (i: number) => void;
}) {
  const reduce = useReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = DEMOS.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="hidden md:block">
      <div
        role="tablist"
        aria-label="Live demo scenarios"
        onKeyDown={onKeyDown}
        className="grid grid-cols-4 gap-3 md:gap-4"
      >
        {DEMOS.map((d, i) => {
          const on = i === active;
          return (
            <button
              key={d.n}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              id={`demo-tab-${d.n}`}
              aria-selected={on}
              aria-controls={`demo-panel-${d.n}`}
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              className={`flex items-start gap-3 rounded-[4px] border p-4 md:p-5 text-left transition-colors duration-200 ${
                on
                  ? "border-[var(--sw-blue)] bg-white"
                  : "border-[var(--sw-black)]/12 bg-white/50 hover:border-[var(--sw-black)]/30"
              }`}
            >
              <span
                className={`font-head text-[13px] tabular-nums leading-none mt-0.5 ${
                  on ? "text-[var(--sw-blue)]" : "text-[var(--sw-black)]/40"
                }`}
              >
                {d.n}
              </span>
              <span
                className={`font-head font-bold text-[15px] lg:text-[17px] leading-tight ${
                  on ? "text-[var(--sw-blue)]" : "text-[var(--sw-black)]/70"
                }`}
              >
                {d.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* The minimum height is set from the longest panel, so switching tabs
          never shifts the page under the reader. */}
      <div className="mt-3 md:mt-4 rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6 md:p-8 min-h-[232px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={DEMOS[active].n}
            role="tabpanel"
            id={`demo-panel-${DEMOS[active].n}`}
            aria-labelledby={`demo-tab-${DEMOS[active].n}`}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.18, ease: "easeOut" }}
          >
            <DemoBody demo={DEMOS[active]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/** Below md the same four demos read better as an accordion, one open at a time. */
function DemoAccordion({
  active,
  setActive,
}: {
  active: number;
  setActive: (i: number) => void;
}) {
  const reduce = useReducedMotion();

  return (
    <div className="md:hidden flex flex-col gap-3">
      {DEMOS.map((d, i) => {
        const on = i === active;
        return (
          <div
            key={d.n}
            className={`rounded-[4px] border bg-white ${
              on ? "border-[var(--sw-blue)]" : "border-[var(--sw-black)]/12"
            }`}
          >
            <button
              type="button"
              aria-expanded={on}
              aria-controls={`demo-acc-${d.n}`}
              onClick={() => setActive(on ? -1 : i)}
              className="w-full flex items-start justify-between gap-4 p-5 text-left"
            >
              <span className="flex items-start gap-3">
                <span
                  className={`font-head text-[13px] tabular-nums leading-none mt-0.5 ${
                    on ? "text-[var(--sw-blue)]" : "text-[var(--sw-black)]/40"
                  }`}
                >
                  {d.n}
                </span>
                <span
                  className={`font-head font-bold text-[16px] leading-tight ${
                    on ? "text-[var(--sw-blue)]" : "text-[var(--sw-black)]"
                  }`}
                >
                  {d.title}
                </span>
              </span>
              <span className="shrink-0 mt-0.5" aria-hidden>
                {on ? (
                  <Minus
                    className="h-5 w-5"
                    strokeWidth={2}
                    style={{ color: "var(--sw-blue)" }}
                  />
                ) : (
                  <Plus
                    className="h-5 w-5 text-[var(--sw-black)]/40"
                    strokeWidth={2}
                  />
                )}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {on ? (
                <motion.div
                  key="panel"
                  id={`demo-acc-${d.n}`}
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{
                    duration: reduce ? 0 : 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5">
                    <DemoBody demo={d} />
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export function Demos() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="the-demos"
      className="relative bg-lp-bright py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="max-w-[68rem]">
          <Reveal>
            <div className="label-code mb-4 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">4</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>The solutions</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
              Four problems,{" "}
              <span className="text-[var(--sw-blue)]">solved live</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[70ch] text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
              Each demo starts from a situation you will recognize and ends
              with the problem gone, in a working system with real records.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 md:mt-14">
          <DemoTabs active={active} setActive={setActive} />
          <DemoAccordion active={active} setActive={setActive} />
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 md:mt-10 text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed max-w-[70ch]">
            The demos run in Pimcore, and each one is there to show a problem
            being solved.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
