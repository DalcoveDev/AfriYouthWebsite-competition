import AboutContent from "@/components/pages/AboutContent";
import { createMetadata } from "@/lib/metadata";
import "@/styles/inner.css";

export const metadata = createMetadata({
  title: "About",
  description:
    "AfriYouth Innovation Labs is a youth-centred research, policy and innovation lab connecting evidence, design, entrepreneurship and foresight across Africa.",
  openGraphDescription:
    "A youth-centred research, policy and innovation lab connecting evidence, design, entrepreneurship and foresight across Africa.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutContent />;
}
