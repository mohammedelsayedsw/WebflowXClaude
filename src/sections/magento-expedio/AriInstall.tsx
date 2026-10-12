"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";
import { INSTALL_WITH_ARI_URL } from "./packageData";

const STEPS = [
  ["Write it in chat", "Write “Install Expedio on our store” to Ari, the way you would write to a developer."],
  ["Ari installs Expedio on a copy of your store", "Open the preview and click through it yourself."],
  ["You approve the switch", "Your live store changes only when your team releases the change."],
];

const LOG: [string, string][] = [
  ["Read the modules, theme and hosting", "1m"],
  ["Installed Expedio on the preview store", "6m"],
  ["Placed a test order through checkout", "2m"],
  ["Checked search, cart and the admin", "3m"],
];

/* Ari's own palette, so the chat reads as Ari's product. */
const ARI = { ink: "#14130F", card: "#1b1a15", line: "rgba(246,244,238,.14)", text: "#F6F4EE", green: "#2D572F", greenL: "#7fc483" };

/** Copy and chat mock from withari.ai/expedio, "Ari installs Expedio". */
export function AriInstall() {
  return (
    <section id="ari" className="relative z-10 py-24 md:py-36 scroll-mt-20">
      <div className="wrap">
        <Reveal className="max-w-[46rem]">
          <h2 className="flex items-center gap-4 md:gap-5 text-[40px] md:text-[56px] lg:text-[64px]">
            <svg viewBox="0 0 130 100" className="h-[0.62em] w-auto shrink-0" aria-hidden>
              <path d="M0 0 L50 50 L0 100" fill="none" stroke="#F6F4EE" strokeWidth="19" />
              <path d="M76 90 L117 90" fill="none" stroke="#6ef76e" strokeWidth="19" />
            </svg>
            Ari installs Expedio
          </h2>
          <p className="mt-6 text-white/75 text-[17px] md:text-[18px] leading-[1.6]">
            If your store is connected to Ari, the first agent for Magento, one message installs Expedio. Ari works on a
            private copy of your store, and the change comes back as a pull request your team reviews and releases.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <Reveal delay={0.1} className="lg:col-span-5">
            <div
              className="p-5 md:p-6 shadow-[0_40px_100px_-40px_rgba(0,0,0,.9)]"
              style={{ background: `radial-gradient(120% 60% at 10% 0%, rgba(45,87,47,.35), transparent 60%), ${ARI.card}`, border: `1px solid ${ARI.line}`, color: ARI.text }}
            >
              <div className="flex items-center justify-between pb-4" style={{ borderBottom: `1px solid ${ARI.line}` }}>
                <span className="text-[16px] font-medium">Ari</span>
                <span className="text-[12px] px-2.5 h-7 inline-flex items-center" style={{ border: `1px solid ${ARI.line}`, color: "rgba(246,244,238,.75)" }}>
                  Preview store
                </span>
              </div>
              <div className="mt-5 flex justify-end">
                <span className="text-[14px] px-3.5 py-2.5" style={{ background: "#3a3934", border: `1px solid ${ARI.line}` }}>
                  Install Expedio on our store
                </span>
              </div>
              <ul className="mt-5 pl-4 grid gap-3" style={{ borderLeft: `2px solid ${ARI.green}` }}>
                {LOG.map(([t, m]) => (
                  <li key={t} className="flex items-center gap-3 text-[14px]" style={{ color: "rgba(246,244,238,.85)" }}>
                    <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: ARI.greenL }} />
                    <span className="flex-1">{t}</span>
                    <span className="text-[11px]" style={{ color: "rgba(246,244,238,.45)" }}>{m}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between text-[14px]">
                <span className="flex items-center gap-2.5">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke={ARI.greenL} strokeWidth={2.2} aria-hidden>
                    <path d="M5 12l5 5 9-10" />
                  </svg>
                  Ready on your preview store
                </span>
                <span className="text-[13px] underline underline-offset-4" style={{ color: "rgba(246,244,238,.75)" }}>Open preview</span>
              </div>
              <div className="mt-5 p-3.5" style={{ border: `1px solid ${ARI.line}`, background: ARI.ink }}>
                <div className="text-[13px] pb-6" style={{ color: "rgba(246,244,238,.45)", borderBottom: `1px solid ${ARI.line}` }}>Message Ari</div>
                <div className="mt-3 flex justify-end">
                  <span className="h-7 w-7 rounded-full grid place-items-center" style={{ background: ARI.text, color: ARI.ink }} aria-hidden>
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.4}><path d="M5 12h13M13 6l6 6-6 6" /></svg>
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <ol className="border-t border-white/12">
              {STEPS.map(([t, d], i) => (
                <li key={t} className="grid grid-cols-[40px_1fr] gap-4 py-7 border-b border-white/12">
                  <span className="font-[family-name:var(--font-golos)] font-bold text-[22px] tabular-nums" style={{ color: "var(--sw-mint)" }}>
                    {i + 1}
                  </span>
                  <span>
                    <span className="block text-white text-[19px] md:text-[21px] font-semibold font-[family-name:var(--font-golos)]">{t}</span>
                    <span className="block mt-2 text-white/65 text-[16px] leading-[1.55]">{d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={INSTALL_WITH_ARI_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-[2px] px-7 text-[16px] font-semibold font-[family-name:var(--font-golos)] text-[#F6F4EE] transition hover:brightness-110"
            style={{ background: ARI.green }}
          >
            How Ari installs Expedio <span aria-hidden>↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
