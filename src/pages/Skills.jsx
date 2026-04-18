import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPhp, SiWordpress, SiLaravel, SiHtml5, SiJavascript,
  SiBootstrap, SiMysql, SiPostgresql, SiGit, SiDocker
} from 'react-icons/si';
import { Users, Brain } from 'lucide-react';

const SkillsPage = () => {
  const skillCategories = [
    {
      name: "Backend Development",
      skills: [
        { name: "PHP", proficiency: 95, icon: SiPhp, color: "#777BB4" },
        { name: "WordPress", proficiency: 95, icon: SiWordpress, color: "#21759B" },
        { name: "Laravel", proficiency: 75, icon: SiLaravel, color: "#FF2D20" },
      ]
    },
    {
      name: "Frontend Development",
      skills: [
        { name: "HTML5", proficiency: 75, icon: SiHtml5, color: "#E34F26" },
        // { name: "CSS3", proficiency: 75, icon: SiCss3, color: "#1572B6" },
        { name: "JavaScript", proficiency: 75, icon: SiJavascript, color: "#F7DF1E" },
        { name: "Bootstrap", proficiency: 75, icon: SiBootstrap, color: "#7952B3" },
      ]
    },
    {
      name: "Databases & Storage",
      skills: [
        { name: "MySQL", proficiency: 75, icon: SiMysql, color: "#4479A1" },
        { name: "PostgreSQL", proficiency: 75, icon: SiPostgresql, color: "#4169E1" },
      ]
    },
    {
      name: "DevOps & Tools",
      skills: [
        { name: "Git & GitHub", proficiency: 95, icon: SiGit, color: "#F05032" },
        { name: "Docker", proficiency: 75, icon: SiDocker, color: "#2496ED" },
        // { name: "AWS", proficiency: 50, icon: SiAmazonaws, color: "#FF9900" },
      ]
    },
    {
      name: "Professional Skills",
      skills: [
        { name: "Teamwork", proficiency: 95, icon: Users, color: "#2563EB" },
        { name: "Problem Solving", proficiency: 95, icon: Brain, color: "#7C3AED" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">My Skills & Expertise</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
              Technologies, tools, and frameworks I master
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Sections */}
      {skillCategories.map((category, catIndex) => (
        <section key={catIndex} className={`py-16 ${catIndex % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-slate-800'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold gradient-text">{category.name}</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2" />
              <p className="text-slate-600 dark:text-slate-400 mt-2">{category.skills.length} Skills</p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <skill.icon className="w-10 h-10" style={{ color: skill.color }} />
                    <div>
                      <h3 className="text-lg font-semibold">{skill.name}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{category.name}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Proficiency</span>
                      <span className="font-semibold">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
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
    </div>
  );
};

export default SkillsPage;