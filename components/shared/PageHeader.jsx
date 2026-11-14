import React from "react";

/**
 * PageHeader — Standard page header with title and breadcrumbs
 * using Tailwind CSS
 */

export const PageHeader = ({
  title,
  subtitle,
  breadcrumbs = [],
  ...props
}) => {
  return (
    <header className="py-8 border-b border-border/50 backdrop-blur-md" {...props}>
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-display font-bold tracking-[-0.04em] mb-2">{title}</h1>
        {subtitle && <p className="text-indigo-400/60 mb-6">{subtitle}</p>}
        {breadcrumbs.length > 0 && (
          <nav aria-label="breadcrumb" className="space-y-2">
            <ol className="flex space-x-1">
              {breadcrumbs.map((bc) => (
                <li key={bc.url}>
                  <a href={bc.url} className="text-indigo-600 hover:text-indigo-800 transition-colors">
                    {bc.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </header>
  );
};

export default {
  PageHeader,
};