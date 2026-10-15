import { redirect } from "next/navigation";

/* The old confirmation-email landing. The flow no longer asks people to confirm, so any
   old link goes back to the Retention Score page. */
export default function Confirmed() {
  redirect("/retention-90");
}
