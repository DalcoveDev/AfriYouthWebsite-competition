import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import CtaBand from "@/components/CtaBand";
import { brand, capabilities, divisions, voice } from "@/lib/content";
import "@/styles/inner.css";

export const metadata = createMetadata({
  title: "About",
  description:
    "AfriYouth Innovation Labs is a research, innovation and policy consulting firm that identifies, nurtures and advances promising ideas from Africa’s young innovators to address the Sustainable Development Goals.",
  openGraphDescription:
    "Research, human-centered design and entrepreneurship for Africa’s young innovators.",
  path: "/about",
});

const approach = [
  {
    n: "01",
    name: "Think",
    copy: "We interrogate the assumptions and agree on the question that actually matters.",
  },
  {
    n: "02",
    name: "Research",
    copy: "We generate evidence with the people closest to the problem, not about them.",
  },
  {
    n: "03",
    name: "Design",
    copy: "We translate evidence into solutions people can use, afford and trust.",
  },
  {
    n: "04",
    name: "Build",
    copy: "We prototype, test and strengthen the model, policy or venture.",
  },
  {
    n: "05",
    name: "Influence",
    copy: "We connect evidence and people to the decisions, institutions and resources that matter.",
  },
  {
    n: "06",
    name: "Scale",
    copy: "We measure what changed, adapt and build the capability to sustain it.",
  },
];

export default function AboutPage() {
  return (
    <main id="main">
      <section className="page-hero page-hero--about" aria-labelledby="about-title">
        <div className="wrap">
          <div className="page-hero__grid">
            <div className="page-hero__copy">
              <p className="eyebrow reveal">About AfriYouth</p>
              <h1 className="h1 reveal" id="about-title">
                We connect the dots that <em>change systems.</em>
              </h1>
            </div>
            <div className="page-hero__aside reveal">
              <p className="lede">{brand.intro}</p>
              <div className="page-hero__meta">
                <span className="chip">Research · Innovation · Policy</span>
                <span className="chip">Human-centered design</span>
                <span className="chip">Africa and beyond</span>
              </div>
            </div>
          </div>

          <div className="about-hero__media reveal">
            <figure>
              <img
                src="/assets/img/brand/electronics.webp"
                width={1400}
                height={800}
                alt="Close-up of a young innovator working on a circuit board"
              />
              <figcaption className="about-hero__caption">
                <span>Learning by making</span>
                <span>01 / Prototyping</span>
              </figcaption>
            </figure>
            <figure>
              <img
                src="/assets/img/brand/immersive-work.webp"
                width={1335}
                height={2000}
                alt="A young professional working at a desk with a virtual-reality headset"
              />
              <figcaption className="about-hero__caption">
                <span>Make room for the new</span>
                <span>02 / Foresight</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="manifesto" aria-labelledby="why-title">
        <div className="wrap manifesto__grid">
          <div className="manifesto__side reveal">
            <p className="eyebrow">Why we exist</p>
            <p className="note">
              A different kind of institution for a different kind of challenge.
            </p>
            <div className="manifesto__rule" aria-hidden="true" />
          </div>
          <div>
            <h2 className="manifesto__statement reveal" id="why-title">
              Africa doesn’t need another pipeline of ideas that stop at the pilot. It
              needs <em>the infrastructure</em> to move good ideas into policy, practice
              and enterprise.
            </h2>
            <div className="manifesto__foot reveal">
              <p>
                Too often, research sits on shelves, young people are consulted but not
                entrusted, and promising innovations never reach the systems they were
                built to change. We exist to close those gaps.
              </p>
              <p>Our work begins where disciplines end.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="mission-vision-title">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__copy">
              <p className="eyebrow reveal">Our mandate</p>
              <h2 className="h2 reveal" id="mission-vision-title">
                Mission and vision.
              </h2>
            </div>
            <div className="section-head__side reveal">
              <p>
                Our measure of success is what Africa’s young people are able to do
                with what they learn.
              </p>
            </div>
          </div>

          <div className="purpose__grid">
            <article className="purpose-card reveal">
              <span className="purpose-card__num">01 / Mission</span>
              <h3 className="h3">Evidence. Policy. Innovation. Led by Africa’s youth.</h3>
              <p>{brand.mission}</p>
              <svg
                className="purpose-card__mark"
                viewBox="0 0 64 64"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              >
                <circle cx="32" cy="32" r="22" />
                <circle cx="32" cy="32" r="11" />
                <path d="M32 4v10M32 50v10M4 32h10M50 32h10" />
              </svg>
            </article>

            <article className="purpose-card purpose-card--dark reveal">
              <span className="purpose-card__num">02 / Vision</span>
              <h3 className="h3">An Africa where young people drive inclusive transformation by 2050.</h3>
              <p>{brand.vision}</p>
              <svg
                className="purpose-card__mark"
                viewBox="0 0 64 64"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              >
                <circle cx="32" cy="32" r="24" />
                <ellipse cx="32" cy="32" rx="10" ry="24" />
                <path d="M8 32h48" />
                <circle cx="32" cy="32" r="3.4" fill="currentColor" stroke="none" />
              </svg>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="keywords-title">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__copy">
              <p className="eyebrow reveal">Our brand keywords</p>
              <h2 className="h2 reveal" id="keywords-title">
                Six ideas that shape everything we do.
              </h2>
            </div>
            <div className="section-head__side reveal">
              <p>
                They are the building blocks of our identity — the values behind every
                lab, programme and partnership.
              </p>
            </div>
          </div>
          <div className="brand-keywords reveal">
            {brand.keywords.map((keyword) => (
              <span className="chip" key={keyword}>
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="chapter" aria-labelledby="unique-title">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__copy">
              <p className="eyebrow reveal">What makes us different</p>
              <h2 className="h2 reveal" id="unique-title">
                Most organisations pick a lane. We connect them.
              </h2>
            </div>
            <div className="section-head__side reveal">
              <p>
                Our competitive advantage is not one service. It is the ability to hold
                research, policy, human-centred design, entrepreneurship and foresight
                in the same room.
              </p>
            </div>
          </div>

          <div className="cap-grid reveal">
            {capabilities.map((capability, index) => (
              <article className="cap-card" key={capability.name}>
                <span className="cap-card__num">0{index + 1}</span>
                <h3>{capability.name}</h3>
                <p>{capability.copy}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="approach section" aria-labelledby="approach-title">
        <div className="wrap">
          <div className="approach__head">
            <div>
              <p className="eyebrow eyebrow--light reveal">Our approach</p>
              <h2 className="h2 reveal" id="approach-title">
                Change is not a straight line. Neither are we.
              </h2>
            </div>
            <p className="lede reveal">
              Think → Research → Design → Build → Influence → Scale. We move between
              disciplines as the question demands, without losing rigour.
            </p>
          </div>

          <div className="approach__path approach__path--six reveal">
            {approach.map((step) => (
              <div className="approach__step" key={step.n}>
                <span className="approach__num">{step.n}</span>
                <h3>{step.name}</h3>
                <p>{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="values section" aria-labelledby="voice-title">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__copy">
              <p className="eyebrow reveal">Our voice</p>
              <h2 className="h2 reveal" id="voice-title">
                How AfriYouth sounds.
              </h2>
            </div>
            <div className="section-head__side reveal">
              <p>
                Five attributes shape how we write and speak — in reports, on social
                media and in youth-led campaigns.
              </p>
            </div>
          </div>

          <div className="values__grid reveal">
            {voice.map((attribute) => (
              <article className="value-card" key={attribute.n}>
                <div className="value-card__top">
                  <span className="value-card__num">{attribute.n}</span>
                  <span className="value-card__dot" aria-hidden="true" />
                </div>
                <h3>{attribute.title}</h3>
                <p>{attribute.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="collective section" id="divisions" aria-labelledby="collective-title">
        <div className="wrap collective__grid">
          <div className="collective__media reveal">
            <img
              src="/assets/img/brand/digital-learning.webp"
              width={1333}
              height={2000}
              alt="A young person exploring a virtual-reality headset beside electronics"
            />
            <span className="collective__stamp">
              Made of
              <br />
              many minds
            </span>
          </div>
          <div className="collective__copy reveal">
            <p className="eyebrow">How we’re built</p>
            <h2 className="h2" id="collective-title">
              Five divisions. One team.
            </h2>
            <p className="lede">
              All our work sits within five strategic divisions, with resource
              mobilisation and partnerships running across every one of them.
            </p>
            <ul className="role-list">
              {divisions.map((division) => (
                <li key={division.n}>
                  <span>{division.name}</span>
                  <span>{division.products}</span>
                </li>
              ))}
            </ul>
            <p className="editorial__note" style={{ marginTop: "1.2rem" }}>
              <span>Cross-cutting commercial service</span>
              Resource Mobilization & Partnerships
            </p>
            <Link className="text-link" href="/programs">
              See the programmes inside them
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Work with us"
        title="We’re looking for questions, partners and people who want to move."
        copy="If you share our belief that Africa’s next chapter will be shaped by its young people, let’s find the right way to work together."
        primary={{ href: "/contact", label: "Start a conversation" }}
        secondary={{ href: "/work", label: "Explore our work" }}
      />
    </main>
  );
}
