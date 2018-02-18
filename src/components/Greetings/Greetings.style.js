import styled, { css } from 'styled-components'
import { FixedWidthContainer, Wrapper } from '../../theme/grid';
import { swing } from '../../theme/doSwing';
import { media, mediaBeyond } from '../../theme/media';

export const GreetingWrapper = styled(Wrapper)`
  margin: 0;
  h4:after {
    display: none;
  }
  transition: width 0.3s ease-in-out;
  
  ${({doSwing}) => doSwing && css`
    ${mediaBeyond.tablet`
      h4:hover {
        animation: ${swing} 0.3s ease-out;
      }
    `}
    ${media.tablet`
      h4:active {
        animation: ${swing} 0.3s ease-out;
      }
    `}
  `}
`;

export const GreetingContainer = styled(FixedWidthContainer)``;