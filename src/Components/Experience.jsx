import '../CSS/Experience.css';
import '../CSS/App.css';

function Experience({ isDark }) {
  const experiences = [
    {
      id: 1,
      title: 'Personal Projects',
      duties: [
        'Developed a personal portfolio website using React.js, showcasing my skills and projects.',
        'Created a task management app with JavaScript, HTML, and CSS, implementing CRUD operations.',
        'Built a weather forecasting app using React.js and integrated it with a third-party API.',
      ],
      time1: '2021',
      time2: 'Present',
      position: 'Self-Taught Developer',
    },
    {
      id: 2,
      title: 'Academic Projects',
      duties: [
        'Designed and implemented a database management system using SQL for a college project.',
        'Developed a simple game using C++ as part of a coursework assignment.',
      ],
      time1: '2019',
      time2: '2023',
      position: 'Student Developer',
    },
    {
      id: 3,
      title: 'Online Courses & Certifications',
      duties: [
        'Completed a React.js course on Udemy, building several small projects to solidify my understanding.',
        'Earned a certification in Python programming from Coursera.',
        'Participated in a JavaScript bootcamp, enhancing my skills in modern JavaScript frameworks.',
      ],
      time1: '2020',
      time2: '2022',
      position: 'Self-Learner',
    },
  ];

  return (
    <section
      className={`${
        isDark
          ? 'section experience_container dark-theme'
          : 'section experience_container light-theme'
      }`}
    >
      <h2>Experience</h2>

      {experiences.map((experience) => (
        <article
          key={experience.id}
          className={`${
            isDark ? 'experience dark-theme' : 'experience light-theme'
          }`}
        >
          <div className="exp_left">
            <div id="timespan">
              <p>{`${experience.time1} - ${experience.time2}`}</p>
            </div>
            <h6 id="position">{experience.position}</h6>
          </div>

          <div className="exp_right">
            <ul id="description">
              {experience.duties.map((duty, index) => (
                <li key={index}>{duty}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Experience;
