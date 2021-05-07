import React from 'react';
import './Game.css';

const Game = (props) => {
  const { game } = props.location.gameProps

  return (
    <div>
      <h1>{game.name}</h1>
      <p>Released: {game.released}</p>
      <p>Rating: {game.rating}</p>
      <h3>Genres:</h3>
        {game.genres.map(g => `${g.name} | `)}
      <h3>Platforms:</h3>
        {game.platforms.map(p => `${p.platform.name} | `)}
      <ul>
        {game.short_screenshots.map(ss => 
          <li>
            <img src={ss.image} alt='screenshot'></img>
          </li>)}
      </ul>
    </div>
  );
};

export default Game;