import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './utils/motion';
// Import your image (adjust the path as needed)
import uofaImage from './images/uofa_logo.png';
import litLifeImage from './images/litlifeai_logo.jpg';

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
          {/* Timeline Entry 1 (Left) */}
          <div className="timeline-entry left">
            {/* Circle with icon (static) */}
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
                  Integrated SAM technology using PyTorch to correctly compare 3D hand meshes to ground truth 2D masks.
                  Fine-tuned model on manually created dataset of hand-object representations.
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
                <h3>Software Engineer & Product Management Intern (Explore)</h3>
                <h4>Microsoft</h4>
                <ul className="work-responsibilities">
                  <li>
                    Developing the Frontend for LitLife AI using Flutter and Supabase to connect widgets to backend queries. 
                  </li>
                  <li>
                    Contributing to the development of a secure user interaction system using Row Level Security. 
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
          <div className="timeline-entry left">
            {/* Circle with icon (static) */}
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
                <h3>Secretary</h3>
                <h4>Undergraduate Artifical Intellegence Society</h4>
                <ul className="work-responsibilities">
                  <li>
                    Organizing and participating in guest speaker nights with industry professionals to help students gain and connect with valuable industry knowledge.
                  </li>
                  <li>
                    
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
