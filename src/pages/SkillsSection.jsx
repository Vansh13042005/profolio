// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaTools } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: "90%", icon: <FaReact className="text-blue-400" /> },
      { name: "JavaScript", level: "85%", icon: <FaJs className="text-yellow-400" /> },
      { name: "Tailwind CSS", level: "95%", icon: <FaCss3Alt className="text-cyan-400" /> },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: "80%", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express", level: "75%", icon: <FaTools className="text-gray-400" /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-darkBg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 dark:text-white text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-50 dark:bg-darkCard border border-slate-100 dark:border-slate-800 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 dark:text-primary-dark text-primary-light">{cat.title}</h3>
              <div className="space-y-6">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2 dark:text-white font-medium">
                        {skill.icon} {skill.name}
                      </div>
                      <span className="text-sm text-slate-500">{skill.level}</span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;