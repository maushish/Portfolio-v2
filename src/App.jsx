import React, { useEffect } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Works from './components/Works';

function App() {
  const theme = 'dark'; // Set the theme to 'dark' permanently

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <>
      <div className="bg-white dark:bg-slate-900 min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto">
          <HeroSection />
          <Works />
          <Services />
          <About />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
