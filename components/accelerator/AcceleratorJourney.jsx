"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { acceleratorJourney, acceleratorStages } from "@/lib/content";

/**
 * The ten-stage pathway, told as six scroll-connected moments.
 *
 * A dotted trail runs through every step and fills as the reader moves down
 * the page. Each moment is stamped with the white AfriYouth mark, set
 * alternately like footprints, so the journey reads as a walk forward.
 */

export default function AcceleratorJourney({
  id = "evidence-to-impact",
  headingId = "evidence-to-impact-title",
  className = "",
  variant = "dark",
  compact = false,
}) {
  const trackRef = useRef(null);
  const markSrc = variant === "light" ? "/brand/logo-mark-ink.svg" : "/brand/logo-mark-white.svg";

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const steps = Array.from(track.querySelectorAll("[data-journey-step]"));
    if (!steps.length) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = track.getBoundingClientRect();
      const marker = window.innerHeight * 0.52;
      const progress = Math.min(Math.max((marker - rect.top) / Math.max(rect.height, 1), 0), 1);

      track.style.setProperty("--journey-progress", progress.toFixed(4));

      let active = 0;
      let closest = Number.POSITIVE_INFINITY;

      steps.forEach((step, index) => {
        const bounds = step.getBoundingClientRect();
        const middle = bounds.top + bounds.height / 2;
        const distance = Math.abs(middle - marker);
        if (distance < closest) {
          closest = distance;
          active = index;
        }
        step.classList.toggle("is-passed", bounds.top + bounds.height * 0.55 < marker);
      });

      steps.forEach((step, index) => {
        step.classList.toggle("is-current", index === active);
      });
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
  }, []);

  if (compact) {
    return (
      <section
        id={id}
        className={`journey journey--compact ${
          variant === "light" ? "journey--light" : ""
        } ${className}`.trim()}
        aria-labelledby={headingId}
      >
        <div className="wrap">
          <header className="journey__head">
            <div className="journey__head-grid">
              <h2 className="journey__title" id={headingId}>
                One problem. <span>Ten stages.</span> One connected pathway.
              </h2>
              <div className="journey__intro">
                <p>
                  Our Evidence-to-Impact Accelerator connects all six labs — from
                  the first community question to scale.
                </p>
                <p className="journey__grouping">Ten stages, grouped into six moments.</p>
              </div>
            </div>
          </header>

          <ol className="journey-stage-list">
            {acceleratorStages.map((stage) => (
              <li key={stage.n}>
                <span>{stage.n}</span>
                {stage.name}
              </li>
            ))}
          </ol>

          <Link className="journey__cta" href="/programs#evidence-to-impact">
            See the full pathway
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className={`journey ${variant === "light" ? "journey--light" : ""} ${className}`.trim()}
      aria-labelledby={headingId}
    >
      <div className="wrap">
        <header className="journey__head">
          <div className="journey__head-grid">
            <h2 className="journey__title" id={headingId}>
              One problem. <span>Ten stages.</span> A journey you can see.
            </h2>
            <div className="journey__intro">
              <p>
                Follow one community problem from the first question to evidence,
                a tested solution, a policy case, and change in the real world.
              </p>
              <p className="journey__grouping">Ten stages, grouped into six moments.</p>
              <p className="journey__status">
                <span>Framework status</span>
                AfriYouth presents this as its proposed ten-stage methodology.
                Delivery, cohorts and outcomes have not been independently
                verified.
              </p>
            </div>
          </div>
        </header>

        <div className="journey__track" ref={trackRef}>
          <div className="journey__rail" aria-hidden="true">
            <span className="journey__rail-line" />
            <span className="journey__rail-fill" />
          </div>

          <ol className="journey__steps">
            {acceleratorJourney.map((act) => (
              <li className="journey-step" data-journey-step key={act.id}>
                <div className="journey-step__node" aria-hidden="true">
                  <img src={markSrc} alt="" width="46" height="66" />
                  <span>{act.n}</span>
                </div>

                <div className="journey-step__copy">
                  <h3>{act.title}</h3>
                  <p className="journey-step__moment">{act.moment}</p>
                  <p className="journey-step__body">{act.copy}</p>
                  <ul
                    className="journey-step__stages"
                    aria-label={`Stages in this moment: ${act.stages
                      .map((stage) => stage.name)
                      .join(", ")}`}
                  >
                    {act.stages.map((stage) => (
                      <li key={stage.n}>
                        <span>{stage.n}</span>
                        {stage.name}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="journey-step__visual">
                  <figure className="journey-step__frame">
                    <img
                      src={act.image}
                      alt={act.alt}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="journey-step__shade" aria-hidden="true" />
                    <figcaption>
                      <span>{act.n} / VI</span>
                      {act.caption}
                    </figcaption>
                  </figure>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
