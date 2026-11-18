import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import CtaBand from "@/components/CtaBand";
import { labs, supportiveServices } from "@/lib/content";
import "@/styles/inner.css";

export const metadata = createMetadata({
  title: "Our work",
  description:
    "Six connected labs — youth innovation and ventures, research and evidence, policy and governance, the Policy Innovation Challenge, strategic foresight, and career development.",
  openGraphDescription:
    "Research, policy, human-centred design, entrepreneurship and foresight connected in one youth-centred lab.",
  path: "/work",
});

// Alternating photo and flat-colour tiles, so the lab mosaic reads like a gallery wall.
const labTones = ["image", "lavender", "image", "cream", "image", "blush"];

// What a project can end in. Titles and copy as in the source documents; the
// photographs are existing project images, used as context.
const products = [
  {
    title: "AfriYouth Evidence Reports",
    copy: "Commissioned research and evidence synthesis for companies, programmes and institutions.",
    image: "/assets/img/research.webp",
    alt: "Young people listening during a meeting in an open-plan office",
  },
  {
    title: "AfriYouth Policy Solutions Series",
    copy: "Our most important intellectual product — practical policy options for live public problems.",
    image: "/assets/img/policy.webp",
    alt: "A young woman speaking into a microphone at a podium",
  },
  {
    title: "AfriYouth Innovation Accelerator",
    copy: "Incubation → Acceleration → Demo Day for youth-led ventures.",
    image: "/assets/img/brand/venture-startup.webp",
    alt: "A young innovator holding a hand-made “Start Up” sign",
  },
  {
    title: "Africa 2050 Futures Series",
    copy: "Scenarios and foresight studies, including Africa’s youth workforce in 2050.",
    image: "/assets/img/foresight.webp",
    alt: "Young women listening attentively in an audience",
  },
  {
    title: "AfriYouth Impact Dashboard",
    copy: "Our impact and learning product: Theory of Change, M&E systems, outcome measurement and learning reports.",
    image: "/assets/img/insight.webp",
    alt: "A team meeting around a long table in a bright boardroom",
  },
  {
    title: "Policy Innovation Demo Day",
    copy: "The public culmination of the Policy Innovation Challenge.",
    image: "/assets/img/collaboration.webp",
    alt: "Colleagues discussing a challenge around a table with laptops",
  },
];

export default function WorkPage() {
  return (
    <main id="main">
      <section className="page-hero page-hero--work" aria-labelledby="work-title">
        <div className="wrap">
          <div className="page-hero__grid">
            <div className="page-hero__copy">
              <h1 className="h1 reveal" id="work-title">
                Six labs. <em>One connected practice.</em>
              </h1>
            </div>
            <div className="page-hero__aside reveal">
              <p className="lede">
                Bring us a question that needs evidence, a policy that needs testing,
                a service that needs redesign or a venture that needs a market. We
                build the right team around it.
              </p>
              <div className="page-hero__meta">
                <span className="chip">For partners</span>
                <span className="chip">For institutions</span>
                <span className="chip">For funders</span>
              </div>
            </div>
          </div>
          <div className="work-hero__disciplines reveal" role="group" aria-label="Our capabilities">
            {[
              "Research",
              "Policy",
              "Human-Centred Design",
              "Entrepreneurship",
              "Foresight",
              "Capacity Building",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="labs-title">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__copy">
              <h2 className="h2 reveal" id="labs-title">
                What we bring
              </h2>
            </div>
            <div className="section-head__side reveal">
              <p>
                Every project starts with your question and the people who need to
                act on it. These six labs do the work.
              </p>
              <Link className="text-link" href="/contact?topic=research">
                Commission our expertise
              </Link>
            </div>
          </div>

          <div className="lab-mosaic reveal">
            {labs.map((lab, index) => {
              const tone = labTones[index % labTones.length];
              return (
                <article className={`lab-tile lab-tile--${tone}`} id={lab.id} key={lab.id}>
                  {tone === "image" ? (
                    <img
                      className="lab-tile__img"
                      src={lab.image}
                      width={1400}
                      height={900}
                      sizes="(max-width: 900px) 92vw, 33vw"
                      alt={lab.alt}
                      loading="lazy"
                    />
                  ) : null}
                  <div className="lab-tile__inner">
                    <span className="lab-tile__num">{lab.n}</span>
                    <div className="lab-tile__copy">
                      <p className="lab-tile__tag">{lab.tagline}</p>
                      <h3>{lab.name}</h3>
                      <p className="lab-tile__text">{lab.body}</p>
                      <Link className="lab-tile__link" href="/contact?topic=research">
                        Talk to us about this lab
                        <span aria-hidden="true">›</span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="support-title">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__copy">
              <h2 className="h2 reveal" id="support-title">
                Supportive services
              </h2>
            </div>
            <div className="section-head__side reveal">
              <p>
                Two services run through all our work. They help you show what
                changed and raise money for what comes next.
              </p>
            </div>
          </div>

          <div className="editorial reveal">
            {supportiveServices.map((service) => (
              <div className="editorial__item" key={service.id} id={service.id}>
                <div>
                  <span className="editorial__num">{service.n}</span>
                  <p className="editorial__title">{service.title}</p>
                  <p className="editorial__note" style={{ marginTop: "1.2rem" }}>
                    <span>Flagship product</span>
                    {service.product}
                  </p>
                </div>
                <div className="editorial__body">
                  <p>{service.intro}</p>
                  <p className="service-detail__list-title">Services include</p>
                  <ul className="editorial__list">
                    {service.services.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link className="text-link" href="/contact?topic=research">
                    Work with this team
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="products-title">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__copy">
              <h2 className="h2 reveal" id="products-title">
                What you get
              </h2>
            </div>
            <div className="section-head__side reveal">
              <p>
                Every project ends with something you can use: evidence, a policy
                option, a tested prototype, a funding case or a way to measure what
                matters.
              </p>
            </div>
          </div>

          <div className="media-grid reveal">
            {products.map((product) => (
              <article className="media-card" key={product.title}>
                <figure className="media-card__photo">
                  <img
                    src={product.image}
                    alt={product.alt}
                    width={800}
                    height={600}
                    loading="lazy"
                  />
                </figure>
                <h3>{product.title}</h3>
                <p className="media-card__desc">{product.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Good work starts with a better conversation."
        copy="Tell us what you want to change. We’ll help you find the right mix of evidence, design and action."
        primary={{ href: "/contact?topic=research", label: "Commission our work" }}
        secondary={{ href: "/contact?topic=partner", label: "Partner with us" }}
      />
    </main>
  );
}
