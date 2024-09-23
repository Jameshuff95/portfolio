import '../CSS/Experience.css';
import '../CSS/App.css';

function Experience({ isDark }) {
  const experiences = [
    {
      id: 1,
      title: 'Experience 1',
      duties: ['Duty 1', 'Duty 2', 'Duty 3', 'Duty 4', 'Duty 5'],
      time1: '2015',
      time2: '2016',
      position: 'Position A',
    },
    {
      id: 2,
      title: 'Experience 2',
      duties: ['Duty 1', 'Duty 2', 'Duty 3', 'Duty 4', 'Duty 5'],
      time1: '2016',
      time2: '2018',
      position: 'Position B',
    },
    {
      id: 3,
      title: 'Experience 3',
      duties: ['Duty 1', 'Duty 2', 'Duty 3', 'Duty 4', 'Duty 5'],
      time1: '2019',
      time2: '2020',
      position: 'Position C',
    },
    {
      id: 4,
      title: 'Experience 4',
      duties: ['Duty 1', 'Duty 2', 'Duty 3', 'Duty 4', 'Duty 5'],
      time1: '2020',
      time2: '2022',
      position: 'Position D',
    },
  ];

  return (
    <div
      className={`${
        isDark
          ? 'section experience_container dark-theme'
          : 'section experience_container light-theme'
      }`}
    >
      <h4>Experience</h4>
      {experiences.map((experience) => (
        <div
          key={experience.id}
          className={`${
            isDark ? 'experience dark-theme' : 'experience light-theme'
          }`}
        >
          <div className="exp_left">
            <div id="timespan">
              <p>{`${experience.time1} - ${experience.time2}`}</p>
            </div>
            <h5 id="position">{experience.position}</h5>
          </div>
          <div className="exp_right">
            <ul id="description">
              {experience.duties.map((duty, index) => (
                <li key={index}>{duty}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
