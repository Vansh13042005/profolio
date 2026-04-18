import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Database, Layout, Server } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { portfolioItems } from '../data/portfolioData';

const HomePage = () => {
  const featuredProjects = portfolioItems.slice(0, 3);

  // JSON-LD Structured Data for Person/Portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vansh Patel",
    "url": "https://www.vanshpatel.dev",
    "jobTitle": "Full Stack Developer",
    "description": "Full Stack Developer specializing in React, Node.js, and modern web technologies. Building responsive, high-performance web applications.",
    "image": "https://www.vanshpatel.dev/profile.jpg",
    "sameAs": [
      "https://github.com/vanshpatel",
      "https://linkedin.com/in/vanshpatel",
      "https://twitter.com/vanshpatel"
    ],
    "knowsAbout": ["React", "Node.js", "JavaScript", "TypeScript", "Tailwind CSS", "MongoDB", "Express.js"],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Your University Name"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vansh Patel - Full Stack Developer Portfolio",
    "url": "https://www.vanshpatel.dev",
    "description": "Portfolio of Vansh Patel, Full Stack Developer specializing in React, Node.js, and modern web technologies.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.vanshpatel.dev/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development Services",
    "provider": {
      "@type": "Person",
      "name": "Vansh Patel",
      "url": "https://www.vanshpatel.dev"
    },
    "serviceType": ["Frontend Development", "Backend Development", "Full Stack Development", "Database Design"],
    "areaServed": "Worldwide",
    "description": "Professional web development services including React frontend, Node.js backend, and full-stack applications."
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Vansh Patel | Full Stack Developer - React & Node.js Expert</title>
        <meta name="title" content="Vansh Patel | Full Stack Developer - React & Node.js Expert" />
        <meta name="description" content="Vansh Patel - Full Stack Developer specializing in React, Node.js, JavaScript, and modern web technologies. View my portfolio and projects. Available for freelance work." />
        <meta name="keywords" content="Vansh Patel, Full Stack Developer, React Developer, Node.js Developer, Web Developer Portfolio, JavaScript Developer, Frontend Developer, Backend Developer, Freelance Developer, Hire React Developer" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Vansh Patel" />
        <meta name="language" content="English" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.vanshpatel.dev" />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vanshpatel.dev" />
        <meta property="og:title" content="Vansh Patel | Full Stack Developer Portfolio" />
        <meta property="og:description" content="Full Stack Developer specializing in React, Node.js, and modern web technologies. View my projects and get in touch for freelance work." />
        <meta property="og:image" content="https://www.vanshpatel.dev/og-image.jpg" />
        <meta property="og:image:alt" content="Vansh Patel - Full Stack Developer Portfolio" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Vansh Patel Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.vanshpatel.dev" />
        <meta name="twitter:title" content="Vansh Patel | Full Stack Developer" />
        <meta name="twitter:description" content="Full Stack Developer specializing in React, Node.js, and modern web technologies." />
        <meta name="twitter:image" content="https://www.vanshpatel.dev/twitter-image.jpg" />
        
        {/* Verification Tags */}
        <meta name="google-site-verification" content="5xpYf9seCnaC4Hb4ep3OG28kyajDwYjH73axtF5UpBY" />
        
        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#2563eb" />
      </Helmet>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden" aria-label="Hero Section">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 animate-gradient bg-[length:400%_400%]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full mb-6"
            >
              <Code2 size={16} className="text-blue-600" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Available for freelance work</span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="gradient-text">Vansh Patel</span>
            </h1>
            <div className="text-2xl sm:text-3xl md:text-4xl text-slate-600 dark:text-slate-300 mb-8">
              <Typewriter
                options={{
                  strings: [
                    'Full Stack Developer',
                    'React Developer',
                    'Node.js Developer',
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
              I craft beautiful, responsive, and high-performance web applications that solve real-world problems.
              Specializing in <strong className="text-blue-600">React</strong>, <strong className="text-blue-600">Node.js</strong>, and modern JavaScript.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  aria-label="View my portfolio"
                >
                  View My Work
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700"
                  aria-label="Contact me"
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

      {/* Services Preview */}
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
            <p className="text-slate-600 dark:text-slate-400 mt-4">Professional web development services</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Layout, title: 'Frontend Development', desc: 'Modern, responsive interfaces with React & Tailwind CSS' },
              { icon: Server, title: 'Backend Development', desc: 'Scalable APIs with Node.js & Express' },
              { icon: Database, title: 'Database Design', desc: 'Efficient MongoDB & PostgreSQL architecture' },
              { icon: Code2, title: 'Full Stack Development', desc: 'End-to-end web application development' },
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

      {/* Featured Projects Preview */}
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
                    alt={`${project.title} - project screenshot`} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
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
                aria-label="View all projects"
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