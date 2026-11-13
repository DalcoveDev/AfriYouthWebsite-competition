import Link from "next/link";

const categories = [
  {
    title: "Research & Evidence",
    desc: "Research findings, studies, surveys, and evidence on emerging socio-economic challenges.",
  },
  {
    title: "Policy & Governance",
    desc: "Policy analysis, governance perspectives, policy briefs, and recommendations.",
  },
  {
    title: "Innovation & Entrepreneurship",
    desc: "Ideas, experiences, and perspectives on developing and advancing innovative solutions.",
  },
  {
    title: "Strategic Foresight",
    desc: "Emerging trends, future scenarios, technology, and long-term development perspectives.",
  },
  {
    title: "Youth & Development",
    desc: "Perspectives on youth leadership, employability, education, and participation in development.",
  },
];

const formats = [
  "Research reports",
  "Policy briefs",
  "Analytical articles",
  "Opinion and commentary",
  "Case studies",
  "Futures and trend reports",
];

export default function InsightsContent() {
  return (
    <>
      <main id="main">
        <section className="page-hero" aria-labelledby="insights-title">
          <div className="wrap">
            <div className="page-hero__grid">
              <div className="page-hero__copy">
                <p className="eyebrow reveal">Knowledge. Evidence. Perspectives.</p>
                <h1 className="h1 reveal" id="insights-title">
                  Ideas and evidence for a <em>changing Africa.</em>
                </h1>
              </div>
              <div className="page-hero__aside reveal">
                <p className="lede">
                  Explore research, analysis, policy perspectives, and insights on the
                  challenges and opportunities shaping Africa&rsquo;s future.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="insights-intro-title">
          <div className="wrap">
            <div className="section-head">
              <div className="section-head__copy">
                <p className="eyebrow reveal">Why we publish</p>
                <h2 className="h2 reveal" id="insights-intro-title">
                  Informed decisions begin with understanding.
                </h2>
              </div>
              <div className="section-head__side reveal">
                <p>
                  Through research, analysis, and knowledge sharing, AfriYouth seeks to
                  contribute to conversations around youth development, innovation,
                  governance, entrepreneurship, technology, and sustainable development.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--cream" aria-labelledby="categories-title">
          <div className="wrap">
            <div className="section-head">
              <div className="section-head__copy">
                <p className="eyebrow reveal">The library</p>
                <h2 className="h2 reveal" id="categories-title">
                  Content categories.
                </h2>
              </div>
            </div>
            <div className="editorial reveal">
              {categories.map((category, index) => (
                <div className="editorial__item" key={category.title}>
                  <div>
                    <span className="editorial__num">0{index + 1}</span>
                    <p className="editorial__title">{category.title}</p>
                  </div>
                  <div className="editorial__body">
                    <p>{category.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="formats-title">
          <div className="wrap">
            <div className="section-head">
              <div className="section-head__copy">
                <p className="eyebrow reveal">How we publish</p>
                <h2 className="h2 reveal" id="formats-title">
                  Publication formats.
                </h2>
              </div>
            </div>
            <ul className="editorial__list reveal">
              {formats.map((format) => (
                <li key={format}>{format}</li>
              ))}
            </ul>

            <div className="editorial reveal" style={{ marginTop: "clamp(2rem, 4vw, 3rem)" }}>
              <div className="editorial__item">
                <div>
                  <span className="editorial__num">Library</span>
                  <p className="editorial__title">
                    New insights are being prepared.
                  </p>
                </div>
                <div className="editorial__body">
                  <p>
                    Check back soon for research, perspectives, and updates from
                    AfriYouth Innovation Labs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-band" aria-labelledby="insights-cta-title">
          <div className="wrap cta-band__inner">
            <div className="reveal">
              <p className="eyebrow">Work with us</p>
              <h2 className="h2" id="insights-cta-title">
                Have a question or research collaboration in mind?
              </h2>
            </div>
            <div className="cta-band__actions reveal">
              <Link className="btn btn--primary" href="/contact?topic=research">
                Get in Touch <span className="btn__icon" aria-hidden="true">↗</span>
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
