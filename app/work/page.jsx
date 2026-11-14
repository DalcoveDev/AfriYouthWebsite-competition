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

// The core AfriYouth philosophy, as set out in the About document.
const workingSteps = [
  {
    n: "01",
    title: "Think",
    copy: "We start with the question and the assumptions behind it.",
  },
  {
    n: "02",
    title: "Research",
    copy: "We generate and analyse evidence with the people closest to the problem.",
  },
  {
    n: "03",
    title: "Design",
    copy: "We translate evidence into solutions people can use, afford and trust.",
  },
  {
    n: "04",
    title: "Build",
    copy: "We prototype, test and strengthen the model, policy or venture.",
  },
  {
    n: "05",
    title: "Influence",
    copy: "We connect evidence and people to the decisions, institutions and resources that matter.",
  },
  {
    n: "06",
    title: "Scale",
    copy: "We scale what works and build the capability to sustain it.",
  },
];

export default function WorkPage() {
  return (
    <main id="main">
      <section className="page-hero page-hero--work" aria-labelledby="work-title">
        <div className="wrap">
          <div className="page-hero__grid">
            <div className="page-hero__copy">
              <p className="eyebrow reveal">Our areas of work</p>
              <h1 className="h1 reveal" id="work-title">
                Six labs. <em>One connected practice.</em>
              </h1>
            </div>
            <div className="page-hero__aside reveal">
              <p className="lede">
                Whether you have a question that needs evidence, a policy that needs
                testing, a service that needs redesign or a venture that needs a market
                — we bring the right mix of disciplines to the table.
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
              <p className="eyebrow reveal">What we bring</p>
              <h2 className="h2 reveal" id="labs-title">
                No off-the-shelf answers.
              </h2>
            </div>
            <div className="section-head__side reveal">
              <p>
                Every piece of work starts with your question, your context and the
                people who need to act on it. Open a lab to see how we can help.
              </p>
              <Link className="text-link" href="/contact?topic=research">
                Commission our expertise
              </Link>
            </div>
          </div>

          <div className="service-details reveal">
            {labs.map((lab) => (
              <details className="service-detail" id={lab.id} key={lab.id} open={lab.id === "research"}>
                <summary>
                  <span className="service-row__num">{lab.n}</span>
                  <span className="service-detail__titleblock">
                    <span className="service-detail__title">{lab.name}</span>
                    <span className="service-detail__tag">{lab.tagline}</span>
                  </span>
                  <span className="service-detail__short">{lab.short}</span>
                  <span className="service-row__arrow" aria-hidden="true">↗</span>
                </summary>
                <div className="service-detail__content">
                  <div className="service-detail__body">
                    <div>
                      <p>{lab.body}</p>
                      <div className="service-detail__cta">
                        <Link className="text-link" href="/contact?topic=research">
                          Talk to us about this lab
                        </Link>
                      </div>
                    </div>
                    <div>
                      <p className="service-detail__list-title">{lab.servicesLabel || "What we offer"}</p>
                      <ul className="service-detail__list">
                        {lab.services.map((service) => (
                          <li key={service}>{service}</li>
                        ))}
                      </ul>
                      <p className="service-detail__list-title" style={{ marginTop: "1.4rem" }}>
                        {lab.productLabel}
                      </p>
                      <p className="service-detail__product">{lab.product}</p>
                      <p className="editorial__note">
                        <span>How it works</span>
                        {lab.productNote}
                      </p>
                    </div>
                  </div>
                  <figure className="service-detail__media">
                    <img
                      src={lab.image}
                      width={1400}
                      height={900}
                      sizes="(max-width: 960px) 88vw, 40vw"
                      alt={lab.alt}
                    />
                    <figcaption>{lab.name}</figcaption>
                  </figure>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="support-title">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__copy">
              <p className="eyebrow reveal">Supportive services</p>
              <h2 className="h2 reveal" id="support-title">
                From strategy to demonstrated impact.
              </h2>
            </div>
            <div className="section-head__side reveal">
              <p>
                Two services run across all our work, helping partners show what
                changed and fund what comes next.
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

      <section className="process section" aria-labelledby="process-title">
        <div className="wrap">
          <div className="process__head">
            <div>
              <p className="eyebrow eyebrow--light reveal">How we work</p>
              <h2 className="h2 reveal" id="process-title">
                A practical, participatory way forward.
              </h2>
            </div>
            <p className="lede reveal">
              Our core philosophy is Think → Research → Design → Build → Influence →
              Scale. We move between disciplines as the question demands.
            </p>
          </div>

          <div className="process__list reveal">
            {workingSteps.map((step) => (
              <div className="process__row" key={step.n}>
                <span className="process__num">{step.n}</span>
                <span className="process__title">{step.title}</span>
                <span className="process__desc">{step.copy}</span>
                <span aria-hidden="true">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="products-title">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__copy">
              <p className="eyebrow reveal">What we leave behind</p>
              <h2 className="h2 reveal" id="products-title">
                Products, not just reports.
              </h2>
            </div>
            <div className="section-head__side reveal">
              <p>
                Every project leaves you with something you can use: solid evidence, a
                policy option, a tested prototype, a funding case or a way to measure
                what matters.
              </p>
            </div>
          </div>

          <div className="cap-grid reveal">
            {[
              ["AfriYouth Evidence Reports", "Commissioned research and evidence synthesis for companies, programmes and institutions."],
              ["AfriYouth Policy Solutions Series", "Our most important intellectual product — practical policy options for live public problems."],
              ["AfriYouth Innovation Accelerator", "Incubation → Acceleration → Demo Day for youth-led ventures."],
              ["Africa 2050 Futures Series", "Scenarios and foresight studies, including Africa’s youth workforce in 2050."],
              ["AfriYouth Impact Dashboard", "Our impact and learning product: Theory of Change, M&E systems, outcome measurement and learning reports."],
              ["Policy Innovation Demo Day", "The public culmination of the Policy Innovation Challenge."],
            ].map(([title, copy], index) => (
              <article className="cap-card" key={title}>
                <span className="cap-card__num">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Bring us your hardest question"
        title="Good work starts with a better conversation."
        copy="Tell us what you’re trying to change. We’ll help you find the right mix of evidence, design and action."
        primary={{ href: "/contact?topic=research", label: "Commission our work" }}
        secondary={{ href: "/contact?topic=partner", label: "Partner with us" }}
      />
    </main>
  );
}
