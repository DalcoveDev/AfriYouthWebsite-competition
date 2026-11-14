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
    "Explore the AfriYouth Innovation Accelerator, the Policy Innovation Challenge, the Employability Bootcamp, the University Employability Programme and the Professional Skills Academy.",
  openGraphDescription:
    "Venture building, policy innovation and career development for Africa’s young people.",
  path: "/programs",
});

const faqs = [
  {
    q: "What makes the Policy Innovation Challenge different?",
    a: "Instead of asking young people what business they would like to start, we ask what one of Africa’s most pressing problems is — and what evidence-based solution they can design. Teams produce research, a diagnosis, a policy proposal, a prototype and a policy pitch.",
  },
  {
    q: "Who are the Academy programmes for?",
    a: "The Employability Bootcamp is for graduates, the University Employability Programme is for university students, and the Professional Skills Academy is for young professionals. All three sit within the Career & Professional Development Academy.",
  },
  {
    q: "What does experiential learning mean here?",
    a: "Instead of training → certificate, we work through learn → practice → apply → receive feedback → improve → demonstrate. For employability, that includes a full simulation: a fictional vacancy, an application, a psychometric test, an interview, a case study and salary negotiation.",
  },
  {
    q: "What is the Evidence-to-Impact Accelerator?",
    a: "It is our flagship product. Instead of disconnected research, incubation and training programmes, it combines them in one ten-stage pathway: discover, diagnose, research, design, prototype, policy, finance, implement, measure and scale.",
  },
  {
    q: "Can our organisation commission AfriYouth?",
    a: "Yes. We provide evidence reports, policy analysis, impact and learning services, and funding and investment readiness support to companies, organisations and public institutions. Tell us about your mandate and the question you need answered.",
  },
  {
    q: "Where does AfriYouth work?",
    a: "Across Africa and beyond. Our labs are built around African challenges and the Sustainable Development Goals, and our programmes are open to young people from across the continent.",
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
                <p>Practice-led programmes, built around real briefs and real feedback.</p>
                <span>
                  Innovation Accelerator · Policy Innovation Challenge · Career &
                  Professional Development Academy
                </span>
              </div>
              <figure className="programmes-hero__media">
                <img
                  src="/assets/img/brand/prototyping.webp"
                  width={1400}
                  height={934}
                  alt="A young innovator assembling an electronics prototype"
                />
              </figure>
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
                Every programme is practical and outcome-oriented: you work on real
                briefs, receive structured feedback and leave with something you can
                demonstrate.
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
                    <strong>{programme.note}</strong>
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
                Research, incubation and training usually live apart. Our flagship
                brings them together into one ten-stage path that follows a problem
                from community research all the way to scale.
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
                what problem they could solve — and back it with evidence.
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
              <p className="eyebrow reveal">What we offer</p>
              <h2 className="h2 reveal" id="divisions-title">
                Five divisions, one team.
              </h2>
            </div>
            <div className="section-head__side reveal">
              <p>
                All our work sits within five divisions, with resource mobilisation and
                partnerships running across every one of them.
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
                Learning here is hands-on from day one. Instead of training then a
                certificate, every participant works through real briefs, honest
                feedback and a portfolio they can actually show.
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
              <h3 className="h3">Practice the whole job hunt.</h3>
              <p>
                Participants take on a realistic job vacancy and complete the entire
                process — with honest feedback at every stage.
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
            <figure className="faq__photo">
              <img
                src="/assets/img/brand/digital-learning.webp"
                width={1333}
                height={2000}
                alt="A young person exploring a virtual-reality headset beside electronics"
              />
            </figure>
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
