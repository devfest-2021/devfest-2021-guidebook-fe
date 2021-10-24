import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { SWRConfig } from 'swr';
import { Main } from './components/main';

import SignUp from './components/ui/navigation/Modal/SignUp';
import Signin from './components/ui/navigation/Modal/SignIn';
import { LayoutContainer } from './styles/layout';
import Navigation from './components/ui/navigation/index';
import Modal from './components/ui/navigation/Modal/SignUp';

function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(true);
  const modalHandle = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig>
        <Navigation />
        {/*{modalOpen ? (*/}
        {/*  <SignUp modalHandle={modalHandle} visible={'none'} />*/}
        {/*) : null}*/}
        {/*{modalOpen ?  : null}*/}
        {/*<Signin modalHandle={modalHandle} visible={'none'} />*/}
        <Switch>
          <Route path={''} component={Main} />
          <Route path={'/main'} component={Main} />
        </Switch>
      </SWRConfig>
    </ThemeProvider>
  );
}

export default App;
