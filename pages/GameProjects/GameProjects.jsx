import React, { useState } from 'react';
import './GameProjects.css';
import Header from '../../src/Header';

export const GameProjects = () => 
{
    const [selectedGame, setSelectedGame] = useState(null);

    const handlePlayButtonClick = (game) => {
      setSelectedGame(game);
    };
  
    const handleCloseGame = () => {
      setSelectedGame(null);
    };

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => 
    {
      setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <Header isDarkMode={isDarkMode} toggleMode={toggleMode} />

            <div className='gameProjects'>
            {selectedGame && (
                <div className="game-window">
                <button onClick={handleCloseGame} className="close-button">Close</button>
                <iframe src={`./src/assets/Games/${selectedGame}/index.html`} title={`Game ${selectedGame}`} className="game-frame"></iframe>
                </div>
            )}

            <h2 className="page-title">My Games</h2>
            <div className="game-list">
                <div className="game">
                    <img src="./images/Typie Wipy cover.png" alt="Game 1" />
                    <h3>Typing Game</h3>
                    <p>A typing game I made with the Game Maker Studio Engine</p>
                    <button onClick={() => handlePlayButtonClick("Typie Wipy")} className="play-button">Play</button>
                </div>
            </div>
        </div>
        </div>
    );
}
