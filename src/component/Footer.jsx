// src/components/Footer.jsx
import React from 'react';
import { Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-800 py-8 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-600 dark:text-slate-400">
              © 2024 Kuldip Patel. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            {/* <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a> */}
            {/* <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a> */}
            {/* <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
              <Twitter size={20} />
            </a> */}
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="text-center mt-4 text-sm text-slate-500 dark:text-slate-500">
          Made with <Heart size={14} className="inline text-red-500" /> using React & Tailwind
        </div>
      </div>
    </footer>
  );
};

export default Footer;