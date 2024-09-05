import React from 'react';



const Project = ({ name, description, link, image}) => {
    return (
        <div className='project-card'>
            <div className='project-info'>
                <h3>{name}</h3>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
            </div>
        </div>
    )
}
const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'MentorMatch UAlberta',
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
            <h2 className='color-pink'>My Work</h2>
            <h1 className='font-size-h1 color'>Projects</h1> 
            <div className='project-grid'>
                <Project name={projects[0].name} description={projects[0].description} link={projects[0].link} image={projects[0].image}/>
                <Project name={projects[0].name} description={projects[0].description} link={projects[0].link} image={projects[0].image}/>
                <Project name={projects[0].name} description={projects[0].description} link={projects[0].link} image={projects[0].image}/>
            </div>
        </div>
    </section>
  );
};

export default Projects;
