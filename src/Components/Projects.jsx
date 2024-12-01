import { useState } from 'react';
import '../index.css';
import '../CSS/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Project1',
      img: '#',
      alt: 'alt 1',
      description: 'Project description 1',
      type: '1',
    },
    {
      title: 'Project2',
      img: '#',
      alt: 'alt 2',
      description: 'Project description 2',
      type: '2',
    },
    {
      title: 'Project3',
      img: '#',
      alt: 'alt 3',
      description: 'Project description 3',
      type: '3',
    },
  ];

  Object.freeze(projects);

  const [filter, setFilter] = useState('');

  const filterProjects = () => {
    if (filter === '') {
      return projects;
    }
    return projects.filter((project) => project.type === filter);
  };

  const filteredProjects = filterProjects();

  return (
    <section className="section">
      <>
        <div id="filter_container">
          <p>Filter by type:</p>
          <select
            id="project_filter"
            aria-label="project filter dropdown"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option className="filter_option" value="">
              All
            </option>
            <option className="filter_option" value="1">
              Type 1
            </option>
            <option className="filter_option" value="2">
              Type 2
            </option>
            <option className="filter_option" value="3">
              Type 3
            </option>
          </select>
        </div>
      </>
      <ul className="container">
        {filteredProjects.map((project) => {
          return (
            <li className="projectCard" key={project.title}>
              <div id="projectTop">{project.title}</div>
              <div id="projectBottom">
                <img
                  src={project.img}
                  alt={project.alt}
                  className="project_thumbnail"
                />
                <p id="project_description">{project.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;

/*import '../CSS/Projects.css';
import '../CSS/App.css';
import React, { useState } from 'react';

function Projects({ isDark }) {
  const projects = [
    {
      id: '1',
      title: 'React Project 1',
      description: 'React Description 1',
      img: '#',
      category: 'react',
      repository: 'https://github.com/user/react-project-1',
      domain: 'https://react-project-1.com',
    },
    {
      id: '2',
      title: 'React Project 2',
      description: 'React Description 2',
      img: '#',
      category: 'react',
      repository: 'https://github.com/user/react-project-2',
    },
    {
      id: '3',
      title: 'React Project 3',
      description: 'React Description 3',
      img: '#',
      category: 'react',
      domain: 'https://react-project-3.com',
    },
    {
      id: '4',
      title: 'React Project 4',
      description: 'React Description 4',
      img: '#',
      category: 'react',
      repository: 'https://github.com/user/react-project-4',
      domain: 'https://c++-project-4.com',
    },
    {
      id: '5',
      title: 'C++ Project 1',
      description: 'C++ Description 1',
      img: '#',
      category: 'c++',
      repository: 'https://github.com/user/c++-project-1',
    },
    {
      id: '6',
      title: 'C++ Project 2',
      description: 'C++ Description 2',
      img: '#',
      category: 'c++',
      domain: 'https://c++-project-2.com',
    },
    {
      id: '7',
      title: 'C++ Project 3',
      description: 'C++ Description 3',
      img: '#',
      category: 'c++',
      repository: 'https://github.com/user/c++-project-1',
    },
    {
      id: '8',
      title: 'C++ Project 4',
      description: 'C++ Description 4',
      img: '#',
      category: 'c++',
      domain: 'https://c++-project-2.com',
    },
    {
      id: '9',
      title: 'SQL/MariaDB Project 1',
      description: 'SQL/MariaDB Description 1',
      img: '#',
      category: 'sql',
      repository: 'https://github.com/user/sql-project-1',
      domain: 'https://sql-project-1.com',
    },
    {
      id: '10',
      title: 'SQL/MariaDB Project 2',
      description: 'SQL/MariaDB Description 2',
      img: '#',
      category: 'sql',
      repository: 'https://github.com/user/sql-project-2',
    },
    {
      id: '11',
      title: 'SQL/MariaDB Project 3',
      description: 'SQL/MariaDB Description 3',
      img: '#',
      category: 'sql',
      domain: 'https://sql-project-3.com',
    },
    {
      id: '12',
      title: 'SQL/MariaDB Project 4',
      description: 'SQL/MariaDB Description 4',
      img: '#',
      category: 'sql',
      repository: 'https://github.com/user/sql-project-4',
      domain: 'https://sql-project-4.com',
    },
    {
      id: '13',
      title: 'Python Project 1',
      description: 'Python Description 1',
      img: '#',
      category: 'python',
      repository: 'https://github.com/user/c++-project-1',
    },
    {
      id: '14',
      title: 'Python Project 2',
      description: 'Python Description 2',
      img: '#',
      category: 'python',
      domain: 'https://c++-project-2.com',
    },
    {
      id: '15',
      title: 'Python Project 3',
      description: 'Python Description 3',
      img: '#',
      category: 'python',
      repository: 'https://github.com/user/c++-project-1',
    },
    {
      id: '16',
      title: 'Python Project 4',
      description: 'Python Description 4',
      img: '#',
      category: 'python',
      domain: 'https://c++-project-2.com',
    },
  ];

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedImage, setSelectedImage] = useState('');

  function handleSelectImage(event) {
    const newSelectedImage = event.target.id;
    setSelectedImage(newSelectedImage);
  }

  function filterOptions(event) {
    const category = event.target.value;
    const newFilteredProjects =
      category === '--All--'
        ? projects
        : projects.filter((project) => project.category === category);

    setFilteredProjects(newFilteredProjects);
  }

  return (
    <div
      id="section projects_container"
      className={`${isDark ? 'dark-theme' : 'light-theme'}`}
    >
      <h2 id="projects_title">Projects</h2>
      <div id="projects_header">
        <p>Filter By Type:</p>
        <select
          id="project_filter"
          onChange={filterOptions}
          className={`${isDark ? 'dark-theme' : 'light-theme'}`}
        >
          <option>--All--</option>
          <option value="react">React.js</option>
          <option value="c++">C++</option>
          <option value="sql">SQL / MariaDB</option>
          <option value="python">Python</option>
        </select>
      </div>
      <div id="projects_inner">
        {filteredProjects.map((project) => {
          let buttons = null;

          if (project.repository && project.domain) {
            buttons = (
              <>
                <button
                  className="project_button"
                  onClick={() => window.open(project.repository, '_blank')}
                >
                  Go To Repository
                </button>
                <button
                  className="project_button"
                  onClick={() => window.open(project.domain, '_blank')}
                >
                  Go to Site
                </button>
              </>
            );
          } else if (project.repository) {
            buttons = (
              <button
                className="project_button"
                onClick={() => window.open(project.repository, '_blank')}
              >
                Go To Repository
              </button>
            );
          } else if (project.domain) {
            buttons = (
              <button
                className="project_button"
                onClick={() => window.open(project.domain, '_blank')}
              >
                Go to Site
              </button>
            );
          }

          return (
            <div
              className={`${
                isDark ? 'project_card dark-theme' : 'project_card light-theme'
              }`}
              key={project.id}
            >
              <div
                className="thumbnail"
                id={project.id}
                onClick={handleSelectImage}
                style={{
                  display: selectedImage === project.id ? 'none' : 'block',
                  backgroundImage: `url(${project.img})`,
                  backgroundSize: 'cover',
                }}
              />
              {selectedImage === project.id && (
                <div
                  className={`${
                    isDark
                      ? 'project_image dark-theme'
                      : 'project_image light-theme'
                  }`}
                >
                  {buttons}
                </div>
              )}
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

*/
