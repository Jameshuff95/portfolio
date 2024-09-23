import '../CSS/App.css';
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
