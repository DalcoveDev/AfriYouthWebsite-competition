import React from "react";

/**
 * SectionHeading — styled section header
 * using Tailwind CSS
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
      className={[ "mb-4", "font-display", "font-medium", "tracking-[-0.04em]", className ].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default {
  SectionHeading,
};