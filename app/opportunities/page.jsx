import { createMetadata } from "@/lib/metadata";

export const metadata = {
  title: "Opportunities - AfriYouth Innovation Labs",
  description:
    "Explore opportunities to learn, contribute, and innovate: programs, challenges, research, training and professional development.",
};

export default function OpportunitiesPage() {
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
                Opportunities to learn, contribute, and innovate.
              </h1>
              <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
                Explore opportunities to participate in initiatives that encourage critical thinking, 
                research, entrepreneurship, leadership, and practical problem-solving.
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <h3 className="font-display text-xl font-medium mb-4">Programs and applications</h3>
                <p className="text-sm text-[var(--muted)]">
                  Follow published program announcements and review the eligibility criteria and 
                  application instructions for each opportunity.
                </p>
              </div>

              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <h3 className="font-display text-xl font-medium mb-4">Innovation challenges</h3>
                <p className="text-sm text-[var(--muted)]">
                  Young people work on real policy problems through research, diagnosis, proposal, 
                  prototype and pitch at our Policy Innovation Demo Day.
                </p>
              </div>

              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <h3 className="font-display text-xl font-medium mb-4">Research opportunities</h3>
                <p className="text-sm text-[var(--muted)]">
                  A 12-week learning lab for early-career researchers ready to turn evidence into 
                  policy, practice and public conversation.
                </p>
              </div>

              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <h3 className="font-display text-xl font-medium mb-4">Training and professional development</h3>
                <p className="text-sm text-[var(--muted)]">
                  A practical pathway from education to employability, employment and career progression 
                  — built around experiential learning and feedback.
                </p>
              </div>

              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <h3 className="font-display text-xl font-medium mb-4">Events and engagement</h3>
                <p className="text-sm text-[var(--muted)]">
                  Field notes, research publications, and policy briefs that explore youth innovation, 
                  evidence and policy across Africa.
                </p>
              </div>

              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <h3 className="font-display text-xl font-medium mb-4">Partnerships and collaboration</h3>
                <p className="text-sm text-[var(--muted)]">
                  Institutions and individuals can co-create research, programmes and ventures with 
                  our youth-centred lab that connects disciplines and networks.
                </p>
              </div>

            </div>

            <div className="mt-12 pt-8 border-t border-[var(--ink)]/10">
              <p className="text-center text-sm text-[var(--muted)]">
                No open opportunities currently listed. Check back for future announcements and updates.
              </p>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}