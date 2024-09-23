import '../CSS/Skills.css';

function Skills() {
  const skills = [
    'HTML',
    'CSS',
    'Javascript',
    'React.js',
    'Typescript.js',
    'Python',
    'SQL / MariaDB',
    'PostgreSQL',
    'VSCode',
    'Git',
    'Github',
    'Netlify',
    'Vite',
    'XAMPP',
    'Windows Powershell',
  ];
  return (
    <div className="section">
      <h4 id="skills_title">Skills</h4>
      <ul id="skills_container">
        {skills.map((skill, index) => (
          <li key={index}>
            <i className="bi bi-check" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
