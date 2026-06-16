"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Row = { n: number; headline: string; body: string; tag: string };

const rows: Row[] = [
  {
    n: 1,
    headline: "One live view of every store, in one place",
    body: "Orders, stock, product gaps, app costs, failed syncs, and recent changes, all in a single shared view that everything else plugs into.",
    tag: "the foundation",
  },
  {
    n: 2,
    headline: "Know how every store is actually performing",
    body: "Revenue, conversion, margin, channels, and retention shown as clear scorecards you can drill into, not four separate reports.",
    tag: "reporting",
  },
  {
    n: 3,
    headline: "Connect your back-office systems without the usual pain",
    body: "Ready-made connections link Shopify to your ERP, order, warehouse, pricing, and stock systems, so they stay in agreement.",
    tag: "systems",
  },
  {
    n: 4,
    headline: "Publish content to every market the same way",
    body: "Your content tools (Sanity, Storyblok, Contentful, WordPress and more) plug in once, with control over what goes live where, and in which language.",
    tag: "content",
  },
  {
    n: 5,
    headline: "Catch problems before your customers do",
    body: "Site speed, app impact, SEO, product feeds, checkout, payments, shipping, and risky releases watched across every store, around the clock.",
    tag: "monitoring",
  },
  {
    n: 6,
    headline: "Build the rules your business actually runs on",
    body: "A safe place for the custom bits. Special pricing, B2B flows, account catalogs, and approvals live in one shared place instead of scattered across stores.",
    tag: "custom rules",
  },
  {
    n: 7,
    headline: "Add mobile apps later without starting over",
    body: "Launch apps for customers, sales reps, or warehouse teams on the same data and rules you already have, so it is an add-on, not a rebuild.",
    tag: "mobile",
  },
];

export function SevenLayers() {
  return (
    <section
      id="connect"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code text-white/55 mb-5">
            what we connect for you
          </div>
          <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[24ch]">
            Everything you finally{" "}
            <span style={{ color: "var(--sw-mint)" }}>
              get to see and control
            </span>
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-white/80">
            Each part covers a different piece of your setup. Together they give
            your team one place to see what is happening, and fix what is
            missing.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 space-y-3 md:space-y-4">
          {rows.map((r, i) => {
            const foundational = r.n === 1;
            return (
              <Reveal key={r.n} delay={i * 0.05}>
                <article
                  className="rounded-[4px] border border-white/10 p-6 md:p-8"
                  style={{
                    background: foundational
                      ? "linear-gradient(160deg, rgba(110,247,110,0.06) 0%, rgba(255,255,255,0) 60%), rgba(16,19,44,0.55)"
                      : "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 60%), rgba(16,19,44,0.4)",
                    borderLeft: foundational
                      ? "2px solid var(--sw-mint)"
                      : undefined,
                    marginLeft: foundational ? 0 : "clamp(0px, 2.5vw, 28px)",
                  }}
                >
                  <div className="flex items-start gap-5 md:gap-7">
                    <div className="font-head text-white/20 text-[28px] md:text-[36px] leading-none tabular-nums shrink-0 w-[1.4ch] pt-0.5">
                      {r.n}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                        <h3 className="font-head text-white text-[19px] md:text-[23px] leading-[1.2]">
                          {r.headline}
                        </h3>
                        <span className="label-code text-white/45 text-[10px]">
                          {r.tag}
                        </span>
                      </div>
                      <p className="mt-3 text-[14px] md:text-[15px] text-white/75 leading-relaxed max-w-[80ch]">
                        {r.body}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
