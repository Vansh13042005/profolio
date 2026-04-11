// src/components/Stats.jsx
import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Users, Coffee, Award } from 'lucide-react';

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const Stats = () => {
  const stats = [
    { icon: Code2, value: 50, label: 'Projects Completed' },
    { icon: Award, value: 5, label: 'Years Experience' },
    { icon: Users, value: 30, label: 'Happy Clients' },
    { icon: Coffee, value: 500, label: 'Coffee Cups' },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-3" />
              <div className="text-4xl font-bold mb-2">
                <CountUp end={stat.value} />+
              </div>
              <div className="text-white/90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;