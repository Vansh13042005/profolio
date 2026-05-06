// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;