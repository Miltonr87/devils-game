import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GamesList = () => {

    const [ content, setContent] = useState([]);

    const fetchGames = async () => {
        const { data } = await axios.get(
            `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`
            );
        
        console.log(data);    

        setContent(data.results);
    };

    useEffect(() => {
        fetchGames()
    }, []);



    return (
        <div>
            <span className="pageTitle">GamesList</span>
        </div>
    )
};

export default GamesList;