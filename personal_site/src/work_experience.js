import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './utils/motion';

import uofaImage from './images/uofa_logo.png';
import litLifeImage from './images/litlifeai_logo.jpg';
import uaisImage from './images/UAIS_Logo.png';
import safewayImage from './images/Safeway.png';

const WorkExperience = () => {
  return (
    <section className="work-experience" id="work">
      <div className="container color">
        <motion.div 
          variants={fadeIn('right', 'spring', 0.2, 1)} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true }}
        >
          <h2 className="color-pink">What I have done so far</h2>
          <h1 className="font-size-h1 about-me-title">Work Experience</h1>
        </motion.div>
        
        <div className="vertical-timeline">
    
          <div className="timeline-entry left">
        
            <div className="timeline-icon">
              <img src={uofaImage} alt="University of Alberta" />
            </div>
        
            <motion.div 
              variants={fadeIn('right', 'spring', 0.2, 1)} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }}
            >
              <p className="work-date">Jan 2025 - Present</p>
              <div className="timeline-content">
                <h3>CV Research Assistant</h3>
                <h4>ECE Department, University of Alberta</h4>
                <ul className="work-responsibilities">
                  <li>
                  Assisting in Building a Computer Vision pipeline to calibrate multiple cameras and estimate 3D
                  hand-joint positions using ArUco Marker detection, camera-pose estimation, and frame transformations.
                  </li>
                  <li>
                  Used SAM2 and YOLO bounding boxes to compare 3D hand meshes to ground truth 2D masks.
                  Manually created, annotated, and labeled a dataset of hand-object representations for fine-tuning.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
          <div className="timeline-entry right">  
            <div className="timeline-icon">
              <img src={litLifeImage} alt="litLife" />
            </div>
            <motion.div 
              variants={fadeIn('left', 'spring', 0.2, 1)} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }}
            >
              <p className="work-date">Nov 2024 - Present</p>
              <div className="timeline-content">
                <h3>Front End Developer</h3>
                <h4>LitLife AI</h4>
                <ul className="work-responsibilities">
                  <li>
                    Developing the Frontend for LitLife AI using Flutter and Supabase to connect widgets to backend queries. 
                  </li>
                  <li>
                    Contributing to the development of a secure user interaction system using Supabase Row Level Security. 
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
          <div className="timeline-entry left">
           
            <div className="timeline-icon">
              <img src={uaisImage} alt="Undergraduate Artifical Intellegence Society" />
            </div>
        
            <motion.div 
              variants={fadeIn('right', 'spring', 0.2, 1)} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }}
            >
              <p className="work-date">April 2024 - Present</p>
              <div className="timeline-content">
                <h3>Secretary</h3>
                <h4>Undergraduate Artifical Intellegence Society</h4>
                <ul className="work-responsibilities">
                  <li>
                    Organizing and participating in guest speaker nights with industry professionals to help students gain and connect with valuable industry knowledge.
                  </li>
                  <li>Guiding over 100 students per semester in understanding the fundamentals of data cleaning and supervised
                  learning through scikit-learn workshops and seminars.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
          <div className="timeline-entry right">  
            <div className="timeline-icon">
              <img src={safewayImage} alt="litLife" />
            </div>
            <motion.div 
              variants={fadeIn('left', 'spring', 0.2, 1)} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }}
            >
              <p className="work-date">April 2020 - Aug 2023</p>
              <div className="timeline-content">
                <h3>Bakery Clerk</h3>
                <h4>Safeway</h4>
                <ul className="work-responsibilities">
                  <li>
                    Demonstrated strong customer service and communication skills over many years of dedicated experience.
                  </li>
                  <li>
                    Learned to work in a fast-paced environment and manage time effectively with 12 other co-workers. 
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
                     
        </div>    
        
      </div>
    </section>
  );
};

export default WorkExperience;
