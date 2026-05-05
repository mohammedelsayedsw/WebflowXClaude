"use client";

import { useEffect } from "react";

/**
 * Webflow HTML embeds inject `<script>` tags via dangerouslySetInnerHTML, which
 * the browser does NOT execute. We rehydrate them after mount.
 *
 * Many of those scripts wrap their logic in `DOMContentLoaded`. By the time we
 * inject them, that event has already fired, so we shim `addEventListener`
 * for the lifetime of each script so listeners run immediately (async).
 */
export function EmbedScriptRunner() {
  useEffect(() => {
    const scripts = document.querySelectorAll<HTMLScriptElement>(
      ".w-embed script",
    );

    scripts.forEach((old) => {
      if (old.dataset.rehydrated === "1") return;
      const text = old.textContent ?? "";

      const next = document.createElement("script");
      for (const { name, value } of Array.from(old.attributes)) {
        next.setAttribute(name, value);
      }
      next.textContent =
        "(function(){" +
        "var __add=document.addEventListener.bind(document);" +
        "document.addEventListener=function(t,l,o){" +
        "if(t==='DOMContentLoaded'&&document.readyState!=='loading'){" +
        "Promise.resolve().then(function(){try{l.call(document);}catch(e){console.error(e);}});" +
        "return;}return __add(t,l,o);};" +
        "try{\n" +
        text +
        "\n}finally{document.addEventListener=__add;}" +
        "})();";
      next.dataset.rehydrated = "1";
      old.parentNode?.replaceChild(next, old);
    });
  }, []);

  return null;
}
