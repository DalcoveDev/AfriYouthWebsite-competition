import Link from "next/link";
import Image from "next/image";

const labs = [
  {
    id: "research",
    n: "01",
    name: "Research & Evidence Lab",
    heading: "Generating evidence for informed decisions.",
    short:
      "We investigate emerging socio-economic challenges and generate evidence that supports better decisions, stronger programs, and effective policies.",
    areas: [
      "Applied policy research",
      "Socio-economic research",
      "Youth research and surveys",
      "Baseline and endline studies",
      "Impact assessments",
      "Program evaluations",
      "Institutional and stakeholder analysis",
      "Political-economy analysis",
      "Research reports and policy briefs",
      "Evidence synthesis",
    ],
    productLabel: "Featured product",
    product: "AfriYouth Evidence Reports",
    image: "/assets/img/research.webp",
    alt: "A facilitated research discussion around a table",
  },
  {
    id: "policy",
    n: "02",
    name: "Policy & Governance Lab",
    heading: "Translating evidence into policy solutions.",
    short:
      "We connect research findings with policy development, institutional improvement, and governance processes to support more informed and effective decision-making.",
    areas: [
      "Policy analysis and design",
      "Policy review",
      "Regulatory analysis",
      "Policy briefs",
      "Governance diagnostics",
      "Public-sector innovation",
      "Stakeholder mapping",
      "Policy dialogue facilitation",
      "Policy implementation support",
    ],
    productLabel: "Featured product",
    product: "AfriYouth Policy Solutions Series",
    image: "/assets/img/policy.webp",
    alt: "A young woman speaking at a policy conference",
  },
  {
    id: "innovation",
    n: "03",
    name: "Innovation & Entrepreneurship",
    heading: "Turning promising ideas into practical solutions.",
    short:
      "We support the journey from identifying a challenge to developing, testing, and advancing innovative solutions.",
    areas: [
      "Idea discovery",
      "Human-centered design",
      "Design thinking",
      "Business-model development",
      "Prototype development",
      "Market validation",
      "Incubation and acceleration",
      "Pitch preparation",
      "Investor readiness",
      "Impact measurement",
    ],
    productLabel: "Featured product",
    product: "AfriYouth Innovation Accelerator",
    image: "/assets/img/enterprise.webp",
    alt: "A young entrepreneur building a venture in a bright studio",
  },
  {
    id: "foresight",
    n: "04",
    name: "Strategic Foresight & Futures Lab",
    heading: "Exploring possible futures to prepare for change.",
    short:
      "We examine emerging trends, uncertainties, and long-term developments to help organizations and communities anticipate change and make informed strategic decisions.",
    areas: [
      "Scenario planning",
      "Horizon scanning",
      "PESTLE and STEEPV analysis",
      "Future-of-work studies",
      "Emerging technology analysis",
      "Strategic foresight",
      "2030, 2040, and 2050 scenarios",
    ],
    productLabel: "Featured product",
    product: "Africa 2050 Futures Series",
    image: "/assets/img/foresight.webp",
    alt: "Two young women in a futures and strategy conversation",
  },
  {
    id: "leadership",
    n: "05",
    name: "Leadership & Capacity Development",
    heading: "Developing capabilities for a changing world.",
    short:
      "We strengthen the professional, analytical, digital, and leadership capabilities young people need to navigate employment, entrepreneurship, and complex development challenges.",
    areas: [
      "Leadership and management",
      "Critical thinking and problem-solving",
      "Communication and professionalism",
      "Digital and AI skills",
      "Project and performance management",
      "Career and personal development",
      "Employability and workplace readiness",
    ],
    productLabel: "Featured initiatives",
    product: "Employability Bootcamp and University Employability Programme",
    image: "/assets/img/programme.webp",
    alt: "Young professionals collaborating during a career development workshop",
  },
];

const supportive = [
  {
    n: "06",
    title: "Impact & Learning Services",
    copy: "We support organizations in understanding, measuring, evaluating, and communicating the results of their initiatives.",
    listTitle: "Services include",
    items: [
      "Theory of Change development",
      "Logical frameworks",
      "Monitoring and evaluation systems",
      "Key performance indicators",
      "Baseline studies",
      "Outcome and impact measurement",
      "Learning reports",
      "Impact storytelling",
    ],
  },
  {
    n: "07",
    title: "Funding & Investment Readiness",
    copy: "We support resource mobilization and investment preparation.",
    listTitle: "Services include",
    items: [
      "Grant opportunity intelligence",
      "Grant strategy",
      "Proposal development",
      "Donor mapping",
      "Investor readiness",
      "Pitch deck development",
      "Business case development",
      "Financial modelling",
      "Partnership development",
      "Due-diligence preparation",
    ],
  },
];

export default function WorkContent() {
  return (
    <>
      <main id="main">
        <section className="page-hero page-hero--work" aria-labelledby="work-title">
          <div className="wrap">
            <div className="page-hero__grid">
              <div className="page-hero__copy">
                <p className="eyebrow reveal">Our areas of work</p>
                <h1 className="h1 reveal" id="work-title">
                  Connecting evidence, innovation, and policy to solve complex
                  challenges.
                </h1>
              </div>
              <div className="page-hero__aside reveal">
                <p className="lede">
                  We bring together research, policy, entrepreneurship, human-centered
                  design, and strategic foresight to develop practical solutions for
                  Africa&rsquo;s socio-economic transformation.
                </p>
                <div className="page-hero__meta">
                  <span className="chip">For partners</span>
                  <span className="chip">For institutions</span>
                  <span className="chip">For funders</span>
                </div>
              </div>
            </div>
            <div role="group" className="work-hero__disciplines reveal" aria-label="Our five capabilities">
              {[
                "Research & evidence",
                "Policy & governance",
                "Innovation & entrepreneurship",
                "Strategic foresight",
                "Leadership & capacity",
              ].map((discipline) => (
                <span key={discipline}>{discipline}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-label="Our labs">
          <div className="wrap">
            <div className="service-details">
              {labs.map((lab) => (
                <details className="service-detail" id={lab.id} key={lab.id}>
                  <summary>
                    <span className="service-row__num">{lab.n}</span>
                    <span className="service-detail__titleblock">
                      <span className="service-detail__title">{lab.name}</span>
                    </span>
                    <span className="service-detail__short">{lab.short}</span>
                    <span className="service-row__arrow" aria-hidden="true">↗</span>
                  </summary>
                  <div className="service-detail__content">
                    <div className="service-detail__body">
                      <div>
                        <h2 className="h3">{lab.heading}</h2>
                        <div className="service-detail__cta">
                          <Link className="text-link" href="/contact?topic=research">
                            Work with this lab <span aria-hidden="true">→</span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <p className="service-detail__list-title">Areas of work</p>
                        <ul className="service-detail__list">
                          {lab.areas.map((area) => (
                            <li key={area}>{area}</li>
                          ))}
                        </ul>
                        <p className="service-detail__list-title" style={{ marginTop: "1.1rem" }}>
                          {lab.productLabel}
                        </p>
                        <p>{lab.product}</p>
                      </div>
                    </div>
                    <figure className="service-detail__media">
                      <Image
                        src={lab.image}
                        width={1400}
                        height={900}
                        sizes="(max-width: 960px) 88vw, 45vw"
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
                  Supporting organizations from strategy to impact.
                </h2>
              </div>
            </div>

            <div className="editorial reveal">
              {supportive.map((service) => (
                <div className="editorial__item" key={service.title}>
                  <div>
                    <span className="editorial__num">{service.n}</span>
                    <p className="editorial__title">{service.title}</p>
                  </div>
                  <div className="editorial__body">
                    <p>{service.copy}</p>
                    <p className="service-detail__list-title">{service.listTitle}</p>
                    <ul className="editorial__list">
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band" aria-labelledby="work-cta-title">
          <div className="wrap cta-band__inner">
            <div className="reveal">
              <p className="eyebrow">Work with us</p>
              <h2 className="h2" id="work-cta-title">
                Have a challenge worth solving?
              </h2>
              <p>
                Let&rsquo;s explore how research, innovation, and evidence-based
                solutions can help.
              </p>
            </div>
            <div className="cta-band__actions reveal">
              <Link className="btn btn--primary" href="/contact?topic=partner">
                Discuss a Collaboration <span className="btn__icon" aria-hidden="true">↗</span>
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
