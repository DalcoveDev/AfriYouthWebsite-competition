import Link from "next/link";

export default function InsightsContent() {
  return (
    <>
      <main id="main">
          <section className="page-hero" aria-labelledby="insights-title">
            <div className="wrap">
              <div className="page-hero__grid">
                <div className="page-hero__copy">
                  <p className="eyebrow reveal">Insights &amp; resources</p>
                  <h1 className="h1 reveal" id="insights-title">Ideas for the work <em>ahead.</em></h1>
                </div>
                <div className="page-hero__aside reveal">
                  <p className="lede">Research, field notes and practical provocations from the edge of evidence, policy, design and enterprise.</p>
                  <div className="page-hero__meta">
                    <span className="chip">Read in the open</span>
                    <span className="chip">Use what works</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
          <section className="section--tight" aria-labelledby="featured-report-title">
            <div className="wrap">
              <div className="library-feature reveal">
                <div className="report-cover" aria-hidden="true">
                  <div className="report-cover__top">
                    <span className="report-cover__label">AfriYouth field report · 01</span>
                    <svg className="report-cover__mark" viewBox="0 0 48 48" fill="none">
                      <rect width="48" height="48" rx="14" fill="#0d251d"/>
                      <path d="M24 7c9.39 0 17 7.61 17 17h-9.5c0-4.14-3.36-7.5-7.5-7.5V7Z" fill="#dff06a"/>
                      <path d="M41 24c0 9.39-7.61 17-17 17v-9.5c4.14 0 7.5-3.36 7.5-7.5H41Z" fill="#e9592e"/>
                      <path d="M24 41c-9.39 0-17-7.61-17-17h9.5c0 4.14 3.36 7.5 7.5 7.5V41Z" fill="#faf7ef"/>
                      <path d="M7 24C7 14.61 14.61 7 24 7v9.5c-4.14 0-7.5 3.36-7.5 7.5H7Z" fill="#b9d8e6"/>
                      <circle cx="24" cy="24" r="4.5" fill="#0d251d"/>
                    </svg>
                  </div>
                  <p className="report-cover__title">The state of youth innovation <em>Africa 2026</em></p>
                  <div className="report-cover__foot">
                    <span>Evidence · Practice · Futures</span>
                    <span>№ 01</span>
                  </div>
                </div>
                <div className="library-feature__copy">
                  <p className="eyebrow">Featured report</p>
                  <h2 id="featured-report-title">The state of youth innovation in Africa.</h2>
                  <p>A field scan of the ideas, barriers and bright spots shaping how young people build solutions across the continent — and what funders, policymakers and institutions should do next.</p>
                  <div className="btn-row">
                    <button className="btn btn--light" type="button" data-insight="state">Read the executive summary <span className="btn__icon" aria-hidden="true">↗</span></button>
                    <a className="btn btn--outline-light" href="#library">Browse the library</a>
                  </div>
                  <p className="library-feature__note">12 min read · Published November 2026</p>
                </div>
              </div>
            </div>
          </section>
      
          <section className="section" id="library" aria-labelledby="library-title">
            <div className="wrap">
              <div className="library__head">
                <div>
                  <p className="eyebrow reveal">The library</p>
                  <h2 className="h2 reveal" id="library-title">Useful, not just impressive.</h2>
                </div>
                <div className="section-head__side reveal">
                  <p>Read, borrow, challenge. If something here is useful to your work, we’d love to know.</p>
                </div>
              </div>
      
              <div role="group" className="filter-bar" aria-label="Filter insights">
                <button className="filter-btn" type="button" data-resource-filter="all" aria-pressed="true">All <span>06</span></button>
                <button className="filter-btn" type="button" data-resource-filter="research" aria-pressed="false">Research</button>
                <button className="filter-btn" type="button" data-resource-filter="policy" aria-pressed="false">Policy</button>
                <button className="filter-btn" type="button" data-resource-filter="design" aria-pressed="false">Design</button>
                <button className="filter-btn" type="button" data-resource-filter="enterprise" aria-pressed="false">Enterprise</button>
                <button className="filter-btn" type="button" data-resource-filter="foresight" aria-pressed="false">Foresight</button>
                <button className="filter-btn" type="button" data-resource-filter="impact" aria-pressed="false">Impact</button>
                <p className="filter-bar__count" aria-live="polite" data-resource-count>Showing 6 resources</p>
              </div>
      
              <div className="library__grid" data-resource-grid>
                <button className="resource-card reveal" type="button" data-insight="future-work" data-category="foresight" style={{ '--cat-color': '#e9592e' }}>
                  <div className="resource-card__top">
                    <span className="resource-card__cat">Foresight</span>
                    <span className="resource-card__num">01</span>
                  </div>
                  <h3>Why the future of work needs youth at the design table.</h3>
                  <p>The jobs young Africans will hold in 2035 don’t exist yet. What changes if we design for work — not just train for it?</p>
                  <div className="resource-card__foot"><span>Field note · 9 min read</span><span aria-hidden="true">↗</span></div>
                </button>
      
                <button className="resource-card reveal" type="button" data-insight="evidence-policy" data-category="policy" style={{ '--cat-color': '#173d2e', '--delay': '.05s' }}>
                  <div className="resource-card__top">
                    <span className="resource-card__cat">Policy</span>
                    <span className="resource-card__num">02</span>
                  </div>
                  <h3>From evidence to a seat at the table.</h3>
                  <p>Good research rarely changes a decision on its own. A practical look at the relational work of evidence-informed policy.</p>
                  <div className="resource-card__foot"><span>Practice brief · 6 min read</span><span aria-hidden="true">↗</span></div>
                </button>
      
                <button className="resource-card reveal" type="button" data-insight="design-with" data-category="design" style={{ '--cat-color': '#bc3b19', '--delay': '.1s' }}>
                  <div className="resource-card__top">
                    <span className="resource-card__cat">Design</span>
                    <span className="resource-card__num">03</span>
                  </div>
                  <h3>Designing with, not for.</h3>
                  <p>Participation is not a workshop. Three shifts that turn co-design from a photo opportunity into shared decision-making.</p>
                  <div className="resource-card__foot"><span>Field note · 5 min read</span><span aria-hidden="true">↗</span></div>
                </button>
      
                <button className="resource-card reveal" type="button" data-insight="youth-research" data-category="research" style={{ '--cat-color': '#4f7c68', '--delay': '.15s' }}>
                  <div className="resource-card__top">
                    <span className="resource-card__cat">Research</span>
                    <span className="resource-card__num">04</span>
                  </div>
                  <h3>The case for youth-led research.</h3>
                  <p>What becomes visible when young people hold the research questions — and what institutions gain when they listen.</p>
                  <div className="resource-card__foot"><span>Perspective · 7 min read</span><span aria-hidden="true">↗</span></div>
                </button>
      
                <button className="resource-card reveal" type="button" data-insight="scale" data-category="enterprise" style={{ '--cat-color': '#bc3b19', '--delay': '.2s' }}>
                  <div className="resource-card__top">
                    <span className="resource-card__cat">Enterprise</span>
                    <span className="resource-card__num">05</span>
                  </div>
                  <h3>Beyond the pilot: routes to scale.</h3>
                  <p>Why so many promising youth-led ventures stall after the first grant — and the capabilities that help them grow.</p>
                  <div className="resource-card__foot"><span>Practice brief · 8 min read</span><span aria-hidden="true">↗</span></div>
                </button>
      
                <button className="resource-card reveal" type="button" data-insight="measurement" data-category="impact" style={{ '--cat-color': '#4f7c68', '--delay': '.25s' }}>
                  <div className="resource-card__top">
                    <span className="resource-card__cat">Impact</span>
                    <span className="resource-card__num">06</span>
                  </div>
                  <h3>Measuring what matters.</h3>
                  <p>Five questions that help a learning system inform decisions instead of producing another report nobody reads.</p>
                  <div className="resource-card__foot"><span>Toolkit · 6 min read</span><span aria-hidden="true">↗</span></div>
                </button>
              </div>
      
              <p className="filter-empty" data-resource-empty hidden>Nothing in this category yet. Try another filter or <Link href="/contact?topic=media">suggest a resource</Link>.</p>
            </div>
          </section>
      
          <section className="cta-band" aria-labelledby="insights-cta-title">
            <div className="wrap cta-band__inner">
              <div className="reveal">
                <p className="eyebrow">Have something worth sharing?</p>
                <h2 className="h2" id="insights-cta-title">Let’s make the thinking useful.</h2>
                <p>If you’re working on a question that belongs in public, we’d like to hear about it. Research, tools and uncomfortable questions are all welcome.</p>
              </div>
              <div className="cta-band__actions reveal">
                <Link className="btn btn--primary" href="/contact?topic=media">Talk to us <span className="btn__icon" aria-hidden="true">↗</span></Link>
                <Link className="btn btn--outline" href="/contact?topic=partner">Partner on research</Link>
              </div>
            </div>
            <div className="cta-band__ring" aria-hidden="true"></div>
            <svg className="cta-band__star" viewBox="0 0 64 64" aria-hidden="true" fill="currentColor">
              <path d="M32 0l4.8 24.1L64 32l-27.2 7.9L32 64l-4.8-24.1L0 32l27.2-7.9L32 0Z"/>
            </svg>
          </section>
        </main>

      <dialog className="modal" id="insight-modal" aria-labelledby="insight-modal-title">
          <div className="modal__scroll">
            <div className="modal__top">
              <span className="modal__top-label">AfriYouth field notes</span>
              <button className="modal__close" type="button" aria-label="Close resource" data-insight-close>✕</button>
            </div>
            <div className="modal__body">
              <div className="modal__meta" data-insight-meta></div>
              <h2 id="insight-modal-title" data-insight-title>Insight</h2>
              <p className="modal__lead" data-insight-lead></p>
              <div className="modal__article-body" data-insight-body></div>
              <div className="modal__footer">
                <Link className="btn btn--primary" href="/contact?topic=media">Discuss this with us <span className="btn__icon" aria-hidden="true">↗</span></Link>
                <p className="modal__note">Field notes are working ideas. Read them, test them, push back.</p>
              </div>
            </div>
          </div>
        </dialog>
    </>
  );
}
