import styled from 'styled-components';
import { Flex } from '../../theme/grid';
import { green, white } from '../../theme/variables';
import { media } from '../../theme/media';

export const NameContainer = styled(Flex)`
  max-height: 3.5em;
  ${media.tablet`
    max-height: 3em;
  `}
  h3 {
    padding-left: 40px;
    font-size: 1em;
    line-height: 1em;
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
  }
`;