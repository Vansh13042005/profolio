import Navbar from './component/Navbar';
import Home from './pages/Home';
import PortfolioSection from './pages/PortfolioSection';
import SkillsSection from './pages/SkillsSection';
import ContactSection from './pages/ContactSection';

function App() {
  return (
    <div className="bg-lightBg dark:bg-darkBg transition-colors duration-300">
      <Navbar />
      
      <main>
        <Home />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </main>

      <footer className="py-10 text-center text-slate-500 border-t">
        © {new Date().getFullYear()} Vansh Dev. All rights reserved.
      </footer>
    </div>
  );
}

export default App;