// src/components/Portfolio.jsx

const projects = [
  {
    title: "Eco-Tracker SaaS",
    desc: "A carbon footprint monitoring dashboard built with React and Node.js.",
    tags: ["React", "Tailwind", "Firebase"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500"
  },
  // Add more projects...
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 dark:text-white">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group bg-white dark:bg-darkCard rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-800"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}   // ✅ FIXED (important)
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">
                  {p.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                  {p.desc}
                </p>

                <div className="flex gap-2 mb-6 flex-wrap">
                  {p.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-primary-light/10 text-primary-light dark:bg-primary-dark/20 dark:text-primary-dark font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="text-primary-light dark:text-primary-dark font-semibold hover:underline">
                    Demo
                  </button>
                  <button className="text-slate-600 dark:text-slate-400 font-semibold hover:underline">
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;