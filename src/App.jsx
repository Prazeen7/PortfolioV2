// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work'
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Work />
      <Contact />
    </div>
  );
}

export default App;