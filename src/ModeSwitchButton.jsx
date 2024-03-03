import React from 'react';

function ModeSwitchButton({ onClick, isDarkMode }) 
{
  return (
    <button onClick={onClick}>
      {isDarkMode ? "🌙" : "☀️"}
    </button>
  );
}

export default ModeSwitchButton;