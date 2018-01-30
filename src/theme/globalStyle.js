import { injectGlobal } from 'styled-components';
import { THEME_COLOR, charcoal } from "./variables";

/* eslint-disabled */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    font-color: ${charcoal};
    height: 100%;
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
    border: 2px solid ${THEME_COLOR};
    max-width: 14em;  
  }
  
  h3 + hr {
    margin: 25px auto;
    border: 2px solid ${THEME_COLOR};
    max-width: 7em;  
  }
  
  li {
    letter-spacing: 0.0625em;
    line-height: 1.5em;
    font-size: 16px;
  }
  
  .active {
    text-decoration: underline;
  }
`