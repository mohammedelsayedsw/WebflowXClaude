"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { ReconciliationFlow } from "./ReconciliationFlow";
import { ReconciliationDiagram } from "./ReconciliationDiagram";

/** Lightbox holding the full production architecture diagram. */
function ArchitectureModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Full system architecture"
      onClick={onClose}
    >
      <div
        aria-hidden
        className="fixed inset-0 bg-black/75 backdrop-blur-sm"
      />
      <div
        className="relative z-10 my-auto w-full max-w-[1120px] rounded-[6px] border border-white/12 bg-[#0e1130] p-5 md:p-9"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <div className="label-code text-[var(--sw-mint)] text-[12px] mb-2">
              Full system architecture
            </div>
            <h3 className="font-head text-white text-[20px] md:text-[26px] leading-tight">
              Document reconciliation, end to end
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] border border-white/15 text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <ReconciliationDiagram />
      </div>
    </div>
  );
}

export function CaseStudy() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="one-real-example"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:items-center">
          {/* LEFT · the story */}
          <div className="max-w-[640px]">
            <Reveal>
              <SectionLabel index="2">One real example</SectionLabel>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-[1.08] tracking-[-0.01em] mt-6 max-w-[24ch]">
                From typing it all in,{" "}
                <span style={{ color: "var(--sw-mint)" }}>
                  to checking what doesn&apos;t match
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 text-white/80 text-[16px] md:text-[18px] leading-relaxed">
                A distribution company&apos;s warehouse and accounting teams
                matched invoices, delivery notes, and transport waybills against
                purchase orders by hand. Every shipment, every day.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-5 text-white/80 text-[16px] md:text-[18px] leading-relaxed">
                Now quantity gaps, price differences, and pack mismatches like
                boxes against pieces are flagged before anything posts. Clean
                lines collapse away, so the team only opens what actually needs a
                decision.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-5 text-white/80 text-[16px] md:text-[18px] leading-relaxed">
                It learns each supplier as it goes, their item codes, their pack
                conversions, which lines are freight rather than product. Every
                correction feeds back, so the same mistake stops coming back.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-5 text-white/80 text-[16px] md:text-[18px] leading-relaxed">
                They are now building their second module with us. The warehouse
                manager who used to do this by hand is smiling.
              </p>
            </Reveal>
          </div>

          {/* RIGHT · compact flow */}
          <Reveal delay={0.15}>
            <div className="rounded-[4px] border border-white/10 bg-white/[0.02] p-6 md:p-7">
              <ReconciliationFlow />
            </div>

            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="font-head mt-6 inline-flex items-center gap-2 text-[14px] md:text-[15px] font-semibold text-[var(--sw-mint)] underline decoration-[var(--sw-mint)]/40 underline-offset-4 transition hover:decoration-[var(--sw-mint)]"
            >
              See the full system architecture
              <span aria-hidden>&rarr;</span>
            </button>
          </Reveal>
        </div>
      </div>

      {modalOpen && <ArchitectureModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}
