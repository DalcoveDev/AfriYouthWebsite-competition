import React from "react";

/**
 * Button — primary/gradient/secondary styles
 * using Tailwind CSS
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
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    gradient: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700",
    secondary: "bg-gray-800 text-white hover:bg-gray-700",
    light: "bg-white text-indigo-600 hover:bg-gray-50",
    outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white",
  };

  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2";

  const classes = [
    baseClasses,
    variantStyles[variant] || variantStyles.primary,
    className,
  ]
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