// src/components/ScrollProgress.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (totalScroll / windowHeight) * 100;
      setScroll(scrollPercent);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
      style={{ width: `${scroll}%` }}
    />
  );
};

export default ScrollProgress;