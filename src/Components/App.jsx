import '../CSS/App.css';
import '../CSS/themes.css';
import { useState } from 'react';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  const [isDark, setIsDark] = useState(true);

  function handleToggleTheme() {
    setIsDark((prevIsDark) => !prevIsDark);
  }

  return (
    <div id="main" className={` ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <Hero isDark={isDark} handleToggleTheme={handleToggleTheme} />
      <Projects isDark={isDark} />
      <About isDark={isDark} />
      <Experience isDark={isDark} />
      <Contact isDark={isDark} />
    </div>
  );
}

export default App;
