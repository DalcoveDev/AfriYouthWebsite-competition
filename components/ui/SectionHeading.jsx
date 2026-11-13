import React from "react";
import "./variables.css";

// ============================================
// UI — SectionHeading component
// ============================================

/**
 * SectionHeading — styled section header
 * Renders an h2 or h3 based on level prop
 */
export const SectionHeading = ({
  children,
  className,
  level = 2,
  ...props
}) => {
  const Tag = `h${level}`;
  return (
    <Tag
      className={[ "section-head__copy", className ].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default {
  SectionHeading,
};