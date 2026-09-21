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

type Reading = {
  tone: "past" | "ok";
  status: string;
  /** the instant the clock counts from (past) or to (ok) */
  anchor: number;
  caption: string;
  note: string;
};

const at = (iso: string) => new Date(`${iso}T00:00:00`).getTime();

const fmt = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

function read(r: Release, now: number): Reading {
  if (r.replatform) {
    return {
      tone: "past",
      status: "End of life",
      anchor: at(r.reg),
      caption: "without a security patch",
      note: `Magento 2 is a different architecture, so this is a replatform. Perpetual starts the day you are live on ${LATEST}.`,
    };
  }
  const reg = at(r.reg);
  const ext = r.ext ? at(r.ext) : null;
  if (ext !== null && now > ext) {
    return {
      tone: "past",
      status: "No security cover",
      anchor: ext,
      caption: "without a security patch",
      note: "Every vulnerability disclosed since then is open on your live store.",
    };
  }
  if (now > reg) {
    return {
      tone: "past",
      status: "Extended support only",
      anchor: reg,
      caption: "since regular support ended",
      note: "On Magento Open Source this version is already past its hard stop.",
    };
  }
  return {
    tone: "ok",
    status: r.behind === 0 ? "Current release" : "In regular support",
    anchor: reg,
    caption: "of regular support left",
    note:
      r.behind === 0
        ? "Staying current through every future release is what Perpetual covers."
        : "The upgrade is cheapest now, before support lapses.",
  };
}

const two = (n: number) => String(n).padStart(2, "0");

/**
 * Pick a release, read the clock. For a release past its date the clock counts
 * up, second by second, from the day Adobe stopped; for one still covered it
 * counts down. Then the two prices for closing the gap.
 *
 * Placeholders render on the server and on the first client paint, as the
 * twice-as-fast countdown does, so the markup matches and nothing jumps.
 */
export function VersionCheck() {
  const [id, setId] = useState(DEFAULT_RELEASE);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const t = window.setInterval(tick, 1000);
    return () => window.clearInterval(t);
  }, []);

  const release = RELEASES.find((r) => r.id === id) ?? RELEASES[0];
  const reading = now === null ? null : read(release, now);
  const s =
    now === null || reading === null
      ? null
      : Math.floor(Math.abs(now - reading.anchor) / 1000);
  const days = s === null ? null : Math.floor(s / 86400);
  const clock =
    s === null
      ? "--:--:--"
      : `${two(Math.floor((s % 86400) / 3600))}:${two(Math.floor((s % 3600) / 60))}:${two(s % 60)}`;
  const tone = reading?.tone === "ok" ? "rgba(255,255,255,0.92)" : RED;

  const regPast = now !== null && now > at(release.reg);
  const extPast = now !== null && release.ext !== null && now > at(release.ext);
  const facts: { k: string; v: string }[] = release.replatform
    ? [
        { k: "Support ended", v: fmt(release.reg) },
        { k: "Extended support", v: "None" },
        { k: `Path to ${LATEST}`, v: "Replatform" },
      ]
    : [
        {
          k: regPast ? "Regular support ended" : "Regular support ends",
          v: fmt(release.reg),
        },
        {
          k: extPast ? "Extended support ended" : "Extended support ends",
          v: release.ext ? fmt(release.ext) : "Not published",
        },
        {
          k: `Releases behind ${LATEST}`,
          v: release.behind === 0 ? "None" : String(release.behind),
        },
      ];

  const market = release.replatform
    ? "From $35,000"
    : release.behind === 0
      ? "Nothing to close"
      : "$15,000 to $35,000";

  return (
    <section id="version" className="relative z-10 py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[64px] leading-[1.02] tracking-[-0.02em] max-w-[18ch]">
            Adobe already set your deadline
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="label-code text-white/55 mt-10 md:mt-14 mb-4">
            Pick your version
          </div>
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
          <div className="mt-12 md:mt-16 grid gap-12 lg:gap-20 lg:grid-cols-[1.25fr_1fr] items-end">
            <div role="timer" aria-live="off" aria-label={`Magento ${release.name} support clock`}>
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden
                  className="h-2 w-2 rounded-full animate-pulse"
                  style={{ background: tone }}
                />
                <span className="label-code" style={{ color: tone }}>
                  {reading ? reading.status : "Magento"}
                </span>
              </div>
              <div className="mt-4 flex items-end gap-4 md:gap-6 tabular-nums">
                <div
                  className="font-head font-bold leading-[0.86] tracking-[-0.04em] text-[96px] sm:text-[128px] md:text-[168px] lg:text-[200px]"
                  style={{
                    color: tone,
                    textShadow:
                      reading?.tone === "ok"
                        ? "0 0 40px rgba(143,182,255,0.3)"
                        : "0 0 56px rgba(224,79,79,0.3)",
                  }}
                >
                  {days === null ? "--" : days.toLocaleString("en-US")}
                </div>
                <div className="pb-2 md:pb-4">
                  <div className="font-head font-bold text-white text-[22px] md:text-[32px] leading-none">
                    days
                  </div>
                  <div className="font-head text-white/55 text-[20px] md:text-[28px] leading-none mt-2 md:mt-3">
                    {clock}
                  </div>
                </div>
              </div>
              <div className="mt-5 font-head font-bold uppercase text-white/90 text-[15px] md:text-[18px] tracking-[0.03em]">
                {reading ? reading.caption : " "}
              </div>
              <p className="mt-3 text-white/60 text-[15px] md:text-[16px] leading-relaxed max-w-[46ch] min-h-[3.2em]">
                {reading ? reading.note : ""}
              </p>
            </div>

            <div>
              <dl>
                {facts.map((f) => (
                  <div
                    key={f.k}
                    className="flex items-baseline justify-between gap-6 py-3.5 border-t border-white/12"
                  >
                    <dt className="text-white/55 text-[14px] md:text-[15px]">{f.k}</dt>
                    <dd className="font-head text-white text-[15px] md:text-[17px] text-right tabular-nums">
                      {f.v}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="border-t border-white/12 pt-6 mt-1 flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
                <div>
                  <div className="label-code text-white/55">Market rate</div>
                  <div
                    className={`mt-3 font-head font-bold text-white/55 text-[19px] md:text-[24px] leading-[1.1] whitespace-nowrap ${
                      release.behind === 0 && !release.replatform
                        ? ""
                        : "line-through decoration-[1.5px]"
                    }`}
                    style={{ textDecorationColor: RED }}
                  >
                    {market}
                  </div>
                </div>
                <div>
                  <div className="label-code" style={{ color: "var(--sw-mint)" }}>
                    With Perpetual
                  </div>
                  <div
                    className="mt-1 font-head font-bold leading-[0.9] tracking-[-0.04em] text-[72px] md:text-[104px]"
                    style={{
                      color: "var(--sw-mint)",
                      textShadow: "0 0 56px rgba(110,247,110,0.28)",
                    }}
                  >
                    $0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <a href="#cta" onClick={scrollToSection("cta")} className={btnPrimary}>
              Get free Magento upgrades
            </a>
            <p className="text-white/45 text-[13px] leading-relaxed max-w-[62ch]">
              Dates follow the{" "}
              <a
                href={POLICY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white/80"
              >
                Adobe Commerce software lifecycle policy
              </a>
              . Magento Open Source has no extended support.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
