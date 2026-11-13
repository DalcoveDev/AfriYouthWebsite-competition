import WorkContent from "@/components/pages/WorkContent";
import { createMetadata } from "@/lib/metadata";
import "@/styles/inner.css";

export const metadata = createMetadata({
  title: "Our work",
  description:
    "Five labs connecting evidence, innovation, and policy — research and evidence, policy and governance, innovation and entrepreneurship, strategic foresight, and leadership and capacity development.",
  openGraphDescription:
    "Connecting evidence, innovation, and policy to solve complex challenges across Africa.",
  path: "/work",
});

export default function WorkPage() {
  return <WorkContent />;
}
