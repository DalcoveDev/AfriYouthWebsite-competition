import ProgramsContent from "@/components/pages/ProgramsContent";
import { createMetadata } from "@/lib/metadata";
import "@/styles/inner.css";
import "@/styles/hub.css";

export const metadata = createMetadata({
  title: "Programs & opportunities",
  description:
    "Explore AfriYouth fellowships, labs, design sprints and learning programmes for young researchers, policy actors, designers and founders across Africa.",
  openGraphDescription:
    "Fellowships, labs and learning spaces for young people ready to turn curiosity into capability.",
  path: "/programs",
});

export default function ProgramsPage() {
  return <ProgramsContent />;
}
