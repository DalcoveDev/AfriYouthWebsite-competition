"use client";

import { useEffect, useState } from "react";

const chapters = [
  { id: "chapter-challenge", n: "01", label: "The challenge" },
  { id: "chapter-belief", n: "02", label: "The belief" },
  { id: "chapter-response", n: "03", label: "The response" },
  { id: "chapter-process", n: "04", label: "The process" },
  { id: "chapter-possibilities", n: "05", label: "The possibilities" },
  { id: "chapter-action", n: "06", label: "The action" },
];

export default function ChapterRail() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="trail-rail" aria-label="Homepage chapters">
      <ol className="trail-rail__list">
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <a
              className="trail-rail__link"
              href={`#${chapter.id}`}
              aria-current={active === chapter.id ? "true" : undefined}
            >
              <span className="trail-rail__num">{chapter.n}</span>
              <span className="trail-rail__dot" aria-hidden="true" />
              <span className="trail-rail__label">{chapter.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
