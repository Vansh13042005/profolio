// ============================================================
//  src/config/seo.js
//  Single source of truth for all SEO metadata
// ============================================================

export const SITE = {
  name:        'Vansh Patel',
  role:        'Full Stack Developer',
  tagline:     'React & Node.js Expert | Full Stack Developer Ahmedabad',
  url:         'https://www.vanshpatel.in',
  email:       'patelvansh1305@gmail.com',
  phone:       '+919023954043',
  whatsapp:    'https://wa.me/919023954043',
  location:    'Ahmedabad, Gujarat, India',

  // ✅ Error fix — social object added
  geo: {
    region:    'IN-GJ',
    placename: 'Ahmedabad, Gujarat, India',
    position:  '23.0225;72.5714',
  },
  social: {
    github:   'https://github.com/Vansh13042005',
    linkedin: 'https://linkedin.com/in/patelvansh13',
    twitter:  'https://twitter.com/vanshpatel',
  },

  ogImage:      'https://www.vanshpatel.in/og-image.jpg',
  twitterImage: 'https://www.vanshpatel.in/twitter-image.jpg',
  logoImage:    'https://www.vanshpatel.in/VanshPatel.png',
  themeColor:   '#2563eb',
  googleVerify: '5xpYf9seCnaC4Hb4ep3OG28kyajDwYjH73axtF5UpBY',
};

// ── Per-page meta ────────────────────────────────────────────

export const PAGE_META = {
  home: {
    title:       'Vansh Patel | Full Stack Developer – React & Node.js Expert',
    description: 'Vansh Patel is a Full Stack Developer from Ahmedabad specialising in React.js, Node.js, and JavaScript. Available for work.',
    keywords:    'Vansh Patel, Full Stack Developer, React Developer, Node.js Developer, JavaScript Developer Ahmedabad, Frontend Developer India, React.js Expert',
    canonical:   SITE.url,
    ogType:      'website',
  },
  about: {
    title:       'About Vansh Patel | React & Node.js Full Stack Developer',
    description: 'Learn about Vansh Patel – a Full Stack Developer from Ahmedabad specialising in React.js, Node.js, and modern JavaScript with hands-on project experience.',
    keywords:    'Vansh Patel about, Full Stack Developer Ahmedabad, React Developer, Node.js Developer, BCA Graduate Silver Oak University',
    canonical:   `${SITE.url}/about`,
    ogType:      'profile',
  },
  skills: {
    title:       'Skills | Vansh Patel – React, Node.js, JavaScript',
    description: 'Technical skills of Vansh Patel: React.js, Node.js, JavaScript (ES6), HTML5, CSS3, MySQL, MongoDB, AWS, Git and more.',
    keywords:    'Vansh Patel skills, React developer skills, Node.js expertise, JavaScript developer, MySQL, MongoDB, AWS',
    canonical:   `${SITE.url}/skills`,
    ogType:      'website',
  },
  portfolio: {
    title:       `Portfolio | ${SITE.name} – Web Development Projects`,
    description: `Browse ${SITE.name}'s portfolio of web development projects including React.js apps, Node.js backends, REST APIs, and full stack solutions.`,
    keywords:    'Vansh Patel portfolio, React.js projects, Node.js projects, Full Stack developer portfolio, JavaScript developer, web development portfolio Ahmedabad',
    canonical:   `${SITE.url}/portfolio`,
    ogType:      'website',
  },
  resume: {
    title:       `Resume | ${SITE.name} – Full Stack Developer`,
    description: `View the professional resume of ${SITE.name} – Full Stack Developer with experience in React.js, Node.js, JavaScript, and web development. Based in Ahmedabad, India.`,
    keywords:    'Vansh Patel resume, Full Stack Developer resume, React.js developer CV, Node.js developer resume, JavaScript developer Ahmedabad',
    canonical:   `${SITE.url}/resume`,
    ogType:      'website',
  },
  contact: {
    title:       `Contact ${SITE.name} | Hire a Full Stack Developer`,
    description: `Get in touch with ${SITE.name} for React.js, Node.js, or full stack projects. Based in Ahmedabad, India. Available for work worldwide.`,
    keywords:    'contact Vansh Patel, hire React developer, hire Node.js developer, Full Stack developer for hire, freelance web developer India',
    canonical:   `${SITE.url}/contact`,
    ogType:      'website',
  },
};