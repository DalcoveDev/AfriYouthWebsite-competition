import ContactContent from "@/components/pages/ContactContent";
import { createMetadata } from "@/lib/metadata";
import "@/styles/inner.css";
import "@/styles/hub.css";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Start a conversation with AfriYouth Innovation Labs about a programme, partnership, research commission, media request or joining our network.",
  openGraphDescription:
    "Bring us the question. We'll bring the lab. Start a conversation about a programme, partnership, commission or media request.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactContent />;
}
