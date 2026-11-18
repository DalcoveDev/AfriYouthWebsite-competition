import Link from "next/link";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { createMetadata } from "@/lib/metadata";
import CtaBand from "@/components/CtaBand";
import ResearchLibrary from "@/components/insights/ResearchLibrary";
import { publications } from "@/lib/content";
import "@/styles/hub.css";
import "@/styles/inner.css";

export const metadata = createMetadata({
  title: "Insights & resources",
  description:
    "The three AfriYouth publication series: Evidence Reports, the Policy Solutions Series and the Africa 2050 Futures Series.",
  openGraphDescription:
    "Research, policy options and futures scenarios from AfriYouth Innovation Labs.",
  path: "/insights",
});

// The flagship report leads the page, then the full library follows below.
const featured = publications[0];

export default function InsightsPage() {
  return (
    <main id="main">
      <section className="page-hero page-hero--research" aria-labelledby="insights-title">
        <div className="wrap">
          <div className="page-hero__grid">
            <div className="page-hero__copy">
              <h1 className="h1 reveal" id="insights-title">
                Evidence for the work <em>ahead.</em>
              </h1>
            </div>
            <div className="page-hero__aside reveal">
              <p className="lede">
                Sharing knowledge and evidence to drive greater impact. Our labs
                publish learning briefs, evidence reports and futures work so that
                research, policy and practice move together.
              </p>
              <div className="page-hero__meta">
                <span className="chip">Read in the open</span>
                <span className="chip">Use what works</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="featured-title">
        <div className="wrap">
          <div className="library-feature reveal">
            <div className="library-feature__head">
              <div className="report-cover">
                <div className="report-cover__top">
                  <p className="report-cover__label">
                    {featured.meta}
                    <br />
                    {featured.category}
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
                  <span>№ {featured.n}</span>
                </div>
              </div>
              <div className="library-feature__copy">
                <p className="library-feature__eyebrow">Featured report</p>
                <h2 id="featured-title">{featured.title}</h2>
                <p>
                  Our Africa 2050 Futures Series looks far ahead: four possible
                  futures for the continent’s largest generation, and what each one
                  asks of decision-makers today.
                </p>
                <div className="btn-row">
                  <Link
                    className="btn btn--light"
                    href={`/contact?topic=research&subject=${encodeURIComponent(
                      featured.title
                    )}`}
                  >
                    Request the briefing
                    <span className="btn__icon" aria-hidden="true">
                      <HiOutlineArrowUpRight />
                    </span>
                  </Link>
                  <Link className="btn btn--outline-light" href="#library">
                    Browse all reports
                  </Link>
                </div>
                <p className="library-feature__note">
                  {featured.meta} · Strategic Foresight &amp; Futures Lab
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="library" aria-labelledby="library-title">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="section-head__copy">
              <h2 className="h2" id="library-title">
                Reports &amp; briefings
              </h2>
            </div>
            <div className="section-head__side">
              <p>
                Every report starts with a question someone is trying to answer.
                Filter by series, or search for the topic you are working on — then
                ask us for the briefing.
              </p>
            </div>
          </div>

          <ResearchLibrary publications={publications} />
        </div>
      </section>

      <CtaBand
        title="Let’s make the thinking useful."
        copy="If you’re working on a question that should be public, tell us about it. Research, tools and hard questions are all welcome."
        primary={{ href: "/contact?topic=research", label: "Talk to us" }}
        secondary={{ href: "/contact?topic=partner", label: "Partner on research" }}
      />
    </main>
  );
}
