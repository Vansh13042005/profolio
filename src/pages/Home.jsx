// src/components/Hero.jsx
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-lightText dark:text-white mb-6">
            Hi, I'm <span className="text-primary-light dark:text-primary-dark">Alex</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
            A Full Stack Developer specializing in building exceptional digital experiences that are fast, accessible, and visually stunning.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-light to-secondary-light text-white font-bold shadow-lg hover:scale-105 transition-transform">
              View Portfolio
            </button>
            <button className="px-8 py-4 rounded-2xl border-2 border-primary-light text-primary-light dark:border-primary-dark dark:text-primary-dark font-bold hover:bg-primary-light/10 transition-all">
              Resume
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-light to-secondary-light rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" 
              alt="Developer" 
              className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;