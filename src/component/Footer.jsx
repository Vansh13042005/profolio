import React from 'react';
import {  Heart } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <NavLink to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold gradient-text">Vansh Patel</span>
            </NavLink>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Full Stack Developer crafting digital excellence
            </p>
          </div>
        </div>
        <div className="text-center mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {currentYear} Vansh Patel. Made with <Heart size={14} className="inline text-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;