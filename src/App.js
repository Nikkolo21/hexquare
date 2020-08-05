import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/main/Header';
import Footer from './components/main/Footer';
import Home from './components/main/Home';
import NotFound from './components/main/NotFound';
import Login from './components/session/Login';
import Register from './components/session/Register';
import CreateProject from './components/sections/inside/CreateProject';
import Inside from './components/sections/inside';
import { getItem } from './utils/localstorage';
import './services/interceptor';
import { AppProvider } from './context/app.context';
import './App.scss';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggleIsLoggedIn() {
    setIsLoggedIn(true);
  }
  return (
    <AppProvider value={{isLoggedIn, toggleIsLoggedIn}}>
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
            <PrivateRoute path='/ins'>
              <Inside/>
            </PrivateRoute>
            <PrivateRoute exact path="/create_project">
              <CreateProject/>
            </PrivateRoute>
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

function PrivateRoute({ children, ...rest }) {
  const isLoggedIn = !!getItem('tkn');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;
