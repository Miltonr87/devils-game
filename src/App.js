import { createGlobalStyle } from "styled-components";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import MainNav from "./components/MainNav";
import GamesList from "./components/Pages/GamesList";
import Game from "./components/Pages/Game";
import Developers from "./components/Pages/Developers";
import SearchGames from "./components/Pages/SearchGames";

const GlobalStyle = createGlobalStyle`
  * {
      scroll-behavior: smooth;
      font-family: 'Ubuntu';
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .app {
      min-height: 100vh;
      background-color: #223343;
      color: white;
      padding-top: 130px;
  }

  @media(max-width: 700px) {
      .app {
          padding-top: 70px;
      }
}`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <div className="app">
          <Container>
            <Switch>
              <Route path="/" component={GamesList} exact />
              <Route path="/game/:id" component={Game} />
              <Route path="/developers" component={Developers} />
              <Route path="/searchgames" component={SearchGames} />
            </Switch>
          </Container>
        </div>
        <MainNav />
      </BrowserRouter>
    </>
  );
}

export default App;
