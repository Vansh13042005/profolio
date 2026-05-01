import React from 'react';
import { Heart, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

// ✅ Custom SVG icons — lucide-react pe depend nahi
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home',      to: '/' },
    { name: 'About',     to: '/about' },
    { name: 'Skills',    to: '/skills' },
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'Resume',    to: '/resume' },
    { name: 'Contact',   to: '/contact' },
  ];

  const services = [
    'React.js Development',
    'Node.js & Express APIs',
    'Full Stack Web Apps',
    'Database Design',
    'REST API Development',
    'Responsive Web Design',
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">

      {/* ── Main Footer ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ── Brand ── */}
          <div className="space-y-4">
            <NavLink to="/" className="inline-block">
              <span className="text-2xl font-bold gradient-text">VP</span>
            </NavLink>
            <p className="text-slate-400 text-sm leading-relaxed">
              Designed and developed with passion and creativity.
            </p>
            {/* ✅ Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/Vansh13042005"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href="https://linkedin.com/in/patelvansh13"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 text-sm group"
                  >
                    <ChevronRight
                      size={14}
                      className="text-blue-500 group-hover:translate-x-1 transition-transform duration-200"
                    />
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-2 text-slate-400 text-sm">
                  <ChevronRight size={14} className="text-blue-500 flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Get In Touch ── */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Get In Touch</h3>
            <ul className="space-y-5">
              <li>
                <a
                  href="mailto:patelvansh1305@gmail.com"
                  className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/40 transition-colors">
                    <Mail size={15} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Email</p>
                    <p className="text-sm">patelvansh1305@gmail.com</p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="tel:+919023954043"
                  className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/40 transition-colors">
                    <Phone size={15} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Phone</p>
                    <p className="text-sm">+91 9023954043</p>
                  </div>
                </a>
              </li>

              <li className="flex items-start gap-3 text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={15} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Location</p>
                  <p className="text-sm">Ahmedabad, Gujarat, India</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col items-center gap-1 text-center">
          <p className="text-sm text-slate-500">
            © {currentYear} Vansh Patel | All rights reserved
          </p>
          <p className="text-sm text-slate-500">
            Made with <Heart size={13} className="inline text-red-500 mx-1" /> by{' '}
            <span className="font-semibold text-white">Vansh Patel</span>
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;