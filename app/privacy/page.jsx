import { createMetadata } from "@/lib/metadata";

export const metadata = {
  title: "Privacy Policy - AfriYouth Innovation Labs",
  description:
    "Privacy policy explaining what personal information we collect, why we collect it, and how we handle it.",
};

export default function PrivacyPage() {
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
                Privacy policy.
              </h1>
            </header>

            <div className="prose max-w-2xl mx-auto text-[var(--cream)]">
              <p>
                <strong>Effective date:</strong> November 2026
              </p>
              <p>
                AfriYouth Innovation Labs ("we", "our", "us") respects the privacy of all visitors 
                to our website afriyouth.org. This privacy policy explains what personal information 
                we collect, why we collect it, how we use it, and your rights regarding your information.
              </p>

              <h2 className="font-display text-2xl font-medium text-[var(--pink)] mb-6 mt-12">
                Information we collect
              </h2>

              <h3 className="font-display text-xl font-medium text-[var(--pink)] mb-4">
                Contact information
              </h3>
              <p>
                When you contact us through the contact form, we collect your name, email address, 
                organisation (if provided), country (if provided), and the content of your message.
                We use this information to respond to your enquiry and route your message to the 
                appropriate team member.
              </p>

              <h3 className="font-display text-xl font-medium text-[var(--pink)] mb-4">
                Voluntary information
              </h3>
              <p>
                You may choose to provide additional information such as your areas of interest, 
                organisation type, or specific questions. Providing this information is optional 
                and helps us better understand how we can assist you.
              </p>

              <h2 className="font-display text-2xl font-medium text-[var(--pink)] mb-6 mt-12">
                How we use your information
              </h2>

              <ul className="list-disc list-inside space-y-4 mb-6">
                <li>
                  To respond to your enquiries and provide information about our programmes, 
                  research, and services
                </li>
                <li>
                  To route your message to the appropriate team member or department
                </li>
                <li>
                  To improve our website and services based on feedback
                </li>
                <li>
                  To send occasional programme updates if you have opted in (you may unsubscribe at any time)
                </li>
              </ul>

              <h2 className="font-display text-2xl font-medium text-[var(--pink)] mb-6 mt-12">
                Information sharing and disclosure
              </h2>

              <p>
                We do not sell, trade, or otherwise transfer your personal information to outside 
                parties. We may share information with:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Team members responsible for responding to your enquiry</li>
                <li>Relevant departments based on the nature of your request (programmes, research, 
                partnerships, etc.)</li>
              </ul>

              <p>
                We may also disclose your information if required by law or to protect the rights, 
                property, or safety of AfriYouth, our visitors, or others.
              </p>

              <h2 className="font-display text-2xl font-medium text-[var(--pink)] mb-6 mt-12">
                Data retention
              </h2>
              <p>
                We retain contact enquiries for as long as necessary to respond to your request 
                and for our records, typically for a period of 12 months after the last correspondence.
              </p>

              <h2 className="font-display text-2xl font-medium text-[var(--pink)] mb-6 mt-12">
                Your rights
              </h2>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>
                  You have the right to access, correct, or delete your personal information. 
                  Contact us at hello@afriyouthlabs.org to exercise these rights.
                </li>
                <li>
                  You have the right to withdraw consent for any optional data processing at any time.
                </li>
                <li>
                  You have the right to object to the processing of your personal information.
                </li>
              </ul>

              <h2 className="font-display text-2xl font-medium text-[var(--pink)] mb-6 mt-12">
                Cookies and tracking
              </h2>
              <p>
                Our website uses cookies and similar tracking technologies to improve user experience, 
                analyse traffic, and personalise content. You can manage cookie preferences through 
                your browser settings.
              </p>

              <h2 className="font-display text-2xl font-medium text-[var(--pink)] mb-6 mt-12">
                Contact us
              </h2>
              <p>
                If you have questions or concerns about this privacy policy, please contact us at:
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