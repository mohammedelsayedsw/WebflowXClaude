"use client";

import { Reveal } from "@/components/primitives/Reveal";

export function ReferenceCase() {
  return (
    <section
      id="reference"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{
        background:
          "radial-gradient(900px 600px at 15% 20%, #2a3380 0%, transparent 55%)," +
          "radial-gradient(700px 500px at 85% 85%, #070a1e 0%, transparent 52%)," +
          "radial-gradient(1400px 900px at 50% 50%, #1a2060 0%, #141a48 35%, #10132c 75%, #0a0d24 100%)",
      }}
    >
      <div className="wrap relative">
        <Reveal>
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-end">
            <h2 className="font-head text-white text-[36px] md:text-[52px] lg:text-[64px] leading-[1.04] max-w-[14ch]">
              <span className="text-[var(--sw-mint)]">Advanced Life.</span>{" "}
              <span className="text-white">Australia</span>
            </h2>
            <p className="text-white/80 text-[16px] md:text-[17px] leading-relaxed max-w-[60ch]">
              National school photography company. Hundreds of schools. Tens of thousands of students. Hard Q1 peak. Strict student data residency. Five legacy systems that nobody had touched in five years.
            </p>
          </div>
        </Reveal>

        {/* 3 problems */}
        <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-5 md:gap-6">
          {[
            {
              n: "Problem · 1",
              title: "Five legacy systems. No unified data",
              body: "GlobalJade, ImageDatabase, The Hub, CRM, eWay. Downtime risk compounding every year.",
            },
            {
              n: "Problem · 2",
              title: "500 GB of portraits on a physical server",
              body: "On-prem file storage. Backups by hand. One hard drive away from a national incident.",
            },
            {
              n: "Problem · 3",
              title: "Legacy database, five years untouched",
              body: "Student names as single text strings. SIC codes tied to images. Structural debt blocking every change.",
            },
          ].map((f, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="rounded-[4px] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-7 md:p-8 h-full flex flex-col">
                <div className="label-code text-white/55 mb-4">{f.n}</div>
                <h3 className="font-head text-white text-[19px] md:text-[22px] leading-[1.2] mb-3">
                  {f.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-white/70 leading-relaxed">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 4 strong stats */}
        <Reveal delay={0.2}>
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 pt-12 border-t border-white/10">
            {[
              ["44,891", "students on MDM · day one"],
              ["14 wk", "kickoff → MVP in production"],
              ["0", "peak-season incidents · Q1 2025"],
              ["5 / 0", "legacy integrated / decommissioned mid-project"],
            ].map(([v, l]) => (
              <div key={v} className="flex flex-col gap-3">
                <div className="font-head text-white text-[40px] md:text-[52px] lg:text-[64px] leading-none tabular-nums">
                  {v}
                </div>
                <div className="label-code text-white/60">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* closing note */}
        <Reveal delay={0.3}>
          <p className="mt-14 md:mt-16 max-w-[70ch] text-white/75 text-[14px] md:text-[15px] leading-relaxed">
            These modules sit on top of your existing commerce platform. Not instead of it. You keep everything commerce already does well. You get the parts that school photography needs to operate.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
