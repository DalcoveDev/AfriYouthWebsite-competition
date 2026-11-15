import LegalLayout from "@/components/LegalLayout";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "What personal information AfriYouth Innovation Labs collects, why we collect it, and how we handle it.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy policy."
      meta="Effective date · November 2026"
      intro="AfriYouth Innovation Labs (“we”, “our”, “us”) respects the privacy of all visitors to our website afriyouthlabs.org. This policy explains what personal information we collect, why we collect it, how we use it, and your rights regarding your information."
    >
      <h2>Information we collect</h2>

      <h3>Contact information</h3>
      <p>
        When you contact us through the contact form, we collect your name, email
        address, organisation (if provided), country (if provided), and the content
        of your message. We use this information to respond to your enquiry and
        route your message to the appropriate team member.
      </p>

      <h3>Voluntary information</h3>
      <p>
        You may choose to provide additional information such as your areas of
        interest, organisation type, or specific questions. Providing this
        information is optional and helps us better understand how we can assist
        you.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>
          To respond to your enquiries and provide information about our
          programmes, research, and services
        </li>
        <li>To route your message to the appropriate team member or department</li>
        <li>To improve our website and services based on feedback</li>
        <li>
          To send occasional programme updates if you have opted in (you may
          unsubscribe at any time)
        </li>
      </ul>

      <h2>Information sharing and disclosure</h2>
      <p>
        We do not sell, trade, or otherwise transfer your personal information to
        outside parties. We may share information with:
      </p>
      <ul>
        <li>Team members responsible for responding to your enquiry</li>
        <li>
          Relevant departments based on the nature of your request (programmes,
          research, partnerships, etc.)
        </li>
      </ul>
      <p>
        We may also disclose your information if required by law or to protect the
        rights, property, or safety of AfriYouth, our visitors, or others.
      </p>

      <h2>Data retention</h2>
      <p>
        We retain contact enquiries for as long as necessary to respond to your
        request and for our records, typically for a period of 12 months after the
        last correspondence.
      </p>

      <h2>Your rights</h2>
      <ul>
        <li>
          You have the right to access, correct, or delete your personal
          information. Contact us at{" "}
          <a href="mailto:hello@afriyouthlabs.org">hello@afriyouthlabs.org</a> to
          exercise these rights.
        </li>
        <li>
          You have the right to withdraw consent for any optional data processing
          at any time.
        </li>
        <li>
          You have the right to object to the processing of your personal
          information.
        </li>
      </ul>

      <h2>Cookies and tracking</h2>
      <p>
        Our website uses cookies and similar tracking technologies to improve user
        experience, analyse traffic, and personalise content. You can manage cookie
        preferences through your browser settings.
      </p>

      <h2>Contact us</h2>
      <p>
        If you have questions or concerns about this privacy policy, please contact
        us at{" "}
        <a href="mailto:hello@afriyouthlabs.org">hello@afriyouthlabs.org</a>.
      </p>
    </LegalLayout>
  );
}
