// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';
import ScrollToTop from './ScrollToTop';
import FloatingSocial from './FloatingSocial';

const Layout = () => {
  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <FloatingSocial
        whatsapp="919023954043"
        linkedin="https://www.linkedin.com/in/patelvansh13/"
        instagram="https://www.instagram.com/vanshpatel_.13/"
      />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;