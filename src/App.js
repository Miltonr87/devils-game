import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainNav from './components/MainNav';
import GamesList from './components/Pages/GamesList';
import Games from './components/Pages/Games';
import Search from './components/Pages/Search';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path='/' component={GamesList} exact />
            <Route path='/games' component={Games} />
            <Route path='/search' component={Search} />
          </Switch>
        </Container>
      </div>
      <MainNav />
    </BrowserRouter>
  );
}

export default App;
