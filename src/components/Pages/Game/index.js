import React from "react";
import { useHistory } from "react-router-dom";
import {
  GameSection,
  ScreenshotsContainer,
  ScreenshotsList,
  Screenshots,
  ButtonLabel,
  ButtonUI,
} from "./Game";
import BackspaceIcon from "@material-ui/icons/Backspace";

const Game = (props) => {
  const history = useHistory();
  const { game } = props.location.gameProps;
  let ScreenshotData = game.short_screenshots.map((ss) => (
    <ScreenshotsList>
      <Screenshots src={ss.image} alt="screenshot" />
    </ScreenshotsList>
  ));

  return (
    <GameSection>
      <h1>{game.name}</h1>
      <p>Released: {game.released}</p>
      <p>Rating: {game.rating}</p>
      <h3>Genres:</h3>
      {game.genres.map((g) => `${g.name} | `)}
      <h3>Platforms:</h3>
      {game.platforms.map((p) => `${p.platform.name} | `)}
      <ScreenshotsContainer>{ScreenshotData}</ScreenshotsContainer>
      <ButtonLabel>
        <ButtonUI onClick={() => history.push("/")}>
          <BackspaceIcon style={{ fontSize: "2.1rem", color: "white" }} />
        </ButtonUI>
      </ButtonLabel>
    </GameSection>
  );
};

export default Game;
