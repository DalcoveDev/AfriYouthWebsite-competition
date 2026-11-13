import Link from "next/link";

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Our Work" },
  { href: "/programs", label: "Programs" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

const focusLinks = [
  { href: "/work#research", label: "Research & Evidence" },
  { href: "/work#policy", label: "Policy & Governance" },
  { href: "/work#innovation", label: "Innovation & Entrepreneurship" },
  { href: "/work#foresight", label: "Strategic Foresight" },
  { href: "/work#academy", label: "Career & Professional Development" },
];

const connectLinks = [
  { href: "/contact", label: "Contact Us" },
  { href: "/contact?topic=partner", label: "Partnerships" },
  { href: "/contact?topic=programme", label: "Opportunities" },
  { href: "/contact?topic=general", label: "General Inquiries" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer__glow" aria-hidden="true" />
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__pitch">
            <Link
              className="brand brand--light"
              href="/"
              aria-label="AfriYouth Innovation Labs home"
            >
              <span className="brand__mark">
                <img src="/brand/logo-mark-white.svg" alt="" width="46" height="66" />
              </span>
              <span className="brand__text">
                <span className="brand__name">Afri Youth</span>
                <span className="brand__sub brand__sub--light">Innovation Labs</span>
              </span>
            </Link>
            <p className="footer__tagline">From Evidence to Impact.</p>
            <p>
              A research, innovation and policy consulting firm connecting evidence,
              design, entrepreneurship and foresight to turn young people&rsquo;s
              ideas into lasting systems change.
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
                <p className="footer__nav-title">Our Focus</p>
                <ul>
                  {focusLinks.map((link) => (
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
            © AfriYouth Innovation Labs. All rights reserved.
            <br />
            <Link href="/privacy">Privacy Policy</Link>{" "}
            <span aria-hidden="true">|</span> <Link href="/terms">Terms of Use</Link>
          </p>
          <a className="footer__top-link" href="#main">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
