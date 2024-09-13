import Header from './header';
import { FaLinkedin } from 'react-icons/fa';
// import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
// import { FaEnvelope } from "react-icons/fa";

import { motion } from 'framer-motion';
import { opacity } from './utils/motion';

const Hero = () => (
  <section className="hero">
    
      <div className="hero-container">  
        <div className="container">
        <Header />
            <motion.div variants={opacity(0.2, 1)}  initial="hidden"  whileInView="show" viewport={{ once: true }} className="hero-content">   
                <div className="hero-image">
                    <img className="hero-profile-image glow-effect" src={require('./images/arden.png')} alt="Arden Monaghan" />
                </div>
                <div className="hero-text">
                    <h2 className="color">Hello, I Am</h2>
                    <h1 className="color-pink">Arden Monaghan</h1>
                    <p className="color">3rd year Computing Science Specialization student at the University of Alberta. </p>
                    <div className='hero-icons'>
                    <a href="https://www.linkedin.com/in/arden-monaghan-574959243" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={40} color="#0e76a8" />
                    </a>
                    <a href="https://github.com/ardenmonaghan" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={40} color="#181717" />
                    </a>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
  </section>
);

export default Hero;