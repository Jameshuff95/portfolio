import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  useEffect(() => {
    // Set initial theme
    const initialTheme = 'dark'; // or 'light', based on your preference
    document.body.className = initialTheme;
  }, []);

  return (
    <Router>
      <Nav />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

/*import '../CSS/App.css';
import '../CSS/themes.css';
import { useState } from 'react';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';

function App() {
  const [isDark, setIsDark] = useState(true);

  function handleToggleTheme() {
    setIsDark((prevIsDark) => !prevIsDark);
  }

  return (
    <div
      id="main"
      className={` ${isDark ? 'section dark-theme' : 'section light-theme'}`}
    >
      <Hero isDark={isDark} handleToggleTheme={handleToggleTheme} />
      <Skills isDark={isDark} />
      <About isDark={isDark} />
      <Projects isDark={isDark} />
      <Experience isDark={isDark} />
      <Contact isDark={isDark} />
    </div>
  );
}

export default App;
*/
