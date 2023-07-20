import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 body {
      background: rgb(20,20,20);
      color: white;
      font-family: 'Bagel Fat One', cursive;
font-family: 'Nanum Gothic', sans-serif;
font-family: 'Orbit', sans-serif;
button {
  color: black;
}
    }
  #wrap {
    overflow: hidden;
    position: relative;
    width: 100%;
    margin: 0 auto;
  }
`;

export default GlobalStyle;