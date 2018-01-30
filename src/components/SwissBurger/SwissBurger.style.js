import styled, { css } from 'styled-components';
import { Div, Flex } from '../../theme/grid';
import { black, lightThemeColor, midThemeColor, themeColor } from '../../theme/variables';
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
    border: 1px solid ${black};
    padding: 0 2px;
    border-radius: 20%;
    margin-right: 40px;
    display: block;
    cursor: pointer;
    &:hover {
      background-color: ${midThemeColor}
    }
    
  `}
`;

export const BurgerSlice = styled(Div)`
    ${media.tablet`
      width: 35px;
      height: 5px;
      background-color: ${lightThemeColor};
      margin: 6px 0;
      transition: 0.4s;
      
    `}  
    
    ${({bar1}) => bar1 && css`
      -webkit-transform: rotate(-45deg) translate(-9px, 6px);
      transform: rotate(-45deg) translate(-9px, 6px);
    `}
    
    ${({bar2}) => bar2 && css`
      opacity: 0;
    `}
    
    ${({bar3}) => bar3 && css`
      -webkit-transform: rotate(45deg) translate(-8px, -8px);
      transform: rotate(45deg) translate(-8px, -8px);
    `} 
`;