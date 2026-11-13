"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Our work" },
  { href: "/programs", label: "Programs" },
  { href: "/insights", label: "Insights" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const isCurrent = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <div className="announce">
        <div className="announce__inner">
          <span className="announce__tagline">
            <span className="announce__spark" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            From Evidence to Impact
          </span>
          <span className="announce__rule" aria-hidden="true" />
          <span className="announce__news">
            Policy Innovation Challenge{" "}
            <span className="announce__word">· Cohort 01</span> applications open
          </span>
          <Link
            href="/programs#policy-challenge"
            aria-label="Explore the Policy Innovation Challenge"
          >
            Explore <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      <header className="site-header" data-header>
        <div className="wrap header__inner">
          <Link
            className="brand"
            href="/"
            aria-label="AfriYouth Innovation Labs home"
          >
            <span className="brand__mark">
              <img src="/brand/logo-mark.svg" alt="" width="46" height="66" />
            </span>
            <span className="brand__text">
              <span className="brand__name">Afri Youth</span>
              <span className="brand__sub">Innovation Labs</span>
            </span>
          </Link>

          <nav className="site-nav" id="site-nav" aria-label="Primary navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                className="site-nav__link"
                href={link.href}
                aria-current={isCurrent(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link
              className="btn btn--gradient btn--sm site-nav__cta"
              href="/contact"
              aria-current={isCurrent("/contact") ? "page" : undefined}
            >
              Get in touch <span aria-hidden="true">↗</span>
            </Link>
          </nav>

          <div className="header__actions">
            <Link
              className="btn btn--primary btn--sm header-cta"
              href="/contact"
              aria-current={isCurrent("/contact") ? "page" : undefined}
            >
              Let's collaborate <span className="btn__icon" aria-hidden="true">↗</span>
            </Link>
            <button
              className="nav-toggle"
              type="button"
              aria-expanded="false"
              aria-controls="site-nav"
              aria-label="Open menu"
              data-nav-toggle
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
        <div className="header__progress" data-scroll-progress aria-hidden="true" />
      </header>
    </>
  );
}