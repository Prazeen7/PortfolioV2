import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Contact from './components/Contact';
import Loader from './components/Loader';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  // Initialize and sync theme
  useEffect(() => {
    // Get initial theme
    const savedTheme = localStorage.getItem('theme');
    let initialTheme = savedTheme;
    
    if (!initialTheme) {
      initialTheme = 'dark';
    }
    
    setTheme(initialTheme);
    setIsThemeLoaded(true);
    
    // Apply theme to body immediately
    if (initialTheme === 'dark') {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, []);

  // Theme toggle function
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Apply theme to body
    if (newTheme === 'dark') {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  };

  // Listen for theme changes from other tabs/windows
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'theme') {
        const newTheme = e.newValue || 'dark';
        setTheme(newTheme);
        if (newTheme === 'dark') {
          document.body.classList.add('dark-mode');
          document.body.classList.remove('light-mode');
        } else {
          document.body.classList.add('light-mode');
          document.body.classList.remove('dark-mode');
        }
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Loading logic
  useEffect(() => {
    if (!isThemeLoaded) return;

    const minimumLoadTime = 2500;
    const startTime = Date.now();

    const loadApp = async () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumLoadTime - elapsedTime);
      
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => {
          setShowContent(true);
        }, 50);
      }, remainingTime);
    };

    loadApp();
  }, [isThemeLoaded]);

  // Prevent scrolling while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [loading]);

  return (
    <>
      <style>{`
        .unified-bg-wrapper {
          position: relative;
          width: 100%;
          background: var(--bg);
          transition: background-color 0.3s ease;
        }
        
        body.dark-mode .unified-bg-wrapper {
          background: #0a0a0a;
        }
        
        body.light-mode .unified-bg-wrapper {
          background: #ffffff;
        }
        
        /* Enhanced divider at top of unified wrapper */
        .section-divider-top {
          height: 2px;
          background: linear-gradient(to right, transparent, #E76F51 20%, #E76F51 80%, transparent);
          box-shadow: 0 0 20px rgba(231, 111, 81, 0.5);
          margin: 0;
          position: sticky;
          top: 0;
          z-index: 10;
        }
        
        body.light-mode .section-divider-top {
          box-shadow: 0 0 15px rgba(231, 111, 81, 0.4);
        }
        
        /* Ensure Home takes full viewport */
        .home-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
      `}</style>
      
      {/* Loader with theme prop */}
      {loading && (
        <Loader 
          onLoadingComplete={() => setLoading(false)} 
          theme={theme}
          isThemeLoaded={isThemeLoaded}
        />
      )}
      
      {/* Main content with theme prop passed to all components */}
      {showContent && (
        <div className="App">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          
          <div className="home-wrapper">
            <Home theme={theme} />
          </div>
          
          {/* Unified background wrapper for Work, Projects, Contact */}
          <div className="unified-bg-wrapper">
            {/* Divider to separate Home from animated sections */}
            <div className="section-divider-top"></div>
            
            <AnimatedBackground opacity={0.6} />
            <Projects theme={theme} />
            <Work theme={theme} />
            <Contact theme={theme} />
          </div>
          
          <Footer theme={theme} />
        </div>
      )}
    </>
  );
}

export default App;