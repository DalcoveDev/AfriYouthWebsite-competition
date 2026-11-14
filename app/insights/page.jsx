import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import CtaBand from "@/components/CtaBand";
import InsightCharts from "@/components/insights/InsightCharts";
import InsightFinder from "@/components/insights/InsightFinder";
import { labs, publications } from "@/lib/content";
import "@/styles/hub.css";
import "@/styles/inner.css";

export const metadata = createMetadata({
  title: "Insights & resources",
  description:
    "AfriYouth Evidence Reports, the Policy Solutions Series, the Africa 2050 Futures Series and the products our labs are built around.",
  openGraphDescription:
    "The series and products our research, policy and foresight work is organised around.",
  path: "/insights",
});

const series = [
  {
    n: "01",
    name: "AfriYouth Evidence Reports",
    copy:
      "Field-led research on the issues shaping young people’s lives — with clear takeaways for decision-makers.",
  },
  {
    n: "02",
    name: "AfriYouth Policy Solutions Series",
    copy:
      "Our most important body of work: practical policy options and the coalitions needed to carry them.",
  },
  {
    n: "03",
    name: "Africa 2050 Futures Series",
    copy:
      "Scenarios and futures studies that help young people and institutions think beyond the next election.",
  },
];

// The Policy Innovation Challenge themes, as listed in the brand documents.
const fields = labs.find((lab) => lab.id === "challenge").services;

// Everything on this page that a visitor might search for, all drawn from the
// three series, the six labs and the ten challenge themes.
const searchItems = [
  ...publications.map((publication) => ({
    id: `publication-${publication.n}`,
    type: "Publication",
    title: publication.title,
    snippet: publication.copy,
    tags: `${publication.category} ${publication.meta} ${publication.copy}`,
    href: `/contact?topic=research&subject=${encodeURIComponent(publication.title)}`,
  })),
  ...labs.map((lab) => ({
    id: `lab-${lab.id}`,
    type: "Lab",
    title: lab.name,
    snippet: lab.short,
    tags: `${lab.name} ${lab.tagline} ${lab.services.join(" ")}`,
    href: `/work#${lab.id}`,
  })),
  ...fields.map((field) => ({
    id: `field-${field}`,
    type: "Challenge theme",
    title: field,
    snippet:
      "One of the ten public challenges teams can take on in the Policy Innovation Challenge.",
    tags: `${field} policy innovation challenge`,
    href: "/programs#policy-challenge",
  })),
  ...series.map((item) => ({
    id: `series-${item.n}`,
    type: "Series",
    title: item.name,
    snippet: item.copy,
    tags: `${item.name} ${item.copy}`,
    href: "#library",
  })),
];

const startHere = searchItems.filter((item) => item.type === "Publication").slice(0, 3);

export default function InsightsPage() {
  return (
    <main id="main">
      <section className="page-hero" aria-labelledby="insights-title">
        <div className="wrap">
          <div className="page-hero__grid">
            <div className="page-hero__copy">
              <p className="eyebrow reveal">Insights & resources</p>
              <h1 className="h1 reveal" id="insights-title">
                Ideas for the work <em>ahead.</em>
              </h1>
            </div>
            <div className="page-hero__aside reveal">
              <p className="lede">
                Evidence, policy options, scenarios and practical tools from the edge
                of research, design, enterprise and foresight.
              </p>
              <div className="page-hero__meta">
                <span className="chip">Read in the open</span>
                <span className="chip">Use what works</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="featured-title">
        <div className="wrap">
          <div className="library-feature reveal">
            <div className="library-feature__head">
              <div className="report-cover">
                <div className="report-cover__top">
                  <p className="report-cover__label">
                    Africa 2050 Futures Series
                    <br />
                    Foresight
                  </p>
                  <img
                    className="report-cover__mark"
                    src="/brand/logo-mark-white.svg"
                    alt=""
                  />
                </div>
                <p className="report-cover__title">
                  Africa’s youth workforce
                  <em>2050: four futures</em>
                </p>
                <div className="report-cover__foot">
                  <span>Evidence · Futures</span>
                  <span>№ 01</span>
                </div>
              </div>
              <div className="library-feature__copy">
                <p className="eyebrow">Research spotlight</p>
                <h2 id="featured-title">
                  Africa’s Youth Workforce in 2050: Four Possible Futures.
                </h2>
                <p>
                  By 2030, Africa will have the largest workforce in the world. Our
                  Africa 2050 Futures Series practises the long view — Four Possible
                  Futures for Africa’s youth workforce in 2050.
                </p>
                <div className="btn-row">
                  <Link
                    className="btn btn--light"
                    href="/contact?topic=research&subject=Africa%202050%20Futures%20Series"
                  >
                    Request the briefing
                    <span className="btn__icon" aria-hidden="true">↗</span>
                  </Link>
                  <Link className="btn btn--outline-light" href="#library">
                    Browse the portfolio
                  </Link>
                </div>
                <p className="library-feature__note">
                  Africa 2050 Futures Series · Strategic Foresight & Futures Lab
                </p>
              </div>
            </div>

            <div className="spotlight-tools">
              <InsightFinder items={searchItems} fields={fields} featured={startHere} />
              <InsightCharts labs={labs} />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream" id="library" aria-labelledby="library-title">
        <div className="wrap">
          <div className="library__head">
            <div>
              <p className="eyebrow reveal">The portfolio</p>
              <h2 className="h2 reveal" id="library-title">
                Useful, not just impressive.
              </h2>
            </div>
            <div className="reveal" style={{ maxWidth: "24rem" }}>
              <p className="note" style={{ marginBottom: "0.6rem" }}>
                The series and products our labs are built around. If one of them fits
                a question you’re working on, ask us about it.
              </p>
            </div>
          </div>

          <div className="library__grid reveal">
            {publications.map((publication) => (
              <Link
                className="resource-card"
                href={`/contact?topic=research&subject=${encodeURIComponent(publication.title)}`}
                key={publication.n}
                style={{ "--cat-color": publication.tone }}
              >
                <div className="resource-card__top">
                  <span className="resource-card__cat">{publication.category}</span>
                  <span className="resource-card__num">{publication.n}</span>
                </div>
                <h3>{publication.title}</h3>
                <p>{publication.copy}</p>
                <div className="resource-card__foot">
                  <span>{publication.meta}</span>
                  <span aria-hidden="true">↗</span>
                </div>
              </Link>
            ))}
          </div>

          <p className="chapter__footnote reveal">
            Series, not one-off reports: each product is designed to be used by a
            programme team, a policymaker, a founder or a young researcher.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="series-title">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__copy">
              <p className="eyebrow reveal">How our work is organised</p>
              <h2 className="h2 reveal" id="series-title">
                Three series. One evidence agenda.
              </h2>
            </div>
            <div className="section-head__side reveal">
              <p>
                Every publication is designed to be used — by a programme team, a
                policymaker, a founder or a young researcher.
              </p>
            </div>
          </div>

          <div className="editorial reveal">
            {series.map((item) => (
              <div className="editorial__item" key={item.n}>
                <div>
                  <span className="editorial__num">{item.n}</span>
                  <p className="editorial__title">{item.name}</p>
                </div>
                <div className="editorial__body">
                  <p>{item.copy}</p>
                  <Link className="text-link" href="/contact?topic=research">
                    Commission or request a briefing
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Have something worth sharing?"
        title="Let’s make the thinking useful."
        copy="If you’re working on a question that belongs in public, we’d like to hear about it. Research, tools and uncomfortable questions are all welcome."
        primary={{ href: "/contact?topic=research", label: "Talk to us" }}
        secondary={{ href: "/contact?topic=partner", label: "Partner on research" }}
      />
    </main>
  );
}
