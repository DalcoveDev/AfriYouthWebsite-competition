import { createMetadata } from "@/lib/metadata";

export const metadata = {
  title: "FAQ - AfriYouth Innovation Labs",
  description:
    "Frequently asked questions about AfriYouth programs, organizations, partnerships and engagement.",
};

export default function FAQPage() {
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
                Frequently asked questions.
              </h1>
              <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
                For questions not covered here, contact AfriYouth Innovation Labs through the contact page.
              </p>
            </header>

            <div className="space-y-6">
              
              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <div className="flex justify-between items-center cursor-pointer hover:text-[var(--pink)] transition-colors">
                  <div>
                    <h3 className="font-display text-xl font-medium">About AfriYouth</h3>
                  </div>
                  <svg className="w-5 h-5 text-[var(--muted)] transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </div>
                <div>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    <strong>What is AfriYouth Innovation Labs?</strong> AfriYouth Innovation Labs is a research, 
                    innovation, and policy consulting firm that identifies, nurtures, and advances promising 
                    ideas from Africa's young innovators to address socio-economic challenges.
                  </p>
                </div>
              </div>

              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <div className="flex justify-between items-center cursor-pointer hover:text-[var(--pink)] transition-colors">
                  <div>
                    <h3 className="font-display text-xl font-medium">What does AfriYouth focus on?</h3>
                  </div>
                  <svg className="w-5 h-5 text-[var(--muted)] transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </div>
                <div>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    Our work connects research and evidence, policy and governance, innovation and 
                    entrepreneurship, strategic foresight, and leadership and capacity development.
                  </p>
                </div>
              </div>

              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <div className="flex justify-between items-center cursor-pointer hover:text-[var(--pink)] transition-colors">
                  <div>
                    <h3 className="font-display text-xl font-medium">Who are programs intended for?</h3>
                  </div>
                  <svg className="w-5 h-5 text-[var(--muted)] transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </div>
                <div>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    Africa's young people, innovators, students, and graduates, alongside organizations 
                    and institutions. Specific eligibility depends on each initiative.
                  </p>
                </div>
              </div>

              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <div className="flex justify-between items-center cursor-pointer hover:text-[var(--pink)] transition-colors">
                  <div>
                    <h3 className="font-display text-xl font-medium">How can I participate in a program?</h3>
                  </div>
                  <svg className="w-5 h-5 text-[var(--muted)] transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </div>
                <div>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    Follow published program announcements and review the eligibility criteria and 
                    application instructions for each opportunity.
                  </p>
                </div>
              </div>

              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <div className="flex justify-between items-center cursor-pointer hover:text-[var(--pink)] transition-colors">
                  <div>
                    <h3 className="font-display text-xl font-medium">Can organizations work with AfriYouth?</h3>
                  </div>
                  <svg className="w-5 h-5 text-[var(--muted)] transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </div>
                <div>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    AfriYouth's organizational profile outlines research, policy, innovation, impact 
                    and learning, and resource mobilization services. Organizations can contact 
                    AfriYouth to discuss potential engagement.
                  </p>
                </div>
              </div>

              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <div className="flex justify-between items-center cursor-pointer hover:text-[var(--pink)] transition-colors">
                  <div>
                    <h3 className="font-display text-xl font-medium">How can I explore a partnership?</h3>
                  </div>
                  <svg className="w-5 h-5 text-[var(--muted)] transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </div>
                <div>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    Use the contact page and select Partnerships as your inquiry type.
                  </p>
                </div>
              </div>

            </div>

            <footer className="mt-16 pt-8 border-t border-[var(--ink)]/10">
              <p className="text-center text-sm text-[var(--muted)]">
                For questions not covered here, contact AfriYouth Innovation Labs through the contact page.
              </p>
            </footer>

          </div>
        </section>
      </main>
    </div>
  );
}