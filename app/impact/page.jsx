import { createMetadata } from "@/lib/metadata";

export const metadata = {
  title: "Impact & Learning - AfriYouth Innovation Labs",
  description:
    "Understanding impact through theory of change, monitoring & evaluation, outcome measurement and impact assessment.",
};

export default function ImpactPage() {
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
                Understanding impact. Learning from action.
              </h1>
              <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
                We believe the value of an initiative should be understood through the changes it creates, 
                the evidence behind those changes, and the lessons that inform future decisions.
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <h3 className="font-display text-xl font-medium mb-4">Theory of Change</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Clarifying how activities, outputs, and outcomes connect to intended change.
                </p>
              </div>

              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <h3 className="font-display text-xl font-medium mb-4">Monitoring & Evaluation</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Developing approaches to monitor progress and evaluate results.
                </p>
              </div>

              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <h3 className="font-display text-xl font-medium mb-4">Outcome Measurement</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Understanding the changes experienced by individuals, communities, and institutions.
                </p>
              </div>

              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <h3 className="font-display text-xl font-medium mb-4">Impact Assessment</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Assessing the broader effects of programs and interventions.
                </p>
              </div>

              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <h3 className="font-display text-xl font-medium mb-4">Learning & Reporting</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Turning findings into useful knowledge that informs decisions and future improvements.
                </p>
              </div>

              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <h3 className="font-display text-xl font-medium mb-4">Impact Storytelling</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Communicating evidence and experiences in clear and accessible ways.
                </p>
              </div>

            </div>

            <footer className="mt-16 pt-8 border-t border-[var(--ink)]/10">
              <p className="text-center text-sm text-[var(--muted)]">
                Meaningful impact begins with asking the right questions, collecting relevant evidence, 
                and using what we learn to improve.
              </p>
            </footer>

          </div>
        </section>
      </main>
    </div>
  );
}