import React from 'react';
import scienceImg from './images/science.png';
import posImg from './images/pos.png';
import autoRecruiterImg from './images/AutoRecruiter.png';
import localParseImg from './images/background.jpg';

import { motion } from 'framer-motion';
import { fadeIn, opacity } from './utils/motion';



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
      description: 'MentorMatch Ualberta is a Software that utilizes Natural Language Processing Models to help students in the Science Mentorship Program at UAlberta be matched with mentors. Optimizing the time significantly for Program Coordinators and Mentors.',
      link: 'https://project1.com',
      tags: ["Python", "PyQT", "Ollama", "NLP", "Docker"],
      image: scienceImg
      
      
    },
    {
      id: 2,
      name: 'NHL Positivity Index',
      time: 'Sept 2023 - Jan 2024',
      description: "This project involved conducting sentiment analysis on data from the NHL subreddit to measure the positivity associated with each of the 32 NHL teams by fine-tuning the cardiffnlp/twitter-roberta-base-sentiment-latest model specifically on hockey-related sentiment data.",
      link: 'https://uais.dev/projects/nhl-positivity-index/',
      image: posImg,
      tags: ["Python", "HuggingFace", "Sentiment Analysis", "PRAW", "SeaBorn"]
    },
    {
      id: 3,
      name: 'AutoRecruiter',
      time:'Sept 2024 - Present',
      description: 'AutoRecruiter is a software that utilizes AI to help UOFA Science Students fill out their applications faster using autocomplete tools, resume checkers to see compatibility with job postings and career advice',
      link: 'https://www.linkedin.com/company/autorecruiter-ualberta',
      tags: ["React", "Express JS", "Google Extensions", "Llama 3", "NLP", "Python"],
      image: autoRecruiterImg
      
    },
    {
      id: 4,
      name: 'LocalParse',
      time:'Sept 2024 - Present',
      description: 'LocalParse is a software that Utilizes LLMs to parse through large documents and quickly retrieve + summarize information without compromising on privacy. Uses Downloadable Software GUI Interface for Easy Access and Usability',
      link: 'https://github.com/ardenmonaghan/LocalParse-ML',
      tags: ["Python", "Ollama", "Langchain", "PyQt6", "SQLite"],
      image: localParseImg
    }
  ];

  return (
    <section className="projects">
        <div className='container'>
            <motion.div variants={fadeIn('up', 'spring', 0.2, 1)}  initial="hidden"  whileInView="show" viewport={{ once: true }} className='project-title'>
            <h2 className='color-pink'>My Work</h2>
            <h1 className='font-size-h1 color '>Projects</h1> 
            </motion.div>
            <motion.div variants={fadeIn('left', 'spring', 0.4, 1)}  initial="hidden"  whileInView="show" viewport={{ once: true }} className='project-description'>
              <p className='color font-size-p project-paragraph'>This portfolio showcases a variety of projects that demonstrate my technical expertise and document my growth as a programmer. Each project reflects my ability to solve complex problems, work with a wide range of technologies, and successfully manage projects from initial concept to final delivery.</p>
            </motion.div>
            <div className='project-grid'>
              <motion.div variants={opacity(0.5,1)} initial="hidden"  whileInView="show" viewport={{ once: true }}>
                <Project name={projects[0].name} description={projects[0].description} time={projects[0].time} link={projects[0].link} image={projects[0].image} tags={projects[0].tags}/>
              </motion.div>
              <motion.div variants={opacity(0.75,1.5)} initial="hidden"  whileInView="show" viewport={{ once: true }}>
                <Project name={projects[1].name} description={projects[1].description} time={projects[1].time} link={projects[1].link} image={projects[1].image} tags={projects[1].tags}/>
              </motion.div>
              <motion.div variants={opacity(1,2)} initial="hidden"  whileInView="show" viewport={{ once: true }}>
                <Project name={projects[2].name} description={projects[2].description} time={projects[2].time} link={projects[2].link} image={projects[2].image} tags={projects[2].tags}/>
              </motion.div>
              <motion.div variants={opacity(1.25,2.5)} initial="hidden"  whileInView="show" viewport={{ once: true }}>
                <Project name={projects[3].name} description={projects[3].description} time={projects[3].time} link={projects[3].link} image={projects[3].image} tags={projects[3].tags}/>
              </motion.div>
            </div>
        </div>
    </section>
  );
};

export default Projects;
