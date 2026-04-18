import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Code2, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import vanshpatel from "../image/vanshpatel.png";

const AboutPage = () => {
  const stats = [
    { icon: Award, value: '7+', label: 'Years Experience' },
    { icon: Briefcase, value: '50+', label: 'Projects Completed' },
    { icon: Users, value: '30+', label: 'Happy Clients' },
    { icon: Code2, value: '100%', label: 'Dedication' },
  ];

  const expertise = [
    { name: 'Problem Solving', level: 'Expert', years: '7 years' },
    { name: 'WordPress', level: 'Expert', years: '5 years' },
    { name: 'Laravel', level: 'Advanced', years: '2 years' },
    { name: 'HTML5/CSS3', level: 'Advanced', years: '5 years' },
    { name: 'JavaScript', level: 'Advanced', years: '5 years' },
    { name: 'MySQL', level: 'Advanced', years: '7 years' },
  ];

  const services = [
    'Custom Plugin Development',
    'Single Page Applications',
    'WooCommerce Development',
    'Payment Gateway Integration',
    'Custom WordPress Development',
    'Responsive Website Design',
  ];

  // JSON-LD Structured Data for Person/About Page
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vansh Patel",
    "url": "https://www.vanshpatel.dev/about",
    "image": "https://www.vanshpatel.dev/profile.jpg",
    "jobTitle": "Software Developer",
    "description": "Passionate Software Developer specializing in Laravel, WordPress, and Custom PHP development. Delivering scalable and secure web applications.",
    "email": "info@patelVansh.site",
    "telephone": "+917874369355",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "India"
    },
    "knowsAbout": ["Laravel", "WordPress", "PHP", "JavaScript", "HTML5", "CSS3", "MySQL", "WooCommerce"],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Your University Name"
    },
    "sameAs": [
      "https://github.com/vanshpatel",
      "https://linkedin.com/in/vanshpatel",
      "https://twitter.com/vanshpatel"
    ]
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Vansh Patel - Software Developer",
    "url": "https://www.vanshpatel.dev/about",
    "description": "Learn about Vansh Patel, a passionate Software Developer specializing in Laravel, WordPress, and Custom PHP development with 7+ years of experience.",
    "mainEntity": {
      "@type": "Person",
      "name": "Vansh Patel"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Software Development Services",
    "provider": {
      "@type": "Person",
      "name": "Vansh Patel"
    },
    "serviceType": [
      "Custom Plugin Development",
      "Single Page Applications",
      "WooCommerce Development",
      "Payment Gateway Integration",
      "Custom WordPress Development",
      "Responsive Website Design"
    ],
    "areaServed": "Worldwide",
    "description": "Professional software development services including custom WordPress development, WooCommerce solutions, and web applications."
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.vanshpatel.dev"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://www.vanshpatel.dev/about"
      }
    ]
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>About Vansh Patel | Software Developer - Laravel & WordPress Expert</title>
        <meta name="title" content="About Vansh Patel | Software Developer - Laravel & WordPress Expert" />
        <meta name="description" content="Learn about Vansh Patel, a passionate Software Developer specializing in Laravel, WordPress, PHP, and custom web development. 7+ years experience, 50+ projects completed." />
        <meta name="keywords" content="Vansh Patel, Software Developer, Laravel Developer, WordPress Developer, PHP Developer, Web Developer Ahmedabad, Full Stack Developer, Custom Plugin Development, WooCommerce Expert, Freelance Developer India" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Vansh Patel" />
        <meta name="language" content="English" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.vanshpatel.dev/about" />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.vanshpatel.dev/about" />
        <meta property="og:title" content="About Vansh Patel | Software Developer Portfolio" />
        <meta property="og:description" content="Passionate Software Developer specializing in Laravel, WordPress, and Custom PHP development. 7+ years of experience delivering scalable web applications." />
        <meta property="og:image" content="https://www.vanshpatel.dev/og-about.jpg" />
        <meta property="og:image:alt" content="Vansh Patel - Software Developer" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Vansh Patel Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta property="profile:first_name" content="Vansh" />
        <meta property="profile:last_name" content="Patel" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.vanshpatel.dev/about" />
        <meta name="twitter:title" content="About Vansh Patel | Software Developer" />
        <meta name="twitter:description" content="Software Developer specializing in Laravel, WordPress, and PHP. 7+ years experience, 50+ projects completed." />
        <meta name="twitter:image" content="https://www.vanshpatel.dev/twitter-about.jpg" />
        
        {/* Verification Tags */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_SEARCH_CONSOLE_CODE" />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />
        <meta name="geo.position" content="23.0225;72.5714" />
        
        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#2563eb" />
      </Helmet>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(aboutPageSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900" aria-label="About Hero Section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
              Passionate Software Developer crafting innovative digital solutions with 7+ years of experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-slate-800" aria-label="Statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" aria-hidden="true" />
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-slate-600 dark:text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20" aria-label="Biography">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={vanshpatel}
                  alt="Vansh Patel - Software Developer and Laravel Expert"
                  className="w-full h-auto"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Vansh Patel</h2>
              <p className="text-xl text-blue-600 dark:text-blue-400 mb-6">Software Developer | Laravel & WordPress Specialist</p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Passionate Software Developer specializing in <strong className="text-blue-600">Laravel</strong>, 
                <strong className="text-blue-600"> WordPress</strong>, and <strong className="text-blue-600">Custom PHP development</strong>. 
                I bridge the gap between complex business requirements and high-performance technical solutions, 
                delivering scalable and secure web applications built for growth. Based in Ahmedabad, Gujarat, India.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-slate-700 dark:text-slate-300">📧 info@patelVansh.site</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-slate-700 dark:text-slate-300">📞 +91 7874369355</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-slate-700 dark:text-slate-300">📍 Ahmedabad, Gujarat, India</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800" aria-label="Technical Expertise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Technical Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className="text-slate-600 dark:text-slate-400 mt-4">Core competencies and skill levels</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-lg"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <span className="text-sm text-blue-600 dark:text-blue-400">{item.level}</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.level === 'Expert' ? '95%' : '75%' }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                  />
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">{item.years} of experience</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" aria-label="Services Offered">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">What I Do</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className="text-slate-600 dark:text-slate-400 mt-4">Professional services tailored to your business needs</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="font-semibold">{service}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;