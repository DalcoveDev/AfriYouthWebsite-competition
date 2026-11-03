import Link from "next/link";

export default function ProgramsContent() {
  return (
    <>
      <main id="main">
          <section className="page-hero" aria-labelledby="programmes-title">
            <div className="wrap">
              <div className="page-hero__grid">
                <div className="page-hero__copy">
                  <p className="eyebrow reveal">Programs &amp; opportunities</p>
                  <h1 className="h1 reveal" id="programmes-title">Your next move starts <em>here.</em></h1>
                </div>
                <div className="page-hero__aside reveal">
                  <p className="lede">Fellowships, labs and learning spaces for young people ready to turn curiosity into capability — and capability into change.</p>
                  <div className="programmes-hero__note">
                    <p>Four opportunities are currently open or rolling.</p>
                    <span>Research Fellowship · Policy Lab · Design Sprint · MEL Clinic</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
          <section className="section" id="programmes" aria-labelledby="opportunities-title">
            <div className="wrap">
              <div className="section-head">
                <div className="section-head__copy">
                  <p className="eyebrow reveal">Find your fit</p>
                  <h2 className="h2 reveal" id="opportunities-title">Open doors, not hoops.</h2>
                </div>
                <div className="section-head__side reveal">
                  <p>Our selection process is human. We look for potential, lived experience and a real question — not just perfect credentials.</p>
                </div>
              </div>
      
              <div role="group" className="filter-bar" aria-label="Filter programmes">
                <button className="filter-btn" type="button" data-filter="all" aria-pressed="true">All programmes <span>06</span></button>
                <button className="filter-btn" type="button" data-filter="open" aria-pressed="false">Open now <span>04</span></button>
                <button className="filter-btn" type="button" data-filter="fellowship" aria-pressed="false">Fellowships <span>02</span></button>
                <button className="filter-btn" type="button" data-filter="lab" aria-pressed="false">Labs &amp; studios <span>03</span></button>
                <button className="filter-btn" type="button" data-filter="organisation" aria-pressed="false">For organisations <span>01</span></button>
                <p className="filter-bar__count" aria-live="polite" data-filter-count>Showing 6 opportunities</p>
              </div>
      
              <div className="programmes-grid" data-programme-grid>
                <article className="programme-card programme-card--dark reveal" id="fellowship" data-programme-card data-state="open" data-type="fellowship" data-programme="fellowship">
                  <div className="programme-card__top">
                    <span className="status-pill status-pill--open">Applications open</span>
                    <span className="programme-card__index">01</span>
                  </div>
                  <svg className="programme-card__symbol" viewBox="0 0 120 120" fill="none" aria-hidden="true">
                    <circle cx="60" cy="60" r="53" stroke="currentColor" strokeWidth="1"/>
                    <path d="M60 10v100M10 60h100M25 25l70 70M95 25 25 95" stroke="currentColor" strokeWidth="1"/>
                    <circle cx="60" cy="60" r="19" fill="currentColor"/>
                  </svg>
                  <p className="programme-card__type">Fellowship · Cohort 01</p>
                  <h2>AfriYouth Research Fellowship</h2>
                  <p className="programme-card__desc">A 12-week learning lab for early-career researchers ready to turn evidence into policy, practice and public conversation.</p>
                  <ul className="programme-card__meta">
                    <li><span>Duration</span><strong>12 weeks</strong></li>
                    <li><span>Format</span><strong>Hybrid · Kigali</strong></li>
                    <li><span>Who</span><strong>Ages 18–30</strong></li>
                  </ul>
                  <div className="programme-card__footer">
                    <p className="programme-card__deadline"><strong>30 January 2027</strong>Application deadline</p>
                    <button className="programme-card__btn" type="button" data-programme="fellowship">Programme details</button>
                  </div>
                </article>
      
                <article className="programme-card programme-card--coral reveal" style={{ '--delay': '.06s' }} data-programme-card data-state="open" data-type="lab" data-programme="policy">
                  <div className="programme-card__top">
                    <span className="status-pill status-pill--open">Applications open</span>
                    <span className="programme-card__index">02</span>
                  </div>
                  <svg className="programme-card__symbol" viewBox="0 0 120 120" fill="none" aria-hidden="true">
                    <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="1"/>
                    <circle cx="60" cy="60" r="37" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5"/>
                    <circle cx="60" cy="60" r="18" fill="currentColor"/>
                    <circle cx="60" cy="6" r="6" fill="currentColor"/>
                    <circle cx="110" cy="84" r="4" fill="currentColor"/>
                    <circle cx="12" cy="82" r="4" fill="currentColor"/>
                  </svg>
                  <p className="programme-card__type">Policy Lab · Cohort 01</p>
                  <h2>Policy Innovation Lab</h2>
                  <p className="programme-card__desc">An eight-week lab for young policy actors working on a live public challenge alongside mentors and decision-makers.</p>
                  <ul className="programme-card__meta">
                    <li><span>Duration</span><strong>8 weeks</strong></li>
                    <li><span>Format</span><strong>Hybrid</strong></li>
                    <li><span>Who</span><strong>Ages 18–32</strong></li>
                  </ul>
                  <div className="programme-card__footer">
                    <p className="programme-card__deadline"><strong>15 February 2027</strong>Application deadline</p>
                    <button className="programme-card__btn" type="button" data-programme="policy">Programme details</button>
                  </div>
                </article>
      
                <article className="programme-card programme-card--lime reveal" data-programme-card data-state="coming" data-type="lab" data-programme="venture">
                  <div className="programme-card__top">
                    <span className="status-pill status-pill--wait">Coming soon</span>
                    <span className="programme-card__index">03</span>
                  </div>
                  <svg className="programme-card__symbol" viewBox="0 0 120 120" fill="none" aria-hidden="true">
                    <path d="M60 105V50M60 73c-18 0-29-12-29-30 18 0 29 12 29 30Zm0-13c16 0 26-10 26-26-16 0-26 10-26 26Z" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M60 105c-23 0-42-10-48-30M60 105c23 0 42-10 48-30" stroke="currentColor" strokeWidth="1" opacity=".4"/>
                  </svg>
                  <p className="programme-card__type">Venture Studio · Cohort 01</p>
                  <h2>Youth Venture Studio</h2>
                  <p className="programme-card__desc">A 16-week studio for young founders building solutions in climate, agriculture, health and education.</p>
                  <ul className="programme-card__meta">
                    <li><span>Duration</span><strong>16 weeks</strong></li>
                    <li><span>Format</span><strong>Kigali</strong></li>
                    <li><span>Who</span><strong>Ages 18–35</strong></li>
                  </ul>
                  <div className="programme-card__footer">
                    <p className="programme-card__deadline"><strong>Applications soon</strong>Join the interest list</p>
                    <button className="programme-card__btn" type="button" data-programme="venture">Preview the studio</button>
                  </div>
                </article>
      
                <article className="programme-card programme-card--sky reveal" style={{ '--delay': '.06s' }} data-programme-card data-state="open" data-type="lab" data-programme="design">
                  <div className="programme-card__top">
                    <span className="status-pill status-pill--open">Rolling intake</span>
                    <span className="programme-card__index">04</span>
                  </div>
                  <svg className="programme-card__symbol" viewBox="0 0 120 120" fill="none" aria-hidden="true">
                    <rect x="18" y="18" width="36" height="36" rx="18" stroke="currentColor" strokeWidth="1.2"/>
                    <rect x="66" y="18" width="36" height="36" rx="18" stroke="currentColor" strokeWidth="1.2"/>
                    <rect x="18" y="66" width="36" height="36" rx="18" stroke="currentColor" strokeWidth="1.2"/>
                    <rect x="66" y="66" width="36" height="36" rx="18" fill="currentColor"/>
                  </svg>
                  <p className="programme-card__type">Design Sprint · Rolling</p>
                  <h2>HCD Design Sprint</h2>
                  <p className="programme-card__desc">A six-week sprint to understand a service challenge, prototype with users and leave with a tested solution.</p>
                  <ul className="programme-card__meta">
                    <li><span>Duration</span><strong>6 weeks</strong></li>
                    <li><span>Format</span><strong>Remote + Kigali</strong></li>
                    <li><span>Who</span><strong>Project teams</strong></li>
                  </ul>
                  <div className="programme-card__footer">
                    <p className="programme-card__deadline"><strong>March 2027</strong>Next cohort</p>
                    <button className="programme-card__btn" type="button" data-programme="design">Programme details</button>
                  </div>
                </article>
      
                <article className="programme-card programme-card--paper reveal" data-programme-card data-state="waitlist" data-type="fellowship" data-programme="futures">
                  <div className="programme-card__top">
                    <span className="status-pill status-pill--wait">Waitlist open</span>
                    <span className="programme-card__index">05</span>
                  </div>
                  <svg className="programme-card__symbol" viewBox="0 0 120 120" fill="none" aria-hidden="true">
                    <path d="M60 13c4 29 18 43 47 47-29 4-43 18-47 47-4-29-18-43-47-47 29-4 43-18 47-47Z" stroke="currentColor" strokeWidth="1.2"/>
                    <circle cx="60" cy="60" r="9" fill="currentColor"/>
                  </svg>
                  <p className="programme-card__type">Futures Academy · Cohort 01</p>
                  <h2>Futures Academy</h2>
                  <p className="programme-card__desc">A four-week introduction to strategic foresight for young thinkers who want to shape what comes next.</p>
                  <ul className="programme-card__meta">
                    <li><span>Duration</span><strong>4 weeks</strong></li>
                    <li><span>Format</span><strong>Online</strong></li>
                    <li><span>Who</span><strong>Ages 18–30</strong></li>
                  </ul>
                  <div className="programme-card__footer">
                    <p className="programme-card__deadline"><strong>Waitlist open</strong>First cohort announced soon</p>
                    <button className="programme-card__btn" type="button" data-programme="futures">Programme details</button>
                  </div>
                </article>
      
                <article className="programme-card reveal" style={{ '--delay': '.06s' }} data-programme-card data-state="open" data-type="organisation" data-programme="mel">
                  <div className="programme-card__top">
                    <span className="status-pill status-pill--open">Open for enquiries</span>
                    <span className="programme-card__index">06</span>
                  </div>
                  <svg className="programme-card__symbol" viewBox="0 0 120 120" fill="none" aria-hidden="true">
                    <circle cx="60" cy="60" r="49" stroke="currentColor" strokeWidth="1"/>
                    <path d="M25 82c14-21 27-32 42-32 13 0 23 6 32 18" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M33 42c9 8 18 12 28 12 14 0 25-8 32-22" stroke="currentColor" strokeWidth="1.2"/>
                    <circle cx="60" cy="60" r="7" fill="currentColor"/>
                  </svg>
                  <p className="programme-card__type">For organisations · Clinic</p>
                  <h2>MEL for Impact Clinic</h2>
                  <p className="programme-card__desc">A practical four-day clinic for teams who want measurement to inform decisions, not just satisfy reporting.</p>
                  <ul className="programme-card__meta">
                    <li><span>Duration</span><strong>4 days</strong></li>
                    <li><span>Format</span><strong>Tailored</strong></li>
                    <li><span>Who</span><strong>Teams</strong></li>
                  </ul>
                  <div className="programme-card__footer">
                    <p className="programme-card__deadline"><strong>Enquire anytime</strong>Designed with your team</p>
                    <button className="programme-card__btn" type="button" data-programme="mel">Clinic details</button>
                  </div>
                </article>
              </div>
      
              <p className="filter-empty" data-filter-empty hidden>No programmes match this filter right now. Try “All programmes” or <Link href="/contact?topic=programme">tell us what you’re looking for</Link>.</p>
            </div>
          </section>
      
          <section className="apply-process section--tight" aria-labelledby="apply-title">
            <div className="wrap">
              <div className="apply-process__head">
                <div>
                  <p className="eyebrow reveal">How it works</p>
                  <h2 className="h2 reveal" id="apply-title">From interest to impact.</h2>
                </div>
                <p className="reveal">A clear, human process from first question to first session. We’ll tell you exactly where you stand at every stage.</p>
              </div>
              <ol className="apply-steps reveal">
                <li className="apply-step">
                  <span className="apply-step__num">01</span>
                  <h3>Explore</h3>
                  <p>Find the programme that fits where you are now. Not sure? Ask us — we’ll point you clearly.</p>
                </li>
                <li className="apply-step">
                  <span className="apply-step__num">02</span>
                  <h3>Apply</h3>
                  <p>Tell us about your experience, your question and what you want to change. No perfect CV required.</p>
                </li>
                <li className="apply-step">
                  <span className="apply-step__num">03</span>
                  <h3>Talk</h3>
                  <p>Shortlisted applicants have a conversation with our team — a two-way exchange, not an interrogation.</p>
                </li>
                <li className="apply-step">
                  <span className="apply-step__num">04</span>
                  <h3>Begin</h3>
                  <p>Accepted participants receive a full pack, a cohort welcome and a clear plan for the weeks ahead.</p>
                </li>
              </ol>
            </div>
          </section>
      
          <section className="section" aria-labelledby="faq-title">
            <div className="wrap faq__grid">
              <div className="faq__intro">
                <p className="eyebrow reveal">Questions</p>
                <h2 className="h2 reveal" id="faq-title">Before you apply.</h2>
                <p className="lede reveal">The things people most often ask us about programmes, eligibility and getting started.</p>
                <Link className="text-link reveal" href="/contact?topic=programme">Ask us anything <span aria-hidden="true">→</span></Link>
              </div>
              <div className="faq reveal">
                <details className="faq-item">
                  <summary>Do I need a university degree to apply?<span aria-hidden="true">+</span></summary>
                  <div className="faq-item__answer"><p>For most programmes, no. We care more about how you think, what you’ve done and the question you want to explore than the certificate you hold. Specific requirements are listed in each programme’s details.</p></div>
                </details>
                <details className="faq-item">
                  <summary>Is there a participation fee?<span aria-hidden="true">+</span></summary>
                  <div className="faq-item__answer"><p>No. Our open programmes are free to participate in. Where a programme includes a stipend, travel support or a fee for organisations, this is stated clearly in the programme details.</p></div>
                </details>
                <details className="faq-item">
                  <summary>Can I apply if I don’t live in Rwanda?<span aria-hidden="true">+</span></summary>
                  <div className="faq-item__answer"><p>Yes. We work across Africa. Most of our programmes are hybrid or online, with in-person residencies or workshops where travel support is provided. Check the format on each programme.</p></div>
                </details>
                <details className="faq-item">
                  <summary>Can I apply to more than one programme?<span aria-hidden="true">+</span></summary>
                  <div className="faq-item__answer"><p>You can, but we recommend choosing the one closest to where you are now. If you’re unsure, start a conversation with us and we’ll help you find the best fit.</p></div>
                </details>
                <details className="faq-item">
                  <summary>Do you offer accessibility or care accommodations?<span aria-hidden="true">+</span></summary>
                  <div className="faq-item__answer"><p>Yes. If you need adjustments during the application process or to participate fully, tell us in your application or email us. We’ll work with you to make it possible.</p></div>
                </details>
                <details className="faq-item">
                  <summary>Can our organisation co-design a programme?<span aria-hidden="true">+</span></summary>
                  <div className="faq-item__answer"><p>Yes. We design custom labs, clinics and learning experiences with partners. Visit our <Link href="/contact?topic=partner">partnership page</Link> or start a conversation with our team.</p></div>
                </details>
              </div>
            </div>
          </section>
      
          <section className="cta-band" aria-labelledby="programmes-cta-title">
            <div className="wrap cta-band__inner">
              <div className="reveal">
                <p className="eyebrow">Not sure where you fit?</p>
                <h2 className="h2" id="programmes-cta-title">Start with a conversation.</h2>
                <p>Tell us where you are and what you want to move. We’ll help you find the right programme, partner or next step.</p>
              </div>
              <div className="cta-band__actions reveal">
                <Link className="btn btn--primary" href="/contact?topic=programme">Talk to our team <span className="btn__icon" aria-hidden="true">↗</span></Link>
                <Link className="btn btn--outline" href="/contact?topic=partner">Explore partnership</Link>
              </div>
            </div>
            <div className="cta-band__ring" aria-hidden="true"></div>
            <svg className="cta-band__star" viewBox="0 0 64 64" aria-hidden="true" fill="currentColor">
              <path d="M32 0l4.8 24.1L64 32l-27.2 7.9L32 64l-4.8-24.1L0 32l27.2-7.9L32 0Z"/>
            </svg>
          </section>
        </main>

      <dialog className="modal" id="programme-modal" aria-labelledby="programme-modal-title">
          <div className="modal__scroll">
            <div className="modal__top">
              <span className="modal__top-label" data-modal-label>Programme details</span>
              <button className="modal__close" type="button" aria-label="Close programme details" data-modal-close>✕</button>
            </div>
            <div className="modal__body">
              <div className="modal__meta" data-modal-meta></div>
              <h2 id="programme-modal-title" data-modal-title>Programme</h2>
              <p className="modal__lead" data-modal-lead></p>
              <div className="modal__grid">
                <div>
                  <div className="modal__section">
                    <h3>What you’ll do</h3>
                    <ul className="tick-list" data-modal-do></ul>
                  </div>
                  <div className="modal__section">
                    <h3>Who it’s for</h3>
                    <p data-modal-who></p>
                  </div>
                </div>
                <div>
                  <div className="modal__section">
                    <h3>Key details</h3>
                    <ul className="tick-list" data-modal-details></ul>
                  </div>
                  <div className="modal__section">
                    <h3>What you’ll leave with</h3>
                    <p data-modal-gain></p>
                  </div>
                </div>
              </div>
              <div className="modal__footer">
                <Link className="btn btn--primary" href="/contact?topic=programme" data-modal-apply>Start your application <span className="btn__icon" aria-hidden="true">↗</span></Link>
                <p className="modal__note">Applications are read by people, not filters. Questions are welcome before you apply.</p>
              </div>
            </div>
          </div>
        </dialog>
    </>
  );
}
