import LegalLayout from "@/components/LegalLayout";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Use",
  description:
    "Terms covering acceptable website use, intellectual property, and guidelines for using published resources.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of use."
      meta="Last revised · November 2026"
      intro="Welcome to the AfriYouth Innovation Labs website (“the Website”). These terms of use (“Terms”) govern your use of our Website and any associated services, features, or content (collectively, “Services”)."
    >
      <h2>Acceptable use</h2>
      <p>
        You agree to use the Website and Services only for lawful purposes and in
        accordance with these Terms. You are prohibited from:
      </p>
      <ul>
        <li>Transmitting any viruses, worms, or other malicious code</li>
        <li>
          Attempting to gain unauthorised access to the Website or its related
          systems
        </li>
        <li>
          Interfering with or disrupting the integrity or performance of the
          Website
        </li>
        <li>Bypassing any security or authentication measures on the Website</li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        All content included on the Website, such as but not limited to text,
        graphics, logos, button icons, images, audio clips, digital downloads, data
        compilations, and software, is the property of AfriYouth Innovation Labs or
        its content suppliers and is protected by international copyright laws.
      </p>
      <p>
        You may view and print pages from the Website for your personal,
        non-commercial use only. You must not modify, reproduce, distribute,
        transmit, display, perform, publish, license, create derivative works from,
        or sell any information, software, products, or services obtained from the
        Website.
      </p>

      <h2>Use of published resources</h2>
      <p>
        Resources published on the Website (research reports, policy briefs,
        toolkits, and other materials) are provided for informational and
        educational purposes only. Users may download and print resources for
        personal, non-commercial use provided that all copyright notices are
        retained. Resources may not be modified, redistributed, or used for
        commercial purposes without prior written permission from AfriYouth
        Innovation Labs.
      </p>

      <h2>External links</h2>
      <p>
        The Website may contain links to third-party websites or services that are
        not owned or controlled by AfriYouth Innovation Labs. We have no control
        over, and assume no responsibility for, the content, privacy policies, or
        practices of any third-party websites or services. Your use of third-party
        websites is subject to their own terms and policies.
      </p>

      <h2>Accuracy and availability</h2>
      <p>
        While we strive to keep the Website up to date and correct, we make no
        representations or warranties of any kind, express or implied, about the
        completeness, accuracy, reliability, availability, or suitability with
        respect to the Website or the information, products, services, or related
        graphics contained on the Website for any purpose. Any reliance you place on
        such information is therefore strictly at your own risk.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by applicable law, AfriYouth Innovation
        Labs, its directors, employees, affiliates, agents, contractors, interns,
        suppliers, service providers, or licensors shall not be liable for any
        injury, loss, claim, or any direct, indirect, incidental, punitive, special,
        or consequential damages of any kind, including but not limited to lost
        profits, lost revenue, lost savings, data losses, replacement costs, or
        similar damages, whether in contract, tort (including negligence), or
        otherwise, arising from your use of any of the Services or any content
        obtained from the Services, or otherwise arising out of these Terms.
      </p>

      <h2>Updates to these Terms</h2>
      <p>
        We reserve the right, at our sole discretion, to modify or replace these
        Terms at any time. What constitutes a material change will be determined at
        our discretion. By continuing to access or use our Website after any such
        changes, you agree to be bound by the revised terms. If a material change is
        made, we will attempt to provide at least 30 days&rsquo; notice prior to the
        new terms taking effect.
      </p>

      <h2>Contact</h2>
      <p>
        If you have questions about these Terms, please contact us at{" "}
        <a href="mailto:hello@afriyouthlabs.org">hello@afriyouthlabs.org</a>.
      </p>
    </LegalLayout>
  );
}
