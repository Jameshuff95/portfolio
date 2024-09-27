import '../CSS/Projects.css';
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
    // Add other projects similarly...
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
      <h4 id="projects_title">Projects</h4>
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
