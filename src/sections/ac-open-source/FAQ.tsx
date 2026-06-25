"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Q = { q: string; a: string };

const faqs: Q[] = [
  {
    q: "Is Magento Open Source really the same as Adobe Commerce?",
    a: "It is the same Magento core. Adobe Commerce is Open Source plus a layer of licensed enterprise modules. The platform, admin, data model, and developer experience are identical. The move is a migration, not a replatform, which is why it is fast and low-risk.",
  },
  {
    q: "What happens to the enterprise features I rely on?",
    a: "B2B, page builder, segmentation, gift cards, rewards, and advanced search all have proven Open Source equivalents. We rebuild the ones you actually use as owned solutions during the migration. The free check tells you exactly which features apply to you and what each costs to rebuild.",
  },
  {
    q: "Will I lose my custom code and integrations?",
    a: "No. Custom modules, extensions, and integrations carry over because they target the same Magento core. We validate each one against the Open Source build before cutover so nothing breaks in production.",
  },
  {
    q: "How much does the migration cost, and what do I save?",
    a: "Full migrations start from $15,000 and are scoped to your store. The saving is your current Adobe Commerce license, which recurs every year and rises at renewal. For most merchants the migration pays for itself inside the first year. The free check puts your exact numbers on paper.",
  },
  {
    q: "What is the live demo for?",
    a: "It is proof before commitment. For $1,500 we stand up your own catalog and checkout on Open Source so you can click through the real flows, not a template. The fee is credited toward a full migration if you proceed.",
  },
  {
    q: "Will there be downtime during the move?",
    a: "No gap in trading. We build and validate the Open Source store in parallel with your live site and run the cutover once both sides confirm the handover is clean. No big-bang switch.",
  },
  {
    q: "Who hosts it after the move?",
    a: "You do, on infrastructure you control. Open Source is self-hosted, so there is no vendor lock-in and no platform fee. We can set up and manage hosting for you, or hand it to your own team.",
  },
  {
    q: "What if the migration does not make sense for my store?",
    a: "We tell you on the free check. If your Adobe Commerce setup leans heavily on features that are expensive to rebuild, or the license saving is small for your scale, we will say so rather than sell you a move you do not need.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden"
    >
      <div className="wrap relative">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-[1fr_2fr] items-start">
          <Reveal>
            <div className="label-code text-white/55 mb-5">
              what people ask first
            </div>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[18ch]">
              The{" "}
              <span style={{ color: "var(--sw-mint)" }}>
                obvious questions
              </span>
              , answered.
            </h2>
            <p className="mt-7 text-[15px] md:text-[17px] text-white/80 leading-relaxed max-w-[44ch]">
              If yours isn&apos;t here, put it on the migration check. We&apos;ll
              answer it then.
            </p>
          </Reveal>

          <div className="space-y-3 md:space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <details
                  className="group rounded-[4px] border border-white/10 px-6 py-5 md:px-7 md:py-6 open:bg-white/[0.03]"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 60%), rgba(16,19,44,0.45)",
                  }}
                >
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                    <span className="font-head text-white text-[16px] md:text-[18px] leading-[1.3]">
                      {f.q}
                    </span>
                    <span
                      aria-hidden
                      className="shrink-0 mt-1 h-5 w-5 rounded-full border border-white/40 grid place-items-center text-white/70 group-open:rotate-45 transition"
                    >
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-[14px] md:text-[15px] text-white/75 leading-relaxed">
                    {f.a}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
