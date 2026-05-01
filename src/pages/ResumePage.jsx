// src/pages/ResumePage.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import SEO from '../component/SEO';
import { SITE } from '../config/seo';
import vanshpatel from '../image/VanshPatel_CV (1).pdf'

const ResumePage = () => {
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  useEffect(() => {
    fetch('https://profolionode.vanshpatel.in/api/experience')
      .then(res => res.json())
      .then(json => {
        const unique = json.data.filter((exp, index, self) =>
          index === self.findIndex(e => e.id === exp.id)
        );
        const mapped = unique.map((exp) => ({
          title: exp.role,
          company: exp.company,
          period: exp.current
            ? `${new Date(exp.start_date).getFullYear()} – Present`
            : `${new Date(exp.start_date).getFullYear()} – ${new Date(exp.end_date).getFullYear()}`,
          description: exp.description,
        }));
        setExperiences(mapped);
      })
      .catch(err => console.error('Failed to fetch experience:', err));
  }, []);

  useEffect(() => {
  fetch('https://profolionode.vanshpatel.in/api/education')
    .then(res => res.json())
    .then(json => {
      const mapped = json.data.map((edu) => ({
        degree: edu.degree,
        institution: edu.institution,
        period: edu.end_date
          ? `${new Date(edu.start_date).getFullYear()} – ${new Date(edu.end_date).getFullYear()}`
          : `${new Date(edu.start_date).getFullYear()} – Present`,
        description: edu.description,
      }));

      setEducation(mapped);
    })
    .catch(err => console.error('Failed to fetch education:', err));
}, []);

  const certifications = [
    'AWS Certified Developer',
    'Meta Frontend Developer Professional Certificate',
    'Advanced React Certification',
    'Full Stack Web Development Bootcamp',
  ];

  const resumeSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: `Resume of ${SITE.name}`,
    url: `${SITE.url}/resume`,
    mainEntity: {
      '@type': 'Person',
      name: SITE.name,
      jobTitle: 'Software Developer',
      worksFor: { '@type': 'Organization', name: 'Freelance' },
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'Gujarat University' },
      ],
      hasCredential: certifications.map((cert) => ({
        '@type': 'EducationalOccupationalCredential',
        name: cert,
      })),
    },
  };

  return (
    <>
      <SEO page="resume" schema={resumeSchema} />

      {/* ── Hero ── */}
      <section
        className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900"
        aria-label="Resume Hero Section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Resume</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">My professional journey and qualifications</p>
            <motion.a
              href={vanshpatel}
              download
              whileHover={{ scale: 1.05 }}
              className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
              aria-label="Download Vansh Patel's Resume PDF"
            >
              <Download size={18} /> Download Resume (PDF)
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── Experience & Education ── */}
      <section className="py-20 bg-white dark:bg-slate-900" aria-label="Work Experience and Education">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-8 h-8 text-blue-600" aria-hidden="true" />
                <h2 className="text-2xl md:text-3xl font-bold gradient-text">Work Experience</h2>
              </div>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-blue-600"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full" />
                    <div className="mb-2 flex flex-wrap justify-between items-start gap-2">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <span className="text-sm text-blue-600 dark:text-blue-400 flex items-center gap-1">
                        <Calendar size={14} aria-hidden="true" /> {exp.period}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-slate-500 dark:text-slate-500">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-8 h-8 text-purple-600" aria-hidden="true" />
                <h2 className="text-2xl md:text-3xl font-bold gradient-text">Education</h2>
              </div>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-purple-600"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full" />
                    <div className="mb-2 flex flex-wrap justify-between items-start gap-2">
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <span className="text-sm text-purple-600 dark:text-purple-400 flex items-center gap-1">
                        <Calendar size={14} aria-hidden="true" /> {edu.period}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 font-medium mb-2">{edu.institution}</p>
                    <p className="text-slate-500 dark:text-slate-500">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800" aria-label="Certifications">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-900 rounded-lg p-6 text-center shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <p className="font-medium">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ResumePage;