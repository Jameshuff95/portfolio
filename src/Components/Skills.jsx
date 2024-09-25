import '../CSS/Skills.css';
import { useState, useEffect } from 'react';

function Skills() {
  const skills = [
    ['HTML', 'CSS', 'Javascript', 'React.js', 'Typescript.js', 'Python'],
    ['SQL / MariaDB', 'PostgreSQL'],
    [
      'VSCode',
      'Git',
      'Github',
      'Netlify',
      'Vite',
      'XAMPP',
      'Windows Powershell',
    ],
  ];

  const skillTitles = [
    'Languages / Frameworks',
    'Databases',
    'Version Control / Build Tools / Misc.',
  ];

  const [skillIndex, setSkillIndex] = useState(0);
  const [skillTitleIndex, setSkillTitleIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  function handleIsClicked(e) {
    if (e.target.id === 'left') {
      setSkillIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : skills.length - 1
      );
      setSkillTitleIndex((prevTitleIndex) =>
        prevTitleIndex > 0 ? prevTitleIndex - 1 : skillTitles.length - 1
      );
    } else if (e.target.id === 'right') {
      setSkillIndex((prevIndex) =>
        prevIndex < skills.length - 1 ? prevIndex + 1 : 0
      );
      setSkillTitleIndex((prevTitleIndex) =>
        prevTitleIndex < skillTitles.length - 1 ? prevTitleIndex + 1 : 0
      );
    }
    setIsClicked(!isClicked);
  }

  useEffect(() => {
    console.log(skillIndex);
  }, [skillIndex]);

  return (
    <div className="section">
      <h4>Skills</h4>
      <div id="skills_container">
        <i className="bi bi-chevron-left" id="left" onClick={handleIsClicked} />
        <div className="skill">
          <h4 id="skills_title">{skillTitles[skillTitleIndex]}</h4>
          <ul id="languages">
            {skills[skillIndex].map((skill, index) => (
              <li key={index}>
                <i className="bi bi-check" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <i
          className="bi bi-chevron-right"
          id="right"
          onClick={handleIsClicked}
        />
      </div>
    </div>
  );
}

export default Skills;
