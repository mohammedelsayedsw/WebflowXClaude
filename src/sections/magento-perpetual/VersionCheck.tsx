"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { scrollToSection } from "./scrollToSection";
import {
  DEFAULT_RELEASE,
  LATEST,
  POLICY_URL,
  RELEASES,
  type Release,
} from "./versions";

const RED = "#e04f4f";
const DAY = 86400000;

const at = (iso: string) => new Date(`${iso}T00:00:00`).getTime();

const fmt = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

/** How many days, counted from or to which date, and the sentence that says so. */
function read(r: Release, now: number) {
  const reg = at(r.reg);
  const ext = r.ext ? at(r.ext) : null;
  if (r.replatform) {
    return { past: true, days: (now - reg) / DAY, line: `days without security patches, since ${fmt(r.reg)}` };
  }
  if (r.ext && ext !== null && now > ext) {
    return { past: true, days: (now - ext) / DAY, line: `days without security patches, since ${fmt(r.ext)}` };
  }
  if (now > reg) {
    return { past: true, days: (now - reg) / DAY, line: `days since regular support ended, on ${fmt(r.reg)}` };
  }
  return { past: false, days: (reg - now) / DAY, line: `days of regular support left, until ${fmt(r.reg)}` };
}

/* The section runs on four type styles and no more: the heading, the small
   label, the figure and the sentence. Both columns use the same three. */
const LABEL = "label-code text-white/55";
const FIGURE =
  "mt-5 font-head font-bold leading-[0.86] tracking-[-0.04em] tabular-nums text-[88px] sm:text-[120px] md:text-[150px] lg:text-[180px]";
const LINE = "mt-6 text-white/75 text-[17px] md:text-[19px] leading-snug max-w-[40ch]";

/**
 * Pick a release. Left: how many days it has been out of support (or has
 * left). Right: what closing the gap costs with Perpetual, against the market
 * rate. The day count needs the reader's clock, so a placeholder renders on the
 * server and on the first client paint.
 */
export function VersionCheck() {
  const [id, setId] = useState(DEFAULT_RELEASE);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
  }, []);

  const release = RELEASES.find((r) => r.id === id) ?? RELEASES[0];
  const reading = now === null ? null : read(release, now);

  const offer = release.replatform
    ? "Every upgrade after your replatform"
    : release.behind === 0
      ? "Your next upgrade with Perpetual"
      : `Your upgrade to ${LATEST} with Perpetual`;

  return (
    <section id="version" className="relative z-10 py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[64px] leading-[1.02] tracking-[-0.02em] max-w-[18ch]">
            Adobe already set your deadline
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className={`${LABEL} mt-10 md:mt-14 mb-4`}>Pick your version</div>
          <div
            role="group"
            aria-label="Your Magento version"
            className="flex flex-wrap gap-2 md:gap-2.5"
          >
            {RELEASES.map((r) => {
              const on = r.id === id;
              return (
                <button
                  key={r.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setId(r.id)}
                  className={`h-11 md:h-12 px-4 md:px-5 rounded-[2px] border font-head font-semibold text-[15px] md:text-[17px] tabular-nums transition cursor-pointer ${
                    on
                      ? "border-white bg-white text-[var(--sw-black)]"
                      : "border-white/25 text-white/75 hover:border-white/60 hover:text-white"
                  }`}
                >
                  {r.name}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-14 md:mt-20 grid gap-14 md:gap-10 md:grid-cols-2">
            <div aria-live="polite">
              <div className={LABEL}>
                {release.replatform ? release.name : `Magento ${release.name}`}
              </div>
              <div
                className={FIGURE}
                style={{
                  color: reading && !reading.past ? "#fff" : RED,
                  textShadow:
                    reading && !reading.past
                      ? "0 0 40px rgba(143,182,255,0.3)"
                      : "0 0 56px rgba(224,79,79,0.3)",
                }}
              >
                {reading ? Math.floor(reading.days).toLocaleString("en-US") : "--"}
              </div>
              <p className={LINE}>{reading ? reading.line : " "}</p>
            </div>

            <div>
              <div className={LABEL}>{offer}</div>
              <div
                className={FIGURE}
                style={{
                  color: "var(--sw-mint)",
                  textShadow: "0 0 56px rgba(110,247,110,0.28)",
                }}
              >
                $0
              </div>
              <p className={LINE}>
                {release.replatform ? (
                  <>Replatform to Magento {LATEST}: from $35,000</>
                ) : (
                  <>
                    Market rate: <s>$15,000 to $35,000</s>
                  </>
                )}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-14 md:mt-20 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
            <a href="#cta" onClick={scrollToSection("cta")} className={btnPrimary}>
              Get free Magento upgrades
            </a>
            <a
              href={POLICY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${LABEL} underline underline-offset-4 hover:text-white/85`}
            >
              Dates: Adobe lifecycle policy
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
