// src/pages/PortfolioSection.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const API = "https://profolionode.vanshpatel.in/api/projects";

const PortfolioSection = () => {
  const [filter, setFilter]           = useState('All');
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading]         = useState(true);

  // ── Fetch Projects ──────────────────────────────────────────────────────────
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res  = await fetch(API);
        const data = await res.json();
        const items = (data.data || []).map((p) => ({
          ...p,
          techStack: parseTech(p.tech),
          live: p.link || '#',
        }));
        setPortfolioItems(items);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // ── Parse tech string/array from DB ────────────────────────────────────────
  const parseTech = (techValue) => {
    if (!techValue) return [];
    if (Array.isArray(techValue)) return techValue;
    try {
      const parsed = JSON.parse(techValue);
      if (Array.isArray(parsed)) return parsed;
    } catch {}
    return techValue
      .replace(/[{}"]/g, '')
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);
  };

  // ✅ Dynamic categories — API se jo bhi category aaye
  const uniqueCategories = [...new Set(portfolioItems.map(item => item.category).filter(Boolean))];
  const categories = ['All', ...uniqueCategories];

  const filteredItems = filter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  const totalProjects = portfolioItems.length;

  // ── JSON-LD ─────────────────────────────────────────────────────────────────
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Vansh Patel Portfolio - Web Development Projects",
    "description": "Portfolio of Vansh Patel showcasing React.js projects, full-stack web applications, and software development work.",
    "url": "https://www.vanshpatel.dev/portfolio",
    "numberOfItems": totalProjects,
    "provider": { "@type": "Person", "name": "Vansh Patel", "url": "https://www.vanshpatel.dev" },
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
      { "@type": "ListItem", "position": 1, "name": "Home",      "item": "https://www.vanshpatel.dev" },
      { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://www.vanshpatel.dev/portfolio" }
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
        <title>Portfolio | React Developer & Full Stack Web Developer</title>
        <meta name="title"       content="Vansh Patel Portfolio | React Developer & Full Stack Web Developer" />
        <meta name="description" content="Explore portfolio of Vansh Patel - React Developer, Full Stack Web Developer. View React.js projects, full-stack web applications, and software development work." />
        <meta name="keywords"    content="Vansh Patel portfolio, React developer portfolio, full stack developer portfolio, web developer portfolio, React projects, MERN stack developer" />
        <meta name="robots"      content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author"      content="Vansh Patel" />
        <meta name="language"    content="English" />
        <link rel="canonical"    href="https://www.vanshpatel.dev/portfolio" />
        <meta property="og:type"         content="website" />
        <meta property="og:url"          content="https://www.vanshpatel.dev/portfolio" />
        <meta property="og:title"        content="Vansh Patel Portfolio | React & Full Stack Web Developer" />
        <meta property="og:description"  content="View my portfolio of React.js projects and full-stack web applications." />
        <meta property="og:image"        content="https://www.vanshpatel.dev/og-portfolio.jpg" />
        <meta property="og:image:alt"    content="Vansh Patel Portfolio" />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name"    content="Vansh Patel Portfolio" />
        <meta property="og:locale"       content="en_US" />
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:url"         content="https://www.vanshpatel.dev/portfolio" />
        <meta name="twitter:title"       content="Vansh Patel Portfolio | Web Developer" />
        <meta name="twitter:description" content="React.js and full-stack web development portfolio." />
        <meta name="twitter:image"       content="https://www.vanshpatel.dev/twitter-portfolio.jpg" />
        <meta name="geo.region"          content="IN-GJ" />
        <meta name="geo.placename"       content="Ahmedabad, Gujarat, India" />
        <meta name="theme-color"         content="#2563eb" />
      </Helmet>

      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(portfolioSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

      {/* ── Hero ── */}
      <section
        className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900"
        aria-label="Portfolio Hero Section"
      >
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
            {!loading && (
              <p className="text-slate-500 dark:text-slate-500 max-w-2xl mx-auto mt-2 text-sm">
                {totalProjects}+ projects |{' '}
                {uniqueCategories.map((cat) => {
                  const count = portfolioItems.filter(i => i.category === cat).length;
                  return `${count} ${cat}`;
                }).join(' | ')} applications
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Filter ── */}
      <section
        className="py-8 bg-white dark:bg-slate-900 sticky top-16 z-30 shadow-sm"
        aria-label="Project Filter"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {loading ? (
              // Skeleton buttons while loading
              ['All', 'Cat1', 'Cat2'].map((_, i) => (
                <div key={i} className="w-28 h-10 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
              ))
            ) : (
              categories.map((cat) => {
                const count = cat === 'All'
                  ? portfolioItems.length
                  : portfolioItems.filter(i => i.category === cat).length;

                return (
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
                    {cat} ({count})
                  </button>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800" aria-label="Projects Grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {loading ? (
            // ✅ Skeleton Cards
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg animate-pulse">
                  <div className="h-56 bg-slate-200 dark:bg-slate-700" />
                  <div className="p-6 space-y-3">
                    <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full" />
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-4/5" />
                    <div className="flex gap-2 pt-2">
                      <div className="h-6 w-16 bg-slate-200 dark:bg-slate-700 rounded" />
                      <div className="h-6 w-16 bg-slate-200 dark:bg-slate-700 rounded" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
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
    whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
    className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col"
  >
    {/* ── Image ── */}
    <div className="relative h-52 overflow-hidden">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
          <span className="text-5xl opacity-30">🖥️</span>
        </div>
      )}
    </div>

    {/* ── Content ── */}
    <div className="p-5 flex flex-col flex-1">

      {/* Title */}
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.techStack.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* ── Divider + Links ── */}
      <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-6">
        
        {/* View Code */}
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            View Code
          </a>
        ) : (
          <span className="text-sm font-medium text-slate-300 dark:text-slate-600 cursor-not-allowed">
            View Code
          </span>
        )}

        {/* Live Demo */}
        {project.live && project.live !== '#' ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        ) : (
          <span className="text-sm font-medium text-slate-300 dark:text-slate-600 flex items-center gap-1.5 cursor-not-allowed">
            <ExternalLink size={15} />
            Live Demo
          </span>
        )}

      </div>
    </div>
  </motion.div>
))}
              </motion.div>
            </AnimatePresence>
          )}

          {!loading && filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-6xl mb-4">🔍</p>
              <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">
                No projects found in "{filter}" category.
              </p>
              <button
                onClick={() => setFilter('All')}
                className="mt-4 px-4 py-2 text-sm text-blue-600 hover:underline"
              >
                Show all projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Stats ── */}
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
              <div className="text-4xl font-bold">{uniqueCategories.length}</div>
              <div className="text-white/80">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold">100%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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