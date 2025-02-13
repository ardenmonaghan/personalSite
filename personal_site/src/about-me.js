import React from 'react';
import { DiPython } from 'react-icons/di';
import { FaDatabase } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiC } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { FaDocker } from 'react-icons/fa';
import { DiAws } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { SiPytorch } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

import { motion } from 'framer-motion';
import { fadeIn, TextVariant } from './utils/motion';

const AboutMe = () => {
  return (
    <section className="about-me" id="about">
        <div className='container color'>
            <motion.div variants={fadeIn('right', 'spring', 0.2, 1)} initial="hidden"  whileInView="show" viewport={{ once: true }}>
            <h2 className='color-pink'>Overview</h2>
            <h1 className='font-size-h1 about-me-title'>About Me</h1>
            </motion.div>
            <div className='about-me-grid'>

            <div className='about-me-text'>

            <motion.p variants={fadeIn('up', 'spring', 0.2, 1)}  initial="hidden"  whileInView="show" viewport={{ once: true }} className='font-size-p'>Welcome to my page! I'm Arden Monaghan, a 21-year-old Computing Science student at the University of Alberta with a deep passion for Machine Learning and Data Science. My focus is on integrating AI and ML into practical and innovative applications. I am constantly driven by the desire to expand my knowledge, stay at the forefront of technology, and contribute to the growth of others in the process. </motion.p>
            <motion.p variants={fadeIn('up', 'spring', 0.3, 1)}  initial="hidden"  whileInView="show" viewport={{ once: true }} className='font-size-p'>I pride myself on my ability to break down and explain complex problems into manageable components. I pride myself on my ability to be a strong collaborator and effective communicator. If there is something I don't understand, I will always ask tons of questions to get a better understanding! </motion.p>
            <motion.p variants={fadeIn('up', 'spring', 0.4, 1)}  initial="hidden"  whileInView="show" viewport={{ once: true }} className='font-size-p'>Outside of Programming and Machine Learning, I enjoy having a healthy lifestyle playing a variety of sports like soccer and badminton. I am always trying to increase my perspective on life through understanding perspectives of others and exploring exciting travel destinations to satisfy my curiosity for the world.</motion.p>
            </div>
            <motion.div variants={fadeIn('left', 'spring', 0.2, 1)}  initial="hidden"  whileInView="show" viewport={{ once: true }} className='about-me-skills'>
                <ul className='about-me-skills-list'>
                    <li>
                        <div className='about-me-skills-item'>
                            <DiPython size={40} color="#306998" />
                            <p>Python</p>
                        </div>
                    </li>
                    <li>
                        <div className='about-me-skills-item'>                           
                            <SiC size={40} color="#555555" />
                            <p>C</p>
                        </div>
                    </li>
                    <li>
                        <div className='about-me-skills-item'>                           
                            <DiJavascript1 size={40} color="#F0DB4F" />
                            <p>JavaScript</p>
                        </div>
                    </li>
                    <li>
                        <div className='about-me-skills-item'>
                            <FaJava size={40} color="#007396" />
                            <p>Java</p>
                        </div>
                    </li>
                    <li>
                        <div className='about-me-skills-item'>    
                            <FaDatabase size={40} color="#4479A1" />
                            <p>SQL</p>
                        </div>
                    </li>
                </ul>
                <ul className='about-me-skills-list'>
                    <li>
                        <div className='about-me-skills-item'>
                            <SiPytorch size={40} color="#EE4C2C" />
                            <p>PyTorch</p>
                        </div>
                    </li>
                    <li>
                        <div className='about-me-skills-item'>
                            <FaGitAlt size={40} color="#F05032" />
                            <p>Git</p>
                        </div>
                    </li>
                    
                    <li>
                        <div className='about-me-skills-item'>
                            <FaDocker size={40} color="#2496ED" />
                            <p>Docker</p>
                        </div>
                    </li>
                    <li>
                        <div className='about-me-skills-item'>
                            <DiAws size={40} color="#FF9900" />
                            <p>AWS</p>
                        </div>
                    </li>
                    <li>
                        <div className='about-me-skills-item'>
                            <FaReact size={40} color="#61DAFB" />
                            <p>React</p>
                        </div>
                    </li>
                </ul>
            </motion.div>
            </div>
        </div>
    </section>
  );
};

export default AboutMe;
