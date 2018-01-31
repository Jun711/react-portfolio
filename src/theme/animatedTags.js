import { green, themeColor } from './variables';
import styled from 'styled-components';

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
    bottom: -5px;
    left: 0;
    background: ${green};
    // transform-origin: 0%;
    transform: scaleX(0);
    transition: transform 0.3s ease-out;
  }
  
   &:hover { 
      span:after {
        transform: scaleX(1);
        transition: transform 0.3s ease-out;   
      } 
      
      i {
        color: ${green}
      } 
    }
`;