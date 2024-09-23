import '../CSS/Projects.css';
import '../CSS/App.css';
import React, { useState } from 'react';

function Projects({ isDark }) {
  const projects = [
    {
      id: 1,
      title: 'One',
      description: 'description 1',
      img: '#',
      category: 'A',
    },
    {
      id: 2,
      title: 'Two',
      description: 'description 2',
      img: '#',
      category: 'B',
    },
    {
      id: 3,
      title: 'Three',
      description: 'description 3',
      img: '#',
      category: 'C',
    },
    {
      id: 4,
      title: 'Four',
      description: 'description 4',
      img: '#',
      category: 'C',
    },
    {
      id: 5,
      title: 'Five',
      description: 'description 5',
      img: '#',
      category: 'B',
    },
    {
      id: 6,
      title: 'Six',
      description: 'description 6',
      img: '#',
      category: 'C',
    },
    {
      id: 7,
      title: 'Seven',
      description: 'description 7',
      img: '#',
      category: 'D',
    },
    {
      id: 8,
      title: 'Eight',
      description: 'description 8',
      img: '#',
      category: 'A',
    },
  ];

  const [filteredProjects, setFilteredProjects] = useState(projects);

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
      id="projects_container"
      className={`${isDark ? 'dark-theme' : 'light-theme'}`}
    >
      <div id="projects_header">
        <h4>Projects</h4>
        <select
          id="project_filter"
          onChange={filterOptions}
          className={`${isDark ? 'dark-theme' : 'light-theme'}`}
        >
          <option>--All--</option>
          <option value="A">Category 1</option>
          <option value="B">Category 2</option>
          <option value="C">Category 3</option>
        </select>
      </div>
      <div id="projects_inner">
        {filteredProjects.map((project) => (
          <div
            className={`${
              isDark ? 'project_card dark-theme' : 'project_card light-theme'
            }`}
            key={project.id}
          >
            <div
              className={`${
                isDark
                  ? 'project_image dark-theme'
                  : 'project_image light-theme'
              }`}
            />
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
