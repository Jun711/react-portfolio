import styled from 'styled-components';
import { white } from '../../theme/variables';
import { media } from '../../theme/media';

export const ScrollUpButtonContainer = styled.div`
  display: none;
  ${media.tablet`
    display: block;
    color: ${white};
    position: fixed;
    bottom: 25px;
    right: 25px;
    opacity: 1;
    z-index: 100;
    text-align: center;
    transition: transform 0.7s ease-in-out, opacity 1s linear;
  `}
`;
