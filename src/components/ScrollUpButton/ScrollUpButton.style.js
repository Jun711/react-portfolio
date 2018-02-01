import styled from 'styled-components';
import { media } from '../../theme/media';

export const ScrollUpButtonContainer = styled.div`
  display: none;
  ${media.tablet`
    display: block;
    position: fixed;
    font-size: 24px;
    bottom: 25px;
    right: 25px;
    opacity: 1;
    z-index: 99;
    text-align: center;
    
    i:last-child {
      transition: transform 0.7s ease-in-out, opacity 1s linear;
      
      &:active {
         transform: translateY(-10%);
      }
    }
  `}
`;
