"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { VIDEO, vid } from "./config";
import { track } from "@/sections/retention-90/track";

/* Hero video: the 24 s HOOK 1 cut loops muted (captions are burned in). "Watch with sound"
   opens the full 46 s version in a player. 9:16 on phones, 4:5 from tablet up. */
export function HeroVideo({ onPlay }: { onPlay: () => void }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [mobile, setMobile] = useState(true);
  useEffect(() => {
    const m = window.matchMedia("(max-width: 759px)");
    const on = () => setMobile(m.matches);
    on();
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, []);
  useEffect(() => { ref.current?.play().catch(() => {}); }, [mobile]);
  const base = mobile ? VIDEO.heroMobile : VIDEO.heroDesktop;
  return (
    <div className={"ga-hv" + (mobile ? " m" : "")}>
      <video ref={ref} key={base} src={vid(base, "mp4")} poster={vid(base, "jpg")} muted playsInline loop autoPlay preload="metadata" aria-label="scandiweb 15% growth guarantee video" />
      <button className="ga-hv-btn" onClick={onPlay}>
        <span className="ga-play" aria-hidden="true">&#9654;</span> Watch with sound <span className="ga-hv-len">0:46</span>
      </button>
    </div>
  );
}

/* Full video with sound. Deep link: #watch opens it (#watch-12 starts at 0:12). */
export function VideoPlayer({ open, start, onClose }: { open: boolean; start: number; onClose: () => void }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);
  const [needTap, setNeedTap] = useState(false);
  const [mobile, setMobile] = useState(true);
  const t0 = useRef(0);
  useEffect(() => { setMounted(true); setMobile(window.innerWidth < 760); }, []);
  useEffect(() => {
    const v = ref.current;
    if (!open || !v) return;
    t0.current = Date.now();
    track("video_open", { at: start });
    document.body.classList.add("noscroll");
    v.currentTime = start || 0;
    v.muted = false;
    v.play().catch(() => { v.muted = true; setNeedTap(true); v.play().catch(() => {}); });
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("noscroll");
      document.removeEventListener("keydown", onKey);
      track("video_close", { sec: Math.round((Date.now() - t0.current) / 1000), pos: Math.round(v.currentTime) });
      v.pause();
    };
  }, [open, start, onClose]);
  if (!mounted) return null;
  const base = mobile ? VIDEO.fullMobile : VIDEO.fullDesktop;
  return createPortal(
    <div className={"ga ga-vp" + (open ? " on" : "")} role="dialog" aria-modal="true" aria-label="Video" aria-hidden={!open}>
      <div className="ga-vp-bg" onClick={onClose} />
      <div className={"ga-vp-box" + (mobile ? " m" : "")}>
        <button className="ga-x" onClick={onClose} aria-label="Close video">&times;</button>
        <video ref={ref} src={open ? vid(base, "mp4") : undefined} poster={vid(base, "jpg")} playsInline controls preload="none"
          onEnded={() => track("video_end")} />
        {needTap && (
          <button className="ga-sound" onClick={() => { const v = ref.current; if (v) { v.muted = false; v.play().catch(() => {}); } setNeedTap(false); }}>
            Tap for sound
          </button>
        )}
      </div>
    </div>,
    document.body,
  );
}
