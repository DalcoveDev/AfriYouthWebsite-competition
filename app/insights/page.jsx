import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import CtaBand from "@/components/CtaBand";
import { publications } from "@/lib/content";
import "@/styles/hub.css";
import "@/styles/inner.css";

export const metadata = createMetadata({
  title: "Insights & resources",
  description:
    "Evidence reports, policy briefs, futures scenarios and practical toolkits on youth innovation, public policy, human-centred design and impact in Africa.",
  openGraphDescription:
    "Research, field notes and practical resources for the work ahead.",
  path: "/insights",
});

const series = [
  {
    n: "01",
    name: "AfriYouth Evidence Reports",
    copy:
      "Commissioned and field-led research on the socio-economic challenges shaping young people’s lives — with clear implications for decision-makers.",
  },
  {
    n: "02",
    name: "AfriYouth Policy Solutions Series",
    copy:
      "Our most important intellectual product: practical policy options, implementation pathways and the coalitions needed to carry them.",
  },
  {
    n: "03",
    name: "Africa 2050 Futures Series",
    copy:
      "Scenarios, horizon scans and futures studies that help young people and institutions think beyond the next electoral cycle.",
  },
];

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
            <div className="report-cover">
              <div className="report-cover__top">
                <p className="report-cover__label">
                  AfriYouth futures series
                  <br />
                  Field report · 01
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
              <p className="eyebrow">Featured report</p>
              <h2 id="featured-title">
                Africa’s Youth Workforce in 2050: Four Possible Futures.
              </h2>
              <p>
                By 2050, Africa will be home to the world’s largest workforce. This
                futures study sets out four plausible scenarios — and what each one
                demands of educators, employers, policymakers and young people today.
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
                  Browse the library
                </Link>
              </div>
              <p className="library-feature__note">
                Foresight series · Published 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream" id="library" aria-labelledby="library-title">
        <div className="wrap">
          <div className="library__head">
            <div>
              <p className="eyebrow reveal">The library</p>
              <h2 className="h2 reveal" id="library-title">
                Useful, not just impressive.
              </h2>
            </div>
            <div className="reveal" style={{ maxWidth: "24rem" }}>
              <p className="note" style={{ marginBottom: "0.6rem" }}>
                Read, borrow, challenge. If something here is useful to your work,
                we’d love to know.
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
            Our publications are working documents. Read them, test them, push back —
            and tell us what they miss.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="series-title">
        <div className="wrap">
          <div className="section-head">
            <div className="section-head__copy">
              <p className="eyebrow reveal">How we publish</p>
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
