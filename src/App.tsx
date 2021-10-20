import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { SWRConfig } from 'swr';
import { Sample } from './components/sample';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig>
        <Sample />
      </SWRConfig>
    </ThemeProvider>
  );
}

export default App;
