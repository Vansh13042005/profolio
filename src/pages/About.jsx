// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Server } from 'lucide-react';

const About = () => {
  const skills = ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Express.js', 'Python'];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
                alt="Profile"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Passionate Full Stack Developer
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              With over 5 years of experience in web development, I specialize in building 
              robust and scalable applications. I love turning complex problems into simple, 
              elegant solutions. My focus is on creating seamless user experiences with clean, 
              maintainable code.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <Code2 className="text-blue-600" size={24} />
                <span className="text-slate-700 dark:text-slate-300">Clean Code</span>
              </div>
              <div className="flex items-center space-x-3">
                <Server className="text-purple-600" size={24} />
                <span className="text-slate-700 dark:text-slate-300">REST APIs</span>
              </div>
              <div className="flex items-center space-x-3">
                <Database className="text-blue-600" size={24} />
                <span className="text-slate-700 dark:text-slate-300">Database Design</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="text-purple-600" size={24} />
                <span className="text-slate-700 dark:text-slate-300">Responsive Design</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;