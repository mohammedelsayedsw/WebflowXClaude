/** Hides the home before hydration when the URL opens a company or industry, so a shared link does not flash the home first.
 *  Runs in the layout and adds a style tag outside React's tree; Rankings removes it once its view is on screen. */
export const PRE_HYDRATION = `if(/[?&](c|i)=/.test(location.search)){var s=document.createElement("style");s.id="ar-sub";s.textContent="[data-ar-home]{display:none}[data-ar-wait]{display:grid}";document.head.appendChild(s)}`;
export const PRE_HYDRATION_CSS = `[data-ar-wait]{display:none}`;
