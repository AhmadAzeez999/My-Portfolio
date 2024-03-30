import React, { useState } from 'react';
import './OtherProjects.css';
import Header from '../../src/Header';

const OtherProjects = () => 
{
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => 
    {
      setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <Header isDarkMode={isDarkMode} toggleMode={toggleMode} />

                <div className="other-projects">
                <h2 className="page-title">Other Projects</h2>
                <div className="project-grid">
                <div className="project">
                    <a href="https://addons.mozilla.org/en-CA/firefox/addon/number-selection-calculator/" target='_blank'>
                        <img src="./images/Extension.png" alt="Project 1" className="project-thumbnail" />
                        <h3 className="project-title">Number Selection Calculator Firefox Extension</h3>
                    </a>
                </div>
                </div>
            </div>

        </div>
    );
}

export default OtherProjects;