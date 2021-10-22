import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { SWRConfig } from 'swr';
import { Main } from './components/main';
import Signup from './components/pages/signup/index';
import { LayoutContainer } from './styles/layout';
import Navigation from './components/ui/navigation/index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig>
        <Navigation />
        <Switch>
          <Route path={''} component={Main} />
          <Route path={'/main'} component={Main} />
          <Route exact path={'/signup'} component={Signup} />
        </Switch>
      </SWRConfig>
    </ThemeProvider>
  );
}

export default App;
