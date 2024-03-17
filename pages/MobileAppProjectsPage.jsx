import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Header from '../src/Header';
import Footer from '../src/Footer';
import './ProjectsPage.css';

function MobileAppProjectsPage() 
{

  const scrollToTop = () => 
  {
    window.scrollTo(
    {
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => 
  {
    const toggleVisibility = () => 
    {
      const scrollToTopButton = document.getElementById('scrollToTopButton');
      if (window.pageYOffset > 300) 
      {
        scrollToTopButton.style.display = 'block';
      } 
      else 
      {
        scrollToTopButton.style.display = 'none';
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => 
  {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Header isDarkMode={isDarkMode} toggleMode={toggleMode} />
      <div className="projects-page">
        <h2 className="page-title">Mobile App Projects</h2>
        <ul className="project-list">
          <li className="project">
            <a href="#vidayuda" className="project-link">
              <p>VidaYuda: Task management app</p>
            </a>
          </li>
        </ul>
      </div>
      <div id="vidayuda" className="project-section">
        <h2>VidaYuda: Task management app</h2>
        <img src="./images/mobile app/vidayuda.png" alt="Project 1"/>
        <br />
        <a href='https://appetize.io/app/wrjupenmxxqxetsbx2s5w6p3ra' target='_blank'>Link to app</a>
        <p>
        The app helps the user with their daily activities by storing tasks and reminders for the user.

        </p>
        <h3>Features</h3>
        <p>
          <ul>
            <li><b>User Registration and Login:</b> Users can create an account by registering with their email and password or logging in using their social media accounts.
            </li>
            <li><b>Personalized Profile:</b> Users can create and manage their profiles, including their name and profile picture.</li>
            <li><b>Set Reminders:</b> Users will be able to set reminders so they don’t forget important events or tasks.</li>
            <li><b>Schedule Maker:</b> Users can use this app to set schedules so their days can be more organized.</li>
            <li><b>List Creator:</b> Users can use the app to make To-Do lists, Shopping lists and any other type of list.</li>
            <li><b>Notifications and Reminders:</b> The app will send notifications and reminders to users to remind them about events and tasks they need to complete.</li>
          </ul>
        </p>
        <h3>Implementation</h3>
        <p>
            The app was made using XML and Java in Android Studio. 
            Broadcast receiver, BottomNavigationView, Fragments, Timers and SQLite for database were used in the app making process.
        </p>
        <h3>Challenges</h3>
        <p>
            One of the greatest challenges in developing the app was setting up the database because 
            I had very little knowledge on how to do so but I eventually got it to work. Another challenge 
            I had was with removing and deleting recycler views, but after watching some online tutorials, I fully understood how it worked.
        </p>
        <p>
            The app's basic and important functions work, but it could still be improved upon. And I, as the developer of the app, learnt a lot while making it.
        </p>
      </div>
      <button id="scrollToTopButton" onClick={scrollToTop}>Top</button>
    </div>
    
  );
}

export default MobileAppProjectsPage;
