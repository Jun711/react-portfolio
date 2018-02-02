import { injectGlobal } from 'styled-components';
import { themeColor, green } from "./colors";

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
    padding: 5px 0;
  }
  
  h1 {
    font-weight: 700;
  }
  
  h2 {
    font-weight: 600;
    position: relative;
    display: inline-block;
  }
  
  h2,h4 {
    &:after {
      position: absolute;
      content: '';
      height: 4px;
      width: 100%;
      bottom: -11px;
      left: 0;
      background: ${themeColor};
      transition: width 0.3s linear; 
    }
  } 
  
  h3 {
    font-weight: 500;
  }
  
  h4 {
    position: relative;
    display: inline-block;
    font-weight: 400;
    text-align: center;
  }
  
  li, a {
    letter-spacing: 0.09em;
    line-height: 2em;
    font-size: 17px;
  }
  
  p {
    letter-spacing: 0.0625em;
    line-height: 1.5em;
    font-size: 20px;
  }
  
  .active {
    text-decoration: underline;
    // color: ${green};
  }
  
  img {
    object-fit: cover;
  }
`