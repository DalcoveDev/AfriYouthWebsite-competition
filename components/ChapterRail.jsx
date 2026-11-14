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
    <nav className="fixed top-1/2 -translate-y-1/2 right-0 z-50 w-16 h-full border-l border-border/50 backdrop-blur-lg p-4 md:hidden">
      <ol className="trail-rail__list space-y-1">
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <a
              className={`
                trail-rail__link block rounded-md p-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors
                ${active === chapter.id ? "bg-indigo-50" : ""}
                ${active === chapter.id ? "text-indigo-600" : ""}
              `}
              href={`#${chapter.id}`}
              aria-current={active === chapter.id ? "true" : undefined}
            >
              <span className="trail-rail__num block mb-0.5">{chapter.n}</span>
              <span className="trail-rail__dot w-1.5 h-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
              <span className="trail-rail__label text-indigo-500/60 text-xs uppercase tracking-wider">{chapter.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}