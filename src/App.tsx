import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { SWRConfig } from 'swr';
import { RecoilRoot } from 'recoil';
import { Layout } from './components/common/Layout';
import ReactGA from 'react-ga';
function App() {
  ReactGA.initialize('G-TR1T8MX80V');
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig>
        <RecoilRoot>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: '1 0 auto',
              height: '100vh',
            }}
          >
            <Layout />
          </div>
        </RecoilRoot>
      </SWRConfig>
    </ThemeProvider>
  );
}

export default App;
