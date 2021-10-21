import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { SWRConfig } from 'swr';
import { Main } from './components/main';
import { LayoutContainer } from './styles/layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig>
        <Switch>
          <Route path={''} component={Main} />
          <Route path={'/main'} component={Main} />
        </Switch>
      </SWRConfig>
    </ThemeProvider>
  );
}

export default App;
