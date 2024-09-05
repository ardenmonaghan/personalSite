import Header from './header';


const Hero = () => (
  <div className="hero">
    
      <div className="hero-container">  
        <div className="container">
        <Header />
            <div className="hero-content">   
                <div className="hero-image">
                    <img className="hero-profile-image glow-effect" src={require('./images/arden.png')} alt="Arden Monaghan" />
                </div>
                <div className="hero-text">
                    <h2 className="color">Hello, I Am</h2>
                    <h1 className="color-pink">Arden Monaghan</h1>
                    <p className="color">3rd year Computing Science Specialization student at the University of Alberta. </p>
                    <div className='icons'>

                    
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
);

export default Hero;