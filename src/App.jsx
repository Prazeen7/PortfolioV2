// App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Contact from './components/Contact';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Minimum display time for loader (2.5 seconds)
    const minimumLoadTime = 2500;
    const startTime = Date.now();

    const loadApp = async () => {
      // If you have any async operations, do them here
      // For example: await fetchInitialData();
      
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumLoadTime - elapsedTime);
      
      // Wait for remaining time
      setTimeout(() => {
        setLoading(false);
        
        // Small delay to ensure loader is completely removed
        // before showing content with animations
        setTimeout(() => {
          setShowContent(true);
        }, 50);
      }, remainingTime);
    };

    loadApp();
  }, []);

  // Prevent scrolling while loader is active
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
      {/* Loader - completely removed after loading */}
      {loading && <Loader onLoadingComplete={() => setLoading(false)} />}
      
      {/* Main content - only rendered after loader is gone */}
      {showContent && (
        <div className="App">
          <Navbar />
          <Home />
          <Work />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;