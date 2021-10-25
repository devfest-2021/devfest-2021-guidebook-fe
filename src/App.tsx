import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { SWRConfig } from 'swr';
import { RecoilRoot } from 'recoil';
import { Layout } from './components/common/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig>
        <RecoilRoot>
          <Layout />
        </RecoilRoot>
      </SWRConfig>
    </ThemeProvider>
  );
}

export default App;
