import React from "react";
import "./variables.css";

// ============================================
// Layout — Footer component
// ============================================

/**
 * Footer — Site footer with three-column navigation
 */
export const Footer = ({
  links = [],
  focusLinks = [],
  connectLinks = [],
  ...props
}) => {
  return (
    <footer className="site-footer" {...props}>
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__pitch">
            <a href="/" className="brand" aria-label="AfriYouth home">
              <span className="brand__mark">
                <img src="/brand/logo-mark.svg" alt="" />
              </span>
              <span className="brand__text">
                <span className="brand__name">Afri Youth</span>
                <span className="brand__sub">Innovation Labs</span>
              </span>
            </a>
            <p className="footer__tagline">Fueling Innovators for Sustainable Development.</p>
            <p>A research, innovation, and policy consulting firm advancing young people's ideas and evidence-based solutions for Africa's socio-economic transformation.</p>
            <a className="footer__email" href="mailto:hello@afriyouthlabs.org">hello@afriyouthlabs.org</a>
          </div>
          <div className="footer__aside">
            <div className="footer__nav">
              <div>
                <p className="footer__nav-title">Explore</p>
                <ul>
                  {links.map((link) => (
                    <li key={link.href}><a href={link.href}>{link.label}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="footer__nav-title">Our Focus</p>
                <ul>
                  {focusLinks.map((link) => (
                    <li key={link.href}><a href={link.href}>{link.label}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default {
  Footer,
};