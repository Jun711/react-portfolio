import { injectGlobal } from 'styled-components';
import { THEME_COLOR } from "./variables";

/* eslint-disabled */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Indie+Flower');

  body {
    margin: 0;
    font-family: 'Indie Flower', cursive;
    font-size: 24px;
  }
  
  h1, h2, h3 {
    text-align: center;
  }
  
  hr {
    border: 2px solid ${THEME_COLOR};
    max-width: 14em;  
  }
  
  h3 + hr {
    border: 2px solid ${THEME_COLOR};
    max-width: 7em;  
  }
`