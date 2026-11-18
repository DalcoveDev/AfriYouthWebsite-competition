"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function ResearchLibrary({ publications }) {
  const [query, setQuery] = useState("");
  const [series, setSeries] = useState("");

  const categories = useMemo(
    () => [...new Set(publications.map((publication) => publication.category))],
    [publications]
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return publications.filter((publication) => {
      const matchesSeries = !series || publication.category === series;
      const haystack = `${publication.title} ${publication.copy} ${publication.meta} ${publication.category}`
        .toLowerCase();
      return matchesSeries && (!q || haystack.includes(q));
    });
  }, [publications, query, series]);

  return (
    <div className="research">
      <div className="research-toolbar">
        <label className="research-search">
          <span className="sr-only">Search our research</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search reports, series and topics"
          />
        </label>

        <div className="research-filters" role="group" aria-label="Filter by series">
          <button
            type="button"
            className="research-filter"
            aria-pressed={series === ""}
            onClick={() => setSeries("")}
          >
            All reports
          </button>
          {categories.map((category) => (
            <button
              type="button"
              className="research-filter"
              key={category}
              aria-pressed={series === category}
              onClick={() => setSeries(series === category ? "" : category)}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="research-count" aria-live="polite">
          {results.length} {results.length === 1 ? "report" : "reports"}
        </p>
      </div>

      {results.length ? (
        <ul className="research-grid">
          {results.map((publication) => (
            <li key={publication.n}>
              <Link
                className="research-card"
                href={`/contact?topic=research&subject=${encodeURIComponent(
                  publication.title
                )}`}
              >
                <figure className="research-card__media">
                  <img
                    src={publication.image}
                    alt={publication.imageAlt}
                    width={800}
                    height={500}
                    loading="lazy"
                  />
                  <span className="research-card__tag">{publication.category}</span>
                  <span className="research-card__num">№ {publication.n}</span>
                </figure>
                <div className="research-card__body">
                  <p className="research-card__series">{publication.meta}</p>
                  <h3>{publication.title}</h3>
                  <p className="research-card__copy">{publication.copy}</p>
                  <span className="research-card__cta">
                    Request the briefing
                    <span aria-hidden="true">›</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="research-empty">
          <p>
            No report matches “{query}”
            {series ? ` in ${series}` : ""}.
          </p>
          <Link className="text-link" href="/contact?topic=research">
            Ask us about it
          </Link>
        </div>
      )}
    </div>
  );
}
