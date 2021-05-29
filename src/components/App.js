import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './landingPage/landing_page'

function App() {
  return (
    <>
      <Route>
        <LandingPage/>
      </Route>
    </>
  );
}

export default App;
