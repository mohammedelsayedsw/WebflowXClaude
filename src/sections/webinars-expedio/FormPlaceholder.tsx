"use client";

/**
 * Stand-in for the HubSpot registration form until HUBSPOT_FORM_ID is set.
 * Same frame and `.hubspot-form-wrapper` field styles as HubSpotForm, so the
 * section looks finished. The fields are disabled and it submits nothing.
 */
const FIELDS: { label: string; type: string }[][] = [
  [
    { label: "First name", type: "text" },
    { label: "Last name", type: "text" },
  ],
  [{ label: "Work email", type: "email" }],
  [{ label: "Company", type: "text" }],
];

export function FormPlaceholder() {
  return (
    <div
      className="hubspot-form-wrapper rounded-[4px] border border-white/15 bg-white/[0.04] backdrop-blur p-7 md:p-8"
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(255,255,255,0.04)" }}
    >
      <form onSubmit={(e) => e.preventDefault()} aria-label="Registration form (coming soon)">
        {FIELDS.map((row) => (
          <fieldset key={row[0].label} className={row.length > 1 ? "form-columns-2" : undefined}>
            {row.map((f) => (
              <div key={f.label} className="hs-form-field">
                <label>
                  {f.label}
                  <span className="hs-form-required">*</span>
                </label>
                <div className="input">
                  <input type={f.type} disabled aria-label={f.label} />
                </div>
              </div>
            ))}
          </fieldset>
        ))}
        <button type="button" disabled className="hs-button">
          Save your seat
        </button>
      </form>
    </div>
  );
}
