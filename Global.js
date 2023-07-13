import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 body {
      background: rgb(20,20,20);
      color: white;
    }
  #wrap {
    overflow: hidden;
    position: relative;
    width: 100%;
    margin: 0 auto;
  }
`;

export default GlobalStyle;