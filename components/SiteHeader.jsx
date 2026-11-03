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
          <span className="announce__dot" aria-hidden="true" />
          <span>
            Applications open <span className="announce__word">for the</span> AfriYouth
            Research Fellowship, Cohort 01
          </span>
          <Link
            href="/programs#programmes"
            aria-label="Explore the AfriYouth Research Fellowship"
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
            <svg
              className="brand__mark"
              viewBox="0 0 48 48"
              aria-hidden="true"
              focusable="false"
            >
              <rect width="48" height="48" rx="14" fill="#0d251d" />
              <path d="M24 7c9.39 0 17 7.61 17 17h-9.5c0-4.14-3.36-7.5-7.5-7.5V7Z" fill="#dff06a" />
              <path d="M41 24c0 9.39-7.61 17-17 17v-9.5c4.14 0 7.5-3.36 7.5-7.5H41Z" fill="#e9592e" />
              <path d="M24 41c-9.39 0-17-7.61-17-17h9.5c0 4.14 3.36 7.5 7.5 7.5V41Z" fill="#faf7ef" />
              <path d="M7 24C7 14.61 14.61 7 24 7v9.5c-4.14 0-7.5 3.36-7.5 7.5H7Z" fill="#b9d8e6" />
              <circle cx="24" cy="24" r="4.5" fill="#0d251d" />
            </svg>
            <span className="brand__text">
              <span className="brand__name">AfriYouth</span>
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
              className="btn btn--primary btn--sm site-nav__cta"
              href="/contact"
              aria-current={isCurrent("/contact") ? "page" : undefined}
            >
              Start a conversation <span aria-hidden="true">↗</span>
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
      </header>
    </>
  );
}
