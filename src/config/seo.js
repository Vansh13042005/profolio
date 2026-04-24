// ============================================================
//  src/config/seo.js
//  Single source of truth for all SEO metadata
//  Update this file whenever personal info changes
// ============================================================

export const SITE = {
  name:        'Vansh Patel',
  role:        'Software Developer',
  tagline:     'Laravel & WordPress Expert | PHP Developer Ahmedabad',
  url:         'https://www.vanshpatel.in',          // ← live domain
  email:       'info@vanshpatel.in',
  phone:       '+917874369355',
  whatsapp:    'https://wa.me/917874369355',
  location:    'Ahmedabad, Gujarat, India',
  geo: {
    region:    'IN-GJ',
    placename: 'Ahmedabad, Gujarat, India',
    position:  '23.0225;72.5714',
  },
  social: {
    github:    'https://github.com/vanshpatel',
    linkedin:  'https://linkedin.com/in/vanshpatel',
    twitter:   'https://twitter.com/vanshpatel',
  },
  ogImage:       'https://www.vanshpatel.in/og-image.jpg',   // 1200×630 px
  twitterImage:  'https://www.vanshpatel.in/twitter-image.jpg',
  logoImage:     'https://www.vanshpatel.in/profile.jpg',
  themeColor:    '#2563eb',
  googleVerify:  '5xpYf9seCnaC4Hb4ep3OG28kyajDwYjH73axtF5UpBY', // GSC code
};

// ── Per-page meta ────────────────────────────────────────────

export const PAGE_META = {
  home: {
    title:       `${SITE.name} | Software Developer – Laravel & WordPress Expert`,
    description: `${SITE.name} is a Software Developer from Ahmedabad specialising in Laravel, WordPress, and Custom PHP. 7+ years experience, 50+ projects, available for freelance work.`,
    keywords:    'Vansh Patel, Software Developer, Laravel Developer, WordPress Developer, PHP Developer Ahmedabad, Freelance Developer India, Custom Plugin Development, WooCommerce Expert',
    canonical:   SITE.url,
    ogType:      'website',
  },
  about: {
    title:       `About ${SITE.name} | Laravel & WordPress Specialist`,
    description: `Learn about ${SITE.name} – a passionate Software Developer from Ahmedabad specialising in Laravel, WordPress, and Custom PHP development with 7+ years of experience.`,
    keywords:    'Vansh Patel about, Software Developer Ahmedabad, Laravel Developer, WordPress Expert, PHP Developer, Full Stack Developer Gujarat',
    canonical:   `${SITE.url}/about`,
    ogType:      'profile',
  },
  skills: {
    title:       `Skills & Expertise | ${SITE.name} – PHP, WordPress, Laravel`,
    description: `Explore the technical skills of ${SITE.name}: PHP (95%), WordPress (95%), Laravel (75%), JavaScript, MySQL, Docker and more. Ahmedabad-based web developer.`,
    keywords:    'Vansh Patel skills, PHP developer, WordPress developer skills, Laravel expertise, MySQL, Docker, JavaScript developer',
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