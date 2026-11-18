"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/brand/Logo";
import { divisions, labs } from "@/lib/content";

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Our work" },
  { href: "/programs", label: "Programs" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
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
            Fueling Innovators for Sustainable Development
          </span>
          <span className="announce__rule" aria-hidden="true" />
          <span className="announce__news">
            The Evidence-to-Impact Accelerator{" "}
            <span className="announce__word">· </span> our flagship product
          </span>
          <Link
            href="/programs#evidence-to-impact"
            aria-label="Explore the Evidence-to-Impact Accelerator"
          >
            Explore <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      <header className="site-header" data-header>
        <div className="wrap header__inner">
          <Logo variant="horizontal" tone="dark" />

          <nav className="site-nav" id="site-nav" aria-label="Primary navigation">
            <details className="nav-drop">
              <summary className="site-nav__link nav-drop__toggle">
                What we do
              </summary>
              <div className="nav-drop__panel">
                <div className="nav-drop__col">
                  <p className="nav-drop__label">The labs</p>
                  <ul>
                    {labs.map((lab) => (
                      <li key={lab.id}>
                        <Link href={`/work#${lab.id}`}>{lab.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="nav-drop__col">
                  <p className="nav-drop__label">Divisions</p>
                  <ul>
                    {divisions.map((division) => (
                      <li key={division.n}>
                        <Link href="/about#divisions">
                          {division.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link className="nav-drop__all" href="/work">
                  See all our work <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </details>
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
              className="btn btn--gradient btn--sm header-cta"
              href="/contact"
              aria-current={isCurrent("/contact") ? "page" : undefined}
            >
              Let&rsquo;s collaborate <span className="btn__icon" aria-hidden="true">↗</span>
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
