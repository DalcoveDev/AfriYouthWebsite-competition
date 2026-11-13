import { createMetadata } from "@/lib/metadata";

export const metadata = {
  title: "Resources - AfriYouth Innovation Labs",
  description:
    "Knowledge for informed action: research reports, policy briefs, toolkits, learning materials and futures publications.",
};

export default function ResourcesPage() {
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
                Knowledge for informed action.
              </h1>
              <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
                Explore resources that support research, critical thinking, policy development, 
                innovation, and sustainable development.
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <h3 className="font-display text-xl font-medium mb-4">Research reports</h3>
                <p className="text-sm text-[var(--muted)]">
                  Field scans of the ideas, barriers and bright spots shaping how young people 
                  build solutions across the continent.
                </p>
              </div>

              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <h3 className="font-display text-xl font-medium mb-4">Policy briefs</h3>
                <p className="text-sm text-[var(--muted)]">
                  What it actually takes to move a research finding into a public decision 
                  — and who has to be in the room.
                </p>
              </div>

              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <h3 className="font-display text-xl font-medium mb-4">Toolkits and frameworks</h3>
                <p className="text-sm text-[var(--muted)]">
                  Practical frames for evidence generation, policy engagement, impact assessment 
                  and learning what changed, for whom and what to do differently next time.
                </p>
              </div>

              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <h3 className="font-display text-xl font-medium mb-4">Learning materials</h3>
                <p className="text-sm text-[var(--muted)]">
                  Resources that build the confidence, judgement and networks of the next generation 
                  of African innovators and leaders.
                </p>
              </div>

              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <h3 className="font-display text-xl font-medium mb-4">Futures and trend publications</h3>
                <p className="text-sm text-[var(--muted)]">
                  Scenarios, youth futures panels and shared measurement agendas to help institutions 
                  anticipate change instead of reacting to it.
                </p>
              </div>

              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <h3 className="font-display text-xl font-medium mb-4">Organizational publications</h3>
                <p className="text-sm text-[var(--muted)]">
                  AfriYouth's own evidence, findings and insights published as field notes, 
                  policy briefs and practice notes.
                </p>
              </div>

            </div>

            <div className="mt-12 pt-8 border-t border-[var(--ink)]/10">
              <p className="text-center text-sm text-[var(--muted)]">
                Resources will be added as publications and learning materials become available.
              </p>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}