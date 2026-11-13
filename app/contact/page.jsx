import ContactContent from "@/components/pages/ContactContent";
import { createMetadata } from "@/lib/metadata";
import "@/styles/inner.css";
import "@/styles/hub.css";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact AfriYouth Innovation Labs about a programme, partnership, research and consulting work, or a general inquiry.",
  openGraphDescription:
    "Let's turn ideas into meaningful action.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactContent />;
}
