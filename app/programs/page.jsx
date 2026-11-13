import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import CtaBand from "@/components/CtaBand";
import {
  acceleratorStages,
  academyTracks,
  divisions,
  employabilitySteps,
  programmes,
} from "@/lib/content";
import "@/styles/hub.css";
import "@/styles/inner.css";

export const metadata = createMetadata({
  title: "Programs & opportunities",
  description:
    "Explore the AfriYouth Innovation Accelerator, the Policy Innovation Challenge, the Employability Bootcamp, the Professional Skills Academy and the Africa 2050 Futures Academy.",
  openGraphDescription:
    "Fellowships, labs and learning spaces for young people ready to turn curiosity into capability.",
  path: "/programs",
});

const faqs = [
  {
    q: "Do I need a university degree to apply?",
    a: "For most programmes, no. We care more about how you think, what you have done and the question you want to explore than the certificate you hold. Specific requirements are listed for each programme.",
  },
  {
    q: "Is there a participation fee?",
    a: "Our open programmes for young people are free to participate in. Where a programme includes a stipend, travel support or a fee for organisations, this is stated clearly in the programme details.",
  },
  {
    q: "Can I apply if I live outside Rwanda?",
    a: "Yes. We work across Africa. Most of our programmes are hybrid or online, with in-person residencies where travel support is provided. Check the format on each programme.",
  },
  {
    q: "What does experiential learning mean here?",
    a: "Instead of training → certificate, we work through learn → practice → apply → receive feedback → improve → demonstrate. For employability, that includes a full simulation with a fictional vacancy, an application, a psychometric test, an interview, a case study and salary negotiation.",
  },
  {
    q: "Can our organisation co-design a programme?",
    a: "Yes. We design custom labs, clinics and learning experiences with universities, employers, foundations and public institutions. Tell us about your mandate and the people you serve.",
  },
  {
    q: "How are participants selected?",
    a: "Our process is human. We look for potential, lived experience and a real question. Shortlisted applicants have a conversation with our team — a two-way exchange, not an interrogation.",
  },
];

export default function ProgramsPage() {
  return (
    <main id="main">
      <section className="page-hero page-hero--programs" aria-labelledby="programs-title">
        <div className="wrap">
          <div className="page-hero__grid">
            <div className="page-hero__copy">
              <p className="eyebrow reveal">Programs & opportunities</p>
              <h1 className="h1 reveal" id="programs-title">
                Your next move starts <em>here.</em>
              </h1>
            </div>
            <div className="page-hero__aside reveal">
              <p className="lede">
                Practical programmes for young researchers, policy actors, founders
                and professionals ready to turn curiosity into capability — and
                capability into change.
              </p>
              <div className="programmes-hero__note">
                <p>Three flagship pathways are open or rolling for 2027.</p>
                <span>
                  Innovation Accelerator · Policy Innovation Challenge · Employability
                  Bootcamp
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="opportunities-title">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__copy">
              <p className="eyebrow reveal">Find your fit</p>
              <h2 className="h2 reveal" id="opportunities-title">
                Open doors, not hoops.
              </h2>
            </div>
            <div className="section-head__side reveal">
              <p>
                Our selection process is human. We look for potential, lived experience
                and a real question — not perfect credentials.
              </p>
              <Link className="text-link" href="/contact?topic=programme">
                Ask which programme fits
              </Link>
            </div>
          </div>

          <div className="programmes-grid">
            {programmes.map((programme) => (
              <article
                className={`programme-card programme-card--${programme.tone} reveal`}
                key={programme.id}
                id={programme.id}
              >
                <div className="programme-card__top">
                  <span className="status-pill status-pill--open">{programme.status}</span>
                  <span className="programme-card__index">
                    {String(programmes.indexOf(programme) + 1).padStart(2, "0")}
                  </span>
                </div>
                <svg
                  className="programme-card__symbol"
                  viewBox="0 0 120 120"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <circle cx="60" cy="60" r="46" />
                  <circle cx="60" cy="60" r="30" strokeDasharray="3 5" />
                  <path d="M60 6v22M60 92v22M6 60h22M92 60h22" />
                  <circle cx="60" cy="60" r="5" fill="currentColor" stroke="none" />
                </svg>
                <p className="programme-card__type">{programme.type}</p>
                <h2>{programme.name}</h2>
                <p className="programme-card__desc">{programme.description}</p>
                <ul className="programme-card__meta">
                  {programme.meta.map(([label, value]) => (
                    <li key={label}>
                      <span>{label}</span>
                      <strong>{value}</strong>
                    </li>
                  ))}
                </ul>
                <div className="programme-card__footer">
                  <p className="programme-card__deadline">
                    <strong>{programme.deadline.split(" · ")[0]}</strong>
                    {programme.deadline.split(" · ")[1] || "Applications reviewed on a rolling basis"}
                  </p>
                  <Link
                    className="programme-card__btn"
                    href={`/contact?topic=programme&programme=${programme.id}`}
                  >
                    Programme details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream" id="evidence-to-impact" aria-labelledby="eti-title">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__copy">
              <p className="eyebrow reveal">The flagship AfriYouth product</p>
              <h2 className="h2 reveal" id="eti-title">
                Evidence-to-Impact Accelerator.
              </h2>
            </div>
            <div className="section-head__side reveal">
              <p>
                Research, incubation and training are usually disconnected. Our
                flagship product combines them into a single ten-stage pathway that
                follows a problem from community research to scale.
              </p>
            </div>
          </div>

          <div className="stage-grid reveal">
            {acceleratorStages.map((stage) => (
              <article className="stage-card" key={stage.n}>
                <span className="stage-card__num">{stage.n}</span>
                <h3>{stage.name}</h3>
                <p>{stage.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="policy-challenge" aria-labelledby="challenge-title">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__copy">
              <p className="eyebrow reveal">Our most unique product</p>
              <h2 className="h2 reveal" id="challenge-title">
                The Policy Innovation Challenge.
              </h2>
            </div>
            <div className="section-head__side reveal">
              <p>
                Instead of asking young people what business they would start, we ask
                what problem they can solve with evidence.
              </p>
              <Link className="text-link" href="/contact?topic=programme&programme=challenge">
                Apply to the challenge
              </Link>
            </div>
          </div>

          <blockquote className="pull-quote reveal">
            <p>
              “What is one of Africa’s most pressing problems, and what evidence-based
              solution can you design?”
            </p>
            <footer>
              Young people work on real policy problems — not hypothetical case studies.
            </footer>
          </blockquote>

          <div className="editorial reveal">
            <div className="editorial__item">
              <div>
                <span className="editorial__num">01</span>
                <p className="editorial__title">What participants produce</p>
              </div>
              <div className="editorial__body">
                <ol className="editorial__list editorial__list--numbered">
                  <li>
                    <strong>Research</strong> — frame the problem and gather evidence
                    with the people affected.
                  </li>
                  <li>
                    <strong>Diagnosis</strong> — analyse root causes, institutions and
                    incentives.
                  </li>
                  <li>
                    <strong>Policy proposal</strong> — design a practical,
                    evidence-based option.
                  </li>
                  <li>
                    <strong>Prototype</strong> — test the proposal with users and
                    decision-makers.
                  </li>
                  <li>
                    <strong>Policy pitch</strong> — present at Policy Innovation Demo
                    Day.
                  </li>
                </ol>
              </div>
            </div>
            <div className="editorial__item">
              <div>
                <span className="editorial__num">02</span>
                <p className="editorial__title">Challenge themes</p>
              </div>
              <div className="editorial__body">
                <div className="theme-pills">
                  {[
                    "Youth employment",
                    "Education",
                    "Digital transformation",
                    "Artificial intelligence",
                    "Agriculture",
                    "Climate",
                    "Health",
                    "Entrepreneurship",
                    "Urban development",
                    "Regional integration",
                  ].map((theme) => (
                    <span key={theme}>{theme}</span>
                  ))}
                </div>
                <p className="editorial__note">
                  <span>Final product</span>
                  Policy Innovation Demo Day
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream" id="divisions" aria-labelledby="divisions-title">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__copy">
              <p className="eyebrow reveal">Our potential product portfolio</p>
              <h2 className="h2 reveal" id="divisions-title">
                Five strategic divisions.
              </h2>
            </div>
            <div className="section-head__side reveal">
              <p>
                Everything we offer sits inside five divisions. Resource mobilisation
                and partnerships run across all of them as a commercial service.
              </p>
            </div>
          </div>

          <div className="editorial reveal">
            {divisions.map((division) => (
              <div className="editorial__item" key={division.n}>
                <div>
                  <span className="editorial__num">{division.n}</span>
                  <p className="editorial__title">{division.name}</p>
                </div>
                <div className="editorial__body">
                  <p>{division.products}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="editorial__note reveal" style={{ marginTop: "1.5rem" }}>
            <span>Cross-cutting commercial service</span>
            Resource Mobilization & Partnerships
          </p>
        </div>
      </section>

      <section className="section" id="academy" aria-labelledby="academy-title">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__copy">
              <p className="eyebrow reveal">Career & Professional Development Academy</p>
              <h2 className="h2 reveal" id="academy-title">
                Learn. Practice. Apply. Demonstrate.
              </h2>
            </div>
            <div className="section-head__side reveal">
              <p>
                We make experiential learning mandatory. Instead of training →
                certificate, every participant moves through real briefs, honest
                feedback and a professional portfolio.
              </p>
            </div>
          </div>

          <div className="model-strip reveal" aria-label="Experiential learning model">
            {["Learn", "Practice", "Apply", "Receive feedback", "Improve", "Demonstrate"].map(
              (step, index) => (
                <span key={step}>
                  <b>0{index + 1}</b>
                  {step}
                </span>
              )
            )}
          </div>

          <div className="academy-grid">
            <article className="academy-card reveal">
              <p className="eyebrow">Employability</p>
              <h3 className="h3">A full employability simulation.</h3>
              <p>
                Participants receive a fictional job vacancy and complete the entire
                process — with structured feedback at every stage.
              </p>
              <ol className="editorial__list editorial__list--numbered">
                {employabilitySteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </article>

            <article className="academy-card reveal">
              <p className="eyebrow">Professional development</p>
              <h3 className="h3">Six capabilities. One portfolio.</h3>
              <p>
                Professional competency assessment → practical training → real-world
                challenge → feedback → professional portfolio.
              </p>
              <ul className="track-list">
                {academyTracks.map((track) => (
                  <li key={track.title}>
                    <strong>{track.title}</strong>
                    <span>{track.copy}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="academy-note reveal">
            <p>
              <strong>Employability Bootcamp</strong> for graduates ·{" "}
              <strong>University Employability Programme</strong> for students ·{" "}
              <strong>Professional Skills Academy</strong> for young professionals.
            </p>
            <Link className="btn btn--primary btn--sm" href="/contact?topic=programme&programme=bootcamp">
              Join the academy <span className="btn__icon" aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="faq-title">
        <div className="wrap faq__grid">
          <div className="faq__intro reveal">
            <p className="eyebrow">Questions</p>
            <h2 className="h2" id="faq-title">
              Before you apply.
            </h2>
            <p className="lede">
              The things people most often ask us about programmes, eligibility and
              getting started.
            </p>
            <Link className="text-link" href="/contact?topic=programme">
              Ask us anything
            </Link>
          </div>
          <div className="faq reveal">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.q}>
                <summary>
                  {faq.q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p className="faq-item__answer">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Not sure where you fit?"
        title="Start with a conversation."
        copy="Tell us where you are and what you want to move. We’ll help you find the right programme, partner or next step."
        primary={{ href: "/contact?topic=programme", label: "Talk to our team" }}
        secondary={{ href: "/contact?topic=partner", label: "Explore partnership" }}
      />
    </main>
  );
}
