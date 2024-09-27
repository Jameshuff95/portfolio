import '../CSS/App.css';
import '../CSS/About.css';
import Me from '../assets/me3.png';
import Accordion from './Accordion';

function About() {
  return (
    <div id="section accordions_container">
      <h4>Learn More About Me</h4>
      <Accordion
        title="Background"
        content={
          <div id="background_info">
            <img src={Me} alt="James Huff" />
            <div id="paragragh_container">
              <div>
                Passionate React.js developer with experience in PostgreSQL and
                SQL, currently pursuing a degree in Software Engineering.
              </div>
            </div>
          </div>
        }
      />
      <Accordion
        title="Motivations"
        content="Driven by a passion for technology and a desire to build a better life for my family."
      />
      <Accordion
        title="Aspirations"
        content="Aspire to leverage skills in React.js and database management to contribute to innovative solutions."
      />
    </div>
  );
}

export default About;
