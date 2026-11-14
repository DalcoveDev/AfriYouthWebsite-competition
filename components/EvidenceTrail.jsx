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
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <div className="process__label-row mb-6">
            <p className="chapter__label text-indigo-600">
              <span>Note 04</span> The process
            </p>
            <p className="text-indigo-500/60 text-sm">Our method · Not a programme</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-display font-bold tracking-[-0.052em] mb-4" id="process-title">
            One trail.
            <br />
            Ten moves.
          </h2>
          <p className="text-indigo-600/80 leading-relaxed mb-8">
            Research, design, policy and enterprise are usually taught and
            practised apart. We run them as one connected trail — so a question
            can travel all the way to public impact.
          </p>
        </div>

        <div className="space-y-8">
          <div className="process__layout">
            <div
              className="process__steps space-y-2"
              role="tablist"
              aria-orientation="vertical"
              aria-label="The Evidence Trail"
            >
              {steps.map((item, index) => (
                <button
                  type="button"
                  key={item.name}
                  id={`trail-tab-${index}`}
                  className={`
                    process__step flex items-center gap-4 rounded-lg border p-4
                    transition-colors
                    ${active === index ? "bg-indigo-50 border-indigo-500" : "border-border/50 text-indigo-600"}
                    ${active === index ? "text-indigo-600" : "text-indigo-500/60"}
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
                  `}
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
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center font-medium text-indigo-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 flex min-w-0 process__step-name">{item.name}</span>
                  <span className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-medium">
                    {item.group}
                  </span>
                </button>
              ))}
            </div>

            <div className="process__panels mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {steps.map((item, index) => (
                <div
                  key={item.name}
                  id={`trail-panel-${index}`}
                  className={`
                    process__panel rounded-lg border p-6
                    ${active !== index ? "opacity-0 pointer-events-none" : ""}
                  `}
                  role="tabpanel"
                  aria-labelledby={`trail-tab-${index}`}
                  tabIndex={0}
                  hidden={active !== index}
                >
                  <div className="process__panel-top mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <span className="text-indigo-500/60 text-sm font-medium uppercase tracking-wider">{item.group}</span>
                    <span className="text-indigo-600 font-medium">
                      Step {String(index + 1).padStart(2, "0")} / 10
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-medium text-indigo-600 mb-3">{item.name}</h3>

                  <dl className="space-y-2 text-indigo-600/80">
                    <div>
                      <dt className="font-display font-medium">What we do</dt>
                      <dd>{item.does}</dd>
                    </div>
                    <div>
                      <dt className="font-display font-medium">What it produces</dt>
                      <dd>{item.produces}</dd>
                    </div>
                  </dl>

                  <div className="mt-4 pt-4 border-t border-indigo-100/30">
                    <button
                      type="button"
                      className="process__nav inline-flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                      onClick={() => focusStep(index - 1)}
                      aria-label="Previous step"
                    >
                      <span aria-hidden="true">←</span> Previous
                    </button>

                    <div className="mt-3 flex h-2 w-full rounded-full bg-indigo-100 overflow-hidden">
                      <span
                        className="h-full bg-indigo-600 rounded-full transition-width ease-linear"
                        style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                        aria-hidden="true"
                      /></span>
                    </div>

                    <button
                      type="button"
                      className="process__nav inline-flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                      onClick={() => focusStep(index + 1)}
                      aria-label="Next step"
                    >
                      Next <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-indigo-600/80">
            This is how we work, not a claim of ten separate services. Not every
            question needs every step — the method is shaped around the problem.
          </p>
        </div>
      </div>
    </section>
  );
}