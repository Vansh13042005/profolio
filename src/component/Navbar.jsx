// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX, HiMoon, HiSun } from 'react-icons/hi';

const Navbar = () => {
  const [isDark, setIsDark] = useState(
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDark]);

  const navLinks = ['Home', 'About', 'Skills', 'Portfolio', 'Resume', 'Contact'];

  return (
    <nav className="fixed w-full z-50 top-0 bg-white/70 dark:bg-darkBg/70 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark bg-clip-text text-transparent">
          DEV.PORTFOLIO
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-lightText dark:text-darkText hover:text-primary-light dark:hover:text-primary-dark transition-colors font-medium">
              {link}
            </a>
          ))}
          <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400">
            {isDark ? <HiSun size={24} /> : <HiMoon size={24} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <button onClick={() => setIsDark(!isDark)} className="p-2 text-slate-600 dark:text-yellow-400">
            {isDark ? <HiSun size={24} /> : <HiMoon size={24} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="dark:text-white">
            {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;