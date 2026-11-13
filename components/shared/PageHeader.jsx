import React from "react";
import "./variables.css";

// ============================================
// Shared — PageHeader component
// ============================================

/**
 * PageHeader — Standard page header with title and breadcrumbs
 */
export const PageHeader = ({
  title,
  subtitle,
  breadcrumbs = [],
  ...props
}) => {
  return (
    <header className="page-header" {...props}>
      <h1>{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
      {breadcrumbs.length > 0 && (
        <nav aria-label="breadcrumb">
          <ol>
            {breadcrumbs.map((bc) => (
              <li key={bc.url}>
                <a href={bc.url}>{bc.label}</a>
              </li>
            ))}
          </ol>
        </nav>
      )}
    </header>
  );
};

export default {
  PageHeader,
};