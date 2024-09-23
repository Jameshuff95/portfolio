import '../CSS/Hero.css';
import '../CSS/App.css';

function Hero({ isDark, handleToggleTheme }) {
  return (
    <>
      <div className="intro_container">
        <i
          onClick={handleToggleTheme}
          className={`bi ${isDark ? 'bi-moon-fill' : 'bi-sun-fill'}`}
          style={isDark ? { color: '#7700ff' } : { color: 'gold' }}
        />
        <div id="intro_text1">
          <h1>James Huff</h1>
          <h3>Junior Web Developer</h3>
          <div className="introText2">
            <p>I build responsive and engaging digital learning web apps.</p>
          </div>
        </div>
        <div id="socials">
          <a href="">
            <i id="facebook" className="bi bi-facebook" />
          </a>
          <a href="">
            <i id="linkedin" className="bi bi-linkedin" />
          </a>

          <a href="">
            <i id="x" className="bi bi-twitter-x" />
          </a>

          <a href="">
            <i id="instagram" className="bi bi-instagram" />
          </a>

          <a href="" download>
            <i id="download" className="bi bi-download" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
