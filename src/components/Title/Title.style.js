import styled, { css } from 'styled-components';
import { Flex } from '../../theme/grid';
import { green, white } from '../../theme/colors';
import { media, mediaBeyond } from '../../theme/media';

export const TitleContainer = styled(Flex)`
  span {
    padding: 0 7px;
    i:last-child {
      color: ${white};
    }
  }
  opacity: 0;   
  ${({trigger}) => trigger && css`
    opacity: 1;
    transition: opacity 0.3s;
  `}
  
  ${mediaBeyond.tablet`
    flex-direction: row;
    &:hover {
      span {
        i:last-child {
          color: ${green};
        }
      }
    }
  `}
  ${media.tablet`
    flex-direction: column;
    h2 {
      margin-top: 0;
    }
    &:active {
      span {
        i:last-child {
          color: ${green};
        }
      }
    }
  `}  
  
`;