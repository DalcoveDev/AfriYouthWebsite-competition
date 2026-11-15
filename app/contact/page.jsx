import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { brand } from "@/lib/content";
import "@/styles/hub.css";
import "@/styles/inner.css";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Start a conversation with AfriYouth Innovation Labs about a programme, partnership, research commission or joining our network.",
  openGraphDescription:
    "Bring us the question. We’ll bring the lab. Start a conversation about a programme, partnership or commission.",
  path: "/contact",
});

const paths = [
  { label: "Programmes & applications", topic: "programme" },
  { label: "Partnerships", topic: "partner" },
  { label: "Research & advisory", topic: "research" },
  { label: "General enquiry", topic: "general" },
];

const faqs = [
  {
    q: "Which pathway should I choose?",
    a: "Choose “Join a programme” for the Innovation Accelerator, the Policy Innovation Challenge or the Academy programmes; “Partner on a project” for collaboration; “Commission research or advisory” for evidence, policy, impact or funding work; or “Something else” if none of those fit.",
  },
  {
    q: "What should I include in my message?",
    a: "Name the programme, lab or service you are asking about, and the question or decision behind it. A few sentences is enough — we will ask for more detail if we need it.",
  },
  {
    q: "Can we commission research or partner on a project?",
    a: "Yes. Select “Research & advisory” for evidence, policy, impact and funding work, or “Partnerships” for collaboration. Tell us about your mandate and the question you need answered.",
  },
  {
    q: "Can I send a brief or an attachment?",
    a: "The form opens your email app with the message ready to send, so you can add attachments there before pressing send.",
  },
  {
    q: "What happens after I write?",
    a: "Your email app opens with the message ready to send. Once you press send, we route the enquiry to the person closest to the work.",
  },
];

export default function ContactPage() {
  return (
    <main id="main">
      <section className="page-hero" aria-labelledby="contact-title">
        <div className="wrap">
          <div className="page-hero__grid">
            <div className="page-hero__copy">
              <p className="eyebrow reveal">Contact</p>
              <h1 className="h1 reveal" id="contact-title">
                Let’s start with <em>your question.</em>
              </h1>
            </div>
            <div className="page-hero__aside reveal">
              <p className="lede">
                Whether you’re looking for your next opportunity or a partner for a
                problem that matters, this is the place to start.
              </p>
              <div className="page-hero__meta">
                <span className="chip">Programs</span>
                <span className="chip">Partnerships</span>
                <span className="chip">Commissions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="form-title">
        <div className="wrap contact-layout">
          <div className="contact-form-wrap reveal">
            <h2 className="h3" id="form-title">
              Tell us what you’re working on.
            </h2>
            <p>
              Share a little context and we’ll route your message to the right person.
              No forms for the sake of forms.
            </p>

            <div className="form-success" data-form-success role="status" tabIndex={-1} hidden>
              <strong>Your email is ready to send.</strong>
              <br />
              We’ve opened your email app with your message. Press send there and we’ll
              take it from here.
            </div>

            <form
              action={`mailto:${brand.email}`}
              method="post"
              encType="text/plain"
              data-contact-form
            >
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="contact-name">Your name (required)</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Full name"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-email">Email address (required)</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.org"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-organisation">
                    Organisation <span>(optional)</span>
                  </label>
                  <input
                    id="contact-organisation"
                    name="organisation"
                    type="text"
                    autoComplete="organization"
                    placeholder="Where you work or study"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-topic">What brings you here? (required)</label>
                  <select id="contact-topic" name="topic" required defaultValue="">
                    <option value="" disabled>
                      Choose a pathway
                    </option>
                    <option value="programme">Join a programme</option>
                    <option value="partner">Partner on a project</option>
                    <option value="research">Commission research or advisory</option>
                    <option value="general">Something else</option>
                  </select>
                </div>
                <div className="form-field form-field--full">
                  <label htmlFor="contact-subject">
                    Subject <span>(optional)</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="A programme, a partnership, a specific brief"
                  />
                </div>
                <div className="form-field form-field--full">
                  <label htmlFor="contact-message">
                    What are you hoping to explore? (required)
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="A few sentences about the question, opportunity or collaboration on your mind."
                    required
                  />
                </div>
                <div className="form-field form-field--full form-check">
                  <input id="contact-consent" name="consent" type="checkbox" required />
                  <label htmlFor="contact-consent">
                    I’m happy for AfriYouth Innovation Labs to use these details to
                    respond to my enquiry.
                  </label>
                </div>
              </div>

              <p className="form-error" data-form-error role="alert" hidden>
                Please complete the required fields before sending.
              </p>

              <div className="form-submit">
                <button className="btn btn--primary" type="submit">
                  Send message
                  <span className="btn__icon" aria-hidden="true">↗</span>
                </button>
                <p className="form-privacy">
                  This opens your email app with the message ready to send. Prefer
                  email? Write to{" "}
                  <a href={`mailto:${brand.email}`}>{brand.email}</a>.
                </p>
              </div>
            </form>
          </div>

          <div>
            <aside className="contact-panel reveal" aria-label="Direct contact">
              <div className="contact-panel__top">
                <p className="eyebrow">Direct line</p>
                <a className="contact-panel__email" href={`mailto:${brand.email}`}>
                  {brand.email}
                </a>
                <div className="contact-panel__row">
                  <p>
                    Working across Africa
                    <br />
                    and beyond
                  </p>
                  <button
                    className="copy-btn"
                    type="button"
                    data-copy-email={brand.email}
                  >
                    Copy email
                  </button>
                </div>
              </div>
              <div className="contact-panel__paths">
                <h3>Choose your path</h3>
                <ul>
                  {paths.map((path) => (
                    <li key={path.topic}>
                      <button type="button" data-topic-shortcut={path.topic}>
                        {path.label}
                        <span aria-hidden="true">→</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="contact-side-note reveal">
              <p>
                <strong>A little context goes a long way.</strong>
                Name the programme, lab or service you’re asking about, and the question
                or decision behind it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="contact-faq-title">
        <div className="wrap faq__grid">
          <div className="faq__intro reveal">
            <p className="eyebrow">Before you write</p>
            <h2 className="h2" id="contact-faq-title">
              A few useful answers.
            </h2>
            <p className="lede">
              Short answers to the questions that usually land in our inbox.
            </p>
            <Link className="text-link" href={`mailto:${brand.email}`}>
              Email us directly
            </Link>
          </div>
          <div className="faq reveal">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.q}>
                <summary>
                  {faq.q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p className="faq-item__answer">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
