"use client";

import { Mail, RefreshCw, TriangleAlert, X } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/**
 * The three symptoms, set as the alerts they actually arrive as rather than as
 * generic content boxes. The first one is the hard failure, so it carries the
 * orange label; the other two are the quieter ones.
 */
const ALERTS: {
  key: string;
  icon: typeof TriangleAlert;
  source: string;
  message: React.ReactNode;
  urgent?: boolean;
}[] = [
  {
    key: "portal",
    icon: TriangleAlert,
    source: "Partner portal",
    message: "Upload failed, 1 required field empty",
    urgent: true,
  },
  {
    key: "distributor",
    icon: Mail,
    source: "From a distributor",
    message: <>&ldquo;Is this price list still correct?&rdquo; Sent in spring</>,
  },
  {
    key: "erp",
    icon: RefreshCw,
    source: "ERP, field updated",
    message: "Website still shows the old value",
  },
];

/**
 * Where each spoke lands, as a share of the connector zone. Three equal cards
 * with a small gap put their centres at roughly a sixth, a half, and five
 * sixths of the stack.
 */
const SPOKES = [17, 50, 83];

/** Solid orange disc with a white cross: the connection does not hold. */
function Break() {
  return (
    <span
      aria-hidden
      className="flex h-5 w-5 items-center justify-center rounded-full"
      style={{
        background: "var(--sw-orange)",
        boxShadow: "0 0 0 3px var(--lp-bright, #f3f2ee)",
      }}
    >
      <X className="h-3 w-3 text-white" strokeWidth={3} />
    </span>
  );
}

export function Problem() {
  const reduced = useReducedMotion();

  // reduced motion gets the finished state, so every variant collapses to a
  // no-op rather than to a shorter version of the same movement
  const still: Variants = { hidden: {}, shown: {} };

  const product: Variants = reduced
    ? still
    : {
        hidden: { opacity: 0, x: -12 },
        shown: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
      };

  // the lines draw outward under a clip rather than a dash offset, which the
  // dashed stroke would fight
  const linesRow: Variants = reduced
    ? still
    : {
        hidden: { clipPath: "inset(0 100% 0 0)" },
        shown: {
          clipPath: "inset(0 0% 0 0)",
          transition: { duration: 0.55, delay: 0.35, ease: EASE },
        },
      };

  const linesStack: Variants = reduced
    ? still
    : {
        hidden: { clipPath: "inset(0 0 100% 0)" },
        shown: {
          clipPath: "inset(0 0 0% 0)",
          transition: { duration: 0.55, delay: 0.35, ease: EASE },
        },
      };

  const breakMark = (i: number): Variants =>
    reduced
      ? still
      : {
          hidden: { opacity: 0, scale: 0.4 },
          shown: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.35, delay: 0.85 + i * 0.08, ease: EASE },
          },
        };

  const card = (i: number): Variants =>
    reduced
      ? still
      : {
          hidden: { opacity: 0, y: 10 },
          shown: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, delay: 1.05 + i * 0.1, ease: EASE },
          },
        };

  return (
    <section
      id="the-problem"
      className="relative bg-lp-bright py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="max-w-[68rem]">
          <Reveal>
            <div className="label-code mb-4 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">2</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>The problem</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
              Your product details live in{" "}
              <span style={{ color: "var(--sw-orange)" }}>too many places</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[70ch] font-head text-[var(--sw-black)]/80 text-[16px] md:text-[19px] leading-relaxed">
              Your product details sit in a spreadsheet, an ERP extension, a
              shared drive, and whatever your team built to fill the gaps, and
              none of them agree.
            </p>
          </Reveal>
        </div>

        {/* One product, three systems, none of the links holding. Everything
            below runs off a single trigger so the sequence reads in order. */}
        <motion.div
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, amount: 0.3 }}
          variants={still}
          className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-stretch"
        >
          <motion.div
            variants={product}
            className="mx-auto w-[140px] shrink-0 self-center rounded-[4px] p-5 text-center md:mx-0"
            style={{ background: "var(--sw-black)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetUrl("/webinars/pimcore/product-running-shoe.webp")}
              alt=""
              aria-hidden
              className="mx-auto h-auto w-[80px] opacity-90"
            />
            <div className="label-code mt-4 text-white/45">One product</div>
            <div className="mt-1.5 font-head font-bold text-white text-[14px] leading-tight">
              Trail Running Shoe
            </div>
          </motion.div>

          {/* connector, fanning right on desktop */}
          <div
            aria-hidden
            className="relative hidden w-[78px] shrink-0 self-stretch md:block"
          >
            <motion.svg
              variants={linesRow}
              viewBox="0 0 78 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
            >
              {SPOKES.map((y) => (
                <line
                  key={y}
                  x1={0}
                  y1={50}
                  x2={78}
                  y2={y}
                  stroke="rgba(57,55,72,0.35)"
                  strokeWidth={1.5}
                  strokeDasharray="4 4"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </motion.svg>
            {SPOKES.map((y, i) => (
              <motion.span
                key={y}
                variants={breakMark(i)}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: "50%", top: `${(50 + y) / 2}%` }}
              >
                <Break />
              </motion.span>
            ))}
          </div>

          {/* and fanning down once the cards stack */}
          <div aria-hidden className="relative h-[78px] w-full shrink-0 md:hidden">
            <motion.svg
              variants={linesStack}
              viewBox="0 0 100 78"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
            >
              {SPOKES.map((x) => (
                <line
                  key={x}
                  x1={50}
                  y1={0}
                  x2={x}
                  y2={78}
                  stroke="rgba(57,55,72,0.35)"
                  strokeWidth={1.5}
                  strokeDasharray="4 4"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </motion.svg>
            {SPOKES.map((x, i) => (
              <motion.span
                key={x}
                variants={breakMark(i)}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${(50 + x) / 2}%`, top: "50%" }}
              >
                <Break />
              </motion.span>
            ))}
          </div>

          <ul className="flex flex-1 flex-col gap-2.5 md:gap-3">
            {ALERTS.map((a, i) => (
              <motion.li
                key={a.key}
                variants={card(i)}
                className="rounded-[4px] bg-white p-4 md:p-5"
                style={{
                  borderLeft: "3px solid var(--sw-orange)",
                  boxShadow:
                    "0 1px 2px rgba(20,20,30,0.06), 0 6px 18px rgba(20,20,30,0.07)",
                }}
              >
                <div
                  className="label-code flex items-center gap-2"
                  style={{
                    color: a.urgent
                      ? "var(--sw-orange)"
                      : "rgba(57,55,72,0.55)",
                  }}
                >
                  <a.icon
                    aria-hidden
                    className="h-[18px] w-[18px] shrink-0"
                    strokeWidth={2}
                  />
                  <span>{a.source}</span>
                </div>
                <p className="mt-2 font-head text-[var(--sw-black)] text-[16px] md:text-[19px] leading-relaxed">
                  {a.message}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
