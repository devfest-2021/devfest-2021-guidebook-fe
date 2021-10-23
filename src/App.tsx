import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { SWRConfig } from 'swr';
import { Main } from './components/main';
import Signup from './components/pages/Modal';
import { LayoutContainer } from './styles/layout';
import Navigation from './components/ui/navigation/index';
import Modal from './components/pages/Modal';

function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(true);
  const setModal: any = (): void => {
    setModalOpen(!modalOpen);
  };
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig>
        {/*{modalOpen ? <Modal /> : null}*/}
        <Modal />
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
