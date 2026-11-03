import Link from "next/link";
import Image from "next/image";

export default function HomeContent() {
  return (
    <>
      <main id="main">
          <section className="hero" aria-labelledby="hero-title">
            <div className="wrap">
              <div className="hero__grid">
                <div className="hero__copy">
                  <p className="eyebrow hero__eyebrow">Research · Policy · Design · Enterprise</p>
                  <h1 className="hero__title" id="hero-title">Africa’s next chapter is <em>youth-written.</em></h1>
                  <p className="hero__lede">We connect evidence, policy, human-centred design and enterprise to turn young people’s ideas into <strong>lasting systems change.</strong></p>
                  <div className="btn-row hero__actions">
                    <Link className="btn btn--primary" href="/programs">Find your next opportunity <span className="btn__icon" aria-hidden="true">↗</span></Link>
                    <Link className="btn btn--outline" href="/work">See how we work</Link>
                  </div>
                  <p className="hero__note">A lab for <span>young changemakers, partners and institutions</span></p>
                </div>
      
                <div role="group" className="hero__media" aria-label="A glimpse of the AfriYouth community">
                  <div className="hero__coordinate">Kigali, Rwanda · Field note 001</div>
                  <figure className="hero__image">
                    <Image src="/assets/img/hero-community.webp" width={900} height={1125} sizes="(max-width: 760px) 92vw, (max-width: 1080px) 55vw, 42vw" alt="A group of young African creatives laughing together outdoors" priority />
                  </figure>
                  <figure className="hero__portrait">
                    <Image src="/assets/img/portrait.webp" width={700} height={740} sizes="(max-width: 760px) 45vw, 18vw" alt="A young African woman smiling in a bright workspace" />
                  </figure>
                  <div className="hero__seal" aria-hidden="true">
                    <svg viewBox="0 0 120 120" role="presentation">
                      <defs>
                        <path id="sealPath" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0"/>
                      </defs>
                      <text fill="#fbf8f0" fontFamily="Instrument Sans, sans-serif" fontSize="8.7" fontWeight="650" letterSpacing="1.45">
                        <textPath href="#sealPath">EVIDENCE · POLICY · DESIGN · ENTERPRISE · </textPath>
                      </text>
                      <path d="M60 42l3.6 14.4L78 60l-14.4 3.6L60 78l-3.6-14.4L42 60l14.4-3.6L60 42Z" fill="#dff06a"/>
                      <circle cx="60" cy="60" r="3" fill="#0d251d"/>
                    </svg>
                  </div>
                  <div className="hero__annotation"><span className="hero__annotation-dot" aria-hidden="true"></span>Open for collaboration</div>
                </div>
              </div>
      
              <div role="group" className="hero__bottom" aria-label="At a glance">
                <div className="hero__fact"><strong>06</strong> connected disciplines</div>
                <div className="hero__fact"><strong>01</strong> shared agenda: young people shaping systems</div>
                <div className="hero__fact"><strong>∞</strong> possible collaborations</div>
              </div>
            </div>
          </section>
      
          <div role="group" className="marquee" aria-label="Our disciplines">
            <div className="marquee__track">
              <div className="marquee__group">
                <span className="marquee__item">Research &amp; evidence <svg className="marquee__star" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0l1.9 6.1L16 8l-6.1 1.9L8 16l-1.9-6.1L0 8l6.1-1.9L8 0Z" fill="currentColor"/></svg></span>
                <span className="marquee__item">Policy &amp; systems <svg className="marquee__star" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0l1.9 6.1L16 8l-6.1 1.9L8 16l-1.9-6.1L0 8l6.1-1.9L8 0Z" fill="currentColor"/></svg></span>
                <span className="marquee__item">Human-centred design <svg className="marquee__star" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0l1.9 6.1L16 8l-6.1 1.9L8 16l-1.9-6.1L0 8l6.1-1.9L8 0Z" fill="currentColor"/></svg></span>
                <span className="marquee__item">Entrepreneurship <svg className="marquee__star" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0l1.9 6.1L16 8l-6.1 1.9L8 16l-1.9-6.1L0 8l6.1-1.9L8 0Z" fill="currentColor"/></svg></span>
                <span className="marquee__item">Strategic foresight <svg className="marquee__star" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0l1.9 6.1L16 8l-6.1 1.9L8 16l-1.9-6.1L0 8l6.1-1.9L8 0Z" fill="currentColor"/></svg></span>
                <span className="marquee__item">Impact &amp; learning <svg className="marquee__star" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0l1.9 6.1L16 8l-6.1 1.9L8 16l-1.9-6.1L0 8l6.1-1.9L8 0Z" fill="currentColor"/></svg></span>
              </div>
              <div className="marquee__group" aria-hidden="true">
                <span className="marquee__item">Research &amp; evidence <svg className="marquee__star" viewBox="0 0 16 16"><path d="M8 0l1.9 6.1L16 8l-6.1 1.9L8 16l-1.9-6.1L0 8l6.1-1.9L8 0Z" fill="currentColor"/></svg></span>
                <span className="marquee__item">Policy &amp; systems <svg className="marquee__star" viewBox="0 0 16 16"><path d="M8 0l1.9 6.1L16 8l-6.1 1.9L8 16l-1.9-6.1L0 8l6.1-1.9L8 0Z" fill="currentColor"/></svg></span>
                <span className="marquee__item">Human-centred design <svg className="marquee__star" viewBox="0 0 16 16"><path d="M8 0l1.9 6.1L16 8l-6.1 1.9L8 16l-1.9-6.1L0 8l6.1-1.9L8 0Z" fill="currentColor"/></svg></span>
                <span className="marquee__item">Entrepreneurship <svg className="marquee__star" viewBox="0 0 16 16"><path d="M8 0l1.9 6.1L16 8l-6.1 1.9L8 16l-1.9-6.1L0 8l6.1-1.9L8 0Z" fill="currentColor"/></svg></span>
                <span className="marquee__item">Strategic foresight <svg className="marquee__star" viewBox="0 0 16 16"><path d="M8 0l1.9 6.1L16 8l-6.1 1.9L8 16l-1.9-6.1L0 8l6.1-1.9L8 0Z" fill="currentColor"/></svg></span>
                <span className="marquee__item">Impact &amp; learning <svg className="marquee__star" viewBox="0 0 16 16"><path d="M8 0l1.9 6.1L16 8l-6.1 1.9L8 16l-1.9-6.1L0 8l6.1-1.9L8 0Z" fill="currentColor"/></svg></span>
              </div>
            </div>
          </div>
      
          <section className="intro section" aria-labelledby="intro-title">
            <div className="wrap intro__grid">
              <aside className="intro__side reveal">
                <div className="intro__index">01</div>
                <p className="micro">A lab, not a lane<br />Kigali · Pan-African</p>
                <div className="intro__side-line"></div>
              </aside>
              <div className="intro__body">
                <p className="eyebrow reveal">Who we are</p>
                <h2 className="h2 reveal" id="intro-title">A lab for the questions that <span className="highlight">shape tomorrow.</span></h2>
                <p className="lede reveal">AfriYouth Innovation Labs exists to empower Africa’s youth to generate evidence, shape policy and build innovative solutions to the challenges that matter most. We bring research, design, entrepreneurship and foresight into the same room — and keep them there long enough for change to take root.</p>
                <div className="intro__principles">
                  <div className="intro__principle reveal">
                    <span className="intro__principle-num">i.</span>
                    <h3>Youth at the centre</h3>
                    <p>Young people are not the audience. They are researchers, designers, founders and decision-makers.</p>
                  </div>
                  <div className="intro__principle reveal" style={{ '--delay': '.08s' }}>
                    <span className="intro__principle-num">ii.</span>
                    <h3>Evidence with context</h3>
                    <p>We start with lived experience and local knowledge — not imported answers.</p>
                  </div>
                  <div className="intro__principle reveal" style={{ '--delay': '.16s' }}>
                    <span className="intro__principle-num">iii.</span>
                    <h3>Systems over silos</h3>
                    <p>We work beyond the pilot, connecting ideas to the institutions and incentives that can scale them.</p>
                  </div>
                </div>
                <div className="intro__link reveal">
                  <Link className="text-link" href="/about">Meet AfriYouth <span aria-hidden="true">→</span></Link>
                </div>
              </div>
            </div>
          </section>
      
          <section className="work section" aria-labelledby="work-title">
            <div className="wrap">
              <div className="section-head">
                <div className="section-head__copy">
                  <p className="eyebrow reveal">What we do</p>
                  <h2 className="h2 reveal" id="work-title">Six disciplines. One connected practice.</h2>
                </div>
                <div className="section-head__side reveal">
                  <p>From the first question to the final system, we build the connective tissue between evidence, people and action.</p>
                  <Link className="text-link" href="/work">Explore our work <span aria-hidden="true">→</span></Link>
                </div>
              </div>
      
              <div className="service-list">
                <Link className="service-row reveal" href="/work#research" data-preview="/assets/img/research.webp">
                  <span className="service-row__num">01</span>
                  <span className="service-row__title">Research &amp; evidence</span>
                  <span className="service-row__desc">Rigorous, locally grounded knowledge that makes complex problems legible — and actionable.
                    <span className="service-row__tags"><span>Applied research</span><span>Evidence synthesis</span><span>Data stories</span></span>
                  </span>
                  <span className="service-row__arrow" aria-hidden="true">↗</span>
                </Link>
                <Link className="service-row reveal" href="/work#policy" data-preview="/assets/img/policy.webp">
                  <span className="service-row__num">02</span>
                  <span className="service-row__title">Policy &amp; systems</span>
                  <span className="service-row__desc">Practical policy options, coalitions and implementation pathways that move evidence into public decisions.
                    <span className="service-row__tags"><span>Policy analysis</span><span>Systems mapping</span><span>Coalitions</span></span>
                  </span>
                  <span className="service-row__arrow" aria-hidden="true">↗</span>
                </Link>
                <Link className="service-row reveal" href="/work#design" data-preview="/assets/img/design.webp">
                  <span className="service-row__num">03</span>
                  <span className="service-row__title">Human-centred design</span>
                  <span className="service-row__desc">Services, programmes and products co-designed with the people who use them — and the people who deliver them.
                    <span className="service-row__tags"><span>Co-design</span><span>Service design</span><span>Prototyping</span></span>
                  </span>
                  <span className="service-row__arrow" aria-hidden="true">↗</span>
                </Link>
                <Link className="service-row reveal" href="/work#enterprise" data-preview="/assets/img/enterprise.webp">
                  <span className="service-row__num">04</span>
                  <span className="service-row__title">Entrepreneurship &amp; ventures</span>
                  <span className="service-row__desc">Support for young founders to test, build and scale ventures that solve real problems with durable models.
                    <span className="service-row__tags"><span>Venture design</span><span>Validation</span><span>Growth support</span></span>
                  </span>
                  <span className="service-row__arrow" aria-hidden="true">↗</span>
                </Link>
                <Link className="service-row reveal" href="/work#foresight" data-preview="/assets/img/foresight.webp">
                  <span className="service-row__num">05</span>
                  <span className="service-row__title">Strategic foresight</span>
                  <span className="service-row__desc">Structured ways to anticipate change, navigate uncertainty and make better long-term decisions.
                    <span className="service-row__tags"><span>Scenario building</span><span>Trend analysis</span><span>Visioning</span></span>
                  </span>
                  <span className="service-row__arrow" aria-hidden="true">↗</span>
                </Link>
                <Link className="service-row reveal" href="/work#learning" data-preview="/assets/img/insight.webp">
                  <span className="service-row__num">06</span>
                  <span className="service-row__title">Impact &amp; learning</span>
                  <span className="service-row__desc">Measurement and learning systems that help organisations understand what changed, for whom and why.
                    <span className="service-row__tags"><span>MEL design</span><span>Learning loops</span><span>Capability</span></span>
                  </span>
                  <span className="service-row__arrow" aria-hidden="true">↗</span>
                </Link>
                <div className="service-preview" aria-hidden="true">
                  <img alt="" width="400" height="300" src="/assets/img/research.webp" data-preview-image />
                </div>
              </div>
            </div>
          </section>
      
          <section className="impact section on-dark" aria-labelledby="impact-title">
            <div className="impact__word" aria-hidden="true">systems</div>
            <div className="wrap">
              <div className="impact__grid">
                <div className="impact__copy">
                  <p className="eyebrow eyebrow--light reveal">The change we want</p>
                  <h2 className="h2 reveal" id="impact-title">We don’t just ask what works. We ask who it works for.</h2>
                  <p className="lede reveal">Our measure of success is not a packed room or a polished report. It is evidence that is used, young people with real influence, and systems that work better for the next generation.</p>
                  <span className="impact__tag reveal">Our 2030 ambition</span>
                </div>
                <div className="impact__stats reveal">
                  <div className="impact__stat">
                    <strong>1,000</strong>
                    <p>Young changemakers equipped to lead change</p>
                    <span>2030 ambition</span>
                  </div>
                  <div className="impact__stat">
                    <strong>100</strong>
                    <p>Cross-sector collaborations brokered</p>
                    <span>2030 ambition</span>
                  </div>
                  <div className="impact__stat">
                    <strong>30</strong>
                    <p>Youth-led ventures supported to grow</p>
                    <span>2030 ambition</span>
                  </div>
                  <div className="impact__stat">
                    <strong>06</strong>
                    <p>Disciplines connected in every engagement</p>
                    <span>By design</span>
                  </div>
                </div>
              </div>
              <div role="group" className="impact__throughline reveal" aria-label="How change happens">
                <span>Listen</span>
                <span>Frame</span>
                <span>Prototype</span>
                <span>Influence</span>
                <span>Learn</span>
              </div>
            </div>
          </section>
      
          <section className="feature-programme" aria-labelledby="feature-title">
            <div className="wrap">
              <div className="section-head">
                <div className="section-head__copy">
                  <p className="eyebrow reveal">Opportunities</p>
                  <h2 className="h2 reveal" id="feature-title">Your next move starts here.</h2>
                </div>
                <div className="section-head__side reveal">
                  <p>Fellowships, labs and learning spaces for young people ready to turn curiosity into capability.</p>
                  <Link className="text-link" href="/programs">Browse all programs <span aria-hidden="true">→</span></Link>
                </div>
              </div>
      
              <article className="feature-card reveal">
                <div className="feature-card__media">
                  <Image src="/assets/img/programme.webp" width={1400} height={900} sizes="(max-width: 900px) 92vw, 45vw" alt="Young professionals collaborating around a table during an AfriYouth workshop" />
                  <div className="feature-card__media-label">
                    <span>Cohort 01 · 2027</span>
                    <span>Kigali / Hybrid</span>
                  </div>
                </div>
                <div className="feature-card__body">
                  <span className="feature-card__count" aria-hidden="true">01</span>
                  <p className="eyebrow">Applications are open</p>
                  <h2 className="h2">Turn evidence into influence.</h2>
                  <p>The AfriYouth Research Fellowship is a 12-week, practice-led programme for early-career researchers ready to move beyond the report — into policy, programmes and public conversation.</p>
                  <div className="feature-card__facts">
                    <div className="feature-card__fact"><span>Format</span><strong>Hybrid · Kigali</strong></div>
                    <div className="feature-card__fact"><span>Duration</span><strong>12 weeks</strong></div>
                    <div className="feature-card__fact"><span>Who it's for</span><strong>Ages 18–30</strong></div>
                    <div className="feature-card__fact"><span>Commitment</span><strong>8–10 hrs / week</strong></div>
                  </div>
                  <div className="feature-card__footer">
                    <p className="feature-card__deadline">Applications close 30 January 2027</p>
                    <Link className="btn btn--light btn--sm" href="/programs#fellowship">Explore the fellowship <span className="btn__icon" aria-hidden="true">↗</span></Link>
                  </div>
                </div>
              </article>
            </div>
          </section>
      
          <section className="ways section" aria-labelledby="ways-title">
            <div className="wrap">
              <div className="section-head">
                <div className="section-head__copy">
                  <p className="eyebrow reveal">Ways in</p>
                  <h2 className="h2 reveal" id="ways-title">There’s more than one way in.</h2>
                </div>
                <div className="section-head__side reveal">
                  <p>Whether you’re building your practice, looking for a research partner or commissioning expertise, the door starts here.</p>
                </div>
              </div>
      
              <div className="ways__grid reveal">
                <Link className="way-card" href="/programs" style={{ '--way-accent': 'var(--coral)', '--way-tint': '#f8e6dd' }}>
                  <div className="way-card__top">
                    <span className="way-card__num">01</span>
                    <span className="way-card__arrow" aria-hidden="true">↗</span>
                  </div>
                  <svg className="way-card__icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                    <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M20 8v24M8 20h24M11.5 11.5l17 17M28.5 11.5l-17 17" stroke="currentColor" strokeWidth="1.1" opacity=".4"/>
                    <circle cx="20" cy="20" r="4" fill="currentColor"/>
                  </svg>
                  <div className="way-card__body">
                    <h3>For young changemakers</h3>
                    <p>Build your practice, find your people and take an idea further through fellowships, labs and learning spaces.</p>
                    <span className="way-card__link">Explore programs →</span>
                  </div>
                </Link>
      
                <Link className="way-card" href="/contact?topic=partner" style={{ '--way-accent': 'var(--lime)', '--way-tint': '#f1f4d7' }}>
                  <div className="way-card__top">
                    <span className="way-card__num">02</span>
                    <span className="way-card__arrow" aria-hidden="true">↗</span>
                  </div>
                  <svg className="way-card__icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                    <circle cx="14" cy="15" r="7" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="27" cy="18" r="5" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M3 34c.8-6.4 5-10 11-10s10.2 3.6 11 10M24 33c.6-4.4 3-7 6.5-7 3.2 0 5.7 2.2 6.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <div className="way-card__body">
                    <h3>For partners</h3>
                    <p>Co-create research, programmes and ventures with a youth-centred lab that connects disciplines and networks.</p>
                    <span className="way-card__link">Start a partnership →</span>
                  </div>
                </Link>
      
                <Link className="way-card" href="/contact?topic=commission" style={{ '--way-accent': 'var(--sky)', '--way-tint': '#e8f0f3' }}>
                  <div className="way-card__top">
                    <span className="way-card__num">03</span>
                    <span className="way-card__arrow" aria-hidden="true">↗</span>
                  </div>
                  <svg className="way-card__icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                    <path d="M5 35h30M8 35V17h24v18M13 17V8h14v9M14 24h4M22 24h4M14 29h4M22 29h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="way-card__body">
                    <h3>For institutions</h3>
                    <p>Commission evidence, facilitation and systems support built around your mandate and the people you serve.</p>
                    <span className="way-card__link">Commission our expertise →</span>
                  </div>
                </Link>
              </div>
            </div>
          </section>
      
          <section className="insights-preview section" aria-labelledby="insights-title">
            <div className="wrap">
              <div className="section-head">
                <div className="section-head__copy">
                  <p className="eyebrow reveal">Insights</p>
                  <h2 className="h2 reveal" id="insights-title">Thinking out loud. Working in the open.</h2>
                </div>
                <div className="section-head__side reveal">
                  <p>Ideas, evidence and provocations from the edge of research, policy and design.</p>
                  <Link className="text-link" href="/insights">Visit the library <span aria-hidden="true">→</span></Link>
                </div>
              </div>
      
              <div className="insights-preview__layout">
                <Link className="insight-feature reveal" href="/insights">
                  <div className="insight-feature__media">
                    <Image src="/assets/img/insight.webp" width={1400} height={900} sizes="(max-width: 900px) 48vw, 28vw" alt="A diverse group of young people in conversation around a table" />
                    <span className="insight-feature__badge">Featured</span>
                  </div>
                  <div className="insight-feature__body">
                    <div className="insight-feature__meta"><span>Foresight</span><span>9 min read</span><span>Field note</span></div>
                    <h3 className="h3">Why the future of work needs youth at the design table.</h3>
                    <p>The jobs young Africans will hold in 2035 don’t exist yet. We explore what it takes to design for work — not just train for it.</p>
                    <div className="insight-feature__link"><span>Read the field note</span><span aria-hidden="true">↗</span></div>
                  </div>
                </Link>
      
                <div className="reveal" style={{ '--delay': '.1s' }}>
                  <p className="insights-preview__side-head">More from the field</p>
                  <div className="insight-list">
                    <Link className="insight-list__item" href="/insights">
                      <span className="insight-list__num">01</span>
                      <span className="insight-list__title">From evidence to a seat at the table
                        <span className="insight-list__meta">Policy · 6 min read</span>
                      </span>
                      <span className="insight-list__arrow" aria-hidden="true">↗</span>
                    </Link>
                    <Link className="insight-list__item" href="/insights">
                      <span className="insight-list__num">02</span>
                      <span className="insight-list__title">Designing with, not for
                        <span className="insight-list__meta">Human-centred design · 5 min read</span>
                      </span>
                      <span className="insight-list__arrow" aria-hidden="true">↗</span>
                    </Link>
                    <Link className="insight-list__item" href="/insights">
                      <span className="insight-list__num">03</span>
                      <span className="insight-list__title">Measuring what matters
                        <span className="insight-list__meta">Impact &amp; learning · 7 min read</span>
                      </span>
                      <span className="insight-list__arrow" aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
          <section className="partner-band section--tight" aria-labelledby="partner-title">
            <div className="wrap partner-band__grid">
              <div className="reveal">
                <p className="eyebrow">Partnerships</p>
                <h2 className="h3" id="partner-title">Built for the people who build with us.</h2>
              </div>
              <div className="partner-band__body reveal">
                <p>We work with organisations that are serious about shifting systems — not just funding another pilot. Bring us a question, a mandate or a knotty challenge.</p>
                <div role="group" className="sector-list" aria-label="Who we work with">
                  <span>Development partners</span>
                  <span>Public institutions</span>
                  <span>Universities &amp; research networks</span>
                  <span>Foundations &amp; funders</span>
                  <span>Youth networks</span>
                  <span>Private sector</span>
                </div>
                <Link className="text-link" href="/contact?topic=partner">Start a partnership conversation <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </section>
      
          <section className="cta-band" aria-labelledby="cta-title">
            <div className="wrap cta-band__inner">
              <div className="reveal">
                <p className="eyebrow">Let’s make it move</p>
                <h2 className="h2" id="cta-title">Have a problem worth solving?</h2>
                <p>Tell us what you’re working on. We’ll come with questions, a multidisciplinary lens and a practical way forward.</p>
              </div>
              <div className="cta-band__actions reveal">
                <Link className="btn btn--primary" href="/contact">Start a conversation <span className="btn__icon" aria-hidden="true">↗</span></Link>
                <Link className="btn btn--outline" href="/programs">Find a program</Link>
              </div>
            </div>
            <div className="cta-band__ring" aria-hidden="true"></div>
            <svg className="cta-band__star" viewBox="0 0 64 64" aria-hidden="true" fill="currentColor">
              <path d="M32 0l4.8 24.1L64 32l-27.2 7.9L32 64l-4.8-24.1L0 32l27.2-7.9L32 0Z"/>
            </svg>
          </section>
        </main>
    </>
  );
}
