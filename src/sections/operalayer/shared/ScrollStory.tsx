"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

export type Step = { title: string; body: string };

/**
 * Hero plus scroll story. On desktop the stage sits pinned on the right and
 * changes as each step scrolls past on the left. On phones every step carries
 * its own copy of the stage, so nothing has to stay pinned on a small screen.
 * The stage is a pure function of the step index.
 */
function StepBlock({
  index,
  onEnter,
  children,
  className = "",
}: {
  index: number;
  onEnter: (i: number) => void;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => {
    if (inView) onEnter(index);
  }, [inView, index, onEnter]);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

function MobileStage({ step, Stage }: { step: number; Stage: (p: { step: number }) => React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div ref={ref} className="lg:hidden mt-8">
      <Stage step={inView ? step : Math.max(0, step - 1)} />
    </div>
  );
}

export function ScrollStory({
  intro,
  steps,
  Stage,
}: {
  intro: React.ReactNode;
  steps: Step[];
  Stage: (p: { step: number }) => React.ReactNode;
}) {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative"
      style={{
        background:
          "radial-gradient(1100px 760px at 78% 8%, #1d2566 0%, transparent 60%), linear-gradient(180deg, #0c1030 0%, #10132c 40%, #10132c 100%)",
      }}
    >
      <div className="wrap w-full">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-x-16">
          <div>
            <StepBlock
              index={0}
              onEnter={setActive}
              className="min-h-[auto] lg:min-h-screen flex flex-col justify-center pt-36 pb-10 lg:pt-28 lg:pb-28"
            >
              {intro}
              <MobileStage step={0} Stage={Stage} />
            </StepBlock>

            {steps.map((s, i) => (
              <StepBlock
                key={s.title}
                index={i + 1}
                onEnter={setActive}
                className="py-14 lg:py-0 lg:min-h-[78vh] flex flex-col justify-center"
              >
                <motion.div
                  initial={{ opacity: 0.25 }}
                  animate={{ opacity: active === i + 1 ? 1 : 0.25 }}
                  transition={{ duration: 0.4 }}
                  className="max-lg:!opacity-100"
                >
                  <h2 className="font-head text-white text-[30px] md:text-[40px] leading-[1.1] max-w-[17ch] text-balance">
                    {s.title}
                  </h2>
                  <p className="mt-5 text-white/70 text-[17px] md:text-[19px] leading-relaxed max-w-[38ch]">
                    {s.body}
                  </p>
                </motion.div>
                <MobileStage step={i + 1} Stage={Stage} />
              </StepBlock>
            ))}
            <div className="hidden lg:block h-[20vh]" />
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-0 h-screen flex items-center">
              <div className="w-full">
                <Stage step={active} />
                <div className="mt-8 flex gap-2 justify-center" aria-hidden>
                  {[0, ...steps.map((_, i) => i + 1)].map((i) => (
                    <span
                      key={i}
                      className="h-1 rounded-full transition-all duration-500"
                      style={{
                        width: i === active ? 28 : 8,
                        background: i === active ? "var(--sw-mint)" : "rgba(255,255,255,0.18)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
