import React from "react";

/**
 * Navbar — Main site navigation
 * using Tailwind CSS
 */

export const Navbar = ({
  links,
  cta,
  ...props
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-md transition-colors" style={{ backgroundColor: "rgba(251, 250, 255, 0.86)" }} aria-label="Primary navigation" {...props}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2 text-indigo-600 font-display font-bold tracking-[-0.035em]" aria-label="AfriYouth home">
          <span>Afri Youth</span>
          <span className="text-indigo-600">Innovation Labs</span>
        </a>
        
        <div className="hidden md:block gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-indigo-600 font-medium transition-colors hover:text-indigo-800"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {cta && (
            <a
              className="btn btn--gradient btn--sm"
              href={cta.href}
            >
              {cta.label}
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default {
  Navbar,
};