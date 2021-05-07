import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainNav from './components/MainNav';
import GamesList from './components/Pages/GamesList';
import Game from './components/Pages/Game';
import SearchGames from './components/Pages/SearchGames';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path='/' component={GamesList} exact />
            <Route path='/game/:id' component={Game} />
            <Route path='/search' component={SearchGames} />
          </Switch>
        </Container>
      </div>
      <MainNav />
    </BrowserRouter>
  );
}

export default App;
