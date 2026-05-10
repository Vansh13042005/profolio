// src/components/Projects.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// ── API URL ─────────────────────────────────────────────────────────────────
const API_URL = 'https://profolionode.vanshpatel.in/api/projects';
const CACHE_KEY = 'portfolio_projects';
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// ── Skeleton Card ────────────────────────────────────────────────────────────
const SkeletonCard = () => (
  <div className="bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg animate-pulse">
    <div className="h-48 bg-slate-200 dark:bg-slate-700" />
    <div className="p-6">
      <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-3" />
      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full mb-2" />
      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6 mb-4" />
      <div className="flex gap-2 mb-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-6 w-16 bg-slate-200 dark:bg-slate-700 rounded" />
        ))}
      </div>
      <div className="h-4 w-16 bg-slate-200 dark:bg-slate-700 rounded" />
    </div>
  </div>
);

// ── Projects Component ────────────────────────────────────────────────────────
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProjects = async () => {
      // ── 1. Show cached data instantly if available ──
      try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_TTL) {
            setProjects(data);
            buildCategories(data);
            setLoading(false);
            return; // skip API call
          }
        }
      } catch (_) {}

      // ── 2. Fetch from API ──
      try {
        const res = await fetch(API_URL, { signal: controller.signal });
        if (!res.ok) throw new Error('Failed to load projects');
        const json = await res.json();
        const data = json.data || json || [];

        setProjects(data);
        buildCategories(data);

        // Cache it
        sessionStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ data, timestamp: Date.now() })
        );
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
    return () => controller.abort();
  }, []);

  const buildCategories = (data) => {
    const cats = ['All', ...new Set(data.map((p) => p.category).filter(Boolean))];
    setCategories(cats);
  };

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* ── Filter Tabs ── */}
        {!loading && !error && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === cat
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({projects.filter((p) => p.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        )}

        {/* ── Error ── */}
        {error && (
          <div className="text-center py-16">
            <p className="text-red-500 dark:text-red-400 text-lg">{error}</p>
            <p className="text-slate-500 mt-2 text-sm">Please try refreshing the page.</p>
          </div>
        )}

        {/* ── Skeleton Loading (3 cards) ── */}
        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* ── Project Cards ── */}
        {!loading && !error && (
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.length === 0 ? (
                <div className="col-span-3 text-center py-16 text-slate-400">
                  No projects found in this category.
                </div>
              ) : (
                filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        loading="lazy"
                      />
                      {/* Category badge */}
                      {project.category && (
                        <span className="absolute top-3 right-3 px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-600/90 text-white backdrop-blur-sm">
                          {project.category}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {(project.techStack || project.tech_stack || []).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            <ExternalLink size={15} /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        )}

      </div>
    </section>
  );
};

export default Projects;