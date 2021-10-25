import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { SWRConfig } from 'swr';
import { Main } from './components/main';
import { atom, useSetRecoilState, RecoilRoot } from 'recoil';
import SignUp from './components/ui/navigation/Modal/SignUp';
import Signin from './components/ui/navigation/Modal/SignIn';
import { LayoutContainer } from './styles/layout';
import Navigation from './components/ui/navigation/index';

function App() {
  const modal = atom<boolean>({
    key: 'modal',
    default: false,
  });
  // const [modalOpen, setModalOpen] = useSetRecoilState<boolean>(modal);
  const modalHandle = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig>
        <RecoilRoot>
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
        </RecoilRoot>
      </SWRConfig>
    </ThemeProvider>
  );
}

export default App;
