import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { SWRConfig } from 'swr';
import { Sample } from './components/sample/index';
import Login from './components/pages/signin/index';
import Signup from './components/pages/signup/index';
import Navigation from './components/ui/navigation/index';

function App() {
  const windowInnerWidth = window.innerWidth;

  return (
    <ThemeProvider theme={theme}>
      <SWRConfig>
        <Navigation />
        <Switch>
          <Route exact path={'/'} component={Login} />
          <Route exact path={'/signup'} component={Signup} />
        </Switch>
      </SWRConfig>
    </ThemeProvider>
  );
}

export default App;
