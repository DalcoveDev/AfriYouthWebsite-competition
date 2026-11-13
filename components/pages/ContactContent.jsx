import Link from "next/link";

const ways = [
  {
    n: "01",
    title: "General Inquiries",
    desc: "Questions about AfriYouth Innovation Labs, its work, and its activities.",
    topic: "general",
  },
  {
    n: "02",
    title: "Programs & Opportunities",
    desc: "Inquiries about initiatives, participation, and future opportunities.",
    topic: "programme",
  },
  {
    n: "03",
    title: "Research & Consulting",
    desc: "Organizations interested in research, policy analysis, innovation, and consulting services.",
    topic: "research",
  },
  {
    n: "04",
    title: "Partnerships & Collaboration",
    desc: "Institutions and individuals interested in working together to advance shared goals.",
    topic: "partner",
  },
];

export default function ContactContent() {
  return (
    <>
      <main id="main">
        <section className="page-hero" aria-labelledby="contact-title">
          <div className="wrap">
            <div className="page-hero__grid">
              <div className="page-hero__copy">
                <p className="eyebrow reveal">Let&rsquo;s connect</p>
                <h1 className="h1 reveal" id="contact-title">
                  Let&rsquo;s turn ideas into <em>meaningful action.</em>
                </h1>
              </div>
              <div className="page-hero__aside reveal">
                <p className="lede">
                  Whether you are a young innovator, an organization, a researcher, or a
                  potential partner, we welcome conversations about research,
                  innovation, policy, and collaboration.
                </p>
                <div className="page-hero__meta">
                  <span className="chip">Programs</span>
                  <span className="chip">Partnerships</span>
                  <span className="chip">Research</span>
                </div>
                <p className="contact-tagline">
                  Fueling Innovators for Sustainable Development
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="ways-title">
          <div className="wrap">
            <div className="section-head">
              <div className="section-head__copy">
                <p className="eyebrow reveal">Ways to connect</p>
                <h2 className="h2 reveal" id="ways-title">
                  Start where it fits.
                </h2>
              </div>
            </div>

            <div className="editorial reveal">
              {ways.map((way) => (
                <div className="editorial__item" key={way.title}>
                  <div>
                    <span className="editorial__num">{way.n}</span>
                    <p className="editorial__title">{way.title}</p>
                  </div>
                  <div className="editorial__body">
                    <p>{way.desc}</p>
                    <p>
                      <Link className="text-link" href={`/contact?topic=${way.topic}`}>
                        Choose this path <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--cream" aria-labelledby="contact-form-title">
          <div className="wrap contact-layout">
            <div className="contact-form-wrap reveal">
              <h2 className="h3" id="contact-form-title">
                Send us a message.
              </h2>
              <p>
                Share a little context and we&rsquo;ll route your message to the right
                person.
              </p>

              <div className="form-success" role="status" tabIndex={-1} data-form-success hidden>
                <strong>Thank you for reaching out to AfriYouth Innovation Labs.</strong>{" "}
                Your email app is opening with your message — press send and we&rsquo;ll
                take it from here.
              </div>

              <form action="mailto:hello@afriyouthlabs.org" method="post" encType="text/plain" data-contact-form>
                <div className="form-grid">
                  <div className="form-field">
                    <label htmlFor="contact-name">Full Name <span>(required)</span></label>
                    <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Full name" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="contact-email">Email Address <span>(required)</span></label>
                    <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.org" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="contact-organisation">Organization <span>(optional)</span></label>
                    <input id="contact-organisation" name="organisation" type="text" autoComplete="organization" placeholder="Where you work or study" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="contact-topic">Inquiry Type <span>(required)</span></label>
                    <select id="contact-topic" name="topic" required>
                      <option value="">Choose an inquiry type</option>
                      <option value="general">General Inquiry</option>
                      <option value="programme">Programs &amp; Opportunities</option>
                      <option value="research">Research &amp; Consulting</option>
                      <option value="partner">Partnerships &amp; Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-field form-field--full">
                    <label htmlFor="contact-subject">Subject</label>
                    <input id="contact-subject" name="subject" type="text" placeholder="What is this about?" />
                  </div>
                  <div className="form-field form-field--full">
                    <label htmlFor="contact-message">Message <span>(required)</span></label>
                    <textarea id="contact-message" name="message" placeholder="A few sentences about the question, opportunity or collaboration on your mind." required></textarea>
                  </div>
                </div>
                <label className="form-check">
                  <input type="checkbox" name="consent" required />
                  <span>I&rsquo;m happy for AfriYouth Innovation Labs to use these details to respond to my inquiry.</span>
                </label>
                <p className="form-error" role="alert" data-form-error hidden>
                  We could not send your message. Please check your details and try
                  again.
                </p>
                <div className="form-submit">
                  <button className="btn btn--primary" type="submit">
                    Send Message <span className="btn__icon" aria-hidden="true">↗</span>
                  </button>
                  <p className="form-privacy">
                    This opens your email app with the message ready to send. Prefer
                    email? Write to{" "}
                    <a href="mailto:hello@afriyouthlabs.org">hello@afriyouthlabs.org</a>.
                  </p>
                </div>
              </form>
            </div>

            <div className="reveal" style={{ "--delay": ".1s" }}>
              <aside className="contact-panel" aria-label="Direct contact details">
                <div className="contact-panel__top">
                  <p className="eyebrow">Direct line</p>
                  <a className="contact-panel__email" href="mailto:hello@afriyouthlabs.org">
                    hello@afriyouthlabs.org
                  </a>
                  <div className="contact-panel__row">
                    <p>
                      Kigali, Rwanda
                      <br />
                      Working across Africa
                    </p>
                    <button className="copy-btn" type="button" data-copy-email="hello@afriyouthlabs.org">
                      Copy email
                    </button>
                  </div>
                </div>
                <div className="contact-panel__paths">
                  <h3>Choose your path</h3>
                  <ul>
                    <li><button type="button" data-topic-shortcut="programme">Programs &amp; opportunities <span aria-hidden="true">→</span></button></li>
                    <li><button type="button" data-topic-shortcut="partner">Partnerships <span aria-hidden="true">→</span></button></li>
                    <li><button type="button" data-topic-shortcut="research">Research &amp; consulting <span aria-hidden="true">→</span></button></li>
                    <li><button type="button" data-topic-shortcut="general">General inquiries <span aria-hidden="true">→</span></button></li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>

          <div className="wrap">
            <p className="lede reveal" style={{ marginTop: "clamp(2rem, 4vw, 3rem)" }}>
              We look forward to hearing from you and exploring ways to create
              meaningful impact together.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
