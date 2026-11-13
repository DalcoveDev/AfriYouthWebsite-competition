import Link from "next/link";

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Our work" },
  { href: "/programs", label: "Programs" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <>
      <main id="main">
        <section className="page-hero" aria-labelledby="notfound-title">
          <div className="wrap">
            <div className="page-hero__grid">
              <div className="page-hero__copy">
                <p className="eyebrow">404 · Page not found</p>
                <h1 className="h1" id="notfound-title">
                  This page is <em>still being written.</em>
                </h1>
              </div>
              <div className="page-hero__aside">
                <p className="lede">
                  The link you followed has moved, or it never existed. The work is
                  still here — pick a door and carry on.
                </p>
                <div className="page-hero__meta">
                  <span className="chip">Wrong turn</span>
                  <span className="chip">Kigali · Rwanda</span>
                </div>
                <nav className="page-hero__actions" aria-label="Ways back into the site">
                  <Link className="btn btn--gradient" href="/">
                    Back to the homepage <span className="btn__icon" aria-hidden="true">↗</span>
                  </Link>
                  <Link className="btn btn--outline" href="/contact">
                    Start a conversation
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <section className="section--tight" aria-labelledby="notfound-routes-title">
          <div className="wrap">
            <div className="section-head">
              <div className="section-head__copy">
                <p className="eyebrow">Ways back in</p>
                <h2 className="h2" id="notfound-routes-title">
                  Pick up the thread.
                </h2>
              </div>
              <div className="section-head__side">
                <p>Everything on the site is one step from here.</p>
              </div>
            </div>
            <div className="btn-row">
              {routes.map((route) => (
                <Link className="btn btn--outline btn--sm" href={route.href} key={route.href}>
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band" aria-labelledby="notfound-cta-title">
          <div className="wrap cta-band__inner">
            <div>
              <p className="eyebrow">Still lost?</p>
              <h2 className="h2" id="notfound-cta-title">
                Tell us what you were looking for.
              </h2>
              <p>
                Send a note and we&rsquo;ll point you to the right programme, lab or
                person.
              </p>
            </div>
            <div className="cta-band__actions">
              <Link className="btn btn--primary" href="/contact">
                Start a conversation <span className="btn__icon" aria-hidden="true">↗</span>
              </Link>
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
      </main>
    </>
  );
}
