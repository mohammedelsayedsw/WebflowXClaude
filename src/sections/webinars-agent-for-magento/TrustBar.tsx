"use client";

import { assetUrl } from "@/lib/assets";

/**
 * Trust bar that closes the hero. Same marquee treatment as
 * /solutions/webinars/cdp and /solutions/webinars/opera-layer.
 *
 * The headline names Jaguar, BMW and Ford, which have no logo file in
 * public/shared/logos/clients. Per the repo rule for missing logos they are
 * carried in the sentence only and left out of the marquee rather than faked.
 * {/* TODO: add jaguar / bmw / ford logo files and include them below *}
 */
export function TrustBar() {
  const logos: { src: string; alt: string; h: number }[] = [
    { src: "/shared/logos/clients/puma.svg", alt: "PUMA", h: 30 },
    {
      src: "/shared/logos/clients/nytimes.svg",
      alt: "The New York Times",
      h: 22,
    },
    { src: "/shared/logos/clients/samsung.svg", alt: "Samsung", h: 22 },
    { src: "/shared/logos/clients/adobe.svg", alt: "Adobe", h: 22 },
    { src: "/shared/logos/clients/acer.png", alt: "Acer", h: 22 },
    {
      src: "/shared/logos/clients/olympus.png",
      alt: "OM Digital Solutions / Olympus",
      h: 24,
    },
    {
      src: "/shared/logos/clients/boyscouts.png",
      alt: "Boy Scouts of America",
      h: 28,
    },
  ];
  // duplicated so the marquee track can translate by -50% and loop without a jump
  const loop = [...logos, ...logos];

  return (
    <div
      className="relative z-10"
      style={{
        background:
          "linear-gradient(180deg, rgba(16,19,44,0) 0%, rgba(16,19,44,0.55) 100%)",
        borderTop: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <div className="wrap py-[clamp(14px,2.5vh,32px)] flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
        <div className="font-head font-bold text-white text-[14px] md:text-[17px] leading-[1.35] shrink-0 max-w-[34rem]">
          Built by scandiweb, the team behind stores for PUMA, Jaguar, BMW,
          Ford, and The New York Times
        </div>
        <div
          className="relative flex-1 overflow-hidden"
          aria-label="Client logos"
        >
          <div className="sw-marquee-track flex items-center gap-x-12 md:gap-x-16">
            {loop.map((l, i) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={i}
                src={assetUrl(l.src)}
                alt={i < logos.length ? l.alt : ""}
                aria-hidden={i >= logos.length}
                className="w-auto opacity-80 shrink-0"
                style={{
                  maxHeight: `${l.h}px`,
                  height: "auto",
                  filter: "brightness(0) invert(1)",
                }}
              />
            ))}
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-20"
            style={{
              background:
                "linear-gradient(90deg, rgba(16,19,44,0.8) 0%, rgba(16,19,44,0) 100%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-20"
            style={{
              background:
                "linear-gradient(270deg, rgba(16,19,44,0.8) 0%, rgba(16,19,44,0) 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
