import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STARS = Array.from({ length: 90 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.2 + 0.4,
  delay: Math.random() * 3,
  duration: Math.random() * 2.5 + 1.2,
}));

// const SPARKS = Array.from({ length: 16 }, (_, i) => ({
//   id: i,
//   angle: Math.random() * 360,
//   distance: 15 + Math.random() * 35,
//   delay: Math.random() * 0.7,
//   color: ['#fbbf24', '#f97316', '#ef4444', '#ffffff', '#fde68a'][i % 5],
// }));

const LETTERS = 'Launching'.split('');

const Loader = () => {
  const [visible, setVisible] = useState(true);
  const [sparks, setSparks] = useState([]);
  const sparkIdRef = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = sparkIdRef.current++;
      const angle = Math.random() * 360;
      const dist = 15 + Math.random() * 35;
      setSparks(prev => [
        ...prev.slice(-20),
        {
          id,
          x: Math.cos((angle * Math.PI) / 180) * dist,
          y: Math.sin((angle * Math.PI) / 180) * dist + 40,
          color: ['#fbbf24','#f97316','#ef4444','#ffffff','#fde68a'][id % 5],
          size: 2 + Math.random() * 2,
        },
      ]);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="space-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'radial-gradient(ellipse at 50% 30%, #0a1628 0%, #020810 70%)',
            overflow: 'hidden',
          }}
        >
          {/* ── Stars ── */}
          {STARS.map(s => (
            <motion.div
              key={s.id}
              style={{
                position: 'absolute',
                left: `${s.x}%`,
                top: `${s.y}%`,
                width: s.size,
                height: s.size,
                borderRadius: '50%',
                background: '#ffffff',
              }}
              animate={{ opacity: [0.2, 1, 0.2], y: ['0%', '2%'] }}
              transition={{
                opacity: { duration: s.duration, repeat: Infinity, delay: s.delay, ease: 'easeInOut' },
                y: { duration: 7, repeat: Infinity, repeatType: 'reverse', ease: 'linear' },
              }}
            />
          ))}

          {/* ── Shooting star ── */}
          <motion.div
            style={{
              position: 'absolute',
              top: '18%',
              left: '75%',
              width: 3,
              height: 3,
              borderRadius: '50%',
              background: '#fff',
            }}
            animate={{ x: [0, -180], y: [0, 60], opacity: [1, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 3.2, ease: 'easeIn' }}
          />

          {/* ── Outer orbit ring ── */}
          <motion.div
            style={{
              position: 'absolute',
              width: 200,
              height: 200,
              border: '1px solid rgba(99,102,241,0.2)',
              borderRadius: '50%',
              top: '50%',
              left: '50%',
              marginTop: -100,
              marginLeft: -100,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          >
            <motion.div
              style={{
                position: 'absolute',
                width: 7,
                height: 7,
                background: '#818cf8',
                borderRadius: '50%',
                top: -3.5,
                left: '50%',
                marginLeft: -3.5,
                boxShadow: '0 0 8px #6366f1',
              }}
              animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* ── Inner orbit ring ── */}
          <motion.div
            style={{
              position: 'absolute',
              width: 150,
              height: 150,
              border: '1px dashed rgba(168,85,247,0.25)',
              borderRadius: '50%',
              top: '50%',
              left: '50%',
              marginTop: -75,
              marginLeft: -75,
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            <div
              style={{
                position: 'absolute',
                width: 5,
                height: 5,
                background: '#a855f7',
                borderRadius: '50%',
                bottom: -2.5,
                left: '50%',
                marginLeft: -2.5,
                boxShadow: '0 0 6px #a855f7',
              }}
            />
          </motion.div>

          {/* ── Glow behind rocket ── */}
          <div
            style={{
              position: 'absolute',
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)',
              filter: 'blur(14px)',
              top: '50%',
              left: '50%',
              marginTop: -65,
              marginLeft: -40,
            }}
          />

          {/* ── Rocket ── */}
          <motion.div
            style={{ position: 'relative', zIndex: 10, rotate: -45 }}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Vibration */}
            <motion.div
              style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              animate={{ x: [0, -1.5, 1.5, -1, 1, 0] }}
              transition={{ duration: 0.15, repeat: Infinity, ease: 'linear' }}
            >
              {/* Rocket SVG */}
              <svg width="52" height="90" viewBox="0 0 52 90" fill="none">
                <path d="M26 2 C14 16 11 42 11 60 L41 60 C41 42 38 16 26 2Z" fill="url(#rBody)" />
                <path d="M26 2 C23 14 22 30 22 48 L26 48 Z" fill="rgba(255,255,255,0.12)" />
                <circle cx="26" cy="38" r="7" fill="url(#rWin)" />
                <circle cx="26" cy="38" r="5" fill="url(#rWinIn)" />
                <circle cx="24.5" cy="36.5" r="1.5" fill="rgba(255,255,255,0.55)" />
                <path d="M11 60 L3 76 L11 72 Z" fill="url(#rFin)" />
                <path d="M41 60 L49 76 L41 72 Z" fill="url(#rFin)" />
                <rect x="20" y="60" width="12" height="10" rx="2" fill="#1e293b" />
                <rect x="22" y="62" width="8" height="6" rx="1" fill="#0f172a" />
                <defs>
                  <linearGradient id="rBody" x1="11" y1="2" x2="41" y2="60" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#e0e7ff" />
                    <stop offset="55%" stopColor="#a5b4fc" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                  <radialGradient id="rWin" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#bfdbfe" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </radialGradient>
                  <radialGradient id="rWinIn" cx="38%" cy="38%" r="60%">
                    <stop offset="0%" stopColor="#eff6ff" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </radialGradient>
                  <linearGradient id="rFin" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#818cf8" />
                    <stop offset="100%" stopColor="#4f46e5" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Flame core */}
              <motion.div
                style={{
                  marginTop: -4,
                  width: 14,
                  height: 30,
                  background: 'linear-gradient(to bottom, #fff7ed, #fbbf24, #f97316, #ef4444, transparent)',
                  borderRadius: '40% 40% 60% 60%',
                  boxShadow: '0 0 14px 4px rgba(251,191,36,0.6)',
                  transformOrigin: 'top center',
                }}
                animate={{
                  scaleX: [1, 0.8, 1.1, 0.9, 1],
                  scaleY: [1, 1.3, 0.85, 1.2, 1],
                  opacity: [0.95, 1, 0.85, 1, 0.95],
                }}
                transition={{ duration: 0.18, repeat: Infinity, ease: 'linear' }}
              />

              {/* Flame outer */}
              <motion.div
                style={{
                  position: 'absolute',
                  bottom: -28,
                  left: '50%',
                  marginLeft: -12,
                  width: 24,
                  height: 42,
                  background: 'linear-gradient(to bottom, rgba(252,211,77,0.6), rgba(249,115,22,0.35), transparent)',
                  borderRadius: '40% 40% 60% 60%',
                  filter: 'blur(4px)',
                  transformOrigin: 'top center',
                  opacity: 0.7,
                }}
                animate={{ scaleY: [1, 1.2, 0.85, 1.1, 1], opacity: [0.5, 0.7, 0.4, 0.65, 0.5] }}
                transition={{ duration: 0.22, repeat: Infinity, ease: 'linear' }}
              />

              {/* Sparks */}
              <div style={{ position: 'absolute', bottom: 10, left: '50%', width: 0, height: 0 }}>
                <AnimatePresence>
                  {sparks.map(sp => (
                    <motion.div
                      key={sp.id}
                      style={{
                        position: 'absolute',
                        width: sp.size,
                        height: sp.size,
                        borderRadius: '50%',
                        background: sp.color,
                        boxShadow: `0 0 4px 2px rgba(251,191,36,0.7)`,
                      }}
                      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                      animate={{ x: sp.x, y: sp.y, opacity: 0, scale: 0 }}
                      exit={{}}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                    />
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Smoke ── */}
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                top: '55%',
                left: `${48 + (i % 2 === 0 ? -1 : 1) * i * 3}%`,
                width: 28 + i * 10,
                height: 28 + i * 10,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(148,163,184,0.3) 0%, transparent 70%)',
                filter: 'blur(6px)',
                marginLeft: -(28 + i * 10) / 2,
              }}
              animate={{ scale: [0.5, 2.5], opacity: [0.5, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.35, ease: 'easeOut' }}
            />
          ))}

          {/* ── Loading text ── */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: 48,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 10,
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div style={{ display: 'flex', gap: 3 }}>
              {LETTERS.map((c, i) => (
                <motion.span
                  key={i}
                  style={{
                    color: 'rgba(165,180,252,0.9)',
                    fontFamily: 'monospace',
                    fontSize: 13,
                    letterSpacing: 2,
                    display: 'inline-block',
                  }}
                  animate={{ y: [0, -5, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.3, repeat: Infinity, delay: i * 0.09, ease: 'easeInOut' }}
                >
                  {c}
                </motion.span>
              ))}
            </div>

            {/* Progress bar */}
            <div style={{ width: 130, height: 2, background: 'rgba(255,255,255,0.08)', borderRadius: 2, overflow: 'hidden' }}>
              <motion.div
                style={{ height: '100%', background: 'linear-gradient(to right, #6366f1, #a855f7, #ec4899)', borderRadius: 2 }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 4, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;