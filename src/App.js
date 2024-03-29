import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import Login from './pages/Login';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
