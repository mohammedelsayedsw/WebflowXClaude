"use client";

import { Rows } from "./Rows";

export function Managed() {
  return (
    <Rows
      id="experience"
      eyebrow="Fully managed"
      title="The Akeneo you know,"
      accent="fully managed"
      intro="Keep the Akeneo features and workflows your team works with every day. scandiweb runs everything underneath them."
      bg="var(--sw-black)"
      rows={[
        {
          title: "Keep your features and workflows",
          body: "We confirm feature coverage before migration and validate the new setup with your users before the switch.",
        },
        {
          title: "No upgrades for your team",
          body: "We handle platform updates, extension compatibility, and testing. Your team never plans a technical upgrade.",
        },
        {
          title: "Support from the people running it",
          body: "scandiweb is responsible for the platform and extensions, with support coverage set in your service plan.",
        },
        {
          title: "Your system, your data",
          body: "You keep control of your Akeneo setup and product data. Migration and ongoing costs are agreed upfront.",
        },
      ]}
    />
  );
}
