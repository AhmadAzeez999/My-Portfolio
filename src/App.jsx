import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';
import PortfolioButton from './PortfolioButton';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App() 
{
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => 
  {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Header isDarkMode={isDarkMode} toggleMode={toggleMode} />
      <div className="hero-image">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/PNG Trimmer.PNG"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Automatic PNG Image Trimmer</h3>
              <p>A website that automatically crops png images with transparent backgrounds.
                Removing irrelevant spaces.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/ml showcase.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Something cool I made</h3>
              <p>I like how this turned out. For now. I can see myself 
                thinking differently in the future.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Section title="About Me">
      <div className="about-section">
        My name is Ahmad Azeez. I am currently pursuing my degree in computer science at Thompson Rivers University, 
        where I am honing my skills in various programming languages such as Java, Python, C++, and more. Additionally, 
        I have experience in web development using HTML, CSS, JavaScript, and frameworks like Node.js and React.
        <br />
        <br />
        As a software developer, I specialize in crafting Android applications using Android Studio and Java, as well as 
        creating Windows Forms applications with C#. I also have proficiency in game development using Unity and C#.
        <br />
        <br />
        My goal is to contribute my expertise to an organization where I can continue to learn and grow while making 
        meaningful contributions to its success. I am excited about the opportunity to leverage my skills and resources 
        to drive positive outcomes for the team and the business. 
        <br />
        <br />
        I'm fascinated by the potential of machine learning algorithms to make predictions and learn from data, 
        and I'm excited about the applications of machine learning across various industries.
        <br />
        <br />
        <a href="https://github.com/AhmadAzeez999" target="_blank">
        <img src="./images/logos/github-logo.png" alt="Github logo" height="50px"></img>
          My Github
        </a>
        <br/>
        <br/>
        <section className='logo-section'>
          <img src="./images/logos/java-logo.png" alt="Github logo" height="50px"></img>
          <img src="./images/logos/html logo.png" alt="Github logo" height="50px"></img>
          <img src="./images/logos/css logo.png" alt="Github logo" height="50px"></img>
          <img src="./images/logos/JavaScript-logo.png" alt="Github logo" height="50px"></img>
          <img src="./images/logos/nodejs logo.png" alt="Github logo" height="50px"></img>
          <img src="./images/logos/python logo.png" alt="Github logo" height="50px"></img>
          <img src="./images/logos/Csharp_Logo.png" alt="Github logo" height="50px"></img>
          <img src="./images/logos/C++_logo.png" alt="Github logo" height="50px"></img>
          <img src="./images/logos/C_Logo.png" alt="Github logo" height="50px"></img>
          <img src="./images/logos/Jupyter_logo.png" alt="Github logo" height="50px"></img>
          <img src="./images/logos/sql logo.png" alt="Github logo" height="50px"></img>
          <img src="./images/logos/plsql logo.png" alt="Github logo" height="50px"></img>
          <img src="./images/logos/unity logo.png" alt="Github logo" height="50px"></img>
        </section>
      </div>
      </Section>
      <Section title="Projects">
        <div className="portfolio-buttons-container">
          <PortfolioButton imageSrc="./images/ml portfolio banner.png" alt="Project 1" 
          additionalImage1Src="./images/ml showcase.png"
          linkTo="" />
          <PortfolioButton imageSrc="./images/web.png" alt="Project 1" 
          additionalImage1Src="./images/website showcase 1.png"
          linkTo="websiteProjects" />
          <PortfolioButton imageSrc="./images/mobile app portfolio banner.png" alt="Project 2"
          additionalImage1Src="./images/mobile app showcase.png"
          linkTo="" />
          <PortfolioButton imageSrc="./images/games portfolio banner.png" alt="Project 2"
          additionalImage1Src="./images/games showcase.png"
          linkTo="" />
          <PortfolioButton imageSrc="./images/others portfolio banner.png" alt="Project 2"
          additionalImage1Src="./images/others showcase.png"
          linkTo="" />
          
        </div>
      </Section>
      <Footer />
    </div>
  );
}

export default App;