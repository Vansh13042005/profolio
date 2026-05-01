// src/pages/SkillsPage.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../component/SEO';
import { SITE } from '../config/seo';

// ── Devicon CDN helper ──────────────────────────────────────────────────────
const deviconUrl = (value) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${value}/${value}-original.svg`;

// Fallback map — some icons use a different variant name on devicon
const ICON_VARIANT = {
  express:      'express-original',
  nextjs:       'nextjs-original',
  django:       'django-plain',
  firebase:     'firebase-plain',
  kubernetes:   'kubernetes-plain',
  graphql:      'graphql-plain',
  amazonwebservices: 'amazonwebservices-original',
};

const getIconUrl = (value) => {
  if (!value) return null;
  const variant = ICON_VARIANT[value];
  if (variant) {
    const [name, v] = variant.split('-');
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${variant}.svg`;
  }
  return deviconUrl(value);
};

// ── Skill Icon component ────────────────────────────────────────────────────
const SkillIcon = ({ value, size = 40 }) => {
  const [error, setError] = useState(false);
  const url = getIconUrl(value);

  if (!url || error) {
    return (
      <div
        style={{
          width: size,
          height: size,
          borderRadius: 8,
          background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: size * 0.45,
          color: '#fff',
          fontWeight: 700,
        }}
      >
        {(value || '?')[0].toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={url}
      alt={value}
      width={size}
      height={size}
      style={{ objectFit: 'contain' }}
      onError={() => setError(true)}
    />
  );
};

// ── Animation variants ──────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// ── Skeleton loader ─────────────────────────────────────────────────────────
const SkeletonCard = () => (
  <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 animate-pulse">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-700" />
      <div className="flex-1">
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3 mb-2" />
        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/2" />
      </div>
    </div>
    <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full w-full" />
  </div>
);

// ── Main Page ───────────────────────────────────────────────────────────────
const SkillsPage = () => {
  const [grouped, setGrouped]   = useState({});   // { category: [skill, ...] }
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch('https://profolionode.vanshpatel.in/api/skills');
        if (!res.ok) throw new Error('Failed to load skills');
        const data = await res.json();
        const skills = data.data || [];

        // Group by category
        const groups = skills.reduce((acc, skill) => {
          const cat = skill.category || 'Other';
          if (!acc[cat]) acc[cat] = [];
          acc[cat].push(skill);
          return acc;
        }, {});

        setGrouped(groups);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  // ── JSON-LD schema ──────────────────────────────────────────────────────
  const allSkills = Object.entries(grouped).flatMap(([cat, skills]) =>
    skills.map((sk, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: sk.name,
      description: `${sk.name} – ${sk.percentage}% proficiency. Category: ${cat}`,
    }))
  );

  const skillsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Technical Skills of ${SITE.name}`,
    description: 'Programming languages, frameworks, and tools mastered by Vansh Patel.',
    itemListElement: allSkills,
  };

  const categoryKeys = Object.keys(grouped);

  return (
    <>
      <SEO page="skills" schema={skillsSchema} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900"
        aria-label="Skills Hero Section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              My Skills &amp; Expertise
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
              Technologies, tools, and frameworks I master
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Error State ──────────────────────────────────────────────────── */}
      {error && (
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-red-500 dark:text-red-400 text-lg">{error}</p>
            <p className="text-slate-500 mt-2 text-sm">Please try refreshing the page.</p>
          </div>
        </section>
      )}

      {/* ── Loading Skeletons ─────────────────────────────────────────────── */}
      {loading && (
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-48 mb-8 animate-pulse" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Skill Categories ─────────────────────────────────────────────── */}
      {!loading &&
        !error &&
        categoryKeys.map((category, catIndex) => (
          <section
            key={category}
            aria-label={`${category} Skills`}
            className={`py-16 ${
              catIndex % 2 === 0
                ? 'bg-white dark:bg-slate-900'
                : 'bg-slate-50 dark:bg-slate-800'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Category heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <h2 className="text-2xl md:text-3xl font-bold gradient-text">
                  {category}
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2" />
                <p className="text-slate-600 dark:text-slate-400 mt-2">
                  {grouped[category].length} Skill
                  {grouped[category].length !== 1 ? 's' : ''}
                </p>
              </motion.div>

              {/* Skill cards */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {grouped[category].map((skill) => (
                  <motion.div
                    key={skill.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
                  >
                    {/* Icon + Name */}
                    <div className="flex items-center gap-4 mb-4">
                      <SkillIcon value={skill.icon} size={40} />
                      <div>
                        <h3 className="text-lg font-semibold">{skill.name}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {category}
                        </p>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Proficiency</span>
                        <span className="font-semibold">{skill.percentage}%</span>
                      </div>
                      <div
                        className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3"
                        role="progressbar"
                        aria-valuenow={skill.percentage}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name} proficiency`}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        ))}

      {/* ── Empty State ───────────────────────────────────────────────────── */}
      {!loading && !error && categoryKeys.length === 0 && (
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              No skills added yet.
            </p>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        className="py-20 bg-gradient-to-r from-blue-600 to-purple-600"
        aria-label="Hire Me CTA"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need These Skills for Your Project?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Let's discuss how I can help bring your vision to life
            </p>
            <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                WhatsApp Chat
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SkillsPage;