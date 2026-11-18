import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import CtaBand from "@/components/CtaBand";
import AcceleratorJourney from "@/components/accelerator/AcceleratorJourney";
import {
  academyTracks,
  employabilitySteps,
  labs,
  programmes,
  toRoman,
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

// The challenge themes live on the Policy Innovation Challenge lab record.
const challengeThemes = labs.find((lab) => lab.id === "challenge").services;

const faqs = [
  {
    q: "What makes the Policy Innovation Challenge different?",
    a: "Teams work on a live public problem with real stakeholders, not a hypothetical case study. They leave with research, a diagnosis, a policy proposal, a prototype and a Demo Day pitch.",
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
    q: "How do I register interest?",
    a: "Use the register-interest link on any programme card, or write to us through the contact form. Tell us which programme you are asking about and what you want to learn or change.",
  },
];

export default function ProgramsPage() {
  return (
    <main id="main">
      <section className="page-hero page-hero--programs" aria-labelledby="programs-title">
        <div className="wrap">
          <div className="page-hero__grid">
            <div className="page-hero__copy">
              <h1 className="h1 reveal" id="programs-title">
                Your next move starts <em>here.</em>
              </h1>
            </div>
            <div className="page-hero__aside reveal">
              <p className="lede">
                Practical programmes for young researchers, policy actors, founders and
                professionals who want to turn curiosity into skills, and skills into
                change.
              </p>
              <div className="programmes-hero__note">
                <p>Practice-led programmes, built around real briefs and real feedback.</p>
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
              <h2 className="h2 reveal" id="opportunities-title">
                Find your fit
              </h2>
            </div>
            <div className="section-head__side reveal">
              <p>
                Every programme is practical. You work on real briefs, get structured
                feedback, and leave with something you can show.
              </p>
              <Link className="text-link" href="/contact?topic=programme">
                Ask which programme fits
              </Link>
            </div>
          </div>

          <div className="media-grid">
            {programmes.map((programme) => (
              <article className="media-card reveal" key={programme.id} id={programme.id}>
                <figure className="media-card__photo">
                  <img
                    src={programme.image}
                    alt={programme.alt}
                    width={800}
                    height={600}
                    loading="lazy"
                  />
                </figure>
                <p className="media-card__meta">{programme.type}</p>
                <h3>{programme.name}</h3>
                <p className="media-card__desc">{programme.description}</p>
                <Link
                  className="media-card__cta"
                  href={`/contact?topic=programme&programme=${programme.id}`}
                  aria-label={`Register interest in the ${programme.name}`}
                >
                  Register interest
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AcceleratorJourney id="evidence-to-impact" headingId="eti-title" variant="light" />

      <section className="section" id="policy-challenge" aria-labelledby="challenge-title">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__copy">
              <h2 className="h2 reveal" id="challenge-title">
                The Policy Innovation Challenge.
              </h2>
            </div>
            <div className="section-head__side reveal">
              <p>
                Ten themes, one live public problem per team, and a Demo Day pitch to
                the people who can act on it.
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
                <span className="editorial__num">I</span>
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
                <span className="editorial__num">II</span>
                <p className="editorial__title">Challenge themes</p>
              </div>
              <div className="editorial__body">
                <div className="theme-pills">
                  {challengeThemes.map((theme) => (
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

      <section className="section" id="academy" aria-labelledby="academy-title">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__copy">
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
                  <b>{toRoman(index + 1)}</b>
                  {step}
                </span>
              )
            )}
          </div>

          <div className="academy-grid">
            <article className="academy-card reveal">
              <h3 className="h3">Employability</h3>
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
              <h3 className="h3">Professional development</h3>
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
        title="Start with a conversation."
        copy="Tell us where you are and what you want to change. We’ll help you find the right programme, partner or next step."
        primary={{ href: "/contact?topic=programme", label: "Talk to our team" }}
        secondary={{ href: "/contact?topic=partner", label: "Explore partnership" }}
      />
    </main>
  );
}
