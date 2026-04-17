// App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Contact from './components/Contact';
import Loader from './components/Loader';
import Projects from './components/Projects';
import Footer from './components/Footer';

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
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, []);

  // Theme toggle function
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Apply theme to body
    if (newTheme === 'dark') {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  };

  // Listen for theme changes from other tabs/windows
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'theme') {
        const newTheme = e.newValue || 'dark';
        setTheme(newTheme);
        if (newTheme === 'dark') {
          document.body.classList.remove('light-mode');
        } else {
          document.body.classList.add('light-mode');
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
          <Home theme={theme} />
          <Work theme={theme} />
          <Projects theme={theme} />
          <Contact theme={theme} />
          <Footer theme={theme} />
        </div>
      )}
    </>
  );
}

export default App;