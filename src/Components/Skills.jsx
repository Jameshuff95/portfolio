import '../CSS/Skills.css';
import { useState } from 'react';

const skillsData = [
  {
    title: 'Languages & Frameworks',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'TypeScript', 'Python'],
  },
  {
    title: 'Database Languages',
    skills: ['SQL / MariaDB', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Miscellaneous Technologies',
    skills: [
      'VSCode',
      'Git',
      'GitHub',
      'Netlify',
      'Vite',
      'XAMPP',
      'Windows PowerShell',
    ],
  },
];

const Skills = () => {
  const [skillIndex, setSkillIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleIsClicked = (e) => {
    if (e.target.id === 'left') {
      setSkillIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : skillsData.length - 1
      );
    } else if (e.target.id === 'right') {
      setSkillIndex((prevIndex) =>
        prevIndex < skillsData.length - 1 ? prevIndex + 1 : 0
      );
    }
    setIsClicked(!isClicked);
  };

  return (
    <section className="section">
      <h2>Skills</h2>
      <div id="skills_container">
        <button
          className="bi bi-chevron-left"
          id="left"
          onClick={handleIsClicked}
          aria-label="Previous skills"
        />
        <div className="skill">
          <h3 id="skills_title">{skillsData[skillIndex].title}</h3>
          <ul id="languages">
            {skillsData[skillIndex].skills.map((skill, index) => (
              <li key={index}>
                <span aria-hidden="true">
                  <i className="bi bi-check" />
                </span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <button
          className="bi bi-chevron-right"
          id="right"
          onClick={handleIsClicked}
          aria-label="Next skills"
        />
      </div>
    </section>
  );
};

export default Skills;
