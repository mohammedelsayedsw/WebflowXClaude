"use client";

import { useRef, useState } from "react";
import { assetUrl } from "@/lib/assets";

const VIDEO = assetUrl("/ari-for-apotheka/ari-for-apotheka.mp4");
const POSTER = assetUrl("/ari-for-apotheka/poster.jpg");
const BOOK_A_CALL = "https://calendly.com/agentformagento/democall";

/* Ari brand (as on withari.ai): paper #F3F1EA, ink #14130F, green #2D572F, Inter 500, square corners.
   On dark, Ari's main button is a paper fill with ink text (hover: outline); on light, a green fill. */
const PAPER = "#F3F1EA";
const GREEN = "#2D572F";

export function Reel() {
  const video = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    setStarted(true);
    void video.current?.play();
  };

  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8">
      <div
        className="relative overflow-hidden rounded-[8px] border border-[rgba(243,241,234,0.12)] bg-black"
        style={{ width: "min(calc((100svh - 180px) * 9 / 16), calc(100vw - 32px), 540px)", aspectRatio: "9 / 16" }}
      >
        {/* object-contain: in fullscreen on a landscape screen the portrait video is letterboxed, not cropped and
            blown up. preload="auto": the page exists to play this video, so buffering starts before the click. */}
        <video
          ref={video}
          className="absolute inset-0 h-full w-full bg-black object-contain"
          src={VIDEO}
          poster={POSTER}
          preload="auto"
          playsInline
          controls={started}
          onPlay={() => setStarted(true)}
        />
        {!started && (
          <button
            type="button"
            onClick={play}
            aria-label="Play the video"
            className="group absolute inset-0 flex cursor-pointer items-end justify-center pb-[17%]"
          >
            {/* sits in the empty space under the greeting, so the poster's Apotheka x Ari stays visible;
                Ari green with a paper triangle reads on the light poster */}
            <span
              className="flex h-[76px] w-[76px] items-center justify-center transition-transform duration-200 group-hover:scale-[1.06]"
              style={{ background: GREEN }}
            >
              <svg width="24" height="28" viewBox="0 0 24 28" aria-hidden="true">
                <path d="M4 2.5v23L22 14z" fill={PAPER} />
              </svg>
            </span>
          </button>
        )}
      </div>

      <a
        href={BOOK_A_CALL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-[10px] whitespace-nowrap border border-[#F3F1EA] bg-[#F3F1EA] px-7 py-4 text-[17px] font-medium leading-6 tracking-[-0.005em] text-[#14130F] transition-colors duration-200 hover:bg-transparent hover:text-[#F3F1EA]"
        style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
      >
        Book a call with us
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    </div>
  );
}
