// Webflow component and CSS type declarations
// These modules will be created by 'webflow devlink export'

// CSS module declarations
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

// Webflow component modules
declare module "@/webflow/webflow_modules/*" {
  import type { ComponentType } from "react";
  const Component: ComponentType<Record<string, unknown>>;
  export default Component;
}
