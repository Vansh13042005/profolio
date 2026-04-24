// ============================================================
//  src/config/seo.js
//  Single source of truth for all SEO metadata
//  Update this file whenever personal info changes
// ============================================================

export const SITE = {
  name:     'Vansh Patel',
  role:     'React & Node.js Full Stack Developer',
  tagline:  'React & Node.js Expert | Full Stack Developer Ahmedabad',
  url:      'https://www.vanshpatel.in',
  email:    'patelvansh1305@gmail.com',
  phone:    '+919023954043',
};

export const PAGE_META = {
  home: {
    title:       'Vansh Patel | Full Stack Developer – React & Node.js Expert',
    description: 'Vansh Patel is a Full Stack Developer from Ahmedabad specialising in React.js, Node.js, and JavaScript. 6+ months experience, available for work.',
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
    description: `Browse ${SITE.name}'s portfolio of 50+ web development projects including WordPress sites, Laravel apps, WooCommerce stores, and custom PHP solutions.`,
    keywords:    'Vansh Patel portfolio, WordPress projects, Laravel projects, PHP developer portfolio, WooCommerce developer, web development portfolio Ahmedabad',
    canonical:   `${SITE.url}/portfolio`,
    ogType:      'website',
  },
  resume: {
    title:       `Resume | ${SITE.name} – Software Developer`,
    description: `View the professional resume of ${SITE.name} – Software Developer with 7+ years experience in Laravel, WordPress, PHP, and web development. Based in Ahmedabad, India.`,
    keywords:    'Vansh Patel resume, Software Developer resume, Laravel developer CV, WordPress developer resume, PHP developer Ahmedabad',
    canonical:   `${SITE.url}/resume`,
    ogType:      'website',
  },
  contact: {
    title:       `Contact ${SITE.name} | Hire a Software Developer`,
    description: `Get in touch with ${SITE.name} for Laravel, WordPress, or custom PHP projects. Based in Ahmedabad, India. Available for freelance and contract work worldwide.`,
    keywords:    'contact Vansh Patel, hire Laravel developer, hire WordPress developer, PHP developer for hire, freelance web developer India',
    canonical:   `${SITE.url}/contact`,
    ogType:      'website',
  },
};