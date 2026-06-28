// ============================================================
//  src/config/seo.js  —  v2.0  Professional SEO Config
//  Single source of truth for ALL SEO metadata
// ============================================================

export const SITE = {
  name:        'Vansh Patel',
  role:        'Full Stack Developer',
  tagline:     'Full Stack Developer in Ahmedabad | React & Node.js Expert',
  url:         'https://www.vanshpatel.in',
  email:       'patelvansh1305@gmail.com',
  phone:       '+919023954043',
  whatsapp:    'https://wa.me/919023954043',
  location:    'Ahmedabad, Gujarat, India',

  geo: {
    region:    'IN-GJ',
    placename: 'Ahmedabad, Gujarat, India',
    position:  '23.0225;72.5714',
    icbm:      '23.0225, 72.5714',
  },

  social: {
    github:   'https://github.com/Vansh13042005',
    linkedin: 'https://www.linkedin.com/in/patelvansh13',
    twitter:  'https://twitter.com/patelvansh13',   // update if different
  },

  ogImage:      'https://www.vanshpatel.in/vanshpatel.png',
  twitterImage: 'https://www.vanshpatel.in/vanshpatel.png',
  logoImage:    'https://www.vanshpatel.in/vanshpatel.png',

  themeColor:    '#2563eb',
  bgColor:       '#ffffff',
  googleVerify:  '5xpYf9seCnaC4Hb4ep3OG28kyajDwYjH73axtF5UpBY',

  // Skills list — used in schema
  skills: [
    'React.js', 'Node.js', 'JavaScript (ES6+)', 'Express.js',
    'HTML5', 'CSS3', 'Tailwind CSS', 'MySQL', 'MongoDB',
    'REST APIs', 'AWS', 'Git', 'GitHub', 'Redux',
  ],
};

// ── Per-page meta ────────────────────────────────────────────

export const PAGE_META = {
  home: {
    title:       'Vansh Patel | Full Stack Developer Ahmedabad – React & Node.js Expert',
    description: 'Vansh Patel is a Full Stack Developer from Ahmedabad specialising in React.js, Node.js & JavaScript. BCA graduate, Purvsoft Technologies. Available for freelance & full-time work worldwide.',
    keywords:    'Vansh Patel, Full Stack Developer Ahmedabad, React Developer Ahmedabad, Node.js Developer India, JavaScript Developer, Frontend Developer Gujarat, hire React developer India, web developer Ahmedabad',
    canonical:   SITE.url,
    ogType:      'website',
  },
  about: {
    title:       'About Vansh Patel | Full Stack Developer Ahmedabad – React & Node.js',
    description: 'Meet Vansh Patel – Full Stack Developer from Ahmedabad. BCA graduate (CGPA 8.50) from Silver Oak University. Working at Purvsoft Technologies. Expert in React.js, Node.js & JavaScript.',
    keywords:    'Vansh Patel about, Vansh Patel developer Ahmedabad, Full Stack Developer Gujarat, React Developer profile, Silver Oak University BCA, Purvsoft Technologies developer',
    canonical:   `${SITE.url}/about`,
    ogType:      'profile',
  },
  skills: {
    title:       'Vansh Patel Skills | React.js, Node.js, JavaScript, MySQL, MongoDB',
    description: 'Technical skills of Vansh Patel: React.js, Node.js, Express.js, JavaScript ES6+, HTML5, CSS3, Tailwind CSS, MySQL, MongoDB, AWS, Git, Redux and REST APIs.',
    keywords:    'Vansh Patel skills, React.js developer skills, Node.js expertise, JavaScript developer India, MySQL MongoDB developer, AWS cloud Ahmedabad, full stack skills',
    canonical:   `${SITE.url}/skills`,
    ogType:      'website',
  },
  portfolio: {
    title:       'Vansh Patel Portfolio | React.js & Node.js Web Development Projects',
    description: 'Explore Vansh Patel\'s portfolio – React.js apps, Node.js REST APIs, full stack web applications and open source projects. Based in Ahmedabad, India.',
    keywords:    'Vansh Patel portfolio, React.js projects Ahmedabad, Node.js projects India, full stack developer portfolio, JavaScript web apps, web development portfolio Gujarat',
    canonical:   `${SITE.url}/portfolio`,
    ogType:      'website',
  },
  resume: {
    title:       'Vansh Patel Resume | Full Stack Developer – React & Node.js Ahmedabad',
    description: 'Download or view the professional resume of Vansh Patel – Full Stack Developer with React.js, Node.js, JavaScript experience. Ahmedabad, India. Open to opportunities worldwide.',
    keywords:    'Vansh Patel resume, Vansh Patel CV, Full Stack Developer resume Ahmedabad, React.js developer CV India, Node.js developer resume, JavaScript developer portfolio',
    canonical:   `${SITE.url}/resume`,
    ogType:      'website',
  },
  contact: {
    title:       'Contact Vansh Patel | Hire Full Stack Developer Ahmedabad India',
    description: 'Get in touch with Vansh Patel to hire a Full Stack Developer for React.js, Node.js or complete web projects. Based in Ahmedabad. Available worldwide for freelance & full-time roles.',
    keywords:    'contact Vansh Patel, hire React developer Ahmedabad, hire Node.js developer India, freelance full stack developer, web developer for hire Gujarat, hire JavaScript developer',
    canonical:   `${SITE.url}/contact`,
    ogType:      'website',
  },
};