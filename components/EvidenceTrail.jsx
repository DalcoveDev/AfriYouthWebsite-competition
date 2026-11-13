"use client";

import { useRef, useState } from "react";

const steps = [
  {
    name: "Discover",
    group: "Understand",
    does: "We identify a challenge with the people who live it, through community engagement and field research.",
    produces: "A defined problem, framed with the community rather than for it.",
  },
  {
    name: "Diagnose",
    group: "Understand",
    does: "We examine root causes, incentives and the systems that keep a problem in place.",
    produces: "A systems view of what is really driving the challenge.",
  },
  {
    name: "Research",
    group: "Understand",
    does: "We generate and analyse evidence — quantitative, qualitative and participatory.",
    produces: "An evidence base that can withstand scrutiny and inform decisions.",
  },
  {
    name: "Design",
    group: "Design",
    does: "We develop human-centred solutions with users, practitioners and decision-makers.",
    produces: "Solution concepts grounded in how people actually live and work.",
  },
  {
    name: "Prototype",
    group: "Design",
    does: "We build, test and refine the idea in the open, learning from failure early.",
    produces: "A tested prototype and a record of what changed.",
  },
  {
    name: "Policy",
    group: "Influence",
    does: "We translate findings into policy recommendations, institutional reforms or business cases.",
    produces: "A practical proposal that a decision-maker can act on.",
  },
  {
    name: "Finance",
    group: "Influence",
    does: "We connect solutions with potential funders, investors and partners.",
    produces: "A credible route to resources and investment readiness.",
  },
  {
    name: "Implement",
    group: "Deliver",
    does: "We pilot the solution in a real setting, with delivery partners and clear ownership.",
    produces: "A live pilot and a plan for delivery.",
  },
  {
    name: "Measure",
    group: "Deliver",
    does: "We evaluate outcomes, capture learning and test what actually changed.",
    produces: "Outcome evidence and a learning report.",
  },
  {
    name: "Scale",
    group: "Deliver",
    does: "We support the expansion of solutions that demonstrate potential.",
    produces: "A scaling strategy, partnerships and the evidence to sustain it.",
  },
];

export default function EvidenceTrail() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);

  const focusStep = (index) => {
    const next = (index + steps.length) % steps.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      focusStep(index + 1);
    }
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      focusStep(index - 1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      focusStep(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      focusStep(steps.length - 1);
    }
  };

  return (
    <section
      className="chapter chapter--process"
      id="chapter-process"
      aria-labelledby="process-title"
    >
      <div className="wrap">
        <div className="chapter__label-row reveal">
          <p className="chapter__label">
            <span>Note 04</span> The process
          </p>
          <p className="chapter__meta">Our method · Not a programme</p>
        </div>

        <div className="process__intro">
          <h2 className="chapter__title reveal" id="process-title">
            One trail.
            <br />
            Ten moves.
          </h2>
          <p className="chapter__lede reveal">
            Research, design, policy and enterprise are usually taught and
            practised apart. We run them as one connected trail — so a question
            can travel all the way to public impact.
          </p>
        </div>

        <div className="process__layout reveal">
          <div
            className="process__steps"
            role="tablist"
            aria-orientation="vertical"
            aria-label="The Evidence Trail"
          >
            {steps.map((item, index) => (
              <button
                type="button"
                key={item.name}
                id={`trail-tab-${index}`}
                className="process__step"
                role="tab"
                aria-selected={active === index}
                aria-controls={`trail-panel-${index}`}
                tabIndex={active === index ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
              >
                <span className="process__step-num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="process__step-name">{item.name}</span>
                <span className="process__step-group">{item.group}</span>
              </button>
            ))}
          </div>

          <div className="process__panels">
            {steps.map((item, index) => (
              <div
                className="process__panel"
                id={`trail-panel-${index}`}
                role="tabpanel"
                aria-labelledby={`trail-tab-${index}`}
                tabIndex={0}
                hidden={active !== index}
                key={item.name}
              >
                <div className="process__panel-inner">
                  <div className="process__panel-top">
                    <span className="process__panel-group">{item.group}</span>
                    <span className="process__panel-count">
                      Step {String(index + 1).padStart(2, "0")} / 10
                    </span>
                  </div>

                  <p className="process__panel-num" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="process__panel-title">{item.name}</h3>
                  <dl className="process__panel-list">
                    <div>
                      <dt>What we do</dt>
                      <dd>{item.does}</dd>
                    </div>
                    <div>
                      <dt>What it produces</dt>
                      <dd>{item.produces}</dd>
                    </div>
                  </dl>

                  <div className="process__panel-foot">
                    <button
                      type="button"
                      className="process__nav"
                      onClick={() => focusStep(index - 1)}
                      aria-label="Previous step"
                    >
                      <span aria-hidden="true">←</span> Previous
                    </button>
                    <div
                      className="process__progress"
                      aria-hidden="true"
                      style={{
                        "--trail-progress": `${((index + 1) / steps.length) * 100}%`,
                      }}
                    >
                      <span />
                    </div>
                    <button
                      type="button"
                      className="process__nav"
                      onClick={() => focusStep(index + 1)}
                      aria-label="Next step"
                    >
                      Next <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="process__note">
          This is how we work, not a claim of ten separate services. Not every
          question needs every step — the method is shaped around the problem.
        </p>
      </div>
    </section>
  );
}
