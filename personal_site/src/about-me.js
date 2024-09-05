import React from 'react';
import { DiPython } from 'react-icons/di';
import { FaDatabase } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiC } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { FaDocker } from 'react-icons/fa';
import { DiAws } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';










const AboutMe = () => {
  return (
    <section className="about-me">
        <div className='container color'>
            <h2 className='color-pink'>Overview</h2>
            <h1 className='font-size-h1 about-me-title'>About Me</h1>
            <div className='about-me-grid'>

            <div className='about-me-text'>

            <p className='font-size-p'>Welcome to my page! I'm Arden Monaghan, a 20-year-old Computing Science student at the University of Alberta with a deep passion for software development. My focus is on integrating artificial intelligence and machine learning into innovative solutions. I am constantly driven by the desire to expand my knowledge, stay at the forefront of technology, and contribute to the growth of others in the process. </p>
            <p className='font-size-p'>I pride myself on my ability to break down complex problems into manageable components, which helps me tackle challenges systematically and efficiently. My strong collaboration skills ensure that I can work seamlessly with teammates, fostering clear communication and aligning our efforts to meet objectives effectively.</p>
            <p className='font-size-p'>Outside of software development, I enjoy staying active through various sports, diving into books, and exploring exciting travel destinations to satisfy my curiosity for the world.</p>
            </div>
            <div className='about-me-skills'>
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
                            <FaDatabase size={40} color="#4479A1" />
                            <p>SQL</p>
                        </div>
                    </li>
                </ul>
                <ul className='about-me-skills-list'>
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
            </div>
            </div>
        </div>
    </section>
  );
};

export default AboutMe;
