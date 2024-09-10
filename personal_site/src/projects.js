import React from 'react';
import scienceImg from './images/science.png';
import posImg from './images/pos.png';
import autoRecruiterImg from './images/background.jpg';



const Project = ({ name, description, time, link, image, tags}) => {
    return (
        <div className='project-card'>
            <div className='project-info'>
              <div className='project-image-container'>
              <img className="project-image" src={image} alt={name} />
              </div>
                <div>
                <h3 className='color font-size-h3'>{name}</h3>
                <p className='project-time'>{time}</p>
                <p className='project-p'>{description}</p>
                <a className='project-link' href={link} target="_blank" rel="noopener noreferrer">
                    Link to Project
                </a>
                <div className='project-tags'>

                {tags && tags.map((tag, index) => (
                  <span key={index} className="project-tag">{tag}  </span>
                ))}
                </div>
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'MentorMatch UAlberta',
      time: 'April 2024 - Sept 2024',
      description: 'MentorMatch Ualberta is a Software that utilizes Natural Language Processing Models to help students in the Science Mentorship Program at UAlberta be matched with mentors. Optimizing the time significantly for Program Coordinators and Mentors',
      link: 'https://project1.com',
      tags: ["Python", "PyQT", "Ollama", "NLP"],
      image: scienceImg
      
      
    },
    {
      id: 2,
      name: 'NHL Positivity Index',
      time: 'Jan 2024 - Sept 2024',
      description: "This project involved conducting sentiment analysis on data from the NHL subreddit to measure the positivity associated with each of the 32 NHL teams by fine-tuning the cardiffnlp/twitter-roberta-base-sentiment-latest model specifically on hockey-related sentiment data.",
      link: 'https://project2.com',
      image: posImg,
      tags: ["Python", "HuggingFace", "Sentiment Analysis", "PRAW", "SeaBorn"]
    },
    {
      id: 3,
      name: 'AutoRecruiter',
      time:'Sept 2024 - Present',
      description: 'AutoRecruiter is a software that utilizes AI to help Science Students fill out their applications faster using autocomplete tools',
      link: 'https://project1.com',
      tags: ["React", "Express JS", "Google Extensions", "Llama 3", "NLP"],
      image: autoRecruiterImg
      
    }

    // Add more projects as needed
  ];

  return (
    <section className="projects">
        <div className='container'>
            <h2 className='color-pink'>My Work</h2>
            <h1 className='font-size-h1 color'>Projects</h1> 
            <div className='project-description'>
            <p className='color font-size-p'>This portfolio showcases a variety of projects that demonstrate my technical expertise and document my growth as a programmer. Each project reflects my ability to solve complex problems, work with a wide range of technologies, and successfully manage projects from initial concept to final delivery.</p>
            </div>
            <div className='project-grid'>
                <Project name={projects[0].name} description={projects[0].description} time={projects[0].time} link={projects[0].link} image={projects[0].image} tags={projects[0].tags}/>
                <Project name={projects[1].name} description={projects[1].description} time={projects[1].time} link={projects[1].link} image={projects[1].image} tags={projects[1].tags}/>
                <Project name={projects[2].name} description={projects[2].description} time={projects[2].time} link={projects[2].link} image={projects[2].image} tags={projects[2].tags}/>
            </div>
        </div>
    </section>
  );
};

export default Projects;
