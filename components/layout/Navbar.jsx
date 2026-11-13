import React from "react";
import "./variables.css";

// ============================================
// Layout — Navbar component
// ============================================

/**
 * Navbar — Main site navigation
 */
export const Navbar = ({
  links,
  cta,
  ...props
}) => {
  return (
    <nav className="site-nav" aria-label="Primary navigation" {...props}>
      {links.map((link) => (
        <a
          key={link.href}
          className="site-nav__link"
          href={link.href}
        >
          {link.label}
        </a>
      ))}
      {cta && (
        <a
          className="btn btn--gradient btn--sm site-nav__cta"
          href={cta.href}
        >
          {cta.label}
        </a>
      )}
    </nav>
  );
};

export default {
  Navbar,
};