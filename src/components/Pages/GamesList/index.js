import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GameContent from '../../GameContent';
// import { Link } from 'react-router-dom'

const GamesList = () => {

    const [ games, setGames] = useState([]);

    const fetchGames = async () => {
        const { data } = await axios.get(
            `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`
            );
        
        // console.log(data.results);    

        setGames(data.results);
    };

    useEffect(() => {
        fetchGames()
    }, []);



    return (
        <div>
            <span className="pageTitle">GamesList</span>
            <div className="gamesList">
            {games.map((game) => 
            <GameContent 
                key={game.id} 
                image={game.background_image} 
                name={game.name} 
                date={game.released}
                rating={game.rating} />)}
            </div>
        </div>
    )
};

export default GamesList;