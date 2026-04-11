// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown,Mail } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 animate-gradient bg-[length:400%_400%]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">Kuldip Patel</span>
          </h1>
          <div className="text-2xl sm:text-3xl md:text-4xl text-slate-600 dark:text-slate-300 mb-8">
            <Typewriter
              options={{
                strings: [
                  'Full Stack Developer',
                  'React Expert',
                  'UI/UX Enthusiast',
                  'Problem Solver',
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
            Crafting beautiful, responsive, and high-performance web applications with modern technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700"
            >
              Contact Me
            </motion.button>
          </div>
          <div className="flex gap-6 justify-center mt-12">
            {/* <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </a> */}
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown className="text-slate-400" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;