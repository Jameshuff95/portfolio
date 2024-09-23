import '../CSS/Experience.css';
import '../CSS/App.css';

function Experience({ isDark }) {
  const experiences = [
    {
      id: 1,
      title: 'Experience 1',
      duties: 'duty list 1',
      time1: 'Time1 A',
      time2: 'Time1 B',
      position: 'Position A',
    },
    {
      id: 2,
      title: 'Experience 2',
      duties: 'duty list 2',
      time1: 'Time2 A',
      time2: 'Time2 B',
      position: 'Position B',
    },
    {
      id: 3,
      title: 'Experience 3',
      duties: 'duty list 3',
      time1: 'Time3 A',
      time2: 'Time3 B',
      position: 'Position C',
    },
    {
      id: 4,
      title: 'Experience 4',
      duties: 'duty list 4',
      time1: 'Time4 A',
      time2: 'Time4 B',
      position: 'Position D',
    },
  ];

  return (
    <div
      className={`${
        isDark
          ? ' experience_container dark-theme'
          : 'experience_container light-theme'
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
          <div id="timespan">
            <p>{`${experience.time1} - ${experience.time2}`}</p>
          </div>
          <h5 id="position">{experience.position}</h5>
          <p id="description">{experience.duties}</p>
        </div>
      ))}
    </div>
  );
}

export default Experience;
