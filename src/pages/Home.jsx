// src/pages/HomePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Database, Layout, Server } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import { portfolioItems } from '../data/portfolioData';
import SEO from '../component/SEO';
import { SITE } from '../config/seo';

const HomePage = () => {
  const featuredProjects = portfolioItems.slice(0, 3);

  /* ── Page-specific JSON-LD ── */
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${SITE.name} – Full Stack Developer Portfolio`,
    url: SITE.url,
    description: 'Portfolio of Vansh Patel, Full Stack Developer specialising in React.js, Node.js, and JavaScript.',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE.url}/portfolio?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Full Stack Development Services',
    provider: { '@type': 'Person', name: SITE.name, url: SITE.url },
    serviceType: [
      'React.js Development',
      'Node.js & Express API Development',
      'Full Stack Web Applications',
      'REST API Development',
      'Database Design & Development',
    ],
    areaServed: 'Worldwide',
    description: 'Professional full stack development services including React.js frontend, Node.js backend, REST APIs, and database design.',
  };

  return (
    <>
      <SEO page="home" schema={[websiteSchema, serviceSchema]} />

      {/* ── Hero ── */}
      <section
        className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden"
        aria-label="Hero Section"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 animate-gradient bg-[length:400%_400%]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full mb-6"
            >
              <Code2 size={16} className="text-blue-600" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Available for work
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Vansh Patel</span>
            </h1>

            <div className="text-2xl sm:text-3xl md:text-4xl text-slate-600 dark:text-slate-300 mb-8">
              <Typewriter
                options={{
                  strings: [
                    'Full Stack Developer',
                    'React.js Developer',
                    'Node.js Developer',
                    'JavaScript Expert',
                    'Problem Solver',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
              I craft beautiful, responsive, and high-performance web applications using{' '}
              <strong className="text-blue-600">React.js</strong>,{' '}
              <strong className="text-blue-600">Node.js</strong>, and{' '}
              <strong className="text-blue-600">modern JavaScript</strong>.
              Based in Ahmedabad, available worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  aria-label="View Vansh Patel's portfolio"
                >
                  View My Work
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700"
                  aria-label="Contact Vansh Patel"
                >
                  Let's Connect
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          aria-label="Scroll down"
        >
          <ArrowDown className="text-slate-400" size={32} />
        </motion.div>
      </section>

      {/* ── Services Preview ── */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800" aria-label="Services Section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">What I Do</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className="text-slate-600 dark:text-slate-400 mt-4">
              Professional full stack development services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Layout,   title: 'React.js Development',    desc: 'Responsive, modern UI components and single-page applications' },
              { icon: Server,   title: 'Node.js & Express',        desc: 'Scalable REST APIs and backend services' },
              { icon: Database, title: 'Database Design',          desc: 'Efficient MySQL & MongoDB architecture' },
              { icon: Code2,    title: 'Full Stack Projects',      desc: 'End-to-end web applications built for performance' },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <service.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="py-20" aria-label="Featured Projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className="text-slate-600 dark:text-slate-400 mt-4">Some of my best work</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} – project screenshot by Vansh Patel`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                    width="400"
                    height="192"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all"
                aria-label="View all projects by Vansh Patel"
              >
                View All Projects
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;