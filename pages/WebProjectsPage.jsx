import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Header from '../src/Header';
import Footer from '../src/Footer';
import './ProjectsPage.css';

function ProjectsPage() 
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

  return (
    <div>
      <Header />
      <div className="hero-image">
        <h2 className="page-title">My Website Projects</h2>
      </div>
      <div className="projects-page">
        <ul className="project-list">
          <li className="project">
            <a href="#indie-game-studio" className="project-link">
            <p>Indie Game Studio Website</p>
            </a>
          </li>
          <li className="project">
            <a href="#cosmetic-website" className="project-link">
            <p>Cosmetic Website with PHP</p>
            </a>
          </li>
          <li className="project">
            <a href="#techinez" className="project-link">
            <p>TechinEZ (E-Commerce website scraper)</p>
            </a>
          </li>
          <li className="project">
            <a href="#flashcard-website" className="project-link">
              <p>Flashcard Website with PHP</p>
            </a>
          </li>
          <li className="project">
            <a href="#png-trimmer" className="project-link">
              <p>Automatic PNG Image Trimmer</p>
            </a>
          </li>
        </ul>
      </div>
      <div id="indie-game-studio" className="project-section">
        <h2>Indie Game Studio Website</h2>
        <img src="./images/Upraid.PNG" alt="Project 1"/>
        <a href='https://ahmadazeez999.github.io/Website-for-Indie-Game-Company/' target='_blank'>Website link</a>
        <p>
          This was the first website I ever worked on. 
          It's a website for a fictional indie game studio called "UPRAID".

        </p>
        <h3>Functionalities</h3>
        <p>
          <ul>
            <li><b>Homepage:</b> The homepage displays the latest
              games from the studio.
            </li>
            <li><b>Contact Us page:</b> The contact details for the company's customer support</li>
            <li><b>About:</b> To know more about the company</li>
            <li><b>Blog:</b> For current updates</li>
            <li><b>Games:</b> For display all the games made by the company.</li>
          </ul>
        </p>
      </div>
      <div id="cosmetic-website" className="project-section">
        <h2>Cosmetic Website with PHP</h2>
        <img src="./images/Cosmetic.PNG" alt="Project 2"/>
        <p>
        Developed 'Cosmetico,' an e-commerce platform for a fictional cosmetics retailer, 
        featuring secure login/signup, shopping cart, and dynamic forms. Built with PHP, jQuery, and MySQL.
        </p>
        <h3>Objectives</h3>
        <p>
          <ul>
            <li>Provide users with an engaging online shopping experience for cosmetic products.</li>
            <li>Showcase a variety of cosmetic products with detailed descriptions and high-quality images.</li>
            <li>Allow users to create accounts, log in, and securely manage their profiles.</li>
            <li>Ensure a responsive and visually appealing design that adapts to various devices, offering a seamless browsing experience.</li>
          </ul>
        </p>
        <h3>Key Features</h3>
        <p>
          <ul>
            <li>User Registration and Authentication.
              <br/>
              <img src="./images/cosmetico images/0.jpg"></img>
              <img src="./images/cosmetico images/1.jpg"></img>
              <img src="./images/cosmetico images/2.jpg"></img>
            </li>
            <li>Forms and Data Input.
              <br/>
              <img src="./images/cosmetico images/3.jpg"></img>
            </li>
            <li>Error Handling
              <br/>
              <img src="./images/cosmetico images/4.jpg"></img>
              <img src="./images/cosmetico images/5.jpg"></img>
            </li>
            <li>Database Management</li>
            <li>Session Management</li>
            <li>User-friendly interface</li>
            <li>Dynamic product listings</li>
            <li>Seamless checkout process
              <br/>
              <img src="./images/cosmetico images/6.jpg"></img>
              <img src="./images/cosmetico images/7.jpg"></img>
              <img src="./images/cosmetico images/8.jpg"></img>
              <img src="./images/cosmetico images/9.jpg"></img>
            </li>
            <li>Mobile responsive
              <br/>
              <img src="./images/cosmetico images/10.jpg"></img>
              <img src="./images/cosmetico images/11.jpg"></img>
            </li>
          </ul>
        </p>
        <h3>Technologies Used</h3>
        <h4>Programming Languages:</h4>
        <p>
          <ul>
            <li>PHP for server-side scripting.</li>
            <li>JavaScript for client-side interaction.</li>
            <li>HTML/CSS for frontend development.</li>
          </ul>
        </p>
        <h4>Database:</h4>
        <p>
          <ul>
            <li>MySQL for data storage.</li>
          </ul>
        </p>
      </div>
      <div id="techinez" className="project-section">
        <h2>TechinEZ</h2>
        <img src="./images/TechinEZ.PNG" alt="Project 3"/>
        <p>
        TechinEZ is a website designed to simplify the process of finding and comparing 
        tech products across various e-commerce websites. The website employs web scraping 
        technology to gather product information based on user input, specifications, and budget constraints. 
        Users can input the name of a product, set their budget, and add specific attributes to narrow down their search.
        <br/>
        <br/>
        It was developed by two people:
        <br/>
        Ahmad Azeez (Front-end development)
        <br/>
        Jay Mistry (Back-end development)
        </p>
      </div>
      <div id="flashcard-website" className="project-section">
        <h2>Flashcard Website with PHP</h2>
        <img src="./images/Flashcard website.PNG" alt="Project 4"/>
        <p>
          This website can be used for creating, deleting, and storing
          flashcards. This is especially useful for people who are learning a new
          language and want to keep track of the new words they've learnt.
          <br/>
          <br/>
          Using PHP and MySql, I was able to save any created flashcard to the database,
          and whenever a flashcard is deleted, it gets removed from the database.
        </p>
      </div>
      <div id="png-trimmer" className="project-section">
        <h2>Automatic PNG Image Trimmer</h2>
        <img src="./images/PNG Trimmer.PNG" alt="Project 1"/>
        <br />
        <a href='https://ahmadazeez999.github.io/Automatic-PNG-Image-Trimmer/' target='_blank'>Website link</a>
        <p>I do a lot of image, video editing, and website development, and getting png images online
            is something I do pretty much all the time. But there was something that always annoyed me
            when I'm searching for images online, and that's when the actual graphic or logo in the 
            png was way smaller than the size of the png itself.
            <br />
            <br />
            Whenever I wanted to put different png images together in a website
            I'm working on, some images end up looking smaller than the others because of the difference in how
            the graphics are sized in the png images.
            <br />
            <br />
            So to fix this, I always had to go to photoshop, crop the png image, then save the newly cropped image.
            This was fine, but I wanted a faster way, so I can increase my workflow, then I made this.
            <br />
            <br />
            This was made using an algorithm I wrote in javascript that checks each pixel in and image, and detects which pixels are
            transparent and which ones aren't.
        </p>
      </div>
      <button onClick={scrollToTop} id="scrollToTopButton" style={{display: 'none', position: 'fixed', bottom: '20px', right: '20px'}}>Go to Top</button>
      <Footer />
    </div>
  );
}

export default ProjectsPage;
