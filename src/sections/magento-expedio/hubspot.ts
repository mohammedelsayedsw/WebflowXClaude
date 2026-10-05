/**
 * Sends a form on this page to a HubSpot form (portal 25724996, EU1) through
 * the public Forms submissions API, so the page keeps its own design.
 * Field names come from the HubSpot form definitions.
 */
export const PORTAL = "25724996";
export const PDF_FORM = "e68f3add-4895-4457-836d-34ed59435cde"; // [Campaign] Expedio PDF
export const CONTACT_FORM = "d8c78df3-8c5f-4957-b670-0e7f5e612a28"; // [Contact form] Expedio

type Field = { name: string; value: string; objectTypeId?: string };

export async function submitHubSpot(formId: string, fields: Field[]) {
  const hutk = document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]+)/)?.[1];
  const res = await fetch(`https://api-eu1.hsforms.com/submissions/v3/integration/submit/${PORTAL}/${formId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fields: fields
        .filter((f) => f.value.trim() !== "")
        .map((f) => ({ objectTypeId: f.objectTypeId ?? "0-1", name: f.name, value: f.value.trim() })),
      context: { pageUri: window.location.href, pageName: document.title, ...(hutk ? { hutk } : {}) },
    }),
  });
  if (!res.ok) throw new Error(await res.text());
}

/** Form values by input name. */
export const read = (form: HTMLFormElement) => Object.fromEntries(new FormData(form)) as Record<string, string>;
