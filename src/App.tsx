import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Navigation from './Components/Navigation';
import Section from './Pages/Section';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { SWRConfig } from 'swr';
import { Sample } from './components/sample';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig>
        <Sample />
       <Navigation />
      <Switch>
        <Route exact path="/" component={Section} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/section" component={Section} />
      </Switch>
      </SWRConfig>
    </ThemeProvider>

  );
}

export default App;
