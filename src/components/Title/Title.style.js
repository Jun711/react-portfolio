import styled from 'styled-components';
import { Div } from '../../theme/grid';
import { green } from '../../theme/colors';
import { media, mediaBeyond } from '../../theme/media';

export const TitleContainer = styled(Div)`
  span {
    padding: 0 7px;
  }
  ${mediaBeyond.tablet`
    &:hover {
      span {
        i:last-child {
          color: ${green};
        }
      }
    }
  `}
  ${media.tablet`
    &:active {
      span {
        i:last-child {
          color: ${green};
        }
      }
    }
  `}  
`;