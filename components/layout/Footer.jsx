import React from "react";

/**
 * Footer — Site footer with three-column navigation
 * using Tailwind CSS
 */

export const Footer = ({
  links = [],
  focusLinks = [],
  connectLinks = [],
  ...props
}) => {
  return (
    <footer className="bg-indigo-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <a href="/" className="flex items-center gap-2 text-indigo-100 font-display font-bold tracking-[-0.035em] mb-4" aria-label="AfriYouth home">
              <span>Afri Youth</span>
              <span className="text-indigo-400">Innovation Labs</span>
            </a>
            <p className="text-indigo-400/60 mb-4">Fueling Innovators for Sustainable Development.</p>
            <p className="text-indigo-400/50 text-sm mb-6">
              A research, innovation and policy lab advancing young people's ideas and evidence-based solutions for Africa's socio-economic transformation.
            </p>
            <a href="mailto:hello@afriyouthlabs.org" className="text-indigo-300 hover:text-white font-display font-medium underline" aria-label="Email AfriYouth">
              hello@afriyouthlabs.org
            </a>
          </div>
          <div>
            <p className="text-indigo-400/60 font-semibold text-xs tracking-[0.15em] text-transform-uppercase mb-4">Explore</p>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}><a href={link.href} className="text-indigo-400 hover:text-white transition-colors text-sm">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-indigo-400/60 font-semibold text-xs tracking-[0.15em] text-transform-uppercase mb-4">Our Focus</p>
            <ul className="space-y-2">
              {focusLinks.map((link) => (
                <li key={link.href}><a href={link.href} className="text-indigo-400 hover:text-white transition-colors text-sm">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-indigo-400/60 font-semibold text-xs tracking-[0.15em] text-transform-uppercase mb-4">Contact</p>
            <ul className="space-y-2">
              {connectLinks.map((link) => (
                <li key={link.href}><a href={link.href} className="text-indigo-400 hover:text-white transition-colors text-sm">{link.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-indigo-800/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-indigo-400/50 text-sm">2026 Afri Youth Innovation Labs</p>
          <div className="flex gap-2">
            {['twitter', 'linkedin', 'github'].map((platform) => (
              <a
                key={platform}
                href={`https://${platform}.com`}
                className="text-indigo-400 hover:text-white p-2 rounded-md transition-colors"
                aria-label={`${platform} profile`}
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default {
  Footer,
};