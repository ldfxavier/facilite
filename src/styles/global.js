import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-family: 'Nunito', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }

  h1 {
    font-size: 64px;
  }

  h2 {
    font-size: 48px;
  }

  h3 {
    font-size: 32px;
  }

  h4 {
    font-size: 24px;
  }

  h5 {
    font-size: 16px;
  }

  h6 {
    font-size: 10px;
  }
`;
