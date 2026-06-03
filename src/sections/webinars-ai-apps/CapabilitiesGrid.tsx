"use client";

import {
  Search,
  Boxes,
  Truck,
  FileText,
  Undo2,
  UserCircle2,
  Workflow,
  LayoutGrid,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const items: { icon: LucideIcon; title: string }[] = [
  { icon: Search, title: "Find the right product, in plain language" },
  { icon: Boxes, title: "Show live stock, pricing, and availability" },
  { icon: Truck, title: "Track any order, shipment, or return" },
  { icon: FileText, title: "Generate a quote against contract pricing" },
  { icon: Undo2, title: "Start a return or warranty claim" },
  { icon: UserCircle2, title: "Recognize the customer and their account" },
  { icon: Workflow, title: "Write actions back to your systems automatically" },
  { icon: LayoutGrid, title: "Show interactive product cards inside the chat" },
  { icon: Zap, title: "Kick off approvals and automations from a conversation" },
];

export function CapabilitiesGrid() {
  return (
    <section
      id="the-demo"
      className="bg-lp-bright py-28 md:py-36 scroll-mt-20"
    >
      <div className="wrap">
        <div className="mb-12 md:mb-16 max-w-[820px]">
          <Reveal>
            <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">3</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>The demo</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.01em] max-w-[22ch]">
              One eCommerce flow, running live{" "}
              <span className="text-[var(--sw-blue)]">inside the chat</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-7 text-[var(--sw-black)]/75 text-[15px] md:text-[17px] leading-relaxed">
              Rolands runs a full customer journey on the call: browse, search,
              add to cart, place an order, request an order update, and submit
              a support ticket. Below is what the app does at each step.
            </p>
          </Reveal>
        </div>

        {/* 9-tile capability grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {items.map(({ icon: Icon, title }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.05 + Math.floor(i / 3) * 0.08}>
              <div
                className="group relative h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6 md:p-7 transition-all hover:border-[var(--sw-blue)]/35 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[2px] border border-[var(--sw-blue)]/20 bg-[var(--sw-blue)]/[0.06] text-[var(--sw-blue)] transition-colors group-hover:bg-[var(--sw-blue)]/[0.12]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="font-head text-[var(--sw-black)] text-[16px] md:text-[18px] leading-[1.3]">
                    {title}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-14 md:mt-16 text-center font-head text-[var(--sw-black)] text-[18px] md:text-[20px] leading-[1.4] max-w-[60ch] mx-auto">
            You see all of this run live on June 17.{" "}
            <span className="text-[var(--sw-blue)]">
              No slides of theory, a working app.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
