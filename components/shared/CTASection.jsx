import React from "react";
import "./variables.css";

// ============================================
// Shared — CTASection component
// ============================================

/**
 * CTASection — Call to action section
 */
export const CTASection = ({
  title,
  description,
  primaryCTA = {},
  secondaryCTA = {},
  ...props
}) => {
  return (
    <section className="cta-section" {...props}>
      <div className="cta-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="cta-buttons">
          {primaryCTA.label && (
            <a href={primaryCTA.href} className="btn btn--primary">
              {primaryCTA.label}
            </a>
          )}
          {secondaryCTA.label && (
            <a href={secondaryCTA.href} className="btn btn--outline">
              {secondaryCTA.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default {
  CTASection,
};