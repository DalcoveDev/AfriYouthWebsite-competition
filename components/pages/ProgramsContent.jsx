import Link from "next/link";

const journey = [
  ["Discover", "Identify a challenge through community research."],
  ["Diagnose", "Understand root causes using systems and political-economy analysis."],
  ["Research", "Generate and analyze evidence."],
  ["Design", "Develop a human-centered solution."],
  ["Prototype", "Build and test the solution."],
  ["Policy", "Develop policy recommendations or business cases."],
  ["Finance", "Connect solutions with potential funders, investors, and partners."],
  ["Implement", "Pilot the solution."],
  ["Measure", "Evaluate outcomes and impact."],
  ["Scale", "Expand solutions that demonstrate potential."],
];

const stages = [
  "Idea discovery",
  "Human-centered design",
  "Business-model development",
  "Prototype development",
  "Market validation",
  "Incubation",
  "Acceleration",
  "Pitch preparation",
  "Investor readiness",
];

const themes = [
  "Youth employment",
  "Education",
  "Digital transformation and artificial intelligence",
  "Agriculture",
  "Climate",
  "Health",
  "Entrepreneurship",
  "Urban development",
  "Regional integration",
];

const learningAreas = [
  "CV customization",
  "Cover letter development",
  "LinkedIn optimization",
  "Portfolio development",
  "Job search strategies",
  "Understanding job descriptions",
  "Application customization",
  "Applicant Tracking Systems",
  "Employment networking",
  "Interview readiness and professional etiquette",
];

const developmentAreas = [
  "Leadership and management",
  "Critical thinking and problem-solving",
  "Communication and professionalism",
  "Digital and AI skills",
  "Project and performance management",
  "Career and personal development",
];

export default function ProgramsContent() {
  return (
    <>
      <main id="main">
        <section className="page-hero" aria-labelledby="programmes-title">
          <div className="wrap">
            <div className="page-hero__grid">
              <div className="page-hero__copy">
                <p className="eyebrow reveal">Programs &amp; initiatives</p>
                <h1 className="h1 reveal" id="programmes-title">
                  Developing people, ideas, and solutions for{" "}
                  <em>Africa&rsquo;s future.</em>
                </h1>
              </div>
              <div className="page-hero__aside reveal">
                <p className="lede">
                  Our programs connect young people with research, innovation,
                  practical learning, entrepreneurship, and opportunities to address
                  real-world challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-label="Our programmes">
          <div className="wrap">
            <div className="editorial">
              <div className="editorial__item" id="evidence-to-impact">
                <div>
                  <span className="editorial__num">02</span>
                  <h2 className="editorial__title">
                    From identifying problems to scaling solutions.
                  </h2>
                </div>
                <div className="editorial__body">
                  <p>
                    The Evidence-to-Impact Accelerator connects research, innovation,
                    policy, and entrepreneurship through an integrated process.
                  </p>
                  <p className="service-detail__list-title">The journey</p>
                  <ol className="editorial__list editorial__list--numbered">
                    {journey.map(([title, copy]) => (
                      <li key={title}>
                        <strong>{title}</strong> — {copy}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="editorial__item" id="innovation-accelerator">
                <div>
                  <span className="editorial__num">03</span>
                  <h2 className="editorial__title">
                    Supporting young innovators to develop sustainable solutions.
                  </h2>
                </div>
                <div className="editorial__body">
                  <p>
                    The Innovation Accelerator focuses on helping innovators progress
                    from early-stage ideas to validated solutions and investment
                    readiness.
                  </p>
                  <p className="service-detail__list-title">Key stages</p>
                  <ul className="editorial__list">
                    {stages.map((stage) => (
                      <li key={stage}>{stage}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="editorial__item" id="policy-challenge">
                <div>
                  <span className="editorial__num">04</span>
                  <h2 className="editorial__title">
                    What if young people were solving the problems shaping
                    Africa&rsquo;s future?
                  </h2>
                </div>
                <div className="editorial__body">
                  <p>
                    The Policy Innovation Challenge invites young people to investigate
                    pressing African challenges and develop evidence-based solutions.
                  </p>
                  <p>
                    Instead of asking only what business they want to start,
                    participants are encouraged to ask:
                  </p>
                  <p className="lede">
                    &ldquo;What is one of Africa&rsquo;s most pressing problems, and
                    what evidence-based solution can you design?&rdquo;
                  </p>
                  <p className="editorial__note">
                    <span>Challenge process</span>
                    Research → Diagnosis → Policy proposal → Prototype → Policy pitch
                  </p>
                  <p className="service-detail__list-title">Potential themes</p>
                  <div role="group" className="keyword-pills" aria-label="Potential themes">
                    {themes.map((theme) => (
                      <span key={theme}>{theme}</span>
                    ))}
                  </div>
                  <p className="editorial__note">
                    <span>Final experience</span>
                    Policy Innovation Demo Day
                  </p>
                </div>
              </div>

              <div className="editorial__item" id="career-academy">
                <div>
                  <span className="editorial__num">05</span>
                  <h2 className="editorial__title">
                    Preparing young people for meaningful professional opportunities.
                  </h2>
                </div>
                <div className="editorial__body">
                  <p>
                    The academy focuses on practical, evidence-based, and
                    outcome-oriented professional development.
                  </p>

                  <p className="service-detail__list-title">
                    Career and employability initiatives
                  </p>
                  <ul className="editorial__list">
                    <li>Employability Bootcamp for graduates</li>
                    <li>University Employability Programme for university students</li>
                  </ul>

                  <p className="service-detail__list-title">Learning areas</p>
                  <ul className="editorial__list">
                    {learningAreas.map((area) => (
                      <li key={area}>{area}</li>
                    ))}
                  </ul>

                  <p className="service-detail__list-title">
                    Professional development areas
                  </p>
                  <ul className="editorial__list">
                    {developmentAreas.map((area) => (
                      <li key={area}>{area}</li>
                    ))}
                  </ul>

                  <p className="editorial__note">
                    <span>Our learning philosophy</span>
                    Learn → Practice → Apply → Receive Feedback → Improve → Demonstrate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-band" aria-labelledby="programmes-cta-title">
          <div className="wrap cta-band__inner">
            <div className="reveal">
              <p className="eyebrow">Get involved</p>
              <h2 className="h2" id="programmes-cta-title">
                Ready to explore new possibilities?
              </h2>
              <p>
                Discover our initiatives, follow our updates, and get in touch to learn
                more about opportunities to engage.
              </p>
            </div>
            <div className="cta-band__actions reveal">
              <Link className="btn btn--primary" href="/contact?topic=programme">
                Contact AfriYouth <span className="btn__icon" aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <div className="cta-band__ring" aria-hidden="true" />
          <svg className="cta-band__star" viewBox="0 0 64 64" aria-hidden="true" fill="currentColor">
            <path d="M32 0l4.8 24.1L64 32l-27.2 7.9L32 64l-4.8-24.1L0 32l27.2-7.9L32 0Z" />
          </svg>
        </section>
      </main>
    </>
  );
}
