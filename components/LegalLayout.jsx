import "@/styles/legal.css";

export default function LegalLayout({ eyebrow, title, meta, intro, children }) {
  return (
    <main id="main">
      <section className="legal">
        <div className="wrap legal__wrap">
          <header className="legal__head">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="h1">{title}</h1>
            <p className="legal__meta">{meta}</p>
          </header>

          <div className="legal__body">
            {intro ? <p className="legal__intro">{intro}</p> : null}
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}
