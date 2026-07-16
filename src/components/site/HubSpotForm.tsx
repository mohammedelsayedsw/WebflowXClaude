"use client";

/**
 * HubSpotForm – embeds a HubSpot form via the standard v2 loader.
 *
 * Loader: //js-eu1.hsforms.net/forms/embed/v2.js (loaded once via next/script).
 * Form is injected into `target` after the loader is ready.
 *
 * Visual styling lives in `app/globals.css` under `.hubspot-form-wrapper .hbspt-form *`
 * – keeps the dark-theme look of the original hand-built form.
 */

import { useEffect, useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          region?: string;
          target: string;
          css?: string;
          cssRequired?: string;
          onFormReady?: () => void;
        }) => void;
      };
    };
  }
}

let SCRIPT_LOADED = false;

export function HubSpotForm({
  portalId,
  formId,
  region = "eu1",
  submitText,
}: {
  portalId: string;
  formId: string;
  region?: string;
  /** Override the HubSpot form's submit button label (this instance only). */
  submitText?: string;
}) {
  const targetId = `hs-form-${formId}`;
  const created = useRef(false);

  useEffect(() => {
    if (created.current) return;

    const relabel = () => {
      if (!submitText) return;
      const root = document.getElementById(targetId);
      const btn = root?.querySelector(
        'input[type="submit"], button[type="submit"], .hs-button'
      );
      if (btn instanceof HTMLInputElement) btn.value = submitText;
      else if (btn instanceof HTMLElement) btn.textContent = submitText;
    };

    const tryCreate = () => {
      if (typeof window !== "undefined" && window.hbspt) {
        // Clear any existing instance (StrictMode / re-render safety)
        const node = document.getElementById(targetId);
        if (node) node.innerHTML = "";
        window.hbspt.forms.create({
          portalId,
          formId,
          region,
          target: `#${targetId}`,
          css: "",          // disable HubSpot default CSS so our styles win
          cssRequired: "",  // disable HubSpot's default required-field CSS
          onFormReady: () => {
            relabel();
            // HubSpot can reflow after ready; re-apply a couple of times.
            window.setTimeout(relabel, 300);
            window.setTimeout(relabel, 900);
          },
        });
        created.current = true;
        return true;
      }
      return false;
    };

    if (tryCreate()) return;
    const id = window.setInterval(() => {
      if (tryCreate()) window.clearInterval(id);
    }, 200);
    const timeout = window.setTimeout(() => window.clearInterval(id), 10_000);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(timeout);
    };
  }, [portalId, formId, region, targetId, submitText]);

  return (
    <div
      className="hubspot-form-wrapper rounded-[4px] border border-white/15 bg-white/[0.04] backdrop-blur p-7 md:p-8"
      style={{
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <Script
        id="hubspot-embed-loader"
        src="//js-eu1.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={() => { SCRIPT_LOADED = true; }}
      />
      <div id={targetId} />
    </div>
  );
}
