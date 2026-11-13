import { createMetadata } from "@/lib/metadata";

export const metadata = {
  title: "Partnerships - AfriYouth Innovation Labs",
  description:
    "Collaboration for solutions that matter: research collaboration, innovation partnerships, policy engagement, capacity development and funding mobilisation.",
};

export default function PartnershipsPage() {
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
                Collaboration for solutions that matter.
              </h1>
              <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
                Complex socio-economic challenges require diverse perspectives, shared knowledge, and 
                coordinated action. AfriYouth Innovation Labs welcomes opportunities to collaborate 
                with institutions and individuals working to advance research, innovation, policy, 
                and sustainable development.
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <h3 className="font-display text-xl font-medium mb-4">Research Collaboration</h3>
                <p className="text-sm text-[var(--muted)]">
                  Work together on research, surveys, evidence generation, and policy analysis to 
                  identify, nurture and advance promising ideas from Africa's young innovators.
                </p>
              </div>

              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <h3 className="font-display text-xl font-medium mb-4">Innovation Partnerships</h3>
                <p className="text-sm text-[var(--muted)]">
                  Support the development, testing, and advancement of innovative solutions 
                  from concept to validated impact and scale.
                </p>
              </div>

              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <h3 className="font-display text-xl font-medium mb-4">Policy Engagement</h3>
                <p className="text-sm text-[var(--muted)]">
                  Contribute evidence and perspectives to policy conversations and institutional 
                  improvement for inclusive and sustainable socio-economic transformation.
                </p>
              </div>

              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <h3 className="font-display text-xl font-medium mb-4">Capacity Development</h3>
                <p className="text-sm text-[var(--muted)]">
                  Collaborate on practical learning, leadership, and professional development 
                  initiatives that empower Africa's young people.
                </p>
              </div>

              <div className="bg-[var(--cream)]/30 rounded-2xl p-8 border border-[var(--ink)]/10">
                <h3 className="font-display text-xl font-medium mb-4">Funding & Resource Mobilisation</h3>
                <p className="text-sm text-[var(--muted)]">
                  Explore opportunities to support promising ideas, programs, and solutions that 
                  demonstrate effectiveness and potential for continental impact.
                </p>
              </div>

            </div>

            <div className="mt-16 pt-8 border-t border-[var(--ink)]/10">
              <h3 className="font-display text-xl font-medium mb-4 text-center">CTA</h3>
              <p className="text-center text-lg text-[var(--pink)] font-medium">
                Interested in exploring a partnership? Contact our team to start a conversation.
              </p>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}