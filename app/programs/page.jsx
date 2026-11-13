import ProgramsContent from "@/components/pages/ProgramsContent";
import { createMetadata } from "@/lib/metadata";
import "@/styles/inner.css";

export const metadata = createMetadata({
  title: "Programs & opportunities",
  description:
    "Explore AfriYouth programmes: the Evidence-to-Impact Accelerator, the AfriYouth Innovation Accelerator, the Policy Innovation Challenge, and the Career & Professional Development Academy.",
  openGraphDescription:
    "Developing people, ideas, and solutions for Africa's future.",
  path: "/programs",
});

export default function ProgramsPage() {
  return <ProgramsContent />;
}
