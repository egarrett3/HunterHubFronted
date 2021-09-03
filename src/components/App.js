import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute, ProtectedRoute } from '../util/auth_routes';
import LandingPage from './landingPage/landing_page'
import Home from './homePage/home'


function App() {

  return (
    <>
      <Switch>
        <PrivateRoute path='/home' component={Home} />
        <ProtectedRoute exact path='/' component={LandingPage} />
      </Switch>
    </>
  );
}

export default App;