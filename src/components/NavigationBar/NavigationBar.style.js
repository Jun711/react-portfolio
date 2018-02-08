import styled from 'styled-components';
import { Flex } from '../../theme/grid';
import { blue, green, themeColor, white } from '../../theme/colors';
import { Link } from 'react-scroll';
import { media, mediaBeyond } from '../../theme/media';

export const NavigationContainer = styled(Flex)`
  background-color: ${blue};
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  height: ${({shrink}) => shrink ? `60px` : `84px`};
  z-index: 99;    
  background-color: ${themeColor};
  transition: height 0.3s ease-in-out;

  ${media.tablet`
    display: none;
  `}
`;

export const NavItem = styled(Link)`
  margin-right: 20px;
  font-size: 24px;
  line-height: 24px;
  cursor: pointer;
  color: ${white};  
  position: relative;
  text-decoration: none;
  
  ${mediaBeyond.tablet`
    &:hover {
      color: ${green};
    }
  `}
  ${media.tablet`
    &:active {
      color: ${green};
    }
  `}
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
  ${mediaBeyond.tablet`
    &:hover {
      color: ${green};
      &:last-of-type:before {
        right: 1px;
        opacity: 1;
      }
    }
  `}
  ${media.tablet`
    &:active {
      color: ${green};
      &:last-of-type:before {
        right: 1px;
        opacity: 1;
      }
    }
  `}
`;