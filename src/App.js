import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Loader from './component/Loader';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Projects';
import Contact from './pages/ContactSection';
import ResumePage from './pages/ResumePage';
// import Resume if you have file

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="portfolio" element={<Portfolio />} />
        {/* <Route path="resume" element={<Resume />} /> */}
        <Route path="contact" element={<Contact />} />
        <Route path='resume' element={<ResumePage />} />
      </Route>
    </Routes>
  );
}

export default App;