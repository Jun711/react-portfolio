import { injectGlobal } from 'styled-components';
import { themeColor, charcoal } from "./variables";

/* eslint-disabled */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    color: ${themeColor};
    height: 100%;
    letter-spacing: 0.0625em;
  }
  
  h1, h2, h3 {
    text-align: center;
    margin-bottom: 5;
  }
  
  h1 {
    font-weight: 700;
  }
  
  h2 {
    font-weight: 600;
  }
  
  h3 {
    font-weight: 500;
  }
  
  hr {
    margin: 25px auto;
    border: 2px solid ${themeColor};
    max-width: 14em;  
  }
  
  h3 + hr {
    margin: 25px auto;
    border: 2px solid ${themeColor};
    max-width: 7em;  
  }
  
  li {
    letter-spacing: 0.0625em;
    line-height: 1.7em;
    font-size: 17px;
  }
  
  p {
    letter-spacing: 0.0625em;
    line-height: 1.5em;
    font-size: 20px;
  }
  
  .active {
    text-decoration: underline;
  }
`