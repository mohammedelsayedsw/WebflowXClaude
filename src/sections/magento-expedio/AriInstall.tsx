"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";
import { btnSecondary } from "./Hero";
import { INSTALL_WITH_ARI_URL } from "./packageData";

const STEPS = [
  ["Write it in chat", "Write “Install Expedio on our store” to Ari, the way you would write to a developer."],
  ["Ari installs Expedio on a copy of your store", "Open the preview and click through it yourself."],
  ["You approve the switch", "Your live store changes only when your team releases the change."],
];

/** Copy from withari.ai/expedio, "Ari installs Expedio". */
export function AriInstall() {
  return (
    <section id="ari" className="relative z-10 py-24 md:py-36 scroll-mt-20">
      <div className="wrap grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <Reveal className="lg:col-span-5">
          <img src={assetUrl("/magento/expedio/ari.svg")} alt="Ari" className="h-[44px] md:h-[52px] w-auto" />
          <h2 className="mt-8 text-[40px] md:text-[56px] lg:text-[64px]">Ari installs Expedio</h2>
          <p className="mt-6 text-white/75 text-[17px] md:text-[18px] leading-[1.6]">
            Ari is the first agent for Magento, built by scandiweb. If your store is connected to Ari, one message installs
            Expedio. Ari works on a private copy of your store, and the change comes back as a pull request your team
            reviews and releases.
          </p>
          <a href={INSTALL_WITH_ARI_URL} target="_blank" rel="noopener" className={`${btnSecondary} mt-8`}>
            How Ari installs Expedio <span aria-hidden>↗</span>
          </a>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
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
    </section>
  );
}
