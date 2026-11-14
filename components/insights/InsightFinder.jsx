"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function InsightFinder({ items, fields, featured }) {
  const [query, setQuery] = useState("");
  const [field, setField] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const haystack = `${item.title} ${item.snippet} ${item.tags}`.toLowerCase();
      const matchesField = !field || haystack.includes(field.toLowerCase());
      const matchesQuery = !q || haystack.includes(q);
      return matchesField && matchesQuery;
    });
  }, [items, field, query]);

  const active = query.trim() !== "" || field !== "";
  const shown = active ? results.slice(0, 5) : featured;

  return (
    <div className="finder">
      <p className="finder__label">Find the work behind a question</p>

      <label className="finder__search">
        <span className="sr-only">Search insights by topic</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search — e.g. agriculture, 2050"
        />
      </label>

      <div className="finder__fields" role="group" aria-label="Filter by field">
        <button
          type="button"
          className="finder__chip"
          aria-pressed={field === ""}
          onClick={() => setField("")}
        >
          All fields
        </button>
        {fields.map((name) => (
          <button
            type="button"
            className="finder__chip"
            key={name}
            aria-pressed={field === name}
            onClick={() => setField(field === name ? "" : name)}
          >
            {name}
          </button>
        ))}
      </div>

      <p className="finder__status" aria-live="polite">
        {active
          ? `${results.length} ${results.length === 1 ? "match" : "matches"}${
              field ? ` in ${field}` : ""
            }`
          : "Start with these"}
      </p>

      <ul className="finder__results">
        {shown.map((item) => (
          <li key={item.id}>
            <Link className="finder__result" href={item.href}>
              <span className="finder__result-text">
                <span className="finder__result-type">{item.type}</span>
                <span className="finder__result-title">{item.title}</span>
              </span>
              <span className="finder__result-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {active && results.length === 0 ? (
        <p className="finder__empty">
          Nothing on that yet.{" "}
          <Link href="/contact?topic=research">Ask us about it</Link>.
        </p>
      ) : null}
    </div>
  );
}
