import styled from 'styled-components';
import { green } from '../../theme/colors';
import { media, mediaBeyond } from '../../theme/media';

export const FontAwSpan = styled.span`  
  ${mediaBeyond.tablet`
    &:hover {
      i:last-child {
        color: ${green};
      }
    }
  `}
  ${media.tablet`
    &:active {
      i:last-child {
        color: ${green};
      }
    }
  `}  
`;
