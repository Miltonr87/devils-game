import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { Grid } from "@material-ui/core"; 
import './GamesList.css';

const GamesList = () => {
    const [ games, setGames] = useState([]);

    const fetchGames = async () => {
        const { data } = await axios.get(
            `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`
            );
        console.log(data.results);    
        setGames(data.results);
    };

    useEffect(() => {
        fetchGames()
    }, []);

    return (
        <div>
            <div className="trending" >
                {games.map(game => (
                    <Link 
                    className="link"
                    key={game.id}
                    to={{
                        pathname: `/game/${game.id}`,
                        gameProps:{
                        game: game
                        }
                    }}>
                        <div className="media">
                                <img 
                                className="game-poster" 
                                src={game.background_image} 
                                alt="game" />
                                    <b className="title">{game.name}</b>
                                    <span className="subTitle">Teste / 
                                    <span className="subTitle"> Teste2 </span>    
                                    </span>
                        </div>
                    </Link>))}
            </div>    
        </div> 
    )
};

export default GamesList;