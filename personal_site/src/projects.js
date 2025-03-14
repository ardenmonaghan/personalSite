import React from 'react';
import scienceImg from './images/science.png';
import posImg from './images/pos.png';
import portfolioImg from "./images/portfolio.png"
import neuralNetworkImg from "./images/neural_network.png"
import { motion } from 'framer-motion';
import { fadeIn, opacity } from './utils/motion';
import moodifyImg from './images/moodify.png'



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
      description: 'MentorMatch UAlberta is a Software that utilizes an LLM integrated Algorithm which helps the Science Mentorship Program match mentors with mentees. Optimizing the time significantly for program coordinators and mentors from multiple days to minutes.',
      link: 'https://github.com/MentorMatch1',
      tags: ["Python", "PyQt6", "Ollama", "NLP", "Docker"],
      image: scienceImg
    },
    {
      id: 2,
      name: 'Moodify',
      time:'Jan 2025 - Mar 2025',
      description: 'Moodify is a full stack Android application that follows a Twitter style design. Some features include a user following system, a user feed for individuals you currently follow, and geolocation based moods to see how people are feeling in your area. CMPUT 301 Winter 2025 Group Project.',
      link: 'https://github.com/ardenmonaghan/',
      tags: ["Android Studio", "Java", "Firebase", "Git"],
      image: moodifyImg
    },
    {
      id: 3,
      name: 'NHL Positivity Index',
      time: 'Sept 2023 - Jan 2024',
      description: "This project involved conducting sentiment analysis on data from the NHL subreddits to measure the positivity associated with each of the 32 NHL teams by fine-tuning the cardiffnlp/twitter-roberta-base-sentiment-latest model specifically on hockey-related sentiment data.",
      link: 'https://uais.dev/projects/nhl-positivity-index/',
      image: posImg,
      tags: ["Python", "HuggingFace", "Sentiment Analysis", "PRAW", "Matplotlib"]
    },  
    {
      id: 4,
      name: 'Scratch Neural Network',
      time:'December 2024',
      description: 'This is a neural network built from scratch only using Numpy and Linear Algebra to perform forward propagation and backpropagation. It explains the fundementals of how neural networks work and how I was able to implement it on the MNIST dataset for classifying images 1-9 The model achieves >90% Accuracy on 50 Epochs. Additionally it includes a CNN via PyTorch to classify images of many different objects.',
      link: 'https://github.com/ardenmonaghan/Neural_Network_Test',
      tags: ["Pytorch", "CNNs", "Neural Networks", "Machine Learning", "Python", "Numpy", "Matplotlib"],
      image: neuralNetworkImg
    },
    {
      id: 5,
      name: 'Portfolio Website',
      time:'August 2024 - Present',
      description: 'This website is a portfolio of my work and a showcase of my skills. It is built using React, JavaScript, CSS. It is hosted on Vercel.',
      link: 'https://github.com/ardenmonaghan/personalSite',
      tags: ["HTML", "CSS", "JavaScript", "ReactJS", "Vercel"],
      image: portfolioImg
    }
  ];

  return (
    <section className="projects" id="projects">
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
              <motion.div variants={opacity(1.5,3)} initial="hidden"  whileInView="show" viewport={{ once: true }}>
                <Project name={projects[4].name} description={projects[4].description} time={projects[4].time} link={projects[4].link} image={projects[4].image} tags={projects[4].tags}/>
              </motion.div>
            </div>
        </div>
    </section>
  );
};

export default Projects;
