import styled from 'styled-components';
import { Flex, Div } from '../../theme/grid';
import { blue, yellow, white, red, THEME_COLOR } from '../../theme/variables';
import { Link } from 'react-router';
import { media } from '../../theme/media';

export const NavigationContainer = styled(Flex)`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  height: 10vh;
  z-index: 99;    
  background-color: ${THEME_COLOR};
  ${media.tablet`
    display: none;
  `}
`;

export const NavItem = styled(Link)`
  margin-right: 20px;
  
  font-size: 1.3em;
  cursor: pointer;
  color: ${white};  
  
  position: relative;
  line-height: 1.3em;
  text-decoration: none;
 
  &:hover {
    color: ${blue};
    &:before {
      left: 1px;
      opacity: 1;
    }
    &:after {
      content: ' ';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: ${white};
      z-index: -1; 
      transform: scale(1.2, 1.7);
    }
  }
`;

export const NavItemA = styled.a`
  margin-right: 20px;
  &:last-of-type {
    padding-right: 30px;
  }
  font-size: 1.3em;
  background-color: ${red};
  cursor: pointer;
  color: ${white};
  position: relative;
  text-decoration: none;
  &:last-of-type:before {
    font-family: FontAwesome;
    content:'\\f09e';
    position: absolute;
    opacity: 0;
    top: 5px;
    vertical-align: middle;
    right: -30px;
    transition: all 200ms ease;
  }
  &:hover {
    color: ${blue};
    &:last-of-type:before {
      right: 1px;
      opacity: 1;
    }
    &:after {
      content: ' ';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: ${white};
      z-index: -1; 
      transform: scale(1.2, 1.7);
    }
  }
`;