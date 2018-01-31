import styled, { css } from 'styled-components';
import { Div, Flex } from '../../theme/grid';
import { white, midThemeColor, themeColor, lightThemeColor, green } from '../../theme/variables';
import { media } from '../../theme/media';

export const SwissBurgerHeader = styled(Flex)`
  display: none;
  ${media.tablet`
    display: flex;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    height: 3em;;
    z-index: 99;
    background-color: ${themeColor}; 
  `}
`;

export const SwissBurgerBun = styled(Div)`
  ${media.tablet`
    border: 1px solid ${lightThemeColor};
    padding: 0 2px;
    border-radius: 20%;
    margin-right: 40px;
    display: block;
    cursor: pointer;
    ${({bun}) => bun && css`
      background-color: ${midThemeColor};
      border-color: ${green};
    `}
  `}
`;

export const BurgerSlice = styled(Div)`
    ${media.tablet`
      width: 35px;
      height: 5px;
      background-color: ${white};
      margin: 6px 0;
      transition: 0.4s ease-in-out;
      // &:hover {
      //   background-color: ${green}
      // }
      // &:active {
      //   // color: ${green}
      //   background-color: ${green}
      // }
      
      ${({bar1}) => bar1 && css`
        background-color: ${green};
        -webkit-transform: rotate(-45deg) translate(-9px, 6px);
        transform: rotate(-45deg) translate(-9px, 6px);
      `}
    
      ${({bar2}) => bar2 && css`
        opacity: 0;
      `}
    
      ${({bar3}) => bar3 && css`
        background-color: ${green};
        -webkit-transform: rotate(45deg) translate(-8px, -8px);
        transform: rotate(45deg) translate(-8px, -8px);
      `} 
    `}  
    
  
`;