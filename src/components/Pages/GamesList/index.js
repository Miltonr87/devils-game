import React, { useEffect, useState } from "react";
import axios from "axios";
import { Badge } from "@material-ui/core";
import {
  GamesRecent,
  LinkRouter,
  GameMedia,
  GamePoster,
  Title,
} from "./GamesList";

const GamesList = () => {
  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`
    );
    console.log(data.results);
    setGames(data.results);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <>
      <GamesRecent>
        {games.map((game) => (
          <LinkRouter
            className="link"
            key={game.id}
            to={{
              pathname: `/game/${game.id}`,
              gameProps: {
                game: game,
              },
            }}
          >
            <GameMedia>
              <Badge
                badgeContent={game.rating}
                color={game.rating >= 4 ? "primary" : "error"}
              />
              <GamePoster
                className="game-poster"
                src={game.background_image}
                alt="game"
              />
              <Title className="title">{game.name}</Title>
            </GameMedia>
          </LinkRouter>
        ))}
      </GamesRecent>
      <br />
    </>
  );
};

export default GamesList;
