import { Rankings } from "@/sections/aeo-rankings/Rankings";
import type { Summary } from "@/sections/aeo-rankings/data";
import summary from "@/sections/aeo-rankings/summary.json";

/** Server page: the home lists render into the HTML from summary.json; the client loads the full dataset for search and company pages. */
export default function Page() {
  return (
    <main className="min-h-screen bg-[#0b0b0b]">
      <Rankings summary={summary as Summary} />
    </main>
  );
}
