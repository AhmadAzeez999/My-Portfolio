import React from 'react';

function PortfolioItem({ title, description, imageUrl }) 
{
  return (
    <div className="portfolio-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={imageUrl} alt={title} />
    </div>
  );
}

export default PortfolioItem;
