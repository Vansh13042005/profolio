import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  ExternalLink, Filter } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { portfolioItems } from '../data/portfolioData';

const PortfolioSection = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'React', 'Fullstack'];

  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  // Calculate portfolio stats
  const totalProjects = portfolioItems.length;
  const reactProjects = portfolioItems.filter(item => item.category === 'React').length;
  const fullstackProjects = portfolioItems.filter(item => item.category === 'Fullstack').length;

  // JSON-LD Structured Data for Portfolio Page
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Vansh Patel Portfolio - Web Development Projects",
    "description": "Portfolio of Vansh Patel showcasing React.js projects, full-stack web applications, and software development work.",
    "url": "https://www.vanshpatel.dev/portfolio",
    "numberOfItems": totalProjects,
    "provider": {
      "@type": "Person",
      "name": "Vansh Patel",
      "url": "https://www.vanshpatel.dev"
    },
    "itemListElement": portfolioItems.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        "url": project.live,
        "image": project.image,
        "keywords": project.techStack.join(", ")
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.vanshpatel.dev"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Portfolio",
        "item": "https://www.vanshpatel.dev/portfolio"
      }
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vansh Patel",
    "url": "https://www.vanshpatel.dev",
    "jobTitle": "Full Stack Developer",
    "knowsAbout": ["React.js", "Node.js", "JavaScript", "Full Stack Development", "Web Applications"]
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Portfolio | React Developer & Full Stack Web Developer</title>
        <meta name="title" content="Vansh Patel Portfolio | React Developer & Full Stack Web Developer" />
        <meta name="description" content="Explore portfolio of Vansh Patel - React Developer, Full Stack Web Developer. View React.js projects, full-stack web applications, and software development work. 50+ projects completed." />
        <meta name="keywords" content="Vansh Patel portfolio, React developer portfolio, full stack developer portfolio, web developer portfolio, React projects, full stack projects, web development portfolio, frontend developer, backend developer, software developer portfolio, best web developer portfolio, React JS portfolio, Node.js projects, MERN stack developer" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Vansh Patel" />
        <meta name="language" content="English" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.vanshpatel.dev/portfolio" />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vanshpatel.dev/portfolio" />
        <meta property="og:title" content="Vansh Patel Portfolio | React & Full Stack Web Developer" />
        <meta property="og:description" content="View my portfolio of React.js projects and full-stack web applications. 50+ projects completed with modern technologies." />
        <meta property="og:image" content="https://www.vanshpatel.dev/og-portfolio.jpg" />
        <meta property="og:image:alt" content="Vansh Patel Portfolio - React and Full Stack Projects" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Vansh Patel Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.vanshpatel.dev/portfolio" />
        <meta name="twitter:title" content="Vansh Patel Portfolio | Web Developer" />
        <meta name="twitter:description" content="React.js and full-stack web development portfolio. View my best projects and work." />
        <meta name="twitter:image" content="https://www.vanshpatel.dev/twitter-portfolio.jpg" />
        
        {/* Verification Tags */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_SEARCH_CONSOLE_CODE" />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />
        
        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#2563eb" />
      </Helmet>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(portfolioSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900" aria-label="Portfolio Hero Section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Web Developer Portfolio</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
              Showcasing my best React.js projects and full-stack web applications
            </p>
            <p className="text-slate-500 dark:text-slate-500 max-w-2xl mx-auto mt-2 text-sm">
              {totalProjects}+ projects | {reactProjects} React apps | {fullstackProjects} Full-stack applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white dark:bg-slate-900 sticky top-16 z-30 shadow-sm" aria-label="Project Filter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
                aria-label={`Filter ${cat} projects`}
              >
                {cat === 'All' && <Filter size={16} />}
                {cat}
                {cat !== 'All' && ` (${cat === 'React' ? reactProjects : fullstackProjects})`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800" aria-label="Projects Grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="relative h-56 overflow-hidden group">
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.category} project by Vansh Patel`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {project.category && (
                      <span className="absolute top-3 right-3 px-2 py-1 text-xs bg-blue-600 text-white rounded">
                        {project.category}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                       View Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-600 dark:text-slate-400">No projects found in this category. Please check other categories.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600" aria-label="Portfolio Statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold">{totalProjects}+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold">30+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold">{categories.length - 1}</div>
              <div className="text-white/80">Technologies</div>
            </div>
            <div>
              <div className="text-4xl font-bold">100%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-slate-900" aria-label="Call to Action">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Need a Web Developer for Your Project?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
              I'm available for freelance work. Let's discuss your React.js or full-stack web development project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Hire Me for Your Project
                </motion.button>
              </a>
              <a href="https://wa.me/917874369355" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  WhatsApp Chat
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;