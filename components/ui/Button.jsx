import React from "react";
import "./variables.css";

// ============================================
// UI — Button component
// ============================================

/** 
 * Button — primary/gradient/secondary styles
 * 
 * Usage:
 *  <Button variant="primary">Click me</Button>
 *  <Button variant="gradient">Gradient</Button>
 *  <Button variant="secondary">Secondary</Button>
 *  <Button variant="outline">Outline</Button>
 *  <Button variant="light">Light</Button>
 */
export const Button = ({
  children,
  className,
  as = "button",
  type = "button",
  variant = "primary",
  ...props
}) => {
  const variantStyles = {
    primary: "btn btn--primary",
    gradient: "btn btn--gradient",
    secondary: "btn btn--secondary",
    light: "btn btn--light",
    outline: "btn btn--outline",
  };

  const classes = [variantStyles[variant] || variantStyles.primary, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
};

export default {
  Button,
};