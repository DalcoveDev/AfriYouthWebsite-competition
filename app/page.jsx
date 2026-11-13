import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import CtaBand from "@/components/CtaBand";
import { acceleratorStages, brand, divisions, labs } from "@/lib/content";
import "@/styles/home.css";

export const metadata = createMetadata({
  title: "AfriYouth Innovation Labs — From Evidence to Impact",
  description:
    "AfriYouth Innovation Labs is a research, innovation and policy consulting firm connecting evidence, policy, human-centred design, entrepreneurship and foresight to turn young people’s ideas into lasting systems change across Africa.",
  openGraphDescription:
    "Research. Design. Innovate. Transform. A lab for Africa’s next generation of researchers, policy actors, designers and founders.",
  path: "/",
});

const routes = [
  {
    n: "01",
    who: "For young changemakers",
    title: "Build your practice. Take an idea further.",
    copy:
      "Join the Innovation Accelerator, the Policy Innovation Challenge, the Futures Academy or the Employability Bootcamp.",
    href: "/programs",
    link: "Explore programs",
  },
  {
    n: "02",
    who: "For partners",
    title: "Co-create the next system.",
    copy:
      "Bring a question, a mandate or a knotty challenge. We assemble research, policy, design, enterprise and foresight around it.",
    href: "/contact?topic=partner",
    link: "Start a partnership",
  },
  {
    n: "03",
    who: "For institutions",
    title: "Commission evidence that gets used.",
    copy:
      "Evidence reports, policy analysis, impact evaluation and investment readiness built around your mandate and the people you serve.",
    href: "/contact?topic=research",
    link: "Commission our work",
  },
];

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero" aria-labelledby="home-title">
        <div className="hero__wash" aria-hidden="true" />
        <div className="wrap">
          <div className="hero__topline">
            <p className="hero__meta">
              <span>AfriYouth Innovation Labs</span>
              <span>Kigali, Rwanda</span>
              <span>Pan-African</span>
            </p>
            <p className="hero__meta hero__meta--right">
              <span>Field note 001</span>
              <span>Est. 2026</span>
            </p>
          </div>

          <div className="hero__grid">
            <div className="hero__copy">
              <p className="hero__kicker">
                <span className="hero__kicker-rule" aria-hidden="true" />
                Research · Policy · Design · Enterprise · Foresight
              </p>
              <h1 className="hero__title" id="home-title">
                Africa’s future is <span className="mark">youth-written.</span>
              </h1>
              <p className="hero__lede">
                We are a research, innovation and policy consulting firm. We connect
                evidence, policy, human-centred design, entrepreneurship and foresight
                to turn young people’s ideas into{" "}
                <strong>lasting systems change.</strong>
              </p>
              <div className="btn-row hero__actions">
                <Link className="btn btn--gradient" href="/programs">
                  Find your next opportunity
                  <span className="btn__icon" aria-hidden="true">↗</span>
                </Link>
                <Link className="btn btn--outline" href="/work">
                  Explore the labs
                </Link>
              </div>

              <dl className="hero__ledger">
                <div>
                  <dt>06 labs</dt>
                  <dd>One connected practice, from research to scale.</dd>
                </div>
                <div>
                  <dt>10 stages</dt>
                  <dd>The Evidence-to-Impact Accelerator.</dd>
                </div>
                <div>
                  <dt>05 capabilities</dt>
                  <dd>Research, policy, design, enterprise, foresight.</dd>
                </div>
              </dl>
            </div>

            <div className="hero__media">
              <div className="hero__annotation">
                <span className="hero__annotation-dot" aria-hidden="true" />
                Open for collaboration
              </div>
              <figure className="hero__image">
                <figcaption className="hero__caption">
                  <span>Kigali, Rwanda</span>
                  <span>Field note 001</span>
                </figcaption>
                <img
                  src="/assets/img/hero-community.webp"
                  width={900}
                  height={1125}
                  alt="Young African innovators laughing together outdoors"
                />
              </figure>
              <figure className="hero__portrait">
                <img
                  src="/assets/img/portrait.webp"
                  width={700}
                  height={740}
                  alt="A young African woman smiling in a bright workspace"
                />
              </figure>
              <div className="hero__seal" aria-hidden="true">
                <svg viewBox="0 0 120 120">
                  <defs>
                    <path
                      id="seal-path"
                      d="M60,60 m-41,0 a41,41 0 1,1 82,0 a41,41 0 1,1 -82,0"
                    />
                  </defs>
                  <circle
                    cx="60"
                    cy="60"
                    r="56"
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.24"
                  />
                  <text
                    fill="currentColor"
                    fontSize="8"
                    fontWeight="600"
                    letterSpacing="2.1"
                  >
                    <textPath href="#seal-path">
                      EVIDENCE · POLICY · DESIGN · ENTERPRISE · FORESIGHT ·
                    </textPath>
                  </text>
                  <path
                    d="M60 40l5.2 14.8L80 60l-14.8 5.2L60 80l-5.2-14.8L40 60l14.8-5.2z"
                    fill="var(--pink)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee" aria-label="Our practice">
        <div className="marquee__track">
          {[0, 1].map((group) => (
            <div className="marquee__group" key={group} aria-hidden={group === 1}>
              {[
                "Research & evidence",
                "Policy & governance",
                "Human-centred design",
                "Entrepreneurship",
                "Strategic foresight",
                "Impact & learning",
                "From Evidence to Impact",
              ].map((item) => (
                <span className="marquee__item" key={`${group}-${item}`}>
                  {item}
                  <span className="marquee__dot" aria-hidden="true" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="chapter chapter--challenge" aria-labelledby="who-title">
        <div className="wrap chapter__grid">
          <p className="chapter__label reveal">
            <span>01</span>
            Who we are
            <br />
            Kigali · Pan-African
          </p>
          <div>
            <h2 className="chapter__title reveal" id="who-title">
              Africa’s largest workforce needs more than training.
            </h2>
            <p className="chapter__lede reveal">
              By 2030, Africa will have the largest workforce in the world. The
              opportunity is not simply to train young people — it is to give them the
              ability and capacity to solve African problems, and to build their future
              independence and self-reliance.
            </p>

            <ul className="tension-list reveal">
              <li>
                <span className="tension-list__letter">A</span>
                <h3>Most youth organisations focus on training.</h3>
                <p>
                  Skills matter, but certificates alone rarely change what a young
                  person can do, earn or influence.
                </p>
              </li>
              <li>
                <span className="tension-list__letter">B</span>
                <h3>Most incubators focus on startups.</h3>
                <p>
                  Ventures need customers and capital — not another pitch competition
                  with no follow-through.
                </p>
              </li>
              <li>
                <span className="tension-list__letter">C</span>
                <h3>Most think tanks and consultancies stay in their lane.</h3>
                <p>
                  Research, policy, design and enterprise are treated as separate
                  worlds, so good ideas stall.
                </p>
              </li>
            </ul>

            <p className="chapter__footnote reveal">
              AfriYouth connects all five capabilities in one lab — and keeps young
              people in the room long enough for change to take root.
            </p>

            <div className="btn-row" style={{ marginTop: "1.8rem" }}>
              <Link className="btn btn--outline" href="/about">
                Meet AfriYouth
                <span className="btn__icon" aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter chapter--response" aria-labelledby="labs-title">
        <div className="wrap">
          <div className="response__head">
            <div>
              <p className="eyebrow reveal">What we do</p>
              <h2 className="h2 reveal" id="labs-title">
                Six labs. One connected practice.
              </h2>
            </div>
            <div className="response__head-side reveal">
              <p>
                From the first question to the final system, we build the connective
                tissue between evidence, people and action.
              </p>
              <Link className="text-link" href="/work">
                Explore our work
              </Link>
            </div>
          </div>

          <div className="service-list reveal">
            {labs.map((lab) => (
              <Link className="service-row" href={`/work#${lab.id}`} key={lab.id}>
                <span className="service-row__num">{lab.n}</span>
                <span className="service-row__title">{lab.name}</span>
                <span className="service-row__desc">{lab.short}</span>
                <span className="service-row__arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
            <figure className="service-preview" aria-hidden="true">
              <img src="/assets/img/research.webp" alt="" data-preview-image />
            </figure>
          </div>

          <p className="response__note reveal">
            <span>Flagship product</span>
            The Evidence-to-Impact Accelerator connects all six labs in one ten-stage
            pathway — from community research to scale.
          </p>
        </div>
      </section>

      <section className="chapter chapter--belief" aria-labelledby="philosophy-title">
        <div className="wrap">
          <p className="chapter__label chapter__label--light reveal">
            <span>02</span>
            Our philosophy
          </p>
          <div className="belief__quote">
            <p id="philosophy-title">
              Think. Research. Design. Build. <span>Influence. Scale.</span>
            </p>
          </div>
          <div className="belief__grid">
            <div className="belief__col reveal">
              <p className="belief__lead">A lab, not a lane.</p>
              <p>
                Most organisations pick one discipline. We combine applied research,
                policy analysis, human-centred design, venture building and strategic
                foresight — because the problems young people face do not respect
                sector boundaries.
              </p>
            </div>
            <div className="belief__col reveal">
              <p className="belief__lead">Evidence with context.</p>
              <p>
                We start with lived experience and local knowledge, not imported
                answers. Young people help shape the questions, collect the data and
                make sense of what it means — then stay involved in the decision.
              </p>
            </div>
          </div>
          <p className="belief__mark" aria-hidden="true">
            <span>AFRI</span>
            <span>YOUTH</span>
          </p>
        </div>
      </section>

      <section className="chapter" aria-labelledby="accelerator-title">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__copy">
              <p className="eyebrow reveal">Our flagship product</p>
              <h2 className="h2 reveal" id="accelerator-title">
                The Evidence-to-Impact Accelerator.
              </h2>
            </div>
            <div className="section-head__side reveal">
              <p>
                Instead of disconnected research, incubation and training programmes,
                we combine them into one pathway that follows a problem all the way to
                scale.
              </p>
              <Link className="text-link" href="/programs#evidence-to-impact">
                See the full pathway
              </Link>
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

      <section className="chapter labs-index" aria-labelledby="portfolio-title">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__copy">
              <p className="eyebrow reveal">Our portfolio</p>
              <h2 className="h2 reveal" id="portfolio-title">
                Five divisions. One institution.
              </h2>
            </div>
            <div className="section-head__side reveal">
              <p>
                Resource mobilisation and partnerships act as a cross-cutting
                commercial service across every division.
              </p>
              <Link className="text-link" href="/programs#divisions">
                Explore the divisions
              </Link>
            </div>
          </div>

          <div className="labs-index__list reveal">
            {divisions.map((division) => (
              <Link className="labs-index__row" href="/programs#divisions" key={division.name}>
                <span className="labs-index__num">{division.n}</span>
                <span className="labs-index__name">{division.name}</span>
                <span className="labs-index__product">{division.products}</span>
                <span className="labs-index__arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="chapter" aria-labelledby="challenge-title">
        <div className="wrap">
          <div className="response__head">
            <div>
              <p className="eyebrow reveal">Our most distinctive product</p>
              <h2 className="h2 reveal" id="challenge-title">
                Policy Innovation Challenge.
              </h2>
            </div>
            <div className="response__head-side reveal">
              <p>
                Instead of asking young people what business they would like to start,
                we ask a harder question.
              </p>
              <Link className="text-link" href="/programs#policy-challenge">
                Enter the challenge
              </Link>
            </div>
          </div>

          <blockquote className="pull-quote reveal">
            <p>
              “What is one of Africa’s most pressing problems, and what evidence-based
              solution can you design?”
            </p>
            <footer>
              Research → Diagnosis → Policy proposal → Prototype → Policy pitch
            </footer>
          </blockquote>

          <div className="theme-pills reveal" aria-label="Challenge themes">
            {labs[3].services.map((theme) => (
              <span key={theme}>{theme}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="chapter chapter--possibilities" aria-labelledby="routes-title">
        <div className="wrap">
          <div className="possibilities__head">
            <div>
              <p className="eyebrow reveal">Ways in</p>
              <h2 className="h2 reveal" id="routes-title">
                There’s more than one way in.
              </h2>
            </div>
            <div className="reveal">
              <p className="chapter__lede" style={{ marginTop: 0 }}>
                Whether you’re building your practice, looking for a research partner
                or commissioning expertise, the door starts here.
              </p>
            </div>
          </div>

          <div className="routes reveal">
            {routes.map((route) => (
              <Link className="route" href={route.href} key={route.n}>
                <span className="route__num">{route.n}</span>
                <span className="route__who">{route.who}</span>
                <h3 className="route__title">{route.title}</h3>
                <p className="route__copy">{route.copy}</p>
                <span className="route__link">{route.link}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="chapter chapter--action" aria-labelledby="action-title">
        <div className="action__line" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="wrap action__inner">
          <p className="chapter__label chapter__label--light">
            <span>03</span>
            Let’s make it move
          </p>
          <h2 className="action__title" id="action-title">
            Bring us the question. <span className="mark mark--light">We’ll bring the lab.</span>
          </h2>
          <div className="action__foot">
            <p>
              {brand.mission} Tell us what you’re working on and we’ll come with
              questions, a multidisciplinary lens and a practical way forward.
            </p>
            <div className="btn-row">
              <Link className="btn btn--light" href="/contact">
                Start a conversation
                <span className="btn__icon" aria-hidden="true">↗</span>
              </Link>
              <Link className="btn btn--outline-light" href="/programs">
                Find a program
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="From Evidence to Impact"
        title="Research. Design. Innovate. Transform."
        copy="Evidence. Innovation. Impact. Work with a lab that connects all five capabilities around the change you want to make."
        primary={{ href: "/contact", label: "Start a conversation" }}
        secondary={{ href: "/about", label: "About AfriYouth" }}
      />
    </main>
  );
}
