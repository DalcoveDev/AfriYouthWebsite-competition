import InsightsContent from "@/components/pages/InsightsContent";
import { createMetadata } from "@/lib/metadata";
import "@/styles/inner.css";
import "@/styles/hub.css";

export const metadata = createMetadata({
  title: "Insights & resources",
  description:
    "Research, field notes and practical resources on youth innovation, evidence-informed policy, human-centred design, entrepreneurship and foresight in Africa.",
  openGraphDescription:
    "Research, field notes and practical resources for the work ahead.",
  path: "/insights",
});

export default function InsightsPage() {
  return <InsightsContent />;
}
