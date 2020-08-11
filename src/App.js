import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { AppProvider } from './context/app.context';

// general
import Header from './components/main/Header';
import Footer from './components/main/Footer';
import Home from './components/main/Home';
import NotFound from './components/main/NotFound';

// session
import Login from './components/session/Login';
import Register from './components/session/Register';

// inside
import CreateProject from './components/sections/inside/CreateProject';

// admin
import Nav from './components/sections/admin/Nav';
import Admin from './components/sections/admin';
import Visual from './components/sections/admin/Visual';
import Assets from './components/sections/admin/Assets';
import Code from './components/sections/admin/Code';

import './services/interceptor';
import './App.scss';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggleIsLoggedIn() {
    setIsLoggedIn(true);
  }
  return (
    <AppProvider value={{isLoggedIn, toggleIsLoggedIn}}>
      <Router>
        <main className="App">
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/o">
              <Route exact path="/o/login">
                <Login/>
              </Route>
              <Route exact path="/o/register">
                <Register/>
              </Route>
            </Route>
            
            <Route path="/i">
              <Route exact path="/i/projects">
                <Admin/>
              </Route>
              <Route path='/i/project/:id/:child'>
                <Nav/>
                <Route path='/i/project/:id/visual'>
                  <Visual/>
                </Route>
                <Route exact path='/i/project/:id/assets'>
                  <Assets/>
                </Route>
                <Route exact path='/i/project/:id/code'>
                  <Code/>
                </Route>
              </Route>
              <Route exact path="/i/create_project">
                <CreateProject/>
              </Route>
            </Route>

            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </main>
        <Footer></Footer>
      </Router>
    </AppProvider>
  );
}

export default App;
