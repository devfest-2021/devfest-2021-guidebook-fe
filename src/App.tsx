import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { SWRConfig } from 'swr';
import { Main } from './components/main';
import Login from './components/main/Signin';

import { LayoutContainer } from './styles/layout';
import Navigation from './components/ui/navigation/index';
import Modal from './components/ui/navigation/Modal';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig>
        <Navigation />
        <Switch>
          <Route path={''} component={Main} />
          <Route path={'/main'} component={Main} />
        </Switch>
      </SWRConfig>
    </ThemeProvider>
  );
}

export default App;
