import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  DevelopersList,
  DeveloperMedia,
  DeveloperPoster,
  DeveloperTitle,
  DeveloperInfo,
} from "./Developers";

const Developers = () => {
  const [developers, setDevelopers] = useState([]);
  const fetchDevelopers = async () => {
    const { data } = await axios.get(
      `https://api.rawg.io/api/creators?key=${process.env.REACT_APP_API_KEY}`
    );
    console.log(data.results);
    setDevelopers(data.results);
  };

  useEffect(() => {
    fetchDevelopers();
  }, []);

  return (
    <>
      <DevelopersList>
        {developers.map((developer) => (
          <DeveloperMedia>
            <DeveloperPoster src={developer.image} alt="game" />
            <DeveloperTitle> {developer.name}</DeveloperTitle>
            <DeveloperInfo>
              {developer.games.map((game) => `${game.name} | `)}
            </DeveloperInfo>
          </DeveloperMedia>
        ))}
      </DevelopersList>
      <br />
    </>
  );
};

export default Developers;
