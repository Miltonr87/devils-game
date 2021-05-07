// https://api.rawg.io/api/creators
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { Grid } from "@material-ui/core"; 
import { Badge } from '@material-ui/core';
// import './GamesList.css';

const Developers = () => {
    const [ games, setGames] = useState([]);

    const fetchGames = async () => {
        const { data } = await axios.get(
            `https://api.rawg.io/api/creators?key=${process.env.REACT_APP_API_KEY}`
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
                            <Badge 
                            badgeContent={game.rating}
                            color={game.rating >= 4? 'primary' : 'error'} />
                                <img 
                                className="game-poster" 
                                src={game.image} 
                                alt="game" />
                                    <b className="title"> {game.name}</b>
                                    <span className="subTitle"> {game.games.map(g => `${g.name} - `)}  
                                    </span>
                        </div>
                    </Link>))}
            </div>
            <div>
                   <br />
                   <br />
            </div>    
        </div> 
    )
};

export default Developers;
