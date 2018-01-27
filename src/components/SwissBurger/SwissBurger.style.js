import styled from 'styled-components';
import { Flex, Div } from '../../theme/grid';
import { blue, yellow, red, THEME_COLOR, LIGHT_THEME_COLOR, DARK_THEME_COLOR } from '../../theme/variables';
import { Link } from 'react-router';
import { media } from '../../theme/media';
import { css } from 'styled-components';

export const SwissBurgerHeader = styled(Flex)`
  display: none;
  ${media.tablet`
    display: flex;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    height: 7vh;
    z-index: 99;
    background-color: ${THEME_COLOR}; 
  `}
`;

export const SwissBurgerBun = styled(Div)`
  ${media.tablet`
    margin-right: 40px;
    display: block;
    cursor: pointer;
  `}
`;

export const BurgerSlice = styled(Div)`
    ${media.tablet`
      width: 35px;
      height: 5px;
      background-color: ${LIGHT_THEME_COLOR};
      margin: 6px 0;
      transition: 0.4s;
      &:hover {
        background-color: ${DARK_THEME_COLOR}
      }
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