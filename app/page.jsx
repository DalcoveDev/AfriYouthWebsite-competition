import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import AcceleratorJourney from "@/components/accelerator/AcceleratorJourney";
import {
  acceleratorStages,
  divisions,
  labs,
  publications,
  stories,
} from "@/lib/content";
import "@/styles/home.css";
import "@/styles/inner.css";

export const metadata = createMetadata({
  title: "AfriYouth Innovation Labs — Fueling Innovators for Sustainable Development",
  description:
    "AfriYouth Innovation Labs is a research, innovation and policy lab broadening young people’s critical thinking and turning their ideas into progress on the Sustainable Development Goals across Africa.",
  openGraphDescription:
    "Research. Design. Innovate. Transform. A lab for Africa’s next generation of researchers, policy actors, designers and founders.",
  path: "/",
});

// Counts of what the practice runs, derived from the content above so they
// cannot drift. The source documents carry no reach or partner figures, so
// there are no outcome numbers to show yet — these are what is verifiable.
const stats = [
  { n: labs.length, label: "Labs across five divisions" },
  { n: divisions.length, label: "Divisions, one connected practice" },
  { n: acceleratorStages.length, label: "Stages from evidence to impact" },
  { n: publications.length, label: "Publication series, open to all" },
];

const routes = [
  {
    n: "I",
    title: "Build your practice. Take an idea further.",
    copy:
      "Join the Innovation Accelerator, the Policy Innovation Challenge or the Employability Bootcamp.",
    href: "/programs",
    link: "Explore programs",
  },
  {
    n: "II",
    title: "Co-create the next system.",
    copy:
      "Bring a question, a mandate or a knotty challenge. We assemble research, policy, design, enterprise and foresight around it.",
    href: "/contact?topic=partner",
    link: "Start a partnership",
  },
  {
    n: "III",
    title: "Commission evidence that gets used.",
    copy:
      "Evidence reports, policy analysis, impact evaluation and investment readiness built around your mandate and the people you serve.",
    href: "/contact?topic=research",
    link: "Commission our work",
  },
];

export default function HomePage() {
  return (
    <main id="main" className="home-main">
      <section id="home-start" className="hero home-section" aria-labelledby="home-title">
        <div className="hero__wash" aria-hidden="true" />
        <div className="wrap">
          <div className="hero__grid">
            <div className="hero__copy">
              <h1 className="hero__title" id="home-title">
                Africa’s future is <span className="mark">youth-written.</span>
              </h1>
              <p className="hero__lede">
                We’re a research, innovation and policy lab. We help Africa’s young
                people think critically, sharpen their ideas and turn them into{" "}
                <strong>real progress on the SDGs.</strong>
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

            </div>

            <div className="hero__media">
              <figure className="hero__image">
                <img
                  src="/assets/img/afiyouthheroimagenobg.png"
                  width={447}
                  height={447}
                  alt="A group of young Africans smiling and cheering together"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section id="home-who" className="chapter chapter--challenge home-section" aria-labelledby="who-title">
        <div className="wrap chapter__grid">
          <div className="chapter__label-col">
            <figure className="chapter__photo reveal">
              <img
                src="/assets/img/brand/immersive-work.webp"
                width={1335}
                height={2000}
                alt="A young professional working with a virtual-reality headset"
              />
            </figure>
          </div>
          <div>
            <h2 className="chapter__title reveal" id="who-title">
              The world’s largest workforce needs more than training.
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

            <div className="btn-row" style={{ marginTop: "1.8rem" }}>
              <Link className="btn btn--outline" href="/about">
                Meet AfriYouth
                <span className="btn__icon" aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="home-labs" className="chapter chapter--response home-section" aria-labelledby="labs-title">
        <div className="wrap">
          <div className="response__head">
            <div>
              <h2 className="h2 reveal" id="labs-title">
                What we do
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
          </div>          <div className="media-grid reveal">
            {labs.map((lab) => (
              <Link className="media-card" href={`/work#${lab.id}`} key={lab.id}>
                <figure className="media-card__photo">
                  <img
                    src={lab.image}
                    alt={lab.alt}
                    width={800}
                    height={600}
                    loading="lazy"
                  />
                </figure>
                <h3>{lab.name}</h3>
                <p className="media-card__desc">{lab.tagline}</p>
                <span className="media-card__cta">
                  See the lab
                  <span aria-hidden="true">↗</span>
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <section id="home-philosophy" className="chapter chapter--belief home-section" aria-labelledby="philosophy-title">
        <div className="wrap">
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

      <AcceleratorJourney id="home-accelerator" headingId="accelerator-title" compact />

      <section id="home-divisions" className="chapter labs-index home-section" aria-labelledby="portfolio-title">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__copy">
              <h2 className="h2 reveal" id="portfolio-title">
                Our divisions
              </h2>
            </div>
            <div className="section-head__side reveal">
              <p>
                Resource mobilisation and partnerships act as a cross-cutting
                commercial service across every division.
              </p>
              <Link className="text-link" href="/about#divisions">
                Explore the divisions
              </Link>
            </div>
          </div>          <div className="division-grid reveal">
            {divisions.map((division) => (
              <Link className="division" href="/about#divisions" key={division.name}>
                <h3 className="division__name">{division.name}</h3>
                <p className="division__products">{division.products}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="stat-band home-section" aria-label="AfriYouth at a glance">
        <div className="wrap stat-band__grid">
          {stats.map((stat) => (
            <div className="stat-band__item" key={stat.label}>
              <span className="stat-band__num">{stat.n}</span>
              <span className="stat-band__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="home-challenge" className="chapter home-section" aria-labelledby="challenge-title">
        <div className="wrap">
          <div className="response__head">
            <div>
              <h2 className="h2 reveal" id="challenge-title">
                Policy Innovation Challenge.
              </h2>
            </div>
            <div className="response__head-side reveal">
              <p>
                A live public problem, a policy proposal and a Demo Day pitch.
              </p>
              <Link className="text-link" href="/programs#policy-challenge">
                Enter the challenge
              </Link>
            </div>
          </div>

          <figure className="challenge__media reveal">
            <img
              src="/assets/img/brand/prototyping.webp"
              width={1400}
              height={934}
              alt="A young innovator assembling an electronics prototype"
            />
          </figure>
        </div>
      </section>

      <section id="home-ways-in" className="chapter chapter--possibilities home-section" aria-labelledby="routes-title">
        <div className="wrap">
          <div className="possibilities__head">
            <div>
              <h2 className="h2 reveal" id="routes-title">
                Ways in
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
                <h3 className="route__title">{route.title}</h3>
                <p className="route__copy">{route.copy}</p>
                <span className="route__link">{route.link}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {stories.length > 0 && (
        <section id="home-stories" className="chapter home-section" aria-labelledby="stories-title">
          <div className="wrap">
            <div className="section-head">
              <div className="section-head__copy">
                <h2 className="h2 reveal" id="stories-title">
                  Young people
                </h2>
              </div>
              <div className="section-head__side reveal">
                <p>Participants and partners, in their own words.</p>
                <Link className="text-link" href="/contact">
                  Share your story
                </Link>
              </div>
            </div>

            <div className="stories reveal">
              {stories.map((story) => (
                <Link className="story-card" href={story.href} key={story.name}>
                  <figure className="story-card__photo">
                    <img
                      src={story.image}
                      alt={story.alt}
                      width={800}
                      height={1000}
                    />
                  </figure>
                  <span className="story-card__tag">
                    {story.theme} · {story.country}
                  </span>
                  <h3>{story.title}</h3>
                  <p className="story-card__name">
                    {story.name}, {story.role}
                  </p>
                  <span className="story-card__cta">
                    Read the story
                    <span aria-hidden="true">↗</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="home-latest" className="chapter home-section" aria-labelledby="latest-title">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__copy">
              <h2 className="h2 reveal" id="latest-title">
                Latest from the lab
              </h2>
            </div>
            <div className="section-head__side reveal">
              <p>
                Research, policy options and futures scenarios from our three
                publication series.
              </p>
              <Link className="text-link" href="/insights">
                Browse the library
              </Link>
            </div>
          </div>

          <div className="latest-grid reveal">
            {publications.map((publication) => (
              <Link
                className="latest-card"
                href="/insights"
                key={publication.n}
              >
                <span className="latest-card__top">
                  <span className="latest-card__cat">{publication.category}</span>
                  <span className="latest-card__num">№ {publication.n}</span>
                </span>
                <h3>{publication.title}</h3>
                <p>{publication.copy}</p>
                <span className="latest-card__foot">
                  <span className="latest-card__meta">{publication.meta}</span>
                  <span className="latest-card__cta">
                    Read the series
                    <span aria-hidden="true">↗</span>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="home-contact" className="chapter chapter--action home-section" aria-labelledby="action-title">
        <div className="action__line" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="wrap action__inner">
          <h2 className="action__title" id="action-title">
            Bring us the question. <span className="mark">We’ll bring the lab.</span>
          </h2>
          <div className="action__foot">
            <p>
              Tell us what you’re working on and we’ll come with questions, a
              multidisciplinary lens and a practical way forward.
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
    </main>
  );
}
