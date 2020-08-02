import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/main/Header';
import Footer from './components/main/Footer';
import Home from './components/main/Home';
import NotFound from './components/main/NotFound';
import Login from './components/session/Login';
import Register from './components/session/Register';

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
