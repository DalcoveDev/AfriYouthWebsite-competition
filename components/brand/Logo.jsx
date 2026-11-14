import Link from "next/link";

/**
 * Logo — AfriYouth Innovation Labs brand lockup.
 *
 * Uses the defined brand assets (Brand Guidelines PDF):
 *   • Horizontal / "full" logo — mark + wordmark
 *   • Vertical logo — mark above wordmark + tagline
 *   • Mark — the symbol on its own
 *
 * Props
 *   variant: "horizontal" | "vertical" | "mark"
 *   tone:    "dark" (gradient mark, ink text) | "light" (white mark, white text)
 *            | "blue" (blue mark, ink text) | "ink" (dark mark, ink text)
 *   withTagline: show "Fueling Innovators for Sustainable Development"
 *   href:    link target (pass null to render a non-link element)
 */

const MARKS = {
  dark: "/brand/logo-mark.svg",
  light: "/brand/logo-mark-white.svg",
  blue: "/brand/logo-mark-blue.svg",
  ink: "/brand/logo-mark-ink.svg",
};

export default function Logo({
  variant = "horizontal",
  tone = "dark",
  withTagline = false,
  href = "/",
  className = "",
  ...props
}) {
  const markSrc = MARKS[tone] || MARKS.dark;
  const classes = [
    "brand",
    tone === "light" ? "brand--light" : "",
    variant === "vertical" ? "brand--vertical" : "",
    variant === "mark" ? "brand--mark-only" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span className="brand__mark">
        <img
          src={markSrc}
          alt=""
          width={variant === "vertical" ? "64" : "46"}
          height={variant === "vertical" ? "92" : "66"}
        />
      </span>
      {variant !== "mark" && (
        <span className="brand__text">
          {/* Wordmark follows the guidelines: "Afri Youth" / "Innovation" (blue) / "Labs" */}
          <span className="brand__name">Afri Youth</span>
          <span className="brand__sub">Innovation</span>
          <span className="brand__sub brand__word-last">Labs</span>
          {withTagline && (
            <span className="brand__tagline">
              Fueling Innovators for Sustainable Development
            </span>
          )}
        </span>
      )}
    </>
  );

  if (!href) {
    return (
      <span className={classes} {...props}>
        {content}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
      aria-label="AfriYouth Innovation Labs home"
      {...props}
    >
      {content}
    </Link>
  );
}
