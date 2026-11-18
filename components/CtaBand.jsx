import Link from "next/link";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export default function CtaBand({
  title = "Have a problem worth solving?",
  copy = "Tell us what you’re working on. We’ll come with questions, a multidisciplinary lens and a practical way forward.",
  primary = { href: "/contact", label: "Start a conversation" },
  secondary = { href: "/work", label: "See how we work" },
}) {
  return (
    <section className="cta-band" aria-labelledby="cta-band-title">
      <div className="wrap cta-band__inner">
        <div className="reveal">
          <h2 className="h2" id="cta-band-title">
            {title}
          </h2>
          <p>{copy}</p>
        </div>
        <div className="cta-band__actions reveal">
          <Link className="btn btn--primary" href={primary.href}>
            {primary.label}{" "}
            <span className="btn__icon" aria-hidden="true">
              <HiOutlineArrowUpRight />
            </span>
          </Link>
          {secondary && (
            <Link className="btn btn--outline" href={secondary.href}>
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
      <div className="cta-band__ring" aria-hidden="true" />
      <img
        className="cta-band__mark"
        src="/brand/logo-mark-white.svg"
        width={64}
        height={91}
        alt=""
        aria-hidden="true"
      />
    </section>
  );
}
