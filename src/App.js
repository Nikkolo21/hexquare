import React from 'react';
import './App.scss';
import Header from './main/header/Header';
import Footer from './main/footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './main/home/Home';
import NotFound from './main/not-found/NotFound';

function App() {
  return (
    <Router>
      <Header></Header>
      <main className="App">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
