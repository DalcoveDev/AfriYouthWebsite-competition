import HomeContent from "@/components/pages/HomeContent";
import { createMetadata } from "@/lib/metadata";
import "@/styles/home.css";

export const metadata = {
  ...createMetadata({
    title: "Evidence in motion. Youth in the lead.",
    description:
      "AfriYouth Innovation Labs connects research, policy, human-centred design, entrepreneurship and foresight to turn young people's ideas into systems-level change across Africa.",
    openGraphDescription:
      "Africa's next chapter is youth-written. Explore our work, programmes and ways to collaborate.",
    path: "/",
  }),
  title: {
    absolute: "AfriYouth Innovation Labs — Evidence in motion. Youth in the lead.",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
