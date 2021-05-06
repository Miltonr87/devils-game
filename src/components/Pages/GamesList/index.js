import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import GameContent from '../../GameContent';
import { Link } from 'react-router-dom'

const GamesList = () => {

    const [ games, setGames] = useState([]);

    const fetchGames = async () => {
        const { data } = await axios.get(
            `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`
            );
        
        console.log(data);    

        setGames(data.results);
    };

    useEffect(() => {
        fetchGames()
    }, []);



    return (
        <div>
            <span className="pageTitle">GamesList</span>
            <div className="gamesList">
            {
        games.map(game => (
          <li key={game.id}>
            <Link to={{
                pathname: `/game/${game.name}`,
                gameProps:{
                  game: game
                }
              }}>
            <h3>{game.name}</h3>
            <img src={game.background_image} alt="game"/>
            </Link>
          </li>
        ))
      }
            </div>
        </div>
    )
};

export default GamesList;