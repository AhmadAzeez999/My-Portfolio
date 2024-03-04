import React, { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import './PortfolioButton.css';

function PortfolioButton({ imageSrc, alt, additionalImage1Src, linkTo }) 
{
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => 
    {
      entries.forEach((entry) => 
      {
        if (entry.isIntersecting) 
        {
          entry.target.classList.add('animate-slide-up');
        } 
        else 
        {
          entry.target.classList.remove('animate-slide-up');
        }
      });
    });

    observer.observe(containerRef.current);

    return () => 
    {
      observer.disconnect();
    };
  }, []);

  return (
    <Link to={linkTo}>
      <div ref={containerRef} className="portfolio-button-container">
      <div className="overlay">
        <div className="added-image-container">
          <img src={additionalImage1Src} alt={alt} className="slide-up-image" />
        </div>
      </div>

      <button className="portfolio-button">
        <img src={imageSrc} alt={alt} className="portfolio-image" />
      </button>
    </div>
    </Link>
  );
}

export default PortfolioButton;
