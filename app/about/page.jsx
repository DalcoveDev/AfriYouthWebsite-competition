import AboutContent from "@/components/pages/AboutContent";
import { createMetadata } from "@/lib/metadata";
import "@/styles/inner.css";

export const metadata = createMetadata({
  title: "About",
  description:
    "AfriYouth Innovation Labs is a research, innovation, and policy consulting firm advancing promising ideas and empowering young people to address Africa's socio-economic challenges.",
  openGraphDescription:
    "Empowering young people to shape Africa's future.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutContent />;
}
