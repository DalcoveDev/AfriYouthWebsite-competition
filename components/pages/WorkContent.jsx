import Link from "next/link";
import Image from "next/image";

export default function WorkContent() {
  return (
    <>
      <main id="main">
          <section className="page-hero page-hero--work" aria-labelledby="work-title">
            <div className="wrap">
              <div className="page-hero__grid">
                <div className="page-hero__copy">
                  <p className="eyebrow reveal">Our work</p>
                  <h1 className="h1 reveal" id="work-title">One lab. <em>Six ways in.</em></h1>
                </div>
                <div className="page-hero__aside reveal">
                  <p className="lede">Whether you have a question that needs evidence, a service that needs redesign or a system that needs to move — we bring the right mix of disciplines to the table.</p>
                  <div className="page-hero__meta">
                    <span className="chip">For partners</span>
                    <span className="chip">For institutions</span>
                    <span className="chip">For funders</span>
                  </div>
                </div>
              </div>
              <div role="group" className="work-hero__disciplines reveal" aria-label="Our service areas">
                <span>Research &amp; evidence</span>
                <span>Policy &amp; systems</span>
                <span>Human-centred design</span>
                <span>Entrepreneurship</span>
                <span>Strategic foresight</span>
                <span>Impact &amp; learning</span>
              </div>
            </div>
          </section>
      
          <section className="section" aria-labelledby="services-title">
            <div className="wrap">
              <div className="section-head">
                <div className="section-head__copy">
                  <p className="eyebrow reveal">What we bring</p>
                  <h2 className="h2 reveal" id="services-title">No off-the-shelf answers.</h2>
                </div>
                <div className="section-head__side reveal">
                  <p>Every engagement is designed around the question, the context and the people who need to act on it. Expand a discipline to see how we can help.</p>
                  <Link className="text-link" href="/contact?topic=commission">Commission our expertise <span aria-hidden="true">→</span></Link>
                </div>
              </div>
      
              <div className="service-details">
                <details className="service-detail" id="research" open>
                  <summary>
                    <span className="service-row__num">01</span>
                    <span className="service-detail__titleblock">
                      <span className="service-detail__title">Research &amp; evidence</span>
                      <span className="service-detail__tag">Knowledge with a purpose</span>
                    </span>
                    <span className="service-detail__short">Rigorous, locally grounded knowledge that makes complex problems legible — and actionable.</span>
                    <span className="service-row__arrow" aria-hidden="true">↗</span>
                  </summary>
                  <div className="service-detail__content">
                    <div className="service-detail__body">
                      <div>
                        <p>We generate rigorous, locally grounded evidence that helps decision-makers see a problem clearly and act on it with confidence. Our work is participatory by default: young people help shape the questions, collect the data and make sense of what it means.</p>
                        <div role="group" className="service-detail__who" aria-label="Who this is for">
                          <span className="chip">Development partners</span>
                          <span className="chip">Public agencies</span>
                          <span className="chip">Foundations</span>
                          <span className="chip">Universities</span>
                        </div>
                        <div className="service-detail__cta">
                          <Link className="text-link" href="/contact?topic=commission">Talk to us about research <span aria-hidden="true">→</span></Link>
                        </div>
                      </div>
                      <div>
                        <p className="service-detail__list-title">What it can look like</p>
                        <ul className="service-detail__list">
                          <li>Applied and participatory research</li>
                          <li>Evidence reviews and synthesis</li>
                          <li>Youth-led data collection and sense-making</li>
                          <li>Insight reports and data storytelling</li>
                        </ul>
                      </div>
                    </div>
                    <figure className="service-detail__media">
                      <Image src="/assets/img/research.webp" width={1400} height={900} sizes="(max-width: 960px) 88vw, 45vw" alt="A facilitated group discussion around a table" />
                      <figcaption>Evidence is a conversation</figcaption>
                    </figure>
                  </div>
                </details>
      
                <details className="service-detail" id="policy">
                  <summary>
                    <span className="service-row__num">02</span>
                    <span className="service-detail__titleblock">
                      <span className="service-detail__title">Policy &amp; systems</span>
                      <span className="service-detail__tag">From evidence to influence</span>
                    </span>
                    <span className="service-detail__short">Practical policy options, coalitions and implementation pathways that move evidence into public decisions.</span>
                    <span className="service-row__arrow" aria-hidden="true">↗</span>
                  </summary>
                  <div className="service-detail__content">
                    <div className="service-detail__body">
                      <div>
                        <p>We turn evidence into practical policy options, coalitions and implementation pathways. We work with the people who make decisions — and the people affected by them — to design policies that can survive contact with reality.</p>
                        <div role="group" className="service-detail__who" aria-label="Who this is for">
                          <span className="chip">Government</span>
                          <span className="chip">Regional bodies</span>
                          <span className="chip">Civil society</span>
                          <span className="chip">Funders</span>
                        </div>
                        <div className="service-detail__cta">
                          <Link className="text-link" href="/contact?topic=commission">Talk to us about policy <span aria-hidden="true">→</span></Link>
                        </div>
                      </div>
                      <div>
                        <p className="service-detail__list-title">What it can look like</p>
                        <ul className="service-detail__list">
                          <li>Policy analysis and options development</li>
                          <li>Systems and stakeholder mapping</li>
                          <li>Coalition building and convening</li>
                          <li>Implementation and governance design</li>
                        </ul>
                      </div>
                    </div>
                    <figure className="service-detail__media">
                      <Image src="/assets/img/policy.webp" width={1400} height={900} sizes="(max-width: 960px) 88vw, 45vw" alt="A young woman speaking at a conference with a microphone" />
                      <figcaption>Make the case impossible to ignore</figcaption>
                    </figure>
                  </div>
                </details>
      
                <details className="service-detail" id="design">
                  <summary>
                    <span className="service-row__num">03</span>
                    <span className="service-detail__titleblock">
                      <span className="service-detail__title">Human-centred design</span>
                      <span className="service-detail__tag">Build with people, not for them</span>
                    </span>
                    <span className="service-detail__short">Services, programmes and products co-designed with the people who use them — and the people who deliver them.</span>
                    <span className="service-row__arrow" aria-hidden="true">↗</span>
                  </summary>
                  <div className="service-detail__content">
                    <div className="service-detail__body">
                      <div>
                        <p>We co-design services, programmes and products with the people who use them. From discovery to prototyping, we make complex journeys visible and test better ways forward before committing to scale.</p>
                        <div role="group" className="service-detail__who" aria-label="Who this is for">
                          <span className="chip">Public services</span>
                          <span className="chip">Nonprofits</span>
                          <span className="chip">Social enterprises</span>
                          <span className="chip">Programme teams</span>
                        </div>
                        <div className="service-detail__cta">
                          <Link className="text-link" href="/contact?topic=commission">Talk to us about design <span aria-hidden="true">→</span></Link>
                        </div>
                      </div>
                      <div>
                        <p className="service-detail__list-title">What it can look like</p>
                        <ul className="service-detail__list">
                          <li>Qualitative discovery and immersion</li>
                          <li>Co-design workshops and facilitation</li>
                          <li>Service blueprints and journey design</li>
                          <li>Rapid prototyping and user testing</li>
                        </ul>
                      </div>
                    </div>
                    <figure className="service-detail__media">
                      <Image src="/assets/img/design.webp" width={1400} height={900} sizes="(max-width: 960px) 88vw, 45vw" alt="Young people taking part in a hands-on creative workshop" />
                      <figcaption>Prototype early, learn quickly</figcaption>
                    </figure>
                  </div>
                </details>
      
                <details className="service-detail" id="enterprise">
                  <summary>
                    <span className="service-row__num">04</span>
                    <span className="service-detail__titleblock">
                      <span className="service-detail__title">Entrepreneurship &amp; ventures</span>
                      <span className="service-detail__tag">Ideas that can stand on their own</span>
                    </span>
                    <span className="service-detail__short">Support for young founders to test, build and scale ventures that solve real problems with durable models.</span>
                    <span className="service-row__arrow" aria-hidden="true">↗</span>
                  </summary>
                  <div className="service-detail__content">
                    <div className="service-detail__body">
                      <div>
                        <p>We help young founders move from a promising idea to a tested, investable venture. Our support blends venture design, market validation, mentorship and access to networks that open real doors.</p>
                        <div role="group" className="service-detail__who" aria-label="Who this is for">
                          <span className="chip">Early-stage founders</span>
                          <span className="chip">Incubators</span>
                          <span className="chip">Funders</span>
                          <span className="chip">Corporate innovators</span>
                        </div>
                        <div className="service-detail__cta">
                          <Link className="text-link" href="/contact?topic=commission">Talk to us about ventures <span aria-hidden="true">→</span></Link>
                        </div>
                      </div>
                      <div>
                        <p className="service-detail__list-title">What it can look like</p>
                        <ul className="service-detail__list">
                          <li>Venture design sprints</li>
                          <li>Customer and market validation</li>
                          <li>Founder coaching and mentorship</li>
                          <li>Demo days and investor readiness</li>
                        </ul>
                      </div>
                    </div>
                    <figure className="service-detail__media">
                      <Image src="/assets/img/enterprise.webp" width={1400} height={900} sizes="(max-width: 960px) 88vw, 45vw" alt="A confident young entrepreneur in a bright orange blazer" />
                      <figcaption>Build something that lasts</figcaption>
                    </figure>
                  </div>
                </details>
      
                <details className="service-detail" id="foresight">
                  <summary>
                    <span className="service-row__num">05</span>
                    <span className="service-detail__titleblock">
                      <span className="service-detail__title">Strategic foresight</span>
                      <span className="service-detail__tag">Practise the future</span>
                    </span>
                    <span className="service-detail__short">Structured ways to anticipate change, navigate uncertainty and make better long-term decisions.</span>
                    <span className="service-row__arrow" aria-hidden="true">↗</span>
                  </summary>
                  <div className="service-detail__content">
                    <div className="service-detail__body">
                      <div>
                        <p>We help organisations anticipate change rather than react to it. Using scenarios, trend analysis and participatory visioning, we make uncertainty something teams can work with — not fear.</p>
                        <div role="group" className="service-detail__who" aria-label="Who this is for">
                          <span className="chip">Strategy teams</span>
                          <span className="chip">Policy units</span>
                          <span className="chip">Foundations</span>
                          <span className="chip">Alliances</span>
                        </div>
                        <div className="service-detail__cta">
                          <Link className="text-link" href="/contact?topic=commission">Talk to us about foresight <span aria-hidden="true">→</span></Link>
                        </div>
                      </div>
                      <div>
                        <p className="service-detail__list-title">What it can look like</p>
                        <ul className="service-detail__list">
                          <li>Horizon scanning and trend analysis</li>
                          <li>Scenario development and stress-testing</li>
                          <li>Youth futures panels</li>
                          <li>Strategy and visioning workshops</li>
                        </ul>
                      </div>
                    </div>
                    <figure className="service-detail__media">
                      <Image src="/assets/img/foresight.webp" width={1400} height={900} sizes="(max-width: 960px) 88vw, 45vw" alt="Two young women in conversation at a futures workshop" />
                      <figcaption>Look further than the next cycle</figcaption>
                    </figure>
                  </div>
                </details>
      
                <details className="service-detail" id="learning">
                  <summary>
                    <span className="service-row__num">06</span>
                    <span className="service-detail__titleblock">
                      <span className="service-detail__title">Impact &amp; learning</span>
                      <span className="service-detail__tag">Know what changed — and why</span>
                    </span>
                    <span className="service-detail__short">Measurement and learning systems that help organisations understand what changed, for whom and why.</span>
                    <span className="service-row__arrow" aria-hidden="true">↗</span>
                  </summary>
                  <div className="service-detail__content">
                    <div className="service-detail__body">
                      <div>
                        <p>We design monitoring, evaluation and learning systems that generate useful insight, not just compliance reports. We build capability so teams can keep learning after the engagement ends.</p>
                        <div role="group" className="service-detail__who" aria-label="Who this is for">
                          <span className="chip">Programme teams</span>
                          <span className="chip">Funders</span>
                          <span className="chip">Networks</span>
                          <span className="chip">Public institutions</span>
                        </div>
                        <div className="service-detail__cta">
                          <Link className="text-link" href="/contact?topic=commission">Talk to us about impact <span aria-hidden="true">→</span></Link>
                        </div>
                      </div>
                      <div>
                        <p className="service-detail__list-title">What it can look like</p>
                        <ul className="service-detail__list">
                          <li>MEL frameworks and theories of change</li>
                          <li>Developmental and participatory evaluation</li>
                          <li>Learning reviews and after-action processes</li>
                          <li>Capability building for teams</li>
                        </ul>
                      </div>
                    </div>
                    <figure className="service-detail__media">
                      <Image src="/assets/img/insight.webp" width={1400} height={900} sizes="(max-width: 960px) 88vw, 45vw" alt="A group in a facilitated learning session around a table" />
                      <figcaption>Measure what matters</figcaption>
                    </figure>
                  </div>
                </details>
              </div>
            </div>
          </section>
      
          <section className="process section on-dark" aria-labelledby="process-title">
            <div className="wrap">
              <div className="process__head">
                <div>
                  <p className="eyebrow eyebrow--light reveal">How we work</p>
                  <h2 className="h2 reveal" id="process-title">A practical, participatory way forward.</h2>
                </div>
                <p className="lede reveal">No mystery process. We define the question, work in the open and leave behind capability, not dependency.</p>
              </div>
              <div className="process__list reveal">
                <div className="process__row">
                  <span className="process__num">01</span>
                  <span className="process__title">Listen</span>
                  <span className="process__desc">We begin with people, context and the evidence that already exists. No assumptions smuggled in as facts.</span>
                  <span aria-hidden="true">↗</span>
                </div>
                <div className="process__row">
                  <span className="process__num">02</span>
                  <span className="process__title">Frame</span>
                  <span className="process__desc">We agree on the real question, the decision it needs to inform and the measures of progress.</span>
                  <span aria-hidden="true">↗</span>
                </div>
                <div className="process__row">
                  <span className="process__num">03</span>
                  <span className="process__title">Prototype</span>
                  <span className="process__desc">We test options with users and decision-makers, learning quickly before investing at scale.</span>
                  <span aria-hidden="true">↗</span>
                </div>
                <div className="process__row">
                  <span className="process__num">04</span>
                  <span className="process__title">Influence</span>
                  <span className="process__desc">We translate findings into tools, relationships and moments that can move a decision.</span>
                  <span aria-hidden="true">↗</span>
                </div>
                <div className="process__row">
                  <span className="process__num">05</span>
                  <span className="process__title">Learn</span>
                  <span className="process__desc">We build feedback loops and capability so the work keeps improving after we leave.</span>
                  <span aria-hidden="true">↗</span>
                </div>
              </div>
            </div>
          </section>
      
          <section className="section" aria-labelledby="cases-title">
            <div className="wrap">
              <div className="section-head">
                <div className="section-head__copy">
                  <p className="eyebrow reveal">Where it comes together</p>
                  <h2 className="h2 reveal" id="cases-title">Three ways the work comes together.</h2>
                </div>
                <div className="section-head__side reveal">
                  <p>Illustrative engagement formats that show how our disciplines combine. Every project starts from the partner’s real question.</p>
                </div>
              </div>
              <div className="cases__grid">
                <article className="case-card reveal">
                  <div className="case-card__media">
                    <Image src="/assets/img/research.webp" width={1400} height={900} sizes="(max-width: 960px) 45vw, 30vw" alt="A group of colleagues in a research discussion" />
                    <span className="case-card__tag">Research + Policy</span>
                  </div>
                  <div className="case-card__body">
                    <h3>A youth evidence agenda for the future of work.</h3>
                    <p>A participatory study with young people, employers and policymakers to surface what decent work means now — and what should change.</p>
                    <div className="case-card__meta"><span>Evidence</span><span>Policy</span><span>Coalition</span></div>
                  </div>
                </article>
                <article className="case-card reveal" style={{ '--delay': '.08s' }}>
                  <div className="case-card__media">
                    <Image src="/assets/img/design.webp" width={1400} height={900} sizes="(max-width: 960px) 45vw, 30vw" alt="A hands-on co-design workshop" />
                    <span className="case-card__tag">Design + Enterprise</span>
                  </div>
                  <div className="case-card__body">
                    <h3>A better front door to youth finance.</h3>
                    <p>A service redesign and prototype sprint with young customers and financial providers to make access simpler, fairer and more trusted.</p>
                    <div className="case-card__meta"><span>Service design</span><span>Prototyping</span><span>Access</span></div>
                  </div>
                </article>
                <article className="case-card reveal" style={{ '--delay': '.16s' }}>
                  <div className="case-card__media">
                    <Image src="/assets/img/foresight.webp" width={1400} height={900} sizes="(max-width: 960px) 45vw, 30vw" alt="Young people in a futures and strategy conversation" />
                    <span className="case-card__tag">Foresight + Impact</span>
                  </div>
                  <div className="case-card__body">
                    <h3>A 2035 learning agenda for a changing region.</h3>
                    <p>Scenarios, youth futures panels and a shared measurement agenda to help a coalition plan beyond the electoral cycle.</p>
                    <div className="case-card__meta"><span>Scenarios</span><span>Learning</span><span>Strategy</span></div>
                  </div>
                </article>
              </div>
            </div>
          </section>
      
          <section className="cta-band" aria-labelledby="work-cta-title">
            <div className="wrap cta-band__inner">
              <div className="reveal">
                <p className="eyebrow">Bring us your hardest question</p>
                <h2 className="h2" id="work-cta-title">Good work starts with a better conversation.</h2>
                <p>Tell us what you’re trying to change. We’ll help you find the right mix of evidence, design and action.</p>
              </div>
              <div className="cta-band__actions reveal">
                <Link className="btn btn--primary" href="/contact?topic=commission">Commission our work <span className="btn__icon" aria-hidden="true">↗</span></Link>
                <Link className="btn btn--outline" href="/contact?topic=partner">Partner with us</Link>
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
