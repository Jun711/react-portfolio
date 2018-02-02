import styled from 'styled-components';
import { Flex } from '../../theme/grid';
import { green, white } from '../../theme/colors';
import { media, mediaBeyond } from '../../theme/media';
import { Link } from 'react-scroll';

export const NameContainer = styled(Flex)`
  max-height: 3.5em;
  ${media.tablet`
    max-height: 3em;
  `}
  
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none; 
  cursor: pointer;
`;

export const NameLink = styled(Link)`
  padding-left: 40px;
  font-size: 24px;
  line-height: 24px;
  color: ${white}; 
  
  &:last-of-type:before {
    font-family: FontAwesome;
    content:'\\f25b';
    position: absolute;
    opacity: 0;
    vertical-align: middle;
    left: -30px;
    transition: all 200ms ease;
  }
  &:hover {
    color: ${green}; 
    &:last-of-type:before {
      left: 10px;
      opacity: 1;
    }
  }
  // ${mediaBeyond.tablet`
  //   &:hover {
  //     color: ${green}; 
  //     &:last-of-type:before {
  //       left: 10px;
  //       opacity: 1;
  //     }
  //   }
  // `}
  // ${media.tablet`
  //   &:active {
  //     color: ${green}; 
  //     &:last-of-type:before {
  //       left: 10px;
  //       opacity: 1;
  //     }
  //   }  
  // `}
`