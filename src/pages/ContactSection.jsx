// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import SEO from '../component/SEO';
import { SITE } from '../config/seo';

const ContactPage = () => {
  const [formData, setFormData]   = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      /*
       * ─── PRODUCTION OPTION A: Formspree (free tier, no backend needed) ───
       * 1. Go to https://formspree.io and create a free account
       * 2. Create a new form → copy your form ID
       * 3. Replace YOUR_FORM_ID below
       *
       * const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       *   method: 'POST',
       *   headers: { 'Content-Type': 'application/json' },
       *   body: JSON.stringify(formData),
       * });
       * if (!res.ok) throw new Error('Failed');
       *
       * ─── PRODUCTION OPTION B: EmailJS (free 200 emails/month) ───
       * import emailjs from '@emailjs/browser';
       * await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
       *
       * ─── PRODUCTION OPTION C: Your own Laravel API ───
       * const res = await fetch('https://api.vanshpatel.in/contact', {
       *   method: 'POST',
       *   headers: { 'Content-Type': 'application/json' },
       *   body: JSON.stringify(formData),
       * });
       */

      // Temporary: open WhatsApp with message (works immediately, no backend)
      const msg = `Hi Vansh! My name is ${formData.name} (${formData.email}).\n\n${formData.message}`;
      window.open(`https://wa.me/${SITE.phone.replace('+', '')}?text=${encodeURIComponent(msg)}`, '_blank');

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError('Something went wrong. Please try again or contact me directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const contactInfo = [
    { icon: Mail,    label: 'Email',    value: SITE.email,    href: `mailto:${SITE.email}` },
    { icon: Phone,   label: 'Phone',    value: SITE.phone,    href: `tel:${SITE.phone}` },
    { icon: MapPin,  label: 'Location', value: SITE.location, href: null },
  ];

  /* ── JSON-LD ── */
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${SITE.name}`,
    url: `${SITE.url}/contact`,
    mainEntity: {
      '@type': 'Person',
      name: SITE.name,
      email: SITE.email,
      telephone: SITE.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ahmedabad',
        addressRegion: 'Gujarat',
        addressCountry: 'India',
      },
    },
  };

  return (
    <>
      <SEO page="contact" schema={contactSchema} />

      {/* ── Hero ── */}
      <section
        className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900"
        aria-label="Contact Hero Section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Get In Touch</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
              Let's discuss your project or just say hello
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section className="py-20 bg-white dark:bg-slate-900" aria-label="Contact Information and Form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">Contact Information</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Feel free to reach out for any inquiries, collaborations, or project discussions.
                I'm always open to new opportunities.
              </p>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-slate-800 dark:text-slate-200 hover:text-blue-600 transition-colors font-medium">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-800 dark:text-slate-200 font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp direct link */}
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
                aria-label="Chat on WhatsApp"
              >
                💬 WhatsApp Chat
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 shadow-xl"
            >
              <h2 className="text-2xl font-bold gradient-text mb-6">Send a Message</h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg flex items-center gap-2"
                  role="alert"
                >
                  <CheckCircle size={20} aria-hidden="true" />
                  Message sent! I'll get back to you soon.
                </motion.div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Rahul Shah"
                    required
                    className="w-full px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rahul@example.com"
                    required
                    className="w-full px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="w-full px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-slate-800 dark:text-white"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
                  aria-label="Send message to Vansh Patel"
                >
                  <Send size={18} aria-hidden="true" />
                  {loading ? 'Sending…' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;