"use client";

import { X, Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

const rows: { without: string; withApp: string }[] = [
  {
    without:
      "Customer asks ChatGPT “do you have trail running shoes under €150 in size 10?” and ChatGPT cannot reach your inventory.",
    withApp:
      "ChatGPT queries your live catalog and returns matching products with stock, price, and an add-to-cart option.",
  },
  {
    without:
      "A B2B buyer emails your sales rep to reorder last month’s purchase and waits for a quote.",
    withApp:
      "The buyer asks ChatGPT to reorder, sees contract pricing and stock, and confirms in one message.",
  },
  {
    without:
      "A customer asks “where is my order?”, lands on your website, logs in, and digs through order history.",
    withApp:
      "The customer asks ChatGPT, the app recognizes them and returns real-time shipment status in the chat.",
  },
  {
    without:
      "Your support team handles 200 “what’s your return policy?” tickets a week by hand.",
    withApp:
      "ChatGPT answers from your real policy and helpdesk data, and your team handles only the exceptions.",
  },
  {
    without:
      "Your brand stays out of view when buyers use ChatGPT or Claude to research and decide.",
    withApp:
      "Your app appears in the ChatGPT and Claude directories and surfaces when buyers ask what you sell.",
  },
];

export function WithoutWith() {
  return (
    <section
      id="without-vs-with"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="mb-14 md:mb-20 max-w-[820px]">
          <Reveal>
            <SectionLabel index="4">Without vs with</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-head text-white text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.01em] mt-6">
              What changes when your business runs inside{" "}
              <span style={{ color: "var(--sw-mint)" }}>
                ChatGPT and Claude
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Column headers — visible from md and up */}
        <div className="hidden md:grid grid-cols-2 gap-5 mb-4 label-code text-white/55">
          <div>Without an MCP app</div>
          <div>With an MCP app</div>
        </div>

        <div className="space-y-4 md:space-y-5">
          {rows.map((r, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {/* Without */}
                <div className="rounded-[4px] border border-white/10 bg-white/[0.025] p-5 md:p-6 flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-[2px] border border-white/15 bg-white/[0.04]">
                    <X className="h-4 w-4 text-white/55" />
                  </span>
                  <p className="text-white/65 text-[14px] md:text-[15.5px] leading-relaxed">
                    {r.without}
                  </p>
                </div>
                {/* With */}
                <div
                  className="rounded-[4px] border p-5 md:p-6 flex items-start gap-3"
                  style={{
                    borderColor: "rgba(110,247,110,0.25)",
                    background:
                      "linear-gradient(160deg, rgba(110,247,110,0.06) 0%, rgba(110,247,110,0) 60%), rgba(255,255,255,0.025)",
                  }}
                >
                  <span
                    className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-[2px] border bg-white/[0.04]"
                    style={{ borderColor: "rgba(110,247,110,0.35)" }}
                  >
                    <Check className="h-4 w-4 text-[var(--sw-mint)]" />
                  </span>
                  <p className="text-white text-[14px] md:text-[15.5px] leading-relaxed">
                    {r.withApp}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
