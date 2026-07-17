"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The landing page itself is a self-contained HTML document served from
 * /public so its styling can't collide with the rest of the site. We embed it
 * in the page flow (not fixed) and auto-size the iframe to its content, so the
 * real site Header (from the route layout) and Footer (from the root layout)
 * render above and below it.
 */
export default function Page() {
  const ref = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(2600);

  useEffect(() => {
    const frame = ref.current;
    if (!frame) return;
    let ro: ResizeObserver | null = null;

    const measure = () => {
      try {
        const doc = frame.contentDocument;
        if (!doc) return;
        const h = Math.max(
          doc.body.scrollHeight,
          doc.documentElement.scrollHeight
        );
        if (h > 0) setHeight(h);
      } catch {
        /* same-origin, should not throw */
      }
    };

    const onLoad = () => {
      measure();
      // re-measure after web fonts settle (they change layout height)
      setTimeout(measure, 350);
      setTimeout(measure, 1200);
      try {
        const doc = frame.contentDocument;
        if (doc && "ResizeObserver" in window) {
          ro = new ResizeObserver(measure);
          ro.observe(doc.body);
        }
      } catch {
        /* noop */
      }
    };

    frame.addEventListener("load", onLoad);
    window.addEventListener("resize", measure);
    return () => {
      frame.removeEventListener("load", onLoad);
      window.removeEventListener("resize", measure);
      ro?.disconnect();
    };
  }, []);

  return (
    <iframe
      ref={ref}
      src="/solutions/lp/multi-market-personalization-2.html"
      title="Multi-Market Personalization Engine - scandiweb"
      scrolling="no"
      style={{
        width: "100%",
        height: `${height}px`,
        border: "none",
        display: "block",
        background: "#0a0d20",
      }}
    />
  );
}
