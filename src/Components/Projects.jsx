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
    },
    {
      id: '2',
      title: 'React Project 2',
      description: 'React Description 2',
      img: '#',
      category: 'react',
    },
    {
      id: '3',
      title: 'React Project 3',
      description: 'React Description 3',
      img: '#',
      category: 'react',
    },
    {
      id: '4',
      title: 'C++ Project 1',
      description: 'C++ Description 1',
      img: '#',
      category: 'c++',
    },
    {
      id: '5',
      title: 'C++ Project 2',
      description: 'C++ Description 2',
      img: '#',
      category: 'c++',
    },
    {
      id: '6',
      title: 'C++ Project 3',
      description: 'C++ Description 3',
      img: '#',
      category: 'c++',
    },
    {
      id: '7',
      title: 'SQL Project 1',
      description: 'SQL Description 1',
      img: '#',
      category: 'sql',
    },
    {
      id: '8',
      title: 'SQL Project 2',
      description: 'SQL Description 2',
      img: '#',
      category: 'sql',
    },
    {
      id: '9',
      title: 'SQL Project 3',
      description: 'SQL Description 3',
      img: '#',
      category: 'sql',
    },
    {
      id: '10',
      title: 'Python Project 1',
      description: 'Python Description 1',
      img: '#',
      category: 'python',
    },
    {
      id: '11',
      title: 'Python Project 2',
      description: 'Python Description 2',
      img: '#',
      category: 'python',
    },
    {
      id: '12',
      title: 'Python Project 3',
      description: 'Python Description 3',
      img: '#',
      category: 'python',
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
        {filteredProjects.map((project) => (
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
                <button className="project_button">Go To Repository</button>
                <button className="project_button">Go to site</button>
              </div>
            )}
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
