import { green, themeColor } from './colors';
import styled from 'styled-components';
import { media, mediaBeyond } from './media';

export const UnderlineA = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${themeColor};
  
  span {
    position: relative;
    display: inline-block;
    
    i {
      padding: 0 5px;
    }
  }
  
  span:after {
    position: absolute;
    content: '';
    height: 2px;
    width: 100%;
    bottom: 0px;
    left: 0;
    background: ${green};
    // transform-origin: 0%;
    transform: scaleX(0);
    transition: transform 0.3s ease-out;
  }
  ${mediaBeyond.tablet`
    &:hover { 
      span:after {
        transform: scaleX(1);
        transition: transform 0.3s ease-out;   
      } 
      
      i {
        color: ${green}
      } 
    }
  `}
  ${media.tablet`
    &:active { 
      span:after {
        transform: scaleX(1);
        transition: transform 0.3s ease-out;   
      } 
      
      i {
        color: ${green}
      } 
     }
  `}
`;