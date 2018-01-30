import styled from 'styled-components';
import { Flex } from '../../theme/grid';
import { blue, green, themeColor, white } from '../../theme/variables';
import { Link } from 'react-scroll';
import { media } from '../../theme/media';

export const NavigationContainer = styled(Flex)`
  background-color: ${blue};
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  height: 3.5em;
  z-index: 99;    
  background-color: ${themeColor};
 
  ${media.tablet`
    display: none;
  `}
`;

export const NavItem = styled(Link)`
  margin-right: 20px;
  
  font-size: 1em;
  line-height: 1em;
  cursor: pointer;
  color: ${white};  
  
  position: relative;
  
  text-decoration: none;
 
  &:hover {
    color: ${green};
  }
`;

export const NavItemA = styled.a`
  margin-right: 20px;
  &:last-of-type {
    padding-right: 30px;
  }
  font-size: 1em;
  line-height: 1em;
  cursor: pointer;
  color: ${white};
  position: relative;
  text-decoration: none;
  &:last-of-type:before {
    font-family: FontAwesome;
    content:'\\f08b';
    position: absolute;
    opacity: 0;
    vertical-align: middle;
    right: -30px;
    transition: all 200ms ease;
  }
  &:hover {
    color: ${green};
    &:last-of-type:before {
      right: 1px;
      opacity: 1;
    }
  }
`;