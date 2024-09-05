import React from 'react';


const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Project 1',
      description: 'Description of Project 1',
      link: 'https://project1.com'
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'Description of Project 2',
      link: 'https://project2.com'
    },
    // Add more projects as needed
  ];

  return (
    <section className="projects">
        <div className='container'>
            <h2>My Projects</h2>
            <ul>
                {projects.map(project => (
            <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        ))}
            </ul>
        </div>
    </section>
  );
};

export default Projects;
