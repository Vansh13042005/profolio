// src/components/FeedbackForm.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle, Loader } from 'lucide-react';

const API_URL = 'https://profolionode.vanshpatel.in/api/feedback/add';

const FeedbackForm = () => {
  const [form, setForm]         = useState({ name: '', email: '', rating: 0 });
  const [hovered, setHovered]   = useState(0);
  const [status, setStatus]     = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    setErrorMsg('');
    if (!form.name.trim())  return setErrorMsg('Please enter your name.');
    if (!form.email.trim()) return setErrorMsg('Please enter your email.');
    if (!/\S+@\S+\.\S+/.test(form.email)) return setErrorMsg('Please enter a valid email.');
    if (form.rating === 0)  return setErrorMsg('Please select a star rating.');

    setStatus('loading');
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:   form.name.trim(),
          email:  form.email.trim(),
          rating: form.rating,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ name: '', email: '', rating: 0 });
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  const ratingLabels = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent!'];
  const activeRating = hovered || form.rating;

  return (
    <section
      id="feedback"
      className="py-20 bg-white dark:bg-slate-900"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3">
            Rate My Work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-sm">
            Loved my portfolio? Drop a quick rating — it means a lot! ⭐
          </p>
        </motion.div>

        {/* ── Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 p-8"
        >
          <AnimatePresence mode="wait">

            {/* ── Success ── */}
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8"
              >
                <CheckCircle size={60} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                  Thank You! 🎉
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                  Your feedback has been received. I really appreciate it!
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold hover:shadow-lg transition-all"
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (

              /* ── Form ── */
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                {/* Name + Email — side by side on md+ */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Vansh Patel"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="vansh@gmail.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>
                </div>

                {/* Star Rating */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                    Your Rating <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setForm((p) => ({ ...p, rating: star }))}
                          onMouseEnter={() => setHovered(star)}
                          onMouseLeave={() => setHovered(0)}
                          className="transition-transform hover:scale-110 focus:outline-none"
                        >
                          <Star
                            size={36}
                            className={`transition-colors duration-150 ${
                              star <= activeRating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-slate-300 dark:text-slate-600'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    {/* Label below stars */}
                    <span
                      className={`text-sm font-semibold transition-all ${
                        activeRating
                          ? 'text-yellow-500 dark:text-yellow-400'
                          : 'text-slate-400'
                      }`}
                    >
                      {activeRating ? ratingLabels[activeRating] : 'Click a star to rate'}
                    </span>
                  </div>
                </div>

                {/* Error */}
                {(errorMsg || status === 'error') && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm text-center bg-red-50 dark:bg-red-900/20 px-4 py-2.5 rounded-xl"
                  >
                    ⚠️ {errorMsg}
                  </motion.p>
                )}

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleSubmit}
                  disabled={status === 'loading'}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader size={16} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Star size={16} className="fill-white" />
                      Submit Feedback
                    </>
                  )}
                </motion.button>

              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default FeedbackForm;