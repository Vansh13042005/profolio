// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6 dark:text-white">Let's Connect</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg">
              Currently looking for new opportunities. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <HiMail />, label: "Email", value: "hello@dev.com" },
                { icon: <HiLocationMarker />, label: "Location", value: "New York, USA" },
                { icon: <HiPhone />, label: "Phone", value: "+1 (555) 000-0000" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary-light/10 dark:bg-primary-dark/10 flex items-center justify-center text-primary-light dark:text-primary-dark text-xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</p>
                    <p className="text-lg font-medium dark:text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Premium Glassmorphism Form */}
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 rounded-3xl bg-white/50 dark:bg-darkCard/50 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl"
          >
            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-slate-300">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-light outline-none transition-all dark:text-white" 
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-slate-300">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-light outline-none transition-all dark:text-white" 
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-slate-300">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-light outline-none transition-all dark:text-white"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-light to-secondary-light text-white font-bold hover:shadow-lg hover:opacity-90 transition-all active:scale-[0.98]">
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;