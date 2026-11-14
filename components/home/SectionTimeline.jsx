"use client";

import { useEffect, useRef, useState } from "react";

/**
 * SectionTimeline — sticky chapter bar for the homepage.
 *
 * Sits directly under the site header and tracks which chapter is in view.
 * On narrow screens the links scroll horizontally inside the bar, and the
 * active link is kept centred as the reader moves down the page.
 */
export default function SectionTimeline({ sections = [] }) {
  const [active, setActive] = useState(sections[0]?.id);
  const listRef = useRef(null);

  useEffect(() => {
    if (!sections.length) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const marker = window.scrollY + window.innerHeight * 0.38;
      let current = sections[0].id;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        const top = element.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = section.id;
      }

      setActive(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [sections]);

  // Keep the active chapter visible when the bar itself scrolls sideways.
  useEffect(() => {
    const list = listRef.current;
    if (!list || !active) return;
    if (list.scrollWidth <= list.clientWidth) return;

    const link = list.querySelector(`[data-section="${active}"]`);
    if (!link) return;

    const left = link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2;
    list.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }, [active]);

  if (!sections.length) return null;

  return (
    <div className="chapter-bar" data-chapter-bar>
      <nav className="chapter-bar__inner wrap" aria-label="Homepage sections">
        <ol className="chapter-bar__list" ref={listRef}>
          {sections.map((section) => (
            <li className="chapter-bar__item" key={section.id}>
              <a
                className="chapter-bar__link"
                href={`#${section.id}`}
                data-section={section.id}
                aria-current={active === section.id ? "location" : undefined}
              >
                <span className="chapter-bar__label">{section.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
