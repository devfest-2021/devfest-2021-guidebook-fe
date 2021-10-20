import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Navigation from './Components/Navigation';
import Section from './Pages/Section';
import './App.css';

function App() {
  return (
    <>
      <Navigation />

      <Switch>
        <Route exact path="/" component={Section} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Section" component={Section} />
      </Switch>
    </>
  );
}

export default App;
