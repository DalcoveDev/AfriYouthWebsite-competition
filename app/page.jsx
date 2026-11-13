import HomeContent from "@/components/pages/HomeContent";
import { createMetadata } from "@/lib/metadata";
import "@/styles/home.css";

export const metadata = {
  ...createMetadata({
    title: "Fueling Innovators for Sustainable Development.",
    description:
      "AfriYouth Innovation Labs is a research, innovation, and policy consulting firm empowering Africa's young people to generate evidence, shape policy, and develop innovative solutions.",
    openGraphDescription:
      "Research. Innovation. Policy. Impact. Explore our work, programmes and ways to collaborate.",
    path: "/",
  }),
  title: {
    absolute: "AfriYouth Innovation Labs — Fueling Innovators for Sustainable Development.",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
