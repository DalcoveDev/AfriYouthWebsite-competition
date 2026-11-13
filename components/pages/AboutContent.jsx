import Link from "next/link";
import Image from "next/image";

const values = [
  {
    title: "Innovation",
    desc: "Encouraging creative thinking and developing new approaches to complex challenges.",
  },
  {
    title: "Youth Empowerment",
    desc: "Equipping young people with the knowledge, capabilities, and opportunities to contribute to development.",
  },
  {
    title: "Sustainability",
    desc: "Advancing solutions that respond to present needs while considering long-term impact.",
  },
  {
    title: "Global Impact",
    desc: "Connecting local ideas and African innovation to broader development priorities.",
  },
  {
    title: "Human-Centered Design",
    desc: "Placing people, communities, and their lived experiences at the center of problem-solving.",
  },
  {
    title: "Leadership Development",
    desc: "Building the critical thinking, entrepreneurial, and leadership capabilities needed to influence positive change.",
  },
];

export default function AboutContent() {
  return (
    <>
      <main id="main">
        <section className="page-hero page-hero--about" aria-labelledby="about-title">
          <div className="wrap">
            <div className="page-hero__grid">
              <div className="page-hero__copy">
                <p className="eyebrow reveal">About AfriYouth</p>
                <h1 className="h1 reveal" id="about-title">
                  Empowering young people to <em>shape Africa&rsquo;s future.</em>
                </h1>
              </div>
              <div className="page-hero__aside reveal">
                <p className="lede">
                  AfriYouth Innovation Labs is a research, innovation, and policy
                  consulting firm advancing promising ideas and empowering young people
                  to address Africa&rsquo;s socio-economic challenges.
                </p>
                <div className="page-hero__meta">
                  <span className="chip">Kigali · Rwanda</span>
                  <span className="chip">Pan-African outlook</span>
                  <span className="chip">Research · Innovation · Policy</span>
                </div>
              </div>
            </div>

            <div className="about-hero__media reveal">
              <figure>
                <Image
                  src="/assets/img/collaboration.webp"
                  width={1400}
                  height={934}
                  sizes="(max-width: 960px) 60vw, 68vw"
                  alt="Three colleagues in conversation around a table with laptops"
                  priority
                />
                <figcaption className="about-hero__caption">
                  <span>The work is collective</span>
                  <span>Field note / 02</span>
                </figcaption>
              </figure>
              <figure>
                <Image
                  src="/assets/img/design.webp"
                  width={1400}
                  height={900}
                  sizes="(max-width: 960px) 32vw, 24vw"
                  alt="A hands-on creative workshop with young people painting and making together"
                />
                <figcaption className="about-hero__caption">
                  <span>Make room for the new</span>
                  <span>Kigali</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="manifesto" aria-labelledby="story-title">
          <div className="wrap manifesto__grid">
            <aside className="manifesto__side reveal">
              <p className="eyebrow">Our story</p>
              <p className="note">Fueling innovators for sustainable development.</p>
              <div className="manifesto__rule" />
            </aside>
            <div>
              <h2 className="manifesto__statement reveal" id="story-title">
                Building the capacity to solve <em>African challenges.</em>
              </h2>
              <div className="manifesto__foot reveal">
                <p>
                  By 2030, Africa is projected to have the world&rsquo;s largest
                  workforce. Preparing young people to contribute meaningfully to the
                  continent&rsquo;s development requires more than access to education
                  and training. It requires the ability to think critically, generate
                  evidence, influence decisions, and develop practical solutions.
                </p>
                <p>AfriYouth Innovation Labs works at this intersection.</p>
                <p>
                  We identify, nurture, and advance promising ideas from Africa&rsquo;s
                  young innovators, connecting research, human-centered design,
                  entrepreneurship, and policy to address the Sustainable Development
                  Goals.
                </p>
                <p>
                  Our focus is on turning community-driven ideas into practical and
                  scalable solutions that contribute to socio-economic transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="purpose section--tight" aria-label="Our mission and vision">
          <div className="wrap purpose__grid">
            <article className="purpose-card reveal">
              <span className="purpose-card__num">03 / Mission</span>
              <h2 className="h3">Our Mission</h2>
              <p>
                To empower Africa&rsquo;s youth to generate evidence, shape policy, and
                develop innovative solutions to Africa&rsquo;s most pressing
                socio-economic challenges through research, human-centered design, and
                entrepreneurship.
              </p>
              <svg className="purpose-card__mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path d="M24 3v42M3 24h42M9 9l30 30M39 9 9 39" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="24" cy="24" r="7" fill="currentColor" />
              </svg>
            </article>
            <article className="purpose-card purpose-card--dark reveal" style={{ "--delay": ".1s" }}>
              <span className="purpose-card__num">04 / Vision</span>
              <h2 className="h3">Our Vision</h2>
              <p>
                To build an Africa where empowered young people use evidence,
                innovation, and entrepreneurship to solve complex challenges, shape
                policies, and drive inclusive and sustainable socio-economic
                transformation by 2050.
              </p>
              <svg className="purpose-card__mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="1.2" />
                <path d="M24 5v38M5 24h38" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="24" cy="24" r="6" fill="currentColor" />
              </svg>
            </article>
          </div>
        </section>

        <section className="values section" aria-labelledby="values-title">
          <div className="wrap">
            <div className="section-head">
              <div className="section-head__copy">
                <p className="eyebrow reveal">What we hold close</p>
                <h2 className="h2 reveal" id="values-title">
                  Our values and guiding principles.
                </h2>
              </div>
              <div className="section-head__side reveal">
                <p>
                  These are not wall posters. They are the tests we use when the work
                  gets difficult.
                </p>
              </div>
            </div>
            <div className="values__grid reveal">
              {values.map((value, index) => (
                <article className="value-card" key={value.title}>
                  <div className="value-card__top">
                    <span className="value-card__num">0{index + 1}</span>
                    <span className="value-card__dot" />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--cream" aria-labelledby="philosophy-title">
          <div className="wrap">
            <div className="section-head">
              <div className="section-head__copy">
                <p className="eyebrow reveal">Our philosophy</p>
                <h2 className="h2 reveal" id="philosophy-title">
                  Think. Research. Design. Build. Influence. Scale.
                </h2>
              </div>
            </div>
            <div className="editorial reveal">
              <div className="editorial__item">
                <div>
                  <span className="editorial__num">06 / Philosophy</span>
                  <p className="editorial__title">
                    We believe meaningful transformation begins with understanding the
                    problem.
                  </p>
                </div>
                <div className="editorial__body">
                  <p>
                    Our philosophy connects critical thinking with evidence generation,
                    practical experimentation, policy influence, and scalable solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="brandkit section" aria-labelledby="brandkit-title">
          <div className="wrap">
            <div className="section-head">
              <div className="section-head__copy">
                <p className="eyebrow reveal">Our mark</p>
                <h2 className="h2 reveal" id="brandkit-title">
                  A figure in motion. A future in the making.
                </h2>
              </div>
              <div className="section-head__side reveal">
                <p>
                  Our identity is built from the same conviction as our work: young
                  people rising, reaching and setting ideas in motion.
                </p>
              </div>
            </div>

            <div className="brandkit__grid">
              <div className="brandkit__logo reveal">
                <img src="/brand/logo-mark.svg" alt="AfriYouth Innovation Labs logo mark" width="220" height="319" />
                <p className="brandkit__logo-caption">
                  <span>The mark</span>
                  <span>Figure · Head · Three sparks</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-band" aria-labelledby="about-cta-title">
          <div className="wrap cta-band__inner">
            <div className="reveal">
              <p className="eyebrow">Next step</p>
              <h2 className="h2" id="about-cta-title">
                Be part of the change.
              </h2>
              <p>
                Explore our work, discover our programs, or connect with AfriYouth
                Innovation Labs.
              </p>
            </div>
            <div className="cta-band__actions reveal">
              <Link className="btn btn--primary" href="/work">
                Explore Our Work <span className="btn__icon" aria-hidden="true">↗</span>
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
