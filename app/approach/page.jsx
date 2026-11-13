import { createMetadata } from "@/lib/metadata";

export const metadata = {
  title: "Our Approach - AfriYouth Innovation Labs",
  description:
    "From evidence to impact: our methodology for connecting research, systems thinking, human-centered design, entrepreneurship and policy to develop practical solutions for Africa's socio-economic challenges.",
};

export default function ApproachPage() {
  const steps = [
    { num: "01", title: "Discover", desc: "Understand the challenge through community engagement, observation, and research." },
    { num: "02", title: "Diagnose", desc: "Investigate the root causes, systems, and factors contributing to the challenge." },
    { num: "03", title: "Research", desc: "Generate and analyze evidence to build a strong understanding of the problem." },
    { num: "04", title: "Design", desc: "Apply human-centered design to develop solutions that respond to people's needs and experiences." },
    { num: "05", title: "Prototype", desc: "Build, test, and refine solutions before wider implementation." },
    { num: "06", title: "Policy", desc: "Translate evidence and solutions into policy recommendations, institutional proposals, or business cases." },
    { num: "07", title: "Finance", desc: "Explore funding, investment, and partnership pathways for promising solutions." },
    { num: "08", title: "Implement", desc: "Support the piloting and implementation of selected solutions." },
    { num: "09", title: "Measure", desc: "Assess results, outcomes, learning, and impact." },
    { num: "10", title: "Scale", desc: "Identify opportunities to expand solutions that demonstrate effectiveness and potential." },
  ];

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
                From evidence to impact.
              </h1>
              <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
                We connect research, systems thinking, human-centered design, entrepreneurship, and policy 
                to move beyond identifying problems toward developing and advancing practical solutions.
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--pink)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--ink)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h11l5 2v12a2 2 0 0 1-2 2z"/>
                      <polyline points="17 8 12 3 7 8"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium mb-1">Our methodology</h3>
                    <p className="text-sm text-[var(--muted)]">A structured pathway from problem identification to sustainable impact</p>
                  </div>
                </div>
              </div>

              <div>
                {steps.map((step) => (
                  <div key={step.num} className="py-2 text-center">
                    <span className="font-display font-bold text-[var(--pink)] text-lg">{step.num}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <h3 className="font-display text-xl font-medium mb-4 text-center">Closing</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  We believe sustainable change requires more than good ideas. It requires evidence, 
                  collaboration, practical experimentation, and continuous learning.
                </p>
              </div>

            </div>

          </div>
        </section>
      </main>
    </div>
  );
}