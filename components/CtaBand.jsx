import Link from "next/link";

export default function CtaBand({
  eyebrow = "Let’s make it move",
  title = "Have a problem worth solving?",
  copy = "Tell us what you’re working on. We’ll come with questions, a multidisciplinary lens and a practical way forward.",
  primary = { href: "/contact", label: "Start a conversation" },
  secondary = { href: "/work", label: "See how we work" },
}) {
  return (
    <section className="cta-band" aria-labelledby="cta-band-title">
      <div className="wrap cta-band__inner">
        <div className="reveal">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="h2" id="cta-band-title">
            {title}
          </h2>
          <p>{copy}</p>
        </div>
        <div className="cta-band__actions reveal">
          <Link className="btn btn--primary" href={primary.href}>
            {primary.label} <span className="btn__icon" aria-hidden="true">↗</span>
          </Link>
          {secondary && (
            <Link className="btn btn--outline" href={secondary.href}>
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
      <div className="cta-band__ring" aria-hidden="true" />
      <svg
        className="cta-band__star"
        viewBox="0 0 64 64"
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M32 0l4.8 24.1L64 32l-27.2 7.9L32 64l-4.8-24.1L0 32l27.2-7.9L32 0Z" />
      </svg>
    </section>
  );
}
