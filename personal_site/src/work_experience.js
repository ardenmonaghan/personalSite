import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './utils/motion';

const WorkExperience = () => {
    return (
        <section className="about-me" id="work">
            <div className='container color'>
                <motion.div variants={fadeIn('right', 'spring', 0.2, 1)} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <h2 className='color-pink'>What I have done so far</h2>
                    <h1 className='font-size-h1 about-me-title'>Work Experience</h1>
                </motion.div>
                
                <div className='vertical-timeline'>
                    <motion.div 
                        variants={fadeIn('right', 'spring', 0.2, 1)} 
                        initial="hidden" 
                        whileInView="show" 
                        viewport={{ once: true }} 
                        className='timeline-entry left'
                    >
                        <div className='timeline-content'>
                            <h3>Machine Learning Undergraduate Student Researcher</h3>
                            <h4>University of Alberta, FORT Lab</h4>
                            <p className='work-date'>Sep 2024 - Present</p>
                            <ul className='work-responsibilities'>
                                <li>Driving research on missing data handling in machine learning to enhance algorithmic robustness and reliability.</li>
                                <li>Developing scalable solutions to optimize model performance on incomplete datasets using cutting-edge methodologies.</li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div 
                        variants={fadeIn('left', 'spring', 0.3, 1)} 
                        initial="hidden" 
                        whileInView="show" 
                        viewport={{ once: true }} 
                        className='timeline-entry right'
                    >
                        <div className='timeline-content'>
                            <h3>Software Engineer & Product Management Intern (Explore)</h3>
                            <h4>Microsoft</h4>
                            <p className='work-date'>May 2024 - Aug 2024</p>
                            <ul className='work-responsibilities'>
                                <li>Collaborating on a project to integrate Microsoft Azure Logic Apps and Azure Static Web Apps, enhancing cloud-based solutions and user experience.</li>
                                <li>Contributing to the development of scalable serverless applications that empower global businesses.</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;