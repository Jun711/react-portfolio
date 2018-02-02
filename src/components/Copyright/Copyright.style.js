import styled from 'styled-components';
import { Div, Flex } from '../../theme/grid';
import { charcoal, green, white } from '../../theme/colors';
import { media, mediaBeyond } from '../../theme/media';

export const CopyrightLine = styled(Div)`
  opacity: 0;
  color: ${white};
  font-size: 1em;
  font-weight: 100;  
  margin: 0 auto;
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

export const Container = styled(Flex)`
  right: 0;
  left: 0;
  bottom: 0;
  height: 1.5em;
  background-color: ${charcoal};
  align-content: center;
  align-items: center;
`;