import { createMetadata } from "@/lib/metadata";

export const metadata = {
  title: "Terms of Use - AfriYouth Innovation Labs",
  description:
    "Terms of use covering acceptable website use, intellectual property, and guidelines for using published resources.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--white)]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--ink)]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-[var(--pink)] font-display text-2xl font-bold tracking-wider">AfriYouth</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/about" className="text-[var(--cream)] hover:text-[var(--pink)] transition-colors">About</a>
            <a href="/work" className="text-[var(--cream)] hover:text-[var(--pink)] transition-colors">Work</a>
            <a href="/programs" className="text-[var(--cream)] hover:text-[var(--pink)] transition-colors">Programs</a>
            <a href="/insights" className="text-[var(--cream)] hover:text-[var(--pink)] transition-colors">Insights</a>
            <a href="/contact" className="text-[var(--cream)] hover:text-[var(--pink)] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            
            <header className="text-center mb-16">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                Terms of use.
              </h1>
            </header>

            <div className="prose max-w-2xl mx-auto text-[var(--cream)]">
              <p>
                <strong>Last revised:</strong> November 2026
              </p>
              <p>
                Welcome to AfriYouth Innovation Labs website ("the Website"). These terms of use 
                ("Terms") govern your use of our Website and any associated services, features, 
                or content (collectively, "Services").
              </p>

              <h2 className="font-display text-2xl font-medium text-[var(--pink)] mb-6 mt-12">
                Acceptable use
              </h2>
              <p>
                You agree to use the Website and Services only for lawful purposes and in accordance 
                with these Terms. You are prohibited from:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Transmitting any viruses, worms, or other malicious code</li>
                <li>Attempting to gain unauthorised access to the Website or its related systems</li>
                <li>Interfering with or disrupting the integrity or performance of the Website</li>
                <li>Bypassing any security or authentication measures on the Website</li>
              </ul>

              <h2 className="font-display text-2xl font-medium text-[var(--pink)] mb-6 mt-12">
                Intellectual property
              </h2>
              <p>
                All content included on the Website, such as but not limited to text, graphics, 
                logos, button icons, images, audio clips, digital downloads, data compilations, 
                and software, is the property of AfriYouth Innovation Labs or its content suppliers 
                and is protected by international copyright laws.
              </p>
              <p>
                You may view and print pages from the Website for your personal, non-commercial use 
                only. You must not modify, reproduce, distribute, transmit, display, perform, 
                publish, license, create derivative works from, or sell any information, software, 
                products, or services obtained from the Website.
              </p>

              <h2 className="font-display text-2xl font-medium text-[var(--pink)] mb-6 mt-12">
                Use of published resources
              </h2>
              <p>
                Resources published on the Website (research reports, policy briefs, toolkits, and 
                other materials) are provided for informational and educational purposes only. 
                Users may download and print resources for personal, non-commercial use provided 
                that all copyright notices are retained. Resources may not be modified, redistributed, 
                or used for commercial purposes without prior written permission from AfriYouth 
                Innovation Labs.
              </p>

              <h2 className="font-display text-2xl font-medium text-[var(--pink)] mb-6 mt-12">
                External links
              </h2>
              <p>
                The Website may contain links to third-party websites or services that are not 
                owned or controlled by AfriYouth Innovation Labs. We have no control over, and 
                assume no responsibility for, the content, privacy policies, or practices of any 
                third-party websites or services. Your use of third-party websites is subject to 
                their own terms and policies.
              </p>

              <h2 className="font-display text-2xl font-medium text-[var(--pink)] mb-6 mt-12">
                Accuracy and availability
              </h2>
              <p>
                While we strive to keep the Website up to date and correct, we make no representations 
                or warranties of any kind, express or implied, about the completeness, accuracy, 
                reliability, availability, or suitability with respect to the Website or the 
                information, products, services, or related graphics contained on the Website for 
                any purpose. Any reliance you place on such information is therefore strictly at your 
                own risk.
              </p>

              <h2 className="font-display text-2xl font-medium text-[var(--pink)] mb-6 mt-12">
                Limitation of liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, AfriYouth Innovation Labs, its 
                directors, employees, affiliates, agents, contractors, interns, suppliers, service 
                providers, or licensors shall not be liable for any injury, loss, claim, or any 
                direct, indirect, incidental, punitive, special, or consequential damages of any 
                kind, including but not limited to lost profits, lost revenue, lost savings, data 
                losses, replacement costs, or similar damages, whether in contract, tort (including 
                negligence), or otherwise, arising from your use of any of the Services or any 
                content obtained from the Services, or otherwise arising out of these Terms.
              </p>

              <h2 className="font-display text-2xl font-medium text-[var(--pink)] mb-6 mt-12">
                Updates to these Terms
              </h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at 
                any time. What constitutes a material change will be determined at our discretion. 
                By continuing to access or use our Website after any such changes, you agree to be 
                bound by the revised terms. If a material change is made, we will attempt to 
                provide at least 30 days' notice prior to the new terms taking effect.
              </p>

              <h2 className="font-display text-2xl font-medium text-[var(--pink)] mb-6 mt-12">
                Contact
              </h2>
              <p>
                If you have questions about these Terms, please contact us at:
              </p>
              <p className="mt-4">
                <a href="mailto:hello@afriyouthlabs.org" className="text-[var(--pink)] hover:underline">
                  hello@afriyouthlabs.org
                </a>
              </p>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}