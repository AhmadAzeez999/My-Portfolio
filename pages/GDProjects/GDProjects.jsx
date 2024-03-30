import React, {useState} from 'react';
import './GDProjects.css';
import Header from '../../src/Header';

const GDProjects = () => 
{
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => 
  {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Header isDarkMode={isDarkMode} toggleMode={toggleMode} />

      <div className="gd-projects">
        <h2 className="page-title">Graphic Design Projects</h2>
        <div className="project-grid">
          <div className="project">
            <img src="./images/Graphic Design/Boma.jpg" alt="Project 1" className="project-thumbnail" />
            <h3 className="project-title">Brand logo</h3>
          </div>
          <div className="project">
            <img src="./images/Graphic Design/KAMSSB Poster 1 v2.png" alt="Project 2" className="project-thumbnail" />
            <h3 className="project-title">Club poster</h3>
          </div>
          <div className="project">
            <img src="./images/Graphic Design/KAMSSB Poster 5.png" alt="Project 3" className="project-thumbnail" />
            <h3 className="project-title">Club poster 2</h3>
          </div>
          <div className="project">
            <img src="./images/Graphic Design/Nebula gym logo square 2.png" alt="Project 4" className="project-thumbnail" />
            <h3 className="project-title">Nebula Gym logo</h3>
          </div>
          <div className="project">
            <img src="./images/Graphic Design/Nebula gym Presentation background pics 3.png" alt="Project 5" className="project-thumbnail" />
            <h3 className="project-title">Nebula Gym poster</h3>
          </div>
          <div className="project">
            <img src="./images/Graphic Design/Phone ad 2 v2.png" alt="Project 6" className="project-thumbnail" />
            <h3 className="project-title">Phone ad</h3>
          </div>
          <div className="project">
            <img src="./images/Graphic Design/Phone ad 3.png" alt="Project 7" className="project-thumbnail" />
            <h3 className="project-title">Phone ad 2</h3>
          </div>
          <div className="project">
            <img src="./images/Graphic Design/Water Fish Melon.jpg" alt="Project 8" className="project-thumbnail" />
            <h3 className="project-title">Photoshoped Image</h3>
          </div>
          <div className="project">
            <img src="./images/Graphic Design/West ham logo 2.png" alt="Project 9" className="project-thumbnail" />
            <h3 className="project-title">Brand logo</h3>
          </div>
          <div className="project">
            <img src="./images/Graphic Design/wow.jpg" alt="Project 10" className="project-thumbnail" />
            <h3 className="project-title">Photoshoped Image</h3>
          </div>
        </div>
      </div>

    </div>
  );
}

export default GDProjects;
