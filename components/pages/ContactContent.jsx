import Link from "next/link";

export default function ContactContent() {
  return (
    <>
      <main id="main">
          <section className="page-hero" aria-labelledby="contact-title">
            <div className="wrap">
              <div className="page-hero__grid">
                <div className="page-hero__copy">
                  <p className="eyebrow reveal">Contact</p>
                  <h1 className="h1 reveal" id="contact-title">Bring us the question. <em>We’ll bring the lab.</em></h1>
                </div>
                <div className="page-hero__aside reveal">
                  <p className="lede">Whether you’re looking for your next opportunity or a partner for a problem that matters, this is the place to start.</p>
                  <div className="page-hero__meta">
                    <span className="chip">Programs</span>
                    <span className="chip">Partnerships</span>
                    <span className="chip">Commissions</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
          <section className="section" aria-labelledby="contact-form-title">
            <div className="wrap contact-layout">
              <div className="contact-form-wrap reveal">
                <h2 className="h3" id="contact-form-title">Tell us what you’re working on.</h2>
                <p>Share a little context and we’ll route your message to the right person. No forms for the sake of forms.</p>
      
                <div className="form-success" role="status" tabIndex="-1" data-form-success hidden>
                  <strong>Your email is ready to send.</strong> We’ve opened your email app with your message. Press send there and we’ll take it from here.
                </div>
      
                <form action="mailto:hello@afriyouthlabs.org" method="post" encType="text/plain" data-contact-form>
                  <div className="form-grid">
                    <div className="form-field">
                      <label htmlFor="contact-name">Your name <span>(required)</span></label>
                      <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Full name" required />
                    </div>
                    <div className="form-field">
                      <label htmlFor="contact-email">Email address <span>(required)</span></label>
                      <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.org" required />
                    </div>
                    <div className="form-field">
                      <label htmlFor="contact-organisation">Organisation <span>(optional)</span></label>
                      <input id="contact-organisation" name="organisation" type="text" autoComplete="organization" placeholder="Where you work or study" />
                    </div>
                    <div className="form-field">
                      <label htmlFor="contact-country">Country <span>(optional)</span></label>
                      <input id="contact-country" name="country" type="text" autoComplete="country-name" placeholder="Where you’re based" />
                    </div>
                    <div className="form-field form-field--full">
                      <label htmlFor="contact-topic">What brings you here? <span>(required)</span></label>
                      <select id="contact-topic" name="topic" required>
                        <option value="">Choose a pathway</option>
                        <option value="programme">Join a programme</option>
                        <option value="partner">Partner on a project</option>
                        <option value="commission">Commission research or advisory</option>
                        <option value="network">Join the network or work with us</option>
                        <option value="media">Media or speaking</option>
                        <option value="other">Something else</option>
                      </select>
                    </div>
                    <div className="form-field form-field--full">
                      <label htmlFor="contact-message">What are you hoping to explore? <span>(required)</span></label>
                      <textarea id="contact-message" name="message" placeholder="A few sentences about the question, opportunity or collaboration on your mind." required></textarea>
                    </div>
                  </div>
                  <label className="form-check">
                    <input type="checkbox" name="consent" required />
                    <span>I’m happy for AfriYouth Innovation Labs to use these details to respond to my enquiry.</span>
                  </label>
                  <p className="form-error" role="alert" data-form-error hidden>Please complete the required fields before sending.</p>
                  <div className="form-submit">
                    <button className="btn btn--primary" type="submit">Send message <span className="btn__icon" aria-hidden="true">↗</span></button>
                    <p className="form-privacy">This opens your email app with the message ready to send. Prefer email? Write to <a href="mailto:hello@afriyouthlabs.org">hello@afriyouthlabs.org</a>.</p>
                  </div>
                </form>
              </div>
      
              <div className="reveal" style={{ '--delay': '.1s' }}>
                <aside className="contact-panel" aria-label="Direct contact details">
                  <div className="contact-panel__top">
                    <p className="eyebrow">Direct line</p>
                    <a className="contact-panel__email" href="mailto:hello@afriyouthlabs.org">hello@afriyouthlabs.org</a>
                    <div className="contact-panel__row">
                      <p>Kigali, Rwanda<br />Working across Africa</p>
                      <button className="copy-btn" type="button" data-copy-email="hello@afriyouthlabs.org">Copy email</button>
                    </div>
                  </div>
                  <div className="contact-panel__paths">
                    <h3>Choose your path</h3>
                    <ul>
                      <li><button type="button" data-topic-shortcut="programme">Programmes &amp; applications <span aria-hidden="true">→</span></button></li>
                      <li><button type="button" data-topic-shortcut="partner">Partnerships <span aria-hidden="true">→</span></button></li>
                      <li><button type="button" data-topic-shortcut="commission">Research &amp; advisory <span aria-hidden="true">→</span></button></li>
                      <li><button type="button" data-topic-shortcut="media">Media &amp; speaking <span aria-hidden="true">→</span></button></li>
                    </ul>
                  </div>
                </aside>
                <div className="contact-side-note">
                  <strong>We read every message.</strong>
                  <p>We aim to respond within 3–5 working days. For programme-specific questions, include the programme name so we can help you faster.</p>
                </div>
              </div>
            </div>
          </section>
      
          <section className="section section--cream" id="contact-faq" aria-labelledby="contact-faq-title">
            <div className="wrap faq__grid">
              <div className="faq__intro">
                <p className="eyebrow reveal">Before you write</p>
                <h2 className="h2 reveal" id="contact-faq-title">A few useful answers.</h2>
                <p className="lede reveal">Short answers to the questions that usually land in our inbox.</p>
                <a className="text-link reveal" href="mailto:hello@afriyouthlabs.org">Email us directly <span aria-hidden="true">→</span></a>
              </div>
              <div className="faq reveal">
                <details className="faq-item">
                  <summary>How quickly will I hear back?<span aria-hidden="true">+</span></summary>
                  <div className="faq-item__answer"><p>We aim to respond within 3–5 working days. If your enquiry is time-sensitive, say so in the subject line or in your message and we’ll do our best to prioritise it.</p></div>
                </details>
                <details className="faq-item">
                  <summary>I’m interested in a programme. What should I include?<span aria-hidden="true">+</span></summary>
                  <div className="faq-item__answer"><p>Tell us which programme you’re interested in, where you are in your journey and any access needs. If you’re unsure which programme fits, describe what you want to learn and change — we’ll help you find the right one.</p></div>
                </details>
                <details className="faq-item">
                  <summary>Can we co-design a programme or research project?<span aria-hidden="true">+</span></summary>
                  <div className="faq-item__answer"><p>Yes. We work with development partners, public institutions, foundations, universities and businesses on tailored research, labs and learning experiences. Select “Commission research or advisory” in the form and tell us about your mandate.</p></div>
                </details>
                <details className="faq-item">
                  <summary>Do you accept proposals from young researchers?<span aria-hidden="true">+</span></summary>
                  <div className="faq-item__answer"><p>We welcome them. Send a short note with your research question, why it matters and the experience you bring. We can’t fund every idea, but we do read them and will point you toward useful openings where we can.</p></div>
                </details>
                <details className="faq-item">
                  <summary>Are you available for media interviews or speaking?<span aria-hidden="true">+</span></summary>
                  <div className="faq-item__answer"><p>Yes, when the subject fits our work. Select “Media or speaking” and include your outlet, deadline, topic and format. We’ll come back to you with availability and the right spokesperson.</p></div>
                </details>
                <details className="faq-item">
                  <summary>Where are you based?<span aria-hidden="true">+</span></summary>
                  <div className="faq-item__answer"><p>Our home base is Kigali, Rwanda, and our work reaches across the continent. Many of our programmes and partnerships are hybrid or remote, with in-person moments where they add value.</p></div>
                </details>
              </div>
            </div>
          </section>
      
          <section className="cta-band" aria-labelledby="contact-cta-title">
            <div className="wrap cta-band__inner">
              <div className="reveal">
                <p className="eyebrow">Still exploring?</p>
                <h2 className="h2" id="contact-cta-title">Find the right next step.</h2>
                <p>Browse open opportunities or see how our six disciplines connect to the change you want to make.</p>
              </div>
              <div className="cta-band__actions reveal">
                <Link className="btn btn--primary" href="/programs">Explore programs <span className="btn__icon" aria-hidden="true">↗</span></Link>
                <Link className="btn btn--outline" href="/work">See our work</Link>
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
