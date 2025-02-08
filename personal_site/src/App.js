import Hero from './hero';
import AboutMe from './about-me';
import Projects from './projects';
import Footer from './footer';
import WorkExperience from './work_experience';



function App() {
  return (
    <div className="app-container"> 
     <Hero />
     <AboutMe />
     <WorkExperience />
     <Projects />
     <Footer />
    </div>
  );  
}

export default App;
