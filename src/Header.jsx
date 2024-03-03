import React from 'react';
import ModeSwitchButton from './ModeSwitchButton';
import { Link } from 'react-router-dom';
import './Header.css'

function Header({ toggleMode, isDarkMode }) 
{
  return (
    <header>
      <div className='header-elements'>
        <h1>My Portfolio</h1>
        
        <div className="mode-switch-container">
          <ModeSwitchButton onClick={toggleMode} isDarkMode={isDarkMode} />
        </div>
      </div>
      <nav>
          <Link to="/" className="project-link">Home</Link>
        </nav>
    </header>
  );
}
export default Header;
