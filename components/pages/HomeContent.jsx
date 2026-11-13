import Link from "next/link";
import Image from "next/image";

const capabilities = [
  {
    n: "01",
    id: "research",
    name: "Research & Evidence",
    desc: "We generate and analyze evidence to understand socio-economic challenges and inform effective decisions.",
    image: "/assets/img/research.webp",
  },
  {
    n: "02",
    id: "policy",
    name: "Policy & Governance",
    desc: "We translate research into actionable policy recommendations, institutional reforms, and governance solutions.",
    image: "/assets/img/policy.webp",
  },
  {
    n: "03",
    id: "innovation",
    name: "Innovation & Entrepreneurship",
    desc: "We help young innovators discover problems, develop ideas, test solutions, and build sustainable ventures.",
    image: "/assets/img/enterprise.webp",
  },
  {
    n: "04",
    id: "foresight",
    name: "Strategic Foresight & Futures",
    desc: "We explore emerging trends, possible futures, and long-term challenges to support informed strategic decisions.",
    image: "/assets/img/foresight.webp",
  },
  {
    n: "05",
    id: "leadership",
    name: "Leadership & Capacity Development",
    desc: "We strengthen the critical thinking, professional capabilities, and leadership skills needed to address real-world challenges.",
    image: "/assets/img/programme.webp",
  },
];

const approach = [
  ["01", "Discover", "Identify challenges through community engagement and research."],
  ["02", "Diagnose", "Understand root causes and the systems behind them."],
  ["03", "Research", "Generate and analyze relevant evidence."],
  ["04", "Design", "Develop human-centered solutions."],
  ["05", "Build", "Prototype and test promising ideas."],
  ["06", "Influence", "Translate findings into policy recommendations and practical action."],
  ["07", "Scale", "Support the implementation and growth of solutions that work."],
];

const programmes = [
  {
    n: "01",
    href: "/programs#evidence-to-impact",
    title: "Evidence-to-Impact Accelerator",
    desc: "An integrated approach connecting problem discovery, research, human-centered design, prototyping, policy development, financing, implementation, and impact measurement.",
  },
  {
    n: "02",
    href: "/programs#policy-challenge",
    title: "Policy Innovation Challenge",
    desc: "An approach that encourages young people to investigate pressing African challenges and develop evidence-based policy proposals and practical solutions.",
  },
  {
    n: "03",
    href: "/programs#career-academy",
    title: "Career & Professional Development Academy",
    desc: "A practical learning approach that helps young people strengthen employability, professional capabilities, and workplace readiness.",
  },
];

export default function HomeContent() {
  return (
    <>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__wash" aria-hidden="true" />
          <div className="wrap">
            <div className="hero__grid">
              <div className="hero__copy">
                <p className="hero__tagline">
                  <span className="spark" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  Research. Innovation. Policy. Impact.
                </p>
                <h1 className="hero__title" id="hero-title">
                  Fueling Innovators for{" "}
                  <span className="text-gradient">Sustainable Development.</span>
                </h1>
                <p className="hero__lede">
                  We empower Africa&rsquo;s young people to generate evidence, shape
                  policy, and develop innovative solutions to the continent&rsquo;s most
                  pressing socio-economic challenges.
                </p>
                <p className="hero__lede">
                  Through research, human-centered design, entrepreneurship, and
                  innovation, we turn ideas into practical solutions for sustainable
                  development.
                </p>
                <div className="btn-row hero__actions">
                  <Link className="btn btn--gradient" href="/work">
                    Explore Our Work
                    <span className="btn__icon" aria-hidden="true">↗</span>
                  </Link>
                  <Link className="btn btn--outline" href="/programs">
                    Discover Our Programs
                  </Link>
                </div>
              </div>

              <div role="group" className="hero__media" aria-label="A glimpse of the AfriYouth community">
                <div className="hero__coordinate">Kigali, Rwanda · 1°57′S 30°04′E</div>
                <div className="hero__frame" aria-hidden="true" />
                <figure className="hero__image">
                  <Image
                    src="/assets/img/hero-community.webp"
                    width={900}
                    height={1125}
                    sizes="(max-width: 760px) 92vw, (max-width: 1080px) 55vw, 42vw"
                    alt="A group of young African creatives laughing together outdoors"
                    priority
                  />
                </figure>
                <figure className="hero__portrait">
                  <Image
                    src="/assets/img/portrait.webp"
                    width={700}
                    height={740}
                    sizes="(max-width: 760px) 45vw, 18vw"
                    alt="A young African woman smiling in a bright workspace"
                  />
                </figure>

                <div className="hero__badge">
                  <img src="/brand/logo-mark-white.svg" alt="" width="34" height="49" />
                  <span>
                    Afri Youth
                    <strong>Innovation Labs</strong>
                  </span>
                </div>

                <div className="hero__sparks" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="hero__annotation">
                  <span className="hero__annotation-dot" aria-hidden="true" />
                  Open for collaboration
                </div>
              </div>
            </div>
          </div>
        </section>

        <div role="group" className="marquee" aria-label="Our five capabilities">
          <div className="marquee__track">
            {[0, 1].map((copy) => (
              <div className="marquee__group" key={copy} aria-hidden={copy === 1}>
                {[
                  "Research & Evidence",
                  "Policy & Governance",
                  "Innovation & Entrepreneurship",
                  "Strategic Foresight & Futures",
                  "Leadership & Capacity Development",
                ].map((label) => (
                  <span className="marquee__item" key={label}>
                    {label}
                    <svg className="marquee__star" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M8 0l1.9 6.1L16 8l-6.1 1.9L8 16l-1.9-6.1L0 8l6.1-1.9L8 0Z" fill="currentColor" />
                    </svg>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section className="intro section" aria-labelledby="intro-title">
          <div className="wrap intro__grid">
            <aside className="intro__side reveal">
              <div className="intro__index">01</div>
              <p className="micro">
                Research · Innovation · Policy
                <br />
                Kigali · Pan-African
              </p>
              <div className="intro__side-line" />
              <div className="hero__seal hero__seal--intro" aria-hidden="true">
                <svg viewBox="0 0 120 120" role="presentation">
                  <defs>
                    <path id="sealPathIntro" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
                  </defs>
                  <text fill="currentColor" fontFamily="Poppins, sans-serif" fontSize="7.4" fontWeight="600" letterSpacing="1.3">
                    <textPath href="#sealPathIntro">EVIDENCE · POLICY · DESIGN · ENTERPRISE · </textPath>
                  </text>
                  <image href="/brand/logo-mark-white.svg" x="40" y="34" width="40" height="58" />
                </svg>
              </div>
            </aside>
            <div className="intro__body">
              <p className="eyebrow reveal">Who we are</p>
              <h2 className="h2 reveal" id="intro-title">
                Ideas are powerful. <span className="highlight">Evidence makes them transformative.</span>
              </h2>
              <p className="lede reveal">
                AfriYouth Innovation Labs is a research, innovation, and policy
                consulting firm identifying, nurturing, and advancing promising ideas
                from Africa&rsquo;s young innovators.
              </p>
              <p className="lede reveal">
                We connect research, policy, human-centered design, and entrepreneurship
                to address complex challenges and develop solutions that contribute to
                Africa&rsquo;s socio-economic transformation.
              </p>
              <p className="lede reveal">
                Our work goes beyond generating ideas. We help develop the evidence,
                capabilities, and practical solutions needed to create meaningful change.
              </p>
              <div className="intro__link reveal">
                <Link className="text-link" href="/about">
                  Learn About AfriYouth <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="work section" aria-labelledby="capabilities-title">
          <div className="wrap">
            <div className="section-head">
              <div className="section-head__copy">
                <p className="eyebrow reveal">What we do</p>
                <h2 className="h2 reveal" id="capabilities-title">
                  Five capabilities. One interconnected approach.
                </h2>
              </div>
              <div className="section-head__side reveal">
                <p>
                  Each capability stands on its own — and gets stronger when it works
                  with the others. This is the infrastructure behind the ideas.
                </p>
                <Link className="text-link" href="/work">
                  Explore our work <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="service-list">
              {capabilities.map((item) => (
                <Link
                  className="service-row reveal"
                  href={`/work#${item.id}`}
                  data-preview={item.image}
                  key={item.id}
                >
                  <span className="service-row__num">{item.n}</span>
                  <span className="service-row__title">{item.name}</span>
                  <span className="service-row__desc">{item.desc}</span>
                  <span className="service-row__arrow" aria-hidden="true">↗</span>
                </Link>
              ))}
              <div className="service-preview" aria-hidden="true">
                <img alt="" width="400" height="300" src="/assets/img/research.webp" data-preview-image />
              </div>
            </div>
          </div>
        </section>

        <section className="model on-dark" aria-labelledby="approach-title">
          <div className="model__orb" aria-hidden="true" />
          <div className="wrap">
            <div className="model__head">
              <div>
                <p className="eyebrow eyebrow--light reveal">From evidence to impact</p>
                <h2 className="h2 reveal" id="approach-title">
                  We connect thinking with action.
                </h2>
              </div>
              <p className="lede reveal">
                Our approach brings together research, design, innovation, and
                implementation to transform complex challenges into practical solutions.
              </p>
            </div>

            <ol className="approach-steps reveal">
              {approach.map(([num, title, copy]) => (
                <li className="approach-steps__row" key={title}>
                  <span className="approach-steps__num">{num}</span>
                  <strong className="approach-steps__title">{title}</strong>
                  <span className="approach-steps__copy">{copy}</span>
                </li>
              ))}
            </ol>

            <div className="model__foot reveal">
              <p>
                <strong>Seven steps, one practice.</strong> We move between research,
                design, policy and enterprise as the question demands — then stay for
                implementation.
              </p>
              <Link className="text-link text-link--light" href="/programs#evidence-to-impact">
                Discover our approach <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="ways section" aria-labelledby="programmes-title">
          <div className="wrap">
            <div className="section-head">
              <div className="section-head__copy">
                <p className="eyebrow reveal">Turning ideas into action</p>
                <h2 className="h2 reveal" id="programmes-title">
                  Creating pathways from problems to solutions.
                </h2>
              </div>
              <div className="section-head__side reveal">
                <p>
                  Three ways young people move from understanding a challenge to
                  testing, influencing and scaling a solution.
                </p>
                <Link className="text-link" href="/programs">
                  Explore programs <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="ways__grid reveal">
              {programmes.map((programme) => (
                <Link className="way-card" href={programme.href} key={programme.title}>
                  <div className="way-card__top">
                    <span className="way-card__num">{programme.n}</span>
                    <span className="way-card__arrow" aria-hidden="true">↗</span>
                  </div>
                  <div className="way-card__body">
                    <h3>{programme.title}</h3>
                    <p>{programme.desc}</p>
                    <span className="way-card__link">Explore programs →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="partner-band section--tight" aria-labelledby="difference-title">
          <div className="wrap partner-band__grid">
            <div className="reveal">
              <p className="eyebrow">Our difference</p>
              <h2 className="h2" id="difference-title">
                We connect disciplines that are often separated.
              </h2>
              <div className="partner-band__mark" aria-hidden="true">
                <img src="/brand/logo-mark-ink.svg" alt="" width="90" height="129" />
              </div>
            </div>
            <div className="partner-band__body reveal">
              <p>
                Research organizations generate evidence. Innovation hubs develop ideas.
                Policy institutions shape recommendations. Entrepreneurs build solutions.
              </p>
              <p>AfriYouth brings these capabilities together.</p>
              <p>Our distinctive approach connects:</p>
              <div role="group" className="sector-list" aria-label="The capabilities we connect">
                <span>Research and evidence</span>
                <span>Policy and governance</span>
                <span>Human-centered design</span>
                <span>Entrepreneurship and innovation</span>
                <span>Strategic foresight</span>
              </div>
              <p>
                Together, these capabilities create a pathway from understanding
                challenges to designing, testing, influencing, and scaling solutions.
              </p>
              <Link className="text-link" href="/work">
                See how it comes together <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="cta-band" aria-labelledby="cta-title">
          <div className="wrap cta-band__inner">
            <div className="reveal">
              <p className="eyebrow">Africa&rsquo;s future</p>
              <h2 className="h2" id="cta-title">
                Africa&rsquo;s future needs informed thinkers and bold innovators.
              </h2>
              <p>
                Join us in advancing ideas, generating evidence, and developing
                solutions for sustainable development.
              </p>
            </div>
            <div className="cta-band__actions reveal">
              <Link className="btn btn--primary" href="/contact">
                Get in Touch <span className="btn__icon" aria-hidden="true">↗</span>
              </Link>
              <Link className="btn btn--outline" href="/work">
                Explore Our Work
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
