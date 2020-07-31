import React from 'react';
import './App.scss';
import Header from './components/main/header/Header';
import Footer from './components/main/footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/main/home/Home';
import NotFound from './components/main/not-found/NotFound';
import Login from './components/session/login/Login';
import Register from './components/session/register/Register';

function App() {
  return (
    <Router>
      <Header></Header>
      <main className="App">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/register">
            <Register/>
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
