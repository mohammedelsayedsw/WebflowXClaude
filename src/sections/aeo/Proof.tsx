"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { LINE_DARK, SECTION, SectionHead, WRAP } from "./ui";

const CARD = `flex min-w-0 flex-col border ${LINE_DARK} p-6 min-[26.3125rem]:p-7`;
const CLIENT_TYPE = "mt-2 mb-7 md:mb-9 text-[13px] text-[#dadcf1]";
const RESULT_TITLE = "mt-3 mb-6 font-head font-bold text-white text-[21px] leading-[1.3] tracking-[-0.02em]";
const NOTE = "text-[#b1b5cf]";

type Case = {
  client: string;
  nameClass: string;
  type: string;
  number: string;
  unit: string;
  title: [string, string];
  rows: { label: string; value: number }[];
  chartNote: string;
  chartLabel: string;
  description: string;
  support: { number: string; label: string };
};

const CASES: Case[] = [
  {
    client: "FELCO",
    nameClass: "font-bold tracking-[0.02em]",
    type: "Swiss precision tool manufacturer",
    number: "+1,415",
    unit: "%",
    title: ["AI traffic growth", "year over year"],
    rows: [
      { label: "Prior year", value: 100 },
      { label: "Reported period", value: 1515 },
    ],
    chartNote: "AI traffic index. Prior year = 100.",
    chartLabel: "AI traffic indexed to 100 in the prior year and 1,515 in the reported period, a 1,415 percent increase.",
    description: "Product and category content improvements, structured data, and relevant third-party citations.",
    support: { number: "+1,541%", label: "Product views from AI traffic, year over year" },
  },
  {
    client: "Habito",
    nameClass: "font-semibold tracking-[-0.03em]",
    type: "UK digital mortgage broker",
    number: "15",
    unit: "×",
    title: ["Return on AEO investment", "over three months"],
    rows: [
      { label: "Prior 3 months", value: 100 },
      { label: "Measured 3 months", value: 255 },
    ],
    chartNote: "AI conversion index. Prior 3 months = 100.",
    chartLabel:
      "Conversions from AI referred traffic indexed to 100 in the prior three months and 255 in the measured three months, a 155 percent increase.",
    description: "Content structured around the questions and sources AI tools use when recommending mortgage providers.",
    support: { number: "+155%", label: "Conversions from AI traffic, versus the prior three months" },
  },
];

const BYREDO_WORK = [
  "AI visibility and source tracking",
  "Category content and FAQ recommendations",
  "Editorial and retailer opportunities",
];

/** Index bars: the earlier period against the reported one, widths from the real index values. */
function IndexChart({ c }: { c: Case }) {
  const max = Math.max(...c.rows.map((r) => r.value));
  return (
    <div role="img" aria-label={c.chartLabel} className="mt-0.5 mb-[22px]">
      {c.rows.map((r, i) => {
        const current = i === c.rows.length - 1;
        return (
          <div
            key={r.label}
            className="my-3 grid grid-cols-[107px_minmax(0,1fr)_43px] min-[26.3125rem]:grid-cols-[114px_minmax(0,1fr)_46px] md:grid-cols-[105px_minmax(0,1fr)_44px] items-center gap-2 min-[26.3125rem]:gap-2.5 text-[11px] min-[26.3125rem]:text-[12px] md:text-[11px]"
          >
            <span>{r.label}</span>
            <div className="h-[15px]">
              <i
                className="block h-full"
                style={{ width: `${(r.value / max) * 100}%`, background: current ? "var(--sw-mint)" : "#7e83a0" }}
              />
            </div>
            <b className={`text-right text-[12px] font-medium ${current ? "text-[var(--sw-mint)]" : ""}`}>
              {r.value.toLocaleString("en-US")}
            </b>
          </div>
        );
      })}
      <p className={`mt-4 text-[11px] leading-[1.5] ${NOTE}`}>{c.chartNote}</p>
    </div>
  );
}

export function Proof() {
  return (
    <section id="proof" className={`relative z-10 bg-[var(--sw-black)] text-white ${SECTION}`}>
      <div className={WRAP}>
        <Reveal>
          <SectionHead
            dark
            eyebrow="Our work in AI search"
            title={
              <>
                Real clients.
                <br />
                <span className="text-[var(--sw-mint)]">Measurable progress.</span>
              </>
            }
            intro="Our team helps businesses build their presence in AI search, from specialist retailers to global brands."
          />
        </Reveal>

        <div className="grid grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-2 min-[68.75rem]:grid-cols-3">
          {CASES.map((c, i) => (
            <Reveal key={c.client} delay={i * 0.07} className="flex">
              <article className={`${CARD} w-full`}>
                <div className={`font-head text-[30px] leading-[1.2] ${c.nameClass}`}>{c.client}</div>
                <p className={CLIENT_TYPE}>{c.type}</p>
                <div className="font-head font-bold text-[var(--sw-mint)] text-[64px] md:text-[clamp(48px,4.6vw,68px)] leading-[1.05] tracking-[-0.06em]">
                  {c.number}
                  <span className="text-[0.7em]">{c.unit}</span>
                </div>
                <h3 className={RESULT_TITLE}>
                  {c.title[0]}
                  <br />
                  {c.title[1]}
                </h3>
                <IndexChart c={c} />
                <p className="mb-7 text-[14px] leading-[1.65] text-[#dadcf1]">{c.description}</p>
                <div className={`mt-auto border-t ${LINE_DARK} pt-[22px]`}>
                  <strong className="mb-1.5 block font-head font-semibold text-[var(--sw-mint)] text-[30px] leading-[1.2]">
                    {c.support.number}
                  </strong>
                  <span className="block text-[13px] leading-[1.6] text-[#dadcf1]">{c.support.label}</span>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={0.14} className="flex md:col-span-2 min-[68.75rem]:col-span-1">
            <article className={`${CARD} w-full md:grid md:grid-cols-2 md:gap-x-10 min-[68.75rem]:flex`}>
              <div>
                <div className="font-head font-bold text-[30px] leading-[1.2] tracking-[0.12em]">BYREDO</div>
                <p className={`${CLIENT_TYPE} md:mb-5 min-[68.75rem]:mb-9`}>Luxury fragrance brand</p>
                <div className="font-head font-semibold text-[var(--sw-mint)] text-[52px] leading-[1.1] tracking-[-0.04em]">Global</div>
                <h3 className={`${RESULT_TITLE} mb-6`}>AI search program</h3>
                <p className="mb-4 text-[15px] leading-[1.6] text-[#dadcf1]">
                  A dedicated AEO engagement alongside the brand’s existing partners.
                </p>
              </div>
              <div className="mt-1 mb-5 md:m-0 min-[68.75rem]:mt-1 min-[68.75rem]:mb-6">
                {BYREDO_WORK.map((t, i) => (
                  <div key={t} className={`flex gap-4 border-t ${LINE_DARK} py-4`}>
                    <span className="pt-[3px] text-[12px] text-[var(--sw-mint)]">{i + 1}</span>
                    <p className="text-[14px] text-[#dadcf1]">{t}</p>
                  </div>
                ))}
              </div>
              <p className={`mt-auto text-[12px] md:col-span-2 md:mt-5 min-[68.75rem]:mt-auto ${NOTE}`}>
                An example of our ongoing client work in AI search.
              </p>
            </article>
          </Reveal>
        </div>

        <p className={`mt-6 max-w-[1040px] text-[12px] leading-[1.6] ${NOTE}`}>
          FELCO and Habito results come from broader client programs with their own scope. They are not results or
          guarantees for the Core subscription. Habito’s comparison uses GA4 traffic and conversions from known AI
          referrers.
        </p>
      </div>
    </section>
  );
}
