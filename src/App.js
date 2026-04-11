// src/pages/HomePage.jsx
import React from 'react';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Stats from './pages/Stats';
import ContactSection from "./pages/ContactSection";
import Footer from './component/Footer';
import ScrollProgress from './component/ScrollProgress';
import BackToTop from './component/BackToTop';

const App = () => {
  return (
    <div className="bg-white dark:bg-slate-900">
      <ScrollProgress />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Stats />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;