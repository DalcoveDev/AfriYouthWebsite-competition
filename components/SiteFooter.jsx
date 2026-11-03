import Link from "next/link";

const exploreLinks = [
  { href: "/about", label: "About AfriYouth" },
  { href: "/work", label: "Our work" },
  { href: "/programs", label: "Programs & opportunities" },
  { href: "/insights", label: "Insights & resources" },
];

const connectLinks = [
  { href: "/contact?topic=programme", label: "Join a program" },
  { href: "/contact?topic=partner", label: "Partner with us" },
  { href: "/contact?topic=commission", label: "Commission our work" },
  { href: "/contact?topic=media", label: "Media & speaking" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__pitch">
            <Link
              className="brand brand--light"
              href="/"
              aria-label="AfriYouth Innovation Labs home"
            >
              <svg
                className="brand__mark"
                viewBox="0 0 48 48"
                aria-hidden="true"
                focusable="false"
              >
                <rect width="48" height="48" rx="14" fill="#fbf8f0" />
                <path d="M24 7c9.39 0 17 7.61 17 17h-9.5c0-4.14-3.36-7.5-7.5-7.5V7Z" fill="#173d2e" />
                <path d="M41 24c0 9.39-7.61 17-17 17v-9.5c4.14 0 7.5-3.36 7.5-7.5H41Z" fill="#e9592e" />
                <path d="M24 41c-9.39 0-17-7.61-17-17h9.5c0 4.14 3.36 7.5 7.5 7.5V41Z" fill="#b9d8e6" />
                <path d="M7 24C7 14.61 14.61 7 24 7v9.5c-4.14 0-7.5 3.36-7.5 7.5H7Z" fill="#dff06a" />
                <circle cx="24" cy="24" r="4.5" fill="#0d251d" />
              </svg>
              <span className="brand__text">
                <span className="brand__name">AfriYouth</span>
                <span className="brand__sub">Innovation Labs</span>
              </span>
            </Link>
            <h2 className="h2" style={{ marginTop: "2rem" }}>
              The future is a team sport.
            </h2>
            <p>
              We’re building a connected home for young people who refuse to accept
              the way things are — and the partners who want to back them.
            </p>
            <a className="footer__email" href="mailto:hello@afriyouthlabs.org">
              hello@afriyouthlabs.org
            </a>
          </div>
          <div className="footer__aside">
            <div className="footer__nav">
              <div>
                <p className="footer__nav-title">Explore</p>
                <ul>
                  {exploreLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="footer__nav-title">Connect</p>
                <ul>
                  {connectLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <address className="footer__address">
              <strong>AfriYouth Innovation Labs</strong>
              Kigali, Rwanda
              <br />
              Working across Africa and beyond
            </address>
          </div>
        </div>
        <div className="footer__bottom">
          <p>
            © 2026 AfriYouth Innovation Labs. A digital concept built for the
            AfriYouth Web Design Challenge.
          </p>
          <a className="footer__top-link" href="#main">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
