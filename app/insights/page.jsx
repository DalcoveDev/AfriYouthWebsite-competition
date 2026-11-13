import InsightsContent from "@/components/pages/InsightsContent";
import { createMetadata } from "@/lib/metadata";
import "@/styles/inner.css";

export const metadata = createMetadata({
  title: "Insights & resources",
  description:
    "Research, analysis, policy perspectives, and insights on the challenges and opportunities shaping Africa's future.",
  openGraphDescription:
    "Ideas and evidence for a changing Africa.",
  path: "/insights",
});

export default function InsightsPage() {
  return <InsightsContent />;
}
