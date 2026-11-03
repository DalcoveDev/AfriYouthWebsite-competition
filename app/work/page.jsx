import WorkContent from "@/components/pages/WorkContent";
import { createMetadata } from "@/lib/metadata";
import "@/styles/inner.css";

export const metadata = createMetadata({
  title: "Our work",
  description:
    "Research, policy, human-centred design, entrepreneurship, strategic foresight and impact learning — connected in one youth-centred lab.",
  openGraphDescription:
    "Six connected disciplines for turning evidence into influence, and ideas into systems-level change.",
  path: "/work",
});

export default function WorkPage() {
  return <WorkContent />;
}
