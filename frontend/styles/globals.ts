import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.palette.bg.main};
    // color: rgba(255, 255, 255, 0.66);
    color: #000000;
    transition: all 0.50s linear;
    font-family: Gilroy, Helvetica, Arial, Roboto, sans-serif;
    -webkit-tap-highlight-color: transparent;
  }

`;
